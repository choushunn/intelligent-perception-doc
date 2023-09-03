<template>
	<hr />
	<div class="dateTime">
		<span class="date">{{ date }}</span> <span class="time">{{ time }}</span> <span class="week">星期{{ week }}</span>
	</div>
</template>

<script>
	import dayjs from 'dayjs'

	export default {
		name: "dayTime",
		components: {},
		data() {
			return {
				date: dayjs().format("YYYY-MM-DD"),
				time: dayjs().format("HH:mm:ss"),
			}
		},
		computed: {
			week() {
				var datas = dayjs().day()
				var week = ['日', '一', '二', '三', '四', '五', '六']
				return week[datas]
			}
		},
		mounted() {
			var that = this;
			setInterval(function() {
				that.time = dayjs().format("HH:mm:ss");
			}, 1000);
		},
		methods: {}
	}
</script>

<style lang="scss" scoped>
	.dateTime {
		display: flex;
		justify-content: flex-end;
		align-items: center;
		flex-wrap: nowrap;
		flex-direction: row;
		align-content: flex-start;
		// font-size: 18px;
		font-family: PingFang SC;
		font-weight: bold;
		color: transparent;
		background-image: linear-gradient(to right, #9b59b6, #3498db);
		-webkit-background-clip: text;
		background-clip: text;
	}

	.dateTime>span {
		margin-right: 5px;
		/* 添加右侧间隔 */
	}
</style>