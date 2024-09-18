import { Route, Routes, useLocation } from "react-router-dom";
import Header from "./components/Header";
import {
  AddTutorial,
  NotFoundPage,
  Tutorial,
  TutorialsList,
} from "./components";
import { useEffect } from "react";

function App() {
  const location = useLocation();

  useEffect(() => {
    document.title = getPageTitle(location.pathname);
  }, [location]);
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<TutorialsList />} />
        <Route path="/tutorials" element={<TutorialsList />} />
        <Route path="/add" element={<AddTutorial />} />
        <Route path="/tutorials/:id" element={<Tutorial />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

const getPageTitle = (pathname: string) => {
  let title = "";
  switch (pathname) {
    case "/":
      title = "Tutos";
      break;
    case "/login":
      title = "Connexion";
      break;
    case "/signup":
      title = "SignUp";
      break;
    case "/tutorials":
      title = "Tutos";
      break;
    case "/add":
      title = "Add";
      break;
    case "/tutorials/:id":
      title = "Tuto Details";
      break;
    default:
      title = "";
  }
  return title ? title + " | Labs" : "Tuto App";
};

export default App;
