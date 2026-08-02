"use client";

import { useEffect, useState } from "react";

const roles = ["HR Generalist", "People Operations Partner", "Talent Acquisition Specialist"];

const experience = [
  {
    date: "Mar 2024 — Present",
    role: "HR Generalist",
    company: "HRMC",
    summary: "Delivering end-to-end HR consulting, organizational development, talent acquisition, and HR operations for multiple client organizations.",
    bullets: ["Organizational assessments, gap analysis, policies, and HR process design", "Performance, compensation, workforce planning, and executive reporting", "Full-cycle recruitment across technical and non-technical disciplines"],
  },
  {
    date: "Jan 2024 — Mar 2024",
    role: "Recruitment Specialist",
    company: "Job Nile for Recruitment & HR Consultancy",
    summary: "Managed end-to-end recruitment while building trusted relationships with clients and candidates.",
    bullets: ["Sourcing, competency-based interviewing, and candidate shortlisting", "Interview coordination, feedback follow-up, and offer support", "Recruitment reporting, talent pipelines, and trainee supervision"],
  },
  {
    date: "Jan 2023 — Jan 2024",
    role: "Recruitment & Database Coordinator",
    company: "Job Nile for Recruitment & HR Consultancy",
    summary: "Built the operational foundation for accurate, responsive recruitment delivery.",
    bullets: ["Candidate sourcing and phone screening", "Client and candidate communication", "CV review, database quality, and recruitment-system updates"],
  },
];

const achievements = [
  { number: "40+", label: "Employees supported per client", detail: "Scalable HR solutions for growing organizations" },
  { number: "3+", label: "Years in HR", detail: "Recruitment, consulting, and people operations" },
  { number: "8", label: "Professional credentials", detail: "HR, leadership, finance, PR, ERP, and AI" },
];

const skills = {
  "HR & People": ["HR Consulting", "Organizational Development", "Talent Acquisition", "HR Operations", "Performance Management", "Compensation & Benefits", "Workforce Planning", "Employee Relations"],
  "Business & Delivery": ["Project Coordination", "HR Analytics", "Policy Design", "Executive Reporting", "Client Management", "Payroll Coordination", "Learning & Development"],
  "Human Strengths": ["Communication", "Negotiation", "Problem Solving", "Leadership", "Teamwork", "Time Management", "Attention to Detail", "Confidentiality"],
};

function ArrowIcon() {
  return <span aria-hidden="true">↗</span>;
}

export default function Home() {
  const [loaded, setLoaded] = useState(false);
  const [light, setLight] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const saved = localStorage.getItem("hager-theme");
    const prefersLight = window.matchMedia("(prefers-color-scheme: light)").matches;
    setLight(saved ? saved === "light" : prefersLight);
    const loadTimer = window.setTimeout(() => setLoaded(true), 1700);
    const roleTimer = window.setInterval(() => setRoleIndex((i) => (i + 1) % roles.length), 2600);
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add("is-visible"));
    }, { threshold: 0.12 });
    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => { window.clearTimeout(loadTimer); window.clearInterval(roleTimer); observer.disconnect(); };
  }, []);

  useEffect(() => {
    document.documentElement.dataset.theme = light ? "light" : "dark";
    localStorage.setItem("hager-theme", light ? "light" : "dark");
  }, [light]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <div className={`preloader ${loaded ? "preloader--done" : ""}`} aria-hidden={loaded}>
        <div className="loader-mark">HA<span>.</span></div>
        <p><span className="prompt">&gt;</span> Hager Abd Elmegid <span className="muted">| Loading portfolio...</span></p>
        <div className="loader-track"><span /></div>
      </div>

      <header className="site-header">
        <a className="brand" href="#home" onClick={closeMenu} aria-label="Hager Abd Elmegid, home">HA<span>.</span></a>
        <nav className={menuOpen ? "nav-open" : ""} aria-label="Main navigation">
          {["Home", "About", "Experience", "Highlights", "Skills", "Contact"].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} onClick={closeMenu}>{item}</a>
          ))}
        </nav>
        <div className="header-actions">
          <button className="theme-toggle" onClick={() => setLight((v) => !v)} aria-label={`Switch to ${light ? "dark" : "light"} theme`}>
            <span className="theme-icon">{light ? "☾" : "☼"}</span>
          </button>
          <button className="menu-toggle" onClick={() => setMenuOpen((v) => !v)} aria-expanded={menuOpen} aria-label="Toggle navigation"><span /><span /></button>
        </div>
      </header>

      <main>
        <section id="home" className="hero section-shell">
          <div className="hero-orb" aria-hidden="true" />
          <div className="hero-copy reveal is-visible">
            <p className="eyebrow"><span /> Alexandria, Egypt · Open to opportunities</p>
            <h1>People first.<br /><em>Business forward.</em></h1>
            <div className="role-line"><span className="prompt">&gt;</span> <span key={roleIndex} className="typed-role">{roles[roleIndex]}</span><i /></div>
            <p className="hero-intro">I turn complex people challenges into clear, practical HR systems — connecting talent, operations, and organizational strategy to help teams thrive.</p>
            <div className="hero-ctas">
              <a className="button button-primary" href={`${import.meta.env.BASE_URL}Hager-Abd-Elmegid-CV.pdf`} download>Download CV <span>↓</span></a>
              <a className="button button-ghost" href="#contact">Let&apos;s talk <ArrowIcon /></a>
            </div>
          </div>
          <div className="hero-panel reveal is-visible">
            <div className="status-row"><span className="status-dot" /> Available for the next challenge <span>01</span></div>
            <div className="monogram">H<span>A</span></div>
            <div className="panel-meta">
              <div><small>FOCUS</small><strong>People · Process · Progress</strong></div>
              <a href="https://www.linkedin.com/in/hager-abd-elmegid-701447216/" target="_blank" rel="noreferrer" aria-label="View Hager's LinkedIn profile">LinkedIn <ArrowIcon /></a>
            </div>
          </div>
          <div className="scroll-cue"><span /> Scroll to explore</div>
        </section>

        <section id="about" className="about section-shell section-pad">
          <div className="section-heading reveal"><p className="section-index">01 / ABOUT</p><h2>HR expertise with a<br /><em>business mindset.</em></h2></div>
          <div className="about-grid">
            <div className="about-copy reveal">
              <p className="lead">I&apos;m an HR Generalist with 3+ years of experience across HR consulting, organizational development, talent acquisition, and people operations.</p>
              <p>My work spans organizational diagnosis, workforce planning, recruitment, compensation, performance systems, and HR process improvement. I translate business needs into people solutions that teams can actually use.</p>
              <p>With a Bachelor&apos;s degree in Finance & Investment and ongoing professional development in HR and leadership, I bring analytical discipline and human judgment to every project.</p>
              <a className="text-link" href="#experience">Explore my journey <ArrowIcon /></a>
            </div>
            <div className="metric-grid reveal">
              {achievements.map((item) => <article className="metric" key={item.number}><strong>{item.number}</strong><span>{item.label}</span><small>{item.detail}</small></article>)}
              <article className="metric metric-accent"><span>Fluent in</span><strong>EN</strong><small>English communication</small></article>
            </div>
          </div>
        </section>

        <section id="experience" className="experience section-pad">
          <div className="section-shell">
            <div className="section-heading reveal"><p className="section-index">02 / EXPERIENCE</p><h2>A career built around<br /><em>meaningful impact.</em></h2></div>
            <div className="timeline">
              {experience.map((job, index) => (
                <article className="timeline-item reveal" key={job.date}>
                  <div className="timeline-date">{job.date}</div>
                  <div className="timeline-node"><span>{String(index + 1).padStart(2, "0")}</span></div>
                  <div className="timeline-content">
                    <p>{job.company}</p><h3>{job.role}</h3><div className="timeline-details"><p>{job.summary}</p><ul>{job.bullets.map((b) => <li key={b}>{b}</li>)}</ul></div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="highlights" className="section-shell section-pad">
          <div className="section-heading reveal"><p className="section-index">03 / HIGHLIGHTS</p><h2>Selected areas of<br /><em>contribution.</em></h2></div>
          <div className="project-grid">
            <article className="project-card project-wide reveal"><div className="project-top"><span>ORGANIZATIONAL DEVELOPMENT</span><b>01</b></div><div><h3>Building HR foundations that scale.</h3><p>Organizational structures, job architecture, authority matrices, policies, SOPs, and employee handbooks tailored to each client&apos;s reality.</p><div className="tags"><span>Org Design</span><span>Policy</span><span>Process</span></div></div></article>
            <article className="project-card reveal"><div className="project-top"><span>TALENT ACQUISITION</span><b>02</b></div><div><h3>Connecting the right people with the right work.</h3><p>Full-cycle recruitment across engineering, construction, IT, finance, sales, marketing, HR, and operations.</p><div className="tags"><span>Sourcing</span><span>Interviewing</span><span>Onboarding</span></div></div></article>
            <article className="project-card reveal"><div className="project-top"><span>PEOPLE SYSTEMS</span><b>03</b></div><div><h3>Turning people data into decisions.</h3><p>Performance frameworks, salary benchmarking, job grading, HR dashboards, and management-ready insights.</p><div className="tags"><span>Performance</span><span>C&B</span><span>Analytics</span></div></div></article>
          </div>
        </section>

        <section id="skills" className="skills section-pad">
          <div className="section-shell">
            <div className="section-heading reveal"><p className="section-index">04 / EXPERTISE</p><h2>Capabilities that move<br /><em>people and business.</em></h2></div>
            <div className="skill-groups">
              {Object.entries(skills).map(([group, items], i) => <div className="skill-group reveal" key={group}><p><span>0{i + 1}</span>{group}</p><div className="pills">{items.map((item) => <span key={item}>{item}</span>)}</div></div>)}
            </div>
            <div className="credentials reveal"><p className="section-index">SELECTED CREDENTIALS</p><div className="credential-row"><span>Professional Diploma in Human Resources — AAST</span><b>2026</b></div><div className="credential-row"><span>Leadership Development Program — NTC</span><b>2026</b></div><div className="credential-row"><span>HR Foundations & AI for Business Analysis — LinkedIn Learning</span><b>2026</b></div><div className="credential-row"><span>Bachelor of Finance & Investment — Alexandria University</span><b>2022</b></div></div>
          </div>
        </section>

        <section id="contact" className="contact section-shell section-pad">
          <div className="contact-panel reveal">
            <p className="section-index">05 / CONTACT</p>
            <h2>Have a people challenge?<br /><em>Let&apos;s solve it.</em></h2>
            <p>Whether you&apos;re building a team, strengthening HR operations, or shaping an organization for growth, I&apos;d love to hear what you&apos;re working on.</p>
            <form className="contact-form" action="mailto:hager8053@gmail.com" method="post" encType="text/plain">
              <label><input name="name" placeholder=" " required /><span>Your name</span></label>
              <label><input type="email" name="email" placeholder=" " required /><span>Email address</span></label>
              <label className="message-field"><textarea name="message" placeholder=" " rows={3} required /><span>Tell me about your challenge</span></label>
              <button type="submit">Start a conversation <ArrowIcon /></button>
            </form>
            <a className="contact-email" href="mailto:hager8053@gmail.com">Or email directly: hager8053@gmail.com <ArrowIcon /></a>
            <div className="contact-links"><a href="tel:+201152746073">+20 115 274 6073</a><a href="https://www.linkedin.com/in/hager-abd-elmegid-701447216/" target="_blank" rel="noreferrer">LinkedIn <ArrowIcon /></a></div>
          </div>
        </section>
      </main>

      <footer><a className="brand" href="#home">HA<span>.</span></a><p>© {new Date().getFullYear()} Hager Abd Elmegid. Crafted with intention.</p><a href="#home">Back to top ↑</a></footer>
    </>
  );
}
