import React, { useState } from "react";

function AddForm() {
  const [formData, setFormData] = useState({
    title: "",
    image: "",
    rating: "",
    views: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const AddData = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "https://phase-2-backend-json-server-template.onrender.com/Movies",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        setFormData({
          title: "",
          image: "",
          rating: "",
          views: "",
        });
      } else {
        console.error("Error:", response.status);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <form className="form" id="form-add" onSubmit={AddData}>
      <h3 className="Form-title">Add Movie ?</h3>
      <label htmlFor="title">Title</label>
      <input
        autoComplete="title"
        type="text"
        id="title"
        name="title"
        placeholder="Movie Name"
        required
        value={formData.title}
        onChange={handleChange}
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
        value={formData.image}
        onChange={handleChange}
      />
      <br></br>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <label htmlFor="rating">Rate:</label>
        <select id="rating" value={formData.rating} onChange={handleChange}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
        <br></br>
        <label htmlFor="rating">views:</label>
        <select value={formData.views} onChange={handleChange}>
          <option value="1">1</option>
          <option value="2">2</option>
        </select>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

export default AddForm;
