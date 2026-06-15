const templates = [

{
    title:"經典學術風",
    desc:"適合學術論文、研究成果展示與研討會發表。",
    className:"blue-theme",
    content:`
        <div class="poster-header">海報標題</div>
        <div class="poster-author">作者：王小名</div>

        <div class="poster-content" style="grid-template-columns:1fr 1fr;">
            <div class="poster-box">研究背景</div>
            <div class="poster-box">研究方法</div>
            <div class="poster-box">研究結果</div>
            <div class="poster-box">結論</div>
        </div>

        <div class="poster-footer">
            參考文獻：Journal of Library Science
        </div>
    `
},

{
    title:"科技研究風",
    desc:"適合資訊、AI與工程類研究。",
    className:"green-theme",
    content:`
        <div class="poster-header">海報標題</div>
        <div class="poster-author">作者：王小名</div>

        <div class="poster-content" style="grid-template-columns:1fr 1fr 1fr;">
            <div class="poster-box">背景</div>
            <div class="poster-box">方法</div>
            <div class="poster-box">成果</div>
            <div class="poster-box">分析</div>
            <div class="poster-box">圖表</div>
            <div class="poster-box">結論</div>
        </div>

        <div class="poster-footer">
            參考文獻：AI Research Conference
        </div>
    `
},

{
    title:"科展簡約風",
    desc:"適合高中科展與學生專題。",
    className:"purple-theme",
    content:`
        <div class="poster-header">海報標題</div>
        <div class="poster-author">作者：王小名</div>

        <div class="poster-content" style="grid-template-columns:1fr;">
            <div class="poster-box">研究背景</div>
            <div class="poster-box">研究流程</div>
            <div class="poster-box">成果展示</div>
        </div>

        <div class="poster-footer">
            參考文獻：Science Fair Paper
        </div>
    `
}

];

let current = 0;

const posterTemplate = document.getElementById("posterTemplate");
const templateTitle = document.getElementById("templateTitle");
const templateDesc = document.getElementById("templateDesc");

function renderTemplate(){

    posterTemplate.className = "poster-template " + templates[current].className;

    posterTemplate.innerHTML = templates[current].content;

    templateTitle.innerText = templates[current].title;

    templateDesc.innerText = templates[current].desc;
}

function nextTemplate(){

    current++;

    if(current >= templates.length){
        current = 0;
    }

    renderTemplate();
}

function prevTemplate(){

    current--;

    if(current < 0){
        current = templates.length - 1;
    }

    renderTemplate();
}

renderTemplate();