import { ChatEngine } from 'react-chat-engine';
import './ChatComponent.css'
import ChatFeed from './ChatComponent/ChatFeed';


const ChatComponent = () => {
    return(
        <ChatEngine
            height="100vh"
            projectID = "a069420d-c6c6-43ee-a0fc-7e4459baafb9"
            userName = "Dr. Fitness"
            userSecret = "12345678"
            renderChatFeed={(chatAppProps)=> <ChatFeed {... chatAppProps} />}
        />
    )
}
export default ChatComponent;