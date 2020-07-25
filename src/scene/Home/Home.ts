import {ui} from '../../ui/layaMaxUI';

export default class extends ui.Pages.HomeUI {
	constructor () {
		super();
	}

	onAwake () {
		this.startBtn.on(Laya.Event.CLICK, this, () => {
			Laya.Scene.open(`Pages/Game.scene`, true);
		});
	}
}