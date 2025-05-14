const gifts = [
    { name: "10 звёзд", image: "gift1.png" },
    { name: "VIP-статус", image: "gift2.png" },
    { name: "Стикерпак", image: "gift3.png" },
    { name: "50 звёзд", image: "gift4.png" }
];

const roulette = document.getElementById('roulette');
const spinBtn = document.getElementById('spin-btn');

// Загружаем подарки в ленту
gifts.forEach(gift => {
    const giftElement = document.createElement('div');
    giftElement.className = 'gift';
    giftElement.style.backgroundImage = `url(${gift.image})`;
    roulette.appendChild(giftElement);
});

spinBtn.addEventListener('click', () => {
    const randomOffset = Math.floor(Math.random() * 1000) + 2000;
    roulette.style.transform = `translateX(-${randomOffset}px)`;
    
    setTimeout(() => {
        const winnerIndex = Math.floor((randomOffset % (gifts.length * 160)) / 160);
        if (window.Telegram && Telegram.WebApp) {
            Telegram.WebApp.sendData(JSON.stringify({
                prize: gifts[winnerIndex].name
            }));
        }
    }, 3000);
});
