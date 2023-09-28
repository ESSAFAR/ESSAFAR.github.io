import React from 'react';
import Footer from '../Components/Footer';
import Header from '../Components/Header';
import NavBar from '../Components/NavBar';

const AboutUsMore = () => {
  return (
      <div>
        <Header />
        <NavBar />
        <div className="container mt-4">
      <div className="row">
        <div className="col-md-8 offset-md-2">
          <h2 className="text-center">About Us</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in metus vel erat tempor suscipit eu a urna.
            Quisque nec libero sit amet neque cursus iaculis a ac quam. Fusce eu ligula sit amet arcu mattis volutpat
            nec in magna. Sed id tellus at mi tincidunt placerat. Integer non tellus ac elit vehicula condimentum in
            in ante. Nullam tristique nisi in bibendum sagittis. Fusce interdum metus vel quam pretium, non dapibus
            tellus dictum.
          </p>
          <img
            src="https://via.placeholder.com/400x200"
            alt="Company Office"
            className="img-fluid mb-3"
          />
          <p>
            Nulla facilisi. Nullam vel purus eu eros consectetur efficitur a in felis. Vivamus id luctus orci.
            Phasellus id facilisis sapien, vel congue metus. Cras ultrices lorem in risus posuere, non vulputate justo
            feugiat. Sed sit amet nunc id ante laoreet posuere. Praesent eget nisi eget velit convallis tristique.
            Sed vitae enim eget dolor volutpat volutpat. Nullam sagittis tortor vitae nisl dictum, eget dignissim
            libero semper.
          </p>
          <img
            src="https://via.placeholder.com/400x200"
            alt="Team"
            className="img-fluid mb-3"
          />
          <p>
            Quisque varius eget justo a congue. Nam congue eros sit amet velit fermentum, eu efficitur orci aliquet.
            Nunc aliquam hendrerit elit, id tristique purus dictum sit amet. Integer vehicula, neque ut blandit
            egestas, eros turpis interdum odio, vel hendrerit nunc risus non tortor. Vivamus pharetra libero ut ex
            bibendum tincidunt. Sed at mauris id nunc commodo luctus. Aliquam erat volutpat. Sed id libero eget
            purus gravida tincidunt ac et massa.
          </p>
          <img
            src="https://via.placeholder.com/400x200"
            alt="Happy Customers"
            className="img-fluid mb-3"
          />
          <p>
            Suspendisse potenti. Sed eget ex ultricies, bibendum justo nec, volutpat ante. Donec feugiat nisi non
            neque hendrerit, at tempor odio ultricies. Aliquam in consectetur dui. Morbi eleifend cursus tristique.
            Fusce tristique, ex in congue tristique, tortor justo auctor tortor, et vulputate quam lorem id erat.
          </p>
        </div>
      </div>
    </div>
        <Footer />
      </div>
    );
  };

export default AboutUsMore;
