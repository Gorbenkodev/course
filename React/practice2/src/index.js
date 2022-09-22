import React from 'react';
import ReactDOM from 'react-dom';
import { AppWrapper } from './appWrapper';
import './style.css'


const App = () => (
	<div>
		<AppWrapper title='React Turtles' />
	</div>
);

ReactDOM.render(
	<App />,
	document.getElementById('root')
);