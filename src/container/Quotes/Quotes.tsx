import React, {useCallback, useEffect, useState} from 'react';
import {Outlet, useLocation} from "react-router-dom";
import axiosApi from "../../axiosApi";
import ShowQuotes from "../../components/ShowQuote/ShowQuotes";
import LinksCategories from "../../components/LinksCategories/LinksCategories";
import Spinner from "../../components/Spinner/Spinner";
import {GotQuote, GotQuoteList} from "../../types";

const Quotes = () => {
  const [quotes, setQuotes] = useState<GotQuote[]>([]);
  const [loading, setLoading] = useState(false);
  const location = useLocation();

  const fetchQuotes = useCallback(async () => {
    try {
      setLoading(true)
      const quotesResponse = await axiosApi.get<GotQuoteList>('/quotes.json');
      if (quotesResponse.data) {
        const quotes = Object.keys(quotesResponse.data).map(key => {
          const quote = quotesResponse.data[key];
          quote.id = key;
          return quote;
        });
        setQuotes(quotes);
      }
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect( () => {
    if(location.pathname === '/quotes' || location.pathname === '/') {
      fetchQuotes().catch(console.error);
    }
  }, [fetchQuotes, location]);

  const deleteAgain = async (id: string | undefined) => {
    try {
      setLoading(true);
      await axiosApi.delete('/quotes/' + id + '.json');
    } finally {
      fetchQuotes().catch(console.error);
    }
  }

  const showHome = () => {
    if (location.pathname === '/quotes' || location.pathname === '/') {
      return (
          <ShowQuotes quotes={quotes} onGetClickDelete={deleteAgain}/>
      )
    }
  }

  if(loading) {
    return (
      <Spinner/>
    )
  }

  return (
    <div className='d-flex'>
        <LinksCategories/>
      <div className='mt-5 w-75'>
        {showHome()}
        <Outlet/>
      </div>
    </div>
  );
};

export default Quotes;