const { useParams } = require("react-router-dom");

const Topic = () => {
  let { projectId } = useParams();
  return (
    <div>
      <h3>{projectId}</h3>
    </div>
  );
};

export default Topic;
