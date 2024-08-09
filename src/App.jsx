import { BrowserRouter, Route, Routes } from "react-router-dom";

import { HomePage, AboutPage } from "./pages";
import { Header } from "./components/header";

import "./app.css";

function App() {
  return (
    <BrowserRouter>
      <main className="min-h-[1000px] w-full bg-primary-950 text-secondary-50">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
