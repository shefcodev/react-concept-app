import ReactConcept from "./ReactConcept";
const ReactConcepts = ({ concepts }) => {
  const [ components, state, events ] = concepts;

  return (
    <ul id="concepts">
      <ReactConcept component={components} />
      <ReactConcept component={state} />
      <ReactConcept component={events} />
    </ul>
  );
};

export default ReactConcepts;
