import { css } from '@emotion/css';
import { SINGLE_BOOK_VERTICAL_LAYOUT_CLASS } from './constants';

export const root = css`
  border: 1px solid gray;
  border-radius: 4px;
  padding: 8px;
  display: flex;

  &.${SINGLE_BOOK_VERTICAL_LAYOUT_CLASS} {
    border: 0;
    align-items: center;
    flex-direction: column;
  }
`;

export const cover = css`
  width: 160px;
  margin-right: 8px;
`;

export const footer = css`
  display: flex;
  flex-direction: column;
  margin-top: 8px;
  align-items: flex-end;
`;

export const additionalInfo = css`
  margin: 4px;
`;
