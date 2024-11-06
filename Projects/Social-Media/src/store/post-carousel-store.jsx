import { createContext, useReducer } from "react";

export const PostCarousel = createContext({
  postCarousel: [],
  addPost: () => {},
  addInitialPost: () => {},
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

  const addPost = (userId, postTitle, postContent, reactions, tags) => {
    dispatchPostCarousel({
      type: "ADD_POST",
      payload: {
        id: Date.now(),
        title: postTitle,
        content: postContent,
        reactions: reactions,
        userId: userId,
        tags: tags,
      },
    });
  };

  const addInitialPost = (posts) => {
    dispatchPostCarousel({
      type: "ADD_INITIAL_POSTS",
      payload: {
        posts,
      },
    });
  };

  const deletePost = (postId) => {
    dispatchPostCarousel({ type: "DELETE_POST", payload: { postId } });
  };

  return (
    <PostCarousel.Provider
      value={{
        postCarousel,
        addPost,
        addInitialPost,
        deletePost,
      }}
    >
      {children}
    </PostCarousel.Provider>
  );
};

export default PostCarouselProvider;
