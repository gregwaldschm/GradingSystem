import React, { useState } from "react";
import { Table, Tag } from "antd";
import { sortableContainer, sortableElement } from "react-sortable-hoc";
import arrayMove from "array-move";
import "./Assignments.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlus,
  faMinus,
  faPrint,
  faFileImport,
  faFileExport,
  faQuestion,
  faChartSimple,
  faScaleUnbalanced,
  faCircleDown
} from "@fortawesome/free-solid-svg-icons";

// Define the columns for the antd Table component
const columns = [
  {
    // Column for assignment name
    title: "Assignment Name",
    dataIndex: "name",
    sorter: (a, b) => a.name.localeCompare(b.name), // Sort by name alphabetically
    sortDirections: ["ascend", "descend"] // Allow sorting in ascending and descending order
  },
  {
    // Column for total points
    title: "Total Points",
    dataIndex: "totalPoints",
    sorter: (a, b) => a.totalPoints - b.totalPoints, // Sort by total points
    sortDirections: ["ascend", "descend"] // Allow sorting in ascending and descending order
  },
  {
    // Column for category
    title: "Category",
    dataIndex: "category",
    sorter: (a, b) => a.category.localeCompare(b.category), // Sort by category alphabetically
    sortDirections: ["ascend", "descend"] // Allow sorting in ascending and descending order
  },
  {
    // Column for mean
    title: "Mean",
    dataIndex: "mean",
    sorter: (a, b) => a.mean - b.mean, // Sort by mean
    sortDirections: ["ascend", "descend"] // Allow sorting in ascending and descending order
  },
  {
    // Column for median
    title: "Median",
    dataIndex: "median",
    sorter: (a, b) => a.median - b.median, // Sort by median
    sortDirections: ["ascend", "descend"] // Allow sorting in ascending and descending order
  },
  {
    // Column for mode
    title: "Mode",
    dataIndex: "mode",
    sorter: (a, b) => a.mode - b.mode, // Sort by mode
    sortDirections: ["ascend", "descend"] // Allow sorting in ascending and descending order
  },
  {
    // Column for standard deviation
    title: "Standard Deviation",
    dataIndex: "standardDeviation",
    sorter: (a, b) => a.standardDeviation - b.standardDeviation, // Sort by standard deviation
    sortDirections: ["ascend", "descend"] // Allow sorting in ascending and descending order
  }
];

// This function logs a message to the console when the button is clicked
const handleClick = () => {
  console.log("Button clicked!");
};

// This array contains data objects with information about assignments
const data = [
  {
    key: "1",
    name: "Assignment 1",
    totalPoints: 100,
    category: "Homework",
    mean: 85,
    median: 90,
    mode: 95,
    standardDeviation: 5
  },
  {
    key: "2",
    name: "Assignment 2",
    totalPoints: 100,
    category: "Quiz",
    mean: 75,
    median: 80,
    mode: 85,
    standardDeviation: 7
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
              <FontAwesomeIcon icon={faPlus} /> Create Assignment
            </button>
            <button onClick={handleClick}>
              <FontAwesomeIcon icon={faMinus} /> Remove Assignment
            </button>
            <button onClick={handleClick}>
              <FontAwesomeIcon icon={faChartSimple} /> Categories
            </button>
            <button onClick={handleClick}>
              <FontAwesomeIcon icon={faScaleUnbalanced} /> Grading Scale
            </button>
            <button onClick={handleClick}>
              <FontAwesomeIcon icon={faPrint} /> Print
            </button>
            <button onClick={handleClick}>
              <FontAwesomeIcon icon={faFileImport} /> Import
            </button>
            <button onClick={handleClick}>
              <FontAwesomeIcon icon={faFileExport} /> Export
            </button>
            <button onClick={handleClick}>
              <FontAwesomeIcon icon={faQuestion} /> What If?
            </button>
            <button onClick={handleClick}>
              <FontAwesomeIcon icon={faCircleDown} /> Drop 'N' Scores
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
