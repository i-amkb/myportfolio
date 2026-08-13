const info = [
  { label: 'Name', val: 'Adewale Khalid Boluwatife' },
  { label: 'Alias', val: 'KB' },
  { label: 'Location', val: 'Nigeria 🇳🇬' },
  { label: 'Studying', val: 'Computer Sci / Cybersec, Year 2' },
  { label: 'Current focus', val: 'Cybersecurity fundamentals, Pentesting + Freelance video editing' },
  { label: 'Interests', val: 'Anime · Gaming · Fitness · Editing' },
  { label: 'Availability', val: 'Open to freelance & collabs', highlight: true },
]

export default function About() {
  return (
    <section id="about" className="max-w-6xl mx-auto px-6 md:px-12 py-24">
      <div className="flex items-center gap-4 mb-12">
        <span className="text-green font-mono text-sm">03</span>
        <h2 className="font-sans font-extrabold text-2xl">About</h2>
        <div className="flex-1 h-px bg-border" />
      </div>
      <div className="grid md:grid-cols-2 gap-10">
        <div>
          <p className="text-sm leading-loose text-text/90 mb-4">
            I am Adewale Khalid Boluwatife, an 18-year-old <strong>computing student</strong> based in
            Nigeria, currently in my second year. I write codes, diving into security concepts,
            editing videos, and staying curious about how systems actually work.
          </p>
          <p className="text-sm leading-loose text-text/90 mb-4">
            I'm analytical, deliberate, and I take my craft seriously. Whether it's getting the
            right result or landing a clean transition in an edit.
          </p>
          <p className="text-sm leading-loose text-text/90 mb-6">
            Outside of tech: workouts on weekends, anime, editing, games and music when it's time
            to decompress, and the occasional random searches at 2am.
          </p>
          <div className="border border-border bg-surface p-5 text-sm leading-loose">
            <span className="text-green">→</span> <span className="text-muted">who am i?</span>
            <br />
            <span className="text-white">KB</span> — dev / editor / learner / student jnr pentester
            <br />
            <span className="text-green">→</span> <span className="text-muted">Interests</span>
            <br />
            <span className="text-white">Cybersec, AI, Anime, Fitness, Freelance</span>
            <br />
            <span className="text-green">→</span> <span className="text-muted">STATUS</span>
            <br />
            <span className="text-white">learning and building.</span>
            <span className="text-green blink" />
          </div>
        </div>
        <div className="flex flex-col divide-y divide-border border-t border-border">
          {info.map((row) => (
            <div key={row.label} className="flex justify-between py-3 text-sm">
              <span className="text-muted uppercase text-xs tracking-wide">{row.label}</span>
              <span className={row.highlight ? 'text-green' : 'text-text'}>{row.val}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
