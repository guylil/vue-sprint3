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

<style scoped>
.container{
    /*padding: 10px;*/
    width:100%
}
</style>