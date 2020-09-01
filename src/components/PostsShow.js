import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { fetchPost, deletePost } from "../actions/index";
import { Link } from "react-router-dom";
const PostsShow = (props) => {
  const { history } = props;
  const [post, setPost] = useState({});
  const { id } = props.match.params;

  useEffect(() => {
    const getPost = async () => {
      const { id } = props.match.params;

      const response = await fetchPost(id);
      setPost(response.payload.data);
    };
    getPost();
  }, [props.match.params]);
  if (!post) {
    return <div>Loading...</div>;
  }

  const onDeleteClick = (id) => {
    deletePost(id, () => {
      history.push("/");
    });
  };
  return (
    <div>
      <Link
        to="/"
        style={{
          display: "block",
          float: "right",
        }}
      >
        Back to Home
      </Link>
      <button
        type="button"
        className="ui button error"
        onClick={() => onDeleteClick(id)}
      >
        Delete Post
      </button>
      <h1>{post.title}</h1>
      <p>{post.categories}</p>
      <div dangerouslySetInnerHTML={{ __html: post.content }} />
    </div>
  );
};

const mapStateToProps = ({ posts }, ownProps) => {
  return {
    post: posts[ownProps.match.params.id],
  };
};

export default connect(mapStateToProps, {
  fetchPost,
  deletePost,
})(PostsShow);
