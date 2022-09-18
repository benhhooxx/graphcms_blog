import { Transforms, Text, Editor } from "slate";

// Define our own custom set of helpers.
export const CustomEditor = {
  isBoldMarkActive(editor) {
    const [match] = Editor.nodes(editor, {
      match: (n) => n.bold === true,
      universal: true,
    });

    return !!match;
  },

  isItalicMarkActive(editor) {
    const [match] = Editor.nodes(editor, {
      match: (n) => n.italic === true,
    })

    return !!match;
  },

  isLineThroughMarkActive(editor) {
    const [match] = Editor.nodes(editor, {
      match: (n) => n.lineThrough === true,
    })

    return !!match; 
  },

  // isUnderlineMarkActive(editor) {
  //   const [match] = Editor.nodes(editor, {
  //     match: (n) => n.underline === true,
  //     universal: true,
  //   })

  //   return !!match;
  // },

  // isCodeBlockActive(editor) {
  //   const [match] = Editor.nodes(editor, {
  //     match: (n) => n.type === "code",
  //   });

  //   return !!match;
  // },

  // isBulletList(editor) {
  //   const [match] = Editor.nodes(editor, {
  //     match: (n) => n.type === "ol",
  //   })

  //   return !!match;
  // },

  /*
   * Toggle 
   * 
   * 
   * 
   * 
   * */

  toggleBoldMark(editor) {
    const isActive = CustomEditor.isBoldMarkActive(editor);
    Transforms.setNodes(
      editor,
      { bold: isActive ? null : true },
      { match: (n) => Text.isText(n), split: true }
    );
  },

  toggleItalic(editor) {
    const isActive = CustomEditor.isItalicMarkActive(editor);
    Transforms.setNodes(
      editor,
      { italic: isActive ? null : true },
      { match: (n) => Text.isText(n), split: true }
    );
  },

  toggleLineThrough(editor) {
    const isActive = CustomEditor.isLineThroughMarkActive(editor);
    console.log(isActive)
    Transforms.setNodes(
      editor,
      { lineThrough: isActive ? null : true },
      { match: (n) => Text.isText(n), split: true }
    );
  },

  // toggleUnderline(editor) {
  //   const isActive = CustomEditor.isUnderlineMarkActive(editor);
  //   Transforms.setNodes(
  //     editor,
  //     { underline: isActive ? null : true },
  //     { match: (n) => Text.isText(n), split: true }
  //   );
  // },

  // toggleCodeBlock(editor) {
  //   const isActive = CustomEditor.isCodeBlockActive(editor);
  //   Transforms.setNodes(
  //     editor,
  //     { type: isActive ? null : "code" },
  //     { match: (n) => Editor.isBlock(editor, n) }
  //   );
  // },

  // toggleBulletList(editor) {
  //   const isActive = CustomEditor.isBulletList(editor);
  //   console.log(isActive)
  //   Transforms.setNodes(
  //     editor,
  //     { type: isActive ? null : "ol" },
  //     { match: (n) => Editor.isBlock(editor, n) }
  //   );
  // },
};