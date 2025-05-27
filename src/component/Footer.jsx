import React from 'react';
// import 'bulma/css/bulma.min.css';

export default function  Footer () {

    return (
      <footer className="footer has-background-dark has-text-white-ter">
        <div className="container">
          <div className="columns is-multiline">
            {/* Brand and description */}
            <div className="column is-3">
              <figure className="image is-96x96 mb-2">
                <img
                  src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
                  alt="Company Logo"
                />
              </figure>
              <p>
                Making the world a better place through constructing elegant hierarchies.
              </p>
              <div className="mt-3 is-flex">
                {/* Facebook */}
                <a href="#" className="icon has-text-white mr-2">
                  <i className="fab fa-facebook"></i>
                </a>
                {/* Instagram */}
                <a href="#" className="icon has-text-white mr-2">
                  <i className="fab fa-instagram"></i>
                </a>
                {/* Twitter */}
                <a href="#" className="icon has-text-white mr-2">
                  <i className="fab fa-x-twitter"></i>
                </a>
                {/* GitHub */}
                <a href="#" className="icon has-text-white mr-2">
                  <i className="fab fa-github"></i>
                </a>
                {/* YouTube */}
                <a href="#" className="icon has-text-white">
                  <i className="fab fa-youtube"></i>
                </a>
              </div>
            </div>

            {/* Footer links - grouped into columns */}
            <div className="column is-9">
              <div className="columns">
                <div className="column">
                  <p className="has-text-weight-bold">Solutions</p>
                  <ul>
                    <li><a href="#" className="has-text-white">Marketing</a></li>
                    <li><a href="#" className="has-text-white">Analytics</a></li>
                    <li><a href="#" className="has-text-white">Automation</a></li>
                    <li><a href="#" className="has-text-white">Commerce</a></li>
                  </ul>
                </div>
                <div className="column">
                  <p className="has-text-weight-bold">Support</p>
                  <ul>
                    <li><a href="#" className="has-text-white">Help Center</a></li>
                    <li><a href="#" className="has-text-white">Guides</a></li>
                    <li><a href="#" className="has-text-white">Documentation</a></li>
                  </ul>
                </div>
                <div className="column">
                  <p className="has-text-weight-bold">Company</p>
                  <ul>
                    <li><a href="#" className="has-text-white">About</a></li>
                    <li><a href="#" className="has-text-white">Blog</a></li>
                    <li><a href="#" className="has-text-white">Jobs</a></li>
                  </ul>
                </div>
                <div className="column">
                  <p className="has-text-weight-bold">Legal</p>
                  <ul>
                    <li><a href="#" className="has-text-white">Privacy Policy</a></li>
                    <li><a href="#" className="has-text-white">Terms of Service</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="content has-text-centered mt-5">
            <p>© 2024 Your Company, Inc. All rights reserved.</p>
          </div>
        </div>
      </footer>
    );
  }

