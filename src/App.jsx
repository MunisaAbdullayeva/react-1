import './App.css'
import Sidebar from './components/Sidebar'
import { Outlet } from 'react-router-dom'
import Navbar from './Components/Navbar'

function App() {

  return (
    <>
      <body>
        <header>
          <Navbar />
        </header>
        <main>
          <aside>
            <Sidebar />
          </aside>

          <section>
            <Outlet />
          </section>
        </main>
      </body>
    </>
  )
}

export default App
