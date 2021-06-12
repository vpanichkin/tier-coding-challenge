/* eslint no-unused-vars: 1 */

import React, { useCallback, useState } from 'react';
import { fetchShortenUrl } from '../services/fetchShortenUrl';
import ShortenUrl from './ShortenUrl';

const ShortenUrlForm = () => {
    const [url, setUrl] = useState('');
    const [shortenUrl, setShortenUrl] = useState('');

    const onChange = event => setUrl(event.target.value);

    const onSubmit = useCallback(async (e) => {
        e.preventDefault();
        const { errors, cutUrl } = await fetchShortenUrl(url);
        if (errors) {
            alert('Something went wrong. Provide a link or check the network connection');
            return;
        }
        setShortenUrl(cutUrl);
    }, [url]);

    return (
        <form onSubmit={onSubmit}>
            <label htmlFor="shorten">
                Url:
                <input
                    placeholder="Url to shorten"
                    id="shorten"
                    type="text"
                    name="url"
                    value={url}
                    onChange={onChange}
                />
            </label>
            <input type="submit" value="Shorten and copy URL" />
            <ShortenUrl url={shortenUrl} />
        </form>
    );
};

export default ShortenUrlForm;
