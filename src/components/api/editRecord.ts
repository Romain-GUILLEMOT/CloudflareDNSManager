import ky from "ky";
import envGet, {type API_ANSWER, type CloudFlare_EDIT} from "../../lib/utils";


export async function editRecord(id: string, content: string, name: string, proxied: boolean, type: string, comment: string | undefined | null): Promise<API_ANSWER> {

    const response = await ky.put('https://cors.romain-guillemot.dev/' + `https://api.cloudflare.com/client/v4/zones/${envGet('CF_ZONE')}/dns_records/${id}`, {
        headers: {
            'Authorization': `Bearer ${envGet('CF_KEY')}`,
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

