(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"index_atlas_", frames: [[153,102,61,46],[66,102,85,34],[0,0,821,100],[978,90,34,28],[271,102,70,37],[957,0,67,88],[0,102,64,49],[216,102,53,52],[823,0,132,78],[823,80,82,49],[907,90,69,57]]}
];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != null && cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != null && cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur != null && cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
// symbols:



(lib.largemobilegetinspiredcranberries = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.largemobilegetinspiredgreens = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.largemobilegetinspiredtable = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.largemobilegravy = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.largemobilegreenberries = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.largemobilemeat = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.largemobilepie = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.largemobilepotatoes = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.largemobileturkey = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.largemobileutensils = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.orangefruitlargemobile = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.turkeygetinspired = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.largemobileturkey();
	this.instance.parent = this;
	this.instance.setTransform(-66,-39);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.turkeygetinspired, new cjs.Rectangle(-66,-39,132,78), null);


(lib.recipes = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgHA0IgKgBIgEABIgDACIgCgBIgCgCQgDgCgDgJQgDgIAAgIQAAgDACgBQAAgBABgBQAAAAAAAAQABgBABAAQAAAAABAAQAFAAAEAIIAEAGQADAEAGADQAFACAFAAQAHAAAEgDQAEgEAAgFQAAgJgRgIIgFgDQgQgIgGgFQgFgHAAgKQAAgNAJgIQAJgJAPABIAGAAIAHABIAFgCIADAAQAFAAAFAIQAFAIAAAIQAAAEgCACQgBABAAAAQAAAAgBABQAAAAgBAAQgBAAAAAAQgDAAgCgCIgFgHQgEgGgEgDQgEgCgGAAQgFAAgEADQgDADAAAGQAAAFADADQAEADAMAHIABAAQAcANAAARQAAAOgKAKQgLAKgRAAg");
	this.shape.setTransform(32.4,2.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AggAmQgPgPAAgWQAAgWAPgQQAPgPAWAAQAUAAALALQAMALAAATQAAAHgCACQgCABgIAAIgmAAQgDAAgCgBQAAgBgBAAQAAgBAAAAQgBgBAAAAQAAgBAAgBQAAAAAAgBQAAgBABAAQAAAAAAgBQABAAAAAAQACgCADAAIAVAAIAFgBQAAAAAAAAQABgBAAAAQAAAAAAgBQAAAAAAgBQAAgKgGgHQgHgGgJAAQgMAAgGALQgGAKAAAPQAAAPAJAMQAIALAMAAQAHAAAFgBQAGgCAEgEIAEgDQAFgEADAAQABAAAAAAQABAAAAAAQABABAAAAQAAAAABABQAAAAAAAAQABABAAAAQAAABAAAAQAAABAAAAQAAADgCADIgHAHQgJAHgIAEQgIADgKAAQgVAAgOgPg");
	this.shape_1.setTransform(22.6,2.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgxBFQgFgCAAgEQAAgDAFgCIAFgDQACgBABgJIAAghIAAgPQAAgdgBgHQAAgJgDAAIgFgDQgGgBAAgEQAAgBAAAAQAAgBABAAQAAgBAAAAQABAAAAgBIAGgDIAPgFIAKgCQAAAAABABQABAAAAAAQABAAAAAAQABABAAAAQABABAAAEIAAAFIAAACIABABIAEgDIAEgDQAGgFAFgCQAGgCAGAAQASAAANAOQAMANAAAXQAAAXgOAPQgOAQgUABQgJgBgCgCQgEgDAAgDQAAgBAAgBQAAAAABgBQAAAAAAgBQAAAAABAAQAAgBABAAQAAAAABgBQAAAAABAAQAAAAABAAIACAAIAEABQALAAAHgKQAHgJAAgPQAAgRgIgLQgHgLgMAAQgJABgHAFQgGAGAAAPIAABBIABAKQAAAEACABQABABAFACIAEABIACACIABADQAAADgGACQgGACgPAAQgPAAgFgCg");
	this.shape_2.setTransform(10.7,4.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgRBJQgFgCgBgFQAAgDAGgCIADgBQACgBABgEIABgLIAAgHIAAgIIAAgLQAAgQgBgDQAAgFgDgBIgFgCQgFgCAAgEQAAAAAAgBQAAAAAAgBQAAAAABgBQAAAAAAgBIAHgDIAPgFIAKgCQAAAAABAAQABAAAAABQABAAAAAAQAAAAAAABQACACAAAFIAAAGIgBAEIAAAZIAAABIgBAZIABAOQABAEACABIAFABQAEACAAAEQAAAEgEACQgFABgNAAQgQAAgEgBgAgMgyQgEgEAAgFQAAgGAEgEQAGgEAGAAQAGAAAFADQADAEAAAGQABAFgFAEQgFAEgGAAQgHAAgEgDg");
	this.shape_3.setTransform(1.9,0.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgfAmQgPgPAAgWQAAgWAQgQQAPgPAWAAQAQAAAMAIQAMAKAAALQAAAEgDADQgEAEgFAAQgFAAgDgDQgDgCgEgJQgDgHgEgDQgEgCgGAAQgLAAgGAIQgHAJAAAPQAAASAJALQAKALANAAIAKgBQAFgBADgDIAEgDQAGgEADAAIADABIABADQAAADgCAEQgCAEgDACQgIAHgJAEQgIADgLAAQgUAAgOgPg");
	this.shape_4.setTransform(-6.3,2.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AggAmQgPgPAAgWQAAgWAPgQQAPgPAWAAQAUAAALALQAMALAAATQAAAHgCACQgCABgIAAIgmAAQgDAAgCgBQAAgBgBAAQAAgBAAAAQAAgBgBAAQAAgBAAgBQAAAAAAgBQABgBAAAAQAAAAAAgBQABAAAAAAQACgCADAAIAVAAIAFgBQAAAAAAAAQABgBAAAAQAAAAAAgBQAAAAAAgBQAAgKgGgHQgHgGgJAAQgMAAgGALQgGAKAAAPQAAAPAJAMQAIALAMAAQAHAAAFgBQAGgCAEgEIAEgDQAFgEADAAQABAAAAAAQABAAAAAAQABABAAAAQAAAAABABQAAAAAAAAQABABAAAAQAAABAAAAQAAABAAAAQAAADgCADIgHAHQgJAHgIAEQgIADgKAAQgVAAgOgPg");
	this.shape_5.setTransform(-17.1,2.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAWAzQgKghgHgGQgGgGgLAAQgIAAAAgGQAAgGAHgBQAQABAIgHQAIgHAAgOQAAgNgIgHQgIgHgPAAIgLABQgDACgBADIgBAJIAAATIAAAtIAAAfQABAGACACIAEACQAHACAAAEQAAAFgGABQgGACgQAAQgQAAgFgCQgGgBAAgFQAAgEAGgCIAFgDQACgBABgMIABgrIgBgmQgBgPgBgCQgBgCgGgCQgFgCAAgEQAAgEADgCQADgCAHAAIAWAAIAUAAIAQAAQAWgBAMAKQALAKAAARQAAAOgHAKQgIAKgOADIAAABQALACAGAHQAGAGAFARIADALQAEAPAGAAIACAAIAEAAQABAAAAAAQABAAAAAAQABAAAAABQAAAAABABQAAAAAAAAQABABAAAAQAAABAAAAQAAABAAAAQAAAEgGADQgFADgKAAQgUAAgHgXg");
	this.shape_6.setTransform(-29.7,0.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.recipes, new cjs.Rectangle(-39.2,-14,78.5,28.2), null);


(lib.orangefruit = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.orangefruitlargemobile();
	this.instance.parent = this;
	this.instance.setTransform(-28.5,-28);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.orangefruit, new cjs.Rectangle(-28.5,-28,69,57), null);


(lib.makedeliciousmemories = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgRAmQgJgEgFgFIgBgCIAAgBIAAgDIACgDIADgBIADgBIAEABIAFADIAGAEQAFABAEAAIAFAAIAHgCIAEgEQACgCABgEQAAgDgDgBQgCgCgDgBIgIgCIgJgCIgJgCQgEgBgEgBQgEgDgCgDQgDgEABgGQAAgHADgEQADgEAEgDQAFgDAGgCIALgBIAHAAIAIACIAHAEIAHAEIAAABIAAACIAAADIgDACIgDABIgDABIgCAAIgJgFQgFgCgFAAIgFAAIgFACQgCAAgCADQgCACAAADQAAAFAEABIAJADIALACIANACQAFACAEAEQAEAFgBAHQAAAHgCAGQgEAEgFAEQgFADgGABIgLACQgIAAgJgDg");
	this.shape.setTransform(81.5,-0.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgaAnIgCgBIgCgCIAAhHQAAgBAAAAQAAAAAAgBQABAAAAAAQAAAAABAAIACgBIA2AAIACABIABADIAAACIAAADIgBADIgCACIgoAAIgCABIgBACIAAALIABACIADABIAZAAIACABIAAADIABADIAAACQAAADgDABIgZAAIgDABIgBADIAAAMIAAADIAEABIAnAAQADABAAADIAAADIAAADIgCACIgCABg");
	this.shape_1.setTransform(74,-0.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgCAoQgBAAAAAAQgBAAgBAAQAAAAgBgBQAAAAgBgBIAAhLIADgCIACgBIACAAIADAAQADAAABADIAABLIgBACIgDAAIgDABg");
	this.shape_2.setTransform(67.8,-0.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAUAoIgCAAIgCgBIgBgBIgNgVIgCgCIgDgBIgKAAIgDABQAAAAAAAAQgBAAAAABQAAAAAAABQAAAAAAAAIAAATQAAABAAAAQAAAAAAABQAAAAgBAAQAAAAAAABIgDABIgDAAIgDAAIgDgBQgBAAAAgBQAAAAAAAAQgBgBAAAAQAAgBAAgBIABhHIABgCIACgBIAhAAQAGAAAFACQAFACAEADQADADADAGQACAEAAAHQAAAGgDAEIgFAHIgGADQAAABgBAAQAAABgBAAQAAABAAAAQAAAAAAABIAAACIADAEIAEAGIAEAHIACADIgBADIgCACIgDABIgDAAgAgQgZQAAABAAAAQgBAAAAABQAAAAAAABQAAAAAAABIAAASQAAAAAAAAQAAABAAAAQAAABABAAQAAAAAAAAIAEABIAPAAIAGAAIAFgCQACgCABgDIABgFQAAgHgEgDIgFgDIgGgBIgPAAIgEABg");
	this.shape_3.setTransform(62,-0.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgHAoIgIgCIgIgEIgGgFQgGgFgDgIIgCgIIgBgIIABgHIACgIQADgHAGgGIAGgFIAIgEIAIgCIAHgBIAJABIAHACQAIADAGAGQAGAGADAHQADAHAAAIIgBAIIgCAIQgDAIgGAFQgGAGgIADIgHACIgJABIgHgBgAgJgYQgFACgEAEQgEADgCAFQgCAFAAAFQAAAGACAFQACAFAEADIAJAGQAFACAEAAQAFAAAFgCQAFgCAEgEQADgDADgFQACgFAAgGQAAgFgCgFQgDgFgDgDQgEgEgFgCQgFgCgFAAQgEAAgFACg");
	this.shape_4.setTransform(52.7,-0.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAaAnIgDAAQgBAAAAgBQgBAAAAAAQAAgBAAAAQgBgBAAAAIAAgjIAAgBIgCgBQAAAAgBAAQAAAAAAAAQgBABAAAAQAAAAAAAAIgNAUQAAAAgBABQAAAAAAABQgBAAAAAAQgBAAAAAAIgCgBIgCgBIgLgUQAAAAAAAAQAAAAgBgBQAAAAAAAAQgBAAAAAAIgCABIAAABIAAAjQgBABAAAAQAAABgBAAQAAAAgBABQAAAAgBAAIgFAAIgBAAIgCAAIgCgBIgBgCIAAhHQAAgBABAAQAAgBAAAAQABAAAAgBQAAAAABAAIAEAAIADAAIADACIASAfQABADACAAIACgBIADgCIASgeQACgEAEAAIAEABQAAAAAAAAQABAAAAABQAAAAAAAAQABAAAAABIAABIIgBACIgCABIgDAAg");
	this.shape_5.setTransform(43.4,-0.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgaAnIgCgBIgCgCIAAhHQAAgBAAAAQAAAAAAgBQABAAAAAAQAAAAABAAIACgBIA2AAIACABIABADIAAACIAAADIgBADIgCACIgoAAIgCABIgBACIAAALIABACIADABIAZAAIACABIAAADIABADIAAACQAAADgDABIgZAAIgDABIgBADIAAAMIAAADIAEABIAnAAQADABAAADIAAADIAAADIgCACIgCABg");
	this.shape_6.setTransform(35.3,-0.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAaAnIgDAAQgBAAAAgBQgBAAAAAAQAAgBAAAAQAAgBAAAAIAAgjIgBgBIgCgBQAAAAgBAAQAAAAAAAAQAAABgBAAQAAAAAAAAIgNAUQAAAAgBABQAAAAAAABQgBAAAAAAQgBAAAAAAIgCgBIgCgBIgKgUQgBAAAAAAQAAAAgBgBQAAAAAAAAQgBAAAAAAIgCABIgBABIAAAjQAAABAAAAQAAABgBAAQAAAAgBABQAAAAgBAAIgFAAIgBAAIgCAAIgCgBIgBgCIAAhHQAAgBABAAQAAgBAAAAQABAAAAgBQAAAAABAAIAEAAIAEAAIACACIASAfQABADACAAIADgBIACgCIASgeQACgEAEAAIAEABQAAAAAAAAQABAAAAABQAAAAAAAAQABAAAAABIAABIIgBACIgCABIgDAAg");
	this.shape_7.setTransform(26.4,-0.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgRAmQgJgEgFgFIgBgCIAAgBIAAgDIADgDIACgBIADgBIAEABIAFADIAGAEQAFABAEAAIAGAAIAGgCIAEgEQACgCAAgEQAAgDgCgBQgCgCgEgBIgHgCIgJgCIgJgCQgEgBgEgBQgEgDgCgDQgCgEAAgGQgBgHAEgEQADgEAFgDQAEgDAGgCIAKgBIAIAAIAIACIAHAEIAHAEIAAABIAAACIAAADIgDACIgDABIgDABIgCAAIgJgFQgFgCgFAAIgFAAIgFACQgDAAgBADQgCACAAADQAAAFAEABIAJADIALACIANACQAFACAEAEQADAFAAAHQAAAHgCAGQgEAEgFAEQgFADgGABIgLACQgJAAgIgDg");
	this.shape_8.setTransform(14.2,-0.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgMAmQgHgCgEgFQgFgEgDgHIgCgGIgBgHIAAgVIABgWIABgCIACgBIADAAIADAAIADAAQAAAAABABQAAAAAAABQABAAAAAAQAAABAAAAIAAAoIABAJQABAEADADQADADAEACQADACAEAAQAFAAAEgCQAEgCACgDQADgDABgEIACgJIAAgoQAAAAAAgBQAAAAAAgBQAAAAABAAQAAgBAAAAIAEgBIADAAIADAAIACACIABACIAAArIgBAHIgCAGQgDAHgEAEQgFAFgGACQgGADgIAAQgGAAgGgDg");
	this.shape_9.setTransform(5.7,-0.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgHAoIgIgCIgIgEIgGgFQgGgFgDgIIgCgIIgBgIIABgHIACgIQADgHAGgGIAGgFIAIgEIAIgCIAHgBIAJABIAHACQAIADAGAGQAGAGADAHQADAHAAAIIgBAIIgCAIQgDAIgGAFQgGAGgIADIgHACIgJABIgHgBgAgJgYQgFACgEAEQgEADgCAFQgCAFAAAFQAAAGACAFQACAFAEADIAJAGQAFACAEAAQAFAAAFgCQAFgCAEgEQADgDADgFQACgFAAgGQAAgFgCgFQgDgFgDgDQgEgEgFgCQgFgCgFAAQgEAAgFACg");
	this.shape_10.setTransform(-3.6,-0.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgCAoQgBAAAAAAQgBAAgBAAQAAAAgBgBQAAAAAAgBIAAhLIABgCIADgBIADAAIACAAQADAAABADIAABLIgCACIgCAAIgDABg");
	this.shape_11.setTransform(-10.2,-0.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgDApIgHgDIgIgEIgGgFIgFgFIgEgHQgDgIAAgJQAAgHADgIIAEgHIAFgGQAGgGAIgDIAHgCIAIgBIAJABIAJADIAIAFQADACADAEIAAABIgBAEIgDACIgCACIgDABQgBAAAAAAQAAAAgBAAQAAgBAAAAQgBAAAAgBIgEgDIgHgEQgDgCgGAAQgFAAgEACQgFADgEADQgEAEgCAFQgCAFAAAEQAAAGACAEQACAGAEADQAEAEAFACQAEADAFgBQAGABAFgDQAFgDAEgEIADgBIADABIADACIACADIABACIAAABIgHAHIgHAEIgJADIgJABIgIAAg");
	this.shape_12.setTransform(-16.5,-0.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgCAoQgBAAAAAAQgBAAgBAAQAAAAgBgBQAAAAAAgBIAAhLIACgCIACgBIACAAIADAAQADAAABADIAABLIgCACIgCAAIgDABg");
	this.shape_13.setTransform(-22.6,-0.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgbAoIgCgBIgBgCIAAhIIABgDIACgBIADAAIADAAIADAAIADAEIAAA3IAAACIABACQACADADAAIAjAAIADAAIABACIABACIAAADIgBAEQgBAAAAABQAAAAgBAAQAAABgBAAQAAAAgBAAg");
	this.shape_14.setTransform(-28,-0.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgaAnIgDgBIgBgCIAAhHQAAgBAAAAQAAAAAAgBQABAAAAAAQAAAAAAAAIADgBIA2AAIACABIABADIAAACIAAADIgBADIgCACIgoAAIgCABIgBACIAAALIABACIADABIAZAAIACABIAAADIABADIAAACQAAADgDABIgZAAIgDABIgBADIAAAMIABADIADABIAnAAQADABAAADIAAADIAAADIgBACIgDABg");
	this.shape_15.setTransform(-35.7,-0.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AggAnIgDAAQgBAAAAgBQAAAAAAAAQgBgBAAAAQAAAAAAgBIAAhGQAAgBAAAAQAAgBABAAQAAAAAAgBQAAAAABAAIADgBIAdAAIAHABIAIACQAIACAFAGQAGAFADAHQACADABAFIABAHQAAAJgEAHIgEAHIgFAGIgGAEIgHAEQgIACgHAAgAgVgXIgBADIAAAqQAAABAAAAQAAAAABABQAAAAAAAAQAAAAABABIACABIAPAAQAEAAAFgCIAJgFIAGgIQACgFAAgGQAAgFgCgEQgCgFgEgDQgEgEgFgCQgFgBgEAAIgOAAIgEABg");
	this.shape_16.setTransform(-44.4,-0.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgaAnIgDgBIgBgCIAAhHQAAgBAAAAQAAAAAAgBQABAAAAAAQAAAAAAAAIADgBIA2AAIACABIAAADIABACIAAADIgBADIgCACIgoAAIgCABIgBACIAAALIABACIACABIAaAAIACABIAAADIABADIAAACQAAABAAAAQAAABgBAAQAAABgBAAQAAABgBAAIgZAAIgDABIgBADIAAAMIABADIACABIAoAAQACABAAADIAAADIAAADIAAACIgCABg");
	this.shape_17.setTransform(-56.6,-0.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AASAoIgDgBIgTgfIgCgBIgDgBIgEABQgBABAAAAQgBAAAAABQAAAAgBABQAAAAAAAAIAAAZIgBADIgDABIgDABIgDAAQgEAAAAgFIAAhJIACgBIACgBIADAAIACAAQAEAAABACIAAAaQAAAAAAAAQAAABABAAQAAAAAAAAQAAABABAAIADABIAEgCIAVgbIABAAIACAAIADAAIACACIADACIABACIgBACIgTAWIgBACIAAACIAAACIABACIAZAhIAAABIAAABIgBACIgDACIgDACIgCAAg");
	this.shape_18.setTransform(-64.5,-0.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AAdAnIgEAAQgBAAAAAAQgBgBAAAAQgBAAAAgBQAAAAAAgBIgFgKIgBgCIgCgBIgaAAIgBABIgBABIgCAAIAAABIgFAKIgBACIgCABIgDAAIgCAAIgCAAIgCAAIgCgBIgBgBIAghKQAAAAABAAQAAgBAAAAQAAAAABAAQAAAAAAAAIACgBIADAAIADACIAfBJIAAABIgBACIgCAAIgDABgAgBgLIgBACIgBAEIgCAFIgCADIgCAEIAAABIAAACIACABIAPAAIACgBIAAgCIgBgDIgDgFIgCgHIgCgEIgCgBIAAAAg");
	this.shape_19.setTransform(-72.8,-0.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AAaAnIgDAAQgBAAAAgBQgBAAAAAAQAAgBAAAAQgBgBAAAAIAAgjIAAgBIgCgBQAAAAgBAAQAAAAAAAAQgBABAAAAQAAAAAAAAIgNAUQAAAAgBABQAAAAAAABQgBAAAAAAQgBAAAAAAIgCgBIgCgBIgLgUQAAAAAAAAQAAAAgBgBQAAAAAAAAQgBAAAAAAIgCABIAAABIAAAjQgBABAAAAQAAABgBAAQAAAAgBABQAAAAgBAAIgFAAIgBAAIgCAAIgCgBIgBgCIAAhHQAAgBABAAQAAgBAAAAQABAAAAgBQAAAAABAAIAEAAIADAAIADACIASAfQABADACAAIACgBIADgCIASgeQACgEAEAAIAEABQAAAAAAAAQABAAAAABQAAAAAAAAQABAAAAABIAABIIgBACIgCABIgDAAg");
	this.shape_20.setTransform(-81.3,-0.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.makedeliciousmemories, new cjs.Rectangle(-87.7,-7.7,175.5,15.5), null);


(lib.mainbutton = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#006F46").s().p("EgQFAzRMAAAhmhMAgLAAAMAAABmhg");
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.largemobilepotatoes_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.largemobilepotatoes();
	this.instance.parent = this;
	this.instance.setTransform(-26,-26.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.largemobilepotatoes_1, new cjs.Rectangle(-26,-26.5,53,52), null);


(lib.holidaytips = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgKAfIgCgCIACgEIACgDIAGgMIACgHIgBgCIgDgBQgFgCgDgEQgCgEAAgFQAAgHAEgFQAEgEAGAAQAGAAAFAGQAEAGAAAJQAAAHgCAGQgDAIgHAKIgEAIQgBABAAABQgBAAgBAAQAAABAAAAQgBAAAAAAIgFgBg");
	this.shape.setTransform(59.6,7.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgHA0IgKgBIgEABIgDACIgCgBIgCgCQgDgCgDgJQgDgIAAgIQAAgDACgBQAAgBABgBQAAAAAAAAQABgBABAAQAAAAABAAQAFAAAEAIIAEAGQADAEAGADQAFACAFAAQAHAAAEgDQAEgEAAgFQAAgJgRgIIgFgDQgQgIgGgFQgFgHAAgKQAAgNAJgIQAJgJAPABIAGAAIAHABIAFgCIADAAQAFAAAFAIQAFAIAAAIQAAAEgCACQgBABAAAAQAAAAgBABQAAAAgBAAQgBAAAAAAQgDAAgCgCIgFgHQgEgGgEgDQgEgCgGAAQgFAAgEADQgDADAAAGQAAAFADADQAEADAMAHIABAAQAcANAAARQAAAOgKAKQgLAKgRAAg");
	this.shape_1.setTransform(51.9,2.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgxBFQgFgCAAgEQAAgDAFgCIAFgDQACgBABgJIAAghIAAgPQAAgdgBgHQAAgJgDAAIgFgDQgGgBAAgEQAAgBAAAAQAAgBABAAQAAgBAAAAQABAAAAgBIAGgDIAPgFIAKgCQAAAAABABQABAAAAAAQABAAAAAAQABABAAAAQABABAAAEIAAAFIAAACIABABIAEgDIAEgDQAGgFAFgCQAGgCAGAAQASAAANAOQAMANAAAXQAAAXgOAPQgOAQgUABQgJgBgCgCQgEgDAAgDQAAgBAAgBQAAAAABgBQAAAAAAgBQAAAAABAAQAAgBABAAQAAAAABgBQAAAAABAAQABAAAAAAIACAAIAEABQALAAAHgKQAHgJAAgPQAAgRgIgLQgHgLgMAAQgJABgHAFQgGAGAAAPIAABBIABAKQAAAEACABQABABAFACIAEABIACACIABADQAAADgGACQgGACgPAAQgPAAgFgCg");
	this.shape_2.setTransform(41.1,4.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgRBJQgFgCgBgFQAAgDAGgCIACgBQADgBABgEIABgLIAAgHIAAgIIAAgLQAAgQgBgDQgBgFgCgBIgEgCQgHgCAAgEQAAAAABgBQAAAAAAgBQAAAAABgBQAAAAAAgBIAHgDIAPgFIAKgCQAAAAABAAQAAAAABABQAAAAABAAQAAAAAAABQACACAAAFIAAAGIgBAEIAAAZIAAABIgBAZIABAOQACAEACABIADABQAFACABAEQgBAEgFACQgEABgOAAQgOAAgFgBgAgMgyQgEgEAAgFQAAgGAEgEQAFgEAHAAQAGAAAEADQAEAEAAAGQABAFgFAEQgFAEgGAAQgGAAgFgDg");
	this.shape_3.setTransform(32.3,0.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgUBIQgGgBAAgFQAAgEAFgCQAGgCABgCQABgCABgQIAAgwIAAgbIgBgPQAAgBAAgBQAAgBgBAAQAAgBAAAAQgBAAAAgBIgGAAIgEAAQgHAAgEABQgEACgDAEIgDAHIgDAHIgDADIgEABQgDAAgBgCQgCgDAAgGQAAgOAEgIQADgIAFAAIABAAIAUABIA7AAIAVgBIABAAQAFAAADAIQADAIAAAOQAAAGgCADQgBACgDAAIgEgBIgDgDIgDgHIgDgHQgDgEgEgCQgEgBgHAAIgEAAIgGAAQAAABAAAAQgBAAAAABQAAAAAAABQgBABAAABIgBAPIAAAbIABAwQAAAQABACQABACAGACQAFACAAAEQAAAFgFABQgGACgQAAQgPAAgFgCg");
	this.shape_4.setTransform(22.6,0.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AguBDQgFgEAAgGQAAgGAEgDQADgEAGAAIAEABIADACIADAEQACAEACAAQAGAAAFgHQAFgIAAgIQAAgJgHgQIgBgCIgRgjIgJgUQgBgDgHgDIAAAAQgDgBgBgCQAAAAgBgBQAAAAAAAAQAAgBAAAAQAAgBAAAAQgBgFAGgCQAFgBAPAAQAPAAAFABQAFACAAAEIgBADIgCACIgDACQgBAAgBABQAAAAgBAAQAAABgBAAQAAAAAAABIACAIIAIAUIAHATQADAFACAAQAAAAADgFIAHgQIAHgUIADgKQgBgDgFgDQgGgDAAgDQAAgDAFgCQAEgBAMAAQAMAAAFABQADACAAAEQABAEgGABIgFACQgFADgGARIgDAIIgOAgQgQAqgKANQgLAMgPAAQgHAAgFgEg");
	this.shape_5.setTransform(5,4.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AASAwIgFgFIgFABQgMAJgMAAQgPAAgJgJQgJgJAAgNQAAgRALgHQAMgKAVAAQAFAAACACQADABAAAEQAAAFgGAAQgKAAgGAFQgHAFAAAIQAAAIAGAGQAFAEAJAAQAJABAEgFQAEgFAAgKIAAgmQAAgJgDgFQgEgEgHAAQgFAAgEACQgEACgEAFIgCACQgGAIgHAAQgEAAgDgCQgCgDAAgEQAAgKAMgHQALgGATAAQAKAAAIADQAJACAEAHQADADABAHQACAGAAAPIAAAfIABAJQAAABAAAAQABABAAAAQAAAAABABQAAAAABAAIADABQAGACAAADQAAAFgHAEQgGAEgKAAQgEAAgFgFg");
	this.shape_6.setTransform(-5.6,2.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAUBKQgBgCAAgEIAAgEIAAgDIgBAAIgDACIgFAEQgGAEgEACQgGACgHAAQgTAAgMgOQgMgNAAgWQAAgZAOgPQAOgPAWAAIAGAAQADABACADQABAAAAABQAAABAAAAQABABAAAAQAAABAAAAQAAAGgHAAIgCAAIgDAAQgLAAgHAJQgHAIAAAQQAAARAIALQAHALAMAAQAJAAAGgGQAGgGAAgMIAAgbIAAguQAAgHgBgDQgBgDgEgBIgDgBQgGgCAAgDQAAgDACgCIAKgFIAMgDIAJgBQAEAAABABQACADAAAEIAAAGIgCA9IABArQABAKABABIAHACQAGACAAADQAAAEgPAGIgKACIgIABQgBAAAAAAQgBAAAAAAQgBgBAAAAQAAAAgBAAg");
	this.shape_7.setTransform(-17.1,0.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgRBJQgFgCAAgFQAAgDAEgCIAEgBQACgBABgEIABgLIAAgHIAAgIIAAgLQAAgQgBgDQAAgFgCgBIgGgCQgFgCAAgEQAAAAAAgBQAAAAAAgBQAAAAABgBQAAAAABgBIAGgDIAPgFIAJgCQABAAABAAQABAAAAABQABAAAAAAQAAAAABABQABACAAAFIAAAGIgBAEIAAAZIAAABIAAAZIAAAOQABAEACABIAFABQAEACAAAEQAAAEgEACQgGABgMAAQgQAAgEgBgAgMgyQgEgEAAgFQAAgGAEgEQAFgEAHAAQAGAAAFADQADAEAAAGQAAAFgEAEQgFAEgGAAQgHAAgEgDg");
	this.shape_8.setTransform(-26.5,0.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgRBJQgEgCAAgEQgBgDAFgCIAFgDQABgCABgGIABgUIAAgQIAAgSIAAgIQAAgZgBgIQgBgHgCgBIgGgDQgHgBAAgEQAAgBABAAQAAgBAAAAQAAgBABAAQAAgBABAAIAJgEIANgEIAKgCQABAAAAAAQABAAAAABQABAAAAAAQABABAAAAQABACABAFIgBAIIgBBIIABAjQAAAHACACIAGADQAEACAAAEQAAAEgEABQgGACgNAAQgOAAgGgCg");
	this.shape_9.setTransform(-32.6,0);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgkAmQgPgPAAgXQAAgWAQgPQAPgPAWAAQAWAAAOAOQAOAOAAAXQAAAWgPAQQgQAQgVAAQgWAAgOgPgAgTgdQgGAHAAAOQAAATAJAOQAIANAMAAQAKABAGgJQAGgIAAgOQAAgTgJgOQgIgNgLAAQgKAAgHAJg");
	this.shape_10.setTransform(-41.2,2.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAXBHQgGgBAAgFQAAgEAGgCIAFgDQACAAAAgHIABgYIAAgOIgBgEQgBgCgFgBIgYAAIgVAAQgFAAgCACIgBADIgBAHIAAAJIABAYQABAHABAAIAFADQAGACAAAEQAAAFgGABQgFACgQAAQgQAAgGgCQgGgBAAgFQAAgEAHgCIAEgDQACgBABgNIABgqIgBgmQAAgQgCgBQgBgCgFgCQgGgCAAgEQAAgFAFgBQAFgCASAAQASAAAEACQAFABAAAFQAAAEgGADIgFACQgCABAAAGIgBAeQAAAEAEACQAEABAOAAIAIAAIAVAAQAHgBACgCIABgCIAAgDIAAgFIgBgZQAAgFgCgBIgFgCQgGgDAAgEQAAgFAFgBQAFgCARAAQATABAEABQAFABAAAFQAAAEgHADIgEACQgCABgBAOIgBApIABAmQABAQABABQABACAFADQAGABAAAEQAAAFgGABQgGACgQAAQgQAAgFgCg");
	this.shape_11.setTransform(-54.8,0.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.holidaytips, new cjs.Rectangle(-64.4,-14,129,28.2), null);


(lib.greyrectangle = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#999999").ss(1,1,1).p("A4rnkMAxXAAAIAAPJMgxXAAAg");
	this.shape.setTransform(0,0,1.009,1.021);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.greyrectangle, new cjs.Rectangle(-160.5,-50.5,321,101), null);


(lib.greenberriesgetinspired = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.largemobilegreenberries();
	this.instance.parent = this;
	this.instance.setTransform(-35,-18.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.greenberriesgetinspired, new cjs.Rectangle(-35,-18.5,70,37), null);


(lib.getinspiredvideo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgfAkIAAhHIAZAAQAGAAAHACQAHACAFAEQAGAEADAHQACAEABAEIABAIIgBAIQgBAEgCAEIgEAGIgFAFQgFAEgHADIgNACgAgVAbIANAAQAGAAAFgBQAFgDAEgDQAEgDADgGIABgFIABgGIgBgGIgBgFQgDgFgEgDQgEgEgFgCQgFgCgGAAIgNAAg");
	this.shape.setTransform(30.1,0.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgXAkIAAhHIAtAAIAAAIIgjAAIAAAXIAhAAIAAAHIghAAIAAAYIAlAAIAAAJg");
	this.shape_1.setTransform(23.2,0.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AANAkIgRggIgLAAIAAAgIgKAAIAAhHIAXAAIAJABQAFABADADQAEACACADQACAEAAAGQAAAHgFAGQgCACgEAAIgHADIAVAhgAgPgDIAMAAIAFgBIAGgCQACgBABgDQACgCAAgDQAAgDgCgCQAAgBAAgBQgBAAAAgBQgBAAAAAAQgBgBAAAAIgFgCIgGgBIgMAAg");
	this.shape_2.setTransform(17.2,0.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgEAkIAAhHIAJAAIAABHg");
	this.shape_3.setTransform(12.4,0.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgXAkIAAhHIAWAAIAKABQAEABAEADQADACACAEQACADAAAGQAAAFgCAEQgCAEgEACQgDACgFABQgFACgEAAIgMAAIAAAfgAgNgDIALAAIAGgBIAFgCIADgEQACgCAAgDQAAgDgCgCQAAgBAAgBQgBAAAAgBQgBAAAAAAQgBgBAAAAIgFgCIgGgBIgLAAg");
	this.shape_4.setTransform(8.2,0.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgNAjQgGgDgEgFIAHgHQADAEAEADQAFACAEAAIAFgBIAEgCIAEgDIABgGIgBgGIgEgEIgGgCIgFgCIgHgDIgGgCQgDgCgBgEQgCgEAAgFQAAgFACgEQACgEAEgCIAIgEIAIgBIAGAAIAGACQAFADAEADIgIAHQgCgDgDgCQgEgBgFAAIgEAAIgEACIgDAEQgCACAAADIABAFIAEADIAEADIAFACIAHADIAHACIAFAGQACAEAAAFQAAAGgCAEQgCAEgDADIgIADQgFACgEAAQgHAAgGgDg");
	this.shape_5.setTransform(1.9,0.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AARAkIgkg6IAAA6IgKAAIAAhHIAMAAIAlA5IAAAAIAAg5IALAAIAABHg");
	this.shape_6.setTransform(-4.8,0.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgEAkIAAhHIAJAAIAABHg");
	this.shape_7.setTransform(-10.1,0.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgEAkIAAg/IgXAAIAAgIIA3AAIAAAIIgXAAIAAA/g");
	this.shape_8.setTransform(-16.9,0.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgXAkIAAhHIAtAAIAAAIIgjAAIAAAXIAhAAIAAAHIghAAIAAAYIAlAAIAAAJg");
	this.shape_9.setTransform(-22.7,0.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgJAjQgHgDgFgFQgFgFgDgHQgDgHAAgIQAAgHADgIQADgHAFgFIAGgEIAGgEQAIgCAGAAIAIAAIAIACQAHADAEAEIgHAIQgDgEgFgCIgFgCIgHAAQgFAAgFACQgFADgEAEQgDAEgCAFQgCAFAAAFQAAAGACAFQACAFADAEQAEAFAFABQAFADAGAAIAJgBIAIgDIAAgUIgQAAIAAgHIAaAAIAAAiQgGADgGABIgQACQgHAAgHgDg");
	this.shape_10.setTransform(-30,0.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.getinspiredvideo, new cjs.Rectangle(-35.9,-8.2,71.8,16.6), null);


(lib.getinspiredutensils = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.largemobileutensils();
	this.instance.parent = this;
	this.instance.setTransform(-41,-24.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.getinspiredutensils, new cjs.Rectangle(-41,-24.5,82,49), null);


(lib.getinspiredtable = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.largemobilegetinspiredtable();
	this.instance.parent = this;
	this.instance.setTransform(-410.5,-50);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.getinspiredtable, new cjs.Rectangle(-410.5,-50,821,100), null);


(lib.getinspiredpie = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.largemobilepie();
	this.instance.parent = this;
	this.instance.setTransform(-32,-24.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.getinspiredpie, new cjs.Rectangle(-32,-24.5,64,49), null);


(lib.getinspiredmeat = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.largemobilemeat();
	this.instance.parent = this;
	this.instance.setTransform(-33.5,-44);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.getinspiredmeat, new cjs.Rectangle(-33.5,-44,67,88), null);


(lib.getinspiredgreensuse = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.largemobilegetinspiredgreens();
	this.instance.parent = this;
	this.instance.setTransform(-40,-14.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.getinspiredgreensuse, new cjs.Rectangle(-40,-14.5,85,34), null);


(lib.getinspiredgravy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.largemobilegravy();
	this.instance.parent = this;
	this.instance.setTransform(-17,-14);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.getinspiredgravy, new cjs.Rectangle(-17,-14,34,28), null);


(lib.getinspired = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D63900").s().p("AgeAjIAAhFIAYAAQAGAAAGACQAHACAGAEQAFAEAEAHIACAIIABAHIgBAJIgCAGIgFAHIgEAFQgGAEgHACIgMACgAgUAbIAMAAQAGgBAFgCQAFgBAEgDQAEgEACgFIACgFIABgGIgBgFIgCgGQgCgFgEgDIgJgFQgFgBgGAAIgMAAg");
	this.shape.setTransform(30.2,0.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D63900").s().p("AgWAjIAAhFIAsAAIAAAJIgiAAIAAAUIAgAAIAAAIIggAAIAAAYIAjAAIAAAIg");
	this.shape_1.setTransform(23.3,0.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#D63900").s().p("AANAjIgRgfIgKAAIAAAfIgKAAIAAhFIAWAAIAJABQAFABADACQAEADACAEQABADAAAGQAAAHgEAFIgGADIgHACIAUAggAgOgEIALAAIAGAAIAEgCIAFgEIAAgEIAAgGIgEgDIgFgCIgFgBIgMAAg");
	this.shape_2.setTransform(17.2,0.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#D63900").s().p("AgEAjIAAhFIAJAAIAABFg");
	this.shape_3.setTransform(12.4,0.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#D63900").s().p("AgWAjIAAhFIAVAAIAJABQAFABADACQAEADABAEQACAEAAAFQAAAFgCAEQgCADgDACQgEACgEABIgJABIgLAAIAAAfgAgMgDIAKAAIAGgBIAFgBIADgEIABgFIgBgGIgDgDIgFgCIgGgBIgKAAg");
	this.shape_4.setTransform(8.1,0.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#D63900").s().p("AgMAiQgHgCgEgFIAIgHQADAEAEACQAEACAEABIAFgBIAEgDIADgDQACgDAAgDQAAgDgCgCIgDgEIgGgCIgFgCIgHgCIgFgEIgFgEQgBgEAAgFQAAgFACgEQACgDAEgDQADgDAEAAIAIgCIAGABIAFACQAGACADADIgHAHQgCgDgEgCQgDgCgFAAIgDABIgFACIgDADQgBACAAAEIABAEIADAEIAFACIAEACIAHACIAHADIAFAGQACADAAAFQAAAGgCAEQgCAEgEACIgHAFQgFABgEAAQgGAAgGgDg");
	this.shape_5.setTransform(1.9,0.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#D63900").s().p("AARAjIgkg4IAAA4IgKAAIAAhFIANAAIAkA3IAAg3IAKAAIAABFg");
	this.shape_6.setTransform(-4.8,0.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#D63900").s().p("AgEAjIAAhFIAJAAIAABFg");
	this.shape_7.setTransform(-10.1,0.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#D63900").s().p("AgEAjIAAg8IgWAAIAAgJIA1AAIAAAJIgWAAIAAA8g");
	this.shape_8.setTransform(-17.1,0.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#D63900").s().p("AgWAjIAAhFIAsAAIAAAJIgiAAIAAAUIAgAAIAAAIIggAAIAAAYIAjAAIAAAIg");
	this.shape_9.setTransform(-22.9,0.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#D63900").s().p("AgIAiQgHgCgFgFQgFgGgDgHQgDgGAAgIQAAgIADgGQADgHAFgEIAFgFIAHgDQAHgDAGAAIAIABIAIACQAGACAEAFIgGAGQgEgDgEgCIgGgBIgFgCQgGAAgEADQgFACgEAEQgDAEgCAFQgCAFAAAFQAAAGACAFQACAFADAEQAEAEAFACQAEACAGAAIAJgBIAHgDIAAgTIgPAAIAAgIIAZAAIAAAhQgGADgGACIgOACQgIAAgGgDg");
	this.shape_10.setTransform(-30.3,0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.getinspired, new cjs.Rectangle(-36,-8.1,72,16.2), null);


(lib.Path_10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#231F20").s().p("AizEbQgWAAgIgFQgIgFAAgOQAAgKAGgGQAGgHAJAAIARAAQAKAAAEgLQADgJAAgZIAAl7QAAgZgDgIQgCgGgEgDQgEgEgEAAIgRAAQgJAAgHgHQgGgHAAgJQAAgOAJgGQAIgFAWAAIFSAAQAZAAAFAVIAMA7QAEAQgGAJQgFAJgMAAQgOAAgHgOIgJgSQgGgPgPgFQgMgEggAAIhQAAQghAAgJAIQgIAJAAAiIAABlQAAAZAIAFQAFAEAdAAIAnAAQAaAAAIgEQAHgDACgNIABgFQADgVAUAAQANAAAFAIQAFAJAAAWIAABHQAAAWgFAJQgFAJgNAAQgTAAgEgWIgBgGQgCgNgHgDQgIgEgbAAIgmAAQgdAAgFAEQgIAFAAAZIAABsQAAAiADALQADALAKAEQAQAGAhAAIBVgBQAvAAAPgfIAHgQQAJgQAOAAQAMAAAFAJQAFAJgDAQIgNBCQgFAVgZAAg");
	this.shape.setTransform(21.9,28.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_10, new cjs.Rectangle(0,0,43.9,56.7), null);


(lib.Path_9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#231F20").s().p("AgNBlQgFgDAAgHIAAiTQAAgLgLABIgyAAQgLgBAAgOQAAgUAKgBICfAAQAMABAAARQAAARgLABIgyAAQgLAAAAAKIAACTQAAAHgFADQgEACgKAAQgJAAgEgCg");
	this.shape.setTransform(9.1,10.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_9, new cjs.Rectangle(0,0,18.2,20.5), null);


(lib.Path_8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#231F20").s().p("AhMBmQgNAAAAgPIAAiuQAAgOANAAICbAAQAGAAADAEQACAEAAAJQAAASgMAAIh5AAQgIAAAAAKIAAAcQAAAIAKABIBFAAQALgBAAATQAAAQgKAAIhFAAQgFAAgDADQgDADAAAFIAAAeQAAAKAKAAIB3AAQALAAAAASQAAASgLAAg");
	this.shape.setTransform(9,10.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_8, new cjs.Rectangle(0,0,18,20.4), null);


(lib.Path_7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#231F20").s().p("Ah+EYQgKgJgIgYIhIjYQgCgFgEAAQgEAAgCAFIhNDYIgJAWQgDAGgFAFQgMAJgRAAQgTAAgKgJQgLgJgJgYIimm+QgKgagHgHQgHgHgUgFQgOgCgFgFQgFgFAAgKQAAgWAdAAICvAAQAcAAAAAWQAAALgHAFQgHAFgRABQgOACgGAFQgGAFAAAKQAAAKADAJIBzFGQACAFAFAAQAEAAACgGIA/i2QAIgagHgWIgehbIgHgTQgEgJgHgFQgGgEgPgEQgNgDgGgFQgFgFAAgKQAAgZAeAAICmAAQAdAAAAAWQAAAUgcADQgQACgGAFQgGAFAAALQAAALAIAZIBgEsQACAGAEgBQAEAAABgGIBek6QADgMAAgIQAAgSgdgEQgbgCAAgWQAAgMAIgGQAHgFARAAIElAAQAVAAAJAFQAIAFAAAOQAAAKgGAHQgGAHgJAAIgRAAQgLAAgFALQgCAKAAAXIAABuQAAAdAFAHQAGAGAYAAIBzAAQAXAAAHgIQADgDAAgHIABgeIAAhoQAAgbgCgGQgCgFgFgDQgEgDgFAAIgQAAQgKAAgGgHQgHgHAAgKQAAgOAJgFQAIgFAWAAICaAAQAWAAAJAFQAJAFAAAOQAAAKgHAHQgGAHgJAAIgSAAQgEAAgEADQgFAEgBAEQgDAHAAAaIAAF8QAAAaADAIQABAFAFADQAEACAEAAIASAAQAJAAAGAHQAHAHAAAKQAAAOgJAFQgIAGgXAAIiaAAQgVAAgJgGQgIgFAAgOQAAgJAGgIQAHgHAJAAIAQAAQALAAAFgKQACgHAAgbIAAh8IgBgdQAAgHgDgEQgGgHgYAAIhzAAQgYAAgGAGQgFAHAAAdIAACBQAAAXACALQAEAKAMAAIARAAQAIAAAGAIQAGAHAAAKQAAANgIAGQgIAFgVAAIiaAAQgWAAgIgGQgJgFAAgOQAAgJAGgIQAHgHAJAAIARAAQAEAAAFgCQAEgDABgFQADgHAAgbIAAl8QAAgxgjAFQgMABgHAJQgIAJgGAWIiHGzQgJAfgKALQgKALgUAAQgTAAgLgJg");
	this.shape.setTransform(63.5,28.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_7, new cjs.Rectangle(0,0,127,57.9), null);


(lib.Path_6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#231F20").s().p("AhTEbIgTgEQgIAAgKAJQgKAHgJABQgLAAgGgHQgGgGgEgPIgVhWQgCgFAAgMQAAgKAIgJQAHgHAMAAQANAAAIAMIAMAQQAWAgAiASQAiARAkABQAogBAagUQAZgVAAgjQAAgggbgfQgZgbhAguQg/grgPgMQgSgOgTgWQggglAAg0QAAg+ArglQArglBGgBQAnABAhAHIAWAFIALACQAIAAAMgHQAJgIAJAAQASAAAGAYIAUBcQACAEAAAHQAAAKgHAFQgHAGgLAAQgMAAgKgOQgOgVgHgIQgGgGgOgLQgjgbgtAAQgcAAgSAPQgRAPAAAaQAAAXAJANQANASAaAUIApAfQAzAjAWARQAXATAUATQAWAWAMAfQAMAeAAAhQAABJgyAtQgzAthUAAQgxAAgngNg");
	this.shape.setTransform(19,29.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_6, new cjs.Rectangle(0,0,38.1,59.1), null);


(lib.Path_5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#231F20").s().p("ABaBkQgGgCAAgFIgOhsQgCgGgFAAQgDAAgDAEIgxA+QgEAFgFAAQgGAAgFgGIgtg8QgCgDgEAAQgFAAgBAIIgOBnQgCALgTAAQgGAAgFgDQgGgCAAgGIAViwQACgKADgDQAEgEALAAQAKAAAFAJIA4BOQAGAJADgBQAFAAAGgIIA7hQQAFgIAKAAQAHAAADADQAEACACAJIAUC0QABALgXAAQgFAAgEgDg");
	this.shape.setTransform(12.2,10.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_5, new cjs.Rectangle(0,0,24.3,20.6), null);


(lib.Path_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#231F20").s().p("AA6BlQgFgBgEgFIhAhFQgKgJgUAAQgFAAgEAEQgDAFAAAGIAAA7QAAAIgGACQgFACgKAAQgRAAAAgMIAAi0QAAgIAFgCQAFgDAKAAQASAAAAAMIAAA3QAAANAJAAQALAAAGgCQADgCAFgEIBJhDQAMgLANALQAMAMgKAJIhAA7QgJAHAJAKIBOBVQAIAJgGAFQgEAEgOAAQgMAAgFgCg");
	this.shape.setTransform(9.6,10.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_4, new cjs.Rectangle(0,0,19.1,20.7), null);


(lib.Path_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

}).prototype = getMCSymbolPrototype(lib.Path_3, null, null);


(lib.Path_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#231F20").s().p("Ai5EbQgWAAgIgFQgJgFAAgOQAAgKAGgHQAHgHAJAAIARAAQAKAAAFgLQACgKAAgXIAAl7QAAgYgDgJQgBgFgFgEQgEgEgEAAIgRAAQgIAAgHgHQgHgHAAgJQAAgOAJgGQAJgFAVAAIFvAAQAZAAAFAVIAMA7QAEAQgFAJQgFAJgMAAQgPAAgHgOIgIgSQgGgPgPgFQgMgEggAAIhtAAQgiAAgIAIQgJAJAAAiIAABlQAAAZAIAFQAEAEAeAAIBGAAQAaAAAIgEQAHgDACgNIABgFQADgVATAAQAOAAAFAIQAFAJAAAWIAABHQAAAWgFAJQgFAJgOAAQgSAAgEgWIgBgGQgCgNgHgDQgIgDgbAAIhFAAQgdAAgFADQgIAFAAAaIAACKQAAAbACAGQADAFAFADQAFADAFAAIAUAAQAJAAAGAHQAGAHAAAKQAAAOgJAFQgIAFgYAAg");
	this.shape.setTransform(22.5,28.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_2, new cjs.Rectangle(0,0,45.1,56.7), null);


(lib.Path_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#231F20").s().p("AipF/QhPhTAAiLQAAhZAghEQAghCA6gnQAZgTAmgSQAngUAmgNQAJgEgCgJQgCgKgNADQgVAEgZAAQgggBgYgJQgXgJgcgSQgggUgKgEQgugWg6AZQgWAJgLgLQgMgLAGgXQAXhVBDg4QBKg9BQAXQA0APAlA0QAnA2AeALQATAGAAAPQAAAOgRADQgbAFgjgQQgfgPgegbQgfgdgvgCQgrgCgcAVQgLAJADAGQAEAHALgCQAfgHAdAGQAoAHAbAgQAkAoAuAPQA4ASAugeIAZgXQAOgMALADQAQAEgCAUQgBAUgTAZQgiAsg9AeQhFAjgeAeQgwAvgTA9QgQAzAABRQAABxArBAQAqBBBKAAQBJAAArhCQAqhCAAhwQAAhfgXg4QgZg6g2gUQgbgLAFgTQAFgUAigDQA2gHA8AtQBoBMAACkQAACOhPBVQhQBUiHAAQiDAAhPhUg");
	this.shape.setTransform(33.5,46.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_1, new cjs.Rectangle(0,0,67.1,93.5), null);


(lib.Path = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#231F20").s().p("AihEbQgWAAgIgFQgIgFAAgOQAAgKAGgGQAGgHAJAAIARAAQAEAAAEgDQAFgEABgEQADgJAAgXIAAl+QAAgYgDgKQgBgEgFgEQgEgDgEAAIgRAAQgKAAgGgGQgHgHAAgKQAAgOAJgGQAJgFAWAAICdAAQAWAAAIAFQAJAGAAAOQAAAKgGAHQgHAGgJAAIgRAAQgOAAgEALQgDAGAAAcIAAFjQAAAcACAKQACAJAIAFQAGAEALACQAMABAaAAIAvAAQAwAAAPgfIAHgQQAIgQAPAAQAMAAAFAJQAFAJgEAQIgNBCQgFAVgZAAg");
	this.shape.setTransform(20.2,28.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path, new cjs.Rectangle(0,0,40.4,56.7), null);


(lib.CompoundPath_5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#231F20").s().p("AjmEaQgWgDgGgEQgKgFAAgNQAAgKAGgHQAFgHAKAAIARAAQAKAAAEgLQADgJAAgYIAAl5QAAgZgDgIQgEgMgKAAIgRAAQgKAAgFgGQgGgIAAgJQAAgNAKgFQAGgEAWgDQBdgNBrAAQBOAAA1ASQA0ASAnAoQAmAlATA4QAUA5AABEQAABNgZA9QgZA+gwAlQgkAegxAOQgxAOhDAAQh0AAhUgNgAgvjrQgdAEgIAMQgLAMABAhIAAFjQgBAgAVAMQANAHAnACQBNAFArhAQAsg/gBhxQAAhvgqg/Qgqg+hMAAIgcACg");
	this.shape.setTransform(26.9,29.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.CompoundPath_5, new cjs.Rectangle(0,0,53.8,59), null);


(lib.CompoundPath_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#231F20").s().p("AgeAfQgNgMAAgTQAAgRANgNQANgNARAAQASAAANANQANANAAARQAAATgNAMQgNANgSAAQgRAAgNgNgAgYgYQgKAKAAAOQAAAQAKAKQAKAKAOAAQAPAAAKgKQAJgKAAgQQAAgOgJgKQgKgKgPAAQgOAAgKAKg");
	this.shape.setTransform(4.4,4.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.CompoundPath_4, new cjs.Rectangle(0,0,8.8,8.9), null);


(lib.CompoundPath_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#231F20").s().p("AAvBeIgggxQgGgJgJAAIguAAQgEAAgDADQgDADAAAEIAAAxQAAAGgKABIgPABQgNAAAAgMIABi5QAAgIAIAAIBrAAQAgAAAUATQAVATgBAfQABAYgPAPIgWATQgIAGAEAGIAiAzQAFAHgFAEQgFAEgOAAQgRAAgFgJgAg4g4IAAAuQAAAFAEAEQAEABAFAAIA+AAQAQAAALgHQAMgJAAgRQAAgPgMgKQgLgIgQAAIg+AAQgNAAAAAKg");
	this.shape.setTransform(9.5,10.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.CompoundPath_3, new cjs.Rectangle(0,0,18.9,20.6), null);


(lib.CompoundPath_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#231F20").s().p("AAJAaIgNgVIgGAAIAAAVIgJAAIAAgzIATAAQARAAAAAQQABAMgNACIAOAVgAgKgCIAHAAQAMAAAAgHQAAgIgKAAIgJAAg");
	this.shape.setTransform(2,2.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.CompoundPath_2, new cjs.Rectangle(0,0,3.9,5.2), null);


(lib.CompoundPath_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#231F20").s().p("ABnDxQhFg1gYhfIgBgDQgCgKgHgBQgGABgCAKIgBACQgYBfhHA2QhHA2hoAAQh/AAhLhQQhMhQAAiGQAAiGBMhRQBLhQCAAAQBpAABHA3QBHA2AXBgQADALAFgBQAHAAADgLIAAAAQAXhgBGg1QBHg3BoAAQB/AABMBPQBNBQAACFQAACIhNBQQhMBRiBAAQhmAAhHg2gACmiqQgoA/AABuQAABsAoA9QApA+BIAAQBGAAAog/QApg/ABhrQAAhrgqhAQgqg/hGAAQhGAAgpA/gAmFiqQgpA/AABuQAABsApA9QAoA+BIAAQBGAAApg/QApg/AAhrQAAhrgqhAQgpg/hGAAQhGAAgpA/g");
	this.shape.setTransform(55.8,29.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.CompoundPath_1, new cjs.Rectangle(0,0,111.5,59), null);


(lib.CompoundPath = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#231F20").s().p("ABCBfIgNgbQgEgGgGAAIhTAAQgJAAgEAMIgMAVQgDAIgSAAQgWAAAFgMIBZi4QAFgKAKAAQALABAFAIIBYC7QACAGgJADQgGABgIAAQgPABgDgJgAgEgdIgYAyQgCADACACQABADAEAAIAwAAQABAAAAAAQABAAABgBQAAAAABAAQAAgBABAAQACgCgCgDIgYgzQgCgEgDABQgDAAgCADg");
	this.shape.setTransform(10.5,10.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.CompoundPath, new cjs.Rectangle(0,0,21,20.7), null);


(lib.ctarollovervideo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#B63100").s().p("AmjBnIAAjOINHAAIAADOg");
	this.shape.setTransform(0,0,1.025,1.077);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ctarollovervideo, new cjs.Rectangle(-43,-11.1,86.1,22.3), null);


(lib.ctarectanglegetinspired = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AmsBuIAAjbINZAAIAADbg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ctarectanglegetinspired, new cjs.Rectangle(-42.9,-11,85.8,22), null);


(lib.cranberriesgetinspired = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.largemobilegetinspiredcranberries();
	this.instance.parent = this;
	this.instance.setTransform(-30,-17);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.cranberriesgetinspired, new cjs.Rectangle(-30,-17,61,46), null);


(lib.blackwideskyscraper = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("EgRBA2FMAAAhsJMAiDAAAMAAABsJg");
	this.shape.setTransform(0,0,0.753,0.867);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.blackwideskyscraper, new cjs.Rectangle(-82.1,-300,164.3,600.1), null);


(lib.andmore = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AggAmQgPgPAAgWQAAgWAPgQQAPgPAWAAQAUAAALALQAMALAAATQAAAHgCACQgCABgIAAIgmAAQgDAAgCgBQAAgBgBAAQAAgBAAAAQAAgBgBAAQAAgBAAgBQAAAAAAgBQABgBAAAAQAAAAAAgBQABAAAAAAQACgCADAAIAVAAIAFgBQAAAAAAAAQABgBAAAAQAAAAAAgBQAAAAAAgBQAAgKgGgHQgHgGgJAAQgMAAgGALQgGAKAAAPQAAAPAJAMQAIALAMAAQAHAAAFgBQAGgCAEgEIAEgDQAFgEADAAQABAAAAAAQABAAAAAAQABABAAAAQAAAAABABQAAAAAAAAQABABAAAAQAAABAAAAQAAABAAAAQAAADgCADIgHAHQgJAHgIAEQgIADgKAAQgVAAgOgPg");
	this.shape.setTransform(39.6,2.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgeAzQgFgCAAgFQAAgEAFgBIADgBQACgCABgDQACgDAAgIIgBgHIAAgIIAAgGIAAgYQgBgFgCgBIgFgDQgGgBAAgEQAAgBAAAAQAAgBAAAAQAAgBABAAQAAAAABgBIAGgEIAOgEIAJgCQAFAAABAOIAAACIABAAQAFgHAFgFQAGgEAGAAQAHAAAEAEQAEAFAAAGQAAAIgDADQgDAFgGAAIgFgBIgEgEIgDgDQAAgBAAgBQgBAAAAAAQAAgBAAAAQgBAAAAAAQgHAAgDAKQgCAKAAAdIABAOQABAEADABIAEACQAGABAAAFQAAAEgGACQgFABgNAAQgQAAgFgBg");
	this.shape_1.setTransform(30.4,2.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgkAmQgPgPAAgXQAAgWAQgPQAPgPAWAAQAWAAAOAOQAOAOAAAXQAAAWgPAQQgQAQgVAAQgWAAgOgPgAgTgdQgGAHAAAOQAAATAJAOQAIANAMAAQAKABAGgJQAGgIAAgOQAAgTgJgOQgIgNgLAAQgKAAgHAJg");
	this.shape_2.setTransform(20.4,2.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAmBHQgGgBAAgFQAAgEAHgCIAEgDQACAAABgFIAAgSIAAgGIAAgqIAAgZIgNAhQgeBNgGAAQgDAAgGgKQgGgLgOghIgWgzIgBAoIgBAbIABATQABAFABAAIAFADQAGACAAAEQAAAFgFABQgFACgNAAQgLAAgFgCQgFgBAAgFQAAgDAGgDQAFgDABgCQABgEACgaQABgaAAggIAAgDQAAgLgBgEQgBgDgCgBIgFgCQgGgDAAgEQAAgFAEgBQAFgCAPAAIAOABIAEABQACABAHASIAGAPIADAHQAZA9ABAAQACAAAJgXQAJgVANgjIACgHQAEgLADgDQABgCAEgBIAOgBQAOAAAEACQAFABAAAFQAAAEgGACIgDACQgDABgBAEQgBAEAAAPIABA6IACAdQABADAEACIACABIAEACQABAAAAABQAAAAAAAAQABABAAAAQAAABAAAAQAAAFgGABQgGACgQAAQgQAAgFgCg");
	this.shape_3.setTransform(5.3,0.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAUBKQgBgCAAgEIAAgEIAAgDIgBAAIgDACIgFAEQgGAEgEACQgGACgHAAQgTAAgMgOQgMgNAAgWQAAgZAOgPQAOgPAWAAIAGAAQADABACADQABAAAAABQAAABAAAAQABABAAAAQAAABAAAAQAAAGgHAAIgCAAIgDAAQgLAAgHAJQgHAIAAAQQAAARAIALQAHALAMAAQAJAAAGgGQAGgGAAgMIAAgbIAAguQAAgHgBgDQgBgDgEgBIgDgBQgGgCAAgDQAAgDACgCIAKgFIAMgDIAJgBQAEAAABABQACADAAAEIAAAGIgCA9IABArQABAKABABIAHACQAGACAAADQAAAEgPAGIgKACIgIABQAAAAgBAAQgBAAAAAAQgBgBAAAAQgBAAAAAAg");
	this.shape_4.setTransform(-15.6,0.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAOAzQgGgCAAgEQAAgEAGgCIADgCQADgBABgEIABgQQgBgfgEgJQgDgHgMgBQgEABgFADQgEADgEAGQgCAEgBAHIgBAcIABANQABADACABIAFACQAEACAAAEQAAAEgEACQgFABgNAAQgRAAgEgBQgFgCgBgFQAAgEAGgBIADgBQACgCABgDIABgLIAAgHIAAgIIAAgKQAAgQgBgFQAAgEgDgBIgFgDQgFgBAAgEQAAgBAAAAQAAgBAAAAQAAgBABAAQAAAAAAgBIAHgEIAOgEIAKgCQABAAABAAQABAAAAAAQABABAAAAQABAAAAAAIABAFIAAAIIAAABIABAAIAAAAIABgBIACgCIADgCQAKgKAMAAQAHAAAHADQAHADAFAGQAEAFACAIQACAHAAARIAAANIAAAGIAAAGIABALQABADADABIACABQAFABABAEQAAAFgFABQgFACgPAAQgPAAgEgBg");
	this.shape_5.setTransform(-28.2,2.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AASAwIgFgFIgFABQgMAJgMAAQgPAAgJgJQgJgJAAgNQAAgRALgHQAMgKAVAAQAFAAACACQADABAAAEQAAAFgGAAQgKAAgGAFQgHAFAAAIQAAAIAGAGQAFAEAJAAQAJABAEgFQAEgFAAgKIAAgmQAAgJgDgFQgEgEgHAAQgFAAgEACQgEACgEAFIgCACQgGAIgHAAQgEAAgDgCQgCgDAAgEQAAgKAMgHQALgGATAAQAKAAAIADQAJACAEAHQADADABAHQACAGAAAPIAAAfIABAJQAAABAAAAQABABAAAAQAAAAABABQAAAAABAAIADABQAGACAAADQAAAFgHAEQgGAEgKAAQgEAAgFgFg");
	this.shape_6.setTransform(-39.7,2.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.andmore, new cjs.Rectangle(-47.3,-14,94.6,28.2), null);


(lib.whitelogo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("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");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgYAZQgKgKAAgPQAAgOAKgLQAKgJAOgBQAPABAKAJQAKALAAAOQAAAPgKAKQgKALgPgBQgOABgKgLgAAWAZIgPgVQANgCAAgMQAAgQgRAAIgTAAIAAAzIAJAAIAAgVIAFAAIAOAVIAKAAg");
	this.shape_1.setTransform(130.4,59.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgrAiQgFAAgEgDQgEgEAAgFIAAgtQAAgKANAAIA+AAQAQAAALAJQALAJAAAPQAAAQgLAJQgLAJgQAAg");
	this.shape_2.setTransform(-11.1,85);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgJAHIAAgNIAIAAQALAAAAAGQAAAHgNAAg");
	this.shape_3.setTransform(130.6,58);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AhvCtQgog/AAhrQAAhuAog/QApg/BGAAQBFAAAqBAQApA+AABsQAABrgpA/QgpA/hGAAQhGAAgpg9g");
	this.shape_4.setTransform(-48.8,30.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgYAfQgDAAgCgCQgBgDABgDIAZgxQACgEACAAQADAAACADIAZAzQABADgCACQAAABgBAAQAAAAgBABQAAAAgBAAQAAAAgBAAg");
	this.shape_5.setTransform(-44.3,88);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgtDsQgngCgNgHQgUgMgBggIAAljQAAghALgMQAIgMAdgEIAdgDQBKAAArA/QArA+AABvQgBBxgqBAQgqA8hFAAIgKgBg");
	this.shape_6.setTransform(64.5,30);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AhvCtQgog/AAhrQAAhuAog/QApg/BGAAQBFAAAqBAQApA+AABsQAABrgpA/QgpA/hFAAQhHAAgpg9g");
	this.shape_7.setTransform(6.9,30.2);

	this.instance = new lib.Path();
	this.instance.parent = this;
	this.instance.setTransform(69.3,-37.3,1,1,0,0,0,20.2,28.3);
	this.instance.alpha = 0.789;

	this.instance_1 = new lib.Path_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(14.7,-54.3,1,1,0,0,0,33.5,46.6);
	this.instance_1.alpha = 0.789;

	this.instance_2 = new lib.Path_2();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-98.3,30.1,1,1,0,0,0,22.6,28.3);
	this.instance_2.alpha = 0.789;

	this.instance_3 = new lib.Path_3();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-56.6,165.6);
	this.instance_3.alpha = 0.789;

	this.instance_4 = new lib.CompoundPath();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-44.3,88.2,1,1,0,0,0,10.5,10.3);
	this.instance_4.alpha = 0.789;

	this.instance_5 = new lib.Path_4();
	this.instance_5.parent = this;
	this.instance_5.setTransform(22.7,88.2,1,1,0,0,0,9.6,10.3);
	this.instance_5.alpha = 0.789;

	this.instance_6 = new lib.Path_5();
	this.instance_6.parent = this;
	this.instance_6.setTransform(-78.1,88.3,1,1,0,0,0,12.2,10.3);
	this.instance_6.alpha = 0.789;

	this.instance_7 = new lib.Path_6();
	this.instance_7.parent = this;
	this.instance_7.setTransform(110.1,30.3,1,1,0,0,0,19,29.6);
	this.instance_7.alpha = 0.789;

	this.instance_8 = new lib.CompoundPath_1();
	this.instance_8.parent = this;
	this.instance_8.setTransform(-20.9,30.2,1,1,0,0,0,55.8,29.5);
	this.instance_8.alpha = 0.789;

	this.instance_9 = new lib.CompoundPath_2();
	this.instance_9.parent = this;
	this.instance_9.setTransform(130.6,59.1,1,1,0,0,0,1.9,2.6);
	this.instance_9.alpha = 0.789;

	this.instance_10 = new lib.Path_7();
	this.instance_10.parent = this;
	this.instance_10.setTransform(-74.6,-36.8,1,1,0,0,0,63.5,28.9);
	this.instance_10.alpha = 0.789;

	this.instance_11 = new lib.CompoundPath_3();
	this.instance_11.parent = this;
	this.instance_11.setTransform(-11,88.3,1,1,0,0,0,9.5,10.3);
	this.instance_11.alpha = 0.789;

	this.instance_12 = new lib.Path_8();
	this.instance_12.parent = this;
	this.instance_12.setTransform(52.4,88.3,1,1,0,0,0,9,10.2);
	this.instance_12.alpha = 0.789;

	this.instance_13 = new lib.Path_9();
	this.instance_13.parent = this;
	this.instance_13.setTransform(81.3,88.3,1,1,0,0,0,9.1,10.2);
	this.instance_13.alpha = 0.789;

	this.instance_14 = new lib.CompoundPath_4();
	this.instance_14.parent = this;
	this.instance_14.setTransform(130.4,59.1,1,1,0,0,0,4.4,4.4);
	this.instance_14.alpha = 0.789;

	this.instance_15 = new lib.CompoundPath_5();
	this.instance_15.parent = this;
	this.instance_15.setTransform(62.2,30.2,1,1,0,0,0,26.9,29.5);
	this.instance_15.alpha = 0.789;

	this.instance_16 = new lib.Path_10();
	this.instance_16.parent = this;
	this.instance_16.setTransform(114.4,-37.3,1,1,0,0,0,21.9,28.3);
	this.instance_16.alpha = 0.789;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.whitelogo, new cjs.Rectangle(-175,-175,350,350), null);


(lib.getinspiredpotatoes = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.largemobilepotatoes_1();
	this.instance.parent = this;
	this.instance.setTransform(-0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.getinspiredpotatoes, new cjs.Rectangle(-26.5,-26,53,52), null);


(lib.ctarollover = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_11 = function() {
		this.stop();
	}
	this.frame_23 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(11).call(this.frame_11).wait(12).call(this.frame_23).wait(7));

	// get-inspired
	this.instance = new lib.getinspiredvideo();
	this.instance.parent = this;
	this.instance.setTransform(-0.1,0.2);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({alpha:1},9).wait(2).to({alpha:0},10).wait(8));

	// Layer 1
	this.instance_1 = new lib.ctarollovervideo();
	this.instance_1.parent = this;
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({alpha:1},9).wait(2).to({alpha:0},10).wait(8));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-43,-11.1,86.1,22.3);


// stage content:
(lib.largemobilegetinspired = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_105 = function() {
		//onhover event to reveal green cta rectangle over orange rectangle
		this.btn_main.addEventListener("mouseover", fl_MouseOverHandler.bind(this));
		this.btn_main.addEventListener("mouseout", fl_MouseOutHandler.bind(this));
		
		function fl_MouseOverHandler()
		{
			this.cta_rollover.gotoAndPlay(2);
		}
		
		function fl_MouseOutHandler()
		{
		this.cta_rollover.gotoAndPlay(13);
		}
	}
	this.frame_126 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(105).call(this.frame_105).wait(21).call(this.frame_126).wait(5));

	// button
	this.btn_main = new lib.mainbutton();
	this.btn_main.parent = this;
	this.btn_main.setTransform(160.7,50.2,1.558,0.155,0,0,0,0.2,1.3);
	new cjs.ButtonHelper(this.btn_main, 0, 1, 2, false, new lib.mainbutton(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btn_main).wait(131));

	// grey-rectangle
	this.instance = new lib.greyrectangle();
	this.instance.parent = this;
	this.instance.setTransform(160,50);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(131));

	// fade-from-white
	this.instance_1 = new lib.blackwideskyscraper();
	this.instance_1.parent = this;
	this.instance_1.setTransform(161.2,50.5,1.954,0.168,0,0,0,0.4,0.3);
	this.instance_1.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 255, 255, 0)];
	this.instance_1.cache(-84,-302,168,604);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regX:0.2,scaleX:1.95,scaleY:0.17,x:160.3,y:50,alpha:0},9).wait(122));

	// white-logo
	this.instance_2 = new lib.whitelogo();
	this.instance_2.parent = this;
	this.instance_2.setTransform(269.2,29.8,0.097,0.097);
	this.instance_2.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(9).to({scaleX:0.01,scaleY:0.01},0).to({regX:0.2,scaleX:0.22,scaleY:0.22,alpha:1},6).to({scaleX:0.21,scaleY:0.21},7).wait(109));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AykEOIAAobMAnIAAAIAAIbg");
	mask.setTransform(131.6,13.7);

	// make-delicious-memories
	this.instance_3 = new lib.makedeliciousmemories();
	this.instance_3.parent = this;
	this.instance_3.setTransform(100,12.6);
	this.instance_3.alpha = 0;
	this.instance_3.shadow = new cjs.Shadow("rgba(0,0,0,1)",0,0,16);

	var maskedShapeInstanceList = [this.instance_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(59).to({x:-67.2},0).to({x:110,alpha:1},10,cjs.Ease.get(1)).to({x:100},8,cjs.Ease.get(1)).wait(54));

	// holiday-tips
	this.instance_4 = new lib.holidaytips();
	this.instance_4.parent = this;
	this.instance_4.setTransform(76.8,31.9);
	this.instance_4.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(75).to({alpha:1},10).wait(46));

	// recipes
	this.instance_5 = new lib.recipes();
	this.instance_5.parent = this;
	this.instance_5.setTransform(52,54.8);
	this.instance_5.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(85).to({alpha:1},10).wait(36));

	// and-more
	this.instance_6 = new lib.andmore();
	this.instance_6.parent = this;
	this.instance_6.setTransform(140.7,54.8);
	this.instance_6.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(95).to({alpha:1},10).wait(26));

	// mask (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("AykJYIAAocMAnIAAAIAAIcg");
	mask_1.setTransform(131.6,60);

	// cta-rollover
	this.cta_rollover = new lib.ctarollover();
	this.cta_rollover.parent = this;
	this.cta_rollover.setTransform(57.4,81.9);

	var maskedShapeInstanceList = [this.cta_rollover];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.cta_rollover).wait(105).to({x:-30.2,alpha:0},0).to({x:61.8,alpha:1},10,cjs.Ease.get(1)).to({x:57.4},8,cjs.Ease.get(1)).wait(8));

	// mask (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	mask_2.graphics.p("AykIlIAAocMAnIAAAIAAIcg");
	mask_2.setTransform(131.6,54.9);

	// get-inspired
	this.instance_7 = new lib.getinspired();
	this.instance_7.parent = this;
	this.instance_7.setTransform(57.4,81.8);
	this.instance_7.alpha = 0;

	var maskedShapeInstanceList = [this.instance_7];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(105).to({x:-30.2},0).to({x:61.9,alpha:1},10,cjs.Ease.get(1)).to({x:57.4},8,cjs.Ease.get(1)).wait(8));

	// mask (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	mask_3.graphics.p("AykJYIAAocMAnIAAAIAAIcg");
	mask_3.setTransform(131.6,60);

	// cta-rectangle
	this.instance_8 = new lib.ctarectanglegetinspired();
	this.instance_8.parent = this;
	this.instance_8.setTransform(56.9,81.8);
	this.instance_8.alpha = 0;

	var maskedShapeInstanceList = [this.instance_8];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(105).to({x:-30.2},0).to({x:61.9,alpha:1},10,cjs.Ease.get(1)).to({x:57.4},8,cjs.Ease.get(1)).wait(8));

	// cranberries
	this.instance_9 = new lib.cranberriesgetinspired();
	this.instance_9.parent = this;
	this.instance_9.setTransform(404,83);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).to({x:158},59,cjs.Ease.sineInOut).wait(72));

	// gravy
	this.instance_10 = new lib.getinspiredgravy();
	this.instance_10.parent = this;
	this.instance_10.setTransform(548.1,86);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).to({x:303},59,cjs.Ease.sineInOut).wait(72));

	// chicken
	this.instance_11 = new lib.turkeygetinspired();
	this.instance_11.parent = this;
	this.instance_11.setTransform(495,61);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).to({x:250},59,cjs.Ease.sineInOut).wait(72));

	// green-berries
	this.instance_12 = new lib.greenberriesgetinspired();
	this.instance_12.parent = this;
	this.instance_12.setTransform(478,18.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).to({x:233},59,cjs.Ease.sineInOut).wait(72));

	// green-bowl
	this.instance_13 = new lib.getinspiredgreensuse();
	this.instance_13.parent = this;
	this.instance_13.setTransform(338,85.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).to({x:93},59,cjs.Ease.sineInOut).wait(72));

	// meat
	this.instance_14 = new lib.getinspiredmeat();
	this.instance_14.parent = this;
	this.instance_14.setTransform(33.5,45.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).to({x:-211.5},59,cjs.Ease.sineInOut).wait(72));

	// potatoes
	this.instance_15 = new lib.getinspiredpotatoes();
	this.instance_15.parent = this;
	this.instance_15.setTransform(93.5,74);

	this.timeline.addTween(cjs.Tween.get(this.instance_15).to({x:-151.5},59,cjs.Ease.sineInOut).wait(72));

	// utensils
	this.instance_16 = new lib.getinspiredutensils();
	this.instance_16.parent = this;
	this.instance_16.setTransform(157.5,98.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_16).to({x:-87.5},59,cjs.Ease.sineInOut).wait(72));

	// pie
	this.instance_17 = new lib.getinspiredpie();
	this.instance_17.parent = this;
	this.instance_17.setTransform(223,25);

	this.timeline.addTween(cjs.Tween.get(this.instance_17).to({x:-22,y:25.5},59,cjs.Ease.sineInOut).wait(72));

	// orange-fruit
	this.instance_18 = new lib.orangefruit();
	this.instance_18.parent = this;
	this.instance_18.setTransform(145,37);

	this.timeline.addTween(cjs.Tween.get(this.instance_18).to({x:-100},59,cjs.Ease.sineInOut).wait(72));

	// table
	this.instance_19 = new lib.getinspiredtable();
	this.instance_19.parent = this;
	this.instance_19.setTransform(154.6,50);

	this.timeline.addTween(cjs.Tween.get(this.instance_19).to({x:-90.5},59,cjs.Ease.sineInOut).wait(72));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-95.9,37.8,821,134.9);
// library properties:
lib.properties = {
	id: '85088BD5353243C8B4895C262600CED3',
	width: 320,
	height: 100,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/index_atlas_.png", id:"index_atlas_"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['85088BD5353243C8B4895C262600CED3'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}



})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;