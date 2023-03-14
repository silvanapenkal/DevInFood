import './card.css';

export const Card = ({
imagem, produto, descricao, preco, tempoPreparo, id, key
}) => {
  return (
    <div id='cardContainer'>
      <img src={imagem} id="cardImage" width={298} alt="imagem do produto"/>
      <p>{produto}</p>
      <p>{descricao}</p>
      <p>{preco}</p>
      <p>{tempoPreparo}</p>
    </div>
  );
};

