<!-- Modal.svelte -->
<script lang="ts">




</script>

<div tabindex="0"
     role="button"
     class="fixed z-10 inset-0 overflow-y-auto">
    <div class="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div class="fixed inset-0 transition-opacity" aria-hidden="true">
            <div class="absolute inset-0 bg-gray-500 opacity-75"></div>
        </div>
        <div
                role="dialog"
                aria-modal="true"
                aria-labelledby="modal-headline"
                class="mt-36 inline-block bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:max-w-7xl sm:w-full"

        >
            <slot></slot>
        </div>
    </div>
</div>