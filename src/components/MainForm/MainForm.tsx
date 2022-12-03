import React, {useState} from 'react';
import {GotQuoteApi} from "../../types";

interface Props {
  onSubmit: (quote: GotQuoteApi) => void;
}

const MainForm: React.FC<Props> = ({onSubmit}) => {

  const test = [
    {title: 'Choose Category', id: 'none'},
    {title: 'Star Wars', id: 'star-wars'},
    {title: 'Famous People', id: 'famous-people'},
    {title: 'Saying', id: 'saying'},
    {title: 'Humor', id: 'humor'},
    {title: 'Motivational', id: 'motivational'},
  ]

  const [quote, setQuote] = useState<GotQuoteApi>({
    category: '',
    author: '',
    text: '',
  });

  const onQuoteChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    if(e.target.value !== 'Choose category') {
      const {name, value} = e.target;
      setQuote(prev => ({...prev, [name]: value}))
    }
  };

  const onFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (quote.category === '') {
      alert('please try again')
    } else {
      onSubmit(quote);
    }
  };

  return (
    <>
     <form onSubmit={onFormSubmit}>
       <div className='border border-dark px-5 mt-5'>
         <h4 className='mt-5 mb-5'>Submit new quote</h4>
         <div className='mb-5'>
           <select
             name="category"
             id="category"
             className='form-control'
             value={quote.category}
             onChange={onQuoteChange}
           >
             {test.map((item) => (
               <option key={item.id}>{item.title}</option>
             ))}
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
         <button className='btn btn-primary'>Save</button>
       </div>
     </form>
    </>
  );
};

export default MainForm;