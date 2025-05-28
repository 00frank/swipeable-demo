import Header from '../components/Header'
import SearchBar from '../components/SearchBar'
import NavBar from '../components/NavBar'
import { useState } from 'react'

const Home = ({ onNext }) => {
  const [likes, setLikes] = useState({
    banner1: false,
    banner2: false
  });

  const toggleLike = (banner) => {
    setLikes(prev => ({
      ...prev,
      [banner]: !prev[banner]
    }));
  };

  return (
    <div className="flex flex-col h-full">
      <Header />
      <SearchBar />
      <div className="flex-1 relative">
        <div className="mx-4 mt-4">
          <div className="flex justify-between items-center">
            <h2 className="font-bold">Descubre nuevos sets</h2>
            <button className="flex items-center text-xs font-medium text-gray-600 hover:text-gray-800">
              Ver más
              <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
          <div className="mt-4">
            <div className="bg-gray-100 rounded-lg p-4">
              <p className="text-gray-700 text-sm mb-1">¡Nueva colección de verano!</p>
              <p className="text-gray-500 text-xs">Por Marca X</p>
            </div>
          </div>
        </div>

        <div className="mx-4 mt-8">
          <div className="flex justify-between items-center">
            <h2 className="font-bold">En base a tus sets</h2>
            <button className="flex items-center text-xs font-medium text-gray-600 hover:text-gray-800">
              Ver más
              <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
          <div className="mt-4 grid grid-cols-1 gap-4">
            <div className="bg-gray-100 rounded-lg relative">
              <button className="absolute top-2 right-2 p-2" onClick={() => toggleLike('banner1')}>
                <svg className={`w-6 h-6 ${likes.banner1 ? 'text-red-500' : 'text-white'}`}
                  fill="currentColor"
                  stroke="black"
                  strokeWidth="1"
                  viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                </svg>
              </button>
              <div className="p-4">
                <p className="text-gray-700 text-sm mb-1">¡Sets de verano!</p>
                <p className="text-gray-500 text-xs">Por Marca Y</p>
              </div>
            </div>
            <div className="bg-gray-100 rounded-lg relative">
              <button className="absolute top-2 right-2 p-2" onClick={() => toggleLike('banner2')}>
                <svg className={`w-6 h-6 ${likes.banner2 ? 'text-red-500' : 'text-white'}`}
                  fill="currentColor"
                  stroke="black"
                  strokeWidth="1"
                  viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                </svg>
              </button>
              <div className="p-4">
                <p className="text-gray-700 text-sm mb-1">¡Sets de invierno!</p>
                <p className="text-gray-500 text-xs">Por Marca Z</p>
              </div>
            </div>
          </div>
        </div>
        <NavBar onNext={onNext} />
      </div>
    </div>
  )
}

export default Home
