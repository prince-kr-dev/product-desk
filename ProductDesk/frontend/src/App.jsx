import { Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Nav from "./Components/Nav";
import Create from "./Components/Create";
import Home from "./Components/Home";

function App() {
  return (
    <>
      <div className="text-white px-4 md:px-20 h-screen">
        <Nav />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<Create />} />
        </Routes>

        <Toaster position="top-center" reverseOrder={false} />
      </div>
    </>
  );
}

export default App;
