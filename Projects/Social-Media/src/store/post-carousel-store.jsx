import { createContext, useReducer } from "react";

export const PostCarousel = createContext({
  postCarousel: [],
  addPost: () => {},
  deletePost: () => {},
});

const postCarouselReducer = (currPostCarousel, action) => {
  let updatedPostCarousel = currPostCarousel;
  if (action.type === "DELETE_POST") {
    updatedPostCarousel = currPostCarousel.filter(
      (post) => post.id !== action.payload.postId
    );
  } else if (action.type === "ADD_POST") {
    updatedPostCarousel = [action.payload, ...currPostCarousel];
  }
  return updatedPostCarousel;
};

const PostCarouselProvider = ({ children }) => {
  const [postCarousel, dispatchPostCarousel] = useReducer(
    postCarouselReducer,
    DEFAULT_POST_CAROUSEL
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

  const deletePost = (postId) => {
    dispatchPostCarousel({ type: "DELETE_POST", payload: { postId } });
  };

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

const DEFAULT_POST_CAROUSEL = [
  {
    id: "1",
    title: "Post Title1",
    content: "Post Content1",
    reactions: 5,
    userId: "user-1",
    tags: ["tag1", "tag2"],
  },
  {
    id: "2",
    title: "Post Title2",
    content: "Post Content2",
    reactions: 19,
    userId: "user-2",
    tags: ["tag1", "tag2"],
  },
];

export default PostCarouselProvider;
