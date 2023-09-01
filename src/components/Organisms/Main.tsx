import { Banner } from "../Molecules/Banner";
import { SearchEvent } from "../Molecules/SearchEvent";
import { Events } from "./Events";

export const Main = () => {
  return (
    <main className="relative overflow-hidden pb-10">
      <Banner />
      <SearchEvent />
      <Events />
    </main>
  )
}