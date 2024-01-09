import './App.css'
import { Routes , Route} from 'react-router-dom'


function Hola(){
  return(
    <>
      HOLA MUNDO
    </>
  )
}

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Hola/>}/>
        <Route path="/ver" element={<>2</>}/>
      </Routes>
    </div>
  )
}

export default App
