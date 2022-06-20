import React, { useState } from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';
import NoteModel from '../models/NoteModel';

function AddForm({ handleAdd }) {
 const [form, setForm] = useState({content: ''});
 
 const handleChange = evt => {
  const { value } = evt.target;
  setForm({ content: value });
 };

 const handleSubmit = evt => {
  evt.preventDefault();
  const note = new NoteModel(shortid.generate(), form.content);
  handleAdd(note);
  setForm({ content: '' });
 };

 return (
  <form 
    className='note-form'
    onSubmit={handleSubmit}
  >
    <label htmlFor='note'>Новая запись</label>
    <textarea 
      rows='3' 
      id='note' 
      value={form.content} 
      onChange={handleChange}
      required
    />
    <button>
      &#10148;
    </button>
  </form>
 );
}

AddForm.propTypes = {
  handleAdd: PropTypes.func.isRequired
};

export default AddForm;