import chef from '../assets/chef-robot.png'

export default function Header(){
  return (
    <header className='flex items-center justify-center gap-3 py-8 shadow-md shadow-gray-300 bg-white'>
      <img src={chef} alt='Chef Robot icon' className='w-16 h-16'/>
      <h1>Chef Claude</h1>
    </header>
  )
}