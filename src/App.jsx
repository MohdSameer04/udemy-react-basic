import Header from './components/Header';
import CoreConcepts from './components/CoreConcepts';
import { CORE_CONCEPTS } from './data';
import TabButton from './components/TabButton';
import { useState } from 'react';
import { EXAMPLES } from './data';

function App() {
  const [selectedTopic, setSelectedTopic] = useState();

  function handleSelect(selectedButton){

    setSelectedTopic(selectedButton)
    // selectedButton => 'components', 'jsx', 'props', 'state'
    // console.log(selectedButton);
  }

  

  return (
    <div>
      <Header />
      <main>
        <section id='core-concepts'>
            <h2>Core Concepts </h2>
            <ul> 
              {/* with the help of that we don't need to execute again and again */}
              {CORE_CONCEPTS.map(
                (conceptItem) => (
                  <CoreConcepts key={conceptItem.title} {...conceptItem} />
                )
              )}
              {/* <CoreConcepts 
                title = {CORE_CONCEPTS[0].title}
                description = {CORE_CONCEPTS[0].description}
                image = {CORE_CONCEPTS[0].image}
                  />

                <CoreConcepts {...CORE_CONCEPTS[1]} />
                <CoreConcepts {...CORE_CONCEPTS[2]} />
                <CoreConcepts {...CORE_CONCEPTS[3]} /> */}
                
            </ul>
        </section>

        <section id='examples'>
          <h2> Examples </h2>
          <menu>
            <TabButton isSelected={selectedTopic === 'components'} onSelect={() => handleSelect('components')}>Components</TabButton>
            <TabButton isSelected={selectedTopic === 'jsx'} onSelect={() => handleSelect('jsx')}>JSX</TabButton>
            <TabButton isSelected={selectedTopic === 'props'} onSelect={() => handleSelect('props')}>Props</TabButton>
            <TabButton isSelected={selectedTopic === 'state'} onSelect={() => handleSelect('state')}>State</TabButton>
          </menu>

          {!selectedTopic ? (
            <p>Please select a topic.</p>
          ) : (
            <div id='tab-content'>
            <h3>{EXAMPLES[selectedTopic].title} </h3>
            <p>{EXAMPLES[selectedTopic].description}</p>
            <pre>
              <code>
                {EXAMPLES[selectedTopic].code}
              </code>
            </pre>
          </div>
            )}
          
        </section>
        {/* {selectedTopic} */}
      </main>
    </div>
  );
}

export default App;