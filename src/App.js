import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import AnecdoteList from './components/AnecdoteList'
import AnecdoteForm from './components/AnecdoteForm'
import Notification from './components/Notification'
import { initializeAnecdotes } from './reducers/anecdoteReducer'
import anecdoteService from './services/anecdotes'
import Filter from './components/Filter'



const App = (props) => {
	useEffect(()=>{
		anecdoteService.getAll().then( anecdotes => {
		    props.initializeAnecdotes(anecdotes)
		})
	},[props])

	return (<div>
		<Notification/>
		<h2>Anecdotes</h2>
		<Filter/>
		<AnecdoteList/>
		<AnecdoteForm/>
	</div>)
}

export default connect(null, {initializeAnecdotes})(App)
