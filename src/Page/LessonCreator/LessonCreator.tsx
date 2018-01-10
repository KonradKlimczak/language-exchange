import * as React from 'react';

interface LessonCreatorProps {}
interface LessonCreatorState {
  title: string | null;
}

class LessonCreator extends React.Component<LessonCreatorProps, LessonCreatorState> {
  constructor(props: LessonCreatorProps) {
    super(props);
    this.state = {
      title: null
    };
  }
  handleChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      title: e.target.value
    });
  };
  render() {
    return (
      <form>
        <div>
          Title <input type="text" onChange={this.handleChangeTitle} />
        </div>
      </form>
    );
  }
}

export default LessonCreator;
