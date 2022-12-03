import React, {useCallback, useEffect, useState} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import axiosApi from "../../axiosApi";
import MainForm from "../../components/MainForm/MainForm";
import {GotQuoteApi} from "../../types";
import Spinner from "../../components/Spinner/Spinner";

const EditQuote = () => {
  const [quote, setQuote] = useState<GotQuoteApi | null>(null);
  const {id} = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const fetchEdit = useCallback(async () => {
    try {
      setLoading(true);
      const quoteResponse = await axiosApi.get<GotQuoteApi>('quotes/' + id + '.json');
      setQuote(quoteResponse.data);
    } finally {
      setLoading(false);
    }
  }, [id]);

  useEffect(() => {
    fetchEdit().catch(console.error);
  }, [fetchEdit]);

  const editQuote = async (quote: GotQuoteApi) => {
    try {
      setLoading(true);
      await axiosApi.put('/quotes/' + id + '.json', quote);
    } finally {
      setLoading(false)
      navigate('/quotes')
    }
  };

  if (loading) {
    return (
      <Spinner/>
    )
  }

  return (
    <>
      {quote && (
        <MainForm onSubmit={editQuote} haveQuote={quote}/>
      )}
    </>
  );
};

export default EditQuote;