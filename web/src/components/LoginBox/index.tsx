import Style from "./Style.module.scss";
import { VscGithubInverted } from "react-icons/vsc"

export function LoginBox (){
  return (
    <div className={Style.loginWrapper}>
      <strong >Entre e compartilhe sua menssagem</strong>
      <a href="#" className={Style.signInWidthGithub}>
        <VscGithubInverted size="24"/>
        Entrar com github
      </a>

    </div>
  )
}
