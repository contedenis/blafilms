import * as React from 'react'
import Arrow from './components/Arrow'
import EmptyState from './components/EmptyState'
import ErrorState from './components/ErrorState'
import InputSearch from './components/InputSearch'
import Layout from './components/Layout'
import LoadingState from './components/LoadingState'
import MoviesList from './components/MoviesList'
import useFetch from './hooks/useFetch'

function App() {
  const [movie, setMovie] = React.useState('')
  const [page, setPage] = React.useState(1)
  const query = `&s=${movie}&page=${page}`
  const { data, status } = useFetch(
    `http://www.omdbapi.com/?apikey=a461e386${query}`,
  )
  const totalPages = Math.ceil(Number(data?.totalResults) / 10)

  function onClick(direccion) {
    if (direccion === 'next' && page < totalPages) {
      setPage(page => page + 1)
    } else if (direccion === 'previous' && page !== 1) {
      setPage(page => page - 1)
    }
  }

  return (
    <Layout>
      <Layout.Top>
        <InputSearch onClick={setMovie} />
      </Layout.Top>
      <Layout.Content>
        {status === 'pending' ? (
          <LoadingState />
        ) : status === 'success' && data.Search ? (
          <>
            <Layout.Left>
              <Arrow
                direction="left"
                disabled={page === 1}
                onClick={() => onClick('previous')}
              />
            </Layout.Left>
            <MoviesList results={data} />
            <Layout.Right>
              <Arrow
                direction="right"
                disabled={page === totalPages}
                onClick={() => onClick('next')}
              />
            </Layout.Right>
          </>
        ) : status === 'success' && !data.Search ? (
          <EmptyState />
        ) : (
          <ErrorState />
        )}
      </Layout.Content>
    </Layout>
  )
}

export default App
