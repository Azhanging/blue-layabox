//盒子属性
const boxProps = {
	width: 50,
	height: 50
};

//菜单
const menu = {
	height: 50
};

function genMathRandom (): number {
	return Math.ceil(Math.random() * 4 + 1);
}

//生成坐标
function genBoxPos (): {
	x: number;
	y: number;
} {
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

//数字文本
function numberBoxText (): Laya.Text {
	const number = new Laya.Text();
	number.size(boxProps.width, boxProps.height);
	number.color = `white`;
	number.text = `${genMathRandom()}`;
	number.align = `center`;
	number.valign = `middle`;
	number.fontSize = 50;
	number.name = `number`;
	return number;
}

export function numberBox ( opts: any = {
	cleared: () => {
	}
} ): Laya.Sprite {
	const cleared: Function = opts.cleared;
	const box = new Laya.Sprite();
	const number = numberBoxText();
	const pos = genBoxPos();
	box.size(boxProps.width, boxProps.height);
	box.addChild(number);
	box.pos(pos.x, pos.y);
	box.on(Laya.Event.CLICK, box, ( e ) => {
		let num: number = parseInt(number.text);
		if (num === 1) {
			box.parent.removeChild(box);
			cleared(box);
		} else {
			number.text = `${--num}`;
		}
	});
	return box;
}