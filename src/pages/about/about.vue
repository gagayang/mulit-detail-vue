<template>
    <div id="app">
        <HelloWorld msg="Welcome to Your Vue.js about"/>
        <Demo></Demo>
        <IfDemo></IfDemo>
        <ForDemo></ForDemo>
    </div>
</template>

<script>
	import HelloWorld from '../../components/HelloWorld.vue'
    import Demo from '../../components/Demo.vue'
    import IfDemo from '../../components/IfDemo.vue'
    import ForDemo from '../../components/ForDemo.vue'
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
			HelloWorld,
            Demo,
            IfDemo,
            ForDemo
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
