import debounce from 'lodash/debounce';
import React, { ChangeEvent, useCallback, useEffect, useRef } from 'react';

type Props = {
  disabled: boolean;
  className?: string;
  setSearchTerm: (term: string) => void;
};

export function Search(props: Props) {
  const { disabled, className, setSearchTerm } = props;

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const inputEl = inputRef.current;

    if (!disabled && inputEl) {
      inputEl.focus({
        preventScroll: true,
      });
    }
  }, [disabled]);

  const onSearchChange = useCallback(
    debounce((e: ChangeEvent<HTMLInputElement>) => {
      setSearchTerm(e.target.value);
    }, 300),
    []
  );

  return (
    <input
      ref={inputRef}
      disabled={disabled}
      className={className}
      placeholder="Search..."
      onChange={onSearchChange}
    />
  );
}
