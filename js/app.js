new Vue({
	el:".wrap",
	data:{
		data:[]
	},
	store,
	created(){
		axios.get("./server/data.json").then((res)=>{
			this.data = res.data.hospital
		})
	},
	components:{
		"v-header":header,
		"v-footer":footer,
		"v-hospital":hospital
	}
})
