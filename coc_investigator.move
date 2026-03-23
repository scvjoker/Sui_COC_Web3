module coc::investigator {
    use sui::object::{Self, UID};
    use sui::tx_context::{Self, TxContext};
    use sui::transfer;
    use std::string::String;

    /// 本合約基於《克蘇魯的呼喚》（CoC）第7版規則（第三章至第五章）
    /// 用於創建與儲存調查員（角色卡）

    /// 調查員（角色卡）的資料結構
    /// 擁有 key 與 store 能力，代表它可以作為一個獨立的 NFT 存在於 Sui 網路上
    struct Investigator has key, store {
        id: UID,
        name: String,
        age: u8,
        occupation: String, // 第二步：決定職業
        
        // 第三章：基礎屬性 (Attributes)
        // 範圍通常是 15 ~ 99，代表調查員的各項基本能力
        str: u8, // 力量 (STR)
        con: u8, // 體質 (CON)
        siz: u8, // 體型 (SIZ)
        dex: u8, // 敏捷 (DEX)
        app: u8, // 外貌 (APP)
        int: u8, // 智力 (INT)
        pow: u8, // 意志 (POW)
        edu: u8, // 教育 (EDU)
        luck: u8, // 幸運 (Luck)

        // 第三章/第五章：衍生屬性 (Derived Attributes)
        hp: u8,       // 生命值: 由 (CON + SIZ) / 10 決定
        mp: u8,       // 魔法值: 由 POW / 5 決定
        san: u8,      // 理智值: 初始等於 POW
        mov: u8,      // 移動速度: 由 STR, DEX, SIZ 與年齡決定
        build: i8,    // 體格: 由 STR 與 SIZ 決定
        db: String,   // 傷害加值 (Damage Bonus)

        // 第四章：技能 (Skills) 
        // 為了簡化合約，我們此處僅列出部分核心技能。
        // （在完整的合約中，可以使用動態欄位 Dynamic Fields 或 Table 來儲存完整的技能列表）
        skill_brawl: u8,        // 格鬥(鬥毆)
        skill_dodge: u8,        // 閃避 (初始為 DEX / 2)
        skill_spot_hidden: u8,  // 偵查
        skill_listen: u8,       // 聆聽
    }

    /// 創建一個新的調查員角色卡
    /// 屬性與技能多數情況下應由前端（透過玩家擲骰與建卡規則）計算好後傳入合約。
    public entry fun create_investigator(
        name: String,
        age: u8,
        occupation: String,
        str: u8, con: u8, siz: u8, dex: u8, app: u8, int: u8, pow: u8, edu: u8, luck: u8,
        hp: u8, mp: u8, san: u8, mov: u8, build: i8, db: String,
        skill_brawl: u8, skill_dodge: u8, skill_spot_hidden: u8, skill_listen: u8,
        ctx: &mut TxContext
    ) {
        let investigator = Investigator {
            id: object::new(ctx),
            name,
            age,
            occupation,
            str, con, siz, dex, app, int, pow, edu, luck,
            hp, mp, san, mov, build, db,
            skill_brawl, skill_dodge, skill_spot_hidden, skill_listen
        };

        // 將角色卡發送給發起交易的玩家（創建者）
        transfer::public_transfer(investigator, tx_context::sender(ctx));
    }

    /// 第五章：遊戲系統 - 更新角色卡狀態
    ///
    /// 扣除理智值（Sanity Check 失敗時觸發）
    public entry fun decrease_san(investigator: &mut Investigator, amount: u8) {
        if (investigator.san >= amount) {
            investigator.san = investigator.san - amount;
        } else {
            investigator.san = 0; // 0代表永久瘋狂
        }
    }

    /// 扣除生命值（戰鬥受傷或意外時觸發）
    public entry fun take_damage(investigator: &mut Investigator, amount: u8) {
        if (investigator.hp >= amount) {
            investigator.hp = investigator.hp - amount;
        } else {
            investigator.hp = 0; // 0代表死亡 (體質降為0)
        }
    }

    /// 第五章：幕間成長 - 增加技能點數
    /// 技能檢定成功後，可以在幕間進行成長檢定，成功則調用此函數增加技能點數。
    public entry fun improve_skill_brawl(investigator: &mut Investigator, amount: u8) {
        // 技能最高上限為 99
        if (investigator.skill_brawl + amount <= 99) {
            investigator.skill_brawl = investigator.skill_brawl + amount;
        } else {
            investigator.skill_brawl = 99;
        }
    }
}
