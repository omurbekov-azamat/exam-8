import React from 'react';
import {Link} from "react-router-dom";

const LinksCategories = () => {
  const someCategories = [
    {title: 'All', id: ''},
    {title: 'Star Wars', id: 'star-wars'},
    {title: 'Famous People', id: 'famous-people'},
    {title: 'Saying', id: 'saying'},
    {title: 'Humor', id: 'humor'},
    {title: 'Motivational', id: 'motivational'},
  ];

  return (
    <div className='d-flex flex-column mt-5 w-25'>
      {someCategories.map((item) => (
        <Link
          key={Math.random()}
          to={item.id}
          className='mb-3 text-danger'
        >
          {item.title}
        </Link>
      ))}
    </div>
  );
};

export default LinksCategories;