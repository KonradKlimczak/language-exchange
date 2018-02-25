import * as React from 'react';

interface GuestViewProps { }
interface GuestViewState { }

export default class GuestView extends React.Component<GuestViewProps, GuestViewState> {
  constructor(props: GuestViewProps) {
    super(props);
    this.state = {
    };
  }
  render() {
    return (
      <div>
        Guest View
      </div>
    );
  }
}
