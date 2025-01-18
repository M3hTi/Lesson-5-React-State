import * as React from 'react'

import './App.css'

function App() {
  console.log('App  renders');

  function handleSearch(term){
    console.log(`search input transform to parent:${term}`);
  }
  return (
    <>
      <Search onSearch={handleSearch} />
    </>
  )
}

function Search(props) {
  console.log('search renders');
  console.log(props);

  const [searchTerm , setSearchTerm] = React.useState('')

  function handleInput(e) {
    const newValue = e.target.value;
    setSearchTerm(newValue)
    props.onSearch(newValue)  // Pass the new value directly instead of searchTerm
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
