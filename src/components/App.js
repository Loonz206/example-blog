import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import PostIndex from "../components/PostIndex";
import PostsNew from "../components/PostsNew";
import FourOhFour from "./404.js";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={PostIndex} />
        <Route path="/posts/new" component={PostsNew} />
        <Route component={FourOhFour} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
