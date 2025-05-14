const gifts = [
    { name: "10 звёзд", image: "gift1.png" },
    { name: "VIP-статус", image: "gift2.png" },
    { name: "Стикерпак", image: "gift3.png" }
];

const giftDisplay = document.getElementById('gift-display');
const spinBtn = document.getElementById('spin-btn');
let currentIndex = 0;

// Показываем первый подарк
giftDisplay.style.backgroundImage = `url(${gifts[0].image})`;

spinBtn.addEventListener('click', () => {
    // Анимация исчезновения
    giftDisplay.style.opacity = '0';
    
    setTimeout(() => {
        // Выбираем случайный подарок
        currentIndex = Math.floor(Math.random() * gifts.length);
        giftDisplay.style.backgroundImage = `url(${gifts[currentIndex].image})`;
        
        // Анимация появления
        giftDisplay.style.opacity = '1';
        
        // Отправляем результат в Telegram
        if (window.Telegram && Telegram.WebApp) {
            Telegram.WebApp.sendData(JSON.stringify({
                prize: gifts[currentIndex].name
            }));
        }
    }, 500);
});
