import useScrollSpeed from './assets/js/useScrollSpeed'
import Brands from './components/Brands'
import Header from './components/Header'
import Nav from './components/Navbar'
import Achive from './components/Achive'
import Services from './components/Services'

function App() {
  useScrollSpeed(10);

  return (
    <>
      <div>
        <Nav />
        <Header />
        <Brands />
        <Services />
        <Achive />
      </div>
    </>
  )
}

export default App
