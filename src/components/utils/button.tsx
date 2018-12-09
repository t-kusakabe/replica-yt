import * as React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

import fontawesome from './fontawesome';
fontawesome;

const Button = (props: any) => {
  const icon: IconProp = props.icon;

  return (
    <FontAwesomeIcon icon={icon} />
  );
};

export default Button;
