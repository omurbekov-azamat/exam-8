import React, {useState} from 'react';
import {useNavigate} from "react-router-dom";
import axiosApi from "../../axiosApi";
import MainForm from "../../components/MainForm/MainForm";
import {GotQuoteApi} from "../../types";
import Spinner from "../../components/Spinner/Spinner";

const test = [
  {title: 'Choose Category', id: 'none'},
  {title: 'Star Wars', id: 'star-wars'},
  {title: 'Famous People', id: 'famous-people'},
  {title: 'Saying', id: 'saying'},
  {title: 'Humor', id: 'humor'},
  {title: 'Motivational', id: 'motivational'},
];

const CreateQuote = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const addQuote = async (quote: GotQuoteApi) => {

    let newQuote = {
      category: '',
      author: quote.author,
      text: quote.text,
    }

    for (let i = 0; i < test.length; i++) {
      if (quote.category === test[i].title) {
        newQuote.category = test[i].id;
      }
    }

    try {
      setLoading(true);
      await axiosApi.post('/quotes.json', newQuote);
    } finally {
      setLoading(false);
      navigate('/quotes');
    }
  };

  if (loading) {
    return (
      <Spinner/>
    )
  }

  return (
    <>{loading ? <Spinner/> : (
        <MainForm onSubmit={addQuote}/>
    )}
    </>
  );
};

export default CreateQuote;