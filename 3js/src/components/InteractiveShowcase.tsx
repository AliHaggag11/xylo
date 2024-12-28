import type { FC } from 'react';
import './InteractiveShowcase.css';

const InteractiveShowcase: FC = () => {
  return (
    <section className="showcase-container">
      <div className="showcase-content">
        <h2 className="showcase-title">Interactive Showcase</h2>
        <p className="showcase-description">
          Welcome to our interactive showcase section. Here you can explore our features and capabilities.
        </p>
      </div>
    </section>
  );
};

export default InteractiveShowcase; 