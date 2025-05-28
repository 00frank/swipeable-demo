import { useState } from 'react'
import PhoneFrame from './components/PhoneFrame'
import Home from './pages/Home'
import Onboarding from './pages/Onboarding'
import CollectionSettings from './pages/CollectionSettings'
import ListCollection from './pages/ListCollection'

function App() {
  const [step, setStep] = useState(0)
  const [aiResponse, setAiResponse] = useState(null)

  const renderStep = () => {
    switch (step) {
      case 0:
        return <Home onNext={() => setStep(1)} />
      case 1:
        return <Onboarding onNext={() => setStep(2)} setAiResponse={setAiResponse} />
      case 2:
        return <CollectionSettings onNext={() => setStep(3)} aiResponse={aiResponse} />
      case 3:
        return <ListCollection onNext={() => setStep(0)} aiResponse={aiResponse} />
      default:
        return <Home />
    }
  }

  return (
    <>
      <PhoneFrame>
        {renderStep()}
      </PhoneFrame>
      <p className='absolute bottom-2 right-2/3 w-16 h-16 flex items-center justify-center text-center bg-white rounded-full border-4 text-2xl font-bold'>{step}</p>
    </>
  )
}

export default App
