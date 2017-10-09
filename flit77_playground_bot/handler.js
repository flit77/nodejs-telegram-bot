'use strict';

module.exports = (context, cb) => {
  const TelegramBot = require('node-telegram-bot-api');

  const token = '447124812:AAH-FqVUfaoOxfniIqTtS5Xh_1Dmva-rf2s';
  const bot = new TelegramBot(token);
  const chatId = context.body.message.chat.id;

  const out = bot.sendMessage(chatId, 'Hello World!');
  return cb(null, out);
};
