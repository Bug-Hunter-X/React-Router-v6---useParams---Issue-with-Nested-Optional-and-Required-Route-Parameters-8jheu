//Solution: Add a check for undefined in the child route component
import { useParams } from 'react-router-dom';

function ChildRoute() {
  const { id } = useParams();

  if (id === undefined) {
    return <p>No ID provided</p>;
  }

  return (
    <div>
      <h1>Child Route</h1>
      <p>ID: {id}</p>
    </div>
  );
}
export default ChildRoute;