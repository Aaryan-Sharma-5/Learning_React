import { useContext } from "react";
import Post from "./Post";
import { PostCarousel as PostCarouselData } from "../store/post-carousel-store";

const PostCarousel = () => {
  const { postCarousel } = useContext(PostCarouselData);
  return (
    <>
      {postCarousel.map((post) => (
        <Post key={post.id} post={post}></Post>
      ))}
    </>
  );
};

export default PostCarousel;
