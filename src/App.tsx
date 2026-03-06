import { CheckCircle2, Clock, MapPin, Mail, ArrowRight, ShieldCheck } from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-orange selection:text-white">
      {/* Navigation */}
      <nav className="bg-navy text-white py-4 px-6 md:px-12 flex justify-between items-center border-b-4 border-orange sticky top-0 z-50">
        <div className="flex items-center gap-2">
          <img src="/logo.png" className="w-8 h-8 object-contain rounded" />
          <span className="font-display font-bold text-2xl tracking-tight">Tender<span className="text-orange">Husky</span></span>
        </div>
        <a 
          href="#contact" 
          className="hidden md:inline-flex items-center justify-center bg-orange hover:bg-orange/90 text-white font-bold py-2 px-6 rounded transition-colors duration-200 uppercase tracking-wide text-sm"
        >
          Get Access
        </a>
      </nav>

      {/* Hero Section */}
      <header className="relative bg-navy text-white pt-20 pb-32 px-6 md:px-12 overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>
        
        <div className="max-w-5xl mx-auto relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-orange font-semibold text-sm mb-8 uppercase tracking-wider">
            <ShieldCheck className="w-4 h-4" />
            Custom, Hyper-Local Bid Hunting
          </div>
          <h1 className="font-display font-black text-5xl md:text-7xl leading-tight mb-6 uppercase tracking-tighter">
            Find the Bids <br className="hidden md:block" />
            <span className="text-orange">The Big Boards Miss.</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-300 max-w-3xl mb-10 leading-relaxed font-medium">
            We monitor local county, municipal, and school district portals to find hidden opportunities—high-value government contracts that haven't hit the major national databases yet.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="#contact" 
              className="inline-flex items-center justify-center bg-orange hover:bg-orange/90 text-white font-bold py-4 px-8 rounded text-lg transition-transform hover:-translate-y-1 duration-200 shadow-lg shadow-orange/20 uppercase tracking-wide"
            >
              Get Your Morning Bid Report
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
          </div>
        </div>
      </header>

      {/* The Local Advantage */}
      <section className="py-24 px-6 md:px-12 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-display font-extrabold text-3xl md:text-4xl text-navy uppercase tracking-tight mb-4">The Local Advantage</h2>
            <div className="w-24 h-1 bg-orange mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-12">
            {/* Column 1 */}
            <div className="bg-slate-50 p-8 rounded border border-slate-200 shadow-sm relative overflow-hidden group hover:border-orange transition-colors">
              <div className="absolute top-0 left-0 w-1 h-full bg-navy group-hover:bg-orange transition-colors"></div>
              <div className="bg-navy/5 w-14 h-14 rounded flex items-center justify-center mb-6">
                <ShieldCheck className="w-7 h-7 text-navy" />
              </div>
              <h3 className="font-display font-bold text-xl text-navy mb-4 uppercase">Direct Sourcing</h3>
              <p className="text-slate-grey leading-relaxed">
                Many local agencies use obscure sub-pages to host PDFs. Aggregator bots miss them. <strong className="text-navy">We don't.</strong>
              </p>
            </div>

            {/* Column 2 */}
            <div className="bg-slate-50 p-8 rounded border border-slate-200 shadow-sm relative overflow-hidden group hover:border-orange transition-colors">
              <div className="absolute top-0 left-0 w-1 h-full bg-navy group-hover:bg-orange transition-colors"></div>
              <div className="bg-navy/5 w-14 h-14 rounded flex items-center justify-center mb-6">
                <Clock className="w-7 h-7 text-navy" />
              </div>
              <h3 className="font-display font-bold text-xl text-navy mb-4 uppercase">The Early Head Start</h3>
              <p className="text-slate-grey leading-relaxed">
                Big databases can take days to process and upload bids. We deliver the raw PDF and a clear summary to your inbox <strong className="text-navy">shortly after issuance.</strong>
              </p>
            </div>

            {/* Column 3 */}
            <div className="bg-slate-50 p-8 rounded border border-slate-200 shadow-sm relative overflow-hidden group hover:border-orange transition-colors">
              <div className="absolute top-0 left-0 w-1 h-full bg-navy group-hover:bg-orange transition-colors"></div>
              <div className="bg-navy/5 w-14 h-14 rounded flex items-center justify-center mb-6">
                <MapPin className="w-7 h-7 text-navy" />
              </div>
              <h3 className="font-display font-bold text-xl text-navy mb-4 uppercase">Custom Bid Hunting</h3>
              <p className="text-slate-grey leading-relaxed">
                We focus on your specific <strong className="text-navy">target region</strong> and criteria, ensuring you only see the projects that matter to your business.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 px-6 md:px-12 bg-slate-100">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row gap-16 items-center">
            <div className="md:w-1/2">
              <h2 className="font-display font-extrabold text-3xl md:text-4xl text-navy uppercase tracking-tight mb-4">How It Works</h2>
              <div className="w-24 h-1 bg-orange mb-8"></div>
              <p className="text-lg text-slate-grey mb-8">
                We've built specialized tools to monitor the portals that matter to your business, delivering actionable updates while your competitors are still waiting.
              </p>
            </div>
            
            <div className="md:w-1/2 space-y-8">
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-navy text-white font-display font-black text-xl flex items-center justify-center rounded">1</div>
                <div>
                  <h4 className="font-bold text-lg text-navy mb-2">Nightly Monitoring</h4>
                  <p className="text-slate-grey">We scan hundreds of fragmented local procurement portals every night.</p>
                </div>
              </div>
              
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-navy text-white font-display font-black text-xl flex items-center justify-center rounded">2</div>
                <div>
                  <h4 className="font-bold text-lg text-navy mb-2">Data Extraction</h4>
                  <p className="text-slate-grey">We pull out the key details: Square footage, mandatory walkthrough dates, and bond requirements.</p>
                </div>
              </div>
              
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-orange text-white font-display font-black text-xl flex items-center justify-center rounded shadow-lg shadow-orange/20">3</div>
                <div>
                  <h4 className="font-bold text-lg text-navy mb-2">The Morning Report</h4>
                  <p className="text-slate-grey">You get a clean, easy-to-read summary in your inbox every morning.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-24 px-6 md:px-12 bg-navy text-white relative">
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'linear-gradient(45deg, #ffffff 25%, transparent 25%, transparent 75%, #ffffff 75%, #ffffff), linear-gradient(45deg, #ffffff 25%, transparent 25%, transparent 75%, #ffffff 75%, #ffffff)', backgroundSize: '20px 20px', backgroundPosition: '0 0, 10px 10px' }}></div>
        
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="font-display font-extrabold text-3xl md:text-4xl uppercase tracking-tight mb-4">Straightforward Pricing</h2>
            <div className="w-24 h-1 bg-orange mx-auto"></div>
          </div>

          <div className="bg-white text-navy rounded-lg overflow-hidden shadow-2xl max-w-lg mx-auto border-t-8 border-orange">
            <div className="p-8 md:p-10 text-center border-b border-slate-100">
              <h3 className="font-display font-black text-2xl uppercase tracking-wide mb-2">The Daily Dispatch</h3>
              <div className="flex items-center justify-center gap-1 mb-4">
                <span className="text-3xl font-bold text-slate-400">$</span>
                <span className="text-6xl font-black tracking-tighter">500</span>
                <span className="text-xl font-bold text-slate-400 self-end mb-2">/mo</span>
              </div>
              <p className="text-slate-500 font-medium">No long-term contracts. Cancel anytime.</p>
            </div>
            
            <div className="p-8 md:p-10 bg-slate-50">
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-orange flex-shrink-0" />
                  <span className="font-medium text-slate-700">Daily morning email alerts</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-orange flex-shrink-0" />
                  <span className="font-medium text-slate-700">Full PDF extraction & summaries</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-orange flex-shrink-0" />
                  <span className="font-medium text-slate-700">Mandatory meeting reminders</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-orange flex-shrink-0" />
                  <span className="font-medium text-slate-700">Direct contact info for purchasing agents</span>
                </li>
              </ul>
              <a 
                href="#contact" 
                className="block w-full text-center bg-navy hover:bg-navy/90 text-white font-bold py-4 px-6 rounded transition-colors duration-200 uppercase tracking-wide"
              >
                Start Your Subscription
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact / Lead Form */}
      <section id="contact" className="py-24 px-6 md:px-12 bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-display font-extrabold text-3xl md:text-4xl text-navy uppercase tracking-tight mb-4">Start Finding Better Bids</h2>
            <p className="text-lg text-slate-grey">Fill out the form below to request access. We limit subscriptions by region to maintain your competitive advantage.</p>
          </div>

          <form className="bg-slate-50 p-8 md:p-10 rounded border border-slate-200 shadow-sm" onSubmit={(e) => e.preventDefault()}>
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="firstName" className="block text-sm font-bold text-navy uppercase tracking-wide mb-2">First Name</label>
                <input 
                  type="text" 
                  id="firstName" 
                  className="w-full px-4 py-3 rounded bg-white border border-slate-300 focus:border-orange focus:ring-2 focus:ring-orange/20 outline-none transition-all"
                  placeholder="John"
                />
              </div>
              <div>
                <label htmlFor="lastName" className="block text-sm font-bold text-navy uppercase tracking-wide mb-2">Last Name</label>
                <input 
                  type="text" 
                  id="lastName" 
                  className="w-full px-4 py-3 rounded bg-white border border-slate-300 focus:border-orange focus:ring-2 focus:ring-orange/20 outline-none transition-all"
                  placeholder="Doe"
                />
              </div>
            </div>
            
            <div className="mb-6">
              <label htmlFor="company" className="block text-sm font-bold text-navy uppercase tracking-wide mb-2">Company Name</label>
              <input 
                type="text" 
                id="company" 
                className="w-full px-4 py-3 rounded bg-white border border-slate-300 focus:border-orange focus:ring-2 focus:ring-orange/20 outline-none transition-all"
                placeholder="Builders LLC"
              />
            </div>

            <div className="mb-6">
              <label htmlFor="email" className="block text-sm font-bold text-navy uppercase tracking-wide mb-2">Work Email</label>
              <input 
                type="email" 
                id="email" 
                className="w-full px-4 py-3 rounded bg-white border border-slate-300 focus:border-orange focus:ring-2 focus:ring-orange/20 outline-none transition-all"
                placeholder="john@builders.com"
              />
            </div>
            
            <div className="mb-8">
              <label htmlFor="territory" className="block text-sm font-bold text-navy uppercase tracking-wide mb-2">Target Region / Counties</label>
              <input 
                type="text" 
                id="territory" 
                className="w-full px-4 py-3 rounded bg-white border border-slate-300 focus:border-orange focus:ring-2 focus:ring-orange/20 outline-none transition-all"
                placeholder="e.g., Cook County, IL"
              />
            </div>

            <button 
              type="submit" 
              className="w-full bg-orange hover:bg-orange/90 text-white font-bold py-4 px-6 rounded text-lg transition-colors duration-200 uppercase tracking-wide flex items-center justify-center gap-2"
            >
              <Mail className="w-5 h-5" />
              Request Access
            </button>
            <p className="text-center text-sm text-slate-500 mt-4">We'll review your request and get back to you within 24 hours.</p>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-navy text-slate-400 py-12 px-6 md:px-12 border-t border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <img src="/logo.png" className="w-6 h-6 object-contain rounded" />
            <span className="font-display font-bold text-xl text-white tracking-tight">Tender<span className="text-orange">Husky</span></span>
          </div>
          
          <div className="text-center md:text-right">
            <p className="font-medium text-slate-300 mb-1">TenderHusky.com | Custom, Hyper-Local Bid Hunting.</p>
            <p className="text-sm">Copyright &copy; 2026 TenderHusky. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
