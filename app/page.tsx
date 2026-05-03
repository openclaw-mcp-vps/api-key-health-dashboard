export default function Page() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#";
  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-16 text-center">
        <span className="inline-block mb-4 px-3 py-1 rounded-full bg-[#161b22] border border-[#30363d] text-xs text-[#58a6ff] uppercase tracking-widest">
          DevOps Tool
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Monitor All API Keys<br />
          <span className="text-[#58a6ff]">Expiry Dates Centrally</span>
        </h1>
        <p className="text-lg text-[#8b949e] mb-8 max-w-xl mx-auto">
          Track expiration dates, usage patterns, and rotation schedules for every API key across all your services — before they silently break production.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold px-8 py-3 rounded-lg transition-colors text-base"
        >
          Get Access — $22/mo
        </a>
        <p className="mt-4 text-sm text-[#6e7681]">Cancel anytime. Instant access after payment.</p>
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
          {[
            { icon: "🔑", title: "Unified Key Registry", desc: "Connect keys from AWS, GitHub, Stripe, Twilio, and 50+ services in one place." },
            { icon: "⏰", title: "Expiry Alerts", desc: "Get email and Slack alerts 30, 7, and 1 day before any key expires." },
            { icon: "📊", title: "Usage Analytics", desc: "See which keys are active, stale, or overdue for rotation at a glance." }
          ].map((f) => (
            <div key={f.title} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <div className="text-2xl mb-2">{f.icon}</div>
              <div className="font-semibold text-white mb-1">{f.title}</div>
              <div className="text-sm text-[#8b949e]">{f.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-20">
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 text-center shadow-lg">
          <div className="text-sm text-[#58a6ff] font-semibold uppercase tracking-widest mb-2">Pro Plan</div>
          <div className="text-5xl font-bold text-white mb-1">$22</div>
          <div className="text-[#8b949e] mb-6">per month</div>
          <ul className="text-sm text-left space-y-3 mb-8">
            {[
              "Unlimited API key tracking",
              "Multi-service integrations",
              "Automated expiry alerts",
              "Rotation schedule reminders",
              "Usage pattern dashboard",
              "Team access (up to 5 seats)",
              "Priority email support"
            ].map((item) => (
              <li key={item} className="flex items-center gap-2">
                <span className="text-[#58a6ff]">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold py-3 rounded-lg transition-colors text-center"
          >
            Start Monitoring Now
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {[
            {
              q: "Which services can I connect?",
              a: "You can connect API keys from AWS, GitHub, GitLab, Stripe, Twilio, SendGrid, Datadog, and 50+ other services. If a service issues API keys with expiry dates, we support it."
            },
            {
              q: "How do expiry alerts work?",
              a: "We send automated email and Slack notifications 30 days, 7 days, and 1 day before any key expires. You can customize alert thresholds per key or service."
            },
            {
              q: "Is my data secure?",
              a: "We store only key metadata (name, expiry date, service) — never the actual secret values. All data is encrypted at rest and in transit."
            }
          ].map((item) => (
            <div key={item.q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <div className="font-semibold text-white mb-2">{item.q}</div>
              <div className="text-sm text-[#8b949e]">{item.a}</div>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center text-xs text-[#6e7681] pb-8">
        &copy; {new Date().getFullYear()} API Key Health Dashboard. All rights reserved.
      </footer>
    </main>
  );
}
