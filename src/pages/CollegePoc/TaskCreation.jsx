import { useState } from 'react';
import './CollegePocDashb.css';
import PropTypes from 'prop-types';

const PopupForm = ({ onClose }) => {
    return (
      <div className="popup-form-overlay">
        <div className="popup-form">
          <div className="popup-form-header">
            <h2>Create new EIE Task</h2>
            <button className="close-button" onClick={onClose}>×</button>
          </div>
          <form>
            <div className="form-group">
              <label>Topic</label>
              <input type="text" placeholder="Enter Topic" />
            </div>
            <div className="form-group">
              <label>Instructions</label>
              <textarea placeholder="Enter Instructions" rows="4"></textarea>
            </div>
            <div className="form-group">
              <label>Due Date</label>
              <input type="date" />
            </div>
            <div className="form-group">
              <label>Time</label>
              <input type="time" />
            </div>
            <div className="form-buttons">
              <button type="button" onClick={onClose}>Cancel</button>
              <button type="submit">Create</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
  
  PopupForm.propTypes = {
    onClose: PropTypes.func.isRequired,
  };

const TaskCreation = () => {
  const [showForm, setShowForm] = useState(false);

  const openModal = () => setShowForm(true);
  const closeModal = () => setShowForm(false);

  return (
    <div className="assignments-container">
      <div className="assignments-header">
        <h1>PNC BIT111</h1>
      </div>
      <button className="add-task-button" onClick={openModal}>Add New Task</button>
      {showForm && <PopupForm onClose={closeModal} />}
    </div>
  );
}

export default TaskCreation;
