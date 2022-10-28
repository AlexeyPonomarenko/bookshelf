import React from 'react';
import { Link, useParams } from 'react-router-dom';

import { useFetchData } from 'hooks/useFetchData';

import { AppCover } from 'components/AppCover';
import { SingleBook } from 'components/SingleBook';

import { BookResponse } from './types';

import { book as bookClass } from './styled';

export function SingleBookPage() {
  const { id } = useParams();

  const { loading, data } = useFetchData<BookResponse>({ bookId: id });

  const book = data?.book;

  if (!book) {
    return (
      <h3>
        Could not find the book. <Link to="/">Go back.</Link>
      </h3>
    );
  }

  return (
    <div>
      <SingleBook book={book} className={bookClass} isVerticalLayout />
      <AppCover show={loading} />
      <Link to="/">Back to list</Link>
    </div>
  );
}
