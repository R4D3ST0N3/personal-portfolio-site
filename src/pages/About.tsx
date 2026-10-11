import React from 'react'
import { motion } from 'framer-motion'

const About: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="min-h-[calc(100vh-4rem)] py-8"
    >
      <div className="container mx-auto px-4">
        {/* About page header */}
        <section className="page-hero about-page-hero">
          <div className="container page-hero-grid about-page-grid">
            <div>
              <p className="eyebrow text-accent-dark font-display uppercase tracking-wider text-sm">
                A little about me
              </p>
              <h1 className="text-5xl font-display mb-4 leading-tight">
                Curious about how things <span className="text-accent-dark font-display">work.</span>
              </h1>
              <p className="text-muted text-base max-w-2xl mb-6">
                I'm Vado, an Indonesian high-school student interested in engineering, technology, and creative work. I learn by trying things, asking questions, and improving what I make.
              </p>
            </div>
            <figure className="about-portrait">
              <img src="/images/website-pfp.jpg" width="617" height="821" alt="Vado smiling at a restaurant while holding a forkful of food" />
            </figure>
          </div>
        </section>

        {/* How I'm growing section */}
        <section className="container story-intro section-space" aria-labelledby="story-heading">
          <div className="story-copy">
            <p className="eyebrow text-accent-dark font-display uppercase tracking-wider text-sm">
              How I'm growing
            </p>
            <h2 className="text-4xl font-display mb-4 leading-tight" id="story-heading">
              Learning by building—and showing up.
            </h2>
            <p className="lead text-lg font-medium text-ink mb-4">
              Engineering and computing let me turn questions into experiments.
            </p>
            <p className="text-muted text-sm">
              I also enjoy shaping an idea, communicating it clearly, and making things with other people. Earlier schoolwork showed strengths in ICT, music, and physical education; I'm working toward more consistent habits in Mathematics and Science.
            </p>
            <p className="text-muted text-sm">
              I've prepared for the Singapore Math Competition and American Mathematics Competitions. I focus well independently and am practicing closer attention to instructions and speaking up in groups.
            </p>
          </div>
          <div className="profile-facts space-y-4">
            <div className="flex items-start">
              <span className="eyebrow text-accent-dark font-display uppercase tracking-wider text-xs w-20">
                Current focus
              </span>
              <p className="text-muted text-sm">Engineering, technology, and learning through projects</p>
            </div>
            <div className="flex items-start">
              <span className="eyebrow text-accent-dark font-display uppercase tracking-wider text-xs w-20">
                Long-term goal
              </span>
              <p className="text-muted text-sm">Study engineering in Japan; Hokkaido University is one goal I'm working toward</p>
            </div>
            <div className="flex items-start">
              <span className="eyebrow text-accent-dark font-display uppercase tracking-wider text-xs w-20">
                Languages
              </span>
              <p className="text-muted text-sm">Indonesian and English; currently learning Japanese and Mandarin</p>
            </div>
          </div>
        </section>

        {/* Beyond class section */}
        <section className="soft-band section-space" aria-labelledby="chapters-heading">
          <div className="container">
            <div className="section-intro">
              <div>
                <p className="eyebrow text-accent-dark font-display uppercase tracking-wider text-xs">
                  Beyond class
                </p>
                <h2 className="text-3xl font-display mb-4 leading-tight" id="chapters-heading">
                  What keeps me curious.
                </h2>
              </div>
              <p className="text-muted text-sm">
                Technical, collaborative, and creative work all have a place.
              </p>
            </div>
            <div className="about-highlights grid gap-6 md:grid-cols-3">
              <div className="about-highlight border-t border-line pt-4">
                <h3 className="text-xl font-display mb-2 leading-tight">Making and learning</h3>
                <p className="text-muted text-sm">
                  Programming, data, computer vision, UI prototyping, and engineering-style problems—often through independent experiments.
                </p>
              </div>
              <div className="about-highlight border-t border-line pt-4">
                <h3 className="text-xl font-display mb-2 leading-tight">Working with people</h3>
                <p className="text-muted text-sm">
                  Model United Nations on cybersecurity and marine biodiversity, plus student-council campaign media. I'm reserved at first, and more expressive once comfortable.
                </p>
              </div>
              <div className="about-highlight border-t border-line pt-4">
                <h3 className="text-xl font-display mb-2 leading-tight">Creative outlets</h3>
                <p className="text-muted text-sm">
                  Guitar, music, video editing, photography, and storytelling give me other ways to practice and share ideas.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </motion.div>
  )
}

export default About