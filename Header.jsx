import logo from "../../assets/logo.svg";
import app1 from "../../assets/app.svg";
import app2 from "../../assets/app2.svg";
import * as S from "./header_style";

function Header() {
  return (
    <S.Header>
      <img src={logo} alt="" />

      <section>
        <div>
          <img src={app2} alt="" />
          <h3>Baixe o App</h3>
        </div>
        <div className="mequi">
          <h3>Peça seu Méqui</h3>
          <img src={app1} alt="" />
        </div>
      </section>
    </S.Header>
  );
}

export default Header;
