const formatUserName = (firstName, lastName) => {
  return <h2 className="h2">Hello, {firstName} {lastName}</h2>;
}

const h1 =  <h1 style={{textAlign: "center", color: "darkblue"}}>This test text for homework page</h1>;
const br =  <br></br>;
const h2 = formatUserName('Sara', 'Conor');
const h3 = formatUserName('John', 'Doe')
const p = <p className="p">Here we have the list:</p>;
const a = <a href="https://uk.reactjs.org/docs" target="_blank">It is link to our docs</a>;
const img = <img src="https://www.rspb.org.uk/globalassets/images/birds-and-wildlife/non-bird-species-illustrations/fox_1200x675.jpg" alt="Fox" width="300"></img>
const ul =  <ul className="ul">
   <li tab-index="_1">
     Just text here
   </li>
   <li>
     <span>Here we have text and link!</span>
     {a}
   </li>
   <li>
     <span>And the picture!!!</span>
     {img}
   </li>
 </ul>;




export function App(){ 
  return (
    <div>
      {h1}
      {br}
      {h2}
      {h3}
      {br}
      {p}
      {ul}
    </div>
  )
}


