import "./index.css";

function App() {
  return (
    <main>
      <nav className="nav">
        <div className="logo">
          <span>Jordan</span> Coleman
        </div>

        <div className="nav-links">
          <a href="#about">Meet Jordan</a>
          <a href="#priorities">Priorities</a>
          <a href="#volunteer">Volunteer</a>
        </div>
      </nav>

      <section className="hero">
        <div className="hero-content">
          <p className="eyebrow">Jordan Coleman for Hancock County Commissioner</p>
          <h1>Built for Community. Ready to Lead.</h1>
          <p className="hero-text">
            A people-first campaign focused on listening, serving, and building a
            stronger future for every family, neighborhood, and business in
            Hancock County.
          </p>

          <div className="hero-buttons">
            <a className="btn primary" href="#volunteer">Join the Campaign</a>
            <a className="btn secondary" href="#priorities">See Priorities</a>
          </div>
        </div>

        <div className="hero-card">
          <div className="photo-placeholder">
            <span>JC</span>
          </div>
          <h2>Jordan Coleman</h2>
          <p>Candidate for Hancock County Commissioner</p>
        </div>
      </section>

      <section id="about" className="section about">
        <p className="section-label">Meet Jordan</p>
        <h2>Leadership rooted in service.</h2>
        <p>
          Jordan Coleman is running to bring thoughtful, community-centered
          leadership to Hancock County. Her campaign is about more than politics.
          It is about people, progress, and making sure residents feel seen,
          heard, and represented.
        </p>
      </section>

      <section id="priorities" className="section">
        <p className="section-label">Priorities</p>
        <h2>A stronger Hancock County starts here.</h2>

        <div className="priority-grid">
          <div className="priority-card">
            <h3>Smart Growth</h3>
            <p>
              Supporting responsible development that protects the character of
              our communities while preparing for the future.
            </p>
          </div>

          <div className="priority-card">
            <h3>Infrastructure</h3>
            <p>
              Investing in roads, public services, and long-term planning that
              meets the needs of a growing county.
            </p>
          </div>

          <div className="priority-card">
            <h3>Public Safety</h3>
            <p>
              Making sure families, first responders, and neighborhoods have the
              resources needed to stay safe and supported.
            </p>
          </div>

          <div className="priority-card">
            <h3>Community Voice</h3>
            <p>
              Creating a county government that listens first, communicates
              clearly, and leads with transparency.
            </p>
          </div>
        </div>
      </section>

      <section id="volunteer" className="cta">
        <div>
          <p className="section-label">Get Involved</p>
          <h2>Help build the campaign.</h2>
          <p>
            Whether you can volunteer, share the message, host a conversation,
            or support the campaign, your voice matters.
          </p>
        </div>

        <a className="btn primary" href="mailto:campaign@example.com">
          Volunteer Today
        </a>
      </section>

      <footer>
        <p>Paid for by Jordan Coleman for Hancock County Commissioner.</p>
      </footer>
    </main>
  );
}

export default App;