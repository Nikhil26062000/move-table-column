import React, { useState } from "react";
import "./styles.css";

const generateData = () => {
  const data = [];
  for (let i = 1; i <= 50; i++) {
    data.push({
      id: i,
      column1: `Data ${i}-1`,
      column2: `Data ${i}-2`,
      column3: `Data ${i}-3`,
      column4: `Data ${i}-4`,
      column5: `Data ${i}-5`,
      column6: `Data ${i}-6`,
      column7: `Data ${i}-7`,
      column8: `Data ${i}-8`,
      column9: `Data ${i}-9`,
      column10: `Data ${i}-10`,
    });
    console.log(`Data at row ${i} :`, data);
  }
  return data;
};

const App = () => {
  const data = generateData();
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 10;
  const totalPages = Math.ceil(data.length / rowsPerPage);

  const handleClick = (direction) => {
    if (direction === "next" && currentPage < totalPages) {
      setCurrentPage((prev) => prev + 1);
    } else if (direction === "prev" && currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  const currentData = data.slice(
    (currentPage - 1) * rowsPerPage,
    currentPage * rowsPerPage
  );

  return (
    <div className="table-container">
      <div className="table-wrapper">
        <table>
          <thead>
            <tr>
              <th className="sticky-column">Static Column</th>
              <th>Column 1</th>
              <th>Column 2</th>
              <th>Column 3</th>
              <th>Column 4</th>
              <th>Column 5</th>
              <th>Column 6</th>
              <th>Column 7</th>
              <th>Column 8</th>
              <th>Column 9</th>
            </tr>
          </thead>
          <tbody>
            {currentData.map((row) => (
              <tr key={row.id}>
                <td className="sticky-column">{row.id}</td>
                <td>{row.column1}</td>
                <td>{row.column2}</td>
                <td>{row.column3}</td>
                <td>{row.column4}</td>
                <td>{row.column5}</td>
                <td>{row.column6}</td>
                <td>{row.column7}</td>
                <td>{row.column8}</td>
                <td>{row.column9}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="pagination-wrapper">
        <div className="pagination">
          <button
            onClick={() => handleClick("prev")}
            disabled={currentPage === 1}
          >
            Previous
          </button>
          <span>
            Page {currentPage} of {totalPages}
          </span>
          <button
            onClick={() => handleClick("next")}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
