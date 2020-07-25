let createTime = 0;

let tick = 2000;

const boxProps = {
	width: 50,
	height: 50
};

const menu = {
	height: 50
};

export default class extends Laya.Script {
	constructor () {
		super();
	}

	onUpdate () {
		let now = +new Date();
		if (now - createTime > tick) {
			createTime = now;
			this.owner.addChild(this.createBox());
		}
	}

	genMathRandom () {
		return Math.ceil(Math.random() * 4 + 1);
	}

	//生成坐标
	genBoxPos () {
		const height = Laya.stage.height;
		const width = Laya.stage.width;
		let y = Math.ceil(Math.random() * height);
		let x = Math.ceil(Math.random() * width);
		return {
			x: (() => {
				if (x >= width - boxProps.width) {
					return width - boxProps.width;
				}
				return x;
			})(),
			y: (() => {
				if (y < menu.height) {
					return menu.height;
				} else if (y >= height - boxProps.height) {
					return height - boxProps.height;
				}
				return y;
			})()
		}
	}

	createBox (): Laya.Sprite {
		const box = new Laya.Sprite();
		box.size(boxProps.width, boxProps.height);
		const number = new Laya.Text();
		number.color = `white`;
		number.text = `${this.genMathRandom()}`;
		number.align = `center`;
		number.valign = `middle`;
		number.fontSize = 50;
		number.size(boxProps.width, boxProps.height);
		const pos = this.genBoxPos();
		box.addChild(number);
		box.pos(pos.x, pos.y);
		box.on(Laya.Event.CLICK, this, ( e ) => {
			let num: number = parseInt(number.text);
			if (num === 1) {
				this.owner.removeChild(box);
			} else {
				number.text = `${--num}`;
			}
		});
		return box;
	}
}