import { useContext, useEffect, useState } from "react";
import Post from "./Post";
import { PostCarousel as PostCarouselData } from "../store/post-carousel-store";
import WelcomeMsg from "./WelcomeMsg";
import { useLoaderData } from "react-router-dom";

const PostCarousel = () => {
  const postCarousel = useLoaderData();

  return (
    <>
      {postCarousel.length === 0 && <WelcomeMsg />}
      {postCarousel.map((post) => (
        <Post key={post.id} post={post}></Post>
      ))}
    </>
  );
};

export const postLoader = () => {
  return fetch("https://dummyjson.com/posts")
    .then((res) => res.json())
    .then((data) => {
      return data.posts;
    });
};

export default PostCarousel;
