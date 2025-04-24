export default function RecipeButton(props){
  return (
    <section className="bg-[#F0EFEB] flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 px-9 py-6 rounded-lg">
      <div className="space-y-2">
        <h3 className="text-lg font-semibold">Ready for a recipe?</h3>
        <p className="text-sm text-gray-600">Generate a recipe from your list of ingredients.</p>
      </div>

      <button aria-label="Click to generate a recipe" onClick={props.getRecipe} className="!bg-[#D17557] !px-4 hover:!bg-[#D17557]/80">
        Get a recipe
      </button>
    </section>
  )
}