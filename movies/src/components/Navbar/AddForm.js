import React, { useState } from "react";

function AddForm() {
  const [formData, setFormData] = useState({
    title: "",
    image: "",
    rating: 1,
    views: 0,
    likes: 0,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const AddData = async () => {
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
          rating: 1,
          views: 0,
          likes: 0,
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
        autoComplete="given-name"
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
        autoComplete="given-Url"
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
        <select id="rating" name="rating">
          <option value={formData.rating} onChange={handleChange}>
            1
          </option>
          <option value={formData.rating} onChange={handleChange}>
            2
          </option>
          <option value={formData.rating} onChange={handleChange}>
            3
          </option>
          <option value={formData.rating} onChange={handleChange}>
            4
          </option>
          <option value={formData.rating} onChange={handleChange}>
            5
          </option>
        </select>
        <br></br>
        <label htmlFor="rating">views:</label>
        <select id="view">
          <option value={formData.views} onChange={handleChange}>
            1
          </option>
          <option value={formData.views} onChange={handleChange}>
            2
          </option>
        </select>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

export default AddForm;
