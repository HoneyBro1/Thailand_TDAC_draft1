const Footer = () => {
  return (
    <footer className="bg-red-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-center justify-between">
          {/* Thai Flag */}
          <div className="flex items-center">
            <div className="text-4xl mr-4">🇹🇭</div>
          </div>

          {/* Navigation Links */}
          <div className="flex space-x-8">
            <div>
              <h3 className="text-lg font-semibold text-white mb-2">Resources</h3>
              <ul className="space-y-1">
                <li>
                  <a href="#" className="text-white hover:text-gray-200 text-sm transition-colors">
                    FAQs
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-white mb-2">Legal</h3>
              <ul className="space-y-1">
                <li>
                  <a href="#" className="text-white hover:text-gray-200 text-sm transition-colors">
                    Terms of Use
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-red-500 mt-8 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-red-100 text-sm">
              © 2024 thailandarrivalcardtourist. All rights reserved.
            </p>
            <p className="text-red-200 text-xs mt-2 md:mt-0">
              Legal Disclaimer: thailandarrivalcardtourist.com is not affiliated with the Government or its sponsors.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
