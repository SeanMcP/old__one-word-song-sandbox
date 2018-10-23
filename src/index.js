import React from 'react'
import ReactDOM from 'react-dom'

import './styles.css'
import Router from './router/Router'

class App extends React.Component {
    state = {
        gameMode: 'fun',
        timerLength: 30000
    }
    render() {
        return <Router {...this.state} />
    }
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
