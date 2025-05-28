import Header from '../components/Header'
import SearchBar from '../components/SearchBar'
import NavBar from '../components/NavBar'

const Home = ({ onNext }) => {
  return (
    <div className="flex flex-col h-full">
      <Header />
      <SearchBar />
      <div className="flex-1 relative">
        <div className="text-center mt-4">
          <h1 className="text-xl font-bold mb-2">¡Hola Mundo!</h1>
          <div className="text-gray-600">
            Contenido principal aquí
          </div>
        </div>
        <NavBar onNext={onNext} />
      </div>
    </div>
  )
}

export default Home
