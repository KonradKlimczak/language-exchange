import * as React from 'react';

import './TextField.css';

interface TextFieldProps {
  value: string;
  onChange: () => void;
  placeholder?: string;
  label?: string;
  errorMessage?: string;
}

export const TextField: React.SFC<TextFieldProps> = (props: TextFieldProps) => {
  return (
    <div>
      {props.label && <p>{props.label}</p>}
      <input
        className="text-input"
        type="text"
        value={props.value}
        placeholder={props.placeholder}
        onChange={props.onChange}
      />
      {props.errorMessage && <p>{props.errorMessage} </p>}
    </div>
  );
};
