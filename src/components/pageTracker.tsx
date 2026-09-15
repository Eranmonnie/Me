import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function PageTracker() {
    const location = useLocation();

    useEffect(() => {
        const params = new URLSearchParams({
            p: location.pathname,
            t: document.title,
            r: document.referrer,
            s: `${window.screen.width},${window.screen.height},${window.devicePixelRatio}`,
            b: '0',
            rnd: Math.random().toString(36).slice(2),
        });

        fetch(`${window.location.origin}/gc/count?${params}`).catch(() => {
            // Silently fail if tracking is blocked
        });
    }, [location]);

    return null;
}

export default PageTracker;