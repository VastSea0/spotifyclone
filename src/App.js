import logo from './logo512.png';
import cover1 from './cover1.png';
import cover2 from './cover2.png';
import cover3 from './sonfeci.jpg';
import './App.css';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faPlay, faComputer } from "@fortawesome/free-solid-svg-icons";
import { faHome, faSearch, faBook, faCrown } from "@fortawesome/free-solid-svg-icons"; // Import specific icons
function App() {
  return (
    <>
    <Container style={{backgroundColor: "black", color:"white"}}>

      <Row>
        <Col>
        <br></br>
        <h1 >İyi günler</h1>
        </Col>

        <Col></Col>
      </Row>
      <Row>
        <Col>
      <ul>
        <li>
          <button className='btns'>Müzik</button>
        </li>
        <li>
          <button className='btns'>Podcastler ve Showlar</button>
        </li>

      </ul>

      </Col>

      </Row>
      <Row>
        <Col>
        <ul className='btnsonglist'>
          <li>
            <button className='btnsongs'>
              <img src={cover1}  className='songs'></img> Kalp Hanım - Kalben
              </button>
          </li>
            <li>
            <button className='btnsongs'>
              <img src={cover1}  className='songs'></img> Yara - Kalben
              </button>
          </li>
          <li>
            <button className='btnsongs'>
              <img src={cover2}  className='songs'></img> Sana Bu Kadar Uz...
              </button>
          </li>
            <li>
            <button className='btnsongs'>
              <img src={cover3}  className='songs'></img> Son Feci Bisiklet
              </button>
          </li>
        </ul>
        </Col>


      </Row>
      <Row>
        <Col>
          <h1>Senin için Parçalar</h1>
        </Col>
      </Row>
      <Row>
        <Col>
        <ul >
          <li>
            <div className='parca'>
              <img src={cover1}className='cover'></img>
              <h3>Yalakanım Bebeğim</h3>
              <p>Kalben</p>
            </div>
          </li>
         <li>
            <div className='parca'>
              <img src={cover1}className='cover'></img>
              <h3>Yara</h3>
              <p>Kalben</p>
            </div>
          </li>
          {/* <li>
            <div className='parca'>
              <img src={cover1}className='cover'></img>
              <h3>Doya Doya</h3>
              <p>Kalben</p>
            </div>
          </li>
          <li>
            <div className='parca'>
              <img src={cover1}className='cover'></img>
              <h3>Saçlar</h3>
              <p>Kalben</p>
            </div>
  </li>*/ }
        </ul>
        </Col>
      </Row>
      <Row>
        <Col>
          <div className='calinan'>
              <ul>
                <li>
                  <img  src={cover2} className='minicover'></img>
                </li>
                <li>
                  <h4>Sana Bu kadar..</h4>
                  <p>DKTT</p>
                </li>
                <li className='icon'>
                  <FontAwesomeIcon icon={faComputer} size='2x' />
                </li>
                <li className='icon'>
                  <FontAwesomeIcon icon={faHeart}  size='2x' />
                </li >
                <li className='icon'>
                  <FontAwesomeIcon icon={faPlay} size='2x' />
                </li>
              </ul>
          </div>
        </Col>

      </Row>
      <Row>
        <Col>
          <ul className='bottomnav'>
            <li className='icon' >
              <FontAwesomeIcon icon={faHome} size='3x' />
            </li>
            <li className='icon'>
              <FontAwesomeIcon icon={faSearch} size='3x' />
            </li>
            <li className='icon'>
              <FontAwesomeIcon icon={faBook } size='3x'  />
            </li>
            <li className='icon'>
              <FontAwesomeIcon icon={faCrown} size='3x' />
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
    </>
  );
}

export default App;
