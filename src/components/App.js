import React from 'react';
import BooksList from './BooksList';
import BookDetail from './BookDetail';

const App = () => {
  return (
    <div>
      {' '}
      <div className='ui container grid'>
        <h1>Books List App</h1>
        <div className='ui row'>
          <div className='column eight wide'>
            <BooksList />
          </div>
          <div className='column eight wide'>
            <BookDetail />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
