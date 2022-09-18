import React, { useRef } from "react";
import { Tiptap } from ".";
import { SlateEditor } from ".";

const CreatePost = () => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-8 pb-12 mb-8">
      <h3 className="text-xl mb-8 font-semibold border-b pb-4">
        Create a Post
      </h3>
      <div className="grid grid-cols-1 gap-4 mb-4">
        {/* <Tiptap /> */}
        <SlateEditor />
      </div>
      {/* <button
        type="button"
        onClick={handlePostSubmission}
        className="transition duration-500 ease hover:bg-indigo-900 inline-block bg-pink-600 text-lg font-medium rounded-full text-white px-8 py-3 cursor-pointer"
      >
        Post Comment
      </button> */}
    </div>
  );
};

export default CreatePost;
