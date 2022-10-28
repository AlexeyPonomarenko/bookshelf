import React from 'react';
import { Link, useParams } from 'react-router-dom';

import { useFetchData } from 'hooks/useFetchData';

import { AppCover } from 'components/AppCover';
import { SingleBook } from 'components/SingleBook';

import { BookResponse } from './types';

import { book } from './styled';

export function SingleBookPage() {
  const { id } = useParams();

  const { loading, data } = useFetchData<BookResponse>({ bookId: id });

  if (!data || !data.book) {
    return (
      <h3>
        Could not find the book. <Link to="/">Go back.</Link>
      </h3>
    );
  }

  return (
    <div>
      <SingleBook book={data.book} className={book} isVerticalLayout />
      <AppCover show={loading} />
      <Link to="/">Back to list</Link>
    </div>
  );
}
