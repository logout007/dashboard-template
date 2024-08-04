import React from 'react';
import './Feedback.css';

const Feedback = () => {
  return (
    <div className="feedback">
      <div className="feedback-item">
        <div className="feedback-user">
          <div className="user-avatar">J</div>
          <div>
            <div className="user-name">Jenny Wilson</div>
            <div className="user-rating">⭐⭐⭐⭐⭐</div>
          </div>
        </div>
        <div className="feedback-text">
          The food was excellent and so was the service. I had the mushroom risotto with scallops which was awesome.
        </div>
      </div>
      <div className="feedback-item">
        <div className="feedback-user">
          <div className="user-avatar">D</div>
          <div>
            <div className="user-name">Dianne Russell</div>
            <div className="user-rating">⭐⭐⭐⭐⭐</div>
          </div>
        </div>
        <div className="feedback-text">
          We enjoyed the Eggs Benedict served on homemade focaccia bread and hot coffee. Perfect service.
        </div>
      </div>
      <div className="feedback-item">
        <div className="feedback-user">
          <div className="user-avatar">D</div>
          <div>
            <div className="user-name">Devon Lane</div>
            <div className="user-rating">⭐⭐⭐⭐</div>
          </div>
        </div>
        <div className="feedback-text">
          Normally wings are wings, but theirs are lean meaty and tender, and you get more in an order than most places.
        </div>
      </div>
    </div>
  );
};

export default Feedback;
