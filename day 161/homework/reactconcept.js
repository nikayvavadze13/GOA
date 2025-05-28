export const reactConcepts = [
  {
    id: 1,
    title: "useState",
    description: "Allows you to add state to functional components. You can update values and trigger UI updates."
  },
  {
    id: 2,
    title: "useEffect",
    description: "Used for side effects like data fetching, subscriptions, or DOM manipulation after render."
  },
  {
    id: 3,
    title: "useContext",
    description: "Provides a way to pass data through the component tree without having to pass props down manually at every level."
  },
  {
    id: 4,
    title: "useReducer",
    description: "An alternative to useState for managing complex state logic in functional components."
  },
  {
    id: 5,
    title: "Custom Hooks",
    description: "Allows you to extract component logic into reusable functions."
  }];
export const reactConceptsWithExamples = reactConcepts.map(concept => ({
  ...concept,
  example: `Example of ${concept.title} usage in React:
  
  import { use${concept.title} } from 'react';

  function ExampleComponent() {
    const [state, setState] = use${concept.title}(initialValue);

    return (
      <div>
        <p>Current state: {state}</p>
        <button onClick={() => setState(newValue)}>Update State</button>
      </div>
    );
  }`
}));
