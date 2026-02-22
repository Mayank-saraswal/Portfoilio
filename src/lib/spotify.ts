import querystring from "querystring";

const client_id = process.env.SPOTIFY_CLIENT_ID;
const client_secret = process.env.SPOTIFY_CLIENT_SECRET;
const refresh_token = process.env.SPOTIFY_REFRESH_TOKEN;

const basic = Buffer.from(`${client_id}:${client_secret}`).toString("base64");
const TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token`;
const NOW_PLAYING_ENDPOINT = `https://api.spotify.com/v1/me/player/currently-playing`;
const RECENTLY_PLAYED_ENDPOINT = `https://api.spotify.com/v1/me/player/recently-played`;

const getAccessToken = async () => {
    if (!client_id || !client_secret || !refresh_token) {
        return null;
    }

    const response = await fetch(TOKEN_ENDPOINT, {
        method: "POST",
        headers: {
            Authorization: `Basic ${basic}`,
            "Content-Type": "application/x-www-form-urlencoded",
        },
        body: querystring.stringify({
            grant_type: "refresh_token",
            refresh_token,
        }),
        next: { revalidate: 3600 },
    });

    return response.json();
};

export const getNowPlaying = async () => {
    const { access_token } = await getAccessToken() || {};

    if (!access_token) {
        return null;
    }

    return fetch(NOW_PLAYING_ENDPOINT, {
        headers: {
            Authorization: `Bearer ${access_token}`,
        },
        next: { revalidate: 60 },
    });
};

export const getRecentlyPlayed = async () => {
    const { access_token } = await getAccessToken() || {};

    if (!access_token) {
        return null;
    }

    return fetch(`${RECENTLY_PLAYED_ENDPOINT}?limit=1`, {
        headers: {
            Authorization: `Bearer ${access_token}`,
        },
        next: { revalidate: 600 },
    });
};
