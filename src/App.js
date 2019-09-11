import React from 'react'
import AnecdoteList from './components/AnecdoteList'
import AnecdoteForm from './components/AnecdoteForm'
import Notification from './components/Notification'

const App = ({store}) => {

	return (<div>
		<Notification store={store}/>
		<h2>Anecdotes</h2>
		<AnecdoteList store={store}/>
		<AnecdoteForm store={store}/>
	</div>)
}

export default App
