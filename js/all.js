let data = [
    {
        id: 1,
        tab: 'F1 九九乘法表',
        title: 'F1 九九乘法表',
        articleURL: 'https://clhuang224.github.io/TechBlog/2019/11/03/20191103-hex-jsunderground-01/',
        workURL: './01_MultiplicationChart/index.html',
        codeURL: 'https://github.com/clhuang224/JavaScriptUnderground/tree/master/01_MultiplicationChart/',
    },
    {
        id: 2,
        tab: 'F2 時鐘',
        title: 'F2 時鐘',
        articleURL: 'https://clhuang224.github.io/TechBlog/2019/11/04/20191104-hex-jsunderground-02/',
        workURL: './02_Clock/index.html',
        codeURL: 'https://github.com/clhuang224/JavaScriptUnderground/tree/master/02_Clock/',
    }
];

let tabs = document.querySelector('.main .tabs');
let content = document.querySelector('.main .content');

function initial() {
    // 標籤
    for (let i = 0; i < data.length; i++) {
        tabs.innerHTML += `
            <li>
                <a id="${data[i].id}" href="#${data[i].id}">${data[i].tab}</a>
            </li>`;
    }
    // 按標籤的事件
    tabs.addEventListener('click', function (event) {
        if (event.target.nodeName == 'A') {
            show(parseInt(event.target.id) - 1);
            for (let i = 0; i < data.length; i++) {
                event.target.parentElement.parentElement.children[i].classList.remove('active');
            }
            event.target.parentElement.classList.add('active');
        }
    }, false);

    // 初始顯示的頁面
    let href = window.location.href;
    let index;
    if (href.search('#') !== -1) {
        index = parseInt(href.slice(href.search('#') + 1)) - 1;
    }
    else {
        index = 0;
    }
    show(index);
    document.querySelectorAll('.main .tabs a')[index].parentElement.classList.add('active');
}

function show(index) {
    content.innerHTML = `
                <h2 class="title">${data[index].title}</h2>
                <ul class="links">
                    <li><a href="${data[index].workURL}" target="_blank">作品連結</a></li>
                    <li><a href="${data[index].codeURL}" target="_blank">原始碼</a></li>
                    <li><a href="${data[index].articleURL}" target="_blank">紀錄文章</a></li>
                </ul>
                <iframe class="iframe" src="${data[index].workURL}"></iframe>`;
    content.querySelector('.iframe').height = window.innerHeight - 234;
}

initial();