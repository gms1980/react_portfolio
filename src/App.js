import React, { useState } from 'react';
import Nav from './components/Nav';
import About from './components/About';
//import Gallery from './components/Gallery';
import ContactForm from './components/Contact';

function App() {
  const [categories] = useState([
    {
      name: 'github', description: 'Check again more to come in the future! ',
    },
    { name: 'projects', description: 'Github projects' },
    { name: 'Resume', description: 'Background, Skills, and Acoompl' },
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  const [contactSelected, setContactSelected] = useState(false);

  return (
    <div>
      <Nav
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
      ></Nav>
      <main>
        {!contactSelected ? (
          <>
           
            <About currentCategory={currentCategory}></About>
          </>
        ) : (
          <ContactForm></ContactForm>
        )}
      </main>
    </div>
  );
}

export default App;
