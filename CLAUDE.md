# 萬印堂 ボードゲーム印刷 見積もりツール — 開発ガイド

## プロジェクト概要

萬印堂（https://www.mnd.co.jp/）の価格表に基づいたボードゲーム印刷費用の見積もりページ。
ユーザーが商品・仕様・数量を選ぶと即座に金額が計算でき、URLで見積もりを共有できる。

## ファイル構成

```
src/
├── CLAUDE.md         ← このファイル
├── SPEC.md           ← 要件定義
├── index.html        ← メインページ（Vueテンプレート含む）
├── css/
│   └── style.css     ← スタイル（CSSカスタムプロパティ使用）
└── js/
    ├── prices.js     ← 全商品の価格データ（ESモジュール）
    └── app.js        ← Vue 3 アプリ本体（ESモジュール）
```

## 動かし方

ビルドツール不要。`index.html` をブラウザで直接開くだけで動作する。
Vue 3 は CDN（unpkg.com）から読み込む。

```bash
# ローカルサーバーが必要（ESモジュールのCORSのため）
npx serve .
# または VS Code の Live Server 拡張機能を使用
```

> ファイルを直接 `file://` で開くと ES モジュールの CORS エラーが出る。
> 必ずローカルサーバー経由で開くこと。

## 技術スタック

| 技術 | 理由 |
|------|------|
| Vue 3 (CDN) | npmなし・ビルドなしで動くため。unpkg経由でESM版を使用 |
| Options API | テンプレートが読みやすく、Claude Codeで編集しやすいため |
| DOM内テンプレート | index.htmlのdiv#app内にそのまま書く。コンパイル済み不要 |
| Vanilla CSS | 外部ライブラリ依存なし。CSSカスタムプロパティでテーマ管理 |

## Vue アプリの構造

### データフロー

```
prices.js (PRODUCTS)
    ↓ import
app.js (App)
    ↓ createApp(App)
index.html (#app テンプレート)
```

### App の data

```js
{
  products: PRODUCTS,  // prices.js からの全商品定義
  finishes: [...],     // 加工の選択肢（全商品共通）
  form: {
    product: 'card',   // 選択中の商品ID
    specs:   {}        // 商品ごとのスペック値（select/number/checkbox/finish）
  },
  items: [],           // 見積もりアイテムの配列
  copied: false        // URLコピー完了フラグ
}
```

### アイテムオブジェクトの構造

```js
{
  id:          number,    // Date.now() + random（ユニークID）
  productId:   string,    // 'card' | 'chip' | 'board' | ...
  productName: string,    // 表示用名称
  specs:       object,    // form.specs のスナップショット
  price: {
    baseFee:   number,    // 基本料（税抜）
    unitPrice: number,    // 1単位あたりの価格（税抜）
    addons: [{ label, amount }],  // 追加費用（丁合・折りなど）
    total:     number,    // 合計（税抜）
  },
  specLines:   string[],  // 表示用スペック行
  formula:     string,    // 「基本料 ¥20,000 + 100枚 × ¥8」形式の計算式
}
```

### 商品切り替え時の動作

`watch: 'form.product'` → `defaultSpecs(product)` でフォームをリセット。
各フィールドのデフォルト値:
- `select`: `field.default` または最初のオプション
- `number`: `field.default` → `field.min` → 1
- `checkbox`: `false`
- `finish`: `'standard'`

## 商品定義（prices.js）

### PRODUCTS の構造

```js
export const PRODUCTS = {
  [productId]: {
    id:     string,   // 'card', 'chip', 'board', ...
    name:   string,   // 表示名
    unit:   string,   // '枚', '個', '部'
    fields: [...],    // フォームフィールド定義
    baseFees: { standard, gloss, matte, emboss },  // 基本料（finish別）
    unitPrices: { ... },  // 単価テーブル（商品により構造が異なる）
    calculate(specs): { baseFee, unitPrice, addons, total }
  }
}
```

### フォームフィールドの型

| type       | 用途 | v-model のバインド先 |
|------------|------|---------------------|
| `select`   | ドロップダウン | `form.specs[field.id]` |
| `number`   | 数値入力 | `form.specs[field.id]`（`.number`修飾子） |
| `checkbox` | チェックボックス | `form.specs[field.id]` |
| `finish`   | 加工選択（ボタン群） | `form.specs[field.id]` |

条件付き表示: `dependsOn: { field: 'bindType', value: 'saddle' }` を設定すると
その条件が一致するときだけフィールドを表示する。

### 新しい商品を追加する方法

1. `js/prices.js` の `PRODUCTS` に追加（既存商品を参考に）
2. `calculate(specs)` で `{ baseFee, unitPrice, addons: [], total }` を返す
3. `index.html` のテンプレートは自動的に対応（v-for でフィールドを動的描画）

## URL パラメータ（状態共有）

URLSearchParams の `data` キーに JSON を保存する。

```js
// 保存 (app.js の syncUrl メソッド)
const state = items.map(i => ({ p: i.productId, s: i.specs }));
url.searchParams.set('data', JSON.stringify(state));
history.replaceState(null, '', url.toString());

// 復元 (app.js の loadUrl メソッド)
const raw = new URLSearchParams(location.search).get('data');
const state = JSON.parse(raw);
// → buildItem(p, s) で各アイテムを再構築
```

URLSearchParams が自動的に percent-encode/decode するため、手動エンコードは不要。

## スタイリング

### CSS カスタムプロパティ（style.css の `:root`）

```css
--c-primary     /* メインカラー: blue-600 */
--c-bg          /* ページ背景: スレートグレー */
--c-surface     /* カード背景: 白 */
--c-border      /* ボーダー: ライトグレー */
--c-text        /* 本文テキスト */
--c-muted       /* 補助テキスト */
```

### レイアウト

- `720px` 未満: 1カラム（フォーム → 一覧の順）
- `720px` 以上: 2カラム（左: フォーム / 右: 一覧）
- `grid-template-columns: 1fr 1fr` で等分

### コンポーネントクラス

| クラス | 用途 |
|--------|------|
| `.card` | 白いカードコンテナ |
| `.product-chip` | 商品選択ピル型ボタン |
| `.finish-btn` | 加工選択ボタン（`.is-active` で選択中） |
| `.btn-primary` | メインアクションボタン |
| `.btn-danger` | 削除ボタン |
| `.price-preview` | 価格プレビューボックス |

## 価格データの正確性について

`js/prices.js` の単価はすべて **税抜き参考値** です。

### 確認済みの値
- タックトップ箱 ポーカー深さ25mm グロスPP = **¥120/個**
  （公式例: 100個 × ¥120 + 基本料¥20,000 = ¥32,000 → 税込¥35,200）
- ゲームボード A3 片面: **¥267〜¥327**、A3 両面: **¥322〜¥382**
- カード標準: **¥6〜¥20/枚**（サイズにより変動）

### 未確認の値（要検証）
- カード個別サイズの単価（ミニ〜正方形Lの全組み合わせ）
- ゲームチップの個別サイズ単価
- ディスプレイ箱の全サイズ単価
- ゲームボードの A3 以外のサイズ

### 価格更新の手順

1. https://www.mnd.co.jp/pricelists/ を確認
2. `js/prices.js` の該当商品の `unitPrices` / `baseFees` を更新
3. `calculate()` のロジックは変えない（価格データのみ更新）

## よくある変更パターン

### 新しいカードサイズを追加

```js
// js/prices.js の card.fields[0].options に追加
{ id: 'new_size', label: '新サイズ (XX×YYmm)' }

// card.unitPrices に単価を追加
new_size: { standard: 10, gloss: 12, matte: 14, emboss: 14 },
```

### 説明書の価格を更新

```js
// js/prices.js の manual を編集
flatUnitPrices:  { b5: 60, a4: 70, ... },  // フラット単価
saddleBaseFees:  { b5: 10000, ... },         // 中綴じ基本料
saddlePagePrice: 15,                          // 中綴じ1ページあたり
```

### 消費税率を変更

`index.html` の `Math.ceil(grandTotal * 1.1)` の `1.1` を変更する。
