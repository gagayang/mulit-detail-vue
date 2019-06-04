<template>
    <div>
        <div class="show_class" v-show="showFlag">
            gaoyang111
        </div>

    </div>
</template>
<script>
    export default {
    	name: 'Demo',
        data() {
    		return {
    			showFlag: true
            }
        }
    }
</script>

<style>
    .show_class{
        display: none!important;
    }
</style>