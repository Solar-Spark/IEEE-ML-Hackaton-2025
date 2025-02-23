import PropTypes from 'prop-types';
import BarChart from '../BarChart/BarChart';
import './Report.css';

const Report = (props) => {
  function prepareData(table) {
    const data = table.reduce((prev, curr) => {
      if (prev[curr.company]) {
        prev[curr.company] += curr.sum;
      } else {
        prev[curr.company] = curr.sum;
      }

      return prev;
    }, {});

    const result = []

    Object.keys(data).forEach((key) => {
      result.push({company: key, amount: data[key]})
    });

    return result;
  }

  return (
    <div className="report-container">
      <h2>{props.report.name}</h2>
      <p>{props.report.description}</p>
      <h4>Amount: {props.report.amount}</h4>
      <h4>Sum: {props.report.sum}</h4>
      <table>
        <thead>
          <tr>
            <th>Company</th>
            <th>BIN</th>
            <th>Year</th>
            <th>Sum</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {props.report.table.map((row, index) => (
            <tr key={index}>
              <td>{row.company}</td>
              <td>{row.BIN}</td>
              <td>{row.year}</td>
              <td>{row.sum}</td>
              <td>{row.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <BarChart data={prepareData(props.report.table)}/>
    </div>
  )
}

Report.propTypes = {
  report: PropTypes.shape({
    name: PropTypes.string,
    description: PropTypes.string,
    amount: PropTypes.number,
    sum: PropTypes.number,
    table: PropTypes.arrayOf(PropTypes.shape({
      company: PropTypes.string,
      BIN: PropTypes.string,
      sum: PropTypes.number,
      amount: PropTypes.number,
      year: PropTypes.number,
    })),
  }),
};

export default Report;
