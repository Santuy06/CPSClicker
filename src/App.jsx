import { useState, useRef } from 'react';
import TimeSelector from './components/TimeSelector';
import ClickPad from './components/ClickPad';
import Results from './components/Results';
import AdSlot from './components/AdSlot';
import ClickingGuide from './components/ClickingGuide';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import Modal from './components/Modal';
import './App.css';

const TIME_OPTIONS = [1, 5, 10, 15, 30, 60, 100];
const AD_CLIENT_ID = "ca-pub-8631793219925376"; // Your Publisher ID

function App() {
  const [selectedTime, setSelectedTime] = useState(5);
  const [isActive, setIsActive] = useState(false);
  const [timeLeft, setTimeLeft] = useState(5);
  const [clicks, setClicks] = useState(0);
  const [clickTimestamps, setClickTimestamps] = useState([]);
  const [showResults, setShowResults] = useState(false);

  // Modal states
  const [activeModal, setActiveModal] = useState(null); // 'about', 'privacy', 'terms'

  const timerRef = useRef(null);
  const testStartTimeRef = useRef(null);
  const isTestActiveRef = useRef(false);

  const startTest = () => {
    if (isTestActiveRef.current) return;
    isTestActiveRef.current = true;
    setIsActive(true);
    setTimeLeft(selectedTime);
    setClicks(1);
    setClickTimestamps([0]);
    setShowResults(false);
    testStartTimeRef.current = Date.now();

    timerRef.current = setInterval(() => {
      setTimeLeft(prev => {
        const newTime = Math.max(0, prev - 0.1);
        if (newTime === 0) {
          clearInterval(timerRef.current);
          setShowResults(true);
          setIsActive(false);
          // Cooldown to prevent accidental double-start if clicking rapidly at the end
          setTimeout(() => {
            isTestActiveRef.current = false;
          }, 200);
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
    console.log(clicks);

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
    if (timerRef.current) clearInterval(timerRef.current);
    isTestActiveRef.current = false;
    setIsActive(false);
    setTimeLeft(selectedTime);
    setClicks(0);
    setClickTimestamps([]);
    setShowResults(false);
    testStartTimeRef.current = null;

    // Auto-scroll to top with a slight offset (adjust 'top' value as needed)
    window.scrollTo({ top: 150, behavior: 'smooth' });
  };

  const handleTimeChange = (time) => {
    if (timerRef.current) clearInterval(timerRef.current);
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

  const renderModalContent = () => {
    switch (activeModal) {
      case 'about':
        return (
          <>
            <p>Welcome to <strong>CPS Test</strong>, the most accurate and responsive clicking speed measurement tool online.</p>
            <h4>Our Mission</h4>
            <p>We aim to provide gamers and professionals with a reliable platform to test, track, and improve their clicking efficiency using the latest web technologies.</p>
          </>
        );
      case 'privacy':
        return (
          <>
            <h4>Data Collection & Privacy Policy</h4>
            <p>At CPS Test, we prioritize the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by our platform and how we use it.</p>

            <h4>Log Files</h4>
            <p>Like many other websites, we follow a standard procedure of using log files. These files log visitors when they visit websites. This is for hosting services' analytics. The information collected includes IP addresses, browser type, Internet Service Provider (ISP), date/time stamp, and number of clicks. This information is not linked to any personally identifiable information.</p>

            <h4>Google DoubleClick DART Cookie</h4>
            <p>Google is one of the third-party vendors on our site. It also uses cookies, known as DART cookies, to serve ads to our site visitors based upon their visit to our site and other sites on the internet. However, visitors may choose to decline the use of DART cookies by visiting the Google ad and content network Privacy Policy.</p>

            <h4>Our Advertising Partners</h4>
            <p>Some of advertisers on our site may use cookies and web beacons. Our advertising partners include Google AdSense. Each of our advertising partners has their own Privacy Policy for their policies on user data.</p>
          </>
        );
      case 'terms':
        return (
          <>
            <h4>1. Acceptance of Terms</h4>
            <p>By accessing this website, you are agreeing to be bound by these website Terms and Conditions of Use, all applicable laws and regulations, and agree that you are responsible for compliance with any applicable local laws.</p>

            <h4>2. Use License</h4>
            <p>Permission is granted to temporarily use the CPS Test tool for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:</p>
            <ul>
              <li>Modify or copy the materials;</li>
              <li>Use the materials for any commercial purpose;</li>
              <li>Attempt to decompile or reverse engineer any software contained on the website;</li>
              <li>Remove any copyright or other proprietary notations from the materials.</li>
            </ul>

            <h4>3. Disclaimer</h4>
            <p>The materials on CPS Test are provided "as is". We make no warranties, expressed or implied, and hereby disclaim and negate all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose.</p>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <div className="app-container">
      {/* Top Ad Slot */}
      <div className="ad-slot ad-top">
        <AdSlot
          adClient={AD_CLIENT_ID}
          adSlot="XXXXXXXXXX"
          adFormat="horizontal"
        />
      </div>

      <div className="app-main-layout">
        <aside className="ad-slot ad-left">
          <AdSlot
            adClient={AD_CLIENT_ID}
            adSlot="XXXXXXXXXX"
            adFormat="vertical"
          />
        </aside>

        <div className="app-content">
          <header className="header">
            <h1 className="title">CPS Test</h1>
            <p className="subtitle">Official Click Speed Test Calculator</p>
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

          {/* Ad Slot before content */}
          <div className="ad-slot ad-middle">
            <AdSlot
              adClient={AD_CLIENT_ID}
              adSlot="XXXXXXXXXX"
              adFormat="horizontal"
            />
          </div>

          <ClickingGuide />

          <FAQ />

          <div className="ad-slot ad-bottom">
            <AdSlot
              adClient={AD_CLIENT_ID}
              adSlot="XXXXXXXXXX"
              adFormat="auto"
            />
          </div>
        </div>

        <aside className="ad-slot ad-right">
          <AdSlot
            adClient={AD_CLIENT_ID}
            adSlot="XXXXXXXXXX"
            adFormat="vertical"
          />
        </aside>
      </div>

      <Footer
        onOpenAbout={() => setActiveModal('about')}
        onOpenPrivacy={() => setActiveModal('privacy')}
        onOpenTerms={() => setActiveModal('terms')}
      />

      {activeModal && (
        <Modal
          title={activeModal.toUpperCase()}
          content={renderModalContent()}
          onClose={() => setActiveModal(null)}
        />
      )}
    </div>
  );
}

export default App;
