<template>
  <div id="app">
    <router-view/>
  </div>
</template>
<!-- <script src="./utils/environmental-judgment.js"></script> -->
<script>
	import audio from '../src/store/modules/edits/audio.js'
	import environmental from './utils/environmental-judgment.js'
	export default{
		data(){
			return{
				
			}
		},
		mounted() {
			console.log("=====")
			console.log(process.env)
			console.log("=====")
			console.log("=====")
			console.log(this.$store.state.user.user) 
			console.log(this.$store.state.edtis.audio) 
			}
	}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
