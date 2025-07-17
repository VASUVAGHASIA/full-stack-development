import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
  });

  const [votes, setVotes] = useState({
    excellent: 0,
    good: 0,
    average: 0,
    poor: 0,
  });

  const [currentTime, setCurrentTime] = useState(new Date());

  const totalFeedback = votes.excellent + votes.good + votes.average + votes.poor;

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const voteOptions = ["excellent", "good", "average", "poor"];
    const voteTimer = setInterval(() => {
      const randomOption = voteOptions[Math.floor(Math.random() * voteOptions.length)];
      if (!randomOption) return;
      setVotes(prevVotes => ({
      ...prevVotes,
      [randomOption]: prevVotes[randomOption] + 1,
      }));
    }, 2000);

    return () => clearInterval(voteTimer);
  }, []);

  const [personalCount, setPersonalCount] = useState(0);

  return (
    <>
      <div>
        <h1>
          Live Event Feedback, Welcome, {userData.firstName} {userData.lastName}
        </h1>
        <div>
          <input
            type="text"
            value={userData.firstName}
            onChange={(e) =>
              setUserData({ ...userData, firstName: e.target.value })
            }
          />
          <input
            type="text"
            value={userData.lastName}
            onChange={(e) =>
              setUserData({ ...userData, lastName: e.target.value })
            }
          />
        </div>
      </div>

      <div>
        <p>Current time: {currentTime.toLocaleString()}</p>
      </div>

      <br />
      <div>
        <h2>Feedback Panel</h2>
        <p>Total Feedback: {totalFeedback}</p>

        <div className="group">
        <p>Excellent: {votes.excellent}</p>
        <p>Good: {votes.good}</p>
        <p>Average: {votes.average}</p>
        <p>Poor: {votes.poor}</p>
        </div>

        <div className="">
          <button
            onClick={() => {
              setVotes({ ...votes, excellent: votes.excellent + 1 });
              setPersonalCount(personalCount + 1);
            }}
          >
            Excellent
          </button>
          <button
            onClick={() => {
              setVotes({ ...votes, good: votes.good + 1 });
              setPersonalCount(personalCount + 1);
            }}
          >
            Good
          </button>
          <button
            onClick={() => {
              setVotes({ ...votes, average: votes.average + 1 });
              setPersonalCount(personalCount + 1);
            }}
          >
            Average
          </button>
          <button
            onClick={() => {
              setVotes({ ...votes, poor: votes.poor + 1 });
              setPersonalCount(personalCount + 1);
            }}
          >
            Poor
          </button>
        </div>
      </div>

      <br /><br />
      <div>
        <h2>Counter Panel</h2>
        <p>Your Feedback Count: {personalCount}</p>
        <button onClick={() => setPersonalCount(personalCount + 1)}>Increment</button>
        <button onClick={() => setPersonalCount(personalCount - 1)}>Decrement</button>
        <button onClick={() => setPersonalCount(0)}>Reset</button>
        <button onClick={() => setPersonalCount(personalCount + 5)}>Increment by 5</button>
      </div>
    </>
  );
}

export default App;