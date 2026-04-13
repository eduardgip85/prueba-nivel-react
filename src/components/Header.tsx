import { NavLink } from 'react-router-dom'

const Header = () => {
    return (
        <header>
        <nav className='bg-blue-600 text-white shadow-lg'>
          <ul className='flex gap-6 p-4 justify-center'>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/products">Products</NavLink></li>
          </ul>
        </nav>
      </header>
    )
}

export default Header