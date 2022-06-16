import { useParams, useNavigate } from "react-router-dom";

function withRouter(Component) {
  return function (props) {
    const params = useParams();
    const navigate = useNavigate();

    return <Component params={params} navigate={navigate} {...props} />;
  };
}

export default withRouter;
