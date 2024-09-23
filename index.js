const TelegramBot = require('node-telegram-bot-api');
const keep_alive = require('./keep_alive.js');

// Thay 'YOUR_BOT_TOKEN' bằng token thực của bot của bạn
const token = '7753869579:AAHzngwsjPkK_q5W4g3vGVMSb4HwEbtxChY';

// Tạo một bot mới
const bot = new TelegramBot(token, {polling: true});

// Lắng nghe lệnh /start
bot.onText(/\/start/, (msg) => {
  const chatId = msg.chat.id;
  const userName = msg.from.first_name;

  // Gửi tin nhắn chào mừng
  bot.sendMessage(chatId, `Xin chào ${userName}! Chào mừng bạn đến với bot của chúng tôi. Rất vui được gặp bạn!`);
});

console.log('Bot đang chạy...');
