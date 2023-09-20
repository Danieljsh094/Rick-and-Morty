import './App.css'
import useFetch from './hooks/useFetch'
import { useEffect, useRef, useState } from 'react'
import getRandomNumber from './utils/getRandomNumber'
import LocationInfo from './components/Locationinfo'
import ResidentCard from './components/ResidentCard'

function App() {

  const [inputValue, setInputValue] = useState(getRandomNumber(126))

  const url = `https://rickandmortyapi.com/api/location/${inputValue || ''}`
  const [location, getLocation, hasError] = useFetch(url)

  useEffect(() => {
    getLocation()
  }, [inputValue])

  console.log(location)

  const inputSearch = useRef()

  const handleSubmit = e => {
    e.preventDefault()
    setInputValue(inputSearch.current.value.trim())
  }


  return (
    <div className='container'>
      <img className='container__title' src="/rick.jpg" alt="" />
      <form className='container__form' onSubmit={handleSubmit}>
        <input ref={inputSearch} type="text" />
        <button>Search</button>
      </form>
      {
        hasError
          ? <h2>❌ Hey! you must provide an id from 1 to 126 😭</h2>
          : (
            <>
              <LocationInfo
                location={location}
              />
              <div className='principal__resident'>
                {
                  location?.residents.map(url => (
                    <ResidentCard
                      key={url}
                      url={url}
                    />
                  ))
                }
              </div>
            </>
          )
      }
    </div>
  )
}

export default App