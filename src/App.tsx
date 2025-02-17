import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import RecipeDisplayPage from "./pages/RecipeDisplayPage"
import Layout from "./pages/Layout"
import MealDetailsPage from "./pages/MealDetailsPage"



function App() {

  return (
    <>
      <Layout>
     <Routes>
       <Route path="/" element = {<Home />} />
       <Route path="/recipes" element = {<RecipeDisplayPage/>} />
       <Route path="/recipes/:id" element = {<MealDetailsPage/>} />
     </Routes>
     </Layout>
    </>
  )
}

export default App
