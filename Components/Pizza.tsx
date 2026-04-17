export default function Pizza({ ...props }) {
  if (props.pizza.soldOut) {
    return (
      <li className="pizza">
        <img src={props.pizza.photoName} alt={props.pizza.name} />
        <div>
          <h3 style={{ textDecoration: "line-through" }}>{props.pizza.name}</h3>
          <p>{props.pizza.ingredients}</p>
          <span style={{ textDecoration: "underline" }}>SOLD OUT</span>
        </div>
      </li>
    );
  } else {
    return (
      <li className="pizza">
        <img src={props.pizza.photoName} alt={props.pizza.name} />
        <div>
          <h3>{props.pizza.name}</h3>
          <p>{props.pizza.ingredients}</p>
          <span>{props.pizza.price + 3}</span>
        </div>
      </li>
    );
  }
}
