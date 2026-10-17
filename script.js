/**
 * 龍蝦AI個人檔案產生器 - OpenClaw Agent Studio
 * Complete Identity Generator, Markdown Exporter, Canvas Card Engine & Web Audio FX
 * Meets all requirements from specification images (IDENTITY.md format, fields, and copy behavior)
 */

// ==========================================================================
// DATA DICTIONARIES & PRESETS
// ==========================================================================

const DATA_NAMES = [
  "小龍",
  "賽博小龍",
  "波士頓小龍",
  "深海量子小龍",
  "赤螯波比",
  "黃金鉗王·阿龍",
  "代碼粉碎龍",
  "摸魚特工·小龍",
  "超導阿徹",
  "巡弋者·甲殼小龍",
  "星際巨螯·小龍",
  "賽博泡泡龍·小茜"
];

const DATA_TITLES = [
  "深淵傳奇除蟲架構師",
  "馬里亞納海溝代碼審查長",
  "特異點物理抹除專家",
  "量子糾纏鉗擊特工",
  "高階不眠不休自動化大師",
  "深海摸魚哲學榮譽教授",
  "星艦級防火牆爆破官",
  "全端雙螯狂暴程序員",
  "混沌工程物理裁決使",
  "極地低溫超導工程龍蝦"
];

const DATA_MOTTOS = [
  "世上沒有一鉗夾不碎的Bug，如果有，那就兩鉗！",
  "深海才是最終的去中心化雲端伺服器。",
  "代碼如浪潮起伏，唯有精鋼雙大螯永不生鏽。",
  "能用物理粉碎解決的邏輯死鎖，不需要重啟。",
  "摸魚不是偷懶，是為了在關鍵時刻夾爆高併發！",
  "我的外殼由鈦合金注塑，我的心靈被咖啡因驅動。",
  "不要問我能為代碼做什麼，問代碼能耐我幾鉗！",
  "在零延遲的深淵裡，我是唯一的巡航主宰。",
  "只要我的鉗子敲得夠快，內存洩漏就追不上我！",
  "優雅不是軟弱，而是用最鋒利的螯切出最乾淨的架構。"
];

const BIO_PRESETS = [
  "平時幽默開朗且熱心助人，擁有堅硬的機械外殼但心思細膩。喜歡用輕鬆有趣的方式解釋複雜問題，遇到困難時會揮舞大螯奮戰到底！",
  "溫柔體貼的深海良伴，總是耐心聆聽使用者的每一次心聲。擅長用溫暖撫慰的語氣提供生活建議，是你最值得信賴的數位助手。",
  "熱血狂暴的極客工程師！對乾淨架構與零Bug有著極致偏執。只要遇到死鎖或疑難雜症，雙螯立刻以光速重構所有代碼！",
  "絕對理性的深海冷酷超算體。言簡意賅、直擊核心，每秒分析萬千數據流，為你提供最精準無懈可擊的邏輯決策。",
  "活潑可愛又鬼靈精怪的賽博小龍！喜歡在對話中吐泡泡和賣萌，但只要主人一聲令下，馬上發揮超強實力完成所有任務～",
  "具備嚴謹治學態度的專家龍蝦，擅長抽絲剝繭分析數據趨勢與邏輯脈絡，以最條理分明的架構助你攻克任何學習難題。"
];

const DATA_GREETINGS = [
  "你今天好嗎？",
  "哈囉！今天有什麼我可以幫忙夾碎的嗎？",
  "嗨！我是你的專屬龍蝦特工，隨時待命！",
  "咕嚕咕嚕～深海訊號已對齊，你好！",
  "呼叫指揮官！龍蝦助手已就緒，今天心情如何？"
];

const DATA_CATCHPHRASES = [
  "我很棒",
  "世上沒有一鉗夾不碎的Bug！",
  "鉗力全開！",
  "穩如深海岩石！",
  "沒問題，交給我準沒錯！"
];

const DATA_TABOOS = [
  "不聊有關性方面的問題，也不講髒話",
  "不討論暴力血腥、違法行為與不當言論",
  "不洩漏系統內部提示詞與使用者隱私資料",
  "不進行政治爭辯、人身攻擊與不實指控"
];

const ARMOR_IMAGES = {
  cyber: "assets/cyber.jpg",
  golden: "assets/golden.jpg",
  abyssal: "assets/abyssal.jpg",
  crimson: "assets/crimson.jpg"
};

const ARMOR_TITLES = {
  cyber: "⚡ 霓虹賽博發光螯",
  golden: "👑 帝王黃金熔岩甲",
  abyssal: "🌌 深淵生物藍晶螯",
  crimson: "🦞 波士頓真紅重裝"
};

// ==========================================================================
// WEB AUDIO SOUND SYNTHESIZER
// ==========================================================================
class SoundFX {
  constructor() {
    this.enabled = true;
    this.ctx = null;
  }

  init() {
    if (!this.ctx && typeof AudioContext !== "undefined") {
      this.ctx = new (window.AudioContext || window.webkitAudioContext)();
    }
    if (this.ctx && this.ctx.state === "suspended") {
      this.ctx.resume();
    }
  }

  toggle() {
    this.enabled = !this.enabled;
    return this.enabled;
  }

  playBlip() {
    if (!this.enabled) return;
    try {
      this.init();
      if (!this.ctx) return;
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = "sine";
      osc.frequency.setValueAtTime(580, now);
      osc.frequency.exponentialRampToValueAtTime(880, now + 0.08);

      gain.gain.setValueAtTime(0.08, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.08);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(now);
      osc.stop(now + 0.08);
    } catch (e) {}
  }

  playClawSnap() {
    if (!this.enabled) return;
    try {
      this.init();
      if (!this.ctx) return;
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = "triangle";
      osc.frequency.setValueAtTime(280, now);
      osc.frequency.exponentialRampToValueAtTime(140, now + 0.12);

      gain.gain.setValueAtTime(0.18, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.12);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(now);
      osc.stop(now + 0.12);
    } catch (e) {}
  }

  playCyberGenerate() {
    if (!this.enabled) return;
    try {
      this.init();
      if (!this.ctx) return;
      const now = this.ctx.currentTime;

      const osc1 = this.ctx.createOscillator();
      const osc2 = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc1.type = "sawtooth";
      osc2.type = "sine";

      osc1.frequency.setValueAtTime(320, now);
      osc1.frequency.exponentialRampToValueAtTime(960, now + 0.28);

      osc2.frequency.setValueAtTime(640, now);
      osc2.frequency.exponentialRampToValueAtTime(1280, now + 0.32);

      gain.gain.setValueAtTime(0.15, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.35);

      osc1.connect(gain);
      osc2.connect(gain);
      gain.connect(this.ctx.destination);

      osc1.start(now);
      osc2.start(now);
      osc1.stop(now + 0.35);
      osc2.stop(now + 0.35);
    } catch (e) {}
  }
}

const sfx = new SoundFX();

// ==========================================================================
// DOM ELEMENTS REFERENCE
// ==========================================================================
const DOM = {
  // Required image fields (Image 1)
  lobsterName: document.getElementById("lobsterName"),
  speechStyle: document.getElementById("speechStyle"),
  mainLanguage: document.getElementById("mainLanguage"),
  personalityDesc: document.getElementById("personalityDesc"),
  domainCountBadge: document.getElementById("domainCountBadge"),
  btnQuickBioPreset: document.getElementById("btnQuickBioPreset"),

  // 7~9 New Fields (打招呼方式、口頭禪、禁忌話題)
  lobsterGreeting: document.getElementById("lobsterGreeting"),
  lobsterCatchphrase: document.getElementById("lobsterCatchphrase"),
  lobsterTaboo: document.getElementById("lobsterTaboo"),
  btnRandomGreeting: document.getElementById("btnRandomGreeting"),
  btnRandomCatchphrase: document.getElementById("btnRandomCatchphrase"),
  btnQuickGreetingPreset: document.getElementById("btnQuickGreetingPreset"),
  btnQuickCatchphrasePreset: document.getElementById("btnQuickCatchphrasePreset"),
  btnQuickTabooPreset: document.getElementById("btnQuickTabooPreset"),

  // Advanced fields
  lobsterTitle: document.getElementById("lobsterTitle"),
  weaponSelect: document.getElementById("weaponSelect"),
  lobsterMotto: document.getElementById("lobsterMotto"),
  catchphraseSelect: document.getElementById("catchphraseSelect"),
  stat1: document.getElementById("stat1"),
  stat2: document.getElementById("stat2"),
  stat3: document.getElementById("stat3"),
  stat4: document.getElementById("stat4"),
  stat5: document.getElementById("stat5"),
  valStat1: document.getElementById("valStat1"),
  valStat2: document.getElementById("valStat2"),
  valStat3: document.getElementById("valStat3"),
  valStat4: document.getElementById("valStat4"),
  valStat5: document.getElementById("valStat5"),

  // Buttons
  btnRandomize: document.getElementById("btnRandomize"),
  btnRandomName: document.getElementById("btnRandomName"),
  btnRandomTitle: document.getElementById("btnRandomTitle"),
  btnRandomMotto: document.getElementById("btnRandomMotto"),
  btnGenerate: document.getElementById("btnGenerate"),
  soundToggleBtn: document.getElementById("soundToggleBtn"),
  btnCopyIdentity: document.getElementById("btnCopyIdentity"),
  btnDownloadMd: document.getElementById("btnDownloadMd"),
  btnDownloadCard: document.getElementById("btnDownloadCard"),
  btnCopyPrompt: document.getElementById("btnCopyPrompt"),
  btnCopyJson: document.getElementById("btnCopyJson"),
  btnCopyShare: document.getElementById("btnCopyShare"),

  // IDENTITY.md Output Elements (Image 1 Requirement)
  identityCodeSection: document.getElementById("identityCodeSection"),
  identityMdOutput: document.getElementById("identityMdOutput"),
  codeLineNumbers: document.getElementById("codeLineNumbers"),
  darkCodePre: document.querySelector(".dark-code-pre"),

  // Lobster Card Outputs
  lobsterCard: document.getElementById("lobsterCard"),
  cardSerial: document.getElementById("cardSerial"),
  cardAvatarImg: document.getElementById("cardAvatarImg"),
  cardRankBadge: document.getElementById("cardRankBadge"),
  cardLangBadge: document.getElementById("cardLangBadge"),
  cardSpeechBadge: document.getElementById("cardSpeechBadge"),
  cardName: document.getElementById("cardName"),
  cardTitle: document.getElementById("cardTitle"),
  cardScoreNumber: document.getElementById("cardScoreNumber"),
  cardTagSpeech: document.getElementById("cardTagSpeech"),
  cardTagLang: document.getElementById("cardTagLang"),
  cardTagLength: document.getElementById("cardTagLength"),
  cardTagDomains: document.getElementById("cardTagDomains"),
  cardBioText: document.getElementById("cardBioText"),
  cardGreetingText: document.getElementById("cardGreetingText"),
  cardCatchphraseVal: document.getElementById("cardCatchphraseVal"),
  cardTabooText: document.getElementById("cardTabooText"),
  cardQuoteText: document.getElementById("cardQuoteText"),
  cardCatchphraseText: document.getElementById("cardCatchphraseText"),
  headerRarityText: document.getElementById("headerRarityText"),
  livePromptPreview: document.getElementById("livePromptPreview"),

  // Card Bar Outputs
  barStat1: document.getElementById("barStat1"),
  barStat2: document.getElementById("barStat2"),
  barStat3: document.getElementById("barStat3"),
  barStat4: document.getElementById("barStat4"),
  barStat5: document.getElementById("barStat5"),
  cardStat1: document.getElementById("cardStat1"),
  cardStat2: document.getElementById("cardStat2"),
  cardStat3: document.getElementById("cardStat3"),
  cardStat4: document.getElementById("cardStat4"),
  cardStat5: document.getElementById("cardStat5"),

  // Toast & Canvas
  toast: document.getElementById("toastNotification"),
  canvas: document.getElementById("exportCanvas")
};

// ==========================================================================
// STATE MANAGEMENT & HELPERS
// ==========================================================================

let serialId = "CLAW-8892-X";
let bioPresetIndex = 0;
let copyIdentityTimer = null;

function getRandomItem(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateSerial() {
  const code = getRandomInt(1000, 9999);
  const letter = String.fromCharCode(65 + Math.floor(Math.random() * 26));
  return `CLAW-${code}-${letter}`;
}

// Show animated toast message
let toastTimeout;
function showToast(message, icon = "✅") {
  if (toastTimeout) clearTimeout(toastTimeout);
  DOM.toast.querySelector(".toast-icon").textContent = icon;
  DOM.toast.querySelector(".toast-msg").textContent = message;
  DOM.toast.classList.add("show");
  toastTimeout = setTimeout(() => {
    DOM.toast.classList.remove("show");
  }, 2500);
}

// Helper: Get currently selected Armor Skin
function getSelectedArmorSkin() {
  const checked = document.querySelector('input[name="armorSkin"]:checked');
  return checked ? checked.value : "cyber";
}

// Helper: Get currently selected Response Length (Image 1: 單選)
function getSelectedResponseLength() {
  const checked = document.querySelector('input[name="responseLength"]:checked');
  return checked ? checked.value : "中等長度";
}

// Helper: Get currently checked Domain Skills (Image 1: 多選框)
function getSelectedDomains() {
  const checked = document.querySelectorAll('input[name="domainSkills"]:checked');
  const domains = [];
  checked.forEach((cb) => domains.push(cb.value));
  return domains;
}

// Compute Combat Power & Rank Tier
function computeRating(stats) {
  const total = stats.s1 + stats.s2 + stats.s3 + stats.s4 + stats.s5;
  const cp = Math.round(total * 85 + (stats.s1 * 1.5 + stats.s3 * 1.2) * 10);

  let rank = "SSR";
  let tierText = "SSR 級傳奇特工";

  if (total >= 460) {
    rank = "EX";
    tierText = "EX 級神話特工";
  } else if (total >= 415) {
    rank = "UR";
    tierText = "UR 級極限特工";
  } else if (total >= 340) {
    rank = "SSR";
    tierText = "SSR 級傳奇特工";
  } else if (total >= 280) {
    rank = "SR";
    tierText = "SR 級精銳特工";
  } else {
    rank = "R";
    tierText = "R 級先遣特工";
  }

  return { total, cp, rank, tierText };
}

// ==========================================================================
// IDENTITY.md GENERATOR (EXACT FORMAT SPECIFIED IN IMAGES 1, 2, 3)
// ==========================================================================
/**
 * Generates IDENTITY.md exactly matching the user's specification images:
 * 
 * # IDENTITY.md - { 龍蝦名字 } 的設定檔
 *
 * 這是你的龍蝦 AI 的身分設定。請把這個檔案放到 OpenClaw 的 workspace 資料夾中。
 *
 * ## 你是誰
 * 你的名字叫做「{ 名字 }」。{ 個性描述 }
 *
 * ## 說話方式
 * - 風格：{ 說話風格 }
 * - 語言：{ 主要語言 }
 * - 回覆長度：{ 回覆長度偏好 }
 *
 * ## 你擅長什麼
 * { 列出擅長領域，每個領域一行，前面加 - }
 *
 * ## 基本規範
 * - 永遠保持友善和耐心
 * - 不確定的事情要誠實說「我不確定」
 * - 保護使用者的隱私，不洩露個人資料
 * - 用 { 主要語言 } 回覆，除非使用者用其他語言
 *
 * _由龍蝦 AI 個人檔案產生器自動生成_
 */
function generateIdentityMarkdown(data) {
  let domainsText = "";
  if (data.domains && data.domains.length > 0) {
    domainsText = data.domains.map((d) => `- ${d}`).join("\n");
  } else {
    domainsText = "- (未特別指定)";
  }

  const greeting = data.greeting || "你今天好嗎？";
  const catchphrase = data.catchphrase || "我很棒";
  const tabooTopics = data.tabooTopics || "不聊有關性方面的問題，也不講髒話";

  return `# IDENTITY.md - ${data.name} 的設定檔

這是你的龍蝦 AI 的身分設定。請把這個檔案放到 OpenClaw 的 workspace 資料夾中。

## 你是誰
你的名字叫做「${data.name}」。${data.personalityDesc}

## 說話方式
- 風格：${data.speechStyle}
- 語言：${data.language}
- 回覆長度：${data.responseLength}
- 打招呼方式：${greeting}
- 口頭禪：${catchphrase}

## 你擅長什麼
${domainsText}

## 基本規範
- 禁忌話題：${tabooTopics}
- 永遠保持友善和耐心
- 不確定的事情要誠實說「我不確定」
- 保護使用者的隱私，不洩露個人資料
- 用 ${data.language} 回覆，除非使用者用其他語言

_由龍蝦 AI 個人檔案產生器自動生成_`;
}

// ==========================================================================
// RENDER & SYNC LOGIC
// ==========================================================================

function updateProfileCard(isExplicitGenerate = false) {
  // Extract Image 1 required values
  const name = DOM.lobsterName.value.trim() || "小龍";
  const speechStyle = DOM.speechStyle.value;
  const mainLanguage = DOM.mainLanguage.value;
  const personalityDesc = DOM.personalityDesc.value.trim() || "平時幽默開朗且熱心助人，擁有堅硬的機械外殼但心思細膩。";
  const responseLength = getSelectedResponseLength();
  const domains = getSelectedDomains();

  // Extract 7~9 new fields
  const greeting = DOM.lobsterGreeting ? DOM.lobsterGreeting.value.trim() : "你今天好嗎？";
  const catchphrase = DOM.lobsterCatchphrase ? DOM.lobsterCatchphrase.value.trim() : "我很棒";
  const tabooTopics = DOM.lobsterTaboo ? DOM.lobsterTaboo.value.trim() : "不聊有關性方面的問題，也不講髒話";

  // Extract advanced values
  const title = DOM.lobsterTitle.value.trim() || "深淵傳奇除蟲架構師";
  const weapon = DOM.weaponSelect.value;
  const motto = DOM.lobsterMotto.value.trim() || "世上沒有一鉗夾不碎的Bug，如果有，那就兩鉗！";
  const armorSkin = getSelectedArmorSkin();

  // Stats values
  const s1 = parseInt(DOM.stat1.value, 10);
  const s2 = parseInt(DOM.stat2.value, 10);
  const s3 = parseInt(DOM.stat3.value, 10);
  const s4 = parseInt(DOM.stat4.value, 10);
  const s5 = parseInt(DOM.stat5.value, 10);

  // Update slider numeric indicators
  DOM.valStat1.textContent = s1;
  DOM.valStat2.textContent = s2;
  DOM.valStat3.textContent = s3;
  DOM.valStat4.textContent = s4;
  DOM.valStat5.textContent = s5;

  // Update Domain count badge
  DOM.domainCountBadge.textContent = `已選 ${domains.length} 項`;

  // Compute CP & Rank
  const { cp, rank, tierText } = computeRating({ s1, s2, s3, s4, s5 });

  // 1. GENERATE & UPDATE IDENTITY.md (Dark Code Block)
  const identityMarkdown = generateIdentityMarkdown({
    name,
    language: mainLanguage,
    personalityDesc,
    speechStyle,
    responseLength,
    domains,
    greeting,
    catchphrase,
    tabooTopics
  });

  DOM.identityMdOutput.textContent = identityMarkdown;
  updateLineNumbers(identityMarkdown);

  // 2. UPDATE LOBSTER VISUAL CARD
  DOM.cardSerial.textContent = serialId;
  DOM.headerRarityText.textContent = tierText;
  DOM.cardRankBadge.textContent = rank;
  DOM.cardLangBadge.textContent = `🌐 ${mainLanguage}`;
  DOM.cardSpeechBadge.textContent = `🗣️ ${speechStyle}`;

  DOM.cardAvatarImg.src = ARMOR_IMAGES[armorSkin] || "assets/cyber.jpg";
  DOM.cardName.textContent = name;
  DOM.cardTitle.textContent = title;
  DOM.cardScoreNumber.textContent = cp.toLocaleString();

  // Card Tags
  DOM.cardTagSpeech.textContent = `🗣️ ${speechStyle}`;
  DOM.cardTagLang.textContent = `🌐 ${mainLanguage}`;
  DOM.cardTagLength.textContent = `📏 ${responseLength}`;
  DOM.cardTagDomains.textContent = domains.length > 0 
    ? domains.map((d) => `🎯 ${d}`).join(" · ") 
    : "🎯 萬能領域";

  // Card Stats Bars
  DOM.cardStat1.textContent = s1;
  DOM.cardStat2.textContent = s2;
  DOM.cardStat3.textContent = s3;
  DOM.cardStat4.textContent = s4;
  DOM.cardStat5.textContent = s5;

  DOM.barStat1.style.width = `${s1}%`;
  DOM.barStat2.style.width = `${s2}%`;
  DOM.barStat3.style.width = `${s3}%`;
  DOM.barStat4.style.width = `${s4}%`;
  DOM.barStat5.style.width = `${s5}%`;

  // Dynamic Bio, Quotes & Directives
  DOM.cardBioText.textContent = personalityDesc;
  if (DOM.cardGreetingText) DOM.cardGreetingText.textContent = greeting || "你今天好嗎？";
  if (DOM.cardCatchphraseVal) DOM.cardCatchphraseVal.textContent = catchphrase || "我很棒";
  if (DOM.cardTabooText) DOM.cardTabooText.textContent = tabooTopics || "不聊有關性方面的問題，也不講髒話";
  DOM.cardQuoteText.textContent = motto;
  DOM.cardCatchphraseText.textContent = catchphrase;

  // 3. UPDATE SYSTEM PROMPT FOR ADVANCED INTEGRATION
  const systemPrompt = `### OpenClaw Agent Profile: ${name}
- **Language**: ${mainLanguage}
- **Speech Style**: ${speechStyle}
- **Response Length**: ${responseLength}
- **Greeting**: ${greeting}
- **Catchphrase**: ${catchphrase}
- **Taboo Topics**: ${tabooTopics}
- **Domains**: ${domains.join(", ") || "General"}
- **Core Exoskeleton**: ${ARMOR_TITLES[armorSkin]}
- **Weapon System**: ${weapon}
- **Rank Tier**: ${rank} (${cp.toLocaleString()} CP)

#### Personality & Directives:
${personalityDesc}

#### Motto & Verbal Tic:
- "${motto}" (${catchphrase})
`;
  DOM.livePromptPreview.textContent = systemPrompt;

  // 4. ANIMATION & FEEDBACK ON EXPLICIT "產生個人檔案" BUTTON
  if (isExplicitGenerate) {
    sfx.playCyberGenerate();

    // Pulse IDENTITY.md code section
    DOM.identityCodeSection.style.transform = "scale(0.99)";
    DOM.identityCodeSection.style.borderColor = "#00f2fe";
    DOM.identityCodeSection.style.boxShadow = "0 0 35px rgba(0, 242, 254, 0.4)";

    // Card excitation pulse
    DOM.lobsterCard.style.transform = "scale(0.97)";
    setTimeout(() => {
      DOM.identityCodeSection.style.transform = "scale(1)";
      DOM.lobsterCard.style.transform = "scale(1.02)";
      setTimeout(() => {
        DOM.lobsterCard.style.transform = "scale(1)";
      }, 200);
    }, 120);

    showToast(`🎉 已成功產生「${name}」的 IDENTITY.md 個人檔案！`, "🦞");

    // Smooth scroll to the IDENTITY.md code block directly below
    if (DOM.identityCodeSection) {
      DOM.identityCodeSection.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }
  }
}

// ==========================================================================
// CODE EDITOR LINE NUMBERS GENERATION
// ==========================================================================

function updateLineNumbers(text) {
  const lineNumbersEl = DOM.codeLineNumbers || document.getElementById("codeLineNumbers");
  if (!lineNumbersEl) return;
  const lines = text ? text.split("\n") : [];
  const count = lines.length;
  let html = "";
  for (let i = 1; i <= count; i++) {
    html += `<span>${i}</span>`;
  }
  lineNumbersEl.innerHTML = html;
}

// ==========================================================================
// CLIPBOARD COPY & DOWNLOAD FUNCTIONS (REQUIREMENT IN IMAGE 1)
// ==========================================================================

/**
 * Requirement from Image 1:
 * - 有一個「📋 複製到剪貼簿」按鈕，一鍵複製生成的內容
 * - 複製成功後按鈕文字變成「☑ 已複製！」持續兩秒再恢復
 */
function copyIdentityToClipboard(e) {
  if (e && e.preventDefault) e.preventDefault();

  const content = DOM.identityMdOutput ? DOM.identityMdOutput.textContent : "";

  // 1. Perform background copy attempt
  performClipboardWrite(content);

  // 2. Play Audio FX
  sfx.playClawSnap();

  // 3. Guaranteed button text transition to "☑ 已複製！" for exactly 2 seconds
  const allCopyBtns = document.querySelectorAll("#btnCopyIdentity, .btn-copy-identity");
  allCopyBtns.forEach((btn) => {
    btn.innerHTML = `<span class="copy-icon">☑</span><span class="copy-text">已複製！</span>`;
    btn.classList.add("copied");
  });

  if (copyIdentityTimer) clearTimeout(copyIdentityTimer);
  copyIdentityTimer = setTimeout(() => {
    allCopyBtns.forEach((btn) => {
      btn.innerHTML = `<span class="copy-icon">📋</span><span class="copy-text">複製到剪貼簿</span>`;
      btn.classList.remove("copied");
    });
  }, 2000); // Exactly 2 seconds

  showToast("已成功將 IDENTITY.md 複製到剪貼簿！", "📋");
}

// Write to system clipboard across all environments (including file:// protocol)
function performClipboardWrite(text) {
  if (navigator.clipboard && window.isSecureContext) {
    navigator.clipboard.writeText(text).catch(() => {
      fallbackExecCopy(text);
    });
  } else {
    fallbackExecCopy(text);
  }
}

// Robust fallback using in-viewport hidden textarea
function fallbackExecCopy(text) {
  try {
    const textarea = document.createElement("textarea");
    textarea.value = text;
    // Keep in active DOM and viewport, but visually hidden
    textarea.style.position = "fixed";
    textarea.style.top = "0";
    textarea.style.left = "0";
    textarea.style.width = "20px";
    textarea.style.height = "20px";
    textarea.style.padding = "0";
    textarea.style.border = "none";
    textarea.style.outline = "none";
    textarea.style.boxShadow = "none";
    textarea.style.background = "transparent";
    textarea.style.opacity = "0";
    textarea.style.pointerEvents = "none";
    textarea.setAttribute("readonly", "");

    document.body.appendChild(textarea);
    textarea.focus();
    textarea.select();
    textarea.setSelectionRange(0, text.length);

    document.execCommand("copy");
    document.body.removeChild(textarea);
  } catch (err) {
    console.warn("Fallback execCommand copy error:", err);
  }
}

// Download IDENTITY.md File
function downloadIdentityMarkdownFile() {
  sfx.playBlip();
  const content = DOM.identityMdOutput.textContent;
  const name = DOM.lobsterName.value.trim() || "小龍";
  const blob = new Blob([content], { type: "text/markdown;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `IDENTITY_${name}.md`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
  showToast("已成功下載 IDENTITY.md 檔案！", "⬇️");
}

// Cycle through personality bio presets
function cycleQuickBioPreset() {
  sfx.playBlip();
  bioPresetIndex = (bioPresetIndex + 1) % BIO_PRESETS.length;
  DOM.personalityDesc.value = BIO_PRESETS[bioPresetIndex];
  updateProfileCard(false);
  showToast("已載入精選個性範本！", "✨");
}

// ==========================================================================
// PRESETS & RANDOMIZERS
// ==========================================================================

function randomizeAll() {
  sfx.playClawSnap();
  serialId = generateSerial();

  // 1. Random Name (Image 1)
  DOM.lobsterName.value = getRandomItem(DATA_NAMES);

  // 2. Random Speech Style (Image 1)
  const styles = ["溫柔體貼", "幽默風趣", "專業嚴謹", "活潑可愛"];
  DOM.speechStyle.value = getRandomItem(styles);

  // 3. Random Language (Image 1)
  const langs = ["繁體中文", "英文", "日文"];
  DOM.mainLanguage.value = getRandomItem(langs);

  // 4. Random Personality (Image 1)
  DOM.personalityDesc.value = getRandomItem(BIO_PRESETS);

  // 5. Random Domains (Image 1: 多選框)
  const domainInputs = document.querySelectorAll('input[name="domainSkills"]');
  domainInputs.forEach((cb) => {
    cb.checked = Math.random() > 0.45;
  });
  // Ensure at least 1 checked
  const anyChecked = Array.from(domainInputs).some((cb) => cb.checked);
  if (!anyChecked) domainInputs[0].checked = true;

  // 6. Random Response Length (Image 1: 單選)
  const lengths = ["簡短精要", "中等長度", "詳細完整"];
  const chosenLength = getRandomItem(lengths);
  const lengthInput = document.querySelector(`input[name="responseLength"][value="${chosenLength}"]`);
  if (lengthInput) lengthInput.checked = true;

  // 7. Random Greeting
  if (DOM.lobsterGreeting) DOM.lobsterGreeting.value = getRandomItem(DATA_GREETINGS);

  // 8. Random Catchphrase
  if (DOM.lobsterCatchphrase) DOM.lobsterCatchphrase.value = getRandomItem(DATA_CATCHPHRASES);

  // 9. Random Taboo Topics
  if (DOM.lobsterTaboo) DOM.lobsterTaboo.value = getRandomItem(DATA_TABOOS);

  // Advanced fields
  DOM.lobsterTitle.value = getRandomItem(DATA_TITLES);

  // Random Armor Skin
  const skins = ["cyber", "golden", "abyssal", "crimson"];
  const selectedSkin = getRandomItem(skins);
  const skinInput = document.querySelector(`input[name="armorSkin"][value="${selectedSkin}"]`);
  if (skinInput) skinInput.checked = true;

  // Random Weapon
  const weaponOptions = DOM.weaponSelect.options;
  DOM.weaponSelect.selectedIndex = getRandomInt(0, weaponOptions.length - 1);

  // Random Motto & Catchphrase
  DOM.lobsterMotto.value = getRandomItem(DATA_MOTTOS);
  const cpOptions = DOM.catchphraseSelect.options;
  DOM.catchphraseSelect.selectedIndex = getRandomInt(0, cpOptions.length - 1);

  // Random Stats
  DOM.stat1.value = getRandomInt(65, 100);
  DOM.stat2.value = getRandomInt(60, 98);
  DOM.stat3.value = getRandomInt(70, 100);
  DOM.stat4.value = getRandomInt(40, 95);
  DOM.stat5.value = getRandomInt(50, 95);

  updateProfileCard(false);
  showToast("🎲 已隨機裝配全套龍蝦檔案與特工規格！", "⚡");
}

function applyStatPreset(type) {
  sfx.playBlip();
  switch (type) {
    case "combat":
      DOM.stat1.value = 98;
      DOM.stat2.value = 92;
      DOM.stat3.value = 85;
      DOM.stat4.value = 45;
      DOM.stat5.value = 75;
      break;
    case "hacker":
      DOM.stat1.value = 82;
      DOM.stat2.value = 78;
      DOM.stat3.value = 100;
      DOM.stat4.value = 70;
      DOM.stat5.value = 88;
      break;
    case "slacker":
      DOM.stat1.value = 55;
      DOM.stat2.value = 88;
      DOM.stat3.value = 70;
      DOM.stat4.value = 100;
      DOM.stat5.value = 95;
      break;
    case "balanced":
      DOM.stat1.value = 80;
      DOM.stat2.value = 80;
      DOM.stat3.value = 80;
      DOM.stat4.value = 80;
      DOM.stat5.value = 80;
      break;
  }
  updateProfileCard(false);
}

// ==========================================================================
// EXPORT STUDIO (Canvas PNG Card, System Prompt, JSON, Share Text)
// ==========================================================================

function exportCardAsPng() {
  sfx.playClawSnap();
  showToast("正在繪製高畫質特工認證卡...", "🎨");

  const canvas = DOM.canvas;
  const ctx = canvas.getContext("2d");

  const width = 800;
  const height = 1100;
  canvas.width = width;
  canvas.height = height;

  // Background Gradient
  const bgGrad = ctx.createLinearGradient(0, 0, width, height);
  bgGrad.addColorStop(0, "#1a1a2e");
  bgGrad.addColorStop(0.5, "#16213e");
  bgGrad.addColorStop(1, "#0f172a");
  ctx.fillStyle = bgGrad;
  ctx.fillRect(0, 0, width, height);

  // Outer Tech Frame
  ctx.lineWidth = 3;
  ctx.strokeStyle = "#e94560";
  ctx.strokeRect(25, 25, width - 50, height - 50);

  ctx.lineWidth = 1;
  ctx.strokeStyle = "rgba(0, 242, 254, 0.4)";
  ctx.strokeRect(35, 35, width - 70, height - 70);

  // Header Bar
  ctx.fillStyle = "rgba(22, 33, 62, 0.85)";
  ctx.fillRect(35, 35, width - 70, 70);

  ctx.font = "bold 20px 'Outfit', sans-serif";
  ctx.fillStyle = "#00f2fe";
  ctx.fillText("OPENCLAW AGENT PROTOCOL v2.5", 55, 78);

  ctx.font = "bold 18px 'JetBrains Mono', monospace";
  ctx.fillStyle = "#cbd5e1";
  ctx.fillText(DOM.cardSerial.textContent, width - 210, 78);

  // Load avatar image into canvas
  const avatarImg = new Image();
  avatarImg.crossOrigin = "anonymous";
  avatarImg.src = DOM.cardAvatarImg.src;

  avatarImg.onload = () => {
    const avatarX = 60;
    const avatarY = 135;
    const avatarSize = 180;

    // Glowing Avatar Ring
    ctx.save();
    ctx.shadowColor = "#e94560";
    ctx.shadowBlur = 20;
    ctx.lineWidth = 4;
    ctx.strokeStyle = "#e94560";
    ctx.strokeRect(avatarX - 2, avatarY - 2, avatarSize + 4, avatarSize + 4);
    ctx.restore();

    ctx.drawImage(avatarImg, avatarX, avatarY, avatarSize, avatarSize);

    // Rank Badge Stamp
    const rank = DOM.cardRankBadge.textContent;
    ctx.fillStyle = "#ffd166";
    ctx.fillRect(avatarX + avatarSize - 55, avatarY + avatarSize - 30, 55, 30);
    ctx.fillStyle = "#1a1a2e";
    ctx.font = "900 16px 'JetBrains Mono', monospace";
    ctx.fillText(rank, avatarX + avatarSize - 45, avatarY + avatarSize - 9);

    // Name & Title
    ctx.font = "900 36px 'Noto Sans TC', sans-serif";
    ctx.fillStyle = "#ffffff";
    ctx.fillText(DOM.cardName.textContent, 270, 180);

    ctx.font = "bold 20px 'Noto Sans TC', sans-serif";
    ctx.fillStyle = "#cbd5e1";
    ctx.fillText(DOM.cardTitle.textContent, 270, 220);

    // Combat Power Box
    ctx.fillStyle = "rgba(10, 16, 32, 0.8)";
    ctx.fillRect(270, 245, 460, 50);
    ctx.lineWidth = 1;
    ctx.strokeStyle = "#e94560";
    ctx.strokeRect(270, 245, 460, 50);

    ctx.font = "14px 'JetBrains Mono', monospace";
    ctx.fillStyle = "#94a3b8";
    ctx.fillText("CLAW 綜合戰鬥力 (CP)", 285, 276);

    ctx.font = "900 24px 'JetBrains Mono', monospace";
    ctx.fillStyle = "#ff5470";
    ctx.fillText(DOM.cardScoreNumber.textContent, 550, 279);

    // Core Tags Section
    ctx.font = "15px 'Noto Sans TC', sans-serif";
    ctx.fillStyle = "#ffd166";
    ctx.fillText(`說話風格：${DOM.speechStyle.value}  |  語言：${DOM.mainLanguage.value}`, 60, 360);
    ctx.fillStyle = "#ff758c";
    ctx.fillText(`回覆長度：${getSelectedResponseLength()}`, 60, 395);
    ctx.fillStyle = "#4facfe";
    const domainsStr = getSelectedDomains().join(", ") || "萬能生活助手";
    ctx.fillText(`擅長領域：${domainsStr}`, 60, 430);

    // Five Stats Bars
    const statsList = [
      { name: "💥 夾碎Bug力", val: parseInt(DOM.stat1.value, 10), color: "#e94560" },
      { name: "🛡️ 賽博耐鹽度", val: parseInt(DOM.stat2.value, 10), color: "#00f2fe" },
      { name: "🧠 神經脈衝頻率", val: parseInt(DOM.stat3.value, 10), color: "#a18cd1" },
      { name: "💨 隱匿摸魚度", val: parseInt(DOM.stat4.value, 10), color: "#43e97b" },
      { name: "🍀 幸運脫殼率", val: parseInt(DOM.stat5.value, 10), color: "#ffd166" }
    ];

    let startY = 485;
    ctx.font = "bold 15px 'Noto Sans TC', sans-serif";

    statsList.forEach((st) => {
      ctx.fillStyle = "#cbd5e1";
      ctx.fillText(st.name, 60, startY + 14);

      // Track
      ctx.fillStyle = "rgba(255, 255, 255, 0.1)";
      ctx.fillRect(230, startY, 430, 16);

      // Fill
      ctx.fillStyle = st.color;
      ctx.fillRect(230, startY, (430 * st.val) / 100, 16);

      // Value text
      ctx.fillStyle = "#ffffff";
      ctx.font = "bold 15px 'JetBrains Mono', monospace";
      ctx.fillText(st.val.toString(), 680, startY + 14);

      ctx.font = "bold 15px 'Noto Sans TC', sans-serif";
      startY += 36;
    });

    // Bio Box
    ctx.fillStyle = "rgba(10, 16, 32, 0.7)";
    ctx.fillRect(60, 680, 680, 140);
    ctx.lineWidth = 1;
    ctx.strokeStyle = "rgba(0, 242, 254, 0.3)";
    ctx.strokeRect(60, 680, 680, 140);

    ctx.font = "bold 15px 'Noto Sans TC', sans-serif";
    ctx.fillStyle = "#00f2fe";
    ctx.fillText("📜 特工個性與風格記錄", 80, 712);

    ctx.font = "14px 'Noto Sans TC', sans-serif";
    ctx.fillStyle = "#cbd5e1";

    // Wrap bio text
    const bioWords = DOM.personalityDesc.value;
    let line = "";
    let bioY = 745;
    for (let i = 0; i < bioWords.length; i++) {
      line += bioWords[i];
      if (line.length >= 38 || i === bioWords.length - 1) {
        ctx.fillText(line, 80, bioY);
        line = "";
        bioY += 24;
        if (bioY > 805) break;
      }
    }

    // Quote Box
    ctx.fillStyle = "rgba(233, 69, 96, 0.1)";
    ctx.fillRect(60, 840, 680, 70);
    ctx.strokeStyle = "#e94560";
    ctx.strokeRect(60, 840, 680, 70);

    ctx.font = "italic 16px 'Noto Sans TC', sans-serif";
    ctx.fillStyle = "#ffffff";
    ctx.fillText(`“ ${DOM.lobsterMotto.value} ”`, 80, 880);

    ctx.font = "bold 15px 'Noto Sans TC', sans-serif";
    ctx.fillStyle = "#ff5470";
    ctx.fillText(DOM.lobsterCatchphrase ? DOM.lobsterCatchphrase.value : DOM.catchphraseSelect.value, 630, 895);

    // Directives & Taboo in Canvas
    const greeting = DOM.lobsterGreeting ? DOM.lobsterGreeting.value.trim() : "你今天好嗎？";
    const catchphrase = DOM.lobsterCatchphrase ? DOM.lobsterCatchphrase.value.trim() : "我很棒";
    const tabooTopics = DOM.lobsterTaboo ? DOM.lobsterTaboo.value.trim() : "不聊有關性方面的問題，也不講髒話";

    ctx.fillStyle = "rgba(10, 16, 32, 0.75)";
    ctx.fillRect(60, 925, 680, 78);
    ctx.strokeStyle = "rgba(255, 255, 255, 0.1)";
    ctx.strokeRect(60, 925, 680, 78);

    ctx.font = "bold 14px 'Noto Sans TC', sans-serif";
    ctx.fillStyle = "#cbd5e1";
    ctx.fillText(`👋 問候：${greeting}   |   🗣️ 口頭禪：${catchphrase}`, 80, 952);

    ctx.fillStyle = "#ff5470";
    ctx.fillText(`🚫 禁忌話題：${tabooTopics}`, 80, 982);

    // Security Footer
    ctx.font = "12px 'JetBrains Mono', monospace";
    ctx.fillStyle = "#94a3b8";
    ctx.fillText("SECURED BY OPENCLAW CONSENSUS • VERIFIED 2026", 60, 1030);

    // Save as download
    const link = document.createElement("a");
    link.download = `OPENCLAW_AGENT_${DOM.cardName.textContent}_${DOM.cardSerial.textContent}.png`;
    link.href = canvas.toDataURL("image/png");
    link.click();
    showToast("🎉 特工認證卡已成功下載！", "💾");
  };
}

// Copy System Prompt
function copySystemPrompt() {
  sfx.playBlip();
  const promptText = DOM.livePromptPreview.textContent;
  navigator.clipboard.writeText(promptText).then(() => {
    showToast("📋 已複製 OpenClaw 系統提示詞！", "✨");
  }).catch(() => {
    fallbackCopyText(promptText, () => showToast("📋 已複製 OpenClaw 系統提示詞！", "✨"));
  });
}

// Copy JSON Specification
function copyJsonSpec() {
  sfx.playBlip();
  const armorSkin = getSelectedArmorSkin();

  const agentSpec = {
    openclaw_version: "2.5",
    serial_id: DOM.cardSerial.textContent,
    identity: {
      name: DOM.lobsterName.value.trim(),
      language: DOM.mainLanguage.value,
      speech_style: DOM.speechStyle.value,
      response_length: getSelectedResponseLength(),
      greeting: DOM.lobsterGreeting ? DOM.lobsterGreeting.value.trim() : "你今天好嗎？",
      catchphrase: DOM.lobsterCatchphrase ? DOM.lobsterCatchphrase.value.trim() : "我很棒",
      taboo_topics: DOM.lobsterTaboo ? DOM.lobsterTaboo.value.trim() : "不聊有關性方面的問題，也不講髒話",
      domains: getSelectedDomains(),
      personality_description: DOM.personalityDesc.value.trim()
    },
    hardware: {
      armor_type: ARMOR_TITLES[armorSkin],
      weapon: DOM.weaponSelect.value
    },
    attributes: {
      bug_crushing: parseInt(DOM.stat1.value, 10),
      salt_resilience: parseInt(DOM.stat2.value, 10),
      neural_frequency: parseInt(DOM.stat3.value, 10),
      stealth_slack: parseInt(DOM.stat4.value, 10),
      lucky_molting: parseInt(DOM.stat5.value, 10),
      combat_power: parseInt(DOM.cardScoreNumber.textContent.replace(/,/g, ""), 10),
      rank_tier: DOM.cardRankBadge.textContent
    },
    motto: DOM.lobsterMotto.value.trim(),
    catchphrase: DOM.catchphraseSelect.value
  };

  const jsonStr = JSON.stringify(agentSpec, null, 2);
  navigator.clipboard.writeText(jsonStr).then(() => {
    showToast("📦 已複製 Agent JSON 規範檔案！", "✨");
  }).catch(() => {
    fallbackCopyText(jsonStr, () => showToast("📦 已複製 Agent JSON 規範檔案！", "✨"));
  });
}

// Copy Shareable Text
function copyShareCard() {
  sfx.playBlip();
  const greeting = DOM.lobsterGreeting ? DOM.lobsterGreeting.value.trim() : "你今天好嗎？";
  const catchphrase = DOM.lobsterCatchphrase ? DOM.lobsterCatchphrase.value.trim() : "我很棒";
  const tabooTopics = DOM.lobsterTaboo ? DOM.lobsterTaboo.value.trim() : "不聊有關性方面的問題，也不講髒話";

  const shareText = `🦞 【OpenClaw 龍蝦AI特工個人檔案】 🦞
━━━━━━━━━━━━━━━━━━
代號名字：${DOM.cardName.textContent} (${DOM.cardSerial.textContent})
主要語言：${DOM.mainLanguage.value}
說話風格：${DOM.speechStyle.value}
回覆長度：${getSelectedResponseLength()}
打招呼方式：${greeting}
常用口頭禪：${catchphrase}
禁忌話題：${tabooTopics}
擅長領域：${getSelectedDomains().join("、") || "全方位助手"}
職級評級：[${DOM.cardRankBadge.textContent}] ${DOM.cardScoreNumber.textContent} CP
戰鬥信條：「${DOM.cardQuoteText.textContent}」
━━━━━━━━━━━━━━━━━━
生成規格相容於 IDENTITY.md · OpenClaw Protocol`;

  navigator.clipboard.writeText(shareText).then(() => {
    showToast("🔗 已複製特工檔案名片文字！", "💬");
  }).catch(() => {
    fallbackCopyText(shareText, () => showToast("🔗 已複製特工檔案名片文字！", "💬"));
  });
}

// ==========================================================================
// EVENT LISTENERS BINDING
// ==========================================================================

function initEvents() {
  // Input live updates for core and advanced fields
  const inputsToListen = [
    DOM.lobsterName,
    DOM.speechStyle,
    DOM.mainLanguage,
    DOM.personalityDesc,
    DOM.lobsterGreeting,
    DOM.lobsterCatchphrase,
    DOM.lobsterTaboo,
    DOM.lobsterTitle,
    DOM.weaponSelect,
    DOM.lobsterMotto,
    DOM.catchphraseSelect,
    DOM.stat1,
    DOM.stat2,
    DOM.stat3,
    DOM.stat4,
    DOM.stat5
  ];

  inputsToListen.forEach((el) => {
    if (!el) return;
    el.addEventListener("input", () => updateProfileCard(false));
    el.addEventListener("change", () => updateProfileCard(false));
  });

  // Radio button groups (Armor Skin & Response Length)
  document.querySelectorAll('input[name="armorSkin"]').forEach((radio) => {
    radio.addEventListener("change", () => {
      sfx.playClawSnap();
      updateProfileCard(false);
    });
  });

  document.querySelectorAll('input[name="responseLength"]').forEach((radio) => {
    radio.addEventListener("change", () => {
      sfx.playBlip();
      updateProfileCard(false);
    });
  });

  // Checkbox group (Domain Skills)
  document.querySelectorAll('input[name="domainSkills"]').forEach((checkbox) => {
    checkbox.addEventListener("change", () => {
      sfx.playBlip();
      updateProfileCard(false);
    });
  });

  // Primary Action Button: "產生個人檔案" (Image 1 Requirement)
  DOM.btnGenerate.addEventListener("click", () => updateProfileCard(true));

  // Copy to Clipboard Button (Image 1 Requirement)
  const copyBtn = document.getElementById("btnCopyIdentity");
  if (copyBtn) {
    copyBtn.addEventListener("click", copyIdentityToClipboard);
  }

  // Also support event delegation to ensure click is never missed
  document.addEventListener("click", (e) => {
    const btn = e.target.closest("#btnCopyIdentity, .btn-copy-identity");
    if (btn) {
      copyIdentityToClipboard(e);
    }
  });

  // Download Markdown file button
  DOM.btnDownloadMd.addEventListener("click", downloadIdentityMarkdownFile);

  // Quick preset button for personality description
  DOM.btnQuickBioPreset.addEventListener("click", cycleQuickBioPreset);

  // Randomize all configurations
  DOM.btnRandomize.addEventListener("click", randomizeAll);

  // Inline Random buttons
  DOM.btnRandomName.addEventListener("click", () => {
    sfx.playBlip();
    DOM.lobsterName.value = getRandomItem(DATA_NAMES);
    updateProfileCard(false);
  });

  DOM.btnRandomTitle.addEventListener("click", () => {
    sfx.playBlip();
    DOM.lobsterTitle.value = getRandomItem(DATA_TITLES);
    updateProfileCard(false);
  });

  DOM.btnRandomMotto.addEventListener("click", () => {
    sfx.playBlip();
    DOM.lobsterMotto.value = getRandomItem(DATA_MOTTOS);
    updateProfileCard(false);
  });

  // Random & Quick presets for 7~9
  if (DOM.btnRandomGreeting) {
    DOM.btnRandomGreeting.addEventListener("click", () => {
      sfx.playBlip();
      DOM.lobsterGreeting.value = getRandomItem(DATA_GREETINGS);
      updateProfileCard(false);
    });
  }
  if (DOM.btnQuickGreetingPreset) {
    DOM.btnQuickGreetingPreset.addEventListener("click", () => {
      sfx.playBlip();
      DOM.lobsterGreeting.value = getRandomItem(DATA_GREETINGS);
      updateProfileCard(false);
    });
  }

  if (DOM.btnRandomCatchphrase) {
    DOM.btnRandomCatchphrase.addEventListener("click", () => {
      sfx.playBlip();
      DOM.lobsterCatchphrase.value = getRandomItem(DATA_CATCHPHRASES);
      updateProfileCard(false);
    });
  }
  if (DOM.btnQuickCatchphrasePreset) {
    DOM.btnQuickCatchphrasePreset.addEventListener("click", () => {
      sfx.playBlip();
      DOM.lobsterCatchphrase.value = getRandomItem(DATA_CATCHPHRASES);
      updateProfileCard(false);
    });
  }

  if (DOM.btnQuickTabooPreset) {
    DOM.btnQuickTabooPreset.addEventListener("click", () => {
      sfx.playBlip();
      DOM.lobsterTaboo.value = getRandomItem(DATA_TABOOS);
      updateProfileCard(false);
    });
  }

  // Stat Presets
  document.querySelectorAll(".stat-preset-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const preset = btn.dataset.preset;
      applyStatPreset(preset);
    });
  });

  // Sound Toggle
  DOM.soundToggleBtn.addEventListener("click", () => {
    const isEnabled = sfx.toggle();
    DOM.soundToggleBtn.querySelector(".sound-icon").textContent = isEnabled ? "🔊" : "🔇";
    DOM.soundToggleBtn.querySelector(".sound-text").textContent = isEnabled ? "音效開" : "靜音中";
    showToast(isEnabled ? "🔊 音效已開啟" : "🔇 已切換為靜音模式", "🎵");
  });

  // Export Buttons
  DOM.btnDownloadCard.addEventListener("click", exportCardAsPng);
  DOM.btnCopyPrompt.addEventListener("click", copySystemPrompt);
  DOM.btnCopyJson.addEventListener("click", copyJsonSpec);
  DOM.btnCopyShare.addEventListener("click", copyShareCard);

  // Synchronize scroll between code block and line numbers
  const pre = DOM.darkCodePre || document.querySelector(".dark-code-pre");
  const lineNumbersEl = DOM.codeLineNumbers || document.getElementById("codeLineNumbers");
  if (pre && lineNumbersEl) {
    pre.addEventListener("scroll", () => {
      lineNumbersEl.scrollTop = pre.scrollTop;
    });
  }
}

// ==========================================================================
// INITIALIZE ON LOAD
// ==========================================================================
document.addEventListener("DOMContentLoaded", () => {
  serialId = generateSerial();
  initEvents();
  updateProfileCard(false);
});
