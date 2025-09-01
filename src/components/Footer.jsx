const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-amber-900 to-orange-900 text-amber-100 border-t-4 border-amber-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2">
            <div className="text-2xl font-bold text-amber-100 font-mono tracking-wider mb-4">
              <span className="text-orange-300">THAILAND</span>
              <br />
              <span className="text-amber-200 text-lg">TDAC</span>
            </div>
            <p className="text-amber-200 font-mono text-sm leading-relaxed">
              Your trusted partner for Thailand Digital Arrival Card applications. 
              Fast, secure, and reliable service for all travelers.
            </p>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-bold text-amber-100 font-mono mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-amber-200 hover:text-amber-100 font-mono text-sm transition-colors">
                  FAQs
                </a>
              </li>
              <li>
                <a href="#" className="text-amber-200 hover:text-amber-100 font-mono text-sm transition-colors">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-lg font-bold text-amber-100 font-mono mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-amber-200 hover:text-amber-100 font-mono text-sm transition-colors">
                  Terms of Use
                </a>
              </li>
              <li>
                <a href="#" className="text-amber-200 hover:text-amber-100 font-mono text-sm transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-amber-200 hover:text-amber-100 font-mono text-sm transition-colors">
                  Cookie Policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-amber-700 mt-8 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-amber-300 font-mono text-sm">
              © 2024 thailandarrivalcardtourist. All rights reserved.
            </p>
            <p className="text-amber-400 font-mono text-xs mt-2 md:mt-0">
              Legal Disclaimer: thailandarrivalcardtourist.com is not affiliated with the Government or its sponsors.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
