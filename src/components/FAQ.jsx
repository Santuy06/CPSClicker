import React from 'react';
import './FAQ.css';

const FAQ = () => {
    const faqs = [
        {
            q: "What is a good CPS score?",
            a: "A regular person usually clicks between 5 to 7 CPS. Professional gamers can reach 10-15 CPS using specialized techniques like butterfly or jitter clicking."
        },
        {
            q: "Is CPS speed important for gaming?",
            a: "Yes, in many games (especially Minecraft), a higher CPS allows you to deal more knockback or register hits faster than your opponent."
        },
        {
            q: "Can jitter clicking hurt my hand?",
            a: "If done incorrectly or for too long, jitter clicking can cause strain. It's important to take breaks and listen to your body."
        },
        {
            q: "How can I test my mouse for double clicks?",
            a: "Our CPS test records every click. If you see an unusually high CPS (e.g., 20+) without using advanced techniques, your mouse might be double-clicking."
        }
    ];

    return (
        <section className="faq-section">
            <h3>Frequently Asked Questions</h3>
            <div className="faq-list">
                {faqs.map((faq, index) => (
                    <div key={index} className="faq-item">
                        <h4 className="faq-question">Q: {faq.q}</h4>
                        <p className="faq-answer">{faq.a}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default FAQ;
