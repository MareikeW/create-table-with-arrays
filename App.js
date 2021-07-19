import { useState } from "react";

export default function App() {
  const [year, setYear] = useState([1, 2, 3]);
  const [contribution, setContribution] = useState([1000, 1000, 1000]);
  const [interests, setInterests] = useState([100, 120, 140]);
  const [endBalance, setEndBalance] = useState([1100, 2200, 3340]);

  function getTable() {
    let savingsTable = [];
    for (let i = 0; i < year.length; i++) {
      savingsTable.push(
        <tr key={year[i]}>
          <td>{year[i]}</td>
          <td>{contribution[i]}</td>
          <td>{interests[i]}</td>
          <td>{endBalance[i]}</td>
        </tr>
      );
    }

    return savingsTable;
  }

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <table>
        {/* Table Headers */}
        <thead>
          <tr>
            <th>Year</th>
            <th>Contributions</th>
            <th>Interests</th>
            <th>End Balance</th>
          </tr>
        </thead>
        <tbody>{getTable()}</tbody>
      </table>
    </div>
  );
}
