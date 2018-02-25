import * as React from 'react';
import { TextField } from '../../Components/TextField/TextField';

enum FiledKind {
  Empty = 'Empty',
  Valid = 'Valid',
  Invaild = 'Invalid'
}

type Field<T> = {
  kind: FiledKind.Empty,
} | {
    kind: FiledKind.Valid,
    value: T,
  } | {
    kind: FiledKind.Invaild,
    value: T,
    error: string
  };

interface GuestViewProps { }
interface GuestViewState {
  username: Field<string>;
  email: Field<string>;
  password: Field<string>;
  passwordAgain: Field<string>;
}

export default class GuestView extends React.Component<GuestViewProps, GuestViewState> {
  constructor(props: GuestViewProps) {
    super(props);
    this.state = {
      username: { kind: FiledKind.Empty },
      email: { kind: FiledKind.Empty },
      password: { kind: FiledKind.Empty },
      passwordAgain: { kind: FiledKind.Empty },
    };
  }
  render() {
    return (
      <div>
        Guest View
        <div className="bg-light rounded">
          <form>
            <TextField label="Username" value={''} onChange={() => console.info('test')} />
            <input />
            <input />
            <input />
          </form>
        </div>
      </div>
    );
  }
}
