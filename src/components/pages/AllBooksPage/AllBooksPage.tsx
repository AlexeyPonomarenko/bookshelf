import React, { useState, useEffect } from 'react';
import { FixedSizeList as List } from 'react-window';

import { BooksSearchResult } from './types';

import { useFetchData } from 'hooks/useFetchData';

import { AppCover } from 'components/AppCover';

import { Search } from './components/Search';
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

  const { data, loading } = useFetchData<BooksSearchResult>({
    searchTerm,
  });

  const books = data?.books;

  return (
    <div>
      <Search
        className={search}
        disabled={loading}
        setSearchTerm={setSearchTerm}
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
