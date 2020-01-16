import React from 'react';

const styles = {
	li: {
        size: '20px',
		display: 'flex',
		justifyContent: 'space-between',
		listStyle: 'circle',
        backgroundColor: 'cyan',
        borderRadius: '8px',
		alignItems: 'left',
		padding: '20px',
		margin: '20px'
	},
	close: {
        backgroundColor: 'red',
        border: 'white',
		borderRadius: '5px',
		padding: '5px',
		border: '8px',
		cursor: 'pointer'
    },
    add: {
        backgroundColor: 'yellow',
        border: 'white',
		borderRadius: '5px',
		padding: '5px',
		border: '8px',
		cursor: 'pointer'
    }
}

export default function TodoItem(props){
	const elem = props.todo;
	let classes = []
	return (
		<li className ={classes.join(' ')} style={styles.li}>
			<span>
			<strong>{props.index+1}</strong>
				{elem.title}
			</span>
            {/* <button style={styles.add}>Add</button> */}
			<button style={styles.close}>Delete</button>
		</li>
	)
}