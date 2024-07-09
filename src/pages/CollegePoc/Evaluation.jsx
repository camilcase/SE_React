import { useState } from 'react';
import PropTypes from 'prop-types';
import './CollegePocDashb.css'; 

const Evaluation = ({ student, onClose }) => {
  const [scores, setScores] = useState({
    consistency: '',
    clarity: '',
    articulation: '',
    intonationAndStress: '',
    accuracy: '',
    clarityOfThought: '',
    syntax: '',
    qualityOfResponse: '',
    detailOfResponse: '',
  });

  const [feedback, setFeedback] = useState('');

  const handleScoreChange = (e, criterion) => {
    setScores({ ...scores, [criterion]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // form submission logic 
    onClose();
  };

  return (
    <div className="eval-popup-overlay">
      <div className="eval-popup-form">
        <h2>Evaluate {student.name} </h2>
        <form onSubmit={handleSubmit}>
          <div className="eval-form-content">
            <div className="eval-form-section">
              <h3>PRONUNCIATION:</h3>
              <div className="eval-form-group">
                <label>Consistency</label>
                <select value={scores.consistency} onChange={(e) => handleScoreChange(e, 'consistency')}>
                  <option value="">Select score</option>
                  <option value="0.0">0.0</option>
                  <option value="0.5">0.50</option>
                  <option value="1.0">1.00</option>
                  <option value="1.5">1.50</option>
                  <option value="2.0">2.00</option>
                  <option value="2.5">2.50</option>
                  <option value="3.0">3.00</option>
                  <option value="4.0">4.00</option>
                </select>
              </div>
              <div className="eval-form-group">
                <label>Clarity</label>
                <select value={scores.clarity} onChange={(e) => handleScoreChange(e, 'clarity')}>
                  <option value="">Select score</option>
                  <option value="0.0">0.0</option>
                  <option value="0.5">0.50</option>
                  <option value="1.0">1.00</option>
                  <option value="1.5">1.50</option>
                  <option value="2.0">2.00</option>
                  <option value="2.5">2.50</option>
                  <option value="3.0">3.00</option>
                  <option value="4.0">4.00</option>
                </select>
              </div>
              <div className="eval-form-group">
                <label>Articulation</label>
                <select value={scores.articulation} onChange={(e) => handleScoreChange(e, 'articulation')}>
                  <option value="">Select score</option>
                  <option value="0.0">0.0</option>
                  <option value="0.5">0.50</option>
                  <option value="1.0">1.00</option>
                  <option value="1.5">1.50</option>
                  <option value="2.0">2.00</option>
                  <option value="2.5">2.50</option>
                  <option value="3.0">3.00</option>
                  <option value="4.0">4.00</option>
                </select>
              </div>
              <div className="eval-form-group">
                <label>Intonation and Stress</label>
                <select value={scores.intonationAndStress} onChange={(e) => handleScoreChange(e, 'intonationAndStress')}>
                  <option value="">Select score</option>
                  <option value="0.0">0.0</option>
                  <option value="0.5">0.50</option>
                  <option value="1.0">1.00</option>
                  <option value="1.5">1.50</option>
                  <option value="2.0">2.00</option>
                  <option value="2.5">2.50</option>
                  <option value="3.0">3.00</option>
                  <option value="4.0">4.00</option>
                </select>
              </div>
            </div>

            <div className="eval-form-section">
              <h3>GRAMMAR:</h3>
              <div className="eval-form-group">
                <label>Accuracy</label>
                <select value={scores.accuracy} onChange={(e) => handleScoreChange(e, 'accuracy')}>
                  <option value="">Select score</option>
                  <option value="0.0">0.0</option>
                  <option value="0.5">0.50</option>
                  <option value="1.0">1.00</option>
                  <option value="1.5">1.50</option>
                  <option value="2.0">2.00</option>
                  <option value="2.5">2.50</option>
                  <option value="3.0">3.00</option>
                  <option value="4.0">4.00</option>
                </select>
              </div>
              <div className="eval-form-group">
                <label>Clarity of Thought</label>
                <select value={scores.clarityOfThought} onChange={(e) => handleScoreChange(e, 'clarityOfThought')}>
                  <option value="">Select score</option>
                  <option value="0.0">0.0</option>
                  <option value="0.5">0.50</option>
                  <option value="1.0">1.00</option>
                  <option value="1.5">1.50</option>
                  <option value="2.0">2.00</option>
                  <option value="2.5">2.50</option>
                  <option value="3.0">3.00</option>
                  <option value="4.0">4.00</option>
                </select>
              </div>
              <div className="eval-form-group">
                <label>Syntax</label>
                <select value={scores.syntax} onChange={(e) => handleScoreChange(e, 'syntax')}>
                  <option value="">Select score</option>
                  <option value="0.0">0.0</option>
                  <option value="0.5">0.50</option>
                  <option value="1.0">1.00</option>
                  <option value="1.5">1.50</option>
                  <option value="2.0">2.00</option>
                  <option value="2.5">2.50</option>
                  <option value="3.0">3.00</option>
                  <option value="4.0">4.00</option>
                </select>
              </div>
            </div>

            <div className="eval-form-section">
              <h3>FLUENCY:</h3>
              <div className="eval-form-group">
                <label>Quality of Response</label>
                <select value={scores.qualityOfResponse} onChange={(e) => handleScoreChange(e, 'qualityOfResponse')}>
                  <option value="">Select score</option>
                  <option value="0.0">0.0</option>
                  <option value="0.5">0.50</option>
                  <option value="1.0">1.00</option>
                  <option value="1.5">1.50</option>
                  <option value="2.0">2.00</option>
                  <option value="2.5">2.50</option>
                  <option value="3.0">3.00</option>
                  <option value="4.0">4.00</option>
                </select>
              </div>
              <div className="eval-form-group">
                <label>Detail of Response</label>
                <select value={scores.detailOfResponse} onChange={(e) => handleScoreChange(e, 'detailOfResponse')}>
                  <option value="">Select score</option>
                  <option value="0.0">0.0</option>
                  <option value="0.5">0.50</option>
                  <option value="1.0">1.00</option>
                  <option value="1.5">1.50</option>
                  <option value="2.0">2.00</option>
                  <option value="2.5">2.50</option>
                  <option value="3.0">3.00</option>
                  <option value="4.0">4.00</option>
                </select>
              </div>
            </div>

            <div className="eval-feedback-section">
              <h3>Feedback</h3>
              <textarea
                value={feedback}
                onChange={(e) => setFeedback(e.target.value)}
                placeholder="Enter your feedback here"
              ></textarea>
            </div>
          </div>

          <div className="eval-form-buttons">
            <button type="button" onClick={onClose}>Cancel</button>
            <button type="button" onClick={() => { setScores({ consistency: '', clarity: '', articulation: '', intonationAndStress: '', accuracy: '', clarityOfThought: '', syntax: '', qualityOfResponse: '', detailOfResponse: '' }); setFeedback(''); }}>Clear</button>
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

Evaluation.propTypes = {
  student: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    dateSubmitted: PropTypes.instanceOf(Date).isRequired,
    dueDate: PropTypes.instanceOf(Date).isRequired,
    submitted: PropTypes.string.isRequired,
    links: PropTypes.string.isRequired,
    cefrCategory: PropTypes.string.isRequired,
    epgfAverage: PropTypes.number.isRequired,
    proficiencyLevel: PropTypes.string.isRequired,
  }).isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Evaluation;
