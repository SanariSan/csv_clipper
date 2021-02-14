const ApiRequest = (url, data) =>
    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
        .then(res => res.status === 200 ? res.json() : res.text())
        .then(res => res.status === 'OK' ? res.data : null)
        .catch(e => { throw e });

export default ApiRequest;