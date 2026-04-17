export default function Footer() {
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;
  console.log(isOpen);

  if (!isOpen) {
    return (
      <p>
        We're happy to welcome you between {openHour}:00 and {closeHour}:00.
      </p>
    );
  } else {
    return (
      <footer className="footer">
        {new Date().toLocaleTimeString()} "We are closed"
      </footer>
    );
  }
}
