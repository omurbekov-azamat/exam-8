import React from 'react';
import MainForm from "../../components/MainForm/MainForm";
import {GotQuoteApi} from "../../types";
import axiosApi from "../../axiosApi";
import {useNavigate} from "react-router-dom";

const CreateQuote = () => {
  const navigate = useNavigate();
  const test = [
    {title: 'Choose Category', id: 'none'},
    {title: 'Star Wars', id: 'star-wars'},
    {title: 'Famous People', id: 'famous-people'},
    {title: 'Saying', id: 'saying'},
    {title: 'Humor', id: 'humor'},
    {title: 'Motivational', id: 'motivational'},
  ];

  const addQuote = async (quote: GotQuoteApi) => {

    let newQuote = {
      category: '',
      author: quote.author,
      text: quote.text
    }
    for (let i = 0; i < test.length; i++) {
      if(quote.category === test[i].title) {
        newQuote.category = test[i].id
      }
    }
    try {
      await axiosApi.post('/quotes.json', newQuote);
    } finally {
      navigate('/quotes')
    }
  };

  return (
    <div className='text-center'>
      <MainForm onSubmit={addQuote}/>
    </div>
  );
};

export default CreateQuote;