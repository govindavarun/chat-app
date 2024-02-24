import React ,{useState}from 'react'
import { auth,db } from '../firebase';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
const style={
    form:`h-14 w-full max-w-[700px] bottom-0 flex  text-xl fixed  `,
    input: `w-full text-xl p-3 bg-gray-900 text-white outline-none border-none`,
    button: `w-[20%] bg-green-500`,
}
const Sendmessage = () => {
    const [input,setInput]=useState("");
const sendMessage=async(e)=>{
e.preventDefault();
if(input==="")return ; 
const{uid,displayName}=auth.currentUser
await addDoc(collection(db,'messages'),{
    text:input,
    name:displayName,
    uid,
    timestamp:serverTimestamp(),
})
setInput("")

}
  return (
    <form onSubmit={sendMessage} className={style.form}> 
      <input value={input} onChange={(e)=>setInput(e.target.value)} className={style.input} type="text" placeholder='Message' />
  <button className={style.button}  type="submit"> Send</button>
    </form>
  )
}

export default Sendmessage
