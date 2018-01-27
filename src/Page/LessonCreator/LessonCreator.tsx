import * as React from 'react';
import * as Lesson from '../../Data/Lesson/Lesson';
import { Tag } from '../../Components/Tag';

interface LessonCreatorProps { }
interface LessonCreatorState {
  title: string | null;
  tags: Array<Lesson.Tag>;
}

class LessonCreator extends React.Component<LessonCreatorProps, LessonCreatorState> {
  constructor(props: LessonCreatorProps) {
    super(props);
    this.state = {
      title: null,
      tags: [{
        id: 'test',
        name: 'Vocabulary'
      }]
    };
  }
  handleChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      title: e.target.value
    });
  }
  render() {
    return (
      <form>
        <div>
          Title <input type="text" onChange={this.handleChangeTitle} />
        </div>
        <div className="tags">
          {this.state.tags.map(tag =>
            <Tag key={tag.id} tag={tag} />
          )}
        </div>
      </form>
    );
  }
}

export default LessonCreator;
