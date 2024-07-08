import { useState } from 'react';
import './CollegePocDashb.css';
import PropTypes from 'prop-types';
import{ useEffect } from 'react';

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
const PopupForm = ({ onClose, addTask, task }) => {
  const [topic, setTopic] = useState('');
  const [instructions, setInstructions] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [time, setTime] = useState('');

  useEffect(() => {
    if (task) {
      setTopic(task.topic);
      setInstructions(task.instructions);
      setDueDate(task.dueDate);
      setTime(task.time);
    } else {
      setTopic('');
      setInstructions('');
      setDueDate('');
      setTime('');
    }
  }, [task]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask = { topic, instructions, dueDate, time };
    addTask(newTask);
  };

  return (
    <div className="popup-form-overlay">
      <div className="popup-form">
        <div className="popup-form-header">
          <h2>{task ? 'Edit Task' : 'Create new EIE task'}</h2>
          <button className="close-button" onClick={onClose}>×</button>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Topic</label>
            <input type="text" value={topic} onChange={(e) => setTopic(e.target.value)} placeholder="Enter Topic" />
          </div>
          <div className="form-group">
            <label>Instructions</label>
            <textarea value={instructions} onChange={(e) => setInstructions(e.target.value)} placeholder="Enter Instructions" rows="4"></textarea>
          </div>
          <div className="form-group">
            <label>Due Date</label>
            <input type="date" value={dueDate} onChange={(e) => setDueDate(e.target.value)} />
          </div>
          <div className="form-group">
            <label>Time</label>
            <input type="time" value={time} onChange={(e) => setTime(e.target.value)} />
          </div>
          <div className="form-buttons">
            <button type="button" onClick={onClose}>Cancel</button>
            <button type="submit">{task ? 'Update' : 'Create'}</button>
          </div>
        </form>
      </div>
    </div>
  );
}

PopupForm.propTypes = {
  onClose: PropTypes.func.isRequired,
  addTask: PropTypes.func.isRequired,
  task: PropTypes.object,
};

const TaskCreation = () => {
  const [showForm, setShowForm] = useState(false);
  const [tasks, setTasks] = useState([]);
  const [editTaskIndex, setEditTaskIndex] = useState(null);

  const openModal = () => setShowForm(true);
  const closeModal = () => setShowForm(false);

  const addTask = (task) => {
    if (editTaskIndex !== null) {
      const updatedTasks = [...tasks];
      updatedTasks[editTaskIndex] = task;
      setTasks(updatedTasks);
      setEditTaskIndex(null);
    } else {
      setTasks([...tasks, task]);
    }
    closeModal();
  };

  const editTask = (index) => {
    setEditTaskIndex(index);
    openModal();
  };

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <div className="assignments-container">
      <div className="assignments-header">
        <h1>PNC BIT111</h1>
      </div>
      <button className="add-task-button" onClick={openModal}>Add New Task</button>
      {showForm && <PopupForm onClose={closeModal} addTask={addTask} task={tasks[editTaskIndex]} />}
      <div className="task-list">
        {tasks.map((task, index) => (
          <div key={index} className="task-item">
            <div className="task-content">
              <p>{task.topic}</p>
            </div>
            <div className="task-actions">
              <button className="menu-button">⋮</button>
              <div className="dropdown-menu">
                <button onClick={() => editTask(index)}>Edit Post</button>
                <button onClick={() => deleteTask(index)}>Delete Post</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TaskCreation;
