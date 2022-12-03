import React from 'react';
import {GotQuote} from "../../types";
import ShowQuote from "./ShowQuote";

interface Props {
  quotes: GotQuote[];
  onGetClickDelete: (id: string) => void;
}
const ShowQuotes: React.FC<Props> = ({quotes , onGetClickDelete}) => {
  return (
    <div>
      {quotes.map((item) => (
        <ShowQuote
          key={Math.random() * 99999}
          quote={item}
          onGetClickDelete={() => onGetClickDelete(item.id)}
        />
      ))}
    </div>
  );
};

export default ShowQuotes;