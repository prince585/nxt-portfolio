import "./App.css";

const base = (path) => import.meta.env.BASE_URL + path.replace(/^\//, "");

/* ===== EDITABLE DATA ===== */

const PROFILE = {
  name: "Prince Verma",
  headline: "Hi! I'm Prince.",
  subtitle: "Java Enthusiast • Backend Development Learner • CSE Student",
  summary: [
    "3rd Year CSE Student focused on backend development",
    "Building applications using Java and Spring Boot",
    "Exploring React for modern web interfaces",
    "Learning MongoDB and MySQL for database management",
    "Practicing Data Structures & Algorithms",
  ],
  resumeLink: base("resume.pdf"),
  githubLink: "https://github.com/prince585",
  profilePic: base("MyPfp.jpeg"),
};

const TECH_STACK = {
  have: [
    { name: "Java",       icon: "https://skillicons.dev/icons?i=java" },
    { name: "HTML5",      icon: "https://skillicons.dev/icons?i=html" },
    { name: "CSS3",       icon: "https://skillicons.dev/icons?i=css" },
    { name: "JavaScript", icon: "https://skillicons.dev/icons?i=js" },
    { name: "Git",        icon: "https://skillicons.dev/icons?i=git" },
    { name: "GitHub",     icon: "https://skillicons.dev/icons?i=github" },
  ],
  learning: [
    { name: "Spring Boot", icon: "https://skillicons.dev/icons?i=spring" },
    { name: "React",       icon: "https://skillicons.dev/icons?i=react" },
    { name: "MongoDB",     icon: "https://skillicons.dev/icons?i=mongodb" },
    { name: "MySQL",       icon: "https://skillicons.dev/icons?i=mysql" },
    { name: "Docker",      icon: "https://skillicons.dev/icons?i=docker" },
    { name: "Maven",       icon: "https://skillicons.dev/icons?i=maven" },
  ],
  building: [
    { name: "Java",        icon: "https://skillicons.dev/icons?i=java" },
    { name: "Spring Boot", icon: "https://skillicons.dev/icons?i=spring" },
    { name: "MongoDB",     icon: "https://skillicons.dev/icons?i=mongodb" },
    { name: "React",       icon: "https://skillicons.dev/icons?i=react" },
  ],
};

const PROJECTS = [
  {
    title: "ChatBot Using Spring Boot",
    desc: "AI chatbot integrated with Google Gemini API. REST API backend with HTML/JS frontend.",
    github: "https://github.com/princecodes/chatbot-springboot",
    live: "#",
  },
  {
    title: "Google Store Clone",
    desc: "Responsive multi-page frontend clone using HTML, Tailwind CSS, JS with cart & auth.",
    github: "https://github.com/princecodes/google-store-clone",
    live: "#",
  },
  {
    title: "Banking App (Java Console)",
    desc: "Console-based banking system with deposit, withdrawal, balance checking & validation.",
    github: "https://github.com/princecodes/banking-app-java",
    live: "#",
  },
  {
    title: "Portfolio Website",
    desc: "Personal portfolio with clean responsive UI showcasing projects and skills.",
    github: "https://github.com/princecodes/portfolio",
    live: "#",
  },
];

const EDUCATION = [
  {
    level: "College",
    title: "B.Tech in Computer Science & Engineering",
    school: "Mahakal Institute of Technology and Management, Ujjain",
    year: "Sep 2023 — Present",
  },
  {
    level: "12th Grade",
    title: "Higher Secondary (Class 12)",
    school: "Government High School, Bhourasa",
    year: "Completed Jun 2023 · 65%",
  },
  {
    level: "10th Grade",
    title: "Secondary (Class 10)",
    school: "Bright Future Academy School, Madhya Pradesh",
    year: "Completed Jun 2021 · 65%",
  },
];

const CERTIFICATES = [
  {
    title: "Projection Training & Placement Program",
    desc: "C++, OOP, communication, resume building, mock interviews & CS fundamentals.",
    img: base("cert.jpg"),
  },
  {
    title: "Website Development Tutorial",
    desc: "Full website development course by Infosys Springboard.",
    img: base("cert.jpg"),
  },
];

const CONTACT = {
  email: "princeverma.codes@gmail.com",
  phone: "+91 99932 85874",
  socials: [
    { name: "LinkedIn", url: "https://www.linkedin.com/in/prince-verma-b7a2b12b0/", icon: "in" },
    { name: "GitHub", url: "https://github.com/prince585", icon: "gh" },
    { name: "Twitter / X", url: "https://x.com/prinxeverma", icon: "x" },
    { name: "Gmail", url: "mailto:princeverma.codes@gmail.com", icon: "mail" },
    { name: "WhatsApp", url: "https://wa.me/919993285874", icon: "wa" },
  ],
};

/* ===== COMPONENTS ===== */

function Navbar() {
  const sections = ["About", "Projects", "Education", "Certificates", "Contact"];
  return (
    <nav className="navbar">
      <span className="logo">Prince.</span>
      <ul>
        {sections.map((s) => (
          <li key={s}>
            <a href={`#${s.toLowerCase()}`}>{s}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

function AboutMe() {
  return (
    <section id="about" className="section about-section">
      <div className="about-left">
        <div className="profile-frame">
          <img src={PROFILE.profilePic} alt={PROFILE.name} />
        </div>
        <div className="about-actions">
          <a href={PROFILE.githubLink} target="_blank" rel="noreferrer" className="btn btn-outline btn-sm">
            <GitHubIcon /> GitHub
          </a>
          <a href={PROFILE.resumeLink} download className="btn btn-primary">
            Download Resume
          </a>
        </div>
      </div>
      <div className="about-right">
        <h1>{PROFILE.headline}</h1>
        <p className="subtitle">{PROFILE.subtitle}</p>
        <ul className="summary-list">
          {PROFILE.summary.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
        <div className="tech-table">
          <div className="tech-table-row">
            <div className="tech-table-cell">
              <span className="tech-label">I Have</span>
              <div className="tech-icons">
                {TECH_STACK.have.map((t) => (
                  <img key={t.name} src={t.icon} alt={t.name} title={t.name} />
                ))}
              </div>
            </div>
            <div className="tech-table-cell">
              <span className="tech-label">I'm Learning</span>
              <div className="tech-icons">
                {TECH_STACK.learning.map((t) => (
                  <img key={t.name} src={t.icon} alt={t.name} title={t.name} />
                ))}
              </div>
            </div>
            <div className="tech-table-cell">
              <span className="tech-label">Building With</span>
              <div className="tech-icons">
                {TECH_STACK.building.map((t) => (
                  <img key={t.name} src={t.icon} alt={t.name} title={t.name} />
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="github-graph">
          <span className="tech-label">GitHub Contributions</span>
          <img
            src="https://ghchart.rshah.org/d97757/prince585"
            alt="Prince's GitHub contribution graph"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section id="projects" className="section">
      <h2 className="section-title">Projects</h2>
      <div className="projects-grid">
        {PROJECTS.map((p) => (
          <div key={p.title} className="project-card">
            <div className="project-thumb">
              <div className="thumb-placeholder">{p.title[0]}</div>
            </div>
            <div className="project-body">
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
            </div>
            <div className="project-actions">
              <a href={p.github} target="_blank" rel="noreferrer" className="btn btn-outline btn-sm">
                <GitHubIcon /> GitHub
              </a>
              <a href={p.live} target="_blank" rel="noreferrer" className="btn btn-primary btn-sm">
                Visit
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Education() {
  return (
    <section id="education" className="section">
      <h2 className="section-title">Education</h2>
      <div className="timeline">
        {EDUCATION.map((e, i) => (
          <div key={i} className={`timeline-item ${i % 2 === 0 ? "left" : "right"}`}>
            <div className="timeline-marker">{e.level}</div>
            <div className="timeline-content">
              <h3>{e.title}</h3>
              <p className="timeline-school">{e.school}</p>
              <span className="timeline-year">{e.year}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Certificates() {
  return (
    <section id="certificates" className="section">
      <h2 className="section-title">Certificates</h2>
      <div className="certs-grid">
        {CERTIFICATES.map((c) => (
          <div key={c.title} className="cert-card">
            <div className="cert-img-wrap">
              <img src={c.img} alt={c.title} />
            </div>
            <div className="cert-body">
              <h3>{c.title}</h3>
              <p>{c.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="section contact-section">
      <h2 className="section-title">Get In Touch</h2>
      <div className="contact-inner">
        <div className="contact-bio">
          <p>
            Hi! I'm <strong>Prince Verma</strong>, a Computer Science student
            looking for <strong>internship opportunities</strong> where I can
            apply my skills in Java, Spring Boot, and web development to
            solve real-world problems.
          </p>
          <p>
            Whether you have a project idea, a position to discuss, or just
            want to connect — feel free to reach out.
          </p>
          <a href={`mailto:${CONTACT.email}`} className="btn btn-primary">
            Email Me
          </a>
        </div>
        <div className="contact-socials">
          {CONTACT.socials.map((s) => (
            <a key={s.name} href={s.url} target="_blank" rel="noreferrer" className="social-btn">
              <SocialIcon id={s.icon} />
              {s.name}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} {PROFILE.name}. All rights reserved.</p>
    </footer>
  );
}

/* ===== ICONS ===== */

function GitHubIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

function SocialIcon({ id }) {
  const paths = {
    in: "M4 9h5v11H4V9zM6.5 7.5A2.5 2.5 0 116.5 2a2.5 2.5 0 010 5zM13 20h5v-5.5c0-2.5-2-3-3-3s-2 .5-2 1v7.5z",
    gh: "M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z",
    x: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z",
    mail: "M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z",
    wa: "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z",
  };
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
      <path d={paths[id] || paths.gh} />
    </svg>
  );
}

/* ===== CURSOR ===== */

import { useEffect, useRef } from "react";

function Cursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const pos = useRef({ x: 0, y: 0 });
  const ringPos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const onMove = (e) => {
      pos.current = { x: e.clientX, y: e.clientY };
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
      }
    };

    const onHoverIn = () => {
      if (ringRef.current) ringRef.current.classList.add("cursor-ring--grow");
    };
    const onHoverOut = () => {
      if (ringRef.current) ringRef.current.classList.remove("cursor-ring--grow");
    };

    document.addEventListener("mousemove", onMove);

    const interactives = document.querySelectorAll(
      "a, button, .btn, input, textarea, .project-card, .cert-card, .social-btn"
    );
    interactives.forEach((el) => {
      el.addEventListener("mouseenter", onHoverIn);
      el.addEventListener("mouseleave", onHoverOut);
    });

    const ring = ringRef.current;

    function smoothFollow() {
      ringPos.current.x += (pos.current.x - ringPos.current.x) * 0.12;
      ringPos.current.y += (pos.current.y - ringPos.current.y) * 0.12;
      if (ring) {
        ring.style.transform = `translate(${ringPos.current.x - 16}px, ${ringPos.current.y - 16}px)`;
      }
      requestAnimationFrame(smoothFollow);
    }
    const raf = requestAnimationFrame(smoothFollow);

    return () => {
      document.removeEventListener("mousemove", onMove);
      interactives.forEach((el) => {
        el.removeEventListener("mouseenter", onHoverIn);
        el.removeEventListener("mouseleave", onHoverOut);
      });
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      <div className="cursor-dot" ref={dotRef} />
      <div className="cursor-ring" ref={ringRef} />
    </>
  );
}

/* ===== APP ===== */

export default function App() {
  return (
    <>
      <Cursor />
      <Navbar />
      <main>
        <AboutMe />
        <Projects />
        <Education />
        <Certificates />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
