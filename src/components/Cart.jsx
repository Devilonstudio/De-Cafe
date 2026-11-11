import { useEffect, useState } from 'react'
import { useCart } from '../CartContext.jsx'
import { WHATSAPP_NUMBER } from '../config.js'

export default function Cart() {
  const { list, total, count, open, setOpen, change, clear } = useCart()
  const [name, setName] = useState('')
  const [note, setNote] = useState('')

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    const esc = (e) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', esc)
    return () => window.removeEventListener('keydown', esc)
  }, [open, setOpen])

  function order() {
    if (!list.length) return
    const lines = list.map((i) => `• ${i.qty} x ${i.name} — Rs. ${i.qty * i.price}`)
    const msg = [
      `Hi De Café! I'd like to place an order:`,
      '',
      ...lines,
      '',
      `Total: Rs. ${total}`,
      ...(name.trim() ? [`Name: ${name.trim()}`] : []),
      ...(note.trim() ? [`Note: ${note.trim()}`] : []),
    ].join('\n')
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`, '_blank', 'noopener')
  }

  return (
    <>
      <div className={`overlay ${open ? 'show' : ''}`} onClick={() => setOpen(false)} />
      <aside className={`drawer ${open ? 'open' : ''}`} aria-hidden={!open}>
        <div className="drawer-head">
          <h2>Your Order ({count})</h2>
          <button className="icon-btn" onClick={() => setOpen(false)} aria-label="Close cart">✕</button>
        </div>

        <div className="drawer-list">
          {list.length === 0 && <p className="empty">Your cart is empty. Add something tasty!</p>}
          {list.map((i) => (
            <div className="line" key={i.key}>
              <div>
                <div className="line-name">{i.name}</div>
                <small>Rs. {i.price} each</small>
              </div>
              <div className="qty">
                <button onClick={() => change(i.key, -1)} aria-label="Decrease">−</button>
                <span>{i.qty}</span>
                <button onClick={() => change(i.key, 1)} aria-label="Increase">+</button>
              </div>
            </div>
          ))}
        </div>

        {list.length > 0 && (
          <div className="drawer-foot">
            <input placeholder="Your name (optional)" value={name} onChange={(e) => setName(e.target.value)} />
            <input placeholder="Note / address (optional)" value={note} onChange={(e) => setNote(e.target.value)} />
            <div className="total"><span>Total</span><b>Rs. {total}</b></div>
            <button className="order" onClick={order}>Order on WhatsApp</button>
            <button className="clear" onClick={clear}>Clear cart</button>
          </div>
        )}
      </aside>
    </>
  )
}
