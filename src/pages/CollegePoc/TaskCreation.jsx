import { useState, useEffect } from 'react';
import './CollegePocDashb.css';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

const PopupForm = ({ onClose, addTask, task }) => {
    const [topic, setTopic] = useState('');
    const [instructions, setInstructions] = useState('');
    const [dueDate, setDueDate] = useState('');
    const [time, setTime] = useState('');
    const [errors, setErrors] = useState({});
  
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
  
    const validate = () => {
      const newErrors = {};
      if (!topic) newErrors.topic = 'Topic is required';
      if (!instructions) newErrors.instructions = 'Instructions are required';
      if (!dueDate) newErrors.dueDate = 'Due Date is required';
      if (!time) newErrors.time = 'Time is required';
      return newErrors;
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      const validationErrors = validate();
      if (Object.keys(validationErrors).length > 0) {
        setErrors(validationErrors);
        return;
      }
      setErrors({});
      const newTask = { topic, instructions, dueDate, time };
      addTask(newTask);
    };
  
    const handleInputChange = (setter, field) => (e) => {
      setter(e.target.value);
      if (errors[field]) {
        setErrors((prevErrors) => ({ ...prevErrors, [field]: '' }));
      }
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
              <input
                type="text"
                value={topic}
                onChange={handleInputChange(setTopic, 'topic')}
                placeholder="Enter Topic"
              />
              {errors.topic && <div className="error-message">{errors.topic}</div>}
            </div>
            <div className="form-group">
              <label>Instructions</label>
              <textarea
                value={instructions}
                onChange={handleInputChange(setInstructions, 'instructions')}
                placeholder="Enter Instructions"
                rows="4"
              ></textarea>
              {errors.instructions && <div className="error-message">{errors.instructions}</div>}
            </div>
            <div className="form-group">
              <label>Due Date</label>
              <input
                type="date"
                value={dueDate}
                onChange={handleInputChange(setDueDate, 'dueDate')}
              />
              {errors.dueDate && <div className="error-message">{errors.dueDate}</div>}
            </div>
            <div className="form-group">
              <label>Time</label>
              <input
                type="time"
                value={time}
                onChange={handleInputChange(setTime, 'time')}
              />
              {errors.time && <div className="error-message">{errors.time}</div>}
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
    const navigate = useNavigate();
  
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
  
    const viewTaskDetails = (task) => {
      navigate(`/class-management/task-details`, { state: { task } });
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
            <div key={index} className="task-item" onClick={() => viewTaskDetails(task)}>
              <div className="task-content">
                <p>{task.topic}</p>
              </div>
              <div className="task-actions">
                <button className="menu-button" onClick={(e) => e.stopPropagation()}>⋮</button>
                <div className="dropdown-menu">
                  <button onClick={(e) => { e.stopPropagation(); editTask(index); }}>Edit Post</button>
                  <button onClick={(e) => { e.stopPropagation(); deleteTask(index); }}>Delete Post</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
  
  export default TaskCreation;