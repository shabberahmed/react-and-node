import React from 'react'
import {Routes,Route,BrowserRouter} from "react-router-dom"
import AddUser from './AddUser'
const App = () => {
<BrowserRouter>
<Routes>
  <Route path='/' element={AddUser}></Route>
  {/* <Route pat></Route> */}
</Routes>
</BrowserRouter>
  return (
   <>
   </>
  )
}

export default App