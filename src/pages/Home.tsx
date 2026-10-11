import React from 'react'
import { motion } from 'framer-motion'

const Home: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="min-h-[calc(100vh-4rem)] py-8"
    >
      <div className="container mx-auto px-4">
        {/* Home content will go here - preserving original structure */}
        <section className="hero home-hero">
          <div className="container hero-grid">
            <div className="hero-copy">
              <p className="eyebrow text-accent-dark font-display uppercase tracking-wider text-sm">
                Student in Indonesia · data &amp; machine learning
              </p>
              <h1 className="text-5xl font-display mb-4 leading-tight">
                Learning by building <span className="text-accent-dark font-display">with data.</span>
              </h1>
              <p className="text-muted text-base max-w-2xl mb-6">
                I'm Vado. I use student projects to explore data and machine learning, then share what I learn.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="/work" className="btn btn-dark hover:bg-accent-dark/90 transition-all duration-300">
                  See my projects <span className="ml-2">→</span>
                </a>
                <a href="/about" className="btn btn-text hover:text-accent-dark transition-colors duration-300">
                  About me <span className="ml-2">→</span>
                </a>
              </div>
            </div>
            <figure className="image-slot hero-image">
              <img src="/images/website-pfp.jpg" alt="Vado smiling at a restaurant while holding a forkful of food" />
            </figure>
          </div>
        </section>

        {/* Work section - projects */}
        <section className="home-work section-space" id="work">
          <div className="container">
            <div className="home-work-heading">
              <p className="eyebrow text-accent-dark font-display uppercase tracking-wider text-sm">
                Notebook explorations
              </p>
              <h2 className="text-4xl font-display mb-4 leading-tight">
                Three questions, three notebooks.
              </h2>
              <p className="text-muted text-base max-w-xl mb-6">
                See the data, the experiments, and what each notebook actually demonstrates.
              </p>
            </div>
            <div className="home-project-list space-y-6">
              {/* Project 1 */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1, duration: 0.5 }}
                className="home-project grid grid-cols-[145px_minmax(0,1fr)_auto] items-center gap-6 py-4 border-t"
              >
                <img
                  className="home-project-thumb w-36 h-28 p-2 border border-line bg-white object-contain"
                  src="/images/salary-score-relationship.png"
                  alt="Scatter plot comparing test scores and interview scores, with marginal histograms."
                />
                <div className="space-y-2">
                  <p className="project-number text-accent-dark font-display text-xs uppercase tracking-wider">
                    DATA · EXPLORATION
                  </p>
                  <h3 className="text-2xl font-display mb-2 leading-tight">Predict My Salary</h3>
                  <p className="text-muted text-sm">
                    Explores score relationships in a salary dataset; no predictive model is trained in the notebook.
                  </p>
                </div>
                <a
                  href="https://colab.research.google.com/drive/1g-7BsNwHxDajgNjqvqEuo2ggfZWutv5k?usp=sharing"
                  className="btn btn-text hover:text-accent-dark transition-colors duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  See notebook <span className="ml-2">→</span>
                </a>
              </motion.div>

              {/* Project 2 */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="home-project grid grid-cols-[145px_minmax(0,1fr)_auto] items-center gap-6 py-4 border-t"
              >
                <img
                  className="home-project-thumb w-36 h-28 p-2 border border-line bg-white object-contain"
                  src="/images/gender-label-distribution.png"
                  alt="Bar chart of the image dataset's two supplied labels, male and female."
                />
                <div className="space-y-2">
                  <p className="project-number text-accent-dark font-display text-xs uppercase tracking-wider">
                    IMAGE LABELS
                  </p>
                  <h3 className="text-2xl font-display mb-2 leading-tight">Gender Recognition</h3>
                  <p className="text-muted text-sm">
                    Explores image labels and defines a CNN; it does not include model training or evaluation.
                  </p>
                </div>
                <a
                  href="https://colab.research.google.com/drive/1TIrKEbPm9v6PAz5Lz60dUWpAJP3hGUTg?usp=sharing"
                  className="btn btn-text hover:text-accent-dark transition-colors duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  See notebook <span className="ml-2">→</span>
                </a>
              </motion.div>

              {/* Project 3 */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="home-project grid grid-cols-[145px_minmax(0,1fr)_auto] items-center gap-6 py-4 border-t"
              >
                <img
                  className="home-project-thumb w-36 h-28 p-2 border border-line bg-white object-contain"
                  src="/images/spam-confusion-matrix.png"
                  alt="Confusion matrix comparing true and predicted labels in the held-out test split."
                />
                <div className="space-y-2">
                  <p className="project-number text-accent-dark font-display text-xs uppercase tracking-wider">
                    TEXT CLASSIFICATION
                  </p>
                  <h3 className="text-2xl font-display mb-2 leading-tight">Scam Detector</h3>
                  <p className="text-muted text-sm">
                    Trains an SMS spam classifier and checks its predictions against held-out data.
                  </p>
                </div>
                <a
                  href="https://colab.research.google.com/drive/1DdhDHu1FM9u1hnt-fFu9qPcnGT-LyWn4?usp=sharing"
                  className="btn btn-text hover:text-accent-dark transition-colors duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  See notebook <span className="ml-2">→</span>
                </a>
              </motion.div>
            </div>

            <div className="mt-6 text-center">
              <a
                href="/work"
                className="btn btn-text hover:text-accent-dark transition-colors duration-300"
              >
                More about the projects <span className="ml-2">→</span>
              </a>
            </div>
          </div>
        </section>

        {/* About section snippet */}
        <section className="container home-about">
          <p className="text-muted">
            Outside project work, I'm interested in guitar, music, and games.
          </p>
          <div className="flex flex-wrap gap-4 mt-4">
            <a
              href="/about"
              className="btn btn-text hover:text-accent-dark transition-colors duration-300"
            >
              About me <span className="ml-2">→</span>
            </a>
            <a
              href="/interests"
              className="btn btn-text hover:text-accent-dark transition-colors duration-300"
            >
              Other interests <span className="ml-2">→</span>
            </a>
          </div>
        </section>

        {/* Contact section */}
        <section className="container contact-strip" id="contact">
          <div className="space-y-4">
            <p className="eyebrow text-accent-dark font-display uppercase tracking-wider text-sm">
              Contact
            </p>
            <h2 className="text-3xl font-display mb-4 leading-tight">
              Have an opportunity in mind?
            </h2>
          </div>
          <div className="contact-strip-links">
            <p className="text-muted">
              The best way to reach me is through LinkedIn.
            </p>
            <a
              href="https://www.linkedin.com/in/raden-mahaghaniyy-367142322/"
              className="btn btn-dark hover:bg-accent-dark/90 transition-all duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              Contact me on LinkedIn <span className="ml-2">→</span>
            </a>
          </div>
        </section>
      </div>
    </motion.div>
  )
}

export default Home