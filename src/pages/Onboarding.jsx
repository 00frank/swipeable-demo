import { useState } from 'react'
import Header from '../components/Header'
import SearchBar from '../components/SearchBar'
import NavBar from '../components/NavBar'

const Onboarding = ({ onNext, setAiResponse }) => {
  const [inputValue, setInputValue] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)

  const handleNext = () => {
    if (!inputValue.trim()) return;

    // Iniciar la petición API en segundo plano
    const sendToApi = async () => {
      try {
        setIsLoading(true);
        setError(null);

        // Realizar la petición a la API
        const response = await fetch(import.meta.env.VITE_API_URL, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ topic: inputValue, lang: 'es_AR' }),
        });

        const data = await response.json();
        
        // Guardar la respuesta en el estado global
        setAiResponse(data);
      } catch (err) {
        setError('Error al procesar la información');
      } finally {
        setIsLoading(false);
      }
    };

    // Ejecutar la petición en segundo plano
    sendToApi();
    
    // Avanzar al siguiente paso inmediatamente
    onNext();
  }

  return (
    <div className="flex flex-col h-full">
      <Header />
      <div className="flex-1 relative">
        <div className="text-center mt-4">
          <h1 className="text-xl font-bold mb-4">Crea tu collección</h1>
          <div className="w-4/5 mx-auto">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="De que topico queres hablar?"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              disabled={isLoading}
            />
            {error && (
              <div className="text-red-500 mt-2">{error}</div>
            )}
          </div>
          <button
            onClick={handleNext}
            className="mt-6 px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={!inputValue.trim() || isLoading}
          >
            {isLoading ? (
              <div className="flex items-center justify-center">
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                Procesando...
              </div>
            ) : (
              'Siguiente'
            )}
          </button>
        </div>
        <NavBar onNext={handleNext} />
      </div>
    </div>
  )
}

export default Onboarding
