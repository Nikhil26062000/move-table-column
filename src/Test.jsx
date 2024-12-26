import { useNavigate } from "react-router-dom";

const generateData = () => {
  const data = [];
  for (let i = 1; i <= 5; i++) {
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
  }
  return data;
};

const TableWithRoutes = () => {
  const navigate = useNavigate();
  const data = generateData();

  const handleNavigation = (row, event) => {
    const selectedPage = event.target.value;
    console.log("selectedPage :", selectedPage);
    navigate(selectedPage);
    console.log(row);
  };

  return (
    <div className="table-container">
      <div className="table-wrapper">
        <table>
          <thead>
            <tr>
              <th>Static Column</th>
              <th>Column 1</th>
              <th>Column 2</th>
              <th>Column 3</th>
              <th>Column 4</th>
              <th>Column 5</th>
              <th>Column 6</th>
              <th>Column 7</th>
              <th>Column 8</th>
              <th>Column 9</th>
              <th>Navigation</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => (
              <tr key={row.id}>
                <td>{row.id}</td>
                <td>{row.column1}</td>
                <td>{row.column2}</td>
                <td>{row.column3}</td>
                <td>{row.column4}</td>
                <td>{row.column5}</td>
                <td>{row.column6}</td>
                <td>{row.column7}</td>
                <td>{row.column8}</td>
                <td>{row.column9}</td>
                <td>
                  <select
                    onChange={(e) => handleNavigation(row, e)}
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Select Page
                    </option>
                    <option value="/home">Home</option>
                    <option value="/about">About</option>
                    <option value="/price">Price</option>
                    <option value="/booking">Booking</option>
                  </select>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TableWithRoutes;
