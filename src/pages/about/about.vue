<template>
    <div id="app">
        <HelloWorld msg="Welcome to Your Vue.js about"/>
    </div>
</template>

<script>
	import HelloWorld from '../../components/HelloWorld.vue'
    import a from '../../mixins/a.js'
    import b from '../../mixins/b.js'

	export default {
		name: 'about',
        data() {
            return {
                name: 'about',
                test: 3
            }
        },
        mixins: [b, a],
		components: {
			HelloWorld
		},
        created () {
			alert('about')
        },
	}
</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
</style>
