export default function Main(){
  return (
    <main className="flex items-center justify-center py-8">
      <form id="my-form" >
        <input type="text" name="ingredient" aria-label="Add your ingredients here" placeholder="e.g. oregano" 
          className=" px-3 py-4 rounded-md focus-visible:outline-0"/>
        <button>&#43; Add ingredient</button>
      </form>
    </main>
  )
}