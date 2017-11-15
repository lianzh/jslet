Ext.data.JsonP.jslet_ui_Portal({"tagname":"class","name":"jslet.ui.Portal","autodetected":{},"files":[{"filename":"jslet.portal.js","href":"jslet.portal.html#jslet-ui-Portal"}],"extends":"jslet.ui.Control","members":[{"name":"parts","tagname":"property","owner":"jslet.ui.Portal","id":"property-parts","meta":{}},{"name":"addChildControl","tagname":"method","owner":"jslet.ui.Control","id":"method-addChildControl","meta":{"protected":true}},{"name":"addPart","tagname":"method","owner":"jslet.ui.Portal","id":"method-addPart","meta":{"chainable":true}},{"name":"afterBind","tagname":"method","owner":"jslet.ui.Control","id":"method-afterBind","meta":{"protected":true}},{"name":"beforeBind","tagname":"method","owner":"jslet.ui.Control","id":"method-beforeBind","meta":{"protected":true}},{"name":"bind","tagname":"method","owner":"jslet.ui.Portal","id":"method-bind","meta":{"protected":true}},{"name":"checkRequiredProperty","tagname":"method","owner":"jslet.ui.Control","id":"method-checkRequiredProperty","meta":{"protected":true}},{"name":"clearParts","tagname":"method","owner":"jslet.ui.Portal","id":"method-clearParts","meta":{"chainable":true}},{"name":"destroy","tagname":"method","owner":"jslet.ui.Portal","id":"method-destroy","meta":{}},{"name":"doUIChanged","tagname":"method","owner":"jslet.ui.Control","id":"method-doUIChanged","meta":{"protected":true}},{"name":"initialize","tagname":"method","owner":"jslet.ui.Portal","id":"method-initialize","meta":{"protected":true}},{"name":"isValidTemplateTag","tagname":"method","owner":"jslet.ui.Portal","id":"method-isValidTemplateTag","meta":{"protected":true}},{"name":"removeAllChildControls","tagname":"method","owner":"jslet.ui.Control","id":"method-removeAllChildControls","meta":{"protected":true}},{"name":"removePart","tagname":"method","owner":"jslet.ui.Portal","id":"method-removePart","meta":{"chainable":true}},{"name":"renderAll","tagname":"method","owner":"jslet.ui.Portal","id":"method-renderAll","meta":{}},{"name":"setParams","tagname":"method","owner":"jslet.ui.Control","id":"method-setParams","meta":{"protected":true}},{"name":"setPartCaption","tagname":"method","owner":"jslet.ui.Portal","id":"method-setPartCaption","meta":{"chainable":true}},{"name":"setPartContent","tagname":"method","owner":"jslet.ui.Portal","id":"method-setPartContent","meta":{"chainable":true}},{"name":"partChanged","tagname":"event","owner":"jslet.ui.Portal","id":"event-partChanged","meta":{}}],"alternateClassNames":[],"aliases":{},"id":"class-jslet.ui.Portal","short_doc":"Jslet Portal, it is combined with some parts, and the end user can adjust the layout of these windows. ...","classIcon":"icon-class","superclasses":["jslet.ui.Control"],"subclasses":[],"mixedInto":[],"mixins":[],"parentMixins":[],"requires":[],"uses":[],"html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'><a href='#!/api/jslet.ui.Control' rel='jslet.ui.Control' class='docClass'>jslet.ui.Control</a><div class='subclass '><strong>jslet.ui.Portal</strong></div></div><h4>Files</h4><div class='dependency'><a href='source/jslet.portal.html#jslet-ui-Portal' target='_blank'>jslet.portal.js</a></div></pre><div class='doc-contents'><p>Jslet Portal, it is combined with some parts, and the end user can adjust the layout of these windows.<br /><br/>\nExample:</p>\n\n<pre class='inline-example '><code>var jsletParam = {type:\"Portal\"};\n\n//1. Declaring:\n&lt;div id=\"chartId\" data-jslet='type:\"Portal\"' /&gt;\nor\n&lt;div data-jslet='jsletParam' /&gt;\n\n//2. Binding\n&lt;div id=\"ctrlId\"  /&gt;\n//Js snippet\nvar el = document.getElementById('ctrlId');\n<a href=\"#!/api/jslet.ui-method-bindControl\" rel=\"jslet.ui-method-bindControl\" class=\"docClass\">jslet.ui.bindControl</a>(el, jsletParam);\n\n//3. Create dynamically\n<a href=\"#!/api/jslet.ui-method-createControl\" rel=\"jslet.ui-method-createControl\" class=\"docClass\">jslet.ui.createControl</a>(jsletParam, document.body);\n</code></pre>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-parts' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='jslet.ui.Portal'>jslet.ui.Portal</span><br/><a href='source/jslet.portal.html#jslet-ui-Portal-property-parts' target='_blank' class='view-source'>view source</a></div><a href='#!/api/jslet.ui.Portal-property-parts' class='name expandable'>parts</a> : Function<span class=\"signature\"></span></div><div class='description'><div class='short'>Set or get parts in the portal. ...</div><div class='long'><p>Set or get parts in the portal.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>parts</span> : Object[] | undefined<div class='sub-desc'><p>Parts in the portal.</p>\n<ul><li><span class='pre'>id</span> : String<div class='sub-desc'><p>Part id.</p>\n</div></li><li><span class='pre'>caption</span> : String<div class='sub-desc'><p>Part caption.</p>\n</div></li><li><span class='pre'>url</span> : String<div class='sub-desc'><p>Part content URL.</p>\n</div></li><li><span class='pre'>left</span> : Integer<div class='sub-desc'><p>Left position of left-top point.</p>\n</div></li><li><span class='pre'>top</span> : Integer<div class='sub-desc'><p>Top position of left-top point.</p>\n</div></li><li><span class='pre'>width</span> : Integer<div class='sub-desc'><p>Part's width.</p>\n</div></li><li><span class='pre'>height</span> : Integer<div class='sub-desc'><p>Part's height.</p>\n</div></li><li><span class='pre'>closable</span> : Integer<div class='sub-desc'><p>Identify whether part is closable or not.</p>\n</div></li></ul></div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>this | Object[]</span><div class='sub-desc'>\n</div></li></ul></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-addChildControl' class='member first-child inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/jslet.ui.Control' rel='jslet.ui.Control' class='defined-in docClass'>jslet.ui.Control</a><br/><a href='source/jslet.control.html#jslet-ui-Control-method-addChildControl' target='_blank' class='view-source'>view source</a></div><a href='#!/api/jslet.ui.Control-method-addChildControl' class='name expandable'>addChildControl</a>( <span class='pre'>childCtrl</span> )<span class=\"signature\"><span class='protected' >protected</span></span></div><div class='description'><div class='short'>Add child control into this control. ...</div><div class='long'><p>Add child control into this control.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>childCtrl</span> : Object<div class='sub-desc'></div></li></ul></div></div></div><div id='method-addPart' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='jslet.ui.Portal'>jslet.ui.Portal</span><br/><a href='source/jslet.portal.html#jslet-ui-Portal-method-addPart' target='_blank' class='view-source'>view source</a></div><a href='#!/api/jslet.ui.Portal-method-addPart' class='name expandable'>addPart</a>( <span class='pre'>partCfg</span> ) : <a href=\"#!/api/jslet.ui.Portal\" rel=\"jslet.ui.Portal\" class=\"docClass\">jslet.ui.Portal</a><span class=\"signature\"><span class='chainable' >chainable</span></span></div><div class='description'><div class='short'>Add a part into portal. ...</div><div class='long'><p>Add a part into portal.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>partCfg</span> : Object<div class='sub-desc'><p>Part configuration.</p>\n<ul><li><span class='pre'>id</span> : String<div class='sub-desc'><p>Part id.</p>\n</div></li><li><span class='pre'>caption</span> : String<div class='sub-desc'><p>Part caption.</p>\n</div></li><li><span class='pre'>url</span> : String<div class='sub-desc'><p>Part content URL.</p>\n</div></li><li><span class='pre'>content</span> : String<div class='sub-desc'><p>Part content.</p>\n</div></li><li><span class='pre'>left</span> : Integer<div class='sub-desc'><p>Left position of left-top point.</p>\n</div></li><li><span class='pre'>top</span> : Integer<div class='sub-desc'><p>Top position of left-top point.</p>\n</div></li><li><span class='pre'>width</span> : Integer<div class='sub-desc'><p>Part's width.</p>\n</div></li><li><span class='pre'>height</span> : Integer<div class='sub-desc'><p>Part's height.</p>\n</div></li><li><span class='pre'>closable</span> : Integer<div class='sub-desc'><p>Identify whether part is closable or not.</p>\n</div></li></ul></div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/jslet.ui.Portal\" rel=\"jslet.ui.Portal\" class=\"docClass\">jslet.ui.Portal</a></span><div class='sub-desc'><p>this</p>\n</div></li></ul></div></div></div><div id='method-afterBind' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/jslet.ui.Control' rel='jslet.ui.Control' class='defined-in docClass'>jslet.ui.Control</a><br/><a href='source/jslet.control.html#jslet-ui-Control-method-afterBind' target='_blank' class='view-source'>view source</a></div><a href='#!/api/jslet.ui.Control-method-afterBind' class='name expandable'>afterBind</a>( <span class='pre'></span> )<span class=\"signature\"><span class='protected' >protected</span></span></div><div class='description'><div class='short'>After bind. ...</div><div class='long'><p>After bind.</p>\n</div></div></div><div id='method-beforeBind' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/jslet.ui.Control' rel='jslet.ui.Control' class='defined-in docClass'>jslet.ui.Control</a><br/><a href='source/jslet.control.html#jslet-ui-Control-method-beforeBind' target='_blank' class='view-source'>view source</a></div><a href='#!/api/jslet.ui.Control-method-beforeBind' class='name expandable'>beforeBind</a>( <span class='pre'></span> )<span class=\"signature\"><span class='protected' >protected</span></span></div><div class='description'><div class='short'>Before bind. ...</div><div class='long'><p>Before bind.\nChild control can extend this method.</p>\n</div></div></div><div id='method-bind' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='jslet.ui.Portal'>jslet.ui.Portal</span><br/><a href='source/jslet.portal.html#jslet-ui-Portal-method-bind' target='_blank' class='view-source'>view source</a></div><a href='#!/api/jslet.ui.Portal-method-bind' class='name expandable'>bind</a>( <span class='pre'></span> )<span class=\"signature\"><span class='protected' >protected</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Overrides: <a href=\"#!/api/jslet.ui.Control-method-bind\" rel=\"jslet.ui.Control-method-bind\" class=\"docClass\">jslet.ui.Control.bind</a></p></div></div></div><div id='method-checkRequiredProperty' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/jslet.ui.Control' rel='jslet.ui.Control' class='defined-in docClass'>jslet.ui.Control</a><br/><a href='source/jslet.control.html#jslet-ui-Control-method-checkRequiredProperty' target='_blank' class='view-source'>view source</a></div><a href='#!/api/jslet.ui.Control-method-checkRequiredProperty' class='name expandable'>checkRequiredProperty</a>( <span class='pre'></span> )<span class=\"signature\"><span class='protected' >protected</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n</div></div></div><div id='method-clearParts' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='jslet.ui.Portal'>jslet.ui.Portal</span><br/><a href='source/jslet.portal.html#jslet-ui-Portal-method-clearParts' target='_blank' class='view-source'>view source</a></div><a href='#!/api/jslet.ui.Portal-method-clearParts' class='name expandable'>clearParts</a>( <span class='pre'></span> ) : <a href=\"#!/api/jslet.ui.Portal\" rel=\"jslet.ui.Portal\" class=\"docClass\">jslet.ui.Portal</a><span class=\"signature\"><span class='chainable' >chainable</span></span></div><div class='description'><div class='short'>Clear all parts. ...</div><div class='long'><p>Clear all parts.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/jslet.ui.Portal\" rel=\"jslet.ui.Portal\" class=\"docClass\">jslet.ui.Portal</a></span><div class='sub-desc'><p>this</p>\n</div></li></ul></div></div></div><div id='method-destroy' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='jslet.ui.Portal'>jslet.ui.Portal</span><br/><a href='source/jslet.portal.html#jslet-ui-Portal-method-destroy' target='_blank' class='view-source'>view source</a></div><a href='#!/api/jslet.ui.Portal-method-destroy' class='name expandable'>destroy</a>( <span class='pre'>$super</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>$super</span> : Object<div class='sub-desc'></div></li></ul><p>Overrides: <a href=\"#!/api/jslet.ui.Control-method-destroy\" rel=\"jslet.ui.Control-method-destroy\" class=\"docClass\">jslet.ui.Control.destroy</a></p></div></div></div><div id='method-doUIChanged' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/jslet.ui.Control' rel='jslet.ui.Control' class='defined-in docClass'>jslet.ui.Control</a><br/><a href='source/jslet.control.html#jslet-ui-Control-method-doUIChanged' target='_blank' class='view-source'>view source</a></div><a href='#!/api/jslet.ui.Control-method-doUIChanged' class='name expandable'>doUIChanged</a>( <span class='pre'></span> )<span class=\"signature\"><span class='protected' >protected</span></span></div><div class='description'><div class='short'>Refresh dataset when user changed the value. ...</div><div class='long'><p>Refresh dataset when user changed the value.</p>\n</div></div></div><div id='method-initialize' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='jslet.ui.Portal'>jslet.ui.Portal</span><br/><a href='source/jslet.portal.html#jslet-ui-Portal-method-initialize' target='_blank' class='view-source'>view source</a></div><a href='#!/api/jslet.ui.Portal-method-initialize' class='name expandable'>initialize</a>( <span class='pre'>$super, el, params</span> )<span class=\"signature\"><span class='protected' >protected</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>$super</span> : Object<div class='sub-desc'></div></li><li><span class='pre'>el</span> : Object<div class='sub-desc'></div></li><li><span class='pre'>params</span> : Object<div class='sub-desc'></div></li></ul><p>Overrides: <a href=\"#!/api/jslet.ui.Control-method-initialize\" rel=\"jslet.ui.Control-method-initialize\" class=\"docClass\">jslet.ui.Control.initialize</a></p></div></div></div><div id='method-isValidTemplateTag' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='jslet.ui.Portal'>jslet.ui.Portal</span><br/><a href='source/jslet.portal.html#jslet-ui-Portal-method-isValidTemplateTag' target='_blank' class='view-source'>view source</a></div><a href='#!/api/jslet.ui.Portal-method-isValidTemplateTag' class='name expandable'>isValidTemplateTag</a>( <span class='pre'>el</span> )<span class=\"signature\"><span class='protected' >protected</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>el</span> : Object<div class='sub-desc'></div></li></ul></div></div></div><div id='method-removeAllChildControls' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/jslet.ui.Control' rel='jslet.ui.Control' class='defined-in docClass'>jslet.ui.Control</a><br/><a href='source/jslet.control.html#jslet-ui-Control-method-removeAllChildControls' target='_blank' class='view-source'>view source</a></div><a href='#!/api/jslet.ui.Control-method-removeAllChildControls' class='name expandable'>removeAllChildControls</a>( <span class='pre'></span> )<span class=\"signature\"><span class='protected' >protected</span></span></div><div class='description'><div class='short'>Remove all child controls from this control. ...</div><div class='long'><p>Remove all child controls from this control.</p>\n</div></div></div><div id='method-removePart' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='jslet.ui.Portal'>jslet.ui.Portal</span><br/><a href='source/jslet.portal.html#jslet-ui-Portal-method-removePart' target='_blank' class='view-source'>view source</a></div><a href='#!/api/jslet.ui.Portal-method-removePart' class='name expandable'>removePart</a>( <span class='pre'>partId</span> ) : <a href=\"#!/api/jslet.ui.Portal\" rel=\"jslet.ui.Portal\" class=\"docClass\">jslet.ui.Portal</a><span class=\"signature\"><span class='chainable' >chainable</span></span></div><div class='description'><div class='short'>Remove a part from portal. ...</div><div class='long'><p>Remove a part from portal.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>partId</span> : String<div class='sub-desc'><p>Part id.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/jslet.ui.Portal\" rel=\"jslet.ui.Portal\" class=\"docClass\">jslet.ui.Portal</a></span><div class='sub-desc'><p>this</p>\n</div></li></ul></div></div></div><div id='method-renderAll' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='jslet.ui.Portal'>jslet.ui.Portal</span><br/><a href='source/jslet.portal.html#jslet-ui-Portal-method-renderAll' target='_blank' class='view-source'>view source</a></div><a href='#!/api/jslet.ui.Portal-method-renderAll' class='name expandable'>renderAll</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Overrides: <a href=\"#!/api/jslet.ui.Control-method-renderAll\" rel=\"jslet.ui.Control-method-renderAll\" class=\"docClass\">jslet.ui.Control.renderAll</a></p></div></div></div><div id='method-setParams' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/jslet.ui.Control' rel='jslet.ui.Control' class='defined-in docClass'>jslet.ui.Control</a><br/><a href='source/jslet.control.html#jslet-ui-Control-method-setParams' target='_blank' class='view-source'>view source</a></div><a href='#!/api/jslet.ui.Control-method-setParams' class='name expandable'>setParams</a>( <span class='pre'>ctrlParams</span> )<span class=\"signature\"><span class='protected' >protected</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>ctrlParams</span> : Object<div class='sub-desc'></div></li></ul></div></div></div><div id='method-setPartCaption' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='jslet.ui.Portal'>jslet.ui.Portal</span><br/><a href='source/jslet.portal.html#jslet-ui-Portal-method-setPartCaption' target='_blank' class='view-source'>view source</a></div><a href='#!/api/jslet.ui.Portal-method-setPartCaption' class='name expandable'>setPartCaption</a>( <span class='pre'>partId, caption</span> ) : <a href=\"#!/api/jslet.ui.Portal\" rel=\"jslet.ui.Portal\" class=\"docClass\">jslet.ui.Portal</a><span class=\"signature\"><span class='chainable' >chainable</span></span></div><div class='description'><div class='short'>Set part caption. ...</div><div class='long'><p>Set part caption.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>partId</span> : String<div class='sub-desc'><p>Part Id.</p>\n</div></li><li><span class='pre'>caption</span> : String<div class='sub-desc'><p>Part caption.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/jslet.ui.Portal\" rel=\"jslet.ui.Portal\" class=\"docClass\">jslet.ui.Portal</a></span><div class='sub-desc'><p>this</p>\n</div></li></ul></div></div></div><div id='method-setPartContent' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='jslet.ui.Portal'>jslet.ui.Portal</span><br/><a href='source/jslet.portal.html#jslet-ui-Portal-method-setPartContent' target='_blank' class='view-source'>view source</a></div><a href='#!/api/jslet.ui.Portal-method-setPartContent' class='name expandable'>setPartContent</a>( <span class='pre'>partId, caption</span> ) : <a href=\"#!/api/jslet.ui.Portal\" rel=\"jslet.ui.Portal\" class=\"docClass\">jslet.ui.Portal</a><span class=\"signature\"><span class='chainable' >chainable</span></span></div><div class='description'><div class='short'>Set part content. ...</div><div class='long'><p>Set part content.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>partId</span> : String<div class='sub-desc'><p>Part Id.</p>\n</div></li><li><span class='pre'>caption</span> : String<div class='sub-desc'><p>Part content.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/jslet.ui.Portal\" rel=\"jslet.ui.Portal\" class=\"docClass\">jslet.ui.Portal</a></span><div class='sub-desc'><p>this</p>\n</div></li></ul></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-event'>Events</h3><div class='subsection'><div id='event-partChanged' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='jslet.ui.Portal'>jslet.ui.Portal</span><br/><a href='source/jslet.portal.html#jslet-ui-Portal-event-partChanged' target='_blank' class='view-source'>view source</a></div><a href='#!/api/jslet.ui.Portal-event-partChanged' class='name expandable'>partChanged</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Identify whether part is changed(added, deleted or layout changed). ...</div><div class='long'><p>Identify whether part is changed(added, deleted or layout changed).</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Boolean</span><div class='sub-desc'><p>True - changed, false - otherwise.</p>\n</div></li></ul></div></div></div></div></div></div></div>","meta":{}});