// pages/api/comments/[slug].js
import { connectToDB } from '@/lib/mongodb';
import Comment from '@/models/Comment';

export default async function handler(req, res) {
  const { slug } = req.query;

  const db = await connectToDB();

  if (req.method === 'GET') {
    const comments = await Comment.find({ slug }).sort({ createdAt: -1 });
    return res.status(200).json(comments);
  }

  if (req.method === 'POST') {
    const { username, message } = req.body;
    const newComment = new Comment({
      slug,
      username,
      message,
      createdAt: new Date(),
    });

    await newComment.save();
    return res.status(201).json(newComment);
  }

  return res.status(405).end(); // Method Not Allowed
}
