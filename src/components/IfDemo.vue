<template>
    <div>
        <div class="if_class" v-if="showFlag">
            gaoyang111
        </div>

    </div>
</template>
<script>
	export default {
		name: 'IfDemo',
		data() {
			return {
				showFlag: true
			}
		}
	}
</script>

<style>
    .if_class{
        display: none!important;
    }
</style>