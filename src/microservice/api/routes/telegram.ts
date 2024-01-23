import { Router } from 'express';
import { sendMessageToUser } from '../../../services/telegram';

const router = Router();

router.post('/', async (req, res) => {
  try {
    const { name, music, artist } = req.body;

    const response = await sendMessageToUser({ name, music, artist });

    res.json({
      message: 'Message sent successfully',
      response,
    });
  } catch (error) {
    console.log(`erro send message telegrma: ${error}`);
    res.status(500).json({
      message: 'Failed to send message',
      error,
    });
  }
});

export default router;
