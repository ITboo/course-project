import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

interface CommentFormProps {
  onSubmit: (text: string) => void;
}
export interface Comment {
  author_id: string;
  created_at: string;
  text: string;
}

const CommentForm: React.FC<CommentFormProps> = ({ onSubmit }) => {
  const { t } = useTranslation();
  const [commentText, setCommentText] = useState('');

  const handleSubmit = async(e: React.FormEvent) => {
    e.preventDefault();
    if (commentText.trim()) {
      onSubmit(commentText);
      setCommentText('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-1/2 m-auto mt-3">
      <textarea
        value={commentText}
        onChange={(e) => setCommentText(e.target.value)}
        placeholder={t("user_comment")}
        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
        rows={3}
      />
      <button
        type="submit"
        className="mt-1 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
      >
        {t("send")}
      </button>
    </form>
  );
};

export default CommentForm;
