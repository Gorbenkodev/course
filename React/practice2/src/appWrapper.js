import { AppItem } from "./appItem"


export const AppWrapper = (props) => (
  <div>
    <h1 className="title">{props.title}</h1>
    <AppItem />
  </div>
)

