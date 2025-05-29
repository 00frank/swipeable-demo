import { useState } from 'react'
import PhoneFrame from './components/PhoneFrame'
import Home from './pages/Home'
import Onboarding from './pages/Onboarding'
import CollectionSettings from './pages/CollectionSettings'
import ListCollection from './pages/ListCollection'
import UserOptions from './pages/UserOptions'

function App() {
  const [step, setStep] = useState(0)
  const [aiResponse, setAiResponse] = useState(null)
  const [stepData, setStepData] = useState(null)

  const handleStep = (newStep, data = null) => {
    setStep(newStep)
    if (data !== null) {
      setStepData(data)
    }
  }

  const renderStep = () => {
    switch (step) {
      case 0:
        return <Home onNext={() => handleStep(1)} />
      case 1:
        return <Onboarding onNext={() => handleStep(2)} setAiResponse={setAiResponse} />
      case 2:
        return <CollectionSettings onNext={() => handleStep(3)} aiResponse={aiResponse} />
      case 3:
        return <ListCollection onNext={(selectedItems) => handleStep(4, selectedItems)} aiResponse={aiResponse} />
      case 4:
        return <UserOptions onNext={() => handleStep(5)} selectedItems={stepData} />
      default:
        return <Home />
    }
  }

  return (
    <>
      <PhoneFrame>
        {renderStep()}
      </PhoneFrame>
      <p className='absolute top-2 left-2 w-16 h-16 flex items-center justify-center text-center bg-white rounded-full border-4 text-2xl font-bold'>{step}</p>
    </>
  )
}

export default App
