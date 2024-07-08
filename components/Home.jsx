import { useState } from 'react'
import SearchBar from './SearchBar';
import SelectMenu from './SelectMenu';
import CountriesList from './CountriesList';

import '../src/App.css'

import { useTheme } from '../hooks/useTheme';


export default function Home() {
  const [searchQuery, setSearchQuery] = useState('');
  const [filterQuery, setFilterQuery] = useState('');
  const [isDark] = useTheme();
  //const [pos, setPos] = useState(JSON.parse(localStorage.getItem('scrollY')) || 0);
  // const [position, setPosition] = useState(0);

  // function setposition(position) {
  //   setPosition(position);
  // }





  // console.log(isDark);
  // console.log(themeContext);//object contaiing the context provider, consumer etc..

  // const context = useContext(ThemeContext);//hook to use the context
  // console.log(context);//value in the createdcontext

  return (

    <main className={`${isDark ? 'dark' : ''}`}>
      <div className="search-filter-container">
        <SearchBar setSearchQuery={setSearchQuery} />
        <SelectMenu setFilterQuery={setFilterQuery} />
      </div>

      <div className="countries-container">
        <CountriesList searchQuery={searchQuery} filterQuery={filterQuery} />

      </div>

    </main>
  )
}
