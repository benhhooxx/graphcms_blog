// Import React dependencies.
import React, { useState, useCallback } from "react";
// Import the Slate editor factory.
import { createEditor } from "slate";
// Import the Slate components and React plugin.
import { Slate, Editable, withReact } from "slate-react";
import { CustomEditor } from "./StaleUtils";
import EditorMenu from "./EditorMenu";
import { submitArticle } from "../../services";

const initialValue = [
  {
    type: "paragraph",
    children: [{ text: "A line of text in a paragraph." }],
  },
];

// Define a React component to render leaves with bold text.
const Leaf = (props) => {
  return (
    <span
      {...props.attributes}
      style={{
        fontWeight: props.leaf.bold ? "bold" : "normal",
        fontStyle: props.leaf.italic ? "italic" : "normal",
        textDecoration: props.leaf.lineThrough ? "line-through" : "",
      }}
    >
      {props.children}
    </span>
  );
};

// Define a React component renderer for our code blocks.
// const CodeElement = (props) => {
//   return (
//     <pre {...props.attributes}>
//       <code>{props.children}</code>
//     </pre>
//   );
// };

const DefaultElement = (props) => {
  return <p {...props.attributes}>{props.children}</p>;
};

const SlateEditor = () => {
  const [editor] = useState(() => withReact(createEditor()));

  const handlePostSubmission = () => {
    console.log(editor.children);
    const { children } = editor;
    submitArticle({ content: { children } });
  };

  // Define a rendering function based on the element passed to `props`. We use
  // `useCallback` here to memoize the function for subsequent renders.
  const renderElement = useCallback((props) => {
    console.log(props.element.type);
    switch (props.element.type) {
      // case "code":
      //   return <CodeElement {...props} />;
      default:
        return <DefaultElement {...props} />;
    }
  }, []);

  // Define a leaf rendering function that is memoized with `useCallback`.
  const renderLeaf = useCallback((props) => {
    return <Leaf {...props} />;
  }, []);

  return (
    // Add the editable component inside the context.
    <>
      <Slate editor={editor} value={initialValue}>
        <EditorMenu editor={editor} />
        <Editable
          className="mb-4 p-4 outline-none rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700"
          // Pass in the `renderElement` function.
          renderElement={renderElement}
          // Pass in the `renderLeaf` function.
          renderLeaf={renderLeaf}
          // Define a new handler which prints the key that was pressed.
          onKeyDown={(event) => {
            if (!event.ctrlKey) {
              return;
            }

            // Replace the `onKeyDown` logic with our new commands.
            switch (event.key) {
              // FIXME: there is a bug will remove the type "paragraph"
              // case "`": {
              //   event.preventDefault();
              //   CustomEditor.toggleCodeBlock(editor);
              //   break;
              // }

              case "i": {
                event.preventDefault();
                CustomEditor.toggleItalic(editor);
                break;
              }

              case "b": {
                event.preventDefault();
                CustomEditor.toggleBoldMark(editor);
                break;
              }
            }
          }}
        />
      </Slate>
      <button
        type="button"
        onClick={handlePostSubmission}
        className="transition duration-500 ease hover:bg-indigo-900 inline-block bg-pink-600 text-lg font-medium rounded-full text-white px-8 py-3 cursor-pointer"
      >
        Create Post
      </button>
    </>
  );
};

export default SlateEditor;
