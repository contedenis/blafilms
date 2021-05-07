import placeholderImg from '../../placeholder.png'

import './styles.css'

function MoviesList({ results }) {
  return (
    <div className="movies-list">
      {results.Search.map(result => (
        <div key={result.imdbID} className="movies-list__item">
          <img
            src={result.Poster === 'N/A' ? placeholderImg : result.Poster}
            alt="poster"
          />
          <div className="movies-list__data">
            <div className="movies-list__data-title">{result.Title}</div>
            <div className="movies-list__data-meta">{`${result.Type} | ${result.Year}`}</div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default MoviesList
