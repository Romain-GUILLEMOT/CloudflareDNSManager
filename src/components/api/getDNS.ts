import {writable} from "svelte/store";
import ky from "ky";
import envGet from "../../lib/utils";

const debug =true;

export function getDNS() {
    const { subscribe, set } = writable<null | any[]>(null);

    const updateData = async () => {
        const response = await ky.get('https://corsproxy.io/?' + `https://api.cloudflare.com/client/v4/zones/${envGet('CF_ZONE')}/dns_records`, {
            headers: {
                'Authorization': `Bearer ${envGet('CF_KEY')}`
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

