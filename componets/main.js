let proudce = {
	props:{
		i:[],
		rio:null,
		list:[]
	},
	data(){
		return {
			count:1,
			checked:false
		}
	},
	template:`<li>
				<div class="left">
					<p><input type="checkbox" v-model='checked'/> {{i.name}}</p>
					<span>{{i.price}}</span>
					<div class="comput">
						<span @click="minus">-</span>
						<input type="text" v-model='count' />
						<span @click="add">+</span>
					</div>
				</div>
				<div class="right" v-show='isShow' @click="del(i.No)">
					删除<span>X</span>
				</div>
			</li>`,
	created(){
		console.log(this.i)
//		this.isShow = this.$store.state.isShow
	},
	computed:{
		isShow(){
			return this.$store.state.isShow
		}
	},
	methods:{
		minus(){
			this.count--
			this.totle()
			
		},
		add(){
			this.count++
			this.totle()
		},
		totle(){
			if(this.checked){
				this.$store.commit(this.i.id,this.count*this.i.price)
			}
		},
		del(id){
			let num = 0;
			for(var i=0;i<this.list.length;i++){
//				console.log(this.list[i].No)
				if(this.list[i].No==id){
					num = i
				}
			}
			this.list.splice(num,1)
			this.$store.commit(this.i.id,0)
//			console.log(this.list)
		}
	},
	watch:{
		checked:function(a){
			if(a){
				this.totle()
			}else{
				this.$store.commit(this.i.id,0)
				this.$emit("check",false)
			}
		},
		rio(a){
			if(a){
				this.checked=true
			}
		}
	}
}

let hospital = {
	props:{
		x:[]
	},
	data(){
		return {
			rio:false
		}
	},
	template:`<ul>
					<li>
						<input type="radio" value='true' v-model='rio' />
						{{x.name}}
					</li>
						<v-produce v-for="i in x.prouduce" :i="i" :rio="rio" :list='x.prouduce' @check="fn" > </v-produce>
					<li> 订单留言<span class="more">></span> </li>
				</ul>`,
	components:{
		"v-produce":proudce
	},
	computed:{
		checked(){
			return this.$store.state.checked
		}
	},
	mounted(){
		console.log(this.rio)
	},
	methods:{
		fn(data){
			this.rio=data
		}
	}
}
