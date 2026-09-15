import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

declare global {
    interface Window {
        goatcounter?: {
            count: (opts: { path: string }) => void;
        };
    }
}

function PageTracker() {
    const location = useLocation();

    useEffect(() => {

        if (window.goatcounter?.count) {
            window.goatcounter.count({ path: location.pathname });
            return;
        }

        const interval = setInterval(() => {
            if (window.goatcounter?.count) {
                window.goatcounter.count({ path: location.pathname });
                clearInterval(interval);
            }
        }, 100);

        return () => clearInterval(interval);
    }, [location]);

    return null;
}

export default PageTracker;