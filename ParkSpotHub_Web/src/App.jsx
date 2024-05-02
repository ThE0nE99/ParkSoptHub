import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faUsers, faSave, faChartBar, faEnvelope, faClock  } from "@fortawesome/free-solid-svg-icons"; // Importa todos los íconos necesarios aquí
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Table } from 'react-bootstrap';

const App = () => {
  return (
      <div className="container">
        <div className="cont">
          <div className="sidebar">
            <div className="logo">Logo</div>
            <ul className="menu">
                <li className="home"><FontAwesomeIcon icon={faHome} /> </li>
                <li className="bar"><FontAwesomeIcon icon={faChartBar} /> </li>
                 <li className="user"><FontAwesomeIcon icon={faUsers} /> </li>
                <li className="save"><FontAwesomeIcon icon={faSave} /> </li>
              </ul>
          </div>
        </div>

          <div class="grid-container">
            <div class="grid-item">
              <div class="grid-item-content">
                <div>
                  <div>
                  <span class="item-label">Usuarios</span>
                  </div>
                  <div>
                    <li className="user1"><FontAwesomeIcon icon={faUsers} /> </li>
                  </div>
                </div>
                <div>
                  <span class="item-value">94</span>
                </div>
              </div>
            </div>
            <div class="grid-item">
              <div class="grid-item-content">
              <div>
                  <div>
                  <span class="item-label">Solicitudes</span>
                  </div>
                  <div>
                    <li className="user1"><FontAwesomeIcon icon={faEnvelope} /> </li>
                  </div>
                </div>
                <div>
                  <span class="item-value">94</span>
                </div>
              </div>
            </div>
            <div class="grid-item">
              <div class="grid-item-content">
              <div>
                  <div>
                  <span class="item-label">Solcitudes Activadas</span>
                  </div>
                  <div>
                    <li className="user1"><FontAwesomeIcon icon={faClock} /> </li>
                  </div>
                </div>
                <div>
                  <span class="item-value">94</span>
                </div>
              </div>
            </div>
          </div>

          <div className="grid-content">
          <p>Solicitudes Activass</p>
          </div>



      </div>
  );
};

export default App;
