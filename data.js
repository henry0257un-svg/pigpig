window.CHAPTERS = [
  {
    num:"CHAPTER 01", title:"不存在的記憶", sub:"妳看見的，真的是過去嗎？", progress:8, image:"assets/chapter_1.png",
    scenes:[
      {eyebrow:"PROLOGUE // 00:17", line:"凌晨 00:17。", sub:"手機突然跳出一個從未見過的檔案：MEMORY_404。"},
      {eyebrow:"PROLOGUE // SIGNAL FOUND", line:"沒有通知。\n沒有寄件人。\n也沒有任何說明。", sub:"系統只告訴妳：有一段屬於妳的記憶正在消失。"},
      {eyebrow:"PROLOGUE // MEMORY DETECTED", line:"「偵測到一段不應存在的記憶。」", sub:"畫面閃過不到一秒，妳甚至來不及看清楚。"},
      {eyebrow:"PROLOGUE // OWNER MATCH", line:"記憶持有人：妳。", sub:"但妳完全不記得它。"}
    ],
    puzzle:{type:"basic", label:"PUZZLE 01 // CALIBRATION", title:"記憶校準", terminal:"SYSTEM MESSAGE<br>在繼續之前，系統必須確認妳能辨認『記憶的基本單位』。", clue:"我沒有形狀，卻一直向前。<br>我抓不住，但照片可以留下我的某一瞬間。<br><br>我是什麼？", answers:["時間","TIME"], hint:"提示：我們總說它過得很快，也總想把某一刻留下。", placeholder:"輸入答案"}
  },
  {
    num:"CHAPTER 02", title:"螢幕外的證據", sub:"如果它只是一個網站，現實裡為什麼會留下識別碼？", progress:20, image:"assets/chapter_2.png",
    scenes:[
      {eyebrow:"MEMORY // PARTIALLY RESTORED", line:"雜訊短暫消失了。", sub:"系統找到一段實體識別資料，但內容只剩四個字元。"},
      {eyebrow:"TRACE // PHYSICAL", line:"第一個痕跡不是禮物。", sub:"它只是證明 MEMORY_404 並不只存在於螢幕裡。"},
      {eyebrow:"TRACE // WARNING", line:"「記住這組識別碼。」", sub:"它之後還會再次出現。"}
    ],
    puzzle:{type:"basic", label:"PUZZLE 02 // PHYSICAL TRACE", title:"輸入識別碼", terminal:"PHYSICAL TRACE ........ DETECTED<br>FILE NAME ............. MEMORY_404<br>OBJECT TYPE ........... ID CARD", clue:"輸入妳取得的 MEMORY_404 識別碼。", answers:["M404","MEMORY404"], hint:"提示：如果妳手上有一張 MEMORY_404 小卡，答案就在上面。", placeholder:"輸入識別碼"}
  },
  {
    num:"CHAPTER 03", title:"感官檔案", sub:"第一段實體記憶被兩層加密封存。", progress:36, image:"assets/chapter_3.png",
    scenes:[
      {eyebrow:"SENSORY FILE // FOUND", line:"這次恢復的，不是完整畫面。", sub:"系統只讀到了顏色、觸感，以及一個模糊的甜味。"},
      {eyebrow:"IMAGE // CORRUPTED", line:"影像被切成六塊，而且方向全部錯亂。", sub:"先把它修復，真正的解碼方式才會出現。"},
      {eyebrow:"ENCRYPTION // ACTIVE", line:"「第一段記憶被加密了。」", sub:"修好畫面之後，妳還需要解開第二層密碼。"}
    ],
    puzzle:{type:"gift1", label:"PUZZLE 03 // SENSORY FILE", title:"修復第一段實體記憶", terminal:"IMAGE ........ CORRUPTED<br>ENCRYPTION ... ACTIVE<br>LAYERS ........ 2", hint:"先修復影像。第二層會告訴妳要使用哪種位移方式。"}
  },
  {
    num:"CHAPTER 04", title:"同源副本", sub:"第二段記憶和第一段幾乎相同，但尺寸完全不同。", progress:52, image:"assets/chapter_4.png",
    scenes:[
      {eyebrow:"MEMORY 01 // VERIFIED", line:"第一段實體記憶已完成影像核對。", sub:"系統卻立刻偵測到另一個相似度 92% 的訊號。"},
      {eyebrow:"DUPLICATE // FOUND", line:"它不是新的來源。", sub:"更像是第一段記憶被縮小之後留下的副本。"},
      {eyebrow:"DECODER CARD // REQUIRED", line:"「妳已經拿到解開它的工具。」", sub:"第一份記憶附帶的 MEMORY DECODER CARD，現在才真正派上用場。"}
    ],
    puzzle:{type:"gift2", label:"PUZZLE 04 // DUPLICATE", title:"找出同源副本", terminal:"SOURCE MATCH ....... 92%<br>SIZE ............... UNKNOWN<br>DECODER ............ REQUIRED", hint:"每個異常點都會給妳一組座標。座標是『列、欄』，再拿去對照第一份禮物上的 MEMORY DECODER CARD。"}
  },
  {
    num:"CHAPTER 05", title:"時間錯位", sub:"有四張記憶影像被打亂了時間順序。", progress:68, image:"assets/chapter_5.png",
    scenes:[
      {eyebrow:"PAIR // VERIFIED", line:"兩段實體記憶已完成核對。", sub:"但下一段資料不是物件，而是四個被打亂的時間片段。"},
      {eyebrow:"TIMESTAMP // DAMAGED", line:"時間戳記全部損毀。", sub:"妳只能從天空、路燈與城市亮度判斷先後。"},
      {eyebrow:"FRAGMENT KEY // HIDDEN", line:"「正確順序會產生一組 Fragment Key。」", sub:"先記住它。現在還不會告訴妳它有什麼用。"}
    ],
    puzzle:{type:"timeline", label:"PUZZLE 05 // TIMESTAMP", title:"重建時間順序", terminal:"TIMESTAMPS ......... DAMAGED<br>FRAGMENTS .......... 4<br>OUTPUT ............. UNKNOWN", hint:"從最早到最晚排列：先看天空，再看路燈，最後看城市招牌。"}
  },
  {
    num:"CHAPTER 06", title:"資料污染", sub:"最後一段解碼方式被雜訊掩蓋。", progress:82, image:"assets/chapter_6.png",
    scenes:[
      {eyebrow:"FRAGMENT KEY // STORED", line:"時間順序已復原。", sub:"Fragment Key 已儲存，但系統又遭到新的訊號干擾。"},
      {eyebrow:"SIGNAL // NOISY", line:"解碼器的頻率偏離了。", sub:"調回 MEMORY_404 真正的頻率，才能讀出最後的解碼模式。"},
      {eyebrow:"DECODER MODE // HIDDEN", line:"「這一次，不需要猜。」", sub:"把頻率調對，系統會直接告訴妳最後一種密碼規則。"}
    ],
    puzzle:{type:"frequency", label:"PUZZLE 06 // SIGNAL", title:"校正記憶頻率", terminal:"SIGNAL .............. UNSTABLE<br>DECODER MODE ........ HIDDEN<br>REFERENCE ........... MEMORY_404", hint:"提示：系統名稱本身就是妳要找的頻率。"}
  },
  {
    num:"CHAPTER 07", title:"最後的封存", sub:"最後一張影像還沒有真正恢復。", progress:94, image:"assets/chapter_7.png",
    scenes:[
      {eyebrow:"FINAL FRAME // CORRUPTED", line:"最後的資料已經全部到齊。", sub:"Fragment Key、解碼模式都已經存在，只剩一張嚴重失焦的影像。"},
      {eyebrow:"OPTICAL RECOVERY", line:"妳必須自己把畫面調回正確狀態。", sub:"焦點、曝光與雜訊都回到合理範圍後，最後的密碼才會出現。"},
      {eyebrow:"FINAL AUTHORIZATION", line:"「這一次，前面得到的東西全部都有用。」", sub:"不要忘記 CHAPTER 05 留下的 Fragment Key。"}
    ],
    puzzle:{type:"final", label:"PUZZLE 07 // FINAL ARCHIVE", title:"解開最後封存", terminal:"FINAL FRAME ......... CORRUPTED<br>DECODER MODE ........ STORED<br>FRAGMENT KEY ........ STORED", hint:"先把三個影像參數調到系統顯示 LOCKED，再用上一章得到的解碼模式處理數字。"}
  }
];