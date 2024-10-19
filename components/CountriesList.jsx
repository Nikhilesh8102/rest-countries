/* eslint-disable react/prop-types */
//import countriesData from '../Countriesdata.js';
import { useEffect, useState } from 'react';
import Country from './Country';
import ShimmerHome from './ShimmerHome';


// eslint-disable-next-line no-unused-vars
export default function CountriesList({ searchQuery, filterQuery, setPos }) {
  const [countriesData, setCountriesData] = useState([])

  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
      .then(res => res.json())
      .then(data => {

        setCountriesData(data);
      })
  }, []);

  // function handleClick() {
  //   // localStorage.removeItem('scrollY');
  //   // localStorage.setItem('scrollY', JSON.stringify(window.scrollY));
  //   setposition(window.scrollY);
  //   console.log(window.scrollY);
  // }


  return (
    <>{
      (!countriesData.length) ? <ShimmerHome /> : (
        (countriesData.filter(country => country.name.common.toLowerCase().includes(searchQuery)).filter(country => country.region.toLowerCase().includes(filterQuery))).map(country => (
          <Country setPos={setPos} country={country} key={country.name.common} />

        ))
      )
    }
    </>
  );
}
