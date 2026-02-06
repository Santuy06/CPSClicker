import { useState, useRef } from 'react';
import TimeSelector from './components/TimeSelector';
import ClickPad from './components/ClickPad';
import Results from './components/Results';
import './App.css';

const TIME_OPTIONS = [1, 5, 10, 15, 30, 60, 100];

function App() {
  const [selectedTime, setSelectedTime] = useState(5);
  const [isActive, setIsActive] = useState(false);
  const [timeLeft, setTimeLeft] = useState(5);
  const [clicks, setClicks] = useState(0);
  const [clickTimestamps, setClickTimestamps] = useState([]);
  const [showResults, setShowResults] = useState(false);

  const timerRef = useRef(null);
  const testStartTimeRef = useRef(null);
  const isTestActiveRef = useRef(false); // Track active state with ref

  const startTest = () => {
    if (isTestActiveRef.current) return; // Prevent double start

    isTestActiveRef.current = true;
    setIsActive(true);
    setTimeLeft(selectedTime);
    setClicks(1);
    setClickTimestamps([0]);
    setShowResults(false);
    testStartTimeRef.current = Date.now();

    // Start timer
    timerRef.current = setInterval(() => {
      setTimeLeft(prev => {
        const newTime = Math.max(0, prev - 0.1);
        if (newTime === 0) {
          clearInterval(timerRef.current);
          isTestActiveRef.current = false;
          setIsActive(false);
          setTimeout(() => setShowResults(true), 100);
        }
        return newTime;
      });
    }, 100);
  };

  const addClick = () => {
    if (!testStartTimeRef.current || !isTestActiveRef.current) return;

    const timestamp = (Date.now() - testStartTimeRef.current) / 1000;
    setClicks(prev => prev + 1);
    setClickTimestamps(prev => [...prev, timestamp]);
  };

  const handleClick = () => {
    if (showResults) return;

    if (!isTestActiveRef.current) {
      startTest();
    } else {
      addClick();
    }
  };

  const handleReset = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
    isTestActiveRef.current = false;
    setIsActive(false);
    setTimeLeft(selectedTime);
    setClicks(0);
    setClickTimestamps([]);
    setShowResults(false);
    testStartTimeRef.current = null;
  };

  const handleTimeChange = (time) => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
    isTestActiveRef.current = false;
    setSelectedTime(time);
    setIsActive(false);
    setTimeLeft(time);
    setClicks(0);
    setClickTimestamps([]);
    setShowResults(false);
    testStartTimeRef.current = null;
  };

  const cps = selectedTime > 0 ? (clicks / selectedTime).toFixed(2) : 0;

  return (
    <div className="app-container">
      {/* Top Ad Slot - Leaderboard */}
      <div className="ad-slot ad-top">
        <div className="ad-placeholder">Advertisement</div>
      </div>

      <div className="app-main-layout">
        {/* Left Side Ad Slot - Skyscraper */}
        <aside className="ad-slot ad-left">
          <div className="ad-placeholder">Advertisement</div>
        </aside>

        <div className="app-content">
          <header className="header">
            <h1 className="title">CPS Test</h1>
            <p className="subtitle">Clicks Per Second Test</p>
          </header>

          <TimeSelector
            options={TIME_OPTIONS}
            selected={selectedTime}
            onSelect={handleTimeChange}
            disabled={isActive}
          />

          <main className="main-content">
            {!showResults ? (
              <ClickPad
                onClick={handleClick}
                clicks={clicks}
                timeLeft={timeLeft}
                selectedTime={selectedTime}
                isActive={isActive}
              />
            ) : (
              <Results
                clicks={clicks}
                cps={cps}
                selectedTime={selectedTime}
                clickTimestamps={clickTimestamps}
                onReset={handleReset}
              />
            )}
          </main>

          {/* Bottom Ad Slot */}
          <div className="ad-slot ad-bottom">
            <div className="ad-placeholder">Advertisement</div>
          </div>
        </div>

        {/* Right Side Ad Slot - Skyscraper */}
        <aside className="ad-slot ad-right">
          <div className="ad-placeholder">Advertisement</div>
        </aside>
      </div>
    </div>
  );
}

export default App;
