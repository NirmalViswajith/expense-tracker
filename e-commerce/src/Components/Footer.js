import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpotify, faFacebook, faYoutube } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <div className="d-flex justify-between bg-bubble-gum p-3 mt-3">
      <h1>The Generics</h1>
      <div>
        <a href="#">
          <FontAwesomeIcon icon={faSpotify} size="2x" className="mx-2" />
        </a>
        <a href="#">
          <FontAwesomeIcon icon={faFacebook} size="2x" className="mx-2" />
        </a>
        <a href="#">
          <FontAwesomeIcon icon={faYoutube} size="2x" className="mx-2" />
        </a>
      </div>
    </div>
  );
};

export default Footer;
