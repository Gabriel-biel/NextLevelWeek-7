import Styles from "./Style.module.scss";
import Logo from "../../assets/logo.svg";

import { api } from "../../services/api";
import io from "socket.io-client";

import { useEffect, useState } from "react";

type Message = {
  id: string;
  text: string;
  user: {
    name: string;
    avatar_url: string;
  }
}

const messagesQueue: Message[] = [];

const socket = io('http://localhost:4000');
socket.on('new_message', (newMessage: Message)=> {
  messagesQueue.push(newMessage);
})


export function MessageList (){
  const [messages, setMessages ]= useState<Message[]>([]);

  useEffect(() => {
    const timer = setInterval(() => {
      if (messagesQueue.length){
        setMessages(prevState => [
          messagesQueue[0],
          prevState[0],
          prevState[1],
        ].filter(Boolean))

        messagesQueue.shift();
      }
    }, 3000)
  }, [])

  useEffect(() =>{
    // chamada a api 
    api.get<Message[]>("/messages/last3").then(response => {
      setMessages(response.data)
    })
  }, [])

  return (
    <main className={Styles.messageListWrapper}>
      <img src={Logo} alt="DOwhile2021" />
      <ul className={Styles.messageList}>

        {messages.map(message => {
          return (
            <li key={message.id} className={Styles.message}>
              <p className={Styles.messageContent}>{message.text}</p>
              <div className={Styles.messageUser}>
                <div className={Styles.userImage}>
                  <img src={message.user.avatar_url} alt={message.user.name}/>
                </div>
                <span>{message.user.name}</span>
              </div>
            </li>
          );
        })}
      </ul>
    </main>
  )
}