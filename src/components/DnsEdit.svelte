<script lang="ts">
    import type {API_ANSWER, ZoneElement} from "../lib/utils.js";
    import {onMount, createEventDispatcher} from "svelte";
    import {getDNS} from "./api/getDNS";
    import {editRecord} from "./api/editRecord";
    import {toast} from "@zerodevx/svelte-toast";

    const dispatch = createEventDispatcher();
    function close() {
        dispatch('close');
    }

    function keyup(e: KeyboardEvent) {
        console.log('r');
        if (e.key === 'Escape') {
            console.log('r');
            dispatch('close');
        }
    }
    onMount(() => {
        const handleKeyup = (event: KeyboardEvent) => {
            if (event.key === 'Escape') dispatch('close');
        };

        document.addEventListener('keyup', handleKeyup);

        return () => {
            document.removeEventListener('keyup', handleKeyup);
        };
    });
    export let element: ZoneElement = {
        created_on: "",
        id: "",
        locked: false,
        meta: {auto_added: false, managed_by_apps: false, managed_by_argo_tunnel: false, source: ""},
        modified_on: "",
        proxiable: false,
        tags: [],
        zone_id: "",
        zone_name: "",
        type: "",
        name: "",
        content: "",
        proxied: false,
        ttl: 0
    };

    let type: string = element.type;
    let name: string = element.name;
    let address: string = element.content;
    let proxy: boolean  = element.proxied;
    let comment: string | null | undefined = element.comment;
    let loading: boolean = false;
    const submitForm = () => {
        loading = true;
        if(comment === element.comment &&
        proxy === element.proxied &&
        address === element.content &&
        name === element.name &&
        type === element.type) {
            return  toast.push('At least of one element need to be edited!', {
                theme: {
                    '--toastColor': 'mintcream',
                    '--toastBackground': 'rgba(187,120,72,0.95)',
                    '--toastBarBackground': '#85562f'
                }
            });
        }

        editRecord(element.id, address, name, proxy, type, comment).then((data: API_ANSWER) => {
            if(data.status) {
                toast.push(data.message, {
                    theme: {
                        '--toastColor': 'mintcream',
                        '--toastBackground': 'rgba(84,187,72,0.95)',
                        '--toastBarBackground': '#45852f'
                    }
                });
                loading = false;
                dispatch('close');
            } else {
                toast.push(data.message, {
                    theme: {
                        '--toastColor': 'mintcream',
                        '--toastBackground': 'rgb(187,72,72,0.95)',
                        '--toastBarBackground': '#852f2f'
                    }
                });
                loading = false;
            }
        }).catch((e: API_ANSWER) => {
            toast.push(e.message, {
                theme: {
                    '--toastColor': 'mintcream',
                    '--toastBackground': 'rgb(187,72,72,0.95)',
                    '--toastBarBackground': '#852f2f'
                }
            });
            loading = false;
        })
    };
</script>
{#if element.type === ''}
    <div></div>
{:else}
    <form on:submit|preventDefault={submitForm}>
        <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4 space-y-4">
        <div class="flex flex-wrap -mx-3">
            <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="type">
                    Type
                </label>
                <select bind:value={type} required class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                    <option disabled value="">Select a type</option>
                    <option>A</option>
                    <option>AAAA</option>
                    <option>CAA</option>
                    <option>CERT</option>
                    <option>CNAME</option>
                    <option>DNSKEY</option>
                    <option>DS</option>
                    <option>HTTPS</option>
                    <option>LOC</option>
                    <option>MX</option>
                    <option>NAPTR</option>
                    <option>NS</option>
                    <option>PTR</option>
                    <option>SMIMEA</option>
                    <option>SRV</option>
                    <option>SSHFP</option>
                    <option>SVCB</option>
                    <option>TLSA</option>
                    <option>TXT</option>
                    <option>URI</option>
                </select>
            </div>

            <div class="w-full md:w-1/2 px-3">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="name">
                    Name
                </label>
                <input bind:value={name} required placeholder="Enter your name" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
            </div>
        </div>

        <div class="flex flex-wrap -mx-3">
            <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="address">
                    Address
                </label>
                <input bind:value={address} required placeholder="Enter the IPv4" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
            </div>

            <div class="w-full md:w-1/2 px-3">
                <label class="block text-gray-700  text-sm font-bold mb-4" for="address">
                    Enable Cloudflare proxy?
                </label>
                <label class="relative inline-flex items-center cursor-pointer">
                    <input bind:checked={proxy} type="checkbox" value="" class="sr-only peer">
                    <span class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"/>
                </label>

            </div>
        </div>

        <div class="flex flex-wrap -mx-3">
            <div class="w-full px-3">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="comment">
                    Comment
                </label>
                <input bind:value={comment} placeholder="Comment" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
            </div>
        </div>

        </div>
        <div class="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                <button type="submit"
                        class="mt-3 w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"

                >
                    {#if loading}

                        <p class="flex gap-x-2">
                            <span>Loading </span>
                            <span role="status" class="my-auto">
                                <svg aria-hidden="true" class="w-4 h-4 text-white animate-spin fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                                    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                                </svg>
                                <span class="sr-only">Loading...</span>
                            </span>
                        </p>
                        {:else}
                        <p>Submit</p>
                        {/if}
                </button>
            <button type="button"
                    class="mt-3 w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                    on:click={close}>
                Close
            </button>
        </div>
    </form>
{/if}