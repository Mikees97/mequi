import * as S from "../Main/main_style";
export default function Card({ imagem, texto }) {
  return (
    <S.Card>
      <img src={imagem} alt="img" />
      <h2>{texto}</h2>
      <button>clique</button>
    </S.Card>
  );
}
