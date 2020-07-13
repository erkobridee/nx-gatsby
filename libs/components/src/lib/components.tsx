/*
  default component generate together with the library generation

  it's possible to remove it (remember to update the src/index.tsx)
*/
import React from 'react';

import './components.scss';

/* eslint-disable-next-line */
export interface ComponentsProps {}

export const Components = (props: ComponentsProps) => {
  return (
    <div>
      <h1>Welcome to components!</h1>
    </div>
  );
};

export default Components;
