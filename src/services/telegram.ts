import TelegramBot from 'node-telegram-bot-api';

import { TELEGRAM_TOKEN, TELEGRAM_USER_ID } from '../constants';

const bot = new TelegramBot(TELEGRAM_TOKEN, { polling: true });

interface SendMessageToUserProps {
  name: string;
  music: string;
  artist: string;
}

export function sendMessageToUser({ name, music, artist }: SendMessageToUserProps) {
  return bot.sendMessage(
    TELEGRAM_USER_ID,
    `
Nome do Solicitante: ${name ?? 'Não identificado'}
Nome da Música: ${music ?? 'Não identificado'}
Artista: ${artist ?? 'Não identificado'}
`,
  );
}

export function sendMessageToChat() {}
