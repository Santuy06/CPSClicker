import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import './Results.css';

function Results({ clicks, cps, selectedTime, clickTimestamps, onReset }) {
    // Determine rank based on CPS
    const getRank = (cps) => {
        if (cps >= 15) return { title: '🚀 Lightning Fast', color: '#FFD700' };
        if (cps >= 12) return { title: '⚡ Blazing Speed', color: '#FF6B6B' };
        if (cps >= 10) return { title: '🔥 Fire Fingers', color: '#FF8C42' };
        if (cps >= 8) return { title: '💨 Speedy Clicker', color: '#4ECDC4' };
        if (cps >= 6) return { title: '👍 Good Job', color: '#95E1D3' };
        if (cps >= 4) return { title: '👌 Not Bad', color: '#A8E6CF' };
        if (cps >= 2) return { title: '🐢 Slow & Steady', color: '#C7CEEA' };
        return { title: '😴 Sleepy Clicker', color: '#E0E0E0' };
    };

    // Check for potential auto-clicker
    const isSuspicious = cps > 50;

    // Prepare data for chart
    const chartData = clickTimestamps.map((timestamp, index) => ({
        time: timestamp.toFixed(2),
        clicks: index + 1,
        cps: timestamp > 0 ? ((index + 1) / timestamp).toFixed(2) : '0.00'
    }));

    const rank = getRank(parseFloat(cps));

    const shareText = `I scored ${cps} CPS with ${clicks} clicks in ${selectedTime} seconds! Can you beat me?`;
    const shareUrl = window.location.href;

    const handleShare = (platform) => {
        const encodedText = encodeURIComponent(shareText);
        const encodedUrl = encodeURIComponent(shareUrl);

        const urls = {
            twitter: `https://twitter.com/intent/tweet?text=${encodedText}&url=${encodedUrl}`,
            facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}&quote=${encodedText}`,
            whatsapp: `https://wa.me/?text=${encodedText}%20${encodedUrl}`
        };

        window.open(urls[platform], '_blank', 'width=600,height=400');
    };

    return (
        <div className="results">
            <div className="results-header">
                <h2>Test Complete!</h2>
            </div>

            <div className="results-main">
                <div className="rank-badge" style={{ borderColor: rank.color }}>
                    <span className="rank-title">{rank.title}</span>
                </div>

                <div className="stats-grid">
                    <div className="stat-card">
                        <div className="stat-value">{cps}</div>
                        <div className="stat-label">CPS Score</div>
                    </div>
                    <div className="stat-card">
                        <div className="stat-value">{clicks}</div>
                        <div className="stat-label">Total Clicks</div>
                    </div>
                    <div className="stat-card">
                        <div className="stat-value">{selectedTime}s</div>
                        <div className="stat-label">Time</div>
                    </div>
                </div>

                {isSuspicious && (
                    <div className="warning">
                        ⚠️ Suspicious activity detected! CPS &gt; 50 might indicate auto-clicker usage.
                    </div>
                )}

                {chartData.length > 1 && (
                    <div className="chart-container">
                        <h3>Click Performance</h3>
                        <ResponsiveContainer width="100%" height={200}>
                            <LineChart data={chartData}>
                                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                                <XAxis
                                    dataKey="time"
                                    label={{ value: 'Time (s)', position: 'insideBottom', offset: -5 }}
                                    stroke="#666"
                                />
                                <YAxis
                                    label={{ value: 'Clicks', angle: -90, position: 'insideLeft' }}
                                    stroke="#666"
                                />
                                <Tooltip
                                    contentStyle={{
                                        backgroundColor: '#fff',
                                        border: '1px solid #ddd',
                                        borderRadius: '8px'
                                    }}
                                />
                                <Line
                                    type="monotone"
                                    dataKey="clicks"
                                    stroke="#4A90E2"
                                    strokeWidth={2}
                                    dot={{ fill: '#4A90E2', r: 3 }}
                                    activeDot={{ r: 5 }}
                                />
                            </LineChart>
                        </ResponsiveContainer>
                    </div>
                )}
            </div>

            <div className="results-actions">
                <button className="btn btn-primary" onClick={onReset}>
                    Try Again
                </button>

                <div className="share-buttons">
                    <span className="share-label">Share:</span>
                    <button
                        className="btn btn-share btn-twitter"
                        onClick={() => handleShare('twitter')}
                        title="Share on Twitter"
                    >
                        🐦 Twitter
                    </button>
                    <button
                        className="btn btn-share btn-facebook"
                        onClick={() => handleShare('facebook')}
                        title="Share on Facebook"
                    >
                        📘 Facebook
                    </button>
                    <button
                        className="btn btn-share btn-whatsapp"
                        onClick={() => handleShare('whatsapp')}
                        title="Share on WhatsApp"
                    >
                        💬 WhatsApp
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Results;
