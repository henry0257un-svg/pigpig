MEMORY_404 完整重製版

開啟 index.html 即可開始。
這版已經：
1. 全部漫畫換成新圖
2. 故事頁改成漫畫滿版背景
3. 女主角依照提供照片重新設計
4. 保留獨立分頁流程：故事頁 -> 章節頁 -> 解謎頁

答案：
CH1：時間
CH2：M404 / MEMORY404
CH3：草莓 / 草莓熊 / STRAWBERRY
CH4：鑰匙 / KEY
CH5：枕頭 / 床 / PILLOW / BED
CH6：鏡子 / MIRROR
CH7：自由回答（至少 2 個字）

部署提醒：
要上傳到 GitHub Pages / Vercel / Netlify，請整個資料夾一起上傳，不要只傳 index.html。


新增：
5. 所有篇章故事圖已直接把文字打在圖片上
6. 每一幕都有獨立的直式故事圖（共 20 幕）


Responsive 更新：
7. 已調整成手機 / 平板 / 電腦都會完整顯示圖片（不再裁切）


更新：已新增「回上一頁」按鈕。
- story.html：可回上一幕；若已在第一幕則返回上一頁/首頁。
- chapter.html：回故事頁。
- puzzle.html：回章節頁。
- camera.html：回最後一章解謎頁。
- final.html：回相機頁。
- common.js：新增 goBack()。
- style.css：新增回上一頁按鈕樣式。


PUZZLE V2 更新：
CH1 時間
CH2 M404
CH3 圖片旋轉 → Caesar Shift -3 → STRAWBERRY → 授權碼 M-031 → 大熊拍照核對
CH4 找異常座標 → Polybius Decoder Card → SMALL → 授權碼 M-204 → 雙熊拍照核對
CH5 時間排序 → Fragment Key 4047
CH6 頻率校正 404 → 解碼模式 A1Z26
CH7 焦點/曝光/雜訊 → 03 01 13 05 18 01 → CAMERA → 輸入 4047 → 授權碼 M-404 → 三件禮物拍照核對

新增 verify.html 與 decoder-card.html。decoder-card.html 可直接開啟後列印，綁在第一隻大草莓熊上。


V3 新增：pig-memory.html（可拖曳旋轉的點線立體豬頭＋5個互動記憶節點）。
CH7 完成 CAMERA + Fragment Key 後不再直接進 verify，而會出現「下一頁｜開啟記憶節點」按鈕。
Pig Archive 看完 5 個節點後才解鎖「繼續最後核對」，再進 verify.html?g=3。


V4 更新：
1. 豬頭頁移到最終 100% 結局之後，成為最後一頁。
2. CH7 解完後先進 verify.html?g=3 做相機實體核對，再進 final.html。
3. final.html 加入使用者提供的生日長文、藏頭詩與「記得看看相機相簿」。
4. final.html 最後新增「最後一頁｜開啟記憶節點」前往 pig-memory.html。
5. 豬頭模型放大，增加頭部網格、內外耳、眼睛、鼻吻、鼻孔與臉部輪廓細節。
6. 節點照片彈窗改為依圖片原始比例自動縮放，不再固定 16:9 裁切。
7. 豬頭頁是終點，5/5 節點開啟後只顯示 ARCHIVE COMPLETE，不再跳到其他流程。
