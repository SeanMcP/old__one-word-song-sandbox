import React from 'react'

const HomeScreen = props => (
    <div>
        {props.location}
        Home!
        <button type="button" onClick={() => props.go('game')}>
            Go
        </button>
    </div>
)

export default HomeScreen
