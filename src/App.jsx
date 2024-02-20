import { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <ItemListContainer greeting= 'Bienvenidos a Apple Mania!'/>
      
    </>
  )
}

export default App
