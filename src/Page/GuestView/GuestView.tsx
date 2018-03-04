import * as React from 'react';
import { TextField } from '../../Components/TextField/TextField';

interface GuestViewProps {}
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
      passwordAgain: ''
    };
  }
  render() {
    return (
      <div>
        Guest View
        <div className="bg-light rounded">
          <form>
            <TextField label="Username" value={this.state.username} onChange={() => console.info('test')} />
            <TextField label="Email" value={this.state.email} onChange={() => console.info('test')} />
            <TextField
              label="Password"
              password={true}
              value={this.state.password}
              onChange={() => console.info('test')}
            />
            <TextField
              label="Username"
              password={true}
              value={this.state.passwordAgain}
              onChange={() => console.info('test')}
            />
          </form>
        </div>
      </div>
    );
  }
}
