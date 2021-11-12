import Styles from "./Style.module.scss";
import Logo from "../../assets/logo.svg";
import { api } from "../../services/api";
import { useEffect, useState } from "react";

type Message = {
  id: string;
  text: string;
  user: {
    name: string;
    avatar_url: string;
  }
}

export function MessageList (){
  const [messages, setMessages ]= useState<Message[]>([]);


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