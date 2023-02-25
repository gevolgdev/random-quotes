import { useState } from 'react'
// data
import { quotes } from './dataQuotes'

export default function Index() {
  
  const [current, setCurrent] = useState(0)
  const [showQuotes, setShowQuotes] = useState(false)

  const quotesIndex = quotes[current]

  function handleRandomQuotes() {
    setShowQuotes(true)
    const valueIndex = Math.random() * (quotes.length)

    return setCurrent(Math.floor(valueIndex))
  }

  return (
    <div className="flex flex-col justify-between w-full px-8 py-10 bg-amber-300 max-2xl:w-[500px]">

      <h1 className="text-4xl text-gray-700 mb-5">
        <span>{ showQuotes ? '"' : ''}</span>
        { showQuotes ? `${quotesIndex.quote}` : 'Gere uma frase motivacional, talvez possa te ajudar :)'}
        <span>{ showQuotes ? '"' : ''}</span>
      </h1>
      <span className="text-gray-600">
        { showQuotes ? `${quotesIndex.author}` : 'Feito com ❤️ pela Gevolg'}
      </span>

      <button 
        className="uppercase font-bold bg-emerald-500 py-3 px-6 text-white mt-14"
        onClick={handleRandomQuotes}
      >
        Gerar frase
      </button>

    </div>
  )
}