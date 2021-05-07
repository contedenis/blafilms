import * as React from 'react'
import './styles.css'

function InputSearch({ onClick }) {
  const [search, setSearch] = React.useState('')

  return (
    <div className="input-search">
      <input
        className="input-search__input"
        onChange={e => setSearch(e.target.value)}
        placeholder="Search..."
        type="text"
        value={search}
      />
      <button className="input-search__button" onClick={() => onClick(search)}>
        Search
      </button>
    </div>
  )
}

export default InputSearch
