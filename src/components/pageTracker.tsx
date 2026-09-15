import { useEffect, useRef } from 'react';
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
    const scriptInjected = useRef(false);

    useEffect(() => {
        if (scriptInjected.current || document.querySelector('script[data-goatcounter]')) return;

        const script = document.createElement('script');
        script.src = '/gc/count.js';
        script.async = true;
        script.setAttribute('data-goatcounter', `${window.location.origin}/gc/count`);
        script.setAttribute(
            'data-goatcounter-settings',
            JSON.stringify({ no_onload: true })
        );
        document.head.appendChild(script);
        scriptInjected.current = true;
    }, []);

    useEffect(() => {
        const fire = () => {
            window.goatcounter!.count({ path: location.pathname });
        };

        if (window.goatcounter?.count) {
            fire();
            return;
        }

        const interval = setInterval(() => {
            if (window.goatcounter?.count) {
                fire();
                clearInterval(interval);
            }
        }, 100);

        return () => clearInterval(interval);
    }, [location]);

    return null;
}

export default PageTracker;