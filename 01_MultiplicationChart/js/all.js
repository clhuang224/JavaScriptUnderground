let main = document.querySelector('.main');

// i : 被乘數（左邊的數字）
for(let i=2;i<=9;i++)
{
    // 新增卡片節點
    let card = document.createElement('div');
    card.classList.add('card');
    card.innerHTML = `<div class="number">${i}</div>`;

    // j : 乘數（右邊的數字）
    for(let j=1;j<=9;j++)
    {
        // 新增式子節點
        let formula = document.createElement('div');
        formula.classList.add('formula');
        formula.textContent = `${i} × ${j} ＝ ${i*j}`;
        card.appendChild(formula);
    }
    main.appendChild(card);
}