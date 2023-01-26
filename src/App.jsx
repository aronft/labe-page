import { Footer } from './components/common/Footer/Footer'
import { Header } from './components/common/Header/Header'
import { Tour } from './pages/Tour/Tour'

function App () {
  return (
    <div className=''>
      <Header />
      <main>
        <Tour />
      </main>
      <Footer />
    </div>
  )
}

export default App
