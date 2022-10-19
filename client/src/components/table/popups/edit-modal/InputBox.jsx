const InputBox = ({ modalData, setModalData }) => {
  return (
    <div className="update-info">
      {/* name */}
      <label htmlFor="name">Institute</label>
      <input
        type="text"
        id="name"
        value={modalData.name}
        onChange={(e) => setModalData({ ...modalData, name: e.target.value })}
      />
      {/* semester */}
      <label htmlFor="semester">Semester</label>
      <select
        id="semester"
        value={modalData.semester}
        onChange={(e) =>
          setModalData({ ...modalData, semester: e.target.value })
        }
      >
        <option value="Spring">Spring</option>
        <option value="Fall">Fall</option>
      </select>
      {/* position */}
      <label htmlFor="position">Position</label>
      <input
        type="text"
        id="position"
        value={modalData.position}
        onChange={(e) =>
          setModalData({ ...modalData, position: e.target.value })
        }
      />
      {/* type */}
      <label htmlFor="type">Type of Law</label>
      <select
        id="type"
        value={modalData.type}
        onChange={(e) => setModalData({ ...modalData, type: e.target.value })}
      >
        <option value="Government">Government</option>
        <option value="Emerging Technology">Emerging Technology</option>
        <option value="AI">AI</option>
        <option value="National Security">National Security</option>
        <option value="E-Commerce">E-Commerce</option>
        <option value="Other">Other</option>
      </select>
      {/* poc_name */}
      <label htmlFor="poc_name">Point of Contact</label>
      <input
        type="text"
        id="poc_name"
        value={modalData.poc_name}
        onChange={(e) =>
          setModalData({ ...modalData, poc_name: e.target.value })
        }
      />
      {/* poc_email */}
      <input
        type="text"
        value={modalData.poc_email}
        onChange={(e) =>
          setModalData({ ...modalData, poc_email: e.target.value })
        }
      />
      {/* app_open */}
      <label htmlFor="deadline">Deadlines</label>
      <input
        type="date"
        id="app_open"
        value={modalData.app_open}
        onChange={(e) => {
          setModalData({ ...modalData, app_open: e.target.value });
        }}
      />
      {/* app_deadline */}
      <input
        type="date"
        id="deadline"
        value={modalData.app_deadline}
        onChange={(e) => {
          setModalData({ ...modalData, app_deadline: e.target.value });
        }}
      />
      {/* description */}
      <label htmlFor="description">Description</label>
      <textarea
        id="description"
        value={modalData.description}
        onChange={(e) =>
          setModalData({ ...modalData, description: e.target.value })
        }
      />
    </div>
  );
};

export default InputBox;
