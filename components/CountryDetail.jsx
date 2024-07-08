import { useEffect, useState } from "react";

import './CountryDetail.css'
import { Link, useLocation, useParams } from "react-router-dom";
import { useTheme } from "../hooks/useTheme";
export default function CountryDetail() {

  //const countryName = new URLSearchParams(location.search).get('name');
  const params = useParams();
  const [notFound, setNotFound] = useState(false);
const [isDark] = useTheme();

  const countryName = params.country;

  const [countryData, setCountryData] = useState(null)

  const {state} = useLocation(); //access the country data from home page country card by clicking which u landed here.

  function updateCountryState(country){
    console.log(country.borders);
    setCountryData({
      flag: country.flags.svg,
      name: country.name.common,
      population: country.population.toLocaleString('en-IN'),
      region: country.region,
      subRegion: country.subregion,
      capital: country.capital?.[0],
      topLevelDomain: country.tld.join(', '),
      currencies: Object.values(country.currencies).map((currency) => currency.name).join(', '),
      languages: Object.values(country.languages).join(', '),
      borderCountries: []

   })

    if (!country.borders) {
      country.borderCountries = [];
      country.borders = [];
    
    }
    


    Promise.all(
      country.borders.map((border) => {
        return fetch(`https://restcountries.com/v3.1/alpha/${border}`)
          .then((res) => res.json())
          .then(([borderCountry]) => borderCountry.name.common); // Return the promise correctly
      })
    ).then(borderCountries => {
      
        setCountryData(prevState => ({ ...prevState, borderCountries }));
     
      
    }).catch((err) => {
      console.log(err);
    });
  }
  
 
  useEffect(() => {
    if(!state){
      fetch(`https://restcountries.com/v3.1/name/${countryName}?fullText=true`)
      .then(res => res.json())
      .then(([country]) => {

        updateCountryState(country);


        // console.log(countryData.borderCountries);

      }).catch(() => {
        setNotFound(true)
      })
    }
    else{
      updateCountryState(state);
    }
   
  }, [countryName])
 

 

  if (notFound) {
    return <div>Country not found</div>
  }


  return (
    (countryData === null) ? (<div>Loading ...</div>) : (<main className={`${isDark ? 'dark' : ''}`}>
      <div className={`country-details-container `}>
        <span className="back-button" onClick={() => { history.back() }}>
          <i className="fa-solid fa-arrow-left"></i>&nbsp; Back
        </span>
        <div className="country-details">
          <img src={countryData.flag} alt={`${countryData.name}'s flag`} />
          <div className="details-text-container">
            <h1></h1>
            <div className="details-text">
              <p><b>Native Name: </b><span className="native-name">{countryData.name}</span></p>
              <p><b>Population: </b><span className="population">
                {countryData.population}
              </span></p>
              <p><b>Region: </b><span className="region">{countryData.region}</span></p>
              <p><b>Sub Region: </b><span className="sub-region">{countryData.subRegion}</span></p>
              <p><b>Capital: </b><span className="capital">{countryData.capital}</span></p>
              <p>
                <b>Top Level Domain: </b><span className="top-level-domain">{countryData.topLevelDomain}</span>
              </p>
              <p><b>Currencies: </b><span className="currencies">{countryData.currencies}</span></p>
              <p><b>Languages: </b><span className="languages">{countryData.languages}</span></p>
            </div>

            <div className="border-countries"><b>Border Countries: </b>&nbsp;
              {

                countryData.borderCountries.length !== 0 && countryData.borderCountries.map((border) => {
                  return <Link key={border} to={`/${border}`}>{border}</Link>
                })
              }</div>


          </div>
        </div>
      </div>
    </main>
    )
  )
}
