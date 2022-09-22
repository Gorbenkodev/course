// const numbers = [1,2,3,4,5];

// const res = numbers.map(numbers => numbers * 2);

// const listItems = numbers.map(number => (
//   <li>{number}</li>
// ));

// ReactDOM.render(
//   <ul>{listItems}</ul>,
//   document.getElementById('root')
// )

// const turtels = [
//   {
//     name: 'Leonardo',
//     nickName: 'Leo',
//     weapon: 'Katana',
//     imgUrl:'https://upload.wikimedia.org/wikipedia/uk/c/cb/%D0%9B%D0%B5%D0%BE%D0%BD%D0%B0%D1%80%D0%B4%D0%BE_2.jpg'
//   },
//   {
//     name:'Donatello',
//     nickName: 'Don',
//     weapon: 'Bo staff',
//     imgUrl: 'https://www.ninjaturtles.ru/forum/pic/12842.jpg'
//   },
//   {
//     name: 'Michelangelo',
//     nickName: 'Mikey',
//     weapon: 'Nunchucks',
//     imgUrl: 'https://www.ninjaturtles.ru/forum/pic/12840.jpg'
//   },
//   {
//     name: 'Raphael',
//     nickName: 'Raph',
//     weapon: 'Sai',
//     imgUrl: 'https://citaty.info/files/characters/185013.jpg'
//   }
// ]

const Turtles = () => (
  <div className='Turtle'>
    {turtels.map(turtle => (
      <div key={turtle.name}>
        <h3>{turtle.name} ({turtle.nickName})</h3>
        <p>Weapon of choice: {turtle.weapon}</p>
        <img src={turtle.imgUrl} alt={`${turtle.name}`} width='150'/>
        <hr/>
      </div>
    ))}
  </div>
)

ReactDOM.render(
  <Turtles/>,
  document.getElementById('root')
)



const posts = [
  {
    id: 1,
    title: 'Hello, world',
    content: 'Welcome to learn React'
  },
  {
    id: 2,
    title: 'Installiation',
    content: 'React can be installed via npm'
  }
];


const Blog = () => {
  const sidebar = (
    <ul>
      {posts.map(post => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  );
  const content = posts.map(post => (
    <div key={post.id} >
      <h3>{post.title}</h3>
      <p>{post.content}</p>
    </div>
  ));
  return (
    <div className='Blog'>
      {sidebar}
      <hr/>
      {content}
    </div>
  )
}

ReactDOM.render(
  <Blog/>,
  document.getElementById('root')
)