// 鐘面部分：依順時鐘將鐘面上的線、星星、點點放入
let plate = document.querySelector('.clock .plate');
for (let i = 1; i <= 72; i++) {

    // 新增節點
    let node = document.createElement('div');

    // 旋轉
    let degree = 360 / 72 * i;
    node.style.transform = `rotate(${degree}deg)`;

    if (i % 6 == 0) {
        // line
        node.classList.add('line');
        // 數字會跟著線一起轉，所以要轉回來
        node.innerHTML = `
        <span class="pm" style="transform:rotate(${-degree}deg);">${i / 6 + 12}</span>
        <span class="am" style="transform:rotate(${-degree}deg);">${i / 6}</span>`;
    }
    else if (i % 3 == 0) {
        // star
        node.classList.add('star');
    }
    else {
        //dot
        node.classList.add('dot');
    }
    plate.appendChild(node);
}

// 指針部分
let hourHand = document.querySelector('.clock .hour-hand');
let minuteHand = document.querySelector('.clock .minute-hand');
let secondHand = document.querySelector('.clock .second-hand');
setInterval(function () {
    let currentTime = new Date();
    // 指針指向的位置要加上小單位的量
    let second = currentTime.getSeconds();
    let minute = currentTime.getMinutes() + second / 60;
    let hour = currentTime.getHours() + minute / 60;
    hourHand.style.transform = `rotate(${(hour % 12) / 12 * 360}deg)`;
    minuteHand.style.transform = `rotate(${minute / 60 * 360}deg)`;
    secondHand.style.transform = `rotate(${second / 60 * 360}deg)`;
}, 1000);