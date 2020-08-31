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
        <article key={post.id}>
          <h2>{post.title}</h2>
          <small>{post.categories}</small>
          <div dangerouslySetInnerHTML={{ __html: post.content }} />
        </article>
      );
    });
  };

  return (
    <section>
      <Link to="/posts/new">Add a post</Link>
      <h1>Post Index</h1>
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
