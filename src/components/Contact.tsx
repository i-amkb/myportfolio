const links = [
  { label: 'Send an Email →', href: 'mailto:watife.adewale@gmail.com', icon: '', primary: true },
  { label: 'GitHub', href: 'https://github.com/i-amkb', icon: 'fa-github' },
  { label: 'Twitter / X', href: 'https://x.com/heiskb_', icon: 'fa-x-twitter' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/khalid-adewale', icon: 'fa-linkedin' },
  { label: 'WhatsApp', href: 'https://wa.me/09033907631', icon: 'fa-whatsapp' },
]

export default function Contact() {
  return (
    <section id="contact" className="max-w-6xl mx-auto px-6 md:px-12 py-24">
      <div className="flex items-center gap-4 mb-6">
        <span className="text-green font-mono text-sm">04</span>
        <h2 className="font-sans font-extrabold text-2xl">Contact</h2>
      </div>
      <p className="text-muted text-sm mb-8">
        Got a collab idea, or just want to link? I'm reachable. Don't be a stranger.
      </p>
      <div className="flex flex-wrap gap-4">
        {links.map((l) => (
          <a
            key={l.label}
            href={l.href}
            target="_blank"
            rel="noreferrer"
            className={
              'interactive inline-flex items-center gap-2 px-7 py-3 text-xs tracking-[0.1em] uppercase border transition-all ' +
              (l.primary
                ? 'border-green bg-green text-bg hover:bg-transparent hover:text-green hover:shadow-[0_0_20px_var(--color-green-dim),inset_0_0_20px_var(--color-green-dim)]'
                : 'border-green-dim text-green hover:border-green hover:shadow-[0_0_15px_var(--color-green-dim)]')
            }
          >
            {l.icon && <i className={`fab ${l.icon}`} />}
            {l.label}
          </a>
        ))}
      </div>
    </section>
  )
}
