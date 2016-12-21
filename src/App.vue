<template>
    <section>
        <main-nav></main-nav>
        <!-- content -->
        <router-view class="container"></router-view>
    </section>
</template>

<script>

import MainNav      from './components/main-nav';

export default {
    data() {
        return {
        }
    }, 
    components:{
        MainNav
    }

}

</script>

<style>

</style>