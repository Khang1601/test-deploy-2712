import { useState } from 'react'
import Route from '@/routes/Route'
import { useEffect } from 'react'
import { api } from './services/apis'
import { useDispatch } from 'react-redux'
import { userAction } from './stores/slices/user.slice'



import axios from 'axios'


function App() {

  useEffect(() => {
    try {
      api.doList.findMany()

      .then(res => {
        console.log("res",res);
        console.log("res.data.data",res.data);
        
      })
    }catch(err) {
      console.log("errerrerr",err);
      
    }

  }, [])



  return (
    <>
      
        <Route></Route>
        {/* {Route()} */}
    
    </>
  )
}

export default App
