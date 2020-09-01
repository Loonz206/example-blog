import axios from "axios";

export const FETCH_POSTS = "fetch_posts";
export const FETCH_POST = "fetch_post";
export const CREATE_POST = "create_post";
export const DELETE_POST = "delete_post";

const ROOT_URL = "http://reduxblog.herokuapp.com/api";
const API_KEY = "?key=loonz206";

const fetchPosts = async () => {
  const request = await axios.get(`${ROOT_URL}/posts${API_KEY}`);
  return {
    type: FETCH_POSTS,
    payload: request,
  };
};

const fetchPost = async (id) => {
  const request = await axios.get(`${ROOT_URL}/posts/${id}${API_KEY}`);
  return {
    type: FETCH_POST,
    payload: request,
  };
};

const createPost = async (values, callBack) => {
  const request = await axios
    .post(`${ROOT_URL}/posts${API_KEY}`, values)
    .then(() => callBack());
  return {
    type: CREATE_POST,
    payload: request,
  };
};

const deletePost = async (id, callBack) => {
  const request = await axios
    .delete(`${ROOT_URL}/posts/${id}${API_KEY}`)
    .then(() => callBack());
  return {
    type: DELETE_POST,
    payload: request,
  };
};

export { fetchPosts, createPost, fetchPost, deletePost };
