import { useState } from 'react'
import { useCart } from '../CartContext.jsx'
import { LOGO } from '../config.js'

const EXTS = ['jpg', 'jpeg', 'png', 'webp']

// Tries public/images/items/<id>.jpg / .jpeg / .png / .webp, else shows a placeholder.
function ItemImage({ id, name }) {
  const [i, setI] = useState(0)
  const base = `${import.meta.env.BASE_URL}images/items/${id}`

  if (i >= EXTS.length) {
    return (
      <div className="ph" title={`${id}.jpg`}>
        <img src={LOGO} alt="" className="ph-logo" />
        {import.meta.env.DEV && <span className="ph-name">{id}.jpg</span>}
      </div>
    )
  }
  return (
    <img
      className="item-img"
      src={`${base}.${EXTS[i]}`}
      alt={name}
      loading="lazy"
      onError={() => setI(i + 1)}
    />
  )
}

export default function MenuItem({ item }) {
  const { add } = useCart()
  const options = item.sizes ?? [{ label: '', price: item.price }]

  return (
    <article className="item">
      <ItemImage id={item.id} name={item.name} />
      <div className="item-body">
        <h3>{item.name}</h3>
        {options.map((o) => (
          <div className="row" key={o.label}>
            <span className="price">
              {o.label && <small>{o.label} · </small>}Rs. {o.price}
            </span>
            <button
              className="add"
              onClick={() =>
                add(`${item.id}|${o.label}`, o.label ? `${item.name} (${o.label})` : item.name, o.price)
              }
            >
              + Add
            </button>
          </div>
        ))}
      </div>
    </article>
  )
}
