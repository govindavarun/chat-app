import React from 'react'
import { auth } from '../firebase'
const style={
    button:`bg-gray-300 px-4  hover:bg-gray-100`
}
const LogOut = () => {
    const signOut=()=>{
        signOut(auth);
    }
  return (
 <button onClick={()=>auth.signOut()} className={style.button}>
 LogOut
 </button>
  )
}

export default LogOut
