import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import { POST } from './Api/api';

import { useDispatch } from 'react-redux';
import { AppDispatch } from 'redux/store';

import { addPosts } from './redux/features/post-slice';

import './App.css';

// Components
import Home from 'pages/Home/Home';
import PostList from 'components/PostList/PostList';
import PostDetails from 'components/PostDetails/PostDetails';
import Header from 'components/Header/Header';

function App() {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const resp = await POST.getPosts();
        const data = await resp.json();
        console.log(data);
        dispatch(addPosts(data.post));
      } catch (e) {
        console.log(e);
      }
    };

    fetchPosts();
  }, [dispatch]);

  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/posts/' element={<PostList />} />
        <Route path='/post-details/:id' element={<PostDetails />} />
      </Routes>
    </>
  );
}

export default App;
