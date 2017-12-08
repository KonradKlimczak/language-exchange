import * as React from 'react';
import {
  Route,
} from 'react-router-dom';

import Home from './Home/Home';
import LessonCreator from './LessonCreator/LessonCreator';

class Main extends React.Component {
  render() {
    return (
      <div>
        <Route exact={true} path="/" component={Home} />
        <Route path="/create-lesson" component={LessonCreator} />
      </div>
    );
  }
}

export default Main;
