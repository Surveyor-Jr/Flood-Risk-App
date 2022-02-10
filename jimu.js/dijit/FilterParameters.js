// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
define("dojo/on dojo/Evented dojo/Deferred dojo/promise/all dojo/_base/declare dijit/_WidgetBase dijit/_TemplatedMixin dijit/_WidgetsInTemplateMixin dojo/_base/lang dojo/_base/html dojo/_base/array dojo/query dijit/registry jimu/filterUtils jimu/utils ./_SingleFilterParameter ./_filter/ValueProviderFactory".split(" "),function(q,v,w,x,y,z,A,B,h,r,n,t,C,D,E,F,G){return y([z,A,B,v],{baseClass:"jimu-filter-parameters",templateString:'\x3cdiv\x3e\x3ctable style\x3d"width:100%;border-collapse:collapse;"\x3e\x3ctbody data-dojo-attach-point\x3d"tbody"\x3e\x3c/tbody\x3e\x3c/table\x3e\x3c/div\x3e',
_filterUtils:null,_spObj:null,nls:null,partsObj:null,layerInfo:null,OPERATORS:null,url:null,featureLayerId:null,widgetId:"",postMixInProperties:function(){this.nls=window.jimuNls.filterBuilder;this._filterUtils=new D;this.OPERATORS=h.clone(this._filterUtils.OPERATORS);this._spObj={}},destroy:function(){this.clear();this._filterUtils=null;this.inherited(arguments)},getFilterExpr:function(a){var b=this._getNewValidPartsObj(this.partsObj,!0),c=b?this._getFilterExprByPartsObj(b):null;return a&&a.ifDisplaySQL?
void 0===b.displaySQL?c:b.displaySQL:c},getValueProviders:function(){for(var a=[],b=this._getAllInteractiveSinglePartArray(this.partsObj),c=0;c<b.length;c++){var d=b[c].spId;d&&(d=this._getSingleFilterParameterBySpId(d),a.push(d))}return a},_getNewValidPartsObj:function(a,b){a=h.clone(a);for(var c={logicalOperator:a.logicalOperator,parts:[]},d=h.hitch(this,function(e){if(e.spId){var k=this._getSingleFilterParameterBySpId(e.spId),f=k.getValueObject();this.useStandardizedQueries&&"date"===e.fieldObj.shortType&&
(e._useStandardizedQueries=this.useStandardizedQueries);e.valueObj=f;if(!f||"uniquePredefined"!==f.type&&"multiplePredefined"!==f.type)return f&&"multipleDynamic"===f.type?0<f.value.length?1:-1:f&&"unique"===f.type?null===f.value||void 0===f.value||""===f.value?-1:1:k.getStatus();k=[];for(var u in f.value)f.value[u].isChecked&&k.push(f.value[u]);if(0<k.length)return e.valueObj.value=k,1;e.valueObj.value="";return-1}return e.valueObj?1:-1}),g=h.hitch(this,function(e){var k=d(e);0<k&&c.parts.push(e);
return k}),l=h.hitch(this,function(e){var k=[];e.parts=n.filter(e.parts,h.hitch(this,function(f){f=d(f);k.push(f);return 0<f}));1===e.parts.length?c.parts.push(e.parts[0]):2<=e.parts.length&&c.parts.push(e);return Math.min.apply(k,k)}),m=0;m<a.parts.length;m++){var p=a.parts[m];if(p.parts){if(0>l(p)&&b)return null}else if(0>g(p)&&b&&p.valueObj&&"uniquePredefined"!==p.valueObj.type&&"multiplePredefined"!==p.valueObj.type&&"unique"!==p.valueObj.type)return null}return c},_getFilterExprByPartsObj:function(a){this._filterUtils.isHosted=
E.isHostedService(this.url);return this._filterUtils.getExprByFilterObj(a)},_getSingleFilterParameterBySpId:function(a){return this._spObj[a]},_getCascadeFilterPartsObj:function(a){var b={logicalOperator:this.partsObj.logicalOperator,parts:[]},c=h.clone(this.partsObj);var d="none";a.interactiveObj&&a.interactiveObj.cascade&&(d=a.interactiveObj.cascade);if("previous"===d)for(d=0;d<c.parts.length;d++){var g=c.parts[d];if(g.majorCascadeIndex<a.majorCascadeIndex)b.parts.push(g);else if(g.parts&&g.majorCascadeIndex===
a.majorCascadeIndex){var l=h.clone(g);l.parts=n.filter(l.parts,h.hitch(this,function(m){return m.minorCascadeIndex<a.minorCascadeIndex}));b.parts.push(l)}}else if("all"===d)for(d=0;d<c.parts.length;d++)g=c.parts[d],g.majorCascadeIndex!==a.majorCascadeIndex?b.parts.push(g):g.majorCascadeIndex===a.majorCascadeIndex&&g.parts&&(l=h.clone(g),n.some(g.parts,h.hitch(this,function(m){return m.spId===a.spId}))&&(l.parts=n.filter(l.parts,h.hitch(this,function(m){return m.minorCascadeIndex!==a.minorCascadeIndex})),
b.parts.push(l)));return b=this._getNewValidPartsObj(b,!1)},_getCascadeFilterExpr:function(a){var b="1\x3d1";(a=this._getCascadeFilterPartsObj(a))&&(b=this._getFilterExprByPartsObj(a));b||(b="1\x3d1");return b},clear:function(){this.featureLayerId=this.url=null;this.widgetId="";var a=t(".jimu-single-filter-parameter",this.tbody);n.forEach(a,h.hitch(this,function(b){C.byNode(b).destroy()}));r.empty(this.tbody);this.layerInfo=this.partsObj=null},build:function(a,b,c,d,g){var l=new w;this.clear();this.url=
a;this.layerInfo=b;this.partsObj=h.clone(c);this.useStandardizedQueries=this._filterUtils.useStandardizedQueries(b);this.partsObj=this._updatePartsObj(this.partsObj,b);this.featureLayerId=d;this.widgetId=g;this._setCascadeIndexForPartsObj(this.partsObj);a=this._getAllInteractiveSinglePartArray(this.partsObj);var m=this.partsObj.wId;if(0<a.length){var p=new G({url:this.url,layerDefinition:b,featureLayerId:this.featureLayerId});a=n.map(a,h.hitch(this,function(e,k){m&&(e.vpId=m+"_"+k);e.widgetId=this.widgetId;
k=r.create("tr",{innerHTML:"\x3ctd\x3e\x3c/td\x3e"},this.tbody);k=t("td",k)[0];var f=this._getFieldInfo(e.fieldObj.name,this.layerInfo);f=new F({nls:this.nls,url:this.url,layerDefinition:b,fieldInfo:f,part:e,valueProviderFactory:p});this.own(q(f,"change",h.hitch(this,this._onSingleFilterParameterChanged)));this.own(q(f,"enter",h.hitch(this,this._catchSingleFilterParameterEnter)));f.placeAt(k);f.startup();e.spId=f.id;return this._spObj[f.id]=f}));n.forEach(a,h.hitch(this,function(e){e.valueProvider.getCascadeFilterExpr=
h.hitch(this,this._getCascadeFilterExpr,e.part);e.valueProvider.getCascadeFilterPartsObj=h.hitch(this,this._getCascadeFilterPartsObj,e.part)}));a=n.map(a,h.hitch(this,function(e){return e.init()}));x(a).then(h.hitch(this,function(e){l.resolve(e)}),h.hitch(this,function(){l.reject()}))}else l.resolve();return l},_updatePartsObj:function(a){n.forEach(a,h.hitch(this,function(b){b.parts?n.forEach(b.parts,h.hitch(this,function(c){c.interactiveObj&&!0===c.interactiveObj.cascade?c.interactiveObj.cascade=
"previous":!1===c.interactiveObj.cascade&&(c.interactiveObj.cascade="none")})):b.interactiveObj&&!0===b.interactiveObj.cascade?b.interactiveObj.cascade="previous":!1===b.interactiveObj.cascade&&(b.interactiveObj.cascade="none")}));return a},_setCascadeIndexForPartsObj:function(a){for(var b=0;b<a.parts.length;b++){var c=a.parts[b];c.majorCascadeIndex="AND"===a.logicalOperator?b:0;c.minorCascadeIndex=0;c.cascadeIndex=c.majorCascadeIndex;if(c.parts)for(var d=0;d<c.parts.length;d++){var g=c.parts[d];
g.majorCascadeIndex=c.majorCascadeIndex;g.minorCascadeIndex="AND"===c.logicalOperator?d:0;g.cascadeIndex=parseFloat(g.majorCascadeIndex+"."+g.minorCascadeIndex)}}},_getFieldInfo:function(a,b){b=b.fields;for(var c=0;c<b.length;c++){var d=b[c];if(a===d.name)return d}return null},_getAllInteractiveSinglePartArray:function(a){for(var b=[],c=0;c<a.parts.length;c++){var d=a.parts[c];if(d.parts)for(var g=0;g<d.parts.length;g++){var l=d.parts[g];l.interactiveObj&&b.push(l)}else d.interactiveObj&&b.push(d)}return b},
_catchSingleFilterParameterEnter:function(){this.emit("enter")},_onSingleFilterParameterChanged:function(){this.emit("change",this.getFilterExpr(!1))}})});