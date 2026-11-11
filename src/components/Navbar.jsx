import { useCart } from '../CartContext.jsx'
import { CAFE, LOGO } from '../config.js'

export default function Navbar() {
  const { count, setOpen } = useCart()
  return (
    <header className="nav">
      <a href="#top" className="brand" aria-label={`${CAFE.name} home`}>
        <img src={LOGO} alt="De Café Bean Corner logo" className="brand-logo" />
        <span className="brand-name">{CAFE.name}</span>
      </a>
      <nav className="nav-links">
        <a href="#menu">Menu</a>
        <a href="#visit">Visit</a>
        <button className="cart-btn" onClick={() => setOpen(true)} aria-label="Open cart">
          🛒 <span className="cart-count">{count}</span>
        </button>
      </nav>
    </header>
  )
}
