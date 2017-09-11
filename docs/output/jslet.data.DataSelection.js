Ext.data.JsonP.jslet_data_DataSelection({"tagname":"class","name":"jslet.data.DataSelection","autodetected":{},"files":[{"filename":"jslet.valueselection.js","href":"jslet.valueselection.html#jslet-data-DataSelection"}],"private":true,"members":[{"name":"add","tagname":"method","owner":"jslet.data.DataSelection","id":"method-add","meta":{}},{"name":"getSelectionText","tagname":"method","owner":"jslet.data.DataSelection","id":"method-getSelectionText","meta":{}},{"name":"isSelected","tagname":"method","owner":"jslet.data.DataSelection","id":"method-isSelected","meta":{}},{"name":"onChanged","tagname":"method","owner":"jslet.data.DataSelection","id":"method-onChanged","meta":{}},{"name":"remove","tagname":"method","owner":"jslet.data.DataSelection","id":"method-remove","meta":{}},{"name":"removeAll","tagname":"method","owner":"jslet.data.DataSelection","id":"method-removeAll","meta":{}},{"name":"selectAll","tagname":"method","owner":"jslet.data.DataSelection","id":"method-selectAll","meta":{}}],"alternateClassNames":[],"aliases":{},"id":"class-jslet.data.DataSelection","classIcon":"icon-class","superclasses":[],"subclasses":[],"mixedInto":[],"mixins":[],"parentMixins":[],"requires":[],"uses":[],"html":"<div><pre class=\"hierarchy\"><h4>Files</h4><div class='dependency'><a href='source/jslet.valueselection.html#jslet-data-DataSelection' target='_blank'>jslet.valueselection.js</a></div></pre><div class='doc-contents'><div class='rounded-box private-box'><p><strong>NOTE:</strong> This is a private utility class for internal use by the framework. Don't rely on its existence.</p></div><p>Data selection class.</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-add' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='jslet.data.DataSelection'>jslet.data.DataSelection</span><br/><a href='source/jslet.valueselection.html#jslet-data-DataSelection-method-add' target='_blank' class='view-source'>view source</a></div><a href='#!/api/jslet.data.DataSelection-method-add' class='name expandable'>add</a>( <span class='pre'>startRecno, endRecno, fields, fireEvent</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Add data into selection. ...</div><div class='long'><p>Add data into selection.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>startRecno</span> : Integer<div class='sub-desc'><p>The start recno to be selected.</p>\n</div></li><li><span class='pre'>endRecno</span> : Integer<div class='sub-desc'><p>The end recno to be selected.</p>\n</div></li><li><span class='pre'>fields</span> : String[]<div class='sub-desc'><p>An array of field name to be selected.</p>\n</div></li><li><span class='pre'>fireEvent</span> : Boolean<div class='sub-desc'><p>Identify firing event or not.</p>\n</div></li></ul></div></div></div><div id='method-getSelectionText' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='jslet.data.DataSelection'>jslet.data.DataSelection</span><br/><a href='source/jslet.valueselection.html#jslet-data-DataSelection-method-getSelectionText' target='_blank' class='view-source'>view source</a></div><a href='#!/api/jslet.data.DataSelection-method-getSelectionText' class='name expandable'>getSelectionText</a>( <span class='pre'>seperator</span> ) : String<span class=\"signature\"></span></div><div class='description'><div class='short'>Get selected text. ...</div><div class='long'><p>Get selected text.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>seperator</span> : String<div class='sub-desc'><p>Seperator for fields.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-isSelected' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='jslet.data.DataSelection'>jslet.data.DataSelection</span><br/><a href='source/jslet.valueselection.html#jslet-data-DataSelection-method-isSelected' target='_blank' class='view-source'>view source</a></div><a href='#!/api/jslet.data.DataSelection-method-isSelected' class='name expandable'>isSelected</a>( <span class='pre'>recno, fldName</span> ) : Boolean<span class=\"signature\"></span></div><div class='description'><div class='short'>Check the specified cell is selected or not. ...</div><div class='long'><p>Check the specified cell is selected or not.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>recno</span> : Integer<div class='sub-desc'><p>Record no.</p>\n</div></li><li><span class='pre'>fldName</span> : String<div class='sub-desc'><p>Field name.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Boolean</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-onChanged' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='jslet.data.DataSelection'>jslet.data.DataSelection</span><br/><a href='source/jslet.valueselection.html#jslet-data-DataSelection-method-onChanged' target='_blank' class='view-source'>view source</a></div><a href='#!/api/jslet.data.DataSelection-method-onChanged' class='name expandable'>onChanged</a>( <span class='pre'>onChanged</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Fired when the selection area is changed. ...</div><div class='long'><p>Fired when the selection area is changed.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>onChanged</span> : Function<div class='sub-desc'><p>The event handler, format:\n    function(startRecno, endRecno, fields, selected) {\n        //startRecno - Integer, start recno;\n        //endRecno - Integer, end recno;\n        //fields - String[], field names;\n        //selected - Boolean, selected or not;<br/>\n    }</p>\n</div></li></ul></div></div></div><div id='method-remove' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='jslet.data.DataSelection'>jslet.data.DataSelection</span><br/><a href='source/jslet.valueselection.html#jslet-data-DataSelection-method-remove' target='_blank' class='view-source'>view source</a></div><a href='#!/api/jslet.data.DataSelection-method-remove' class='name expandable'>remove</a>( <span class='pre'>startRecno, endRecno, fields, fireEvent</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Unselect data. ...</div><div class='long'><p>Unselect data.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>startRecno</span> : Integer<div class='sub-desc'><p>The start recno to be unselected.</p>\n</div></li><li><span class='pre'>endRecno</span> : Integer<div class='sub-desc'><p>The end recno to be selected.</p>\n</div></li><li><span class='pre'>fields</span> : String[]<div class='sub-desc'><p>An array of field name to be unselected.</p>\n</div></li><li><span class='pre'>fireEvent</span> : Boolean<div class='sub-desc'><p>Identify firing event or not.</p>\n</div></li></ul></div></div></div><div id='method-removeAll' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='jslet.data.DataSelection'>jslet.data.DataSelection</span><br/><a href='source/jslet.valueselection.html#jslet-data-DataSelection-method-removeAll' target='_blank' class='view-source'>view source</a></div><a href='#!/api/jslet.data.DataSelection-method-removeAll' class='name expandable'>removeAll</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Remove all selected data. ...</div><div class='long'><p>Remove all selected data.</p>\n</div></div></div><div id='method-selectAll' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='jslet.data.DataSelection'>jslet.data.DataSelection</span><br/><a href='source/jslet.valueselection.html#jslet-data-DataSelection-method-selectAll' target='_blank' class='view-source'>view source</a></div><a href='#!/api/jslet.data.DataSelection-method-selectAll' class='name expandable'>selectAll</a>( <span class='pre'>fields, fireEvent</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Select all data. ...</div><div class='long'><p>Select all data.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>fields</span> : String[]<div class='sub-desc'><p>An array of field name to be selected.</p>\n</div></li><li><span class='pre'>fireEvent</span> : Boolean<div class='sub-desc'><p>Identify firing event or not.</p>\n</div></li></ul></div></div></div></div></div></div></div>","meta":{"private":true}});