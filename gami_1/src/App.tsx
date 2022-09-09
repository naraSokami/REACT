import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Status from './components/Status'
import Shop from './components/Shop'


function App() {
  const [count, setCount] = useState(0)
  const [products, setProducts] = useState([])

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res=>res.json())
      .then(json=>setProducts(json))
  }, [])

  useEffect(() => {
    console.log(products);
    
  }, [products])
  
  return (
    <div className="App">
      <Shop products={products}/>
      {/* <Status name={'test'} role={'beginner'} money={120} /> */}
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </div>
  )
}

export default App
