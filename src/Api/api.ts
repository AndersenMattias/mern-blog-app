import axios from 'axios';

export const POST = {
  createPost: (data: any) => {
    return fetch('http://localhost:5000/api/posts/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
  },
  getUrl: () => {
    return fetch('http://localhost:5000/api/s3Url/');
  },
  getPosts: () => {
    return fetch('http://localhost:5000/api/posts/');
  },
  deletePost: () => {
    return fetch('http://localhost:5000/api/posts/:id');
  },
};
