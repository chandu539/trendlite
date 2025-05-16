// models/Comment.js
import mongoose from 'mongoose';

const CommentSchema = new mongoose.Schema({
  slug: {
    type: String,
    required: true,
    index: true,
  },
  username: {
    type: String,
    required: true,
    maxlength: 50,
  },
  message: {
    type: String,
    required: true,
    maxlength: 500,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  }
});

export default mongoose.models.Comment || mongoose.model('Comment', CommentSchema);
