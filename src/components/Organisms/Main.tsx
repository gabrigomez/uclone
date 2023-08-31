import { Banner } from "../Molecules/Banner";
import { SearchEvent } from "../Molecules/SearchEvent";
import { Events } from "./Events";

export const Main = () => {
  return (
    <main className="relative h-full overflow-hidden">
      <Banner />
      <SearchEvent />
      <Events />
    </main>
  )
}