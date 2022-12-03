import React, {useState} from 'react';
import {GotQuoteApi} from "../../types";

interface Props {
  onSubmit: (quote: GotQuoteApi) => void;
  haveQuote?: GotQuoteApi;
}

const someCategories = [
  {title: 'All', id: ''},
  {title: 'Star Wars', id: 'star-wars'},
  {title: 'Famous People', id: 'famous-people'},
  {title: 'Saying', id: 'saying'},
  {title: 'Humor', id: 'humor'},
  {title: 'Motivational', id: 'motivational'},
];
const MainForm: React.FC<Props> = ({haveQuote, onSubmit}) => {

    let fixQuote = {
      author: '',
      text: '',
      category: '',
    }

    if(haveQuote){
      const getCategory = () => {
        for (let i = 0; i < someCategories.length; i++) {
          if (haveQuote?.category === someCategories[i].id) {
            fixQuote.author = haveQuote.author;
            fixQuote.text = haveQuote.text;
            fixQuote.category = someCategories[i].title;
          }
        }
      }
      getCategory();
    }

  const initialState = fixQuote ? {
    ...fixQuote,
  } : {
    category: '',
    author: '',
    text: '',
  };

  const [quote, setQuote] = useState<GotQuoteApi>(initialState);

  const onQuoteChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    if (e.target.value !== 'Choose category') {
      const {name, value} = e.target;
      setQuote(prev => ({...prev, [name]: value}));
    }
  };

  const onFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (quote.category === '') {
      alert('please try again');
    } else {
      onSubmit(quote);
      setQuote({
        category: '',
        author: '',
        text: '',
      });
    }
  };

  return (
    <div className='text-center'>
      <form onSubmit={onFormSubmit}>
        <div className='border border-dark px-5 mt-5'>
          <h4 className='mt-5 mb-5 text-capitalize'>{haveQuote ? 'Edit a quote' : 'Submit new quote'}</h4>
          <div className='mb-5'>
            <select
              name="category"
              id="category"
              className='form-control'
              value={quote.category}
              onChange={onQuoteChange}
            >
              <option value='Select Category'>Select Category</option>
              <option value='Star Wars' >Star Wars</option>
              <option value='Famous People'>Famous People</option>
              <option value='Saying'>Saying</option>
              <option value='Humor'>Humor</option>
              <option value='Motivational'>Motivational</option>
            </select>
          </div>
          <div className='mb-5'>
            <input
              placeholder='author'
              id='author'
              name='author'
              type="text"
              value={quote.author}
              className='form-control'
              onChange={onQuoteChange}
              required
            />
          </div>
          <div className='mb-5'>
            <input
              placeholder='text'
              id='text'
              name='text'
              type="text"
              value={quote.text}
              className='form-control'
              required
              onChange={onQuoteChange}
            />
          </div>
          <button className='btn btn-primary mb-3'>Save</button>
        </div>
      </form>
    </div>
  );
};

export default MainForm;