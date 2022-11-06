import { Route, Routes } from "react-router-dom";

import "./App.css";
import reset from "styled-reset";
import { createGlobalStyle } from "styled-components";

import MainPage from "./Components/pages/MainPage";
import JobPosting from "./Components/pages/JobPosting";
import SignUpPage from "./Components/pages/SignUpPage";
import NewSignUpPage from "./Components/pages/NewSignUpPage";

import Header from "./Components/UI/organisms/Header";

const GlobalStyle = createGlobalStyle`
  ${reset}
  * {
    box-sizing: border-box;
  }
  body, div, span, button, h1, h2, h3, h4, a, img, ol, ul, li, label,
  section {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    margin: 0;
    padding: 0;
  }
  button {
    background-color: inherit;
    border: none;
    cursor: pointer;
  }
  img {
    display: inline-block;
  }
  a {
    text-decoration: none;
    color: black;
  }
`;

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Header />}>
          <Route path="" element={<MainPage />} />
          <Route path="jobposting" element={<JobPosting />} />
        </Route>
        <Route path="/newsignup" element={<NewSignUpPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/newsignup" element={<NewSignUpPage />} />
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </div>
  );
}

export default App;
