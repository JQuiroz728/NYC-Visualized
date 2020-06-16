import React from 'react';

import config from '../../config';

export default function Footer({ onClose, isVisible }) {
  return (
    <footer id="footer" className={`panel ${isVisible ? 'active' : ''}`}>
      <div className="inner split">
        <div>
          <section>
            <h2>About this project</h2>
            <p>
            An analytical look into the evolution of New York City. 
            Exploring datasets to understand what life is like in the best city in the world, 
            told by the people themselves.
            </p>
            <p>
              Visualizations created using Flourish.studio based of datasets gathered from NYC OpenData.
            </p>
          </section>
          <section>
            <h2>Want to learn more? Feel free to reach out!</h2>
            <ul className="icons">
              {config.socialLinks.map(social => {
                const { icon, name, url } = social;
                return (
                  <li key={url}>
                    <a target={'_blank'} href={url} className={`icon ${icon}`}>
                      <span className="label">{name}</span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </section>
        </div>
      </div>
      <div
        className="closer"
        onClick={e => {
          e.preventDefault();
          onClose();
        }}
      />
    </footer>
  );
}
