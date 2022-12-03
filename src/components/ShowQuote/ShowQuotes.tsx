import React from 'react';
import {GotQuote} from "../../types";
import ShowQuote from "./ShowQuote";

interface Props {
  quotes: GotQuote[];
  onGetClickEdit: (id: string) => void;
  onGetClickDelete: (id: string) => void;
}
const ShowQuotes: React.FC<Props> = ({quotes,onGetClickEdit, onGetClickDelete}) => {
  return (
    <div>
      {quotes.map((item) => (
        <ShowQuote
          key={Math.random() * 99999}
          quote={item}
          onGetClickEdit={() => onGetClickEdit(item.id)}
          onGetClickDelete={() => onGetClickDelete(item.id)}
        />
      ))}
    </div>
  );
};

export default ShowQuotes;