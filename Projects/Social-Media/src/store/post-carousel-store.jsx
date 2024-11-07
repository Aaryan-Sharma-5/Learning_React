import { createContext, useCallback, useReducer } from "react";

export const PostCarousel = createContext({
  postCarousel: [],
  addPost: () => {},
  addInitialPosts: () => {},
  deletePost: () => {},
});

const postCarouselReducer = (currPostCarousel, action) => {
  let updatedPostCarousel = currPostCarousel;
  if (action.type === "DELETE_POST") {
    updatedPostCarousel = currPostCarousel.filter(
      (post) => post.id !== action.payload.postId
    );
  } else if (action.type === "ADD_INITIAL_POSTS") {
    updatedPostCarousel = action.payload.posts;
  } else if (action.type === "ADD_POST") {
    updatedPostCarousel = [action.payload, ...currPostCarousel];
  }
  return updatedPostCarousel;
};

const PostCarouselProvider = ({ children }) => {
  const [postCarousel, dispatchPostCarousel] = useReducer(
    postCarouselReducer,
    []
  );

  const addPost = (posts) => {
    dispatchPostCarousel({
      type: "ADD_POST",
      payload: {
        posts,
      },
    });
  };

  const addInitialPosts = (posts) => {
    dispatchPostCarousel({
      type: "ADD_INITIAL_POSTS",
      payload: {
        posts,
      },
    });
  };
 
  const deletePost = useCallback(
    (postId) => {
      dispatchPostCarousel({ type: "DELETE_POST", payload: { postId } });
    },
    [dispatchPostCarousel]
  );

  return (
    <PostCarousel.Provider
      value={{
        postCarousel,
        addPost,
        deletePost,
      }}
    >
      {children}
    </PostCarousel.Provider>
  );
};

export default PostCarouselProvider;
