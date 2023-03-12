import './card.css';

const Card = ({
imagem, produto, descricao, preco, tempoPreparo
}) => {
  return (
    <div id='cardContainer'>
      {/* <img src={imagem}/> */}
      <p>{produto}</p>
      <p>{descricao}</p>
      <p>{preco}</p>
      <p>{tempoPreparo}</p>
    </div>
  );
}

export default Card;