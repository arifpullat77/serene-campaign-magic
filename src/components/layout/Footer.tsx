import { Facebook, Instagram, Twitter } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-white border-t">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Serenes</h3>
            <p className="text-sm text-gray-600">
              Empowering brands to leverage customer-generated content and build stronger relationships.
            </p>
          </div>
          <div>
            <h4 className="text-sm font-semibold mb-4">Product</h4>
            <ul className="space-y-2">
              <li><a href="/features" className="text-sm text-gray-600 hover:text-primary-600">Features</a></li>
              <li><a href="/pricing" className="text-sm text-gray-600 hover:text-primary-600">Pricing</a></li>
              <li><a href="/integrations" className="text-sm text-gray-600 hover:text-primary-600">Integrations</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li><a href="/about" className="text-sm text-gray-600 hover:text-primary-600">About</a></li>
              <li><a href="/contact" className="text-sm text-gray-600 hover:text-primary-600">Contact</a></li>
              <li><a href="/careers" className="text-sm text-gray-600 hover:text-primary-600">Careers</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li><a href="/privacy" className="text-sm text-gray-600 hover:text-primary-600">Privacy Policy</a></li>
              <li><a href="/terms" className="text-sm text-gray-600 hover:text-primary-600">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t">
          <div className="flex justify-between items-center">
            <p className="text-sm text-gray-600">© 2024 Serenes. All rights reserved.</p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-600 hover:text-primary-600">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-600 hover:text-primary-600">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-600 hover:text-primary-600">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};