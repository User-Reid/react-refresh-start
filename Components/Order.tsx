export default function Order({ ...props }) {
  return (
    <div className="order">
      <p>
        We're open until {props.openHour}:00 AM. Come visit us or order online.
      </p>
      <button className="btn">Order</button>
    </div>
  );
}
