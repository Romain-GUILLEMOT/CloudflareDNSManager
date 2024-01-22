<script lang="ts">
    import config from '../config.json';

    import DnsElement from "./DnsElement.svelte";
    import type {API_ANSWER, ZoneElement} from "../lib/utils";
    import TableLoading from "./elements/TableLoading.svelte";

    const debug = config.APP_DEBUG;

    let zones: ZoneElement[] = [{
        "id": "38ae510261f7906ed228646d693bfd92",
        "zone_id": "b2a149c4b6d2153022e0d8d1eecb272d",
        "zone_name": "romain-guillemot.dev",
        "name": "adminmail.romain-guillemot.dev",
        "type": "A",
        "content": "163.5.215.22",
        "proxiable": true,
        "proxied": true,
        "ttl": 1,
        "locked": false,
        "meta": {"auto_added": false, "managed_by_apps": false, "managed_by_argo_tunnel": false, "source": "primary"},
        "comment": null,
        "tags": [],
        "created_on": "2024-01-19T12:39:18.591308Z",
        "modified_on": "2024-01-19T13:47:27.156141Z"
    }, {
        "id": "5f57f01ce58d655eea517a9e3debe837",
        "zone_id": "b2a149c4b6d2153022e0d8d1eecb272d",
        "zone_name": "romain-guillemot.dev",
        "name": "dfdsfsdfsd.romain-guillemot.dev",
        "type": "A",
        "content": "8.8.8.8",
        "proxiable": true,
        "proxied": false,
        "ttl": 1,
        "locked": false,
        "meta": {"auto_added": false, "managed_by_apps": false, "managed_by_argo_tunnel": false, "source": "primary"},
        "comment": null,
        "tags": [],
        "created_on": "2024-01-17T14:45:07.635972Z",
        "modified_on": "2024-01-17T14:45:07.635972Z"
    }, {
        "id": "b52b2c469861576bf2695b488c5a7b59",
        "zone_id": "b2a149c4b6d2153022e0d8d1eecb272d",
        "zone_name": "romain-guillemot.dev",
        "name": "lsws.romain-guillemot.dev",
        "type": "A",
        "content": "163.5.215.22",
        "proxiable": true,
        "proxied": true,
        "ttl": 1,
        "locked": false,
        "meta": {"auto_added": false, "managed_by_apps": false, "managed_by_argo_tunnel": false, "source": "primary"},
        "comment": null,
        "tags": [],
        "created_on": "2024-01-19T12:53:18.673407Z",
        "modified_on": "2024-01-19T12:53:18.673407Z"
    }, {
        "id": "20a09224baf367079be1dc4515096f67",
        "zone_id": "b2a149c4b6d2153022e0d8d1eecb272d",
        "zone_name": "romain-guillemot.dev",
        "name": "mail.romain-guillemot.dev",
        "type": "A",
        "content": "163.5.215.22",
        "proxiable": true,
        "proxied": true,
        "ttl": 1,
        "locked": false,
        "meta": {"auto_added": false, "managed_by_apps": false, "managed_by_argo_tunnel": false, "source": "primary"},
        "comment": null,
        "tags": [],
        "created_on": "2024-01-19T10:59:52.825113Z",
        "modified_on": "2024-01-19T10:59:52.825113Z"
    }, {
        "id": "1f49634afe3113c640537bae44c94030",
        "zone_id": "b2a149c4b6d2153022e0d8d1eecb272d",
        "zone_name": "romain-guillemot.dev",
        "name": "romain-guillemot.dev",
        "type": "A",
        "content": "163.5.215.22",
        "proxiable": true,
        "proxied": false,
        "ttl": 1,
        "locked": false,
        "meta": {"auto_added": false, "managed_by_apps": false, "managed_by_argo_tunnel": false, "source": "primary"},
        "comment": null,
        "tags": [],
        "created_on": "2024-01-19T10:59:52.825159Z",
        "modified_on": "2024-01-19T21:52:18.193744Z"
    }, {
        "id": "30518dd0a321fd27e09aa885c710c2cc",
        "zone_id": "b2a149c4b6d2153022e0d8d1eecb272d",
        "zone_name": "romain-guillemot.dev",
        "name": "smtp.romain-guillemot.dev",
        "type": "A",
        "content": "163.5.215.22",
        "proxiable": true,
        "proxied": false,
        "ttl": 1,
        "locked": false,
        "meta": {"auto_added": false, "managed_by_apps": false, "managed_by_argo_tunnel": false, "source": "primary"},
        "comment": null,
        "tags": [],
        "created_on": "2024-01-19T14:47:37.288204Z",
        "modified_on": "2024-01-19T14:47:37.288204Z"
    }, {
        "id": "4e5e64df12c2692b3da60c55e68d299d",
        "zone_id": "b2a149c4b6d2153022e0d8d1eecb272d",
        "zone_name": "romain-guillemot.dev",
        "name": "test.romain-guillemot.dev",
        "type": "A",
        "content": "4.4.4.4",
        "proxiable": true,
        "proxied": true,
        "ttl": 1,
        "locked": false,
        "meta": {"auto_added": false, "managed_by_apps": false, "managed_by_argo_tunnel": false, "source": "primary"},
        "comment": null,
        "tags": [],
        "created_on": "2024-01-17T14:44:58.165073Z",
        "modified_on": "2024-01-17T14:44:58.165073Z"
    }, {
        "id": "8485dea5d5f6124f4d80d7999ebc16bc",
        "zone_id": "b2a149c4b6d2153022e0d8d1eecb272d",
        "zone_name": "romain-guillemot.dev",
        "name": "www.romain-guillemot.dev",
        "type": "A",
        "content": "163.5.215.22",
        "proxiable": true,
        "proxied": true,
        "ttl": 1,
        "locked": false,
        "meta": {"auto_added": false, "managed_by_apps": false, "managed_by_argo_tunnel": false, "source": "primary"},
        "comment": null,
        "tags": [],
        "created_on": "2024-01-19T10:59:52.825926Z",
        "modified_on": "2024-01-19T10:59:52.825926Z"
    }, {
        "id": "f292de01fc5067e3129979fc2a42cef4",
        "zone_id": "b2a149c4b6d2153022e0d8d1eecb272d",
        "zone_name": "romain-guillemot.dev",
        "name": "adminmail.romain-guillemot.dev",
        "type": "AAAA",
        "content": "2001:861:c61:3e30:5054:ff:feb1:e8d9",
        "proxiable": true,
        "proxied": true,
        "ttl": 1,
        "locked": false,
        "meta": {"auto_added": false, "managed_by_apps": false, "managed_by_argo_tunnel": false, "source": "primary"},
        "comment": null,
        "tags": [],
        "created_on": "2024-01-19T12:39:28.392108Z",
        "modified_on": "2024-01-19T13:47:02.735657Z"
    }, {
        "id": "1100e87d32b186840467742699841a23",
        "zone_id": "b2a149c4b6d2153022e0d8d1eecb272d",
        "zone_name": "romain-guillemot.dev",
        "name": "lsws.romain-guillemot.dev",
        "type": "AAAA",
        "content": "2001:861:c61:3e30:5054:ff:feb1:e8d9",
        "proxiable": true,
        "proxied": true,
        "ttl": 1,
        "locked": false,
        "meta": {"auto_added": false, "managed_by_apps": false, "managed_by_argo_tunnel": false, "source": "primary"},
        "comment": null,
        "tags": [],
        "created_on": "2024-01-19T12:53:26.737854Z",
        "modified_on": "2024-01-19T12:53:26.737854Z"
    }, {
        "id": "0ccba6e3f47bc303253633ef65bf07ff",
        "zone_id": "b2a149c4b6d2153022e0d8d1eecb272d",
        "zone_name": "romain-guillemot.dev",
        "name": "mail.romain-guillemot.dev",
        "type": "AAAA",
        "content": "2001:861:c61:3e30:5054:ff:feb1:e8d9",
        "proxiable": true,
        "proxied": true,
        "ttl": 1,
        "locked": false,
        "meta": {"auto_added": false, "managed_by_apps": false, "managed_by_argo_tunnel": false, "source": "primary"},
        "comment": null,
        "tags": [],
        "created_on": "2024-01-19T10:59:52.830393Z",
        "modified_on": "2024-01-19T10:59:52.830393Z"
    }, {
        "id": "d4ada0877cefdf15c5faebbf515613da",
        "zone_id": "b2a149c4b6d2153022e0d8d1eecb272d",
        "zone_name": "romain-guillemot.dev",
        "name": "romain-guillemot.dev",
        "type": "AAAA",
        "content": "2001:861:c61:3e30:5054:ff:feb1:e8d9",
        "proxiable": true,
        "proxied": false,
        "ttl": 1,
        "locked": false,
        "meta": {"auto_added": false, "managed_by_apps": false, "managed_by_argo_tunnel": false, "source": "primary"},
        "comment": null,
        "tags": [],
        "created_on": "2024-01-19T10:59:52.825081Z",
        "modified_on": "2024-01-19T21:52:23.105319Z"
    }, {
        "id": "918a6deb1e83959e484467aaa0428916",
        "zone_id": "b2a149c4b6d2153022e0d8d1eecb272d",
        "zone_name": "romain-guillemot.dev",
        "name": "smtp.romain-guillemot.dev",
        "type": "AAAA",
        "content": "2001:861:c61:3e30:5054:ff:feb1:e8d9",
        "proxiable": true,
        "proxied": false,
        "ttl": 1,
        "locked": false,
        "meta": {"auto_added": false, "managed_by_apps": false, "managed_by_argo_tunnel": false, "source": "primary"},
        "comment": null,
        "tags": [],
        "created_on": "2024-01-19T14:50:00.753965Z",
        "modified_on": "2024-01-19T14:50:00.753965Z"
    }, {
        "id": "068529afaa3ff432095fe25b54413335",
        "zone_id": "b2a149c4b6d2153022e0d8d1eecb272d",
        "zone_name": "romain-guillemot.dev",
        "name": "www.romain-guillemot.dev",
        "type": "AAAA",
        "content": "2001:861:c61:3e30:5054:ff:feb1:e8d9",
        "proxiable": true,
        "proxied": true,
        "ttl": 1,
        "locked": false,
        "meta": {"auto_added": false, "managed_by_apps": false, "managed_by_argo_tunnel": false, "source": "primary"},
        "comment": null,
        "tags": [],
        "created_on": "2024-01-19T10:59:52.830322Z",
        "modified_on": "2024-01-19T10:59:52.830322Z"
    }, {
        "id": "22baa5d9e8eac694265ddc8090d63e17",
        "zone_id": "b2a149c4b6d2153022e0d8d1eecb272d",
        "zone_name": "romain-guillemot.dev",
        "name": "romain-guillemot.dev",
        "type": "MX",
        "content": "smtp.romain-guillemot.dev",
        "priority": 10,
        "proxiable": false,
        "proxied": false,
        "ttl": 1,
        "locked": false,
        "meta": {"auto_added": false, "managed_by_apps": false, "managed_by_argo_tunnel": false, "source": "primary"},
        "comment": null,
        "tags": [],
        "created_on": "2024-01-19T10:59:52.8304Z",
        "modified_on": "2024-01-19T20:10:44.703308Z"
    }, {
        "id": "f6be461fff86722d37f82f0727a14c55",
        "zone_id": "b2a149c4b6d2153022e0d8d1eecb272d",
        "zone_name": "romain-guillemot.dev",
        "name": "_dmarc.romain-guillemot.dev",
        "type": "TXT",
        "content": "\"v=DMARC1; p=none; rua=mailto:postmaster@romain.guillemot.dev\"",
        "proxiable": false,
        "proxied": false,
        "ttl": 1,
        "locked": false,
        "meta": {"auto_added": false, "managed_by_apps": false, "managed_by_argo_tunnel": false, "source": "primary"},
        "comment": null,
        "tags": [],
        "created_on": "2024-01-19T10:59:52.825267Z",
        "modified_on": "2024-01-19T10:59:52.825267Z"
    }, {
        "id": "079836948886a62adcd76b58a3ffab3a",
        "zone_id": "b2a149c4b6d2153022e0d8d1eecb272d",
        "zone_name": "romain-guillemot.dev",
        "name": "mail._domainkey.romain-guillemot.dev",
        "type": "TXT",
        "content": "v=DKIM1; h=sha256; k=rsa; p=MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA3S3EAE/faEJIhwzHfOuYVPPhzIq3ufjUYvGtaFcaYc7dS80yjjbJw2oHlRIUUjBHWWf6LTf2kft+1d2UtEe2h0lhKosWLDhCKlPXcqPeUgZn803kKniAsMidr6V/HYciOq8KkXsKnqvCewGesJeeqykghHTyJi2qjp6P+vcHIvqPAzIRi4r7++/oUIGVsQq7s2oP/m6gqzt/w6H9kUSdY3PD61z32x0nwbDfQ7Bf+tvc6x+68UkElAJ1EEmiMLz4DpN322ut+peDAMTxYKd7iBkMlJFK5cwUPBA/tLHbwS97Tc7eVOGaKoDfqBfFWktXY1KV2YlwvsnKbaLGoot4NwIDAQAB",
        "proxiable": false,
        "proxied": false,
        "ttl": 1,
        "locked": false,
        "meta": {"auto_added": false, "managed_by_apps": false, "managed_by_argo_tunnel": false, "source": "primary"},
        "comment": null,
        "tags": [],
        "created_on": "2024-01-19T20:19:54.293091Z",
        "modified_on": "2024-01-19T20:28:40.771733Z"
    }, {
        "id": "c70a1499ee854153a11cb26a9a524213",
        "zone_id": "b2a149c4b6d2153022e0d8d1eecb272d",
        "zone_name": "romain-guillemot.dev",
        "name": "romain-guillemot.dev",
        "type": "TXT",
        "content": "\"v=spf1 mx ~all\"",
        "proxiable": false,
        "proxied": false,
        "ttl": 1,
        "locked": false,
        "meta": {"auto_added": false, "managed_by_apps": false, "managed_by_argo_tunnel": false, "source": "primary"},
        "comment": null,
        "tags": [],
        "created_on": "2024-01-19T10:59:52.830256Z",
        "modified_on": "2024-01-19T10:59:52.830256Z"
    }];
    /* const dnsData = getDNS().subscribe(value => {
         zones = value
     });*/

</script>

<section>
    {#if zones === null}

        <div class="px-4 sm:px-6 lg:px-8 mx-24 mt-8">
            <div class="sm:flex sm:items-center">
                <div class="sm:flex-auto">
                    <h1 class="text-base font-semibold leading-6 text-gray-700 dark:text-slate-100">DNS Zone</h1>
                    <p class="mt-2 text-sm text-gray-600 dark:text-slate-200">A list of all dns zone. (Saved on
                        Cloudflare)</p>
                </div>
                <div class="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
                    <button type="button"
                            class="block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                        Add user
                    </button>
                </div>
            </div>
            <div class="mt-8 flow-root">
                <div class="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div class="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                        <TableLoading/>
                    </div>
                </div>
            </div>
        </div>
    {:else}
        <div class="px-4 sm:px-6 lg:px-8 mx-24 mt-8">
            <div class="sm:flex sm:items-center">
                <div class="sm:flex-auto">
                    <h1 class="text-base font-semibold leading-6 text-gray-700 dark:text-slate-100">DNS Zone</h1>
                    <p class="mt-2 text-sm text-gray-600 dark:text-slate-200">A list of all dns zone. (Saved on
                        Cloudflare)</p>
                </div>
                <div class="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
                    <button type="button"
                            class="block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                        Add record
                    </button>
                </div>
            </div>

            <div class="mt-8 flow-root">
                <div class="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div class="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                        <table class="min-w-full divide-y divide-gray-300 bg-light-quaternary dark:bg-dark-tertiary">
                            <thead>
                            <tr>
                                <th scope="col"
                                    class="px-3.5 py-3.5 text-left text-sm font-semibold text-gray-600 dark:text-slate-200">
                                    <p class="group inline-flex">
                                        Type
                                    </p>
                                </th>
                                <th scope="col"
                                    class=" py-3.5 text-left text-sm font-semibold text-gray-600 dark:text-slate-200">
                                    <p class="group inline-flex">
                                        Name
                                    </p>
                                </th>
                                <th scope="col"
                                    class=" py-3.5 text-left text-sm font-semibold text-gray-600 dark:text-slate-200">
                                    <p class="group inline-flex">
                                        Content
                                    </p>
                                </th>
                                <th scope="col"
                                    class=" py-3.5 text-left text-sm font-semibold text-gray-600 dark:text-slate-200">
                                    <p class="group inline-flex">
                                        Proxied
                                    </p>
                                </th>
                                <th scope="col"
                                    class=" py-3.5 text-left text-sm font-semibold text-gray-600 dark:text-slate-200">
                                    <p class="group inline-flex">
                                        TTL
                                    </p>
                                </th>
                                <th scope="col"
                                    class=" py-3.5 text-left text-sm font-semibold text-gray-600 dark:text-slate-200">
                                    <p class="group inline-flex">
                                        Actions
                                    </p>
                                </th>
                            </tr>
                            </thead>
                            <tbody class="divide-y divide-gray-200 bg-light-tertiary dark:bg-dark-secondary">
                            {#each zones as zone}
                                <DnsElement  element={zone}/>
                            {/each}

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    {/if}


</section>