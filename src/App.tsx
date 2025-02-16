import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import RecipeDetailsPage from "./pages/RecipeDisplayPage"
import Layout from "./pages/Layout"



function App() {

  return (
    <>
      <Layout>
     <Routes>
       <Route path="/" element = {<Home />} />
       <Route path="/recipes" element = {<RecipeDetailsPage/>} />
     </Routes>
     </Layout>
    </>
  )
}

export default App
