import Style from "./Style.module.scss";
import { VscGithubInverted } from "react-icons/vsc"
import { useContext } from "react";
import { AuthContext } from "../../contexts/auth";

export function LoginBox (){
  const { signinUrl, user } = useContext(AuthContext)

  return (
    <div className={Style.loginWrapper}>
      <strong >Entre e compartilhe sua menssagem</strong>
      <a href={signinUrl} className={Style.signInWidthGithub}>
        <VscGithubInverted size="24"/>
        Entrar com github
      </a>
      
    </div>
  )
}
