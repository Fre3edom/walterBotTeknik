import Landing from "./components/Landing";
import "./App.css";
import Nav from "./components/Nav";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./components/About";
import FAQ from "./components/FAQ";
import Chat from "./components/ui/Chat";
import Custom from "./components/Buildcustom";
import { useState } from "react";

function App() {
  const [customData, setCustomData] = useState(null);

  function handleCustomData(customData) {
    setCustomData(customData);
  }

  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/about" element={<About />} />
          <Route path="/gustavo" element={<Chat />} />
          <Route path="/walter" element={<Chat />} />
          <Route path="/jesse" element={<Chat />} />
          <Route path="/saul" element={<Chat />} />
          <Route path="/mike" element={<Chat />} />
          <Route
            path="/buildcustom"
            element={<Custom handleCustomData={handleCustomData}/>}
          />
          <Route
            path="/custom"
            element={
              <Chat
              customData={customData}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
