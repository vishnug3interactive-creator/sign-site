import './App.css'
import HomePage from './assets/pages/HomePage'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage/>}></Route>
      </Routes>
    </>
  )
}

export default App
