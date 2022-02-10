// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
require({cache:{"url:widgets/ThreatAnalysis/templates/ThreatAnalysisSettings.html":'\x3cdiv class\x3d"esriCTFullHeight"\x3e\r\n  \x3cdiv class\x3d"esriCTSettingContainer"\x3e\r\n    \x3cdiv\x3e\r\n      \x3cdiv class\x3d"esriCTWrapper"\x3e\r\n        \x3cdiv class\x3d"esriCTLabel" title\x3d"${nls.threatTypeSelectLabel}"\x3e${nls.threatTypeSelectLabel}\x3c/div\x3e\r\n        \x3cdiv class\x3d"esriCTDijitControl"\x3e\r\n          \x3cdiv class\x3d"esriCTDijitWrapper"\x3e\r\n            \x3cselect data-dojo-type\x3d"jimu/dijit/formSelect" class\x3d"SelectStyle esriCTDijitWrapper esriCTThreatInputType esriCTSelectLabelWidth"\r\n              data-dojo-attach-point\x3d"threatType" tabindex\x3d"0" aria-label\x3d"${nls.threatTypeSelectLabel}"\x3e\x3c/select\x3e\r\n          \x3c/div\x3e\r\n        \x3c/div\x3e\r\n      \x3c/div\x3e\r\n    \x3c/div\x3e\r\n    \x3cdiv class\x3d"esriCTWrapper esriCTFullHeight esriCTZonesTableMaxHeight" data-dojo-attach-point\x3d"threatZonesTableNode"\x3e\r\n    \x3c/div\x3e\r\n  \x3c/div\x3e\r\n\x3c/div\x3e'}});
define("dojo/_base/declare dijit/_WidgetBase dijit/_TemplatedMixin dijit/_WidgetsInTemplateMixin dojo/text!../templates/ThreatAnalysisSettings.html dojo/_base/lang dojo/Evented dojo/number dojo/on dojo/_base/array jimu/dijit/SimpleTable ../newZone jimu/utils dijit/focus dojo/keys dijit/form/ValidationTextBox dijit/form/TextBox dijit/form/Select".split(" "),function(m,n,p,q,r,e,t,u,h,f,v,w,k,l){return m([n,p,q,t],{templateString:r,baseClass:"jimu-widget-threatAnalysis",prevThreatType:null,selectedThreatType:null,
selectedUnitAbbr:null,constructor:function(){},postCreate:function(){this._initThreatTypeCtrl(this.threatData);this.selectedUnitAbbr="feet"===this.selectedUnitType.toLowerCase()?this.nls.feetAbbr:this.nls.metersAbbr;this._createZoneTable();this._handleClickEvents()},_handleClickEvents:function(){this.own(h(this.threatType,"change",e.hitch(this,function(a){this.threatType.set("title",a);this._threatZonesTable.clear();this._populateZoneTableRows(a)})))},_createZoneTable:function(){this._threatZonesTable=
new v({fields:[{name:"zoneDescription",title:this.nls.zoneDescriptionColLabel,type:"text",width:"70%"},{name:"distance",title:this.nls.distanceColLabel,type:"text",hidden:!0},{name:"symbol",title:this.nls.symbologyColLabel,type:"text",hidden:!0},{name:"actions",title:this.nls.actions,type:"actions","class":"actions",actions:["edit"],width:"30%"}],selectable:!1});this._threatZonesTable.placeAt(this.threatZonesTableNode);this._threatZonesTable.startup();this.own(h(this._threatZonesTable,"actions-edit",
e.hitch(this,this._onEditZoneInfoClick)))},_populateZoneTableRows:function(a){f.some(this.threatData,e.hitch(this,function(b){a===b.threatName&&f.forEach(b.zones,e.hitch(this,function(c){this._addRowToZoneTable(c)}))}))},_addRowToZoneTable:function(a){var b=a.distance;var c={zoneDescription:this._getZoneNameNls(a.name),distance:u.format(b,{places:2}),symbol:JSON.stringify(a.symbol)};c=this._threatZonesTable.addRow(c);c.success&&c.tr&&(c=c.tr,c.zoneDescription=a.name,c.distance=b,c.symbol=a.symbol)},
_getZoneTableInfo:function(){var a=[];var b=this._threatZonesTable.getRows();f.forEach(b,e.hitch(this,function(c){var g=this._threatZonesTable.getRowData(c),d={name:"",distance:0,symbol:{}};d.name=c.zoneDescription;d.distance=c.distance;d.symbol=JSON.parse(g.symbol);a.push(d)}));return a},_createNewZonePopup:function(a,b,c){a=new w({config:this.config,nls:this.nls,isAddZone:a,currentRow:b,currentRowData:c,disableInputs:!0,unitAbbr:this.selectedUnitAbbr});a.startup();h(a,"zoneInfoUpdated",e.hitch(this,
function(g){if(b){var d={};d.symbol=JSON.stringify(g.symbol);b.symbol={};b.symbol=g.symbol;this._threatZonesTable.editRow(b,d);this._updateOriginalSymbolInfo();setTimeout(e.hitch(this,function(){l.focus(k.getFirstFocusNode(this.refDomNode))}),100);this.emit("ThreatSettingsChanged",{threatName:this.threatType.value,zones:this._getZoneTableInfo()})}}));h(a,"cancelBtnClicked",e.hitch(this,function(){setTimeout(e.hitch(this,function(){l.focus(k.getFirstFocusNode(this.refDomNode))}),100)}))},_updateOriginalSymbolInfo:function(){f.some(this.threatData,
e.hitch(this,function(a){this.threatType.value===a.threatName&&(a.zones=this._getZoneTableInfo(),this._threatZonesTable.clear(),f.forEach(a.zones,e.hitch(this,function(b){this._addRowToZoneTable(b)})))}))},_onEditZoneInfoClick:function(a){var b=this._threatZonesTable.getRowData(a);b&&this._createNewZonePopup(!1,a,b)},_initThreatTypeCtrl:function(a){var b=this,c={"Pipe Bomb":"pipeBombLabel","Suicide Bomb":"suicideBombLabel",Briefcase:"briefcaseLabel",Car:"carLabel","SUV/VAN":"suvVanLabel","Small Delivery Truck":"smallDeliveryTruckLabel",
"Container/Water Truck":"containerWaterTruckLabel","Semi-Trailer":"semiTrailerLabel","Small LPG Tank":"smallLPGTank","Large LPG Tank":"largeLPGTank","Commercial/Residential LPG Tank":"commercialResidentialLPGTank","Small LPG Truck":"smallLPGTruck","Semi-Tanker LPG":"semiTankerLPG"},g=function(d){return void 0!==c[d]?b.nls[c[d]]:d};this.threatType.options=[];this.threatType.addOption({value:"",label:this.nls.selectLabel,defaultSelected:!0,selected:!0,unit:""});f.forEach(a,function(d){this.threatType.addOption({value:d.threatName,
label:k.sanitizeHTML(g(d.threatName)),defaultSelected:!1,selected:!1})},b)},_setLastFocusNode:function(){k.initLastFocusNode(this.refDomNode,this.threatType.domNode)},_getZoneNameNls:function(a){var b={"Mandatory Evacuation Distance":"mandatoryLabel","Safe Evacuation Distance":"safeLabel","Fireball Diameter":"fireBallDiameterLable","Safe Distance":"lpgSafeDistanceLable"};a=void 0!==b[a]?this.nls[b[a]]:a;return a}})});