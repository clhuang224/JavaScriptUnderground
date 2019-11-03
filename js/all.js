let data = [
    {
        floor: 1,
        tab: 'F1 九九乘法表',
        title: 'F1 九九乘法表',
        articleURL: 'https://clhuang224.github.io/TechBlog/2019/11/03/20191103-hex-jsunderground-01/',
        workURL: './01_MultiplicationChart/',
        codeURL: 'https://github.com/clhuang224/JavaScriptUnderground/tree/master/01_MultiplicationChart',
    }
];

let listTab = document.querySelector('#list-tab');
for (let i = 0; i < data.length; i++) {
    listTab.innerHTML += `
        <li>
            <a href="#${data[i].floor.toString().padStart(2,'0')}" data-toggle="tab">${data[i].tab}</a>
        </li>`;
}

let tabContent = document.querySelector('.tab-content');
for (let i = 0; i < data.length; i++) {
    tabContent.innerHTML += `
        <div class="tab-pane" id="${data[i].floor.toString().padStart(2,'0')}">
            <div class="content">
                <h2 class="title">${data[i].title}</h2>
                <ul class="links">
                    <li><a href="${data[i].workURL}" target="_blank">作品連結</a></li>
                    <li><a href="${data[i].codeURL}" target="_blank">原始碼</a></li>
                    <li><a href="${data[i].articleURL}" target="_blank">紀錄文章</a></li>
                </ul>
                <iframe class="iframe" src="${data[i].workURL+'index.html'}"></iframe>
            </div>
        </div>`;
}

$('#list-tab>li>a').click(function (event) {
    event.preventDefault();
    $(this).tab('show');
    $(this).parent().addClass('active');
    $(this).parent().siblings().removeClass('active');
});

let href = window.location.href;
if (href.search('#') !== -1) {
    href = href.slice(href.search('#') + 1);
}
else {
    href = '01';
}
document.querySelector(`.main #list-tab a[href="#${href.toLowerCase()}"]`).parentElement.classList.add('active');
document.querySelector(`.main .tab-content .tab-pane[id="${href.toLowerCase()}"]`).classList.add('active');

document.querySelector('.content .iframe').height = window.innerHeight - 234;