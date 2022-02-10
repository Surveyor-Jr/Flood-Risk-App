// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
require({cache:{"url:widgets/SituationAwareness/js/PropertyHelper.html":'\x3cdiv\x3e  \r\n  \x3cdiv class\x3d"jimu-r-row"\x3e\r\n    \x3ctable class\x3d"width-all"\x3e\r\n      \x3c!--name--\x3e\r\n      \x3ctr data-dojo-attach-point\x3d"nameRow"\x3e\r\n        \x3ctd class\x3d"col-1-2"\x3e\r\n          \x3cspan class\x3d"label" data-dojo-attach-point\x3d"nameSpan"\x3e\x3c/span\x3e\r\n        \x3c/td\x3e\r\n        \x3ctd class\x3d"col-1-2"\x3e\r\n          \x3cinput class\x3d"width-all" data-dojo-attach-point\x3d"snapshotName" data-dojo-type\x3d"dijit/form/ValidationTextBox" /\x3e\r\n        \x3c/td\x3e\r\n      \x3c/tr\x3e\r\n      \x3c!--share--\x3e\r\n      \x3ctr data-dojo-attach-point\x3d"shareRow"\x3e\r\n        \x3ctd class\x3d"width-all pad-top-10"\x3e\r\n          \x3cspan class\x3d"hintText"\x3e${nls.select_group_instruction}\x3c/span\x3e\r\n        \x3c/td\x3e\r\n        \x3ctd class\x3d"col-1-2 pad-top-10"\x3e\r\n          \x3cspan class\x3d"label" data-dojo-attach-point\x3d"shareSpan"\x3e\x3c/span\x3e\r\n        \x3c/td\x3e\r\n        \x3ctd class\x3d"col-1-2 pad-top-10"\x3e\r\n          \x3cdiv data-dojo-attach-point\x3d"shareSelect"\x3e\x3c/div\x3e\r\n        \x3c/td\x3e\r\n      \x3c/tr\x3e\r\n      \x3c!--orientation--\x3e\r\n      \x3ctr data-dojo-attach-point\x3d"orientationRow"\x3e\r\n        \x3ctd class\x3d"col-1-2 pad-top-10"\x3e\r\n          \x3cspan class\x3d"label" data-dojo-attach-point\x3d"orientationSpan"\x3e${nls.orientation}:\x3c/span\x3e\r\n        \x3c/td\x3e\r\n        \x3ctd class\x3d"col-1-2 pad-top-10"\x3e\r\n          \x3cdiv data-dojo-attach-point\x3d"orientationSelect"\x3e\x3c/div\x3e\r\n        \x3c/td\x3e\r\n      \x3c/tr\x3e\r\n      \x3c!--page size--\x3e\r\n      \x3ctr data-dojo-attach-point\x3d"pageSizeRow"\x3e\r\n        \x3ctd class\x3d"col-1-2 pad-top-10"\x3e\r\n          \x3cspan class\x3d"label" data-dojo-attach-point\x3d"pageSizeSpan"\x3e${nls.pageSize}:\x3c/span\x3e\r\n        \x3c/td\x3e\r\n        \x3ctd class\x3d"col-1-2 pad-top-10"\x3e\r\n          \x3cdiv data-dojo-attach-point\x3d"pageSizeSelect"\x3e\x3c/div\x3e\r\n        \x3c/td\x3e\r\n      \x3c/tr\x3e\r\n    \x3c/table\x3e\r\n  \x3c/div\x3e\r\n  \x3c!--comments--\x3e\r\n  \x3cdiv class\x3d"display-off pad-top-10" data-dojo-attach-point\x3d"commentsRow"\x3e\r\n    \x3cdiv class\x3d"jimu-r-row pad-top-5"\x3e\r\n      \x3cdiv class\x3d"jimu-r-row"\x3e\r\n        \x3cspan class\x3d"label" data-dojo-attach-point\x3d"commentsSpan"\x3e${nls.comments}:\x3c/span\x3e\r\n      \x3c/div\x3e\r\n    \x3c/div\x3e\r\n    \x3cdiv class\x3d"jimu-r-row pad-top-5"\x3e\r\n      \x3ctextarea aria-label\x3d"${nls.comments}" class\x3d"commentTextArea" data-dojo-attach-point\x3d"commentTextArea" rows\x3d"5"\x3e\x3c/textarea\x3e\r\n    \x3c/div\x3e\r\n  \x3c/div\x3e\r\n  \x3cdiv class\x3d"snapshot-name-footer jimu-float-trailing pad-top-10"\x3e\r\n    \x3cdiv role\x3d"button" tabindex\x3d"-1" class\x3d"jimu-btn ok pad-right-5 jimu-state-disabled" data-dojo-attach-point\x3d"btnOk"\x3e\x3c/div\x3e\r\n    \x3cdiv role\x3d"button" tabindex\x3d"0" class\x3d"jimu-btn cancel" data-dojo-attach-point\x3d"btnCancel"\x3e\x3c/div\x3e\r\n  \x3c/div\x3e\r\n\x3c/div\x3e\r\n'}});
define("dojo/_base/declare dijit/_WidgetsInTemplateMixin dojo/_base/lang dojo/_base/html dojo/dom-class dojo/on dojo/dom-attr dojo/keys dojo/query dojo/Deferred jimu/BaseWidget jimu/portalUtils dojo/Evented dojo/text!./PropertyHelper.html jimu/dijit/formSelect dijit/form/ValidationTextBox".split(" "),function(v,w,d,k,m,l,e,n,r,x,y,z,A,B,C){return v([y,w,A],{templateString:B,baseClass:"jimu-widget-SAT-property-helper",constructor:function(){},postMixInProperties:function(){this.inherited(arguments);
this.nls.common=window.jimuNls.common},postCreate:function(){this.inherited(arguments);this.windowResize=this.own(l(window,"resize",d.hitch(this,this._resize)));"report"===this.type?this.initReportControls():this.initSnapshotControls();this.startup()},_resize:function(){var a=!isNaN(window.innerWidth)&&null!==window.innerWidth&&""!==window.innerWidth&&window.innerWidth?window.innerWidth:450;this.popup.width=450<=a?450:a},startup:function(){this.snapshotName.invalidMessage=this.invalidMessage;this.snapshotName.validator=
"report"===this.type?this.checkReportString:this.checkString;this.btnCancel.innerText=this.nls.common.cancel;e.set(this.btnCancel,"aria-label",this.nls.common.cancel);this.own(l(this.btnCancel,"click",d.hitch(this,function(){this.emit("cancel")})));this.own(l(this.btnCancel,"keydown",d.hitch(this,function(a){a.keyCode!==n.ENTER&&a.keyCode!==n.SPACE||this.emit("cancel")})));this.btnOk.innerText=this.nls.common.ok;e.set(this.btnOk,"aria-label",this.nls.common.ok);this.own(l(this.btnOk,"click",d.hitch(this,
function(){this.onOkButtonClicked()})));this.own(l(this.btnOk,"keydown",d.hitch(this,function(a){if(a.keyCode===n.ENTER||a.keyCode===n.SPACE)this.onOkButtonClicked()})))},onOkButtonClicked:function(){if(!m.contains(this.btnOk,"jimu-state-disabled")){var a={name:this.snapshotName.value.trim()};"report"===this.type?a=d.mixin(a,{reportLayout:{orientation:this.pageUtils.Orientation[this.orientationSelect.selectControl.value],pageSize:this.pageUtils.PageSizes[this.pageSizeSelect.selectControl.value]},
comments:this.commentTextArea.value}):a.groups=[this.shareSelect.selectControl.value!==this.nls.choose_group?this.shareSelect.selectControl.value:""];this.emit("ok",a)}},initWidth:function(){this._resize()},checkString:function(a){a=101>a.trim().length;var b=r(".snapshot-name-footer")[0];b&&(this.hasNoGroups?(k.addClass(b.children[0],"jimu-state-disabled"),e.set(b.children[0],"tabindex","-1")):a?(k.removeClass(b.children[0],"jimu-state-disabled"),e.set(b.children[0],"tabindex","0")):(k.addClass(b.children[0],
"jimu-state-disabled"),e.set(b.children[0],"tabindex","-1")));return a},checkReportString:function(a){a=0<a.trim().length?!0:!1;var b=r(".snapshot-name-footer")[0];b&&(a?(k.removeClass(b.children[0],"jimu-state-disabled"),e.set(b.children[0],"tabindex","0")):(k.addClass(b.children[0],"jimu-state-disabled"),e.set(b.children[0],"tabindex","-1")));return a},getPageUtilValues:function(a,b,c){var f="A3 A4 Letter_ANSI_A Tabloid_ANSI_B Landscape Portrait".split(" "),g=["Letter ANSI A","Portrait"],h=Object.keys(a),
t=[],u;for(u in h){var p=h[u],q=a[p];p&&q.hasOwnProperty(b)&&-1<f.indexOf(p)&&t.push({label:q[b],value:p,selected:q[b]===c||-1<g.indexOf(q[b])})}return t},getGroupValues:function(a){var b=new x;z.getPortal(this.portalUrl).getUser().then(d.hitch(this,function(c){var f=[],g;for(g in c.groups){var h=c.groups[g];f.push({label:h.title,value:h.id,selected:h.title===a})}b.resolve(f)}),d.hitch(this,function(c){console.log(c);b.resolve([])}));return b},initSnapshotControls:function(){this.nameSpan.innerHTML=
this.nls.common.name+":";this.shareSpan.innerHTML=this.nls.select_group+":";this.toggleRow(this.shareRow,!1);this.toggleRow(this.orientationRow,!0);this.toggleRow(this.pageSizeRow,!0);this.toggleRow(this.commentsRow,!0);if(null!==this.storedProps){var a=JSON.parse(this.storedProps,!0);if(a.share)var b=a.share}this.getGroupValues(b).then(d.hitch(this,function(c){0===c.length?this.snapshotName.hasNoGroups=!0:(this.snapshotName.hasNoGroups=!1,c=c.sort(function(f,g){return f.label.toLowerCase()<g.label.toLowerCase()?
-1:f.label.toLowerCase()>g.label.toLowerCase()?1:0}));this.addSelect(this.shareSpan.innerHTML,this.shareSelect,c)}))},initReportControls:function(){this.nameSpan.innerHTML=this.nls.common.title+":";this.toggleRow(this.orientationRow,!1);this.toggleRow(this.pageSizeRow,!1);this.toggleRow(this.commentsRow,!1);this.toggleRow(this.shareRow,!0);if(null!==this.storedProps){var a=JSON.parse(this.storedProps,!0);if(a.reportLayout){var b=a.reportLayout.pageSize;var c=a.reportLayout.orientation.Text;b=b.SizeName}}this.addSelect(this.nls.orientation,
this.orientationSelect,this.getPageUtilValues(this.pageUtils.Orientation,"Text",c));this.addSelect(this.nls.pageSize,this.pageSizeSelect,this.getPageUtilValues(this.pageUtils.PageSizes,"SizeName",b))},addSelect:function(a,b,c){b.selectControl=new C({options:c,"aria-label":a,style:"width: 100%;"});b.selectControl.placeAt(b).startup()},toggleRow:function(a,b){m.contains(a,b?"display-on":"display-off")&&m.remove(a,b?"display-on":"display-off");m.add(a,b?"display-off":"display-on")},destroy:function(){}})});