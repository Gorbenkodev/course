const colors = ['black', 'yellow', 'red'];


const ColorButton = ({ color, selectedColor, changeColor }) => {
	const disabled = color === selectedColor;
	const className = `ColorButton ${color} ${disabled ? 'disabled' : ''}`.trim();

	const onClick = () => !disabled && changeColor(color);

	return (
		<button className={className} onClick={onClick}/>
	)
}

class CarShop extends React.Component {
  constructor() {
    super();
		this.state ={
			barnd:'Ford',
			model:'Mustang',
			color: 'red',
			year: '1964'
		};
  }

	changeColor = color => this.setState({ color });

  render() {
		const { barnd, model, color, year } = this.state
    return (
      <div className='CarShop'>
        <h1>My {barnd}</h1>
        <p>It is a {color} {model} from {year}</p>
        <div className='Colors'>
          {
            colors.map(value => (
              <ColorButton key={value} color={value} selectedColor={color} changeColor={this.changeColor} />
            ))
          }
        </div>
      </div>
    )
  }
}