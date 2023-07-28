import "./404Page.css";
import Page404 from "assets/404.png";
import { Button } from "components/Button";
import { useNavigate } from "react-router-dom";



const NotFoundPage = () => {
  let navigate = useNavigate();
const returnHome = () => {
  let path = `/`;
  navigate(path);
}
  return (
    <div style={{overflow:"hidden"}}>
  <div className="img-box">

  <img src={Page404} alt="404 image"  className="image" />
  </div>
  <h2 className="inform">Oops!This Page is Not Found</h2>
  <p className="inform2">The requested page does not exist </p>
  <Button text_color="white" title="Back to home" bg_color="red" fontSize="14px" radius="4px" border_custom="2px solid red" className="button" onClick={returnHome}></Button>
  </div>
  )
}
export default NotFoundPage;