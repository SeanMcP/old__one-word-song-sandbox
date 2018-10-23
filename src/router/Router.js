import React from 'react'

import Context from '../context/Context'
import ROUTES from './routes'

class Router extends React.Component {
    state = {
        location: 'home'
    }

    render() {
        const { location } = this.state
        const ProviderValue = {
            location: location,
            go: this.go,
            goHome: this.goHome
        }
        const Route = ROUTES[location] ? ROUTES[location] : ROUTES.home
        return (
            <Context.Provider value={ProviderValue}>
                <Context.Consumer>
                    {context => <Route {...context} />}
                </Context.Consumer>
            </Context.Provider>
        )
    }

    go = destination => this.setState({ location: destination })

    goHome = () => this.setState({ location: 'home' })
}

export default Router
