import debounce from 'lodash/debounce';
import { FixedSizeList as List } from 'react-window';
import React, { useState, useCallback, ChangeEvent, useEffect } from 'react';

import { BooksSearchResult } from './types';

import { useFetchData } from 'hooks/useFetchData';

import { AppCover } from 'components/AppCover';

import { BookRow } from './components/BookRow';

import { search } from './styled';

export function AllBooksPage() {
  const [listHeight, setListHeight] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    function onResize() {
      const OCCUPIED_HEIGHT = 80;
      const height = window.innerHeight;

      setListHeight(height - OCCUPIED_HEIGHT);
    }

    onResize();

    window.addEventListener('resize', onResize);

    return () => window.removeEventListener('resize', onResize);
  }, []);

  const onSearchChange = useCallback(
    debounce((e: ChangeEvent<HTMLInputElement>) => {
      setSearchTerm(e.target.value);
    }, 300),
    []
  );

  const { data, loading } = useFetchData<BooksSearchResult>({
    searchTerm,
  });

  const books = data?.books;

  return (
    <div>
      <input
        onChange={onSearchChange}
        placeholder="Search..."
        className={search}
      />

      <List
        width="100%"
        itemSize={338}
        itemData={books}
        height={listHeight}
        itemCount={books?.length || 0}
      >
        {BookRow}
      </List>
      <AppCover show={loading} />
    </div>
  );
}
