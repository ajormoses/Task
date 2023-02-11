import React, { useState } from "react";
import Header from "./components/Header";
import ArticleOne from "./components/ArticleOne";
import ArticleTwo from "./components/ArticleTwo";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <Header />
      <ArticleOne />
      <ArticleTwo />
      <Footer />
    </div>
  );
};

export default App;
