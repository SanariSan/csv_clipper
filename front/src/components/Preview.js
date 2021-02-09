import { useState, useEffect } from 'react';
import ApiPath from './../ApiPath.js';
import ApiRequest from './../scripts/ApiRequest.js';

const path = require('path');

const Preview = ({ previewName, previewId }) => {
    const [previewContent, setPreviewContent] = useState(null);
    const [mounted, setMounted] = useState(true);

    useEffect(() => {
        if (mounted) {
            ApiRequest(path.join(ApiPath.previewsUrl, previewId))
                .then(res => setTimeout(() => mounted ? setPreviewContent(res) : null, 400))
                .catch(console.log)
        }

        return () => {
            setMounted(false);
        }
    }, [mounted]);

    return (
        <div style={{
            border: "2px solid black",
            margin: "0px 10px"
        }}>
            <b>{previewName}</b>
            <ul style={{
                listStyleType: "none"
            }}>
                {
                    previewContent !== null ?
                        previewContent.split('\n').map((_, i) => <li key={`${previewId}_${i}`}>{_}</li>)
                        : 'Fetching preview row...'
                }
            </ul>
        </div>
    );
};

export default Preview;