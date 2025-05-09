import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom"

const endPoint = process.env.REACT_APP_BASE_URL;

const Menu = ({ cat }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`${endPoint}posts/?cat=${cat}`);
        setPosts(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [cat]);

  return (
    <div className="menu">
      <h1>Other posts you may like</h1>
      {posts.map((post) => (
        <div className="post" key={post.id}>
          <img src={`${endPoint}uploads/${post?.img}`} alt={post.title} />

          {/* <img src={`../upload/${post?.img}`} alt="" /> */}
          <h2>{post.title}</h2>
          <Link to={`/posts/${post.id}`}>
            <button>Read More</button>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Menu;