import {ui} from '../../ui/layaMaxUI';

export default class extends ui.Pages.HomeUI {
	constructor () {
		super();
	}

	onAwake () {
		console.log(`onAwake`);
		this.startBtn.on(Laya.Event.CLICK, this, () => {
			//删除当前的场景
			this.stage.removeChildAt(0);
			//跳转到下个场景
			Laya.Scene.open(`Pages/Page.scene`, true, Laya.Handler.create(this, ( scene ) => {
				this.stage.addChild(scene);
			}));
		});
	}

	onEnable () {
		console.log(`onEnable`);
	}

	onStart () {
		console.log(`onStart`);
	}
}