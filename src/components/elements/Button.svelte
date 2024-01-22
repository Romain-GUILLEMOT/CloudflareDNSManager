<script lang="ts">
    export let onClick: () => void;

</script>
<button on:click={onClick} class="text-white py-2 px-6 bg-dark-primary rounded-md">
    <slot></slot>
</button>
