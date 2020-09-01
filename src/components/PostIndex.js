import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchPosts } from "../actions";

const PostIndex = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getPosts = async () => {
      const response = await fetchPosts();
      setPosts(response.payload.data);
    };
    getPosts();
  }, []);

  const renderPosts = () => {
    return posts.map((post) => {
      return (
        <article
          key={post.id}
          style={{
            border: "1px solid black",
            padding: "10px",
            marginBottom: "20px",
          }}
        >
          <Link to={`/posts/${post.id}`}>
            <h2>{post.title}</h2>
          </Link>
        </article>
      );
    });
  };

  return (
    <section>
      <Link to="/posts/new" style={{ display: "block", float: "right" }}>
        Add a post
      </Link>
      <h1 style={{ clear: "both" }}>Post Index</h1>
      <hr />
      {renderPosts()}
    </section>
  );
};

const mapStateToProps = (state) => {
  return {
    posts: state.posts,
  };
};

export default connect(mapStateToProps, { fetchPosts })(PostIndex);
