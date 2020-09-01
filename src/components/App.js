import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import PostIndex from "../components/PostIndex";
import PostsNew from "../components/PostsNew";
import PostsShow from "../components/PostsShow";
import FourOhFour from "./404.js";

const App = () => {
  return (
    <div className="ui container" style={{ margin: "20px auto" }}>
      <BrowserRouter>
        <Switch>
          {/* Some weird rule with wildcards is that they need to be in order  */}
          <Route path="/" exact component={PostIndex} />
          <Route path="/posts/new" component={PostsNew} />
          <Route path="/posts/:id" component={PostsShow} />
          <Route component={FourOhFour} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
