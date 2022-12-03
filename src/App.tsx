import React from 'react';
import {Route, Routes} from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Quotes from "./container/Quotes/Quotes";
import CreateQuote from "./container/CreateQuote/CreateQuote";
import Category from "./container/Category/Category";
import EditQuote from "./container/EditQuote/EditQuote";

function App() {
  return (
    <>
      <header>
        <NavBar/>
      </header>
      <main className='container'>
        <Routes>
          <Route path='/' element={<Quotes/>}/>
          <Route path='/quotes' element={<Quotes/>}>
            <Route path='/quotes/:id/edit' element={<EditQuote/>}/>
            <Route path='/quotes/:category' element={<Category/>}/>
          </Route>
          <Route path='/add-quote' element={<CreateQuote/>}/>
          <Route path='*' element={(
            <h1>Not found!</h1>
          )}/>
        </Routes>
      </main>
    </>
  );
}

export default App;
