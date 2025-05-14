const gifts = [
    { name: "10 звёзд", image: "gift1.png" },
    { name: "VIP-статус", image: "gift2.png" },
    { name: "50 звёзд", image: "gift3.png" }
];

const giftScreen = document.getElementById('gift-screen');
const spinBtn = document.getElementById('spin-btn');

// Показываем первый подарк
giftScreen.style.backgroundImage = `url(${gifts[0].image})`;

spinBtn.addEventListener('click', () => {
    // Анимация исчезновения
    giftScreen.style.opacity = '0';
    
    setTimeout(() => {
        // Случайный подарк
        const randomGift = gifts[Math.floor(Math.random() * gifts.length)];
        giftScreen.style.backgroundImage = `url(${randomGift.image})`;
        
        // Анимация появления
        giftScreen.style.opacity = '1';
        
        // Отправка результата в Telegram
        if (window.Telegram && Telegram.WebApp) {
            Telegram.WebApp.sendData(JSON.stringify({
                prize: randomGift.name
            }));
        }
    }, 500);
});
