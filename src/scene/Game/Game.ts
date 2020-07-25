import {ui} from '../../ui/layaMaxUI';

export default class extends ui.Pages.GameUI {
	constructor () {
		super();
	}

	onEnable () {
		this.back();
	}

	back () {
		this.backBtn.on(Laya.Event.CLICK, this, () => {
			Laya.Scene.open(`Pages/Home.scene`, true);
		});
	}
}

