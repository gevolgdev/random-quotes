import { useState } from 'react'
import { Quote } from './components'
import './style/global.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="flex justify-center items-center w-full px-4 pt-16 pb-4">
      <Quote/>
    </div>
  )
}

export default App
