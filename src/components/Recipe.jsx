import ReactMarkdown from 'react-markdown'

export default function Recipe(props){
  return (
    <section className='recipe-markup text-gray-600 text-base'>
      <h2 className="!text-3xl !text-black mb-3">Suggested recipe:</h2>
      <ReactMarkdown>{props.recipe}</ReactMarkdown>
    </section>
  )
}