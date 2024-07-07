import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import FilterDropdown from './FilterDropdown';
import './StudentDashb.css';

const Tasks = () => {
    const [filter, setFilter] = useState('all');
    const navigate = useNavigate();

    const assignments = [
        { id: 1, name: 'Interaction Styles', date: 'April 10', status: 'missing' },
        { id: 2, name: 'UI / UX Design', date: 'May 10', status: 'assigned' },
        { id: 3, name: 'Human Computer', date: 'March 10', status: 'done' },
    ];

    const filteredAssignments = assignments.filter(assignment => 
        filter === 'all' || assignment.status === filter
    );

    const handleAssignmentClick = (id) => {
        navigate(`/student/classroom/subject/${id}`);
    }

    return (
        <div className="assignments-container">
            <div className="assignments-header">
                <h1>PNC Assignments</h1>
                <div className="div-filter">
                    <FilterDropdown filter={filter} setFilter={setFilter} />
                </div>
            </div>
            {filteredAssignments.map((assignment) => (
                <div
                    className="assignment-box"
                    key={assignment.id}
                    onClick={() => handleAssignmentClick(assignment.id)}
                >
                    <p>{assignment.name}</p>
                    <span className={`status ${assignment.status}`}>{assignment.status.charAt(0).toUpperCase() + assignment.status.slice(1)}</span>
                </div>
            ))}
        </div>
    );
}

export default Tasks;
