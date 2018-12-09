import * as React from 'react';

const Button = (props: any) => {
  const content: string = props.content;

  return (
    <button>
      {content}
    </button>
  );
};

export default Button;
