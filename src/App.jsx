// components
import UserForm from './components/UserForm'
import ReviewForm from './components/ReviewForm'
import Thanks from './components/Thanks'
// hooks
import UseForm from './hooks/UseForm'

// icons
import { GrFormNext, GrFormPrevious } from 'react-icons/gr'
import { FiSend } from 'react-icons/fi'


// styles
import './App.css'

function App() {

  // pages da etapa atual
  const formComponents = [
    <UserForm />,
    <ReviewForm />,
    <Thanks />
  ]

  // importando as variaveis das etapas 
  const {
    currentStep,
    currentComponent,
    changeStep,
    isFirstStep,
    isLastStep
  } = UseForm(formComponents)

  return (
    <div className="app">
      <div className="header">
        <h2>Deixe sua avaliação</h2>
        <p>
          Ficamos felizes com a sua compra, utilize o formulário abaixo para avaliar o produto
        </p>
      </div>
      <div className="form-container">
        <p>etapas</p>
        <form onSubmit={(e) => changeStep(currentStep + 1, e)}>
          <div className="input-container">{currentComponent}</div>
          <div className="actions">

            {/* se for a primeira etapa nao vai aparecer o butão para voltar */}
            {!isFirstStep && (
              <button type='button' onClick={() => changeStep(currentStep - 1)}>
                <GrFormPrevious />
                <span>Voltar</span>
              </button>
            )}

            {/* se for a ultima etapa vai aparecer o button de enviar */}
            {
              !isLastStep ? (
                <button type='submit'>
                  <span>Avançar</span>
                  <GrFormNext />
                </button>
              ) : (
                <button type='button'>
                  <span>Enviar</span>
                  <FiSend />
                </button>
              )
            }
            
          </div>
        </form>
      </div>
    </div>
  )
}

export default App
