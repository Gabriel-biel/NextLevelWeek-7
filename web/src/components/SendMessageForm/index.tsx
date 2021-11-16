import { useContext, useState, FormEvent } from "react"
import { VscGithubInverted, VscSignOut } from "react-icons/vsc"
import { AuthContext } from "../../contexts/auth"
import { api } from "../../services/api"
import Styles from "./Style.module.scss"

export function SendMessageForm() {
  const { user, SignOut } = useContext(AuthContext)
  const [message, setMessage] = useState('');

  async function handleSendMessage(event: FormEvent) {
    event.preventDefault();
    if (!message.trim()) {
      return;
    }

    await api.post('/messages', { message });

    setMessage('');
  }

  return (
    <div className={Styles.sendMessageFormWrapper}>
      <button className={Styles.signOutButton}>
        <VscSignOut size={32} onClick={SignOut}/>
      </button>

      <header className={Styles.userInformation}>
        <div className={Styles.userImage}>
          <img src={ user?.avatar_url } alt={user?.name} />
        </div>
        <strong className={Styles.userName}>{user?.name}</strong>
        <span className={Styles.userGithub}>
          <VscGithubInverted size="16"/>
          {user?.login}
        </span>
      </header>

      <form onSubmit={handleSendMessage} className={Styles.sendMessageForm}>
        <label htmlFor="message">Menssagem</label>
        <textarea 
          name="messsage"
          id="message"
          placeholder="Qual a sua expectativa para o Evento"
          onChange={event => setMessage(event.target.value)}
          value={message}
        />
      <button type="submit">Enviar Menssagem </button>
      </form>
    </div>

  )
};