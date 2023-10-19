import { useState } from "react";

function App() {
  const [color, setColor] = useState("olive");

  const divStyle = {
    backgroundColor: color,
    width: "100%",
    height: "100vh", // 100% of the viewport height
  };

  return (
    <>
      <div style={divStyle}>
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <h1>Test app</h1>
        </div>
      </div>
    </>
  );
}

export default App;
