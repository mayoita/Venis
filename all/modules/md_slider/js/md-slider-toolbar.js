(function(b){var a=function(d){var e=this;this.panel=d;this.selectedItem=null;this.init=function(){b("#md-toolbar a").click(function(){if(b(this).hasClass("mdt-text")){e.panel.addBoxItem("text")}else{if(b(this).hasClass("mdt-image")){e.panel.addBoxItem("image")}else{if(b(this).hasClass("mdt-video")){e.panel.addBoxItem("video")}else{if(b(this).hasClass("mdt-align-left")){e.panel.alignLeftSelectedBox()}else{if(b(this).hasClass("mdt-align-right")){e.panel.alignRightSelectedBox()}else{if(b(this).hasClass("mdt-align-center")){e.panel.alignCenterSelectedBox()}else{if(b(this).hasClass("mdt-align-top")){e.panel.alignTopSelectedBox()}else{if(b(this).hasClass("mdt-align-bottom")){e.panel.alignBottomSelectedBox()}else{if(b(this).hasClass("mdt-align-vcenter")){e.panel.alignMiddleSelectedBox(b("input.mdt-spacei","#md-toolbar").val())}else{if(b(this).hasClass("mdt-spacev")){e.panel.spaceVertical(b("input.mdt-spacei","#md-toolbar").val())}else{if(b(this).hasClass("mdt-spaceh")){e.panel.spaceHorizontal(b("input.mdt-spacei","#md-toolbar").val())}}}}}}}}}}}return false});b("input.mdt-width","#md-toolbar").keyup(function(){if(b("a.mdt-proportions","#md-toolbar").hasClass("mdt-proportions-yes")){var g=b("a.mdt-proportions","#md-toolbar").data("proportions");if(g>0){b("input.mdt-height","#md-toolbar").val(Math.round(b(this).val()/g))}}});b("input.mdt-height","#md-toolbar").keyup(function(){if(b("a.mdt-proportions","#md-toolbar").hasClass("mdt-proportions-yes")){var g=b("a.mdt-proportions","#md-toolbar").data("proportions");if(g>0){b("input.mdt-width","#md-toolbar").val(Math.round(b(this).val()*g))}}});b("input, select","#md-toolbar").keypress(function(g){var h=g.keyCode||g.which;if(h==13){b(this).trigger("change");g.preventDefault()}});b("input.mdt-input, select.mdt-input","#md-toolbar").change(function(){var g=b(this).attr("name");switch(g){case"background-transparent":case"background-color":e.panel.setItemBackground(g,b(this).val());return true;break;case"left":case"top":e.panel.setItemAttribute(g,b(this).val());break;case"width":case"height":e.panel.setItemSize(b("input.mdt-width","#md-toolbar").val(),b("input.mdt-height","#md-toolbar").val());break;case"font-size":e.panel.setItemFontSize(g,b(this).val());break;case"style":e.panel.setItemStyle(g,b(this).val());break;case"opacity":e.panel.setItemOpacity(g,b(this).val());break;case"mdtclass":e.panel.setItemClass(g,b(this).val());break;case"color":e.panel.setItemColor(b(this).val());break;case"border-color":e.panel.setItemBorderColor(g,b(this).val());break;case"border-width":e.panel.setItemCssPx(g,b(this).val());break;case"border-style":e.panel.changeBorderStyle(b(this).val());break;default:e.panel.setItemCss(g,b(this).val())}return false});b("a.button-style","#md-toolbar").click(function(){if(b(this).hasClass("active")){e.panel.setItemCss(b(this).attr("name"),b(this).attr("normal"));b(this).removeClass("active")}else{e.panel.setItemCss(b(this).attr("name"),b(this).attr("active"));b(this).addClass("active")}return false});b("a.button-align","#md-toolbar").click(function(){if(b(this).hasClass("active")){if(b(this).hasClass("mdt-left-alignment")){return}e.panel.setItemCss("text-align","left");b("a.mdt-left-alignment","#md-toolbar").addClass("active");b(this).removeClass("active")}else{e.panel.setItemCss("text-align",b(this).attr("value"));b("a.button-align","#md-toolbar").removeClass("active");b(this).addClass("active")}return false});b("textarea","#md-toolbar").keyup(function(){e.panel.setItemTitle(b(this).val())});b("a.mdt-proportions","#md-toolbar").click(function(){if(!(b("#md-toolbar").attr("disabled"))||b("#md-toolbar").attr("disabled")=="false"){if(b(this).hasClass("mdt-proportions-yes")){b(this).removeClass("mdt-proportions-yes")}else{var h=b("input.mdt-width","#md-toolbar").val();var g=b("input.mdt-height","#md-toolbar").val();var i=1;if(h>0&&g>0){i=h/g}b(this).data("proportions",i);b(this).addClass("mdt-proportions-yes")}}});b("#dlg-video").dialog({resizable:false,autoOpen:false,draggable:false,modal:true,width:680,buttons:{OK:function(){e.updateVideo(b("#videoid").val(),b("#videoname").val(),b("#videothumb").attr("src"));b(this).dialog("close")}},open:function(){var g=e.getVideoValue();b("#videoid").val(g.id);b("#videoname").val(g.name);b("#videothumb").attr("src",g.thumbsrc)},close:function(){b(this).empty()}});b("input[name=background-color]","#md-toolbar").spectrum({showInput:true,allowEmpty:true,preferredFormat:"hex",showButtons:false,move:function(g){if(g){b("input[name=background-color]","#md-toolbar").val(g.toHexString()).trigger("change")}else{b("input[name=background-color]","#md-toolbar").val("").trigger("change")}},hide:function(){var g=b("input[name=background-color]","#md-toolbar").val();if(g!=""){b("input[name=background-transparent]","#md-toolbar").removeAttr("disabled");b("input[name=background-color]","#md-toolbar").spectrum("set",g)}else{b("input[name=background-transparent]","#md-toolbar").attr("disabled","disabled");b("input[name=background-color]","#md-toolbar").spectrum("set","")}}});b("input.mdt-color","#md-toolbar").spectrum({showInput:true,allowEmpty:true,preferredFormat:"hex",showButtons:false,move:function(g){if(g){b("input.mdt-color","#md-toolbar").val(g.toHexString()).trigger("change")}else{b("input.mdt-color","#md-toolbar").val("").trigger("change")}},hide:function(){var g=b("input.mdt-color","#md-toolbar").val();if(g!=""){b("input.mdt-color","#md-toolbar").spectrum("set",g)}else{b("input.mdt-color","#md-toolbar").spectrum("set","")}}});b(".panel-change-videothumb").live("click",function(){Drupal.media.popups.mediaBrowser(function(h){var g=h[0];b("#videothumb").attr("src",g.url)})});b("#btn-search").live("click",function(){var h=b("#txtvideoid").val();var g=Drupal.settings.basePath+Drupal.settings.pathPrefix+"?q=admin/structure/md-slider/get-video-info";g=location.protocol+"//"+location.host+g;b.getJSON(g,{url:h},function(i){switch(i.type){case"youtube":if(i.data){var j=i.data;b("#videoid").val(i.fid);b("#videoname").val(j.title);b("#videothumb").attr("src",j.thumbnail_url)}break;case"vimeo":if(i.data){var j=i.data;b("#videoid").val(j.id);b("#videoname").val(j.title);b("#videothumb").attr("src",j.thumbnail_small)}break;default:alert("Could not find video info for this link. Try again!");break}if(b("#videothumb").size()<=0){b("#videothumb").parent().append('<a class="panel-change-videothumb" href="#">[Change video thumb]</a>')}})});b("#change-video").click(function(){var h=e.getVideoValue();var i=(h.id!="")?1:0;var g=Drupal.settings.basePath+Drupal.settings.pathPrefix+"?q=admin/structure/md-slider/video-setting";g=location.protocol+"//"+location.host+g;b.post(g,{change:i},function(j){b("#dlg-video").append(j).dialog("open")});return false});b("#change-image").click(function(){Drupal.media.popups.mediaBrowser(function(h){var g=h[0];b("textarea.mdt-imgalt","#md-toolbar").val(g.filename);b("img.mdt-imgsrc","#md-toolbar").attr("src",g.url);b("input.mdt-fileid","#md-toolbar").val(g.fid);e.panel.setImageData(g.fid,g.filename,g.url)})});b("#md-toolbar select.mdt-font-family").change(function(){e.panel.changeFontFamily(b(this).val());e.changeFontWeightOption(b("option:selected",this).data("fontweight"))});b("#md-toolbar select.mdt-font-weight").change(function(){var g=b(this).val();b(this).data("value",g);e.panel.setItemFontWeight(g)});b("#border-position a").click(function(){if(b(this).hasClass("bp-all")){var g=b(this).siblings();if(g.filter(".active").size()<4){g.addClass("active")}else{g.removeClass("active")}}else{b(this).toggleClass("active")}e.changeBorderPosition()});b("#border-color","#md-toolbar").spectrum({showInput:true,preferredFormat:"hex",showButtons:false,move:function(g){if(g){b("#border-color","#md-toolbar").val(g.toHexString()).trigger("change")}else{b("#border-color","#md-toolbar").val("").trigger("change")}},hide:function(g){var g=b("#border-color","#md-toolbar").val();b("#border-color","#md-toolbar").spectrum("set",g)}});b("#md-toolbar input.mdt-border-radius").change(function(){if(b(this).val()!=""&&!isNaN(b(this).val())){if(b(this).siblings("input.mdt-border-radius").filter("[value=]").size()==3){var g=parseInt(b(this).val());b(this).siblings("input.mdt-border-radius").each(function(){b(this).val(g);e.panel.setItemCssPx(b(this).attr("name"),g)})}}else{b(this).val(0)}e.panel.setItemCssPx(b(this).attr("name"),b(this).val())});b("#md-toolbar input.mdt-padding").change(function(){if(b(this).val()!=""&&!isNaN(b(this).val())){if(b(this).siblings("input.mdt-padding").filter("[value=]").size()==3){var g=parseInt(b(this).val());b(this).siblings("input.mdt-padding").each(function(){b(this).val(g);e.panel.setItemCssPx(b(this).attr("name"),g)})}}else{b(this).val(0)}e.panel.setItemCssPx(b(this).attr("name"),b(this).val())});b("#md-toolbar input.mdt-custom-class").change(function(){var g=b(this).val();b(this).data("value",g);e.panel.setItemClass(g)});b("#md-toolbar a.mdt-addlink").click(function(){var g=e.selectedItem.getItemValues();var h=b.extend({value:"",title:"",color:"",background:"",transparent:"",border:"",target:""},g.link);b("#mdt-linkexpand input.mdt-link-value").val(h.value);b("#mdt-linkexpand input.mdt-link-title").val(h.title);b("#mdt-linkexpand input.link-color").val(h.color);b("#mdt-linkexpand select.mdt-link-target").val(h.target);if(h.color){b("#mdt-linkexpand input.link-color").spectrum("set","#"+h.color)}else{b("#mdt-linkexpand input.link-color").spectrum("set","")}b("#mdt-linkexpand input.link-background").val(h.background);if(h.background){b("#mdt-linkexpand input.link-background").spectrum("set","#"+h.background)}else{b("#mdt-linkexpand input.link-background").spectrum("set","")}b("#mdt-linkexpand input.link-background-transparent").val(h.transparent);b("#mdt-linkexpand input.link-border").val(h.border);if(h.border){b("#mdt-linkexpand input.link-border").spectrum("set","#"+h.border)}else{b("#mdt-linkexpand input.link-border").spectrum("set","")}b("#mdt-linkexpand").data("item",e.selectedItem).show();b(document).bind("click",f)});b("#mdt-linkexpand a.mdt-link-close").click(function(){b("#mdt-linkexpand").data("item",null);b("#mdt-linkexpand").hide()});b("#link-color, #link-background, #link-border").spectrum({allowEmpty:true,preferredFormat:"hex",showInput:true,showButtons:false,move:function(g){if(g){b(this).val(g.toHexString())}else{b(this).val("")}},hide:function(){var g=b(this).val();b(this).spectrum("set",g)}});b("#mdt-linkexpand a.mdt-link-save").click(function(){e.saveLinkData();b("#mdt-linkexpand").hide();b(document).unbind("click",f)});b("#mdt-linkexpand a.mdt-link-remove").click(function(){var g=b("#mdt-linkexpand").data("item");if(g!=null){b(g).data("link",null)}b("#mdt-linkexpand").data("item",null);b("#mdt-linkexpand").hide()});e.disableToolbar()};this.saveLinkData=function(){var h=b("#mdt-linkexpand").data("item"),g={value:b("#mdt-linkexpand input.mdt-link-value").val(),title:b("#mdt-linkexpand input.mdt-link-title").val(),target:b("#mdt-linkexpand select.mdt-link-target").val(),color:b("#mdt-linkexpand input.link-color").val(),background:b("#mdt-linkexpand input.link-background").val(),transparent:b("#mdt-linkexpand input.link-background-transparent").val(),border:b("#mdt-linkexpand input.link-border").val()};b("#link-color, #link-background, #link-border").spectrum("hide");if(g.value!=""&&h!=null){b(h).data("link",g)}};this.changeBorderPosition=function(){var j=b("#border-position a.bp-top").hasClass("active")?1:0,g=b("#border-position a.bp-right").hasClass("active")?2:0,h=b("#border-position a.bp-bottom").hasClass("active")?4:0,i=b("#border-position a.bp-left").hasClass("active")?8:0;e.panel.changeBorderPosition(j+g+h+i)};this.weightArray={"100":"Thin","100italic":"Thin Italic","200":"Extra Light","200italic":"Extra Light Italic","300":"Light","300italic":"Light Italic","400":"Normal","400italic":"Italic","500":"Medium","500italic":"Medium Italic","600":"Semi Bold","600italic":"Semi Bold Italic","700":"Bold","700italic":"Bold Italic","800":"Extra Bold","800italic":"Extra Bold Italic","900":"Heavy","900italic":"Heavy Italic"};this.changeFontWeightOption=function(k){var h='<option value=""></option>';var m=b("#md-toolbar select.mdt-font-weight").data("value");if(k){var k=""+k+"",n=(k.search(",")!=-1)?k.split(","):[k],g=e.weightArray;for(var j=0;j<n.length;j++){var l=n[j];h+='<option value="'+l+'">'+g[l]+"</option>"}}b("#md-toolbar select.mdt-font-weight").html(h).val(m)};this.changeSelectItem=function(g){this.selectedItem=g;this.triggerChangeSelectItem()};this.triggerChangeSelectItem=function(){e.saveLinkData();b("#mdt-linkexpand").hide();if(this.selectedItem==null){this.disableToolbar()}else{this.changeToolbarValue();if(b("#md-toolbar").attr("disabled")){this.enableToolbar()}}};this.disableToolbar=function(){b("input, select, textarea","#md-toolbar").not("input.mdt-spacei").val("").attr("disabled",true);b("#md-toolbar div.mdt-item-type").hide();b("#md-toolbar").attr("disabled",true)};this.enableToolbar=function(){b("input, select, textarea","#md-toolbar").removeAttr("disabled");b("#md-toolbar").attr("disabled",false)};this.changeToolbarValue=function(){if(this.selectedItem!=null){var g=this.selectedItem.getItemValues();b("input.mdt-width","#md-toolbar").val(g.width);b("input.mdt-height","#md-toolbar").val(g.height);b("input.mdt-left","#md-toolbar").val(g.left);b("input.mdt-top","#md-toolbar").val(g.top);b("input.mdt-starttime","#md-toolbar").val(g.starttime);b("input.mdt-stoptime","#md-toolbar").val(g.stoptime);b("select.mdt-startani","#md-toolbar").val(g.startani);b("select.mdt-stopani","#md-toolbar").val(g.stopani);b("input.mdt-opacity","#md-toolbar").val(g.opacity);b("input.mdt-custom-class","#md-toolbar").val(g.mdtclass);b("select.mdt-style","#md-toolbar").val(g.style);b("input.mdt-background","#md-toolbar").val(g.backgroundcolor);if(g.backgroundcolor){b("input[name=background-color]","#md-toolbar").spectrum("set","#"+g.backgroundcolor)}else{b("input[name=background-color]","#md-toolbar").spectrum("set","")}b("input.mdt-background-transparent","#md-toolbar").val(g.backgroundtransparent);b("#border-position a").removeClass("active");var h=g.borderposition;if(h&1){b("#border-position a.bp-top").addClass("active")}if(h&2){b("#border-position a.bp-right").addClass("active")}if(h&4){b("#border-position a.bp-bottom").addClass("active")}if(h&8){b("#border-position a.bp-left").addClass("active")}b("input.mdt-border-width","#md-toolbar").val(g.borderwidth);b("select.mdt-border-style","#md-toolbar").val(g.borderstyle);if(g.bordercolor){b("#border-color","#md-toolbar").spectrum("set","#"+g.bordercolor)}else{b("#border-color","#md-toolbar").spectrum("set","")}b("input.border-color","#md-toolbar").val(g.bordercolor);b("input.mdt-br-topleft","#md-toolbar").val(g.bordertopleftradius);b("input.mdt-br-topright","#md-toolbar").val(g.bordertoprightradius);b("input.mdt-br-bottomright","#md-toolbar").val(g.borderbottomrightradius);b("input.mdt-br-bottomleft","#md-toolbar").val(g.borderbottomleftradius);b("input.mdt-p-top","#md-toolbar").val(g.paddingtop);b("input.mdt-p-right","#md-toolbar").val(g.paddingright);b("input.mdt-p-bottom","#md-toolbar").val(g.paddingbottom);b("input.mdt-p-left","#md-toolbar").val(g.paddingleft);var i=1;if(g.width>0&&g.height>0){i=g.width/g.height}b("a.mdt-proportions","#md-toolbar").data("proportions",i);var j=b("#md-toolbar div.mdt-item-type").hide();if(g.type=="text"){b("textarea.mdt-textvalue","#md-toolbar").val(g.title);b(j).filter(".mdt-type-text").show();b("input.mdt-fontsize","#md-toolbar").val(g.fontsize);b("select.mdt-font-family","#md-toolbar").val(g.fontfamily).trigger("change");b("select.mdt-font-weight","#md-toolbar").val(g.fontweight);b("a.mdt-font-bold","#md-toolbar").toggleClass("active",(g.fontweight=="bold"));b("a.mdt-font-italic","#md-toolbar").toggleClass("active",(g.fontstyle=="italic"));b("a.mdt-font-underline","#md-toolbar").toggleClass("active",(g.textdecoration=="underline"));b("a.mdt-font-allcaps","#md-toolbar").toggleClass("active",(g.texttransform=="uppercase"));b("a.mdt-left-alignment","#md-toolbar").toggleClass("active",(g.textalign=="left"));b("a.mdt-center-alignment","#md-toolbar").toggleClass("active",(g.textalign=="center"));b("a.mdt-right-alignment","#md-toolbar").toggleClass("active",(g.textalign=="right"));b("a.mdt-justified-alignment","#md-toolbar").toggleClass("active",(g.textalign=="justified"));b("input.mdt-color","#md-toolbar").val(g.color);if(g.color){b("input.mdt-color","#md-toolbar").spectrum("set","#"+g.color)}else{b("input.mdt-color","#md-toolbar").spectrum("set","")}}else{if(g.type=="image"){b("textarea.mdt-imgalt","#md-toolbar").val(g.title);b("img.mdt-imgsrc","#md-toolbar").attr("src",g.thumb);b("input.mdt-fileid","#md-toolbar").val(g.fileid);b(j).filter(".mdt-type-image").show()}else{if(g.type=="video"){b("textarea.mdt-videoname","#md-toolbar").val(g.title);b("input.mdt-video-fileid","#md-toolbar").val(g.fileid);b("img.mdt-videosrc","#md-toolbar").attr("src",g.thumb);b(j).filter(".mdt-type-video").show();b("#md-toolbar input.mdt-color").attr("disabled",true)}}}}};this.changePositionValue=function(h,g){b("input.mdt-left","#md-toolbar").val(Math.round(h));b("input.mdt-top","#md-toolbar").val(Math.round(g))};this.changeSizeValue=function(h,g){b("input.mdt-width","#md-toolbar").val(Math.round(h));b("input.mdt-height","#md-toolbar").val(Math.round(g))};this.getItemSetting=function(){return{starttime:b("input.mdt-starttime","#md-toolbar").val(),stoptime:b("input.mdt-stoptime","#md-toolbar").val(),startani:b("select.mdt-startani","#md-toolbar").val(),stopani:b("select.mdt-stopani","#md-toolbar").val(),customclass:b("input.mdt-custom-class","#md-toolbar").val(),style:b("select.mdt-style","#md-toolbar").val()}};this.changeTimelineValue=function(){if(this.selectedItem!=null){b("input.mdt-starttime","#md-toolbar").val(Math.round(this.selectedItem.data("starttime")));b("input.mdt-stoptime","#md-toolbar").val(Math.round(this.selectedItem.data("stoptime")))}};this.updateVideo=function(i,g,h){b("textarea.mdt-videoname","#md-toolbar").val(g);b("input.mdt-video-fileid","#md-toolbar").val(i);b("img.mdt-videosrc","#md-toolbar").attr("src",h);e.panel.setVideoData(i,g,h)};this.getVideoValue=function(){return{name:b("textarea.mdt-videoname","#md-toolbar").val(),thumbsrc:b("img.mdt-videosrc","#md-toolbar").attr("src"),id:b("input.mdt-video-fileid","#md-toolbar").val()}};this.focusEdit=function(){if(this.selectedItem!=null){var g=this.selectedItem.data("type");if(g=="text"){b("textarea.mdt-textvalue","#md-toolbar").focus()}else{if(g=="image"){b("#change-image").trigger("click")}else{if(g=="video"){b("#change-video").trigger("click")}}}}};var f=function(g){if(!c(b("#mdt-linkexpand").get(0),g.target,b("#mdt-linkexpand").get(0))){e.saveLinkData();b("#mdt-linkexpand").data("item",null);b("#mdt-linkexpand").hide();b(document).unbind("click",f)}},c=function(i,h,g){if(i==h){return true}if(i.contains){return i.contains(h)}if(i.compareDocumentPosition){return !!(i.compareDocumentPosition(h)&16)}var j=h.parentNode;while(j&&j!=g){if(j==i){return true}j=j.parentNode}return false};this.init()};window.MdSliderToolbar=a})(jQuery);