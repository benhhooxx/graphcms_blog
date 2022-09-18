import React from "react";
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
import { CustomEditor } from "./StaleUtils";

const EditorMenu = ({ editor }) => {
  return (
    <div>
      <button
        onMouseDown={(event) => {
          event.preventDefault();
          CustomEditor.toggleBoldMark(editor);
        }}
        className="transition duration-200 ease hover:bg-gray-100 inline-block bg-white rounded-md px-3 py-3 cursor-pointer"
      >
        <FaBold />
      </button>
      <button
        onMouseDown={(event) => {
          event.preventDefault();
          CustomEditor.toggleItalic(editor);
        }}
        className="transition duration-200 ease hover:bg-gray-100 inline-block bg-white rounded-md px-3 py-3 cursor-pointer"
      >
        <FaItalic />
      </button>
      <button
        onMouseDown={(event) => {
          event.preventDefault();
          CustomEditor.toggleLineThrough(editor);
        }}
        className="transition duration-200 ease hover:bg-gray-100 inline-block bg-white rounded-md px-3 py-3 cursor-pointer"
      >
        <FaStrikethrough />
      </button>
      {/* <button
        onMouseDown={(event) => {
          event.preventDefault();
          CustomEditor.toggleCodeBlock(editor);
        }}
        className="transition duration-200 ease hover:bg-gray-100 inline-block bg-white rounded-md px-3 py-3 cursor-pointer"
      >
        <FaCode />
      </button> */}
      {/* <button className="transition duration-200 ease hover:bg-gray-100 inline-block bg-white rounded-md px-3 py-3 cursor-pointer">
        <FaHeading />
      </button> */}
      {/* <button className="transition duration-200 ease hover:bg-gray-100 inline-block bg-white rounded-md px-3 py-3 cursor-pointer">
        <FaListUl />
      </button>
      <button
        onMouseDown={(event) => {
          event.preventDefault();
          CustomEditor.toggleBulletList(editor);
        }}
        className="transition duration-200 ease hover:bg-gray-100 inline-block bg-white rounded-md px-3 py-3 cursor-pointer"
      >
        <FaListOl />
      </button> */}
      {/* <button className="transition duration-200 ease hover:bg-gray-100 inline-block bg-white rounded-md px-3 py-3 cursor-pointer">
        <FaQuoteLeft />
      </button>
      <button className="transition duration-200 ease hover:bg-gray-100 inline-block bg-white rounded-md px-3 py-3 cursor-pointer">
        <FaMinus />
      </button>
      <button className="transition duration-200 ease hover:bg-gray-100 inline-block bg-white rounded-md px-3 py-3 cursor-pointer">
        <FaLevelDownAlt />
      </button>
      <button className="transition duration-200 ease hover:bg-gray-100 inline-block bg-white rounded-md px-3 py-3 cursor-pointer">
        <FaUndo />
      </button>
      <button className="transition duration-200 ease hover:bg-gray-100 inline-block bg-white rounded-md px-3 py-3 cursor-pointer">
        <FaRedo />
      </button> */}
    </div>
  );
};

export default EditorMenu;
