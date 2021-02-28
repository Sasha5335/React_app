import React from 'react';
import './style.css';


const Home = props => {
  return (
    <>
      <section>
        <div className="container"></div>
        <div id="cube-loader">
          <div class="caption">
            <div class="cube-loader">
              <div class="cube loader-1"></div>
              <div class="cube loader-2"></div>
              <div class="cube loader-4"></div>
              <div class="cube loader-3"></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
