import React from 'react';
import { Link } from 'react-router-dom';
import members from '../assets/members.png';

const AboutUs = () => {
  return (


    <>
    <div className="container-fluid g-0 px-5">
      <div className="row">
         <div className="col-7 bg-primary text-white p-5">
         <h2>Qui sommes nous?</h2>
           <p>
             À Propos de Nous Bienvenue chez nous ! Nous sommes une équipe
             passionnée dédiée à offrir des produits de haute qualité et un
             service exceptionnel à nos clients. Notre histoire a commencé il y a
             plusieurs années avec une vision simple : créer des produits qui
             améliorent la vie quotidienne tout en maintenant des normes
             rigoureuses de qualité et d'innovation. Nos valeurs fondamentales
             sont l'intégrité, l'engagement envers nos clients et l'innovation
             continue.
           </p>       
           <Link to="/AboutUsMore" className="btn btn-light">
             Lire plus
           </Link>
           
             </div>
         <div className="col-5 p-0 d-flex align-items-center justify-content-center">
         <div className="image-container">
             <img src={members} alt="About Us" className="img-fluid rounded" />
           </div>
        </div>
    </div>
    </div>
    </>
  
  );
};

export default AboutUs;
