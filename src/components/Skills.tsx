const skills = [
  {
    icon: '⌨️',
    name: 'Frontend Dev',
    desc: 'Building web apps.',
    tags: ['HTML/CSS', 'React', 'TypeScript'],
  },
  {
    icon: '🔐',
    name: 'Cybersecurity',
    desc: 'Learning offensive security and networking fundamentals.',
    tags: ['Penetration Testing', 'Kali Linux'],
  },
  {
    icon: '🎬',
    name: 'Video Editing',
    desc: 'Beat-sync edits, color grading, motion effects. From CapCut to your feed.',
    tags: ['CapCut', 'Color Grade', 'Motion FX', 'Beat Sync'],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="max-w-6xl mx-auto px-6 md:px-12 py-24">
      <div className="flex items-center gap-4 mb-12">
        <span className="text-green font-mono text-sm">01</span>
        <h2 className="font-sans font-extrabold text-2xl">Skills</h2>
        <div className="flex-1 h-px bg-border" />
      </div>
      <div className="grid md:grid-cols-3 gap-5">
        {skills.map((s) => (
          <div
            key={s.name}
            className="interactive border border-border bg-surface/60 p-6 hover:border-green-dim transition-colors"
          >
            <span className="text-3xl mb-3 block">{s.icon}</span>
            <div className="font-sans font-bold text-lg mb-2">{s.name}</div>
            <p className="text-muted text-sm mb-4 leading-relaxed">{s.desc}</p>
            <div className="flex flex-wrap gap-2">
              {s.tags.map((t) => (
                <span
                  key={t}
                  className="text-[10px] uppercase tracking-wide border border-green-dim text-green px-2 py-1"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
