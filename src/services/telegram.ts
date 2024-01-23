import TelegramBot from 'node-telegram-bot-api';

const token = '6762099622:AAHqg6uXXb3XmjV1Oo3Hpm9SoUvfOuk8poc';
const bot = new TelegramBot(token, { polling: true });

const userId = '6859287388';

interface SendMessageToUserProps {
  name: string;
  music: string;
  artist: string;
}

export function sendMessageToUser({ name, music, artist }: SendMessageToUserProps) {
  return bot.sendMessage(
    userId,
    `
Nome do Solicitante: ${name ?? 'Não identificado'}
Nome da Música: ${music ?? 'Não identificado'}
Artista: ${artist ?? 'Não identificado'}
`,
  );
}

export function sendMessageToChat() {}
