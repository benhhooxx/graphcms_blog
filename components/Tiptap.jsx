import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import React, { forwardRef } from "react";
import {
  FaBold,
  FaItalic,
  FaStrikethrough,
  FaHeading,
  FaCode,
  FaListOl,
  FaListUl,
  FaQuoteLeft,
  FaMinus,
  FaLevelDownAlt,
  FaRedo,
  FaUndo,
  FaUnderline,
} from "react-icons/fa";
// import { submitTestRichText } from "../services";
import { submitArticle } from "../services";

const MenuBar = ({ editor }) => {
  if (!editor) {
    return null;
  }

  return (
    <>
      <button
        onClick={() => editor.chain().focus().toggleBold().run()}
        className="transition duration-200 ease hover:bg-gray-100 inline-block bg-white rounded-md px-3 py-3 cursor-pointer"
      >
        <FaBold />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleItalic().run()}
        className="transition duration-200 ease hover:bg-gray-100 inline-block bg-white rounded-md px-3 py-3 cursor-pointer"
      >
        <FaItalic />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleStrike().run()}
        className="transition duration-200 ease hover:bg-gray-100 inline-block bg-white rounded-md px-3 py-3 cursor-pointer"
      >
        <FaStrikethrough />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleCode().run()}
        className="transition duration-200 ease hover:bg-gray-100 inline-block bg-white rounded-md px-3 py-3 cursor-pointer"
      >
        <FaCode />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
        className="transition duration-200 ease hover:bg-gray-100 inline-block bg-white rounded-md px-3 py-3 cursor-pointer"
      >
        <FaHeading />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleBulletList().run()}
        className="transition duration-200 ease hover:bg-gray-100 inline-block bg-white rounded-md px-3 py-3 cursor-pointer"
      >
        <FaListUl />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleOrderedList().run()}
        className="transition duration-200 ease hover:bg-gray-100 inline-block bg-white rounded-md px-3 py-3 cursor-pointer"
      >
        <FaListOl />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleBlockquote().run()}
        className="transition duration-200 ease hover:bg-gray-100 inline-block bg-white rounded-md px-3 py-3 cursor-pointer"
      >
        <FaQuoteLeft />
      </button>
      <button
        onClick={() => editor.chain().focus().setHorizontalRule().run()}
        className="transition duration-200 ease hover:bg-gray-100 inline-block bg-white rounded-md px-3 py-3 cursor-pointer"
      >
        <FaMinus />
      </button>
      <button
        onClick={() => editor.chain().focus().setHardBreak().run()}
        className="transition duration-200 ease hover:bg-gray-100 inline-block bg-white rounded-md px-3 py-3 cursor-pointer"
      >
        <FaLevelDownAlt />
      </button>
      <button
        className="transition duration-200 ease hover:bg-gray-100 inline-block bg-white rounded-md px-3 py-3 cursor-pointer"
        onClick={() => editor.chain().focus().undo().run()}
      >
        <FaUndo />
      </button>
      <button
        className="transition duration-200 ease hover:bg-gray-100 inline-block bg-white rounded-md px-3 py-3 cursor-pointer"
        onClick={() => editor.chain().focus().redo().run()}
      >
        <FaRedo />
      </button>
    </>
  );
};

const Tiptap = () => {
  const editor = useEditor({
    extensions: [StarterKit],
  });

  const handlePostSubmission = () => {
    const json = editor.getJSON();
    console.log(json.content);

    const result = json.content;
    const newResult = [];

    if (result && result.length > 0) {
      newResult = result.map((el) => ({
        type: el.type,
        children: el.content,
      }));
    }

    console.log(newResult);

    submitArticle({ content: { children: newResult } });

    // const testRichtextObj = {
    //   json,
    // };
    // submitTestRichText(testRichtextObj).then((res) => {
    //   console.log(res);
    // });
  };

  return (
    <div>
      <MenuBar editor={editor} />
      <EditorContent
        editor={editor}
        className="mb-4 p-4 outline-none rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700"
      />
      <button
        type="button"
        onClick={handlePostSubmission}
        className="transition duration-500 ease hover:bg-indigo-900 inline-block bg-pink-600 text-lg font-medium rounded-full text-white px-8 py-3 cursor-pointer"
      >
        Post Comment
      </button>
    </div>
  );
};

export default forwardRef(Tiptap);
