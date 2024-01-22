<script lang="ts">
    import { onMount } from 'svelte';

    let theme = 'light';
    const htmlClasses = document!.querySelector('html')!.classList;
    onMount(() => {
        theme = localStorage.getItem('theme') ? localStorage.getItem('theme') : window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
        changeTheme(theme);
    });

    function changeTheme(newTheme: string) {
        theme = newTheme;
        localStorage.setItem('theme', theme);
        if(newTheme === 'dark') {
            htmlClasses.add('dark');
            htmlClasses.remove('bg-light-primary');
            htmlClasses.add('bg-dark-primary');

        } else {
            htmlClasses.remove('dark');
            htmlClasses.add('bg-light-primary');
            htmlClasses.remove('bg-dark-primary');
        }
    }

    function toggleTheme() {
        changeTheme(theme === 'light' ? 'dark' : 'light');
    }
</script>

<div class="fixed bottom-5 right-5">
    <button
            class="p-2 rounded-full shadow-lg text-white"
            class:bg-dark-accent={theme === 'dark'}
            class:bg-light-accent={theme === 'light'}
            on:click={toggleTheme}
    >
        {theme === 'light' ? '🌙' : '☀️'}
    </button>
</div>