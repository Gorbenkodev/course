import React from 'react'
import { ThemeContextConsumer } from '../context';
import { IconMoon, IconSun } from './themeIcon';



export class ThemeButton extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			
		}
	}
	render() {
		return(
			<button className='toggleButton' onClick={this.props.darkModeBtn}>
				{this.props.darkMode ? <IconMoon/> : <IconSun/>}
			</button>
		)
	}
}



