const pptxgen = require("pptxgenjs");
const fs = require("fs");

const pres = new pptxgen();
pres.layout = "LAYOUT_16x9";
pres.title = "Sui_Cathulu [CoC-W3P] Presentation";
pres.author = "Antigravity Agent";

// Paths to images (using absolute paths provided by the tool)
const IMG_COVER = "C:\\Users\\鳩可\\.gemini\\antigravity\\brain\\deb73878-737a-4caf-b40d-82893f709095\\slide_cover_bg_1775490476070.png";
const IMG_PROBLEM = "C:\\Users\\鳩可\\.gemini\\antigravity\\brain\\deb73878-737a-4caf-b40d-82893f709095\\slide_problem_bg_final_1775490539991.png";
const IMG_TECH = "C:\\Users\\鳩可\\.gemini\\antigravity\\brain\\deb73878-737a-4caf-b40d-82893f709095\\slide_tech_bg_final_1775490557304.png";
const IMG_ECONOMY = "C:\\Users\\鳩可\\.gemini\\antigravity\\brain\\deb73878-737a-4caf-b40d-82893f709095\\slide_economy_bg_final_1775490573990.png";
const IMG_UI = "C:\\Users\\鳩可\\.gemini\\antigravity\\brain\\deb73878-737a-4caf-b40d-82893f709095\\sui_cathulu_landing_page_1775490511262.png";

// Helper for Slide Styling
const TITLE_STYLE = { x: 0.5, y: 0.5, w: "90%", fontSize: 36, color: "D8CCBB", fontFace: "Georgia", bold: true };
const SUBTITLE_STYLE = { x: 0.5, y: 1.2, w: "90%", fontSize: 18, color: "A7BEAE", italic: true };
const BODY_STYLE = { x: 0.8, y: 2.0, w: "80%", fontSize: 16, color: "FFFFFF", fontFace: "Calibri", bullet: true };

// Slide 1: Cover
let slide1 = pres.addSlide();
slide1.background = { path: IMG_COVER };
slide1.addText("Cthulhu Web3 Protocol", { ...TITLE_STYLE, y: 2.0, align: "center", fontSize: 44 });
slide1.addText("當你凝視區塊鏈，深淵也在計算你的 SAN 值", { ...SUBTITLE_STYLE, y: 3.0, align: "center", color: "FF0000" });

// Slide 2: Problem
let slide2 = pres.addSlide();
slide2.background = { path: IMG_PROBLEM };
slide2.addText("TRPG 跑團的信任危機", TITLE_STYLE);
slide2.addText([
    { text: "KP/GM 惡意斷更：故事永遠沒有結局", options: { bullet: true, breakLine: true } },
    { text: "玩家中途跳車：原本的冒險戛然而止", options: { bullet: true, breakLine: true } },
    { text: "骰子公平性存疑：後端演算可能被竄改", options: { bullet: true, breakLine: true } }
], BODY_STYLE);

// Slide 3: Solution
let slide3 = pres.addSlide();
slide3.background = { path: IMG_TECH };
slide3.addText("Sui 區塊鏈的信譽制衡", TITLE_STYLE);
slide3.addText([
    { text: "雙向質押機制 (Dual-Staking)：KP 與玩家都有經濟誘因完成遊戲", options: { bullet: true, breakLine: true } },
    { text: "時間鎖對抗系統：自動結算與多簽賠償機制", options: { bullet: true, breakLine: true } },
    { text: "鏈上信譽系統：生涯戰績轉換為不可竄改的榮譽", options: { bullet: true, breakLine: true } }
], BODY_STYLE);

// Slide 4: Real Fair Play
let slide4 = pres.addSlide();
slide4.background = { path: IMG_TECH };
slide4.addText("sui::random - 絕對公平的鏈上骰", TITLE_STYLE);
slide4.addText([
    { text: "每次「理智檢定」都在鏈上即時生成隨機數", options: { bullet: true, breakLine: true } },
    { text: "完全透明，無法預測也無法事後竄改", options: { bullet: true, breakLine: true } },
    { text: "真正的 Web3 遊戲體驗：把命運交給機率，而非伺服器", options: { bullet: true, breakLine: true } }
], BODY_STYLE);

// Slide 5: Economy
let slide5 = pres.addSlide();
slide5.background = { path: IMG_ECONOMY };
slide5.addText("遊戲經濟與代幣銷毀", TITLE_STYLE);
slide5.addText([
    { text: "內建 USDC 與 TAX_COIN 購買機制", options: { bullet: true, breakLine: true } },
    { text: "代幣銷毀 (Token Sink)：消費即進入黑洞地址，抑制通膨", options: { bullet: true, breakLine: true } },
    { text: "靈魂綁定墓誌銘 (SBT)：為你的傳奇冒險鑄造永久紀念", options: { bullet: true, breakLine: true } }
], BODY_STYLE);

// Slide 6: Immersive UI
let slide6 = pres.addSlide();
slide6.background = { color: "1E1E1E" };
slide6.addText("沈浸式克蘇魯終端介面", TITLE_STYLE);
slide6.addImage({ path: IMG_UI, x: 0.5, y: 1.5, w: 9, h: 3.5 });
slide6.addText("結合復古手稿質感與現代 Web3 錢包互動", { x: 0.5, y: 5.2, w: 9, fontSize: 14, color: "A7BEAE", align: "center" });

// Slide 7: Conclusion
let slide7 = pres.addSlide();
slide7.background = { path: IMG_COVER, transparency: 80 };
slide7.addText("一起擁抱理智的消亡", { ...TITLE_STYLE, align: "center", y: 2.0 });
slide7.addText("Contact: GitHub @Sui_Cathulu", { ...SUBTITLE_STYLE, align: "center", y: 3.0 });

// Write the presentation
pres.writeFile({ fileName: "Sui_Cathulu_Presentation.pptx" })
    .then(fileName => {
        console.log(`Presentation saved as: ${fileName}`);
    })
    .catch(err => {
        console.error("Error creating presentation:", err);
    });
