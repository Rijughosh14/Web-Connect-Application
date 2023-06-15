import React, { useEffect, useRef } from 'react'
// import { getUserSession, get_message } from '../../../../services/userService'
import Messagebox from './messagebox'

function NormalChatBody({ message }) {

  const chatbody=useRef(null)

  useEffect(()=>{
    if (chatbody && chatbody.current) {
      chatbody.current.scrollIntoView({behavior:"smooth"})
    }
   })

  useEffect(()=>{
    if (chatbody && chatbody.current) {
      chatbody.current.scrollIntoView()
    }
   },[message])


  return (
    <>
      <div className='flex flex-col w-full h-full overflow-auto  '  >
        <div>
        {
          message.map((data) => {
            return (
              <Messagebox msg={data.chat} id={data.sender_id} key={data.id} img={data.image} />
            )
          })
        }
        </div>
        <div ref={chatbody}/>
      </div>
    </>
  )
}

export default NormalChatBody