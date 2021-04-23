import config from './modules/config.js';

const gamePick = config.list[Math.floor(Math.random() * config.list.length)];
const msgPick = config.welcomeMsgs[Math.floor(Math.random() * config.welcomeMsgs.length)];

const app = new Vue({
	data() {
		return {
			gamePick,
			msgPick,
			list: config.list
		}
	},
	methods: {
		showRandom() {
			const element = document.querySelector('p#pick');
			element.style.display = 'block'
		},
	}
});

app.$mount('main#app');