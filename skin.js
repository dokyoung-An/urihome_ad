// Garden Gnome Software - Skin
// Pano2VR 7.1.8/20986
// Filename: ??? ??? ???.ggsk
// Generated 2025-04-24T10:21:55

function pano2vrSkin(player,base) {
	player.addVariable('vis_aptInfo', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_aptInfo_pc', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_roomMove', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_m_roomMove', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_logo', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_hide', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_hambur', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_ad', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_lanhouse', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_films', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_aptinfo_m', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_ad_m', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_lanhouse_m', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_films_m', 2, false, { ignoreInState: 0  });
	var me=this;
	var skin=this;
	var flag=false;
	var hotspotTemplates={};
	var skinKeyPressedKey = 0;
	var skinKeyPressedText = '';
	this.player=player;
	player.setApiVersion(7);
	this.player.skinObj=this;
	this.divSkin=player.divSkin;
	this.ggUserdata=player.userdata;
	this.lastSize={ w: -1,h: -1 };
	var basePath="";
	var cssPrefix="";
	// auto detect base path
	if (base=='?') {
		var scripts = document.getElementsByTagName('script');
		for(var i=0;i<scripts.length;i++) {
			var src=scripts[i].src;
			if (src.indexOf('skin.js')>=0) {
				var p=src.lastIndexOf('/');
				if (p>=0) {
					basePath=src.substr(0,p+1);
				}
			}
		}
	} else
	if (base) {
		basePath=base;
	}
	this.elementMouseDown={};
	this.elementMouseOver={};
	var i;
	var hs,el,els,elo,ela,elHorScrollFg,elHorScrollBg,elVertScrollFg,elVertScrollBg,elCornerBg;
	var prefixes='Webkit,Moz,O,ms,Ms'.split(',');
	for(var i=0;i<prefixes.length;i++) {
		if (typeof document.body.style[prefixes[i] + 'Transform'] !== 'undefined') {
			cssPrefix='-' + prefixes[i].toLowerCase() + '-';
		}
	}
	
	player.setMargins(0,0,0,0);
	
	this.updateSize=function(startElement) {
		var stack=[];
		stack.push(startElement);
		while(stack.length>0) {
			var e=stack.pop();
			if (e.ggUpdatePosition) {
				e.ggUpdatePosition();
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
	}
	
	player.addListener('changenode', function() { me.ggUserdata=player.userdata; });
	
	var parameterToTransform=function(p) {
		return p.def + 'translate(' + p.rx + 'px,' + p.ry + 'px) rotate(' + p.a + 'deg) scale(' + p.sx + ',' + p.sy + ')';
	}
	
	this.findElements=function(id,regex) {
		var r=[];
		var stack=[];
		var pat=new RegExp(id,'');
		stack.push(me.divSkin);
		while(stack.length>0) {
			var e=stack.pop();
			if (regex) {
				if (pat.test(e.ggId)) r.push(e);
			} else {
				if (e.ggId==id) r.push(e);
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
		return r;
	}
	
	this._=function(text, params) {
		return player._(text, params);
	}
	
	this.languageChanged=function() {
		var stack=[];
		stack.push(me.divSkin);
		while(stack.length>0) {
			var e=stack.pop();
			if (e.ggUpdateText) {
				e.ggUpdateText();
			}
			if (e.ggUpdateAria) {
				e.ggUpdateAria();
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
	}
	player.addListener('sizechanged', function () { me.updateSize(me.divSkin);});
	player.addListener('languagechanged', this.languageChanged);
	
	this.addSkin=function() {
		var hs='';
		this.ggCurrentTime=new Date().getTime();
		el=me.__71=document.createElement('div');
		el.ggId="\ud584\ubc84\uac70";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='z-index: 999;';
		hs+='bottom : 5px;';
		hs+='cursor : pointer;';
		hs+='height : 50px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 75px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__71.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me.__71.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_hambur') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__71.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__71.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__71.style.transition='';
				if (me.__71.ggCurrentLogicStateVisible == 0) {
					me.__71.style.visibility=(Number(me.__71.style.opacity)>0||!me.__71.style.opacity)?'inherit':'hidden';
					me.__71.ggVisible=true;
				}
				else {
					me.__71.style.visibility="hidden";
					me.__71.ggVisible=false;
				}
			}
		}
		me.__71.logicBlock_visible();
		me.__71.onclick=function (e) {
			me._pc_1.style.transition='none';
			me._pc_1.style.visibility=(Number(me._pc_1.style.opacity)>0||!me._pc_1.style.opacity)?'inherit':'hidden';
			me._pc_1.ggVisible=true;
			player.setVariableValue('vis_hambur', false);
		}
		me.__71.ggUpdatePosition=function (useTransition) {
		}
		el=me._svg_6_1=document.createElement('div');
		els=me._svg_6_1__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlPSIjMzYzNjM2IiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0iZmVhdGhlciBmZWF0aGVyLW1lbnUiIGZpbGw9Im5vbmUiIGhlaWdodD0iMjQiIHN0cm9rZS13aWR0aD0iMS41IiB3aWR0aD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgc3Ryb2tlLW9wYWNpdHk9IjEiPgogPGxpbmUgeTI9IjEyIiB4Mj0iMjEiIHkxPSIxMiIgeDE9IjMiLz4KIDxsaW5lIHkyPSI2IiB4Mj0iMjEiIHkxPSI2IiB4MT0iMyIvPgogPGxpbmUgeTI9IjE4IiB4Mj0iMjEiIHkxPSIxOCIgeD'+
			'E9IjMiLz4KPC9zdmc+Cg==';
		me._svg_6_1__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Svg 6_1";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 28px;';
		hs+='left : calc(50% - ((28px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((28px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 28px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._svg_6_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._svg_6_1.ggUpdatePosition=function (useTransition) {
		}
		me.__71.appendChild(me._svg_6_1);
		me.divSkin.appendChild(me.__71);
		el=me.__66=document.createElement('div');
		el.ggId="\uac00\uaca9\uc815\ubcf4";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='z-index: 9;';
		hs+='height : 88%;';
		hs+='left : 90px;';
		hs+='position : absolute;';
		hs+='top : 10px;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		hs+='max-width:500px;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__66.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me.__66.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getViewerSize(true).width <= 1120))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me.__66.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me.__66.ggCurrentLogicStatePosition = newLogicStatePosition;
				me.__66.style.transition='left 0s, top 0s, width 0s, height 0s';
				if (me.__66.ggCurrentLogicStatePosition == 0) {
					me.__66.style.left='0px';
					me.__66.style.top='45px';
				}
				else {
					me.__66.style.left='90px';
					me.__66.style.top='10px';
				}
			}
		}
		me.__66.logicBlock_position();
		me.__66.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getViewerSize(true).width <= 1120))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me.__66.ggCurrentLogicStateSize != newLogicStateSize) {
				me.__66.ggCurrentLogicStateSize = newLogicStateSize;
				me.__66.style.transition='left 0s, top 0s, width 0s, height 0s';
				if (me.__66.ggCurrentLogicStateSize == 0) {
					me.__66.style.width='100%';
					me.__66.style.height='100%';
					skin.updateSize(me.__66);
				}
				else {
					me.__66.style.width='100%';
					me.__66.style.height='88%';
					skin.updateSize(me.__66);
				}
			}
		}
		me.__66.logicBlock_size();
		me.__66.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_aptInfo_pc') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__66.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__66.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__66.style.transition='left 0s, top 0s, width 0s, height 0s';
				if (me.__66.ggCurrentLogicStateVisible == 0) {
					me.__66.style.visibility=(Number(me.__66.style.opacity)>0||!me.__66.style.opacity)?'inherit':'hidden';
					me.__66.ggVisible=true;
				}
				else {
					me.__66.style.visibility="hidden";
					me.__66.ggVisible=false;
				}
			}
		}
		me.__66.logicBlock_visible();
		me.__66.ggUpdatePosition=function (useTransition) {
		}
		el=me.__67=document.createElement('div');
		el.ggId="\ubaa8\ubc14\uc77c-\uac00\uaca9\uc815\ubcf4-\ubc30\uacbd";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 20px;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__67.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__67.logicBlock_borderradius = function() {
			var newLogicStateBorderRadius;
			if (
				((player.getViewerSize(true).width <= 1120))
			)
			{
				newLogicStateBorderRadius = 0;
			}
			else {
				newLogicStateBorderRadius = -1;
			}
			if (me.__67.ggCurrentLogicStateBorderRadius != newLogicStateBorderRadius) {
				me.__67.ggCurrentLogicStateBorderRadius = newLogicStateBorderRadius;
				me.__67.style.transition='border-radius 0s';
				if (me.__67.ggCurrentLogicStateBorderRadius == 0) {
					me.__67.style.borderRadius="0px";
				}
				else {
					me.__67.style.borderRadius="20px";
				}
			}
		}
		me.__67.logicBlock_borderradius();
		me.__67.onclick=function (e) {
			player.setVariableValue('vis_aptInfo_pc', false);
		}
		me.__67.ggUpdatePosition=function (useTransition) {
		}
		el=me.__69=document.createElement('div');
		el.ggId="\ubaa8\ubc14\uc77c-\uac00\uaca9\uc815\ubcf4-\ud0c0\uc774\ud2c0";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 24px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 25px;';
		hs+='visibility : inherit;';
		hs+='width : 91%;';
		hs+='pointer-events:none;';
		hs+='margin:0 24px;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__69.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__69.onclick=function (e) {
			player.setVariableValue('vis_aptInfo_pc', false);
		}
		me.__69.ggUpdatePosition=function (useTransition) {
		}
		el=me.__70=document.createElement('div');
		els=me.__70__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\ubaa8\ubc14\uc77c-\uac00\uaca9\uc815\ubcf4-\uc544\ud30c\ud2b8 \uc774\ub984";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(57,57,57,1);';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 30%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='font-size: 15px;';
		hs+='font-weight: bolder;';
		hs+='text-align: left;';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__70.ggUpdateText=function() {
			var params = [];
			var hs = player._("\ubd80\ub3d9\uc0b0\uc815\ubcf4", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__70.ggUpdateText();
		el.appendChild(els);
		me.__70.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__70.ggUpdatePosition=function (useTransition) {
		}
		me.__69.appendChild(me.__70);
		el=me._container_12=document.createElement('div');
		el.ggId="\ubaa8\ubc14\uc77c-\uac00\uaca9\uc815\ubcf4-Container 1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 70%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._container_12.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._container_12.onclick=function (e) {
			player.setVariableValue('vis_aptInfo_pc', false);
		}
		me._container_12.ggUpdatePosition=function (useTransition) {
		}
		el=me._rectangle_7_1=document.createElement('div');
		el.ggId="Rectangle 7_1";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(234,236,234,0.705882);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 50px;';
		hs+='height : 30px;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='top : calc(50% - ((30px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 30px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._rectangle_7_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._rectangle_7_1.ggUpdatePosition=function (useTransition) {
		}
		el=me._svg_19_1=document.createElement('div');
		els=me._svg_19_1__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJmZWF0aGVyIGZlYXRoZXIteCIgZmlsbD0ibm9uZSIgaGVpZ2h0PSIyNCIgc3Ryb2tlLXdpZHRoPSIxLjUiIHdpZHRoPSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij4KIDxsaW5lIHkyPSIxOCIgeTE9IjYiIHgyPSI2IiB4MT0iMTgiLz4KIDxsaW5lIHkyPSIxOCIgeTE9IjYiIHgyPSIxOCIgeDE9IjYiLz4KPC9zdmc+Cg==';
		me._svg_19_1__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Svg 19_1";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 18px;';
		hs+='left : calc(50% - ((18px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((18px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 18px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._svg_19_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._svg_19_1.ggUpdatePosition=function (useTransition) {
		}
		me._rectangle_7_1.appendChild(me._svg_19_1);
		me._container_12.appendChild(me._rectangle_7_1);
		me.__69.appendChild(me._container_12);
		me.__67.appendChild(me.__69);
		el=me._iframe1=document.createElement('div');
		el.ggId="\uac00\uaca9\uc815\ubcf4-iframe";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 80%;';
		hs+='left : calc(50% - ((92% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 70px;';
		hs+='visibility : inherit;';
		hs+='width : 92%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._iframe1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._iframe1.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getViewerSize(true).width <= 1120))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me._iframe1.ggCurrentLogicStateSize != newLogicStateSize) {
				me._iframe1.ggCurrentLogicStateSize = newLogicStateSize;
				me._iframe1.style.transition='width 0s, height 0s';
				if (me._iframe1.ggCurrentLogicStateSize == 0) {
					me._iframe1.style.width='92%';
					me._iframe1.style.height='68%';
					me._iframe1.style.left = 'calc(50% - (92% / 2))';
					skin.updateSize(me._iframe1);
				}
				else {
					me._iframe1.style.width='92%';
					me._iframe1.style.height='80%';
					me._iframe1.style.left = 'calc(50% - (92% / 2))';
					skin.updateSize(me._iframe1);
				}
			}
		}
		me._iframe1.logicBlock_size();
		me._iframe1.ggUpdatePosition=function (useTransition) {
		}
		el=me.__68=document.createElement('div');
		els=me.__68__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\ub124\uc774\ubc84\uc815\ubcf4\ub780";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : #000000;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='text-align: center;';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__68.ggUpdateText=function() {
			var params = [];
			var hs = player._("", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__68.ggUpdateText();
		el.appendChild(els);
		me.__68.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__68.ggUpdatePosition=function (useTransition) {
		}
		el=me._text_41=document.createElement('div');
		els=me._text_41__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 4";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='bottom : -33px;';
		hs+='color : rgba(85,85,85,0.705882);';
		hs+='height : 20px;';
		hs+='left : 5px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 120px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 13px;';
		hs+='font-weight: inherit;';
		hs+='text-align: left;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._text_41.ggUpdateText=function() {
			var params = [];
			var hs = player._("\ucd9c\ucc98 : KB \ubd80\ub3d9\uc0b0", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._text_41.ggUpdateText();
		el.appendChild(els);
		me._text_41.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._text_41.ggUpdatePosition=function (useTransition) {
		}
		me.__68.appendChild(me._text_41);
		me._iframe1.appendChild(me.__68);
		me.__67.appendChild(me._iframe1);
		me.__66.appendChild(me.__67);
		me.divSkin.appendChild(me.__66);
		el=me.__61=document.createElement('div');
		el.ggId="\ucd94\ucc9c\uc815\ubcf4";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='z-index: 9;';
		hs+='height : 88%;';
		hs+='left : 90px;';
		hs+='position : absolute;';
		hs+='top : 10px;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		hs+='max-width:500px;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__61.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me.__61.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getViewerSize(true).width <= 1120))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me.__61.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me.__61.ggCurrentLogicStatePosition = newLogicStatePosition;
				me.__61.style.transition='left 0s, top 0s, width 0s, height 0s';
				if (me.__61.ggCurrentLogicStatePosition == 0) {
					me.__61.style.left='0px';
					me.__61.style.top='45px';
				}
				else {
					me.__61.style.left='90px';
					me.__61.style.top='10px';
				}
			}
		}
		me.__61.logicBlock_position();
		me.__61.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getViewerSize(true).width <= 1120))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me.__61.ggCurrentLogicStateSize != newLogicStateSize) {
				me.__61.ggCurrentLogicStateSize = newLogicStateSize;
				me.__61.style.transition='left 0s, top 0s, width 0s, height 0s';
				if (me.__61.ggCurrentLogicStateSize == 0) {
					me.__61.style.width='100%';
					me.__61.style.height='100%';
					skin.updateSize(me.__61);
				}
				else {
					me.__61.style.width='100%';
					me.__61.style.height='88%';
					skin.updateSize(me.__61);
				}
			}
		}
		me.__61.logicBlock_size();
		me.__61.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_ad') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__61.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__61.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__61.style.transition='left 0s, top 0s, width 0s, height 0s';
				if (me.__61.ggCurrentLogicStateVisible == 0) {
					me.__61.style.visibility=(Number(me.__61.style.opacity)>0||!me.__61.style.opacity)?'inherit':'hidden';
					me.__61.ggVisible=true;
				}
				else {
					me.__61.style.visibility="hidden";
					me.__61.ggVisible=false;
				}
			}
		}
		me.__61.logicBlock_visible();
		me.__61.ggUpdatePosition=function (useTransition) {
		}
		el=me.__62=document.createElement('div');
		el.ggId="\ucd94\ucc9c\uc815\ubcf4-\ubc30\uacbd";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 20px;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__62.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__62.logicBlock_borderradius = function() {
			var newLogicStateBorderRadius;
			if (
				((player.getViewerSize(true).width <= 1120))
			)
			{
				newLogicStateBorderRadius = 0;
			}
			else {
				newLogicStateBorderRadius = -1;
			}
			if (me.__62.ggCurrentLogicStateBorderRadius != newLogicStateBorderRadius) {
				me.__62.ggCurrentLogicStateBorderRadius = newLogicStateBorderRadius;
				me.__62.style.transition='border-radius 0s';
				if (me.__62.ggCurrentLogicStateBorderRadius == 0) {
					me.__62.style.borderRadius="0px";
				}
				else {
					me.__62.style.borderRadius="20px";
				}
			}
		}
		me.__62.logicBlock_borderradius();
		me.__62.onclick=function (e) {
			player.setVariableValue('vis_ad', false);
		}
		me.__62.ggUpdatePosition=function (useTransition) {
		}
		el=me.__64=document.createElement('div');
		el.ggId="\ucd94\ucc9c\uc815\ubcf4-\ud0c0\uc774\ud2c0";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 24px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 25px;';
		hs+='visibility : inherit;';
		hs+='width : 91%;';
		hs+='pointer-events:none;';
		hs+='margin:0 24px;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__64.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__64.onclick=function (e) {
			player.setVariableValue('vis_ad', false);
		}
		me.__64.ggUpdatePosition=function (useTransition) {
		}
		el=me.__65=document.createElement('div');
		els=me.__65__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\ucd94\ucc9c\uc815\ubcf4-\uc544\ud30c\ud2b8 \uc774\ub984";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(57,57,57,1);';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 30%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='font-size: 15px;';
		hs+='font-weight: bolder;';
		hs+='text-align: left;';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__65.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uc8fc\uad00\uc0ac \ucd94\ucc9c AD", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__65.ggUpdateText();
		el.appendChild(els);
		me.__65.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__65.ggUpdatePosition=function (useTransition) {
		}
		me.__64.appendChild(me.__65);
		el=me._container_11=document.createElement('div');
		el.ggId="\ucd94\ucc9c\uc815\ubcf4-Container 1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 70%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._container_11.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._container_11.ggUpdatePosition=function (useTransition) {
		}
		el=me._rectangle_7_2=document.createElement('div');
		el.ggId="Rectangle 7_2";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(234,236,234,0.705882);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 50px;';
		hs+='height : 30px;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='top : calc(50% - ((30px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 30px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._rectangle_7_2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._rectangle_7_2.ggUpdatePosition=function (useTransition) {
		}
		el=me._svg_19_2=document.createElement('div');
		els=me._svg_19_2__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJmZWF0aGVyIGZlYXRoZXIteCIgZmlsbD0ibm9uZSIgaGVpZ2h0PSIyNCIgc3Ryb2tlLXdpZHRoPSIxLjUiIHdpZHRoPSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij4KIDxsaW5lIHkyPSIxOCIgeTE9IjYiIHgyPSI2IiB4MT0iMTgiLz4KIDxsaW5lIHkyPSIxOCIgeTE9IjYiIHgyPSIxOCIgeDE9IjYiLz4KPC9zdmc+Cg==';
		me._svg_19_2__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Svg 19_2";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 18px;';
		hs+='left : calc(50% - ((18px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((18px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 18px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._svg_19_2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._svg_19_2.ggUpdatePosition=function (useTransition) {
		}
		me._rectangle_7_2.appendChild(me._svg_19_2);
		me._container_11.appendChild(me._rectangle_7_2);
		me.__64.appendChild(me._container_11);
		me.__62.appendChild(me.__64);
		el=me._iframe0=document.createElement('div');
		el.ggId="\ucd94\ucc9c\uc815\ubcf4-iframe";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 80%;';
		hs+='left : calc(50% - ((92% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 70px;';
		hs+='visibility : inherit;';
		hs+='width : 92%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._iframe0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._iframe0.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getViewerSize(true).width <= 1120))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me._iframe0.ggCurrentLogicStateSize != newLogicStateSize) {
				me._iframe0.ggCurrentLogicStateSize = newLogicStateSize;
				me._iframe0.style.transition='width 0s, height 0s';
				if (me._iframe0.ggCurrentLogicStateSize == 0) {
					me._iframe0.style.width='92%';
					me._iframe0.style.height='68%';
					me._iframe0.style.left = 'calc(50% - (92% / 2))';
					skin.updateSize(me._iframe0);
				}
				else {
					me._iframe0.style.width='92%';
					me._iframe0.style.height='80%';
					me._iframe0.style.left = 'calc(50% - (92% / 2))';
					skin.updateSize(me._iframe0);
				}
			}
		}
		me._iframe0.logicBlock_size();
		me._iframe0.ggUpdatePosition=function (useTransition) {
		}
		el=me.__63=document.createElement('div');
		els=me.__63__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\ucd94\ucc9c\uc815\ubcf4-\uc6b0\uc9d1\uc0ac";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : #000000;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : -1px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='text-align: center;';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__63.ggUpdateText=function() {
			var params = [];
			var hs = player._("", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__63.ggUpdateText();
		el.appendChild(els);
		me.__63.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__63.ggUpdatePosition=function (useTransition) {
		}
		el=me._text_40=document.createElement('div');
		els=me._text_40__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\ucd94\ucc9c\uc815\ubcf4-Text 4";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='bottom : -20px;';
		hs+='color : rgba(85,85,85,1);';
		hs+='height : 20px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 120px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 13px;';
		hs+='font-weight: inherit;';
		hs+='text-align: left;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._text_40.ggUpdateText=function() {
			var params = [];
			var hs = player._("", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._text_40.ggUpdateText();
		el.appendChild(els);
		me._text_40.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._text_40.ggUpdatePosition=function (useTransition) {
		}
		me.__63.appendChild(me._text_40);
		me._iframe0.appendChild(me.__63);
		me.__62.appendChild(me._iframe0);
		me.__61.appendChild(me.__62);
		me.divSkin.appendChild(me.__61);
		el=me.__56=document.createElement('div');
		el.ggId="\ub79c\ud558\uc6b0\uc2a4";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='z-index: 9;';
		hs+='height : 88%;';
		hs+='left : 90px;';
		hs+='position : absolute;';
		hs+='top : 10px;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		hs+='max-width:500px;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__56.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me.__56.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getViewerSize(true).width <= 1120))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me.__56.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me.__56.ggCurrentLogicStatePosition = newLogicStatePosition;
				me.__56.style.transition='left 0s, top 0s, width 0s, height 0s';
				if (me.__56.ggCurrentLogicStatePosition == 0) {
					me.__56.style.left='0px';
					me.__56.style.top='45px';
				}
				else {
					me.__56.style.left='90px';
					me.__56.style.top='10px';
				}
			}
		}
		me.__56.logicBlock_position();
		me.__56.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getViewerSize(true).width <= 1120))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me.__56.ggCurrentLogicStateSize != newLogicStateSize) {
				me.__56.ggCurrentLogicStateSize = newLogicStateSize;
				me.__56.style.transition='left 0s, top 0s, width 0s, height 0s';
				if (me.__56.ggCurrentLogicStateSize == 0) {
					me.__56.style.width='100%';
					me.__56.style.height='100%';
					skin.updateSize(me.__56);
				}
				else {
					me.__56.style.width='100%';
					me.__56.style.height='88%';
					skin.updateSize(me.__56);
				}
			}
		}
		me.__56.logicBlock_size();
		me.__56.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_lanhouse') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__56.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__56.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__56.style.transition='left 0s, top 0s, width 0s, height 0s';
				if (me.__56.ggCurrentLogicStateVisible == 0) {
					me.__56.style.visibility=(Number(me.__56.style.opacity)>0||!me.__56.style.opacity)?'inherit':'hidden';
					me.__56.ggVisible=true;
				}
				else {
					me.__56.style.visibility="hidden";
					me.__56.ggVisible=false;
				}
			}
		}
		me.__56.logicBlock_visible();
		me.__56.ggUpdatePosition=function (useTransition) {
		}
		el=me.__57=document.createElement('div');
		el.ggId="\ub79c\ud558\uc6b0\uc2a4-\ubc30\uacbd";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 20px;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__57.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__57.logicBlock_borderradius = function() {
			var newLogicStateBorderRadius;
			if (
				((player.getViewerSize(true).width <= 1120))
			)
			{
				newLogicStateBorderRadius = 0;
			}
			else {
				newLogicStateBorderRadius = -1;
			}
			if (me.__57.ggCurrentLogicStateBorderRadius != newLogicStateBorderRadius) {
				me.__57.ggCurrentLogicStateBorderRadius = newLogicStateBorderRadius;
				me.__57.style.transition='border-radius 0s';
				if (me.__57.ggCurrentLogicStateBorderRadius == 0) {
					me.__57.style.borderRadius="0px";
				}
				else {
					me.__57.style.borderRadius="20px";
				}
			}
		}
		me.__57.logicBlock_borderradius();
		me.__57.onclick=function (e) {
			player.setVariableValue('vis_lanhouse', false);
		}
		me.__57.ggUpdatePosition=function (useTransition) {
		}
		el=me.__59=document.createElement('div');
		el.ggId="\ub79c\ud558\uc6b0\uc2a4-\ud0c0\uc774\ud2c0";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 24px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 25px;';
		hs+='visibility : inherit;';
		hs+='width : 91%;';
		hs+='pointer-events:none;';
		hs+='margin:0 24px;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__59.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__59.onclick=function (e) {
			player.setVariableValue('vis_aptInfo_pc', false);
		}
		me.__59.ggUpdatePosition=function (useTransition) {
		}
		el=me.__60=document.createElement('div');
		els=me.__60__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\ub79c\ud558\uc6b0\uc2a4-\uc544\ud30c\ud2b8 \uc774\ub984";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(57,57,57,1);';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 50%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='font-size: 15px;';
		hs+='font-weight: bolder;';
		hs+='text-align: left;';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__60.ggUpdateText=function() {
			var params = [];
			var hs = player._("\ucee8\ud150\uce20 \uc81c\uc791 - LANHOUSE ", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__60.ggUpdateText();
		el.appendChild(els);
		me.__60.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__60.ggUpdatePosition=function (useTransition) {
		}
		me.__59.appendChild(me.__60);
		el=me._container_10=document.createElement('div');
		el.ggId="\ub79c\ud558\uc6b0\uc2a4-Container 1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 70%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._container_10.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._container_10.onclick=function (e) {
			player.setVariableValue('vis_lanhouse', false);
		}
		me._container_10.ggUpdatePosition=function (useTransition) {
		}
		el=me._rectangle_7_3=document.createElement('div');
		el.ggId="Rectangle 7_3";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(234,236,234,0.705882);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 50px;';
		hs+='height : 30px;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='top : calc(50% - ((30px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 30px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._rectangle_7_3.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._rectangle_7_3.ggUpdatePosition=function (useTransition) {
		}
		el=me._svg_19_3=document.createElement('div');
		els=me._svg_19_3__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJmZWF0aGVyIGZlYXRoZXIteCIgZmlsbD0ibm9uZSIgaGVpZ2h0PSIyNCIgc3Ryb2tlLXdpZHRoPSIxLjUiIHdpZHRoPSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij4KIDxsaW5lIHkyPSIxOCIgeTE9IjYiIHgyPSI2IiB4MT0iMTgiLz4KIDxsaW5lIHkyPSIxOCIgeTE9IjYiIHgyPSIxOCIgeDE9IjYiLz4KPC9zdmc+Cg==';
		me._svg_19_3__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Svg 19_3";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 18px;';
		hs+='left : calc(50% - ((18px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((18px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 18px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._svg_19_3.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._svg_19_3.ggUpdatePosition=function (useTransition) {
		}
		me._rectangle_7_3.appendChild(me._svg_19_3);
		me._container_10.appendChild(me._rectangle_7_3);
		me.__59.appendChild(me._container_10);
		me.__57.appendChild(me.__59);
		el=me._iframe=document.createElement('div');
		el.ggId="\ub79c\ud558\uc6b0\uc2a4-iframe";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 80%;';
		hs+='left : calc(50% - ((92% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 70px;';
		hs+='visibility : inherit;';
		hs+='width : 92%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._iframe.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._iframe.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getViewerSize(true).width <= 1120))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me._iframe.ggCurrentLogicStateSize != newLogicStateSize) {
				me._iframe.ggCurrentLogicStateSize = newLogicStateSize;
				me._iframe.style.transition='width 0s, height 0s';
				if (me._iframe.ggCurrentLogicStateSize == 0) {
					me._iframe.style.width='92%';
					me._iframe.style.height='68%';
					me._iframe.style.left = 'calc(50% - (92% / 2))';
					skin.updateSize(me._iframe);
				}
				else {
					me._iframe.style.width='92%';
					me._iframe.style.height='80%';
					me._iframe.style.left = 'calc(50% - (92% / 2))';
					skin.updateSize(me._iframe);
				}
			}
		}
		me._iframe.logicBlock_size();
		me._iframe.ggUpdatePosition=function (useTransition) {
		}
		el=me.__58=document.createElement('div');
		els=me.__58__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\ub79c\ud558\uc6b0\uc2a4-";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : #000000;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : -1px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='text-align: center;';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__58.ggUpdateText=function() {
			var params = [];
			var hs = player._("", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__58.ggUpdateText();
		el.appendChild(els);
		me.__58.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__58.ggUpdatePosition=function (useTransition) {
		}
		el=me._text_4=document.createElement('div');
		els=me._text_4__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\ub79c\ud558\uc6b0\uc2a4-Text 4";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='bottom : -20px;';
		hs+='color : rgba(85,85,85,1);';
		hs+='height : auto;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='border : 0px solid #000000;';
		hs+='font-size: 11px;';
		hs+='font-weight: inherit;';
		hs+='text-align: left;';
		hs+='white-space: pre-line;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._text_4.ggUpdateText=function() {
			var params = [];
			var hs = player._("", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._text_4.ggUpdateText();
		el.appendChild(els);
		me._text_4.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._text_4.ggUpdatePosition=function (useTransition) {
		}
		me.__58.appendChild(me._text_4);
		me._iframe.appendChild(me.__58);
		me.__57.appendChild(me._iframe);
		me.__56.appendChild(me.__57);
		me.divSkin.appendChild(me.__56);
		el=me.__51=document.createElement('div');
		el.ggId="\ucd94\ucc9c\uc815\ubcf4_\ub2e8\uc5f4\ud544\ub984";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='z-index: 9;';
		hs+='height : 88%;';
		hs+='left : 90px;';
		hs+='position : absolute;';
		hs+='top : 10px;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		hs+='max-width:500px;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__51.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me.__51.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getViewerSize(true).width <= 1120))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me.__51.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me.__51.ggCurrentLogicStatePosition = newLogicStatePosition;
				me.__51.style.transition='left 0s, top 0s, width 0s, height 0s';
				if (me.__51.ggCurrentLogicStatePosition == 0) {
					me.__51.style.left='0px';
					me.__51.style.top='45px';
				}
				else {
					me.__51.style.left='90px';
					me.__51.style.top='10px';
				}
			}
		}
		me.__51.logicBlock_position();
		me.__51.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getViewerSize(true).width <= 1120))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me.__51.ggCurrentLogicStateSize != newLogicStateSize) {
				me.__51.ggCurrentLogicStateSize = newLogicStateSize;
				me.__51.style.transition='left 0s, top 0s, width 0s, height 0s';
				if (me.__51.ggCurrentLogicStateSize == 0) {
					me.__51.style.width='100%';
					me.__51.style.height='100%';
					skin.updateSize(me.__51);
				}
				else {
					me.__51.style.width='100%';
					me.__51.style.height='88%';
					skin.updateSize(me.__51);
				}
			}
		}
		me.__51.logicBlock_size();
		me.__51.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_films') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__51.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__51.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__51.style.transition='left 0s, top 0s, width 0s, height 0s';
				if (me.__51.ggCurrentLogicStateVisible == 0) {
					me.__51.style.visibility=(Number(me.__51.style.opacity)>0||!me.__51.style.opacity)?'inherit':'hidden';
					me.__51.ggVisible=true;
				}
				else {
					me.__51.style.visibility="hidden";
					me.__51.ggVisible=false;
				}
			}
		}
		me.__51.logicBlock_visible();
		me.__51.ggUpdatePosition=function (useTransition) {
		}
		el=me.__52=document.createElement('div');
		el.ggId="\ucd94\ucc9c\uc815\ubcf4_\ub2e8\uc5f4\ud544\ub984\ubc30\uacbd";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 20px;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__52.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__52.logicBlock_borderradius = function() {
			var newLogicStateBorderRadius;
			if (
				((player.getViewerSize(true).width <= 1120))
			)
			{
				newLogicStateBorderRadius = 0;
			}
			else {
				newLogicStateBorderRadius = -1;
			}
			if (me.__52.ggCurrentLogicStateBorderRadius != newLogicStateBorderRadius) {
				me.__52.ggCurrentLogicStateBorderRadius = newLogicStateBorderRadius;
				me.__52.style.transition='border-radius 0s';
				if (me.__52.ggCurrentLogicStateBorderRadius == 0) {
					me.__52.style.borderRadius="0px";
				}
				else {
					me.__52.style.borderRadius="20px";
				}
			}
		}
		me.__52.logicBlock_borderradius();
		me.__52.ggUpdatePosition=function (useTransition) {
		}
		el=me.__54=document.createElement('div');
		el.ggId="\ucd94\ucc9c\uc815\ubcf4-\ud0c0\uc774\ud2c0_\ub2e8\uc5f4\ud544\ub984";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 24px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 25px;';
		hs+='visibility : inherit;';
		hs+='width : 91%;';
		hs+='pointer-events:none;';
		hs+='margin:0 24px;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__54.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__54.onclick=function (e) {
			player.setVariableValue('vis_films', false);
		}
		me.__54.ggUpdatePosition=function (useTransition) {
		}
		el=me.__55=document.createElement('div');
		els=me.__55__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\ucd94\ucc9c\uc815\ubcf4_\ub2e8\uc5f4\ud544\ub984_";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(57,57,57,1);';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 30%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='font-size: 15px;';
		hs+='font-weight: bolder;';
		hs+='text-align: left;';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__55.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uc8fc\uad00\uc0ac \ucd94\ucc9c AD", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__55.ggUpdateText();
		el.appendChild(els);
		me.__55.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__55.ggUpdatePosition=function (useTransition) {
		}
		me.__54.appendChild(me.__55);
		el=me._container_1_=document.createElement('div');
		el.ggId="\ucd94\ucc9c\uc815\ubcf4-Container 1_\ub2e8\uc5f4\ud544\ub984";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 70%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._container_1_.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._container_1_.onclick=function (e) {
			player.setVariableValue('vis_ad', false);
		}
		me._container_1_.ggUpdatePosition=function (useTransition) {
		}
		el=me._rectangle_7_4=document.createElement('div');
		el.ggId="Rectangle 7_4";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(234,236,234,0.705882);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 50px;';
		hs+='height : 30px;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='top : calc(50% - ((30px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 30px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._rectangle_7_4.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._rectangle_7_4.ggUpdatePosition=function (useTransition) {
		}
		el=me._svg_19_4=document.createElement('div');
		els=me._svg_19_4__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJmZWF0aGVyIGZlYXRoZXIteCIgZmlsbD0ibm9uZSIgaGVpZ2h0PSIyNCIgc3Ryb2tlLXdpZHRoPSIxLjUiIHdpZHRoPSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij4KIDxsaW5lIHkyPSIxOCIgeTE9IjYiIHgyPSI2IiB4MT0iMTgiLz4KIDxsaW5lIHkyPSIxOCIgeTE9IjYiIHgyPSIxOCIgeDE9IjYiLz4KPC9zdmc+Cg==';
		me._svg_19_4__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Svg 19_4";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 18px;';
		hs+='left : calc(50% - ((18px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((18px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 18px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._svg_19_4.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._svg_19_4.ggUpdatePosition=function (useTransition) {
		}
		me._rectangle_7_4.appendChild(me._svg_19_4);
		me._container_1_.appendChild(me._rectangle_7_4);
		me.__54.appendChild(me._container_1_);
		me.__52.appendChild(me.__54);
		el=me.__box=document.createElement('div');
		el.ggId="\ucd94\ucc9c\uc815\ubcf4_\ub2e8\uc5f4\ud544\ub984box";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 80%;';
		hs+='left : calc(50% - ((92% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 70px;';
		hs+='visibility : inherit;';
		hs+='width : 92%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__box.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__box.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getViewerSize(true).width <= 1120))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me.__box.ggCurrentLogicStateSize != newLogicStateSize) {
				me.__box.ggCurrentLogicStateSize = newLogicStateSize;
				me.__box.style.transition='width 0s, height 0s';
				if (me.__box.ggCurrentLogicStateSize == 0) {
					me.__box.style.width='92%';
					me.__box.style.height='68%';
					me.__box.style.left = 'calc(50% - (92% / 2))';
					skin.updateSize(me.__box);
				}
				else {
					me.__box.style.width='92%';
					me.__box.style.height='80%';
					me.__box.style.left = 'calc(50% - (92% / 2))';
					skin.updateSize(me.__box);
				}
			}
		}
		me.__box.logicBlock_size();
		me.__box.ggUpdatePosition=function (useTransition) {
		}
		el=me.__53=document.createElement('div');
		els=me.__53__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\ucd94\ucc9c\uc815\ubcf4_\uc6b0\uc9d1\uc0ac \ub2e8\uc5f4\ud544\ub984";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : #000000;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : -1px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='text-align: center;';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__53.ggUpdateText=function() {
			var params = [];
			var hs = player._("", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__53.ggUpdateText();
		el.appendChild(els);
		me.__53.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__53.ggUpdatePosition=function (useTransition) {
		}
		el=me.__127=document.createElement('div');
		els=me.__127__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\ucd94\ucc9c\uc815\ubcf4_\ub2e8\uc5f4\ud544\ub9841";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='bottom : -20px;';
		hs+='color : rgba(85,85,85,1);';
		hs+='height : 20px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 120px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 13px;';
		hs+='font-weight: inherit;';
		hs+='text-align: left;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__127.ggUpdateText=function() {
			var params = [];
			var hs = player._("", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__127.ggUpdateText();
		el.appendChild(els);
		me.__127.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__127.ggUpdatePosition=function (useTransition) {
		}
		me.__53.appendChild(me.__127);
		me.__box.appendChild(me.__53);
		me.__52.appendChild(me.__box);
		me.__51.appendChild(me.__52);
		me.divSkin.appendChild(me.__51);
		el=me._pc16=document.createElement('div');
		el.ggId="pc-\uc911\uc559\ud654\uc0b4\ud45c";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='bottom : 70px;';
		hs+='height : 30px;';
		hs+='left : calc(50% - ((220px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 220px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._pc16.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._pc16.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getViewerSize(true).width <= 1120))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._pc16.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._pc16.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._pc16.style.transition='';
				if (me._pc16.ggCurrentLogicStateVisible == 0) {
					me._pc16.style.visibility="hidden";
					me._pc16.ggVisible=false;
				}
				else {
					me._pc16.style.visibility=(Number(me._pc16.style.opacity)>0||!me._pc16.style.opacity)?'inherit':'hidden';
					me._pc16.ggVisible=true;
				}
			}
		}
		me._pc16.logicBlock_visible();
		me._pc16.ggUpdatePosition=function (useTransition) {
		}
		el=me._rectangle_6=document.createElement('div');
		el.ggId="Rectangle 6";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._rectangle_6.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._rectangle_6.ggUpdatePosition=function (useTransition) {
		}
		el=me._container_5=document.createElement('div');
		el.ggId="Container 5";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 25%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._container_5.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._container_5.onclick=function (e) {
			player.openNext("{"+player.getPrevNode()+"}","");
		}
		me._container_5.ggUpdatePosition=function (useTransition) {
		}
		el=me._svg_1=document.createElement('div');
		els=me._svg_1__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlPSIjZmZmZmZmIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0iZmVhdGhlciBmZWF0aGVyLWNoZXZyb24tbGVmdCIgZmlsbD0ibm9uZSIgaGVpZ2h0PSIyNCIgc3Ryb2tlLXdpZHRoPSIxLjUiIHdpZHRoPSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBzdHJva2Utb3BhY2l0eT0iMSI+CiA8cG9seWxpbmUgcG9pbnRzPSIxNSAxOCA5IDEyIDE1IDYiLz4KPC9zdmc+Cg==';
		me._svg_1__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Svg 1";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 24px;';
		hs+='left : calc(50% - ((24px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((24px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 24px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._svg_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._svg_1.ggUpdatePosition=function (useTransition) {
		}
		me._container_5.appendChild(me._svg_1);
		me._rectangle_6.appendChild(me._container_5);
		el=me._container_6=document.createElement('div');
		el.ggId="Container 6";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='position : absolute;';
		hs+='right : 25%;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 25%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._container_6.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._container_6.onclick=function (e) {
			player.changeFovLog(1,true);
		}
		me._container_6.ggUpdatePosition=function (useTransition) {
		}
		el=me._svg_18=document.createElement('div');
		els=me._svg_18__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlPSIjZmZmZmZmIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0iZmVhdGhlciBmZWF0aGVyLW1pbnVzIiBmaWxsPSJub25lIiBoZWlnaHQ9IjI0IiBzdHJva2Utd2lkdGg9IjEuNSIgd2lkdGg9IjI0IiB2aWV3Qm94PSIwIDAgMjQgMjQiIHN0cm9rZS1vcGFjaXR5PSIxIj4KIDxsaW5lIHkyPSIxMiIgeTE9IjEyIiB4Mj0iMTkiIHgxPSI1Ii8+Cjwvc3ZnPgo=';
		me._svg_18__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Svg 18";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 24px;';
		hs+='left : calc(50% - ((24px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((24px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 24px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._svg_18.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._svg_18.ggUpdatePosition=function (useTransition) {
		}
		me._container_6.appendChild(me._svg_18);
		me._rectangle_6.appendChild(me._container_6);
		el=me._container_7=document.createElement('div');
		el.ggId="Container 7";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='left : 25%;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 25%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._container_7.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._container_7.onclick=function (e) {
			player.changeFovLog(-1,true);
		}
		me._container_7.ggUpdatePosition=function (useTransition) {
		}
		el=me._svg_17=document.createElement('div');
		els=me._svg_17__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlPSIjZmZmZmZmIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0iZmVhdGhlciBmZWF0aGVyLXBsdXMiIGZpbGw9Im5vbmUiIGhlaWdodD0iMjQiIHN0cm9rZS13aWR0aD0iMS41IiB3aWR0aD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgc3Ryb2tlLW9wYWNpdHk9IjEiPgogPGxpbmUgeTI9IjE5IiB5MT0iNSIgeDI9IjEyIiB4MT0iMTIiLz4KIDxsaW5lIHkyPSIxMiIgeTE9IjEyIiB4Mj0iMTkiIHgxPSI1Ii8+Cjwvc3ZnPgo=';
		me._svg_17__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Svg 17";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 24px;';
		hs+='left : calc(50% - ((24px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((24px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 24px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._svg_17.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._svg_17.ggUpdatePosition=function (useTransition) {
		}
		me._container_7.appendChild(me._svg_17);
		me._rectangle_6.appendChild(me._container_7);
		el=me._container_8=document.createElement('div');
		el.ggId="Container 8";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 25%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._container_8.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._container_8.onclick=function (e) {
			player.openNext("{"+player.getNextNode()+"}","");
		}
		me._container_8.ggUpdatePosition=function (useTransition) {
		}
		el=me._svg_2=document.createElement('div');
		els=me._svg_2__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlPSIjZmZmZmZmIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0iZmVhdGhlciBmZWF0aGVyLWNoZXZyb24tcmlnaHQiIGZpbGw9Im5vbmUiIGhlaWdodD0iMjQiIHN0cm9rZS13aWR0aD0iMS41IiB3aWR0aD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgc3Ryb2tlLW9wYWNpdHk9IjEiPgogPHBvbHlsaW5lIHBvaW50cz0iOSAxOCAxNSAxMiA5IDYiLz4KPC9zdmc+Cg==';
		me._svg_2__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Svg 2";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 24px;';
		hs+='left : calc(50% - ((24px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((24px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 24px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._svg_2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._svg_2.ggUpdatePosition=function (useTransition) {
		}
		me._container_8.appendChild(me._svg_2);
		me._rectangle_6.appendChild(me._container_8);
		me._pc16.appendChild(me._rectangle_6);
		me.divSkin.appendChild(me._pc16);
		el=me.__36=document.createElement('div');
		el.ggId="\ubaa8\ubc14\uc77c-\uacf5\uac04\uc774\ub3d9-\ubaa8\ubc14\uc77c";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='z-index: 9;';
		hs+='bottom : -1000px;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		hs+='max-width:500px;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__36.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me.__36.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getVariableValue('vis_m_roomMove') == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me.__36.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me.__36.ggCurrentLogicStatePosition = newLogicStatePosition;
				me.__36.style.transition='left 500ms linear 0ms, bottom 500ms linear 0ms';
				if (me.__36.ggCurrentLogicStatePosition == 0) {
					me.__36.style.left='0px';
					me.__36.style.bottom='-46px';
				}
				else {
					me.__36.style.left='0px';
					me.__36.style.bottom='-1000px';
				}
			}
		}
		me.__36.logicBlock_position();
		me.__36.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_m_roomMove') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__36.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__36.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__36.style.transition='left 500ms linear 0ms, bottom 500ms linear 0ms';
				if (me.__36.ggCurrentLogicStateVisible == 0) {
					me.__36.style.visibility=(Number(me.__36.style.opacity)>0||!me.__36.style.opacity)?'inherit':'hidden';
					me.__36.ggVisible=true;
				}
				else {
					me.__36.style.visibility="hidden";
					me.__36.ggVisible=false;
				}
			}
		}
		me.__36.logicBlock_visible();
		me.__36.ggUpdatePosition=function (useTransition) {
		}
		el=me.__37=document.createElement('div');
		el.ggId="\ubaa8\ubc14\uc77c-\uacf5\uac04\uc774\ub3d9-\ubc30\uacbd";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__37.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__37.onclick=function (e) {
			player.setVariableValue('vis_m_roomMove', false);
		}
		me.__37.ggUpdatePosition=function (useTransition) {
		}
		el=me.__40=document.createElement('div');
		el.ggId="\ubaa8\ubc14\uc77c-\uacf5\uac04\uc774\ub3d9-\uc2a4\ud06c\ub864";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 65px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__40.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__40.ggUpdatePosition=function (useTransition) {
		}
		el=me._scrollarea_1=document.createElement('div');
		els=me._scrollarea_1__content=document.createElement('div');
		els.className='ggskin ggskin_subelement ggskin_scrollarea';
		el.ggContent=els;
		el.appendChild(els);
		el.ggHorScrollVisible = false;
		el.ggVertScrollVisible = false;
		el.ggContentLeftOffset = 0;
		el.ggContentTopOffset = 0;
		el.ggContentWidth = 0;
		el.ggContentHeight = 0;
		el.ggDragInertiaX = 0;
		el.ggDragInertiaY = 0;
		el.ggVPercentVisible = 1.0;
		el.ggHPercentVisible = 1.0;
		el.ggIsDragging = false;
		hs ='';
		hs+='height : 373px;';
		hs+='left : 0px;';
		hs+='overflow-x : visible;';
		hs+='overflow-y : visible;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='width : 575px;';
		hs+="";
		els.setAttribute('style',hs);
		me._scrollarea_1.ggScrollByX = function(diffX) {
			if(!me._scrollarea_1.ggHorScrollVisible || diffX == 0 || me._scrollarea_1.ggHPercentVisible >= 1.0) return;
			me._scrollarea_1.ggScrollPosX = (me._scrollarea_1__horScrollFg.offsetLeft + diffX);
			me._scrollarea_1.ggScrollPosX = Math.max(me._scrollarea_1.ggScrollPosX, 0);
			me._scrollarea_1.ggScrollPosX = Math.min(me._scrollarea_1.ggScrollPosX, me._scrollarea_1__horScrollBg.offsetWidth - me._scrollarea_1__horScrollFg.offsetWidth);
			me._scrollarea_1__horScrollFg.style.left = me._scrollarea_1.ggScrollPosX + 'px';
			let percentScrolled = me._scrollarea_1.ggScrollPosX / (me._scrollarea_1__horScrollBg.offsetWidth - me._scrollarea_1__horScrollFg.offsetWidth);
			me._scrollarea_1__content.style.left = -(Math.round((me._scrollarea_1.ggContentWidth * (1.0 - me._scrollarea_1.ggHPercentVisible)) * percentScrolled)) + me._scrollarea_1.ggContentLeftOffset + 'px';
			me._scrollarea_1.ggScrollPosXPercent = (me._scrollarea_1__horScrollFg.offsetLeft / me._scrollarea_1__horScrollBg.offsetWidth);
		}
		me._scrollarea_1.ggScrollByXSmooth = function(diffX) {
			if(!me._scrollarea_1.ggHorScrollVisible || diffX == 0 || me._scrollarea_1.ggHPercentVisible >= 1.0) return;
			var scrollPerInterval = diffX / 25;
			var scrollCurrX = 0;
			var id = setInterval(function() {
				scrollCurrX += scrollPerInterval;
				me._scrollarea_1.ggScrollPosX += scrollPerInterval;
				if (diffX > 0 && (scrollCurrX >= diffX || me._scrollarea_1.ggScrollPosX >= me._scrollarea_1__horScrollBg.offsetWidth - me._scrollarea_1__horScrollFg.offsetWidth)) {
					me._scrollarea_1.ggScrollPosX = Math.min(me._scrollarea_1.ggScrollPosX, me._scrollarea_1__horScrollBg.offsetWidth - me._scrollarea_1__horScrollFg.offsetWidth);
					clearInterval(id);
				}
				if (diffX < 0 && (scrollCurrX <= diffX || me._scrollarea_1.ggScrollPosX <= 0)) {
					me._scrollarea_1.ggScrollPosX = Math.max(me._scrollarea_1.ggScrollPosX, 0);
					clearInterval(id);
				}
			me._scrollarea_1__horScrollFg.style.left = me._scrollarea_1.ggScrollPosX + 'px';
			let percentScrolled = me._scrollarea_1.ggScrollPosX / (me._scrollarea_1__horScrollBg.offsetWidth - me._scrollarea_1__horScrollFg.offsetWidth);
			me._scrollarea_1__content.style.left = -(Math.round((me._scrollarea_1.ggContentWidth * (1.0 - me._scrollarea_1.ggHPercentVisible)) * percentScrolled)) + me._scrollarea_1.ggContentLeftOffset + 'px';
			me._scrollarea_1.ggScrollPosXPercent = (me._scrollarea_1__horScrollFg.offsetLeft / me._scrollarea_1__horScrollBg.offsetWidth);
			}, 10);
		}
		me._scrollarea_1.ggScrollByY = function(diffY) {
			if(!me._scrollarea_1.ggVertScrollVisible || diffY == 0 || me._scrollarea_1.ggVPercentVisible >= 1.0) return;
			me._scrollarea_1.ggScrollPosY = (me._scrollarea_1__vertScrollFg.offsetTop + diffY);
			me._scrollarea_1.ggScrollPosY = Math.max(me._scrollarea_1.ggScrollPosY, 0);
			me._scrollarea_1.ggScrollPosY = Math.min(me._scrollarea_1.ggScrollPosY, me._scrollarea_1__vertScrollBg.offsetHeight - me._scrollarea_1__vertScrollFg.offsetHeight);
			me._scrollarea_1__vertScrollFg.style.top = me._scrollarea_1.ggScrollPosY + 'px';
			let percentScrolled = me._scrollarea_1.ggScrollPosY / (me._scrollarea_1__vertScrollBg.offsetHeight - me._scrollarea_1__vertScrollFg.offsetHeight);
			me._scrollarea_1__content.style.top = -(Math.round((me._scrollarea_1.ggContentHeight * (1.0 - me._scrollarea_1.ggVPercentVisible)) * percentScrolled)) + me._scrollarea_1.ggContentTopOffset + 'px';
			me._scrollarea_1.ggScrollPosYPercent = (me._scrollarea_1__vertScrollFg.offsetTop / me._scrollarea_1__vertScrollBg.offsetHeight);
		}
		me._scrollarea_1.ggScrollByYSmooth = function(diffY) {
			if(!me._scrollarea_1.ggVertScrollVisible || diffY == 0 || me._scrollarea_1.ggVPercentVisible >= 1.0) return;
			var scrollPerInterval = diffY / 25;
			var scrollCurrY = 0;
			var id = setInterval(function() {
				scrollCurrY += scrollPerInterval;
				me._scrollarea_1.ggScrollPosY += scrollPerInterval;
				if (diffY > 0 && (scrollCurrY >= diffY || me._scrollarea_1.ggScrollPosY >= me._scrollarea_1__vertScrollBg.offsetHeight - me._scrollarea_1__vertScrollFg.offsetHeight)) {
					me._scrollarea_1.ggScrollPosY = Math.min(me._scrollarea_1.ggScrollPosY, me._scrollarea_1__vertScrollBg.offsetHeight - me._scrollarea_1__vertScrollFg.offsetHeight);
					clearInterval(id);
				}
				if (diffY < 0 && (scrollCurrY <= diffY || me._scrollarea_1.ggScrollPosY <= 0)) {
					me._scrollarea_1.ggScrollPosY = Math.max(me._scrollarea_1.ggScrollPosY, 0);
					clearInterval(id);
				}
			me._scrollarea_1__vertScrollFg.style.top = me._scrollarea_1.ggScrollPosY + 'px';
			let percentScrolled = me._scrollarea_1.ggScrollPosY / (me._scrollarea_1__vertScrollBg.offsetHeight - me._scrollarea_1__vertScrollFg.offsetHeight);
			me._scrollarea_1__content.style.top = -(Math.round((me._scrollarea_1.ggContentHeight * (1.0 - me._scrollarea_1.ggVPercentVisible)) * percentScrolled)) + me._scrollarea_1.ggContentTopOffset + 'px';
			me._scrollarea_1.ggScrollPosYPercent = (me._scrollarea_1__vertScrollFg.offsetTop / me._scrollarea_1__vertScrollBg.offsetHeight);
			}, 10);
		}
		me._scrollarea_1.ggScrollIntoView = function(posX, posY, width, height) {
			if (me._scrollarea_1.ggHorScrollVisible) {
				if (posX < 0) {
					var diffX = Math.floor(posX * me._scrollarea_1.ggHPercentVisible);
					me._scrollarea_1.ggScrollByXSmooth(diffX);
				} else if (posX + width > me._scrollarea_1.clientWidth - (me._scrollarea_1.ggVertScrollVisible ? 2 : 0)) {
					var diffX = Math.ceil(((posX + width) - (me._scrollarea_1.clientWidth - (me._scrollarea_1.ggVertScrollVisible ? 2 : 0))) * me._scrollarea_1.ggHPercentVisible);
					me._scrollarea_1.ggScrollByXSmooth(diffX);
				}
			}
			if (me._scrollarea_1.ggVertScrollVisible) {
				if (posY < 0) {
					var diffY = Math.floor(posY * me._scrollarea_1.ggVPercentVisible);
					me._scrollarea_1.ggScrollByYSmooth(diffY);
				} else if (posY + height > me._scrollarea_1.clientHeight - (me._scrollarea_1.ggHorScrollVisible ? 2 : 0)) {
					var diffY = Math.ceil(((posY + height) - (me._scrollarea_1.clientHeight - (me._scrollarea_1.ggHorScrollVisible ? 2 : 0))) * me._scrollarea_1.ggVPercentVisible);
					me._scrollarea_1.ggScrollByYSmooth(diffY);
				}
			}
		}
		me._scrollarea_1__content.mousetouchend = e => {
			let inertiaInterval = setInterval(function() {
				me._scrollarea_1.ggDragInertiaX *= 0.96;
				me._scrollarea_1.ggDragInertiaY *= 0.96;
				me._scrollarea_1.ggScrollByX(me._scrollarea_1.ggDragInertiaX);
				me._scrollarea_1.ggScrollByY(me._scrollarea_1.ggDragInertiaY);
				if (Math.abs(me._scrollarea_1.ggDragInertiaX) < 1.0 && Math.abs(me._scrollarea_1.ggDragInertiaY) < 1.0) {
					clearInterval(inertiaInterval);
				}
				}, 10);
			me._scrollarea_1__content.onmouseup = null;
			me._scrollarea_1__content.onmousemove = null;
			me._scrollarea_1__content.ontouchend = null;
			me._scrollarea_1__content.ontouchmove = null;
			me._scrollarea_1__content.onpointerup = null;
			me._scrollarea_1__content.onpointermove = null;
			setTimeout(function() { me._scrollarea_1.ggIsDragging = false; }, 100);
		}
		me._scrollarea_1__content.mousetouchmove = e => {
			e = e || window.event;
			e.preventDefault();
			var t = e.touches;
			var eventX = t ? t[0].clientX : e.clientX;
			var eventY = t ? t[0].clientY : e.clientY;
			if (Math.abs(eventX - me._scrollarea_1.ggDragStartX) > 10 || Math.abs(eventY - me._scrollarea_1.ggDragStartY) > 10) me._scrollarea_1.ggIsDragging = true;
			var diffX = (eventX - me._scrollarea_1.ggDragLastX) * me._scrollarea_1.ggHPercentVisible;
			var diffY = (eventY - me._scrollarea_1.ggDragLastY) * me._scrollarea_1.ggVPercentVisible;
			me._scrollarea_1.ggDragInertiaX = -diffX;
			me._scrollarea_1.ggDragInertiaY = -diffY;
			me._scrollarea_1.ggDragLastX = eventX;
			me._scrollarea_1.ggDragLastY = eventY;
			me._scrollarea_1.ggScrollByX(-diffX);
			me._scrollarea_1.ggScrollByY(-diffY);
		}
		me._scrollarea_1__content.mousetouchstart = e => {
			e = e || window.event;
			var t = e.touches;
			me._scrollarea_1.ggDragLastX = me._scrollarea_1.ggDragStartX = t ? t[0].clientX : e.clientX;
			me._scrollarea_1.ggDragLastY = me._scrollarea_1.ggDragStartY = t ? t[0].clientY : e.clientY;
			me._scrollarea_1__content.onmouseup = me._scrollarea_1__content.mousetouchend;
			me._scrollarea_1__content.ontouchend = me._scrollarea_1__content.mousetouchend;
			me._scrollarea_1__content.onmousemove = me._scrollarea_1__content.mousetouchmove;
			me._scrollarea_1__content.ontouchmove = me._scrollarea_1__content.mousetouchmove;
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				me._scrollarea_1__content.onpointerup = me._scrollarea_1__content.ontouchend;
				me._scrollarea_1__content.onpointermove = me._scrollarea_1__content.ontouchmove;
			}
		}
		els.onmousedown = me._scrollarea_1__content.mousetouchstart;
		els.ontouchstart = me._scrollarea_1__content.mousetouchstart;
		if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
			els.onpointerdown = me._scrollarea_1__content.mousetouchstart;
		}
		elVertScrollBg = me._scrollarea_1__vertScrollBg = document.createElement('div');
		el.appendChild(elVertScrollBg);
		elVertScrollBg.setAttribute('style', 'position: absolute; right: 0px; top: 0px; visibility: hidden; width: 2px; height: 384px; background-color: rgba(210,210,210,1); pointer-events: auto;');
		elVertScrollBg.className='ggskin ggskin_scrollarea_vscrollbg';
		elVertScrollFg = me._scrollarea_1__vertScrollFg = document.createElement('div');
		elVertScrollBg.appendChild(elVertScrollFg);
		elVertScrollFg.setAttribute('style', 'position: absolute; left: 0px; top: 0px; visibility: hidden; width: 2px; height: 384px; background-color: rgba(0,0,0,0.196078); pointer-events: auto;');
		elVertScrollFg.className='ggskin ggskin_scrollarea_vscrollfg';
		me._scrollarea_1.ggScrollPosY = 0;
		me._scrollarea_1.ggScrollPosYPercent = 0.0;
		elVertScrollFg.onmousedown = function(e) {
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) return;
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			me._scrollarea_1.ggDragLastY = e.clientY;
			document.onmouseup = function() {
				let inertiaInterval = setInterval(function() {
					me._scrollarea_1.ggDragInertiaY *= 0.96;
					me._scrollarea_1.ggScrollByY(me._scrollarea_1.ggDragInertiaY);
					if (Math.abs(me._scrollarea_1.ggDragInertiaY) < 1.0) {
						clearInterval(inertiaInterval);
					}
					}, 10);
				document.onmouseup = null;
				document.onmousemove = null;
			}
			document.onmousemove = function(e) {
				e = e || window.event;
				e.preventDefault();
				var diffY = e.clientY - me._scrollarea_1.ggDragLastY;
				me._scrollarea_1.ggDragInertiaY = diffY;
				me._scrollarea_1.ggDragLastY = e.clientY;
				me._scrollarea_1.ggScrollByY(diffY);
			}
		}
		elVertScrollFg.ontouchstart = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			var t = e.touches;
			me._scrollarea_1.ggDragLastY = t ? t[0].clientY : e.clientY;
			document.ontouchend = function() {
				let inertiaInterval = setInterval(function() {
					me._scrollarea_1.ggDragInertiaY *= 0.96;
					me._scrollarea_1.ggScrollByY(me._scrollarea_1.ggDragInertiaY);
					if (Math.abs(me._scrollarea_1.ggDragInertiaY) < 1.0) {
						clearInterval(inertiaInterval);
					}
					}, 10);
				document.ontouchend = null;
				document.ontouchmove = null;
				document.onpointerup = null;
				document.onpointermove = null;
			}
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				document.onpointerup = document.ontouchend;
			}
			document.ontouchmove = function(e) {
				e = e || window.event;
				e.preventDefault();
				var t = e.touches;
				var diffY = (t ? t[0].clientY : e.clientY) - me._scrollarea_1.ggDragLastY;
				me._scrollarea_1.ggDragInertiaY = diffY;
				me._scrollarea_1.ggDragLastY = t ? t[0].clientY : e.clientY;
				me._scrollarea_1.ggScrollByY(diffY);
			}
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				document.onpointermove = document.ontouchmove;
			}
		}
		if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
			elVertScrollFg.onpointerdown = elVertScrollFg.ontouchstart;
		}
		elVertScrollBg.onmousedown = function(e) {
			e = e || window.event;
			e.preventDefault();
			var diffY = me._scrollarea_1.ggScrollHeight;
			if (e.offsetY < me._scrollarea_1.ggScrollPosY) {
				diffY = diffY * -1;
			}
			me._scrollarea_1.ggScrollByYSmooth(diffY);
		}
		elVertScrollBg.ontouchstart = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			var t = e.touches;
			var rect = me._scrollarea_1__vertScrollBg.getBoundingClientRect();
			var diffY = me._scrollarea_1.ggScrollHeight;
			if ((t[0].clientY - rect.top) < me._scrollarea_1.ggScrollPosY) {
				diffY = diffY * -1;
			}
			me._scrollarea_1.ggScrollByYSmooth(diffY);
		}
		el.addEventListener('wheel', function(e) {
			e.preventDefault();
			var wheelDelta = Math.sign(e.deltaY);
			me._scrollarea_1.ggScrollByYSmooth(30 * me._scrollarea_1.ggVPercentVisible * wheelDelta);
		});
		elCornerBg = me._scrollarea_1__cornerBg = document.createElement('div');
		el.appendChild(elCornerBg);
		elCornerBg.setAttribute('style', 'position: absolute; right: 0px; bottom: 0px; visibility: hidden; width: 2px; height: 2px; background-color: rgba(255,255,255,1);');
		elCornerBg.className='ggskin ggskin_scrollarea_scrollcorner';
		el.ggId="\ubaa8\ubc14\uc77c-\uacf5\uac04\uc774\ub3d9-Scrollarea 1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_scrollarea ";
		el.ggType='scrollarea';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='height : 80%;';
		hs+='left : -10px;';
		hs+='overflow : hidden;';
		hs+='position : absolute;';
		hs+='top : 10px;';
		hs+='visibility : inherit;';
		hs+='width : 90%;';
		hs+='pointer-events:auto;';
		hs+='margin:0 25px;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._scrollarea_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._scrollarea_1.ggUpdatePosition=function (useTransition) {
			{
				var horScrollWasVisible = this.ggHorScrollVisible;
				var vertScrollWasVisible = this.ggVertScrollVisible;
				this.ggContent.style.left = '0px';
				this.ggContent.style.top = '0px';
				this.ggContentLeftOffset = 0;
				this.ggContentTopOffset = 0;
				var offsetWidthWithScale = this.getBoundingClientRect().width;
				var offsetHeightWithScale = this.getBoundingClientRect().height;
				var domRectContent = this.ggContent.getBoundingClientRect();
				var minX = 0;
				var minY = 0;
				var maxX = 0;
				var maxY = 0;
				var stack=[];
				stack.push(this.ggContent);
				while(stack.length>0) {
					var e=stack.pop();
					if (e!=this.ggContent && e.getBoundingClientRect && e.style['display']!='none' && (e.offsetWidth != 0 || e.offsetHeight != 0)) {
						var domRectChild = e.getBoundingClientRect();
						var diffX = domRectChild.left - domRectContent.left;
						minX = Math.min(minX, diffX);
						maxX = Math.max(maxX, diffX + domRectChild.width);
						var diffY = domRectChild.top - domRectContent.top;
						minY = Math.min(minY, diffY);
						maxY = Math.max(maxY, diffY + domRectChild.height);
					}
					if (e.hasChildNodes() && e.style['display']!='none' && e.style['overflow']!='hidden') {
						for(var i=0;i<e.childNodes.length;i++) {
							stack.push(e.childNodes[i]);
						}
					}
				}
				if (minX < 0) this.ggContentLeftOffset = -minX;
				if (minY < 0) this.ggContentTopOffset = -minY;
				this.ggContent.style.left = this.ggContentLeftOffset + 'px';
				this.ggContent.style.top = this.ggContentTopOffset + 'px';
				var contentWidth = maxX - minX;
				this.ggContent.style.width = contentWidth + 'px';
				var contentHeight = maxY - minY;
				this.ggContent.style.height = contentHeight + 'px';
			var scaleX = this.getBoundingClientRect().width / this.offsetWidth;
				this.ggContentWidth = contentWidth / scaleX;
			var scaleY = this.getBoundingClientRect().height / this.offsetHeight;
				this.ggContentHeight = contentHeight / scaleY;
				this.ggContent.style.left = this.ggContentLeftOffset + 'px';
				this.ggContent.style.marginLeft = '0px';
				this.ggContent.style.top = -(Math.round(me._scrollarea_1.ggScrollPosY / me._scrollarea_1.ggVPercentVisible)) + this.ggContentTopOffset + 'px';
				this.ggContent.style.marginTop = '0px';
				me._scrollarea_1__vertScrollBg.style.visibility = 'inherit';
				me._scrollarea_1__vertScrollFg.style.visibility = 'inherit';
				me._scrollarea_1.ggVertScrollVisible = true;
				if(me._scrollarea_1.ggVertScrollVisible) {
					me._scrollarea_1.ggAvailableWidth = me._scrollarea_1.clientWidth - 2;
					if (me._scrollarea_1.ggHorScrollVisible) {
						me._scrollarea_1.ggAvailableHeight = me._scrollarea_1.clientHeight - 2;
						me._scrollarea_1.ggAvailableHeightWithScale = me._scrollarea_1.getBoundingClientRect().height - me._scrollarea_1__vertScrollBg.getBoundingClientRect().width;
						me._scrollarea_1__cornerBg.style.visibility = 'inherit';
					} else {
						me._scrollarea_1.ggAvailableHeight = me._scrollarea_1.clientHeight;
						me._scrollarea_1.ggAvailableHeightWithScale = me._scrollarea_1.getBoundingClientRect().height;
						me._scrollarea_1__cornerBg.style.visibility = 'hidden';
					}
					me._scrollarea_1__vertScrollBg.style.height = me._scrollarea_1.ggAvailableHeight + 'px';
					me._scrollarea_1.ggVPercentVisible = contentHeight != 0 ? me._scrollarea_1.ggAvailableHeightWithScale / contentHeight : 0.0;
					if (me._scrollarea_1.ggVPercentVisible > 1.0) me._scrollarea_1.ggVPercentVisible = 1.0;
					me._scrollarea_1.ggScrollHeight =  Math.round(me._scrollarea_1__vertScrollBg.offsetHeight * me._scrollarea_1.ggVPercentVisible);
					me._scrollarea_1__vertScrollFg.style.height = me._scrollarea_1.ggScrollHeight + 'px';
					me._scrollarea_1.ggScrollPosY = me._scrollarea_1.ggScrollPosYPercent * me._scrollarea_1.ggAvailableHeight;
					me._scrollarea_1.ggScrollPosY = Math.min(me._scrollarea_1.ggScrollPosY, me._scrollarea_1__vertScrollBg.offsetHeight - me._scrollarea_1__vertScrollFg.offsetHeight);
					me._scrollarea_1__vertScrollFg.style.top = me._scrollarea_1.ggScrollPosY + 'px';
					if (me._scrollarea_1.ggVPercentVisible < 1.0) {
						let percentScrolled = me._scrollarea_1.ggScrollPosY / (me._scrollarea_1__vertScrollBg.offsetHeight - me._scrollarea_1__vertScrollFg.offsetHeight);
						me._scrollarea_1__content.style.top = -(Math.round((me._scrollarea_1.ggContentHeight * (1.0 - me._scrollarea_1.ggVPercentVisible)) * percentScrolled)) + me._scrollarea_1.ggContentTopOffset + 'px';
					}
				} else {
					me._scrollarea_1.ggAvailableWidth = me._scrollarea_1.clientWidth;
					me._scrollarea_1.ggScrollPosY = 0;
					me._scrollarea_1.ggScrollPosYPercent = 0.0;
					me._scrollarea_1__content.style.top = this.ggContentTopOffset + 'px';
					me._scrollarea_1__cornerBg.style.visibility = 'hidden';
				}
				if(horScrollWasVisible != me._scrollarea_1.ggHorScrollVisible || vertScrollWasVisible != me._scrollarea_1.ggVertScrollVisible) {
					skin.updateSize(me._scrollarea_1);
					me._scrollarea_1.ggUpdatePosition();
				}
			}
		}
		el=me._container_20=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._container_20;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		el.ggId="\ubaa8\ubc14\uc77c-Container 2";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : -10px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._container_20.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._container_20.ggUpdatePosition=function (useTransition) {
		}
		el=me.__620px_=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me.__620px_;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		el.ggNumRepeat = 100;
		el.ggNumRows = 0;
		el.ggNumCols = 0;
		el.ggCloneOffset = 0;
		el.ggCloneOffsetChanged = false;
		el.ggWidth = 210;
		el.ggHeight = 307.2;
		el.ggUpdating = false;
		el.ggFilter = [];
		el.ggFilterHsSkinId = '';
		el.ggInstances = [];
		el.ggNumFilterPassed = 0;
		el.ggAutoPosition = function(init) {
			var currYPos = 0;
			var numElements = me.__620px_.ggInstances.length;
			var currElement = 0;
			for (var i=0; i<me.__620px_.ggNumRows; i++) {
				var rowMaxHeight = 0;
				for (var j=0; j<me.__620px_.ggNumCols; j++) {
					if (numElements > currElement) {
						if (!init) {
							if (me.__620px_.childNodes[currElement].clientHeight < me.__620px_.childNodes[currElement].scrollHeight && currElement < (numElements - 1)) {
								me.__620px_.childNodes[currElement].style.transition = 'top ' + 1 + 's, height ' + 1 + 's';
							} else {
								me.__620px_.childNodes[currElement].style.transition = 'top ' + 1 + 's';
							}
						}
						me.__620px_.childNodes[currElement].style.overflow = 'hidden';
						me.__620px_.childNodes[currElement].style['top'] = currYPos + 'px';
						me.__620px_.childNodes[currElement].style['height'] ='0px';
						rowMaxHeight = Math.max(rowMaxHeight, me.__620px_.childNodes[currElement].scrollHeight);
						me.__620px_.childNodes[currElement].style['height'] = rowMaxHeight + 'px';
					}
					currElement++;
				}
				currYPos += rowMaxHeight;
			}
			setTimeout(function() {
				var p = me.__620px_.parentElement;
				while (p != null && p !== me.divSkin) {
					if (p.ggType && p.ggType == 'scrollarea') {
						if (p.ggUpdatePosition) {
							p.ggUpdatePosition();
						}
					}
					p = p.parentElement;
				}
			}, 1000);
		}
		el.getFilteredNodes = function(tourNodes, filter) {
			var filteredNodes = [];
			for (var i = 0; i < tourNodes.length; i++) {
				var nodeId = tourNodes[i];
				var passed = true;
				var nodeData = player.getNodeUserdata(nodeId);
				if (filter.length > 0) {
					for (var j=0; j < filter.length; j++) {
						if (nodeData['tags'].indexOf(filter[j].trim()) == -1) passed = false;
					}
				}
				if (passed) {
					filteredNodes.push(nodeId);
				}
			}
			return filteredNodes;
		}
		el.ggUpdate = function(filter) {
			if(me.__620px_.ggUpdating == true) return;
			me.__620px_.ggUpdating = true;
			var el=me.__620px_;
			var curNumCols = 0;
			var parentWidth = me.__620px_.parentNode.classList.contains('ggskin_subelement') ? (me.__620px_.parentNode.parentNode.classList.contains('ggskin_scrollarea') ? me.__620px_.parentNode.parentNode.ggAvailableWidth : me.__620px_.parentNode.parentNode.clientWidth) : me.__620px_.parentNode.clientWidth;
			if (parentWidth == 0) parentWidth = me.__620px_.parentNode.parentNode.clientWidth;
			curNumCols = Math.floor(((parentWidth - me.__620px_.offsetLeft) * me.__620px_.ggNumRepeat / 100.0) / me.__620px_.offsetWidth);
			if (curNumCols < 1) curNumCols = 1;
			if (typeof filter=='object') {
				el.ggFilter = filter;
			} else {
				filter = el.ggFilter;
			};
			if (me.ggTag) filter.push(me.ggTag);
			filter=filter.sort();
			if ((el.ggNumCols == curNumCols) && (el.ggInstances.length > 0) && (filter.length === el.ggCurrentFilter.length) && (filter.every(function(value, index) { return value === el.ggCurrentFilter[index] }) )) {
				me.__620px_.ggUpdating = false;
				return;
			} else {
				el.ggNumRows = 1;
				el.ggNumCols = curNumCols;
			var centerOffsetHor = 0;
			var centerOffsetVert = 0;
				me.__620px_.ggCloneOffsetChanged = false;
			}
			el.ggCurrentFilter = filter;
			el.ggInstances = [];
			if (el.hasChildNodes() == true) {
				while (el.firstChild) {
					el.removeChild(el.firstChild);
				}
			}
			var tourNodes = player.getNodeIds();
			if (tourNodes.length == 0) {
				me.__620px_.ggUpdating = false;
				return;
			}
			var row = 0;
			var column = 0;
			var currentIndex = 0;
			var keepCloning = true;
			tourNodes = me.__620px_.getFilteredNodes(tourNodes, filter);
			me.__620px_.ggNumFilterPassed = tourNodes.length;
			for (var i = 0; i < tourNodes.length; i++) {
				var nodeId = tourNodes[i];
				var nodeData = player.getNodeUserdata(nodeId);
				if (!keepCloning || i < me.__620px_.ggCloneOffset) continue;
				var parameter={};
				parameter.top = centerOffsetVert + (row * me.__620px_.ggHeight) + 'px';
				parameter.left = centerOffsetHor + (column * me.__620px_.ggWidth) + 'px';
				parameter.width=me.__620px_.ggWidth + 'px';
				parameter.height='100%';
				parameter.index=currentIndex;
				parameter.title=nodeData['title'];
				var inst = new SkinCloner__620px__Class(nodeId, me, el, parameter);
				currentIndex++;
				inst.__div.style['height'] = '0px';
				el.ggInstances.push(inst);
				el.appendChild(inst.__div);
				inst.__div.ggObj=inst;
				skin.updateSize(inst.__div);
				column++;
				if (column >= el.ggNumCols) {
					column = 0;
					row++;
					el.ggNumRows++;
				}
			}
			me.__620px_.ggNodeCount = me.__620px_.ggNumFilterPassed;
			me.__620px_.ggAutoPosition(true);
			me.__620px_.ggUpdating = false;
			player.triggerEvent('clonerchanged');
			if (me.__620px_.parentNode && me.__620px_.parentNode.classList.contains('ggskin_subelement') && me.__620px_.parentNode.parentNode.classList.contains('ggskin_scrollarea')) me.__620px_.parentNode.parentNode.ggUpdatePosition();
		}
		el.ggFilter = [];
		el.ggId="\ubaa8\ubc14\uc77c-620px \uc774\uc0c1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_cloner ";
		el.ggType='cloner';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 80%;';
		hs+='left : 0px;';
		hs+='overflow : visible;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 210px;';
		hs+='pointer-events:none;';
		hs+='min-width:100px;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__620px_.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__620px_.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getViewerSize(true).width > 620))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__620px_.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__620px_.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__620px_.style.transition='';
				if (me.__620px_.ggCurrentLogicStateVisible == 0) {
					me.__620px_.style.visibility=(Number(me.__620px_.style.opacity)>0||!me.__620px_.style.opacity)?'inherit':'hidden';
					me.__620px_.ggVisible=true;
				}
				else {
					me.__620px_.style.visibility="hidden";
					me.__620px_.ggVisible=false;
				}
			}
		}
		me.__620px_.logicBlock_visible();
		me.__620px_.ggCurrentLogicStateVisible = -1;
		me.__620px_.ggUpdateConditionNodeChange=function () {
			var cnode=player.getCurrentNode();
			for(var i=0; i<me.__620px_.childNodes.length; i++) {
				var child=me.__620px_.childNodes[i];
				if (child.ggObj && child.ggObj.ggNodeId==cnode) {
			        var childOffX = child.offsetLeft;
			        var childOffY = child.offsetTop;
					var p = child.parentElement;
			        while (p != null && p!==this.divSkin) {
						if (p.ggType && p.ggType == 'scrollarea') {
							p.ggScrollIntoView(childOffX, childOffY, child.clientWidth, child.clientHeight);
						}
						childOffX += p.offsetLeft;
						childOffY += p.offsetTop;
						p = p.parentElement;
					}
				}
			}
		}
		me.__620px_.ggUpdatePosition=function (useTransition) {
			var ph = this.parentNode.clientHeight;
			this.ggHeight = (ph*80)/100.0;
			me.__620px_.ggUpdate();
		}
		me._container_20.appendChild(me.__620px_);
		el=me.__480px_=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me.__480px_;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		el.ggNumRepeat = 70;
		el.ggNumRows = 0;
		el.ggNumCols = 0;
		el.ggCloneOffset = 0;
		el.ggCloneOffsetChanged = false;
		el.ggWidth = 160;
		el.ggHeight = 157.44;
		el.ggUpdating = false;
		el.ggFilter = [];
		el.ggFilterHsSkinId = '';
		el.ggInstances = [];
		el.ggNumFilterPassed = 0;
		el.ggAutoPosition = function(init) {
			var currYPos = 0;
			var numElements = me.__480px_.ggInstances.length;
			var currElement = 0;
			for (var i=0; i<me.__480px_.ggNumRows; i++) {
				var rowMaxHeight = 0;
				for (var j=0; j<me.__480px_.ggNumCols; j++) {
					if (numElements > currElement) {
						if (!init) {
							if (me.__480px_.childNodes[currElement].clientHeight < me.__480px_.childNodes[currElement].scrollHeight && currElement < (numElements - 1)) {
								me.__480px_.childNodes[currElement].style.transition = 'top ' + 1 + 's, height ' + 1 + 's';
							} else {
								me.__480px_.childNodes[currElement].style.transition = 'top ' + 1 + 's';
							}
						}
						me.__480px_.childNodes[currElement].style.overflow = 'hidden';
						me.__480px_.childNodes[currElement].style['top'] = currYPos + 'px';
						me.__480px_.childNodes[currElement].style['height'] ='0px';
						rowMaxHeight = Math.max(rowMaxHeight, me.__480px_.childNodes[currElement].scrollHeight);
						me.__480px_.childNodes[currElement].style['height'] = rowMaxHeight + 'px';
					}
					currElement++;
				}
				currYPos += rowMaxHeight;
			}
			setTimeout(function() {
				var p = me.__480px_.parentElement;
				while (p != null && p !== me.divSkin) {
					if (p.ggType && p.ggType == 'scrollarea') {
						if (p.ggUpdatePosition) {
							p.ggUpdatePosition();
						}
					}
					p = p.parentElement;
				}
			}, 1000);
		}
		el.getFilteredNodes = function(tourNodes, filter) {
			var filteredNodes = [];
			for (var i = 0; i < tourNodes.length; i++) {
				var nodeId = tourNodes[i];
				var passed = true;
				var nodeData = player.getNodeUserdata(nodeId);
				if (filter.length > 0) {
					for (var j=0; j < filter.length; j++) {
						if (nodeData['tags'].indexOf(filter[j].trim()) == -1) passed = false;
					}
				}
				if (passed) {
					filteredNodes.push(nodeId);
				}
			}
			return filteredNodes;
		}
		el.ggUpdate = function(filter) {
			if(me.__480px_.ggUpdating == true) return;
			me.__480px_.ggUpdating = true;
			var el=me.__480px_;
			var curNumCols = 0;
			var parentWidth = me.__480px_.parentNode.classList.contains('ggskin_subelement') ? (me.__480px_.parentNode.parentNode.classList.contains('ggskin_scrollarea') ? me.__480px_.parentNode.parentNode.ggAvailableWidth : me.__480px_.parentNode.parentNode.clientWidth) : me.__480px_.parentNode.clientWidth;
			if (parentWidth == 0) parentWidth = me.__480px_.parentNode.parentNode.clientWidth;
			curNumCols = Math.floor(((parentWidth - me.__480px_.offsetLeft) * me.__480px_.ggNumRepeat / 100.0) / me.__480px_.offsetWidth);
			if (curNumCols < 1) curNumCols = 1;
			if (typeof filter=='object') {
				el.ggFilter = filter;
			} else {
				filter = el.ggFilter;
			};
			if (me.ggTag) filter.push(me.ggTag);
			filter=filter.sort();
			if ((el.ggNumCols == curNumCols) && (el.ggInstances.length > 0) && (filter.length === el.ggCurrentFilter.length) && (filter.every(function(value, index) { return value === el.ggCurrentFilter[index] }) )) {
				me.__480px_.ggUpdating = false;
				return;
			} else {
				el.ggNumRows = 1;
				el.ggNumCols = curNumCols;
			var centerOffsetHor = 0;
			var centerOffsetVert = 0;
				me.__480px_.ggCloneOffsetChanged = false;
			}
			el.ggCurrentFilter = filter;
			el.ggInstances = [];
			if (el.hasChildNodes() == true) {
				while (el.firstChild) {
					el.removeChild(el.firstChild);
				}
			}
			var tourNodes = player.getNodeIds();
			if (tourNodes.length == 0) {
				me.__480px_.ggUpdating = false;
				return;
			}
			var row = 0;
			var column = 0;
			var currentIndex = 0;
			var keepCloning = true;
			tourNodes = me.__480px_.getFilteredNodes(tourNodes, filter);
			me.__480px_.ggNumFilterPassed = tourNodes.length;
			for (var i = 0; i < tourNodes.length; i++) {
				var nodeId = tourNodes[i];
				var nodeData = player.getNodeUserdata(nodeId);
				if (!keepCloning || i < me.__480px_.ggCloneOffset) continue;
				var parameter={};
				parameter.top = centerOffsetVert + (row * me.__480px_.ggHeight) + 'px';
				parameter.left = centerOffsetHor + (column * me.__480px_.ggWidth) + 'px';
				parameter.width=me.__480px_.ggWidth + 'px';
				parameter.height='100%';
				parameter.index=currentIndex;
				parameter.title=nodeData['title'];
				var inst = new SkinCloner__480px__Class(nodeId, me, el, parameter);
				currentIndex++;
				inst.__div.style['height'] = '0px';
				el.ggInstances.push(inst);
				el.appendChild(inst.__div);
				inst.__div.ggObj=inst;
				skin.updateSize(inst.__div);
				column++;
				if (column >= el.ggNumCols) {
					column = 0;
					row++;
					el.ggNumRows++;
				}
			}
			me.__480px_.ggNodeCount = me.__480px_.ggNumFilterPassed;
			me.__480px_.ggAutoPosition(true);
			me.__480px_.ggUpdating = false;
			player.triggerEvent('clonerchanged');
			if (me.__480px_.parentNode && me.__480px_.parentNode.classList.contains('ggskin_subelement') && me.__480px_.parentNode.parentNode.classList.contains('ggskin_scrollarea')) me.__480px_.parentNode.parentNode.ggUpdatePosition();
		}
		el.ggFilter = [];
		el.ggId="\ubaa8\ubc14\uc77c-480px \uc774\ud558";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_cloner ";
		el.ggType='cloner';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 41%;';
		hs+='left : 0px;';
		hs+='overflow : visible;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 160px;';
		hs+='pointer-events:none;';
		hs+='min-width:100px;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__480px_.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__480px_.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getViewerSize(true).width <= 440)) && 
				((player.getViewerSize(true).width > 390))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__480px_.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__480px_.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__480px_.style.transition='';
				if (me.__480px_.ggCurrentLogicStateVisible == 0) {
					me.__480px_.style.visibility=(Number(me.__480px_.style.opacity)>0||!me.__480px_.style.opacity)?'inherit':'hidden';
					me.__480px_.ggVisible=true;
				}
				else {
					me.__480px_.style.visibility="hidden";
					me.__480px_.ggVisible=false;
				}
			}
		}
		me.__480px_.logicBlock_visible();
		me.__480px_.ggCurrentLogicStateVisible = -1;
		me.__480px_.ggUpdateConditionNodeChange=function () {
			var cnode=player.getCurrentNode();
			for(var i=0; i<me.__480px_.childNodes.length; i++) {
				var child=me.__480px_.childNodes[i];
				if (child.ggObj && child.ggObj.ggNodeId==cnode) {
			        var childOffX = child.offsetLeft;
			        var childOffY = child.offsetTop;
					var p = child.parentElement;
			        while (p != null && p!==this.divSkin) {
						if (p.ggType && p.ggType == 'scrollarea') {
							p.ggScrollIntoView(childOffX, childOffY, child.clientWidth, child.clientHeight);
						}
						childOffX += p.offsetLeft;
						childOffY += p.offsetTop;
						p = p.parentElement;
					}
				}
			}
		}
		me.__480px_.ggUpdatePosition=function (useTransition) {
			var ph = this.parentNode.clientHeight;
			this.ggHeight = (ph*41)/100.0;
			me.__480px_.ggUpdate();
		}
		me._container_20.appendChild(me.__480px_);
		el=me.__620_=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me.__620_;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		el.ggNumRepeat = 100;
		el.ggNumRows = 0;
		el.ggNumCols = 0;
		el.ggCloneOffset = 0;
		el.ggCloneOffsetChanged = false;
		el.ggWidth = 210;
		el.ggHeight = 129.545;
		el.ggUpdating = false;
		el.ggFilter = [];
		el.ggFilterHsSkinId = '';
		el.ggInstances = [];
		el.ggNumFilterPassed = 0;
		el.ggAutoPosition = function(init) {
			var currYPos = 0;
			var numElements = me.__620_.ggInstances.length;
			var currElement = 0;
			for (var i=0; i<me.__620_.ggNumRows; i++) {
				var rowMaxHeight = 0;
				for (var j=0; j<me.__620_.ggNumCols; j++) {
					if (numElements > currElement) {
						if (!init) {
							if (me.__620_.childNodes[currElement].clientHeight < me.__620_.childNodes[currElement].scrollHeight && currElement < (numElements - 1)) {
								me.__620_.childNodes[currElement].style.transition = 'top ' + 1 + 's, height ' + 1 + 's';
							} else {
								me.__620_.childNodes[currElement].style.transition = 'top ' + 1 + 's';
							}
						}
						me.__620_.childNodes[currElement].style.overflow = 'hidden';
						me.__620_.childNodes[currElement].style['top'] = currYPos + 'px';
						me.__620_.childNodes[currElement].style['height'] ='0px';
						rowMaxHeight = Math.max(rowMaxHeight, me.__620_.childNodes[currElement].scrollHeight);
						me.__620_.childNodes[currElement].style['height'] = rowMaxHeight + 'px';
					}
					currElement++;
				}
				currYPos += rowMaxHeight;
			}
			setTimeout(function() {
				var p = me.__620_.parentElement;
				while (p != null && p !== me.divSkin) {
					if (p.ggType && p.ggType == 'scrollarea') {
						if (p.ggUpdatePosition) {
							p.ggUpdatePosition();
						}
					}
					p = p.parentElement;
				}
			}, 1000);
		}
		el.getFilteredNodes = function(tourNodes, filter) {
			var filteredNodes = [];
			for (var i = 0; i < tourNodes.length; i++) {
				var nodeId = tourNodes[i];
				var passed = true;
				var nodeData = player.getNodeUserdata(nodeId);
				if (filter.length > 0) {
					for (var j=0; j < filter.length; j++) {
						if (nodeData['tags'].indexOf(filter[j].trim()) == -1) passed = false;
					}
				}
				if (passed) {
					filteredNodes.push(nodeId);
				}
			}
			return filteredNodes;
		}
		el.ggUpdate = function(filter) {
			if(me.__620_.ggUpdating == true) return;
			me.__620_.ggUpdating = true;
			var el=me.__620_;
			var curNumCols = 0;
			var parentWidth = me.__620_.parentNode.classList.contains('ggskin_subelement') ? (me.__620_.parentNode.parentNode.classList.contains('ggskin_scrollarea') ? me.__620_.parentNode.parentNode.ggAvailableWidth : me.__620_.parentNode.parentNode.clientWidth) : me.__620_.parentNode.clientWidth;
			if (parentWidth == 0) parentWidth = me.__620_.parentNode.parentNode.clientWidth;
			curNumCols = Math.floor(((parentWidth - me.__620_.offsetLeft) * me.__620_.ggNumRepeat / 100.0) / me.__620_.offsetWidth);
			if (curNumCols < 1) curNumCols = 1;
			if (typeof filter=='object') {
				el.ggFilter = filter;
			} else {
				filter = el.ggFilter;
			};
			if (me.ggTag) filter.push(me.ggTag);
			filter=filter.sort();
			if ((el.ggNumCols == curNumCols) && (el.ggInstances.length > 0) && (filter.length === el.ggCurrentFilter.length) && (filter.every(function(value, index) { return value === el.ggCurrentFilter[index] }) )) {
				me.__620_.ggUpdating = false;
				return;
			} else {
				el.ggNumRows = 1;
				el.ggNumCols = curNumCols;
			var centerOffsetHor = 0;
			var centerOffsetVert = 0;
				me.__620_.ggCloneOffsetChanged = false;
			}
			el.ggCurrentFilter = filter;
			el.ggInstances = [];
			if (el.hasChildNodes() == true) {
				while (el.firstChild) {
					el.removeChild(el.firstChild);
				}
			}
			var tourNodes = player.getNodeIds();
			if (tourNodes.length == 0) {
				me.__620_.ggUpdating = false;
				return;
			}
			var row = 0;
			var column = 0;
			var currentIndex = 0;
			var keepCloning = true;
			tourNodes = me.__620_.getFilteredNodes(tourNodes, filter);
			me.__620_.ggNumFilterPassed = tourNodes.length;
			for (var i = 0; i < tourNodes.length; i++) {
				var nodeId = tourNodes[i];
				var nodeData = player.getNodeUserdata(nodeId);
				if (!keepCloning || i < me.__620_.ggCloneOffset) continue;
				var parameter={};
				parameter.top = centerOffsetVert + (row * me.__620_.ggHeight) + 'px';
				parameter.left = centerOffsetHor + (column * me.__620_.ggWidth) + 'px';
				parameter.width=me.__620_.ggWidth + 'px';
				parameter.height='100%';
				parameter.index=currentIndex;
				parameter.title=nodeData['title'];
				var inst = new SkinCloner__620__Class(nodeId, me, el, parameter);
				currentIndex++;
				inst.__div.style['height'] = '0px';
				el.ggInstances.push(inst);
				el.appendChild(inst.__div);
				inst.__div.ggObj=inst;
				skin.updateSize(inst.__div);
				column++;
				if (column >= el.ggNumCols) {
					column = 0;
					row++;
					el.ggNumRows++;
				}
			}
			me.__620_.ggNodeCount = me.__620_.ggNumFilterPassed;
			me.__620_.ggAutoPosition(true);
			me.__620_.ggUpdating = false;
			player.triggerEvent('clonerchanged');
			if (me.__620_.parentNode && me.__620_.parentNode.classList.contains('ggskin_subelement') && me.__620_.parentNode.parentNode.classList.contains('ggskin_scrollarea')) me.__620_.parentNode.parentNode.ggUpdatePosition();
		}
		el.ggFilter = [];
		el.ggId="\ubaa8\ubc14\uc77c-620 \uc774\ud558";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_cloner ";
		el.ggType='cloner';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 33.7358%;';
		hs+='left : 0px;';
		hs+='overflow : visible;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 210px;';
		hs+='pointer-events:none;';
		hs+='min-width:100px;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__620_.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__620_.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getViewerSize(true).width > 503)) && 
				((player.getViewerSize(true).width < 620))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__620_.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__620_.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__620_.style.transition='';
				if (me.__620_.ggCurrentLogicStateVisible == 0) {
					me.__620_.style.visibility=(Number(me.__620_.style.opacity)>0||!me.__620_.style.opacity)?'inherit':'hidden';
					me.__620_.ggVisible=true;
				}
				else {
					me.__620_.style.visibility="hidden";
					me.__620_.ggVisible=false;
				}
			}
		}
		me.__620_.logicBlock_visible();
		me.__620_.ggCurrentLogicStateVisible = -1;
		me.__620_.ggUpdateConditionNodeChange=function () {
			var cnode=player.getCurrentNode();
			for(var i=0; i<me.__620_.childNodes.length; i++) {
				var child=me.__620_.childNodes[i];
				if (child.ggObj && child.ggObj.ggNodeId==cnode) {
			        var childOffX = child.offsetLeft;
			        var childOffY = child.offsetTop;
					var p = child.parentElement;
			        while (p != null && p!==this.divSkin) {
						if (p.ggType && p.ggType == 'scrollarea') {
							p.ggScrollIntoView(childOffX, childOffY, child.clientWidth, child.clientHeight);
						}
						childOffX += p.offsetLeft;
						childOffY += p.offsetTop;
						p = p.parentElement;
					}
				}
			}
		}
		me.__620_.ggUpdatePosition=function (useTransition) {
			var ph = this.parentNode.clientHeight;
			this.ggHeight = (ph*33.7358)/100.0;
			me.__620_.ggUpdate();
		}
		me._container_20.appendChild(me.__620_);
		el=me.__320px_1=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me.__320px_1;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		el.ggNumRepeat = 2;
		el.ggNumRows = 0;
		el.ggNumCols = 0;
		el.ggCloneOffset = 0;
		el.ggCloneOffsetChanged = false;
		el.ggWidth = 160;
		el.ggHeight = 160.227;
		el.ggUpdating = false;
		el.ggFilter = [];
		el.ggFilterHsSkinId = '';
		el.ggInstances = [];
		el.ggNumFilterPassed = 0;
		el.ggAutoPosition = function(init) {
			var currYPos = 0;
			var numElements = me.__320px_1.ggInstances.length;
			var currElement = 0;
			for (var i=0; i<me.__320px_1.ggNumRows; i++) {
				var rowMaxHeight = 0;
				for (var j=0; j<me.__320px_1.ggNumCols; j++) {
					if (numElements > currElement) {
						if (!init) {
							if (me.__320px_1.childNodes[currElement].clientHeight < me.__320px_1.childNodes[currElement].scrollHeight && currElement < (numElements - 1)) {
								me.__320px_1.childNodes[currElement].style.transition = 'top ' + 1 + 's, height ' + 1 + 's';
							} else {
								me.__320px_1.childNodes[currElement].style.transition = 'top ' + 1 + 's';
							}
						}
						me.__320px_1.childNodes[currElement].style.overflow = 'hidden';
						me.__320px_1.childNodes[currElement].style['top'] = currYPos + 'px';
						me.__320px_1.childNodes[currElement].style['height'] ='0px';
						rowMaxHeight = Math.max(rowMaxHeight, me.__320px_1.childNodes[currElement].scrollHeight);
						me.__320px_1.childNodes[currElement].style['height'] = rowMaxHeight + 'px';
					}
					currElement++;
				}
				currYPos += rowMaxHeight;
			}
			setTimeout(function() {
				var p = me.__320px_1.parentElement;
				while (p != null && p !== me.divSkin) {
					if (p.ggType && p.ggType == 'scrollarea') {
						if (p.ggUpdatePosition) {
							p.ggUpdatePosition();
						}
					}
					p = p.parentElement;
				}
			}, 1000);
		}
		el.getFilteredNodes = function(tourNodes, filter) {
			var filteredNodes = [];
			for (var i = 0; i < tourNodes.length; i++) {
				var nodeId = tourNodes[i];
				var passed = true;
				var nodeData = player.getNodeUserdata(nodeId);
				if (filter.length > 0) {
					for (var j=0; j < filter.length; j++) {
						if (nodeData['tags'].indexOf(filter[j].trim()) == -1) passed = false;
					}
				}
				if (passed) {
					filteredNodes.push(nodeId);
				}
			}
			return filteredNodes;
		}
		el.ggUpdate = function(filter) {
			if(me.__320px_1.ggUpdating == true) return;
			me.__320px_1.ggUpdating = true;
			var el=me.__320px_1;
			var curNumCols = 0;
			curNumCols = me.__320px_1.ggNumRepeat;
			if (curNumCols < 1) curNumCols = 1;
			if (typeof filter=='object') {
				el.ggFilter = filter;
			} else {
				filter = el.ggFilter;
			};
			if (me.ggTag) filter.push(me.ggTag);
			filter=filter.sort();
			if ((el.ggNumCols == curNumCols) && (el.ggInstances.length > 0) && (filter.length === el.ggCurrentFilter.length) && (filter.every(function(value, index) { return value === el.ggCurrentFilter[index] }) )) {
				me.__320px_1.ggUpdating = false;
				return;
			} else {
				el.ggNumRows = 1;
				el.ggNumCols = curNumCols;
			var centerOffsetHor = 0;
			var centerOffsetVert = 0;
				me.__320px_1.ggCloneOffsetChanged = false;
			}
			el.ggCurrentFilter = filter;
			el.ggInstances = [];
			if (el.hasChildNodes() == true) {
				while (el.firstChild) {
					el.removeChild(el.firstChild);
				}
			}
			var tourNodes = player.getNodeIds();
			if (tourNodes.length == 0) {
				me.__320px_1.ggUpdating = false;
				return;
			}
			var row = 0;
			var column = 0;
			var currentIndex = 0;
			var keepCloning = true;
			tourNodes = me.__320px_1.getFilteredNodes(tourNodes, filter);
			me.__320px_1.ggNumFilterPassed = tourNodes.length;
			for (var i = 0; i < tourNodes.length; i++) {
				var nodeId = tourNodes[i];
				var nodeData = player.getNodeUserdata(nodeId);
				if (!keepCloning || i < me.__320px_1.ggCloneOffset) continue;
				var parameter={};
				parameter.top = centerOffsetVert + (row * me.__320px_1.ggHeight) + 'px';
				parameter.left = centerOffsetHor + (column * me.__320px_1.ggWidth) + 'px';
				parameter.width=me.__320px_1.ggWidth + 'px';
				parameter.height='100%';
				parameter.index=currentIndex;
				parameter.title=nodeData['title'];
				var inst = new SkinCloner__320px_1_Class(nodeId, me, el, parameter);
				currentIndex++;
				inst.__div.style['height'] = '0px';
				el.ggInstances.push(inst);
				el.appendChild(inst.__div);
				inst.__div.ggObj=inst;
				skin.updateSize(inst.__div);
				column++;
				if (column >= el.ggNumCols) {
					column = 0;
					row++;
					el.ggNumRows++;
				}
			}
			me.__320px_1.ggNodeCount = me.__320px_1.ggNumFilterPassed;
			me.__320px_1.ggAutoPosition(true);
			me.__320px_1.ggUpdating = false;
			player.triggerEvent('clonerchanged');
			if (me.__320px_1.parentNode && me.__320px_1.parentNode.classList.contains('ggskin_subelement') && me.__320px_1.parentNode.parentNode.classList.contains('ggskin_scrollarea')) me.__320px_1.parentNode.parentNode.ggUpdatePosition();
		}
		el.ggFilter = [];
		el.ggId="\ubaa8\ubc14\uc77c-320px \uc774\ud558_1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_cloner ";
		el.ggType='cloner';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 41.7258%;';
		hs+='left : 0px;';
		hs+='overflow : visible;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 160px;';
		hs+='pointer-events:none;';
		hs+='min-width:100px;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__320px_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__320px_1.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getViewerSize(true).width <= 390))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__320px_1.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__320px_1.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__320px_1.style.transition='';
				if (me.__320px_1.ggCurrentLogicStateVisible == 0) {
					me.__320px_1.style.visibility=(Number(me.__320px_1.style.opacity)>0||!me.__320px_1.style.opacity)?'inherit':'hidden';
					me.__320px_1.ggVisible=true;
				}
				else {
					me.__320px_1.style.visibility="hidden";
					me.__320px_1.ggVisible=false;
				}
			}
		}
		me.__320px_1.logicBlock_visible();
		me.__320px_1.ggCurrentLogicStateVisible = -1;
		me.__320px_1.ggUpdateConditionNodeChange=function () {
			var cnode=player.getCurrentNode();
			for(var i=0; i<me.__320px_1.childNodes.length; i++) {
				var child=me.__320px_1.childNodes[i];
				if (child.ggObj && child.ggObj.ggNodeId==cnode) {
			        var childOffX = child.offsetLeft;
			        var childOffY = child.offsetTop;
					var p = child.parentElement;
			        while (p != null && p!==this.divSkin) {
						if (p.ggType && p.ggType == 'scrollarea') {
							p.ggScrollIntoView(childOffX, childOffY, child.clientWidth, child.clientHeight);
						}
						childOffX += p.offsetLeft;
						childOffY += p.offsetTop;
						p = p.parentElement;
					}
				}
			}
		}
		me.__320px_1.ggUpdatePosition=function (useTransition) {
			var ph = this.parentNode.clientHeight;
			this.ggHeight = (ph*41.7258)/100.0;
			me.__320px_1.ggUpdate();
		}
		me._container_20.appendChild(me.__320px_1);
		el=me.__503px_1=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me.__503px_1;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		el.ggNumRepeat = 63;
		el.ggNumRows = 0;
		el.ggNumCols = 0;
		el.ggCloneOffset = 0;
		el.ggCloneOffsetChanged = false;
		el.ggWidth = 180;
		el.ggHeight = 153.6;
		el.ggUpdating = false;
		el.ggFilter = [];
		el.ggFilterHsSkinId = '';
		el.ggInstances = [];
		el.ggNumFilterPassed = 0;
		el.ggAutoPosition = function(init) {
			var currYPos = 0;
			var numElements = me.__503px_1.ggInstances.length;
			var currElement = 0;
			for (var i=0; i<me.__503px_1.ggNumRows; i++) {
				var rowMaxHeight = 0;
				for (var j=0; j<me.__503px_1.ggNumCols; j++) {
					if (numElements > currElement) {
						if (!init) {
							if (me.__503px_1.childNodes[currElement].clientHeight < me.__503px_1.childNodes[currElement].scrollHeight && currElement < (numElements - 1)) {
								me.__503px_1.childNodes[currElement].style.transition = 'top ' + 1 + 's, height ' + 1 + 's';
							} else {
								me.__503px_1.childNodes[currElement].style.transition = 'top ' + 1 + 's';
							}
						}
						me.__503px_1.childNodes[currElement].style.overflow = 'hidden';
						me.__503px_1.childNodes[currElement].style['top'] = currYPos + 'px';
						me.__503px_1.childNodes[currElement].style['height'] ='0px';
						rowMaxHeight = Math.max(rowMaxHeight, me.__503px_1.childNodes[currElement].scrollHeight);
						me.__503px_1.childNodes[currElement].style['height'] = rowMaxHeight + 'px';
					}
					currElement++;
				}
				currYPos += rowMaxHeight;
			}
			setTimeout(function() {
				var p = me.__503px_1.parentElement;
				while (p != null && p !== me.divSkin) {
					if (p.ggType && p.ggType == 'scrollarea') {
						if (p.ggUpdatePosition) {
							p.ggUpdatePosition();
						}
					}
					p = p.parentElement;
				}
			}, 1000);
		}
		el.getFilteredNodes = function(tourNodes, filter) {
			var filteredNodes = [];
			for (var i = 0; i < tourNodes.length; i++) {
				var nodeId = tourNodes[i];
				var passed = true;
				var nodeData = player.getNodeUserdata(nodeId);
				if (filter.length > 0) {
					for (var j=0; j < filter.length; j++) {
						if (nodeData['tags'].indexOf(filter[j].trim()) == -1) passed = false;
					}
				}
				if (passed) {
					filteredNodes.push(nodeId);
				}
			}
			return filteredNodes;
		}
		el.ggUpdate = function(filter) {
			if(me.__503px_1.ggUpdating == true) return;
			me.__503px_1.ggUpdating = true;
			var el=me.__503px_1;
			var curNumCols = 0;
			var parentWidth = me.__503px_1.parentNode.classList.contains('ggskin_subelement') ? (me.__503px_1.parentNode.parentNode.classList.contains('ggskin_scrollarea') ? me.__503px_1.parentNode.parentNode.ggAvailableWidth : me.__503px_1.parentNode.parentNode.clientWidth) : me.__503px_1.parentNode.clientWidth;
			if (parentWidth == 0) parentWidth = me.__503px_1.parentNode.parentNode.clientWidth;
			curNumCols = Math.floor(((parentWidth - me.__503px_1.offsetLeft) * me.__503px_1.ggNumRepeat / 100.0) / me.__503px_1.offsetWidth);
			if (curNumCols < 1) curNumCols = 1;
			if (typeof filter=='object') {
				el.ggFilter = filter;
			} else {
				filter = el.ggFilter;
			};
			if (me.ggTag) filter.push(me.ggTag);
			filter=filter.sort();
			if ((el.ggNumCols == curNumCols) && (el.ggInstances.length > 0) && (filter.length === el.ggCurrentFilter.length) && (filter.every(function(value, index) { return value === el.ggCurrentFilter[index] }) )) {
				me.__503px_1.ggUpdating = false;
				return;
			} else {
				el.ggNumRows = 1;
				el.ggNumCols = curNumCols;
			var centerOffsetHor = 0;
			var centerOffsetVert = 0;
				me.__503px_1.ggCloneOffsetChanged = false;
			}
			el.ggCurrentFilter = filter;
			el.ggInstances = [];
			if (el.hasChildNodes() == true) {
				while (el.firstChild) {
					el.removeChild(el.firstChild);
				}
			}
			var tourNodes = player.getNodeIds();
			if (tourNodes.length == 0) {
				me.__503px_1.ggUpdating = false;
				return;
			}
			var row = 0;
			var column = 0;
			var currentIndex = 0;
			var keepCloning = true;
			tourNodes = me.__503px_1.getFilteredNodes(tourNodes, filter);
			me.__503px_1.ggNumFilterPassed = tourNodes.length;
			for (var i = 0; i < tourNodes.length; i++) {
				var nodeId = tourNodes[i];
				var nodeData = player.getNodeUserdata(nodeId);
				if (!keepCloning || i < me.__503px_1.ggCloneOffset) continue;
				var parameter={};
				parameter.top = centerOffsetVert + (row * me.__503px_1.ggHeight) + 'px';
				parameter.left = centerOffsetHor + (column * me.__503px_1.ggWidth) + 'px';
				parameter.width=me.__503px_1.ggWidth + 'px';
				parameter.height='100%';
				parameter.index=currentIndex;
				parameter.title=nodeData['title'];
				var inst = new SkinCloner__503px_1_Class(nodeId, me, el, parameter);
				currentIndex++;
				inst.__div.style['height'] = '0px';
				el.ggInstances.push(inst);
				el.appendChild(inst.__div);
				inst.__div.ggObj=inst;
				skin.updateSize(inst.__div);
				column++;
				if (column >= el.ggNumCols) {
					column = 0;
					row++;
					el.ggNumRows++;
				}
			}
			me.__503px_1.ggNodeCount = me.__503px_1.ggNumFilterPassed;
			me.__503px_1.ggAutoPosition(true);
			me.__503px_1.ggUpdating = false;
			player.triggerEvent('clonerchanged');
			if (me.__503px_1.parentNode && me.__503px_1.parentNode.classList.contains('ggskin_subelement') && me.__503px_1.parentNode.parentNode.classList.contains('ggskin_scrollarea')) me.__503px_1.parentNode.parentNode.ggUpdatePosition();
		}
		el.ggFilter = [];
		el.ggId="\ubaa8\ubc14\uc77c-503px \uc774\ud558_1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_cloner ";
		el.ggType='cloner';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 40%;';
		hs+='left : 0px;';
		hs+='overflow : visible;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 180px;';
		hs+='pointer-events:none;';
		hs+='min-width:100px;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__503px_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__503px_1.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getViewerSize(true).width <= 503)) && 
				((player.getViewerSize(true).width > 440))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__503px_1.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__503px_1.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__503px_1.style.transition='';
				if (me.__503px_1.ggCurrentLogicStateVisible == 0) {
					me.__503px_1.style.visibility=(Number(me.__503px_1.style.opacity)>0||!me.__503px_1.style.opacity)?'inherit':'hidden';
					me.__503px_1.ggVisible=true;
				}
				else {
					me.__503px_1.style.visibility="hidden";
					me.__503px_1.ggVisible=false;
				}
			}
		}
		me.__503px_1.logicBlock_visible();
		me.__503px_1.ggUpdatePosition=function (useTransition) {
			var ph = this.parentNode.clientHeight;
			this.ggHeight = (ph*40)/100.0;
			me.__503px_1.ggUpdate();
		}
		me._container_20.appendChild(me.__503px_1);
		me._scrollarea_1__content.appendChild(me._container_20);
		me.__40.appendChild(me._scrollarea_1);
		el=me._title_1_10=document.createElement('div');
		el.ggId="\ubaa8\ubc14\uc77c-title_1_1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 24px;';
		hs+='left : 30px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 60%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._title_1_10.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._title_1_10.ggUpdatePosition=function (useTransition) {
		}
		el=me.__42=document.createElement('div');
		el.ggId="\ubaa8\ubc14\uc77c-\uc2a4\ud06c\ub864-\uc138\ub300\uad6c\uc131-\ub9c9\ub300";
		el.ggDy=-20;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #221e1f;';
		hs+='border : 0px solid #000000;';
		hs+='height : 14px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((14px + 0px) / 2) - 20px);';
		hs+='visibility : inherit;';
		hs+='width : 2px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__42.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__42.ggUpdatePosition=function (useTransition) {
		}
		me._title_1_10.appendChild(me.__42);
		el=me.__41=document.createElement('div');
		els=me.__41__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\ubaa8\ubc14\uc77c-\uc2a4\ud06c\ub864-\uc138\ub300\uad6c\uc131";
		el.ggDy=-20;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(57,57,57,1);';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) - 20px);';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		hs+='margin-left:10px; letter-spacing:-1px;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 14px;';
		hs+='font-weight: 600;';
		hs+='text-align: left;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__41.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uc138\ub300\uad6c\uc131", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__41.ggUpdateText();
		el.appendChild(els);
		me.__41.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__41.ggUpdatePosition=function (useTransition) {
		}
		me._title_1_10.appendChild(me.__41);
		me.__40.appendChild(me._title_1_10);
		me.__37.appendChild(me.__40);
		el=me.__38=document.createElement('div');
		el.ggId="\ubaa8\ubc14\uc77c-\uacf5\uac04\uc774\ub3d9-\ud0c0\uc774\ud2c0";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 24px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 25px;';
		hs+='visibility : inherit;';
		hs+='width : 88%;';
		hs+='pointer-events:none;';
		hs+='margin:0 24px;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__38.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__38.ggUpdatePosition=function (useTransition) {
		}
		el=me.__39=document.createElement('div');
		els=me.__39__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\ubaa8\ubc14\uc77c-\uacf5\uac04\uc774\ub3d9-\uc544\ud30c\ud2b8 \uc774\ub984";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(57,57,57,1);';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 30%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='font-size: 15px;';
		hs+='font-weight: bolder;';
		hs+='text-align: left;';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__39.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uacf5\uac04\uc774\ub3d9", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__39.ggUpdateText();
		el.appendChild(els);
		me.__39.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__39.ggUpdatePosition=function (useTransition) {
		}
		me.__38.appendChild(me.__39);
		el=me._container_1=document.createElement('div');
		el.ggId="\ubaa8\ubc14\uc77c-\uacf5\uac04\uc774\ub3d9-Container 1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 70%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._container_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._container_1.onclick=function (e) {
			player.setVariableValue('vis_m_roomMove', false);
		}
		me._container_1.ggUpdatePosition=function (useTransition) {
		}
		el=me._rectangle_7_5=document.createElement('div');
		el.ggId="Rectangle 7_5";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(234,236,234,0.705882);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 50px;';
		hs+='height : 25px;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='top : calc(50% - ((25px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 25px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._rectangle_7_5.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._rectangle_7_5.ggUpdatePosition=function (useTransition) {
		}
		el=me._svg_19_5=document.createElement('div');
		els=me._svg_19_5__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJmZWF0aGVyIGZlYXRoZXIteCIgZmlsbD0ibm9uZSIgaGVpZ2h0PSIyNCIgc3Ryb2tlLXdpZHRoPSIxLjUiIHdpZHRoPSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij4KIDxsaW5lIHkyPSIxOCIgeTE9IjYiIHgyPSI2IiB4MT0iMTgiLz4KIDxsaW5lIHkyPSIxOCIgeTE9IjYiIHgyPSIxOCIgeDE9IjYiLz4KPC9zdmc+Cg==';
		me._svg_19_5__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Svg 19_5";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 18px;';
		hs+='left : calc(50% - ((18px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((18px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 18px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._svg_19_5.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._svg_19_5.ggUpdatePosition=function (useTransition) {
		}
		me._rectangle_7_5.appendChild(me._svg_19_5);
		me._container_1.appendChild(me._rectangle_7_5);
		me.__38.appendChild(me._container_1);
		me.__37.appendChild(me.__38);
		me.__36.appendChild(me.__37);
		me.divSkin.appendChild(me.__36);
		el=me.__35=document.createElement('div');
		el.ggId="\uac00\uaca9\uc815\ubcf4-\ubaa8\ubc14\uc77c";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='z-index: 9;';
		hs+='bottom : -1000px;';
		hs+='height : 87.9167%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		hs+='max-width:500px;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__35.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me.__35.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getVariableValue('vis_aptInfo') == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me.__35.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me.__35.ggCurrentLogicStatePosition = newLogicStatePosition;
				me.__35.style.transition='left 500ms linear 0ms, bottom 500ms linear 0ms, width 0s, height 0s';
				if (me.__35.ggCurrentLogicStatePosition == 0) {
					me.__35.style.left='0px';
					me.__35.style.bottom='-46px';
				}
				else {
					me.__35.style.left='0px';
					me.__35.style.bottom='-1000px';
				}
			}
		}
		me.__35.logicBlock_position();
		me.__35.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getViewerSize(true).width <= 1120))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me.__35.ggCurrentLogicStateSize != newLogicStateSize) {
				me.__35.ggCurrentLogicStateSize = newLogicStateSize;
				me.__35.style.transition='left 500ms linear 0ms, bottom 500ms linear 0ms, width 0s, height 0s';
				if (me.__35.ggCurrentLogicStateSize == 0) {
					me.__35.style.width='100%';
					me.__35.style.height='100%';
					skin.updateSize(me.__35);
				}
				else {
					me.__35.style.width='100%';
					me.__35.style.height='87.9167%';
					skin.updateSize(me.__35);
				}
			}
		}
		me.__35.logicBlock_size();
		me.__35.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_aptInfo') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__35.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__35.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__35.style.transition='left 500ms linear 0ms, bottom 500ms linear 0ms, width 0s, height 0s';
				if (me.__35.ggCurrentLogicStateVisible == 0) {
					me.__35.style.visibility=(Number(me.__35.style.opacity)>0||!me.__35.style.opacity)?'inherit':'hidden';
					me.__35.ggVisible=true;
				}
				else {
					me.__35.style.visibility="hidden";
					me.__35.ggVisible=false;
				}
			}
		}
		me.__35.logicBlock_visible();
		me.__35.ggUpdatePosition=function (useTransition) {
		}
		el=me.__123=document.createElement('div');
		el.ggId="\ubaa8\ubc14\uc77c-\uac00\uaca9\uc815\ubcf4-\ubc30\uacbd_1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 20px;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__123.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__123.logicBlock_borderradius = function() {
			var newLogicStateBorderRadius;
			if (
				((player.getViewerSize(true).width <= 1120))
			)
			{
				newLogicStateBorderRadius = 0;
			}
			else {
				newLogicStateBorderRadius = -1;
			}
			if (me.__123.ggCurrentLogicStateBorderRadius != newLogicStateBorderRadius) {
				me.__123.ggCurrentLogicStateBorderRadius = newLogicStateBorderRadius;
				me.__123.style.transition='border-radius 0s';
				if (me.__123.ggCurrentLogicStateBorderRadius == 0) {
					me.__123.style.borderRadius="0px";
				}
				else {
					me.__123.style.borderRadius="20px";
				}
			}
		}
		me.__123.logicBlock_borderradius();
		me.__123.onclick=function (e) {
			player.setVariableValue('vis_aptInfo_pc', false);
		}
		me.__123.ggUpdatePosition=function (useTransition) {
		}
		el=me.__125=document.createElement('div');
		el.ggId="\ubaa8\ubc14\uc77c-\uac00\uaca9\uc815\ubcf4-\ud0c0\uc774\ud2c0_1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 24px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 25px;';
		hs+='visibility : inherit;';
		hs+='width : 91%;';
		hs+='pointer-events:none;';
		hs+='margin:0 24px;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__125.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__125.onclick=function (e) {
			player.setVariableValue('vis_aptInfo_pc', false);
		}
		me.__125.ggUpdatePosition=function (useTransition) {
		}
		el=me.__126=document.createElement('div');
		els=me.__126__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\ubaa8\ubc14\uc77c-\uac00\uaca9\uc815\ubcf4-\uc544\ud30c\ud2b8 \uc774\ub984_1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(57,57,57,1);';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 30%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='font-size: 15px;';
		hs+='font-weight: bolder;';
		hs+='text-align: left;';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__126.ggUpdateText=function() {
			var params = [];
			var hs = player._("\ubd80\ub3d9\uc0b0\uc815\ubcf4", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__126.ggUpdateText();
		el.appendChild(els);
		me.__126.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__126.ggUpdatePosition=function (useTransition) {
		}
		me.__125.appendChild(me.__126);
		el=me._container_1_12=document.createElement('div');
		el.ggId="\ubaa8\ubc14\uc77c-\uac00\uaca9\uc815\ubcf4-Container 1_1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 70%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._container_1_12.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._container_1_12.onclick=function (e) {
			player.setVariableValue('vis_aptInfo', false);
		}
		me._container_1_12.ggUpdatePosition=function (useTransition) {
		}
		el=me._rectangle_7_1_1=document.createElement('div');
		el.ggId="Rectangle 7_1_1";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(234,236,234,0.705882);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 50px;';
		hs+='height : 30px;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='top : calc(50% - ((30px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 30px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._rectangle_7_1_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._rectangle_7_1_1.ggUpdatePosition=function (useTransition) {
		}
		el=me._svg_19_1_1=document.createElement('div');
		els=me._svg_19_1_1__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJmZWF0aGVyIGZlYXRoZXIteCIgZmlsbD0ibm9uZSIgaGVpZ2h0PSIyNCIgc3Ryb2tlLXdpZHRoPSIxLjUiIHdpZHRoPSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij4KIDxsaW5lIHkyPSIxOCIgeTE9IjYiIHgyPSI2IiB4MT0iMTgiLz4KIDxsaW5lIHkyPSIxOCIgeTE9IjYiIHgyPSIxOCIgeDE9IjYiLz4KPC9zdmc+Cg==';
		me._svg_19_1_1__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Svg 19_1_1";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 18px;';
		hs+='left : calc(50% - ((18px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((18px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 18px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._svg_19_1_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._svg_19_1_1.ggUpdatePosition=function (useTransition) {
		}
		me._rectangle_7_1_1.appendChild(me._svg_19_1_1);
		me._container_1_12.appendChild(me._rectangle_7_1_1);
		me.__125.appendChild(me._container_1_12);
		me.__123.appendChild(me.__125);
		el=me._iframe_11=document.createElement('div');
		el.ggId="\uac00\uaca9\uc815\ubcf4-iframe_1";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 80%;';
		hs+='left : calc(50% - ((92% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 70px;';
		hs+='visibility : inherit;';
		hs+='width : 92%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._iframe_11.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._iframe_11.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getViewerSize(true).width <= 1120))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me._iframe_11.ggCurrentLogicStateSize != newLogicStateSize) {
				me._iframe_11.ggCurrentLogicStateSize = newLogicStateSize;
				me._iframe_11.style.transition='width 0s, height 0s';
				if (me._iframe_11.ggCurrentLogicStateSize == 0) {
					me._iframe_11.style.width='92%';
					me._iframe_11.style.height='68%';
					me._iframe_11.style.left = 'calc(50% - (92% / 2))';
					skin.updateSize(me._iframe_11);
				}
				else {
					me._iframe_11.style.width='92%';
					me._iframe_11.style.height='80%';
					me._iframe_11.style.left = 'calc(50% - (92% / 2))';
					skin.updateSize(me._iframe_11);
				}
			}
		}
		me._iframe_11.logicBlock_size();
		me._iframe_11.ggUpdatePosition=function (useTransition) {
		}
		el=me.__124=document.createElement('div');
		els=me.__124__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\ub124\uc774\ubc84\uc815\ubcf4\ub780_1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : #000000;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='text-align: center;';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__124.ggUpdateText=function() {
			var params = [];
			var hs = player._("", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__124.ggUpdateText();
		el.appendChild(els);
		me.__124.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__124.ggUpdatePosition=function (useTransition) {
		}
		el=me._text_4_11=document.createElement('div');
		els=me._text_4_11__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 4_1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='bottom : -33px;';
		hs+='color : rgba(85,85,85,0.705882);';
		hs+='height : 20px;';
		hs+='left : 5px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 120px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 13px;';
		hs+='font-weight: inherit;';
		hs+='text-align: left;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._text_4_11.ggUpdateText=function() {
			var params = [];
			var hs = player._("\ucd9c\ucc98 : KB \ubd80\ub3d9\uc0b0", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._text_4_11.ggUpdateText();
		el.appendChild(els);
		me._text_4_11.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._text_4_11.ggUpdatePosition=function (useTransition) {
		}
		me.__124.appendChild(me._text_4_11);
		me._iframe_11.appendChild(me.__124);
		me.__123.appendChild(me._iframe_11);
		me.__35.appendChild(me.__123);
		me.divSkin.appendChild(me.__35);
		el=me.__34=document.createElement('div');
		el.ggId="\ucd94\ucc9c\uc815\ubcf4-\ubaa8\ubc14\uc77c";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='z-index: 9;';
		hs+='bottom : -1000px;';
		hs+='height : 88%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		hs+='max-width:500px;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__34.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me.__34.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getVariableValue('vis_ad_m') == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me.__34.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me.__34.ggCurrentLogicStatePosition = newLogicStatePosition;
				me.__34.style.transition='left 500ms linear 0ms, bottom 500ms linear 0ms, width 0s, height 0s';
				if (me.__34.ggCurrentLogicStatePosition == 0) {
					me.__34.style.left='0px';
					me.__34.style.bottom='-46px';
				}
				else {
					me.__34.style.left='0px';
					me.__34.style.bottom='-1000px';
				}
			}
		}
		me.__34.logicBlock_position();
		me.__34.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getViewerSize(true).width <= 1120))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me.__34.ggCurrentLogicStateSize != newLogicStateSize) {
				me.__34.ggCurrentLogicStateSize = newLogicStateSize;
				me.__34.style.transition='left 500ms linear 0ms, bottom 500ms linear 0ms, width 0s, height 0s';
				if (me.__34.ggCurrentLogicStateSize == 0) {
					me.__34.style.width='100%';
					me.__34.style.height='100%';
					skin.updateSize(me.__34);
				}
				else {
					me.__34.style.width='100%';
					me.__34.style.height='88%';
					skin.updateSize(me.__34);
				}
			}
		}
		me.__34.logicBlock_size();
		me.__34.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_ad_m') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__34.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__34.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__34.style.transition='left 500ms linear 0ms, bottom 500ms linear 0ms, width 0s, height 0s';
				if (me.__34.ggCurrentLogicStateVisible == 0) {
					me.__34.style.visibility=(Number(me.__34.style.opacity)>0||!me.__34.style.opacity)?'inherit':'hidden';
					me.__34.ggVisible=true;
				}
				else {
					me.__34.style.visibility="hidden";
					me.__34.ggVisible=false;
				}
			}
		}
		me.__34.logicBlock_visible();
		me.__34.ggUpdatePosition=function (useTransition) {
		}
		el=me.__119=document.createElement('div');
		el.ggId="\ucd94\ucc9c\uc815\ubcf4-\ubc30\uacbd_1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 20px;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__119.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__119.logicBlock_borderradius = function() {
			var newLogicStateBorderRadius;
			if (
				((player.getViewerSize(true).width <= 1120))
			)
			{
				newLogicStateBorderRadius = 0;
			}
			else {
				newLogicStateBorderRadius = -1;
			}
			if (me.__119.ggCurrentLogicStateBorderRadius != newLogicStateBorderRadius) {
				me.__119.ggCurrentLogicStateBorderRadius = newLogicStateBorderRadius;
				me.__119.style.transition='border-radius 0s';
				if (me.__119.ggCurrentLogicStateBorderRadius == 0) {
					me.__119.style.borderRadius="0px";
				}
				else {
					me.__119.style.borderRadius="20px";
				}
			}
		}
		me.__119.logicBlock_borderradius();
		me.__119.onclick=function (e) {
			player.setVariableValue('vis_ad', false);
		}
		me.__119.ggUpdatePosition=function (useTransition) {
		}
		el=me.__121=document.createElement('div');
		el.ggId="\ucd94\ucc9c\uc815\ubcf4-\ud0c0\uc774\ud2c0_1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 24px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 25px;';
		hs+='visibility : inherit;';
		hs+='width : 91%;';
		hs+='pointer-events:none;';
		hs+='margin:0 24px;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__121.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__121.onclick=function (e) {
			player.setVariableValue('vis_ad_m', false);
		}
		me.__121.ggUpdatePosition=function (useTransition) {
		}
		el=me.__122=document.createElement('div');
		els=me.__122__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\ucd94\ucc9c\uc815\ubcf4-\uc544\ud30c\ud2b8 \uc774\ub984_1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(57,57,57,1);';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 30%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='font-size: 15px;';
		hs+='font-weight: bolder;';
		hs+='text-align: left;';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__122.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uc8fc\uad00\uc0ac \ucd94\ucc9c AD", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__122.ggUpdateText();
		el.appendChild(els);
		me.__122.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__122.ggUpdatePosition=function (useTransition) {
		}
		me.__121.appendChild(me.__122);
		el=me._container_1_11=document.createElement('div');
		el.ggId="\ucd94\ucc9c\uc815\ubcf4-Container 1_1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 70%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._container_1_11.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._container_1_11.ggUpdatePosition=function (useTransition) {
		}
		el=me._rectangle_7_2_1=document.createElement('div');
		el.ggId="Rectangle 7_2_1";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(234,236,234,0.705882);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 50px;';
		hs+='height : 30px;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='top : calc(50% - ((30px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 30px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._rectangle_7_2_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._rectangle_7_2_1.ggUpdatePosition=function (useTransition) {
		}
		el=me._svg_19_2_1=document.createElement('div');
		els=me._svg_19_2_1__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJmZWF0aGVyIGZlYXRoZXIteCIgZmlsbD0ibm9uZSIgaGVpZ2h0PSIyNCIgc3Ryb2tlLXdpZHRoPSIxLjUiIHdpZHRoPSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij4KIDxsaW5lIHkyPSIxOCIgeTE9IjYiIHgyPSI2IiB4MT0iMTgiLz4KIDxsaW5lIHkyPSIxOCIgeTE9IjYiIHgyPSIxOCIgeDE9IjYiLz4KPC9zdmc+Cg==';
		me._svg_19_2_1__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Svg 19_2_1";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 18px;';
		hs+='left : calc(50% - ((18px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((18px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 18px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._svg_19_2_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._svg_19_2_1.ggUpdatePosition=function (useTransition) {
		}
		me._rectangle_7_2_1.appendChild(me._svg_19_2_1);
		me._container_1_11.appendChild(me._rectangle_7_2_1);
		me.__121.appendChild(me._container_1_11);
		me.__119.appendChild(me.__121);
		el=me._iframe_10=document.createElement('div');
		el.ggId="\ucd94\ucc9c\uc815\ubcf4-iframe_1";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 80%;';
		hs+='left : calc(50% - ((92% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 70px;';
		hs+='visibility : inherit;';
		hs+='width : 92%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._iframe_10.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._iframe_10.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getViewerSize(true).width <= 1120))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me._iframe_10.ggCurrentLogicStateSize != newLogicStateSize) {
				me._iframe_10.ggCurrentLogicStateSize = newLogicStateSize;
				me._iframe_10.style.transition='width 0s, height 0s';
				if (me._iframe_10.ggCurrentLogicStateSize == 0) {
					me._iframe_10.style.width='92%';
					me._iframe_10.style.height='68%';
					me._iframe_10.style.left = 'calc(50% - (92% / 2))';
					skin.updateSize(me._iframe_10);
				}
				else {
					me._iframe_10.style.width='92%';
					me._iframe_10.style.height='80%';
					me._iframe_10.style.left = 'calc(50% - (92% / 2))';
					skin.updateSize(me._iframe_10);
				}
			}
		}
		me._iframe_10.logicBlock_size();
		me._iframe_10.ggUpdatePosition=function (useTransition) {
		}
		el=me.__120=document.createElement('div');
		els=me.__120__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\ucd94\ucc9c\uc815\ubcf4-\uc6b0\uc9d1\uc0ac_1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : #000000;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : -1px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='text-align: center;';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__120.ggUpdateText=function() {
			var params = [];
			var hs = player._("", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__120.ggUpdateText();
		el.appendChild(els);
		me.__120.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__120.ggUpdatePosition=function (useTransition) {
		}
		el=me._text_4_10=document.createElement('div');
		els=me._text_4_10__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\ucd94\ucc9c\uc815\ubcf4-Text 4_1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='bottom : -20px;';
		hs+='color : rgba(85,85,85,1);';
		hs+='height : 20px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 120px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 13px;';
		hs+='font-weight: inherit;';
		hs+='text-align: left;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._text_4_10.ggUpdateText=function() {
			var params = [];
			var hs = player._("", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._text_4_10.ggUpdateText();
		el.appendChild(els);
		me._text_4_10.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._text_4_10.ggUpdatePosition=function (useTransition) {
		}
		me.__120.appendChild(me._text_4_10);
		me._iframe_10.appendChild(me.__120);
		me.__119.appendChild(me._iframe_10);
		me.__34.appendChild(me.__119);
		me.divSkin.appendChild(me.__34);
		el=me.__33=document.createElement('div');
		el.ggId="\ub79c\ud558\uc6b0\uc2a4-\ubaa8\ubc14\uc77c";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='z-index: 9;';
		hs+='bottom : -1000px;';
		hs+='height : 88%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		hs+='max-width:500px;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__33.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me.__33.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getVariableValue('vis_lanhouse_m') == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me.__33.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me.__33.ggCurrentLogicStatePosition = newLogicStatePosition;
				me.__33.style.transition='left 500ms linear 0ms, bottom 500ms linear 0ms, width 0s, height 0s';
				if (me.__33.ggCurrentLogicStatePosition == 0) {
					me.__33.style.left='0px';
					me.__33.style.bottom='-46px';
				}
				else {
					me.__33.style.left='0px';
					me.__33.style.bottom='-1000px';
				}
			}
		}
		me.__33.logicBlock_position();
		me.__33.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getViewerSize(true).width <= 1120))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me.__33.ggCurrentLogicStateSize != newLogicStateSize) {
				me.__33.ggCurrentLogicStateSize = newLogicStateSize;
				me.__33.style.transition='left 500ms linear 0ms, bottom 500ms linear 0ms, width 0s, height 0s';
				if (me.__33.ggCurrentLogicStateSize == 0) {
					me.__33.style.width='100%';
					me.__33.style.height='100%';
					skin.updateSize(me.__33);
				}
				else {
					me.__33.style.width='100%';
					me.__33.style.height='88%';
					skin.updateSize(me.__33);
				}
			}
		}
		me.__33.logicBlock_size();
		me.__33.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_lanhouse_m') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__33.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__33.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__33.style.transition='left 500ms linear 0ms, bottom 500ms linear 0ms, width 0s, height 0s';
				if (me.__33.ggCurrentLogicStateVisible == 0) {
					me.__33.style.visibility=(Number(me.__33.style.opacity)>0||!me.__33.style.opacity)?'inherit':'hidden';
					me.__33.ggVisible=true;
				}
				else {
					me.__33.style.visibility="hidden";
					me.__33.ggVisible=false;
				}
			}
		}
		me.__33.logicBlock_visible();
		me.__33.ggUpdatePosition=function (useTransition) {
		}
		el=me.__115=document.createElement('div');
		el.ggId="\ub79c\ud558\uc6b0\uc2a4-\ubc30\uacbd_1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 20px;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__115.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__115.logicBlock_borderradius = function() {
			var newLogicStateBorderRadius;
			if (
				((player.getViewerSize(true).width <= 1120))
			)
			{
				newLogicStateBorderRadius = 0;
			}
			else {
				newLogicStateBorderRadius = -1;
			}
			if (me.__115.ggCurrentLogicStateBorderRadius != newLogicStateBorderRadius) {
				me.__115.ggCurrentLogicStateBorderRadius = newLogicStateBorderRadius;
				me.__115.style.transition='border-radius 0s';
				if (me.__115.ggCurrentLogicStateBorderRadius == 0) {
					me.__115.style.borderRadius="0px";
				}
				else {
					me.__115.style.borderRadius="20px";
				}
			}
		}
		me.__115.logicBlock_borderradius();
		me.__115.onclick=function (e) {
			player.setVariableValue('vis_lanhouse_m', false);
		}
		me.__115.ggUpdatePosition=function (useTransition) {
		}
		el=me.__117=document.createElement('div');
		el.ggId="\ub79c\ud558\uc6b0\uc2a4-\ud0c0\uc774\ud2c0_1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 24px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 25px;';
		hs+='visibility : inherit;';
		hs+='width : 91%;';
		hs+='pointer-events:none;';
		hs+='margin:0 24px;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__117.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__117.onclick=function (e) {
			player.setVariableValue('vis_aptInfo', false);
		}
		me.__117.ggUpdatePosition=function (useTransition) {
		}
		el=me.__118=document.createElement('div');
		els=me.__118__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\ub79c\ud558\uc6b0\uc2a4-\uc544\ud30c\ud2b8 \uc774\ub984_1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(57,57,57,1);';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 50%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='font-size: 15px;';
		hs+='font-weight: bolder;';
		hs+='text-align: left;';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__118.ggUpdateText=function() {
			var params = [];
			var hs = player._("\ucee8\ud150\uce20 \uc81c\uc791 - LANHOUSE ", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__118.ggUpdateText();
		el.appendChild(els);
		me.__118.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__118.ggUpdatePosition=function (useTransition) {
		}
		me.__117.appendChild(me.__118);
		el=me._container_1_10=document.createElement('div');
		el.ggId="\ub79c\ud558\uc6b0\uc2a4-Container 1_1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 70%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._container_1_10.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._container_1_10.onclick=function (e) {
			player.setVariableValue('vis_lanhouse_m', false);
		}
		me._container_1_10.ggUpdatePosition=function (useTransition) {
		}
		el=me._rectangle_7_3_1=document.createElement('div');
		el.ggId="Rectangle 7_3_1";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(234,236,234,0.705882);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 50px;';
		hs+='height : 30px;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='top : calc(50% - ((30px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 30px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._rectangle_7_3_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._rectangle_7_3_1.ggUpdatePosition=function (useTransition) {
		}
		el=me._svg_19_3_1=document.createElement('div');
		els=me._svg_19_3_1__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJmZWF0aGVyIGZlYXRoZXIteCIgZmlsbD0ibm9uZSIgaGVpZ2h0PSIyNCIgc3Ryb2tlLXdpZHRoPSIxLjUiIHdpZHRoPSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij4KIDxsaW5lIHkyPSIxOCIgeTE9IjYiIHgyPSI2IiB4MT0iMTgiLz4KIDxsaW5lIHkyPSIxOCIgeTE9IjYiIHgyPSIxOCIgeDE9IjYiLz4KPC9zdmc+Cg==';
		me._svg_19_3_1__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Svg 19_3_1";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 18px;';
		hs+='left : calc(50% - ((18px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((18px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 18px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._svg_19_3_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._svg_19_3_1.ggUpdatePosition=function (useTransition) {
		}
		me._rectangle_7_3_1.appendChild(me._svg_19_3_1);
		me._container_1_10.appendChild(me._rectangle_7_3_1);
		me.__117.appendChild(me._container_1_10);
		me.__115.appendChild(me.__117);
		el=me._iframe_1=document.createElement('div');
		el.ggId="\ub79c\ud558\uc6b0\uc2a4-iframe_1";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 80%;';
		hs+='left : calc(50% - ((92% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 70px;';
		hs+='visibility : inherit;';
		hs+='width : 92%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._iframe_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._iframe_1.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getViewerSize(true).width <= 1120))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me._iframe_1.ggCurrentLogicStateSize != newLogicStateSize) {
				me._iframe_1.ggCurrentLogicStateSize = newLogicStateSize;
				me._iframe_1.style.transition='width 0s, height 0s';
				if (me._iframe_1.ggCurrentLogicStateSize == 0) {
					me._iframe_1.style.width='92%';
					me._iframe_1.style.height='68%';
					me._iframe_1.style.left = 'calc(50% - (92% / 2))';
					skin.updateSize(me._iframe_1);
				}
				else {
					me._iframe_1.style.width='92%';
					me._iframe_1.style.height='80%';
					me._iframe_1.style.left = 'calc(50% - (92% / 2))';
					skin.updateSize(me._iframe_1);
				}
			}
		}
		me._iframe_1.logicBlock_size();
		me._iframe_1.ggUpdatePosition=function (useTransition) {
		}
		el=me.__116=document.createElement('div');
		els=me.__116__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\ub79c\ud558\uc6b0\uc2a4-_1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : #000000;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : -1px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='text-align: center;';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__116.ggUpdateText=function() {
			var params = [];
			var hs = player._("", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__116.ggUpdateText();
		el.appendChild(els);
		me.__116.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__116.ggUpdatePosition=function (useTransition) {
		}
		el=me._text_4_1=document.createElement('div');
		els=me._text_4_1__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\ub79c\ud558\uc6b0\uc2a4-Text 4_1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='bottom : -60px;';
		hs+='color : rgba(85,85,85,1);';
		hs+='height : auto;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='border : 0px solid #000000;';
		hs+='font-size: 10px;';
		hs+='font-weight: inherit;';
		hs+='text-align: left;';
		hs+='white-space: pre-line;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._text_4_1.ggUpdateText=function() {
			var params = [];
			var hs = player._("", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._text_4_1.ggUpdateText();
		el.appendChild(els);
		me._text_4_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._text_4_1.ggUpdatePosition=function (useTransition) {
		}
		me.__116.appendChild(me._text_4_1);
		me._iframe_1.appendChild(me.__116);
		me.__115.appendChild(me._iframe_1);
		me.__33.appendChild(me.__115);
		me.divSkin.appendChild(me.__33);
		el=me.__32=document.createElement('div');
		el.ggId="\ucd94\ucc9c\uc815\ubcf4_\ub2e8\uc5f4\ud544\ub984-\ubaa8\ubc14\uc77c";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='z-index: 9;';
		hs+='bottom : -1000px;';
		hs+='height : 88%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		hs+='max-width:500px;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__32.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me.__32.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getVariableValue('vis_films_m') == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me.__32.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me.__32.ggCurrentLogicStatePosition = newLogicStatePosition;
				me.__32.style.transition='left 500ms linear 0ms, bottom 500ms linear 0ms, width 0s, height 0s';
				if (me.__32.ggCurrentLogicStatePosition == 0) {
					me.__32.style.left='0px';
					me.__32.style.bottom='-46px';
				}
				else {
					me.__32.style.left='0px';
					me.__32.style.bottom='-1000px';
				}
			}
		}
		me.__32.logicBlock_position();
		me.__32.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getViewerSize(true).width <= 1120))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me.__32.ggCurrentLogicStateSize != newLogicStateSize) {
				me.__32.ggCurrentLogicStateSize = newLogicStateSize;
				me.__32.style.transition='left 500ms linear 0ms, bottom 500ms linear 0ms, width 0s, height 0s';
				if (me.__32.ggCurrentLogicStateSize == 0) {
					me.__32.style.width='100%';
					me.__32.style.height='100%';
					skin.updateSize(me.__32);
				}
				else {
					me.__32.style.width='100%';
					me.__32.style.height='88%';
					skin.updateSize(me.__32);
				}
			}
		}
		me.__32.logicBlock_size();
		me.__32.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_films_m') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__32.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__32.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__32.style.transition='left 500ms linear 0ms, bottom 500ms linear 0ms, width 0s, height 0s';
				if (me.__32.ggCurrentLogicStateVisible == 0) {
					me.__32.style.visibility=(Number(me.__32.style.opacity)>0||!me.__32.style.opacity)?'inherit':'hidden';
					me.__32.ggVisible=true;
				}
				else {
					me.__32.style.visibility="hidden";
					me.__32.ggVisible=false;
				}
			}
		}
		me.__32.logicBlock_visible();
		me.__32.ggUpdatePosition=function (useTransition) {
		}
		el=me.__111=document.createElement('div');
		el.ggId="\ucd94\ucc9c\uc815\ubcf4_\ub2e8\uc5f4\ud544\ub984\ubc30\uacbd_1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 20px;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__111.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__111.logicBlock_borderradius = function() {
			var newLogicStateBorderRadius;
			if (
				((player.getViewerSize(true).width <= 1120))
			)
			{
				newLogicStateBorderRadius = 0;
			}
			else {
				newLogicStateBorderRadius = -1;
			}
			if (me.__111.ggCurrentLogicStateBorderRadius != newLogicStateBorderRadius) {
				me.__111.ggCurrentLogicStateBorderRadius = newLogicStateBorderRadius;
				me.__111.style.transition='border-radius 0s';
				if (me.__111.ggCurrentLogicStateBorderRadius == 0) {
					me.__111.style.borderRadius="0px";
				}
				else {
					me.__111.style.borderRadius="20px";
				}
			}
		}
		me.__111.logicBlock_borderradius();
		me.__111.ggUpdatePosition=function (useTransition) {
		}
		el=me.__113=document.createElement('div');
		el.ggId="\ucd94\ucc9c\uc815\ubcf4-\ud0c0\uc774\ud2c0_\ub2e8\uc5f4\ud544\ub984_1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 24px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 25px;';
		hs+='visibility : inherit;';
		hs+='width : 91%;';
		hs+='pointer-events:none;';
		hs+='margin:0 24px;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__113.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__113.onclick=function (e) {
			player.setVariableValue('vis_films_m', false);
		}
		me.__113.ggUpdatePosition=function (useTransition) {
		}
		el=me.__114=document.createElement('div');
		els=me.__114__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\ucd94\ucc9c\uc815\ubcf4_\ub2e8\uc5f4\ud544\ub984__1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(57,57,57,1);';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 30%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='font-size: 15px;';
		hs+='font-weight: bolder;';
		hs+='text-align: left;';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__114.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uc8fc\uad00\uc0ac \ucd94\ucc9c AD", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__114.ggUpdateText();
		el.appendChild(els);
		me.__114.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__114.ggUpdatePosition=function (useTransition) {
		}
		me.__113.appendChild(me.__114);
		el=me._container_1_1=document.createElement('div');
		el.ggId="\ucd94\ucc9c\uc815\ubcf4-Container 1_\ub2e8\uc5f4\ud544\ub984_1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 70%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._container_1_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._container_1_1.onclick=function (e) {
			player.setVariableValue('vis_ad', false);
		}
		me._container_1_1.ggUpdatePosition=function (useTransition) {
		}
		el=me._rectangle_7_4_1=document.createElement('div');
		el.ggId="Rectangle 7_4_1";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(234,236,234,0.705882);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 50px;';
		hs+='height : 30px;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='top : calc(50% - ((30px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 30px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._rectangle_7_4_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._rectangle_7_4_1.ggUpdatePosition=function (useTransition) {
		}
		el=me._svg_19_4_1=document.createElement('div');
		els=me._svg_19_4_1__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJmZWF0aGVyIGZlYXRoZXIteCIgZmlsbD0ibm9uZSIgaGVpZ2h0PSIyNCIgc3Ryb2tlLXdpZHRoPSIxLjUiIHdpZHRoPSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij4KIDxsaW5lIHkyPSIxOCIgeTE9IjYiIHgyPSI2IiB4MT0iMTgiLz4KIDxsaW5lIHkyPSIxOCIgeTE9IjYiIHgyPSIxOCIgeDE9IjYiLz4KPC9zdmc+Cg==';
		me._svg_19_4_1__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Svg 19_4_1";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 18px;';
		hs+='left : calc(50% - ((18px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((18px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 18px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._svg_19_4_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._svg_19_4_1.ggUpdatePosition=function (useTransition) {
		}
		me._rectangle_7_4_1.appendChild(me._svg_19_4_1);
		me._container_1_1.appendChild(me._rectangle_7_4_1);
		me.__113.appendChild(me._container_1_1);
		me.__111.appendChild(me.__113);
		el=me.__box_1=document.createElement('div');
		el.ggId="\ucd94\ucc9c\uc815\ubcf4_\ub2e8\uc5f4\ud544\ub984box_1";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 80%;';
		hs+='left : calc(50% - ((92% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 70px;';
		hs+='visibility : inherit;';
		hs+='width : 92%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__box_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__box_1.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getViewerSize(true).width <= 1120))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me.__box_1.ggCurrentLogicStateSize != newLogicStateSize) {
				me.__box_1.ggCurrentLogicStateSize = newLogicStateSize;
				me.__box_1.style.transition='width 0s, height 0s';
				if (me.__box_1.ggCurrentLogicStateSize == 0) {
					me.__box_1.style.width='92%';
					me.__box_1.style.height='68%';
					me.__box_1.style.left = 'calc(50% - (92% / 2))';
					skin.updateSize(me.__box_1);
				}
				else {
					me.__box_1.style.width='92%';
					me.__box_1.style.height='80%';
					me.__box_1.style.left = 'calc(50% - (92% / 2))';
					skin.updateSize(me.__box_1);
				}
			}
		}
		me.__box_1.logicBlock_size();
		me.__box_1.ggUpdatePosition=function (useTransition) {
		}
		el=me.__112=document.createElement('div');
		els=me.__112__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\ucd94\ucc9c\uc815\ubcf4_\uc6b0\uc9d1\uc0ac \ub2e8\uc5f4\ud544\ub984_1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : #000000;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : -1px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='text-align: center;';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__112.ggUpdateText=function() {
			var params = [];
			var hs = player._("", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__112.ggUpdateText();
		el.appendChild(els);
		me.__112.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__112.ggUpdatePosition=function (useTransition) {
		}
		el=me.__1_1=document.createElement('div');
		els=me.__1_1__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\ucd94\ucc9c\uc815\ubcf4_\ub2e8\uc5f4\ud544\ub9841_1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='bottom : -20px;';
		hs+='color : rgba(85,85,85,1);';
		hs+='height : 20px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 120px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 13px;';
		hs+='font-weight: inherit;';
		hs+='text-align: left;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__1_1.ggUpdateText=function() {
			var params = [];
			var hs = player._("", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__1_1.ggUpdateText();
		el.appendChild(els);
		me.__1_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__1_1.ggUpdatePosition=function (useTransition) {
		}
		me.__112.appendChild(me.__1_1);
		me.__box_1.appendChild(me.__112);
		me.__111.appendChild(me.__box_1);
		me.__32.appendChild(me.__111);
		me.divSkin.appendChild(me.__32);
		el=me.__header=document.createElement('div');
		el.ggId="\ubaa8\ubc14\uc77c header";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 44px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		hs+='min-width:280px;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__header.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me.__header.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getViewerSize(true).width <= 1120))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__header.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__header.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__header.style.transition='';
				if (me.__header.ggCurrentLogicStateVisible == 0) {
					me.__header.style.visibility=(Number(me.__header.style.opacity)>0||!me.__header.style.opacity)?'inherit':'hidden';
					me.__header.ggVisible=true;
				}
				else {
					me.__header.style.visibility="hidden";
					me.__header.ggVisible=false;
				}
			}
		}
		me.__header.logicBlock_visible();
		me.__header.ggUpdatePosition=function (useTransition) {
		}
		el=me.__24=document.createElement('div');
		el.ggId="\ubc30\uacbd";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		hs+='border-bottom:1px solid rgba(0,0,0,0.2);';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__24.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__24.ggUpdatePosition=function (useTransition) {
		}
		el=me._title=document.createElement('div');
		el.ggId="title";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 80%;';
		hs+='pointer-events:none;';
		hs+='margin:0 20px;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._title.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._title.ggUpdatePosition=function (useTransition) {
		}
		el=me.__26=document.createElement('div');
		el.ggId="\ub9c9\ub300";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #221e1f;';
		hs+='border : 0px solid #000000;';
		hs+='height : 40%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((40% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 2px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__26.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__26.ggUpdatePosition=function (useTransition) {
		}
		me._title.appendChild(me.__26);
		el=me.__25=document.createElement('div');
		els=me.__25__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\uc544\ud30c\ud2b8\uba85";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(57,57,57,1);';
		hs+='height : 40%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((40% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		hs+='margin-left:10px; line-height:16px;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 14px;';
		hs+='font-weight: 600;';
		hs+='text-align: left;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+="font-family: \"Noto Sans KR\", sans-serif; font-optical-sizing: auto; font-weight: <weight>; font-style: normal;";
		els.setAttribute('style',hs);
		me.__25.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(player.getNodeUserdata('_master').title)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__25.ggUpdateText();
		player.addListener('changenode', function() {
			me.__25.ggUpdateText();
		});
		el.appendChild(els);
		me.__25.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__25.ggUpdatePosition=function (useTransition) {
		}
		me._title.appendChild(me.__25);
		me.__24.appendChild(me._title);
		el=me._hamburgar=document.createElement('div');
		el.ggId="hamburgar";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 100%;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 20%;';
		hs+='pointer-events:none;';
		hs+='margin:0 20px;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._hamburgar.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._hamburgar.onclick=function (e) {
			player.openUrl("https:\/\/woorihome.kr\/","");
		}
		me._hamburgar.ggUpdatePosition=function (useTransition) {
		}
		el=me._image_1=document.createElement('div');
		els=me._image_1__img=document.createElement('img');
		els.className='ggskin ggskin_image_1';
		hs=basePath + 'images/image_1.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 1";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 30px;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='top : calc(50% - ((30px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 40px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_1.ggUpdatePosition=function (useTransition) {
		}
		me._hamburgar.appendChild(me._image_1);
		me.__24.appendChild(me._hamburgar);
		me.__header.appendChild(me.__24);
		me.divSkin.appendChild(me.__header);
		el=me.__17=document.createElement('div');
		el.ggId="\ubaa8\ubc14\uc77c-\ud0c0\uc785\/\uacf5\uac04";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='z-index: -2;';
		hs+='height : 35px;';
		hs+='left : 10px;';
		hs+='position : absolute;';
		hs+='top : 60px;';
		hs+='visibility : hidden;';
		hs+='width : 48%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__17.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me.__17.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getViewerSize(true).width <= 1120))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__17.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__17.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__17.style.transition='';
				if (me.__17.ggCurrentLogicStateVisible == 0) {
					me.__17.style.visibility=(Number(me.__17.style.opacity)>0||!me.__17.style.opacity)?'inherit':'hidden';
					me.__17.ggVisible=true;
				}
				else {
					me.__17.style.visibility="hidden";
					me.__17.ggVisible=false;
				}
			}
		}
		me.__17.logicBlock_visible();
		me.__17.ggUpdatePosition=function (useTransition) {
		}
		el=me.__21=document.createElement('div');
		el.ggId="\ud0c0\uc785";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 47%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__21.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__21.ggUpdatePosition=function (useTransition) {
		}
		el=me.__22=document.createElement('div');
		el.ggId="\ud0c0\uc785-\ubc30\uacbd";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 9px;';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='opacity : 0.9;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__22.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__22.ggUpdatePosition=function (useTransition) {
		}
		el=me.__23=document.createElement('div');
		els=me.__23__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\ud0c0\uc785-\ud3c9\ud615";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : #000000;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 12px;';
		hs+='font-weight: 500;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+="font-family: \"Mukta\", sans-serif; font-style: normal;";
		els.setAttribute('style',hs);
		me.__23.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(player.getNodeUserdata('_master').description)));
			var hs = player._("%1 TYPE", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__23.ggUpdateText();
		player.addListener('changenode', function() {
			me.__23.ggUpdateText();
		});
		el.appendChild(els);
		me.__23.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__23.ggUpdatePosition=function (useTransition) {
		}
		me.__22.appendChild(me.__23);
		me.__21.appendChild(me.__22);
		me.__17.appendChild(me.__21);
		el=me.__18=document.createElement('div');
		el.ggId="\uacf5\uac04";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 100%;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 47%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__18.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__18.ggUpdatePosition=function (useTransition) {
		}
		el=me.__19=document.createElement('div');
		el.ggId="\uacf5\uac04-\ubc30\uacbd";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 9px;';
		hs+='height : 99%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='opacity : 0.9;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((99% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__19.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__19.ggUpdatePosition=function (useTransition) {
		}
		el=me.__20=document.createElement('div');
		els=me.__20__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\uacf5\uac04-\uc774\ub984";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : #000000;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 12px;';
		hs+='font-weight: 500;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+="font-family: \"Noto Sans KR\", sans-serif; font-optical-sizing: auto; font-weight: <weight>; font-style: normal;";
		els.setAttribute('style',hs);
		me.__20.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.ggUserdata.title)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__20.ggUpdateText();
		player.addListener('changenode', function() {
			me.__20.ggUpdateText();
		});
		el.appendChild(els);
		me.__20.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__20.ggUpdatePosition=function (useTransition) {
		}
		me.__19.appendChild(me.__20);
		me.__18.appendChild(me.__19);
		me.__17.appendChild(me.__18);
		me.divSkin.appendChild(me.__17);
		el=me.__16=document.createElement('div');
		el.ggId="\ubaa8\ubc14\uc77c-\ud654\uc0b4\ud45c";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 42px;';
		hs+='left : calc(50% - ((98% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((42px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 98%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__16.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me.__16.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getViewerSize(true).width <= 1120))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__16.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__16.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__16.style.transition='';
				if (me.__16.ggCurrentLogicStateVisible == 0) {
					me.__16.style.visibility=(Number(me.__16.style.opacity)>0||!me.__16.style.opacity)?'inherit':'hidden';
					me.__16.ggVisible=true;
				}
				else {
					me.__16.style.visibility="hidden";
					me.__16.ggVisible=false;
				}
			}
		}
		me.__16.logicBlock_visible();
		me.__16.ggUpdatePosition=function (useTransition) {
		}
		el=me._container_3=document.createElement('div');
		el.ggId="Container 3";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 60px;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 60px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._container_3.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._container_3.onclick=function (e) {
			player.openNext("{"+player.getNextNode()+"}","");
		}
		me._container_3.ggUpdatePosition=function (useTransition) {
		}
		el=me._svg_2_1=document.createElement('div');
		els=me._svg_2_1__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyBzdHJva2UtbGluZWNhcD0icm91bmQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgc3Ryb2tlPSIjZmZmZmZmIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0iZmVhdGhlciBmZWF0aGVyLWNoZXZyb24tcmlnaHQiIGZpbGw9Im5vbmUiIGhlaWdodD0iMjQiIHN0cm9rZS13aWR0aD0iMS41IiB3aWR0aD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgc3Ryb2tlLW9wYWNpdHk9IjAuNjI3NDUxIj4KIDxwb2x5bGluZSBwb2ludHM9IjkgMTggMTUgMTIgOSA2Ii8+Cjwvc3ZnPgo=';
		me._svg_2_1__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Svg 2_1";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 60px;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='top : calc(50% - ((60px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 60px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._svg_2_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._svg_2_1.ggUpdatePosition=function (useTransition) {
		}
		me._container_3.appendChild(me._svg_2_1);
		me.__16.appendChild(me._container_3);
		el=me._container_4=document.createElement('div');
		el.ggId="Container 4";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 60px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 60px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._container_4.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._container_4.onclick=function (e) {
			player.openNext("{"+player.getPrevNode()+"}","");
		}
		me._container_4.ggUpdatePosition=function (useTransition) {
		}
		el=me._svg_1_1=document.createElement('div');
		els=me._svg_1_1__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyBzdHJva2UtbGluZWNhcD0icm91bmQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgc3Ryb2tlPSIjZmZmZmZmIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0iZmVhdGhlciBmZWF0aGVyLWNoZXZyb24tbGVmdCIgZmlsbD0ibm9uZSIgaGVpZ2h0PSIyNCIgc3Ryb2tlLXdpZHRoPSIxLjUiIHdpZHRoPSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBzdHJva2Utb3BhY2l0eT0iMC42Mjc0NTEiPgogPHBvbHlsaW5lIHBvaW50cz0iMTUgMTggOSAxMiAxNSA2Ii8+Cjwvc3ZnPgo=';
		me._svg_1_1__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Svg 1_1";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 60px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((60px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 60px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._svg_1_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._svg_1_1.ggUpdatePosition=function (useTransition) {
		}
		me._container_4.appendChild(me._svg_1_1);
		me.__16.appendChild(me._container_4);
		me.divSkin.appendChild(me.__16);
		el=me.__6=document.createElement('div');
		el.ggId="\ubaa8\ubc14\uc77c - \ud558\ub2e8";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='z-index: 999;';
		hs+='bottom : 0px;';
		hs+='height : 65px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__6.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me.__6.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getViewerSize(true).width <= 1120))
			)
			{
				newLogicStateVisible = 0;
			}
			else if (
				((player.getVariableValue('vis_m_roomMove') == true))
			)
			{
				newLogicStateVisible = 1;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__6.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__6.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__6.style.transition='';
				if (me.__6.ggCurrentLogicStateVisible == 0) {
					me.__6.style.visibility=(Number(me.__6.style.opacity)>0||!me.__6.style.opacity)?'inherit':'hidden';
					me.__6.ggVisible=true;
				}
				else if (me.__6.ggCurrentLogicStateVisible == 1) {
					me.__6.style.visibility="hidden";
					me.__6.ggVisible=false;
				}
				else {
					me.__6.style.visibility="hidden";
					me.__6.ggVisible=false;
				}
			}
		}
		me.__6.logicBlock_visible();
		me.__6.ggUpdatePosition=function (useTransition) {
		}
		el=me.__7=document.createElement('div');
		el.ggId="\ud558\ub2e8\ubc30\uacbd";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		hs+='box-shadow:-2px -3px 16px rgba(0,0,0,0.2);';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__7.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__7.ggUpdatePosition=function (useTransition) {
		}
		el=me.__8=document.createElement('div');
		el.ggId="\ud558\ub2e8 \uc544\uc774\ucf58";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 80%;';
		hs+='left : calc(50% - ((80% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 10px;';
		hs+='visibility : inherit;';
		hs+='width : 80%;';
		hs+='pointer-events:none;';
		hs+='display: flex; justify-content: space-between;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__8.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__8.ggUpdatePosition=function (useTransition) {
		}
		el=me.__15=document.createElement('div');
		el.ggId="\ud648";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 50%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 24px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__15.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__15.onclick=function (e) {
				me.__120.ggUpdateText=function() {
					var params = [];
					var hs = player._("<iframe src=\"https:\/\/dokyoung-an.github.io\/urihome\/\" width=\"100%\" height=\"100%\" allowfullscreen=\"true\" mozallowfullscreen=\"true\" webkitallowfullscreen=\"true\" frameborder= \"0\" ><\/iframe>", params);
					if (hs!=this.ggText) {
						this.ggText=hs;
						this.ggTextDiv.innerHTML=hs;
						if (this.ggUpdatePosition) this.ggUpdatePosition();
					}
				}
			me.__120.ggUpdateText();
			me.__120.ggTextDiv.scrollTop = 0;
			player.setVariableValue('vis_ad_m', !player.getVariableValue('vis_ad_m'));
			player.setVariableValue('vis_m_roomMove', false);
			player.setVariableValue('vis_aptInfo', false);
			player.setVariableValue('vis_lanhouse_m', false);
			player.setVariableValue('vis_films_m', false);
		}
		me.__15.ggUpdatePosition=function (useTransition) {
		}
		el=me._t3=document.createElement('div');
		els=me._t3__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="t-\ud648";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='bottom : -20px;';
		hs+='color : rgba(113,114,122,1);';
		hs+='height : 20px;';
		hs+='left : calc(50% - ((100px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 10px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+="font-family: \"Mukta\", sans-serif; font-weight: 300; font-style: normal;";
		els.setAttribute('style',hs);
		me._t3.ggUpdateText=function() {
			var params = [];
			var hs = player._("\ucd94\ucc9c\uc5c5\uccb4", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._t3.ggUpdateText();
		el.appendChild(els);
		me._t3.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._t3.ggUpdatePosition=function (useTransition) {
		}
		me.__15.appendChild(me._t3);
		el=me._svg_12=document.createElement('div');
		els=me._svg_12__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		me._svg_12__img.setAttribute('src',basePath + 'images/svg_12.svg');
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Svg 12";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 25px;';
		hs+='left : calc(50% - ((28px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((25px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 28px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._svg_12.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._svg_12.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_ad_m') == false))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._svg_12.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._svg_12.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._svg_12.style.transition='';
				if (me._svg_12.ggCurrentLogicStateVisible == 0) {
					me._svg_12.style.visibility=(Number(me._svg_12.style.opacity)>0||!me._svg_12.style.opacity)?'inherit':'hidden';
					me._svg_12.ggVisible=true;
				}
				else {
					me._svg_12.style.visibility="hidden";
					me._svg_12.ggVisible=false;
				}
			}
		}
		me._svg_12.logicBlock_visible();
		me._svg_12.ggUpdatePosition=function (useTransition) {
		}
		me.__15.appendChild(me._svg_12);
		el=me._svg_3_1=document.createElement('div');
		els=me._svg_3_1__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		me._svg_3_1__img.setAttribute('src',basePath + 'images/svg_3_1.svg');
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Svg 3_1";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 25px;';
		hs+='left : calc(50% - ((28px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((25px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 28px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._svg_3_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._svg_3_1.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_ad_m') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._svg_3_1.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._svg_3_1.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._svg_3_1.style.transition='';
				if (me._svg_3_1.ggCurrentLogicStateVisible == 0) {
					me._svg_3_1.style.visibility=(Number(me._svg_3_1.style.opacity)>0||!me._svg_3_1.style.opacity)?'inherit':'hidden';
					me._svg_3_1.ggVisible=true;
				}
				else {
					me._svg_3_1.style.visibility="hidden";
					me._svg_3_1.ggVisible=false;
				}
			}
		}
		me._svg_3_1.logicBlock_visible();
		me._svg_3_1.ggUpdatePosition=function (useTransition) {
		}
		me.__15.appendChild(me._svg_3_1);
		me.__8.appendChild(me.__15);
		el=me.__14=document.createElement('div');
		el.ggId="\uacf5\uac04\uc774\ub3d9";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 50%;';
		hs+='left : 22%;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 24px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__14.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__14.onclick=function (e) {
			player.setVariableValue('vis_m_roomMove', !player.getVariableValue('vis_m_roomMove'));
			player.setVariableValue('vis_ad_m', false);
			player.setVariableValue('vis_aptInfo', false);
			player.setVariableValue('vis_lanhouse_m', false);
			player.setVariableValue('vis_films_m', false);
		}
		me.__14.ggUpdatePosition=function (useTransition) {
		}
		el=me._svg_15=document.createElement('div');
		els=me._svg_15__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIGhlaWdodD0iMzAiIHdpZHRoPSIyNyIgdmlld0JveD0iMCAwIDI3IDMwIj4KIDxwYXRoIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlPSIjMjYyNjI2IiBzdHJva2Utd2lkdGg9IjEuNSIgZD0iTTcuOTQ0MzQgMjAuNDQzNVYyNC43NzY0QzcuOTQ0MzQgMjYuOTg1NSA5LjczNTIgMjguNzc2NCAxMS45NDQzIDI4Ljc3NjRIMjEuOTk5QzI0LjIwODEgMjguNzc2NCAyNS45OTkgMjYuOTg1NSAyNS45OTkgMjQuNzc2NFY1QzI1Ljk5OSAyLjc5MDg2IDI0LjIwODEgMSAyMS45OTkgMUgxMS45NDQzQzkuNz'+
			'M1MiAxIDcuOTQ0MzQgMi43OTA4NiA3Ljk0NDM0IDVWOS4zMzI5MSIgc3Ryb2tlLW9wYWNpdHk9IjEiLz4KIDxwYXRoIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlPSIjMjYyNjI2IiBzdHJva2Utd2lkdGg9IjEuNSIgZD0iTTE0Ljg4OCAxOS4wNTM3TDE4LjM0NzYgMTUuNTk0MUMxOC43MzgxIDE1LjIwMzYgMTguNzM4MSAxNC41NzA0IDE4LjM0NzYgMTQuMTc5OUwxNC44ODggMTAuNzIwMyIgc3Ryb2tlLW9wYWNpdHk9IjEiLz4KIDxwYXRoIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlPSIjMzYzNjM2IiBzdHJva2Utd2lkdGg9IjEuNSIgZD0iTTE3LjY2NjcgMTQuODg4N0wxIDE0'+
			'Ljg4ODciLz4KPC9zdmc+Cg==';
		me._svg_15__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Svg 15";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 23px;';
		hs+='left : calc(50% - ((22px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((23px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 22px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._svg_15.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._svg_15.ggUpdatePosition=function (useTransition) {
		}
		el=me._t2=document.createElement('div');
		els=me._t2__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="t-\uacf5\uac04\uc774\ub3d9";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='bottom : -21px;';
		hs+='color : rgba(113,114,122,1);';
		hs+='height : 20px;';
		hs+='left : calc(50% - ((100px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 10px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+="font-family: \"Noto Sans KR\", sans-serif; font-optical-sizing: auto; font-weight: <weight>; font-style: normal;";
		els.setAttribute('style',hs);
		me._t2.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uacf5\uac04\uc774\ub3d9", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._t2.ggUpdateText();
		el.appendChild(els);
		me._t2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._t2.ggUpdatePosition=function (useTransition) {
		}
		me._svg_15.appendChild(me._t2);
		me.__14.appendChild(me._svg_15);
		me.__8.appendChild(me.__14);
		el=me.__13=document.createElement('div');
		el.ggId="\uc544\ud30c\ud2b8\uc815\ubcf4";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 50%;';
		hs+='left : calc(50% - ((24px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 24px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__13.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__13.onclick=function (e) {
			player.setVariableValue('vis_aptInfo', !player.getVariableValue('vis_aptInfo'));
				me.__124.ggUpdateText=function() {
					var params = [];
					var hs = player._("<iframe src=\"https:\/\/kbland.kr\/c\/730325?ctype=05&xy=37.4828631,126.8690924,17\" width=\"100%\" height=\"100%\" allowfullscreen=\"true\" mozallowfullscreen=\"true\" webkitallowfullscreen=\"true\" frameborder= \"0\" ><\/iframe>", params);
					if (hs!=this.ggText) {
						this.ggText=hs;
						this.ggTextDiv.innerHTML=hs;
						if (this.ggUpdatePosition) this.ggUpdatePosition();
					}
				}
			me.__124.ggUpdateText();
			me.__124.ggTextDiv.scrollTop = 0;
			player.setVariableValue('vis_ad_m', false);
			player.setVariableValue('vis_m_roomMove', false);
			player.setVariableValue('vis_lanhouse_m', false);
			player.setVariableValue('vis_films_m', false);
		}
		me.__13.ggUpdatePosition=function (useTransition) {
		}
		el=me._svg_7=document.createElement('div');
		els=me._svg_7__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIGhlaWdodD0iMzAiIHdpZHRoPSIzMCIgdmlld0JveD0iMCAwIDMwIDMwIj4KIDxwYXRoIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlPSIjMjYyNjI2IiBzdHJva2Utd2lkdGg9IjEuNSIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBkPSJNMTYuMjUgMjcuNUg2LjI1QzMuNzUgMjcuNSAyLjUgMjYuMjUgMi41IDIzLjc1VjEzLjc1QzIuNSAxMS4yNSAzLjc1IDEwIDYuMjUgMTBIMTIuNVYyMy43NUMxMi41IDI2LjI1IDEzLjc1IDI3LjUgMTYuMjUgMjcuNVoiIH'+
			'N0cm9rZS1vcGFjaXR5PSIxIi8+CiA8cGF0aCBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZT0iIzI2MjYyNiIgc3Ryb2tlLXdpZHRoPSIxLjUiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgZD0iTTEyLjYzNzUgNUMxMi41Mzc1IDUuMzc1IDEyLjUgNS43ODc1IDEyLjUgNi4yNVYxMEg2LjI1VjcuNUM2LjI1IDYuMTI1IDcuMzc1IDUgOC43NSA1SDEyLjYzNzVaIiBzdHJva2Utb3BhY2l0eT0iMSIvPgogPHBhdGggc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2U9IiMyNjI2MjYiIHN0cm9rZS13aWR0aD0i'+
			'MS41IiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIGQ9Ik0xNy41IDEwVjE2LjI1IiBzdHJva2Utb3BhY2l0eT0iMSIvPgogPHBhdGggc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2U9IiMyNjI2MjYiIHN0cm9rZS13aWR0aD0iMS41IiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIGQ9Ik0yMi41IDEwVjE2LjI1IiBzdHJva2Utb3BhY2l0eT0iMSIvPgogPHBhdGggc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2U9IiMyNjI2MjYiIHN0cm9rZS13aWR0aD0iMS41IiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIGQ9Ik'+
			'0yMS4yNSAyMS4yNUgxOC43NUMxOC4wNjI1IDIxLjI1IDE3LjUgMjEuODEyNSAxNy41IDIyLjVWMjcuNUgyMi41VjIyLjVDMjIuNSAyMS44MTI1IDIxLjkzNzUgMjEuMjUgMjEuMjUgMjEuMjVaIiBzdHJva2Utb3BhY2l0eT0iMSIvPgogPHBhdGggc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2U9IiMyNjI2MjYiIHN0cm9rZS13aWR0aD0iMS41IiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIGQ9Ik03LjUgMTYuMjVWMjEuMjUiIHN0cm9rZS1vcGFjaXR5PSIxIi8+CiA8cGF0aCBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2UtbGluZWNhcD0icm91'+
			'bmQiIHN0cm9rZT0iIzI2MjYyNiIgc3Ryb2tlLXdpZHRoPSIxLjUiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgZD0iTTEyLjUgMjMuNzVWNi4yNUMxMi41IDMuNzUgMTMuNzUgMi41IDE2LjI1IDIuNUgyMy43NUMyNi4yNSAyLjUgMjcuNSAzLjc1IDI3LjUgNi4yNVYyMy43NUMyNy41IDI2LjI1IDI2LjI1IDI3LjUgMjMuNzUgMjcuNUgxNi4yNUMxMy43NSAyNy41IDEyLjUgMjYuMjUgMTIuNSAyMy43NVoiIHN0cm9rZS1vcGFjaXR5PSIxIi8+Cjwvc3ZnPgo=';
		me._svg_7__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Svg 7";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 28px;';
		hs+='left : calc(50% - ((28px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((28px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 28px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._svg_7.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._svg_7.ggUpdatePosition=function (useTransition) {
		}
		el=me._t1=document.createElement('div');
		els=me._t1__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="t-\uc544\ud30c\ud2b8\uc815\ubcf4";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='bottom : -20px;';
		hs+='color : rgba(113,114,122,1);';
		hs+='height : 20px;';
		hs+='left : calc(50% - ((100px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 10px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+="font-family: \"Noto Sans KR\", sans-serif; font-optical-sizing: auto; font-weight: <weight>; font-style: normal;";
		els.setAttribute('style',hs);
		me._t1.ggUpdateText=function() {
			var params = [];
			var hs = player._("\ubd80\ub3d9\uc0b0\uc815\ubcf4", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._t1.ggUpdateText();
		el.appendChild(els);
		me._t1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._t1.ggUpdatePosition=function (useTransition) {
		}
		me._svg_7.appendChild(me._t1);
		me.__13.appendChild(me._svg_7);
		me.__8.appendChild(me.__13);
		el=me.__12=document.createElement('div');
		el.ggId="\uc790\ub3d9\ud68c\uc804";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 50%;';
		hs+='position : absolute;';
		hs+='right : 22%;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 24px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__12.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__12.onclick=function (e) {
			player.toggleAutorotate();
		}
		me.__12.ggUpdatePosition=function (useTransition) {
		}
		el=me._svg_14=document.createElement('div');
		els=me._svg_14__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIGhlaWdodD0iMjQiIHdpZHRoPSIyNiIgdmlld0JveD0iMCAwIDI2IDI0Ij4KIDxwYXRoIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlPSIjMjYyNjI2IiBzdHJva2Utd2lkdGg9IjEuNSIgZD0iTTIuOTk3OTMgNy44NzVDMy43NjkyMyA1LjU4MzMzIDYuMDAxMjQgMy4zMDEwMSA3Ljc3NTczIDIuMzMzMDJDOS41NTAyMSAxLjM2NTAzIDExLjU1NjYgMC45MDg5MDYgMTMuNTczIDEuMDE1MDhDMTUuNTg5NCAxLjEyMTI1IDE3LjUzNzMgMS43ODU1OCAxOS4yMDE0IDIuOTM0NjNDMjAuODY1NCA0LjA4Mz'+
			'Y3IDIyLjE4MDggNS42NzI2NyAyMy4wMDIxIDcuNTI1OTRNMSAzLjA4MzY0TDEuOTk4MjYgNy40MjgwM0MyLjE2ODI4IDguMTY3OTcgMi45MDMxNSA4LjYyOTMzIDMuNjM5NjIgOC40NTg1TDcuOTYzNzEgNy40NTU1NU0yMy4wMDIxIDE2LjEyNUMyMi4yMzA4IDE4LjQxNjcgMTkuOTk4OCAyMC42OTkgMTguMjI0MyAyMS42NjdDMTYuNDQ5OCAyMi42MzUgMTQuNDQzNCAyMy4wOTExIDEyLjQyNyAyMi45ODQ5QzEwLjQxMDYgMjIuODc4OCA4LjQ2MjcgMjIuMjE0NCA2Ljc5ODY0IDIxLjA2NTRDNS4xMzQ1OCAxOS45MTYzIDMuODE5MjEgMTguMzI3MyAyLjk5NzkzIDE2LjQ3NDFNMjUgMjAuOTE2NEwy'+
			'NC4wMDE3IDE2LjU3MkMyMy44MzE3IDE1LjgzMiAyMy4wOTY5IDE1LjM3MDcgMjIuMzYwNCAxNS41NDE1TDE4LjAzNjMgMTYuNTQ0NCIvPgo8L3N2Zz4K';
		me._svg_14__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Svg 14";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 20px;';
		hs+='left : calc(50% - ((22px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((20px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 22px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._svg_14.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._svg_14.ggUpdatePosition=function (useTransition) {
		}
		el=me._t0=document.createElement('div');
		els=me._t0__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="t-\uc790\ub3d9\ud68c\uc804";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='bottom : -23px;';
		hs+='color : rgba(113,114,122,1);';
		hs+='height : 20px;';
		hs+='left : calc(50% - ((100px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 10px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+="font-family: \"Noto Sans KR\", sans-serif; font-optical-sizing: auto; font-weight: <weight>; font-style: normal;";
		els.setAttribute('style',hs);
		me._t0.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uc790\ub3d9\ud68c\uc804", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._t0.ggUpdateText();
		el.appendChild(els);
		me._t0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._t0.ggUpdatePosition=function (useTransition) {
		}
		me._svg_14.appendChild(me._t0);
		me.__12.appendChild(me._svg_14);
		me.__8.appendChild(me.__12);
		el=me.__9=document.createElement('div');
		el.ggId="\ub9c1\ud06c\uacf5\uc720";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 50%;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 24px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__9.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__9.onclick=function (e) {
			"";
 let url = '';
  const textarea = document.createElement("textarea");
  document.body.appendChild(textarea);
  url = window.document.location.href;
  textarea.value = url;
  textarea.select();
  document.execCommand("copy");
  document.body.removeChild(textarea);
		}
		me.__9.ggUpdatePosition=function (useTransition) {
		}
		el=me.__11=document.createElement('div');
		el.ggId="\ub9c1\ud06c\uacf5\uc720 \ubc15\uc2a4";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 24px;';
		hs+='left : calc(50% - ((24px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((24px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 24px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__11.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__11.onclick=function (e) {
			player.toggleFullscreen();
		}
		me.__11.ggUpdatePosition=function (useTransition) {
		}
		el=me._t=document.createElement('div');
		els=me._t__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="t-\ub9c1\ud06c\uacf5\uc720";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='bottom : -22px;';
		hs+='color : rgba(113,114,122,1);';
		hs+='height : 20px;';
		hs+='left : calc(50% - ((100px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 10px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._t.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uc804\uccb4\ud654\uba74\n", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._t.ggUpdateText();
		el.appendChild(els);
		me._t.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._t.ggUpdatePosition=function (useTransition) {
		}
		me.__11.appendChild(me._t);
		el=me._svg_8=document.createElement('div');
		els=me._svg_8__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIGhlaWdodD0iMjYiIHdpZHRoPSIyOCIgdmlld0JveD0iMCAwIDI4IDI2Ij4KIDxwYXRoIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlPSIjMjYyNjI2IiBzdHJva2Utd2lkdGg9IjEuNSIgZD0iTTEwLjIwMDEgMjVMNC41NjAwMiAyNUMzLjY5ODQ1IDI1IDMgMjQuMzAxNiAzIDIzLjQ0TDMgMTcuODAwMU00LjE5OTk0IDIzLjgwMDJMMTIuNjAwMSAxNS40MDAzTTI3IDguMTk5ODlMMjcgMi41NTk5OEMyNyAxLjY5ODQzIDI2LjMwMTYgMSAyNS40NCAxTDE5Ljc5OTkgMU0yNS44IDIuMjAwMDRMMTcuMz'+
			'k5OCAxMC41OTk5Ii8+CiA8cGF0aCBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZT0iIzI2MjYyNiIgc3Ryb2tlLXdpZHRoPSIxLjUiIGQ9Ik0xOS43OTk5IDI1TDI1LjQ0IDI1QzI2LjMwMTYgMjUgMjcgMjQuMzAxNiAyNyAyMy40NEwyNyAxNy44MDAxTTI1LjgwMDEgMjMuODAwMkwxNy4zOTk5IDE1LjQwMDNNMyA4LjE5OTg5TDMgMi41NTk5OEMzIDEuNjk4NDMgMy42OTg0NSAxIDQuNTYwMDIgMUwxMC4yMDAxIDFNNC4yMDAwNCAyLjIwMDA0TDEyLjYwMDIgMTAuNTk5OSIvPgo8L3N2Zz4K';
		me._svg_8__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Svg 8";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 20px;';
		hs+='left : calc(50% - ((22px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((20px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 22px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._svg_8.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._svg_8.ggUpdatePosition=function (useTransition) {
		}
		me.__11.appendChild(me._svg_8);
		me.__9.appendChild(me.__11);
		el=me.__10=document.createElement('div');
		els=me.__10__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\ub9c1\ud06c_1";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='z-index: 1;';
		hs+='background : rgba(255,255,255,0.784314);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 9px;';
		hs+='color : #000000;';
		hs+='height : 25px;';
		hs+='left : calc(50% - ((80px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : -30px;';
		hs+='visibility : hidden;';
		hs+='width : 80px;';
		hs+='pointer-events:auto;';
		hs+='box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 12px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 2px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__10.ggUpdateText=function() {
			var params = [];
			var hs = player._("\ubcf5\uc0ac\uc644\ub8cc", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__10.ggUpdateText();
		el.appendChild(els);
		me.__10.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__10.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_logo') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__10.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__10.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__10.style.transition='';
				if (me.__10.ggCurrentLogicStateVisible == 0) {
					me.__10.style.visibility=(Number(me.__10.style.opacity)>0||!me.__10.style.opacity)?'inherit':'hidden';
					me.__10.ggVisible=true;
				}
				else {
					me.__10.style.visibility="hidden";
					me.__10.ggVisible=false;
				}
			}
		}
		me.__10.logicBlock_visible();
		me.__10.ggUpdatePosition=function (useTransition) {
		}
		me.__9.appendChild(me.__10);
		me.__8.appendChild(me.__9);
		me.__7.appendChild(me.__8);
		me.__6.appendChild(me.__7);
		me.divSkin.appendChild(me.__6);
		el=me.__5=document.createElement('div');
		el.ggId="\ubaa8\ubc14\uc77c\ub85c\uace0";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 20px;';
		hs+='position : absolute;';
		hs+='right : 18px;';
		hs+='top : 68px;';
		hs+='visibility : hidden;';
		hs+='width : 80px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__5.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me.__5.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getViewerSize(true).width <= 1120))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__5.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__5.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__5.style.transition='';
				if (me.__5.ggCurrentLogicStateVisible == 0) {
					me.__5.style.visibility=(Number(me.__5.style.opacity)>0||!me.__5.style.opacity)?'inherit':'hidden';
					me.__5.ggVisible=true;
				}
				else {
					me.__5.style.visibility="hidden";
					me.__5.ggVisible=false;
				}
			}
		}
		me.__5.logicBlock_visible();
		me.__5.onclick=function (e) {
				me.__116.ggUpdateText=function() {
					var params = [];
					var hs = player._("<iframe src=\"https:\/\/dokyoung-an.github.io\/lanhouse_in_pano\/\" width=\"100%\" height=\"100%\" allowfullscreen=\"true\" mozallowfullscreen=\"true\" webkitallowfullscreen=\"true\" frameborder= \"0\" ><\/iframe>", params);
					if (hs!=this.ggText) {
						this.ggText=hs;
						this.ggTextDiv.innerHTML=hs;
						if (this.ggUpdatePosition) this.ggUpdatePosition();
					}
				}
			me.__116.ggUpdateText();
			me.__116.ggTextDiv.scrollTop = 0;
			player.setVariableValue('vis_lanhouse_m', true);
		}
		me.__5.ggUpdatePosition=function (useTransition) {
		}
		el=me._rectangle_4_1=document.createElement('div');
		el.ggId="Rectangle 4_1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._rectangle_4_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._rectangle_4_1.ggUpdatePosition=function (useTransition) {
		}
		me.__5.appendChild(me._rectangle_4_1);
		el=me._image_7=document.createElement('div');
		els=me._image_7__img=document.createElement('img');
		els.className='ggskin ggskin_image_7';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAAAwCAYAAABUmTXqAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAABUuSURBVHgB7V0JdBVVmr4vO0lYEwiLhCXiCGgHZqABB21G4bC00ijixmFrMZwYRERAg0oiM2zKjDDxOIAiBKSloZGlQZCE5cgZkIaDjew7AmELQghJCHlL9ffVu/VSeb56ee/lhQBd3zk3r6pu1a17b/37f6tiEcGFBUVZvnx57IABA4aHh4c3xX6ZCBwhKCWyTE5LS3v1s88+WyNMmLhDCBPBgUX+KhcvXuzcuHHj12w2Wz72b+vq/AWZ4yJKc5RMlMjQ0NBbwoSJO4gQUXWwDSUjI8OiKMooMkdZWdn5sLAwqwiMOVQthHIW5RmUdJQItcJiCUZ/TZjwGV'+
			'XRIBZZHHv37m3YsWPHd6A1QoDzERERgRIyrytEIXN9gJLI9kVwGNmECb8RKINomsFRUFDwVN26dV8uLS29GBUVZROBEzOvu4DSFiUNJVSYzGGihhEI8WkmVShMqrFgjucdDsdZMIddBG5SkbHOobyIMka7hzCZw0QNwx8N4jKp4Ii3hK8x3mq1liJSdQlmVagIDGSAX4TTx5iOEidMrWHiLoKvDEKCJeEq8DNGIprUF9sXwBzhwknUgYDMdqOkpOTh6OjoFFHunJvMYeKuQZiP59g2bdrUBo74H0aMGLE4NjZ2Jb1xUQXcunWrrFOnTq1SU1P3CSdjEIGGhE2YqBZ4YxDNpLLdvn37OUSmVh46dGjakiVLroggoWHDhoW6e5kwcdfBiEG0CJIDfsYq5DQGwCFnHqJQBBFw7gP1XUyYuCPwZCaRaex5eXkPgCkKsD0A'+
			'hGwDc5BBTElv4p8KegaxyH1bfn7+a02bNj0LxqgD7eGAuxGsJSk1CYvBtgkThtAYhAzA3IZAlGpbfHz8fJhWNumH3w9RJc2fEhhjvCgPCpgw4RUkfvoBti1btrTPzMwshln1OxQbIrhkmvtB0qrMP2/ePCY2z3Tv3v0lUXVw3ozmJtzLdREejmma25+2wiu5LszPtoRBvyqMcdCgQaEslZ3nQ9sRPh4j3Mfibe6Flz6FiwCg+hsFBQWTkBGfWlZW5kC0ShHBW+Vbk3CZjKdOnUpu1arVLmxHXrly5ZSoOhzQRA1SUlK+xNxd5gEwX1RMTMxp3CdTlOd03FG2bdu2lGbNmj2JyGAhNHXCmjVrho4aNcoo+GH9+eefZ968ebMR3L+yWrVqxX377beLRo8evY6VINbwrKysuVevXrWj3oF8UqOcnJwF6Nc6T20dOXJkot'+
			'1u/w22KQgjGjRokAdT+n0P56qhfW4cPXq0L8zsP7Zu3boDduvLsd1Ev45fvnx5Cfqz/MMPPywV5YEd/bitJ0+ezERIvxX6VwqTPbpevXoHmjdvPtPDPctWr149ODk5uT9yYwVcmApaFA8++GCK7hwSufW7776Ladeu3auYw/5JSUnNZH9Ldu/efRR0vH7RokXrpk+fzgS0tiKDxbpnz54peEYt0I9SUQkwP7GwoLYKmFLbcQETgFalEhw+fPhdEURMmDAhSfEDY8aM6eNH86p0xSRO5rX4tfN3+fLl/UXVoEqmX3755WMQ26/6mJ2dHSe8SDgQc652Lq9H0RjWY0QPp+Xr21+/fv1HWh2YNJbN6OvXrVv3sdG9MQc/uXX3nIexqf04f/7871F/kyeRPhz8I+FwwjWMoqKid3VjqDB2jO+M/oa47qBR/0BfX+vPhcDm'+
			'u0SallQ1AIJHo7W5k79aRxxaX4nCwsINs2bNiteNS6Cf5xX/sCEE0qE7x4Hs+P2gNfRwbN68ORVS6EMM1FaFFcYeAen7KiRMBS2BhyN69er1lnBKLI9MUlpael3bhpTk+rVWkLBf4pfbv3oGJFL9PmjGtV9cXKxKRn09mKBIGAD9c68rdtvnHNlBXNnQcusgPGNIJe4RTIsTavc4Zmiu6TjtRzkGd/Om0K0PN4QBIKQL9Ptos0TXLysIfGyTJk2y0C+79I8V/Gr3UrU2+0U+QZ/6vP322/lTp05NEFKr4Tp9X3zxQ2+EyAHfl/mIM2fOqJOA8QWT+ZWvvvrqKeE0NyoA91HwAF8X3u1y/fmhDKFHRUWNuHbtWj/hNGtqKiiimtsgwoWxsbFDIZnph5IRHCDcXxETjvHHIVdUYNfWAYRJ7VAda+kcqamp9WEefcI+ol'+
			'+hEBS0eDjHNJeuovBlOnXOybRkFAiete+9995l4eFZSA3BQVBolHgorLPcb1qjAqAVHSK4UKXUCy+8kMGHIKWXpi1s8oWu+rCluw0YMGCHLw2GMY7ucNjr16+/funSpQ0GDx5cIIx9mOqEDTb8v4MIh5NpaVGAgKxglHB08Rx8p4nwhXZFRkaSGdr369cvE9d0AaFSO3MYdlzX7vr16+9jLP8V7DGMHDmyF381YY57hp84cWLKpEmTpgonY4dNnDixOXyq1x966KGxPDZz5sxnhdPss7u3x2d14cKFhdCUI3v06BHl6Z4Yr/2+ZpBqgPLWW281gAR7HNs0di0gCiuIaQlMm1dBPKpk7d27dwbqewsfiYRSGISmvPLKKwfBIHyP3+NDrUao/ezUqdOfaNNL5rBJ5sgGMQ13O5++y0YwwzA43Yt4LrU0hmHD/gfw82ZD'+
			'iBSLIAJz29TtkK1NmzacZ80RL9uwYcMJ/I7D/f/70UcfbYHggUN40eQYn8psYH5Dp91cOes71Il+5513RlF7ACFkEEiu/StWrBhF5qDOBkEpMJl6Ll68OEb4Hia3MHqIdpvATv6LMPBHfAF8HMO1cmi/xKBKgdZ7FL+JYA7tGO+/XzKHp76EQVNkw1/J0tUzlB6BSNIrIsgaEPNyRuur+gdTjXv/LT09PU6UR6rUIAOY80Lbtm13yH4Z9oNxAOEd97eJVR1ISEh4Q8hJp4EOBpmDBwJhZP87DiWrRrvDYUG+ZQT2P62kOb29TgeTps1ASObnQHzfCD+BBy769OkzYf/+/U9Dmke51d0C4/7W6FoQ9UC5GSL7YkGQY4g8ZvNwiWqjz58/P338+PGpwkmMvEzp2rXrc9ieL4KI3NzcnA4dOtjAKBb6INRaMAc7T5s27c'+
			'qUKVP2IIT95bJly9bCKc+Tl6j5PW9tImzectiwYf9Wp06dCq9sQMgJhOAt8F9yhOIHgh3mhePV3J/7+xnmFYiHp7i3UZUw7969ezvJZhwyvFim2a87d+4cLEOPDln/s7ysghZB+HSFvj9gsC/w0PcyB8XrYKrZeBwaqBHPx+Zp/fmrVq36QGsLhMkoU6mu2qZ4gQyBOnSHjmhtoQ8r6YzrUCLHVqkWxFj36++Bto7r6iqElnEPQ98MjP1/+nMxF/THQmQRly5depnH6ffoxlEhvAscxpz2kk1WSCpC8BzSTkK/ynTXeMQbb7wRWRMmlivWPm7cuGbi3oA6yS1btmRORd0nGGuX9qtl48aNqyC1byvOExh+TFy4cOHDohJT49y5c3XT0tK6MGIkE7UhIDBlyJAhh1jP/I3wHV6jkTI065HgcZ9YnXlFFDVs2NAqfDCV'+
			'QGjX3O4RK4ILatqwxo0bf3369Ok/UIPwVg5p62r3JZ+AAf8FmmUTtnfJZ+ExoojnE17J2ttiBAHuuA+i9ch+48aNIciSLoXNLO4FIGsdC7OHnyFSGYCTy/djtHo4hCUgshw8M1Xi0VnHNZNkteGTQFi4LswUZsz7gTloOjCMSUkbh22aKWeEj2Cy11s9pCZ/PEb2cM9iHb0RMfn5+dqSFiOodSA2l4lCmkRxOegeiNAbw1WoU5xhXA00l8KQ0V+bmZlZC9r8Pdz3nNYHCBX1XjCPyDh2zAXNSWoyo0imVQo7I8SAPu/okhI1MgMTJwKEMxfbHTGIE7CLW4u7HwqysoN1oV0+vFPdunXbpdXzD7LYbw4cOPBpbtNZRxkENf1aVlaWoTOoSUFopw3QINmQ4sOYQMS1JIjXGFYVXhKPeuCacNji6+A7LAWzNdDX8UN+KS'+
			'kpM7Dpcb6PHz9+sH379s/qxhM9YcKENtCQ+73dE8+yFuakrduYTmvbYEomo111lPJGbcEEch+j+76aJ4Iwuo1C4TQNZnQzJG2ffuaZZ/ixj3aYQzsFDfpEaZCEXNhIzO0XHm4XDlPsLxhfKvpUT1/BZ5yUlCT43O4Eg2gqzn758uXkRo0afQFJewuDOIWJqyPufqjv4zdv3nwiHVAhHxqSUDe///77KXBu46gtKO0wJmaJVUknnCZAFPym/pjoFT7cJwzXD0c7PSANE52v+zuPCz/w448/bh49evQyT3UjRox4HQzokUFgTqwBg3BdljpG+lN9+/b9HNtdheews7pea8GCBTQ7Q7TMOq/dsWPHKtdJYWG3aOtrggX7SbJK36Y6xwgzd3C7B5N/GkOp67Dkvmvd1/Dhw/mpqHksIPjeMK82yn6o9mLt2rX/iB9PDMLl'+
			'QoX9+/dnkvGqMEB1M4gWo3bAlBoDaZgGDj+G3xr7cgmIL9+P09WHkpOT0xYE0FpxvlXJ4/bo6Ojkxx9/PNn9Aqp37XV9LkVp0aIFzSwySGU5ETUqhFj+b0CYBXSYaS4IP4G5reut2uC4BYnNPRhfPhgjnr4Ik6zY74L5mgNmfdP9fPa3pKRkICJB78oX6pg7UaNfeNZfCUn0IML9kPCd5HV87k1AyE8hW79ZlM+J44cffmiDtrpqc8zxU4jK69SlJtAGo5ngw5z+r64fmtAKQZvfQfjuxnWd1ZuBMXHvBsIYldJgdTKIKmG2bt0ai2hINjpLyXWI6k/4nh+oAIZPRRXAyQfxvXny5MnfYTvG6Dz0sRYm+ggSUarkeeSRR9L1zCG8OMP8BJJeYoK4OsyePTth7Nixl0XlsCBDXXj16tWecXFxm7nc4w6tkVMZ9+DBg0'+
			'OhRTaQ4PmSHMbMJOgYzMV/7NmzZ3x2dvZ++Exct5eErHUGmLG3NGnUZ43+clXARxyDkM94165di7A/gqYViZvnQ8rnXrt2LW3GjBlrCwoK7NCyj+G+y8CMDsyXyli4RwjMvqXavMybNy8ajJGldlZR0pAFnzFnzpwcMNUl+IIKhFXYiy++OFIyh8s5h1N/zmjQ0P78drRA28ZL4RU/4GOY1xU1yMvLewyX/YSBb8bvapS1urIKJceX+1oZ1gEmT548SPgB9zAvHl6Z4iMOHDgwjG20a9cuAru3teWrlGzYzDt69OjXkGh/1Rcw3torV65847yVQ4350lQBMczQ+uQe5kXdRrduqw8L0vlTXkti1Z9fSZhXWblyZYbRfMAs3OE2zCO6apURcWyZHKNVzpnNUziUj4QMrFR8REdlW6E6WmCbZ7QwtuIMgdvdV0Ljnnat'+
			'nosRFaej73rnBX3PlfdQQ7y6kPRttF3CPnBHrtFSN/kH4fce2gDdwrx2+Uw5f7cNSmmwpZNr/T0GMxkmwmAM5Ig0FQIxqVQC40IfTNA3kEArhR9rfGTUxgVcX+lLM5w8nHcdWiOb+0g+8YMVEZqNDclmgTR9tnPnzn8zagMS9/8hgR+jc0ozC9GvURkZGZPk0ofKQDs7FCbcaDy/3igP4p4+OelVhOo7YZwv4Z618duPhCol+q8gHe8QEhrNK+AUokt01vW+hdpv+GCdEay4QgJnhM7TJ6OoMfBD5mFjIcXFxd3k9YL5CARzOjOewXppAmqXRuj8NWrsUPYJ9Ty4AYGUbaL8u24u6PpgZHYS1mD6AarjdPPmzXgQ1CZsP43fQ4HY0RJ2hu44cXDu+4NgBoLA/GoLcxAt/IcFUt2VAYeZNV0LVSrOsGORZA7DvuzevT'+
			'tTF7nhefUQMnxW9qlCxATj8+QzqMvGERVLRr0VQkZ/L1eOAaYKj1d4E49L1IXRwCwW96CI+77KJOjj7zHng0Fsao5HrtxVTVRXB53Ch8TK+ploOwnPh8fchUAITKj8uXPnJqC9s9zXhZMVrU15jxC0V3T27Nn28Cd+ElKrgcGsaL8utPNE1LvMN8UtTKvrUwie4SwyuWzDIc/3Nz8THgwN4sptYAB9MbBZ6Cj//QH/t0dAy+iluuSHG88jZNmhZ8+efDvM9Zabr2CGF9J8Kwodc1+0jgWMGJ+env4/3M7NzaWDdxE5m90yxt4Aib0/a900agO28ZYuXbqshZlEG5dqvM7zzz//MJJ/1C7rIR0p5JglrgPNuN2oHURYSjZt2vTbJ554Igtt5WE+GuK4XnPR7l8Dp5cERPs9AeFJQ81GLQwThC8wFaFEYqye7HOVSZCU'+
			'+xN+v4YP8VJycvJwMF4y7P3a8pxStHUMPsufjx079vnQoUNpDhk9H1JtSGpqaj5KS4T5+zz55JNpsP87MoopnXpef2Dfvn1fcsGkvM69vRD4P3wZ7GMwG1dLv4D+dwNjNUUT1AJcSnMGpvGGLVu2fI4k9DX3NnDuSsxVK1/eKBQyEFFVH0RlAJgPzP5+Qo0BAnD3NYyKJx/Eob35h8F8oetoIJquqv/awbXEwQMqM9U8XocHHO1ne2Fejlf3O+nCvX06s3jWEaKi9vTlHXGP7ZFuUMK8nVNZGwYI2jvpFkVRfF51iSRUetu2bTWHU7XrEKVqiSjVYkYwoNoYqfFVa1CyUOX1lPs2SDfmAqyQ0k8lJiZSsobJ88yvkJioEQTqg6hfeYfp8TKYYyMIuwjMQTMmIJOK0RDhTJQdW7NmTZyOObQssgkTNQJ/zRCVoaA1Is'+
			'EYXHnZCcR9uAq5DYblmHcIg234n8h6Thblpo1f/oYJE9UBXxlEDdchunB1+/btid27d18Lwi4FYZ+H5ggkUqS+rALmSkQbDjj3/5qQkLBPBOCImzBRnfDFB1HrZRb7U4QAG8Mhv4aIidfXGb1BZkyb4vfE1KlT39d9V+lOvmZqwkSlqIxBtDVTJGB+UYKLuqKF8RLiysDMbASYLD4/P39Bo0aN+BaexmSmr2HiroMRg2jv+JI5+CL8bOGMOEWLAAlZXXtht8dDcxQVFBR8hOyy9rZYsL88YsJE0ODJB9FMJxIvk2K5KA/IukCYgzkNLh9IBC9uRVJnqSiPU5vMYeKuhrsG0UwqfkxrFgqzkVX5GjqXuUcjw1kXTn1WZGQkXyOtiW8+mTAREFxf1BDlJhX9greFc9FcwMwhTaoEMEfxzp07x0nm0BYzmjBxT4AaRF0r'+
			'I5yEuwjlB5RmInBCZm6DX+Z+oKSk5K8xMTGrhemIm7hHoZlY/KAyvxrOxXVcoBeob+AAc8SCOaKQM/mkRYsWfCPMdMRN3LMgg/B/SfCVUJpTXr9E5wOiuJK3Z8+ei7dt26a+QipMrWHiHsY/AAfPgD/Jim5XAAAAAElFTkSuQmCC';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 7";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 18px;';
		hs+='left : 0px;';
		hs+='opacity : 0.8;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((18px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 74px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_7.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_7.ggUpdatePosition=function (useTransition) {
		}
		me.__5.appendChild(me._image_7);
		me.divSkin.appendChild(me.__5);
		el=me._pc_3=document.createElement('div');
		el.ggId="PC - \ud558\ub2e8";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='bottom : 0px;';
		hs+='height : 57px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._pc_3.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._pc_3.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getViewerSize(true).width <= 1120))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._pc_3.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._pc_3.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._pc_3.style.transition='';
				if (me._pc_3.ggCurrentLogicStateVisible == 0) {
					me._pc_3.style.visibility="hidden";
					me._pc_3.ggVisible=false;
				}
				else {
					me._pc_3.style.visibility=(Number(me._pc_3.style.opacity)>0||!me._pc_3.style.opacity)?'inherit':'hidden';
					me._pc_3.ggVisible=true;
				}
			}
		}
		me._pc_3.logicBlock_visible();
		me._pc_3.ggUpdatePosition=function (useTransition) {
		}
		el=me._rectangle_2=document.createElement('div');
		el.ggId="Rectangle 2";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 0px 0px 0px 0px;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._rectangle_2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._rectangle_2.ggUpdatePosition=function (useTransition) {
		}
		el=me._pctitle=document.createElement('div');
		el.ggId="pc-title";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 100%;';
		hs+='left : 80px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 400px;';
		hs+='pointer-events:none;';
		hs+='margin:0 20px;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._pctitle.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._pctitle.ggUpdatePosition=function (useTransition) {
		}
		el=me._pc15=document.createElement('div');
		el.ggId="pc-\ub9c9\ub300";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #000000;';
		hs+='border : 0px solid #000000;';
		hs+='height : 16px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((16px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 2px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._pc15.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._pc15.ggUpdatePosition=function (useTransition) {
		}
		me._pctitle.appendChild(me._pc15);
		el=me._pc14=document.createElement('div');
		els=me._pc14__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="pc-\uc544\ud30c\ud2b8\uba85";
		el.ggDy=-2;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'translate(0px, -50%) ' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='color : rgba(0,0,0,1);';
		hs+='height : auto;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((0px + 0px) / 2) - 2px);';
		hs+='transform : translate(0px, -50%);;';
		hs+='visibility : inherit;';
		hs+='width : auto;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='border : 0px solid #000000;';
		hs+='font-size: 16px;';
		hs+='font-weight: 600;';
		hs+='text-align: left;';
		hs+='white-space: pre;';
		hs+='padding: 4px 0px 0px 10px;';
		hs+='overflow: hidden;';
		hs+="line-height:16px;";
		els.setAttribute('style',hs);
		me._pc14.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(player.getNodeUserdata('_master').title)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._pc14.ggUpdateText();
		player.addListener('changenode', function() {
			me._pc14.ggUpdateText();
		});
		el.appendChild(els);
		me._pc14.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._pc14.ggUpdatePosition=function (useTransition) {
		}
		me._pctitle.appendChild(me._pc14);
		el=me._pc_10=document.createElement('div');
		el.ggId="pc-\ud0c0\uc785\/\uacf5\uac04_1";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 35px;';
		hs+='left : 370px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((35px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 300px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._pc_10.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._pc_10.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				(((player._(player.getNodeUserdata('_master').author) !== null) && (player._(player.getNodeUserdata('_master').author)).indexOf("21\uc774\ud558") != -1))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._pc_10.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._pc_10.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._pc_10.style.transition='left 0s, top 0s';
				if (me._pc_10.ggCurrentLogicStatePosition == 0) {
					me._pc_10.style.left='350px';
					me._pc_10.style.top = 'calc(50% - (35px / 2))';
				}
				else {
					me._pc_10.style.left='370px';
					me._pc_10.style.top='calc(50% - ((35px + 0px) / 2) + 0px)';
				}
			}
		}
		me._pc_10.logicBlock_position();
		me._pc_10.ggUpdatePosition=function (useTransition) {
		}
		el=me._pc11=document.createElement('div');
		el.ggId="pc-\ud0c0\uc785";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 47%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._pc11.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._pc11.ggUpdatePosition=function (useTransition) {
		}
		el=me._pc12=document.createElement('div');
		el.ggId="pc-\ud0c0\uc785-\ubc30\uacbd";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'background-clip : padding-box;';
		hs+='background-clip : padding-box;';
		hs+='background : #ffffff;';
		hs+='border : 1px solid rgba(54,54,54,0.117647);';
		hs+='border-radius : 9px;';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 2px) / 2) + 0px);';
		hs+='opacity : 0.9;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 2px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._pc12.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._pc12.ggUpdatePosition=function (useTransition) {
		}
		el=me._pc13=document.createElement('div');
		els=me._pc13__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="pc-\ud0c0\uc785-\ud3c9\ud615";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : #000000;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 12px;';
		hs+='font-weight: lighter;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+="font-family: \"Mukta\", sans-serif; font-weight: 700; font-style: normal;";
		els.setAttribute('style',hs);
		me._pc13.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(player.getNodeUserdata('_master').description)));
			var hs = player._("%1 TYPE", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._pc13.ggUpdateText();
		player.addListener('changenode', function() {
			me._pc13.ggUpdateText();
		});
		el.appendChild(els);
		me._pc13.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._pc13.ggUpdatePosition=function (useTransition) {
		}
		me._pc12.appendChild(me._pc13);
		me._pc11.appendChild(me._pc12);
		me._pc_10.appendChild(me._pc11);
		el=me._pc8=document.createElement('div');
		el.ggId="pc-\uacf5\uac04";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 100%;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 47%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._pc8.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._pc8.ggUpdatePosition=function (useTransition) {
		}
		el=me._pc9=document.createElement('div');
		el.ggId="pc-\uacf5\uac04-\ubc30\uacbd";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'background-clip : padding-box;';
		hs+='background-clip : padding-box;';
		hs+='background : #ffffff;';
		hs+='border : 1px solid rgba(54,54,54,0.117647);';
		hs+='border-radius : 9px;';
		hs+='height : 99%;';
		hs+='left : calc(50% - ((100% + 2px) / 2) + 0px);';
		hs+='opacity : 0.9;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((99% + 2px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._pc9.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._pc9.ggUpdatePosition=function (useTransition) {
		}
		el=me._pc10=document.createElement('div');
		els=me._pc10__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="pc-\uacf5\uac04-\uc774\ub984";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : #000000;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 12px;';
		hs+='font-weight: 600;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+="font-family: \"Noto Sans KR\", sans-serif;";
		els.setAttribute('style',hs);
		me._pc10.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.ggUserdata.title)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._pc10.ggUpdateText();
		player.addListener('changenode', function() {
			me._pc10.ggUpdateText();
		});
		el.appendChild(els);
		me._pc10.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._pc10.ggUpdatePosition=function (useTransition) {
		}
		me._pc9.appendChild(me._pc10);
		me._pc8.appendChild(me._pc9);
		me._pc_10.appendChild(me._pc8);
		me._pctitle.appendChild(me._pc_10);
		me._rectangle_2.appendChild(me._pctitle);
		el=me._pc7=document.createElement('div');
		el.ggId="pc\ub85c\uace0";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='bottom : 0px;';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='position : absolute;';
		hs+='right : 25px;';
		hs+='visibility : inherit;';
		hs+='width : 122px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._pc7.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._pc7.onclick=function (e) {
			player.setVariableValue('vis_lanhouse', !player.getVariableValue('vis_lanhouse'));
				me.__58.ggUpdateText=function() {
					var params = [];
					var hs = player._("<iframe src=\"https:\/\/dokyoung-an.github.io\/lanhouse_in_pano\/\" width=\"100%\" height=\"100%\" allowfullscreen=\"true\" mozallowfullscreen=\"true\" webkitallowfullscreen=\"true\" frameborder= \"0\" ><\/iframe>", params);
					if (hs!=this.ggText) {
						this.ggText=hs;
						this.ggTextDiv.innerHTML=hs;
						if (this.ggUpdatePosition) this.ggUpdatePosition();
					}
				}
			me.__58.ggUpdateText();
			me.__58.ggTextDiv.scrollTop = 0;
		}
		me._pc7.ggUpdatePosition=function (useTransition) {
		}
		el=me.__4=document.createElement('div');
		els=me.__4__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\uc548\ub0b4\uba58\ud2b8";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(255,255,255,0.705882);';
		hs+='height : 100%;';
		hs+='left : -60px;';
		hs+='position : absolute;';
		hs+='top : -57px;';
		hs+='visibility : inherit;';
		hs+='width : 200px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 10px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me.__4.ggUpdateText=function() {
			var params = [];
			var hs = player._("\u203b \ubb34\ub2e8 \uc0ac\uc6a9 \ubc0f \uc7ac\uac00\uacf5\uc744 \uae08\uc9c0\ud569\ub2c8\ub2e4", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__4.ggUpdateText();
		el.appendChild(els);
		me.__4.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__4.ggUpdatePosition=function (useTransition) {
		}
		me._pc7.appendChild(me.__4);
		el=me._image_5=document.createElement('div');
		els=me._image_5__img=document.createElement('img');
		els.className='ggskin ggskin_image_5';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIgAAAATCAYAAABLG0XSAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAA+XSURBVHgBxVoJcBzHde2emb1m710AiwVAECQIkiBWEG/KvAlKlJWKbKVKslyxLSd2HCl2yZIVV6zEcqUqUVyyIsVibJXtJFZkO65UmZTLtCUfsiWSIniAIigR5gFSAAiAgEDciz1mds72795ZYLHcBcBD9q8aYnamp/t39/v/v/+bCGWFp/+cedF778hB95Po5gVf5/NbIVzB34WMvdBnCxGM5v52of2WasfdwJjF2l+XCCgLDkM96/sx7uJ3jtulb6CbEzoRctuqVU/KamaKaYWRXZbV4wMDA2+X+igYDNZWVJQ9aBhGysbbQpphPNfV1aVT3Qrb+v3+YH'+
			'U0+rCqq6x/nrcpFy9efMl6bTY0LH2EkOxi8Jj3yoqyv7+/v6ewH5/PF6ypqnxE1fVJ+tvhcHjPnbvwfJEx2ZzotXzp0q3+oP8BjPkmRIiHcDhjs9m7x8fHD4AOv8hrbxaO19TU+CVFUTL0XhDs/sHBwf9OJpPjBc1IJBKJ+f2eu02TSPSBXbDL5zs7X85rQ/dNj0aj4UDA+2DIF9iom2YAnsmZjPJeSpJ+3d3dfczSOV8XLtbY+ERGU1JoXiFcOp3pFr55X8D7+LPoVOod4uSJgUyTE9DNCVkba7zPHQg86jNm1kh0uVIAkBUoi2JS+FEoFFpVFYk8rmo6rDtBPq/3PgDIBmQBOL+tKIqV1VXRRyVZZr9tgm0yDyCosizyhImIm97zPI8mxifeg9trANLU1FTBIfKFvH6R0yl+s729PX88thlrmpvvLysPPytnFIeh'+
			'GzABk00Fw/obmtpQFg59eFFLy3ckaeqlYyfav1ZEb66qMvr3kiQx4DqdDpRKpV4rAhDk9Xq3VVZUPmEYOvsNwB3NAwjtV9+65UM/dQi2TbKqIl3XEeboYxOJbnGbz+f9TF1tDUqn5V+eOHnykZwudXV1tmhV9HHQAc0nGKx6amrqKPf4F81ziVPEziOCsYFuhRBPMPwVVVGRYRrTl6Kqntra2qaSH2kgACja1iQmmkpMVW3bsuU/UHaRZ7lG2pIuSl7/6qz3pqFNvzPg0nW12JiyLBskT0ddNwqBy8Cxe+eOn7s97r2JRMqm65oFDktvuMccRnQzU6mkSQj3mbt3t5xFWaudZWygh5E3FtVNL6YXNs2MmaeXQQfNCvUGxp47dx+D7zemZZnQdnT8nJMgsHYaNE+nJXhA7r73ng/3U2CwyQgCMWavW+nLoO1IgpOGkS'+
			'ZgwhPanYluVnB1dXUNqLsoq/SMUMBEKyu+iop4j2ICTsTEmDy4IRbbjP40QjdDv3PXjlfSkrQWAEkwB8+oXohatRO5RRdywd+swpgGNY5OLp5M+vfsbrlAv0elOdGNCFm1YsVHwAMspgtEHRj8IW7RDdbNjbmdrrjodAEQGB6oE+DHJ+P/29vbmynWGYQw02l3JEWnmCq8nC5RcjkdNmGWfRaN+Nc3gcpI+ZeVDOgDAKGbzIEAzAklIqLTuWPZsmUOCB3UoucGCiw2gEr3VZTvg1jbMDQ0pNy0dtcnZM2aNffIinoHvWebYRIDQiWfTKX/fXCo7wd2u10C7uFsWLKkxeUW/xMIAMwX8zBVLplKeXZs3br3cGvrY+jWCQGe9pCsKnT3MXUagI+uUFn57jf27WNrs27dOhuEhs010crnBbut7HdvHHwKFQnTVNwuF3fw'+
			'rSMr5xqQY9tkWhe919GNCrOUoD9wP2hP4U3sgk3RDe0pjNnyYgX4hc1mu2/hPWIB4rTZ1LiiDWUnyKM/jjCeFA76XtA1zbQs1XCLIj80Mtp86vTpF4D0xinQJycnEydPn/7Z4SOti4A7SGALbCOARxGe5+4HwulGtzB7M4FmYKs7judQRs68ui8LDrb+wJ900OvIoSOt6y90XlpnPS9pWJZ+JYUjOs6CAi6i35Q3JGubm1sgrjM4ULApmtLW3z/4E7vdwRpA/CNVFeX/gBYYZqhQa4R4Gty+dfP3UBE+Mr9WjKim0UxKOH0BWDOlFIG4vVJTDQ+ESrYogsDzkxOTf9nZ2TmBZoh2/sW919X9IQ+AKKs44jJAIMPh8APoOuY7nySSU5dyC2CCBAL+L61fvfrZQCDgQ9MzZheGLGkczTE2dULDw8MyKi2QseTxDkZSb5'+
			'yHENEjPqUDs6Fd2e02/P7Via+DAunlDcsug5p1sNTUtVRWVFRERkZGRucaDSJTEhp7dRqemD2iP4eFuOvUu+/+Fl2HAOEygsHAj1p2bTfzORaEAsgJFUQoG8OoMHMjPo9nDwB8+oHD7lCP/v7EYVQiC6NzAa8yWR2JXACbbWQPgOy5HPY/g9uX0a0RrOrmM2FRfCCVkgxYTx7Iv2lzOD5x+22xTwAPGYzH4wcmp6Ze6uvrG0Il0u2cwLdo9e23fd80rzU6p93uO9ne/jEBXs6wqBsHB6Y5ud1mW6FrjH9Q95oCV3eOvpuMTz3v87i/TXdIymQIpGBfAYA8MVeHiWT6EFjjOdjHJ2m80lRVh/rHy2VlZSttkCqghQoQNchqkCbJXIn3RUXT1eUcdqMcqpSM0mu9mtMbgCM+Ci6EAYSup9/nr0G3Tsj58+evio7mxwLB'+
			'4F4AiYkZMTapfpSPVLtcjs+HArWfr62p7uzp7fsYeJGJUnpDFkVcLnFPsYFEFyPfHDfNP3LXjdFACB0VfyczckrXnOB4PPF/uZfgCV8DRFotwS14fX9hvSoZLlx2ez3k8N/yenxXCd0lykektBlrWtWG7PZ+9AELIXiWVwFFtYV8B2RlJqXmaHJj3soshgp/6p2O/T29V3ZBBjLooOEbkMHWnWORnRmhqmnLG1cs7wCiva5kT4wKWOlrwUVMYk2BTtu6COUi1+9F2CYHgoFP05SL3jsh9Xv/6tX/st5R1KsZRTmWUwqqifaVK1funKtT8BGMLl/q7t4S8Pk4mkFQPgAZkq9uce3rEB4WnC4LHJdxQToHi5nKXZCepqA7CTQuahIcxv35A/CCUJs/31ICbn89yms4lUiOFe3fUq/YOyimzGWmjIf19PR0HWptvaPvys'+
			'AWqN581yYIVyBLpB8z4kY9SyqZ1MtDwQPl5eVFiTKEJKgp6cch1Jy45lLUM1QVAbEIb31wg0lkY2PjWqiAunIqwP1l4B4Jj8dTBkSIEgg8Pjr2jfJo5AAtcNGaQiQY/GonQofm6xtyeAVK4veG/b5fSAoFBeNgS9ACiR9wSy6eTH3q7Nmzxwrfbd68uQKQ904xmzCRfpDnuC/oVjUYBvMuralp6BkY6EbFx6bklLhd4kao8GbTYkoSVP1QrgHO8yVwlIB8Lpdn6FpOgx0uV8A0Z7TiBC5/Z/Lb496sPA33TwNRDTTHYs9AXe1e+Jx6FSGZSqJoNPLY6OjovxUq7HI40PETbR9HpXNXPutBrPBCccvh6/YhJBT0/auqqdOThNhWBwWm7o0b1r27Yf3aM5vgb0W08oCmaoY1RSw47auAT3jR/FkJ7ujoOK2qyg94yixz'+
			'OR5eeDZjKEqw2HMoOPlLfII7O7tOOp1OHVleEY5QzKXL6n+JsqvFoxm9sfXb2L5t28/TUprkdBPtNjQUj/9/Tg1VNaYzBiipIo/f/1lkZRzWYway8nDw47QCnJN0SrqapxuJxVY05303rQcQ1ORbra2PgKd9ncITWY28Hs+aInNkRxqQ5jpQaTEE5j1yugDC+VEc+NvFYlQsN1zsmfParyocxLn3rNo3PIwkGEAEd706pUszVgDKpYrU+0Hx6TqGJGcQHJQ9PDY29hyaW9iGHG17+59adm5vSUtyNXWf6IMVtiqyLH0HxnqU7QTEo6QkOVu2b+8eGx39aMeFC2dzbWENwg319fs1Ta0Ht83WgYY2nZAOOH8aRJbVA/E9DqTkLro+UBIncG7ykc3r179x7NSp/bm+tt6xaS944MU5/Au8gMYT8Ves9xwUGsNVkepfRS'+
			'uregZ7r3zxfFfXO/k6I1Ye4VfnAEbDSAriXLFJWmnunAcz2Uoq7Ro4pJkiBv+G/XPf/TT+HNFQ9iSBsy7MQhvDOI4K6JVvj9YBQMjixYv+moGBER5MK4mcYLPFoXrKF2gD/5h2TdF4SjhpdTUYCv8NPHwOze9FWJFsKpneFvR5epNWioc+WOGPHm97pmXH9odgfp5chTSdkR3eYOA3LTt2QAUNTUKl0W2Yplth4S9bcaW8xu/zQXQxPopmqph4bHzya3WLqvck0xKhNEGDSjFvE/ZCX8/DxwlI/vxwvsKzYwYo69PinNPp4i9cOP4jZKWsNdHovqlkAgIIWRKKVLx656IaA4qJlC+NA4hFt9vTCNzDZADj2PkL0gj6PiqyxpIko03r1/2aIaWYwEwEGlYweAkNnJg5THjsIWhiLNsdzoHD2gr6mx6QZCbl/e3tWVYP'+
			'xOjhjKywdhQcMOiL73a0fb3YeLTMvnhRVQ8cIxNqRYameZcuXXobEK7fo/nFgCqhueH22/eIPs/rGUU1P2BPwkD55uG3Ynfu2nkplU47WH2b6g2lE8nQ6YFHxXRry+Tp+UbA7+d7+69svHTpUr5/RpD2D0TC4R8CL3oIju0oRRHowZiUkagphqa7oqmrSSu3Lh5qGp9E2c01Y7FYs8Nhb5AzMgCIw/QML6Uzg1sCDSgvQ+lkyvLUmAVHm024CElCKypmhNSkOS5WegkwoXbIq3AQbo7ATxpU5qF+oTIOP/emSf/PCK6vr4/BPEO5baKp7NDw8P+U+hYWSMnI6qlcfFRVDZWHQ/9M72nhZFZjqFQX6QK/febMOVXXvwV8hMtrW1DoyrOIbCW1qIVQ8jzPdJnl/+7goWU2gT8Mh2F4uhxwTWeY0JTT4xb7zndeXAbgGC'+
			'poSYcSjra1/SOA6HvQDuf4TWE/9I8/4ONHxif+CoziYG5SQLQ7LnX3bPZ6vF0iZIpZRBZ8b62Ky+nEAKbjbx48vBtZ3OaasebjcbBAQt858lMzDcGEUhUVzeBMsMbiZwamFHFUNeMvtEt08sgrijvS6eRrcKuRLB4TENNG5hpzaGTgy+Fg5GnD0MYoQl2iq4yOBjHzfSCCb0E5foLSf83QitU6GB85Dq5/04YNYbAgNy2RGLw5K46qmvImmHL2PwwJQiiVSQ4U0yWRSEzZhMBRKLaOsikS7KdeqqAZ8yRHjp34JJy1UK7xKej4LofTscw0TA8sigKEsyejSEevjozQk9NeNLMhhZuiM/3b2v4FTr1fhPT9s3D41wLgq4NBRbD8KQD/e3Iq/SqEox9bh5qzspbLly/3w7ULdCmDcHOPx+/dbmpGvd1m90HmA05ZH4Rw'+
			'1zZ0deSHVjV1+qAO+jMjZWWHVEWJowUIxEHzD7JX4WN8UMsZAAAAAElFTkSuQmCC';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 5";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 9px;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='top : calc(50% - ((9px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 68px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_5.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_5.ggUpdatePosition=function (useTransition) {
		}
		me._pc7.appendChild(me._image_5);
		el=me._svg_19_6=document.createElement('div');
		els=me._svg_19_6__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlPSIjMzYzNjM2IiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0iZmVhdGhlciBmZWF0aGVyLXgiIGZpbGw9Im5vbmUiIGhlaWdodD0iMjQiIHN0cm9rZS13aWR0aD0iMS41IiB3aWR0aD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgc3Ryb2tlLW9wYWNpdHk9IjEiPgogPGxpbmUgeTI9IjE4IiB5MT0iNiIgeDI9IjYiIHgxPSIxOCIvPgogPGxpbmUgeTI9IjE4IiB5MT0iNiIgeDI9IjE4IiB4MT0iNiIvPgo8L3N2Zz4K';
		me._svg_19_6__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Svg 19_6";
		el.ggDx=-19;
		el.ggDy=1;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 17px;';
		hs+='left : calc(50% - ((17px + 0px) / 2) - 19px);';
		hs+='opacity : 0.7;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((17px + 0px) / 2) + 1px);';
		hs+='visibility : inherit;';
		hs+='width : 17px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._svg_19_6.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._svg_19_6.ggUpdatePosition=function (useTransition) {
		}
		me._pc7.appendChild(me._svg_19_6);
		el=me._image_4=document.createElement('div');
		els=me._image_4__img=document.createElement('img');
		els.className='ggskin ggskin_image_4';
		hs=basePath + 'images/image_4.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 4";
		el.ggDy=1;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 29px;';
		hs+='left : -7px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((29px + 0px) / 2) + 1px);';
		hs+='visibility : inherit;';
		hs+='width : 37px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_4.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_4.ggUpdatePosition=function (useTransition) {
		}
		me._pc7.appendChild(me._image_4);
		me._rectangle_2.appendChild(me._pc7);
		me._pc_3.appendChild(me._rectangle_2);
		me.divSkin.appendChild(me._pc_3);
		el=me._pc_1=document.createElement('div');
		el.ggId="PC -\uc67c\ucabd \uba54\ub274";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 75px;';
		hs+='pointer-events:none;';
		hs+='box-shadow: 4px 0px 4px rgba(0, 0, 0, 0.1);';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._pc_1.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._pc_1.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getViewerSize(true).width <= 1120))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._pc_1.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._pc_1.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._pc_1.style.transition='';
				if (me._pc_1.ggCurrentLogicStateVisible == 0) {
					me._pc_1.style.visibility="hidden";
					me._pc_1.ggVisible=false;
				}
				else {
					me._pc_1.style.visibility=(Number(me._pc_1.style.opacity)>0||!me._pc_1.style.opacity)?'inherit':'hidden';
					me._pc_1.ggVisible=true;
				}
			}
		}
		me._pc_1.logicBlock_visible();
		me._pc_1.ggUpdatePosition=function (useTransition) {
		}
		el=me._rectangle_1=document.createElement('div');
		el.ggId="Rectangle 1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._rectangle_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._rectangle_1.ggUpdatePosition=function (useTransition) {
		}
		el=me.__3=document.createElement('div');
		el.ggId="\uc0c1\ub2e8 \uc544\uc774\ucf58";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 70%;';
		hs+='left : calc(50% - ((80% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 60px;';
		hs+='visibility : inherit;';
		hs+='width : 80%;';
		hs+='pointer-events:none;';
		hs+='display: flex; justify-content: space-between;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__3.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__3.ggUpdatePosition=function (useTransition) {
		}
		el=me._pc6=document.createElement('div');
		el.ggId="pc-\ud648";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 50px;';
		hs+='left : calc(50% - ((24px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 24px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._pc6.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._pc6.onclick=function (e) {
				me.__63.ggUpdateText=function() {
					var params = [];
					var hs = player._("<iframe src=\"https:\/\/dokyoung-an.github.io\/urihome\/\" width=\"100%\" height=\"100%\" allowfullscreen=\"true\" mozallowfullscreen=\"true\" webkitallowfullscreen=\"true\" frameborder= \"0\" ><\/iframe>", params);
					if (hs!=this.ggText) {
						this.ggText=hs;
						this.ggTextDiv.innerHTML=hs;
						if (this.ggUpdatePosition) this.ggUpdatePosition();
					}
				}
			me.__63.ggUpdateText();
			me.__63.ggTextDiv.scrollTop = 0;
			player.setVariableValue('vis_ad', !player.getVariableValue('vis_ad'));
			player.setVariableValue('vis_roomMove', false);
			player.setVariableValue('vis_aptInfo_pc', false);
			player.setVariableValue('vis_lanhouse', false);
			player.setVariableValue('vis_films', false);
		}
		me._pc6.ggUpdatePosition=function (useTransition) {
		}
		el=me._svg_3=document.createElement('div');
		els=me._svg_3__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		me._svg_3__img.setAttribute('src',basePath + 'images/svg_3.svg');
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Svg 3";
		el.ggDx=-2;
		el.ggDy=-1;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 26px;';
		hs+='left : calc(50% - ((28px + 0px) / 2) - 2px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((26px + 0px) / 2) - 1px);';
		hs+='visibility : hidden;';
		hs+='width : 28px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._svg_3.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._svg_3.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_ad') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._svg_3.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._svg_3.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._svg_3.style.transition='';
				if (me._svg_3.ggCurrentLogicStateVisible == 0) {
					me._svg_3.style.visibility=(Number(me._svg_3.style.opacity)>0||!me._svg_3.style.opacity)?'inherit':'hidden';
					me._svg_3.ggVisible=true;
				}
				else {
					me._svg_3.style.visibility="hidden";
					me._svg_3.ggVisible=false;
				}
			}
		}
		me._svg_3.logicBlock_visible();
		me._svg_3.ggUpdatePosition=function (useTransition) {
		}
		me._pc6.appendChild(me._svg_3);
		el=me._svg_9=document.createElement('div');
		els=me._svg_9__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		me._svg_9__img.setAttribute('src',basePath + 'images/svg_9.svg');
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Svg 9";
		el.ggDx=-2;
		el.ggDy=-1;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 26px;';
		hs+='left : calc(50% - ((28px + 0px) / 2) - 2px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((26px + 0px) / 2) - 1px);';
		hs+='visibility : hidden;';
		hs+='width : 28px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._svg_9.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._svg_9.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_ad') == false))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._svg_9.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._svg_9.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._svg_9.style.transition='';
				if (me._svg_9.ggCurrentLogicStateVisible == 0) {
					me._svg_9.style.visibility=(Number(me._svg_9.style.opacity)>0||!me._svg_9.style.opacity)?'inherit':'hidden';
					me._svg_9.ggVisible=true;
				}
				else {
					me._svg_9.style.visibility="hidden";
					me._svg_9.ggVisible=false;
				}
			}
		}
		me._svg_9.logicBlock_visible();
		me._svg_9.ggUpdatePosition=function (useTransition) {
		}
		me._pc6.appendChild(me._svg_9);
		el=me._pct3=document.createElement('div');
		els=me._pct3__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="pc-t-\ud648";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='bottom : -10px;';
		hs+='color : rgba(113,114,122,1);';
		hs+='height : 20px;';
		hs+='left : calc(50% - ((100px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 11px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._pct3.ggUpdateText=function() {
			var params = [];
			var hs = player._("\ucd94\ucc9c\uc5c5\uccb4", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._pct3.ggUpdateText();
		el.appendChild(els);
		me._pct3.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._pct3.ggUpdatePosition=function (useTransition) {
		}
		me._pc6.appendChild(me._pct3);
		me.__3.appendChild(me._pc6);
		el=me._pc5=document.createElement('div');
		el.ggId="pc-\uacf5\uac04\uc774\ub3d9";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 50px;';
		hs+='left : calc(50% - ((24px + 0px) / 2) + 0%);';
		hs+='position : absolute;';
		hs+='top : 135px;';
		hs+='visibility : inherit;';
		hs+='width : 24px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._pc5.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._pc5.onclick=function (e) {
			player.setVariableValue('vis_roomMove', !player.getVariableValue('vis_roomMove'));
			player.setVariableValue('vis_aptInfo_pc', false);
			player.setVariableValue('vis_ad', false);
			player.setVariableValue('vis_lanhouse', false);
			player.setVariableValue('vis_films', false);
		}
		me._pc5.ggUpdatePosition=function (useTransition) {
		}
		el=me._svg_11=document.createElement('div');
		els=me._svg_11__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIGhlaWdodD0iMzAiIHdpZHRoPSIyNyIgdmlld0JveD0iMCAwIDI3IDMwIj4KIDxwYXRoIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlPSIjMzQzNDM0IiBzdHJva2Utd2lkdGg9IjEuNSIgZD0iTTcuOTQ0MzQgMjAuNDQzNVYyNC43NzY0QzcuOTQ0MzQgMjYuOTg1NSA5LjczNTIgMjguNzc2NCAxMS45NDQzIDI4Ljc3NjRIMjEuOTk5QzI0LjIwODEgMjguNzc2NCAyNS45OTkgMjYuOTg1NSAyNS45OTkgMjQuNzc2NFY1QzI1Ljk5OSAyLjc5MDg2IDI0LjIwODEgMSAyMS45OTkgMUgxMS45NDQzQzkuNz'+
			'M1MiAxIDcuOTQ0MzQgMi43OTA4NiA3Ljk0NDM0IDVWOS4zMzI5MSIvPgogPHBhdGggc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2U9IiMzNDM0MzQiIHN0cm9rZS13aWR0aD0iMS41IiBkPSJNMTQuODg4IDE5LjA1MzdMMTguMzQ3NiAxNS41OTQxQzE4LjczODEgMTUuMjAzNiAxOC43MzgxIDE0LjU3MDQgMTguMzQ3NiAxNC4xNzk5TDE0Ljg4OCAxMC43MjAzIi8+CiA8cGF0aCBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZT0iIzM2MzYzNiIgc3Ryb2tlLXdpZHRoPSIxLjUiIGQ9Ik0xNy42NjY3IDE0Ljg4ODdMMSAxNC44ODg3Ii8+Cjwvc3ZnPgo=';
		me._svg_11__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Svg 11";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 26px;';
		hs+='left : calc(50% - ((24px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((26px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 24px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._svg_11.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._svg_11.ggUpdatePosition=function (useTransition) {
		}
		el=me._pct2=document.createElement('div');
		els=me._pct2__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="pc-t-\uacf5\uac04\uc774\ub3d9";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='bottom : -22px;';
		hs+='color : rgba(113,114,122,1);';
		hs+='height : 20px;';
		hs+='left : calc(50% - ((100px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 11px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+="font-family: \"Noto Sans KR\", sans-serif; font-optical-sizing: auto; font-weight: <weight>; font-style: normal;";
		els.setAttribute('style',hs);
		me._pct2.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uacf5\uac04\uc774\ub3d9", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._pct2.ggUpdateText();
		el.appendChild(els);
		me._pct2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._pct2.ggUpdatePosition=function (useTransition) {
		}
		me._svg_11.appendChild(me._pct2);
		me._pc5.appendChild(me._svg_11);
		me.__3.appendChild(me._pc5);
		el=me._pc4=document.createElement('div');
		el.ggId="pc-\uc544\ud30c\ud2b8\uc815\ubcf4";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 50px;';
		hs+='left : calc(50% - ((24px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 70px;';
		hs+='visibility : inherit;';
		hs+='width : 24px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._pc4.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._pc4.onclick=function (e) {
			player.setVariableValue('vis_aptInfo_pc', !player.getVariableValue('vis_aptInfo_pc'));
				me.__68.ggUpdateText=function() {
					var params = [];
					var hs = player._("<iframe src=\"https:\/\/kbland.kr\/c\/730325?ctype=05&xy=37.4828631,126.8690924,17\" width=\"100%\" height=\"100%\" allowfullscreen=\"true\" mozallowfullscreen=\"true\" webkitallowfullscreen=\"true\" frameborder= \"0\" ><\/iframe>", params);
					if (hs!=this.ggText) {
						this.ggText=hs;
						this.ggTextDiv.innerHTML=hs;
						if (this.ggUpdatePosition) this.ggUpdatePosition();
					}
				}
			me.__68.ggUpdateText();
			me.__68.ggTextDiv.scrollTop = 0;
			player.setVariableValue('vis_roomMove', false);
			player.setVariableValue('vis_ad', false);
			player.setVariableValue('vis_lanhouse', false);
			player.setVariableValue('vis_films', false);
		}
		me._pc4.ggUpdatePosition=function (useTransition) {
		}
		el=me._svg_10=document.createElement('div');
		els=me._svg_10__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIGhlaWdodD0iMzAiIHdpZHRoPSIzMCIgdmlld0JveD0iMCAwIDMwIDMwIj4KIDxwYXRoIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlPSIjMzQzNDM0IiBzdHJva2Utd2lkdGg9IjEuNSIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBkPSJNMTYuMjUgMjcuNUg2LjI1QzMuNzUgMjcuNSAyLjUgMjYuMjUgMi41IDIzLjc1VjEzLjc1QzIuNSAxMS4yNSAzLjc1IDEwIDYuMjUgMTBIMTIuNVYyMy43NUMxMi41IDI2LjI1IDEzLjc1IDI3LjUgMTYuMjUgMjcuNVoiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz'+
			'4KIDxwYXRoIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlPSIjMzQzNDM0IiBzdHJva2Utd2lkdGg9IjEuNSIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBkPSJNMTIuNjM3NSA1QzEyLjUzNzUgNS4zNzUgMTIuNSA1Ljc4NzUgMTIuNSA2LjI1VjEwSDYuMjVWNy41QzYuMjUgNi4xMjUgNy4zNzUgNSA4Ljc1IDVIMTIuNjM3NVoiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KIDxwYXRoIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlPSIjMzQzNDM0IiBzdHJva2Utd2lkdGg9IjEuNSIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBkPSJNMTcuNSAxMFYxNi4yNSIgc3Ryb2tlLWxpbmVqb2lu'+
			'PSJyb3VuZCIvPgogPHBhdGggc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2U9IiMzNDM0MzQiIHN0cm9rZS13aWR0aD0iMS41IiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIGQ9Ik0yMi41IDEwVjE2LjI1IiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CiA8cGF0aCBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZT0iIzM0MzQzNCIgc3Ryb2tlLXdpZHRoPSIxLjUiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgZD0iTTIxLjI1IDIxLjI1SDE4Ljc1QzE4LjA2MjUgMjEuMjUgMTcuNSAyMS44MTI1IDE3LjUgMjIuNVYyNy41SDIyLjVWMjIuNUMyMi41IDIxLjgxMjUgMjEuOTM3NSAyMS4yNSAyMS'+
			'4yNSAyMS4yNVoiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KIDxwYXRoIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlPSIjMzQzNDM0IiBzdHJva2Utd2lkdGg9IjEuNSIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBkPSJNNy41IDE2LjI1VjIxLjI1IiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CiA8cGF0aCBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZT0iIzM0MzQzNCIgc3Ryb2tlLXdpZHRoPSIxLjUiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgZD0iTTEyLjUgMjMuNzVWNi4yNUMxMi41IDMuNzUgMTMuNzUgMi41IDE2LjI1IDIuNUgyMy43NUMyNi4yNSAyLjUgMjcuNSAzLjc1'+
			'IDI3LjUgNi4yNVYyMy43NUMyNy41IDI2LjI1IDI2LjI1IDI3LjUgMjMuNzUgMjcuNUgxNi4yNUMxMy43NSAyNy41IDEyLjUgMjYuMjUgMTIuNSAyMy43NVoiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPC9zdmc+Cg==';
		me._svg_10__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Svg 10";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 28px;';
		hs+='left : calc(50% - ((28px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((28px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 28px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._svg_10.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._svg_10.ggUpdatePosition=function (useTransition) {
		}
		el=me._pct1=document.createElement('div');
		els=me._pct1__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="pc-t-\uc544\ud30c\ud2b8\uc815\ubcf4";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='bottom : -22px;';
		hs+='color : rgba(113,114,122,1);';
		hs+='height : 20px;';
		hs+='left : calc(50% - ((100px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 11px;';
		hs+='font-weight: normal;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+="font-family: \"Noto Sans KR\", sans-serif; font-optical-sizing: auto; font-weight: <weight>; font-style: normal;";
		els.setAttribute('style',hs);
		me._pct1.ggUpdateText=function() {
			var params = [];
			var hs = player._("\ubd80\ub3d9\uc0b0\uc815\ubcf4", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._pct1.ggUpdateText();
		el.appendChild(els);
		me._pct1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._pct1.ggUpdatePosition=function (useTransition) {
		}
		me._svg_10.appendChild(me._pct1);
		me._pc4.appendChild(me._svg_10);
		me.__3.appendChild(me._pc4);
		el=me._pc3=document.createElement('div');
		el.ggId="pc-\uc790\ub3d9\ud68c\uc804";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 50px;';
		hs+='left : calc(50% - ((24px + 0px) / 2) + 0%);';
		hs+='position : absolute;';
		hs+='top : 200px;';
		hs+='visibility : inherit;';
		hs+='width : 24px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._pc3.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._pc3.onclick=function (e) {
			player.toggleAutorotate();
		}
		me._pc3.ggUpdatePosition=function (useTransition) {
		}
		el=me._svg_5=document.createElement('div');
		els=me._svg_5__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIGhlaWdodD0iMjQiIHdpZHRoPSIyNiIgdmlld0JveD0iMCAwIDI2IDI0Ij4KIDxwYXRoIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlPSIjMjYyNjI2IiBzdHJva2Utd2lkdGg9IjEuNSIgZD0iTTIuOTk3OTMgNy44NzVDMy43NjkyMyA1LjU4MzMzIDYuMDAxMjQgMy4zMDEwMSA3Ljc3NTczIDIuMzMzMDJDOS41NTAyMSAxLjM2NTAzIDExLjU1NjYgMC45MDg5MDYgMTMuNTczIDEuMDE1MDhDMTUuNTg5NCAxLjEyMTI1IDE3LjUzNzMgMS43ODU1OCAxOS4yMDE0IDIuOTM0NjNDMjAuODY1NCA0LjA4Mz'+
			'Y3IDIyLjE4MDggNS42NzI2NyAyMy4wMDIxIDcuNTI1OTRNMSAzLjA4MzY0TDEuOTk4MjYgNy40MjgwM0MyLjE2ODI4IDguMTY3OTcgMi45MDMxNSA4LjYyOTMzIDMuNjM5NjIgOC40NTg1TDcuOTYzNzEgNy40NTU1NU0yMy4wMDIxIDE2LjEyNUMyMi4yMzA4IDE4LjQxNjcgMTkuOTk4OCAyMC42OTkgMTguMjI0MyAyMS42NjdDMTYuNDQ5OCAyMi42MzUgMTQuNDQzNCAyMy4wOTExIDEyLjQyNyAyMi45ODQ5QzEwLjQxMDYgMjIuODc4OCA4LjQ2MjcgMjIuMjE0NCA2Ljc5ODY0IDIxLjA2NTRDNS4xMzQ1OCAxOS45MTYzIDMuODE5MjEgMTguMzI3MyAyLjk5NzkzIDE2LjQ3NDFNMjUgMjAuOTE2NEwy'+
			'NC4wMDE3IDE2LjU3MkMyMy44MzE3IDE1LjgzMiAyMy4wOTY5IDE1LjM3MDcgMjIuMzYwNCAxNS41NDE1TDE4LjAzNjMgMTYuNTQ0NCIvPgo8L3N2Zz4K';
		me._svg_5__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Svg 5";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 21px;';
		hs+='left : calc(50% - ((23px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((21px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 23px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._svg_5.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._svg_5.ggUpdatePosition=function (useTransition) {
		}
		el=me._pct0=document.createElement('div');
		els=me._pct0__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="pc-t-\uc790\ub3d9\ud68c\uc804";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='bottom : -26px;';
		hs+='color : rgba(113,114,122,1);';
		hs+='height : 20px;';
		hs+='left : calc(50% - ((100px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 11px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+="font-family: \"Noto Sans KR\", sans-serif; font-optical-sizing: auto; font-weight: <weight>; font-style: normal;";
		els.setAttribute('style',hs);
		me._pct0.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uc790\ub3d9\ud68c\uc804", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._pct0.ggUpdateText();
		el.appendChild(els);
		me._pct0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._pct0.ggUpdatePosition=function (useTransition) {
		}
		me._svg_5.appendChild(me._pct0);
		me._pc3.appendChild(me._svg_5);
		me.__3.appendChild(me._pc3);
		el=me._pc2=document.createElement('div');
		el.ggId="pc-\ub9c1\ud06c\uacf5\uc720";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 50px;';
		hs+='left : calc(50% - ((24px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 265px;';
		hs+='visibility : inherit;';
		hs+='width : 24px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._pc2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._pc2.onclick=function (e) {
			player.toggleFullscreen();
		}
		me._pc2.ggUpdatePosition=function (useTransition) {
		}
		el=me._pc_2=document.createElement('div');
		el.ggId="pc-\ub9c1\ud06c\uacf5\uc720 \ubc15\uc2a4";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 24px;';
		hs+='left : calc(50% - ((24px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((24px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 24px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._pc_2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._pc_2.ggUpdatePosition=function (useTransition) {
		}
		el=me._svg_4=document.createElement('div');
		els=me._svg_4__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIGhlaWdodD0iMjYiIHdpZHRoPSIyOCIgdmlld0JveD0iMCAwIDI4IDI2Ij4KIDxwYXRoIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlPSIjMjYyNjI2IiBzdHJva2Utd2lkdGg9IjEuNSIgZD0iTTEwLjIwMDEgMjVMNC41NjAwMiAyNUMzLjY5ODQ1IDI1IDMgMjQuMzAxNiAzIDIzLjQ0TDMgMTcuODAwMU00LjE5OTk0IDIzLjgwMDJMMTIuNjAwMSAxNS40MDAzTTI3IDguMTk5ODlMMjcgMi41NTk5OEMyNyAxLjY5ODQzIDI2LjMwMTYgMSAyNS40NCAxTDE5Ljc5OTkgMU0yNS44IDIuMjAwMDRMMTcuMz'+
			'k5OCAxMC41OTk5Ii8+CiA8cGF0aCBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZT0iIzI2MjYyNiIgc3Ryb2tlLXdpZHRoPSIxLjUiIGQ9Ik0xOS43OTk5IDI1TDI1LjQ0IDI1QzI2LjMwMTYgMjUgMjcgMjQuMzAxNiAyNyAyMy40NEwyNyAxNy44MDAxTTI1LjgwMDEgMjMuODAwMkwxNy4zOTk5IDE1LjQwMDNNMyA4LjE5OTg5TDMgMi41NTk5OEMzIDEuNjk4NDMgMy42OTg0NSAxIDQuNTYwMDIgMUwxMC4yMDAxIDFNNC4yMDAwNCAyLjIwMDA0TDEyLjYwMDIgMTAuNTk5OSIvPgo8L3N2Zz4K';
		me._svg_4__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Svg 4";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 21px;';
		hs+='left : calc(50% - ((23px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((21px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 23px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._svg_4.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._svg_4.ggUpdatePosition=function (useTransition) {
		}
		el=me._pct=document.createElement('div');
		els=me._pct__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="pc-t-\ub9c1\ud06c\uacf5\uc720";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='bottom : -26px;';
		hs+='color : rgba(113,114,122,1);';
		hs+='height : 20px;';
		hs+='left : calc(50% - ((100px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 11px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+="font-family: \"Noto Sans KR\", sans-serif; font-optical-sizing: auto; font-weight: <weight>; font-style: normal; letter-spacing:0.2px;";
		els.setAttribute('style',hs);
		me._pct.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uc804\uccb4\ud654\uba74\n", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._pct.ggUpdateText();
		el.appendChild(els);
		me._pct.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._pct.ggUpdatePosition=function (useTransition) {
		}
		me._svg_4.appendChild(me._pct);
		me._pc_2.appendChild(me._svg_4);
		me._pc2.appendChild(me._pc_2);
		me.__3.appendChild(me._pc2);
		me._rectangle_1.appendChild(me.__3);
		el=me._hamburgar_1=document.createElement('div');
		el.ggId="hamburgar_1";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='bottom : 5px;';
		hs+='cursor : pointer;';
		hs+='height : 50px;';
		hs+='left : calc(50% - ((80% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 80%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._hamburgar_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._hamburgar_1.onclick=function (e) {
			me._pc_1.style.transition='none';
			me._pc_1.style.visibility='hidden';
			me._pc_1.ggVisible=false;
			player.setVariableValue('vis_hambur', true);
			player.setVariableValue('vis_roomMove', false);
			player.setVariableValue('vis_aptInfo_pc', false);
			player.setVariableValue('vis_ad', false);
		}
		me._hamburgar_1.ggUpdatePosition=function (useTransition) {
		}
		el=me._svg_6=document.createElement('div');
		els=me._svg_6__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlPSIjMzYzNjM2IiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0iZmVhdGhlciBmZWF0aGVyLW1lbnUiIGZpbGw9Im5vbmUiIGhlaWdodD0iMjQiIHN0cm9rZS13aWR0aD0iMS41IiB3aWR0aD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgc3Ryb2tlLW9wYWNpdHk9IjEiPgogPGxpbmUgeTI9IjEyIiB4Mj0iMjEiIHkxPSIxMiIgeDE9IjMiLz4KIDxsaW5lIHkyPSI2IiB4Mj0iMjEiIHkxPSI2IiB4MT0iMyIvPgogPGxpbmUgeTI9IjE4IiB4Mj0iMjEiIHkxPSIxOCIgeD'+
			'E9IjMiLz4KPC9zdmc+Cg==';
		me._svg_6__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Svg 6";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 28px;';
		hs+='left : calc(50% - ((28px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((28px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 28px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._svg_6.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._svg_6.ggUpdatePosition=function (useTransition) {
		}
		me._hamburgar_1.appendChild(me._svg_6);
		me._rectangle_1.appendChild(me._hamburgar_1);
		el=me.__2=document.createElement('div');
		el.ggId="\uc6b0\uc9d1\uc0ac\ub85c\uace0";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 50px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__2.onclick=function (e) {
			player.openUrl("https:\/\/woorihome.kr\/","");
		}
		me.__2.ggUpdatePosition=function (useTransition) {
		}
		el=me._image_6=document.createElement('div');
		els=me._image_6__img=document.createElement('img');
		els.className='ggskin ggskin_image_6';
		hs=basePath + 'images/image_6.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 6";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 36px;';
		hs+='left : calc(50% - ((44px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((36px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 44px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_6.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_6.ggUpdatePosition=function (useTransition) {
		}
		me.__2.appendChild(me._image_6);
		el=me._rectangle_3=document.createElement('div');
		el.ggId="Rectangle 3";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(0,0,0,0.196078);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 25px;';
		hs+='bottom : -5px;';
		hs+='height : 1px;';
		hs+='left : calc(50% - ((80% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 80%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._rectangle_3.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._rectangle_3.ggUpdatePosition=function (useTransition) {
		}
		me.__2.appendChild(me._rectangle_3);
		me._rectangle_1.appendChild(me.__2);
		me._pc_1.appendChild(me._rectangle_1);
		me.divSkin.appendChild(me._pc_1);
		el=me._pc_=document.createElement('div');
		el.ggId="pc-\uacf5\uac04\uc774\ub3d9_\uba54\ub274";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 88%;';
		hs+='left : 90px;';
		hs+='position : absolute;';
		hs+='top : 10px;';
		hs+='visibility : hidden;';
		hs+='width : 500px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._pc_.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._pc_.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_roomMove') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._pc_.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._pc_.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._pc_.style.transition='';
				if (me._pc_.ggCurrentLogicStateVisible == 0) {
					me._pc_.style.visibility=(Number(me._pc_.style.opacity)>0||!me._pc_.style.opacity)?'inherit':'hidden';
					me._pc_.ggVisible=true;
				}
				else {
					me._pc_.style.visibility="hidden";
					me._pc_.ggVisible=false;
				}
			}
		}
		me._pc_.logicBlock_visible();
		me._pc_.ggUpdatePosition=function (useTransition) {
		}
		el=me._pc=document.createElement('div');
		el.ggId="pc-\uacf5\uac04\uc774\ub3d9-\ubc30\uacbd";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 20px;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._pc.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._pc.onclick=function (e) {
			player.setVariableValue('vis_roomMove', false);
		}
		me._pc.ggUpdatePosition=function (useTransition) {
		}
		el=me._pc1=document.createElement('div');
		el.ggId="pc-\uacf5\uac04\uc774\ub3d9-\uc2a4\ud06c\ub864";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 95px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._pc1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._pc1.ggUpdatePosition=function (useTransition) {
		}
		el=me._pcscrollarea_1=document.createElement('div');
		els=me._pcscrollarea_1__content=document.createElement('div');
		els.className='ggskin ggskin_subelement ggskin_scrollarea';
		el.ggContent=els;
		el.appendChild(els);
		el.ggHorScrollVisible = false;
		el.ggVertScrollVisible = false;
		el.ggContentLeftOffset = 0;
		el.ggContentTopOffset = 0;
		el.ggContentWidth = 0;
		el.ggContentHeight = 0;
		el.ggDragInertiaX = 0;
		el.ggDragInertiaY = 0;
		el.ggVPercentVisible = 1.0;
		el.ggHPercentVisible = 1.0;
		el.ggIsDragging = false;
		hs ='';
		hs+='height : 269.336px;';
		hs+='left : 0px;';
		hs+='overflow-x : visible;';
		hs+='overflow-y : hidden;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='width : 460px;';
		hs+="";
		els.setAttribute('style',hs);
		me._pcscrollarea_1.ggScrollByX = function(diffX) {
			if(!me._pcscrollarea_1.ggHorScrollVisible || diffX == 0 || me._pcscrollarea_1.ggHPercentVisible >= 1.0) return;
			me._pcscrollarea_1.ggScrollPosX = (me._pcscrollarea_1__horScrollFg.offsetLeft + diffX);
			me._pcscrollarea_1.ggScrollPosX = Math.max(me._pcscrollarea_1.ggScrollPosX, 0);
			me._pcscrollarea_1.ggScrollPosX = Math.min(me._pcscrollarea_1.ggScrollPosX, me._pcscrollarea_1__horScrollBg.offsetWidth - me._pcscrollarea_1__horScrollFg.offsetWidth);
			me._pcscrollarea_1__horScrollFg.style.left = me._pcscrollarea_1.ggScrollPosX + 'px';
			let percentScrolled = me._pcscrollarea_1.ggScrollPosX / (me._pcscrollarea_1__horScrollBg.offsetWidth - me._pcscrollarea_1__horScrollFg.offsetWidth);
			me._pcscrollarea_1__content.style.left = -(Math.round((me._pcscrollarea_1.ggContentWidth * (1.0 - me._pcscrollarea_1.ggHPercentVisible)) * percentScrolled)) + me._pcscrollarea_1.ggContentLeftOffset + 'px';
			me._pcscrollarea_1.ggScrollPosXPercent = (me._pcscrollarea_1__horScrollFg.offsetLeft / me._pcscrollarea_1__horScrollBg.offsetWidth);
		}
		me._pcscrollarea_1.ggScrollByXSmooth = function(diffX) {
			if(!me._pcscrollarea_1.ggHorScrollVisible || diffX == 0 || me._pcscrollarea_1.ggHPercentVisible >= 1.0) return;
			var scrollPerInterval = diffX / 25;
			var scrollCurrX = 0;
			var id = setInterval(function() {
				scrollCurrX += scrollPerInterval;
				me._pcscrollarea_1.ggScrollPosX += scrollPerInterval;
				if (diffX > 0 && (scrollCurrX >= diffX || me._pcscrollarea_1.ggScrollPosX >= me._pcscrollarea_1__horScrollBg.offsetWidth - me._pcscrollarea_1__horScrollFg.offsetWidth)) {
					me._pcscrollarea_1.ggScrollPosX = Math.min(me._pcscrollarea_1.ggScrollPosX, me._pcscrollarea_1__horScrollBg.offsetWidth - me._pcscrollarea_1__horScrollFg.offsetWidth);
					clearInterval(id);
				}
				if (diffX < 0 && (scrollCurrX <= diffX || me._pcscrollarea_1.ggScrollPosX <= 0)) {
					me._pcscrollarea_1.ggScrollPosX = Math.max(me._pcscrollarea_1.ggScrollPosX, 0);
					clearInterval(id);
				}
			me._pcscrollarea_1__horScrollFg.style.left = me._pcscrollarea_1.ggScrollPosX + 'px';
			let percentScrolled = me._pcscrollarea_1.ggScrollPosX / (me._pcscrollarea_1__horScrollBg.offsetWidth - me._pcscrollarea_1__horScrollFg.offsetWidth);
			me._pcscrollarea_1__content.style.left = -(Math.round((me._pcscrollarea_1.ggContentWidth * (1.0 - me._pcscrollarea_1.ggHPercentVisible)) * percentScrolled)) + me._pcscrollarea_1.ggContentLeftOffset + 'px';
			me._pcscrollarea_1.ggScrollPosXPercent = (me._pcscrollarea_1__horScrollFg.offsetLeft / me._pcscrollarea_1__horScrollBg.offsetWidth);
			}, 10);
		}
		me._pcscrollarea_1.ggScrollByY = function(diffY) {
			if(!me._pcscrollarea_1.ggVertScrollVisible || diffY == 0 || me._pcscrollarea_1.ggVPercentVisible >= 1.0) return;
			me._pcscrollarea_1.ggScrollPosY = (me._pcscrollarea_1__vertScrollFg.offsetTop + diffY);
			me._pcscrollarea_1.ggScrollPosY = Math.max(me._pcscrollarea_1.ggScrollPosY, 0);
			me._pcscrollarea_1.ggScrollPosY = Math.min(me._pcscrollarea_1.ggScrollPosY, me._pcscrollarea_1__vertScrollBg.offsetHeight - me._pcscrollarea_1__vertScrollFg.offsetHeight);
			me._pcscrollarea_1__vertScrollFg.style.top = me._pcscrollarea_1.ggScrollPosY + 'px';
			let percentScrolled = me._pcscrollarea_1.ggScrollPosY / (me._pcscrollarea_1__vertScrollBg.offsetHeight - me._pcscrollarea_1__vertScrollFg.offsetHeight);
			me._pcscrollarea_1__content.style.top = -(Math.round((me._pcscrollarea_1.ggContentHeight * (1.0 - me._pcscrollarea_1.ggVPercentVisible)) * percentScrolled)) + me._pcscrollarea_1.ggContentTopOffset + 'px';
			me._pcscrollarea_1.ggScrollPosYPercent = (me._pcscrollarea_1__vertScrollFg.offsetTop / me._pcscrollarea_1__vertScrollBg.offsetHeight);
		}
		me._pcscrollarea_1.ggScrollByYSmooth = function(diffY) {
			if(!me._pcscrollarea_1.ggVertScrollVisible || diffY == 0 || me._pcscrollarea_1.ggVPercentVisible >= 1.0) return;
			var scrollPerInterval = diffY / 25;
			var scrollCurrY = 0;
			var id = setInterval(function() {
				scrollCurrY += scrollPerInterval;
				me._pcscrollarea_1.ggScrollPosY += scrollPerInterval;
				if (diffY > 0 && (scrollCurrY >= diffY || me._pcscrollarea_1.ggScrollPosY >= me._pcscrollarea_1__vertScrollBg.offsetHeight - me._pcscrollarea_1__vertScrollFg.offsetHeight)) {
					me._pcscrollarea_1.ggScrollPosY = Math.min(me._pcscrollarea_1.ggScrollPosY, me._pcscrollarea_1__vertScrollBg.offsetHeight - me._pcscrollarea_1__vertScrollFg.offsetHeight);
					clearInterval(id);
				}
				if (diffY < 0 && (scrollCurrY <= diffY || me._pcscrollarea_1.ggScrollPosY <= 0)) {
					me._pcscrollarea_1.ggScrollPosY = Math.max(me._pcscrollarea_1.ggScrollPosY, 0);
					clearInterval(id);
				}
			me._pcscrollarea_1__vertScrollFg.style.top = me._pcscrollarea_1.ggScrollPosY + 'px';
			let percentScrolled = me._pcscrollarea_1.ggScrollPosY / (me._pcscrollarea_1__vertScrollBg.offsetHeight - me._pcscrollarea_1__vertScrollFg.offsetHeight);
			me._pcscrollarea_1__content.style.top = -(Math.round((me._pcscrollarea_1.ggContentHeight * (1.0 - me._pcscrollarea_1.ggVPercentVisible)) * percentScrolled)) + me._pcscrollarea_1.ggContentTopOffset + 'px';
			me._pcscrollarea_1.ggScrollPosYPercent = (me._pcscrollarea_1__vertScrollFg.offsetTop / me._pcscrollarea_1__vertScrollBg.offsetHeight);
			}, 10);
		}
		me._pcscrollarea_1.ggScrollIntoView = function(posX, posY, width, height) {
			if (me._pcscrollarea_1.ggHorScrollVisible) {
				if (posX < 0) {
					var diffX = Math.floor(posX * me._pcscrollarea_1.ggHPercentVisible);
					me._pcscrollarea_1.ggScrollByXSmooth(diffX);
				} else if (posX + width > me._pcscrollarea_1.clientWidth - (me._pcscrollarea_1.ggVertScrollVisible ? 2 : 0)) {
					var diffX = Math.ceil(((posX + width) - (me._pcscrollarea_1.clientWidth - (me._pcscrollarea_1.ggVertScrollVisible ? 2 : 0))) * me._pcscrollarea_1.ggHPercentVisible);
					me._pcscrollarea_1.ggScrollByXSmooth(diffX);
				}
			}
			if (me._pcscrollarea_1.ggVertScrollVisible) {
				if (posY < 0) {
					var diffY = Math.floor(posY * me._pcscrollarea_1.ggVPercentVisible);
					me._pcscrollarea_1.ggScrollByYSmooth(diffY);
				} else if (posY + height > me._pcscrollarea_1.clientHeight - (me._pcscrollarea_1.ggHorScrollVisible ? 2 : 0)) {
					var diffY = Math.ceil(((posY + height) - (me._pcscrollarea_1.clientHeight - (me._pcscrollarea_1.ggHorScrollVisible ? 2 : 0))) * me._pcscrollarea_1.ggVPercentVisible);
					me._pcscrollarea_1.ggScrollByYSmooth(diffY);
				}
			}
		}
		me._pcscrollarea_1__content.mousetouchend = e => {
			let inertiaInterval = setInterval(function() {
				me._pcscrollarea_1.ggDragInertiaX *= 0.96;
				me._pcscrollarea_1.ggDragInertiaY *= 0.96;
				me._pcscrollarea_1.ggScrollByX(me._pcscrollarea_1.ggDragInertiaX);
				me._pcscrollarea_1.ggScrollByY(me._pcscrollarea_1.ggDragInertiaY);
				if (Math.abs(me._pcscrollarea_1.ggDragInertiaX) < 1.0 && Math.abs(me._pcscrollarea_1.ggDragInertiaY) < 1.0) {
					clearInterval(inertiaInterval);
				}
				}, 10);
			me._pcscrollarea_1__content.onmouseup = null;
			me._pcscrollarea_1__content.onmousemove = null;
			me._pcscrollarea_1__content.ontouchend = null;
			me._pcscrollarea_1__content.ontouchmove = null;
			me._pcscrollarea_1__content.onpointerup = null;
			me._pcscrollarea_1__content.onpointermove = null;
			setTimeout(function() { me._pcscrollarea_1.ggIsDragging = false; }, 100);
		}
		me._pcscrollarea_1__content.mousetouchmove = e => {
			e = e || window.event;
			e.preventDefault();
			var t = e.touches;
			var eventX = t ? t[0].clientX : e.clientX;
			var eventY = t ? t[0].clientY : e.clientY;
			if (Math.abs(eventX - me._pcscrollarea_1.ggDragStartX) > 10 || Math.abs(eventY - me._pcscrollarea_1.ggDragStartY) > 10) me._pcscrollarea_1.ggIsDragging = true;
			var diffX = (eventX - me._pcscrollarea_1.ggDragLastX) * me._pcscrollarea_1.ggHPercentVisible;
			var diffY = (eventY - me._pcscrollarea_1.ggDragLastY) * me._pcscrollarea_1.ggVPercentVisible;
			me._pcscrollarea_1.ggDragInertiaX = -diffX;
			me._pcscrollarea_1.ggDragInertiaY = -diffY;
			me._pcscrollarea_1.ggDragLastX = eventX;
			me._pcscrollarea_1.ggDragLastY = eventY;
			me._pcscrollarea_1.ggScrollByX(-diffX);
			me._pcscrollarea_1.ggScrollByY(-diffY);
		}
		me._pcscrollarea_1__content.mousetouchstart = e => {
			e = e || window.event;
			var t = e.touches;
			me._pcscrollarea_1.ggDragLastX = me._pcscrollarea_1.ggDragStartX = t ? t[0].clientX : e.clientX;
			me._pcscrollarea_1.ggDragLastY = me._pcscrollarea_1.ggDragStartY = t ? t[0].clientY : e.clientY;
			me._pcscrollarea_1__content.onmouseup = me._pcscrollarea_1__content.mousetouchend;
			me._pcscrollarea_1__content.ontouchend = me._pcscrollarea_1__content.mousetouchend;
			me._pcscrollarea_1__content.onmousemove = me._pcscrollarea_1__content.mousetouchmove;
			me._pcscrollarea_1__content.ontouchmove = me._pcscrollarea_1__content.mousetouchmove;
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				me._pcscrollarea_1__content.onpointerup = me._pcscrollarea_1__content.ontouchend;
				me._pcscrollarea_1__content.onpointermove = me._pcscrollarea_1__content.ontouchmove;
			}
		}
		els.onmousedown = me._pcscrollarea_1__content.mousetouchstart;
		els.ontouchstart = me._pcscrollarea_1__content.mousetouchstart;
		if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
			els.onpointerdown = me._pcscrollarea_1__content.mousetouchstart;
		}
		elVertScrollBg = me._pcscrollarea_1__vertScrollBg = document.createElement('div');
		el.appendChild(elVertScrollBg);
		elVertScrollBg.setAttribute('style', 'position: absolute; right: 0px; top: 0px; visibility: hidden; width: 2px; height: 337.92px; background-color: rgba(210,210,210,1); pointer-events: auto;');
		elVertScrollBg.className='ggskin ggskin_scrollarea_vscrollbg';
		elVertScrollFg = me._pcscrollarea_1__vertScrollFg = document.createElement('div');
		elVertScrollBg.appendChild(elVertScrollFg);
		elVertScrollFg.setAttribute('style', 'position: absolute; left: 0px; top: 0px; visibility: hidden; width: 2px; height: 337.92px; background-color: rgba(0,0,0,0.196078); pointer-events: auto;');
		elVertScrollFg.className='ggskin ggskin_scrollarea_vscrollfg';
		me._pcscrollarea_1.ggScrollPosY = 0;
		me._pcscrollarea_1.ggScrollPosYPercent = 0.0;
		elVertScrollFg.onmousedown = function(e) {
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) return;
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			me._pcscrollarea_1.ggDragLastY = e.clientY;
			document.onmouseup = function() {
				let inertiaInterval = setInterval(function() {
					me._pcscrollarea_1.ggDragInertiaY *= 0.96;
					me._pcscrollarea_1.ggScrollByY(me._pcscrollarea_1.ggDragInertiaY);
					if (Math.abs(me._pcscrollarea_1.ggDragInertiaY) < 1.0) {
						clearInterval(inertiaInterval);
					}
					}, 10);
				document.onmouseup = null;
				document.onmousemove = null;
			}
			document.onmousemove = function(e) {
				e = e || window.event;
				e.preventDefault();
				var diffY = e.clientY - me._pcscrollarea_1.ggDragLastY;
				me._pcscrollarea_1.ggDragInertiaY = diffY;
				me._pcscrollarea_1.ggDragLastY = e.clientY;
				me._pcscrollarea_1.ggScrollByY(diffY);
			}
		}
		elVertScrollFg.ontouchstart = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			var t = e.touches;
			me._pcscrollarea_1.ggDragLastY = t ? t[0].clientY : e.clientY;
			document.ontouchend = function() {
				let inertiaInterval = setInterval(function() {
					me._pcscrollarea_1.ggDragInertiaY *= 0.96;
					me._pcscrollarea_1.ggScrollByY(me._pcscrollarea_1.ggDragInertiaY);
					if (Math.abs(me._pcscrollarea_1.ggDragInertiaY) < 1.0) {
						clearInterval(inertiaInterval);
					}
					}, 10);
				document.ontouchend = null;
				document.ontouchmove = null;
				document.onpointerup = null;
				document.onpointermove = null;
			}
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				document.onpointerup = document.ontouchend;
			}
			document.ontouchmove = function(e) {
				e = e || window.event;
				e.preventDefault();
				var t = e.touches;
				var diffY = (t ? t[0].clientY : e.clientY) - me._pcscrollarea_1.ggDragLastY;
				me._pcscrollarea_1.ggDragInertiaY = diffY;
				me._pcscrollarea_1.ggDragLastY = t ? t[0].clientY : e.clientY;
				me._pcscrollarea_1.ggScrollByY(diffY);
			}
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				document.onpointermove = document.ontouchmove;
			}
		}
		if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
			elVertScrollFg.onpointerdown = elVertScrollFg.ontouchstart;
		}
		elVertScrollBg.onmousedown = function(e) {
			e = e || window.event;
			e.preventDefault();
			var diffY = me._pcscrollarea_1.ggScrollHeight;
			if (e.offsetY < me._pcscrollarea_1.ggScrollPosY) {
				diffY = diffY * -1;
			}
			me._pcscrollarea_1.ggScrollByYSmooth(diffY);
		}
		elVertScrollBg.ontouchstart = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			var t = e.touches;
			var rect = me._pcscrollarea_1__vertScrollBg.getBoundingClientRect();
			var diffY = me._pcscrollarea_1.ggScrollHeight;
			if ((t[0].clientY - rect.top) < me._pcscrollarea_1.ggScrollPosY) {
				diffY = diffY * -1;
			}
			me._pcscrollarea_1.ggScrollByYSmooth(diffY);
		}
		el.addEventListener('wheel', function(e) {
			e.preventDefault();
			var wheelDelta = Math.sign(e.deltaY);
			me._pcscrollarea_1.ggScrollByYSmooth(30 * me._pcscrollarea_1.ggVPercentVisible * wheelDelta);
		});
		elCornerBg = me._pcscrollarea_1__cornerBg = document.createElement('div');
		el.appendChild(elCornerBg);
		elCornerBg.setAttribute('style', 'position: absolute; right: 0px; bottom: 0px; visibility: hidden; width: 2px; height: 2px; background-color: rgba(255,255,255,1);');
		elCornerBg.className='ggskin ggskin_scrollarea_scrollcorner';
		el.ggId="pc-\uacf5\uac04\uc774\ub3d9-Scrollarea 1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_scrollarea ";
		el.ggType='scrollarea';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='height : 80%;';
		hs+='left : -10px;';
		hs+='overflow : hidden;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 92%;';
		hs+='pointer-events:auto;';
		hs+='margin:0 25px;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._pcscrollarea_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._pcscrollarea_1.ggUpdatePosition=function (useTransition) {
			{
				var horScrollWasVisible = this.ggHorScrollVisible;
				var vertScrollWasVisible = this.ggVertScrollVisible;
				this.ggContent.style.left = '0px';
				this.ggContent.style.top = '0px';
				this.ggContentLeftOffset = 0;
				this.ggContentTopOffset = 0;
				var offsetWidthWithScale = this.getBoundingClientRect().width;
				var offsetHeightWithScale = this.getBoundingClientRect().height;
				var domRectContent = this.ggContent.getBoundingClientRect();
				var minX = 0;
				var minY = 0;
				var maxX = 0;
				var maxY = 0;
				var stack=[];
				stack.push(this.ggContent);
				while(stack.length>0) {
					var e=stack.pop();
					if (e!=this.ggContent && e.getBoundingClientRect && e.style['display']!='none' && (e.offsetWidth != 0 || e.offsetHeight != 0)) {
						var domRectChild = e.getBoundingClientRect();
						var diffX = domRectChild.left - domRectContent.left;
						minX = Math.min(minX, diffX);
						maxX = Math.max(maxX, diffX + domRectChild.width);
						var diffY = domRectChild.top - domRectContent.top;
						minY = Math.min(minY, diffY);
						maxY = Math.max(maxY, diffY + domRectChild.height);
					}
					if (e.hasChildNodes() && e.style['display']!='none' && e.style['overflow']!='hidden') {
						for(var i=0;i<e.childNodes.length;i++) {
							stack.push(e.childNodes[i]);
						}
					}
				}
				if (minX < 0) this.ggContentLeftOffset = -minX;
				if (minY < 0) this.ggContentTopOffset = -minY;
				this.ggContent.style.left = this.ggContentLeftOffset + 'px';
				this.ggContent.style.top = this.ggContentTopOffset + 'px';
				var contentWidth = me._pcscrollarea_1.clientWidth * 1;
				this.ggContent.style.width = contentWidth + 'px';
				var contentHeight = maxY - minY;
				this.ggContent.style.height = contentHeight + 'px';
			var scaleX = this.getBoundingClientRect().width / this.offsetWidth;
				this.ggContentWidth = contentWidth / scaleX;
			var scaleY = this.getBoundingClientRect().height / this.offsetHeight;
				this.ggContentHeight = contentHeight / scaleY;
				this.ggContent.style.left = this.ggContentLeftOffset + 'px';
				this.ggContent.style.marginLeft = '0px';
				this.ggContent.style.top = -(Math.round(me._pcscrollarea_1.ggScrollPosY / me._pcscrollarea_1.ggVPercentVisible)) + this.ggContentTopOffset + 'px';
				this.ggContent.style.marginTop = '0px';
				if ((me._pcscrollarea_1.ggHorScrollVisible && contentHeight > this.clientHeight - 2) || (!me._pcscrollarea_1.ggHorScrollVisible && contentHeight > this.clientHeight)) {
					me._pcscrollarea_1__vertScrollBg.style.visibility = 'inherit';
					me._pcscrollarea_1__vertScrollFg.style.visibility = 'inherit';
					me._pcscrollarea_1.ggVertScrollVisible = true;
				} else {
					me._pcscrollarea_1__vertScrollBg.style.visibility = 'hidden';
					me._pcscrollarea_1__vertScrollFg.style.visibility = 'hidden';
					me._pcscrollarea_1.ggVertScrollVisible = false;
				}
				if(me._pcscrollarea_1.ggVertScrollVisible) {
					me._pcscrollarea_1.ggAvailableWidth = me._pcscrollarea_1.clientWidth - 2;
					if (me._pcscrollarea_1.ggHorScrollVisible) {
						me._pcscrollarea_1.ggAvailableHeight = me._pcscrollarea_1.clientHeight - 2;
						me._pcscrollarea_1.ggAvailableHeightWithScale = me._pcscrollarea_1.getBoundingClientRect().height - me._pcscrollarea_1__vertScrollBg.getBoundingClientRect().width;
						me._pcscrollarea_1__cornerBg.style.visibility = 'inherit';
					} else {
						me._pcscrollarea_1.ggAvailableHeight = me._pcscrollarea_1.clientHeight;
						me._pcscrollarea_1.ggAvailableHeightWithScale = me._pcscrollarea_1.getBoundingClientRect().height;
						me._pcscrollarea_1__cornerBg.style.visibility = 'hidden';
					}
					me._pcscrollarea_1__vertScrollBg.style.height = me._pcscrollarea_1.ggAvailableHeight + 'px';
					me._pcscrollarea_1.ggVPercentVisible = contentHeight != 0 ? me._pcscrollarea_1.ggAvailableHeightWithScale / contentHeight : 0.0;
					if (me._pcscrollarea_1.ggVPercentVisible > 1.0) me._pcscrollarea_1.ggVPercentVisible = 1.0;
					me._pcscrollarea_1.ggScrollHeight =  Math.round(me._pcscrollarea_1__vertScrollBg.offsetHeight * me._pcscrollarea_1.ggVPercentVisible);
					me._pcscrollarea_1__vertScrollFg.style.height = me._pcscrollarea_1.ggScrollHeight + 'px';
					me._pcscrollarea_1.ggScrollPosY = me._pcscrollarea_1.ggScrollPosYPercent * me._pcscrollarea_1.ggAvailableHeight;
					me._pcscrollarea_1.ggScrollPosY = Math.min(me._pcscrollarea_1.ggScrollPosY, me._pcscrollarea_1__vertScrollBg.offsetHeight - me._pcscrollarea_1__vertScrollFg.offsetHeight);
					me._pcscrollarea_1__vertScrollFg.style.top = me._pcscrollarea_1.ggScrollPosY + 'px';
					if (me._pcscrollarea_1.ggVPercentVisible < 1.0) {
						let percentScrolled = me._pcscrollarea_1.ggScrollPosY / (me._pcscrollarea_1__vertScrollBg.offsetHeight - me._pcscrollarea_1__vertScrollFg.offsetHeight);
						me._pcscrollarea_1__content.style.top = -(Math.round((me._pcscrollarea_1.ggContentHeight * (1.0 - me._pcscrollarea_1.ggVPercentVisible)) * percentScrolled)) + me._pcscrollarea_1.ggContentTopOffset + 'px';
					}
				} else {
					me._pcscrollarea_1.ggAvailableWidth = me._pcscrollarea_1.clientWidth;
					me._pcscrollarea_1.ggScrollPosY = 0;
					me._pcscrollarea_1.ggScrollPosYPercent = 0.0;
					me._pcscrollarea_1__content.style.top = this.ggContentTopOffset + 'px';
					me._pcscrollarea_1__cornerBg.style.visibility = 'hidden';
				}
				if(horScrollWasVisible != me._pcscrollarea_1.ggHorScrollVisible || vertScrollWasVisible != me._pcscrollarea_1.ggVertScrollVisible) {
					skin.updateSize(me._pcscrollarea_1);
					me._pcscrollarea_1.ggUpdatePosition();
				}
			}
		}
		el=me._container_2=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._container_2;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		el.ggId="Container 2";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 80%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._container_2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._container_2.ggUpdatePosition=function (useTransition) {
		}
		el=me._cloner_1=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._cloner_1;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		el.ggNumRepeat = 100;
		el.ggNumRows = 0;
		el.ggNumCols = 0;
		el.ggCloneOffset = 0;
		el.ggCloneOffsetChanged = false;
		el.ggWidth = 148;
		el.ggHeight = 74;
		el.ggUpdating = false;
		el.ggFilter = [];
		el.ggFilterHsSkinId = '';
		el.ggInstances = [];
		el.ggNumFilterPassed = 0;
		el.ggAutoPosition = function(init) {
			var currYPos = 0;
			var numElements = me._cloner_1.ggInstances.length;
			var currElement = 0;
			for (var i=0; i<me._cloner_1.ggNumRows; i++) {
				var rowMaxHeight = 0;
				for (var j=0; j<me._cloner_1.ggNumCols; j++) {
					if (numElements > currElement) {
						if (!init) {
							if (me._cloner_1.childNodes[currElement].clientHeight < me._cloner_1.childNodes[currElement].scrollHeight && currElement < (numElements - 1)) {
								me._cloner_1.childNodes[currElement].style.transition = 'top ' + 1 + 's, height ' + 1 + 's';
							} else {
								me._cloner_1.childNodes[currElement].style.transition = 'top ' + 1 + 's';
							}
						}
						me._cloner_1.childNodes[currElement].style.overflow = 'hidden';
						me._cloner_1.childNodes[currElement].style['top'] = currYPos + 'px';
						me._cloner_1.childNodes[currElement].style['height'] ='0px';
						rowMaxHeight = Math.max(rowMaxHeight, me._cloner_1.childNodes[currElement].scrollHeight);
						me._cloner_1.childNodes[currElement].style['height'] = rowMaxHeight + 'px';
					}
					currElement++;
				}
				currYPos += rowMaxHeight;
			}
			setTimeout(function() {
				var p = me._cloner_1.parentElement;
				while (p != null && p !== me.divSkin) {
					if (p.ggType && p.ggType == 'scrollarea') {
						if (p.ggUpdatePosition) {
							p.ggUpdatePosition();
						}
					}
					p = p.parentElement;
				}
			}, 1000);
		}
		el.getFilteredNodes = function(tourNodes, filter) {
			var filteredNodes = [];
			for (var i = 0; i < tourNodes.length; i++) {
				var nodeId = tourNodes[i];
				var passed = true;
				var nodeData = player.getNodeUserdata(nodeId);
				if (filter.length > 0) {
					for (var j=0; j < filter.length; j++) {
						if (nodeData['tags'].indexOf(filter[j].trim()) == -1) passed = false;
					}
				}
				if (passed) {
					filteredNodes.push(nodeId);
				}
			}
			return filteredNodes;
		}
		el.ggUpdate = function(filter) {
			if(me._cloner_1.ggUpdating == true) return;
			me._cloner_1.ggUpdating = true;
			var el=me._cloner_1;
			var curNumCols = 0;
			var parentWidth = me._cloner_1.parentNode.classList.contains('ggskin_subelement') ? (me._cloner_1.parentNode.parentNode.classList.contains('ggskin_scrollarea') ? me._cloner_1.parentNode.parentNode.ggAvailableWidth : me._cloner_1.parentNode.parentNode.clientWidth) : me._cloner_1.parentNode.clientWidth;
			if (parentWidth == 0) parentWidth = me._cloner_1.parentNode.parentNode.clientWidth;
			curNumCols = Math.floor(((parentWidth - me._cloner_1.offsetLeft) * me._cloner_1.ggNumRepeat / 100.0) / me._cloner_1.offsetWidth);
			if (curNumCols < 1) curNumCols = 1;
			if (typeof filter=='object') {
				el.ggFilter = filter;
			} else {
				filter = el.ggFilter;
			};
			if (me.ggTag) filter.push(me.ggTag);
			filter=filter.sort();
			if ((el.ggNumCols == curNumCols) && (el.ggInstances.length > 0) && (filter.length === el.ggCurrentFilter.length) && (filter.every(function(value, index) { return value === el.ggCurrentFilter[index] }) )) {
				me._cloner_1.ggUpdating = false;
				return;
			} else {
				el.ggNumRows = 1;
				el.ggNumCols = curNumCols;
			var centerOffsetHor = 0;
			var centerOffsetVert = 0;
				me._cloner_1.ggCloneOffsetChanged = false;
			}
			el.ggCurrentFilter = filter;
			el.ggInstances = [];
			if (el.hasChildNodes() == true) {
				while (el.firstChild) {
					el.removeChild(el.firstChild);
				}
			}
			var tourNodes = player.getNodeIds();
			if (tourNodes.length == 0) {
				me._cloner_1.ggUpdating = false;
				return;
			}
			var row = 0;
			var column = 0;
			var currentIndex = 0;
			var keepCloning = true;
			tourNodes = me._cloner_1.getFilteredNodes(tourNodes, filter);
			me._cloner_1.ggNumFilterPassed = tourNodes.length;
			for (var i = 0; i < tourNodes.length; i++) {
				var nodeId = tourNodes[i];
				var nodeData = player.getNodeUserdata(nodeId);
				if (!keepCloning || i < me._cloner_1.ggCloneOffset) continue;
				var parameter={};
				parameter.top = centerOffsetVert + (row * me._cloner_1.ggHeight) + 'px';
				parameter.left = centerOffsetHor + (column * me._cloner_1.ggWidth) + 'px';
				parameter.width=me._cloner_1.ggWidth + 'px';
				parameter.height=me._cloner_1.ggHeight + 'px';
				parameter.index=currentIndex;
				parameter.title=nodeData['title'];
				var inst = new SkinCloner_cloner_1_Class(nodeId, me, el, parameter);
				currentIndex++;
				inst.__div.style['height'] = '0px';
				el.ggInstances.push(inst);
				el.appendChild(inst.__div);
				inst.__div.ggObj=inst;
				skin.updateSize(inst.__div);
				column++;
				if (column >= el.ggNumCols) {
					column = 0;
					row++;
					el.ggNumRows++;
				}
			}
			me._cloner_1.ggNodeCount = me._cloner_1.ggNumFilterPassed;
			me._cloner_1.ggAutoPosition(true);
			me._cloner_1.ggUpdating = false;
			player.triggerEvent('clonerchanged');
			if (me._cloner_1.parentNode && me._cloner_1.parentNode.classList.contains('ggskin_subelement') && me._cloner_1.parentNode.parentNode.classList.contains('ggskin_scrollarea')) me._cloner_1.parentNode.parentNode.ggUpdatePosition();
		}
		el.ggFilter = [];
		el.ggId="Cloner 1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_cloner ";
		el.ggType='cloner';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 74px;';
		hs+='left : 0px;';
		hs+='overflow : visible;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 148px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._cloner_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._cloner_1.ggUpdateConditionNodeChange=function () {
			var cnode=player.getCurrentNode();
			for(var i=0; i<me._cloner_1.childNodes.length; i++) {
				var child=me._cloner_1.childNodes[i];
				if (child.ggObj && child.ggObj.ggNodeId==cnode) {
			        var childOffX = child.offsetLeft;
			        var childOffY = child.offsetTop;
					var p = child.parentElement;
			        while (p != null && p!==this.divSkin) {
						if (p.ggType && p.ggType == 'scrollarea') {
							p.ggScrollIntoView(childOffX, childOffY, child.clientWidth, child.clientHeight);
						}
						childOffX += p.offsetLeft;
						childOffY += p.offsetTop;
						p = p.parentElement;
					}
				}
			}
		}
		me._cloner_1.ggUpdatePosition=function (useTransition) {
			me._cloner_1.ggUpdate();
		}
		me._container_2.appendChild(me._cloner_1);
		me._pcscrollarea_1__content.appendChild(me._container_2);
		me._pc1.appendChild(me._pcscrollarea_1);
		el=me._title_1_1=document.createElement('div');
		el.ggId="title_1_1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 24px;';
		hs+='left : 30px;';
		hs+='position : absolute;';
		hs+='top : -25px;';
		hs+='visibility : hidden;';
		hs+='width : 60%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._title_1_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._title_1_1.ggUpdatePosition=function (useTransition) {
		}
		el=me.__0=document.createElement('div');
		el.ggId="\uc2a4\ud06c\ub864-\uc138\ub300\uad6c\uc131-\ub9c9\ub300";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #221e1f;';
		hs+='border : 0px solid #000000;';
		hs+='height : 14px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((14px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 2px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__0.ggUpdatePosition=function (useTransition) {
		}
		me._title_1_1.appendChild(me.__0);
		el=me.__=document.createElement('div');
		els=me.____text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\uc2a4\ud06c\ub864-\uc138\ub300\uad6c\uc131";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(57,57,57,1);';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		hs+='margin-left:10px; letter-spacing:-1px;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 14px;';
		hs+='font-weight: 600;';
		hs+='text-align: left;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uc138\ub300\uad6c\uc131", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__.ggUpdateText();
		el.appendChild(els);
		me.__.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__.ggUpdatePosition=function (useTransition) {
		}
		me._title_1_1.appendChild(me.__);
		me._pc1.appendChild(me._title_1_1);
		me._pc.appendChild(me._pc1);
		el=me._pc0=document.createElement('div');
		el.ggId="pc-\uacf5\uac04\uc774\ub3d9-\ud0c0\uc774\ud2c0";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 24px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 25px;';
		hs+='visibility : inherit;';
		hs+='width : 91%;';
		hs+='pointer-events:none;';
		hs+='margin:0 24px;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._pc0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._pc0.ggUpdatePosition=function (useTransition) {
		}
		el=me._pc_0=document.createElement('div');
		els=me._pc_0__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="pc-\uacf5\uac04\uc774\ub3d9-\uc544\ud30c\ud2b8 \uc774\ub984";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(57,57,57,1);';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 30%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='font-size: 15px;';
		hs+='font-weight: bolder;';
		hs+='text-align: left;';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._pc_0.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uacf5\uac04\uc774\ub3d9", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._pc_0.ggUpdateText();
		el.appendChild(els);
		me._pc_0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._pc_0.ggUpdatePosition=function (useTransition) {
		}
		me._pc0.appendChild(me._pc_0);
		el=me._pccontainer_1=document.createElement('div');
		el.ggId="pc--\uacf5\uac04\uc774\ub3d9-Container 1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 70%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._pccontainer_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._pccontainer_1.onclick=function (e) {
			player.setVariableValue('vis_roomMove', false);
		}
		me._pccontainer_1.ggUpdatePosition=function (useTransition) {
		}
		el=me._rectangle_7=document.createElement('div');
		el.ggId="Rectangle 7";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(234,236,234,0.705882);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 50px;';
		hs+='height : 30px;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='top : calc(50% - ((30px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 30px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._rectangle_7.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._rectangle_7.ggUpdatePosition=function (useTransition) {
		}
		el=me._svg_19=document.createElement('div');
		els=me._svg_19__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJmZWF0aGVyIGZlYXRoZXIteCIgZmlsbD0ibm9uZSIgaGVpZ2h0PSIyNCIgc3Ryb2tlLXdpZHRoPSIxLjUiIHdpZHRoPSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij4KIDxsaW5lIHkyPSIxOCIgeTE9IjYiIHgyPSI2IiB4MT0iMTgiLz4KIDxsaW5lIHkyPSIxOCIgeTE9IjYiIHgyPSIxOCIgeDE9IjYiLz4KPC9zdmc+Cg==';
		me._svg_19__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Svg 19";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 18px;';
		hs+='left : calc(50% - ((18px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((18px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 18px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._svg_19.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._svg_19.ggUpdatePosition=function (useTransition) {
		}
		me._rectangle_7.appendChild(me._svg_19);
		me._pccontainer_1.appendChild(me._rectangle_7);
		me._pc0.appendChild(me._pccontainer_1);
		me._pc.appendChild(me._pc0);
		me._pc_.appendChild(me._pc);
		me.divSkin.appendChild(me._pc_);
		el=me.__1=document.createElement('div');
		el.ggId="\ubaa8\ubc14\uc77c\ub85c\uace0_1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='bottom : 70px;';
		hs+='height : 20px;';
		hs+='left : 25px;';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 80px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__1.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me.__1.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getViewerSize(true).width <= 1120))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__1.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__1.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__1.style.transition='';
				if (me.__1.ggCurrentLogicStateVisible == 0) {
					me.__1.style.visibility=(Number(me.__1.style.opacity)>0||!me.__1.style.opacity)?'inherit':'hidden';
					me.__1.ggVisible=true;
				}
				else {
					me.__1.style.visibility="hidden";
					me.__1.ggVisible=false;
				}
			}
		}
		me.__1.logicBlock_visible();
		me.__1.onclick=function (e) {
				me.__58.ggUpdateText=function() {
					var params = [];
					var hs = player._("<iframe src=\"\" width=\"100%\" height=\"100%\" allowfullscreen=\"true\" mozallowfullscreen=\"true\" webkitallowfullscreen=\"true\" frameborder= \"0\" ><\/iframe>", params);
					if (hs!=this.ggText) {
						this.ggText=hs;
						this.ggTextDiv.innerHTML=hs;
						if (this.ggUpdatePosition) this.ggUpdatePosition();
					}
				}
			me.__58.ggUpdateText();
			me.__58.ggTextDiv.scrollTop = 0;
		}
		me.__1.ggUpdatePosition=function (useTransition) {
		}
		el=me._rectangle_4=document.createElement('div');
		el.ggId="Rectangle 4";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._rectangle_4.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._rectangle_4.ggUpdatePosition=function (useTransition) {
		}
		me.__1.appendChild(me._rectangle_4);
		el=me._text_1=document.createElement('div');
		els=me._text_1__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 1";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(255,255,255,1);';
		hs+='height : 20px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((20px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 200px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 10px;';
		hs+='font-weight: inherit;';
		hs+='text-align: left;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._text_1.ggUpdateText=function() {
			var params = [];
			var hs = player._("\u203b \ubb34\ub2e8 \uc0ac\uc6a9 \ubc0f \uc7ac\uac00\uacf5\uc744 \uae08\uc9c0\ud569\ub2c8\ub2e4.", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._text_1.ggUpdateText();
		el.appendChild(els);
		me._text_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._text_1.ggUpdatePosition=function (useTransition) {
		}
		me.__1.appendChild(me._text_1);
		me.divSkin.appendChild(me.__1);
		me.__71.logicBlock_visible();
		me.__66.logicBlock_position();
		me.__66.logicBlock_size();
		me.__66.logicBlock_visible();
		me.__67.logicBlock_borderradius();
		me._iframe1.logicBlock_size();
		me.__61.logicBlock_position();
		me.__61.logicBlock_size();
		me.__61.logicBlock_visible();
		me.__62.logicBlock_borderradius();
		me._iframe0.logicBlock_size();
		me.__56.logicBlock_position();
		me.__56.logicBlock_size();
		me.__56.logicBlock_visible();
		me.__57.logicBlock_borderradius();
		me._iframe.logicBlock_size();
		me.__51.logicBlock_position();
		me.__51.logicBlock_size();
		me.__51.logicBlock_visible();
		me.__52.logicBlock_borderradius();
		me.__box.logicBlock_size();
		me._pc16.logicBlock_visible();
		me.__36.logicBlock_position();
		me.__36.logicBlock_visible();
		me.__620px_.logicBlock_visible();
		me.__480px_.logicBlock_visible();
		me.__620_.logicBlock_visible();
		me.__320px_1.logicBlock_visible();
		me.__503px_1.logicBlock_visible();
		me.__35.logicBlock_position();
		me.__35.logicBlock_size();
		me.__35.logicBlock_visible();
		me.__123.logicBlock_borderradius();
		me._iframe_11.logicBlock_size();
		me.__34.logicBlock_position();
		me.__34.logicBlock_size();
		me.__34.logicBlock_visible();
		me.__119.logicBlock_borderradius();
		me._iframe_10.logicBlock_size();
		me.__33.logicBlock_position();
		me.__33.logicBlock_size();
		me.__33.logicBlock_visible();
		me.__115.logicBlock_borderradius();
		me._iframe_1.logicBlock_size();
		me.__32.logicBlock_position();
		me.__32.logicBlock_size();
		me.__32.logicBlock_visible();
		me.__111.logicBlock_borderradius();
		me.__box_1.logicBlock_size();
		me.__header.logicBlock_visible();
		me.__17.logicBlock_visible();
		me.__16.logicBlock_visible();
		me.__6.logicBlock_visible();
		me._svg_12.logicBlock_visible();
		me._svg_3_1.logicBlock_visible();
		me.__10.logicBlock_visible();
		me.__5.logicBlock_visible();
		me._pc_3.logicBlock_visible();
		me._pc_10.logicBlock_position();
		me._pc_1.logicBlock_visible();
		me._svg_3.logicBlock_visible();
		me._svg_9.logicBlock_visible();
		me._pc_.logicBlock_visible();
		me.__1.logicBlock_visible();
		player.addListener('activehotspotchanged', function(event) {
			if (hotspotTemplates.hasOwnProperty('ht_node')) {
				for(var i = 0; i < hotspotTemplates['ht_node'].length; i++) {
					hotspotTemplates['ht_node'][i].ggEvent_activehotspotchanged();
				}
			}
			me._pc_10.logicBlock_position();
		});
		player.addListener('changenode', function(event) {
			if (hotspotTemplates.hasOwnProperty('집꾸미기버튼-단열필름')) {
				for(var i = 0; i < hotspotTemplates['집꾸미기버튼-단열필름'].length; i++) {
					hotspotTemplates['집꾸미기버튼-단열필름'][i].ggEvent_changenode();
				}
			}
			if (hotspotTemplates.hasOwnProperty('집꾸미기버튼-매트')) {
				for(var i = 0; i < hotspotTemplates['집꾸미기버튼-매트'].length; i++) {
					hotspotTemplates['집꾸미기버튼-매트'][i].ggEvent_changenode();
				}
			}
			if (hotspotTemplates.hasOwnProperty('집꾸미기-에어컨')) {
				for(var i = 0; i < hotspotTemplates['집꾸미기-에어컨'].length; i++) {
					hotspotTemplates['집꾸미기-에어컨'][i].ggEvent_changenode();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_node')) {
				for(var i = 0; i < hotspotTemplates['ht_node'].length; i++) {
					hotspotTemplates['ht_node'][i].ggEvent_changenode();
				}
			}
			if (hotspotTemplates.hasOwnProperty('집꾸미기버튼-단열필름_모바일')) {
				for(var i = 0; i < hotspotTemplates['집꾸미기버튼-단열필름_모바일'].length; i++) {
					hotspotTemplates['집꾸미기버튼-단열필름_모바일'][i].ggEvent_changenode();
				}
			}
			if (hotspotTemplates.hasOwnProperty('집꾸미기버튼-매트_모바일')) {
				for(var i = 0; i < hotspotTemplates['집꾸미기버튼-매트_모바일'].length; i++) {
					hotspotTemplates['집꾸미기버튼-매트_모바일'][i].ggEvent_changenode();
				}
			}
			if (hotspotTemplates.hasOwnProperty('집꾸미기-에어컨_모바일')) {
				for(var i = 0; i < hotspotTemplates['집꾸미기-에어컨_모바일'].length; i++) {
					hotspotTemplates['집꾸미기-에어컨_모바일'][i].ggEvent_changenode();
				}
			}
			me.__71.logicBlock_visible();
			me.__66.logicBlock_visible();
			me.__61.logicBlock_visible();
			me.__56.logicBlock_visible();
			me.__51.logicBlock_visible();
			me.__36.logicBlock_position();
			me.__36.logicBlock_visible();
			me.__620px_.ggUpdateConditionNodeChange();
			me.__480px_.ggUpdateConditionNodeChange();
			me.__620_.ggUpdateConditionNodeChange();
			me.__320px_1.ggUpdateConditionNodeChange();
			me.__35.logicBlock_position();
			me.__35.logicBlock_visible();
			me.__34.logicBlock_position();
			me.__34.logicBlock_visible();
			me.__33.logicBlock_position();
			me.__33.logicBlock_visible();
			me.__32.logicBlock_position();
			me.__32.logicBlock_visible();
			me.__6.logicBlock_visible();
			me._svg_12.logicBlock_visible();
			me._svg_3_1.logicBlock_visible();
			me.__10.logicBlock_visible();
			me._pc_10.logicBlock_position();
			me._svg_3.logicBlock_visible();
			me._svg_9.logicBlock_visible();
			me._pc_.logicBlock_visible();
			me._cloner_1.ggUpdateConditionNodeChange();
		});
		player.addListener('configloaded', function(event) {
			if (hotspotTemplates.hasOwnProperty('ht_node')) {
				for(var i = 0; i < hotspotTemplates['ht_node'].length; i++) {
					hotspotTemplates['ht_node'][i].ggEvent_configloaded();
				}
			}
			me.__71.logicBlock_visible();
			me.__66.logicBlock_visible();
			me.__61.logicBlock_visible();
			me.__56.logicBlock_visible();
			me.__51.logicBlock_visible();
			me.__36.logicBlock_position();
			me.__36.logicBlock_visible();
			me._scrollarea_1.ggUpdatePosition();
			me.__35.logicBlock_position();
			me.__35.logicBlock_visible();
			me.__34.logicBlock_position();
			me.__34.logicBlock_visible();
			me.__33.logicBlock_position();
			me.__33.logicBlock_visible();
			me.__32.logicBlock_position();
			me.__32.logicBlock_visible();
			me.__6.logicBlock_visible();
			me._svg_12.logicBlock_visible();
			me._svg_3_1.logicBlock_visible();
			me.__10.logicBlock_visible();
			me._pc_10.logicBlock_position();
			me._svg_3.logicBlock_visible();
			me._svg_9.logicBlock_visible();
			me._pc_.logicBlock_visible();
			me._pcscrollarea_1.ggUpdatePosition();
		});
		player.addListener('sizechanged', function(event) {
			if (hotspotTemplates.hasOwnProperty('집꾸미기버튼-단열필름')) {
				for(var i = 0; i < hotspotTemplates['집꾸미기버튼-단열필름'].length; i++) {
					hotspotTemplates['집꾸미기버튼-단열필름'][i].ggEvent_sizechanged();
				}
			}
			if (hotspotTemplates.hasOwnProperty('집꾸미기버튼-매트')) {
				for(var i = 0; i < hotspotTemplates['집꾸미기버튼-매트'].length; i++) {
					hotspotTemplates['집꾸미기버튼-매트'][i].ggEvent_sizechanged();
				}
			}
			if (hotspotTemplates.hasOwnProperty('집꾸미기-에어컨')) {
				for(var i = 0; i < hotspotTemplates['집꾸미기-에어컨'].length; i++) {
					hotspotTemplates['집꾸미기-에어컨'][i].ggEvent_sizechanged();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_node')) {
				for(var i = 0; i < hotspotTemplates['ht_node'].length; i++) {
					hotspotTemplates['ht_node'][i].ggEvent_sizechanged();
				}
			}
			if (hotspotTemplates.hasOwnProperty('집꾸미기버튼-단열필름_모바일')) {
				for(var i = 0; i < hotspotTemplates['집꾸미기버튼-단열필름_모바일'].length; i++) {
					hotspotTemplates['집꾸미기버튼-단열필름_모바일'][i].ggEvent_sizechanged();
				}
			}
			if (hotspotTemplates.hasOwnProperty('집꾸미기버튼-매트_모바일')) {
				for(var i = 0; i < hotspotTemplates['집꾸미기버튼-매트_모바일'].length; i++) {
					hotspotTemplates['집꾸미기버튼-매트_모바일'][i].ggEvent_sizechanged();
				}
			}
			if (hotspotTemplates.hasOwnProperty('집꾸미기-에어컨_모바일')) {
				for(var i = 0; i < hotspotTemplates['집꾸미기-에어컨_모바일'].length; i++) {
					hotspotTemplates['집꾸미기-에어컨_모바일'][i].ggEvent_sizechanged();
				}
			}
			me.__66.logicBlock_position();
			me.__66.logicBlock_size();
			me.__67.logicBlock_borderradius();
			me._iframe1.logicBlock_size();
			me.__61.logicBlock_position();
			me.__61.logicBlock_size();
			me.__62.logicBlock_borderradius();
			me._iframe0.logicBlock_size();
			me.__56.logicBlock_position();
			me.__56.logicBlock_size();
			me.__57.logicBlock_borderradius();
			me._iframe.logicBlock_size();
			me.__51.logicBlock_position();
			me.__51.logicBlock_size();
			me.__52.logicBlock_borderradius();
			me.__box.logicBlock_size();
			me._pc16.logicBlock_visible();
			me.__620px_.logicBlock_visible();
			me.__480px_.logicBlock_visible();
			me.__620_.logicBlock_visible();
			me.__320px_1.logicBlock_visible();
			me.__503px_1.logicBlock_visible();
			me.__35.logicBlock_size();
			me.__123.logicBlock_borderradius();
			me._iframe_11.logicBlock_size();
			me.__34.logicBlock_size();
			me.__119.logicBlock_borderradius();
			me._iframe_10.logicBlock_size();
			me.__33.logicBlock_size();
			me.__115.logicBlock_borderradius();
			me._iframe_1.logicBlock_size();
			me.__32.logicBlock_size();
			me.__111.logicBlock_borderradius();
			me.__box_1.logicBlock_size();
			me.__header.logicBlock_visible();
			me.__17.logicBlock_visible();
			me.__16.logicBlock_visible();
			me.__6.logicBlock_visible();
			me.__5.logicBlock_visible();
			me._pc_3.logicBlock_visible();
			me._pc_1.logicBlock_visible();
			me.__1.logicBlock_visible();
		});
		player.addListener('varchanged_vis_ad', function(event) {
			me.__61.logicBlock_visible();
			me._svg_3.logicBlock_visible();
			me._svg_9.logicBlock_visible();
		});
		player.addListener('varchanged_vis_ad_m', function(event) {
			me.__34.logicBlock_position();
			me.__34.logicBlock_visible();
			me._svg_12.logicBlock_visible();
			me._svg_3_1.logicBlock_visible();
		});
		player.addListener('varchanged_vis_aptInfo', function(event) {
			me.__35.logicBlock_position();
			me.__35.logicBlock_visible();
		});
		player.addListener('varchanged_vis_aptInfo_pc', function(event) {
			me.__66.logicBlock_visible();
		});
		player.addListener('varchanged_vis_films', function(event) {
			me.__51.logicBlock_visible();
		});
		player.addListener('varchanged_vis_films_m', function(event) {
			me.__32.logicBlock_position();
			me.__32.logicBlock_visible();
		});
		player.addListener('varchanged_vis_hambur', function(event) {
			me.__71.logicBlock_visible();
		});
		player.addListener('varchanged_vis_lanhouse', function(event) {
			me.__56.logicBlock_visible();
		});
		player.addListener('varchanged_vis_lanhouse_m', function(event) {
			me.__33.logicBlock_position();
			me.__33.logicBlock_visible();
		});
		player.addListener('varchanged_vis_logo', function(event) {
			me.__10.logicBlock_visible();
		});
		player.addListener('varchanged_vis_m_roomMove', function(event) {
			me.__36.logicBlock_position();
			me.__36.logicBlock_visible();
			me.__6.logicBlock_visible();
		});
		player.addListener('varchanged_vis_roomMove', function(event) {
			me._pc_.logicBlock_visible();
		});
		player.addListener('viewerinit', function(event) {
			me.__620px_.ggUpdate();
			me.__480px_.ggUpdate();
			me.__620_.ggUpdate();
			me.__320px_1.ggUpdate();
			me.__503px_1.ggUpdate();
			me._cloner_1.ggUpdate();
		});
	};
	function SkinCloner_cloner_1_Class(nodeId, parentScope, ggParent, parameter) {
		var me=this;
		var hs='';
		me.parentScope=parentScope;
		me.ggParent=ggParent;
		me.findElements=skin.findElements;
		me.ggIndex=parameter.index;
		me.ggNodeId=nodeId;
		me.ggTitle=parameter.title;
		me.ggUserdata=skin.player.getNodeUserdata(me.ggNodeId);
		me.ggUserdata.nodeid=me.ggNodeId;
		me.elementMouseDown={};
		me.elementMouseOver={};
			me.__div=document.createElement('div');
			me.__div.setAttribute('style','visibility: inherit; overflow: visible;');
			me.__div.style.position='absolute';
			me.__div.style.left=parameter.left;
			me.__div.style.top=parameter.top;
			me.__div.style.width='';
			me.__div.style.height='';
			me.__div.style.width=parameter.width;
			me.__div.style.height=parameter.height;
			me.__div.ggIsActive = function() {
				return player.getCurrentNode()==me.ggNodeId;
			}
			me.__div.ggElementNodeId=function() {
				return me.ggNodeId;
			}
		el=me._mnodeimage_118a=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._mnodeimage_118a;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		els=me._mnodeimage_118a__img=document.createElement('img');
		els.className='ggskin ggskin_nodeimage';
		if (nodeId) els.setAttribute('src',basePath + "images/mnodeimage_118a_" + nodeId + ".webp");
		el.ggNodeId=nodeId;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		hs+='border-radius: 5px;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_nodeimage';
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="m-NodeImage 1-18A";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_nodeimage ";
		el.ggType='nodeimage';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 77px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 128px;';
		hs+='pointer-events:auto;';
		hs+='margin:20px';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._mnodeimage_118a.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			return this.ggNodeId;
		}
		me._mnodeimage_118a.onclick=function (e) {
			if (me._mnodeimage_118a.isDragging()) return;
			player.openNext("{"+me.ggNodeId+"}","");
			player.setVariableValue('vis_roomMove', false);
		}
		me._mnodeimage_118a.ggUpdatePosition=function (useTransition) {
		}
		el=me._mrectangle_118a=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._mrectangle_118a;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		el.ggId="m-Rectangle 1-18A";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='z-index: 0;';
		hs+='border : 0px solid #000000;';
		hs+='bottom : -37px;';
		hs+='cursor : default;';
		hs+='height : 40px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._mrectangle_118a.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._mrectangle_118a.ggUpdatePosition=function (useTransition) {
		}
		el=me._m_18a=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._m_18a;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		els=me._m_18a__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="m-\uac00\uad6c\uc5c6\uc74c \ubc29\uc774\ub984-18A";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='bottom : 0px;';
		hs+='color : rgba(54,54,54,1);';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : -2px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 12px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+="font-family: \"Noto Sans KR\", sans-serif; font-optical-sizing: auto; font-weight: <weight>; font-style: normal;";
		els.setAttribute('style',hs);
		me._m_18a.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.ggUserdata.title)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._m_18a.ggUpdateText();
		player.addListener('changenode', function() {
			me._m_18a.ggUpdateText();
		});
		el.appendChild(els);
		me._m_18a.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._m_18a.ggUpdatePosition=function (useTransition) {
		}
		me._mrectangle_118a.appendChild(me._m_18a);
		me._mnodeimage_118a.appendChild(me._mrectangle_118a);
		me.__div.appendChild(me._mnodeimage_118a);
	};
	function SkinCloner__503px_1_Class(nodeId, parentScope, ggParent, parameter) {
		var me=this;
		var hs='';
		me.parentScope=parentScope;
		me.ggParent=ggParent;
		me.findElements=skin.findElements;
		me.ggIndex=parameter.index;
		me.ggNodeId=nodeId;
		me.ggTitle=parameter.title;
		me.ggUserdata=skin.player.getNodeUserdata(me.ggNodeId);
		me.ggUserdata.nodeid=me.ggNodeId;
		me.elementMouseDown={};
		me.elementMouseOver={};
			me.__div=document.createElement('div');
			me.__div.setAttribute('style','visibility: inherit; overflow: visible;');
			me.__div.style.position='absolute';
			me.__div.style.left=parameter.left;
			me.__div.style.top=parameter.top;
			me.__div.style.width='';
			me.__div.style.height='';
			me.__div.style.width=parameter.width;
			me.__div.style.height=parameter.height;
			me.__div.ggIsActive = function() {
				return player.getCurrentNode()==me.ggNodeId;
			}
			me.__div.ggElementNodeId=function() {
				return me.ggNodeId;
			}
		el=me._nodeimage_118a=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._nodeimage_118a;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		els=me._nodeimage_118a__img=document.createElement('img');
		els.className='ggskin ggskin_nodeimage';
		if (nodeId) els.setAttribute('src',basePath + "images/nodeimage_118a_" + nodeId + ".webp");
		el.ggNodeId=nodeId;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		hs+='border-radius: 9px;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_nodeimage';
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="\ubaa8\ubc14\uc77c-NodeImage 1-18A";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_nodeimage ";
		el.ggType='nodeimage';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 90px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 160px;';
		hs+='pointer-events:auto;';
		hs+='margin:20px';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._nodeimage_118a.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			return this.ggNodeId;
		}
		me._nodeimage_118a.onclick=function (e) {
			if (me._nodeimage_118a.isDragging()) return;
			player.openNext("{"+me.ggNodeId+"}","");
			player.setVariableValue('vis_m_roomMove', false);
		}
		me._nodeimage_118a.ggUpdatePosition=function (useTransition) {
		}
		el=me._rectangle_118a=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._rectangle_118a;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		el.ggId="\ubaa8\ubc14\uc77c-Rectangle 1-18A";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='z-index: 0;';
		hs+='border : 0px solid #000000;';
		hs+='bottom : -25px;';
		hs+='cursor : default;';
		hs+='height : 40%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._rectangle_118a.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._rectangle_118a.ggUpdatePosition=function (useTransition) {
		}
		el=me.__18a=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me.__18a;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		els=me.__18a__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\ubaa8\ubc14\uc77c-\uac00\uad6c\uc5c6\uc74c \ubc29\uc774\ub984-18A";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='bottom : 0px;';
		hs+='color : rgba(54,54,54,1);';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 11px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+="font-family: \"Noto Sans KR\", sans-serif; font-optical-sizing: auto; font-weight: <weight>; font-style: normal;";
		els.setAttribute('style',hs);
		me.__18a.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.ggUserdata.title)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__18a.ggUpdateText();
		player.addListener('changenode', function() {
			me.__18a.ggUpdateText();
		});
		el.appendChild(els);
		me.__18a.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__18a.ggUpdatePosition=function (useTransition) {
		}
		me._rectangle_118a.appendChild(me.__18a);
		me._nodeimage_118a.appendChild(me._rectangle_118a);
		me.__div.appendChild(me._nodeimage_118a);
	};
	function SkinCloner__320px_1_Class(nodeId, parentScope, ggParent, parameter) {
		var me=this;
		var hs='';
		me.parentScope=parentScope;
		me.ggParent=ggParent;
		me.findElements=skin.findElements;
		me.ggIndex=parameter.index;
		me.ggNodeId=nodeId;
		me.ggTitle=parameter.title;
		me.ggUserdata=skin.player.getNodeUserdata(me.ggNodeId);
		me.ggUserdata.nodeid=me.ggNodeId;
		me.elementMouseDown={};
		me.elementMouseOver={};
			me.__div=document.createElement('div');
			me.__div.setAttribute('style','visibility: inherit; overflow: visible;');
			me.__div.style.position='absolute';
			me.__div.style.left=parameter.left;
			me.__div.style.top=parameter.top;
			me.__div.style.width='';
			me.__div.style.height='';
			me.__div.style.width=parameter.width;
			me.__div.style.height=parameter.height;
			me.__div.ggIsActive = function() {
				return player.getCurrentNode()==me.ggNodeId;
			}
			me.__div.ggElementNodeId=function() {
				return me.ggNodeId;
			}
		el=me._nodeimage_118a0=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._nodeimage_118a0;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		els=me._nodeimage_118a0__img=document.createElement('img');
		els.className='ggskin ggskin_nodeimage';
		if (nodeId) els.setAttribute('src',basePath + "images/nodeimage_118a0_" + nodeId + ".webp");
		el.ggNodeId=nodeId;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		hs+='border-radius: 9px;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_nodeimage';
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="\ubaa8\ubc14\uc77c-NodeImage 1-18A";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_nodeimage ";
		el.ggType='nodeimage';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 89px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 130px;';
		hs+='pointer-events:auto;';
		hs+='margin:20px';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._nodeimage_118a0.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			return this.ggNodeId;
		}
		me._nodeimage_118a0.onclick=function (e) {
			if (me._nodeimage_118a0.isDragging()) return;
			player.openNext("{"+me.ggNodeId+"}","");
			player.setVariableValue('vis_m_roomMove', false);
		}
		me._nodeimage_118a0.ggUpdatePosition=function (useTransition) {
		}
		el=me._rectangle_118a0=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._rectangle_118a0;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		el.ggId="\ubaa8\ubc14\uc77c-Rectangle 1-18A";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='z-index: 0;';
		hs+='border : 0px solid #000000;';
		hs+='bottom : -30px;';
		hs+='cursor : default;';
		hs+='height : 40%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._rectangle_118a0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._rectangle_118a0.ggUpdatePosition=function (useTransition) {
		}
		el=me.__18a0=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me.__18a0;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		els=me.__18a0__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\ubaa8\ubc14\uc77c-\uac00\uad6c\uc5c6\uc74c \ubc29\uc774\ub984-18A";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='bottom : 0px;';
		hs+='color : rgba(54,54,54,1);';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 11px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+="font-family: \"Noto Sans KR\", sans-serif; font-optical-sizing: auto; font-weight: <weight>; font-style: normal;";
		els.setAttribute('style',hs);
		me.__18a0.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.ggUserdata.title)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__18a0.ggUpdateText();
		player.addListener('changenode', function() {
			me.__18a0.ggUpdateText();
		});
		el.appendChild(els);
		me.__18a0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__18a0.ggUpdatePosition=function (useTransition) {
		}
		me._rectangle_118a0.appendChild(me.__18a0);
		me._nodeimage_118a0.appendChild(me._rectangle_118a0);
		me.__div.appendChild(me._nodeimage_118a0);
	};
	function SkinCloner__620__Class(nodeId, parentScope, ggParent, parameter) {
		var me=this;
		var hs='';
		me.parentScope=parentScope;
		me.ggParent=ggParent;
		me.findElements=skin.findElements;
		me.ggIndex=parameter.index;
		me.ggNodeId=nodeId;
		me.ggTitle=parameter.title;
		me.ggUserdata=skin.player.getNodeUserdata(me.ggNodeId);
		me.ggUserdata.nodeid=me.ggNodeId;
		me.elementMouseDown={};
		me.elementMouseOver={};
			me.__div=document.createElement('div');
			me.__div.setAttribute('style','visibility: inherit; overflow: visible;');
			me.__div.style.position='absolute';
			me.__div.style.left=parameter.left;
			me.__div.style.top=parameter.top;
			me.__div.style.width='';
			me.__div.style.height='';
			me.__div.style.width=parameter.width;
			me.__div.style.height=parameter.height;
			me.__div.ggIsActive = function() {
				return player.getCurrentNode()==me.ggNodeId;
			}
			me.__div.ggElementNodeId=function() {
				return me.ggNodeId;
			}
		el=me._nodeimage_118a1=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._nodeimage_118a1;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		els=me._nodeimage_118a1__img=document.createElement('img');
		els.className='ggskin ggskin_nodeimage';
		if (nodeId) els.setAttribute('src',basePath + "images/nodeimage_118a1_" + nodeId + ".webp");
		el.ggNodeId=nodeId;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		hs+='border-radius: 9px;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_nodeimage';
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="\ubaa8\ubc14\uc77c-NodeImage 1-18A";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_nodeimage ";
		el.ggType='nodeimage';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 97px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 190px;';
		hs+='pointer-events:auto;';
		hs+='margin:20px';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._nodeimage_118a1.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			return this.ggNodeId;
		}
		me._nodeimage_118a1.onclick=function (e) {
			if (me._nodeimage_118a1.isDragging()) return;
			player.openNext("{"+me.ggNodeId+"}","");
			player.setVariableValue('vis_m_roomMove', false);
		}
		me._nodeimage_118a1.ggUpdatePosition=function (useTransition) {
		}
		el=me._rectangle_118a1=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._rectangle_118a1;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		el.ggId="\ubaa8\ubc14\uc77c-Rectangle 1-18A";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='z-index: 0;';
		hs+='border : 0px solid #000000;';
		hs+='bottom : -35px;';
		hs+='cursor : default;';
		hs+='height : 40%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._rectangle_118a1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._rectangle_118a1.ggUpdatePosition=function (useTransition) {
		}
		el=me.__18a1=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me.__18a1;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		els=me.__18a1__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\ubaa8\ubc14\uc77c-\uac00\uad6c\uc5c6\uc74c \ubc29\uc774\ub984-18A";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='bottom : 0px;';
		hs+='color : rgba(54,54,54,1);';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 11px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+="font-family: \"Noto Sans KR\", sans-serif; font-optical-sizing: auto; font-weight: <weight>; font-style: normal;";
		els.setAttribute('style',hs);
		me.__18a1.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.ggUserdata.title)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__18a1.ggUpdateText();
		player.addListener('changenode', function() {
			me.__18a1.ggUpdateText();
		});
		el.appendChild(els);
		me.__18a1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__18a1.ggUpdatePosition=function (useTransition) {
		}
		me._rectangle_118a1.appendChild(me.__18a1);
		me._nodeimage_118a1.appendChild(me._rectangle_118a1);
		me.__div.appendChild(me._nodeimage_118a1);
	};
	function SkinCloner__480px__Class(nodeId, parentScope, ggParent, parameter) {
		var me=this;
		var hs='';
		me.parentScope=parentScope;
		me.ggParent=ggParent;
		me.findElements=skin.findElements;
		me.ggIndex=parameter.index;
		me.ggNodeId=nodeId;
		me.ggTitle=parameter.title;
		me.ggUserdata=skin.player.getNodeUserdata(me.ggNodeId);
		me.ggUserdata.nodeid=me.ggNodeId;
		me.elementMouseDown={};
		me.elementMouseOver={};
			me.__div=document.createElement('div');
			me.__div.setAttribute('style','visibility: inherit; overflow: visible;');
			me.__div.style.position='absolute';
			me.__div.style.left=parameter.left;
			me.__div.style.top=parameter.top;
			me.__div.style.width='';
			me.__div.style.height='';
			me.__div.style.width=parameter.width;
			me.__div.style.height=parameter.height;
			me.__div.ggIsActive = function() {
				return player.getCurrentNode()==me.ggNodeId;
			}
			me.__div.ggElementNodeId=function() {
				return me.ggNodeId;
			}
		el=me._nodeimage_118a2=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._nodeimage_118a2;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		els=me._nodeimage_118a2__img=document.createElement('img');
		els.className='ggskin ggskin_nodeimage';
		if (nodeId) els.setAttribute('src',basePath + "images/nodeimage_118a2_" + nodeId + ".webp");
		el.ggNodeId=nodeId;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		hs+='border-radius: 9px;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_nodeimage';
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="\ubaa8\ubc14\uc77c-NodeImage 1-18A";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_nodeimage ";
		el.ggType='nodeimage';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 88px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 140px;';
		hs+='pointer-events:auto;';
		hs+='margin:20px';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._nodeimage_118a2.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			return this.ggNodeId;
		}
		me._nodeimage_118a2.onclick=function (e) {
			if (me._nodeimage_118a2.isDragging()) return;
			player.openNext("{"+me.ggNodeId+"}","");
			player.setVariableValue('vis_m_roomMove', false);
		}
		me._nodeimage_118a2.ggUpdatePosition=function (useTransition) {
		}
		el=me._rectangle_118a2=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._rectangle_118a2;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		el.ggId="\ubaa8\ubc14\uc77c-Rectangle 1-18A";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='z-index: 0;';
		hs+='border : 0px solid #000000;';
		hs+='bottom : -25px;';
		hs+='cursor : default;';
		hs+='height : 40%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._rectangle_118a2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._rectangle_118a2.ggUpdatePosition=function (useTransition) {
		}
		el=me.__18a2=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me.__18a2;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		els=me.__18a2__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\ubaa8\ubc14\uc77c-\uac00\uad6c\uc5c6\uc74c \ubc29\uc774\ub984-18A";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='bottom : -5px;';
		hs+='color : rgba(54,54,54,1);';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 11px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+="font-family: \"Noto Sans KR\", sans-serif; font-optical-sizing: auto; font-weight: <weight>; font-style: normal;";
		els.setAttribute('style',hs);
		me.__18a2.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.ggUserdata.title)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__18a2.ggUpdateText();
		player.addListener('changenode', function() {
			me.__18a2.ggUpdateText();
		});
		el.appendChild(els);
		me.__18a2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__18a2.ggUpdatePosition=function (useTransition) {
		}
		me._rectangle_118a2.appendChild(me.__18a2);
		me._nodeimage_118a2.appendChild(me._rectangle_118a2);
		me.__div.appendChild(me._nodeimage_118a2);
	};
	function SkinCloner__620px__Class(nodeId, parentScope, ggParent, parameter) {
		var me=this;
		var hs='';
		me.parentScope=parentScope;
		me.ggParent=ggParent;
		me.findElements=skin.findElements;
		me.ggIndex=parameter.index;
		me.ggNodeId=nodeId;
		me.ggTitle=parameter.title;
		me.ggUserdata=skin.player.getNodeUserdata(me.ggNodeId);
		me.ggUserdata.nodeid=me.ggNodeId;
		me.elementMouseDown={};
		me.elementMouseOver={};
			me.__div=document.createElement('div');
			me.__div.setAttribute('style','visibility: inherit; overflow: visible;');
			me.__div.style.position='absolute';
			me.__div.style.left=parameter.left;
			me.__div.style.top=parameter.top;
			me.__div.style.width='';
			me.__div.style.height='';
			me.__div.style.width=parameter.width;
			me.__div.style.height=parameter.height;
			me.__div.ggIsActive = function() {
				return player.getCurrentNode()==me.ggNodeId;
			}
			me.__div.ggElementNodeId=function() {
				return me.ggNodeId;
			}
		el=me._nodeimage_118a3=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._nodeimage_118a3;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		els=me._nodeimage_118a3__img=document.createElement('img');
		els.className='ggskin ggskin_nodeimage';
		if (nodeId) els.setAttribute('src',basePath + "images/nodeimage_118a3_" + nodeId + ".webp");
		el.ggNodeId=nodeId;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		hs+='border-radius: 9px;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_nodeimage';
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="\ubaa8\ubc14\uc77c-NodeImage 1-18A";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_nodeimage ";
		el.ggType='nodeimage';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 90px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 180px;';
		hs+='pointer-events:auto;';
		hs+='margin:20px';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._nodeimage_118a3.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			return this.ggNodeId;
		}
		me._nodeimage_118a3.onclick=function (e) {
			if (me._nodeimage_118a3.isDragging()) return;
			player.openNext("{"+me.ggNodeId+"}","");
			player.setVariableValue('vis_m_roomMove', false);
		}
		me._nodeimage_118a3.ggUpdatePosition=function (useTransition) {
		}
		el=me._rectangle_118a3=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._rectangle_118a3;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		el.ggId="\ubaa8\ubc14\uc77c-Rectangle 1-18A";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='z-index: 0;';
		hs+='border : 0px solid #000000;';
		hs+='bottom : -35px;';
		hs+='cursor : default;';
		hs+='height : 40%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._rectangle_118a3.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._rectangle_118a3.ggUpdatePosition=function (useTransition) {
		}
		el=me.__18a3=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me.__18a3;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		els=me.__18a3__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\ubaa8\ubc14\uc77c-\uac00\uad6c\uc5c6\uc74c \ubc29\uc774\ub984-18A";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='bottom : 0px;';
		hs+='color : rgba(54,54,54,1);';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 11px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+="font-family: \"Noto Sans KR\", sans-serif; font-optical-sizing: auto; font-weight: <weight>; font-style: normal;";
		els.setAttribute('style',hs);
		me.__18a3.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.ggUserdata.title)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__18a3.ggUpdateText();
		player.addListener('changenode', function() {
			me.__18a3.ggUpdateText();
		});
		el.appendChild(els);
		me.__18a3.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__18a3.ggUpdatePosition=function (useTransition) {
		}
		me._rectangle_118a3.appendChild(me.__18a3);
		me._nodeimage_118a3.appendChild(me._rectangle_118a3);
		me.__div.appendChild(me._nodeimage_118a3);
	};
	function SkinHotspotClass__27(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown={};
		me.elementMouseOver={};
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me.__27=document.createElement('div');
		el.ggId="\uc9d1\uafb8\ubbf8\uae30-\uc5d0\uc5b4\ucee8_\ubaa8\ubc14\uc77c";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 282px;';
		hs+='position : absolute;';
		hs+='top : 43px;';
		hs+='visibility : hidden;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__27.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me.__27.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getViewerSize(true).width <= 1120))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__27.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__27.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__27.style.transition='';
				if (me.__27.ggCurrentLogicStateVisible == 0) {
					me.__27.style.visibility=(Number(me.__27.style.opacity)>0||!me.__27.style.opacity)?'inherit':'hidden';
					me.__27.ggVisible=true;
				}
				else {
					me.__27.style.visibility="hidden";
					me.__27.ggVisible=false;
				}
			}
		}
		me.__27.logicBlock_visible();
		me.__27.onclick=function (e) {
			player.triggerEvent('hsproxyclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me.__27.ondblclick=function (e) {
			player.triggerEvent('hsproxydblclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me.__27.onmouseenter=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['_27']=true;
			player.triggerEvent('hsproxyover', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me.__27.onmouseleave=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['_27']=false;
			player.triggerEvent('hsproxyout', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me.__27.ggUpdatePosition=function (useTransition) {
		}
		el=me._external_2_1=document.createElement('div');
		els=me._external_2_1__img=document.createElement('img');
		els.className='ggskin ggskin_external';
		hs ='';
		hs += 'position: absolute;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.onload=function() {me._external_2_1.ggUpdatePosition();}
		el.appendChild(els);
		el.ggSubElement = els;
		hs ='';
		el.ggAltText="";
		el.ggScrollbars=false;
		el.ggUpdateText = function() {
			me._external_2_1.ggSubElement.setAttribute('alt', player._(me._external_2_1.ggAltText));
			me._external_2_1.ggUpdateImageTranslation();
		}
		el.ggSetImage = function(img) {
			me._external_2_1.ggText_untranslated = img;
			me._external_2_1.ggUpdateImageTranslation();
		}
		el.ggUpdateImage = function() {
			me._external_2_1.ggSubElement.style.width = '0px';
			me._external_2_1.ggSubElement.style.height = '0px';
			me._external_2_1.ggSubElement.src='';
			me._external_2_1.ggSubElement.src=me._external_2_1.ggText;
		}
		el.ggUpdateImageTranslation = function() {
			if (me._external_2_1.ggText != player._(me._external_2_1.ggText_untranslated)) {
				me._external_2_1.ggText = player._(me._external_2_1.ggText_untranslated);
				me._external_2_1.ggUpdateImage()
			}
		}
		if ((hotspot) && (hotspot.customimage)) {
			el.ggText=el.ggText_untranslated=hotspot.customimage;
			els.setAttribute('src', hotspot.customimage);
			els.style.width=hotspot.customimagewidth + 'px';
			els.style.height=hotspot.customimageheight + 'px';
			me.ggUse3d = hotspot.use3D;
			me.gg3dDistance = hotspot.distance3D;
		}
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.ggUpdateText();
		el.ggId="External 2_1";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_external ";
		el.ggType='external';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : pointer;';
		hs+='height : 20px;';
		hs+='left : calc(50% - ((100px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((20px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._external_2_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._external_2_1.ggUpdatePosition=function (useTransition) {
			var parentWidth = me._external_2_1.clientWidth;
			var parentHeight = me._external_2_1.clientHeight;
			var img = me._external_2_1__img;
			var aspectRatioDiv = me._external_2_1.clientWidth / me._external_2_1.clientHeight;
			var aspectRatioImg = img.naturalWidth / img.naturalHeight;
			if (img.naturalWidth < parentWidth) parentWidth = img.naturalWidth;
			if (img.naturalHeight < parentHeight) parentHeight = img.naturalHeight;
			var currentWidth,currentHeight;
			if ((hotspot) && (hotspot.customimage)) {
				currentWidth  = hotspot.customimagewidth;
				currentHeight = hotspot.customimageheight;
			}
			if (!me._external_2_1.ggScrollbars || currentWidth < me._external_2_1.clientWidth) {
				img.style.right='';
				img.style.left='0px';
			} else {
				img.style.right='';
				img.style.left='0px';
				img.style.marginLeft='0px';
			}
			if (!me._external_2_1.ggScrollbars || currentHeight < me._external_2_1.clientHeight) {
				img.style.bottom='';
				img.style.top='0px';
			} else {
				img.style.bottom='';
				img.style.top='0px';
				img.style.marginTop='0px';
			}
		}
		el=me.__110=document.createElement('div');
		el.ggId="\uc9d1\uafb8\ubbf8\uae30\ucee8\ud14c\uc774\ub108-\uc5d0\uc5b4\ucee811";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 50px;';
		hs+='left : calc(50% - ((50px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((50px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__110.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me.__110.onclick=function (e) {
				skin.__112.ggUpdateText=function() {
					var params = [];
					var hs = player._("<iframe src=\"https:\/\/dokyoung-an.github.io\/urihome\/aircon\" width=\"100%\" height=\"100%\" allowfullscreen=\"true\" mozallowfullscreen=\"true\" webkitallowfullscreen=\"true\" frameborder= \"0\" ><\/iframe>", params);
					if (hs!=this.ggText) {
						this.ggText=hs;
						this.ggTextDiv.innerHTML=hs;
						if (this.ggUpdatePosition) this.ggUpdatePosition();
					}
				}
			skin.__112.ggUpdateText();
			skin.__112.ggTextDiv.scrollTop = 0;
			player.setVariableValue('vis_films_m', true);
		}
		me.__110.ggUpdatePosition=function (useTransition) {
		}
		el=me.__3_1=document.createElement('div');
		el.ggId="3\ubc88\uc9f8\uc6d0_1";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:0.85,sy:0.85,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(255,255,255,0.313726);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 50px;';
		hs+='cursor : pointer;';
		hs+='height : 40px;';
		hs+='left : calc(50% - ((40px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((40px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 40px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		el.style.transform=parameterToTransform(el.ggParameter);
		me.__3_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me.__3_1.ggUpdatePosition=function (useTransition) {
		}
		me.__110.appendChild(me.__3_1);
		el=me._rectangle_5=document.createElement('div');
		el.ggId="Rectangle 5";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:0.85,sy:0.85,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'background-clip : padding-box;';
		hs+='background-clip : padding-box;';
		hs+='background : #0057ff;';
		hs+='border : 0px solid rgba(226,94,37,0.784314);';
		hs+='border-radius : 50px;';
		hs+='height : 80%;';
		hs+='left : calc(50% - ((40px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((80% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 40px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		el.style.transform=parameterToTransform(el.ggParameter);
		me._rectangle_5.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._rectangle_5.ggUpdatePosition=function (useTransition) {
		}
		el=me._svg_16=document.createElement('div');
		els=me._svg_16__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIGhlaWdodD0iMjkiIHdpZHRoPSIzMSIgdmlld0JveD0iMCAwIDMxIDI5Ij4KIDxwYXRoIHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLXdpZHRoPSIxLjUiIGQ9Ik0yMC40NDY2IDI2LjQxMDhDMTkuOTAzNyAyNy4xODE2IDE5LjYzMjIgMjcuNTY3IDE5LjIyNDEgMjcuNjM3OEMxOC44MTYgMjcuNzA4NiAxOC40MzA2IDI3LjQzNzEgMTcuNjU5OCAyNi44OTQyTDQuNDU2NzUgMTcuNTk0OUM0LjEzODUgMTcuMzcwNyAzLjk3OTM3IDE3LjI1ODYgMy44NzUwMSAxNy4xQzMuNzcwNjQgMTYuOTQxMyAzLjczMDc0ID'+
			'E2Ljc1MDggMy42NTA5MiAxNi4zNjk4TDEuMzAyMDkgNS4xNTc2NUMxLjA5NjE0IDQuMTc0NTIgMC45OTMxNTkgMy42ODI5NSAxLjI0MzQ4IDMuMzI3NTVDMS40OTM4IDIuOTcyMTUgMS45OTEzMyAyLjkwMzU0IDIuOTg2MzkgMi43NjYzMkwxNC4zMzQ1IDEuMjAxNDFDMTQuNzIwMiAxLjE0ODIzIDE0LjkxMyAxLjEyMTY0IDE1LjA5NzUgMS4xNjY0N0MxNS4yODIxIDEuMjExMjkgMTUuNDQxMiAxLjMyMzM3IDE1Ljc1OTQgMS41NDc1M0wyOC45NjI1IDEwLjg0NjlDMjkuNzMzMyAxMS4zODk4IDMwLjExODcgMTEuNjYxMiAzMC4xODk1IDEyLjA2OTRDMzAuMjYwMyAxMi40Nzc1IDI5Ljk4ODggMTIu'+
			'ODYyOSAyOS40NDU5IDEzLjYzMzdMMjAuNDQ2NiAyNi40MTA4WiIgc3Ryb2tlLW9wYWNpdHk9IjEiLz4KPC9zdmc+Cg==';
		me._svg_16__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Svg 16";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 18px;';
		hs+='left : calc(50% - ((20px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((18px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 20px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._svg_16.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._svg_16.ggUpdatePosition=function (useTransition) {
		}
		me._rectangle_5.appendChild(me._svg_16);
		me.__110.appendChild(me._rectangle_5);
		el=me._timer_31_1=document.createElement('div');
		el.ggTimestamp=skin.ggCurrentTime;
		el.ggLastIsActive=true;
		el.ggTimeout=800;
		el.ggId="Timer 3-1_1";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_timer ";
		el.ggType='timer';
		hs ='';
		hs+='height : 7px;';
		hs+='left : calc(50% - ((100px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((7px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._timer_31_1.ggIsActive=function() {
			return (me._timer_31_1.ggTimestamp==0 ? false : (Math.floor((skin.ggCurrentTime - me._timer_31_1.ggTimestamp) / me._timer_31_1.ggTimeout) % 2 == 0));
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._timer_31_1.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me._timer_31_1.ggIsActive() == false))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._timer_31_1.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._timer_31_1.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._timer_31_1.style.transition='';
				if (me._timer_31_1.ggCurrentLogicStateVisible == 0) {
					me._timer_31_1.style.visibility="hidden";
					me._timer_31_1.ggVisible=false;
				}
				else {
					me._timer_31_1.style.visibility=(Number(me._timer_31_1.style.opacity)>0||!me._timer_31_1.style.opacity)?'inherit':'hidden';
					me._timer_31_1.ggVisible=true;
				}
			}
		}
		me._timer_31_1.logicBlock_visible();
		me._timer_31_1.ggActivate=function () {
			var flag=me.__3_1.ggScaleActive;
			if (player.transitionsDisabled) {
				me.__3_1.style.transition='none';
			} else {
				me.__3_1.style.transition='all 500ms linear 0ms';
			}
			if (flag) {
				me.__3_1.ggParameter.sx=0.85;me.__3_1.ggParameter.sy=0.85;
			} else {
				me.__3_1.ggParameter.sx=1.2;me.__3_1.ggParameter.sy=1.2;
			}
			me.__3_1.ggScaleActive=!flag;
				me.__3_1.style.transform=parameterToTransform(me.__3_1.ggParameter);
			setTimeout(function() {skin.updateSize(me.__3_1);}, 550);
		}
		me._timer_31_1.ggCurrentLogicStateVisible = -1;
		me._timer_31_1.ggUpdateConditionTimer=function () {
			me._timer_31_1.logicBlock_visible();
		}
		me._timer_31_1.ggUpdatePosition=function (useTransition) {
		}
		me.__110.appendChild(me._timer_31_1);
		me._external_2_1.appendChild(me.__110);
		me.__27.appendChild(me._external_2_1);
		me.__27.logicBlock_visible();
		me.elementMouseOver['_27']=false;
		if ((hotspot) && (hotspot.customimage)) {
			me._external_2_1.style.width=hotspot.customimagewidth + 'px';
			me._external_2_1.style.height=hotspot.customimageheight + 'px';
			let d = 0;
			me._external_2_1.style.left='calc(50% - ' + ((hotspot.customimagewidth)/2 + 0) +'px' + ((d<0) ? ' - ' : ' + ') + d + 'px)';
			d = 0;
			me._external_2_1.style.top='calc(50% - ' + ((hotspot.customimageheight)/2 + 0) +'px' + ((d<0) ? ' - ' : ' + ') + d + 'px)';
		}
		me._timer_31_1.logicBlock_visible();
			me.ggEvent_changenode=function() {
				me._timer_31_1.logicBlock_visible();
			};
			me.ggEvent_sizechanged=function() {
				me.__27.logicBlock_visible();
			};
			me.hotspotTimerEvent=function() {
				me._timer_31_1.ggUpdateConditionTimer();
				if (me._timer_31_1.ggLastIsActive!=me._timer_31_1.ggIsActive()) {
					me._timer_31_1.ggLastIsActive=me._timer_31_1.ggIsActive();
					if (me._timer_31_1.ggLastIsActive) {
						var flag=me.__3_1.ggScaleActive;
						if (player.transitionsDisabled) {
							me.__3_1.style.transition='none';
						} else {
							me.__3_1.style.transition='all 500ms linear 0ms';
						}
						if (flag) {
							me.__3_1.ggParameter.sx=0.85;me.__3_1.ggParameter.sy=0.85;
						} else {
							me.__3_1.ggParameter.sx=1.2;me.__3_1.ggParameter.sy=1.2;
						}
						me.__3_1.ggScaleActive=!flag;
							me.__3_1.style.transform=parameterToTransform(me.__3_1.ggParameter);
						setTimeout(function() {skin.updateSize(me.__3_1);}, 550);
					} else {
					}
				}
			}
			me.hotspotTimerEvent();
			me.__div = me.__27;
	};
	function SkinHotspotClass__28(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown={};
		me.elementMouseOver={};
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me.__28=document.createElement('div');
		el.ggId="\uc9d1\uafb8\ubbf8\uae30\ubc84\ud2bc-\ub9e4\ud2b8_\ubaa8\ubc14\uc77c";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 282px;';
		hs+='position : absolute;';
		hs+='top : 43px;';
		hs+='visibility : hidden;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__28.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me.__28.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getViewerSize(true).width <= 1120))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__28.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__28.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__28.style.transition='';
				if (me.__28.ggCurrentLogicStateVisible == 0) {
					me.__28.style.visibility=(Number(me.__28.style.opacity)>0||!me.__28.style.opacity)?'inherit':'hidden';
					me.__28.ggVisible=true;
				}
				else {
					me.__28.style.visibility="hidden";
					me.__28.ggVisible=false;
				}
			}
		}
		me.__28.logicBlock_visible();
		me.__28.onclick=function (e) {
			player.triggerEvent('hsproxyclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me.__28.ondblclick=function (e) {
			player.triggerEvent('hsproxydblclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me.__28.onmouseenter=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['_28']=true;
			player.triggerEvent('hsproxyover', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me.__28.onmouseleave=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['_28']=false;
			player.triggerEvent('hsproxyout', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me.__28.ggUpdatePosition=function (useTransition) {
		}
		el=me._external_2=document.createElement('div');
		els=me._external_2__img=document.createElement('img');
		els.className='ggskin ggskin_external';
		hs ='';
		hs += 'position: absolute;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.onload=function() {me._external_2.ggUpdatePosition();}
		el.appendChild(els);
		el.ggSubElement = els;
		hs ='';
		el.ggAltText="";
		el.ggScrollbars=false;
		el.ggUpdateText = function() {
			me._external_2.ggSubElement.setAttribute('alt', player._(me._external_2.ggAltText));
			me._external_2.ggUpdateImageTranslation();
		}
		el.ggSetImage = function(img) {
			me._external_2.ggText_untranslated = img;
			me._external_2.ggUpdateImageTranslation();
		}
		el.ggUpdateImage = function() {
			me._external_2.ggSubElement.style.width = '0px';
			me._external_2.ggSubElement.style.height = '0px';
			me._external_2.ggSubElement.src='';
			me._external_2.ggSubElement.src=me._external_2.ggText;
		}
		el.ggUpdateImageTranslation = function() {
			if (me._external_2.ggText != player._(me._external_2.ggText_untranslated)) {
				me._external_2.ggText = player._(me._external_2.ggText_untranslated);
				me._external_2.ggUpdateImage()
			}
		}
		if ((hotspot) && (hotspot.customimage)) {
			el.ggText=el.ggText_untranslated=hotspot.customimage;
			els.setAttribute('src', hotspot.customimage);
			els.style.width=hotspot.customimagewidth + 'px';
			els.style.height=hotspot.customimageheight + 'px';
			me.ggUse3d = hotspot.use3D;
			me.gg3dDistance = hotspot.distance3D;
		}
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.ggUpdateText();
		el.ggId="External 2";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_external ";
		el.ggType='external';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : pointer;';
		hs+='height : 20px;';
		hs+='left : calc(50% - ((100px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((20px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._external_2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._external_2.ggUpdatePosition=function (useTransition) {
			var parentWidth = me._external_2.clientWidth;
			var parentHeight = me._external_2.clientHeight;
			var img = me._external_2__img;
			var aspectRatioDiv = me._external_2.clientWidth / me._external_2.clientHeight;
			var aspectRatioImg = img.naturalWidth / img.naturalHeight;
			if (img.naturalWidth < parentWidth) parentWidth = img.naturalWidth;
			if (img.naturalHeight < parentHeight) parentHeight = img.naturalHeight;
			var currentWidth,currentHeight;
			if ((hotspot) && (hotspot.customimage)) {
				currentWidth  = hotspot.customimagewidth;
				currentHeight = hotspot.customimageheight;
			}
			if (!me._external_2.ggScrollbars || currentWidth < me._external_2.clientWidth) {
				img.style.right='';
				img.style.left='0px';
			} else {
				img.style.right='';
				img.style.left='0px';
				img.style.marginLeft='0px';
			}
			if (!me._external_2.ggScrollbars || currentHeight < me._external_2.clientHeight) {
				img.style.bottom='';
				img.style.top='0px';
			} else {
				img.style.bottom='';
				img.style.top='0px';
				img.style.marginTop='0px';
			}
		}
		el=me.__29=document.createElement('div');
		el.ggId="\uc9d1\uafb8\ubbf8\uae30\ucee8\ud14c\uc774\ub108-\ub2e8\uc5f4\ud544\ub984";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 50px;';
		hs+='left : calc(50% - ((50px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((50px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__29.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me.__29.onclick=function (e) {
				skin.__112.ggUpdateText=function() {
					var params = [];
					var hs = player._("<iframe src=\"https:\/\/dokyoung-an.github.io\/urihome\/mat\" width=\"100%\" height=\"100%\" allowfullscreen=\"true\" mozallowfullscreen=\"true\" webkitallowfullscreen=\"true\" frameborder= \"0\" ><\/iframe>", params);
					if (hs!=this.ggText) {
						this.ggText=hs;
						this.ggTextDiv.innerHTML=hs;
						if (this.ggUpdatePosition) this.ggUpdatePosition();
					}
				}
			skin.__112.ggUpdateText();
			skin.__112.ggTextDiv.scrollTop = 0;
			player.setVariableValue('vis_films_m', true);
		}
		me.__29.ggUpdatePosition=function (useTransition) {
		}
		el=me.__3_10=document.createElement('div');
		el.ggId="3\ubc88\uc9f8\uc6d0_1";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:0.85,sy:0.85,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(255,255,255,0.313726);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 50px;';
		hs+='cursor : pointer;';
		hs+='height : 40px;';
		hs+='left : calc(50% - ((40px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((40px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 40px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		el.style.transform=parameterToTransform(el.ggParameter);
		me.__3_10.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me.__3_10.ggUpdatePosition=function (useTransition) {
		}
		me.__29.appendChild(me.__3_10);
		el=me._rectangle_50=document.createElement('div');
		el.ggId="Rectangle 5";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:0.85,sy:0.85,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'background-clip : padding-box;';
		hs+='background-clip : padding-box;';
		hs+='background : #0057ff;';
		hs+='border : 0px solid rgba(226,94,37,0.784314);';
		hs+='border-radius : 50px;';
		hs+='height : 80%;';
		hs+='left : calc(50% - ((40px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((80% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 40px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		el.style.transform=parameterToTransform(el.ggParameter);
		me._rectangle_50.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._rectangle_50.ggUpdatePosition=function (useTransition) {
		}
		el=me._svg_160=document.createElement('div');
		els=me._svg_160__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIGhlaWdodD0iMjkiIHdpZHRoPSIzMSIgdmlld0JveD0iMCAwIDMxIDI5Ij4KIDxwYXRoIHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLXdpZHRoPSIxLjUiIGQ9Ik0yMC40NDY2IDI2LjQxMDhDMTkuOTAzNyAyNy4xODE2IDE5LjYzMjIgMjcuNTY3IDE5LjIyNDEgMjcuNjM3OEMxOC44MTYgMjcuNzA4NiAxOC40MzA2IDI3LjQzNzEgMTcuNjU5OCAyNi44OTQyTDQuNDU2NzUgMTcuNTk0OUM0LjEzODUgMTcuMzcwNyAzLjk3OTM3IDE3LjI1ODYgMy44NzUwMSAxNy4xQzMuNzcwNjQgMTYuOTQxMyAzLjczMDc0ID'+
			'E2Ljc1MDggMy42NTA5MiAxNi4zNjk4TDEuMzAyMDkgNS4xNTc2NUMxLjA5NjE0IDQuMTc0NTIgMC45OTMxNTkgMy42ODI5NSAxLjI0MzQ4IDMuMzI3NTVDMS40OTM4IDIuOTcyMTUgMS45OTEzMyAyLjkwMzU0IDIuOTg2MzkgMi43NjYzMkwxNC4zMzQ1IDEuMjAxNDFDMTQuNzIwMiAxLjE0ODIzIDE0LjkxMyAxLjEyMTY0IDE1LjA5NzUgMS4xNjY0N0MxNS4yODIxIDEuMjExMjkgMTUuNDQxMiAxLjMyMzM3IDE1Ljc1OTQgMS41NDc1M0wyOC45NjI1IDEwLjg0NjlDMjkuNzMzMyAxMS4zODk4IDMwLjExODcgMTEuNjYxMiAzMC4xODk1IDEyLjA2OTRDMzAuMjYwMyAxMi40Nzc1IDI5Ljk4ODggMTIu'+
			'ODYyOSAyOS40NDU5IDEzLjYzMzdMMjAuNDQ2NiAyNi40MTA4WiIgc3Ryb2tlLW9wYWNpdHk9IjEiLz4KPC9zdmc+Cg==';
		me._svg_160__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Svg 16";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 18px;';
		hs+='left : calc(50% - ((20px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((18px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 20px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._svg_160.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._svg_160.ggUpdatePosition=function (useTransition) {
		}
		me._rectangle_50.appendChild(me._svg_160);
		me.__29.appendChild(me._rectangle_50);
		el=me._timer_31_1_1=document.createElement('div');
		el.ggTimestamp=skin.ggCurrentTime;
		el.ggLastIsActive=true;
		el.ggTimeout=800;
		el.ggId="Timer 3-1_1_1";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_timer ";
		el.ggType='timer';
		hs ='';
		hs+='height : 7px;';
		hs+='left : calc(50% - ((100px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((7px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._timer_31_1_1.ggIsActive=function() {
			return (me._timer_31_1_1.ggTimestamp==0 ? false : (Math.floor((skin.ggCurrentTime - me._timer_31_1_1.ggTimestamp) / me._timer_31_1_1.ggTimeout) % 2 == 0));
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._timer_31_1_1.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me._timer_31_1_1.ggIsActive() == false))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._timer_31_1_1.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._timer_31_1_1.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._timer_31_1_1.style.transition='';
				if (me._timer_31_1_1.ggCurrentLogicStateVisible == 0) {
					me._timer_31_1_1.style.visibility="hidden";
					me._timer_31_1_1.ggVisible=false;
				}
				else {
					me._timer_31_1_1.style.visibility=(Number(me._timer_31_1_1.style.opacity)>0||!me._timer_31_1_1.style.opacity)?'inherit':'hidden';
					me._timer_31_1_1.ggVisible=true;
				}
			}
		}
		me._timer_31_1_1.logicBlock_visible();
		me._timer_31_1_1.ggActivate=function () {
			var flag=me.__3_10.ggScaleActive;
			if (player.transitionsDisabled) {
				me.__3_10.style.transition='none';
			} else {
				me.__3_10.style.transition='all 500ms linear 0ms';
			}
			if (flag) {
				me.__3_10.ggParameter.sx=0.85;me.__3_10.ggParameter.sy=0.85;
			} else {
				me.__3_10.ggParameter.sx=1.2;me.__3_10.ggParameter.sy=1.2;
			}
			me.__3_10.ggScaleActive=!flag;
				me.__3_10.style.transform=parameterToTransform(me.__3_10.ggParameter);
			setTimeout(function() {skin.updateSize(me.__3_10);}, 550);
		}
		me._timer_31_1_1.ggCurrentLogicStateVisible = -1;
		me._timer_31_1_1.ggUpdateConditionTimer=function () {
			me._timer_31_1_1.logicBlock_visible();
		}
		me._timer_31_1_1.ggUpdatePosition=function (useTransition) {
		}
		me.__29.appendChild(me._timer_31_1_1);
		me._external_2.appendChild(me.__29);
		me.__28.appendChild(me._external_2);
		me.__28.logicBlock_visible();
		me.elementMouseOver['_28']=false;
		if ((hotspot) && (hotspot.customimage)) {
			me._external_2.style.width=hotspot.customimagewidth + 'px';
			me._external_2.style.height=hotspot.customimageheight + 'px';
			let d = 0;
			me._external_2.style.left='calc(50% - ' + ((hotspot.customimagewidth)/2 + 0) +'px' + ((d<0) ? ' - ' : ' + ') + d + 'px)';
			d = 0;
			me._external_2.style.top='calc(50% - ' + ((hotspot.customimageheight)/2 + 0) +'px' + ((d<0) ? ' - ' : ' + ') + d + 'px)';
		}
		me._timer_31_1_1.logicBlock_visible();
			me.ggEvent_changenode=function() {
				me._timer_31_1_1.logicBlock_visible();
			};
			me.ggEvent_sizechanged=function() {
				me.__28.logicBlock_visible();
			};
			me.hotspotTimerEvent=function() {
				me._timer_31_1_1.ggUpdateConditionTimer();
				if (me._timer_31_1_1.ggLastIsActive!=me._timer_31_1_1.ggIsActive()) {
					me._timer_31_1_1.ggLastIsActive=me._timer_31_1_1.ggIsActive();
					if (me._timer_31_1_1.ggLastIsActive) {
						var flag=me.__3_10.ggScaleActive;
						if (player.transitionsDisabled) {
							me.__3_10.style.transition='none';
						} else {
							me.__3_10.style.transition='all 500ms linear 0ms';
						}
						if (flag) {
							me.__3_10.ggParameter.sx=0.85;me.__3_10.ggParameter.sy=0.85;
						} else {
							me.__3_10.ggParameter.sx=1.2;me.__3_10.ggParameter.sy=1.2;
						}
						me.__3_10.ggScaleActive=!flag;
							me.__3_10.style.transform=parameterToTransform(me.__3_10.ggParameter);
						setTimeout(function() {skin.updateSize(me.__3_10);}, 550);
					} else {
					}
				}
			}
			me.hotspotTimerEvent();
			me.__div = me.__28;
	};
	function SkinHotspotClass__30(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown={};
		me.elementMouseOver={};
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me.__30=document.createElement('div');
		el.ggId="\uc9d1\uafb8\ubbf8\uae30\ubc84\ud2bc-\ub2e8\uc5f4\ud544\ub984_\ubaa8\ubc14\uc77c";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 282px;';
		hs+='position : absolute;';
		hs+='top : 43px;';
		hs+='visibility : hidden;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__30.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me.__30.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getViewerSize(true).width <= 1120))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__30.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__30.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__30.style.transition='';
				if (me.__30.ggCurrentLogicStateVisible == 0) {
					me.__30.style.visibility=(Number(me.__30.style.opacity)>0||!me.__30.style.opacity)?'inherit':'hidden';
					me.__30.ggVisible=true;
				}
				else {
					me.__30.style.visibility="hidden";
					me.__30.ggVisible=false;
				}
			}
		}
		me.__30.logicBlock_visible();
		me.__30.onclick=function (e) {
			player.triggerEvent('hsproxyclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me.__30.ondblclick=function (e) {
			player.triggerEvent('hsproxydblclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me.__30.onmouseenter=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['_30']=true;
			player.triggerEvent('hsproxyover', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me.__30.onmouseleave=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['_30']=false;
			player.triggerEvent('hsproxyout', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me.__30.ggUpdatePosition=function (useTransition) {
		}
		el=me._external_20=document.createElement('div');
		els=me._external_20__img=document.createElement('img');
		els.className='ggskin ggskin_external';
		hs ='';
		hs += 'position: absolute;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.onload=function() {me._external_20.ggUpdatePosition();}
		el.appendChild(els);
		el.ggSubElement = els;
		hs ='';
		el.ggAltText="";
		el.ggScrollbars=false;
		el.ggUpdateText = function() {
			me._external_20.ggSubElement.setAttribute('alt', player._(me._external_20.ggAltText));
			me._external_20.ggUpdateImageTranslation();
		}
		el.ggSetImage = function(img) {
			me._external_20.ggText_untranslated = img;
			me._external_20.ggUpdateImageTranslation();
		}
		el.ggUpdateImage = function() {
			me._external_20.ggSubElement.style.width = '0px';
			me._external_20.ggSubElement.style.height = '0px';
			me._external_20.ggSubElement.src='';
			me._external_20.ggSubElement.src=me._external_20.ggText;
		}
		el.ggUpdateImageTranslation = function() {
			if (me._external_20.ggText != player._(me._external_20.ggText_untranslated)) {
				me._external_20.ggText = player._(me._external_20.ggText_untranslated);
				me._external_20.ggUpdateImage()
			}
		}
		if ((hotspot) && (hotspot.customimage)) {
			el.ggText=el.ggText_untranslated=hotspot.customimage;
			els.setAttribute('src', hotspot.customimage);
			els.style.width=hotspot.customimagewidth + 'px';
			els.style.height=hotspot.customimageheight + 'px';
			me.ggUse3d = hotspot.use3D;
			me.gg3dDistance = hotspot.distance3D;
		}
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.ggUpdateText();
		el.ggId="External 2";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_external ";
		el.ggType='external';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : pointer;';
		hs+='height : 20px;';
		hs+='left : calc(50% - ((100px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((20px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._external_20.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._external_20.ggUpdatePosition=function (useTransition) {
			var parentWidth = me._external_20.clientWidth;
			var parentHeight = me._external_20.clientHeight;
			var img = me._external_20__img;
			var aspectRatioDiv = me._external_20.clientWidth / me._external_20.clientHeight;
			var aspectRatioImg = img.naturalWidth / img.naturalHeight;
			if (img.naturalWidth < parentWidth) parentWidth = img.naturalWidth;
			if (img.naturalHeight < parentHeight) parentHeight = img.naturalHeight;
			var currentWidth,currentHeight;
			if ((hotspot) && (hotspot.customimage)) {
				currentWidth  = hotspot.customimagewidth;
				currentHeight = hotspot.customimageheight;
			}
			if (!me._external_20.ggScrollbars || currentWidth < me._external_20.clientWidth) {
				img.style.right='';
				img.style.left='0px';
			} else {
				img.style.right='';
				img.style.left='0px';
				img.style.marginLeft='0px';
			}
			if (!me._external_20.ggScrollbars || currentHeight < me._external_20.clientHeight) {
				img.style.bottom='';
				img.style.top='0px';
			} else {
				img.style.bottom='';
				img.style.top='0px';
				img.style.marginTop='0px';
			}
		}
		el=me.__31=document.createElement('div');
		el.ggId="\uc9d1\uafb8\ubbf8\uae30\ucee8\ud14c\uc774\ub108-\ub2e8\uc5f4\ud544\ub984";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 50px;';
		hs+='left : calc(50% - ((50px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((50px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__31.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me.__31.onclick=function (e) {
				skin.__112.ggUpdateText=function() {
					var params = [];
					var hs = player._("<iframe src=\"https:\/\/dokyoung-an.github.io\/urihome\/films\" width=\"100%\" height=\"100%\" allowfullscreen=\"true\" mozallowfullscreen=\"true\" webkitallowfullscreen=\"true\" frameborder= \"0\" ><\/iframe>", params);
					if (hs!=this.ggText) {
						this.ggText=hs;
						this.ggTextDiv.innerHTML=hs;
						if (this.ggUpdatePosition) this.ggUpdatePosition();
					}
				}
			skin.__112.ggUpdateText();
			skin.__112.ggTextDiv.scrollTop = 0;
			player.setVariableValue('vis_films_m', true);
		}
		me.__31.ggUpdatePosition=function (useTransition) {
		}
		el=me.__3_11=document.createElement('div');
		el.ggId="3\ubc88\uc9f8\uc6d0_1";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:0.85,sy:0.85,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(255,255,255,0.313726);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 50px;';
		hs+='cursor : pointer;';
		hs+='height : 40px;';
		hs+='left : calc(50% - ((40px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((40px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 40px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		el.style.transform=parameterToTransform(el.ggParameter);
		me.__3_11.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me.__3_11.ggUpdatePosition=function (useTransition) {
		}
		me.__31.appendChild(me.__3_11);
		el=me._rectangle_51=document.createElement('div');
		el.ggId="Rectangle 5";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:0.85,sy:0.85,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'background-clip : padding-box;';
		hs+='background-clip : padding-box;';
		hs+='background : #0057ff;';
		hs+='border : 0px solid rgba(226,94,37,0.784314);';
		hs+='border-radius : 50px;';
		hs+='height : 80%;';
		hs+='left : calc(50% - ((40px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((80% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 40px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		el.style.transform=parameterToTransform(el.ggParameter);
		me._rectangle_51.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._rectangle_51.ggUpdatePosition=function (useTransition) {
		}
		el=me._svg_161=document.createElement('div');
		els=me._svg_161__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIGhlaWdodD0iMjkiIHdpZHRoPSIzMSIgdmlld0JveD0iMCAwIDMxIDI5Ij4KIDxwYXRoIHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLXdpZHRoPSIxLjUiIGQ9Ik0yMC40NDY2IDI2LjQxMDhDMTkuOTAzNyAyNy4xODE2IDE5LjYzMjIgMjcuNTY3IDE5LjIyNDEgMjcuNjM3OEMxOC44MTYgMjcuNzA4NiAxOC40MzA2IDI3LjQzNzEgMTcuNjU5OCAyNi44OTQyTDQuNDU2NzUgMTcuNTk0OUM0LjEzODUgMTcuMzcwNyAzLjk3OTM3IDE3LjI1ODYgMy44NzUwMSAxNy4xQzMuNzcwNjQgMTYuOTQxMyAzLjczMDc0ID'+
			'E2Ljc1MDggMy42NTA5MiAxNi4zNjk4TDEuMzAyMDkgNS4xNTc2NUMxLjA5NjE0IDQuMTc0NTIgMC45OTMxNTkgMy42ODI5NSAxLjI0MzQ4IDMuMzI3NTVDMS40OTM4IDIuOTcyMTUgMS45OTEzMyAyLjkwMzU0IDIuOTg2MzkgMi43NjYzMkwxNC4zMzQ1IDEuMjAxNDFDMTQuNzIwMiAxLjE0ODIzIDE0LjkxMyAxLjEyMTY0IDE1LjA5NzUgMS4xNjY0N0MxNS4yODIxIDEuMjExMjkgMTUuNDQxMiAxLjMyMzM3IDE1Ljc1OTQgMS41NDc1M0wyOC45NjI1IDEwLjg0NjlDMjkuNzMzMyAxMS4zODk4IDMwLjExODcgMTEuNjYxMiAzMC4xODk1IDEyLjA2OTRDMzAuMjYwMyAxMi40Nzc1IDI5Ljk4ODggMTIu'+
			'ODYyOSAyOS40NDU5IDEzLjYzMzdMMjAuNDQ2NiAyNi40MTA4WiIgc3Ryb2tlLW9wYWNpdHk9IjEiLz4KPC9zdmc+Cg==';
		me._svg_161__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Svg 16";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 18px;';
		hs+='left : calc(50% - ((20px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((18px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 20px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._svg_161.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._svg_161.ggUpdatePosition=function (useTransition) {
		}
		me._rectangle_51.appendChild(me._svg_161);
		me.__31.appendChild(me._rectangle_51);
		el=me._timer_31_1_2=document.createElement('div');
		el.ggTimestamp=skin.ggCurrentTime;
		el.ggLastIsActive=true;
		el.ggTimeout=800;
		el.ggId="Timer 3-1_1_2";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_timer ";
		el.ggType='timer';
		hs ='';
		hs+='height : 7px;';
		hs+='left : calc(50% - ((100px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((7px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._timer_31_1_2.ggIsActive=function() {
			return (me._timer_31_1_2.ggTimestamp==0 ? false : (Math.floor((skin.ggCurrentTime - me._timer_31_1_2.ggTimestamp) / me._timer_31_1_2.ggTimeout) % 2 == 0));
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._timer_31_1_2.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me._timer_31_1_2.ggIsActive() == false))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._timer_31_1_2.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._timer_31_1_2.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._timer_31_1_2.style.transition='';
				if (me._timer_31_1_2.ggCurrentLogicStateVisible == 0) {
					me._timer_31_1_2.style.visibility="hidden";
					me._timer_31_1_2.ggVisible=false;
				}
				else {
					me._timer_31_1_2.style.visibility=(Number(me._timer_31_1_2.style.opacity)>0||!me._timer_31_1_2.style.opacity)?'inherit':'hidden';
					me._timer_31_1_2.ggVisible=true;
				}
			}
		}
		me._timer_31_1_2.logicBlock_visible();
		me._timer_31_1_2.ggActivate=function () {
			var flag=me.__3_11.ggScaleActive;
			if (player.transitionsDisabled) {
				me.__3_11.style.transition='none';
			} else {
				me.__3_11.style.transition='all 500ms linear 0ms';
			}
			if (flag) {
				me.__3_11.ggParameter.sx=0.85;me.__3_11.ggParameter.sy=0.85;
			} else {
				me.__3_11.ggParameter.sx=1.2;me.__3_11.ggParameter.sy=1.2;
			}
			me.__3_11.ggScaleActive=!flag;
				me.__3_11.style.transform=parameterToTransform(me.__3_11.ggParameter);
			setTimeout(function() {skin.updateSize(me.__3_11);}, 550);
		}
		me._timer_31_1_2.ggCurrentLogicStateVisible = -1;
		me._timer_31_1_2.ggUpdateConditionTimer=function () {
			me._timer_31_1_2.logicBlock_visible();
		}
		me._timer_31_1_2.ggUpdatePosition=function (useTransition) {
		}
		me.__31.appendChild(me._timer_31_1_2);
		me._external_20.appendChild(me.__31);
		me.__30.appendChild(me._external_20);
		me.__30.logicBlock_visible();
		me.elementMouseOver['_30']=false;
		if ((hotspot) && (hotspot.customimage)) {
			me._external_20.style.width=hotspot.customimagewidth + 'px';
			me._external_20.style.height=hotspot.customimageheight + 'px';
			let d = 0;
			me._external_20.style.left='calc(50% - ' + ((hotspot.customimagewidth)/2 + 0) +'px' + ((d<0) ? ' - ' : ' + ') + d + 'px)';
			d = 0;
			me._external_20.style.top='calc(50% - ' + ((hotspot.customimageheight)/2 + 0) +'px' + ((d<0) ? ' - ' : ' + ') + d + 'px)';
		}
		me._timer_31_1_2.logicBlock_visible();
			me.ggEvent_changenode=function() {
				me._timer_31_1_2.logicBlock_visible();
			};
			me.ggEvent_sizechanged=function() {
				me.__30.logicBlock_visible();
			};
			me.hotspotTimerEvent=function() {
				me._timer_31_1_2.ggUpdateConditionTimer();
				if (me._timer_31_1_2.ggLastIsActive!=me._timer_31_1_2.ggIsActive()) {
					me._timer_31_1_2.ggLastIsActive=me._timer_31_1_2.ggIsActive();
					if (me._timer_31_1_2.ggLastIsActive) {
						var flag=me.__3_11.ggScaleActive;
						if (player.transitionsDisabled) {
							me.__3_11.style.transition='none';
						} else {
							me.__3_11.style.transition='all 500ms linear 0ms';
						}
						if (flag) {
							me.__3_11.ggParameter.sx=0.85;me.__3_11.ggParameter.sy=0.85;
						} else {
							me.__3_11.ggParameter.sx=1.2;me.__3_11.ggParameter.sy=1.2;
						}
						me.__3_11.ggScaleActive=!flag;
							me.__3_11.style.transform=parameterToTransform(me.__3_11.ggParameter);
						setTimeout(function() {skin.updateSize(me.__3_11);}, 550);
					} else {
					}
				}
			}
			me.hotspotTimerEvent();
			me.__div = me.__30;
	};
	function SkinHotspotClass_ht_node(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown={};
		me.elementMouseOver={};
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._ht_node=document.createElement('div');
		el.ggId="ht_node";
		el.ggDx=640;
		el.ggDy=300;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : calc(50% - ((0px + 0px) / 2) + 640px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((0px + 0px) / 2) + 300px);';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_node.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._ht_node.onclick=function (e) {
			player.openNext(player._(me.hotspot.url),"");
			player.triggerEvent('hsproxyclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_node.ondblclick=function (e) {
			player.triggerEvent('hsproxydblclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_node.onmouseenter=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['ht_node']=true;
			player.triggerEvent('hsproxyover', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_node.onmouseleave=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['ht_node']=false;
			player.triggerEvent('hsproxyout', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_node.ggUpdatePosition=function (useTransition) {
		}
		el=me._timer_2=document.createElement('div');
		el.ggTimestamp=skin.ggCurrentTime;
		el.ggLastIsActive=true;
		el.ggTimeout=300;
		el.ggId="Timer 2";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_timer ";
		el.ggType='timer';
		hs ='';
		hs+='height : 20px;';
		hs+='left : 152px;';
		hs+='position : absolute;';
		hs+='top : -122px;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._timer_2.ggIsActive=function() {
			return (me._timer_2.ggTimestamp==0 ? false : (Math.floor((skin.ggCurrentTime - me._timer_2.ggTimestamp) / me._timer_2.ggTimeout) % 2 == 0));
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._timer_2.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me._timer_2.ggIsActive() == false))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._timer_2.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._timer_2.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._timer_2.style.transition='';
				if (me._timer_2.ggCurrentLogicStateVisible == 0) {
					me._timer_2.style.visibility="hidden";
					me._timer_2.ggVisible=false;
				}
				else {
					me._timer_2.style.visibility=(Number(me._timer_2.style.opacity)>0||!me._timer_2.style.opacity)?'inherit':'hidden';
					me._timer_2.ggVisible=true;
				}
			}
		}
		me._timer_2.logicBlock_visible();
		me._timer_2.ggActivate=function () {
			var flag=me.__43.ggScaleActive;
			if (player.transitionsDisabled) {
				me.__43.style.transition='none';
			} else {
				me.__43.style.transition='all 1000ms linear 0ms';
			}
			if (flag) {
				me.__43.ggParameter.sx=1.2;me.__43.ggParameter.sy=1.2;
			} else {
				me.__43.ggParameter.sx=1.2;me.__43.ggParameter.sy=1.2;
			}
			me.__43.ggScaleActive=!flag;
				me.__43.style.transform=parameterToTransform(me.__43.ggParameter);
			setTimeout(function() {skin.updateSize(me.__43);}, 1050);
		}
		me._timer_2.ggCurrentLogicStateVisible = -1;
		me._timer_2.ggUpdateConditionTimer=function () {
			me._timer_2.logicBlock_visible();
		}
		me._timer_2.ggUpdatePosition=function (useTransition) {
		}
		me._ht_node.appendChild(me._timer_2);
		el=me._external_1=document.createElement('div');
		els=me._external_1__img=document.createElement('img');
		els.className='ggskin ggskin_external';
		hs ='';
		hs += 'position: absolute;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.onload=function() {me._external_1.ggUpdatePosition();}
		el.appendChild(els);
		el.ggSubElement = els;
		hs ='';
		el.ggAltText="";
		el.ggScrollbars=false;
		el.ggUpdateText = function() {
			me._external_1.ggSubElement.setAttribute('alt', player._(me._external_1.ggAltText));
			me._external_1.ggUpdateImageTranslation();
		}
		el.ggSetImage = function(img) {
			me._external_1.ggText_untranslated = img;
			me._external_1.ggUpdateImageTranslation();
		}
		el.ggUpdateImage = function() {
			me._external_1.ggSubElement.style.width = '0px';
			me._external_1.ggSubElement.style.height = '0px';
			me._external_1.ggSubElement.src='';
			me._external_1.ggSubElement.src=me._external_1.ggText;
		}
		el.ggUpdateImageTranslation = function() {
			if (me._external_1.ggText != player._(me._external_1.ggText_untranslated)) {
				me._external_1.ggText = player._(me._external_1.ggText_untranslated);
				me._external_1.ggUpdateImage()
			}
		}
		if ((hotspot) && (hotspot.customimage)) {
			el.ggText=el.ggText_untranslated=hotspot.customimage;
			els.setAttribute('src', hotspot.customimage);
			els.style.width=hotspot.customimagewidth + 'px';
			els.style.height=hotspot.customimageheight + 'px';
			me.ggUse3d = hotspot.use3D;
			me.gg3dDistance = hotspot.distance3D;
		}
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.ggUpdateText();
		el.ggId="External 1";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_external ";
		el.ggType='external';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : pointer;';
		hs+='height : 100px;';
		hs+='left : calc(50% - ((100px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._external_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._external_1.ggUpdatePosition=function (useTransition) {
			var parentWidth = me._external_1.clientWidth;
			var parentHeight = me._external_1.clientHeight;
			var img = me._external_1__img;
			var aspectRatioDiv = me._external_1.clientWidth / me._external_1.clientHeight;
			var aspectRatioImg = img.naturalWidth / img.naturalHeight;
			if (img.naturalWidth < parentWidth) parentWidth = img.naturalWidth;
			if (img.naturalHeight < parentHeight) parentHeight = img.naturalHeight;
			var currentWidth,currentHeight;
			if ((hotspot) && (hotspot.customimage)) {
				currentWidth  = hotspot.customimagewidth;
				currentHeight = hotspot.customimageheight;
			}
			if (!me._external_1.ggScrollbars || currentWidth < me._external_1.clientWidth) {
				img.style.right='';
				img.style.left='0px';
			} else {
				img.style.right='';
				img.style.left='0px';
				img.style.marginLeft='0px';
			}
			if (!me._external_1.ggScrollbars || currentHeight < me._external_1.clientHeight) {
				img.style.bottom='';
				img.style.top='0px';
			} else {
				img.style.bottom='';
				img.style.top='0px';
				img.style.marginTop='0px';
			}
		}
		el=me.__43=document.createElement('div');
		el.ggId="\uc6d0\ub4e4";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1.2,sy:1.2,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 50px;';
		hs+='left : calc(50% - ((50px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((50px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		el.style.transform=parameterToTransform(el.ggParameter);
		me.__43.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me.__43.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getViewerSize(true).width <= 540))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me.__43.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me.__43.ggCurrentLogicStateScaling = newLogicStateScaling;
				me.__43.style.transition='transform 0s';
				if (me.__43.ggCurrentLogicStateScaling == 0) {
					me.__43.ggParameter.sx = 1;
					me.__43.ggParameter.sy = 1;
					me.__43.style.transform=parameterToTransform(me.__43.ggParameter);
					skin.updateSize(me.__43);
				}
				else {
					me.__43.ggParameter.sx = 1.2;
					me.__43.ggParameter.sy = 1.2;
					me.__43.style.transform=parameterToTransform(me.__43.ggParameter);
					skin.updateSize(me.__43);
				}
			}
		}
		me.__43.logicBlock_scaling();
		me.__43.ggUpdatePosition=function (useTransition) {
		}
		el=me.__45=document.createElement('div');
		el.ggId="4\ubc88\uc9f8\uc6d0";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(255,255,255,0.0784314);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 50px;';
		hs+='cursor : pointer;';
		hs+='height : 25px;';
		hs+='left : calc(50% - ((25px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((25px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 25px;';
		hs+='pointer-events:auto;';
		hs+='::before { content: \"\"; position: absolute; top: -15px; left: -15px; right: -15px; bottom: -15px; background: inherit; \/* \ubd80\ubaa8\uc758 \ubc30\uacbd\uc744 \uc0c1\uc18d *\/ filter: blur(10px); \/* \ube14\ub7ec \ud6a8\uacfc *\/ z-index: -1; \/* \ubc30\uacbd \ub4a4\uc5d0 \uc704\uce58\ud558\ub3c4\ub85d *\/ }';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__45.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me.__45.ggUpdatePosition=function (useTransition) {
		}
		me.__43.appendChild(me.__45);
		el=me._timer_31=document.createElement('div');
		el.ggTimestamp=skin.ggCurrentTime;
		el.ggLastIsActive=true;
		el.ggTimeout=800;
		el.ggId="Timer 3-1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_timer ";
		el.ggType='timer';
		hs ='';
		hs+='height : 7px;';
		hs+='left : 182px;';
		hs+='position : absolute;';
		hs+='top : 119px;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._timer_31.ggIsActive=function() {
			return (me._timer_31.ggTimestamp==0 ? false : (Math.floor((skin.ggCurrentTime - me._timer_31.ggTimestamp) / me._timer_31.ggTimeout) % 2 == 0));
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._timer_31.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me._timer_31.ggIsActive() == false))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._timer_31.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._timer_31.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._timer_31.style.transition='';
				if (me._timer_31.ggCurrentLogicStateVisible == 0) {
					me._timer_31.style.visibility="hidden";
					me._timer_31.ggVisible=false;
				}
				else {
					me._timer_31.style.visibility=(Number(me._timer_31.style.opacity)>0||!me._timer_31.style.opacity)?'inherit':'hidden';
					me._timer_31.ggVisible=true;
				}
			}
		}
		me._timer_31.logicBlock_visible();
		me._timer_31.ggActivate=function () {
			var flag=me.__45.ggScaleActive;
			if (player.transitionsDisabled) {
				me.__45.style.transition='none';
			} else {
				me.__45.style.transition='all 500ms linear 0ms';
			}
			if (flag) {
				me.__45.ggParameter.sx=1;me.__45.ggParameter.sy=1;
			} else {
				me.__45.ggParameter.sx=1.8;me.__45.ggParameter.sy=1.8;
			}
			me.__45.ggScaleActive=!flag;
				me.__45.style.transform=parameterToTransform(me.__45.ggParameter);
			setTimeout(function() {skin.updateSize(me.__45);}, 550);
		}
		me._timer_31.ggCurrentLogicStateVisible = -1;
		me._timer_31.ggUpdateConditionTimer=function () {
			me._timer_31.logicBlock_visible();
		}
		me._timer_31.ggUpdatePosition=function (useTransition) {
		}
		me.__43.appendChild(me._timer_31);
		el=me.__310=document.createElement('div');
		el.ggId="3\ubc88\uc9f8\uc6d0";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(255,255,255,0.313726);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 50px;';
		hs+='cursor : pointer;';
		hs+='height : 20px;';
		hs+='left : calc(50% - ((20px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((20px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 20px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__310.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me.__310.ggUpdatePosition=function (useTransition) {
		}
		me.__43.appendChild(me.__310);
		el=me._timer_3=document.createElement('div');
		el.ggTimestamp=skin.ggCurrentTime;
		el.ggLastIsActive=true;
		el.ggTimeout=800;
		el.ggId="Timer 3";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_timer ";
		el.ggType='timer';
		hs ='';
		hs+='height : 7px;';
		hs+='left : 182px;';
		hs+='position : absolute;';
		hs+='top : 119px;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._timer_3.ggIsActive=function() {
			return (me._timer_3.ggTimestamp==0 ? false : (Math.floor((skin.ggCurrentTime - me._timer_3.ggTimestamp) / me._timer_3.ggTimeout) % 2 == 0));
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._timer_3.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me._timer_3.ggIsActive() == false))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._timer_3.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._timer_3.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._timer_3.style.transition='';
				if (me._timer_3.ggCurrentLogicStateVisible == 0) {
					me._timer_3.style.visibility="hidden";
					me._timer_3.ggVisible=false;
				}
				else {
					me._timer_3.style.visibility=(Number(me._timer_3.style.opacity)>0||!me._timer_3.style.opacity)?'inherit':'hidden';
					me._timer_3.ggVisible=true;
				}
			}
		}
		me._timer_3.logicBlock_visible();
		me._timer_3.ggActivate=function () {
			var flag=me.__310.ggScaleActive;
			if (player.transitionsDisabled) {
				me.__310.style.transition='none';
			} else {
				me.__310.style.transition='all 500ms linear 0ms';
			}
			if (flag) {
				me.__310.ggParameter.sx=1;me.__310.ggParameter.sy=1;
			} else {
				me.__310.ggParameter.sx=1.4;me.__310.ggParameter.sy=1.4;
			}
			me.__310.ggScaleActive=!flag;
				me.__310.style.transform=parameterToTransform(me.__310.ggParameter);
			setTimeout(function() {skin.updateSize(me.__310);}, 550);
		}
		me._timer_3.ggCurrentLogicStateVisible = -1;
		me._timer_3.ggUpdateConditionTimer=function () {
			me._timer_3.logicBlock_visible();
		}
		me._timer_3.ggUpdatePosition=function (useTransition) {
		}
		me.__43.appendChild(me._timer_3);
		el=me.__210=document.createElement('div');
		el.ggId="2\ubc88\uc9f8\uc6d0";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(255,255,255,0.509804);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 50px;';
		hs+='cursor : pointer;';
		hs+='height : 15px;';
		hs+='left : calc(50% - ((15px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((15px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 15px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__210.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me.__210.ggUpdatePosition=function (useTransition) {
		}
		me.__43.appendChild(me.__210);
		el=me.__44=document.createElement('div');
		el.ggId="\uc911\uc559\uc6d0";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(34,30,31,0.392157);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 50px;';
		hs+='cursor : pointer;';
		hs+='height : 7px;';
		hs+='left : calc(50% - ((7px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((7px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 7px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__44.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me.__44.ggUpdatePosition=function (useTransition) {
		}
		me.__43.appendChild(me.__44);
		el=me._text_19=document.createElement('div');
		els=me._text_19__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 19";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:0.8,sy:0.8,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : rgba(0,0,0,0.352941);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 25px;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : pointer;';
		hs+='height : 28px;';
		hs+='left : calc(50% - ((65px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : -23px;';
		hs+='visibility : inherit;';
		hs+='width : 65px;';
		hs+='pointer-events:auto;';
		hs+='line-height:13px;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		el.style.transform=parameterToTransform(el.ggParameter);
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 13px;';
		hs+='font-weight: bold;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 6px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._text_19.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.ggUserdata.title)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._text_19.ggUpdateText();
		player.addListener('changenode', function() {
			me._text_19.ggUpdateText();
		});
		el.appendChild(els);
		me._text_19.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._text_19.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player._(me.ggUserdata.comment) == "\ub113\uac8c"))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me._text_19.ggCurrentLogicStateSize != newLogicStateSize) {
				me._text_19.ggCurrentLogicStateSize = newLogicStateSize;
				me._text_19.style.transition='width 0s, height 0s';
				if (me._text_19.ggCurrentLogicStateSize == 0) {
					me._text_19.style.width='88px';
					me._text_19.style.height='28px';
					me._text_19.style.left = 'calc(50% - (88px / 2))';
					skin.updateSize(me._text_19);
				}
				else {
					me._text_19.style.width='65px';
					me._text_19.style.height='28px';
					me._text_19.style.left = 'calc(50% - (65px / 2))';
					skin.updateSize(me._text_19);
				}
			}
		}
		me._text_19.logicBlock_size();
		me._text_19.ggUpdatePosition=function (useTransition) {
		}
		me.__43.appendChild(me._text_19);
		me._external_1.appendChild(me.__43);
		me._ht_node.appendChild(me._external_1);
		me.elementMouseOver['ht_node']=false;
		me._timer_2.logicBlock_visible();
		if ((hotspot) && (hotspot.customimage)) {
			me._external_1.style.width=hotspot.customimagewidth + 'px';
			me._external_1.style.height=hotspot.customimageheight + 'px';
			let d = 0;
			me._external_1.style.left='calc(50% - ' + ((hotspot.customimagewidth)/2 + 0) +'px' + ((d<0) ? ' - ' : ' + ') + d + 'px)';
			d = 0;
			me._external_1.style.top='calc(50% - ' + ((hotspot.customimageheight)/2 + 0) +'px' + ((d<0) ? ' - ' : ' + ') + d + 'px)';
		}
		me.__43.logicBlock_scaling();
		me._timer_31.logicBlock_visible();
		me._timer_3.logicBlock_visible();
		me._text_19.logicBlock_size();
			me.ggEvent_activehotspotchanged=function() {
				me._text_19.logicBlock_size();
			};
			me.ggEvent_changenode=function() {
				me._timer_2.logicBlock_visible();
				me._timer_31.logicBlock_visible();
				me._timer_3.logicBlock_visible();
				me._text_19.logicBlock_size();
			};
			me.ggEvent_configloaded=function() {
				me._text_19.logicBlock_size();
			};
			me.ggEvent_sizechanged=function() {
				me.__43.logicBlock_scaling();
			};
			me.hotspotTimerEvent=function() {
				me._timer_2.ggUpdateConditionTimer();
				if (me._timer_2.ggLastIsActive!=me._timer_2.ggIsActive()) {
					me._timer_2.ggLastIsActive=me._timer_2.ggIsActive();
					if (me._timer_2.ggLastIsActive) {
						var flag=me.__43.ggScaleActive;
						if (player.transitionsDisabled) {
							me.__43.style.transition='none';
						} else {
							me.__43.style.transition='all 1000ms linear 0ms';
						}
						if (flag) {
							me.__43.ggParameter.sx=1.2;me.__43.ggParameter.sy=1.2;
						} else {
							me.__43.ggParameter.sx=1.2;me.__43.ggParameter.sy=1.2;
						}
						me.__43.ggScaleActive=!flag;
							me.__43.style.transform=parameterToTransform(me.__43.ggParameter);
						setTimeout(function() {skin.updateSize(me.__43);}, 1050);
					} else {
					}
				}
				me._timer_31.ggUpdateConditionTimer();
				if (me._timer_31.ggLastIsActive!=me._timer_31.ggIsActive()) {
					me._timer_31.ggLastIsActive=me._timer_31.ggIsActive();
					if (me._timer_31.ggLastIsActive) {
						var flag=me.__45.ggScaleActive;
						if (player.transitionsDisabled) {
							me.__45.style.transition='none';
						} else {
							me.__45.style.transition='all 500ms linear 0ms';
						}
						if (flag) {
							me.__45.ggParameter.sx=1;me.__45.ggParameter.sy=1;
						} else {
							me.__45.ggParameter.sx=1.8;me.__45.ggParameter.sy=1.8;
						}
						me.__45.ggScaleActive=!flag;
							me.__45.style.transform=parameterToTransform(me.__45.ggParameter);
						setTimeout(function() {skin.updateSize(me.__45);}, 550);
					} else {
					}
				}
				me._timer_3.ggUpdateConditionTimer();
				if (me._timer_3.ggLastIsActive!=me._timer_3.ggIsActive()) {
					me._timer_3.ggLastIsActive=me._timer_3.ggIsActive();
					if (me._timer_3.ggLastIsActive) {
						var flag=me.__310.ggScaleActive;
						if (player.transitionsDisabled) {
							me.__310.style.transition='none';
						} else {
							me.__310.style.transition='all 500ms linear 0ms';
						}
						if (flag) {
							me.__310.ggParameter.sx=1;me.__310.ggParameter.sy=1;
						} else {
							me.__310.ggParameter.sx=1.4;me.__310.ggParameter.sy=1.4;
						}
						me.__310.ggScaleActive=!flag;
							me.__310.style.transform=parameterToTransform(me.__310.ggParameter);
						setTimeout(function() {skin.updateSize(me.__310);}, 550);
					} else {
					}
				}
			}
			me.hotspotTimerEvent();
			me.__div = me._ht_node;
	};
	function SkinHotspotClass__46(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown={};
		me.elementMouseOver={};
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me.__46=document.createElement('div');
		el.ggId="\uc9d1\uafb8\ubbf8\uae30-\uc5d0\uc5b4\ucee8";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 282px;';
		hs+='position : absolute;';
		hs+='top : 43px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__46.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me.__46.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getViewerSize(true).width <= 1120))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__46.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__46.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__46.style.transition='';
				if (me.__46.ggCurrentLogicStateVisible == 0) {
					me.__46.style.visibility="hidden";
					me.__46.ggVisible=false;
				}
				else {
					me.__46.style.visibility=(Number(me.__46.style.opacity)>0||!me.__46.style.opacity)?'inherit':'hidden';
					me.__46.ggVisible=true;
				}
			}
		}
		me.__46.logicBlock_visible();
		me.__46.onclick=function (e) {
			player.triggerEvent('hsproxyclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me.__46.ondblclick=function (e) {
			player.triggerEvent('hsproxydblclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me.__46.onmouseenter=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['_46']=true;
			player.triggerEvent('hsproxyover', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me.__46.onmouseleave=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['_46']=false;
			player.triggerEvent('hsproxyout', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me.__46.ggUpdatePosition=function (useTransition) {
		}
		el=me._external_2_10=document.createElement('div');
		els=me._external_2_10__img=document.createElement('img');
		els.className='ggskin ggskin_external';
		hs ='';
		hs += 'position: absolute;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.onload=function() {me._external_2_10.ggUpdatePosition();}
		el.appendChild(els);
		el.ggSubElement = els;
		hs ='';
		el.ggAltText="";
		el.ggScrollbars=false;
		el.ggUpdateText = function() {
			me._external_2_10.ggSubElement.setAttribute('alt', player._(me._external_2_10.ggAltText));
			me._external_2_10.ggUpdateImageTranslation();
		}
		el.ggSetImage = function(img) {
			me._external_2_10.ggText_untranslated = img;
			me._external_2_10.ggUpdateImageTranslation();
		}
		el.ggUpdateImage = function() {
			me._external_2_10.ggSubElement.style.width = '0px';
			me._external_2_10.ggSubElement.style.height = '0px';
			me._external_2_10.ggSubElement.src='';
			me._external_2_10.ggSubElement.src=me._external_2_10.ggText;
		}
		el.ggUpdateImageTranslation = function() {
			if (me._external_2_10.ggText != player._(me._external_2_10.ggText_untranslated)) {
				me._external_2_10.ggText = player._(me._external_2_10.ggText_untranslated);
				me._external_2_10.ggUpdateImage()
			}
		}
		if ((hotspot) && (hotspot.customimage)) {
			el.ggText=el.ggText_untranslated=hotspot.customimage;
			els.setAttribute('src', hotspot.customimage);
			els.style.width=hotspot.customimagewidth + 'px';
			els.style.height=hotspot.customimageheight + 'px';
			me.ggUse3d = hotspot.use3D;
			me.gg3dDistance = hotspot.distance3D;
		}
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.ggUpdateText();
		el.ggId="External 2_1";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_external ";
		el.ggType='external';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : pointer;';
		hs+='height : 20px;';
		hs+='left : calc(50% - ((100px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((20px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._external_2_10.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._external_2_10.ggUpdatePosition=function (useTransition) {
			var parentWidth = me._external_2_10.clientWidth;
			var parentHeight = me._external_2_10.clientHeight;
			var img = me._external_2_10__img;
			var aspectRatioDiv = me._external_2_10.clientWidth / me._external_2_10.clientHeight;
			var aspectRatioImg = img.naturalWidth / img.naturalHeight;
			if (img.naturalWidth < parentWidth) parentWidth = img.naturalWidth;
			if (img.naturalHeight < parentHeight) parentHeight = img.naturalHeight;
			var currentWidth,currentHeight;
			if ((hotspot) && (hotspot.customimage)) {
				currentWidth  = hotspot.customimagewidth;
				currentHeight = hotspot.customimageheight;
			}
			if (!me._external_2_10.ggScrollbars || currentWidth < me._external_2_10.clientWidth) {
				img.style.right='';
				img.style.left='0px';
			} else {
				img.style.right='';
				img.style.left='0px';
				img.style.marginLeft='0px';
			}
			if (!me._external_2_10.ggScrollbars || currentHeight < me._external_2_10.clientHeight) {
				img.style.bottom='';
				img.style.top='0px';
			} else {
				img.style.bottom='';
				img.style.top='0px';
				img.style.marginTop='0px';
			}
		}
		el=me.__1110=document.createElement('div');
		el.ggId="\uc9d1\uafb8\ubbf8\uae30\ucee8\ud14c\uc774\ub108-\uc5d0\uc5b4\ucee811";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 50px;';
		hs+='left : calc(50% - ((50px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((50px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__1110.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me.__1110.onclick=function (e) {
				skin.__53.ggUpdateText=function() {
					var params = [];
					var hs = player._("<iframe src=\"https:\/\/dokyoung-an.github.io\/urihome\/aircon\" width=\"100%\" height=\"100%\" allowfullscreen=\"true\" mozallowfullscreen=\"true\" webkitallowfullscreen=\"true\" frameborder= \"0\" ><\/iframe>", params);
					if (hs!=this.ggText) {
						this.ggText=hs;
						this.ggTextDiv.innerHTML=hs;
						if (this.ggUpdatePosition) this.ggUpdatePosition();
					}
				}
			skin.__53.ggUpdateText();
			skin.__53.ggTextDiv.scrollTop = 0;
			player.setVariableValue('vis_films', true);
		}
		me.__1110.ggUpdatePosition=function (useTransition) {
		}
		el=me.__3_12=document.createElement('div');
		el.ggId="3\ubc88\uc9f8\uc6d0_1";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:0.85,sy:0.85,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(255,255,255,0.313726);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 50px;';
		hs+='cursor : pointer;';
		hs+='height : 40px;';
		hs+='left : calc(50% - ((40px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((40px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 40px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		el.style.transform=parameterToTransform(el.ggParameter);
		me.__3_12.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me.__3_12.ggUpdatePosition=function (useTransition) {
		}
		me.__1110.appendChild(me.__3_12);
		el=me._rectangle_52=document.createElement('div');
		el.ggId="Rectangle 5";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:0.85,sy:0.85,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'background-clip : padding-box;';
		hs+='background-clip : padding-box;';
		hs+='background : #0057ff;';
		hs+='border : 0px solid rgba(226,94,37,0.784314);';
		hs+='border-radius : 50px;';
		hs+='height : 80%;';
		hs+='left : calc(50% - ((40px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((80% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 40px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		el.style.transform=parameterToTransform(el.ggParameter);
		me._rectangle_52.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._rectangle_52.ggUpdatePosition=function (useTransition) {
		}
		el=me._svg_162=document.createElement('div');
		els=me._svg_162__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIGhlaWdodD0iMjkiIHdpZHRoPSIzMSIgdmlld0JveD0iMCAwIDMxIDI5Ij4KIDxwYXRoIHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLXdpZHRoPSIxLjUiIGQ9Ik0yMC40NDY2IDI2LjQxMDhDMTkuOTAzNyAyNy4xODE2IDE5LjYzMjIgMjcuNTY3IDE5LjIyNDEgMjcuNjM3OEMxOC44MTYgMjcuNzA4NiAxOC40MzA2IDI3LjQzNzEgMTcuNjU5OCAyNi44OTQyTDQuNDU2NzUgMTcuNTk0OUM0LjEzODUgMTcuMzcwNyAzLjk3OTM3IDE3LjI1ODYgMy44NzUwMSAxNy4xQzMuNzcwNjQgMTYuOTQxMyAzLjczMDc0ID'+
			'E2Ljc1MDggMy42NTA5MiAxNi4zNjk4TDEuMzAyMDkgNS4xNTc2NUMxLjA5NjE0IDQuMTc0NTIgMC45OTMxNTkgMy42ODI5NSAxLjI0MzQ4IDMuMzI3NTVDMS40OTM4IDIuOTcyMTUgMS45OTEzMyAyLjkwMzU0IDIuOTg2MzkgMi43NjYzMkwxNC4zMzQ1IDEuMjAxNDFDMTQuNzIwMiAxLjE0ODIzIDE0LjkxMyAxLjEyMTY0IDE1LjA5NzUgMS4xNjY0N0MxNS4yODIxIDEuMjExMjkgMTUuNDQxMiAxLjMyMzM3IDE1Ljc1OTQgMS41NDc1M0wyOC45NjI1IDEwLjg0NjlDMjkuNzMzMyAxMS4zODk4IDMwLjExODcgMTEuNjYxMiAzMC4xODk1IDEyLjA2OTRDMzAuMjYwMyAxMi40Nzc1IDI5Ljk4ODggMTIu'+
			'ODYyOSAyOS40NDU5IDEzLjYzMzdMMjAuNDQ2NiAyNi40MTA4WiIgc3Ryb2tlLW9wYWNpdHk9IjEiLz4KPC9zdmc+Cg==';
		me._svg_162__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Svg 16";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 18px;';
		hs+='left : calc(50% - ((20px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((18px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 20px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._svg_162.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._svg_162.ggUpdatePosition=function (useTransition) {
		}
		me._rectangle_52.appendChild(me._svg_162);
		me.__1110.appendChild(me._rectangle_52);
		el=me._timer_31_10=document.createElement('div');
		el.ggTimestamp=skin.ggCurrentTime;
		el.ggLastIsActive=true;
		el.ggTimeout=800;
		el.ggId="Timer 3-1_1";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_timer ";
		el.ggType='timer';
		hs ='';
		hs+='height : 7px;';
		hs+='left : calc(50% - ((100px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((7px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._timer_31_10.ggIsActive=function() {
			return (me._timer_31_10.ggTimestamp==0 ? false : (Math.floor((skin.ggCurrentTime - me._timer_31_10.ggTimestamp) / me._timer_31_10.ggTimeout) % 2 == 0));
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._timer_31_10.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me._timer_31_10.ggIsActive() == false))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._timer_31_10.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._timer_31_10.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._timer_31_10.style.transition='';
				if (me._timer_31_10.ggCurrentLogicStateVisible == 0) {
					me._timer_31_10.style.visibility="hidden";
					me._timer_31_10.ggVisible=false;
				}
				else {
					me._timer_31_10.style.visibility=(Number(me._timer_31_10.style.opacity)>0||!me._timer_31_10.style.opacity)?'inherit':'hidden';
					me._timer_31_10.ggVisible=true;
				}
			}
		}
		me._timer_31_10.logicBlock_visible();
		me._timer_31_10.ggActivate=function () {
			var flag=me.__3_12.ggScaleActive;
			if (player.transitionsDisabled) {
				me.__3_12.style.transition='none';
			} else {
				me.__3_12.style.transition='all 500ms linear 0ms';
			}
			if (flag) {
				me.__3_12.ggParameter.sx=0.85;me.__3_12.ggParameter.sy=0.85;
			} else {
				me.__3_12.ggParameter.sx=1.2;me.__3_12.ggParameter.sy=1.2;
			}
			me.__3_12.ggScaleActive=!flag;
				me.__3_12.style.transform=parameterToTransform(me.__3_12.ggParameter);
			setTimeout(function() {skin.updateSize(me.__3_12);}, 550);
		}
		me._timer_31_10.ggCurrentLogicStateVisible = -1;
		me._timer_31_10.ggUpdateConditionTimer=function () {
			me._timer_31_10.logicBlock_visible();
		}
		me._timer_31_10.ggUpdatePosition=function (useTransition) {
		}
		me.__1110.appendChild(me._timer_31_10);
		me._external_2_10.appendChild(me.__1110);
		me.__46.appendChild(me._external_2_10);
		me.__46.logicBlock_visible();
		me.elementMouseOver['_46']=false;
		if ((hotspot) && (hotspot.customimage)) {
			me._external_2_10.style.width=hotspot.customimagewidth + 'px';
			me._external_2_10.style.height=hotspot.customimageheight + 'px';
			let d = 0;
			me._external_2_10.style.left='calc(50% - ' + ((hotspot.customimagewidth)/2 + 0) +'px' + ((d<0) ? ' - ' : ' + ') + d + 'px)';
			d = 0;
			me._external_2_10.style.top='calc(50% - ' + ((hotspot.customimageheight)/2 + 0) +'px' + ((d<0) ? ' - ' : ' + ') + d + 'px)';
		}
		me._timer_31_10.logicBlock_visible();
			me.ggEvent_changenode=function() {
				me._timer_31_10.logicBlock_visible();
			};
			me.ggEvent_sizechanged=function() {
				me.__46.logicBlock_visible();
			};
			me.hotspotTimerEvent=function() {
				me._timer_31_10.ggUpdateConditionTimer();
				if (me._timer_31_10.ggLastIsActive!=me._timer_31_10.ggIsActive()) {
					me._timer_31_10.ggLastIsActive=me._timer_31_10.ggIsActive();
					if (me._timer_31_10.ggLastIsActive) {
						var flag=me.__3_12.ggScaleActive;
						if (player.transitionsDisabled) {
							me.__3_12.style.transition='none';
						} else {
							me.__3_12.style.transition='all 500ms linear 0ms';
						}
						if (flag) {
							me.__3_12.ggParameter.sx=0.85;me.__3_12.ggParameter.sy=0.85;
						} else {
							me.__3_12.ggParameter.sx=1.2;me.__3_12.ggParameter.sy=1.2;
						}
						me.__3_12.ggScaleActive=!flag;
							me.__3_12.style.transform=parameterToTransform(me.__3_12.ggParameter);
						setTimeout(function() {skin.updateSize(me.__3_12);}, 550);
					} else {
					}
				}
			}
			me.hotspotTimerEvent();
			me.__div = me.__46;
	};
	function SkinHotspotClass__47(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown={};
		me.elementMouseOver={};
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me.__47=document.createElement('div');
		el.ggId="\uc9d1\uafb8\ubbf8\uae30\ubc84\ud2bc-\ub9e4\ud2b8";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 282px;';
		hs+='position : absolute;';
		hs+='top : 43px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__47.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me.__47.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getViewerSize(true).width <= 1120))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__47.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__47.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__47.style.transition='';
				if (me.__47.ggCurrentLogicStateVisible == 0) {
					me.__47.style.visibility="hidden";
					me.__47.ggVisible=false;
				}
				else {
					me.__47.style.visibility=(Number(me.__47.style.opacity)>0||!me.__47.style.opacity)?'inherit':'hidden';
					me.__47.ggVisible=true;
				}
			}
		}
		me.__47.logicBlock_visible();
		me.__47.onclick=function (e) {
			player.triggerEvent('hsproxyclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me.__47.ondblclick=function (e) {
			player.triggerEvent('hsproxydblclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me.__47.onmouseenter=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['_47']=true;
			player.triggerEvent('hsproxyover', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me.__47.onmouseleave=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['_47']=false;
			player.triggerEvent('hsproxyout', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me.__47.ggUpdatePosition=function (useTransition) {
		}
		el=me._external_21=document.createElement('div');
		els=me._external_21__img=document.createElement('img');
		els.className='ggskin ggskin_external';
		hs ='';
		hs += 'position: absolute;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.onload=function() {me._external_21.ggUpdatePosition();}
		el.appendChild(els);
		el.ggSubElement = els;
		hs ='';
		el.ggAltText="";
		el.ggScrollbars=false;
		el.ggUpdateText = function() {
			me._external_21.ggSubElement.setAttribute('alt', player._(me._external_21.ggAltText));
			me._external_21.ggUpdateImageTranslation();
		}
		el.ggSetImage = function(img) {
			me._external_21.ggText_untranslated = img;
			me._external_21.ggUpdateImageTranslation();
		}
		el.ggUpdateImage = function() {
			me._external_21.ggSubElement.style.width = '0px';
			me._external_21.ggSubElement.style.height = '0px';
			me._external_21.ggSubElement.src='';
			me._external_21.ggSubElement.src=me._external_21.ggText;
		}
		el.ggUpdateImageTranslation = function() {
			if (me._external_21.ggText != player._(me._external_21.ggText_untranslated)) {
				me._external_21.ggText = player._(me._external_21.ggText_untranslated);
				me._external_21.ggUpdateImage()
			}
		}
		if ((hotspot) && (hotspot.customimage)) {
			el.ggText=el.ggText_untranslated=hotspot.customimage;
			els.setAttribute('src', hotspot.customimage);
			els.style.width=hotspot.customimagewidth + 'px';
			els.style.height=hotspot.customimageheight + 'px';
			me.ggUse3d = hotspot.use3D;
			me.gg3dDistance = hotspot.distance3D;
		}
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.ggUpdateText();
		el.ggId="External 2";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_external ";
		el.ggType='external';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : pointer;';
		hs+='height : 20px;';
		hs+='left : calc(50% - ((100px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((20px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._external_21.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._external_21.ggUpdatePosition=function (useTransition) {
			var parentWidth = me._external_21.clientWidth;
			var parentHeight = me._external_21.clientHeight;
			var img = me._external_21__img;
			var aspectRatioDiv = me._external_21.clientWidth / me._external_21.clientHeight;
			var aspectRatioImg = img.naturalWidth / img.naturalHeight;
			if (img.naturalWidth < parentWidth) parentWidth = img.naturalWidth;
			if (img.naturalHeight < parentHeight) parentHeight = img.naturalHeight;
			var currentWidth,currentHeight;
			if ((hotspot) && (hotspot.customimage)) {
				currentWidth  = hotspot.customimagewidth;
				currentHeight = hotspot.customimageheight;
			}
			if (!me._external_21.ggScrollbars || currentWidth < me._external_21.clientWidth) {
				img.style.right='';
				img.style.left='0px';
			} else {
				img.style.right='';
				img.style.left='0px';
				img.style.marginLeft='0px';
			}
			if (!me._external_21.ggScrollbars || currentHeight < me._external_21.clientHeight) {
				img.style.bottom='';
				img.style.top='0px';
			} else {
				img.style.bottom='';
				img.style.top='0px';
				img.style.marginTop='0px';
			}
		}
		el=me.__48=document.createElement('div');
		el.ggId="\uc9d1\uafb8\ubbf8\uae30\ucee8\ud14c\uc774\ub108-\ub2e8\uc5f4\ud544\ub984";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 50px;';
		hs+='left : calc(50% - ((50px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((50px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__48.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me.__48.onclick=function (e) {
				skin.__53.ggUpdateText=function() {
					var params = [];
					var hs = player._("<iframe src=\"https:\/\/dokyoung-an.github.io\/urihome\/mat\" width=\"100%\" height=\"100%\" allowfullscreen=\"true\" mozallowfullscreen=\"true\" webkitallowfullscreen=\"true\" frameborder= \"0\" ><\/iframe>", params);
					if (hs!=this.ggText) {
						this.ggText=hs;
						this.ggTextDiv.innerHTML=hs;
						if (this.ggUpdatePosition) this.ggUpdatePosition();
					}
				}
			skin.__53.ggUpdateText();
			skin.__53.ggTextDiv.scrollTop = 0;
			player.setVariableValue('vis_films', true);
		}
		me.__48.ggUpdatePosition=function (useTransition) {
		}
		el=me.__3_13=document.createElement('div');
		el.ggId="3\ubc88\uc9f8\uc6d0_1";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:0.85,sy:0.85,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(255,255,255,0.313726);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 50px;';
		hs+='cursor : pointer;';
		hs+='height : 40px;';
		hs+='left : calc(50% - ((40px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((40px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 40px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		el.style.transform=parameterToTransform(el.ggParameter);
		me.__3_13.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me.__3_13.ggUpdatePosition=function (useTransition) {
		}
		me.__48.appendChild(me.__3_13);
		el=me._rectangle_53=document.createElement('div');
		el.ggId="Rectangle 5";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:0.85,sy:0.85,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'background-clip : padding-box;';
		hs+='background-clip : padding-box;';
		hs+='background : #0057ff;';
		hs+='border : 0px solid rgba(226,94,37,0.784314);';
		hs+='border-radius : 50px;';
		hs+='height : 80%;';
		hs+='left : calc(50% - ((40px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((80% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 40px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		el.style.transform=parameterToTransform(el.ggParameter);
		me._rectangle_53.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._rectangle_53.ggUpdatePosition=function (useTransition) {
		}
		el=me._svg_163=document.createElement('div');
		els=me._svg_163__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIGhlaWdodD0iMjkiIHdpZHRoPSIzMSIgdmlld0JveD0iMCAwIDMxIDI5Ij4KIDxwYXRoIHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLXdpZHRoPSIxLjUiIGQ9Ik0yMC40NDY2IDI2LjQxMDhDMTkuOTAzNyAyNy4xODE2IDE5LjYzMjIgMjcuNTY3IDE5LjIyNDEgMjcuNjM3OEMxOC44MTYgMjcuNzA4NiAxOC40MzA2IDI3LjQzNzEgMTcuNjU5OCAyNi44OTQyTDQuNDU2NzUgMTcuNTk0OUM0LjEzODUgMTcuMzcwNyAzLjk3OTM3IDE3LjI1ODYgMy44NzUwMSAxNy4xQzMuNzcwNjQgMTYuOTQxMyAzLjczMDc0ID'+
			'E2Ljc1MDggMy42NTA5MiAxNi4zNjk4TDEuMzAyMDkgNS4xNTc2NUMxLjA5NjE0IDQuMTc0NTIgMC45OTMxNTkgMy42ODI5NSAxLjI0MzQ4IDMuMzI3NTVDMS40OTM4IDIuOTcyMTUgMS45OTEzMyAyLjkwMzU0IDIuOTg2MzkgMi43NjYzMkwxNC4zMzQ1IDEuMjAxNDFDMTQuNzIwMiAxLjE0ODIzIDE0LjkxMyAxLjEyMTY0IDE1LjA5NzUgMS4xNjY0N0MxNS4yODIxIDEuMjExMjkgMTUuNDQxMiAxLjMyMzM3IDE1Ljc1OTQgMS41NDc1M0wyOC45NjI1IDEwLjg0NjlDMjkuNzMzMyAxMS4zODk4IDMwLjExODcgMTEuNjYxMiAzMC4xODk1IDEyLjA2OTRDMzAuMjYwMyAxMi40Nzc1IDI5Ljk4ODggMTIu'+
			'ODYyOSAyOS40NDU5IDEzLjYzMzdMMjAuNDQ2NiAyNi40MTA4WiIgc3Ryb2tlLW9wYWNpdHk9IjEiLz4KPC9zdmc+Cg==';
		me._svg_163__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Svg 16";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 18px;';
		hs+='left : calc(50% - ((20px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((18px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 20px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._svg_163.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._svg_163.ggUpdatePosition=function (useTransition) {
		}
		me._rectangle_53.appendChild(me._svg_163);
		me.__48.appendChild(me._rectangle_53);
		el=me._timer_31_1_10=document.createElement('div');
		el.ggTimestamp=skin.ggCurrentTime;
		el.ggLastIsActive=true;
		el.ggTimeout=800;
		el.ggId="Timer 3-1_1_1";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_timer ";
		el.ggType='timer';
		hs ='';
		hs+='height : 7px;';
		hs+='left : calc(50% - ((100px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((7px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._timer_31_1_10.ggIsActive=function() {
			return (me._timer_31_1_10.ggTimestamp==0 ? false : (Math.floor((skin.ggCurrentTime - me._timer_31_1_10.ggTimestamp) / me._timer_31_1_10.ggTimeout) % 2 == 0));
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._timer_31_1_10.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me._timer_31_1_10.ggIsActive() == false))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._timer_31_1_10.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._timer_31_1_10.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._timer_31_1_10.style.transition='';
				if (me._timer_31_1_10.ggCurrentLogicStateVisible == 0) {
					me._timer_31_1_10.style.visibility="hidden";
					me._timer_31_1_10.ggVisible=false;
				}
				else {
					me._timer_31_1_10.style.visibility=(Number(me._timer_31_1_10.style.opacity)>0||!me._timer_31_1_10.style.opacity)?'inherit':'hidden';
					me._timer_31_1_10.ggVisible=true;
				}
			}
		}
		me._timer_31_1_10.logicBlock_visible();
		me._timer_31_1_10.ggActivate=function () {
			var flag=me.__3_13.ggScaleActive;
			if (player.transitionsDisabled) {
				me.__3_13.style.transition='none';
			} else {
				me.__3_13.style.transition='all 500ms linear 0ms';
			}
			if (flag) {
				me.__3_13.ggParameter.sx=0.85;me.__3_13.ggParameter.sy=0.85;
			} else {
				me.__3_13.ggParameter.sx=1.2;me.__3_13.ggParameter.sy=1.2;
			}
			me.__3_13.ggScaleActive=!flag;
				me.__3_13.style.transform=parameterToTransform(me.__3_13.ggParameter);
			setTimeout(function() {skin.updateSize(me.__3_13);}, 550);
		}
		me._timer_31_1_10.ggCurrentLogicStateVisible = -1;
		me._timer_31_1_10.ggUpdateConditionTimer=function () {
			me._timer_31_1_10.logicBlock_visible();
		}
		me._timer_31_1_10.ggUpdatePosition=function (useTransition) {
		}
		me.__48.appendChild(me._timer_31_1_10);
		me._external_21.appendChild(me.__48);
		me.__47.appendChild(me._external_21);
		me.__47.logicBlock_visible();
		me.elementMouseOver['_47']=false;
		if ((hotspot) && (hotspot.customimage)) {
			me._external_21.style.width=hotspot.customimagewidth + 'px';
			me._external_21.style.height=hotspot.customimageheight + 'px';
			let d = 0;
			me._external_21.style.left='calc(50% - ' + ((hotspot.customimagewidth)/2 + 0) +'px' + ((d<0) ? ' - ' : ' + ') + d + 'px)';
			d = 0;
			me._external_21.style.top='calc(50% - ' + ((hotspot.customimageheight)/2 + 0) +'px' + ((d<0) ? ' - ' : ' + ') + d + 'px)';
		}
		me._timer_31_1_10.logicBlock_visible();
			me.ggEvent_changenode=function() {
				me._timer_31_1_10.logicBlock_visible();
			};
			me.ggEvent_sizechanged=function() {
				me.__47.logicBlock_visible();
			};
			me.hotspotTimerEvent=function() {
				me._timer_31_1_10.ggUpdateConditionTimer();
				if (me._timer_31_1_10.ggLastIsActive!=me._timer_31_1_10.ggIsActive()) {
					me._timer_31_1_10.ggLastIsActive=me._timer_31_1_10.ggIsActive();
					if (me._timer_31_1_10.ggLastIsActive) {
						var flag=me.__3_13.ggScaleActive;
						if (player.transitionsDisabled) {
							me.__3_13.style.transition='none';
						} else {
							me.__3_13.style.transition='all 500ms linear 0ms';
						}
						if (flag) {
							me.__3_13.ggParameter.sx=0.85;me.__3_13.ggParameter.sy=0.85;
						} else {
							me.__3_13.ggParameter.sx=1.2;me.__3_13.ggParameter.sy=1.2;
						}
						me.__3_13.ggScaleActive=!flag;
							me.__3_13.style.transform=parameterToTransform(me.__3_13.ggParameter);
						setTimeout(function() {skin.updateSize(me.__3_13);}, 550);
					} else {
					}
				}
			}
			me.hotspotTimerEvent();
			me.__div = me.__47;
	};
	function SkinHotspotClass__49(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown={};
		me.elementMouseOver={};
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me.__49=document.createElement('div');
		el.ggId="\uc9d1\uafb8\ubbf8\uae30\ubc84\ud2bc-\ub2e8\uc5f4\ud544\ub984";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 282px;';
		hs+='position : absolute;';
		hs+='top : 43px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__49.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me.__49.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getViewerSize(true).width <= 1120))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__49.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__49.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__49.style.transition='';
				if (me.__49.ggCurrentLogicStateVisible == 0) {
					me.__49.style.visibility="hidden";
					me.__49.ggVisible=false;
				}
				else {
					me.__49.style.visibility=(Number(me.__49.style.opacity)>0||!me.__49.style.opacity)?'inherit':'hidden';
					me.__49.ggVisible=true;
				}
			}
		}
		me.__49.logicBlock_visible();
		me.__49.onclick=function (e) {
			player.triggerEvent('hsproxyclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me.__49.ondblclick=function (e) {
			player.triggerEvent('hsproxydblclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me.__49.onmouseenter=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['_49']=true;
			player.triggerEvent('hsproxyover', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me.__49.onmouseleave=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['_49']=false;
			player.triggerEvent('hsproxyout', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me.__49.ggUpdatePosition=function (useTransition) {
		}
		el=me._external_22=document.createElement('div');
		els=me._external_22__img=document.createElement('img');
		els.className='ggskin ggskin_external';
		hs ='';
		hs += 'position: absolute;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.onload=function() {me._external_22.ggUpdatePosition();}
		el.appendChild(els);
		el.ggSubElement = els;
		hs ='';
		el.ggAltText="";
		el.ggScrollbars=false;
		el.ggUpdateText = function() {
			me._external_22.ggSubElement.setAttribute('alt', player._(me._external_22.ggAltText));
			me._external_22.ggUpdateImageTranslation();
		}
		el.ggSetImage = function(img) {
			me._external_22.ggText_untranslated = img;
			me._external_22.ggUpdateImageTranslation();
		}
		el.ggUpdateImage = function() {
			me._external_22.ggSubElement.style.width = '0px';
			me._external_22.ggSubElement.style.height = '0px';
			me._external_22.ggSubElement.src='';
			me._external_22.ggSubElement.src=me._external_22.ggText;
		}
		el.ggUpdateImageTranslation = function() {
			if (me._external_22.ggText != player._(me._external_22.ggText_untranslated)) {
				me._external_22.ggText = player._(me._external_22.ggText_untranslated);
				me._external_22.ggUpdateImage()
			}
		}
		if ((hotspot) && (hotspot.customimage)) {
			el.ggText=el.ggText_untranslated=hotspot.customimage;
			els.setAttribute('src', hotspot.customimage);
			els.style.width=hotspot.customimagewidth + 'px';
			els.style.height=hotspot.customimageheight + 'px';
			me.ggUse3d = hotspot.use3D;
			me.gg3dDistance = hotspot.distance3D;
		}
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.ggUpdateText();
		el.ggId="External 2";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_external ";
		el.ggType='external';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : pointer;';
		hs+='height : 20px;';
		hs+='left : calc(50% - ((100px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((20px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._external_22.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._external_22.ggUpdatePosition=function (useTransition) {
			var parentWidth = me._external_22.clientWidth;
			var parentHeight = me._external_22.clientHeight;
			var img = me._external_22__img;
			var aspectRatioDiv = me._external_22.clientWidth / me._external_22.clientHeight;
			var aspectRatioImg = img.naturalWidth / img.naturalHeight;
			if (img.naturalWidth < parentWidth) parentWidth = img.naturalWidth;
			if (img.naturalHeight < parentHeight) parentHeight = img.naturalHeight;
			var currentWidth,currentHeight;
			if ((hotspot) && (hotspot.customimage)) {
				currentWidth  = hotspot.customimagewidth;
				currentHeight = hotspot.customimageheight;
			}
			if (!me._external_22.ggScrollbars || currentWidth < me._external_22.clientWidth) {
				img.style.right='';
				img.style.left='0px';
			} else {
				img.style.right='';
				img.style.left='0px';
				img.style.marginLeft='0px';
			}
			if (!me._external_22.ggScrollbars || currentHeight < me._external_22.clientHeight) {
				img.style.bottom='';
				img.style.top='0px';
			} else {
				img.style.bottom='';
				img.style.top='0px';
				img.style.marginTop='0px';
			}
		}
		el=me.__50=document.createElement('div');
		el.ggId="\uc9d1\uafb8\ubbf8\uae30\ucee8\ud14c\uc774\ub108-\ub2e8\uc5f4\ud544\ub984";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 50px;';
		hs+='left : calc(50% - ((50px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((50px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__50.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me.__50.onclick=function (e) {
				skin.__53.ggUpdateText=function() {
					var params = [];
					var hs = player._("<iframe src=\"https:\/\/dokyoung-an.github.io\/urihome\/films\" width=\"100%\" height=\"100%\" allowfullscreen=\"true\" mozallowfullscreen=\"true\" webkitallowfullscreen=\"true\" frameborder= \"0\" ><\/iframe>", params);
					if (hs!=this.ggText) {
						this.ggText=hs;
						this.ggTextDiv.innerHTML=hs;
						if (this.ggUpdatePosition) this.ggUpdatePosition();
					}
				}
			skin.__53.ggUpdateText();
			skin.__53.ggTextDiv.scrollTop = 0;
			player.setVariableValue('vis_films', true);
		}
		me.__50.ggUpdatePosition=function (useTransition) {
		}
		el=me.__3_14=document.createElement('div');
		el.ggId="3\ubc88\uc9f8\uc6d0_1";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:0.85,sy:0.85,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(255,255,255,0.313726);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 50px;';
		hs+='cursor : pointer;';
		hs+='height : 40px;';
		hs+='left : calc(50% - ((40px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((40px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 40px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		el.style.transform=parameterToTransform(el.ggParameter);
		me.__3_14.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me.__3_14.ggUpdatePosition=function (useTransition) {
		}
		me.__50.appendChild(me.__3_14);
		el=me._rectangle_54=document.createElement('div');
		el.ggId="Rectangle 5";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:0.85,sy:0.85,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'background-clip : padding-box;';
		hs+='background-clip : padding-box;';
		hs+='background : #0057ff;';
		hs+='border : 0px solid rgba(226,94,37,0.784314);';
		hs+='border-radius : 50px;';
		hs+='height : 80%;';
		hs+='left : calc(50% - ((40px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((80% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 40px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		el.style.transform=parameterToTransform(el.ggParameter);
		me._rectangle_54.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._rectangle_54.ggUpdatePosition=function (useTransition) {
		}
		el=me._svg_164=document.createElement('div');
		els=me._svg_164__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIGhlaWdodD0iMjkiIHdpZHRoPSIzMSIgdmlld0JveD0iMCAwIDMxIDI5Ij4KIDxwYXRoIHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLXdpZHRoPSIxLjUiIGQ9Ik0yMC40NDY2IDI2LjQxMDhDMTkuOTAzNyAyNy4xODE2IDE5LjYzMjIgMjcuNTY3IDE5LjIyNDEgMjcuNjM3OEMxOC44MTYgMjcuNzA4NiAxOC40MzA2IDI3LjQzNzEgMTcuNjU5OCAyNi44OTQyTDQuNDU2NzUgMTcuNTk0OUM0LjEzODUgMTcuMzcwNyAzLjk3OTM3IDE3LjI1ODYgMy44NzUwMSAxNy4xQzMuNzcwNjQgMTYuOTQxMyAzLjczMDc0ID'+
			'E2Ljc1MDggMy42NTA5MiAxNi4zNjk4TDEuMzAyMDkgNS4xNTc2NUMxLjA5NjE0IDQuMTc0NTIgMC45OTMxNTkgMy42ODI5NSAxLjI0MzQ4IDMuMzI3NTVDMS40OTM4IDIuOTcyMTUgMS45OTEzMyAyLjkwMzU0IDIuOTg2MzkgMi43NjYzMkwxNC4zMzQ1IDEuMjAxNDFDMTQuNzIwMiAxLjE0ODIzIDE0LjkxMyAxLjEyMTY0IDE1LjA5NzUgMS4xNjY0N0MxNS4yODIxIDEuMjExMjkgMTUuNDQxMiAxLjMyMzM3IDE1Ljc1OTQgMS41NDc1M0wyOC45NjI1IDEwLjg0NjlDMjkuNzMzMyAxMS4zODk4IDMwLjExODcgMTEuNjYxMiAzMC4xODk1IDEyLjA2OTRDMzAuMjYwMyAxMi40Nzc1IDI5Ljk4ODggMTIu'+
			'ODYyOSAyOS40NDU5IDEzLjYzMzdMMjAuNDQ2NiAyNi40MTA4WiIgc3Ryb2tlLW9wYWNpdHk9IjEiLz4KPC9zdmc+Cg==';
		me._svg_164__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Svg 16";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 18px;';
		hs+='left : calc(50% - ((20px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((18px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 20px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._svg_164.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._svg_164.ggUpdatePosition=function (useTransition) {
		}
		me._rectangle_54.appendChild(me._svg_164);
		me.__50.appendChild(me._rectangle_54);
		el=me._timer_31_1_20=document.createElement('div');
		el.ggTimestamp=skin.ggCurrentTime;
		el.ggLastIsActive=true;
		el.ggTimeout=800;
		el.ggId="Timer 3-1_1_2";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_timer ";
		el.ggType='timer';
		hs ='';
		hs+='height : 7px;';
		hs+='left : calc(50% - ((100px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((7px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._timer_31_1_20.ggIsActive=function() {
			return (me._timer_31_1_20.ggTimestamp==0 ? false : (Math.floor((skin.ggCurrentTime - me._timer_31_1_20.ggTimestamp) / me._timer_31_1_20.ggTimeout) % 2 == 0));
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._timer_31_1_20.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me._timer_31_1_20.ggIsActive() == false))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._timer_31_1_20.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._timer_31_1_20.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._timer_31_1_20.style.transition='';
				if (me._timer_31_1_20.ggCurrentLogicStateVisible == 0) {
					me._timer_31_1_20.style.visibility="hidden";
					me._timer_31_1_20.ggVisible=false;
				}
				else {
					me._timer_31_1_20.style.visibility=(Number(me._timer_31_1_20.style.opacity)>0||!me._timer_31_1_20.style.opacity)?'inherit':'hidden';
					me._timer_31_1_20.ggVisible=true;
				}
			}
		}
		me._timer_31_1_20.logicBlock_visible();
		me._timer_31_1_20.ggActivate=function () {
			var flag=me.__3_14.ggScaleActive;
			if (player.transitionsDisabled) {
				me.__3_14.style.transition='none';
			} else {
				me.__3_14.style.transition='all 500ms linear 0ms';
			}
			if (flag) {
				me.__3_14.ggParameter.sx=0.85;me.__3_14.ggParameter.sy=0.85;
			} else {
				me.__3_14.ggParameter.sx=1.2;me.__3_14.ggParameter.sy=1.2;
			}
			me.__3_14.ggScaleActive=!flag;
				me.__3_14.style.transform=parameterToTransform(me.__3_14.ggParameter);
			setTimeout(function() {skin.updateSize(me.__3_14);}, 550);
		}
		me._timer_31_1_20.ggCurrentLogicStateVisible = -1;
		me._timer_31_1_20.ggUpdateConditionTimer=function () {
			me._timer_31_1_20.logicBlock_visible();
		}
		me._timer_31_1_20.ggUpdatePosition=function (useTransition) {
		}
		me.__50.appendChild(me._timer_31_1_20);
		me._external_22.appendChild(me.__50);
		me.__49.appendChild(me._external_22);
		me.__49.logicBlock_visible();
		me.elementMouseOver['_49']=false;
		if ((hotspot) && (hotspot.customimage)) {
			me._external_22.style.width=hotspot.customimagewidth + 'px';
			me._external_22.style.height=hotspot.customimageheight + 'px';
			let d = 0;
			me._external_22.style.left='calc(50% - ' + ((hotspot.customimagewidth)/2 + 0) +'px' + ((d<0) ? ' - ' : ' + ') + d + 'px)';
			d = 0;
			me._external_22.style.top='calc(50% - ' + ((hotspot.customimageheight)/2 + 0) +'px' + ((d<0) ? ' - ' : ' + ') + d + 'px)';
		}
		me._timer_31_1_20.logicBlock_visible();
			me.ggEvent_changenode=function() {
				me._timer_31_1_20.logicBlock_visible();
			};
			me.ggEvent_sizechanged=function() {
				me.__49.logicBlock_visible();
			};
			me.hotspotTimerEvent=function() {
				me._timer_31_1_20.ggUpdateConditionTimer();
				if (me._timer_31_1_20.ggLastIsActive!=me._timer_31_1_20.ggIsActive()) {
					me._timer_31_1_20.ggLastIsActive=me._timer_31_1_20.ggIsActive();
					if (me._timer_31_1_20.ggLastIsActive) {
						var flag=me.__3_14.ggScaleActive;
						if (player.transitionsDisabled) {
							me.__3_14.style.transition='none';
						} else {
							me.__3_14.style.transition='all 500ms linear 0ms';
						}
						if (flag) {
							me.__3_14.ggParameter.sx=0.85;me.__3_14.ggParameter.sy=0.85;
						} else {
							me.__3_14.ggParameter.sx=1.2;me.__3_14.ggParameter.sy=1.2;
						}
						me.__3_14.ggScaleActive=!flag;
							me.__3_14.style.transform=parameterToTransform(me.__3_14.ggParameter);
						setTimeout(function() {skin.updateSize(me.__3_14);}, 550);
					} else {
					}
				}
			}
			me.hotspotTimerEvent();
			me.__div = me.__49;
	};
	me.addSkinHotspot=function(hotspot) {
		var hsinst = null;
			if (hotspot.skinid=='집꾸미기버튼-단열필름') {
				hotspot.skinid = '집꾸미기버튼-단열필름';
				hsinst = new SkinHotspotClass__49(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		} else
			if (hotspot.skinid=='집꾸미기버튼-매트') {
				hotspot.skinid = '집꾸미기버튼-매트';
				hsinst = new SkinHotspotClass__47(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		} else
			if (hotspot.skinid=='집꾸미기-에어컨') {
				hotspot.skinid = '집꾸미기-에어컨';
				hsinst = new SkinHotspotClass__46(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		} else
			if (hotspot.skinid=='ht_node') {
				hotspot.skinid = 'ht_node';
				hsinst = new SkinHotspotClass_ht_node(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		} else
			if (hotspot.skinid=='집꾸미기버튼-단열필름_모바일') {
				hotspot.skinid = '집꾸미기버튼-단열필름_모바일';
				hsinst = new SkinHotspotClass__30(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		} else
			if (hotspot.skinid=='집꾸미기버튼-매트_모바일') {
				hotspot.skinid = '집꾸미기버튼-매트_모바일';
				hsinst = new SkinHotspotClass__28(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		} else
		{
				hotspot.skinid = '집꾸미기-에어컨_모바일';
				hsinst = new SkinHotspotClass__27(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		}
		return hsinst;
	}
	me.removeSkinHotspots=function() {
		hotspotTemplates = {};
	}
	player.addListener('hotspotsremoved',function() {
			me.removeSkinHotspots();
	});
	player.addListener('changenode', function() {
		me.ggUserdata=player.userdata;
	});
	me.skinTimerEvent=function() {
		if (player.isInVR()) return;
		me.ggCurrentTime=new Date().getTime();
		for (const id in hotspotTemplates) {
			const tmpl=hotspotTemplates[id];
			tmpl.forEach(function(hotspot) {
				if (hotspot.hotspotTimerEvent) {
					hotspot.hotspotTimerEvent();
				}
			});
		};
	};
	player.addListener('timer', me.skinTimerEvent);
	me.addSkin();
	var style = document.createElement('style');
	style.type = 'text/css';
	style.appendChild(document.createTextNode('@import url("https://fonts.googleapis.com/css2?family=Mukta:wght@200;300;400;500;600;700;800&family=Mulish:ital,wght@0,200..1000;1,200..1000&family=Nanum+Gothic&family=Noto+Sans+KR:wght@100..900&display=swap"); .ggskin { font-family: Mukta,Verdana, Arial, Helvetica, sans-serif; font-size: 14px; line-height: normal; color:#393939; text-rendering: optimizeLegibility; /* 부드러운 렌더링 적용 */ -webkit-font-smoothing: antialiased; /* 웹킷 기반 브라우저 (Chrome, Safari) 부드러운 글꼴 */ -moz-osx-font-smoothing: grayscale; /* macOS 최적화 */ } .ggmarkdown p,.ggmarkdown h1,.ggmarkdown h2,.ggmarkdown h3,.ggmarkdown h4 { margin-top: 0px } .ggmarkdown { white-space:normal } .noto-sans-kr { font-family: "Noto Sans KR", sans-serif; font-optical-sizing: auto; font-weight: <weight>; font-style: normal; }'));
	document.head.appendChild(style);
	document.addEventListener('keyup', function(e) {
		if (e.key === 'Enter' || e.key === ' ') {
			let activeElement = document.activeElement;
			if (activeElement.classList.contains('ggskin') && activeElement.onclick) activeElement.onclick();
		}
	});
	document.addEventListener('keydown', function(e) {
		if (e.key === 'Enter' || e.key === ' ') {
			let activeElement = document.activeElement;
			if (activeElement.classList.contains('ggskin') && activeElement.onmousedown) activeElement.onmousedown();
		}
	});
	document.addEventListener('keyup', function(e) {
		if (e.key === 'Enter' || e.key === ' ') {
			let activeElement = document.activeElement;
			if (activeElement.classList.contains('ggskin') && activeElement.onmouseup) activeElement.onmouseup();
		}
	});
	me.skinTimerEvent();
	document.fonts.onloadingdone = () => {
		me.updateSize(me.divSkin);
	}
};