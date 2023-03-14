import React, { useState } from "react";
import { Table, Tag } from "antd";
import { sortableContainer, sortableElement } from "react-sortable-hoc";
import arrayMove from "array-move";
import "./Assignments.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPrint } from "@fortawesome/free-solid-svg-icons";

// Define the columns for the antd Table component
const columns = [
  {
    // Column for student names
    title: "Name",
    dataIndex: "name",
    sorter: (a, b) => a.name.localeCompare(b.name), // Sort by name alphabetically
    sortDirections: ["ascend", "descend"] // Allow sorting in ascending and descending order
  },
  {
    // Column for student number
    title: "Student Number",
    dataIndex: "number",
    sorter: (a, b) => a.number - b.number, // Sort by score
    sortDirections: ["ascend", "descend"] // Allow sorting in ascending and descending order
  },
  {
    // Column for assignment 1 scores
    title: "Assignment 1",
    dataIndex: "assignment1",
    sorter: (a, b) => a.assignment1 - b.assignment1, // Sort by score
    sortDirections: ["ascend", "descend"] // Allow sorting in ascending and descending order
  },
  {
    // Column for assignment 2 scores
    title: "Assignment 2",
    dataIndex: "assignment2",
    sorter: (a, b) => a.assignment2 - b.assignment2, // Sort by score
    sortDirections: ["ascend", "descend"] // Allow sorting in ascending and descending order
  },
  {
    // Column for assignment 3 scores
    title: "Assignment 3",
    dataIndex: "assignment3",
    sorter: (a, b) => a.assignment3 - b.assignment3, // Sort by score
    sortDirections: ["ascend", "descend"] // Allow sorting in ascending and descending order
  },
  {
    // Column for total scores, which is calculated based on the assignment scores
    title: "Total Score",
    dataIndex: "score",
    key: "score",
    sorter: (a, b) => a.score - b.score, // Sort by total score
    render: (text, record) => (
      // Render the total score as a colored tag based on whether the score is above or below 70
      <Tag color={record.score >= 70 ? "green" : "red"}>{record.score}</Tag>
    )
  }
];

// This function logs a message to the console when the button is clicked
const handleClick = () => {
  console.log("Button clicked!");
};

// This array contains data objects with information about students and their assignments
const data = [
  {
    key: "1",
    name: "John Doe",
    number: "12345",
    assignment1: 80,
    assignment2: 90,
    assignment3: 75,
    score: 82 // Add a new "score" field to the data object for sorting
  },
  {
    key: "2",
    name: "Jane Smith",
    number: "54321",
    assignment1: 75,
    assignment2: 80,
    assignment3: 85,
    score: 80
  },
  {
    key: "3",
    name: "Bob Johnson",
    number: "11111",
    assignment1: 90,
    assignment2: 70,
    assignment3: 80,
    score: 80
  }
];

// Define a sortable table row item using the sortableElement function from the react-sortable-hoc library
const SortableItem = sortableElement(({ children }) => <tr>{children}</tr>);

// Define a sortable container for the table body using the sortableContainer function from the react-sortable-hoc library
const SortableContainer = sortableContainer((props) => <tbody {...props} />);

// Define a functional component named InstructorGradingProgram
const InstructorGradingProgram = () => {
  // Initialize a state variable named "tableData" using the useState hook, and set its initial value to the "data" array
  const [tableData, setTableData] = useState(data);

  // Define an "onSortEnd" function that takes in an object with oldIndex and newIndex properties and updates the "tableData" state variable by moving the array item at oldIndex to newIndex using the arrayMove function from the react-sortable-hoc library
  const onSortEnd = ({ oldIndex, newIndex }) => {
    setTableData(arrayMove(tableData, oldIndex, newIndex));
  };

  return (
    <div className="container">
      <div className="main-content">
        <div className="button-container">
          <div>
            <button onClick={handleClick}>
              <FontAwesomeIcon icon={faPrint} /> Print Blank Listing
            </button>
            <button onClick={handleClick}>
              <FontAwesomeIcon icon={faPrint} /> Print Student
            </button>
          </div>
        </div>

        <div className="table-container">
          <Table
            dataSource={tableData}
            columns={columns}
            pagination={false}
            bordered
            components={{
              body: {
                wrapper: (props) => (
                  <SortableContainer
                    useDragHandle
                    disableAutoscroll
                    helperClass="row-dragging"
                    onSortEnd={onSortEnd}
                    {...props}
                  ></SortableContainer>
                ),
                row: SortableItem
              }
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default InstructorGradingProgram;
