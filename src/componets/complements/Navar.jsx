import React from 'react';
import ReacDom from 'react-dom' 




class Navar extends React.Component {
    render(){
        return(
            <section className="container">
                  <nav className="navbar navbar-dark color-one">
                    <div className="container-fluid">
                      <a className="navbar-brand" href="#"><b>ParDDo</b></a>
                      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                      </button>
                      <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                          <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Abaut me</a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#Education">Education</a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#Experience">Experience</a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Contacto</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </nav>      
            </section>
         );
    }
}

export default Navar;