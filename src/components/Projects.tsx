const projects = [
  {
    num: '01',
    type: 'Dev · AI',
    name: (
      <>
        <span className="text-white">BUILT</span>
        <span className="text-[rgb(65,161,221)]">DIFF</span>
      </>
    ),
    tagline: (
      <>
        TRAIN DIFFERENT. <span className="text-[rgb(65,161,221)]">LOOK DIFFERENT.</span>
      </>
    ),
    status: '(in progress...)',
    desc: 'Web app powered by AI. An AI-driven workout and physique planning web app with features worth money.',
    stack: ['TS', 'React', 'API'],
    link: 'builtdiff.html',
  },
  {
    num: '02',
    type: 'Video · Creative',
    name: 'Beat-Sync Edits',
    desc: 'TikTok-style beat-sync transition edits with horizontal motion blur, custom color grading, and frame-perfect cuts.',
    stack: ['CapCut', 'Motion FX'],
    link: 'https://www.tiktok.com/@callmenyvra',
  },
  {
    num: '03',
    type: 'School · Project',
    name: 'LibraNet',
    desc: 'An Online library System web app.',
    stack: ['CSS', 'HTML'],
    link: 'Main Libranet/libranet-v3.html',
  },
  {
    num: '04',
    type: 'Course · Field Portfolio',
    name: 'Penetration Testing',
    desc: 'Learning penetration testing techniques and tools.',
    stack: ['Networking', 'Penetration Testing'],
    link: '#',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="max-w-6xl mx-auto px-6 md:px-12 py-24">
      <div className="flex items-center gap-4 mb-12">
        <span className="text-green font-mono text-sm">02</span>
        <h2 className="font-sans font-extrabold text-2xl">Projects</h2>
        <div className="flex-1 h-px bg-border" />
      </div>
      <div className="grid md:grid-cols-2 gap-5">
        {projects.map((p) => (
          <div
            key={p.num}
            className="interactive border border-border bg-surface/60 p-6 flex flex-col justify-between hover:border-green-dim transition-colors"
          >
            <div>
              <span className="text-muted text-xs">{p.num}</span>
              <div className="text-[10px] uppercase tracking-widest text-muted mb-2">{p.type}</div>
              <div className="font-sans font-extrabold text-xl mb-1">{p.name}</div>
              {p.tagline && <div className="text-xs text-muted mb-1">{p.tagline}</div>}
              {p.status && <div className="text-xs italic text-green mb-2">{p.status}</div>}
              <p className="text-muted text-sm leading-relaxed mt-2 mb-4">{p.desc}</p>
            </div>
            <div className="flex items-center justify-between mt-2">
              <div className="flex flex-wrap gap-2">
                {p.stack.map((t) => (
                  <span
                    key={t}
                    className="text-[10px] uppercase tracking-wide border border-green-dim text-green px-2 py-1"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <a
                href={p.link}
                target="_blank"
                rel="noreferrer"
                className="text-green text-xs uppercase tracking-wide hover:underline"
              >
                View →
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
