//集成edits下的所有配置
import audio from './audio'
import material from './material'

//将集成的所有配置集合到一个store
export const  edtis={
	state:{
		...audio.state,
		...material.state
	},
	getters:{
		...audio.getters,
		...material.getters
	},
	mutations:{
		...audio.mutations,
		...material.mutations
	},
	actions:{
		...audio.actions,
		...material.actions
	},
}

export default edtis
