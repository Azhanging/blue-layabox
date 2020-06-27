export default class extends Laya.Scene {
	private pageName: Laya.Label;

	constructor () {
		super();
	}

	onAwake () {
		console.log(`onAwake`);
	}

	onEnable () {
		console.log(`onEnable`);
		this.pageName.changeText(`Page Loaded...`);
		this.pageName.on(Laya.Event.CLICK, this, () => {
			this.stage.removeChildAt(0);
			Laya.Scene.open(`Pages/Home.scene`, true, Laya.Handler.create(this, ( scene ) => {
				this.stage.addChild(scene);
			}));
		});
	}

	onStart () {
		console.log(`onStart`);
	}
}