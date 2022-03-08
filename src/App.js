import './App.css';
import { useState, useEffect, useRef } from 'react';
import getData from './callSwapi.js'
import Tile from './Components/Tile';

function App() {
  const [dataSet, setDataSet] = useState([]);

  let initialRender = useRef(true)

  useEffect(() => {

    getData('').then(res => {
      let rootProps = Object.keys(res)

      let rootData = rootProps.map( prop => {
        let propName = prop.charAt(0).toUpperCase() + prop.slice(1)
        let tileArray = [propName, res.prop]

        return <Tile apiElement={tileArray} isInitial={initialRender.current} />
      })

      initialRender.current = false

      setDataSet(rootData)
    })
  }, [])

  return (
    <>
      <div className='headerWrapper'>
        <header className = 'title'>
          <h1>Star Wars</h1>
          <h2>Search Your Favorite Star Wars API</h2>
        </header>

        <nav className='navBar'>
          <div className='searchContainer'>
            <input type='search' id='searchBar' placeholder='Ex. Luke, force, lightsaber...' />
            <button>Search</button>
          </div>
        </nav>

      </div>
      <div className="Api-container">
        {dataSet}
      </div>
    
    </>
  );
}

export default App;
