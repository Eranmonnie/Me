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
        window.goatcounter?.count({ path: location.pathname });
    }, [location]);

    return null;
}

export default PageTracker;