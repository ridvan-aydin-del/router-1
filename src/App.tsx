import React from 'react';
import './App.css';
import { Routes, Route, Link, NavLink } from "react-router-dom"
import Home from './pages/Home';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import Categories from './pages/Categories';
import Post from './pages/Post';
import Page404 from './pages/Page404';

function App() {
  return (
    <div className="App">
      <>
        <NavLink to="/">Ana Sayfa</NavLink>
        <NavLink to="/contact">İletişim</NavLink>
        <NavLink to="/blog">Blog</NavLink>
      </>
      <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} >
          <Route path='categories' element={<Categories />}/>
          <Route path='post/url' element={<Post />}/>
        </Route>
        <Route path='*' element={<Page404 />} />
      </Routes>
      </>
    </div>
  );
}

export default App;
