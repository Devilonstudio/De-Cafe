import { LOGO } from '../config.js'

// Banner: put your image at public/images/banner.jpg (any size, wide ~1600x700 works best).
// If the file is missing, the brown gradient shows instead. Change the extension here if you use .png/.webp.
const BANNER = `${import.meta.env.BASE_URL}images/banner.jpg`

export default function Hero() {
  return (
    <section
      className="hero"
      id="top"
      style={{
        backgroundImage: `linear-gradient(rgba(60,28,10,.12), rgba(60,28,10,.28)), url(${BANNER}), linear-gradient(135deg, #4a2511, #6b3a1e)`,
        textShadow: '0 2px 14px rgba(0,0,0,.65)',
      }}
    >
      <img src={LOGO} alt="De Café Bean Corner" className="hero-logo" />
      <div className="script">Good Food, Good Mood</div>
      <h1>Fresh Food, Great Taste</h1>
      <p>Coffee, loaded fries, crispy wings, burgers and sweet bakes — now serving in Quetta.</p>
      <a className="cta" href="#menu">Order Now</a>
    </section>
  )
}