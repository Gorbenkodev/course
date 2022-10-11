import React from 'react'
import { IconMoon, IconSun } from './themeIcon';





export const ThemeButton = (props) => {

	return(
			<button className='toggleButton' onClick={props.darkModeBtn}>
				{props.darkMode ? <IconMoon/> : <IconSun/>}
			</button>
	)
}


