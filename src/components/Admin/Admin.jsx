import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function Admin() {
  const dispatch = useDispatch();

  const states = useSelector((store) => store.states);
  const activities = useSelector((store) => store.activities);

  useEffect(() => {
    getStates();
    getActivities();
  }, []);

  function getStates() {
    console.log('*** <Admin /> in getStates() ***');

    dispatch({
      type: 'FETCH_STATES',
    });
  }

  function getActivities() {
    console.log('*** <Admin /> in getActivities() ***');

    dispatch({
      type: 'FETCH_ACTIVITIES',
    });
  }

  function deleteRun(runId) {
    console.log('*** <Admin /> in deleteRun() ***');
    console.log('\trunId:', runId);
  }

  function sweet() {
    console.log('*** <Admin /> in sweet() ***');
  }

  return (
    <div>
      <h1>ADMIN PAGE</h1>

      <h2>Practice Sweet Alerts</h2>
      <button onClick={sweet}>Click Me</button>

      <h2>All Community Runs</h2>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Route</th>
            <th>Distance</th>
            <th>Time</th>
            <th>MPH</th>
            <th>Pace</th>
            <th>Notes</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {activities.map((run) => {
            return (
              <tr key={run.id}>
                <td>{run.date}</td>
                <td>{run.route}</td>
                <td>{run.distance}</td>
                <td>{run.time}</td>
                <td>{run.mph}</td>
                <td>{run.pace}</td>
                <td>{run.notes}</td>
                <td>
                  <button onClick={() => deleteRun(run.id)}>Delete</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

      <h2>State Breakdown</h2>
      <table>
        <thead>
          <tr>
            <th>State</th>
            <th>Count</th>
          </tr>
        </thead>
        {/* <tbody>
          {states.map((state) => {
            return (
              <tr key={state.state}>
                <td>{state.state}</td>
                <td>{state.count}</td>
              </tr>
            );
          })}
        </tbody> */}
      </table>
    </div>
  );
}

export default Admin;
