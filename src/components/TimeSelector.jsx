import './TimeSelector.css';

function TimeSelector({ options, selected, onSelect, disabled }) {
    return (
        <nav className="time-selector">
            {options.map(time => (
                <button
                    key={time}
                    className={`time-option ${selected === time ? 'active' : ''} ${disabled ? 'disabled' : ''}`}
                    onClick={() => !disabled && onSelect(time)}
                    disabled={disabled}
                >
                    {time}s
                </button>
            ))}
        </nav>
    );
}

export default TimeSelector;
