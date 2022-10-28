import clsx from 'clsx';
import React from 'react';

import { Book } from 'types';

import { SINGLE_BOOK_VERTICAL_LAYOUT_CLASS } from './constants';

import {
  root,
  cover,
  footer,
  content,
  description,
  additionalInfo,
} from './styled';

type Props = {
  book: Book;
  className?: string;
  isVerticalLayout?: boolean;
};

export function SingleBook(props: Props) {
  const { book, className, isVerticalLayout } = props;

  const { title, author, synopsis, publisher, pageCount, coverImageUrl } = book;

  const rootClassName = clsx(root, className, {
    [SINGLE_BOOK_VERTICAL_LAYOUT_CLASS]: isVerticalLayout,
  });

  return (
    <div className={rootClassName}>
      <img src={coverImageUrl} className={cover} />
      <div className={content}>
        <h2>{title}</h2>
        <div className={description}>{synopsis}</div>
        <div className={footer}>
          <h4 className={additionalInfo}>Author: {author}</h4>
          <h4 className={additionalInfo}>Publisher: {publisher}</h4>
          <h4 className={additionalInfo}>Pages: {pageCount}</h4>
        </div>
      </div>
    </div>
  );
}
