define(["utils/utils","mvc/ui/ui-select-default","mvc/ui/ui-slider","mvc/ui/ui-options","mvc/ui/ui-drilldown","mvc/ui/ui-button-menu","mvc/ui/ui-button-check","mvc/ui/ui-modal"],function(e,h,i,m,l,r,d,b){var q=Backbone.View.extend({optionsDefault:{url:"",cls:""},initialize:function(s){this.options=e.merge(s,this.optionsDefault);this.setElement(this._template(this.options))},_template:function(s){return'<img class="ui-image '+s.cls+'" src="'+s.url+'"/>'}});var j=Backbone.View.extend({optionsDefault:{title:"",cls:""},initialize:function(s){this.options=e.merge(s,this.optionsDefault);this.setElement(this._template(this.options))},title:function(s){this.$el.html(s)},_template:function(s){return'<label class="ui-label '+s.cls+'">'+s.title+"</label>"},value:function(){return options.title}});var c=Backbone.View.extend({optionsDefault:{floating:"right",icon:"",tooltip:"",placement:"bottom",title:"",cls:""},initialize:function(s){this.options=e.merge(s,this.optionsDefault);this.setElement(this._template(this.options));$(this.el).tooltip({title:s.tooltip,placement:"bottom"})},_template:function(s){return'<div><span class="fa '+s.icon+'" class="ui-icon"/>&nbsp;'+s.title+"</div>"}});var g=Backbone.View.extend({optionsDefault:{id:null,title:"",floating:"right",cls:"ui-button btn btn-default",icon:""},initialize:function(s){this.options=e.merge(s,this.optionsDefault);this.setElement(this._template(this.options));$(this.el).on("click",function(){$(".tooltip").hide();if(s.onclick){s.onclick()}});$(this.el).tooltip({title:s.tooltip,placement:"bottom"})},_template:function(s){var t='<button id="'+s.id+'" type="submit" style="float: '+s.floating+';" type="button" class="'+s.cls+'">';if(s.icon){t+='<i class="icon fa '+s.icon+'"></i>&nbsp;'}t+=s.title+"</button>";return t}});var o=Backbone.View.extend({optionsDefault:{id:null,title:"",floating:"right",cls:"ui-button-icon",icon:"",tooltip:"",onclick:null},initialize:function(t){this.options=e.merge(t,this.optionsDefault);this.setElement(this._template(this.options));this.$button=this.$el.find(".button");var s=this;$(this.el).on("click",function(){$(".tooltip").hide();if(t.onclick&&!s.disabled){t.onclick()}});$(this.el).tooltip({title:t.tooltip,placement:"bottom"})},disable:function(){this.$button.addClass("disabled");this.disabled=true},enable:function(){this.$button.removeClass("disabled");this.disabled=false},setIcon:function(s){this.$("i").removeClass(this.options.icon).addClass(s);this.options.icon=s},_template:function(s){var t="";if(s.title){t="width: auto;"}var u='<div id="'+s.id+'" style="float: '+s.floating+"; "+t+'" class="'+s.cls+'">';if(s.title){u+='<div class="button"><i class="icon fa '+s.icon+'"/>&nbsp;<span class="title">'+s.title+"</span></div>"}else{u+='<i class="icon fa '+s.icon+'"/>'}u+="</div>";return u}});var p=Backbone.View.extend({optionsDefault:{title:"",cls:""},initialize:function(s){this.options=e.merge(s,this.optionsDefault);this.setElement(this._template(this.options));$(this.el).on("click",s.onclick)},_template:function(s){return'<div><a href="javascript:void(0)" class="ui-anchor '+s.cls+'">'+s.title+"</a></div>"}});var a=Backbone.View.extend({optionsDefault:{message:null,status:"info",persistent:false},initialize:function(s){this.options=e.merge(s,this.optionsDefault);this.setElement("<div></div>");if(this.options.message){this.update(this.options)}},update:function(t){this.options=e.merge(t,this.optionsDefault);if(t.message!=""){this.$el.html(this._template(this.options));this.$el.find(".alert").append(t.message);this.$el.fadeIn();if(this.timeout){window.clearTimeout(this.timeout)}if(!t.persistent){var s=this;this.timeout=window.setTimeout(function(){if(s.$el.is(":visible")){s.$el.fadeOut()}else{s.$el.hide()}},3000)}}else{this.$el.fadeOut()}},_template:function(s){return'<div class="ui-message alert alert-'+s.status+'"/>'}});var f=Backbone.View.extend({optionsDefault:{onclick:null,searchword:""},initialize:function(t){this.options=e.merge(t,this.optionsDefault);this.setElement(this._template(this.options));var s=this;if(this.options.onclick){this.$el.on("submit",function(v){var u=s.$el.find("#search");s.options.onclick(u.val())})}},_template:function(s){return'<div class="ui-search"><form onsubmit="return false;"><input id="search" class="form-control input-sm" type="text" name="search" placeholder="Search..." value="'+s.searchword+'"><button type="submit" class="btn search-btn"><i class="fa fa-search"></i></button></form></div>'}});var n=Backbone.View.extend({optionsDefault:{type:"text",placeholder:"",disabled:false,visible:true,cls:"",area:false},initialize:function(t){this.options=e.merge(t,this.optionsDefault);this.setElement(this._template(this.options));if(this.options.value!==undefined){this.value(this.options.value)}if(this.options.disabled){this.$el.prop("disabled",true)}if(!this.options.visible){this.$el.hide()}var s=this;this.$el.on("input",function(){if(s.options.onchange){s.options.onchange(s.$el.val())}})},value:function(s){if(s!==undefined){this.$el.val(s)}return this.$el.val()},_template:function(s){if(s.area){return'<textarea id="'+s.id+'" class="ui-textarea '+s.cls+'"></textarea>'}else{return'<input id="'+s.id+'" type="'+s.type+'" value="'+s.value+'" placeholder="'+s.placeholder+'" class="ui-input '+s.cls+'">'}}});var k=Backbone.View.extend({initialize:function(s){this.options=s;this.setElement(this._template(this.options));if(this.options.value!==undefined){this.value(this.options.value)}},value:function(s){if(s!==undefined){this.$("hidden").val(s)}return this.$("hidden").val()},_template:function(t){var s='<div id="'+t.id+'" >';if(t.info){s+="<label>"+t.info+"</label>"}s+='<hidden value="'+t.value+'"/></div>';return s}});return{Anchor:p,Button:g,ButtonIcon:o,ButtonCheck:d,ButtonMenu:r,Icon:c,Image:q,Input:n,Label:j,Message:a,Modal:b,RadioButton:m.RadioButton,Checkbox:m.Checkbox,Radio:m.Radio,Searchbox:f,Select:h,Hidden:k,Slider:i,Drilldown:l}});