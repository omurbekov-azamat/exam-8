import React, {useCallback, useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import axiosApi from "../../axiosApi";
import ShowQuotes from "../../components/ShowQuote/ShowQuotes";
import {GotQuote, GotQuoteList} from "../../types";
import Spinner from "../../components/Spinner/Spinner";

const Category = () => {
  const {category} = useParams();
  const [categories, setCategories] = useState<GotQuote[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchCategory = useCallback(async () => {
    try {
      setLoading(true);
      const categoryResponse = await axiosApi.get<GotQuoteList>('/quotes.json?orderBy="category"&equalTo=' + '"' + category + '"');
      if (categoryResponse.data) {
        const gotQuotes = Object.keys(categoryResponse.data).map(key => {
          const quote = categoryResponse.data[key];
          quote.id = key;
          return quote;
        });
        setCategories(gotQuotes);
      }
    } finally {
      setLoading(false);
    }
  }, [category]);

  useEffect(() => {
    fetchCategory().catch(console.error);
  }, [fetchCategory]);

  const deleteAgain = async (id: string | undefined) => {
    try {
      setLoading(true);
      await axiosApi.delete('/quotes/' + id + '.json');
    } finally {
      setLoading(false);
      fetchCategory().catch(console.error);
    }
  }

  return (
    <>
      {loading ? <Spinner/> : (
        <ShowQuotes quotes={categories} onGetClickDelete={deleteAgain}/>
      )}
    </>
  );
};

export default Category;