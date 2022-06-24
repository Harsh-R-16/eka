import Main from "./components/Main/Main";
import Modal from "./components/Modal/Modal";
import { Route, Routes } from "react-router-dom";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/modal" element={<Modal />} />
    </Routes>
  );
}
