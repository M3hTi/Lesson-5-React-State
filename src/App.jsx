import * as React from 'react'

import './App.css'

function App() {
  console.log('App  renders');
  return (
    <>
      <Search />
    </>
  )
}

function Search() {
  console.log('search renders');

  const [searchTerm , setSearchTerm] = React.useState('')

  function handleInput(e) {
    setSearchTerm(e.target.value)
  }



  return(
    <>
      <label htmlFor="srch">Search:</label>
      <input type="text" id='srch' onInput={handleInput}/>

      <p>
        Searching for <strong>{searchTerm}</strong>.
      </p>
    </>
  )
}

export default App
