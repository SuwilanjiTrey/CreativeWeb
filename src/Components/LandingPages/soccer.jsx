import React, { useState, useEffect } from 'react';


const SoccerClubWebsite = () => {
  const [activePage, setActivePage] = useState('home');
  const [animateHero, setAnimateHero] = useState(false);
  const [animatePlayer, setAnimatePlayer] = useState(false);
  const [playerIndex, setPlayerIndex] = useState(0);
  
  // Featured players data
  const players = [
    { 
      id: 1, 
      name: 'Cristiano Ronaldo',
      position: 'Forward',
      number: 7,
      stats: { goals: 934, assists: 257, rating: 9.1 },
      image: '/CreativeWeb/RONALDO-1.png'
    },
    { 
      id: 2, 
      name: 'Mohamed Salah', 
      position: 'Midfielder',
      number: 11,
      stats: { goals: 28, assists: 18, rating: 8.7 },
      image: '/CreativeWeb/MOH-SALLAH.png'
    },
    { 
      id: 3, 
      name: 'Erling Haaland', 
      position: 'Forward',
      number: 9,
      stats: { goals: 84, assists: 16, rating: 8.5 },
      image: '/CreativeWeb/HAALAND-1.png'
    }
  ];
  
  // News items
  const news = [
    {
      id: 1,
      title: 'FC Glory Wins Championship Final',
      date: 'March 3, 2025',
      preview: 'A stunning victory in the final minute secures the trophy for our team.',
      image: '/CreativeWeb/victory.jpg'
    },
    {
      id: 2,
      title: 'New Stadium Construction Begins',
      date: 'February 20, 2025',
      preview: 'The club begins work on our state-of-the-art 65,000 seat stadium.',
      image: '/CreativeWeb/newstadium.jpg'
    },
    {
      id: 3,
      title: 'Youth Academy Product Signs Professional Contract',
      date: 'February 10, 2025',
      preview: '17-year-old prodigy joins the first team after impressive development.',
      image: '/CreativeWeb/deal2.jpg'
    }
  ];
  
  // Upcoming matches
  const matches = [
    {
      id: 1,
      opponent: 'United FC',
      location: 'Home',
      date: 'March 12, 2025',
      time: '20:00'
    },
    {
      id: 2,
      opponent: 'Athletic City',
      location: 'Away',
      date: 'March 19, 2025',
      time: '15:30'
    },
    {
      id: 3,
      opponent: 'Royal Eagles',
      location: 'Home',
      date: 'March 26, 2025',
      time: '20:00'
    }
  ];
  
  // Animation effects
  useEffect(() => {
    setAnimateHero(true);
    
    const playerInterval = setInterval(() => {
      setAnimatePlayer(false);
      setTimeout(() => {
        setPlayerIndex(prev => (prev + 1) % players.length);
        setAnimatePlayer(true);
      }, 500);
    }, 5000);
    
    return () => clearInterval(playerInterval);
  }, [players.length]);
  
  // Change player stats animation
  useEffect(() => {
    setAnimatePlayer(true);
  }, [playerIndex]);

  const changePlayer = (index) => {
    setAnimatePlayer(false);
    
    setTimeout(() => {
      setPlayerIndex(index);
      setAnimatePlayer(true);
    }, 300);
  };
  
  
  return (
    <div className="bg-gray-900 text-white min-h-screen">
      {/* Dynamic Background */}
      <div className="fixed inset-0 z-0 opacity-20">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900 to-gray-900"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[url('../public/soccer.jpg')] bg-cover opacity-30"></div>
      </div>
      
      {/* Header */}
      <header className="fixed top-0 w-full z-50 bg-gray-900 bg-opacity-80 backdrop-blur-md">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center text-white font-bold text-xl">FC</div>
            <span className="text-2xl font-bold bg-gradient-to-r from-red-500 to-yellow-500 bg-clip-text text-transparent">FC GLORY</span>
          </div>
          
          {/* Navigation */}
          <nav className="hidden md:flex space-x-8">
            {['home', 'players', 'matches', 'news', 'shop'].map((page) => (
              <button 
                key={page}
                onClick={() => setActivePage(page)}
                className={`uppercase font-semibold tracking-wider relative ${
                  activePage === page ? 'text-red-500' : 'text-white hover:text-red-300'
                } transition-colors duration-300`}
              >
                {page}
                {activePage === page && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-red-500 animate-pulse"></span>
                )}
              </button>
            ))}
          </nav>
          
          {/* Mobile menu button */}
          <button className="md:hidden text-white">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </header>
      
      {/* Hero Section */}
      <section className="relative h-screen pt-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent z-10"></div>
          <img src="../public/soccer.jpg" alt="Stadium" className="w-full h-full object-cover" />
        </div>
        
        <div className="container mx-auto px-4 h-full flex flex-col justify-center items-center relative z-10">
          <div className={`text-center transform transition-all duration-1000 ${animateHero ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-red-500 to-yellow-400 bg-clip-text text-transparent">
              PASSION. GLORY. VICTORY.
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
              Experience the thrill of the beautiful game with FC Glory - where legends are made and history is written.
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <button className="px-8 py-3 bg-gradient-to-r from-red-600 to-red-700 rounded-md font-bold text-lg hover:from-red-700 hover:to-red-800 transform hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-red-600/50">
                BUY TICKETS
              </button>
              <button className="px-8 py-3 bg-transparent border-2 border-white rounded-md font-bold text-lg hover:bg-white hover:text-gray-900 transform hover:-translate-y-1 transition-all duration-300">
                JOIN FANCLUB
              </button>
            </div>
          </div>
        </div>
        
        {/* Floating stats card */}
        <div className="absolute bottom-10 right-10 w-64 md:w-80 bg-gray-800 bg-opacity-80 backdrop-blur-md rounded-lg overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-300 border border-gray-700 z-20">
          <div className="p-4">
            <div className="text-xs text-red-400 font-semibold">NEXT MATCH</div>
            <div className="mt-2 flex justify-between items-center">
              <div className="flex items-center">
                <div className="w-10 h-10 bg-blue-700 rounded-full flex items-center justify-center text-xs font-bold">FC</div>
                <span className="ml-2 font-bold">FC GLORY</span>
              </div>
              <span className="text-xl font-bold">VS</span>
              <div className="flex items-center">
                <span className="mr-2 font-bold">UTD FC</span>
                <div className="w-10 h-10 bg-red-700 rounded-full flex items-center justify-center text-xs font-bold">UTD</div>
              </div>
            </div>
            <div className="mt-3 text-center text-sm">
              <div className="font-semibold">March 12, 2025 • 20:00</div>
              <div className="text-gray-400">Glory Stadium</div>
            </div>
            <button className="mt-3 w-full py-2 bg-red-600 hover:bg-red-700 rounded text-sm font-bold transition-colors duration-300">
              GET TICKETS
            </button>
          </div>
        </div>
      </section>
      
      {/* Featured Player Section */}
      <section className="py-16 bg-gray-900 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-4 flex items-center">
                <span className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center text-white text-xs mr-3">FC</span>
                FEATURED PLAYERS
            </h2>

            <div className={`mt-8 transition-all duration-500 ${animatePlayer ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
              <div className="text-5xl font-bold mb-1">{players[playerIndex].name}</div>
              <div className="text-xl text-red-500 mb-6">{players[playerIndex].position} • #{players[playerIndex].number}</div>

              <div className="grid grid-cols-3 gap-4 mb-8">
                <div className="bg-gray-800 p-4 rounded-lg text-center">
                  <div className="text-3xl font-bold text-red-500">{players[playerIndex].stats.goals}</div>
                  <div className="text-sm text-gray-400">Goals</div>
                </div>
                <div className="bg-gray-800 p-4 rounded-lg text-center">
                  <div className="text-3xl font-bold text-red-500">{players[playerIndex].stats.assists}</div>
                  <div className="text-sm text-gray-400">Assists</div>
                </div>
                <div className="bg-gray-800 p-4 rounded-lg text-center">
                  <div className="text-3xl font-bold text-red-500">{players[playerIndex].stats.rating}</div>
                  <div className="text-sm text-gray-400">Rating</div>
                </div>
              </div>

              <button className="px-6 py-3 bg-red-600 hover:bg-red-700 rounded-md font-bold text-sm transition-colors duration-300">
                PLAYER PROFILE
              </button>
            </div>

            <div className="flex mt-8">
              {players.map((player, index) => (
                <button
                  key={player.id}
                  onClick={() => changePlayer(index)}
                  className={`w-3 h-3 rounded-full mx-1 transition-all duration-300 ${
                    playerIndex === index ? 'bg-red-500 w-6' : 'bg-gray-600 hover:bg-gray-500'
                  }`}
                  aria-label={`View ${player.name}`}
                ></button>
              ))}
            </div>
          </div>

          <div className="md:w-1/2 mt-10 md:mt-0 relative h-96 md:h-auto">
            <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-transparent z-10"></div>
            {/* Added debugging information to check image path */}
            
            <img
              src={players[playerIndex].image}
              alt={players[playerIndex].name}
              className={`absolute h-full w-full object-cover object-center transition-all duration-500 ${
                animatePlayer ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
              }`}
              // Added error handler to help debug image loading issues
              onError={(e) => {
                console.error('Error loading image:', e);
                e.target.src = '/placeholder.png'; // Fallback to placeholder
              }}
            />
          </div>
        </div>
      </div>
    
        
        {/* Dynamic particles background */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-10 w-24 h-24 rounded-full bg-red-600 opacity-5 animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-40 h-40 rounded-full bg-blue-600 opacity-5 animate-pulse"></div>
          <div className="absolute top-1/3 right-1/4 w-32 h-32 rounded-full bg-yellow-600 opacity-5 animate-pulse"></div>
        </div>
      </section>
      
      {/* Latest News Section */}
      <section className="py-16 bg-gray-800 relative">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 flex items-center">
            <span className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center text-white text-xs mr-3">FC</span>
            LATEST NEWS
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {news.map((item, index) => (
              <div 
                key={item.id} 
                className="bg-gray-900 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-all duration-300 group cursor-pointer shadow-lg"
              >
                <div className="h-48 bg-gray-700 relative overflow-hidden">
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover transform group-hover:scale-110 transition-all duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-sm bg-red-600 px-2 py-1 rounded">{item.date}</div>
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-bold mb-2 group-hover:text-red-500 transition-colors duration-300">{item.title}</h3>
                  <p className="text-gray-400 text-sm">{item.preview}</p>
                  <div className="mt-4 flex justify-end">
                    <span className="text-sm text-red-500 font-semibold flex items-center">
                      READ MORE
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <button className="px-8 py-3 bg-transparent border-2 border-red-600 text-red-600 rounded-md font-bold hover:bg-red-600 hover:text-white transition-colors duration-300">
              VIEW ALL NEWS
            </button>
          </div>
        </div>
      </section>
      
      {/* Match Schedule Section */}
      <section className="py-16 bg-gray-900 relative">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 flex items-center">
            <span className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center text-white text-xs mr-3">FC</span>
            UPCOMING MATCHES
          </h2>
          
          <div className="space-y-4">
            {matches.map((match) => (
              <div 
                key={match.id}
                className="bg-gray-800 rounded-lg p-4 flex flex-col md:flex-row md:items-center justify-between hover:bg-gray-700 transition-colors duration-300 border border-gray-700 hover:border-gray-600"
              >
                <div className="flex items-center mb-4 md:mb-0">
                  <div className="w-16 h-16 bg-gray-900 rounded-full flex items-center justify-center text-xl font-bold mr-4">
                    {match.date.split(' ')[1].replace(',', '')}
                  </div>
                  <div>
                    <div className="text-sm text-gray-400">{match.date} • {match.time}</div>
                    <div className="text-xl font-bold mt-1 flex items-center">
                      FC GLORY
                      <span className="mx-3 text-red-500">VS</span>
                      {match.opponent}
                    </div>
                    <div className="text-sm mt-1">
                      {match.location === 'Home' ? 'Glory Stadium, Home' : `${match.opponent} Stadium, Away`}
                    </div>
                  </div>
                </div>
                
                <div className="flex space-x-3">
                  <button className="py-2 px-4 bg-gray-700 hover:bg-gray-600 rounded text-sm font-bold flex items-center transition-colors duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    ADD TO CALENDAR
                  </button>
                  <button className="py-2 px-4 bg-red-600 hover:bg-red-700 rounded text-sm font-bold transition-colors duration-300">
                    BUY TICKETS
                  </button>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <button className="px-8 py-3 bg-transparent border-2 border-white rounded-md font-bold hover:bg-white hover:text-gray-900 transition-colors duration-300">
              FULL SCHEDULE
            </button>
          </div>
        </div>
        
        {/* Dynamic background elements */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-red-900/10 to-transparent pointer-events-none"></div>
      </section>
      
      {/* Footer */}
      <footer className="bg-gray-900 pt-16 pb-8 border-t border-gray-800">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center text-white font-bold text-sm">FC</div>
                <span className="text-xl font-bold">FC GLORY</span>
              </div>
              <p className="text-gray-400 text-sm mb-6">
                Join us on our journey to glory as we strive for excellence both on and off the pitch.
              </p>
              <div className="flex space-x-4">
                <a href="/services" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-red-600 transition-colors duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                  </svg>
                </a>
                <a href="/services" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-red-600 transition-colors duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
                  </svg>
                </a>
                <a href="/services" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-red-600 transition-colors duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a href="/services" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-red-600 transition-colors duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
                  </svg>
                </a>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-bold mb-6">Quick Links</h3>
              <ul className="space-y-3">
                <li><a href="/services" className="text-gray-400 hover:text-white transition-colors duration-300">Home</a></li>
                <li><a href="/services" className="text-gray-400 hover:text-white transition-colors duration-300">News</a></li>
                <li><a href="/services" className="text-gray-400 hover:text-white transition-colors duration-300">Matches</a></li>
                <li><a href="/services" className="text-gray-400 hover:text-white transition-colors duration-300">Teams</a></li>
                <li><a href="/services" className="text-gray-400 hover:text-white transition-colors duration-300">About Club</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-bold mb-6">Club Info</h3>
              <ul className="space-y-3">
                <li><a href="/services" className="text-gray-400 hover:text-white transition-colors duration-300">History</a></li>
                <li><a href="/services" className="text-gray-400 hover:text-white transition-colors duration-300">Stadium</a></li>
                <li><a href="/services" className="text-gray-400 hover:text-white transition-colors duration-300">Partners</a></li>
                <li><a href="/services" className="text-gray-400 hover:text-white transition-colors duration-300">Fan Zone</a></li>
                <li><a href="/services" className="text-gray-400 hover:text-white transition-colors duration-300">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-bold mb-6">Newsletter</h3>
              <p className="text-gray-400 text-sm mb-4">
                Subscribe to receive the latest news and updates from FC Glory.
              </p>
              <div className="flex">
                <input type="email" placeholder="Your email" className="py-2 px-4 bg-gray-800 rounded-l focus:outline-none focus:ring-2 focus:ring-red-500 text-sm w-full" />
                <button className="bg-red-600 px-4 rounded-r hover:bg-red-700 transition-colors duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          
          <div className="pt-8 border-t border-gray-800 text-center text-sm text-gray-500">
            <p>© 2025 FC Glory. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default SoccerClubWebsite;