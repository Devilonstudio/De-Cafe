import MenuItem from './MenuItem.jsx'

export default function MenuSection({ category }) {
  return (
    <section id={category.id} className="section">
      <h2>
        <span aria-hidden="true">{category.icon}</span> {category.category}
      </h2>
      <div className="grid">
        {category.items.map((item) => (
          <MenuItem key={item.id} item={item} />
        ))}
      </div>
    </section>
  )
}
