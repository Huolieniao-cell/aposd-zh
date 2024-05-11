import{_ as d}from"./douban-DT6lsHYO.js";import{_ as s,r as n,o as i,c,a as e,b as l,w as r,d as t,e as a}from"./app-JcZaCeIz.js";const u={},_=a('<h2 id="簡介" tabindex="-1"><a class="header-anchor" href="#簡介"><span>簡介</span></a></h2><p><img src="'+d+'" alt=""></p><p>《軟體設計的哲學》（英文原名：A Philosophy of Software Design）是關於軟體設計的：如何將複雜的軟體系統分解成模組（如類和方法），以便這些模組可以相對獨立地實現。本書首先介紹了軟體設計的基本問題，也就是對複雜性的管理，然後討論了一些在完成軟體設計的過程中涉及到的哲學問題，並提出了一系列可以在軟體設計過程中應用的設計原則。本書還介紹了一些可用來識別設計問題的危險訊號。您可以透過應用本書中的想法來減少大型軟體系統的複雜性，以便能更快地編寫軟體。</p><h2 id="目錄" tabindex="-1"><a class="header-anchor" href="#目錄"><span>目錄</span></a></h2>',4),p=e("h2",{id:"翻譯說明",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#翻譯說明"},[e("span",null,"翻譯說明")])],-1),f={href:"https://github.com/Cactus-proj/A-Philosophy-of-Software-Design-zh",target:"_blank",rel:"noopener noreferrer"},g={href:"https://github.com/Go7hic/A-Philosophy-of-Software-Design",target:"_blank",rel:"noopener noreferrer"},m={href:"https://github.com/luojiego/A-Philosophy-of-Software-Design-zh",target:"_blank",rel:"noopener noreferrer"},b={href:"https://github.com/yingang/aposd-zh",target:"_blank",rel:"noopener noreferrer"},w={href:"https://yingang.github.io/aposd-zh/",target:"_blank",rel:"noopener noreferrer"},z={href:"https://github.com/gdut-yy",target:"_blank",rel:"noopener noreferrer"},k={href:"https://github.com/liquid207",target:"_blank",rel:"noopener noreferrer"},y={href:"https://github.com/wanghuanwei",target:"_blank",rel:"noopener noreferrer"},x={href:"https://github.com/luojiego",target:"_blank",rel:"noopener noreferrer"},P={href:"https://github.com/BlackGlory",target:"_blank",rel:"noopener noreferrer"},v={href:"https://github.com/inkydragon",target:"_blank",rel:"noopener noreferrer"},j=e("p",null,"出於尊重原作版權的考慮，在完整的校訂工作完成之後，我刪除了與中文並列對照的英文內容，對於純英文內容也刪除了主體部分，只保留了前言以及各個章節的概要和總結。如果您在閱讀過程中，發現有翻譯不當的地方，或者有其他建議，歡迎提交相應的 PR 或 Issue。",-1),R=e("code",null,"opencc",-1),S={href:"https://yingang.github.io/aposd-zh/zh-tw/",target:"_blank",rel:"noopener noreferrer"},C=a('<h2 id="術語翻譯" tabindex="-1"><a class="header-anchor" href="#術語翻譯"><span>術語翻譯</span></a></h2><p>翻譯是個比較困難的事情，除了個人水平有限，也有很多見仁見智的地方，所以這裡先列出一些術語的翻譯選擇和背後的考慮因素，以供參考，並至少在本書籍的翻譯過程中保持相對統一，也歡迎提 Issue 探討。</p><table><thead><tr><th>英文</th><th>中文</th><th>說明</th></tr></thead><tbody><tr><td>bug</td><td>缺陷 / 程式碼缺陷</td><td>沒有用“錯誤”是希望避免與 error 等術語的翻譯混淆</td></tr><tr><td>change</td><td>變更</td><td>針對程式碼的時候，更多使用“變更”而不是“改變”，但根據實際的上下文而定</td></tr><tr><td>complexity</td><td>複雜性</td><td>沒有用“複雜度”，類似的還有“依賴性（dependency）”和“模糊性（obscurity）”</td></tr><tr><td>deep module / class</td><td>深模組 / 深類</td><td>沒有用“深層”是希望避免與 layer 和 level 等術語的翻譯混淆</td></tr><tr><td>define error out of existence</td><td>透過定義來規避錯誤</td><td>類似的還有“透過設計來規避特殊情況（design special cases out of existence）”</td></tr><tr><td>dispatcher</td><td>分發器</td><td>沒有用“排程器”是希望避免與 scheduler 等術語的翻譯混淆</td></tr><tr><td>information leakage</td><td>資訊洩露</td><td>沒有用“洩漏”</td></tr><tr><td>pass-through</td><td>透傳</td><td>用於“透傳方法”、“透傳變數”、“透傳引數”等場景</td></tr><tr><td>public method / variables</td><td>公有方法 / 公有變數</td><td>沒有用“公開”是希望與 expose 和 exposure 等術語的翻譯混淆</td></tr><tr><td>selection</td><td>區域選擇 / 選擇的區域 / 所選區域</td><td>影象介面文字編譯器中的示例，直接翻譯成“選擇”會不太清晰</td></tr><tr><td>shallow module / class</td><td>淺模組 / 淺類</td><td>沒有用“淺層”，和 deep 的翻譯選擇是同樣的原因</td></tr><tr><td>web browser / server</td><td>Web 瀏覽器 / Web 伺服器</td><td>沒有用“網路”或“網頁”是希望避免與 network 和 web page 等術語的翻譯混淆，就保留英文了</td></tr></tbody></table>',3);function G(D,A){const o=n("RouteLink"),h=n("ExternalLinkIcon");return i(),c("div",null,[_,e("ul",null,[e("li",null,[l(o,{to:"/zh-tw/preface.html"},{default:r(()=>[t("前言")]),_:1})]),e("li",null,[l(o,{to:"/zh-tw/ch01.html"},{default:r(()=>[t("第 1 章 介紹")]),_:1})]),e("li",null,[l(o,{to:"/zh-tw/ch02.html"},{default:r(()=>[t("第 2 章 複雜性的本質")]),_:1})]),e("li",null,[l(o,{to:"/zh-tw/ch03.html"},{default:r(()=>[t("第 3 章 能工作的程式碼是不夠的")]),_:1})]),e("li",null,[l(o,{to:"/zh-tw/ch04.html"},{default:r(()=>[t("第 4 章 模組應該是深的")]),_:1})]),e("li",null,[l(o,{to:"/zh-tw/ch05.html"},{default:r(()=>[t("第 5 章 資訊隱藏和資訊洩露")]),_:1})]),e("li",null,[l(o,{to:"/zh-tw/ch06.html"},{default:r(()=>[t("第 6 章 通用的模組是更深的")]),_:1})]),e("li",null,[l(o,{to:"/zh-tw/ch07.html"},{default:r(()=>[t("第 7 章 不同的層級，不同的抽象")]),_:1})]),e("li",null,[l(o,{to:"/zh-tw/ch08.html"},{default:r(()=>[t("第 8 章 下沉複雜性")]),_:1})]),e("li",null,[l(o,{to:"/zh-tw/ch09.html"},{default:r(()=>[t("第 9 章 在一起更好還是分開更好？")]),_:1})]),e("li",null,[l(o,{to:"/zh-tw/ch10.html"},{default:r(()=>[t("第 10 章 透過定義來規避錯誤")]),_:1})]),e("li",null,[l(o,{to:"/zh-tw/ch11.html"},{default:r(()=>[t("第 11 章 設計兩次")]),_:1})]),e("li",null,[l(o,{to:"/zh-tw/ch12.html"},{default:r(()=>[t("第 12 章 不寫註釋的四個藉口")]),_:1})]),e("li",null,[l(o,{to:"/zh-tw/ch13.html"},{default:r(()=>[t("第 13 章 註釋應該描述程式碼中不明顯的內容")]),_:1})]),e("li",null,[l(o,{to:"/zh-tw/ch14.html"},{default:r(()=>[t("第 14 章 選取名稱")]),_:1})]),e("li",null,[l(o,{to:"/zh-tw/ch15.html"},{default:r(()=>[t("第 15 章 先寫註釋")]),_:1})]),e("li",null,[l(o,{to:"/zh-tw/ch16.html"},{default:r(()=>[t("第 16 章 修改現有的程式碼")]),_:1})]),e("li",null,[l(o,{to:"/zh-tw/ch17.html"},{default:r(()=>[t("第 17 章 一致性")]),_:1})]),e("li",null,[l(o,{to:"/zh-tw/ch18.html"},{default:r(()=>[t("第 18 章 程式碼應該是顯而易見的")]),_:1})]),e("li",null,[l(o,{to:"/zh-tw/ch19.html"},{default:r(()=>[t("第 19 章 軟體發展趨勢")]),_:1})]),e("li",null,[l(o,{to:"/zh-tw/ch20.html"},{default:r(()=>[t("第 20 章 效能設計")]),_:1})]),e("li",null,[l(o,{to:"/zh-tw/ch21.html"},{default:r(()=>[t("第 21 章 結論")]),_:1})]),e("li",null,[l(o,{to:"/zh-tw/summary.html"},{default:r(()=>[t("總結")]),_:1})])]),p,e("p",null,[t("無意中看到這本書的相關介紹，也很快找到了 GitHub 上的民間翻譯版，因為看到一些翻譯不太恰當的地方，所以想著順手提交修正下，然後找到其中 Star 數量比較多的主要是 "),e("a",f,[t("Cactus-proj"),l(h)]),t(" 和 "),e("a",g,[t("Go7hic"),l(h)]),t(" 的，但兩者的內容幾乎完全一樣，包括一些翻譯不當的地方也是同樣的。從實質內容的提交歷史來看，應該 Cactus-proj 是更早的提交者，這一點從各自的 Fock/Star 數量也能側面印證。")]),e("p",null,[t("這兩個專案均有收到並處理一些內容修正的 PR，但即使是 Cactus-proj，最新的幾個 PR 也處於較長時間未處理的狀態，推測都已經暫停維護了，然後基於 Cactus-proj，包含內容修復最多的是 "),e("a",m,[t("luojiego"),l(h)]),t(" 的 Fork，於是就基於這個建立了自己的 "),e("a",b,[t("Fork"),l(h)]),t("。除了一邊閱讀一邊校對，也摸索著更新了相關的部署指令碼，部署到我自己的 "),e("a",w,[t("GitHub Pages"),l(h)]),t(" 上，可直接線上閱讀。")]),e("p",null,[t("從提交歷史來看，"),e("a",z,[t("gdut-yy"),l(h)]),t(" 應該是主要的翻譯貢獻者，"),e("a",k,[t("liquid207"),l(h)]),t("、"),e("a",y,[t("wanghuanwei"),l(h)]),t("、"),e("a",x,[t("luojiego"),l(h)]),t(" 和 "),e("a",P,[t("BlackGlory"),l(h)]),t(" 也都貢獻了比較多的翻譯修正，"),e("a",v,[t("inkydragon"),l(h)]),t(" 則主要負責了 LaTeX 和 PDF 相關的工作以及格式規範、持續整合等方面的工作，不確定歷史是否挖掘充分，所有提到未提到的貢獻者，一併感謝！")]),j,e("p",null,[t("另外，同時還基於 "),R,t(" 使用 Python 指令碼自動生成了繁體中文的翻譯版本，也一併放在了 "),e("a",S,[t("GitHub Pages"),l(h)]),t(" 上，如果發現有處理不當的內容，請針對該指令碼或對應的簡體中文內容提交 PR 或 Issue。")]),C])}const I=s(u,[["render",G],["__file","index.html.vue"]]),L=JSON.parse('{"path":"/zh-tw/","title":"","lang":"zh-TW","frontmatter":{},"headers":[{"level":2,"title":"簡介","slug":"簡介","link":"#簡介","children":[]},{"level":2,"title":"目錄","slug":"目錄","link":"#目錄","children":[]},{"level":2,"title":"翻譯說明","slug":"翻譯說明","link":"#翻譯說明","children":[]},{"level":2,"title":"術語翻譯","slug":"術語翻譯","link":"#術語翻譯","children":[]}],"git":{"updatedTime":1715416503000},"filePathRelative":"zh-tw/README.md"}');export{I as comp,L as data};
