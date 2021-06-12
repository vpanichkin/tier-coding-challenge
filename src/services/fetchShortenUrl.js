import config from '../config';

export async function fetchShortenUrl(url) {
    try {
        const response = await fetch(`${config.backendUrl}/`, {
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ url }),
        });
        return response.json();
    } catch (error) {
        console.error('Oops, request could not be completed', error);
        return { errors: error };
    }
}
