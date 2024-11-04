import { useRef } from "react";
import { useContext } from "react";
import { PostCarousel } from "../store/post-carousel-store";

const CreatePost = () => {
  const { addPost } = useContext(PostCarousel);

  const userIdElement = useRef();
  const postTitleElement = useRef();
  const postContentElement = useRef();
  const reactionsElement = useRef();
  const tagsElement = useRef();

  const submitHandler = (event) => {
    event.preventDefault();
    const userId = userIdElement.current.value;
    const postTitle = postTitleElement.current.value;
    const postContent = postContentElement.current.value;
    const reactions = reactionsElement.current.value;
    const tags = tagsElement.current.value.split(" ");

    userIdElement.current.value = "";
    postTitleElement.current.value = "";
    postContentElement.current.value = "";
    reactionsElement.current.value = "";
    tagsElement.current.value = "";

    addPost(userId, postTitle, postContent, reactions, tags);
  };

  return (
    <form className="create-post" onSubmit={submitHandler}>
      <h2>Create a New Post</h2>

      <div className="mb-3">
        <label htmlFor="userId" className="form-label">
          User ID
        </label>
        <input
          type="text"
          ref={userIdElement}
          className="form-control"
          id="userId"
          placeholder="Enter your user ID"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="title" className="form-label">
          Post Title
        </label>
        <input
          type="text"
          ref={postTitleElement}
          className="form-control"
          id="title"
          placeholder="Enter post title"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="content" className="form-label">
          Post Content
        </label>
        <textarea
          type="text"
          ref={postContentElement}
          rows="3"
          className="form-control"
          id="content"
          placeholder="Enter post content"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="content" className="form-label">
          Number of Reactions
        </label>
        <input
          type="text"
          ref={reactionsElement}
          className="form-control"
          id="reactions"
          placeholder="How many people reacted to this post"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="content" className="form-label">
          HashTags
        </label>
        <input
          type="text"
          ref={tagsElement}
          className="form-control"
          id="tags"
          placeholder="Enter hashtags for this post"
        />
      </div>

      <button type="submit" className="btn btn-primary">
        Post
      </button>
    </form>
  );
};

export default CreatePost;
