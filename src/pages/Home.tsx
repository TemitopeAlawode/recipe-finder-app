import { Link } from "react-router-dom"
const Home = () => {
  return (

<main className="md:bg-home-bg bg-small-screen-home-bg bg-cover h-home-height flex items-center justify-center">
        <div className="text-center italic space-y-6 bg-yellow-300 bg-opacity-60 p-16 rounded-md">
          <h2 className="text-4xl font-bold">Welcome To Recipe Finder!!!</h2>
          <p className="text-lg font-semibold">Discover amazing meals recipes...</p>
          <Link to="/recipes" className="inline-block bg-yellow-600 px-6 py-3 rounded font-semibold hover:bg-black hover:text-yellow-600 shadow-md">SEARCH RECIPES</Link>
        </div>
      </main>
   
    
  )
}

export default Home