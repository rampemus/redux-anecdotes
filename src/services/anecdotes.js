import axios from 'axios'

const url = 'http://localhost:3001/anecdotes'

const getAll = async () => {
    const response = await axios.get(url)
    return response.data
}

const createNew = async (content) => {
    const object = { content, votes:0 }
    const response = await axios.post(url, object)
    return response.data
}

const upVote = async (anecdote) => {
    const upVotedAnecdote = { ...anecdote, votes: anecdote.votes + 1 }
    const requestUrl = url+`/${anecdote.id}`
    const resonse = await axios.put(requestUrl,upVotedAnecdote)
    return resonse.data
}

//const request = axios.put(requestUrl, { number: newNumber})

export default { getAll, createNew, upVote }
