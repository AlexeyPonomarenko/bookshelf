import React from 'react';

import { root, loader, circle } from './styled';

interface Props {
  show: boolean;
}

export function AppCover(props: Props) {
  const { show } = props;

  if (!show) {
    return null;
  }

  return (
    <div className={root}>
      <div className={loader}>
        <div className={circle} />
        <div className={circle} />
        <div className={circle} />
        <div className={circle} />
      </div>
    </div>
  );
}
