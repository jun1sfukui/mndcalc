import { PRODUCTS } from './prices.js';

const FINISHES = [
  { id: 'standard', name: '標準' },
  { id: 'gloss',    name: 'グロスPP' },
  { id: 'matte',    name: 'マットPP' },
  { id: 'emboss',   name: 'エンボス' },
];

const FINISH_NAMES = Object.fromEntries(FINISHES.map(f => [f.id, f.name]));

// フィールドの表示条件を確認する（dependsOn.value は文字列または文字列配列）
function isVisible(field, specs) {
  if (!field.dependsOn) return true;
  const val = specs[field.dependsOn.field];
  return Array.isArray(field.dependsOn.value)
    ? field.dependsOn.value.includes(val)
    : val === field.dependsOn.value;
}

// 見積もりアイテムのスペック説明行を生成する
function buildSpecLines(product, specs) {
  return product.fields.flatMap(field => {
    if (!isVisible(field, specs)) return [];
    if (field.id === 'quantity') return []; // 数量行は呼び出し側で別途生成
    const val = specs[field.id];
    if (val === undefined || val === null) return [];

    if (field.type === 'select') {
      const opt = field.options?.find(o => o.id === val);
      return opt ? [`${field.label}: ${opt.label}`] : [];
    }
    if (field.type === 'finish') {
      return [`加工: ${FINISH_NAMES[val] ?? val}`];
    }
    if (field.type === 'number') {
      if (val > 0) return [`${field.label}: ${val}`];
      return [];
    }
    if (field.type === 'checkbox') {
      return val ? [`${field.label}: あり`] : [];
    }
    return [];
  });
}

// 価格計算式の文字列を生成する
function buildFormula(product, effectiveSpecs, price) {
  const q = effectiveSpecs.quantity || 1;
  const f = n => n.toLocaleString('ja-JP');
  const parts = [];
  if (price.baseFee > 0) parts.push(`基本料 ¥${f(price.baseFee)}`);
  parts.push(`${q}${product.unit} × ¥${f(price.unitPrice)}`);
  price.addons?.forEach(a => {
    if (a.amount > 0) parts.push(`${a.label} ¥${f(a.amount)}`);
  });
  return parts.join(' + ');
}

// 商品のデフォルトスペックを生成する
function defaultSpecs(product) {
  const specs = {};
  product.fields.forEach(field => {
    if      (field.type === 'finish')   specs[field.id] = 'standard';
    else if (field.type === 'select')   specs[field.id] = field.default ?? field.options?.[0]?.id ?? '';
    else if (field.type === 'number')   specs[field.id] = field.default ?? field.min ?? 1;
    else if (field.type === 'checkbox') specs[field.id] = field.default ?? false;
  });
  specs.quantityMode = 'per_game'; // デフォルトは「1ゲームあたり」
  return specs;
}

export const App = {
  data() {
    return {
      products: PRODUCTS,
      finishes:  FINISHES,
      gameCount: 50,          // 製造するゲームの個数（全体共通）
      form: {
        product: Object.keys(PRODUCTS)[0],
        specs:   {},
      },
      items:  [],   // { id, productId, rawSpecs, quantityMode } の配列
      copied: false,
    };
  },

  computed: {
    currentProduct() {
      return PRODUCTS[this.form.product];
    },
    currentFields() {
      return this.currentProduct?.fields ?? [];
    },

    // フォーム上の有効な製造個数（モードとゲーム個数を反映）
    effectiveFormQty() {
      const qty = Math.max(1, this.form.specs.quantity || 1);
      return this.form.specs.quantityMode === 'per_game'
        ? qty * Math.max(1, this.gameCount || 1)
        : qty;
    },

    currentPrice() {
      const p = this.currentProduct;
      if (!p) return null;
      try {
        return p.calculate({ ...this.form.specs, quantity: this.effectiveFormQty });
      } catch { return null; }
    },

    priceFormula() {
      if (!this.currentPrice || !this.currentProduct) return '';
      return buildFormula(this.currentProduct, { ...this.form.specs, quantity: this.effectiveFormQty }, this.currentPrice);
    },

    // ゲーム個数を反映した表示用アイテム一覧
    processedItems() {
      return this.items.map(item => {
        const product = PRODUCTS[item.productId];
        if (!product) return null;

        const perGameQty = Math.max(1, item.rawSpecs.quantity || 1);
        const effectiveQty = item.quantityMode === 'per_game'
          ? perGameQty * Math.max(1, this.gameCount || 1)
          : perGameQty;
        const effectiveSpecs = { ...item.rawSpecs, quantity: effectiveQty };

        const price     = product.calculate(effectiveSpecs);
        const formula   = buildFormula(product, effectiveSpecs, price);

        // 数量行をモードに応じて生成
        const qtyLine = item.quantityMode === 'per_game'
          ? `数量: ${perGameQty}${product.unit}/ゲーム × ${this.gameCount || 1}セット = ${effectiveQty}${product.unit}`
          : `数量: ${effectiveQty}${product.unit}`;
        const specLines = [...buildSpecLines(product, item.rawSpecs), qtyLine];

        return {
          id:          item.id,
          productId:   item.productId,
          productName: product.name,
          quantityMode: item.quantityMode,
          rawSpecs:    item.rawSpecs,
          price,
          specLines,
          formula,
        };
      }).filter(Boolean);
    },

    grandTotal() {
      return this.processedItems.reduce((s, i) => s + i.price.total, 0);
    },
  },

  watch: {
    'form.product'(newVal) {
      const product = PRODUCTS[newVal];
      if (product) this.form.specs = defaultSpecs(product);
    },
    items: {
      deep: true,
      handler() { this.syncUrl(); },
    },
    gameCount() { this.syncUrl(); },
  },

  mounted() {
    const product = PRODUCTS[this.form.product];
    if (product) this.form.specs = defaultSpecs(product);
    this.loadUrl();
  },

  methods: {
    selectProduct(key) {
      this.form.product = key;
    },

    isFieldVisible(field) {
      return isVisible(field, this.form.specs);
    },

    addItem() {
      const qty = this.form.specs.quantity;
      if (!(qty > 0)) return;
      const quantityMode = this.form.specs.quantityMode ?? 'per_game';
      this.items.push({
        id:           Date.now() + Math.random(),
        productId:    this.form.product,
        rawSpecs:     { ...this.form.specs },
        quantityMode,
      });
    },

    removeItem(id) {
      const i = this.items.findIndex(x => x.id === id);
      if (i >= 0) this.items.splice(i, 1);
    },

    syncUrl() {
      const state = {
        g:     this.gameCount,
        items: this.items.map(i => ({ p: i.productId, s: i.rawSpecs, m: i.quantityMode })),
      };
      const url = new URL(location.href);
      if (this.items.length > 0 || this.gameCount !== 50) {
        url.searchParams.set('data', JSON.stringify(state));
      } else {
        url.searchParams.delete('data');
      }
      history.replaceState(null, '', url.toString());
    },

    loadUrl() {
      const params = new URLSearchParams(location.search);
      const raw    = params.get('data');
      if (!raw) return;
      try {
        const state = JSON.parse(raw);
        // 旧フォーマット互換: [{ p, s }] 配列
        if (Array.isArray(state)) {
          this.items = state
            .filter(({ p }) => PRODUCTS[p])
            .map(({ p, s }) => ({
              id: Date.now() + Math.random(),
              productId: p,
              rawSpecs: s,
              quantityMode: 'total',
            }));
        } else {
          if (state.g > 0) this.gameCount = state.g;
          this.items = (state.items ?? [])
            .filter(({ p }) => PRODUCTS[p])
            .map(({ p, s, m }) => ({
              id: Date.now() + Math.random(),
              productId: p,
              rawSpecs: s,
              quantityMode: m ?? 'total',
            }));
        }
      } catch (e) {
        console.warn('URL state parse error:', e);
      }
    },

    async copyUrl() {
      this.syncUrl();
      const urlStr = location.href;
      try {
        await navigator.clipboard.writeText(urlStr);
        this.copied = true;
        setTimeout(() => { this.copied = false; }, 2000);
      } catch {
        prompt('URLをコピーしてください:', urlStr);
      }
    },

    fmt(n) {
      return Math.ceil(n).toLocaleString('ja-JP');
    },
  },
};
