import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, MessageCircle, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-secondary-dark text-slate-300 py-12 no-print">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Brand */}
        <div>
          <h3 className="text-white text-lg font-heading font-bold mb-4">TSM AGRO</h3>
          <p className="text-sm leading-relaxed">
            Votre partenaire de confiance pour l'équipement professionnel et domestique au Cameroun.
          </p>
        </div>

        {/* Links */}
        <div>
          <h4 className="text-white font-medium mb-4">Navigation</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="hover:text-white transition-colors">Accueil</Link></li>
            <li><Link to="/a-propos" className="hover:text-white transition-colors">À Propos</Link></li>
            <li><Link to="/catalogue" className="hover:text-white transition-colors">Catalogue</Link></li>
            <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h4 className="text-white font-medium mb-4">Légal</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/cgv" className="hover:text-white transition-colors">CGV</Link></li>
            <li><Link to="/privacy" className="hover:text-white transition-colors">Politique de confidentialité</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-white font-medium mb-4">Contact</h4>
          <ul className="space-y-2 text-sm">
            <li>Douala, Cameroun</li>
            <li>contact@tsmagro.cm</li>
            <li>+237 656 63 13 14</li>
          </ul>
        </div>
      
        {/* Social Media */}
        <div>
          <h4 className="text-white font-medium mb-4">Suivez-nous</h4>
          <div className="flex gap-4">
            <a href="https://www.facebook.com/tsmagro73/" target="_blank" rel="noopener" className="hover:text-primary transition-colors"><Facebook className="w-5 h-5" /></a>
            <a href="https://wa.me/237656631314" target="_blank" rel="noopener" className="hover:text-primary transition-colors"><MessageCircle className="w-5 h-5" /></a>
          </div>
        </div>
      </div>
      <div className="border-t border-slate-700 mt-12 pt-8 text-center text-xs">
        © {new Date().getFullYear()} TSM AGRO. Tous droits réservés.
      </div>
    </footer>
  );
};

export default Footer;
