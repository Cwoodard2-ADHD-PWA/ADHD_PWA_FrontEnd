import Navigation from "../components/Navigation";
import PWABadge from "../PWABadge";
export default function Homepage() {
  return (
    <>
      <div class="flex flex-row ">
        <Navigation />
        <h1>Hello Cameron</h1>
        <PWABadge />
      </div>
    </>
  );
}
