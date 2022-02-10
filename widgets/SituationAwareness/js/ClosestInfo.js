// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
define("dojo/_base/declare dojo/_base/lang dojo/_base/Color dojo/_base/array dojo/DeferredList dojo/Deferred dojo/dom-class dojo/dom-construct dojo/dom-geometry dojo/dom-style dojo/on dojo/keys jimu/utils esri/geometry/geometryEngine esri/graphic esri/Color esri/layers/FeatureLayer esri/symbols/SimpleMarkerSymbol esri/symbols/SimpleLineSymbol esri/symbols/Font esri/symbols/TextSymbol esri/tasks/query ./analysisUtils".split(" "),function(U,p,P,N,Q,H,A,D,V,R,E,F,I,K,O,W,L,S,T,X,Y,Z,z){return U("ClosestInfo",
null,{featureCount:0,mapServiceLayer:!1,loading:!1,queryOnLoad:!1,incidentCount:0,constructor:function(a,c,b){this.tab=a;this.container=c;this.parent=b;this.graphicsLayer=this.incident=null;this.map=b.map;this.specialFields={};this.typeIdField="";this.types=[];this.dateFields={};this.config=b.config;this.parentNode=b.domNode;this.baseLabel=""!==a.label?a.label:a.layerTitle?a.layerTitle:a.layers},queryTabCount:function(a,c,b,d){var q=new H;this.incidentCount=a.length;var v=this.parent.config.distanceSettings[this.parent.config.distanceUnits],
g=this.parent.config.maxDistance;c=[];for(var m=0;m<a.length;m++){var k=a[m].geometry;"4326"===k.spatialReference.wkid||k.spatialReference.isWebMercator()?c.push(K.geodesicBuffer(k,g,v)):c.push(K.buffer(k,g,v))}var h=[this.tab.tabLayers[0]];this.mapServiceLayer&&1<this.tab.tabLayers.length&&(h=[this.tab.tabLayers[1]]);if(0<this.tab.tabLayers.length&&this.tab.tabLayers[0].url&&-1<this.tab.tabLayers[0].url.indexOf("MapServer"))if(this.mapServiceLayer=!0,"undefined"!==typeof this.tab.tabLayers[0].infoTemplate)if(this.summaryLayer=
this.tab.tabLayers[0],this.summaryLayer.hasOwnProperty("loaded")&&this.summaryLayer.loaded)this.summaryFields=this._getFields(this.summaryLayer),this._performQuery(a,c,b,d,h).then(function(f){q.resolve(f)});else{var e=new L(this.summaryLayer.url);e.infoTemplate=this.tab.tabLayers[0].infoTemplate;h=[e];this.tab.tabLayers=h;E(e,"load",p.hitch(this,function(){this.summaryLayer=e;this.summaryFields=this._getFields(this.summaryLayer);this._performQuery(a,c,b,d,h).then(function(f){q.resolve(f)})}))}else this.loading||
(e=new L(this.tab.tabLayers[0].url),this.loading=!0,E(e,"load",p.hitch(this,function(){this.summaryLayer=e;this.summaryFields=this._getFields(this.summaryLayer);for(var f=this.tab.tabLayers[0].url.split("MapServer/")[1],l=this.parent.map.itemInfo.itemData.operationalLayers,n=0;n<l.length;n++){var r=l[n];if(-1<this.tab.tabLayers[0].url.indexOf(r.url)&&"undefined"!==typeof r.layerObject&&r.layerObject.infoTemplates&&(r=r.layerObject.infoTemplates[f])){e.infoTemplate=r.infoTemplate;break}}h=[e];this.tab.tabLayers=
h;this.loading=!1;this._performQuery(a,c,b,d,h).then(function(x){q.resolve(x)})})));this.mapServiceLayer||this._performQuery(a,c,b,d,h).then(function(f){q.resolve(f)});return q},_performQuery:function(a,c,b,d,q){var v=new H,g=[];this.summaryGeoms=c;if(0<c.length)for(a=0;a<c.length;a++){g=c[a];var m=z.createDefArray(q,g,this.parent.opLayers,this.tab);var k=0===a?g=m:g=k.concat(m)}(new Q(g)).then(p.hitch(this,function(h){for(var e=0,f=0;f<h.length;f++){var l=h[f][1];isNaN(l)?l&&l.features?0<l.features.length&&
(e+=1):l&&"undefined"!==typeof l.length&&0<l.length&&(e+=1):0<l&&(e+=1)}this.updateTabCount(e,b,d);v.resolve(e)}));return v},updateTabCount:function(a,c,b){this.featureCount=0===parseInt(a,10)?0:a;z.updateTabCount(this.featureCount,c,b,this.baseLabel,this.incidentCount)},updateForIncident:function(a,c,b,d,q,v){this.incidentCount=a.length;this.allFields="undefined"!==typeof q&&"undefined"!==typeof v?q?!0:v:!1;var g="undefined"!==typeof d,m;N.forEach(this.tab.tabLayers,p.hitch(this,function(k){g&&(m=
new H);if(k.url){var h=new L(k.url,{mode:L.MODE_ONDEMAND,infoTemplate:k.infoTemplate});E(h,"load",p.hitch(this,function(){this.tab.tabLayers=[h];g?this.processIncident(a,c,b,d).then(p.hitch(this,function(e){m.resolve(e)}),p.hitch(this,function(e){console.error(e);m.reject(e)})):this.processIncident(a,c,b,d)}))}else g?this.processIncident(a,c,b,d).then(p.hitch(this,function(e){m.resolve(e)}),p.hitch(this,function(e){console.error(e);m.reject(e)})):this.processIncident(a,c,b,d)}));if(g)return m},processIncident:function(a,
c,b,d){this.incidents=a;var q="undefined"!==typeof d;if(q)var v=new H;else this.container.innerHTML="",A.add(this.container,"loading");var g=[];d=this.parent.config.distanceSettings[this.parent.config.distanceUnits];for(var m=[],k=0;k<a.length;k++){var h=a[k].geometry;var e="4326"===h.spatialReference.wkid||h.spatialReference.isWebMercator()?K.geodesicBuffer(h,c,d):K.buffer(h,c,d);m.push({geometry:h,buffer:e})}(this.graphicsLayer=b)&&this.graphicsLayer.clear();a=[];c=this.tab.tabLayers[0];b=-1===
[null,void 0,""].indexOf(c.id)?c.id:this.tab.layers;b=z.getFilter(b,this.parent.opLayers);var f=this._getFields(c),l=z.getPopupConfiguredFields(c);for(d=0;d<m.length;d++)k=new Z,k.returnGeometry=!0,k.outSpatialReference=this.parent.map.spatialReference,k.geometry=m[d].buffer,k.where=b,k.outFields=["*"],"undefined"!==typeof c.queryFeatures&&a.push(c.queryFeatures(k));(new Q(a)).then(p.hitch(this,function(n){for(var r=0;r<n.length;r++)if(n[r][0]){var x=n[r][1].features,w=[],B=m[r].geometry;if(x&&0<
x.length){for(var G=0;G<x.length;G++){var y=new O(x[G].toJson()),C=z.getDistance(B,y.geometry,this.parent.config.distanceUnits),t={DISTANCE:C};N.forEach(f,p.hitch(this,function(u){t[u]=y.attributes[u]}));this.config.hasOwnProperty("exportFieldsOptionForCSV")&&"allFields"===this.config.exportFieldsOptionForCSV||this.config.hasOwnProperty("csvAllFields")&&(!0===this.config.csvAllFields||"true"===this.config.csvAllFields)?y.attributes.DISTANCE=C:(this.config.hasOwnProperty("exportFieldsOptionForCSV")&&
"popUpFields"===this.config.exportFieldsOptionForCSV&&!this.allFields&&(t={DISTANCE:C},N.forEach(l,p.hitch(this,function(u){t[u]=y.attributes[u]}))),y.attributes=t);w.push(y)}w.sort(z.compareDistance);g.push(w[0])}}else n[r][1]&&n[r][1].message&&console.log(n[r][1].message);g.sort(z.compareDistance);q?this._processResults(g,!0).then(p.hitch(this,function(u){v.resolve(u)})):this._processResults(g)}),p.hitch(this,function(n){console.error(n);v.reject(n)}));if(q)return v},_processResults:function(a,
c){var b=a&&0<a.length;if(b&&"point"!==a[0].geometry.type)for(var d=a.length-1;0<=d;d--)"undefined"===typeof a[d].geometry.getExtent()&&a.splice(d,1);if(c)var q=new H;else if(this.container.innerHTML="",A.remove(this.container,"loading"),b){var v=D.create("div",{"class":"SAT_tabPanelContent"},this.container);d=D.create("div",{},v);A.add(d,"SATcolExport");A.add(d,this.parent.lightTheme?"lightThemeBorder":"darkThemeBorder");var g=D.create("div",{title:this.parent.nls.downloadCSV,tabindex:"0",role:"button",
"aria-label":this.parent.nls.downloadCSV,"class":"closestDownLoadCSVButton"},d);I.initFirstFocusNode(this.parentNode,g);A.add(g,"btnExport");A.add(g,this.parent.lightTheme?"lightThemeBackground":"darkThemeBackground");E(g,"click",p.hitch(this,this._exportToCSV,a));E(g,"keydown",p.hitch(this,function(J){if(!J.shiftKey||J.keyCode!==F.TAB)if(J.keyCode===F.ENTER||J.keyCode===F.SPACE)this._exportToCSV(a,J),setTimeout(function(){g.focus()},500)}));g.focus()}d=this.parent.nls[this.parent.config.distanceUnits];
var m=[],k=220;if(b)for(var h=0;h<a.length;h++){var e=h+1,f=a[h],l=f.geometry,n=l;"point"!==l.type&&(n=l.getExtent().getCenter());l=f.attributes;var r;"point"===this.incidents[0].geometry.type&&(r=Math.round(100*l.DISTANCE)/100+" "+d+" ("+this.parent.nls.approximate+")");var x="",w=0,B=[];if("undefined"!==typeof this.displayFields)for(var G=0;G<this.displayFields.length;G++){var y=this.displayFields[G],C;a:for(C in l)if("DISTANCE"!==C&&3>w&&y.expression===C){var t=z.getFieldValue(C,l[C],this.specialFields,
this.dateFields,"longMonthDayYear",this.typeIdField,this.types,this.layerObject&&this.layerObject.renderer?this.layerObject:this.layerDefinition,l,y);t="undefined"!==typeof t&&null!==t?I.stripHTML(t.toString()):"";var u="undefined"!==typeof y.label&&""!==y.label?y.label:void 0,M=f._layer&&f._layer.fields?f._layer.fields:this.tab.tabLayers&&this.tab.tabLayers[0]?this.tab.tabLayers[0].fields:void 0;M&&"undefined"===typeof u&&(M=z.getField(M,C))&&(u=M.alias);if("undefined"===typeof u||u in[""," ",null,
void 0])u=C;z.isURL(t)?t='\x3ca href\x3d"'+t+'" target\x3d"_blank" style\x3d"color: inherit;"\x3e'+u+"\x3c/a\x3e":z.isEmail(t)&&(t='\x3ca href\x3d"mailto:'+t+'" style\x3d"color: inherit;"\x3e'+u+"\x3c/a\x3e");x+=y.validLabel?("undefined"!==typeof y.label&&""!==y.label?u+" ":"")+t+"\x3cbr/\x3e":t+"\x3cbr/\x3e";w+=1;B.push({value:t,label:u});break a}}m.push(B);c||(f=D.create("div",{},v),A.add(f,"SATcolRec"),A.add(f,this.parent.lightTheme?"lightThemeBorder":"darkThemeBorder"),w=D.create("div",{},f),
A.add(w,"SATcolRecBar"),B=D.create("div",{innerHTML:e,tabindex:"0",role:"button","aria-label":this.parent.nls.zoomToFeature+" "+e},w),A.add(B,"SATcolRecNum"),R.set(B,"backgroundColor",this.parent.config.activeColor),E(B,"click",p.hitch(this,this._zoomToLocation,n,null)),E(B,"keydown",p.hitch(this,this._zoomToLocation,n,!0)),I.initLastFocusNode(this.parentNode,B),r&&(B=D.create("div",{innerHTML:r},w),A.add(B,"SATcolDistance")),this.parent.config.enableRouting&&(w=D.create("div",{"class":"directionsButton",
title:this.parent.nls.get_directions,tabindex:"0","aria-label":this.parent.nls.get_directions,role:"button"},w),A.add(w,"SATcolDir"),E(w,"click",p.hitch(this,this._routeToIncident,n,null)),E(w,"keydown",p.hitch(this,this._routeToIncident,n,!0)),I.initLastFocusNode(this.parentNode,w)),x=D.create("div",{"class":"SATcolWrap",innerHTML:x},f),A.add(x,"SATcolInfo"),k+=V.position(f).w,x=new T(T.STYLE_SOLID,new P.fromRgb(this.parent.config.activeMapGraphicColor),1),x=new S(S.STYLE_CIRCLE,24,x,new P.fromRgb(this.parent.config.activeMapGraphicColor)),
f=new X,f.family="Arial",f.size="12px",e=new Y(e,f,new W(this.parent.config.fontColor)),e.setOffset(0,-4),this.graphicsLayer.add(new O(n,x,l)),this.graphicsLayer.add(new O(n,e,l)))}if(!c&&b)R.set(v,"width",k);else if(b)return q.resolve({graphics:a,analysisResults:m,context:this}),q},_exportToCSV:function(a,c,b,d){if(this.parent.config.hasOwnProperty("exportFieldsOptionForCSV"))var q=this.parent.config.exportFieldsOptionForCSV;else this.parent.config.hasOwnProperty("csvAllFields")&&(q=this.parent.config.csvAllFields);
a=z.exportToCSV(a,c,b,d,{type:"closest",baseLabel:this.baseLabel,csvAllFields:q,layer:this.tab.tabLayers[0],opLayers:this.parent.opLayers,nlsValue:this.parent.nls.closest,nlsCount:this.parent.nls.count});this.summaryLayer=a.summaryLayer;return a.details},_getFields:function(a){this.layerDefinition=I.getFeatureLayerDefinition(a);this.layerObject=a;a=z.getFields(a,this.tab,this.allFields,this.parent);this.dateFields=a.dateFields;this.specialFields=a.specialFields;this.typeIdField=a.typeIdField;this.types=
a.types;this.displayFields=z.getDisplayFields(this.tab);return a.fields},_zoomToLocation:function(a,c,b){b.shiftKey&&b.keyCode===F.TAB?(b.stopPropagation(),b.cancelBubble=!0):c&&b.keyCode!==F.ENTER&&b.keyCode!==F.SPACE||this.parent.zoomToLocation(a)},_routeToIncident:function(a,c,b){c&&b.keyCode!==F.ENTER&&b.keyCode!==F.SPACE||this.parent.routeToIncident(a)}})});