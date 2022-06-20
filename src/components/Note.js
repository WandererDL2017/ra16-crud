import React from "react";
import PropTypes from 'prop-types';

function Note({ note, handleDelete }) {
  return (
    <div className='note'>
      <p>{note.content}</p>
      <button className='delete' onClick={() => handleDelete(note.id)}>
        &#10006;
      </button>
    </div>
  );
}

Note.propTypes = {
  note: PropTypes.shape({
    id: PropTypes.number,
    content: PropTypes.string,
    handleDelete: PropTypes.func
  })
};

export default Note;