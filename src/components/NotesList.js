import React from 'react';
import PropTypes from 'prop-types';
import Note from './Note';

function NotesList({ notes, handleDelete }) {
  return (
    <div className='note-list'>
      {notes.length ? notes.map(note => (
        <Note key={note.id} note={note} handleDelete={handleDelete} />))
      : null}
    </div>
  );
}

NotesList.propTypes = {
  notes: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      content: PropTypes.string.isRequired
    })
  ),
  handleDelete: PropTypes.func.isRequired
};

export default NotesList;