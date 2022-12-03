import React from 'react';
import {GotQuote} from "../../types";

interface Props {
  quote: GotQuote;
  onGetClickEdit: React.MouseEventHandler;
  onGetClickDelete: React.MouseEventHandler;
}

const ShowQuote: React.FC<Props> = ({quote,onGetClickEdit,onGetClickDelete}) => {
  return (
    <div className='p-1 border border-primary d-flex justify-content-between align-items-center'>
      <div>
        <p>-----{quote.text}</p>
        <p>Author: {quote.author}</p>
      </div>
      <div className='d-flex flex-column'>
        <button onClick={onGetClickEdit} className='mb-2 btn btn-info'>Edit</button>
        <button onClick={onGetClickDelete} className='btn btn-danger'>Delete</button>
      </div>
    </div>
  );
};

export default ShowQuote;