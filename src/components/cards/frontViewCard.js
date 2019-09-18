import React from 'react';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faEnvelope, faGlobe ,faMapMarkerAlt, faEdit, faTrashAlt  } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';



const FrontViewCard = props => {
  return ( 
    <div>
      {props.cards.length > 0 ? (
        props.cards.map(card => (
          <div key={card._id} id="cardcontainer">
              <div className="container my-3 py-5 text-center">
                <div className="row">
                  <div className="col">
                    <div className="mainbg card">

            
                      <div className="mt-5 pb-5">
                        <h3>{card.company}</h3>
                        <p className="mb-4 text-white">{card.slogan}</p>
                      </div>

                      {/* beginning of card */}
                      <div id="card-body" className="container mb-3">
                        
                        <div id="secondcontainer" className="rounded">
                          {/* <img src={card.image} alt="" id="circleimg" className="img-fluid rounded-circle w-50 mb-3" /> */}
                          <h3>
                            <Link to='#' style={{color: 'red'}} href={"http://www.google.com/search?q=" + card.name } >{card.name}l</Link>
                          </h3>
                          <h5 className="pb-2">{card.profession}</h5>

                          <div id="infocontainer" className="container pb-3">
                            <div className="row justify-content-between">
                              <div id="mycol" className="myp col-xs-2 col-sm-2 col-md-2 rounded-right">
                                <FontAwesomeIcon icon={faPhone} />
                                <hr style={{
                                  margin: 0,
                                  backgroundColor: 'light-grey',
                                  height: 1}}
                                />
                                <FontAwesomeIcon icon={faEnvelope} />
                                <hr style={{
                                  margin: 0,
                                  backgroundColor: 'light-grey',
                                  height: 1}}
                                />
                                <FontAwesomeIcon icon={faGlobe} />
                                <hr style={{
                                  margin: 0,
                                  backgroundColor: 'light-grey',
                                  height: 1}}
                                />
                                <FontAwesomeIcon icon={faMapMarkerAlt} />
                                
                              </div>
                              <div id="mycol" className="col-xs-9 col-sm-9 col-md-9 bg-light rounded-left">
                                <Link to='#' href={`tel:${card.phone}`}>{card.phone}</Link>
                                <hr style={{
                                  margin: 0,
                                  backgroundColor: 'light-grey',
                                  height: 1}}
                                />
                                <Link to='#' href={`mailto:${card.email}`}>{card.email}</Link>
                                <hr style={{
                                  margin: 0,
                                  backgroundColor: 'light-grey',
                                  height: 1}}
                                />
                                <Link to='#' target="_blank" href="{card.web}">{card.website}</Link>
                                <hr style={{
                                  margin: 0,
                                  backgroundColor: 'light-grey',
                                  height: 1}}
                                />
                                <p>{card.address}</p>
                              </div>
                            </div>
                          </div>

                          <div id="icons" className="d-flex flex-row bd-highlight p-1">
                            <Link to={`/cards/edit/${card._id}`} style={{ color: 'inherit'}}>
                              <FontAwesomeIcon style={{cursor: 'pointer'}} className="mr-2" icon={faEdit} />
                            </Link>
                            <Link to='#' style={{ color: 'inherit'}}>
                              <FontAwesomeIcon style={{cursor: 'pointer'}} icon={faTrashAlt} onClick={() => props.deleteCard(card)} />          
                            </Link>
                          </div>
                        </div>

                      </div>
                    </div>
                    {/* end of card */}

                    
                  </div>
                </div>
              </div>
            </div>
          
        ))
      ) : (
        <div>
          <h1>There are no cards</h1>
        </div>
      )}
  </div>
   );
}
 
export default FrontViewCard;
