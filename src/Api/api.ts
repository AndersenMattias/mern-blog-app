export const POST = {
  getPosts: () => {
    return fetch('http://localhost:5000/api/posts/');
  },
  deletePost: () => {
    return fetch('http://localhost:5000/api/posts/:id');
  },
};
