<template>
    <div>
        <div v-for="n in list" v-if="n > num">{{n}}</div>
    </div>
</template>

<script>
    export default {
    	name: 'ForDemo',
        data(){
    		return {
    			list:[1,2,3],
                num: 2
            }
        }
    }
</script>