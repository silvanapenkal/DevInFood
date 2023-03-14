import './Card.css';

export const Card = ({
  imagem, 
  produto, 
  descricao, 
  preco, 
  tempoPreparo, 
  id, 
  selecionado,
  onSelecionar,
}) => (
  <div className={`card${selecionado ? 'Selecionado' : ''}`}
    onClick={() => onSelecionar(id)}>
    <img src={imagem} id="cardImage" width={298} alt="imagem do produto" />
    <p>{produto}</p>
    <p>{descricao}</p>
    <p>{`R$ ${preco}`}</p>
    <p>{tempoPreparo}</p>
  </div>
);

