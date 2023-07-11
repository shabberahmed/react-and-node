import React from 'react'
import {Routes,Route,BrowserRouter} from "react-router-dom"
import AddUser from './AddUser'
import Data from './Data'
import EditUser from './editUser'
const App = () => {

  return (
   <>
   <BrowserRouter>
<Routes>
  <Route path='/' element={<AddUser/>}></Route>
  
  <Route path='/edit/:id' element={<EditUser/>}></Route>

  <Route path='/data' element={<Data/>}></Route>

  {/* <Route pat></Route> */}
</Routes>
</BrowserRouter>
   </>
  )
}

export default App