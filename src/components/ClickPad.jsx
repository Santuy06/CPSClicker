import { useState, useEffect } from 'react';
import './ClickPad.css';

function ClickPad({ onClick, clicks, timeLeft, selectedTime, isActive }) {
    const [ripples, setRipples] = useState([]);

    const handleClick = (e) => {
        onClick();

        // Create ripple effect
        const rect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const newRipple = {
            x,
            y,
            id: Date.now() + Math.random()
        };

        setRipples(prev => [...prev, newRipple]);

        // Remove ripple after animation
        setTimeout(() => {
            setRipples(prev => prev.filter(r => r.id !== newRipple.id));
        }, 600);
    };

    return (
        <div className="click-pad-container">
            <div
                className="click-pad"
                onClick={handleClick}
            >
                {ripples.map(ripple => (
                    <span
                        key={ripple.id}
                        className="ripple"
                        style={{
                            left: ripple.x,
                            top: ripple.y
                        }}
                    />
                ))}

                <div className="click-pad-content">
                    {!isActive ? (
                        <>
                            <div className="instruction-icon">👆</div>
                            <h2 className="instruction">Click here to start</h2>
                            <p className="time-display">{selectedTime} seconds</p>
                        </>
                    ) : (
                        <>
                            <div className="click-count">{clicks}</div>
                            <p className="click-label">Clicks</p>
                            <div className="timer">{timeLeft.toFixed(1)}s</div>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}

export default ClickPad;
