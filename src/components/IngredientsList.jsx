export default function IngredientsList(props){
  const ingredientsList = props.ingredients.map((ingredient)=>{
    return <li key={ingredient}>{ingredient}</li>
  })

  return (
    <section className="space-y-4">
      <h2 className="text-3xl font-semibold">Ingredients on hand:</h2>
      <ul className="list-disc list-inside text-xl text-gray-600">
        {ingredientsList}
      </ul>
    </section>
  )
}