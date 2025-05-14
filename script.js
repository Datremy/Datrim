// Массив с подарками
const gifts = [
    { name: "10 звёзд", image: "gift1.png" },
    { name: "VIP-статус", image: "gift2.png" },
    { name: "50 звёзд", image: "gift3.png" }
];

// Элементы интерфейса
const giftScreen = document.getElementById('gift-screen');
const spinBtn = document.getElementById('spin-btn');

// ===== БЛОКИРОВКА ПРОКРУТКИ ===== //
// 1. Запрет скролла при касании
document.addEventListener('touchmove', function(e) {
    e.preventDefault();
}, { passive: false });

// 2. Фиксация позиции при фокусе на кнопке
spinBtn.addEventListener('focus', function() {
    window.scrollTo(0, 0);
});

// 3. Дополнительная блокировка для iOS
document.body.style.overflow = 'hidden';
document.documentElement.style.overflow = 'hidden';

// ===== ЛОГИКА РУЛЕТКИ ===== //
// Показываем первый подарк
giftScreen.style.backgroundImage = `url(${gifts[0].image})`;

// Обработчик кнопки
spinBtn.addEventListener('click', () => {
    // Анимация исчезновения
    giftScreen.style.opacity = '0';
    
    setTimeout(() => {
        // Выбираем случайный подарок
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
