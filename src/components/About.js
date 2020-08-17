import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import MyImage from '../assets/images/my-image.jpg'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
class Settings extends React.Component {

   
  render () {
    return (

        <div className="full-screen">
            <img id='my-image' src={MyImage} alt='Sanjeev Kumar' />
            <div >
              <p>Sanjeev Kumar J V</p>
              <p class='icon'>
                <a href='https://sanjeevkumarjv@gmail.com' target='_blank' rel="noopener noreferrer"><FontAwesomeIcon icon={ faEnvelope } /></a>
                <a href='https://linkedin.com/in/sanjeevkumar-99062a188' target='_blank' rel="noopener noreferrer"><FontAwesomeIcon icon={ faLinkedin } /></a>
                <a href='https://github.com/sanjeevkumar-j-v' target='_blank' rel="noopener noreferrer"><FontAwesomeIcon icon={ faGithub } /></a>
                <a href='https://instagram.com/solo_king_sk' target='_blank' rel="noopener noreferrer"><FontAwesomeIcon icon={ faInstagram } /></a>

              </p>
            </div>
        </div>

      );
  }
}

export default Settings;
