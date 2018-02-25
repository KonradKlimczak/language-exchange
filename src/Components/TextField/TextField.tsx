import * as React from 'react';

interface TextFieldProps {
  value: string;
  onChange: () => void;
  placeholder?: string;
  label?: void;
  errorMessage?: string;
}

export const TextField: React.SFC<TextFieldProps> = (props: TextFieldProps) => {
  return (
    <div>
      {props.label && <p>{props.label}</p>}
      <input type="text" value={props.value} placeholder={props.placeholder} onChange={props.onChange} />
      {props.errorMessage && <p>{props.errorMessage} </p>}
    </div>
  );
};
