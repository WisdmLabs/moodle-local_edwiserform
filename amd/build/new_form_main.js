"use strict";define(["jquery","core/ajax","local_edwiserform/efb_form_basic_settings","local_edwiserform/formbuilder"],function(e,t){return{init:function(i,n){e(document).ready(function(o){function r(){var t=u()&&v(!1)&&!b();e("#efb-btn-save-form-settings").parents(".efb-editor-button").toggleClass("d-none",!t),e(".efb-form-save").toggleClass("d-none",!t)}var a,s,l,f=document.querySelector(".build-form"),c=document.querySelector(".render-form"),d=!1,m=[],g={container:f,sitekey:i,prourl:n,svgSprite:M.cfg.wwwroot+"/local/edwiserform/pix/formeo-sprite.svg",localStorage:!1};function u(){return e(".efb-forms-template.active").length>0}function p(t){e(".efb-panel-btn").removeClass("panel-active"),e("#efb-".concat(t)).addClass("panel-active"),e(".efb-tabcontent").removeClass("content-active").addClass("content-hide"),e("#efb-cont-".concat(t)).addClass("content-active").removeClass("content-hide")}function v(){var t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];settings=s();var i=e(".efb-panel-btn.panel-active").attr("id"),n=""!=settings.title;if(!t)return n;if(n)e(".efb-form-title-container").removeClass("has-danger"),e("#id_title").parents(".fitem").removeClass("has-danger");else{switch(i){case"efb-form-setup":case"efb-form-builder":case"efb-form-preview":p("form-settings");case"efb-form-settings":e("#id_title").parents(".fitem").addClass("has-danger")}l.dom.toaster(M.util.get_string("efb-lbl-title-warning","local_edwiserform"),3e3)}return n}function b(){return formdef=JSON.parse(a()),0==Object.keys(formdef.fields).length}function _(e,i,n,o){t.call([{methodname:e,args:{setting:i,formdef:n.toString()}}])[0].done(o).fail(function(e){l.dom.alert("danger",e.message)})}function w(t){e(".efb-form-title").text(t),e(".efb-editor-action").toggleClass("efb-hide",t.length<0),t.length<0?e("#id_error_template_title").show():e("#id_error_template_title").hide()}function h(t){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";e("#id_type").val(t);var n=new CustomEvent("change",{target:e("#id_type")[0]});e("#id_type")[0].dispatchEvent(n),g.container=f,l=new Formeo(g,i),e("#efb-form-settings").trigger("click")}g.resetForm=function(){l.dom.loading();var i=e("#id_type").val();t.call([{methodname:"edwiserform_get_template",args:{name:i}}])[0].done(function(e){if(l.dom.loadingClose(),1==e.status)return g.container=f,void(l=new Formeo(g,e.definition))}).fail(function(e){l.dom.loadingClose(),l.dom.alert("danger",e.message)})},"undefined"!=typeof formdefinition?l=new Formeo(g,formdefinition):(g.localStorage=!0,l=new Formeo(g)),e(".step-navigation #previous-step").click(function(){}),e(".step-navigation #next-step").click(function(){}),e(document).on("formeoUpdated",function(e){r()}),e(document).on("controlsCollapsed",function(t){e(".efb-form-step-preview").toggleClass("collapsed",t.detail.collapsed)}),e("#id_type").closest(".fitem").hide(),e(".efb-form-step").click(function(t){t.preventDefault();var i=e(this).data("id");e("#"+i).click()}),e(".efb-panel-btn").click(function(t){if(!u())return l.dom.toaster(M.util.get_string("efb-select-template-warning","local_edwiserform"),3e3),p("form-setup"),void t.preventDefault();var i=e(this).attr("id");if("efb-form-setup"!=i&&"efb-form-settings"!=i&&!v())return 0;r();var n=e(this).data("panel");e("#efb-form-settings, #efb-form-builder, #efb-form-preview, #efb-form-setup").removeClass("panel-active"),e("#efb-cont-form-settings, #efb-cont-form-builder, #efb-cont-form-preview, #efb-cont-form-setup").removeClass("content-active").addClass("content-hide"),e(n).addClass("content-active"),e(n).removeClass("content-hide"),e(this).addClass("panel-active"),e(".efb-forms-panel-heading").text(e(this).data("panel-lbl")),"#efb-cont-form-settings"==n&&e("#efb-btn-next").removeClass("efb-hide"),"#efb-cont-form-builder"==n&&(l.render(c),e("#efb-btn-previous, #efb-btn-next").removeClass("efb-hide")),"#efb-cont-form-preview"==n&&(l.render(c),e("#efb-btn-next").addClass("efb-hide"))}),s=function(){var t=e("#id_type").val(),i={title:e("#id_title").val(),description:e("#id_description").val(),type:t,notifi_email:e("#id_notifi_email").val(),message:e("#id_confirmation_msg").val(),draftitemid:e('[name="confirmation_msg[itemid]"]').val(),data_edit:e("#id_editdata").prop("checked"),eventsettings:""},n=[];return e.each(m,function(e,t){if(t.is_enabled()){var i=t.get_event_name(),o=t.get_settings();n[i]=o}}),i.eventsettings=JSON.stringify(n),i},a=function(){return l.formData},e("body").on("click","#efb-btn-save-form-settings",function(t){if(!u())return l.dom.toaster(M.util.get_string("efb-select-template-warning","local_edwiserform"),3e3),p("form-setup"),void t.preventDefault();if(!v())return 0;var i=s(),n=a(),o=e("[name='id']").val(),r="edwiserform_create_new_form",f=function(t){1==t.status?(d=!0,window.onbeforeunload=null,l.dom.alert("success",t.msg,function(){l.reset(),e(location).attr("href",M.cfg.wwwroot+"/local/edwiserform/view.php?page=listforms")}),setTimeout(function(){e(location).attr("href",M.cfg.wwwroot+"/local/edwiserform/view.php?page=listforms")},4e3)):l.dom.alert("danger",t.msg)};if(o){var c=function(t){1==t.status?(window.onbeforeunload=null,l.dom.multiActions("success",M.util.get_string("success","local_edwiserform"),t.msg,[{title:M.util.get_string("efb-heading-listforms","local_edwiserform"),type:"success",action:function(){e(location).attr("href",M.cfg.wwwroot+"/local/edwiserform/view.php?page=listforms")}},{title:M.util.get_string("close","local_edwiserform"),type:"success"}])):l.dom.alert("danger",t.msg)};l.dom.multiActions("warning",M.util.get_string("attention","local_edwiserform"),M.util.get_string("efb-forms-update-confirm","local_edwiserform"),[{title:M.util.get_string("efb-forms-update-create-new","local_edwiserform"),type:"primary",action:function(){_(r,i,n,f)}},{title:M.util.get_string("efb-forms-update-overwrite-existing","local_edwiserform"),type:"success",action:function(){r="edwiserform_update_form_settings",i.id=o,_(r,i,n,c)}}])}else d?l.dom.toaster(M.util.get_string("efb-form-setting-saved","local_edwiserform"),3e3):_(r,i,n,f)}),e("#efb-form-title").keyup(function(){var t=e(this).val(),i=""==t;e(this).parent().toggleClass("has-danger",i),e("#id_title").val(t),w(t)}).change(function(){r()}),e("#id_title").keyup(function(){var t=e(this).val();e("#id_title").val(t),w(t)}).change(function(){var t=e(this).val();e("#efb-form-title").val(t),r()}),e("#id_type").change(function(){e(".efb-forms-template").removeClass("active");var t=e(this).val();e("#efb-forms-template-"+t).addClass("active"),e("#id_registration-enabled").prop("checked",!0)}),e(".efb-forms-template.pro").click(function(){var t=e(this).find(".efb-forms-template-name").text(),i=e(this).find(".efb-forms-template-details .desc").text();l.dom.proWarning({type:t,message:i})}),e(".efb-forms-template-select").click(function(i){var n=this;r();var o=function(){var i=e(n).data("template");e(n).parents(".efb-forms-template-overlay").addClass("loading"),t.call([{methodname:"edwiserform_get_template",args:{name:i}}])[0].done(function(t){e(n).parents(".efb-forms-template-overlay").removeClass("loading"),1!=t.status?l.dom.alert("warning",t.msg,function(){h(i,t.definition)}):h(i,t.definition)}).fail(function(t){e(n).parents(".efb-forms-template-overlay").removeClass("loading"),l.dom.alert("danger",t.message)})};e(".efb-forms-template.active").length&&!b()?l.dom.multiActions("warning",M.util.get_string("attention","local_edwiserform"),M.util.get_string("efb-template-change-warning","local_edwiserform"),[{title:M.util.get_string("proceed","local_edwiserform"),type:"warning",action:o},{title:M.util.get_string("cancel","local_edwiserform"),type:"success"}]):o()}),r()})}}});