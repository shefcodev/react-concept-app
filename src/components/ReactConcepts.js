const ReactConcepts = ({ concepts }) => {
  const [components, state, events] = concepts;

  return (
    <ul id="concepts">
      <li className="concept">
        <img src={components.image} alt="TODO: TITLE" />
        <h2>{components.title}</h2>
        <p>{components.description}</p>
      </li>
      <li className="concept">
        <img src={state.image} alt="TODO: TITLE" />
        <h2>{state.title}</h2>
        <p>{state.description}</p>
      </li>
      <li className="concept">
        <img src={events.image} alt="TODO: TITLE" />
        <h2>{events.title}</h2>
        <p>{events.description}</p>
      </li>
    </ul>
  );
};

export default ReactConcepts;
