import PropTypes from 'prop-types';
import { useState } from 'react';
import Modal from 'react-modal';
import './PocHeadDashb.css';

Modal.setAppElement('#root'); // Set the root element for accessibility

const ImplementSubjects = ({ data }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedSubject, setSelectedSubject] = useState(null);

  const openModal = (subject) => {
    setSelectedSubject(subject);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedSubject(null);
  };

  const handleAssign = () => {
    // Handle the assign action here
    closeModal();
  };

  return (
    <div className="scrollable-table-container">
      <table className="pocs-table">
        <thead>
          <tr>
            <th>No.</th>
            <th>Code</th>
            <th>Implementing Subjects</th>
            <th>Year Level</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index}>
              <td>{row.no}</td>
              <td>{row.code}</td>
              <td>{row.course}</td>
              <td>{row.yearLevel}</td>
              <td>
                <button className="assignpoc-button" onClick={() => openModal(row)}>
                  Assign POC
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Assign Subject"
        className="modal"
        overlayClassName="modal-overlay"
      >
        <h2>Assign Subject</h2>
        {selectedSubject && (
          <div className="modal-content">
            <div className="form-row">
              <p><strong>Code:</strong> {selectedSubject.code}</p>
            </div>
            <div className="form-row">
              <div className="form-group half-width">
                <label><strong>Course:</strong></label>
                <p>{selectedSubject.course}</p>
              </div>
              <div className="form-group half-width">
                <label><strong>Year Level:</strong></label>
                <p>{selectedSubject.yearLevel}</p>
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="collegePOC">Select a College POC:</label>
              <select id="collegePOC" className="dropdown">
                <option value="1">POC 1</option>
                <option value="2">POC 2</option>
              </select>
            </div>
            <div className="modal-actions">
              <button onClick={closeModal} className="cancel-button">Cancel</button>
              <button onClick={handleAssign} className="assign-button">Assign</button>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
};

ImplementSubjects.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      no: PropTypes.number.isRequired,
      code: PropTypes.string.isRequired,
      course: PropTypes.string.isRequired,
      yearLevel: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default ImplementSubjects;
