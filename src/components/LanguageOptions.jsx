import { React, useState, useRef } from "react";
import CodeEditor from "../CodeEditor";

function LanguageOptions() {
  const [code, setCode] = useState("");
  const [result, setResult] = useState("");
  const [language, setLanguage] = useState("javascript");
  const [isSaved, setIsSaved] = useState(false);
  const editorRef = useRef(null);
  const handleCodeChange = (newCode) => {
    setCode(newCode);
  };

  const executeCode = async () => {
    console.log("Executing code");
    console.log(code);
    // Add your code execution logic here
  };

  const formatCode = () => {
    const editor = editorRef.current;
    if (editor) {
      editor.getAction("editor.action.formatDocument").run();
    }
  };

  const saveCode = async () => {
    console.log("Saving code");
    // Add your code saving logic here
    setIsSaved(true); // Example to set saved status
  };

  return (
    <div>
      <select value={language} onChange={(e) => setLanguage(e.target.value)}>
        <option value="javascript">JavaScript</option>
        <option value="python">Python</option>
        <option value="go">Go</option>
        <option value="java">Java</option>
        <option value="html">HTML</option>
        <option value="css">CSS</option>
      </select>
      <CodeEditor
        code={code}
        onChange={handleCodeChange}
        language={language}
        theme={"vs-dark"}
        onEditorMount={(editor) => {
          editorRef.current = editor;
        }}
      />
      <button onClick={executeCode}>Run</button>
      <button onClick={saveCode}>Save</button>
      <button onClick={formatCode}>Format Code</button>
      <pre>{result}</pre>
      {isSaved && <p>Code saved successfully!</p>}
    </div>
  );
}

export default LanguageOptions;
