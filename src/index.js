
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

import './index.css'

const divRoot = document.querySelector('#root')

ReactDOM.render( <App saludo={'hola'}/>, divRoot )
