import React from 'react';
import Search from './Search';
import Main from './Main';

export function Google({ route = 'main', query = '', goMain }) {
  function onSearch(value) {
    const q = encodeURIComponent(value);
    window.open(`https://www.google.com/search?q=${q}`, '_blank');
  }

  if (route === 'main') return <Main onSearch={onSearch} />;
  return <Search goMain={goMain} onSearch={onSearch} query={query} />;
}

export default Google;
