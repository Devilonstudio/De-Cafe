import { createContext, useContext, useEffect, useMemo, useReducer, useState } from 'react'

const CartCtx = createContext(null)
const KEY = 'decafe-cart-v1'

function reducer(state, a) {
  switch (a.type) {
    case 'add': {
      const cur = state[a.key]
      return { ...state, [a.key]: cur ? { ...cur, qty: cur.qty + 1 } : { name: a.name, price: a.price, qty: 1 } }
    }
    case 'change': {
      const cur = state[a.key]
      if (!cur) return state
      const qty = cur.qty + a.delta
      if (qty <= 0) {
        const { [a.key]: _, ...rest } = state
        return rest
      }
      return { ...state, [a.key]: { ...cur, qty } }
    }
    case 'clear':
      return {}
    default:
      return state
  }
}

function load() {
  try {
    return JSON.parse(localStorage.getItem(KEY)) || {}
  } catch {
    return {}
  }
}

export function CartProvider({ children }) {
  const [items, dispatch] = useReducer(reducer, undefined, load)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    try {
      localStorage.setItem(KEY, JSON.stringify(items))
    } catch {}
  }, [items])

  const value = useMemo(() => {
    const list = Object.entries(items).map(([key, v]) => ({ key, ...v }))
    return {
      list,
      count: list.reduce((s, i) => s + i.qty, 0),
      total: list.reduce((s, i) => s + i.qty * i.price, 0),
      open,
      setOpen,
      add: (key, name, price) => dispatch({ type: 'add', key, name, price }),
      change: (key, delta) => dispatch({ type: 'change', key, delta }),
      clear: () => dispatch({ type: 'clear' }),
    }
  }, [items, open])

  return <CartCtx.Provider value={value}>{children}</CartCtx.Provider>
}

export const useCart = () => useContext(CartCtx)
