import React from 'react';
import { connect } from 'react-redux';

const BookDetail = props => {
  if (!props.book) {
    return <div> Select a book </div>;
  }

  return (
    <div>
      {' '}
      <h1> Selected Books </h1>
      <h3>{props.book.title}</h3>
      <p>{props.book.Author} </p>
    </div>
  );
};

const mapStateToProps = state => {
  return { book: state.selectedBook };
};

export default connect(mapStateToProps)(BookDetail);
