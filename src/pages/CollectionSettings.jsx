import { useState, useEffect } from 'react'
import Header from '../components/Header'
import NavBar from '../components/NavBar'

const CollectionSettings = ({ onNext, aiResponse }) => {
  const [collectionName, setCollectionName] = useState('')
  const [isPublic, setIsPublic] = useState(true)
  const [isLoading, setIsLoading] = useState(aiResponse === null)

  useEffect(() => {
    setIsLoading(aiResponse === null);
  }, [aiResponse]);

  return (
    <div className="flex flex-col h-full">
      <Header />
      <div className="flex-1 relative">
        <div className="text-center mt-4">
          <p className="text-2xl font-bold mb-2">Configuración de Set</p>
          <div className="w-3/4 mx-auto space-y-6">
            <div>
              <div>
                <label className="block text-sm font-medium mb-1">Nombre del set</label>
                <input
                  type="text"
                  value={collectionName}
                  onChange={(e) => setCollectionName(e.target.value)}
                  placeholder="Ingresa un nombre"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                />
              </div>
              <div className="flex items-center justify-center">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    checked={isPublic}
                    onChange={(e) => setIsPublic(e.target.checked)}
                    className="mr-2"
                  />
                  <span>Colección pública</span>
                </label>
              </div>
              <div>
                <button
                  onClick={onNext}
                  className="w-full px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed"
                  disabled={!collectionName.trim() || isLoading}
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
            </div>
          </div>
        </div>
      </div>
      <NavBar onNext={onNext} />
    </div>
  )
}

export default CollectionSettings
