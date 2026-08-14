import { useState } from 'react'

const links = ['Skills', 'Projects', 'About', 'Contact']

export default function Nav() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-[100] flex items-center justify-between px-6 md:px-12 py-4 md:py-5 border-b border-border bg-bg/85 backdrop-blur-md">
      <div className="font-sans font-extrabold text-lg text-green tracking-wide">
        KHALID<span className="text-muted">.dev</span>
      </div>

      <ul className="hidden md:flex gap-8 list-none">
        {links.map((item) => (
          <li key={item}>
            <a
              href={`#${item.toLowerCase()}`}
              className="text-muted text-xs tracking-[0.15em] uppercase hover:text-green transition-colors"
            >
              {item}
            </a>
          </li>
        ))}
      </ul>

      <div className="hidden md:flex items-center gap-2 text-xs text-muted">
        <span className="w-1.5 h-1.5 rounded-full bg-green animate-pulse" />
        Available
      </div>

      <button
        className="md:hidden flex flex-col gap-1.5 p-2 -mr-2"
        aria-label="Toggle menu"
        aria-expanded={open}
        onClick={() => setOpen((o) => !o)}
      >
        <span className={`block w-6 h-[2px] bg-green transition-transform ${open ? 'translate-y-2 rotate-45' : ''}`} />
        <span className={`block w-6 h-[2px] bg-green transition-opacity ${open ? 'opacity-0' : ''}`} />
        <span className={`block w-6 h-[2px] bg-green transition-transform ${open ? '-translate-y-2 -rotate-45' : ''}`} />
      </button>

      {open && (
        <ul className="md:hidden absolute top-full left-0 right-0 flex flex-col bg-bg border-b border-border list-none">
          {links.map((item) => (
            <li key={item} className="border-t border-border">
              <a
                href={`#${item.toLowerCase()}`}
                onClick={() => setOpen(false)}
                className="block px-6 py-4 text-sm tracking-[0.1em] uppercase text-muted hover:text-green transition-colors"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  )
}