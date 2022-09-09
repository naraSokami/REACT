import { useState } from 'react'
import StudyCards from './components/StudyCards'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <StudyCards />
    </div>
  )
}

export default App
