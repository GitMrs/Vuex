let header = {
	data(){
		return {
			edit:"编辑"
		}
	},
	template:`<header>
				<a href="" class="back"></a>
				<label for="">我的购物车</label>
				<span @click="editFn">{{edit}}</span>
			</header>`,
	methods:{
		editFn(){
			if(this.edit=="编辑"){
				this.$store.commit("edit",true)
				this.edit = "完成"
			}else{
				this.$store.commit("edit",false)
				this.edit = "编辑"
			}
		}
	}
}
