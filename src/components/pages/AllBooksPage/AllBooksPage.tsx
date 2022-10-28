import map from 'lodash/map';
import debounce from 'lodash/debounce';
import { Link } from 'react-router-dom';
import React, { useState, useCallback, ChangeEvent } from 'react';

import { BooksSearchResult } from './types';

import { useFetchData } from 'hooks/useFetchData';

import { AppCover } from 'components/AppCover';
import { SingleBook } from 'components/SingleBook';

import { root, search, bookLink } from './styled';

export function AllBooksPage() {
  const [searchTerm, setSearchTerm] = useState('');

  const onSearchChange = useCallback(
    debounce((e: ChangeEvent<HTMLInputElement>) => {
      setSearchTerm(e.target.value);
    }, 250),
    []
  );

  const { data, loading } = useFetchData<BooksSearchResult>({
    searchTerm,
  });

  return (
    <div className={root}>
      <input
        onChange={onSearchChange}
        placeholder="Search..."
        className={search}
      />
      {map(data?.books, (book) => {
        const { id } = book;

        return (
          <Link to={`/book/${id}`} key={id} className={bookLink}>
            <SingleBook book={book} />
          </Link>
        );
      })}
      <AppCover show={loading} />
    </div>
  );
}
