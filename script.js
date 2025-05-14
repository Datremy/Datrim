const wheel = document.getElementById('wheel');
const spinBtn = document.getElementById('spin-btn');
let isSpinning = false;

spinBtn.addEventListener('click', () => {
    if (isSpinning) return;
    isSpinning = true;
    
    // Угол вращения (5-10 полных оборотов + случайный приз)
    const spinDegrees = 1800 + Math.floor(Math.random() * 1800);
    
    // Вращаем рулетку
    wheel.style.transform = `rotate(${spinDegrees}deg)`;
    
    // После завершения анимации
    setTimeout(() => {
        isSpinning = false;
        
        // Отправляем результат в Telegram
        if (window.Telegram && Telegram.WebApp) {
            const prizes = ["10 звёзд", "5 звёзд", "20 звёзд", "Бесплатная подписка"];
            const randomPrize = prizes[Math.floor(Math.random() * prizes.length)];
            Telegram.WebApp.sendData(JSON.stringify({ prize: randomPrize }));
        }
    }, 3000);
});