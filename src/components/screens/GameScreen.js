import React from 'react'

const GameScreen = props => (
    <div>
        {props.location}
        Game time!
        <button type="button" onClick={props.goHome}>
            Go home
        </button>
    </div>
)

export default GameScreen
