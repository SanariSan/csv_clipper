import { useState, useEffect } from 'react';
import ApiPath from './../ApiPath.js';

const Settings = (props) => {
    const [settings, setSettings] = useState(null);
    const [mounted, setMounted] = useState(true);

    useEffect(() => {
        if (mounted) {
            fetch(ApiPath.UrlSettings)
                .then(res => res.status === 200 ? res.json() : res.text())
                .then(res => res.status === 'OK' ? JSON.parse(res.data) : null)
                .then(res => setTimeout(() => setSettings(res), 700))
                .catch(e => { throw e })
        }

        return () => {
            setMounted(false);
        }
    }, [mounted]);

    return (
        <div>
            <pre>
                {
                    settings !== null ?
                        JSON.stringify(settings, null, '\t') : 'Fetching settings...'
                }
            </pre>
        </div>
    );
};

export default Settings;