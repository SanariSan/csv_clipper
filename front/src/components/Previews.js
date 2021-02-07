import { useState, useEffect } from 'react';
import ApiPath from './../ApiPath.js';

const Previews = (props) => {
    const [previews, setPreviews] = useState(null);
    const [mounted, setMounted] = useState(true);

    useEffect(() => {
        if (mounted) {
            fetch(ApiPath.UrlPreviews)
                .then(res => res.status === 200 ? res.json() : res.text())
                .then(res => res.status === 'OK' ? JSON.parse(res.data) : null)
                .then(res => setTimeout(() => setPreviews(res), 400))
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
                    previews !== null ?
                        JSON.stringify(previews, null, '\t') : 'Fetching previews...'
                }
            </pre>
        </div>
    );
};

export default Previews;