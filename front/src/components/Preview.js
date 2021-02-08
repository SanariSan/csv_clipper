import { useState, useEffect } from 'react';
import ApiPath from './../ApiPath.js';
import ApiRequest from './../scripts/ApiRequest.js';

const path = require('path');

const Preview = ({ previewId }) => {
    const [preview, setPreview] = useState(null);
    const [mounted, setMounted] = useState(true);

    useEffect(() => {
        if (mounted) {
            ApiRequest(path.join(ApiPath.UrlPreviews, previewId))
                .then(res => setTimeout(() => mounted ? setPreview(res) : null, 400))
                .catch(console.log)
        }

        return () => {
            setMounted(false);
        }
    }, [mounted]);

    return (
        <div style="border: 2px solid black; margin: 0px 10px;">
            <ul style="list-style-type: none;">
                {
                    preview !== null ?
                        preview.split('\n').map((_, i) => <li key={previewId + i}>{_}</li>)
                        : 'Fetching preview...'
                }
            </ul>
        </div>
    );
};

export default Preview;