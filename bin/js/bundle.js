(function () {
	'use strict';

	class Home extends Laya.Scene {
	    constructor() {
	        super();
	    }
	    onAwake() {
	        console.log(`onAwake`);
	        this.startBtn.on(Laya.Event.CLICK, this, () => {
	            this.stage.removeChildAt(0);
	            Laya.Scene.open(`Pages/Page.scene`, true, Laya.Handler.create(this, (scene) => {
	                this.stage.addChild(scene);
	            }));
	        });
	    }
	    onEnable() {
	        console.log(`onEnable`);
	    }
	    onStart() {
	        console.log(`onStart`);
	    }
	}

	class Page extends Laya.Scene {
	    constructor() {
	        super();
	    }
	    onAwake() {
	        console.log(`onAwake`);
	    }
	    onEnable() {
	        console.log(`onEnable`);
	        this.pageName.changeText(`Page Loaded...`);
	        this.pageName.on(Laya.Event.CLICK, this, () => {
	            this.stage.removeChildAt(0);
	            Laya.Scene.open(`Pages/Home.scene`, true, Laya.Handler.create(this, (scene) => {
	                this.stage.addChild(scene);
	            }));
	        });
	    }
	    onStart() {
	        console.log(`onStart`);
	    }
	}

	class GameConfig {
	    constructor() {
	    }
	    static init() {
	        var reg = Laya.ClassUtils.regClass;
	        reg("scene/Home/Home.ts", Home);
	        reg("scene/Page/Page.ts", Page);
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
