
import React, { useContext } from 'react';
import { ChatContext } from '@providers/chatProvider';

const ChatButton = () => {
  const { isShow, setIsShow } = useContext(ChatContext);
  const toggleChat = () => {
    if (isShow) {
      setIsShow(false);
    }
    else{
      setIsShow(true);
    }
  }
  return (
    <div 
      onClick={toggleChat}
      className='hdcard_white align_item_center'
      style={{position:"fixed", bottom:"20px", right:"20px", width:"45px", height:"45px", borderRadius:"40px",}}
    >
      <img src='/icons/CHAT LOGO.svg' style={{width:"20px"}}/>
    </div>
  )
}

export default ChatButton