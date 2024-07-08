/* eslint-disable react/prop-types */
export default function SearchBar({ setSearchQuery }) {
  return (
    <div className="search-container">
      <i className="fa-solid fa-magnifying-glass" />
      <input type="text" onChange={(e) => {
        setSearchQuery(e.target.value.toLowerCase())
      }} placeholder="Search for a country..." />
    </div>

  )
}

