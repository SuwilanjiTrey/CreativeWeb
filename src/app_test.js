import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

// Import the components we've created
import ServicesPage from './Components/Services.jsx';
import LandingPageCatalog from './Catalogue.jsx';
import TemplateDetail from './Components/TemplateDetail.jsx'; // You'll need to create this component
import LandingPage from './Components/LandingPages/testing.jsx';
import LuxuryRealEstate from './Components/LandingPages/realtors.jsx';
import SoccerClubWebsite from './Components/LandingPages/soccer.jsx';
import AnimatedEcommerceWebsite from './Components/LandingPages/ecommerce.jsx';
import StartupWebsite from './Components/LandingPages/startup.jsx';
import PortfolioWebsite from './Components/LandingPages/portfolio.jsx';
import ContactPage from './Components/Contact.jsx';

function App() {
  return (
    <BrowserRouter basename="/">
      <div className="App">
        <Routes>
          <Route path="/" element={<LandingPageCatalog />} />
	  <Route path="/ARGUS" element={<LandingPageCatalog />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/catalog" element={<LandingPageCatalog />} />
          <Route path="/templates/:templateId" element={<TemplateDetail />} />
          <Route path="/testing" element={<LandingPage />} />
	  <Route path="/realtor" element= {<LuxuryRealEstate />} />
	  <Route path="/soccer" element= {<SoccerClubWebsite />} />
	  <Route path="/startup" element= {<StartupWebsite />} />
	  <Route path="/e-commerce" element= {<AnimatedEcommerceWebsite />} />
	  <Route path="/portfolio" element= {<PortfolioWebsite />} />
	<Route path="/Contact-me" element= {<ContactPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;