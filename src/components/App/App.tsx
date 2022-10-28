import React from 'react';

import {
  Routes,
  Route,
  Navigate,
  BrowserRouter as Router,
} from 'react-router-dom';

import { SingleBookPage } from 'components/pages/SingleBookPage';
import { AllBooksPage } from 'components/pages/AllBooksPage';

import { appStyles } from './styled';

export function App() {
  return (
    <div className={appStyles}>
      <Router>
        <Routes>
          <Route path='/' element={<AllBooksPage />} />
          <Route path='/book/:id' element={<SingleBookPage />} />
          <Route path='*' element={<Navigate to='/' />} />
        </Routes>
      </Router>
    </div>
  );
}
