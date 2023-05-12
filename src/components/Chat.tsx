import { FormEventHandler, useState } from 'react';
import useAuth from "../hooks/useAuth";
import useChat from '../hooks/useChat';
import IMessage from '../interfaces/IMessage';
import Buttons from './Button';


function Chat({id_room}:{id_room?:string}) {
  const [messages, setMessages] = useState<IMessage[]>([]);
  const [message, setMessage] = useState('');
  const user = useAuth();
  const [sendMessage] = useChat(setMessages, user, id_room);

  const handleSendMessage:FormEventHandler<HTMLFormElement> = (e)=>{
    e.preventDefault();
    sendMessage(message);
    setMessage('');
  }

  return (
    <div className="flex flex-col h-full min-w-full overflow-scroll">
      <div className="flex-grow bg-gray-100 px-4 py-2 overflow-y-auto">
        {messages.map((message,i) => (
          <div key={i} className={`my-2 ${message.id_user === user!.id_user ? 'ml-auto bg-green-200' : 'mr-auto bg-gray-200'} max-w-xs rounded-lg shadow-md p-2`}>
            <div className='text-xs'>{message.username}</div>
            <div className="text-gray-600">{message.text}</div>
          </div>
        ))}
      </div>
      <div className="bg-gray-200 px-4 py-2">
        <form className="flex" onSubmit={handleSendMessage}>
          <div className='flex-[2]'>
            <input
              type="text"
              placeholder="Type your message here..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="flex-grow bg-white border-gray-300 border rounded-lg py-2 px-4 focus:outline-none focus:border-blue-400"
            />
          </div>
          <div className='flex-1 px-3'>
            <Buttons.buttonGreen>Send</Buttons.buttonGreen>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Chat;