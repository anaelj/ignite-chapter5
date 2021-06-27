import React, { FormEvent, useCallback } from 'react';
import { useState } from 'react';
import './App.css';
import { SearchResults } from './components/SearchResults';


type IResults = {
  totalPrice : string;
  data: any[];
}


function App() {

  const [search, setSearch] = useState('');
  const [results, setResults] = useState<IResults>({
    totalPrice: '0',
    data: []
  }) ;

  async function handleSearch (e: FormEvent) {
    e.preventDefault();

    if (!search.trim()){
      return;
    }

    const response = await fetch(`http://localhost:3333/products?q=${search}`);
    const data = await response.json();

    const formatter = new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    })

    const products = data.map(product => {
      return {
        id: product.id,
        title: product.title,
        price: product.price,
        priceFormatted: formatter.format(product.price)
      }
    })


    const totalPrice = data.reduce((acc, item) => {
          return acc += Number(item.price);
      }, 0);
  

    setResults({totalPrice : formatter.format(totalPrice), data: products});
  }

  const addToWishList = useCallback(
    async(id:number) => {
      console.log(id);  
    },[]);

  
  return (
    <>
      <h1>Search</h1>
      <form onSubmit={handleSearch}>
        <input 
          type="text"
          value={search}
          onChange={e => setSearch(e.target.value)}/>
        <button type="submit">Buscar</button>
      </form>
      <SearchResults 
        results={results?.data} 
        totalPrice={results?.totalPrice}
        onAddToWishList={addToWishList}/>
    </>
  );
}

export default App;
