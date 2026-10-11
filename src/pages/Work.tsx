import React from 'react'
import { motion } from 'framer-motion'

const Work: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="min-h-[calc(100vh-4rem)] py-8"
    >
      <div className="container mx-auto px-4">
        {/* Work page header */}
        <section className="page-hero work-page-hero">
          <div className="container page-hero-grid">
            <div>
              <p className="eyebrow text-accent-dark font-display uppercase tracking-wider text-sm">
                Student projects
              </p>
              <h1 className="text-5xl font-display mb-4 leading-tight">
                Three notebooks, three kinds of <span className="text-accent-dark font-display">questions.</span>
              </h1>
              <p className="text-muted text-base max-w-2xl mb-6">
                Score data, image labels, and SMS spam—explored with different levels of evidence.
              </p>
            </div>
          </div>
        </section>

        {/* Project notebooks section */}
        <section className="container section-space work-section" aria-labelledby="project-heading">
          <div className="work-section-heading">
            <p className="eyebrow text-accent-dark font-display uppercase tracking-wider text-sm">
              Project notebooks
            </p>
            <h2 className="text-4xl font-display mb-4 leading-tight" id="project-heading">
              Follow the evidence.
            </h2>
            <p className="text-muted text-sm">
              Charts come from the linked notebooks; descriptions distinguish exploration from evaluated results.
            </p>
          </div>
          <div className="work-project-list space-y-6">
            {/* Salary notebook */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="work-project border-t pt-6"
              id="salary-notebook"
            >
              <div className="grid grid-cols-[220px_minmax(0,1.3fr)] items-center gap-8">
                <figure className="project-figure border border-line bg-white overflow-hidden">
                  <img
                    src="/images/salary-score-relationship.png"
                    width="589"
                    height="589"
                    loading="lazy"
                    alt="Scatter plot of interview score versus test score, with marginal histograms."
                    className="w-full h-[190px] object-contain p-2"
                  />
                  <figcaption className="text-xs text-muted border-t border-line px-4 py-2">
                    Notebook output · score relationship
                  </figcaption>
                </figure>
                <div className="work-project-copy space-y-4">
                  <p className="project-number text-accent-dark font-display text-xs uppercase tracking-wider">
                    DATA · EXPLORATION
                  </p>
                  <h3 className="text-3xl font-display mb-4 leading-tight">Predict My Salary</h3>
                  <p className="text-muted text-sm">
                    Explores how experience, test scores, and interview scores relate to salary. The notebook does not train or evaluate a predictive model.
                  </p>
                  <details className="case-study-notes border-t border-line pt-4">
                    <summary className="text-accent-dark font-medium cursor-pointer">
                      Case-study details to add
                    </summary>
                    <p className="text-muted text-sm mt-2">
                      Describe the data source, your contribution, and what you learned from the exploration.
                    </p>
                  </details>
                  <a
                    href="https://colab.research.google.com/drive/1g-7BsNwHxDajgNjqvqEuo2ggfZWutv5k?usp=sharing"
                    className="btn btn-text hover:text-accent-dark transition-colors duration-300"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Open the notebook <span className="ml-2">→</span>
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Gender notebook */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="work-project border-t pt-6"
              id="gender-notebook"
            >
              <div className="grid grid-cols-[220px_minmax(0,1.3fr)] items-center gap-8">
                <figure className="project-figure border border-line bg-white overflow-hidden">
                  <img
                    src="/images/gender-label-distribution.png"
                    width="879"
                    height="479"
                    loading="lazy"
                    alt="Bar chart showing counts for the dataset's two supplied labels: male and female."
                    className="w-full h-[190px] object-contain p-2"
                  />
                  <figcaption className="text-xs text-muted border-t border-line px-4 py-2">
                    Dataset label counts · not model results
                  </figcaption>
                </figure>
                <div className="work-project-copy space-y-4">
                  <p className="project-number text-accent-dark font-display text-xs uppercase tracking-wider">
                    IMAGE LABELS
                  </p>
                  <h3 className="text-3xl font-display mb-4 leading-tight">Gender Recognition</h3>
                  <p className="text-muted text-sm">
                    Explores 48×48 grayscale face images and defines a CNN, but includes no training or evaluation. Its two dataset labels do not represent gender identity.
                  </p>
                  <details className="case-study-notes border-t border-line pt-4">
                    <summary className="text-accent-dark font-medium cursor-pointer">
                      Case-study details to add
                    </summary>
                    <p className="text-muted text-sm mt-2">
                      Explain your contribution and what you learned; do not present the experiment as a validated recognition system.
                    </p>
                  </details>
                  <a
                    href="https://colab.research.google.com/drive/1TIrKEbPm9v6PAz5Lz60dUWpAJP3hGUTg?usp=sharing"
                    className="btn btn-text hover:text-accent-dark transition-colors duration-300"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Open the notebook <span className="ml-2">→</span>
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Spam detector notebook */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="work-project border-t pt-6"
              id="scam-notebook"
            >
              <div className="grid grid-cols-[220px_minmax(0,1.3fr)] items-center gap-8">
                <figure className="project-figure border border-line bg-white overflow-hidden">
                  <img
                    src="/images/spam-confusion-matrix.png"
                    width="507"
                    height="436"
                    loading="lazy"
                    alt="Confusion matrix for the held-out test split, with true labels on rows and predicted labels on columns."
                    className="w-full h-[190px] object-contain p-2"
                  />
                  <figcaption className="text-xs text-muted border-t border-line px-4 py-2">
                    Notebook output · held-out test split
                  </figcaption>
                </figure>
                <div className="work-project-copy space-y-4">
                  <p className="project-number text-accent-dark font-display text-xs uppercase tracking-wider">
                    TEXT CLASSIFICATION
                  </p>
                  <h3 className="text-3xl font-display mb-4 leading-tight">Scam Detector</h3>
                  <p className="text-muted text-sm">
                    Trains a TF-IDF and logistic-regression SMS spam classifier, then compares its predictions with held-out labels.
                  </p>
                  <details className="case-study-notes border-t border-line pt-4">
                    <summary className="text-accent-dark font-medium cursor-pointer">
                      Case-study details to add
                    </summary>
                    <p className="text-muted text-sm mt-2">
                      Describe the data source, your contribution, and the model's errors and limitations.
                    </p>
                  </details>
                  <a
                    href="https://colab.research.google.com/drive/1DdhDHu1FM9u1hnt-fFu9qPcnGT-LyWn4?usp=sharing"
                    className="btn btn-text hover:text-accent-dark transition-colors duration-300"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Open the notebook <span className="ml-2">→</span>
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Other technical explorations section */}
        <section className="container profile-work-section" aria-labelledby="explorations-heading">
          <div className="work-section-heading">
            <p className="eyebrow text-accent-dark font-display uppercase tracking-wider text-sm">
              Other technical explorations
            </p>
            <h2 className="text-3xl font-display mb-4 leading-tight" id="explorations-heading">
              Learning across disciplines.
            </h2>
            <p className="text-muted text-sm">
              Alongside the notebooks, I've explored engineering problems, data structures, and creative technology.
            </p>
          </div>
          <div className="exploration-list space-y-4">
            <div className="flex items-start space-x-4">
              <span className="project-number text-accent-dark font-display text-xs uppercase tracking-wider">
                SIMULATION
              </span>
              <div>
                <h3 className="text-xl font-display mb-2 leading-tight">Traffic flow</h3>
                <p className="text-muted text-sm">
                  A traffic-flow simulation project exploring how movement through a system can be modeled.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <span className="project-number text-accent-dark font-display text-xs uppercase tracking-wider">
                SYSTEM DESIGN
              </span>
              <div>
                <h3 className="text-xl font-display mb-2 leading-tight">School IoT database architecture</h3>
                <p className="text-muted text-sm">
                  An architecture project focused on organizing data for a school Internet of Things system.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <span className="project-number text-accent-dark font-display text-xs uppercase tracking-wider">
                MODELING
              </span>
              <div>
                <h3 className="text-xl font-display mb-2 leading-tight">Desmos graphing and modeling</h3>
                <p className="text-muted text-sm">
                  Using graphs and mathematical models to explore and communicate ideas.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Skills section */}
        <section className="container soft-band section-space skills-section" aria-labelledby="skills-heading">
          <div className="container">
            <div className="section-intro">
              <div>
                <p className="eyebrow text-accent-dark font-display uppercase tracking-wider text-sm">
                  Tools and practice
                </p>
                <h2 className="text-4xl font-display mb-4 leading-tight" id="skills-heading">
                  What I use to make things.
                </h2>
              </div>
              <p className="text-muted text-sm">
                A working toolkit built through school assignments, experiments, and creative projects.
              </p>
            </div>
            <div className="skills-grid grid grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-display mb-4 leading-tight">Programming &amp; web</h3>
                <p className="text-muted text-sm">
                  Python, C#, HTML, CSS, JavaScript
                </p>
              </div>
              <div>
                <h3 className="text-xl font-display mb-4 leading-tight">Data &amp; prototyping</h3>
                <p className="text-muted text-sm">
                  Pandas, NumPy, OpenCV, CustomTkinter, Figma, Desmos
                </p>
              </div>
              <div>
                <h3 className="text-xl font-display mb-4 leading-tight">Creative production</h3>
                <p className="text-muted text-sm">
                  Filmora, CapCut, After Effects, DaVinci Resolve, OBS Studio
                </p>
              </div>
              <div>
                <h3 className="text-xl font-display mb-4 leading-tight">Tools &amp; platforms</h3>
                <p className="text-muted text-sm">
                  VS Code, GitHub, video editing, content creation, and Minecraft server tools
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Collaboration and contribution section */}
        <section className="container profile-work-section" aria-labelledby="collaboration-heading">
          <div className="work-section-heading">
            <p className="eyebrow text-accent-dark font-display uppercase tracking-wider text-sm">
              Collaboration and contribution
            </p>
            <h2 className="text-3xl font-display mb-4 leading-tight" id="collaboration-heading">
              Technical work isn't the only work.
            </h2>
            <p className="text-muted text-sm">
              I've also learned through representing ideas, making media, and working with other students.
            </p>
          </div>
          <div className="exploration-list space-y-4">
            <div className="flex items-start space-x-4">
              <span className="project-number text-accent-dark font-display text-xs uppercase tracking-wider">
                MODEL UNITED NATIONS
              </span>
              <div>
                <h3 className="text-xl font-display mb-2 leading-tight">Research and representation</h3>
                <p className="text-muted text-sm">
                  Participated in MUN, including delegations focused on cybersecurity and marine biodiversity.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <span className="project-number text-accent-dark font-display text-xs uppercase tracking-wider">
                STUDENT LEADERSHIP
              </span>
            </div>
          </div>
        </section>
      </div>
    </motion.div>
  )
}

export default Work