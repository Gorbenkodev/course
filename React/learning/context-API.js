// const MyContext = React.createContext('defaultValue');

// <MyContext.Provider value={some value}>
//   {children}
// </MyContext.Provider>

// <MyContext.Consumer>
//   {value => render something with context value}
// </MyContext.Consumer>

const ThemeContext = React.createContext('light');
const ThemeContextProvider = ThemeContext.Provider;
const ThemeContextConsumer = ThemeContext.Consumer;

const LocalContext = React.createContext('ua');
const LocalContextProvider = LocalContext.Provider;
const LocalContextConsumer = LocalContext.Consumer;

const ThemedButton = () => (
  <ThemeContextConsumer>
    {theme => {
      const classColor = theme === 'dark' ? 'white' : 'grey';
      const className = `Button ${classColor}`;

      return (
        <LocalContextConsumer>
          {local => (
            <button className={className}>
              Themed Button
              {console.log(local)}
            </button>
          )}
        </LocalContextConsumer>
  )
}}
  </ThemeContextConsumer>
)

const Content = () => (
  <div className='Content'>
    <ThemedButton />
  </div>
)

class Context extends React.Component {
  constructor() {
    super();
    this.state = {
      theme: 'dark',
    }
  }

  render() {
    return (
      <LocalContextProvider value={'en'}>
        <ThemeContextProvider value={this.state.theme}>
          <Content />
        </ThemeContextProvider>
      </LocalContextProvider>
    );
  }
}