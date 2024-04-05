import{_ as a}from"./00013-BT2rC0s8.js";import{_ as i,r as n,o as s,c as h,a as p,d as e,b as c,w as r,e as l}from"./app-CFPPME_m.js";const _={},o=l('<h1 id="第-15-章-先寫註釋" tabindex="-1"><a class="header-anchor" href="#第-15-章-先寫註釋"><span>第 15 章 先寫註釋</span></a></h1><p>（把註釋變成設計過程的一部分）</p><p>許多開發人員推遲編寫文件，直到開發過程結束，在編碼和單元測試完成之後。這是產生低質量文件的最可靠方法之一。編寫註釋的最佳時間是在過程開始時。首先編寫註釋使文件成為設計過程的一部分。這不僅可以產生更好的文件，還可以產生更好的設計，並使編寫文件的過程更加愉快。</p><h2 id="_15-1-遲到的註釋不是好註釋" tabindex="-1"><a class="header-anchor" href="#_15-1-遲到的註釋不是好註釋"><span>15.1 遲到的註釋不是好註釋</span></a></h2><p>我見過的幾乎每個開發人員都會推遲編寫註釋。當被問及為什麼不更早編寫文件時，他們說程式碼仍在更改。他們說，如果他們儘早編寫文件，則必須在程式碼更改時重新編寫文件，所以最好等到程式碼穩定下來。但是，我懷疑還有另一個原因，那就是他們將文件視為苦差事。因此，他們儘可能地推遲了。</p><p>不幸的是，這種方法有幾個負面影響。首先，延遲文件通常意味著根本無法完成文件的編寫。一旦開始延遲，就很容易再延遲一些，畢竟程式碼將在幾周後變得更加穩定。到了程式碼毫無疑問地穩定下來的時候，程式碼已經很多了，這意味著編寫文件的任務變得越來越龐大，甚至沒有了吸引力。從來沒有一個合適的時間可以停下來幾天並填寫所有缺失的註釋，並且很容易以對專案最好的事情是繼續前進並修復缺陷或編寫下一個新功能的理由對其進行合理化。這將導致更多沒有註釋的程式碼。</p><p>即使您有足夠的自律回去寫註釋（不要欺騙自己：您可能並沒有），註釋也不會很好。在整個過程的這個時候，你已經在精神上離開了。在你的腦海中，這段程式碼已經完成了，你急於開始下一個專案。你知道寫註釋是正確的事情，但它沒有樂趣。你只想儘快地處理掉它。因此，您快速地瀏覽程式碼，新增足夠的註釋以使其看起來差不多就行。到目前為止，距離您設計程式碼已經有一段時間了，所以您對設計過程的記憶變得模糊了。您一邊檢視程式碼一邊完成註釋，因此註釋很容易就重複了程式碼。即使您試圖重新構建程式碼中不明顯的設計思想，也會有您不記得的事情。因此，這些註釋遺漏了他們應該描述的一些最重要的事情。</p><h2 id="_15-2-先寫註釋" tabindex="-1"><a class="header-anchor" href="#_15-2-先寫註釋"><span>15.2 先寫註釋</span></a></h2><p>我使用一種不同的方法來編寫註釋，在最開始時就寫：</p><ul><li>對於新類，我首先編寫類介面註釋。</li><li>接下來，我為最重要的公有方法編寫介面註釋和簽名，但將方法主體保留為空。</li><li>我對這些註釋進行了迭代，直到基本結構感覺正確為止。</li><li>此時我為類中最重要的類例項變數編寫了宣告和註釋。</li><li>最後，我填寫方法的主體，並根據需要新增實現註釋。</li><li>在編寫方法主體時，我通常會發現需要更多的方法和例項變數。對於每個新方法，我在方法主體之前編寫介面註釋。對於每個變數，我在編寫其宣告的同時填寫了註釋。</li></ul><p>當代碼完成時，註釋也已經完成。從來沒有積壓的待編寫註釋。</p><p>註釋優先的方法具有三個好處。首先，它會產生更好的註釋。如果您在設計類時寫註釋，那麼關鍵的設計問題將在您的腦海中浮現，因此很容易記錄下來。最好在編寫每個方法的主體之前編寫介面註釋，這樣您就可以專注於方法的抽象和介面，而不會因其實現而分心。在編碼和測試過程中，您會注意到並修復註釋中的問題。結果，註釋在開發過程中也得到了持續的改善。</p><h2 id="_15-3-註釋是一種設計工具" tabindex="-1"><a class="header-anchor" href="#_15-3-註釋是一種設計工具"><span>15.3 註釋是一種設計工具</span></a></h2><p>在開始時編寫註釋的第二個也是最重要的好處是可以改善系統設計。註釋提供了完全捕獲抽象的唯一方法，好的抽象是好的系統設計的基礎。如果您在一開始就縮寫了描述抽象的註釋，就可以在編寫實現程式碼之前對其進行檢查和調整。要寫一個好的註釋，您必須確定一個變數或一段程式碼的本質：這件事最重要的方面是什麼？在設計過程的早期進行此操作很重要，否則，您只就是個編程式碼的。</p>',14),d=l('<p><img src="'+a+'" alt=""> 危險訊號：難以描述 <img src="'+a+'" alt=""></p><blockquote><p>描述方法或變數的註釋應該簡單而完整。如果您發現很難寫這樣的註釋，則表明您對所描述事物的設計可能存在問題。</p></blockquote><p>當然，僅在註釋是完整而清晰的情況下，它們才是複雜性良好的一個指標。如果編寫的方法介面註釋未提供呼叫該方法所需的全部資訊，或者編寫的註釋太過晦澀難懂，那麼該註釋也不能很好地衡量該方法的深度。</p><h2 id="_15-4-先寫註釋很有趣" tabindex="-1"><a class="header-anchor" href="#_15-4-先寫註釋很有趣"><span>15.4 先寫註釋很有趣</span></a></h2><p>儘早編寫註釋的第三個也是最後一個好處是，它使編寫註釋更加有趣。對我來說，程式設計中最有趣的部分之一是新類的早期設計階段，我在這個階段充實類的抽象和結構。我的大部分註釋都是在此階段編寫的，這些註釋是我記錄和測試設計決策質量的方式。我將尋找可以用最少的詞來完整而清晰地表達的設計。註釋越簡單，我對設計的感覺就越好，因此找到簡單的註釋也會讓人有自豪感。如果您採取的是戰略式的程式設計方式，您的主要目標是一個出色的設計，而不僅僅是編寫能工作的程式碼，那麼編寫註釋應該很有趣，因為這是您確定最佳設計的方法。</p><h2 id="_15-5-先寫註釋是否很昂貴" tabindex="-1"><a class="header-anchor" href="#_15-5-先寫註釋是否很昂貴"><span>15.5 先寫註釋是否很昂貴？</span></a></h2><p>現在，讓我們重新審視推遲註釋的論點，它避免了在程式碼演變時重新處理註釋的成本。一個簡單的粗略計算會表明這並沒有節省多少。首先，估算您編寫程式碼和註釋所花費的開發時間的總和，包括修改程式碼和註釋的時間；這不太可能超過所有開發時間的 10%。即使您的全部程式碼行中有一半是註釋，編寫註釋也可能不會佔開發總時間的 5% 以上。將註釋推遲到最後只會節省其中的一小部分，這個時間並不多。</p><p>而如果先寫註釋將意味著在開始編寫程式碼之前，抽象將更加穩定，這很可能會節省編碼時間。相反，如果您首先編寫程式碼，則抽象可能會隨程式碼的發展而變化，與先寫註釋的方法相比，將需要更多的程式碼修改。當您考慮所有這些因素時，先寫註釋可能總體上還更快。</p><h2 id="_15-6-結論" tabindex="-1"><a class="header-anchor" href="#_15-6-結論"><span>15.6 結論</span></a></h2><p>如果您從未試過先寫註釋，請嘗試一下。堅持足夠長的時間來習慣它。然後思考它如何影響了您的註釋質量、設計質量以及軟體開發的整體樂趣。在嘗試了一段時間之後，讓我知道您的經歷是否與我的相符，以及為什麼或者為什麼不是這樣。</p>',10);function m(u,f){const t=n("RouteLink");return s(),h("div",null,[o,p("p",null,[e("註釋是複雜性煤礦中的金絲雀。如果方法或變數需要較長的註釋，那它是一個危險訊號，表明您沒有很好的抽象。請記住，在"),c(t,{to:"/zh-tw/ch04.html"},{default:r(()=>[e("第 4 章")]),_:1}),e("中提到類應該是深的：最好的類具有非常簡單的介面，但可以實現強大的功能。判斷介面複雜性的最佳方法是檢視描述介面的註釋。如果某個方法的介面註釋提供了使用該方法所需的所有資訊，並且既簡短又簡單，則表明該方法具有簡單的介面。相反，如果沒有冗長而複雜的註釋就無法完全描述一個方法，則該方法具有複雜的介面。您可以將方法的介面註釋與實現進行比較，以瞭解該方法有多深：如果介面註釋必須描述實現的所有主要特性，則該方法是淺的。同樣的想法也適用於變數：如果要花很長的註釋來完整描述一個變數，那是一個危險訊號，表明您可能沒有進行正確的變數分解。總體而言，編寫註釋的行為使您可以及早評估設計決策，以便發現並解決問題。")]),d])}const b=i(_,[["render",m],["__file","ch15.html.vue"]]),g=JSON.parse('{"path":"/zh-tw/ch15.html","title":"第 15 章 先寫註釋","lang":"zh-TW","frontmatter":{},"headers":[{"level":2,"title":"15.1 遲到的註釋不是好註釋","slug":"_15-1-遲到的註釋不是好註釋","link":"#_15-1-遲到的註釋不是好註釋","children":[]},{"level":2,"title":"15.2 先寫註釋","slug":"_15-2-先寫註釋","link":"#_15-2-先寫註釋","children":[]},{"level":2,"title":"15.3 註釋是一種設計工具","slug":"_15-3-註釋是一種設計工具","link":"#_15-3-註釋是一種設計工具","children":[]},{"level":2,"title":"15.4 先寫註釋很有趣","slug":"_15-4-先寫註釋很有趣","link":"#_15-4-先寫註釋很有趣","children":[]},{"level":2,"title":"15.5 先寫註釋是否很昂貴？","slug":"_15-5-先寫註釋是否很昂貴","link":"#_15-5-先寫註釋是否很昂貴","children":[]},{"level":2,"title":"15.6 結論","slug":"_15-6-結論","link":"#_15-6-結論","children":[]}],"git":{"updatedTime":1712323317000},"filePathRelative":"zh-tw/ch15.md"}');export{b as comp,g as data};
