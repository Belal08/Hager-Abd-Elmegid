import { useEffect, useState } from "react";

const roles = ["HR Generalist", "People Operations Partner", "Talent Acquisition Specialist"];
const experience = [
  { period: "2024 - NOW", role: "HR Generalist", company: "HRMC", text: "Leading HR consulting, organizational development, recruitment, and people operations across multiple client organizations.", points: ["Organization design and HR gap analysis", "Performance and compensation frameworks", "Full-cycle technical and non-technical hiring"] },
  { period: "2024", role: "Recruitment Specialist", company: "Job Nile", text: "Managed complete recruitment cycles and built trusted relationships between clients and candidates.", points: ["Sourcing and competency interviews", "Offer and interview coordination", "Talent pipelines and reporting"] },
  { period: "2023 - 2024", role: "Recruitment & Database Coordinator", company: "Job Nile", text: "Created a reliable operational foundation for accurate and responsive recruitment delivery.", points: ["Candidate screening", "Stakeholder communication", "Database and CV quality"] },
];
export default function Home() {
  const [loaded, setLoaded] = useState(false);
  const [progress, setProgress] = useState(0);
  const [light, setLight] = useState(false);
  const [menu, setMenu] = useState(false);
  const [role, setRole] = useState(0);

  useEffect(() => {
    setLight(localStorage.getItem("ha-theme-v2") === "light");
    const loadDuration = 2400;
    const loadStartedAt = Date.now();
    const progressTimer = window.setInterval(() => {
      const elapsed = Date.now() - loadStartedAt;
      setProgress(Math.min(100, Math.round((elapsed / loadDuration) * 100)));
      if (elapsed >= loadDuration) window.clearInterval(progressTimer);
    }, 30);
    const loading = window.setTimeout(() => { setProgress(100); setLoaded(true); }, loadDuration + 180);
    const typing = window.setInterval(() => setRole((value) => (value + 1) % roles.length), 2600);
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add("visible")), { threshold: .12 });
    document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));
    return () => { clearTimeout(loading); clearInterval(progressTimer); clearInterval(typing); observer.disconnect(); };
  }, []);

  useEffect(() => {
    document.documentElement.dataset.theme = light ? "light" : "dark";
    localStorage.setItem("ha-theme-v2", light ? "light" : "dark");
  }, [light]);

  return <>
    <div className={`loader ${loaded ? "hide" : ""}`}><div className="loader-logo">HA<span>/</span></div><div className="loader-count">{String(progress).padStart(2, "0")}<span>%</span></div><div className="loader-line"><i style={{ width: `${progress}%` }} /></div><small>BUILDING PEOPLE. SHAPING BUSINESS.</small></div>

    <header>
      <a href="#home" className="logo">HAGER<span>/</span></a>
      <nav className={menu ? "open" : ""}>{["About", "Experience", "Work", "Contact"].map((item) => <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setMenu(false)}>{item}</a>)}</nav>
      <div className="nav-actions"><button className="theme" onClick={() => setLight(!light)} aria-label={`Switch to ${light ? "dark" : "light"} mode`}><span aria-hidden="true">{light ? "☾" : "☀"}</span>{light ? "DARK" : "LIGHT"}</button><button className="hamburger" onClick={() => setMenu(!menu)} aria-label="Open menu"><i /><i /></button></div>
    </header>

    <main>
      <section id="home" className="hero shell">
        <div className="hero-main reveal visible">
          <div className="kicker"><span>HR / PEOPLE / CULTURE</span><span>ALEXANDRIA, EGYPT</span></div>
          <h1>Human insight.<br /><b>Business impact.</b></h1>
          <div className="role"><span>Currently</span><strong key={role}>{roles[role]}</strong></div>
          <p>I build practical people systems that help organizations hire better, operate smarter, and grow with confidence.</p>
          <div className="actions"><a className="primary" href={`${import.meta.env.BASE_URL}Hager-Abd-Elmegid-CV.pdf`} download>Download résumé <span>↓</span></a><a className="secondary" href="#contact">Start a conversation <span>↗</span></a></div>
        </div>
        <div className="hero-strip"><span>ORGANIZATIONAL DEVELOPMENT</span><i /><span>TALENT ACQUISITION</span><i /><span>HR OPERATIONS</span></div>
      </section>

      <section id="about" className="about shell section">
        <div className="label reveal">01 — ABOUT</div>
        <div className="about-layout">
          <h2 className="reveal">The human side of<br /><em>high performance.</em></h2>
          <div className="about-copy reveal"><p className="lead">HR Generalist with an analytical mindset and a genuine interest in how people and businesses grow together.</p><p>My experience spans HR consulting, organizational development, talent acquisition, and operations. I translate complex business needs into clear policies, strong teams, and processes people can trust.</p><a href="#experience">See career journey <span>→</span></a></div>
        </div>
        <div className="stats reveal"><article><strong>40+</strong><span>Employees supported<br />per client</span></article><article><strong>3+</strong><span>Years across<br />the HR lifecycle</span></article><article><strong>8</strong><span>Professional<br />credentials</span></article><article className="red"><strong>EN</strong><span>Fluent English<br />communication</span></article></div>
      </section>

      <section id="experience" className="section dark-block"><div className="shell"><div className="label reveal">02 — EXPERIENCE</div><div className="section-title reveal"><h2>Career<br /><em>trajectory.</em></h2><p>From recruitment operations to strategic HR consulting.</p></div><div className="career">{experience.map((job, index) => <article className="career-row reveal" key={job.role}><div className="career-no">0{index + 1}</div><div className="career-meta"><span>{job.period}</span><b>{job.company}</b></div><div className="career-body"><h3>{job.role}</h3><p>{job.text}</p><ul>{job.points.map((point) => <li key={point}>{point}</li>)}</ul></div></article>)}</div></div></section>

      <section id="work" className="section shell"><div className="label reveal">03 — SELECTED WORK</div><div className="section-title reveal"><h2>Problems turned<br /><em>into progress.</em></h2></div><div className="work-grid"><article className="work-card featured reveal"><span>01 / ORGANIZATION</span><h3>HR foundations<br />built to scale.</h3><p>Structures, job architecture, authority matrices, policies, SOPs, and employee handbooks tailored to real operating needs.</p><div className="work-index">OD</div></article><article className="work-card reveal"><span>02 / TALENT</span><h3>Better hiring,<br />end to end.</h3><p>Recruitment across engineering, IT, finance, sales, marketing, HR, and operations.</p><div className="work-index">TA</div></article><article className="work-card reveal"><span>03 / SYSTEMS</span><h3>People data that<br />drives decisions.</h3><p>Performance frameworks, salary benchmarking, HR dashboards, and executive insights.</p><div className="work-index">PS</div></article></div></section>

      <section id="contact" className="contact shell section reveal"><div className="contact-top"><div><div className="label">04 — CONTACT</div><h2>Let’s build<br /><em>something better.</em></h2></div><p>Have a hiring challenge or an HR system to improve? Tell me what you are working on.</p></div><form action="mailto:hager8053@gmail.com" method="post" encType="text/plain"><label><span>Name</span><input name="name" required /></label><label><span>Email</span><input type="email" name="email" required /></label><label className="wide"><span>Message</span><textarea name="message" rows={3} required /></label><button type="submit">Send message <span>↗</span></button></form><div className="contact-links"><a href="mailto:hager8053@gmail.com">hager8053@gmail.com</a><a href="tel:+201152746073">+20 115 274 6073</a><a href="https://www.linkedin.com/in/hager-abd-elmegid-701447216/" target="_blank" rel="noreferrer">LinkedIn ↗</a></div></section>
    </main>

    <footer><a className="logo" href="#home">HAGER<span>/</span></a><p>HR GENERALIST · ALEXANDRIA, EGYPT</p><p>© {new Date().getFullYear()}</p></footer>
  </>;
}
