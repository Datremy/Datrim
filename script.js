const gifts = [
  { name: "10 звёзд", image: "gift1.png" },
  { name: "VIP-статус", image: "gift2.png" },
  { name: "Стикерпак", image: "gift3.png" },
  { name: "50 звёзд", image: "gift4.png" },
  { name: "Бонус 100₽", image: "gift5.png" }
];

const roulette = document.getElementById('roulette');
const spinBtn = document.getElementById('spin-btn');

// Загружаем подарки вертикально
gifts.forEach(gift => {
  const giftElement = document.createElement('div');
  giftElement.className = 'gift';
  giftElement.style.backgroundImage = `url(${gift.image})`;
  roulette.appendChild(giftElement);
});

spinBtn.addEventListener('click', () => {
  const giftHeight = 340; // 300px + margin
  const randomOffset = Math.floor(Math.random() * 1000) + (gifts.length * giftHeight);
  
  roulette.style.transform = `translateY(-${randomOffset}px)`;
  
  setTimeout(() => {
    const winnerIndex = Math.floor((randomOffset % (gifts.length * giftHeight)) / giftHeight);
    if (window.Telegram && Telegram.WebApp) {
      Telegram.WebApp.sendData(JSON.stringify({
        prize: gifts[winnerIndex].name,
        image: gifts[winnerIndex].image
      }));
    }
  }, 4000);
});
