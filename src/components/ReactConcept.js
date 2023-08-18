const ReactConcept = ({ component }) => {
  return (
   <li className="concept">
    <img src={component.image} alt="TODO: TITLE" />
    <h2>{component.title}</h2>
    <p>{component.description}</p>
  </li>
  );
};

export default ReactConcept;