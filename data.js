const PERSONAS = [
  {
    age: "Ages 25–40 · marketing, HR, finance",
    name: "The career accelerator",
    motivation: "Fear of obsolescence",
    need: "Practical productivity hacks, zero technical friction"
  },
  {
    age: "Ages 18–24 · non-CS majors",
    name: "The curious student",
    motivation: "Competitive edge for the job market",
    need: "Trendy visuals, sound-smart interview analogies"
  },
  {
    age: "Ages 35–60 · business owners",
    name: "The lifelong learner",
    motivation: "Strategic understanding of business impact",
    need: "Risk-mitigation insight, big-picture metaphors, tool reviews"
  },
  {
    age: "Ages 18–45 · social scrollers",
    name: "The casual explorer",
    motivation: "Instant gratification, news literacy",
    need: "Explain-like-I'm-five summaries, high-impact wow moments"
  }
];

const VAULT = [
  { term: "LLM", analogy: "a super-charged autocomplete", value: "removes the mystery of \"thinking\" machines" },
  { term: "RAG", analogy: "a librarian fetching the exact page", value: "explains accuracy without a math degree" },
  { term: "Fine-tuning", analogy: "sending a trained intern to a specialist course", value: "turns abstract capability into a billable skill" },
  { term: "Hallucination", analogy: "a guess machine, confidently wrong", value: "builds healthy skepticism and trust" },
  { term: "Cybersecurity (AI)", analogy: "a guard dog sniffing for past attack scents", value: "makes complex defense feel tangible" }
];

const SEQUENCE = [
  { num: "01", title: "Active command", desc: "Force a familiar mental model before any technical weight" },
  { num: "02", title: "Human story", desc: "A relatable hook — a fast intern watching millions of examples" },
  { num: "03", title: "Simple definition", desc: "One sentence. \"AI is a machine that guesses the next word.\"" },
  { num: "04", title: "Why it matters", desc: "Reveal the professional benefit immediately" }
];

const PILLARS = [
  { num: "Pillar 1", title: "Foundations", desc: "Neural networks and machine learning, explained via stories — not math" },
  { num: "Pillar 2", title: "Modern AI brains", desc: "Deep dives into ChatGPT, Claude, and Gemini — LLMs, RAG, agents" },
  { num: "Pillar 3", title: "Architecture", desc: "Cloud vs. on-device AI, told through restaurant-ordering analogies" },
  { num: "Pillar 4", title: "Real-world use cases", desc: "AI for productivity, creativity, and everyday decision-making" },
  { num: "Pillar 5", title: "AI for cybersecurity", desc: "Protecting against deepfakes and the evolution of phishing" }
];

const RETENTION_ASSETS = [
  { title: "The AI sidekick", desc: "A recurring brand mascot — a friendly librarian — who appears to translate jargon into human language on screen. A visual anchor for clarity." },
  { title: "The before & after challenge", desc: "Set a task in episode one, reveal the AI-powered result in episode two. Passive viewers become active participants." },
  { title: "The visual cliffhanger", desc: "Mask a key diagram with a puzzle piece at the end of a video, promising the reveal in the next installment." }
];

const CADENCE = [
  { platform: "YouTube", value: 2, unit: "12-min deep dives / week" },
  { platform: "Shorts / TikTok", value: 4, unit: "60-sec concept blasts / week (3–5)" },
  { platform: "LinkedIn", value: 2, unit: "business case summaries / week" },
  { platform: "Newsletter", value: 1, unit: "weekly digest + cheat sheet" }
];

const TIMELINE = [
  { week: "Week 1", title: "What is AI? A story for humans", pillar: "Foundations" },
  { week: "Week 2", title: "LLMs explained with a coffee shop", pillar: "Modern AI brains" },
  { week: "Week 3", title: "RAG: the librarian trick", pillar: "Modern AI brains" },
  { week: "Week 4", title: "AI architecture (no code, just Legos)", pillar: "Architecture" },
  { week: "Week 5", title: "5 free AI tools I use every day", pillar: "Real-world use cases" },
  { week: "Week 6", title: "How to stay safe from AI hackers", pillar: "Cybersecurity" },
  { week: "Week 7", title: "The AI swipe file: full glossary review", pillar: "Review" },
  { week: "Week 8", title: "The future of your job (the 3 lenses)", pillar: "Synthesis" }
];

const KPIS = [
  { target: ">8%", name: "Click-through rate", sub: "Validates the no-jargon promise" },
  { target: ">55%", name: "Average view duration", sub: "Validates the analogy framework" },
  { target: ">4 / 1k", name: "Subscriber conversion", sub: "Per 1,000 views" }
];

const DEMAND_DATA = {
  labels: ["\"What is AI?\"\n(absolute volume)", "\"AI Explained\"\ncontent growth", "\"LLM explained\nnon-technical\"", "\"RAG AI\nsimple\"", "\"AI cybersecurity\nthreats\""],
  type: ["volume", "growth", "growth", "growth", "volume"],
  values: [5200000, 340, 210, 180, 890000]
};
