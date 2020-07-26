import {ui} from '../../ui/layaMaxUI';

export default class extends ui.Pages.GameUI {
	private score: number = 0;

	constructor () {
		super();
	}

	onEnable () {
		this.back();
	}

	//回到首页
	back () {
		this.backBtn.on(Laya.Event.CLICK, this, () => {
			Laya.Scene.open(`Pages/Home.scene`, true);
		});
	}

	//更新分数
	updateScore (): this {
		++this.score;
		return this;
	}

	updateScoreText () {
		this.scoreNumber.text = `分数：${this.score}`;
		return this;
	}

	//清空分数
	clearScore () {
		this.score = 0;
		return this;
	}
}

