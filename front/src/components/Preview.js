import { useState, useEffect, useRef } from 'react';
import ApiPath from './../ApiPath.js';
import ApiGetReq from './../scripts/ApiGetReq.js';

const path = require('path');

const Preview = ({ previewName, previewId }) => {
    const [previewContent, setPreviewContent] = useState(null);
    const mounted = useRef(true);

    useEffect(() => () => {
        mounted.current = false;
    }, []);

    useEffect(() => {
        if (mounted.current) {
            ApiGetReq(path.join(ApiPath.getPreviewsUrl, previewId))
                .then(res => setTimeout(() => mounted.current ? setPreviewContent(res) : null, 400))
                .catch(console.log)
        }
    }, [previewId]);

    return (
        <div key={previewId}
            style={{
                border: "2px solid black",
                height: "max-content",
                margin: "0px 10px",
                padding: "10px"
            }}>
            <b>{previewName}</b>
            <ul style={{
                listStyleType: "none",
                padding: "10px"
            }}>
                {
                    previewContent !== null ?
                        previewContent.split('\n').map((_, i) => (
                            <li style={{
                                border: "2px solid black",
                                padding: "10px 20px",
                                fontSize: "12px",
                            }}
                                key={`${previewId}_${i}`}>
                                {_}
                            </li>
                        ))
                        :
                        'Fetching preview row...'
                }
            </ul>
        </div>
    );
};

export default Preview;