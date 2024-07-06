import PropTypes from 'prop-types';
import './PocHeadDashb.css';

const Table = ({data}) => {

  return (
    <div className="scrollable-table-container">
      <table className="pocs-table">
        <thead>
          <tr>
            <th>No.</th>
            <th>Code</th>
            <th>Course</th>
            <th>Year Level</th>
            <th>Assigned POC</th>
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
              <td>{row.assignedPOC}</td>
              <td>
                <div className='button-group'>
                <button className="upload-button"><i className='bi bi-upload'></i></button>
                <button className="reassign-button">Re-Assign POC</button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

Table.propTypes = {
    data: PropTypes.arrayOf(
      PropTypes.shape({
        no: PropTypes.number.isRequired,
        code: PropTypes.string.isRequired,
        course: PropTypes.string.isRequired,
        yearLevel: PropTypes.string.isRequired,
        assignedPOC: PropTypes.string.isRequired,
      })
    ).isRequired,
  };

export default Table;
