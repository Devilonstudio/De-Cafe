import { useEffect, useRef } from 'react'
import { MENU } from '../data/menu.js'

export default function CategoryTabs({ active }) {
  const ref = useRef(null)

  // keep the active tab visible in the scrolling strip
  useEffect(() => {
    const btn = ref.current?.querySelector('.on')
    btn?.scrollIntoView({ inline: 'center', block: 'nearest', behavior: 'smooth' })
  }, [active])

  return (
    <div className="tabs" ref={ref}>
      {MENU.map((c) => (
        <a key={c.id} href={`#${c.id}`} className={active === c.id ? 'on' : ''}>
          {c.icon} {c.category}
        </a>
      ))}
    </div>
  )
}
