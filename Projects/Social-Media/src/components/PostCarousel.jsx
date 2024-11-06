import { useContext, useEffect, useState } from "react";
import Post from "./Post";
import { PostCarousel as PostCarouselData } from "../store/post-carousel-store";
import WelcomeMsg from "./WelcomeMsg";
import LoadingSpinner from "./LoadingSpinner";

const PostCarousel = () => {
  const { postCarousel, addInitialPosts } = useContext(PostCarouselData);
  const [fetching, setFetching] = useState(false);

  useEffect(() => {
    setFetching(true);
    const controller = new AbortController();
    const signal = controller.signal;

    fetch("https://dummyjson.com/posts", { signal })
      .then((res) => res.json())
      .then((data) => {
        addInitialPosts(data.posts);
        setFetching(false);
      });

    return () => {
      controller.abort();
    };
  }, []);

  return (
    <>
      {fetching && <LoadingSpinner />}
      {!fetching && postCarousel.length === 0 && <WelcomeMsg />}
      {!fetching &&
        postCarousel.map((post) => <Post key={post.id} post={post}></Post>)}
    </>
  );
};

export default PostCarousel;
