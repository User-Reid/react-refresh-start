import Order from "./Order";

export default function Footer() {
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;
  console.log(isOpen);

  return (
    <footer>
      {isOpen ? (
        <Order openHour={openHour} />
      ) : (
        <p>
          We're closed, please visit us between {openHour}:00 & {closeHour}:00.
        </p>
      )}
    </footer>
  );
}
