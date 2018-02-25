import * as React from 'react';

interface UserLinkProps {
  gold: number;
  silver: number;
  bronze: number;
}

export const UserLink: React.SFC<UserLinkProps> = (props: UserLinkProps) => {
  return (
    <React.Fragment>
      <i className="fa fa-user-circle" />
      {props.gold > 0 && <div style={{ marginLeft: '5px', marginRight: '5px' }}>
        {props.gold} <i style={{ color: 'gold' }} className="fa fa-trophy" />
      </div>}
      {props.silver > 0 && <div style={{ marginLeft: '5px', marginRight: '5px' }}>
        {props.silver} <i style={{ color: 'silver' }} className="fa fa-trophy" />
      </div>}
      {props.bronze > 0 && <div style={{ marginLeft: '5px', marginRight: '5px' }}>
        {props.bronze} <i style={{ color: 'sandybrown' }} className="fa fa-trophy" />
      </div>}
    </React.Fragment>
  );
};
