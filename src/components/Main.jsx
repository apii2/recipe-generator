import { useState } from "react"
import IngredientsList from "./IngredientsList"
import RecipeButton from "./RecipeButton"
import Recipe from "./Recipe"
import { getRecipeFromMistral } from '../ai'

export default function Main(){

  const [ingredients, setIngredients] = useState([])

  function handleSubmit(formData){
    setIngredients(prevIngredients=> [...prevIngredients, formData.get('ingredient')])
  }

  const [recipe, setRecipe] = useState('')

  async function getRecipe(){
    const recipeMarkdown = await getRecipeFromMistral(ingredients)
    setRecipe(recipeMarkdown)
  }

  return (
    <main className="py-10 px-6 sm:px-20 lg:px-48 xl:px-64 space-y-8">
      <form id="my-form" action={handleSubmit} className="w-full grid sm:grid-cols-[60%_auto] lg:grid-cols-[70%_auto] gap-4">
        <input type="text" name="ingredient" aria-label="Add your ingredients here" placeholder="e.g. oregano" 
          className="px-5 py-2 rounded-lg focus-visible:outline-0 ring-2 ring-gray-300 w-full hover:ring-gray-600 active:ring-gray-600"/>
        <button aria-label="Click to add ingredients" className="hover:shadow-lg hover:shadow-gray-300 hover:!bg-[#1a1a1a]/80">&#43; Add ingredient</button>
      </form>

      {ingredients.length>0 && <IngredientsList ingredients={ingredients}/>}

      {ingredients.length>3 && <RecipeButton getRecipe={getRecipe}/>}

      {recipe && <Recipe recipe={recipe}/>}
    </main>
  )
}