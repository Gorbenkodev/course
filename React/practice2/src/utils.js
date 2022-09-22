import { turtles } from "./constant"

export function GetItemDescrition() {
  {turtles.map(turtle => (
    <div key={turtle.name}>
      <h3>{turtle.name}</h3>
      <p>{turtle.nickName} kills people who doesn’t learn React with {turtle.weapon}</p>
    </div>
  ))}
}