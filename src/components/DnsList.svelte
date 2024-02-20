<script lang="ts">

    import DnsElement from "./DnsElement.svelte";
    import {type ZoneElement} from "../lib/utils";
    import TableLoading from "./elements/TableLoading.svelte";
    import {getDNS} from "./api/getDNS";
    import {onMount} from "svelte";

    let zones: ZoneElement[] = [];
    onMount(() => {
        const dnsStore = getDNS();
        dnsStore.subscribe((value) => {
            zones = value as ZoneElement[];
        });
    });

</script>

<section>
    {#if zones === null}

        <div class="px-4 sm:px-6 lg:px-8 mx-24 mt-8">
            <div class="sm:flex sm:items-center">
                <div class="sm:flex-auto">
                    <h1 class="text-base font-semibold leading-6 text-gray-700 dark:text-slate-100">DNS Zone</h1>
                    <p class="mt-2 text-sm text-gray-600 dark:text-slate-200">A list of all dns zone. (Saved on
                        Cloudflare)</p>
                    <p class="mt-2 text-sm text-gray-600 dark:text-slate-200">The dns record pagination is unavailable for the moment because of a API problem. We actually wait a answer from ClouFlare.</p>

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
        <div class="px-4 sm:px-6 lg:px-8 mx-8 lg:mx-24 mt-8">
            <div class="sm:flex sm:items-center">
                <div class="sm:flex-auto">
                    <h1 class="text-base font-semibold leading-6 text-gray-700 dark:text-slate-100">DNS Zone</h1>
                    <p class="mt-2 text-sm text-gray-600 dark:text-slate-200">A list of all dns zone. (Saved on
                        Cloudflare)</p>
                    <p class="mt-2 text-sm text-gray-600 dark:text-slate-200">The dns record pagination is unavailable for the moment because of a API problem. We actually wait a answer from ClouFlare.</p>
                </div>
            </div>

            <div class="mt-8 flow-root">
                <div class="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div class="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                        <table class="min-w-full divide-y divide-gray-300 bg-light-quaternary dark:bg-dark-tertiary">
                            <thead>
                            <tr>
                                <th scope="col"
                                    class="hidden sm:table-cell px-3.5 py-3.5 text-left text-sm font-semibold text-gray-600 dark:text-slate-200">
                                    <p class="group inline-flex">
                                        Type
                                    </p>
                                </th>
                                <th scope="col"
                                    class="text-center  py-3.5 sm:text-left text-sm font-semibold text-gray-600 dark:text-slate-200">
                                    <p class="group inline-flex">
                                        Name
                                    </p>
                                </th>
                                <th scope="col"
                                    class="hidden sm:table-cell  py-3.5 text-left text-sm font-semibold text-gray-600 dark:text-slate-200">
                                    <p class="group inline-flex">
                                        Content
                                    </p>
                                </th>
                                <th scope="col"
                                    class="hidden lg:table-cell  py-3.5 text-left text-sm font-semibold text-gray-600 dark:text-slate-200">
                                    <p class="group inline-flex">
                                        Proxied
                                    </p>
                                </th>
                                <th scope="col"
                                    class="hidden lg:table-cell  py-3.5 text-left text-sm font-semibold text-gray-600 dark:text-slate-200">
                                    <p class="group inline-flex">
                                        TTL
                                    </p>
                                </th>
                                <th scope="col"
                                    class="hidden lg:table-cell  py-3.5 text-left text-sm font-semibold text-gray-600 dark:text-slate-200">
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