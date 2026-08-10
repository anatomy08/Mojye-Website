import Image from "next/image";
import { ScrollEffects } from "./ScrollEffects";

const playStoreUrl =
  "https://play.google.com/store/apps/details?id=com.jyestudios.mojye";
const testersGroupUrl = "https://groups.google.com/g/mojye-testers";
const closedTestUrl =
  "https://play.google.com/apps/testing/com.jyestudios.mojye";
const browserAppUrl = "https://mojye-app.vercel.app";
const apkDownloadUrl =
  "https://github.com/anatomy08/mojye-downloads/releases/download/v1.0.2/mojye-budget-tracker-1.0.2.apk";

const features = [
  {
    icon: "↗",
    title: "Income & expenses",
    body: "Record everyday money movement with categories, notes, dates, and payment methods.",
  },
  {
    icon: "◎",
    title: "Custom budgets",
    body: "Set category limits and see which parts of your budget need attention.",
  },
  {
    icon: "↻",
    title: "Recurring entries",
    body: "Prepare weekly or monthly income and expenses, then receive local reminders.",
  },
  {
    icon: "⌕",
    title: "Searchable history",
    body: "Find transactions by text, date, range, type, or transfer and edit them anytime.",
  },
  {
    icon: "▥",
    title: "Charts & insights",
    body: "Read monthly breakdowns and yearly income-versus-expense analytics at a glance.",
  },
  {
    icon: "⇩",
    title: "Backups & exports",
    body: "Create CSV reports and portable JSON backups so your records stay in your hands.",
  },
];

function Wordmark({ inverse = false }: { inverse?: boolean }) {
  return (
    <span className={`wordmark${inverse ? " wordmark-inverse" : ""}`}>
      <span className="wordmark-seed" aria-hidden="true">
        <i />
        <b>M</b>
      </span>
      <span>Mojye</span>
    </span>
  );
}

function PlayButton({ dark = false }: { dark?: boolean }) {
  return (
    <div
      className={`play-button${dark ? " play-button-dark" : ""}`}
      aria-label="Mojye is coming soon to Google Play"
    >
      <span className="play-mark" aria-hidden="true" />
      <span>
        <small>AVAILABLE SOON ON</small>
        Google Play
      </span>
    </div>
  );
}

function DashboardUI() {
  return (
    <>
      <div className="app-topline">
        <div><small>Hello, Jye.</small><strong>Dashboard</strong></div>
        <span className="app-avatar">J</span>
      </div>
      <div className="app-month"><span>‹</span><b>August 2026</b><span>›</span></div>
      <div className="app-stat-grid">
        <div className="app-stat"><small>Income</small><strong className="positive">52,800</strong></div>
        <div className="app-stat"><small>Expenses</small><strong className="negative">31,420</strong></div>
        <div className="app-stat app-stat-gold"><small>Available</small><strong>21,380</strong></div>
        <div className="app-stat"><small>Savings</small><strong className="positive">18,750</strong></div>
      </div>
      <div className="app-panel">
        <div className="app-panel-heading"><span>Monthly status</span><b>On track</b></div>
        <div className="mini-donut"><span>59%</span></div>
        <div className="mini-lines"><i /><i /><i /></div>
      </div>
      <div className="app-progress-row"><span>Food & dining</span><b>69%</b><i><em /></i></div>
    </>
  );
}

function AssistantUI() {
  return (
    <>
      <div className="app-topline">
        <div><small>Your money, in conversation</small><strong>Ask Mojye</strong></div>
        <span className="spark-badge">✦</span>
      </div>
      <div className="offline-pill"><i /> Works offline</div>
      <div className="shortcut-row"><span>Available balance</span><span>Food this month</span></div>
      <div className="chat-window">
        <div className="chat-bubble chat-user">How much did I spend on food this month?</div>
        <div className="chat-bubble chat-mojye">
          <span className="chat-seed">M</span>
          <p>You spent <strong>6,200</strong> on Food & dining this month.</p>
        </div>
        <div className="chat-bubble chat-user">Add 500 to Bills</div>
        <div className="chat-confirm"><small>Expense ready to review</small><b>500 · Bills</b><button>Confirm</button></div>
      </div>
      <div className="chat-input"><span>Ask about your money…</span><b>↑</b></div>
    </>
  );
}

function TreeUI() {
  return (
    <>
      <div className="app-topline">
        <div><small>Watch your savings grow</small><strong>Savings Tree</strong></div>
        <span className="leaf-badge">◆</span>
      </div>
      <div className="tree-panel">
        <div className="tree-crown"><i /><i /><i /><i /><i /></div>
        <div className="tree-trunk" />
        <div className="tree-ground" />
        <span className="tree-spark tree-spark-one">✦</span>
        <span className="tree-spark tree-spark-two">✦</span>
      </div>
      <div className="tree-stage"><small>Current stage</small><strong>Young Tree</strong></div>
      <div className="tree-values"><span>Current savings</span><b>18,750</b></div>
      <div className="tree-values"><span>Fully grown target</span><b>100,000</b></div>
      <div className="tree-progress"><i><em /></i><span>Save 6,250 more to reach Mature Tree.</span></div>
    </>
  );
}

function CreditUI() {
  return (
    <>
      <div className="app-topline">
        <div><small>Stay ahead of the due date</small><strong>Card reminder</strong></div>
        <span className="card-badge">▰</span>
      </div>
      <div className="credit-card-art">
        <span>MOJYE</span>
        <strong>•••• 2048</strong>
        <small>MONTHLY CARD</small>
      </div>
      <div className="due-card">
        <div><small>Next payment</small><strong>August 08</strong></div>
        <span>7 days</span>
      </div>
      <div className="payment-status">
        <span className="status-icon">!</span>
        <div><strong>Payment not paid</strong><small>Mark it paid once the card payment is done.</small></div>
        <b>Unpaid</b>
      </div>
      <div className="notification-row"><span>Phone notification</span><b>On</b></div>
      <button className="paid-button">Mark payment as paid</button>
    </>
  );
}

function Phone({ type, label, index }: { type: "dashboard" | "assistant" | "tree" | "credit"; label: string; index: number }) {
  return (
    <article className={`showcase-item showcase-item-${index}`} data-reveal="phone">
      <div className={`device device-${type}`}>
        <div className="device-notch" />
        <div className="device-screen">
          {type === "dashboard" ? <DashboardUI /> : null}
          {type === "assistant" ? <AssistantUI /> : null}
          {type === "tree" ? <TreeUI /> : null}
          {type === "credit" ? <CreditUI /> : null}
          <div className="app-tabs"><span>⌂</span><span>＋</span><span>◷</span><span className={type === "assistant" ? "tab-on" : ""}>✦</span><span>⚙</span></div>
        </div>
      </div>
      <span className="showcase-label">0{index + 1} / {label}</span>
    </article>
  );
}

export default function Home() {
  return (
    <main>
      <ScrollEffects />
      <div className="scroll-vine" aria-hidden="true"><i /><span /></div>

      <nav className="site-nav" aria-label="Primary navigation">
        <a href="#top" aria-label="Mojye home"><Wordmark /></a>
        <div className="nav-links">
          <a href="#experience">Experience</a>
          <a href="#features">Features</a>
          <a href="#privacy">Privacy</a>
          <a href="#web">Web app</a>
          <a href="#android-test">Test Android</a>
        </div>
      </nav>

      <section className="hero" id="top">
        <div className="hero-grain" />
        <div className="hero-copy" data-reveal="left">
          <span className="hero-kicker"><i /> Meet your money-growing sidekick</span>
          <h1>Grow smarter with your money.</h1>
          <p>
            Mojye turns daily tracking into a clearer, friendlier habit—with
            budgets, savings goals, helpful answers, and reminders that keep you moving.
          </p>
          <div className="hero-actions">
            <PlayButton />
            <a className="browser-button" href={browserAppUrl} target="_blank" rel="noreferrer">
              Try in Browser <span>↗</span>
            </a>
            <a className="browser-button apk-button" href={apkDownloadUrl}>
              Download Android APK <span>↓</span>
            </a>
            <a className="watch-link" href="#experience"><span>↓</span> See Mojye in action</a>
          </div>
          <div className="hero-proof"><span>No sign-up</span><span>Works offline</span><span>Data stays on your device</span></div>
        </div>

        <div className="hero-world" data-reveal="right">
          <div className="hero-sun" data-float="slow" />
          <div className="hero-leaf hero-leaf-one" data-float="fast" />
          <div className="hero-leaf hero-leaf-two" data-float="slow" />
          <div className="hero-phone-wrap">
            <div className="device hero-device">
              <div className="device-notch" />
              <div className="device-screen"><DashboardUI /><div className="app-tabs"><span className="tab-on">⌂</span><span>＋</span><span>◷</span><span>✦</span><span>⚙</span></div></div>
            </div>
          </div>
          <div className="character-halo">
            <Image
              className="mojye-character hero-character"
              src="/mojye-budgeting.png"
              width={1600}
              height={1600}
              priority
              unoptimized
              alt="Mojye, the cheerful budget companion holding a calculator and budget list"
            />
          </div>
          <div className="mascot-speech" data-float="fast">You&apos;ve got <strong>21,380</strong> left this cycle!</div>
          <div className="floating-saving" data-float="slow"><span>↗</span><div><small>Savings</small><strong>+ 3,250</strong></div></div>
          <div className="floating-card" data-float="fast"><span>▰</span><div><small>Card due</small><strong>August 08</strong></div></div>
        </div>
      </section>

      <section className="marquee" aria-label="Mojye features">
        <div>TRACK IT <i>•</i> ASK MOJYE <i>•</i> GROW SAVINGS <i>•</i> PLAN AHEAD <i>•</i> TRACK IT <i>•</i> ASK MOJYE <i>•</i> GROW SAVINGS <i>•</i> PLAN AHEAD <i>•</i></div>
      </section>

      <section className="meet-section">
        <div className="meet-copy" data-reveal="up">
          <span className="section-kicker">A budget app with a little heart</span>
          <h2>Mojye keeps the numbers useful—and the habit human.</h2>
          <p>
            Built for everyday money decisions, Mojye helps you understand what
            happened, plan what comes next, and celebrate the progress in between.
          </p>
          <div className="meet-stats">
            <div><strong>7</strong><span>Savings Tree stages</span></div>
            <div><strong>2</strong><span>Visual themes</span></div>
            <div><strong>1</strong><span>Friendly money companion</span></div>
          </div>
        </div>
      </section>

      <section className="experience-section" id="experience">
        <div className="experience-heading" data-reveal="up">
          <span className="section-kicker section-kicker-light">Inside Mojye</span>
          <h2>One app. Four ways to feel more in control.</h2>
          <p>Scroll through the experiences already working in Mojye.</p>
        </div>
        <div className="phone-series">
          <Phone type="dashboard" label="Your monthly picture" index={0} />
          <Phone type="assistant" label="Ask Mojye" index={1} />
          <Phone type="tree" label="Grow your Savings Tree" index={2} />
          <Phone type="credit" label="Never lose track of a card payment" index={3} />
        </div>
      </section>

      <section className="story-section story-chat">
        <div className="story-copy" data-reveal="left">
          <span className="story-number">01</span>
          <span className="section-kicker">Ask Mojye</span>
          <h2>Chat with the money you&apos;ve already tracked.</h2>
          <p>
            Ask about available balance, food spending, biggest expenses,
            recurring bills, or budget suggestions. Mojye can also prepare a
            transaction from a simple message and lets you review it before saving.
          </p>
          <div className="prompt-cloud">
            <span>“What&apos;s my available balance?”</span>
            <span>“Add 500 to Bills”</span>
            <span>“What did I spend most on?”</span>
          </div>
        </div>
        <div className="story-visual assistant-stage" data-reveal="right">
          <div className="story-phone"><div className="device device-assistant"><div className="device-notch" /><div className="device-screen"><AssistantUI /></div></div></div>
          <div className="assistant-mascot-card">
            <span className="assistant-local-mark" aria-hidden="true">M</span>
            <span>Answers use only the financial data stored on your device.</span>
          </div>
        </div>
      </section>

      <section className="story-section story-tree">
        <div className="story-visual tree-stage-large" data-reveal="left">
          <div className="growth-rings"><i /><i /><i /></div>
          <div className="story-phone"><div className="device device-tree"><div className="device-notch" /><div className="device-screen"><TreeUI /></div></div></div>
          <div className="growth-label growth-label-one">Seed</div>
          <div className="growth-label growth-label-two">Young Tree</div>
          <div className="growth-label growth-label-three">Fully Grown</div>
        </div>
        <div className="story-copy" data-reveal="right">
          <span className="story-number">02</span>
          <span className="section-kicker">Savings Tree</span>
          <h2>Turn a savings number into something you can watch grow.</h2>
          <p>
            Set a meaningful full-growth target. Your tree moves from empty soil
            to seed, sprout, small plant, young tree, mature tree, and fully grown
            tree as your real savings balance changes.
          </p>
          <div className="stage-list"><span>Seed</span><span>Sprout</span><span>Plant</span><span>Tree</span></div>
        </div>
      </section>

      <section className="story-section story-credit">
        <div className="story-copy" data-reveal="left">
          <span className="story-number">03</span>
          <span className="section-kicker">Credit card reminder</span>
          <h2>Know whether this cycle is handled.</h2>
          <p>
            Keep the due date visible, turn phone alerts on, and mark the current
            payment paid or unpaid. It&apos;s a small signal that prevents a costly question later.
          </p>
          <div className="paid-toggle-demo"><span>Payment status</span><div><i /> Paid</div></div>
        </div>
        <div className="story-visual credit-stage" data-reveal="right">
          <div className="credit-orbit" />
          <div className="story-phone"><div className="device device-credit"><div className="device-notch" /><div className="device-screen"><CreditUI /></div></div></div>
          <div className="reminder-pop"><span>✓</span><div><strong>Marked as paid</strong><small>This cycle is handled.</small></div></div>
        </div>
      </section>

      <section className="features-section" id="features">
        <div className="features-heading" data-reveal="up">
          <span className="section-kicker">Everything else that keeps you moving</span>
          <h2>Detailed when you need it.<br />Simple when you don&apos;t.</h2>
        </div>
        <div className="feature-grid">
          {features.map((feature, index) => (
            <article className="feature-card" data-reveal="up" key={feature.title} style={{ "--delay": `${index * 60}ms` } as React.CSSProperties}>
              <span className="feature-icon">{feature.icon}</span>
              <span className="feature-index">0{index + 1}</span>
              <h3>{feature.title}</h3>
              <p>{feature.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="privacy-section" id="privacy">
        <div className="privacy-art" data-reveal="left">
          <Image className="mojye-character privacy-mojye" src="/mojye-protect.png" width={1600} height={1600} unoptimized alt="Mojye protecting your money with a shield" />
          <div className="privacy-ring privacy-ring-one" />
          <div className="privacy-ring privacy-ring-two" />
          <span className="privacy-tag privacy-tag-one">transactions</span>
          <span className="privacy-tag privacy-tag-two">budgets</span>
          <span className="privacy-tag privacy-tag-three">savings</span>
        </div>
        <div className="privacy-copy" data-reveal="right">
          <span className="section-kicker section-kicker-light">Privacy by design</span>
          <h2>Your finances stay close to you.</h2>
          <p>
            Mojye stores your budget information on your device. There&apos;s no
            account to create and no automatic cloud sync. Export a backup when
            you want one, and keep control of where it goes.
          </p>
          <div className="privacy-list"><span><i>✓</i>No sign-up</span><span><i>✓</i>Works offline</span><span><i>✓</i>Portable JSON backups</span></div>
        </div>
      </section>

      <section className="web-section" id="web">
        <div className="web-copy" data-reveal="left">
          <span className="coming-pill"><i /> Browser edition is live</span>
          <h2>Use Mojye on a bigger screen.</h2>
          <p>
            Track your money, ask Mojye, grow your Savings Tree, and manage card
            reminders directly in your browser. Browser and Android data remain
            separate unless you move a backup between them.
          </p>
          <a className="web-browser-button" href={browserAppUrl} target="_blank" rel="noreferrer">Try in Browser <span>↗</span></a>
        </div>
        <div className="web-visual" data-reveal="right">
          <div className="laptop">
            <div className="laptop-bar"><i /><i /><i /><span>mojye.app</span></div>
            <div className="laptop-screen"><aside><b>M</b><i /><i /><i /><i /></aside><div className="laptop-content"><small>Hello, Jye.</small><strong>Dashboard</strong><div><i /><i /><i /></div><span /></div></div>
          </div>
        </div>
      </section>

      <section className="final-cta">
        <div className="final-mojye" data-reveal="left">
          <Image className="mojye-character" src="/mojye-celebrate.png" width={1600} height={1600} unoptimized alt="Mojye celebrating a money milestone" />
        </div>
        <div data-reveal="right">
          <span className="section-kicker">Start with today</span>
          <h2>Plant better money habits with Mojye.</h2>
          <p>Track what matters. Ask better questions. Watch your savings grow.</p>
          <PlayButton dark />
        </div>
      </section>

      <section className="testers-section" id="android-test">
        <div className="testers-heading" data-reveal="up">
          <span className="section-kicker section-kicker-light">Android testers needed</span>
          <h2>Help Mojye reach Google Play.</h2>
          <p>
            Mojye is currently in closed testing. If you have an Android device,
            follow these three steps to join the test and help an indie developer
            from the Philippines.
          </p>
        </div>
        <div className="tester-steps">
          <article data-reveal="up">
            <span>01</span>
            <h3>Join the Google Group</h3>
            <p>Sign in with the Google account you use on your Android device, then join Mojye Testers.</p>
            <a href={testersGroupUrl} target="_blank" rel="noreferrer">Join Mojye Testers <b>↗</b></a>
          </article>
          <article data-reveal="up">
            <span>02</span>
            <h3>Become a tester</h3>
            <p>After joining the group, open the closed-testing page and select “Become a tester.”</p>
            <a href={closedTestUrl} target="_blank" rel="noreferrer">Open closed test <b>↗</b></a>
          </article>
          <article data-reveal="up">
            <span>03</span>
            <h3>Install Mojye</h3>
            <p>Once you have opted in, download Mojye from its Google Play testing listing.</p>
            <a href={playStoreUrl} target="_blank" rel="noreferrer">Install test version <b>↗</b></a>
          </article>
        </div>
        <p className="tester-note">
          If Google Play says “App not found” or “Not available,” wait a few minutes after joining the Google Group, then try again.
        </p>
      </section>

      <footer>
        <Wordmark inverse />
        <p>Mojye: Budget Tracker · Built by JYE Studios</p>
        <div><a href="#experience">Experience</a><a href="#privacy">Privacy</a><a href={browserAppUrl} target="_blank" rel="noreferrer">Browser App</a><a href="#android-test">Join Android Test</a></div>
      </footer>
    </main>
  );
}
