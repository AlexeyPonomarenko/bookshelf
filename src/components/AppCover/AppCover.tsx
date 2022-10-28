import React, { useEffect, useState } from 'react';

import { root, loader, circle } from './styled';

interface Props {
  show: boolean;
}

export function AppCover(props: Props) {
  const { show } = props;

  const [internalShow, setInternalShow] = useState(false);

  useEffect(() => {
    if (show) {
      setInternalShow(true);
    } else {
      setTimeout(() => {
        if (!show) {
          setInternalShow(false);
        }
      }, 500);
    }
  }, [show]);

  if (!internalShow) {
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
