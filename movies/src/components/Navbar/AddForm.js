import React from "react";

function AddForm() {
  return (
    <form className="form" id="form">
      <h3 className="Form-title">Add Movie ?</h3>
      <label htmlFor="name">Title</label>
      <input
        autoComplete="name"
        type="text"
        id="name"
        name="name"
        placeholder="Movie Name"
        required
      />
      <br></br>
      <label htmlFor="image">Image</label>
      <input
        autoComplete="image"
        id="image"
        type="text"
        name="image"
        placeholder="Image url"
        required
      />
      <br></br>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <label htmlFor="rating">Rate:</label>
        <select>
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </select>
        <br></br>
        <label htmlFor="rating">views:</label>
        <select>
          <option>0</option>
        </select>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

export default AddForm;
