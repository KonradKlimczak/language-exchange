import * as React from 'react';
import * as Utils from '../../utils';

import Loader from '../../Components/Loader';

import { LessonSummary } from '../../Data/Lesson/Lesson';

interface HomeProps { }
interface HomeState {
  lessons: Utils.RemoteData<Array<LessonSummary>>;
}

class Home extends React.Component<HomeProps, HomeState> {
  constructor(props: HomeProps) {
    super(props);
    this.state = {
      lessons: {
        kind: Utils.RemoteDataKind.NotAsked
      }
    };
  }
  componentDidMount() {
    this.setState({
      lessons: {
        kind: Utils.RemoteDataKind.Success,
        data: []
      }
    });
  }
  render() {
    switch (this.state.lessons.kind) {
      case Utils.RemoteDataKind.NotAsked:
      case Utils.RemoteDataKind.Loading:
        return <Loader />;
      case Utils.RemoteDataKind.Success:
        return <div>Summary of lessons</div>;
      case Utils.RemoteDataKind.Failure:
        return <div>Loading</div>;
      default:
        return Utils.assertNever(this.state.lessons);
    }
  }
}

export default Home;
