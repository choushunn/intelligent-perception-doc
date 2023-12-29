import { navbar } from "vuepress-theme-hope";

export default navbar([
	{
		text: '首页',
		link: '/',
	},
	{
		text: '卓越工程师计划',
		prefix: '/EEProject/',
		children: [
			{
				text: '软件工程类',
				link: 'SE/',
			},
			{
				text: '硬件工程类',
				link: 'EE/',
			}, {
				text: '算法工程类',
				link: 'AI/',
			}, {
				text: '机械工程类',
				link: 'ME/',
			}, {
				text: '光学工程类',
				link: 'OE/',
			},

		],
	},
	{
		text: '常用资源',
		link: '/resources/',
	},
	{
		text: '了解更多',
		prefix: '/more/',
		children: [
			{
				text: '关于我们',
				link: 'about/',
			},
			{
				text: '现有项目',
				link: 'project/',
			},
		],
	}
]);