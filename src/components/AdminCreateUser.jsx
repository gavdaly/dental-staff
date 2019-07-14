import React, { useState } from "react";

const initialProps = {
  last_name: "",
  first_name: "",
  phone_number: "",
  email: "",
  api_id: "",
  role: "no_permissions",
  state: "inactive"
};

export const AdminDisplayUser = ({ createUser }) => {
  const [userForm, setUserForm] = useState(initialProps);

  const cancelEdit = event => {
    event.preventDefault();
    setUserForm();
  };

  const onSubmit = async event => {
    event.preventDefault();
    createUser(userForm);
  };

  return (
    <>
      <form onSubmit={onSubmit}>
        <div>
          <label htmlFor="first_name">First Name</label>
          <input
            value={userForm.first_name}
            onChange={event =>
              setUserForm({ ...userForm, first_name: event.target.value })
            }
            id="first_name"
            name="first_name"
            placeholder="First Name"
          />
        </div>

        <div>
          <label htmlFor="last_name">Last Name</label>
          <input
            value={userForm.last_name}
            onChange={event =>
              setUserForm({ ...userForm, last_name: event.target.value })
            }
            id="last_name"
            name="last_name"
            placeholder="Last Name"
          />
        </div>

        <div>
          <label htmlFor="phone_number">Phone Number</label>
          <input
            type="tel"
            value={userForm.phone_number}
            onChange={event =>
              setUserForm({ ...userForm, phone_number: event.target.value })
            }
            id="phone_number"
            name="phone_number"
            placeholder="Phone Number"
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            value={userForm.email}
            onChange={event =>
              setUserForm({ ...userForm, email: event.target.value })
            }
          />
        </div>
        <div>
          <label htmlFor="api_id">Maxident ID</label>
          <input
            value={userForm.api_id}
            onChange={event =>
              setUserForm({ ...userForm, api_id: event.target.value })
            }
            id="api_id"
            name="api_id"
            placeholder="Maxident ID"
          />
        </div>

        <div>
          <label htmlFor="role">Role</label>
          <select
            name="role"
            id="role"
            value={userForm.role}
            onChange={event =>
              setUserForm({ ...userForm, role: event.target.value })
            }
          >
            <option value="admin">Admin</option>
            <option value="business_staff">Business Staff</option>
            <option value="provider">Provider</option>
            <option value="unauthorized">Unauthorized</option>
            <option value="no_permissions">No Permissions</option>
            <option value="management">Management</option>
          </select>
        </div>

        <div>
          <label htmlFor="state">State</label>
          <select
            name="state"
            id="state"
            value={userForm.state}
            onChange={event =>
              setUserForm({ ...userForm, state: event.target.value })
            }
          >
            <option value="inactive">Inactive</option>
            <option value="salary">Salary</option>
            <option value="hourly">Hourly</option>
          </select>
        </div>

        <button type="submit">Create User</button>
        <button onClick={cancelEdit}>Cancel</button>
      </form>
    </>
  );
};

export default AdminDisplayUser;
