import React, { useState, useRef, useEffect } from "react";
import CodeEditor from "./CodeEditor";
import { Transition } from "@mantine/core";
import { Flex, Select } from "@mantine/core";
import {
  IconDeviceFloppy,
  IconPlayerPlay,
  IconBraces,
} from "@tabler/icons-react";
import Buttons from "./Buttons";
import Output from "./Output";

function LanguageOptions({ collapsed }) {
  const [code, setCode] = useState("");
  const [result, setResult] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const [language, setLanguage] = useState("javascript");
  const [isSaved, setIsSaved] = useState(false);
  const editorRef = useRef(null);

  const handleCodeChange = (newCode) => {
    setCode(newCode);
  };

  const inputBoxStatus = (status) => {
    setIsFocused(status);
  };

  const executeCode = () => {
    console.log("Executing code");
    console.log(code);
    // Add your execution logic here
  };

  useEffect(() => {
    const handleKeydown = (event) => {
      if (event.shiftKey && event.key === "Enter" && isFocused) {
        executeCode();
      }
    };
    window.addEventListener("keydown", handleKeydown);

    return () => {
      window.removeEventListener("keydown", handleKeydown);
    };
  }, [isFocused]);

  const formatCode = () => {
    const editor = editorRef.current;
    if (editor) {
      editor.getAction("editor.action.formatDocument").run();
    }
  };

  const saveCode = async () => {
    console.log("Saving code");
    setIsSaved(true); // Example to set saved status
  };

  return (
    <div>
      <div
        style={{
          background: "rgba(30,30,30,255)",
          borderBottom: "1px solid #c09eff",
        }}
      >
        <Flex justify="space-between" align="center" direction="row">
          <Select
            placeholder="Pick a language"
            mb={10}
            ml={5}
            styles={{
              input: {
                backgroundColor: "rgba(30,30,30,255)",
                border: "none",
                color: "#c0cee7",
              },
              dropdown: {
                backgroundColor: "rgba(30,30,30,255)",
                color: "#c0cee7",
              },
              item: {
                backgroundColor: "rgba(30,30,30,255)",
                "&[data-hovered]": {
                  backgroundColor: "rgba(50,50,50,255)",
                },
                "&[data-selected]": {
                  backgroundColor: "rgba(70,70,70,255)",
                  color: "white",
                },
              },
            }}
            data={[
              { value: "javascript", label: "JavaScript" },
              { value: "python", label: "Python" },
              { value: "go", label: "Go" },
              { value: "java", label: "Java" },
              { value: "html", label: "HTML" },
              { value: "css", label: "CSS" },
            ]}
            value={language}
            onChange={setLanguage}
          />
          <Flex justify="center" align="flex-start" direction="row" wrap="wrap">
            <Buttons
              IconName={IconPlayerPlay}
              onClick={executeCode}
              Desc={"Run Code"}
            />
            <Buttons
              IconName={IconDeviceFloppy}
              onClick={saveCode}
              Desc={"Save Code"}
            />
            <Buttons
              IconName={IconBraces}
              onClick={formatCode}
              Desc={"Format Code"}
            />
          </Flex>
        </Flex>
      </div>
      <Flex
        mih={50}
        justify="center"
        align="flex-start"
        direction="row"
        wrap="nowrap"
      >
        <CodeEditor
          code={code}
          onChange={handleCodeChange}
          isFocused={isFocused}
          onShiftEnter={executeCode}
          language={language}
          theme={"vs-dark"}
          collapsed={collapsed}
          onEditorMount={(focused) => {
            setIsFocused(focused);
            editorRef.current = focused ? editorRef.current : null;
          }}
          style={{ flex: 1 }}
        />
        <Output style={{ flex: 1 }} collapsed={collapsed} />
      </Flex>

      <pre>{result}</pre>
      {isSaved && <p>Code saved successfully!</p>}
    </div>
  );
}

export default LanguageOptions;
