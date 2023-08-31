import { Banner } from "../Molecules/Banner";
import { SearchEvent } from "../Molecules/SearchEvent";

export const Main = () => {
  return (
    <main className="relative h-full overflow-hidden">
      <Banner />
      <SearchEvent />
    </main>
  )
}