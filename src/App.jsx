import "./index.css";
import jordanProfile from "./assets/jc-profile.jpg";

const donateLink = "https://secure.actblue.com/donate/jordancoleman";

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

          <a
            href={donateLink}
            target="_blank"
            rel="noopener noreferrer"
            className="donate-nav"
          >
            Donate
          </a>
        </div>
      </nav>

      <section className="hero">
        <div className="hero-content">
          <p className="eyebrow">
            Jordan Coleman for Hancock County Commissioner
          </p>

          <h1>Built for Community. Ready to Lead.</h1>

          <p className="hero-text">
            A people-first campaign focused on listening, serving, and building
            a stronger future for every family, neighborhood, and business in
            Hancock County.
          </p>

          <div className="hero-buttons">
            <a
              className="btn primary"
              href={donateLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              Donate Today
            </a>

            <a className="btn secondary" href="#volunteer">
              Volunteer
            </a>
          </div>
        </div>

        <div className="hero-card">
          <div className="candidate-photo">
            <img src={jordanProfile} alt="Jordan Coleman" />
          </div>

          <h2>Jordan Coleman</h2>
          <p>Candidate for Hancock County Commissioner</p>
        </div>
      </section>

      <section id="about" className="section about">
        <p className="section-label">Meet Jordan</p>

        <h2>Leadership Rooted in Service.</h2>

        <p>
          I'm Jordan Coleman, a proud Indianapolis native, community leader,
          advocate, wife, and mother who believes government should work for the
          people it serves. I graduated from Warren Central High School, earned
          my bachelor's degree in Sociology from IUPUI, and my master's degree
          in Public Administration with a concentration in Nonprofit Leadership
          from Indiana Wesleyan University.
        </p>

        <p>
          My leadership journey didn't start in politics—it started in the
          community. I've experienced firsthand what it feels like to fight to
          be seen, heard, and given an opportunity. Instead of waiting for a
          seat at someone else's table, I built my own.
        </p>

        <p>
          In 2018, I founded A Seat At The Table, an organization committed to
          helping women heal from trauma, grow into leadership, and create
          better futures for themselves and their families. What began as a
          small gathering has grown into a movement that has served thousands of
          women and girls through leadership development, mental health
          programming, and community support.
        </p>

        <p>
          I've also led efforts to address period poverty by organizing "Period
          Parties," distributing hundreds of menstrual hygiene kits, and
          advocating for access to essential products. Every girl deserves the
          dignity and resources she needs to thrive without barriers or shame.
        </p>

        <p>
          Professionally, I've managed multi-million-dollar budgets, built
          strong partnerships across sectors, and helped generate more than $1
          million annually to support community-driven initiatives. I understand
          how to bring people together, solve problems, and deliver meaningful
          results.
        </p>

        <p>
          Along the way, I've been honored to be recognized as a nominee for
          Junior Achievement's Indy's Best and Brightest and the Center for
          Leadership Development's Up and Coming Achiever Award. I've also
          served on boards and committees including March of Dimes, Indiana
          Children's Bureau, and Black Fathers Rock, and I'm a proud alumna of
          the Goldman Sachs One Million Black Women program.
        </p>

        <p>
          But my most important role is being a wife and a mother. My family is
          my why. They keep me grounded and remind me every day what is at stake
          for families across our community.
        </p>

        <p>
          I'm running for County Commissioner because I believe leadership should
          be bold, accountable, and rooted in the people. I believe strong
          communities are built on public safety, smart infrastructure, and real
          economic opportunity.
        </p>

        <p>
          That means supporting our first responders while investing in mental
          health resources, ensuring our roads and infrastructure keep pace with
          growth, and creating opportunities that bring good-paying jobs without
          compromising the character and integrity of our community.
        </p>

        <p>
          Growth is coming, and we have a responsibility to manage it the right
          way. I'm committed to making sure development is thoughtful,
          infrastructure is prepared, and families aren't left behind in the
          process.
        </p>

        <p>
          I'm ready to bring a fresh perspective, proven leadership experience,
          and a deep commitment to this community so every resident feels safe,
          supported, and positioned to thrive.
        </p>
      </section>

      <section id="priorities" className="section">
        <p className="section-label">Priorities</p>

        <h2>A Stronger Hancock County Starts Here.</h2>

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

          <h2>Help Build The Campaign.</h2>

          <p>
            Whether you can volunteer, share the message, host a conversation,
            or support the campaign, your voice matters.
          </p>
        </div>

        <div className="cta-buttons">
          <a
            className="btn primary"
            href={donateLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            Donate
          </a>

          <a
            className="btn secondary"
            href="mailto:jordancolemanruns@gmail.com"
          >
            Volunteer
          </a>
        </div>
      </section>

      <footer>
        <p>Paid for by Jordan Coleman for Hancock County Commissioner.</p>
      </footer>
    </main>
  );
}

export default App;