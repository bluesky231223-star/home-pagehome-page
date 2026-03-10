import {
  Calculator,
  FileText,
  Building2,
  Users,
  Briefcase,
  TrendingUp,
  CheckCircle,
  Award,
  Clock,
  Shield,
  Cloud,
  ShoppingCart,
  Home,
  HardHat,
  Rocket,
  Building,
  Globe,
  ArrowRight,
  Phone
} from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <header className="bg-white border-b border-purple-200 sticky top-0 z-50 transition-smooth shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2 hover-lift">
              <div className="p-2 bg-gradient-to-br from-purple-600 to-indigo-600 rounded-lg">
                <Calculator className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900">DubaiAccounting</span>
            </div>
            <button className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-6 py-2 rounded-lg hover:shadow-lg transition-smooth transform hover:scale-105">
              Contact Us
            </button>
          </div>
        </div>
      </header>

      <section className="relative bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float" style={{ animationDelay: '2s' }}></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight animate-fade-in-down">
              Smart Accounting & Tax Services for Businesses in Dubai
            </h1>
            <p className="text-xl text-purple-100 mb-10 leading-relaxed animate-fade-in-up animate-stagger-1">
              Helping startups, SMEs, and international companies manage accounting,
              VAT, and corporate tax compliance in the UAE.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up animate-stagger-2">
              <button className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-8 py-4 rounded-lg hover:shadow-xl transition-smooth text-lg font-semibold flex items-center justify-center gap-2 transform hover:scale-105 hover:-translate-y-1">
                Get Free Consultation
                <ArrowRight className="h-5 w-5" />
              </button>
              <button className="bg-white bg-opacity-10 backdrop-blur text-white px-8 py-4 rounded-lg hover:bg-opacity-20 transition-smooth text-lg font-semibold border-2 border-white border-opacity-30 hover:border-opacity-50">
                View Our Services
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white border-y border-purple-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center animate-fade-in-up animate-stagger-1 hover-lift p-6 rounded-xl transition-smooth">
              <div className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent mb-2">500+</div>
              <div className="text-gray-600 font-medium">Businesses Supported</div>
            </div>
            <div className="text-center animate-fade-in-up animate-stagger-2 hover-lift p-6 rounded-xl transition-smooth">
              <div className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent mb-2">10+</div>
              <div className="text-gray-600 font-medium">Years Experience</div>
            </div>
            <div className="text-center animate-fade-in-up animate-stagger-3 hover-lift p-6 rounded-xl transition-smooth">
              <div className="flex justify-center mb-2">
                <Award className="h-12 w-12 text-purple-600" />
              </div>
              <div className="text-gray-600 font-medium">Certified Accountants</div>
            </div>
            <div className="text-center animate-fade-in-up animate-stagger-4 hover-lift p-6 rounded-xl transition-smooth">
              <div className="flex justify-center mb-2">
                <Shield className="h-12 w-12 text-purple-600" />
              </div>
              <div className="text-gray-600 font-medium">UAE Tax Compliance Experts</div>
            </div>
          </div>
          <p className="text-center text-gray-600 mt-12 text-lg animate-fade-in-up animate-stagger-5">
            Trusted by businesses across Dubai for reliable accounting, tax, and financial management services.
          </p>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-down">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-xl text-gray-600">Comprehensive financial solutions for your business</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-xl transition-smooth border border-purple-100 hover:border-purple-300 hover-lift animate-fade-in-up animate-stagger-1">
              <div className="p-3 bg-gradient-to-br from-purple-100 to-indigo-100 rounded-lg w-fit mb-4">
                <FileText className="h-12 w-12 text-purple-600" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-3">Accounting & Bookkeeping</h3>
              <p className="text-gray-600 leading-relaxed">
                Accurate financial records maintained according to UAE regulations.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-xl transition-smooth border border-purple-100 hover:border-purple-300 hover-lift animate-fade-in-up animate-stagger-2">
              <div className="p-3 bg-gradient-to-br from-purple-100 to-indigo-100 rounded-lg w-fit mb-4">
                <Calculator className="h-12 w-12 text-purple-600" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-3">VAT Services</h3>
              <p className="text-gray-600 leading-relaxed">
                VAT registration, filing, and compliance handled by experts.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-xl transition-smooth border border-purple-100 hover:border-purple-300 hover-lift animate-fade-in-up animate-stagger-3">
              <div className="p-3 bg-gradient-to-br from-purple-100 to-indigo-100 rounded-lg w-fit mb-4">
                <Building2 className="h-12 w-12 text-purple-600" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-3">Corporate Tax</h3>
              <p className="text-gray-600 leading-relaxed">
                Corporate tax planning and compliance for UAE companies.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-xl transition-smooth border border-purple-100 hover:border-purple-300 hover-lift animate-fade-in-up animate-stagger-4">
              <div className="p-3 bg-gradient-to-br from-purple-100 to-indigo-100 rounded-lg w-fit mb-4">
                <Users className="h-12 w-12 text-purple-600" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-3">Payroll Management</h3>
              <p className="text-gray-600 leading-relaxed">
                Complete payroll processing and employee salary management.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-xl transition-smooth border border-purple-100 hover:border-purple-300 hover-lift animate-fade-in-up animate-stagger-5">
              <div className="p-3 bg-gradient-to-br from-purple-100 to-indigo-100 rounded-lg w-fit mb-4">
                <Briefcase className="h-12 w-12 text-purple-600" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-3">Company Formation</h3>
              <p className="text-gray-600 leading-relaxed">
                Start your Dubai company with expert financial setup support.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-xl transition-smooth border border-purple-100 hover:border-purple-300 hover-lift animate-fade-in-up animate-stagger-6">
              <div className="p-3 bg-gradient-to-br from-purple-100 to-indigo-100 rounded-lg w-fit mb-4">
                <TrendingUp className="h-12 w-12 text-purple-600" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-3">CFO Advisory</h3>
              <p className="text-gray-600 leading-relaxed">
                Strategic financial guidance for growing businesses.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-down">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">Why Choose Us</h2>
            <p className="text-xl text-gray-600">The advantages that set us apart</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="flex items-start space-x-4 p-6 rounded-lg hover:bg-purple-50 transition-smooth animate-fade-in-up animate-stagger-1">
              <CheckCircle className="h-8 w-8 text-purple-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">UAE Accounting Experts</h3>
                <p className="text-gray-600">Deep knowledge of UAE financial regulations and compliance requirements.</p>
              </div>
            </div>
            <div className="flex items-start space-x-4 p-6 rounded-lg hover:bg-purple-50 transition-smooth animate-fade-in-up animate-stagger-2">
              <CheckCircle className="h-8 w-8 text-purple-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Transparent Pricing</h3>
                <p className="text-gray-600">Clear, upfront pricing with no hidden fees or surprises.</p>
              </div>
            </div>
            <div className="flex items-start space-x-4 p-6 rounded-lg hover:bg-purple-50 transition-smooth animate-fade-in-up animate-stagger-3">
              <CheckCircle className="h-8 w-8 text-purple-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Dedicated Accountant</h3>
                <p className="text-gray-600">Your own dedicated accountant who understands your business.</p>
              </div>
            </div>
            <div className="flex items-start space-x-4 p-6 rounded-lg hover:bg-purple-50 transition-smooth animate-fade-in-up animate-stagger-4">
              <Clock className="h-8 w-8 text-purple-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Fast Response Support</h3>
                <p className="text-gray-600">Quick responses to your queries and urgent matters.</p>
              </div>
            </div>
            <div className="flex items-start space-x-4 p-6 rounded-lg hover:bg-purple-50 transition-smooth animate-fade-in-up animate-stagger-5">
              <Cloud className="h-8 w-8 text-purple-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Cloud Accounting Solutions</h3>
                <p className="text-gray-600">Modern cloud-based systems for real-time financial visibility.</p>
              </div>
            </div>
            <div className="flex items-start space-x-4 p-6 rounded-lg hover:bg-purple-50 transition-smooth animate-fade-in-up animate-stagger-6">
              <Shield className="h-8 w-8 text-purple-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Secure & Confidential</h3>
                <p className="text-gray-600">Your financial data protected with enterprise-grade security.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-down">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">Industries We Serve</h2>
            <p className="text-xl text-gray-600">Specialized expertise across multiple sectors</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            <div className="text-center animate-fade-in-up animate-stagger-1">
              <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-smooth border border-purple-100 hover:border-purple-300 hover-lift mb-3">
                <ShoppingCart className="h-12 w-12 text-purple-600 mx-auto" />
              </div>
              <p className="font-semibold text-gray-900">E-commerce</p>
            </div>
            <div className="text-center animate-fade-in-up animate-stagger-2">
              <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-smooth border border-purple-100 hover:border-purple-300 hover-lift mb-3">
                <Home className="h-12 w-12 text-purple-600 mx-auto" />
              </div>
              <p className="font-semibold text-gray-900">Real Estate</p>
            </div>
            <div className="text-center animate-fade-in-up animate-stagger-3">
              <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-smooth border border-purple-100 hover:border-purple-300 hover-lift mb-3">
                <HardHat className="h-12 w-12 text-purple-600 mx-auto" />
              </div>
              <p className="font-semibold text-gray-900">Construction</p>
            </div>
            <div className="text-center animate-fade-in-up animate-stagger-4">
              <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-smooth border border-purple-100 hover:border-purple-300 hover-lift mb-3">
                <Rocket className="h-12 w-12 text-purple-600 mx-auto" />
              </div>
              <p className="font-semibold text-gray-900">Startups</p>
            </div>
            <div className="text-center animate-fade-in-up animate-stagger-5">
              <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-smooth border border-purple-100 hover:border-purple-300 hover-lift mb-3">
                <Building className="h-12 w-12 text-purple-600 mx-auto" />
              </div>
              <p className="font-semibold text-gray-900">SMEs</p>
            </div>
            <div className="text-center animate-fade-in-up animate-stagger-6">
              <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-smooth border border-purple-100 hover:border-purple-300 hover-lift mb-3">
                <Globe className="h-12 w-12 text-purple-600 mx-auto" />
              </div>
              <p className="font-semibold text-gray-900">International</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-down">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">Client Success Stories</h2>
            <p className="text-xl text-gray-600">Real results for real businesses</p>
          </div>
          <div className="max-w-4xl mx-auto animate-scale-in">
            <div className="bg-gradient-to-br from-purple-50 to-indigo-50 p-8 md:p-12 rounded-2xl border border-purple-200 shadow-lg hover:shadow-xl transition-smooth">
              <div className="flex items-start space-x-4 mb-6">
                <div className="bg-gradient-to-r from-purple-600 to-indigo-600 p-3 rounded-lg">
                  <ShoppingCart className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-2">E-commerce Success Story</h3>
                  <p className="text-gray-600">Dubai-based Online Retailer</p>
                </div>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                How we helped a Dubai e-commerce startup reduce tax penalties and improve financial reporting.
                Through strategic VAT planning and automated bookkeeping systems, we saved them over AED 50,000
                in penalties and reduced their accounting overhead by 60%.
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <div className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent mb-1">60%</div>
                  <div className="text-sm text-gray-600">Cost Reduction</div>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <div className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent mb-1">AED 50K</div>
                  <div className="text-sm text-gray-600">Penalties Saved</div>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <div className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent mb-1">100%</div>
                  <div className="text-sm text-gray-600">Compliance Rate</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-purple-600 via-indigo-600 to-purple-700 text-white relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float" style={{ animationDelay: '3s' }}></div>
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <Phone className="h-16 w-16 mx-auto mb-6 animate-bounce" />
          <h2 className="text-3xl md:text-5xl font-bold mb-6 animate-fade-in-down">Need Help with Accounting or VAT in Dubai?</h2>
          <p className="text-xl mb-10 text-purple-100 animate-fade-in-up animate-stagger-1">
            Book a free consultation with our accounting experts today.
          </p>
          <button className="bg-white text-purple-600 px-8 py-4 rounded-lg hover:bg-purple-50 transition-smooth text-lg font-semibold inline-flex items-center gap-2 transform hover:scale-105 hover:-translate-y-1 shadow-lg animate-fade-in-up animate-stagger-2">
            Schedule Consultation
            <ArrowRight className="h-5 w-5" />
          </button>
        </div>
      </section>

      <footer className="bg-gradient-to-b from-gray-900 to-black text-gray-300 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="animate-fade-in-up animate-stagger-1">
              <div className="flex items-center space-x-2 mb-4">
                <div className="p-2 bg-gradient-to-br from-purple-600 to-indigo-600 rounded-lg">
                  <Calculator className="h-5 w-5 text-white" />
                </div>
                <span className="text-lg font-bold text-white">DubaiAccounting</span>
              </div>
              <p className="text-sm text-gray-400">
                Professional accounting and tax services for businesses in Dubai and across the UAE.
              </p>
            </div>
            <div className="animate-fade-in-up animate-stagger-2">
              <h4 className="text-white font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-sm text-gray-400 hover:text-gray-200 transition-colors">
                <li className="hover:text-purple-400 cursor-pointer transition-colors">Accounting & Bookkeeping</li>
                <li className="hover:text-purple-400 cursor-pointer transition-colors">VAT Services</li>
                <li className="hover:text-purple-400 cursor-pointer transition-colors">Corporate Tax</li>
                <li className="hover:text-purple-400 cursor-pointer transition-colors">Payroll Management</li>
              </ul>
            </div>
            <div className="animate-fade-in-up animate-stagger-3">
              <h4 className="text-white font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li className="hover:text-purple-400 cursor-pointer transition-colors">About Us</li>
                <li className="hover:text-purple-400 cursor-pointer transition-colors">Our Team</li>
                <li className="hover:text-purple-400 cursor-pointer transition-colors">Careers</li>
                <li className="hover:text-purple-400 cursor-pointer transition-colors">Contact</li>
              </ul>
            </div>
            <div className="animate-fade-in-up animate-stagger-4">
              <h4 className="text-white font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>Dubai, UAE</li>
                <li>info@dubaiaccounting.ae</li>
                <li>+971 4 XXX XXXX</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-500">
            <p>&copy; 2026 DubaiAccounting. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
