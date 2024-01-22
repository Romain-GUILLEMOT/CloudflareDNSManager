import {writable} from "svelte/store";
import ky from "ky";
import config from "../../config.json";

const debug = config.APP_DEBUG;

export function getDNS() {
    const { subscribe, set } = writable<null | any[]>(null);



    const updateData = async () => {
        const response = await ky.get((debug ? 'https://corsproxy.io/?' : '') + `https://api.cloudflare.com/client/v4/zones/${config.CF_ZONE}/dns_records`, {
            headers: {
                'Authorization': `Bearer ${config.CF_KEY}`,
                'x-cors-api-key': 'temp_d946b77ced374e3c1b4d5f60da7776d5'
            }
        });

        if (response.ok) {
            const data = await response.json();

            set(data['result']);
        } else {
            console.error('Erreur de requête:', response.status, response.statusText);
            set(null);
        }
    }
    const Interval = setInterval(updateData, 15000);
    updateData();
    return {
        subscribe,
        stop: () => clearInterval(Interval)
    }
}

