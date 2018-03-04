import * as React from 'react';
import { TextField } from '../../Components/TextField/TextField';

interface GuestViewProps { }
interface GuestViewState {
  username: string;
  email: string;
  password: string;
  passwordAgain: string;
}

export default class GuestView extends React.Component<GuestViewProps, GuestViewState> {
  constructor(props: GuestViewProps) {
    super(props);
    this.state = {
      username: '',
      email: '',
      password: '',
      passwordAgain: '',
    };
  }
  render() {
    return (
      <div>
        Guest View
        <div className="bg-light rounded">
          <form>
            <TextField label="Username" value={''} onChange={() => console.info('test')} />
            <TextField label="Username" value={''} onChange={() => console.info('test')} />
            <TextField label="Username" value={''} onChange={() => console.info('test')} />
            <TextField label="Username" value={''} onChange={() => console.info('test')} />
          </form>
        </div>
      </div>
    );
  }
}
