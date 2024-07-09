import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './CollegePocDashb.css';
import Evaluation from './Evaluation'; 

const TaskDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { task } = location.state || {};
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [currentStudent, setCurrentStudent] = useState(null);

  if (!task) {
    return <div>No task selected</div>;
  }

  const students = [
    { id: 1, name: 'Jude Adolfo', dateSubmitted: '12/1/2023', dueDate: '12/30/2023', submitted: 'On time', links: 'https://clickme.com', cefrCategory: 'B2 Upper Intermediate', epgfAverage: '2.14', proficiencyLevel: 'Approaching' },
    { id: 2, name: 'Camille Abang', dateSubmitted: '12/3/2023', dueDate: '12/30/2023', submitted: 'Late', links: 'https://clickme.com', cefrCategory: 'B2 upper intermediate', epgfAverage: '3.00', proficiencyLevel: 'Developing' },
    { id: 3, name: 'Jude Adolfo', dateSubmitted: '12/1/2023', dueDate: '12/30/2023', submitted: 'On time', links: 'https://clickme.com', cefrCategory: 'beginning', epgfAverage: '2.50', proficiencyLevel: 'Proficient' },
    { id: 4, name: 'Camille Abang', dateSubmitted: '12/3/2023', dueDate: '12/30/2023', submitted: 'Late', links: 'https://clickme.com', cefrCategory: 'beginning', epgfAverage: '1.50', proficiencyLevel: 'Beginner' },
    { id: 5, name: 'Jude Adolfo', dateSubmitted: '12/1/2023', dueDate: '12/30/2023', submitted: 'On time', links: 'https://clickme.com', cefrCategory: 'beginning', epgfAverage: '3.00', proficiencyLevel: 'Developing' },
  ];

  const handleEvaluateClick = (student) => {
    setCurrentStudent(student);
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
    setCurrentStudent(null);
  };

  return (
    <>
      <h1 className="task-title">{task.topic} Submissions</h1>
      <div className="scrollable-table-container">
        <table className="students-table">
          <thead>
            <tr>
              <th>No.</th>
              <th>Name</th>
              <th>Date Submitted</th>
              <th>Due Date</th>
              <th>Submitted</th>
              <th>Links</th>
              <th>CEFR Category</th>
              <th>EPGF Average</th>
              <th>Proficiency Level</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student, index) => (
              <tr key={student.id}>
                <td>{index + 1}</td>
                <td>{student.name}</td>
                <td>{student.dateSubmitted}</td>
                <td>{student.dueDate}</td>
                <td>{student.submitted}</td>
                <td>{student.links ? <a href={student.links} target="_blank" rel="noopener noreferrer">https://clickme.com</a> : ''}</td>
                <td>{student.cefrCategory}</td>
                <td>{student.epgfAverage}</td>
                <td>{student.proficiencyLevel}</td>
                <td>
                  <button className="evaluate-button" onClick={() => handleEvaluateClick(student)}>Evaluate</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <button className="back-button" onClick={() => navigate(-1)}>Back</button>
      {isPopupOpen && <Evaluation student={currentStudent} onClose={closePopup} />}
    </>
  );
};

export default TaskDetails;
