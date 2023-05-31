import { useState } from "react";
import Titleto from "../main-page-components/Titleto";

function Join() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    wantemail: true,
    event: '',
    reason: '',
    phone: '' 
  });

  const handleChange = (event) => {
    if (event.target.type === 'checkbox') {
      setFormData({
        ...formData,
        [event.target.name]: event.target.checked,
      });
    } else {
      setFormData({
        ...formData,
        [event.target.name]: event.target.value,
      });
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!validateForm()) {
      return;
    }

    handleClearData();
    alert('Your data was sent to server successfully');
  };

  const handleClearData = () => {
    setFormData({
      name: '',
      email: '',
      wantemail: false,
      event: '',
      reason: ''
    });
  };

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name) {
      newErrors.name = 'Name is required.';
    }

    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!formData.email.includes("@")) {
      newErrors.email = 'There must be a @ in email address.';
    }
    if (formData.phone && !/^(\+\d{1,3}[- ]?)?\d{10}$/.test(formData.phone)) {
      newErrors.phone = 'Phone number should be 10 digits (optional: starts with + and 1-3 digit country code).';
    }

    if (!formData.event) {
      newErrors.event = 'Please! Pick an event you like better.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;

  }

  return (
    <div className="join">
      <Titleto titleto={'Join us'}></Titleto>
      <form onSubmit={handleSubmit}>
        <label>
          <span>
            Name<span style={{ color: 'red' }}>*</span>: &nbsp;
          </span>
          <input type="text" name="name" value={formData.name} onChange={handleChange} />
        </label>
        {errors.name && <p className="validation-failure">{errors.name}</p>}

        <label>
          <span>
            Email<span style={{ color: 'red' }}>*</span>:&nbsp;
          </span>
          <input type="text" name="email" value={formData.email} onChange={handleChange} />
        </label>
        {errors.email && <p className="validation-failure">{errors.email}</p>}
        <label>
          <span>
            Phone: &nbsp;
          </span>
          <input type="text" name="phone" value={formData.phone} onChange={handleChange} />
        </label>
        {errors.phone && <p className="validation-failure">{errors.phone}</p>}

      
        <label>
          <span>
            Which event woul you like better*?&nbsp;
          </span>
          <select
            name="event"
            value={formData.event}
            onChange={handleChange}
          >
            <option value="">Select an event</option>
            <option value="y">Tips for hiking</option>
            <option value="t">Sightseeing in hiking</option>
          </select>
        </label>

        <label>
          <span>
            Do you want us to send you some news?&nbsp;
          </span>
          <input
            type="checkbox"
            name="wantemail"
            checked={formData.wantemail}
            onChange={handleChange}
          />
        </label>
        {errors.event && <p className="validation-failure">{errors.event}</p>}
        <button type="submit">Sign me up</button>
      </form>
    </div>
  )
}

export default Join;