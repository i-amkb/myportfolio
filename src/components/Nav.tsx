export default function Nav() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-[100] flex items-center justify-between px-12 py-5 border-b border-border bg-bg/85 backdrop-blur-md">
      <div className="font-sans font-extrabold text-lg text-green tracking-wide">
        ADEWALE<span className="text-muted">.dev</span>
      </div>
      <ul className="hidden md:flex gap-8 list-none">
        {['Skills', 'Projects', 'About', 'Contact'].map((item) => (
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
      <div className="flex items-center gap-2 text-xs text-muted">
        <span className="w-1.5 h-1.5 rounded-full bg-green animate-pulse" />
        Available
      </div>
    </nav>
  )
}
