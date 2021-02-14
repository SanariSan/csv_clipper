import { useState, useEffect, useRef } from 'react';
import ApiPath from './../ApiPath.js';
import ApiGetReq from './../scripts/ApiGetReq.js';
import Preview from './Preview.js';

const Previews = (props) => {
    const [previews, setPreviews] = useState(null);
    const mounted = useRef(true);

    useEffect(() => () => {
        mounted.current = false;
    }, []);

    useEffect(() => {
        if (mounted.current) {
            ApiGetReq(ApiPath.getPreviewsUrl)
                .then(res => setTimeout(() => mounted.current ? setPreviews(res) : null, 400))
                .catch(console.log)
        }
    }, []);

    return (
        <div style={{
            display: "flex",
            width: "40%",
            height: "500px",
            overflow: "scroll",
            margin: "50px"
        }}>
            {
                // JSON.stringify(previews, null, '\t')
                previews !== null ?
                    previews.map(preview =>
                        <Preview previewName={preview.fileName} previewId={preview.id} />
                    )
                    : "Fetching previews..."
            }
        </div>
    );
};

export default Previews;

