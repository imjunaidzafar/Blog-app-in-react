import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/index";
import Blog from "./pages/Blog/index";
import { useState, useEffect } from "react";
import CreateBlog from "./pages/createBlog/CreateBlog";
import EditBlog from './pages/editBlog/EditBlog'

function App() {
  const [blog, setBlog] = useState( JSON.parse(localStorage.getItem("blog")) || []);
  console.log('blog', blog)
  useEffect(() => {
    localStorage.setItem("blog", JSON.stringify(blog));
  }, [blog]);
  return (
    <div className="container">
      <Routes>
        <Route path="/" exact element={<Home  blog = {blog} setBlog = {setBlog} />} />
        <Route path="/create-blog" exact element={<CreateBlog setBlog = {setBlog} />} />
        <Route path="/edit-blog/:id" exact element={<EditBlog setBlog = {setBlog} blog = {blog} />} />
        <Route path="/blog/:id" exact element={<Blog blog = {blog} setBlog = {setBlog} />} />
      </Routes>
    </div>
  );
}

export default App;
