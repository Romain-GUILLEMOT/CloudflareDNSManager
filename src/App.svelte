<script lang="ts">
  import svelteLogo from './assets/svelte.svg'
  import viteLogo from '/vite.svg'
  import Counter from './lib/utils.js'
  import ThemeSwitcher from "./components/elements/ThemeSwitcher.svelte";
  import DnsList from "./components/DnsList.svelte";
  import {SvelteToast} from "@zerodevx/svelte-toast";


</script>
<div >
  <SvelteToast options={{ reversed: true, intro: { y: 192 } }} />
  <DnsList/>
  <ThemeSwitcher/>
</div>
