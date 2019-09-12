import React, {useEffect, useState} from 'react'
import {clearNotification} from '../reducers/notificationReducer'

const Notification = ({store}) => {

	const content = store.getState().notification.content

	const [countDown, setCountDown] = useState(0)

    const visibilityTime = 5
	useEffect(() => {
		setCountDown(visibilityTime)
	}, [store, content]);

	useEffect(() => {
		const interval = setInterval(() => {
            if ( countDown === 0 ) {
                store.dispatch(clearNotification())
            }
            if ( countDown > -1 ) {
                setCountDown(countDown - 1)
            }
		}, 1000)
		return () => clearInterval(interval)
	}, [countDown, store]);

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
