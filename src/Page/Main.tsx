import * as React from 'react';
import {
  Route,
} from 'react-router-dom';

import Home from './Home/Home';
import LessonCreator from './LessonCreator/LessonCreator';

import './Main.css';

class Main extends React.Component {
  render() {
    return (
      <div className="lele--main">
        <Route exact={true} path="/" component={Home} />
        <Route path="/create-lesson" component={LessonCreator} />
      </div>
    );
  }
}

export default Main;
