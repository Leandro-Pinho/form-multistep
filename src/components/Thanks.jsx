import { BsFillEmojiHeartEyesFill, BsFillEmojiSmileFill, BsFillEmojiNeutralFill, BsFillEmojiFrownFill } from 'react-icons/bs'
import './Thanks.css'


// para exibir o emoji escolhido
const emojiData = {
  unsatisfied: <BsFillEmojiFrownFill />,
  neutral: <BsFillEmojiNeutralFill />,
  satisfied: <BsFillEmojiSmileFill />,
  very_satisfied: <BsFillEmojiHeartEyesFill />
}

const Thanks = ({ data }) => {
  return (
    <div className='thanks-container'>
      <h2>Falta pouco...</h2>
      <p>
        A sua opinião é muito importante, em breve você receberá um cupom de 10% de desconto para a sua propria compra.
      </p>
      <p>Para concluir sua avaliação clique no botão de Enviar abaixo.</p>
      <h3>Aqui está o resumo da sua avaliação {data.name}:</h3>
      <div className="review-data">
        <span>Satisfação com o produto:</span>
        {emojiData[data.review]}
      </div>
      <div className="review-data">
        <span>Comentário: {data.comment}</span>
      </div>
    </div>
  )
}

export default Thanks
