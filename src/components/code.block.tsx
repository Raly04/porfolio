import { CodeBlock, solarizedDark } from "react-code-blocks";

// eslint-disable-next-line react/prop-types
export default function Code({ code, language, showLineNumbers }) {
  return (
    <CodeBlock
      text={code}
      language={language}
      showLineNumbers={showLineNumbers}
      theme={solarizedDark}
    />
  );
}
