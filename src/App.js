import './App.css';
import React, { useState, createContext } from 'react'
import Home from '../src/pages/Home';
import { News } from './News';
import NavBar from './components/NavBar/NavBar';
import { BrowserRouter } from 'react-router-dom';


const categorySource = [
  {
    category: 'General',
    imageId: '1566378246598-5b11a0d486cc'
  },
  {
    category: 'Technology',
    imageId: '1478358161113-b0e11994a36b'
  },
  {
    category: 'Sports',
    imageId: '1521412644187-c49fa049e84d'
  },
  {
    category: 'Health',
    imageId: '1526256262350-7da7584cf5eb'
  },
  {
    category: 'Business',
    imageId: '1542222024-c39e2281f121'
  },
  {
    category: 'Entertainment',
    imageId: '1511671782779-c97d3d27a1d4'
  },
  {
    category: 'Science',
    imageId: '1507413245164-6160d8298b31'
  },
];

export const NewsContext = createContext();

function App() {

  const [selectedCategory, setSelectedCategory] = useState('General');
  // console.log(selectedCategory);

  return (
    <BrowserRouter>
      <NewsContext.Provider value={{ categorySource, selectedCategory, setSelectedCategory }}>
        <NavBar />
        <News />
      </NewsContext.Provider>
    </BrowserRouter>
  );
}

export default App;
