import './App.css'
    import Navbar    from './components/Navbar'
    import Hero      from './components/Hero'
    import About     from './components/About'
    import Skills    from './components/Skills'
    import Projects  from './components/Projects'
    import Education from './components/Education'
    import CVUpload  from './components/CVUpload'
    import Contact   from './components/Contact'
    import Footer    from './components/Footer'
    
    // UPDATE THIS WITH YOUR OWN INFORMATION
    const portfolioData = {
      name:     'Bassey Japheth',                    // Your name
      title:    'Frontend Developer & UI Designer', // Your job title
      bio:      'I build beautiful, responsive web experiences.',
      email:    'basseyjaphethgmail.com',
      phone:    '+234 09045966662',
      location: 'Nasarawa, Nigeria',
      github:   'github.com/bas',
      linkedin: 'linkedin.com/in/bassey-japheth',
    }
    
    function App() {
      return (
        <div className="app">
          <Navbar ownerName={portfolioData.name} />
          <Hero
            name={portfolioData.name}
            title={portfolioData.title}
            bio={portfolioData.bio}
          />
          <About
            name={portfolioData.name}
            bio={portfolioData.bio}
            email={portfolioData.email}
            phone={portfolioData.phone}
            location={portfolioData.location}
            github={portfolioData.github}
            linkedin={portfolioData.linkedin}
          />
          <Skills />
          <Projects />
          <Education />
          <CVUpload />
          <Contact />
          <Footer ownerName={portfolioData.name} />
        </div>
      )
    }
    export default App
