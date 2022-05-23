import React from 'react';
import { Switch, Route } from 'react-router-dom';
import AddPost from './pages/add-post';
import Nav from './components/nav'
import ViewPosts from './pages/view-posts';

function App() {
  return (
    <div>
      <Nav />
      <Switch>
        <Route path="/" exact>
          <ViewPosts />
        </Route>
        <Route path="/add-post">
          <AddPost />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
