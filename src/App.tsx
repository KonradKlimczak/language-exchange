import * as React from 'react';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div>
        <header>
          Language Exchange
          <nav>
            Lessons
            User
            Create Lesson
          </nav>
        </header>
        <div>
          Content
        </div>
        <footer>
          Footer
        </footer>
      </div>
    );
  }
}

export default App;
