(function () {
    'use strict';

    var REG = Laya.ClassUtils.regClass;
    var ui;
    (function (ui) {
        var Animate;
        (function (Animate) {
            class TickUI extends Laya.EffectAnimation {
                constructor() {
                    super();
                    this.effectData = ui.Animate.TickUI.uiView;
                }
            }
            TickUI.uiView = { "type": "View", "props": {}, "compId": 2, "child": [{ "type": "Sprite", "props": { "y": -25, "x": -25, "width": 50, "height": 50 }, "compId": 5, "child": [{ "type": "Rect", "props": { "width": 50, "lineWidth": 1, "height": 50, "fillColor": "#ff0000" }, "compId": 6 }] }], "animations": [{ "nodes": [{ "target": 5, "keyframes": { "y": [{ "value": 0, "tweenMethod": "linearNone", "tween": true, "target": 5, "key": "y", "index": 0 }, { "value": 0, "tweenMethod": "linearNone", "tween": true, "target": 5, "key": "y", "index": 5 }, { "value": 0, "tweenMethod": "linearNone", "tween": true, "target": 5, "label": null, "key": "y", "index": 10 }], "x": [{ "value": 0, "tweenMethod": "linearNone", "tween": true, "target": 5, "key": "x", "index": 0 }, { "value": 0, "tweenMethod": "linearNone", "tween": true, "target": 5, "key": "x", "index": 5 }, { "value": 0, "tweenMethod": "linearNone", "tween": true, "target": 5, "label": null, "key": "x", "index": 10 }], "skewY": [{ "value": 0, "tweenMethod": "linearNone", "tween": true, "target": 5, "key": "skewY", "index": 0 }, { "value": 0, "tweenMethod": "linearNone", "tween": true, "target": 5, "key": "skewY", "index": 5 }, { "value": 0, "tweenMethod": "linearNone", "tween": true, "target": 5, "label": null, "key": "skewY", "index": 10 }], "skewX": [{ "value": 0, "tweenMethod": "linearNone", "tween": true, "target": 5, "key": "skewX", "index": 0 }, { "value": 0, "tweenMethod": "linearNone", "tween": true, "target": 5, "key": "skewX", "index": 5 }, { "value": 0, "tweenMethod": "linearNone", "tween": true, "target": 5, "label": null, "key": "skewX", "index": 10 }], "scaleY": [{ "value": 1, "tweenMethod": "linearNone", "tween": true, "target": 5, "key": "scaleY", "index": 0 }, { "value": 0.6, "tweenMethod": "linearNone", "tween": true, "target": 5, "key": "scaleY", "index": 5 }, { "value": 1, "tweenMethod": "linearNone", "tween": true, "target": 5, "label": null, "key": "scaleY", "index": 10 }], "scaleX": [{ "value": 1, "tweenMethod": "linearNone", "tween": true, "target": 5, "key": "scaleX", "index": 0 }, { "value": 0.6, "tweenMethod": "linearNone", "tween": true, "target": 5, "key": "scaleX", "index": 5 }, { "value": 1, "tweenMethod": "linearNone", "tween": true, "target": 5, "label": null, "key": "scaleX", "index": 10 }], "pivotY": [{ "value": 25, "tweenMethod": "linearNone", "tween": true, "target": 5, "key": "pivotY", "index": 0 }, { "value": 25, "tweenMethod": "linearNone", "tween": true, "target": 5, "key": "pivotY", "index": 5 }, { "value": 25, "tweenMethod": "linearNone", "tween": true, "target": 5, "label": null, "key": "pivotY", "index": 10 }], "pivotX": [{ "value": 25, "tweenMethod": "linearNone", "tween": true, "target": 5, "key": "pivotX", "index": 0 }, { "value": 25, "tweenMethod": "linearNone", "tween": true, "target": 5, "key": "pivotX", "index": 5 }, { "value": 25, "tweenMethod": "linearNone", "tween": true, "target": 5, "label": null, "key": "pivotX", "index": 10 }] } }], "name": "ani1", "id": 1, "frameRate": 24, "action": 0 }], "loadList": [], "loadList3D": [] };
            Animate.TickUI = TickUI;
            REG("ui.Animate.TickUI", TickUI);
        })(Animate = ui.Animate || (ui.Animate = {}));
    })(ui || (ui = {}));
    (function (ui) {
        var Pages;
        (function (Pages) {
            class GameUI extends Laya.Scene {
                constructor() { super(); }
                createChildren() {
                    super.createChildren();
                    this.loadScene("Pages/Game");
                }
            }
            Pages.GameUI = GameUI;
            REG("ui.Pages.GameUI", GameUI);
            class HomeUI extends Laya.Scene {
                constructor() { super(); }
                createChildren() {
                    super.createChildren();
                    this.loadScene("Pages/Home");
                }
            }
            Pages.HomeUI = HomeUI;
            REG("ui.Pages.HomeUI", HomeUI);
        })(Pages = ui.Pages || (ui.Pages = {}));
    })(ui || (ui = {}));

    class Game extends ui.Pages.GameUI {
        constructor() {
            super();
        }
        onEnable() {
            this.back();
        }
        back() {
            this.backBtn.on(Laya.Event.CLICK, this, () => {
                Laya.Scene.open(`Pages/Home.scene`, true);
            });
        }
    }

    let createTime = 0;
    let tick = 2000;
    const boxProps = {
        width: 50,
        height: 50
    };
    const menu = {
        height: 50
    };
    class script extends Laya.Script {
        constructor() {
            super();
        }
        onUpdate() {
            let now = +new Date();
            if (now - createTime > tick) {
                createTime = now;
                this.owner.addChild(this.createBox());
            }
        }
        genMathRandom() {
            return Math.ceil(Math.random() * 4 + 1);
        }
        genBoxPos() {
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
                    }
                    else if (y >= height - boxProps.height) {
                        return height - boxProps.height;
                    }
                    return y;
                })()
            };
        }
        createBox() {
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
            box.on(Laya.Event.CLICK, this, (e) => {
                let num = parseInt(number.text);
                if (num === 1) {
                    this.owner.removeChild(box);
                }
                else {
                    number.text = `${--num}`;
                }
            });
            return box;
        }
    }

    class Home extends ui.Pages.HomeUI {
        constructor() {
            super();
        }
        onAwake() {
            this.startBtn.on(Laya.Event.CLICK, this, () => {
                Laya.Scene.open(`Pages/Game.scene`, true);
            });
        }
    }

    class GameConfig {
        constructor() {
        }
        static init() {
            var reg = Laya.ClassUtils.regClass;
            reg("scene/Game/Game.ts", Game);
            reg("scene/Game/script.ts", script);
            reg("scene/Home/Home.ts", Home);
        }
    }
    GameConfig.width = 640;
    GameConfig.height = 1136;
    GameConfig.scaleMode = "fixedwidth";
    GameConfig.screenMode = "none";
    GameConfig.alignV = "top";
    GameConfig.alignH = "left";
    GameConfig.startScene = "Pages/Home.scene";
    GameConfig.sceneRoot = "";
    GameConfig.debug = false;
    GameConfig.stat = false;
    GameConfig.physicsDebug = false;
    GameConfig.exportSceneToJson = true;
    GameConfig.init();

    class Main {
        constructor() {
            if (window["Laya3D"])
                Laya3D.init(GameConfig.width, GameConfig.height);
            else
                Laya.init(GameConfig.width, GameConfig.height, Laya["WebGL"]);
            Laya["Physics"] && Laya["Physics"].enable();
            Laya["DebugPanel"] && Laya["DebugPanel"].enable();
            Laya.stage.scaleMode = GameConfig.scaleMode;
            Laya.stage.screenMode = GameConfig.screenMode;
            Laya.stage.alignV = GameConfig.alignV;
            Laya.stage.alignH = GameConfig.alignH;
            Laya.URL.exportSceneToJson = GameConfig.exportSceneToJson;
            if (GameConfig.debug || Laya.Utils.getQueryString("debug") == "true")
                Laya.enableDebugPanel();
            if (GameConfig.physicsDebug && Laya["PhysicsDebugDraw"])
                Laya["PhysicsDebugDraw"].enable();
            if (GameConfig.stat)
                Laya.Stat.show();
            Laya.alertGlobalError(true);
            Laya.ResourceVersion.enable("version.json", Laya.Handler.create(this, this.onVersionLoaded), Laya.ResourceVersion.FILENAME_VERSION);
        }
        onVersionLoaded() {
            Laya.AtlasInfoManager.enable("fileconfig.json", Laya.Handler.create(this, this.onConfigLoaded));
        }
        onConfigLoaded() {
            GameConfig.startScene && Laya.Scene.open(GameConfig.startScene);
        }
    }
    new Main();

}());
