
import PropTypes from 'prop-types';

const FilterDropdown = ({ filter, setFilter }) => {
    return (
        <div className="filter-dropdown">
            <select value={filter} onChange={(e) => setFilter(e.target.value)}>
                <option value="all">All</option>
                <option value="assigned">Assigned</option>
                <option value="missing">Missing</option>
                <option value="done">Done</option>
            </select>
        </div>
    );
};

FilterDropdown.propTypes = {
    filter: PropTypes.string.isRequired,
    setFilter: PropTypes.func.isRequired,
};

export default FilterDropdown;
