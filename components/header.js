import Link from 'next/link'
import { useRouter } from 'next/router'

export default function Header() {
  // ナビバーのリンクをURL(パス)によって見た目を変化させる
  // URLの判定には正規表現を使用
  let navLinkStyle = {
    "home": "nav-link",
    "about": "nav-link",
    "works": "nav-link",
    "skill": "nav-link"
  }

  // パス取得
  const path = useRouter().pathname

  if (/^\/$/.test(path)) {
    navLinkStyle.home = "nav-link active"
  } else if (/^\/about/.test(path)) {
    navLinkStyle.about = "nav-link active"
  } else if (/^\/works/.test(path)) {
    navLinkStyle.works = "nav-link active"
  } else if (/^\/skill/.test(path)) {
    navLinkStyle.skill = "nav-link active"
  }

  return (
    <header>
      <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand">Keito Yamada&#39;s Portfolio</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link href="/">
                  <a className={navLinkStyle.home}>Home</a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/about">
                  <a className={navLinkStyle.about}>About</a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/works">
                  <a className={navLinkStyle.works}>Works</a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/skill">
                  <a className={navLinkStyle.skill}>Skill</a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}
