import { connectToDB } from '@/lib/mongodb';
import Contact from '@/models/Contact';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      await connectToDB();

      const { name, email, message } = req.body;

      if (!name || !email || !message) {
        return res.status(400).json({ message: 'All fields are required' });
      }

      const newMessage = new Contact({ name, email, message });
      await newMessage.save();

      return res.status(201).json({ message: 'Message sent successfully' });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Internal Server Error' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
