import {writable} from "svelte/store";
import ky from "ky";
import config from "../../config.json";
import type {API_ANSWER, CloudFlare_EDIT} from "../../lib/utils";

const debug = config.APP_DEBUG;

export async function editRecord(id: string, content: string, name: string, proxied: boolean, type: string, comment: string | undefined | null): Promise<API_ANSWER> {

    const response = await ky.put((debug ? 'https://proxy.cors.sh/' : '') + `https://api.cloudflare.com/client/v4/zones/${config.CF_ZONE}/dns_records/${id}`, {
        headers: {
            'Authorization': `Bearer ${config.CF_KEY}`,
            'x-cors-api-key': 'temp_d946b77ced374e3c1b4d5f60da7776d5'
        },
        json: {
            'content': content,
            'name': name,
            'proxied': proxied,
            'type': type,
            'comment': comment || ''
        }
    });
    if (!response.ok) {
        return {'status': false, 'message': 'Request terminated with the status ' + response.status}
    }
    const json: CloudFlare_EDIT = await response.json();

    if (!json.success) {
        console.log(json);
        return {'status': false, 'message': 'Error from the CloudFlare Api. Check the DevTools for more details.'}
    }
    return {'status': true, 'message': 'Record edited successfully !'}
}

