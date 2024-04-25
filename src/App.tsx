import { Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import PaginationClick from './pages/PaginationClick'
import Scroll from './pages/Scroll'

function App() {

  return (
  <>
    <Routes>
      <Route path='/' element={<Header/>}>
      <Route index element={<PaginationClick />} />
      <Route path='scroll' element={<Scroll/>}/>
      </Route>
    </Routes>
    </>
  )
}

export default App
