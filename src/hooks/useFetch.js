import * as React from 'react'

function reducer(state, action) {
  switch (action.type) {
    case 'FETCH': {
      return {
        ...state,
        status: 'pending',
      }
    }
    case 'FETCH_FAIL': {
      return {
        ...state,
        error: action.error,
        status: 'fail',
      }
    }
    case 'FETCH_SUCCESS': {
      return {
        ...state,
        data: action.data,
        status: 'success',
      }
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`)
    }
  }
}

const useFetch = url => {
  const [{ data, error, status }, dispatch] = React.useReducer(reducer, {
    status: 'idle',
  })

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        dispatch({ type: 'FETCH' })
        const res = await fetch(url)
        const data = await res.json()
        if (data.response === 'false') {
          dispatch({ type: 'FETCH_FAIL', error })
        } else {
          dispatch({ type: 'FETCH_SUCCESS', data })
        }
      } catch (error) {
        dispatch({ type: 'FETCH_FAIL', error })
      }
    }

    fetchData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [url])

  return { data, error, status }
}

export default useFetch
