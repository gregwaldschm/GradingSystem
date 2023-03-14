import React, { useState } from "react";
import "./Courses.css";

function Courses() {
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [courses, setCourses] = useState([
    { id: 1, name: "Math 101" },
    { id: 2, name: "English 201" },
    { id: 3, name: "Science 301" }
  ]);
  const [newCourse, setNewCourse] = useState("");

  const handleSelectCourse = (course) => {
    setSelectedCourse(course);
  };

  const handleAddCourse = () => {
    const newCourseObject = { id: courses.length + 1, name: newCourse };
    setCourses([...courses, newCourseObject]);
    setNewCourse("");
  };

  const handleRemoveCourse = (course) => {
    setCourses(courses.filter((c) => c.id !== course.id));
    setSelectedCourse(null);
  };

  const handleSetAsActiveCourse = (course) => {
    // Handle code to set as active course
  };

  return (
    <div className="courses-container">
      <div className="courses-list">
        <h2 className="section-header">Courses</h2>
        <ul>
          {courses.map((course) => (
            <li
              key={course.id}
              className={selectedCourse === course ? "selected" : ""}
              onClick={() => handleSelectCourse(course)}
            >
              {course.name}
            </li>
          ))}
        </ul>
        <div className="add-course-form">
          <h2 className="section-header">Add Course</h2>
          <input
            type="text"
            value={newCourse}
            onChange={(e) => setNewCourse(e.target.value)}
          />
          <button onClick={handleAddCourse}>Add Course</button>
        </div>
      </div>
      <div className="selected-course">
        {selectedCourse ? (
          <>
            <h2 className="section-header">{selectedCourse.name}</h2>
            <p className="section-content">
              Here is where you can view the assignments and grades for this
              course.
            </p>
            <button onClick={() => handleSetAsActiveCourse(selectedCourse)}>
              Set as Active Course
            </button>
            <button onClick={() => handleRemoveCourse(selectedCourse)}>
              Remove Course
            </button>
          </>
        ) : (
          <p className="section-content">
            Select a course to view assignments and grades.
          </p>
        )}
      </div>
    </div>
  );
}

export default Courses;
