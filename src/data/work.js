export const projects = [
  {
    id: 'tezi-short',
    company: 'Tezi',
    title: 'AI Product Pivot',
    year: '2025',
    role: 'Founding Designer',
    summary: 'Defining a new product direction away from AI chat in a rapidly shifting AI landscape.',
    cover: '/images/Projects/Tezi/Tezi Title Card.png',
    intro: {
      a: "As Tezi's founding designer, my role extended well beyond design. On a small early-stage team, I was working across product strategy, product visioning, roadmap definition, and day-to-day execution. We were at an exciting time building on the frontier of AI when the rules were still being written. We were defining what a successful AI recruiting product should look like while building a new business from scratch.",
      b: "The problem framing, framework, and product direction below are my own. Johan, our second designer, contributed to the prototyping phase and helped sharpen what we ultimately shipped.",
    },
    sections: [
      {
        body: "Tezi is an AI recruiting product that provides an AI agent that handles sourcing, outreach, screening, and scheduling with the support of a recruiter. When Tezi launched in 2024, chat was the default for nearly every AI product, including ours, and it mapped directly to the founder's vision: a product that felt like delegating to a human recruiter over Slack. <br><br>Unfortunately, when I joined as the first design hire, half our beta users had churned, calibrating the AI on an ideal candidate averaged 60+ minutes, and support was spending three or more hours per customer per week just helping people get started. Chat was struggling to adapt to a collaborative recruiting workflow with multiple threads running in parallel across dozens of candidates. Instead, it was collapsing all of that into a linear thread where nothing persisted and nothing was shareable.",
        image: '/images/Projects/Tezi/Tezi Image 1.png',
      },
      {
        body: "To start investigating, I dove in head first on support rotation, interviewed the team across sales, product, and engineering, and combed through sales calls for patterns. The feedback pointed to the same issues: non-deterministic results, slow call-and-response, an inability to be precise when it mattered, and an ephemeral interface where customers lost track of what they'd told the AI. The feedback was pointing to a fundamental mismatch between the chat paradigm and a recruiting workflow. <br><br>Clearly chat wasn't working, but we didn't want to flee to traditional UI either. To avoid framing the problem as a binary choice I developed a spectrum of AI interaction patterns and mapped them to each step of the recruiting process. My goal was to develop a more nuanced language of what was possible and what was right for each step in the flow. Simply put, chat excels at the blank-page problem and flexible exploration; classic UI is better for precision and repeated workflows; and there are varying degrees of strengths and weaknesses across the spectrum. The answer wasn't one paradigm throughout, but the right one applied at the right step in each flow. Reach out for additional details on the framework.",
        images: ['/images/Projects/Tezi/Tezi Image 2.png'],
      },
      {
        body: "The framework helped open up the conversation within the team and break away from the false dichotomy. I moved quickly to spin up AI prototypes across our four core recruiting workflows to build further clarity on how we could successfully blend these different interaction modes together. To flesh out the ideas as broadly as possible, I explored multiple interaction modes across cards, tables, and documents for each step on the spectrum. Working closely with engineering and the founders, we landed on tables for the information density they offered.<br><br>To validate with users, we hooked the two prevailing prototypes up to our codebase and ran moderated research sessions with eight customers, using their real roles and real data. The results were clear: the experience felt intuitive, users felt in control, and they were getting to a quality candidate list significantly faster.",
        video: '/videos/Projects/Tezi/tezi-3.mp4',
      },
      {
        heading: 'Outcome',
        body: 'The entire search experience was too complex to tackle all at once. We focused the first release on just the core search workflow to deliver the most critical value quickly, and leveraged the broader vision work as a blueprint for releases over the coming year. We learned a great deal from research, and I made a long list of improvements to the search experience before launch. <br><br>In the end, calibration time was brought down to less than 15 minutes, support time dropped by 80%, and customers were seeing the core product value in minutes, not days. Beyond the metrics, the work gave the team a shared framework for how we wanted to build our product moving forward.',
        image: '/images/Projects/Tezi/Tezi Image 4.png',
      },
    ],
  },
  {
    id: 'wealthfront',
    company: 'Wealthfront',
    title: 'Automated Bond Ladder',
    year: '2023',
    role: 'Director, Product Design',
    summary: 'Designing a sophisticated fixed-income investment product that made institutional-grade investing accessible to everyday investors.',
    cover: '/images/Projects/Wealthfront/WF Title Card.png',
    intro: {
      a: "I directed design for the Investing organization at Wealthfront, covering product design, content, research, and design systems. Building for fintech is unique. The goal is to help everyday investors make confident decisions about their savings while balancing deeply complex and regulated financial products. Delivering consistent quality and guidance was key to gaining our customers' trust. Cross-functional alignment and moving quickly were ongoing challenges when I joined, and this project was a chance to change both.",
      b: "Much of the work below was executed by my talented team under my direction. I set the strategic direction alongside the VP of Product, led the cross-functional sprint that built the alignment we needed, and directed the work through the execution phase.",
    },
    sections: [
      {
        body: "When interest rates rose sharply in 2022, Treasury bill purchases hit $15 billion in June alone, the highest on record. After fifteen years of near-zero interest rates, fixed income was relevant again, and Wealthfront clients were actively asking for somewhere safe to put their cash. Fixed income products hadn't evolved for retail investors at the same pace as other categories. In fact, they were stuck in 2001. Wealthfront had an opportunity to build a genuinely useful Bond Ladder for everyday investors before anyone else did.",
        image: '/images/Projects/Wealthfront/Wealthfront Image 1.png',
      },
      {
        body: "After closely collaborating with the VP of Product on the strategic direction, I led a week-long cross-functional design sprint with design, research, product, engineering, and financial operations. The goal was to bring the concept to life on a quick timeline to get buy in from leadership. Wealthfront had historically struggled to keep these teams aligned on new products, particularly at the intersection of financial constraints, legal requirements, and user experience. They'd also struggled to ship quickly to capitalize on movements in the market. The sprint was designed to solve both problems at once: generate ideas fast, build shared understanding, and walk away with something testable. We generated 20 solutions and built 3 prototypes in 5 days. The sprint did an excellent job building conviction and alignment on the concept, and we were able to move into execution quickly.",
        image: '/images/Projects/Wealthfront/Wealthfront Image 2.png',
      },
      {
        body: "A bond ladder is a genuinely complex concept: a multi-layered structure of staggered maturities that automatically reinvest as they mature. The design challenge wasn't just simplifying the interface. It was helping a casual investor understand what they were buying and how it would behave over time before they committed money to it. We took an iterative approach, prototyping and conducting user research until we found a structure that worked. A major part of that was leading content design in close collaboration with legal and finance so that we could translate complex concepts into plain language that didn't intimidate users or create compliance risk. Getting that right was as important as the visual design.",
        image: '/images/Projects/Wealthfront/Wealthfront Image 3.png',
      },
      {
        heading: 'Outcome',
        body: "One month after launch we'd seen $100M in new assets under management and 830 new accounts opened, putting us on pace to hit our goal of $250M by quarter-end. That trajectory made it the second fastest-growing product launch in Wealthfront's history. We'd also hit our goal of shipping in four months, well ahead of the pace the team was used to, and built a stronger foundation between product, legal, and finance that we'd rely heavily on going forward.",
        image: '/images/Projects/Wealthfront/Wealthfront Image 4.png',
      },
    ],
  },
  {
    id: 'instacart',
    company: 'Instacart',
    title: 'Design Leadership',
    year: '2021',
    role: 'Director, Product Design',
    summary: "A colletion of leadership work I'm most proud of from Instacart.",
    cover: '/images/Projects/Instacart/Instacart Title Card.png',
    intro: {
      a: "When I joined Instacart's ads team in 2020, there were just two designers. By the time I left, I'd grown that team to 14, and picked up the consumer team of 16 as well. Ultimately, I was leading 30 designers across half of Instacart's surface area, covering product design, research, and content responsible for $1.5B in revenue.<br><br>I've highlighted some of the work I've done to grow and manage the design org.",
      c: "Director, Product Design, 2020–2022",
    },
    sections: [
      {
        heading: 'Launching an executive design crit',
        body: "The Instacart design team grew to 80 people across a four-sided marketplace, with a director of design on each. Weekly crits ballooned from a few each week for the whole org to three per pillar each week. Attending every session across all four pillars meant 10+ hours of crit time weekly, so directors ended up attending only their own pillar's sessions because of their own bandwidth, and the VP of design faced the same tradeoff. With so much critical work in flight across the business, there was no forum where design leaders could align on the most important work.<br><br> To help us get past these growing pains, I pitched a consolidated executive design crit as a solution. Once a week, the VP of design, all four design directors, the head of research, and the head of content would gather for a focused 30-minute session dedicated to the most critical work across the company. Teams kept their regular crits for day-to-day projects, freeing directors to confidently opt out of other pillars' sessions knowing the work that mattered most would surface here.<br><br>The VP was on board, and just needed someone with the activation energy to make it happen. I worked with design operations to build the schedule and roll out the program for our team.<br><br> The results went beyond visibility. Directors gained a shared view into work happening across the company, which made cross-functional coordination easier. ICs got regular exposure to senior leadership, which accelerated their growth and gave them practice presenting their thinking at a higher level. And design systems had a consistent window into live projects, which helped keep the product more coherent as the company scaled.",
      },
      {
        heading: 'Building a manager training program',
        body: "As the design org scaled, we were both hiring experienced managers from outside and promoting talented ICs into management for the first time. I noticed new managers were feeling overwhelmed and leaning heavily on their 1:1s with their manager for support, but were craving more time to help them grow as a manager. I believed a structured peer manager program could help give new managers the support they craved, and provide a more consistent way for the whole leadership team to pass on their learnings in a focused way. I got the design directors and VP on board, and partnered with the head of content and design ops to architect and roll out the plan.<br><br>The program ran in cohorts of six, small enough that peer conversation was a meaningful part of every session and new managers could build camaraderie across the company. The facilitators were Directors from Design, so every discussion was grounded in the specific challenges of managing a design team rather than generic management advice that wouldn't translate to their day-to-day.<br><br>Twelve managers went through the program across two cohorts. Afterward we saw a meaningful uptick in how prepared they were for discussions in leadership forums, noticeably clearer and more confident 360 reviews, and consistently positive upward feedback from their reports. After the program concluded, managers joined a monthly roundtable where the group would surface one real challenge someone was facing and work through it together, keeping the learning active and giving managers a peer network to rely on.",
      },
    ],
  },
];
