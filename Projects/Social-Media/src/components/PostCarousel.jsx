import { useContext } from "react";
import Post from "./Post";
import { PostCarousel as PostCarouselData } from "../store/post-carousel-store";
import WelcomeMsg from "./WelcomeMsg";

const PostCarousel = () => {
  const { postCarousel, addInitialPost } = useContext(PostCarouselData);

  const handleGetPostsClick = () => {
    fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then((data) => {
        addInitialPost(data.posts);
      });
  };

  return (
    <>
      {postCarousel.length === 0 && (
        <WelcomeMsg onGetPostsClick={handleGetPostsClick} />
      )}
      {postCarousel.map((post) => (
        <Post key={post.id} post={post}></Post>
      ))}
    </>
  );
};

export default PostCarousel;
