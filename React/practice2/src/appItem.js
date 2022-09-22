import { turtles } from "./constant";
import { Image } from "./image";

export const AppItem = (props) => (
  <div className="appItem">
    {turtles.map(turtle => (
      <div key={turtle.name}>
        <h3>{turtle.name}</h3>
        <p>{turtle.nickName} kills people who doesn’t learn React with {turtle.weapon}</p>
        <img src={turtle.imgUrl} className='image'></img>
      </div>
    ))}
  </div>
);