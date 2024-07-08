/* eslint-disable react/prop-types */


export default function SelectMenu({ setFilterQuery }) {
  return (
    <select className="filter-by-region" onChange={(e) => setFilterQuery(e.target.value.toLowerCase())}>
      <option hidden>Filter by Region</option>
      <option value=''>All</option>
      <option value="Africa">Africa</option>
      <option value="Americas">Americas</option>
      <option value="Asia">Asia</option>
      <option value="Europe">Europe</option>
      <option value="Antarctic">Antarctic</option>
      <option value="Oceania">Oceania</option>
    </select>

  )
}

