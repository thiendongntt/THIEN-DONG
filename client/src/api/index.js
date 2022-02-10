import axios from "axios";

// const url = "http://localhost:5000/posts";

const API = axios.create({ baseURL: "http://localhost:5000" });

API.interceptors.request.use((req) => {
  if (localStorage.getItem("profile")) {
    req.headers.Authorization = `Bearer ${
      JSON.parse(localStorage.getItem("profile")).token
    }`;
  }

  return req;
});

export const fetchPost = (id) => API.get(`/posts/${id}`);
export const fetchPosts = (page) => API.get(`/posts?page=${page}`);

export const createPosts = (newPost) => API.post("/posts", newPost);
export const updatePosts = (id, updatePost) =>
  API.patch(`/posts/${id}`, updatePost);

export const fetchPostsBySearch = (searchQuery) =>
  API.get(
    `/posts/search?searchQuery=${searchQuery.search || "none"}&tags=${
      searchQuery.tags
    }`
  );

export const deletePosts = (id) => API.delete(`/posts/${id}`);

export const comment = (value, id) =>
  API.post(`/posts/${id}/commentPost`, { value });
  
export const likePost = (id) => API.patch(`/posts/${id}/likePost`);

export const signIn = (formData) => API.post("/user/signin", formData);
export const signUp = (formData) => API.post("/user/signup", formData);
