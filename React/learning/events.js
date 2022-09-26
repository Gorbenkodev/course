const ToggleButton = () => {
	const [isToggle, setToggle] = useState(false);

	const handleClick = e => {
		setToggle(!isToggle);
		console.log(e)
	}
	return (
		<button onClick={handleClick}>{isToggle ? 'ON' : 'OFF'}</button>
	)
}

ReactDOM.render(
	<ToggleButton />,
	document.getElementById('root')
);