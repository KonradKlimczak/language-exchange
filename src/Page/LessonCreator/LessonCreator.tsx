import * as React from 'react';
import * as Lesson from '../../Data/Lesson/Lesson';
import { Tag } from '../../Components/Tag';

interface LessonCreatorProps { }

interface Exercise {
  question: string;
  answer: string;
}

interface LessonCreatorState {
  title: string | null;
  exercises: Array<Exercise>;
  newExercise: Exercise | null;
  tags: Array<Lesson.Tag>;
}

class LessonCreator extends React.Component<LessonCreatorProps, LessonCreatorState> {
  constructor(props: LessonCreatorProps) {
    super(props);
    this.state = {
      title: null,
      exercises: [],
      newExercise: null,
      tags: []
    };
  }
  handleChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      title: e.target.value
    });
  }

  handleAddExercise = () => {
    this.setState({
      newExercise: {
        answer: '',
        question: ''
      }
    });
  }
  render() {
    return (
      <form>
        <div>
          Title <input type="text" onChange={this.handleChangeTitle} />
        </div>
        {this.state.exercises.map(exercise => (
          <div>
            Exercise
          </div>
        ))}
        {this.state.newExercise ? (
          <div>
            New question form.
          </div>
        ) : (
            <button onClick={this.handleAddExercise}> Add new exercise </button>
          )}
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
