import { useState, useEffect } from 'react';
import ApiPath from './../ApiPath.js';
import ApiRequest from './../scripts/ApiRequest.js';
import Preview from './Preview.js';

const Previews = (props) => {
    const [previews, setPreviews] = useState(null);
    const [mounted, setMounted] = useState(true);

    useEffect(() => {
        if (mounted) {
            ApiRequest(ApiPath.previewsUrl)
                .then(res => setTimeout(() => mounted ? setPreviews(res) : null, 400))
                .catch(console.log)
        }

        return () => {
            setMounted(false);
        }
    }, [mounted]);

    return (
        <div style={{
            display: "flex",
            width: "75%",
            height: "100%",
            overflow: "scroll"
        }}>
            {
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

