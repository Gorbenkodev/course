const Button = (props) => {
  const {name, clickHandler, ...rest} = props;

  const className = [
    "component-button",
    rest.orange ? 'orange' : '',
    rest.wide ? 'wide' : '',
  ];

  return (
    <div className={className.join(" ").trim()}>
      <button onClick={() => clickHandler(name)}>{name}</button>
    </div>
  )
}

const Display = ({value}) => (
  <div className='component-display'>
        <div>
          {
            value
              ? `You've just clicked ${value}`
              : '0'
          }
        </div>
      </div>
);

const ButtonPanel = ({ handleClick}) => (
  <div className='component-button-panel' style={{display: "flex"}}>
        <div>
          <Button name="AC" clickHandler={handleClick}  />
          <Button name="+/-" clickHandler={handleClick} />
          <Button name="%" clickHandler={handleClick} />
          <Button name="/" clickHandler={handleClick} orange />
        </div>
        <div>
          <Button name="7" clickHandler={handleClick} />
          <Button name="8" clickHandler={handleClick} />
          <Button name="9" clickHandler={handleClick} />
          <Button name="x" clickHandler={handleClick} orange />
        </div>
        <div>
          <Button name="4" clickHandler={handleClick} />
          <Button name="5" clickHandler={handleClick} />
          <Button name="6" clickHandler={handleClick} />
          <Button name="-" clickHandler={handleClick} orenge />
        </div>
        <div>
          <Button name="1" clickHandler={handleClick} />
          <Button name="2" clickHandler={handleClick} />
          <Button name="3" clickHandler={handleClick} />
          <Button name="+" clickHandler={handleClick} orange />
        </div>
        <div>
          <Button name="0" clickHandler={handleClick} />
          <Button name="." clickHandler={handleClick} />
          <Button name="=" clickHandler={handleClick} orange />
        </div>
      </div>
)

const App = ({clickedButton, handleClick}) => (
  <div className='component-app'>
      <Display value={clickedButton}/>
      <ButtonPanel handleClick={handleClick} />
    </div>
)

const Calculator = () => {
  const [clickedButton, setClickedButton] = useState(null);

  const handleClick = buttonName => setClickedButton(
    buttonName === 'AC' ? null : buttonName,
  );

  return (
    <App {...{ clickedButton, handleClick}}/>
  )
}

ReactDOM.render(
	<Calculator />,
	document.getElementById('root')
);