import Racks, { type Inventory } from "./components/Racks";
import inventory from "@/data/listings.json";

export default function Home() {
  return (
    <>
      <div className="wrap page-head">
        <h1>The racks</h1>
        <p>
          Records for sale right now by trusted Discogs partners. You pick the
          copy, the condition and the price — bought directly from the seller.
        </p>
      </div>
      <Racks inventory={inventory as Inventory} />
    </>
  );
}
