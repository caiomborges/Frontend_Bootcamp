import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

//this is the data that will never appear anywhere
var pokemons = [ {
  name: "Charizard",
  type: "fire"
},
{
  name: "Bulbasaur",
  type: "grass"
}, {
  name: "Squirtle",
  type: "water"
}, {
  name: "Pikachu",
  type: "electric"
}
]

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
