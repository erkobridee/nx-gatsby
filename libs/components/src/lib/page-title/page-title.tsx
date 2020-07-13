import * as React from 'react';

import './page-title.scss';

export interface PageTitleProps {
  name?: string;
}

export const PageTitle: React.FunctionComponent<PageTitleProps> = ({
  name = 'Nx',
}) => (
  <div>
    <h1>Welcome to {name}!</h1>
  </div>
);

export default PageTitle;
