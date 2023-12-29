import { sidebar } from "vuepress-theme-hope";

export default sidebar({
	'/guide/': [{
		text: '使用指北',
		link: "/guide/",
		children: "structure",
	},
	],
	'/EEProject/SE/': [{
		text: "软件工程类",
		children: [
			"",
			{
				text: "编程语言",
				prefix: "programming/",
				children: "structure"
			},
			{
				text: "软件工程",
				prefix: "se/",
				children: "structure"
			}, {
				text: '设计模式',
				prefix: 'dp/',
				children: "structure"
			},
			{
				text: "计算机网络",
				prefix: "network/",
				children: "structure"
			},
			{
				text: "数据库",
				prefix: "database/",
				children: "structure"
			}
		],
	},
	],
	'/EEProject/EE/': [{
		text: "硬件工程类",
		children: [
			"",
			{
				text: "数电模电",
				prefix: "programming/",
				children: "structure"
			},
			{
				text: "电路分析",
				prefix: "se/",
				children: "structure"
			}
		],
	},
	],
	'/EEProject/AI/': [{
		text: "算法工程类",
		children: [
			"",
			{
				text: "机器学习",
				prefix: "programming/",
				children: "structure"
			},
			{
				text: "深度学习",
				prefix: "se/",
				children: "structure"
			}
		],
	},
	],
	'/EEProject/ME/': [{
		text: "机械工程类",
		children: [
			"",
			{
				text: "机械制图",
				prefix: "programming/",
				children: "structure"
			},
			{
				text: "机械设计",
				prefix: "se/",
				children: "structure"
			}, {
				text: '机械原理',
				prefix: 'dp/',
				children: "structure"
			}
		],
	},
	],
	'/EEProject/OE/': [{
		text: "光学工程类",
		children: [
			"",
			{
				text: "物理光学",
				prefix: "programming/",
				children: "structure"
			}
		],
	},
	],
	'/resources/': [{
		text: "常用资源",
		link: "/resources/",
		children: "structure",
	},
	], '/more/': [{
		text: "了解更多",
		link: "/more/",
		children: "structure",

	},
	],
});