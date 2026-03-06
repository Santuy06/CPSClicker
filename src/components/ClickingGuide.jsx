import React from 'react';
import './ClickingGuide.css';

const ClickingGuide = () => {
    return (
        <section className="clicking-guide">
            <div className="guide-header">
                <h2>Complete Guide: How to Master Your Clicking Speed</h2>
                <p>Everything you need to know about CPS (Clicks Per Second) and professional clicking techniques.</p>
            </div>

            <div className="guide-grid">
                <article className="guide-card">
                    <h3>🎮 What is CPS?</h3>
                    <p>
                        CPS stands for <strong>Clicks Per Second</strong>. It is a measurement of how fast you can press your mouse button in one second.
                        In the world of competitive gaming, especially in titles like Minecraft (PvP) and MOBA games, a higher CPS can be a game-changer.
                    </p>
                    <p>
                        While most people average around 6 CPS, professional players use advanced biological and mechanical tricks to bypass the human reflex limit,
                        often reaching sustained speeds of over 20 CPS.
                    </p>
                </article>

                <article className="guide-card">
                    <h3>⚡ Advanced Clicking Techniques</h3>
                    <ul>
                        <li><strong>Jitter Clicking:</strong> By tensing your forearm, you create a controlled tremor that pushes your finger onto the button at higher frequencies. It's effective but requires physical endurance.</li>
                        <li><strong>Butterfly Clicking:</strong> This involves alternating two fingers on a single mouse button. If your mouse has a low "debounce time," each finger can register its own set of clicks, nearly doubling your speed.</li>
                        <li><strong>Drag Clicking:</strong> The most controversial technique. By sliding a finger with friction across the button, the mouse's mechanical switch triggers multiple times in milliseconds.</li>
                    </ul>
                </article>
            </div>

            <div className="guide-detailed hardware-focus">
                <h3>The Technical Side: Mouse Hardware & Latency</h3>
                <p>
                    To achieve a world-record CPS, your software skills aren't enough—you need the right hardware. Modern gaming mice feature <strong>Optical Switches</strong>
                    or mechanical switches with adjustable <strong>Debounce Time</strong>.
                </p>
                <p>
                    <strong>Polling Rate:</strong> Most mice report to the PC at 1000Hz (once every 1ms). If you click at 20 CPS, the mouse has plenty of time to report each click.
                    However, some budget mice skip inputs if they are too close together. This is why "pro" CPS testers use specialized gaming mice from brands like Glorious, Razer, or Logitech.
                </p>
                <div className="pro-tip-box">
                    <strong>💡 Pro Tip: Mouse Grip Matters</strong>
                    <p>The "Claw Grip" is often preferred for Jitter Clicking as it provides more stability, while a "Palm Grip" might be better for consistent rhythmic clicking in longer 60-second tests.</p>
                </div>
            </div>

            <div className="guide-detailed">
                <h3>How to Improve Your CPS Score</h3>
                <p>
                    Improving your clicking speed requires practice and the right hardware. Many professional gamers use mice with adjustable debounce time
                    to register clicks more efficiently. Start by practicing for 5 seconds and slowly increase your endurance to 60 seconds.
                </p>
                <p>
                    <em>Pro Tip:</em> Keep your hand relaxed. Tension can actually slow down your clicking speed over long periods.
                </p>
            </div>
        </section>
    );
};

export default ClickingGuide;
