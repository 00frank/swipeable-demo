import { useState } from 'react'
import Header from '../components/Header'
import NavBar from '../components/NavBar'
import '../styles/scrolling-text.css'

const ListCollection = ({ onNext, aiResponse }) => {
  const [selectedItems, setSelectedItems] = useState([])

  const handleSelect = (index) => {
    console.log("index", index)
    setSelectedItems(prev => {
      const itemToToggle = aiResponse.items[index]
      if (prev.some(item => item.id === index)) {
        return prev.filter(item => item.id !== index)
      } else {
        return [...prev, { id: index, ...itemToToggle }]
      }
    })
  }

  return (
    <div className="flex flex-col h-full">
      <Header />
      <div className="flex-1 relative">
        <div className="text-center mt-4">
          <h1 className="text-2xl font-bold mb-4">Lista de Items</h1>
          {aiResponse?.items ? (
            <div className="w-3/4 mx-auto">
              <div className="max-h-[50vh] overflow-y-auto space-y-4 pb-20">
                {aiResponse.items
                  .sort((a, b) => b.elo - a.elo)
                  .map((item, index) => (
                    <div
                      key={index}
                      className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
                      onClick={() => handleSelect(index)}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <span>{item.emoji}</span>
                          <div className="scrolling-text-container">
                            <span className="scrolling-text font-semibold">{item.name}</span>
                          </div>
                        </div>
                        <div className="flex items-center">
                          <div className="relative">
                            <input
                              type="checkbox"
                              checked={selectedItems.some(selected => selected.id === index)}
                              onChange={(e) => {
                                e.stopPropagation();
                                handleSelect(index);
                              }}
                              className="w-5 h-5 text-blue-500 border-gray-300 rounded focus:ring-blue-500"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                <div className="flex justify-center mt-8">
                  <button
                    onClick={() => onNext(selectedItems)}
                    className="bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600 transition-colors"
                  >
                    Siguiente
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <div className="max-h-[50vh] flex items-center justify-center">
              <p className="text-gray-500">No hay items para mostrar</p>
            </div>
          )}
        </div>
      </div>
      <NavBar onNext={() => onNext()} />
    </div>
  )
}

export default ListCollection