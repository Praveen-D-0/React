import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
 
const notes = [
  { 
    id: "1",
    content: "First note"
  },
  {
    id: "2",
    content: "note"
  },
  {
    id: "2",
    content: " note"
  },
  {
    id: "2",
    content: "note"
  },
  {
    id: "2",
    content: " note"
  }
]

ReactDOM.createRoot(document.getElementById('root')).render(<App notes={notes} />)
