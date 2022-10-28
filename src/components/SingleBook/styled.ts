import { css } from '@emotion/css';
import { SINGLE_BOOK_VERTICAL_LAYOUT_CLASS } from './constants';

export const root = css`
  border: 1px solid gray;
  border-radius: 4px;
  padding: 8px;
  display: flex;
  height: 328px;
  box-sizing: border-box;

  &.${SINGLE_BOOK_VERTICAL_LAYOUT_CLASS} {
    border: 0;
    align-items: center;
    flex-direction: column;
    height: auto;
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

export const description = css`
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 6;
  line-clamp: 6;
  -webkit-box-orient: vertical;

  .${SINGLE_BOOK_VERTICAL_LAYOUT_CLASS} & {
    display: block;
  }
`;

export const content = css`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .${SINGLE_BOOK_VERTICAL_LAYOUT_CLASS} & {
    display: block;
  }
`;
