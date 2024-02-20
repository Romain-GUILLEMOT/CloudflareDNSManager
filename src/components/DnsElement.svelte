<script lang="ts">
    import {truncateString, type ZoneElement} from "../lib/utils.js";
    import {faArrowDown, faHeart} from "@fortawesome/free-solid-svg-icons";
    import Button from "./elements/Button.svelte";
    import DnsEdit from "./DnsEdit.svelte";
    import Modal from "./elements/Modal.svelte";
    import Fa from "svelte-fa";


    let showEdit: boolean = false;
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

</script>
{#if element.type === ''}
    <div></div>
{:else}
    <tr class="hidden lg:table-row">
        <td class="px-3.5 whitespace-nowrap py-2 text-sm text-gray-700 dark:text-slate-200 ">
            <div class="my-auto rounded-md overflow-ellipsis overflow-hidden h-8">{element.type}</div>
        </td>
        <td class=" whitespace-nowrap py-2 text-sm text-gray-700 dark:text-slate-200 ">
            <div class=" my-auto rounded-md overflow-ellipsis overflow-hidden h-8"
                 title={element.name.split('.')[0]}>{truncateString(element.name.split('.')[0])}</div>
        </td>
        <td class="whitespace-nowrap py-2 text-sm text-gray-700 dark:text-slate-200 ">
            <div class="my-auto rounded-md overflow-ellipsis overflow-hidden h-8"
                 title={element.content}>{truncateString(element.content)}</div>
        </td>
        <td class="whitespace-nowrap py-2 text-sm text-gray-700 dark:text-slate-200 ">
            <div class="my-auto flex relative">
                <Fa icon={faHeart}
                    class={`animate-ping absolute opacity-75 my-auto inline-flex overflow-ellipsis overflow-hidden ${element.proxied ? 'text-green-500' : 'text-red-500'}`}/>
                <Fa icon={faHeart}
                    class={`my-auto h-8 overflow-ellipsis overflow-hidden ${element.proxied ? 'text-green-500' : 'text-red-500'}`}/>
            </div>
        </td>
        <td class="whitespace-nowrap py-2 text-sm text-gray-700 dark:text-slate-200">
            <div class="my-auto rounded-md overflow-ellipsis overflow-hidden h-8">{element.ttl}</div>
        </td>
        <td class="flex whitespace-nowrap py-2 text-sm text-gray-700 dark:text-slate-200">
            <div class="my-auto justify-end">
                <Button onClick={() => showEdit = !showEdit}>
                    <div class="flex gap-x-2">
                        Edit <Fa icon={faArrowDown} class={`my-auto duration-200 -rotate-90`}/>
                    </div>
                </Button>
            </div>
        </td>
    </tr>
    <tr class="lg:hidden table-row" on:click={() => showEdit = !showEdit}>
        <td class="hidden sm:table-cell px-3.5 whitespace-nowrap py-2 text-sm text-gray-700 dark:text-slate-200 ">
            <div class="my-auto rounded-md overflow-ellipsis overflow-hidden h-8">{element.type}</div>
        </td>
        <td class="whitespace-nowrap py-2 text-sm text-gray-700 dark:text-slate-200 ">
            <div class="text-center sm:text-left my-auto rounded-md overflow-ellipsis overflow-hidden h-8"
                 title={element.name.split('.')[0]}>{truncateString(element.name.split('.')[0])}</div>
        </td>
        <td class="hidden sm:table-cell whitespace-nowrap py-2 text-sm text-gray-700 dark:text-slate-200 ">
            <div class="my-auto rounded-md overflow-ellipsis overflow-hidden h-8"
                 title={element.content}>{truncateString(element.content)}</div>
        </td>

    </tr>
    {#if showEdit}
        <Modal> <DnsEdit element={element} on:close={() => showEdit = !showEdit}/></Modal>
    {/if}
{/if}