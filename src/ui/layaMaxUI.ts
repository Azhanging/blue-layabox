/**This class is automatically generated by LayaAirIDE, please do not make any modifications. */
import View=Laya.View;
import Dialog=Laya.Dialog;
import Scene=Laya.Scene;
var REG: Function = Laya.ClassUtils.regClass;
export module ui.Animate {
    export class TickUI extends Laya.EffectAnimation {
		public ani1:Laya.FrameAnimation;
        public static  uiView:any ={"type":"View","props":{},"compId":2,"child":[{"type":"Sprite","props":{"y":-25,"x":-25,"width":50,"height":50},"compId":5,"child":[{"type":"Rect","props":{"width":50,"lineWidth":1,"height":50,"fillColor":"#ff0000"},"compId":6}]}],"animations":[{"nodes":[{"target":5,"keyframes":{"y":[{"value":0,"tweenMethod":"linearNone","tween":true,"target":5,"key":"y","index":0},{"value":0,"tweenMethod":"linearNone","tween":true,"target":5,"key":"y","index":5},{"value":0,"tweenMethod":"linearNone","tween":true,"target":5,"label":null,"key":"y","index":10}],"x":[{"value":0,"tweenMethod":"linearNone","tween":true,"target":5,"key":"x","index":0},{"value":0,"tweenMethod":"linearNone","tween":true,"target":5,"key":"x","index":5},{"value":0,"tweenMethod":"linearNone","tween":true,"target":5,"label":null,"key":"x","index":10}],"skewY":[{"value":0,"tweenMethod":"linearNone","tween":true,"target":5,"key":"skewY","index":0},{"value":0,"tweenMethod":"linearNone","tween":true,"target":5,"key":"skewY","index":5},{"value":0,"tweenMethod":"linearNone","tween":true,"target":5,"label":null,"key":"skewY","index":10}],"skewX":[{"value":0,"tweenMethod":"linearNone","tween":true,"target":5,"key":"skewX","index":0},{"value":0,"tweenMethod":"linearNone","tween":true,"target":5,"key":"skewX","index":5},{"value":0,"tweenMethod":"linearNone","tween":true,"target":5,"label":null,"key":"skewX","index":10}],"scaleY":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":5,"key":"scaleY","index":0},{"value":0.6,"tweenMethod":"linearNone","tween":true,"target":5,"key":"scaleY","index":5},{"value":1,"tweenMethod":"linearNone","tween":true,"target":5,"label":null,"key":"scaleY","index":10}],"scaleX":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":5,"key":"scaleX","index":0},{"value":0.6,"tweenMethod":"linearNone","tween":true,"target":5,"key":"scaleX","index":5},{"value":1,"tweenMethod":"linearNone","tween":true,"target":5,"label":null,"key":"scaleX","index":10}],"pivotY":[{"value":25,"tweenMethod":"linearNone","tween":true,"target":5,"key":"pivotY","index":0},{"value":25,"tweenMethod":"linearNone","tween":true,"target":5,"key":"pivotY","index":5},{"value":25,"tweenMethod":"linearNone","tween":true,"target":5,"label":null,"key":"pivotY","index":10}],"pivotX":[{"value":25,"tweenMethod":"linearNone","tween":true,"target":5,"key":"pivotX","index":0},{"value":25,"tweenMethod":"linearNone","tween":true,"target":5,"key":"pivotX","index":5},{"value":25,"tweenMethod":"linearNone","tween":true,"target":5,"label":null,"key":"pivotX","index":10}]}}],"name":"ani1","id":1,"frameRate":24,"action":0}],"loadList":[],"loadList3D":[]};
        constructor(){ super();this.effectData =ui.Animate.TickUI.uiView;}
    }
    REG("ui.Animate.TickUI",TickUI);
}
export module ui.Pages {
    export class GameUI extends Laya.Scene {
		public backBtn:laya.display.Text;
        constructor(){ super()}
        createChildren():void {
            super.createChildren();
            this.loadScene("Pages/Game");
        }
    }
    REG("ui.Pages.GameUI",GameUI);
    export class HomeUI extends Laya.Scene {
		public startBtn:Laya.Sprite;
        constructor(){ super()}
        createChildren():void {
            super.createChildren();
            this.loadScene("Pages/Home");
        }
    }
    REG("ui.Pages.HomeUI",HomeUI);
}