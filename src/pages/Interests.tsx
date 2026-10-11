import React from 'react'
import { motion } from 'framer-motion'

const Interests: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="min-h-[calc(100vh-4rem)] py-8"
    >
      <div className="container mx-auto px-4">
        {/* Interests page header */}
        <section className="page-hero interest-feature">
          <div className="container page-hero-grid">
            <div>
              <p className="eyebrow text-accent-dark font-display uppercase tracking-wider text-sm">
                Guitar image
              </p>
              <h1 className="text-5xl font-display mb-4 leading-tight">
                Guitar, music, gaming, and other personal interests.
              </h1>
              <p className="text-muted text-base max-w-2xl mb-6">
                Outside project work, I'm interested in guitar, music, and games.
              </p>
            </div>
            <figure className="interest-image guitar-image">
              {/* The original had a background gradient, we'll use the actual image */}
              <img src="/images/guitar-close-up.jpg" alt="Guitar close up" />
            </figure>
          </div>
        </section>

        {/* Music notes section */}
        <section className="container section-space">
          <div className="music-notes grid grid-cols-3 gap-4">
            <div className="flex flex-col items-center text-center">
              <span className="text-accent-dark font-medium">C</span>
              <span className="text-muted text-xs">note</span>
            </div>
            <div className="flex flex-col items-center text-center">
              <span className="text-accent-dark font-medium">D</span>
              <span className="text-muted text-xs">note</span>
            </div>
            <div className="flex flex-col items-center text-center">
              <span className="text-accent-dark font-medium">E</span>
              <span className="text-muted text-xs">note</span>
            </div>
            <div className="flex flex-col items-center text-center">
              <span className="text-accent-dark font-medium">F</span>
              <span className="text-muted text-xs">note</span>
            </div>
            <div className="flex flex-col items-center text-center">
              <span className="text-accent-dark font-medium">G</span>
              <span className="text-muted text-xs">note</span>
            </div>
            <div className="flex flex-col items-center text-center">
              <span className="text-accent-dark font-medium">A</span>
              <span className="text-muted text-xs">note</span>
            </div>
            <div className="flex flex-col items-center text-center">
              <span className="text-accent-dark font-medium">B</span>
              <span className="text-muted text-xs">note</span>
            </div>
            <div className="flex flex-col items-center text-center">
              <span className="text-accent-dark font-medium">H</span>
              <span className="text-muted text-xs">note</span>
            </div>
          </div>
        </section>

        {/* Gaming section */}
        <section className="container section-space gaming-section" aria-labelledby="everyday-heading">
          <div className="work-section-heading">
            <p className="eyebrow text-accent-dark font-display uppercase tracking-wider text-sm">
              Gaming
            </p>
            <h2 className="text-4xl font-display mb-4 leading-tight" id="everyday-heading">
              Some of my favorite games
            </h2>
          </div>
          <div className="gaming-grid grid grid-cols-2 gap-6">
            <div className="gaming-card border border-line bg-white overflow-hidden">
              <div className="gaming-image" style={{ background: 'linear-gradient(145deg, #d8e5c9, #eef0df)' }}></div>
              <div className="gaming-card-content p-4">
                <div className="game-title flex items-center gap-3 mb-4">
                  <div className="game-symbol w-10 h-10 flex items-center justify-center bg-accent text-accent-dark font-bold">
                    M
                  </div>
                  <h3 className="text-xl font-display mb-2 leading-tight">Minecraft</h3>
                  <p className="text-muted text-sm">Creative building and exploration</p>
                </div>
              </div>
            </div>
            <div className="gaming-card border border-line bg-white overflow-hidden">
              <div className="gaming-image" style={{ background: 'linear-gradient(145deg, #f3d3c0, #f4e8d6)' }}></div>
              <div className="gaming-card-content p-4">
                <div className="game-title flex items-center gap-3 mb-4">
                  <div className="game-symbol w-10 h-10 flex items-center justify-center bg-peach text-accent-dark font-bold">
                    S
                  </div>
                  <h3 className="text-xl font-display mb-2 leading-tight">Stardew Valley</h3>
                  <p className="text-muted text-sm">Farming and relationship building</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats section */}
        <section className="container section-space">
          <div className="stat-grid grid grid-cols-3 gap-4 text-center">
            <div>
              <div className="bg-paper p-4 h-[69px] flex flex-col items-center justify-center">
                <span className="text-muted text-xs">5+</span>
                <strong className="text-accent-dark font-medium block">Years</strong>
                <span className="text-muted text-xs">of experience</span>
              </div>
            </div>
            <div>
              <div className="bg-paper p-4 h-[69px] flex flex-col items-center justify-center">
                <span className="text-muted text-xs">10+</span>
                <strong className="text-accent-dark font-medium block">Projects</strong>
                <span className="text-muted text-xs">completed</span>
              </div>
            </div>
            <div>
              <div className="bg-paper p-4 h-[69px] flex flex-col items-center justify-center">
                <span className="text-muted text-xs">3</span>
                <strong className="text-accent-dark font-medium block">Languages</strong>
                <span className="text-muted text-xs">learned</span>
              </div>
            </div>
          </div>
        </section>

        {/* Everyday section */}
        <section className="container section-space everyday-heading">
          <div className="work-section-heading">
            <p className="eyebrow text-accent-dark font-display uppercase tracking-wider text-sm">
              Everyday
            </p>
            <h2 className="text-3xl font-display mb-4 leading-tight" id="everyday-heading">
              Daily activities and routines
            </h2>
          </div>
          <div className="everyday-grid grid grid-cols-3 gap-6">
            <article className="border border-line bg-white p-6">
              <div className="everyday-icon w-12 h-12 mb-4 flex items-center justify-center bg-yellow">
                🎵
              </div>
              <h3 className="text-xl font-display mb-4 leading-tight">Music practice</h3>
              <p className="text-muted text-sm">
                Regular guitar practice sessions to improve technique and learn new songs
              </p>
            </article>
            <article className="border border-line bg-white p-6">
              <div className="everyday-icon w-12 h-12 mb-4 flex items-center justify-center bg-blue">
                📚
              </div>
              <h3 className="text-xl font-display mb-4 leading-tight">Reading</h3>
              <p className="text-muted text-sm">
                Reading technical books and literature to expand knowledge and perspective
              </p>
            </article>
            <article className="border border-line bg-white p-6">
              <div className="everyday-icon w-12 h-12 mb-4 flex items-center justify-center bg-peach">
                💻
              </div>
              <h3 className="text-xl font-display mb-4 leading-tight">Coding projects</h3>
              <p className="text-muted text-sm">
                Personal coding projects to explore new technologies and solve problems
              </p>
            </article>
          </div>
        </section>

        {/* Interest notes section */}
        <section className="container section-space interest-notes border-t border-line pt-8">
          <div className="grid grid-cols-2 gap-8">
            <div>
              <p className="eyebrow text-accent-dark font-display uppercase tracking-wider text-sm">
                Interest notes
              </p>
              <p className="text-muted text-sm">
                Regular practice and exploration in these areas helps maintain creativity and technical skills.
              </p>
            </div>
            <div>
              <p className="eyebrow text-accent-dark font-display uppercase tracking-wider text-sm">
                Additional notes
              </p>
              <p className="text-muted text-sm">
                These interests provide balance to technical work and foster creative thinking.
              </p>
            </div>
          </div>
        </section>
      </div>
    </motion.div>
  )
}

export default Interests