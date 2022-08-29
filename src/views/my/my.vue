<template>
	<div class="my">
		my
		<button @click="person">person</button>
		<button @click="person_tow">person_tow</button>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				one:1,
				tow:2
			}
		},
		created() {
			
		},
		methods:{
			person(){
				this.$emit('person_fn',this.one)
			},
			person_tow(){
				this.$bus.$emit('person_fn',this.tow)
			}
		}
	}
</script>

<style>
</style>