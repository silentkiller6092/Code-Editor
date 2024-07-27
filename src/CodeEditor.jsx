import MonacoEditor from "@monaco-editor/react";
import React, { useState, useRef } from "react";

const CodeEditor = ({
  code,
  onChange,
  language,
  theme,
  onEditorMount,
  collapsed,
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const editorRef = useRef(null);

  // Handle editor changes
  const handleEditorChange = (value) => {
    if (value !== undefined) {
      onChange(value);
    }
  };

  // Handle editor focus
  const handleEditorFocus = () => {
    setIsFocused(true);
  };

  // Handle editor blur
  const handleEditorBlur = () => {
    setIsFocused(false);
  };

  return (
    <div
      style={{
        height: "90vh",
        fontFamily: "cursive",
        width: `${collapsed ? "95vw" : "80vw"}`,
        border: isFocused ? "2px solid #007ACC" : "none",
        borderRadius: "2px",
        transition: "border 0.3s ease", // Optional: Smooth transition
      }}
      className="code-editor"
    >
      <MonacoEditor
        language={language}
        value={code}
        onChange={handleEditorChange}
        theme={theme}
        options={{
          automaticLayout: true,
          lineNumbers: "on",
          minimap: { enabled: false },
          scrollBeyondLastLine: false,
          readOnly: false,
          fontSize: 14,
          lineHeight: 22,
          wordWrap: "on",
          tabSize: 2,
          insertSpaces: true,
        }}
        onMount={(editor, monaco) => {
          editorRef.current = editor;
          // Attach focus and blur event listeners
          editor.onDidFocusEditorText(handleEditorFocus);
          editor.onDidBlurEditorText(handleEditorBlur);
          if (onEditorMount) {
            onEditorMount(editor, monaco);
          }
        }}
      />
    </div>
  );
};

export default CodeEditor;
