import bigmac from "../../assets/bigmac.svg";
import sorvete from "../../assets/sorvete.svg";
import batata from "../../assets/batata.svg";
import sofa from "../../assets/sofa.png";
import loja from "../../assets/loja.png";
import juntos from "../../assets/juntos.png";
import * as S from "./main_style";
import Card from "../Card/Card";

function Main() {
  return (
    <main>
      <S.Section>
        <div>
          <img src={bigmac} alt="" />
          <h1>BATEU AQUELA #FOME DE MÉQUI?</h1>
        </div>

        <figure>
          <img className="bigmac" src={bigmac} alt="" />
          <img className="bigmac" src={batata} alt="" />
          <img className="bigmac" src={sorvete} alt="" />
        </figure>
      </S.Section>

      <section>
        <h2>Promoção</h2>
        <div>
          <Card imagem={sofa} texto={"Que tal um #MéquiNoSofá?"} />
          <Card imagem={loja} texto={"Venha conhecer nossa nova loja"} />
          <Card
            imagem={juntos}
            texto={"Confira as medidas que o Méqui adotou!"}
          />
        </div>
      </section>
    </main>
  );
}

export default Main;
