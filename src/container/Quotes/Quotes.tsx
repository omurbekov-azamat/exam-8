import React, {useCallback, useEffect, useState} from 'react';
import {Link, Outlet, useLocation} from "react-router-dom";
import axiosApi from "../../axiosApi";
import {GotQuote, GotQuoteList} from "../../types";
import ShowQuotes from "../../components/ShowQuote/ShowQuotes";

const Quotes = () => {
  const test = [
    {title: 'All', id: ''},
    {title: 'Star Wars', id: 'star-wars'},
    {title: 'Famous People', id: 'famous-people'},
    {title: 'Saying', id: 'saying'},
    {title: 'Humor', id: 'humor'},
    {title: 'Motivational', id: 'motivational'},
  ]

  const [quotes, setQuotes] = useState<GotQuote[]>([])

  const location = useLocation();

  const fetchQuotes = useCallback(async () => {
    try {
      const quotesResponse = await axiosApi.get<GotQuoteList>('/quotes.json');
      if (quotesResponse.data) {
        const quotes = Object.keys(quotesResponse.data).map(key => {
          const quote = quotesResponse.data[key];
          quote.id = key;
          return quote;
        });
        setQuotes(quotes);
      }
    } catch {

    }
  }, []);

  useEffect( () => {
    if(location.pathname === '/quotes' || location.pathname === '/') {
      fetchQuotes().catch(console.error);
    }
  }, [fetchQuotes, location])

  const edit =  (id: string | undefined) => {
    console.log('edit', id);
  }

  const deleteAgain = async (id: string | undefined) => {
    try {
      await axiosApi.delete('/quotes/' + id + '.json');
    } finally {
      fetchQuotes().catch(console.error);
    }
  }


  const useLocal = () => {
    if (location.pathname === '/quotes' || location.pathname === '/') {
      return (
        <div>
          All
          <ShowQuotes quotes={quotes} onGetClickEdit={edit} onGetClickDelete={deleteAgain}/>
        </div>

      )
    }
  }

  return (
    <div className='d-flex'>
      <div className='d-flex flex-column mt-5'>
        {test.map((item) => (
          <Link
            key={Math.random()}
            to={item.id}
            className='mb-3'
          >
            {item.title}
          </Link>
        ))}
      </div>
      <div className='mt-5 border w-100'>
        {useLocal()}
        <Outlet/>
      </div>
    </div>
  );
};

export default Quotes;