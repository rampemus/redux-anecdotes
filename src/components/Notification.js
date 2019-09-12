import React, {useEffect, useState} from 'react'
import { connect } from 'react-redux'
import { clearNotification } from '../reducers/notificationReducer'

const Notification = (props) => {

	const content = props.notification.content

	const [countDown, setCountDown] = useState(0)

    const visibilityTime = 5
	useEffect(() => {
		setCountDown(visibilityTime)
	}, [props.store, content]);

	useEffect(() => {
		const interval = setInterval(() => {
            if ( countDown === 0 ) {
                props.clearNotification()
            }
            if ( countDown > -1 ) {
                setCountDown(countDown - 1)
            }
		}, 1000)
		return () => clearInterval(interval)
	}, [countDown, props]);

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
