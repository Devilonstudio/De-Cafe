import { useEffect, useState } from 'react'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import CategoryTabs from './components/CategoryTabs.jsx'
import MenuSection from './components/MenuSection.jsx'
import Cart from './components/Cart.jsx'
import Footer from './components/Footer.jsx'
import { MENU } from './data/menu.js'

export default function App() {
  const [active, setActive] = useState(MENU[0].id)

  // highlight the tab of the section currently on screen
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => e.isIntersecting && setActive(e.target.id))
      },
      { rootMargin: '-140px 0px -65% 0px' }
    )
    MENU.forEach((c) => {
      const el = document.getElementById(c.id)
      el && obs.observe(el)
    })
    return () => obs.disconnect()
  }, [])

  return (
    <>
      <Navbar />
      <Hero />
      <CategoryTabs active={active} />
      <main className="wrap" id="menu">
        {MENU.map((c) => (
          <MenuSection key={c.id} category={c} />
        ))}
      </main>
      <Footer />
      <Cart />
    </>
  )
}
