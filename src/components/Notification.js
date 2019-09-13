import React from 'react'
import { connect } from 'react-redux'
import { clearNotification } from '../reducers/notificationReducer'

const Notification = (props) => {

	const content = props.notification.content

	const style = {
		border: 'solid',
		padding: 10,
		borderWidth: 1
	}
	return (<div style={style}>
		{content}
	</div>)
}

const mapDispatchToProps = {
	clearNotification
}

const mapStateToProps = (state) => {
	return {
		notification: state.notification
	}
}
export default connect(mapStateToProps,mapDispatchToProps)(Notification)
