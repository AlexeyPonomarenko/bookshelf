import { Link } from 'react-router-dom';
import React, { CSSProperties } from 'react';

import { Book } from 'types';

import { SingleBook } from 'components/SingleBook';

import { bookLink } from './styled';

type Props = {
  data: Book[];
  index: number;
  style: CSSProperties;
};

export function BookRow(props: Props) {
  const { data, style, index } = props;

  const book = data[index];
  const { id } = book;

  return (
    <Link to={`/book/${id}`} className={bookLink} style={style}>
      <SingleBook book={book} />
    </Link>
  );
}
