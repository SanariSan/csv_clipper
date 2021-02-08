import { useState, useEffect } from 'react';
import ApiPath from './../ApiPath.js';
import ApiRequest from './../scripts/ApiRequest.js';
import Preview from './Preview.js';

const Previews = (props) => {
    const [previews, setPreviews] = useState(null);
    const [mounted, setMounted] = useState(true);

    useEffect(() => {
        if (mounted) {
            ApiRequest(ApiPath.UrlPreviews)
                .then(res => setTimeout(() => mounted ? setPreviews(res) : null, 400))
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
                    previews !== null ?
                        previews.forEach(preview =>
                            <Preview previewId={preview.previewId} />
                        )
                        : 'Fetching previews...'
                }
            </pre>
        </div>
    );
};

export default Previews;