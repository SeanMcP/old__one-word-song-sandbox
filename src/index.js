import React from 'react'
import ReactDOM from 'react-dom'

import './styles.css'
import Router from './router/Router'

function App() {
    return <Router />
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
