import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import './App.css';

// Core pages
import LandingPageCatalog from './Catalogue.jsx';
import ServicesPage       from './Components/Services.jsx';
import TemplateDetail     from './Components/TemplateDetail.jsx';
import ContactPage        from './Components/Contact.jsx';
import AppsPage           from './Components/Apps.jsx';


// Template demo pages (unchanged)
import LandingPage              from './Components/LandingPages/testing.jsx';
import LuxuryRealEstate         from './Components/LandingPages/realtors.jsx';
import SoccerClubWebsite        from './Components/LandingPages/soccer.jsx';
import AnimatedEcommerceWebsite from './Components/LandingPages/ecommerce.jsx';
import StartupWebsite           from './Components/LandingPages/startup.jsx';
import PortfolioWebsite         from './Components/LandingPages/portfolio.jsx';

function App() {
  return (
    <HashRouter>
      <div className="App">
        <Routes>
          <Route path="/"           element={<LandingPageCatalog />} />
          <Route path="/home"       element={<LandingPageCatalog />} />
          <Route path="/catalog"    element={<LandingPageCatalog />} />
          <Route path="/services"   element={<ServicesPage />} />
          <Route path="/apps"       element={<AppsPage />} />
          <Route path="/Contact-me" element={<ContactPage />} />
          <Route path="/apps"       element={<AppsPage />} />
          <Route path="/templates/:templateId" element={<TemplateDetail />} />

          {/* Demo routes */}
          <Route path="/testing"    element={<LandingPage />} />
          <Route path="/realtor"    element={<LuxuryRealEstate />} />
          <Route path="/soccer"     element={<SoccerClubWebsite />} />
          <Route path="/startup"    element={<StartupWebsite />} />
          <Route path="/e-commerce" element={<AnimatedEcommerceWebsite />} />
          <Route path="/portfolio"  element={<PortfolioWebsite />} />
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;
