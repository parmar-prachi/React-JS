// used to store and update values :

import { useState, useEffect } from "react";

const ReminderCounter = () => {

    // User Input - stores minutes & seconds typed by user :

    const [minutes, setMinutes] = useState("");
    const [secondsInput, setSecondsInput] = useState("");

    // Timer States : 

    const [seconds, setSeconds] = useState(0); // counts how many seconds have passed
    const [limit, setLimit] = useState(null);  // total time in seconds (when to stop)
    const [isRunning, setIsRunning] = useState(false); // controls whether timer is running or paused

    // Start timer :

    const startTimer = () => {
        // Converts minutes + seconds into total seconds : 
        const totalSeconds =
            Number(minutes || 0) * 60 + Number(secondsInput || 0);  /* || 0 → if input is empty, treat it as 0  , Number() → converts string → number */

        if (totalSeconds <= 0) return;  // Prevents starting timer if time is 0 or less than

        setLimit(totalSeconds);
        setSeconds(0);
        setIsRunning(true);
    };

    // Pause timer :

    const pauseTimer = () => {
        setIsRunning(false);
    };

    // Reset timer :

    const resetTimer = () => {
        setIsRunning(false);
        setSeconds(0);
        setLimit(null);
        setMinutes("");
        setSecondsInput("");
    };

    // Timer logic ( Runs when isRunning changes ) :

    useEffect(() => {
        if (!isRunning) return; // If timer is paused → do nothing

        const timer = setInterval(() => {
            setSeconds(prev => prev + 1);
        }, 1000);

        return () => clearInterval(timer);
    }, [isRunning]);  // runs only when isRunning changes

    // Stop at limit :

    useEffect(() => {
        if (seconds === limit && limit !== null) {
            setIsRunning(false);
        }
    }, [seconds, limit]);

    // MM : SS format : 

    const formatTime = (time) => {
        const m = String(Math.floor(time / 60)).padStart(2, "0");
        const s = String(time % 60).padStart(2, "0");
        return `${m} : ${s}`;
    };

    return (
        <div className="counter-card">
            <h2>Reminder Counter</h2>

            <div className="input-group">
                <input
                    type="number"
                    placeholder="Minutes"
                    value={minutes}
                    disabled={isRunning}
                    onChange={(e) => setMinutes(e.target.value)}
                />
                <input
                    type="number"
                    placeholder="Seconds"
                    value={secondsInput}
                    disabled={isRunning}
                    onChange={(e) => setSecondsInput(e.target.value)}
                />
            </div>

            <div className="button-group">
                <button onClick={startTimer}>Start</button>
                <button onClick={pauseTimer} className="pause">Pause</button>
                <button onClick={resetTimer} className="reset">Reset</button>
            </div>

            <div className="count-display">
                {formatTime(seconds)}
            </div>

            {seconds === limit && limit !== null && (
                <p className="reminder-alert">
                    ⏰ Reminder: Time limit reached!
                </p>
            )}
        </div>
    );
};

export default ReminderCounter;
