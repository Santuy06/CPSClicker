import { useEffect } from 'react';

const AdSlot = ({ adClient, adSlot, adFormat = 'auto', fullWidthResponsive = true, className = '' }) => {
    useEffect(() => {
        try {
            (window.adsbygoogle = window.adsbygoogle || []).push({});
        } catch (e) {
            console.error('AdSense error:', e);
        }
    }, []);

    return (
        <div className={`ad-slot-container ${className}`} style={{ overflow: 'hidden', minHeight: '50px' }}>
            <ins
                className="adsbygoogle"
                style={{ display: 'block' }}
                data-ad-client={adClient}
                data-ad-slot={adSlot}
                data-ad-format={adFormat}
                data-full-width-responsive={fullWidthResponsive.toString()}
            ></ins>
        </div>
    );
};

export default AdSlot;
