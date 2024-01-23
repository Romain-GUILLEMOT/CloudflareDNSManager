import {writable} from "svelte/store";
import ky from "ky";
import envGet from "../../lib/utils";

const debug = envGet('APP_DEBUG');

export function getDNS() {
    const { subscribe, set } = writable<null | any[]>(null);

    const updateData = async () => {
        const response = await ky.get((debug ? 'https://corsproxy.io/?' : '') + `https://api.cloudflare.com/client/v4/zones/${envGet('CF_ZONE')}/dns_records`, {
            headers: {
                'Authorization': `Bearer ${envGet('CF_KEY')}`,
                'x-cors-api-key': envGet('CORS_KEY') as string,
                'X-Auth-Email': envGet('CF_EMAIL') as string,
                'X-Auth-Key': envGet('CF_KEY') as string
            }
        });

        if (response.ok) {
            const data: any = await response.json();

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

