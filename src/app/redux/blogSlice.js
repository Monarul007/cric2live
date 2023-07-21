// redux/blogSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  blogPosts: [
    {
      id: 1,
      title: 'My First Blog Post',
      content: 'This is my first blog post. Welcome!',
      comments: [],
    },
  ],
};

const blogSlice = createSlice({
  name: 'blog',
  initialState,
  reducers: {
    addComment: (state, action) => {
      const { postId, comment } = action.payload;
      const post = state.blogPosts.find((p) => p.id === postId);

      if (post) {
        post.comments.push(comment);
      }
    },
  },
});

export const { addComment } = blogSlice.actions;
export default blogSlice.reducer;