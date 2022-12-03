import React from 'react';
import {Link} from "react-router-dom";
import {GotQuote} from "../../types";

interface Props {
  quote: GotQuote;
  onGetClickDelete: React.MouseEventHandler;
}

const ShowQuote: React.FC<Props> = ({quote, onGetClickDelete}) => {
  return (
    <div className='p-3 border border-primary d-flex justify-content-between align-items-center mb-3'>
      <div>
        <p>-----{quote.text}</p>
        <p>Author: {quote.author}</p>
      </div>
      <div className='d-flex flex-column'>
        <Link to={'/quotes/' + quote.id + '/edit'} className='mb-2 btn btn-info'>Edit</Link>
        <button onClick={onGetClickDelete} className='btn btn-danger'>Delete</button>
      </div>
    </div>
  );
};

export default ShowQuote;