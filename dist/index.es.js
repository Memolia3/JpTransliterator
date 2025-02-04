const s = class s {
  /**
   * 全角文字を半角に変換
   * @param str 変換対象文字列
   * @returns 変換後の文字列
   */
  static toHalfWidth(t) {
    return t != null && t.length ? t.replace(
      s.FULL_TO_HALF_REGEX,
      (e) => String.fromCharCode(e.charCodeAt(0) - 65248)
    ).replace(
      s.FULL_SYMBOLS_REGEX,
      (e) => s.fullToHalfMap[e] || e
    ) : t;
  }
  /**
   * 半角文字を全角に変換
   * @param str 変換対象文字列
   * @returns 変換後の文字列
   */
  static toFullWidth(t) {
    return t != null && t.length ? t.replace(
      s.HALF_TO_FULL_REGEX,
      (e) => String.fromCharCode(e.charCodeAt(0) + 65248)
    ).replace(
      s.HALF_SYMBOLS_REGEX,
      (e) => s.halfToFullMap[e] || e
    ) : t;
  }
};
s.FULL_TO_HALF_REGEX = /[Ａ-Ｚａ-ｚ０-９！-～]/g, s.HALF_TO_FULL_REGEX = /[A-Za-z0-9!-~]/g, s.FULL_SYMBOLS_REGEX = /[、。・ーー「」‐]/g, s.HALF_SYMBOLS_REGEX = /[，．／［］]/g, s.fullToHalfMap = Object.freeze({
  "、": ",",
  "。": ".",
  "・": "/",
  ー: "-",
  "‐": "-",
  "「": "[",
  "」": "]"
}), s.halfToFullMap = Object.freeze({
  "，": "、",
  "．": "。",
  "／": "・",
  "［": "「",
  "］": "」"
});
let p = s;
const C = {
  "あ|ア": ["a"],
  "い|イ": ["i", "yi"],
  "う|ウ": ["u", "wu", "whu"],
  "え|エ": ["e"],
  "お|オ": ["o"],
  "ぁ|ァ": ["xa", "la"],
  "ぃ|ィ": ["xi", "li", "yi"],
  "ぅ|ゥ": ["xu", "lu"],
  "ぇ|ェ": ["xe", "le", "ye"],
  "ぉ|ォ": ["xo", "lo"],
  "ゃ|ャ": ["xya", "lya"],
  "ゅ|ュ": ["xyu", "lyu"],
  "ょ|ョ": ["xyo", "lyo"],
  "か|カ": ["ka", "ca"],
  "き|キ": ["ki"],
  "く|ク": ["ku", "cu", "qu"],
  "け|ケ": ["ke"],
  "こ|コ": ["ko", "co"],
  "きゃ|キャ": ["kya"],
  "きぃ|キィ": ["kyi"],
  "きゅ|キュ": ["kyu"],
  "きぇ|キェ": ["kye"],
  "きょ|キョ": ["kyo"],
  "くぁ|クァ": ["qa", "qwa", "kwa"],
  "くぃ|クィ": ["qi", "qwi", "qyi"],
  "くぅ|クゥ": ["qwu"],
  "くぇ|クェ": ["qe", "qwe", "qye"],
  "くぉ|クォ": ["qo", "qwo"],
  "くゃ|クャ": ["qya"],
  "くゅ|クュ": ["qyu"],
  "くょ|クョ": ["qyo"],
  "が|ガ": ["ga"],
  "ぎ|ギ": ["gi"],
  "ぐ|グ": ["gu"],
  "げ|ゲ": ["ge"],
  "ご|ゴ": ["go"],
  "ぎゃ|ギャ": ["gya"],
  "ぎぃ|ギィ": ["gyi"],
  "ぎゅ|ギュ": ["gyu"],
  "ぎぇ|ギェ": ["gye"],
  "ぎょ|ギョ": ["gyo"],
  "さ|サ": ["sa"],
  "し|シ": ["shi", "si", "ci"],
  "す|ス": ["su"],
  "せ|セ": ["se", "ce"],
  "そ|ソ": ["so"],
  "しゃ|シャ": ["sha", "sya"],
  "しぃ|シィ": ["syi"],
  "しゅ|シュ": ["shu", "syu"],
  "しぇ|シェ": ["she", "sye"],
  "しょ|ショ": ["sho", "syo"],
  "ざ|ザ": ["za"],
  "じ|ジ": ["ji", "zi"],
  "ず|ズ": ["zu"],
  "ぜ|ゼ": ["ze"],
  "ぞ|ゾ": ["zo"],
  "じゃ|ジャ": ["ja", "jya", "zya"],
  "じぃ|ジィ": ["jyi", "zyi"],
  "じゅ|ジュ": ["ju", "jyu", "zyu"],
  "じぇ|ジェ": ["je", "jye", "zye"],
  "じょ|ジョ": ["jo", "jyo", "zyo"],
  "すぁ|スァ": ["swa"],
  "すぃ|スィ": ["swi"],
  "すぅ|スゥ": ["swu"],
  "すぇ|スェ": ["swe"],
  "すぉ|スォ": ["swo"],
  "た|タ": ["ta"],
  "ち|チ": ["chi", "ti"],
  "つ|ツ": ["tsu", "tu"],
  "て|テ": ["te"],
  "と|ト": ["to"],
  "ちゃ|チャ": ["tya", "cya", "cha"],
  "ちぃ|チィ": ["tyi", "cyi", "chi"],
  "ちゅ|チュ": ["tyu", "cyu", "chu"],
  "ちぇ|チェ": ["tye", "cye", "che"],
  "ちょ|チョ": ["tyo", "cyo", "cho"],
  "だ|ダ": ["da"],
  "ぢ|ヂ": ["di"],
  "づ|ヅ": ["du"],
  "で|デ": ["de"],
  "ど|ド": ["do"],
  "ぢゃ|ヂャ": ["dya"],
  "ぢぃ|ヂィ": ["dyi"],
  "ぢゅ|ヂュ": ["dyu"],
  "ぢぇ|ヂェ": ["dye"],
  "ぢょ|ヂョ": ["dyo"],
  "でゃ|デャ": ["dha"],
  "でぃ|ディ": ["dhi"],
  "でゅ|デュ": ["dhu"],
  "でぇ|デェ": ["dhe"],
  "でょ|デョ": ["dho"],
  "つぁ|ツァ": ["tsa"],
  "つぃ|ツィ": ["tsi"],
  "つぇ|ツェ": ["tse"],
  "つぉ|ツォ": ["tso"],
  "てゃ|テャ": ["tha"],
  "てぃ|ティ": ["thi"],
  "てゅ|テュ": ["thu"],
  "てぇ|テェ": ["the"],
  "てょ|テョ": ["tho"],
  "とぁ|トァ": ["twa"],
  "とぃ|トィ": ["twi"],
  "とぅ|トゥ": ["twu"],
  "とぇ|トェ": ["twe"],
  "とぉ|トォ": ["two"],
  "どぁ|ドァ": ["dwa"],
  "どぃ|ドィ": ["dwi"],
  "どぅ|ドゥ": ["dwu"],
  "どぇ|ドェ": ["dwe"],
  "どぉ|ドォ": ["dwo"],
  "な|ナ": ["na"],
  "に|ニ": ["ni"],
  "ぬ|ヌ": ["nu"],
  "ね|ネ": ["ne"],
  "の|ノ": ["no"],
  "にゃ|ニャ": ["nya"],
  "にぃ|ニィ": ["nyi"],
  "にゅ|ニュ": ["nyu"],
  "にぇ|ニェ": ["nye"],
  "にょ|ニョ": ["nyo"],
  "は|ハ": ["ha"],
  "ひ|ヒ": ["hi"],
  "ふ|フ": ["fu", "hu"],
  "へ|ヘ": ["he"],
  "ほ|ホ": ["ho"],
  "ひゃ|ヒャ": ["hya"],
  "ひぃ|ヒィ": ["hyi"],
  "ひゅ|ヒュ": ["hyu"],
  "ひぇ|ヒェ": ["hye"],
  "ひょ|ヒョ": ["hyo"],
  "ぱ|パ": ["pa"],
  "ぴ|ピ": ["pi"],
  "ぷ|プ": ["pu"],
  "ぺ|ペ": ["pe"],
  "ぽ|ポ": ["po"],
  "ぴゃ|ピャ": ["pya"],
  "ぴぃ|ピィ": ["pyi"],
  "ぴゅ|ピュ": ["pyu"],
  "ぴぇ|ピェ": ["pye"],
  "ぴょ|ピョ": ["pyo"],
  "ば|バ": ["ba"],
  "び|ビ": ["bi"],
  "ぶ|ブ": ["bu"],
  "べ|ベ": ["be"],
  "ぼ|ボ": ["bo"],
  "びゃ|ビャ": ["bya"],
  "びぃ|ビィ": ["byi"],
  "びゅ|ビュ": ["byu"],
  "びぇ|ビェ": ["bye"],
  "びょ|ビョ": ["byo"],
  "ふぁ|ファ": ["fa", "fwa"],
  "ふぃ|フィ": ["fi", "fyi", "fwi"],
  "ふぅ|フゥ": ["fwu"],
  "ふぇ|フェ": ["fe", "fye", "fwe"],
  "ふぉ|フォ": ["fo", "fwo"],
  "ふゃ|フャ": ["fya"],
  "ふゅ|フュ": ["fyu"],
  "ふょ|フョ": ["fyo"],
  "ま|マ": ["ma"],
  "み|ミ": ["mi"],
  "む|ム": ["mu"],
  "め|メ": ["me"],
  "も|モ": ["mo"],
  "みゃ|ミャ": ["mya"],
  "みぃ|ミィ": ["myi"],
  "みゅ|ミュ": ["myu"],
  "みぇ|ミェ": ["mye"],
  "みょ|ミョ": ["myo"],
  "や|ヤ": ["ya"],
  "ゆ|ユ": ["yu"],
  "よ|ヨ": ["yo"],
  "ら|ラ": ["ra"],
  "り|リ": ["ri"],
  "る|ル": ["ru"],
  "れ|レ": ["re"],
  "ろ|ロ": ["ro"],
  "りゃ|リャ": ["rya"],
  "りぃ|リィ": ["ryi"],
  "りゅ|リュ": ["ryu"],
  "りぇ|リェ": ["rye"],
  "りょ|リョ": ["ryo"],
  "わ|ワ": ["wa"],
  "うぁ|ウァ": ["wha"],
  "うぃ|ウィ": ["wi", "whi"],
  "うぇ|ウェ": ["we", "whe"],
  "うぉ|ウォ": ["who"],
  "を|ヲ": ["wo"],
  "ん|ン": ["nn", "n"],
  "ゔぁ|ヴァ": ["va", "vya"],
  "ゔぃ|ヴィ": ["vi", "vyi"],
  "ゔ|ヴ": ["vu"],
  "ゔぇ|ヴェ": ["ve", "vye"],
  "ゔぉ|ヴォ": ["vo"],
  "ゔゅ|ヴュ": ["vyu"],
  "ゔょ|ヴョ": ["vyo"],
  "っ|ッ": ["xtu", "xtsu", "ltu", "ltsu"],
  "ゎ|ヮ": ["xwa", "lwa"]
}, c = {};
for (const [w, t] of Object.entries(C)) {
  const [e, n] = w.split("|");
  t.forEach((a) => {
    c[a] ? (c[a].includes(e) || c[a].push(e), c[a].includes(n) || c[a].push(n)) : c[a] = [e, n];
  });
}
class m {
  constructor() {
    this.convertedStr = [], this.combinations = [];
  }
  /**
   * チャンク分けのメソッド
   * @param str 
   * @param size 
   * @returns chunks
   */
  splitIntoChunks(t, e) {
    const n = [];
    for (let a = 0; a < t.length; a += e)
      n.push(t.slice(a, a + e));
    return n;
  }
}
const u = class u extends m {
  constructor() {
    super(...arguments), this.optimizedMap = Object.freeze(
      Object.entries(
        C
      ).reduce((t, [e, n]) => (e.split("|").forEach((a) => {
        t[a] = n;
      }), t), {})
    ), this.patternCache = /* @__PURE__ */ new Map(), this.MAX_CACHE_SIZE = 1e3;
  }
  /**
   * かな・カナ → ローマ字変換
   * @param str 変換対象文字列
   * @param chunkSize チャンクサイズ
   */
  transliterate(t, e = 100) {
    if (!(t != null && t.length)) return null;
    try {
      const n = this.splitIntoChunks(t, e);
      let a = [];
      for (const i of n) {
        const h = p.toHalfWidth(i), o = this.generatePatternArray(h);
        if (!o.length) continue;
        const l = this.generateAllCombinations(o);
        this.mergeResults(a, l), this.patternCache.size > this.MAX_CACHE_SIZE && this.patternCache.clear();
      }
      return a.length ? a : null;
    } catch (n) {
      return {
        error: `変換エラーが発生しました: ${n instanceof Error ? n.message : String(n)}`
      };
    }
  }
  /**
   * チャンク処理の結果を合成
   */
  mergeResults(t, e) {
    for (const n of e) {
      const [a, i] = n;
      let h = !0;
      for (let o = 0; o < i.length - 1; o++) {
        const l = i[o], f = i[o + 1], r = u.CONSONANT_TRANS_ROMAN_CHARS.has(f);
        if (l.length === 1 && r) {
          const g = f.charAt(0);
          if (!l.startsWith(g)) {
            h = !1;
            break;
          }
        }
      }
      h && t.push([a, i]);
    }
  }
  /**
   * かな文字のローマ字パターンを配列で返す
   */
  generatePatternArray(t) {
    const e = this.patternCache.get(t);
    if (e) return e;
    const n = [];
    let a = 0;
    for (; a < t.length; ) {
      if (this.handleSpecialN(t, a, n)) {
        a++;
        continue;
      }
      if (this.handleTsu(t, a, n)) {
        a++;
        continue;
      }
      const i = this.handleYoon(t, a);
      if (i) {
        n.push(i.pattern), a += i.length;
        continue;
      }
      const h = this.optimizedMap[t[a]];
      n.push(h || [t[a]]), a++;
    }
    return t.length <= 10 && this.patternCache.set(t, n), n;
  }
  /**
   * 「ん」「ン」の特殊処理
   */
  handleSpecialN(t, e, n) {
    return u.N_CHARS.has(t[e]) && e + 1 < t.length && u.NA_LINE_CHARS.has(t[e + 1]) ? (n.push(["nn"]), !0) : u.N_CHARS.has(t[e]) ? (n.push(["n", "nn"]), !0) : !1;
  }
  /**
   * 「っ」「ッ」の処理
   */
  handleTsu(t, e, n) {
    if (!u.TSU_CHARS.has(t[e])) return !1;
    const a = t[e + 1];
    if (a && this.optimizedMap[a]) {
      const h = this.optimizedMap[a].map((o) => o.charAt(0));
      return n.push(h), !0;
    }
    return n.push(this.optimizedMap[t[e]]), !0;
  }
  /**
   * 拗音の処理
   */
  handleYoon(t, e) {
    if (e + 1 >= t.length) return null;
    const n = t.slice(e, e + 2), a = this.optimizedMap[n];
    return a ? { pattern: a, length: 2 } : null;
  }
  /**
   * ローマ字パターンの組み合わせを生成
   */
  generateAllCombinations(t) {
    const e = [];
    let n = [{ current: [], parts: [], index: 0 }];
    for (; n.length > 0; ) {
      const a = [];
      for (const { current: i, parts: h, index: o } of n) {
        if (o === t.length) {
          e.push([[i.join("")], h]);
          continue;
        }
        const f = t[o].reduce((r, g) => {
          const d = g.length;
          return r[d] = r[d] || [], r[d].push(g), r;
        }, []).flat();
        for (const r of f)
          a.push({
            current: i.concat(r),
            parts: h.concat(r),
            index: o + 1
          });
      }
      n = a;
    }
    return e;
  }
};
u.NA_LINE_CHARS = /* @__PURE__ */ new Set([
  "な",
  "に",
  "ぬ",
  "ね",
  "の",
  "ナ",
  "ニ",
  "ヌ",
  "ネ",
  "ノ"
]), u.N_CHARS = /* @__PURE__ */ new Set(["ん", "ン"]), u.TSU_CHARS = /* @__PURE__ */ new Set(["っ", "ッ"]), u.CONSONANT_TRANS_ROMAN_CHARS = /* @__PURE__ */ new Set([
  "ti",
  "chi",
  "hu",
  "fu",
  "zi",
  "ji",
  "tya",
  "cha",
  "tyu",
  "chu",
  "tyo",
  "cho"
]);
let A = u;
const y = class y extends m {
  /**
   * ローマ字 → かな・カナ変換
   * @param str 変換対象文字列
   * @param chunkSize チャンクサイズ
   */
  transliterate(t, e = 1e3) {
    if (!(t != null && t.length)) return null;
    try {
      const n = this.splitIntoChunks(t, e), a = [];
      for (const i of n) {
        const h = p.toHalfWidth(i), o = this.generatePatternArray(h);
        if (!o.length) continue;
        const l = this.generateAllCombinations(o), f = this.transformCombination(l);
        a.push(f);
      }
      return a.length ? this.mergeResults(a) : null;
    } catch (n) {
      return {
        error: `変換エラーが発生しました: ${n instanceof Error ? n.message : String(n)}`
      };
    }
  }
  /**
   * チャンク処理の結果を合成
   */
  mergeResults(t) {
    return [
      t.map((e) => e[0]).join(""),
      t.map((e) => e[1]).join("")
    ];
  }
  /**
   * ローマ字のかな文字パターンを配列で返す
   */
  generatePatternArray(t) {
    const e = [];
    let n = 0;
    for (; n < t.length; ) {
      if (this.handleSpecialN(t, n, e)) {
        n++;
        continue;
      }
      if (this.handleDoubleConsonant(t, n, e)) {
        n++;
        continue;
      }
      const a = this.matchPattern(t, n);
      if (a) {
        e.push(a.pattern), n += a.length;
        continue;
      }
      e.push([t[n], t[n]]), n++;
    }
    return e;
  }
  /**
   * 「ん」の特殊処理
   */
  handleSpecialN(t, e, n) {
    return t[e] === "n" && e + 1 < t.length && y.NA_LINE_CHARS.has(t.slice(e + 1, e + 3)) ? (n.push(c.n), !0) : !1;
  }
  /**
   * 促音の処理
   */
  handleDoubleConsonant(t, e, n) {
    return e + 1 < t.length && t[e] === t[e + 1] && y.CONSONANTS.has(t[e]) ? (n.push(c.xtu), !0) : !1;
  }
  /**
   * パターンマッチング
   */
  matchPattern(t, e) {
    for (const n of y.PATTERN_LENGTHS)
      if (e + n <= t.length) {
        const a = t.slice(e, e + n), i = c[a];
        if (i)
          return { pattern: i, length: n };
      }
    return null;
  }
  /**
   * ひらがな・カタカナのパターンを生成
   */
  generateAllCombinations(t) {
    const e = t.map((a) => a[0]).join(""), n = t.map((a) => a[1]).join("");
    return [[[p.toFullWidth(e)], [p.toFullWidth(n)]]];
  }
  /**
   * コンビネーション変換
   */
  transformCombination(t) {
    const [[e], [n]] = t[0];
    return [e, n];
  }
};
y.NA_LINE_CHARS = /* @__PURE__ */ new Set([
  "na",
  "ni",
  "nu",
  "ne",
  "no"
]), y.CONSONANTS = /* @__PURE__ */ new Set([
  "b",
  "c",
  "d",
  "f",
  "g",
  "h",
  "j",
  "k",
  "l",
  "m",
  "p",
  "q",
  "r",
  "s",
  "t",
  "v",
  "w",
  "x",
  "y",
  "z"
]), y.PATTERN_LENGTHS = [4, 3, 2, 1];
let S = y;
export {
  S as Japanizer,
  A as Romanizer
};
