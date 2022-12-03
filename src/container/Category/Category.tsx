import React, {useCallback, useEffect} from 'react';
import {useParams} from "react-router-dom";
import axiosApi from "../../axiosApi";
import {GotQuoteList} from "../../types";

const Category = () => {
  const {category} = useParams();

  const fetchCategory = useCallback(async () => {
    try {
      const categoryResponse = await axiosApi.get<GotQuoteList>('/quotes.json');
      console.log(categoryResponse.data)
    } catch {

    }
  }, [])

  useEffect( () => {
    fetchCategory().catch(console.error);
  }, [fetchCategory])

  return (
    <div>
      {category}
    </div>
  );
};

export default Category;