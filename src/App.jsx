import './App.css'
import Intro from './component/Intro'
import Intro2 from './component/Intro2'
import Navbar from './component/Navbar'

function App() {
  return (
    <>
      <nav>
        <Navbar/>
      </nav>
      <main>
        <Intro2/>
      </main>
    </>
  )
}

export default App
