// 萬印堂（mnd.co.jp）ボードゲーム印刷 価格データ
// 価格は税抜きです。最新価格は https://www.mnd.co.jp/pricelists/ でご確認ください。
// サイズ名称は価格表ページの表記に準拠しています。
// ※ 確認済みの単価はコメントで明記。その他は公式情報に基づく推定値です。

export const PRODUCTS = {

  // ─────────────────────────────────────────
  // カード
  // https://www.mnd.co.jp/pricelists/cards/
  // ─────────────────────────────────────────
  card: {
    id: 'card',
    name: 'カード',
    unit: '枚',
    fields: [
      {
        id: 'size', label: 'サイズ', type: 'select',
        options: [
          { id: 'small_a',   label: '小型A (36×50mm)' },
          { id: 'small_b',   label: '小型B (50×60mm)' },
          { id: 'small_c',   label: '小型C (53×66mm)' },
          { id: 'half',      label: 'ハーフ (44×63mm)' },
          { id: 'small_d',   label: '小型D (43×80mm)' },
          { id: 'credit',    label: 'クレジット (54×85.6mm)' },
          { id: 'yugioh',    label: '遊戯王サイズ (59×86mm)' },
          { id: 'bridge',    label: 'ブリッジ (58×89mm)' },
          { id: 'meishi',    label: '名刺サイズ (55×91mm)' },
          { id: 'poker',     label: 'ポーカー (63×88mm)' },
          { id: 'tarot_c',   label: 'タロットC (57×100mm)' },
          { id: 'tarot_e',   label: 'タロットE (61×112mm)' },
          { id: 'tarot_a',   label: 'タロットA (65×115mm)' },
          { id: 'tarot_d',   label: 'タロットD (73×105mm)' },
          { id: 'tarot_j',   label: 'タロットJ (70×120mm)' },
          { id: 'tarot_b',   label: 'タロットB (79×120mm)' },
          { id: 'tarot_f',   label: 'タロットF (70×170mm)' },
          { id: 'a6',        label: 'A6サイズ (105×148mm)' },
          { id: 'sq63',      label: '正方形サイズ63 (63×63mm)' },
          { id: 'sq70',      label: '正方形サイズ70 (70×70mm)' },
          { id: 'sq95',      label: '正方形サイズ95 (95×95mm)' },
          { id: 'circle70',  label: '円形サイズ70 (直径70mm)' },
          { id: 'circle90',  label: '円形サイズ90 (直径90mm)' },
        ]
      },
      {
        id: 'thickness', label: '厚さ', type: 'select',
        options: [
          { id: 'std',   label: '標準厚 (0.27mm厚)' },
          { id: 'thick', label: '厚口 (0.33mm厚)' },
          { id: 'extra', label: '特厚口 (0.38mm厚)' },
        ]
      },
      { id: 'finish', label: '加工', type: 'finish' },
      { id: 'quantity', label: '枚数', type: 'number', min: 1, default: 100 },
      {
        id: 'collation', label: '丁合（順番指定）', type: 'checkbox',
        description: '印刷物に順番を付けて出力します (+¥1/枚)'
      },
      {
        id: 'bundleSplit', label: 'セット分け（束数）', type: 'number',
        min: 0, default: 0,
        description: '指定数の束に分けて出荷 (+¥10/束)。不要なら 0'
      }
    ],
    baseFees: { standard: 20000, gloss: 25000, matte: 30000, emboss: 38000 },
    // 確認済み単価: ポーカー 標準10円・光沢PP12円・マットPP13円・エンボス13円
    unitPrices: {
      small_a:  { standard: 6,  gloss: 8,  matte: 10, emboss: 10 },
      small_b:  { standard: 6,  gloss: 8,  matte: 10, emboss: 10 },
      small_c:  { standard: 7,  gloss: 9,  matte: 11, emboss: 11 },
      half:     { standard: 7,  gloss: 9,  matte: 11, emboss: 11 },
      small_d:  { standard: 7,  gloss: 9,  matte: 11, emboss: 11 },
      credit:   { standard: 8,  gloss: 10, matte: 12, emboss: 12 },
      yugioh:   { standard: 8,  gloss: 10, matte: 12, emboss: 12 },
      bridge:   { standard: 8,  gloss: 10, matte: 12, emboss: 12 },
      meishi:   { standard: 8,  gloss: 10, matte: 12, emboss: 12 },
      poker:    { standard: 10, gloss: 12, matte: 13, emboss: 13 }, // 確認済み
      tarot_c:  { standard: 11, gloss: 13, matte: 14, emboss: 14 },
      tarot_e:  { standard: 12, gloss: 14, matte: 15, emboss: 15 },
      tarot_a:  { standard: 13, gloss: 15, matte: 16, emboss: 16 },
      tarot_d:  { standard: 13, gloss: 15, matte: 16, emboss: 16 },
      tarot_j:  { standard: 14, gloss: 16, matte: 17, emboss: 17 },
      tarot_b:  { standard: 15, gloss: 17, matte: 18, emboss: 18 },
      tarot_f:  { standard: 18, gloss: 20, matte: 22, emboss: 22 },
      a6:       { standard: 20, gloss: 22, matte: 25, emboss: 25 },
      sq63:     { standard: 9,  gloss: 11, matte: 13, emboss: 13 },
      sq70:     { standard: 11, gloss: 13, matte: 15, emboss: 15 },
      sq95:     { standard: 16, gloss: 18, matte: 20, emboss: 20 },
      circle70: { standard: 11, gloss: 13, matte: 15, emboss: 15 },
      circle90: { standard: 16, gloss: 18, matte: 20, emboss: 20 },
    },
    thicknessExtra: { std: 0, thick: 2, extra: 4 },
    calculate(specs) {
      const q         = Math.max(1, specs.quantity || 1);
      const baseFee   = this.baseFees[specs.finish] ?? 0;
      const sizeP     = this.unitPrices[specs.size]?.[specs.finish] ?? 0;
      const thickP    = this.thicknessExtra[specs.thickness] ?? 0;
      const unitPrice = sizeP + thickP;
      const collCost  = specs.collation ? q : 0;
      const splitCost = (specs.bundleSplit || 0) * 10;
      const addons = [];
      if (collCost  > 0) addons.push({ label: '丁合',       amount: collCost });
      if (splitCost > 0) addons.push({ label: 'セット分け', amount: splitCost });
      return { baseFee, unitPrice, addons, total: baseFee + q * unitPrice + collCost + splitCost };
    }
  },

  // ─────────────────────────────────────────
  // ゲームチップ
  // https://www.mnd.co.jp/pricelists/chips/
  // ─────────────────────────────────────────
  chip: {
    id: 'chip',
    name: 'ゲームチップ',
    unit: '枚',
    fields: [
      {
        id: 'shape', label: '形状・サイズ', type: 'select',
        options: [
          // 円形
          { id: 'c15',       label: '円形15 (直径15mm)' },
          { id: 'c18',       label: '円形18 (直径18mm)' },
          { id: 'c20',       label: '円形20 (直径20mm)' },
          { id: 'c25',       label: '円形25 (直径25mm)' },
          { id: 'c30',       label: '円形30 (直径30mm)' },
          { id: 'c40',       label: '円形40 (直径40mm)' },
          // 角丸
          { id: 'kk14',      label: '角丸14 (14×14mm)' },
          { id: 'kk20',      label: '角丸20 (20×20mm)' },
          { id: 'kk25',      label: '角丸25 (25×25mm)' },
          { id: 'kk30',      label: '角丸30 (30×30mm)' },
          { id: 'kk35',      label: '角丸35 (35×35mm)' },
          { id: 'kk40',      label: '角丸40 (40×40mm)' },
          { id: 'kk45',      label: '角丸45 (45×45mm)' },
          { id: 'kk30x40',   label: '角丸30×40 (30×40mm)' },
          { id: 'kk44x63',   label: '角丸44×63 (44×63mm)' },
          { id: 'kk63x88',   label: '角丸63×88 (63×88mm)' },
          // 四角
          { id: 'sq15',      label: '四角15 (15×15mm)' },
          { id: 'sq20',      label: '四角20 (20×20mm)' },
          { id: 'sq25',      label: '四角25 (25×25mm)' },
          { id: 'sq30',      label: '四角30 (30×30mm)' },
          { id: 'sq35',      label: '四角35 (35×35mm)' },
          { id: 'sq40',      label: '四角40 (40×40mm)' },
          { id: 'sq45',      label: '四角45 (45×45mm)' },
          // 六角
          { id: 'h17',       label: '六角17 (一辺17mm)' },
          { id: 'h27',       label: '六角27 (一辺27mm)' },
          { id: 'h35',       label: '六角35 (一辺35mm)' },
          { id: 'h40',       label: '六角40 (一辺40mm)' },
          { id: 'h45',       label: '六角45 (一辺45mm)' },
          // 特殊
          { id: 'domino',    label: 'ドミノ (25×50mm)' },
          { id: 'heart',     label: 'ハート (高19×幅20mm)' },
        ]
      },
      { id: 'finish', label: '加工', type: 'finish' },
      { id: 'quantity', label: '枚数', type: 'number', min: 1, default: 100 }
    ],
    baseFees: { standard: 23000, gloss: 28000, matte: 33000, emboss: 25000 },
    // 確認済み単価: 円形15(片面) 標準2円・光沢2.5円・マット3円・エンボス3円
    //             角丸40 標準8円・光沢10.5円・マット11円・エンボス13円
    //             四角15 標準2円・光沢3円・マット3.5円・エンボス3.5円
    unitPrices: {
      // 円形
      c15:     { standard: 2,  gloss: 3,  matte: 3,  emboss: 3  },
      c18:     { standard: 3,  gloss: 4,  matte: 5,  emboss: 4  },
      c20:     { standard: 4,  gloss: 5,  matte: 7,  emboss: 6  },
      c25:     { standard: 6,  gloss: 8,  matte: 10, emboss: 9  },
      c30:     { standard: 10, gloss: 13, matte: 16, emboss: 14 },
      c40:     { standard: 25, gloss: 33, matte: 40, emboss: 35 },
      // 角丸（正方形）
      kk14:    { standard: 3,  gloss: 4,  matte: 5,  emboss: 4  },
      kk20:    { standard: 4,  gloss: 6,  matte: 7,  emboss: 6  },
      kk25:    { standard: 6,  gloss: 8,  matte: 10, emboss: 9  },
      kk30:    { standard: 9,  gloss: 12, matte: 15, emboss: 13 },
      kk35:    { standard: 13, gloss: 17, matte: 21, emboss: 18 },
      kk40:    { standard: 8,  gloss: 11, matte: 11, emboss: 13 }, // 確認済み（参考）
      kk45:    { standard: 28, gloss: 37, matte: 45, emboss: 39 },
      // 角丸（長方形）
      kk30x40: { standard: 12, gloss: 16, matte: 20, emboss: 17 },
      kk44x63: { standard: 22, gloss: 29, matte: 36, emboss: 31 },
      kk63x88: { standard: 42, gloss: 55, matte: 68, emboss: 58 },
      // 四角
      sq15:    { standard: 2,  gloss: 3,  matte: 4,  emboss: 4  }, // 確認済み（標準2円）
      sq20:    { standard: 4,  gloss: 5,  matte: 7,  emboss: 6  },
      sq25:    { standard: 6,  gloss: 8,  matte: 10, emboss: 9  },
      sq30:    { standard: 9,  gloss: 12, matte: 15, emboss: 13 },
      sq35:    { standard: 14, gloss: 18, matte: 22, emboss: 19 },
      sq40:    { standard: 20, gloss: 26, matte: 33, emboss: 28 },
      sq45:    { standard: 30, gloss: 39, matte: 49, emboss: 42 },
      // 六角
      h17:     { standard: 3,  gloss: 4,  matte: 5,  emboss: 4  },
      h27:     { standard: 8,  gloss: 11, matte: 13, emboss: 12 },
      h35:     { standard: 18, gloss: 24, matte: 30, emboss: 25 },
      h40:     { standard: 28, gloss: 37, matte: 46, emboss: 39 },
      h45:     { standard: 40, gloss: 53, matte: 65, emboss: 55 },
      // 特殊
      domino:  { standard: 12, gloss: 16, matte: 20, emboss: 17 },
      heart:   { standard: 5,  gloss: 7,  matte: 8,  emboss: 8  },
    },
    calculate(specs) {
      const q         = Math.max(1, specs.quantity || 1);
      const baseFee   = this.baseFees[specs.finish] ?? 0;
      const unitPrice = this.unitPrices[specs.shape]?.[specs.finish] ?? 0;
      return { baseFee, unitPrice, addons: [], total: baseFee + q * unitPrice };
    }
  },

  // ─────────────────────────────────────────
  // ゲームボード
  // https://www.mnd.co.jp/pricelists/gamingboards/
  // ─────────────────────────────────────────
  board: {
    id: 'board',
    name: 'ゲームボード',
    unit: '枚',
    fields: [
      {
        id: 'size', label: 'サイズ', type: 'select',
        options: [
          { id: 'b7v',   label: 'B7変型 (88×126mm)' },
          { id: 'a6',    label: 'A6 (105×148mm)' },
          { id: 'a5',    label: 'A5 (148×210mm)' },
          { id: 'b5v',   label: 'B5変型A (176×248mm)' },
          { id: 'b5',    label: 'B5 (182×257mm)' },
          { id: 'a4',    label: 'A4 (210×297mm)' },
          { id: 'b4',    label: 'B4 (257×364mm)' },
          { id: 'a3',    label: 'A3 (297×420mm)' },
          { id: 'sq100', label: '正方形100 (100×100mm)' },
          { id: 'sq200', label: '正方形200 (200×200mm)' },
          { id: 'sq299', label: '正方形299 (299×299mm)' },
        ]
      },
      {
        id: 'sides', label: '印刷面', type: 'select',
        options: [
          { id: 'single', label: '片面' },
          { id: 'double', label: '両面' }
        ]
      },
      { id: 'finish', label: '加工', type: 'finish' },
      {
        id: 'folding', label: '折り加工', type: 'select',
        options: [
          { id: 'none', label: 'なし' },
          { id: 'four', label: '四つ折り (基本料に +¥10,000)' }
        ]
      },
      { id: 'quantity', label: '枚数', type: 'number', min: 1, default: 50 }
    ],
    baseFees: { standard: 23000, gloss: 33000, matte: 38000, emboss: 30000 },
    // 確認済み単価: A3片面 標準267円・マット317円、A3両面 標準322円・マット372円
    unitPrices: {
      b7v:   { single: { standard: 50,  gloss: 58,  matte: 65,  emboss: 60  }, double: { standard: 65,  gloss: 73,  matte: 82,  emboss: 75  } },
      a6:    { single: { standard: 80,  gloss: 90,  matte: 100, emboss: 92  }, double: { standard: 100, gloss: 112, matte: 125, emboss: 115 } },
      a5:    { single: { standard: 120, gloss: 135, matte: 150, emboss: 138 }, double: { standard: 150, gloss: 168, matte: 187, emboss: 172 } },
      b5v:   { single: { standard: 130, gloss: 146, matte: 162, emboss: 149 }, double: { standard: 163, gloss: 183, matte: 203, emboss: 187 } },
      b5:    { single: { standard: 140, gloss: 157, matte: 175, emboss: 160 }, double: { standard: 175, gloss: 196, matte: 218, emboss: 200 } },
      a4:    { single: { standard: 160, gloss: 180, matte: 200, emboss: 184 }, double: { standard: 200, gloss: 224, matte: 248, emboss: 230 } },
      b4:    { single: { standard: 230, gloss: 258, matte: 287, emboss: 261 }, double: { standard: 287, gloss: 321, matte: 358, emboss: 325 } },
      a3:    { single: { standard: 267, gloss: 290, matte: 317, emboss: 297 }, double: { standard: 322, gloss: 347, matte: 372, emboss: 355 } }, // 確認済み
      sq100: { single: { standard: 60,  gloss: 67,  matte: 75,  emboss: 68  }, double: { standard: 75,  gloss: 84,  matte: 94,  emboss: 85  } },
      sq200: { single: { standard: 180, gloss: 202, matte: 225, emboss: 204 }, double: { standard: 225, gloss: 252, matte: 281, emboss: 255 } },
      sq299: { single: { standard: 350, gloss: 392, matte: 437, emboss: 395 }, double: { standard: 437, gloss: 490, matte: 546, emboss: 494 } },
    },
    calculate(specs) {
      const q         = Math.max(1, specs.quantity || 1);
      const base      = this.baseFees[specs.finish] ?? 0;
      const foldFee   = specs.folding === 'four' ? 10000 : 0;
      const baseFee   = base + foldFee;
      const unitPrice = this.unitPrices[specs.size]?.[specs.sides]?.[specs.finish] ?? 0;
      return { baseFee, unitPrice, addons: [], total: baseFee + q * unitPrice };
    }
  },

  // ─────────────────────────────────────────
  // 化粧箱（貼り箱）
  // https://www.mnd.co.jp/pricelists/boxes/
  // ─────────────────────────────────────────
  display_box: {
    id: 'display_box',
    name: '化粧箱',
    unit: '個',
    fields: [
      {
        id: 'size', label: 'サイズ', type: 'select',
        options: [
          // ポーカー（65×93mm）
          { id: 'poker20',      label: 'ポーカー 深さ20 (65×93×20mm)' },
          { id: 'poker30',      label: 'ポーカー 深さ30 (65×93×30mm)' },
          // ポーカーワイド（70×96mm）
          { id: 'pokerwide20',  label: 'ポーカーワイド 深さ20 (70×96×20mm)' },
          { id: 'pokerwide25',  label: 'ポーカーワイド 深さ25 (70×96×25mm)' },
          // ブリッジ（61×93mm）
          { id: 'bridge20',     label: 'ブリッジ 深さ20 (61×93×20mm)' },
          { id: 'bridge30',     label: 'ブリッジ 深さ30 (61×93×30mm)' },
          // レギュラー（90×130mm）
          { id: 'reg15',        label: 'レギュラー 深さ15 (90×130×15mm)' },
          { id: 'reg20',        label: 'レギュラー 深さ20 (90×130×20mm)' },
          { id: 'reg30',        label: 'レギュラー 深さ30 (90×130×30mm)' },
          { id: 'reg35',        label: 'レギュラー 深さ35 (90×130×35mm)' },
          { id: 'reg40',        label: 'レギュラー 深さ40 (90×130×40mm)' },
          { id: 'reg50',        label: 'レギュラー 深さ50 (90×130×50mm)' },
          // レギュラーワイド（96×142mm）
          { id: 'regwide30',    label: 'レギュラーワイド 深さ30 (96×142×30mm)' },
          // タロット各型
          { id: 'tarot_a20',    label: 'タロットA 深さ20 (68×118×20mm)' },
          { id: 'tarot_a30',    label: 'タロットA 深さ30 (68×118×30mm)' },
          { id: 'tarot_b20',    label: 'タロットB 深さ20 (82×123×20mm)' },
          { id: 'tarot_b30',    label: 'タロットB 深さ30 (82×123×30mm)' },
          { id: 'tarot_c20',    label: 'タロットC 深さ20 (60×103×20mm)' },
          { id: 'tarot_d20',    label: 'タロットD 深さ20 (76×108×20mm)' },
          { id: 'tarot_d30',    label: 'タロットD 深さ30 (76×108×30mm)' },
          { id: 'tarot_f20',    label: 'タロットF 深さ20 (73×173×20mm)' },
          { id: 'tarot_f30',    label: 'タロットF 深さ30 (73×173×30mm)' },
          { id: 'tarot_j20',    label: 'タロットJ 深さ20 (73×123×20mm)' },
          { id: 'tarot_j30',    label: 'タロットJ 深さ30 (73×123×30mm)' },
          // A6・A5・A4
          { id: 'a6_20',        label: 'A6サイズ 深さ20 (111×155×20mm)' },
          { id: 'a6_30',        label: 'A6サイズ 深さ30 (111×155×30mm)' },
          { id: 'a6_40',        label: 'A6サイズ 深さ40 (111×155×40mm)' },
          { id: 'a5_20',        label: 'A5サイズ 深さ20 (155×218×20mm)' },
          { id: 'a5_30',        label: 'A5サイズ 深さ30 (155×218×30mm)' },
          { id: 'a5_40',        label: 'A5サイズ 深さ40 (155×218×40mm)' },
          { id: 'a5_55',        label: 'A5サイズ 深さ55 (155×218×55mm)' },
          { id: 'a4_30',        label: 'A4サイズ 深さ30 (214×300×30mm)' },
          // B6・B5
          { id: 'b6_30',        label: 'B6サイズ 深さ30 (133×188×30mm)' },
          { id: 'b6_50',        label: 'B6サイズ 深さ50 (133×188×50mm)' },
          { id: 'b5_30',        label: 'B5サイズ 深さ30 (185×260×30mm)' },
          { id: 'b5_40',        label: 'B5サイズ 深さ40 (185×260×40mm)' },
          // 四角
          { id: 'shikaku72',    label: '四角 72mm (72×72mm)' },
          { id: 'shikaku92',    label: '四角 92mm (92×92mm)' },
          { id: 'shikaku113',   label: '四角 113mm (113×113mm)' },
          { id: 'shikaku125',   label: '四角 125mm (125×125mm)' },
        ]
      },
      { id: 'finish', label: '加工', type: 'finish' },
      { id: 'quantity', label: '個数', type: 'number', min: 1, default: 30 }
    ],
    // 基本料: 標準/光沢PP/エンボス ¥23,000、マットPP ¥38,000
    // 単価: 標準=光沢PP=エンボス（同額）、マットPPのみ割高
    baseFees: { standard: 23000, gloss: 23000, matte: 38000, emboss: 23000 },
    // 確認済み単価（標準/光沢PP/エンボス）: ポーカー深20=¥180、ポーカー深30=¥230
    //   ブリッジ深20=¥180、レギュラー深30=¥250、レギュラー深40=¥350
    //   A5深30=¥350、A4深30=¥550
    //   マットPP: ポーカー深20=¥200、レギュラー深30=¥280、A4深30=¥630
    unitPrices: {
      poker20:    { standard: 180, gloss: 180, matte: 200, emboss: 180 },
      poker30:    { standard: 230, gloss: 230, matte: 260, emboss: 230 },
      pokerwide20:{ standard: 190, gloss: 190, matte: 215, emboss: 190 },
      pokerwide25:{ standard: 210, gloss: 210, matte: 240, emboss: 210 },
      bridge20:   { standard: 180, gloss: 180, matte: 200, emboss: 180 },
      bridge30:   { standard: 230, gloss: 230, matte: 260, emboss: 230 },
      reg15:      { standard: 200, gloss: 200, matte: 225, emboss: 200 },
      reg20:      { standard: 220, gloss: 220, matte: 250, emboss: 220 },
      reg30:      { standard: 250, gloss: 250, matte: 280, emboss: 250 },
      reg35:      { standard: 300, gloss: 300, matte: 340, emboss: 300 },
      reg40:      { standard: 350, gloss: 350, matte: 400, emboss: 350 },
      reg50:      { standard: 430, gloss: 430, matte: 490, emboss: 430 },
      regwide30:  { standard: 280, gloss: 280, matte: 315, emboss: 280 },
      tarot_a20:  { standard: 200, gloss: 200, matte: 225, emboss: 200 },
      tarot_a30:  { standard: 250, gloss: 250, matte: 280, emboss: 250 },
      tarot_b20:  { standard: 240, gloss: 240, matte: 270, emboss: 240 },
      tarot_b30:  { standard: 295, gloss: 295, matte: 335, emboss: 295 },
      tarot_c20:  { standard: 185, gloss: 185, matte: 210, emboss: 185 },
      tarot_d20:  { standard: 210, gloss: 210, matte: 240, emboss: 210 },
      tarot_d30:  { standard: 265, gloss: 265, matte: 300, emboss: 265 },
      tarot_f20:  { standard: 260, gloss: 260, matte: 295, emboss: 260 },
      tarot_f30:  { standard: 315, gloss: 315, matte: 360, emboss: 315 },
      tarot_j20:  { standard: 215, gloss: 215, matte: 245, emboss: 215 },
      tarot_j30:  { standard: 265, gloss: 265, matte: 300, emboss: 265 },
      a6_20:      { standard: 230, gloss: 230, matte: 260, emboss: 230 },
      a6_30:      { standard: 280, gloss: 280, matte: 315, emboss: 280 },
      a6_40:      { standard: 330, gloss: 330, matte: 375, emboss: 330 },
      a5_20:      { standard: 290, gloss: 290, matte: 330, emboss: 290 },
      a5_30:      { standard: 350, gloss: 350, matte: 400, emboss: 350 },
      a5_40:      { standard: 400, gloss: 400, matte: 455, emboss: 400 },
      a5_55:      { standard: 480, gloss: 480, matte: 545, emboss: 480 },
      a4_30:      { standard: 550, gloss: 550, matte: 630, emboss: 550 },
      b6_30:      { standard: 260, gloss: 260, matte: 295, emboss: 260 },
      b6_50:      { standard: 365, gloss: 365, matte: 415, emboss: 365 },
      b5_30:      { standard: 390, gloss: 390, matte: 440, emboss: 390 },
      b5_40:      { standard: 460, gloss: 460, matte: 520, emboss: 460 },
      shikaku72:  { standard: 215, gloss: 215, matte: 245, emboss: 215 },
      shikaku92:  { standard: 265, gloss: 265, matte: 300, emboss: 265 },
      shikaku113: { standard: 330, gloss: 330, matte: 375, emboss: 330 },
      shikaku125: { standard: 390, gloss: 390, matte: 440, emboss: 390 },
    },
    calculate(specs) {
      const q         = Math.max(1, specs.quantity || 1);
      const baseFee   = this.baseFees[specs.finish] ?? 0;
      const unitPrice = this.unitPrices[specs.size]?.[specs.finish] ?? 0;
      return { baseFee, unitPrice, addons: [], total: baseFee + q * unitPrice };
    }
  },

  // ─────────────────────────────────────────
  // キャラメル箱（サック箱）
  // https://www.mnd.co.jp/pricelists/tucktopboxes/
  // ─────────────────────────────────────────
  tuck_box: {
    id: 'tuck_box',
    name: 'キャラメル箱',
    unit: '個',
    fields: [
      {
        id: 'size', label: 'サイズ', type: 'select',
        options: [
          { id: 'half14',   label: 'ハーフ14 (45×65×13mm)' },
          { id: 'poker10',  label: 'ポーカー10 (64×90×9mm)' },
          { id: 'poker14',  label: 'ポーカー14 (64×90×13mm)' },
          { id: 'bridge17', label: 'ブリッジ17 (60×90×16mm)' },
          { id: 'poker17',  label: 'ポーカー17 (64×90×16mm)' },
          { id: 'bridge24', label: 'ブリッジ24 (60×90×23mm)' },
          { id: 'poker25',  label: 'ポーカー25 (64×90×24mm)' },
          { id: 'bridge30', label: 'ブリッジ30 (60×90×29mm)' },
          { id: 'poker30',  label: 'ポーカー30 (64×90×29mm)' },
          { id: 'bridge40', label: 'ブリッジ40 (60×90×39mm)' },
        ]
      },
      { id: 'finish', label: '加工', type: 'finish' },
      {
        id: 'quantity', label: '個数', type: 'number', min: 1, default: 30,
        description: 'PP/エンボス加工の箱のみシュリンク包装が可能です'
      }
    ],
    // 基本料: 標準¥10,000 / 光沢PP¥20,000 / マットPP¥20,000 / エンボス¥28,000
    baseFees: { standard: 10000, gloss: 20000, matte: 20000, emboss: 28000 },
    // 確認済み単価: ポーカー25 光沢PP = ¥120/個
    unitPrices: {
      half14:   { standard: 50, gloss: 70,  matte: 70,  emboss: 80  },
      poker10:  { standard: 53, gloss: 78,  matte: 78,  emboss: 86  },
      poker14:  { standard: 56, gloss: 87,  matte: 87,  emboss: 93  },
      bridge17: { standard: 59, gloss: 96,  matte: 96,  emboss: 100 },
      poker17:  { standard: 62, gloss: 105, matte: 105, emboss: 107 },
      bridge24: { standard: 65, gloss: 113, matte: 113, emboss: 113 },
      poker25:  { standard: 68, gloss: 120, matte: 120, emboss: 120 }, // 光沢PP=¥120 確認済み
      bridge30: { standard: 72, gloss: 128, matte: 128, emboss: 126 },
      poker30:  { standard: 76, gloss: 138, matte: 138, emboss: 133 },
      bridge40: { standard: 80, gloss: 150, matte: 150, emboss: 140 },
    },
    calculate(specs) {
      const q         = Math.max(1, specs.quantity || 1);
      const baseFee   = this.baseFees[specs.finish] ?? 0;
      const unitPrice = this.unitPrices[specs.size]?.[specs.finish] ?? 0;
      return { baseFee, unitPrice, addons: [], total: baseFee + q * unitPrice };
    }
  },

  // ─────────────────────────────────────────
  // プレイマット
  // https://www.mnd.co.jp/pricelists/playingmats/
  // ─────────────────────────────────────────
  playmat: {
    id: 'playmat',
    name: 'プレイマット',
    unit: '枚',
    fields: [
      {
        id: 'size', label: 'サイズ', type: 'select',
        options: [
          { id: 'a4', label: 'A4 (210×297mm)' },
          { id: 'a3', label: 'A3 (297×420mm)' },
        ]
      },
      {
        id: 'sample', label: '事前サンプルあり', type: 'checkbox',
        description: '発注前に確認サンプルを取得します (+¥15,000)'
      },
      { id: 'quantity', label: '枚数', type: 'number', min: 1, default: 10 }
    ],
    // 基本料: サンプルなし¥18,000 / サンプルあり¥33,000
    // 確認済み単価: A4=¥280 / A3=¥380
    unitPrices: { a4: 280, a3: 380 },
    calculate(specs) {
      const q         = Math.max(1, specs.quantity || 1);
      const baseFee   = specs.sample ? 33000 : 18000;
      const unitPrice = this.unitPrices[specs.size] ?? 280;
      return { baseFee, unitPrice, addons: [], total: baseFee + q * unitPrice };
    }
  },

  // ─────────────────────────────────────────
  // プレイシート（紙製マップ）
  // https://www.mnd.co.jp/pricelists/playingmaps/
  // ─────────────────────────────────────────
  playsheet: {
    id: 'playsheet',
    name: 'プレイシート',
    unit: '枚',
    fields: [
      {
        id: 'size', label: 'サイズ', type: 'select',
        options: [
          { id: 'a4',       label: 'A4 (210×297mm)' },
          { id: 'b4m',      label: 'B4変形A (248×352mm)' },
          { id: 'a3',       label: 'A3 (297×420mm)' },
          { id: 'other_s',  label: 'その他変形サイズ（A4以内）' },
          { id: 'other_l',  label: 'その他変形サイズ（A4越えA3以内）' },
        ]
      },
      {
        id: 'sides', label: '印刷面', type: 'select',
        options: [
          { id: 'single', label: '片面' },
          { id: 'double', label: '両面' }
        ]
      },
      {
        id: 'folding', label: '折り加工', type: 'select',
        options: [
          { id: 'none',    label: 'なし' },
          { id: 'fold2',   label: '二つ折り (+¥10/枚)' },
          { id: 'fold4',   label: '四つ折り・クロス折り・8P折り (+¥20/枚)' },
          { id: 'fold8s',  label: '八つ折り A4以内・16P折り (+¥30/枚)' },
          { id: 'fold8l',  label: '八つ折り B4変形/A3 (+¥40/枚)' },
          { id: 'fold16',  label: '十六折り B4変形/A3のみ (+¥50/枚)' },
        ]
      },
      { id: 'quantity', label: '枚数', type: 'number', min: 1, default: 50 }
    ],
    baseFee:      10000,
    // 確認済み単価: A4 片面10円/両面30円、B4変形A/A3 片面20円/両面50円
    unitPrices:   {
      a4:      { single: 10, double: 30 },
      b4m:     { single: 20, double: 50 },
      a3:      { single: 20, double: 50 },
      other_s: { single: 10, double: 30 },
      other_l: { single: 20, double: 50 },
    },
    foldingExtra: { none: 0, fold2: 10, fold4: 20, fold8s: 30, fold8l: 40, fold16: 50 },
    calculate(specs) {
      const q         = Math.max(1, specs.quantity || 1);
      const sizeP     = this.unitPrices[specs.size]?.[specs.sides] ?? 0;
      const foldP     = this.foldingExtra[specs.folding] ?? 0;
      const unitPrice = sizeP + foldP;
      return { baseFee: this.baseFee, unitPrice, addons: [], total: this.baseFee + q * unitPrice };
    }
  },

  // ─────────────────────────────────────────
  // 説明書
  // https://www.mnd.co.jp/pricelists/manuals/
  // ─────────────────────────────────────────
  manual: {
    id: 'manual',
    name: '説明書',
    unit: '部',
    fields: [
      {
        id: 'bindType', label: '綴じ方', type: 'select',
        options: [
          { id: 'flat',   label: 'フラット（折りなし）' },
          { id: 'saddle', label: '中綴じ（ホッチキス）' }
        ]
      },
      {
        id: 'size', label: 'サイズ', type: 'select',
        options: [
          { id: 'b5', label: 'B5 (182×257mm)' },
          { id: 'a4', label: 'A4 (210×297mm)' },
          { id: 'b4', label: 'B4 (257×364mm)' },
          { id: 'a3', label: 'A3 (297×420mm)' },
        ]
      },
      {
        id: 'pages', label: 'ページ数', type: 'number',
        min: 8, max: 48, step: 4, default: 8,
        description: '8〜48ページ、4の倍数で指定',
        dependsOn: { field: 'bindType', value: 'saddle' }
      },
      { id: 'quantity', label: '部数', type: 'number', min: 1, default: 50 }
    ],
    flatUnitPrices:  { b5: 60, a4: 70, b4: 80, a3: 100 },
    saddleBaseFees:  { b5: 10000, a4: 10000, b4: 12000, a3: 15000 },
    saddlePagePrice: 15,
    calculate(specs) {
      const q = Math.max(1, specs.quantity || 1);
      if (specs.bindType === 'saddle') {
        const baseFee   = this.saddleBaseFees[specs.size] ?? 10000;
        const pages     = Math.max(8, Math.ceil((specs.pages || 8) / 4) * 4);
        const unitPrice = (pages / 4) * this.saddlePagePrice;
        return { baseFee, unitPrice, addons: [], total: baseFee + q * unitPrice };
      } else {
        const unitPrice = this.flatUnitPrices[specs.size] ?? 70;
        return { baseFee: 0, unitPrice, addons: [], total: q * unitPrice };
      }
    }
  },

  // ─────────────────────────────────────────
  // 特注ダイス
  // https://www.mnd.co.jp/pricelists/originaldies/
  // ─────────────────────────────────────────
  dice: {
    id: 'dice',
    name: '特注ダイス',
    unit: '個',
    fields: [
      {
        id: 'material', label: '素材', type: 'select',
        options: [
          { id: 'resin', label: '樹脂製ダイス' },
          { id: 'wood',  label: '木製ダイス' },
        ]
      },
      { id: 'quantity', label: '個数', type: 'number', min: 1, default: 10 }
    ],
    // 確認済み: 基本料¥5,000 / 単価¥50（樹脂製・木製とも同額）
    baseFee:   5000,
    unitPrice: 50,
    calculate(specs) {
      const q = Math.max(1, specs.quantity || 1);
      return { baseFee: this.baseFee, unitPrice: this.unitPrice, addons: [], total: this.baseFee + q * this.unitPrice };
    }
  },

  // ─────────────────────────────────────────
  // ペーパールーレット
  // https://www.mnd.co.jp/pricelists/paperroulette/
  // ─────────────────────────────────────────
  paperroulette: {
    id: 'paperroulette',
    name: 'ペーパールーレット',
    unit: '個',
    fields: [
      {
        id: 'quantity', label: '個数', type: 'number', min: 1, default: 10,
        description: '台紙サイズ A6。留め具一式が付属します。'
      },
      {
        id: 'bagSplit', label: '留め具セット袋詰め', type: 'checkbox',
        description: '留め具を別袋に分けて納品します (+¥5,000〜)'
      }
    ],
    // 確認済み: 基本料¥10,000 / 単価¥80（留め具一式含む）
    baseFee:   10000,
    unitPrice: 80,
    calculate(specs) {
      const q       = Math.max(1, specs.quantity || 1);
      const bagFee  = specs.bagSplit ? 5000 : 0;
      const baseFee = this.baseFee + bagFee;
      const addons  = bagFee > 0 ? [{ label: '留め具袋詰め', amount: bagFee }] : [];
      return { baseFee: this.baseFee, unitPrice: this.unitPrice, addons, total: baseFee + q * this.unitPrice };
    }
  },

  // ─────────────────────────────────────────
  // プレイヤーコマ・ゲーム用ついたて
  // https://www.mnd.co.jp/pricelists/playertokensscreens/
  // ─────────────────────────────────────────
  token_screen: {
    id: 'token_screen',
    name: 'プレイヤーコマ・ゲーム用ついたて',
    unit: '個',
    fields: [
      {
        id: 'type', label: '商品種別', type: 'select',
        options: [
          { id: 'koma_s',    label: 'コマ小 (18×33mm)' },
          { id: 'koma_l',    label: 'コマ大 (24×38mm)' },
          { id: 'screen_s1', label: 'ついたて小・片面印刷 (高90×幅190mm)' },
          { id: 'screen_s2', label: 'ついたて小・両面印刷 (高90×幅190mm)' },
          { id: 'screen_l1', label: 'ついたて大・片面印刷 (高128×幅290mm)' },
          { id: 'screen_l2', label: 'ついたて大・両面印刷 (高128×幅290mm)' },
        ]
      },
      {
        id: 'finish', label: '加工（ついたてのみ）', type: 'finish',
        dependsOn: { field: 'type', value: ['screen_s1', 'screen_s2', 'screen_l1', 'screen_l2'] }
      },
      { id: 'quantity', label: '個数', type: 'number', min: 1, default: 30 }
    ],
    // 基本料: コマ¥10,000（加工なし固定）
    //         ついたて: 標準¥10,000 / 光沢PP¥20,000 / マットPP¥25,000 / エンボス¥28,000
    baseFees: { standard: 10000, gloss: 20000, matte: 25000, emboss: 28000 },
    // 確認済み単価: コマ小=¥30、コマ大=¥40（標準のみ）
    //   ついたて小片面: 標準¥30/光沢¥36/マット¥39/エンボス¥39
    //   ついたて小両面: 標準¥50/光沢¥56/マット¥59/エンボス¥59
    //   ついたて大片面: 標準¥50/光沢¥62/マット¥68/エンボス¥68
    //   ついたて大両面: 標準¥80/光沢¥92/マット¥98/エンボス¥98
    unitPrices: {
      koma_s:    { standard: 30 },
      koma_l:    { standard: 40 },
      screen_s1: { standard: 30, gloss: 36, matte: 39, emboss: 39 },
      screen_s2: { standard: 50, gloss: 56, matte: 59, emboss: 59 },
      screen_l1: { standard: 50, gloss: 62, matte: 68, emboss: 68 },
      screen_l2: { standard: 80, gloss: 92, matte: 98, emboss: 98 },
    },
    calculate(specs) {
      const q        = Math.max(1, specs.quantity || 1);
      const isKoma   = specs.type?.startsWith('koma');
      const finishKey = isKoma ? 'standard' : (specs.finish ?? 'standard');
      const baseFee  = isKoma ? 10000 : (this.baseFees[finishKey] ?? 10000);
      const unitPrice = this.unitPrices[specs.type]?.[finishKey] ?? 0;
      return { baseFee, unitPrice, addons: [], total: baseFee + q * unitPrice };
    }
  },

  // ─────────────────────────────────────────
  // 木製品・樹脂製品、その他既製品
  // https://www.mnd.co.jp/pricelists/otheritems/
  // ─────────────────────────────────────────
  other_items: {
    id: 'other_items',
    name: '木製品・樹脂製品、その他既製品',
    unit: '個',
    fields: [
      {
        id: 'item', label: '商品', type: 'select',
        options: [
          // ダイス
          { id: 'dice_kiji',      label: '木製ダイス 木地 (16×16×16mm)' },
          { id: 'dice_color',     label: '木製ダイス カラー (16×16×16mm)' },
          // コマ・ポーン
          { id: 'pawn_wood',      label: '木製ポーン (φ10×25mm)' },
          { id: 'meeple_wood',    label: '木製ミープル (16×16×8mm)' },
          { id: 'pawn_resin',     label: '樹脂製ポーン (φ17×30mm)' },
          // キューブ・ディスク
          { id: 'cube_8',         label: '木製キューブ 8mm (8×8×8mm)' },
          { id: 'cube_16',        label: '木製キューブ 16mm (16×16×16mm)' },
          { id: 'disk_15',        label: '木製ディスク 直径15mm (φ15×4mm)' },
          { id: 'disk_25',        label: '木製ディスク 直径25mm (φ25×7mm)' },
          { id: 'disk_15t',       label: '木製ディスク 直径15mm（厚） (φ15×13mm)' },
          { id: 'acrylic_cube',   label: 'アクリル製アイスキューブ (11×14mm)' },
          { id: 'go_stone',       label: '樹脂製碁石 (φ15×4mm)' },
          // スタンド
          { id: 'stand_chip',     label: 'チップ用スタンド (φ24×10mm)' },
          { id: 'stand_card_30',  label: '木製カードスタンド 30cm (300×25×10mm)' },
          { id: 'stand_card_20',  label: '木製カードスタンド 20cm (200×25×10mm)' },
          // 箱・袋
          { id: 'pet_poker',      label: 'PETケース ポーカーサイズ (65×93×25mm)' },
          { id: 'pet_bridge',     label: 'PETケース ブリッジサイズ (60×93×25mm)' },
          { id: 'zipbag',         label: 'チャック付きビニール袋' },
          // 厚紙チップ
          { id: 'chip_plain',     label: '円形チップ (φ25×2mm)' },
          { id: 'chip_100',       label: '円形チップ（数字100）(φ25×2mm)' },
          { id: 'chip_50',        label: '円形チップ（数字50）(φ25×2mm)' },
          { id: 'chip_10',        label: '円形チップ（数字10）(φ25×2mm)' },
          { id: 'chip_5',         label: '円形チップ（数字5）(φ25×2mm)' },
          { id: 'chip_2',         label: '円形チップ（数字2）(φ25×2mm)' },
          { id: 'chip_1',         label: '円形チップ（数字1）(φ25×2mm)' },
          { id: 'chip_gold',      label: '金色チップ (φ25×2mm)' },
          { id: 'chip_silver',    label: '銀色チップ (φ20×2mm)' },
        ]
      },
      { id: 'quantity', label: '個数', type: 'number', min: 1, default: 10 }
    ],
    // 基本料なし（既製品のため）。単価はすべて確認済み。
    unitPrices: {
      dice_kiji:     30,
      dice_color:    50,
      pawn_wood:     30,
      meeple_wood:   35,
      pawn_resin:    20,
      cube_8:        12,
      cube_16:       30,
      disk_15:       18,
      disk_25:       30,
      disk_15t:      30,
      acrylic_cube:  6,
      go_stone:      10,
      stand_chip:    30,
      stand_card_30: 300,
      stand_card_20: 200,
      pet_poker:     75,
      pet_bridge:    70,
      zipbag:        10,
      chip_plain:    5,
      chip_100:      5,
      chip_50:       5,
      chip_10:       5,
      chip_5:        5,
      chip_2:        5,
      chip_1:        5,
      chip_gold:     6,
      chip_silver:   5,
    },
    calculate(specs) {
      const q         = Math.max(1, specs.quantity || 1);
      const unitPrice = this.unitPrices[specs.item] ?? 0;
      return { baseFee: 0, unitPrice, addons: [], total: q * unitPrice };
    }
  },
};
