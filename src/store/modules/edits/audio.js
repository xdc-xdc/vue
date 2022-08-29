const  audio={
	state:{
		audio:'audio'
	},
	getters:{
		audios(state){
			return state.audio+'audios'
		}
	},
	mutations:{
		audioUpdata(state){
			state.audio=='audio==audio'
		}
	},
	actions:{
		audiosPush(context){
			context.commit('audioUpdata')
		}
	}
}

export default audio