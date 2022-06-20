import React from "react";
import PropTypes from 'prop-types';

function LoadData({ loadData }) {
  return (
    <div className="loadData">
      <h2>Заметки</h2>
      <button type='button' onClick={loadData}>
        &#8634;
      </button>
    </div>
  );
}

LoadData.propTypes = {
  loadData: PropTypes.func.isRequired
}

export default LoadData;