let store = new Vuex.Store({
	state:{
		"totle":0,
		"tooth":0,
		"clear":0,
		"mounth":0,
		"lips":0,
		"checked":false,
		"isShow":false
	},
	mutations:{
		tooth(state,num){
			state.tooth = num
			state.totle = state.tooth + state.clear +state.mounth +state.lips
			console.log(state.totle)
		},
		clear(state,num){
			state.clear = num
			state.totle = state.tooth + state.clear +state.mounth +state.lips
			console.log(state.totle)
		},
		mounth(state,num){
			state.mounth = num
			state.totle = state.tooth + state.clear +state.mounth +state.lips
			console.log(state.totle)
		},
		lips(state,num){
			state.lips = num
			state.totle = state.tooth + state.clear +state.mounth +state.lips
			console.log(state.totle)
		},
		checked(state,num){
			state.checked = num
			console.log(state.checked)
		},
		edit(state,num){
			state.isShow = num
			console.log(state.isShow)
		}
	}
})
