import { useState, useEffect } from 'react';
import ApiPath from './../ApiPath.js';
import ApiRequest from './../scripts/ApiRequest.js';

const Settings = (props) => {
    const [settings, setSettings] = useState(null);
    const [mounted, setMounted] = useState(true);

    useEffect(() => {
        if (mounted) {
            ApiRequest(ApiPath.UrlSettings)
                .then(res => setTimeout(() => mounted ? setSettings(res) : null, 700))
                .catch(console.log)
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