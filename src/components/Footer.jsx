import { CAFE, LOGO } from '../config.js'

export default function Footer() {
  return (
    <footer className="footer" id="visit">
      <img src={LOGO} alt="" className="footer-logo" />
      <h2>Visit Us</h2>
      <div className="branches">
        {CAFE.branches.map((b) => (
          <div key={b.name}>
            <b>{b.name}</b>
            <p>📍 {b.address}</p>
          </div>
        ))}
      </div>
      <p className="phones">
        WhatsApp:{' '}
        {CAFE.phones.map((p, i) => (
          <span key={p}>
            {i > 0 && ' · '}
            <a href={`https://wa.me/92${p.replace(/\D/g, '').slice(1)}`} target="_blank" rel="noopener">{p}</a>
          </span>
        ))}
      </p>
      <small>© {new Date().getFullYear()} {CAFE.name} – {CAFE.tagline}</small>
    </footer>
  )
}
