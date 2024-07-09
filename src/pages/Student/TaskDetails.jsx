// import { useParams, useNavigate } from 'react-router-dom';
// import { useState } from 'react';
// import './StudentDashb.css';

// const TaskDetails = () => {
//     const { id } = useParams();
//     const navigate = useNavigate();
//     const [link, setLink] = useState('');

//     const assignments = [
//         { id: 1, name: 'Interaction Styles', date: 'April 10', status: 'missing', description: 'Lorem ipsum dolor sit amet...' },
//         { id: 2, name: 'UI / UX Design', date: 'May 10', status: 'assigned', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.' },
//         { id: 3, name: 'Human Computer', date: 'March 10', status: 'done', description: 'Lorem ipsum dolor sit amet...' },
//     ];

//     const assignment = assignments.find(a => a.id === parseInt(id));

//     const handleLinkChange = (e) => {
//         setLink(e.target.value);
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         console.log('Link submitted:', link);
//     };

//     if (!assignment) {
//         return <div>Assignment not found</div>;
//     }

//     return (
//         <div className="task-details-container">
//             <div className="task-details-left">
//                 <div className="task-header">
//                     <h2 className="task-title">{assignment.name}</h2>
//                     <p className={`status ${assignment.status}`}>{assignment.status.charAt(0).toUpperCase() + assignment.status.slice(1)}</p>
//                 </div>
//                 <span className="task-date">{assignment.date}</span>
//                 <p className="task-description">{assignment.description}</p>
//                 <div className="task-actions">
//                     {assignment.status !== 'done' && (
//                         <form onSubmit={handleSubmit} className="link-form">
//                             <input
//                                 type="url"
//                                 placeholder="https://docs.google.com/document/d/..."
//                                 value={link}
//                                 onChange={handleLinkChange}
//                                 required
//                             />
//                             <button type="submit" className="add-button">Submit Link</button>
//                         </form>
//                     )}
//                 </div>
//                 <button className="back-button" onClick={() => navigate(-1)}>Back</button>

//             </div>
//             <div className="task-details-right">
//                 <h4>Grades:</h4>
//                 <h3>EPGF Average</h3>
//                 <p>Pronunciation</p>
//                 <p>Grammar</p>
//                 <p>Fluency</p>
//                 <h3>Proficiency</h3>
//                 <h3>CEFR Category</h3>
//                 <textarea placeholder="Feedback:" className="feedback-textarea" readOnly></textarea>
//             </div>
//         </div>
//     );
// }

// export default TaskDetails;

import { useParams, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import './StudentDashb.css';

const TaskDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [link, setLink] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false);

    const assignments = [
        { id: 1, name: 'Interaction Styles', date: 'April 10', status: 'missing', description: 'Lorem ipsum dolor sit amet...' },
        { id: 2, name: 'UI / UX Design', date: 'May 10', status: 'assigned', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.' },
        { id: 3, name: 'Human Computer', date: 'March 10', status: 'done', description: 'Lorem ipsum dolor sit amet...' },
    ];

    const assignment = assignments.find(a => a.id === parseInt(id));

    const handleLinkChange = (e) => {
        setLink(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!isSubmitted) {
            console.log('Link submitted:', link);
        } else {
            console.log('Link unsubmitted');
        }
        setIsSubmitted(!isSubmitted);
    };

    if (!assignment) {
        return <div>Assignment not found</div>;
    }

    return (
        <div className="task-details-container">
            <div className="task-details-left">
                <div className="task-header">
                    <h2 className="task-title">{assignment.name}</h2>
                    <p className={`status ${assignment.status}`}>{assignment.status.charAt(0).toUpperCase() + assignment.status.slice(1)}</p>
                </div>
                <span className="task-date">{assignment.date}</span>
                <p className="task-description">{assignment.description}</p>
                <div className="task-actions">
                    {assignment.status !== 'done' && (
                        <form onSubmit={handleSubmit} className="link-form">
                            <input
                                type="url"
                                placeholder="https://docs.google.com/document/d/..."
                                value={link}
                                onChange={handleLinkChange}
                                required
                                disabled={isSubmitted}
                            />
                            <button type="submit" className="add-button">{isSubmitted ? 'Unsubmit Link' : 'Submit Link'}</button>
                        </form>
                    )}
                </div>
                <button className="back-button" onClick={() => navigate(-1)}>Back</button>
            </div>
            <div className="task-details-right">
                <h4>Grades:</h4>
                <h3>EPGF Average</h3>
                <p>Pronunciation</p>
                <p>Grammar</p>
                <p>Fluency</p>
                <h3>Proficiency</h3>
                <h3>CEFR Category</h3>
                <textarea placeholder="Feedback:" className="feedback-textarea" readOnly></textarea>
            </div>
        </div>
    );
};

export default TaskDetails;
