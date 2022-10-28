import { useEffect, useState } from 'react';

type FetchInput = {
  searchTerm?: string;
  bookId?: string;
};

type FetchInfo<T> = {
  data?: T;
  loading: boolean;
};

function getUrl(input: FetchInput) {
  const { bookId, searchTerm } = input;

  let url = 'books';

  if (bookId) {
    url = `${url}/${bookId}`;
  }

  if (searchTerm) {
    return `${url}/?q=${searchTerm}`;
  }

  return url;
}

export function useFetchData<T>(input: FetchInput): FetchInfo<T> {
  const { bookId, searchTerm } = input;

  const [data, setData] = useState<T>();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    const url = getUrl(input);

    fetch(`/api/${url}`)
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      })
      .finally(() => setLoading(false));
  }, [bookId, searchTerm]);

  return {
    data,
    loading,
  };
}
