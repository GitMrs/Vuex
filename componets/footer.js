let footer = {
	template:`<footer>
			<div class="top">每期还款：￥4000.00/期</div>
			<div class="show">
				<ul>
					<li class="active">
						<span>3期</span>
						<a>(0手续费)</a>
					</li>
					<li>
						<span>3期</span>
						<a>(0手续费)</a>
					</li>
					<li>
						<span>3期</span>
						<a>(0手续费)</a>
					</li>
					<li>
						<span>3期</span>
						<a>(0手续费)</a>
					</li>
				</ul>
			</div>
			<div class="bottom">
				<span>总金额：￥{{totle}}</span>
				<b>申请分期</b>
			</div>
		</footer>`,
	computed:{
		totle(){
			return this.$store.state.totle
		}
	}
}
