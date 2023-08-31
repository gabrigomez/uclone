import { NavBar } from './components/Molecules/NavBar';
import { Footer } from './components/Organisms/Footer';
import { Main } from './components/Organisms/Main';

import './App.css';

function App() {
  return (
    <div className='h-full w-full'>
      <NavBar />
      <Main />
      <Footer />
    </div>
  )
}

export default App
