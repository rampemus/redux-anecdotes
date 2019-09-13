import React from 'react';
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import reducer from './reducer'

const store = createStore(reducer)

const App = () => {
    const incrementGood = () => {
        store.dispatch({
            type: 'GOOD'
        })
    }

    const incrementOk = () => {
        store.dispatch({
            type: 'OK'
        })
    }

    const incrementBad = () => {
        store.dispatch({
            type: 'BAD'
        })
    }

    const reset = () => {
        store.dispatch({
            type: 'ZERO'
        })
    }

    const { good, ok, bad } = store.getState()

    return (
        <div>
            <button onClick={incrementGood}>hyvä</button>
            <button onClick={incrementOk}>neutraali</button>
            <button onClick={incrementBad}>huono</button>
            <button onClick={reset}>nollaa tilastot</button>
            <div>hyvä {good}</div>
            <div>neutraali {ok}</div>
            <div>huono {bad}</div>
        </div>
    )
}

const renderApp = () => {
    ReactDOM.render(<App />, document.getElementById('root'))
}

renderApp()
store.subscribe(renderApp)
