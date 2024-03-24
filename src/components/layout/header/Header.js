import { Link } from 'react-router-dom';
import './Header.css'

function Header() {
  return (
    <header>
      <nav>
        <Link to="/about">О проекте</Link>
        <Link to="/">Список заметок</Link>
      </nav>
    </header>
  )
}

export default Header
