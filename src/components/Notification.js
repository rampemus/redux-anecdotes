import React from 'react'

const Notification = ({store}) => {

    const content = store.getState().notification.content

	const style = {
		border: 'solid',
		padding: 10,
		borderWidth: 1
	}
	return (<div style={style}>
		{content}
	</div>)
}

export default Notification
