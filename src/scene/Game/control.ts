import {numberBox} from "./NumberBox";
import Game from './Game';

export default class extends Laya.Script {
	private gameStatus: boolean = true;
	private createTime: number = 0;
	private tick: number = 1000;
	readonly OVER_COUNT: number = 5;
	private scene: Game;
	private numberBox: Laya.Sprite[] = [];

	constructor () {
		super();
	}

	onEnable () {
		this.scene = this.owner as Game;
		this.setRestartBtn();
	}

	onUpdate () {
		let now = +new Date();
		if (now - this.createTime > this.tick) {
			this.createTime = now;
			const numberBoxLen = this.numberBox.length;
			if (!this.gameStatus || numberBoxLen && numberBoxLen === this.OVER_COUNT) {
				this.stopGame();
			} else {
				this.toggleRestartBtn(false);
				this.addNumberBox();
			}
		}
	}

	addNumberBox () {
		const scene = this.scene;

		//数字盒子
		const newNumberBox = numberBox({
			//清空一个添加分数
			cleared: ( box ) => {
				scene.updateScore().updateScoreText();
				this.numberBox.splice(this.numberBox.indexOf(box), 1);
			}
		})
		//添加盒子
		this.owner.addChild(newNumberBox);
		this.numberBox.push(newNumberBox);
	}

	stopGame () {
		this.scene.clearScore();
		this.gameStatus = false;
		this.clearNumberBox();
		this.toggleRestartBtn(true);
	}

	clearNumberBox () {
		const scene = this.scene;
		this.numberBox.forEach(( child: Laya.Sprite ) => {
			scene.removeChild(child);
		});
		this.numberBox = [];
	}

	toggleRestartBtn ( status: boolean ) {
		this.scene.restartBtn.visible = status;
	}

	setRestartBtn () {
		const scene = this.scene;
		scene.restartBtn.on(Laya.Event.CLICK, this, () => {
			scene.clearScore();
			this.gameStatus = true;
		});
	}
}