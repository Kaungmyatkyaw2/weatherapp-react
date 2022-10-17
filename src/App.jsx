import React, { useEffect, useReducer, useState } from 'react'
import Display from './components/Display';
import SearchingProvider from './store/SearchingProvider';


const App = () => {



  return (
    <SearchingProvider>
      <Display></Display>
    </SearchingProvider>
  )
}

export default App

