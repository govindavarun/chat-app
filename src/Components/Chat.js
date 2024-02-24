import React,{useState,useEffect,useRef} from 'react'
import Message from './Message';
import { collection, onSnapshot, orderBy, query } from 'firebase/firestore';
import { db } from '../firebase';
import Sendmessage from './Sendmessage';

const style={
    main:`flex flex-col p-[10px]  relative`,//as some absolutes will be there too !
    mainstyle: {
      height: `calc(100vh - 60px - 56px - 20px)`,
      overflowY: `scroll`,
      position: `relative`,
    },
}
const Chat = () => {
      const [messages,setMessages]=useState([]);
      const scroll=useRef();
      useEffect(()=>{
            const q=query(collection(db,'messages'),orderBy('timestamp'))
            const unsubscribe=onSnapshot(q,(querySnapshot)=>{
                        let message=[]
                        querySnapshot.forEach((doc)=>{
                              message.push({...doc.data(),id:doc.id})
                        })
                        setMessages(message);
            })
                  return()=>unsubscribe()
      },[])
  return (
   <>
      <main className={style.main} style={style.mainstyle}>
      {messages && 
      messages.map((message)=>(
<Message key={message.id} message={message} />

      ))
      }
      </main>
      <Sendmessage scroll={scroll}/>
{/*send message component*/}
<span ref={scroll}></span>
   </>   
  )
}

export default Chat
