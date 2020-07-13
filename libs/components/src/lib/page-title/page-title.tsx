import * as React from 'react';

import './page-title.scss';

export interface PageTitleProps {
  name?: React.ReactNode;
}

export const PageTitle: React.FunctionComponent<PageTitleProps> = ({
  name = 'Nx',
}) => <h1>Welcome to {name}!</h1>;

export default PageTitle;
