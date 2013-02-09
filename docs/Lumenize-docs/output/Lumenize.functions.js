Ext.data.JsonP.Lumenize_functions({"tagname":"class","name":"Lumenize.functions","extends":null,"mixins":[],"alternateClassNames":[],"aliases":{},"singleton":false,"requires":[],"uses":[],"enum":null,"override":null,"inheritable":null,"inheritdoc":null,"meta":{},"private":null,"id":"class-Lumenize.functions","members":{"cfg":[],"property":[],"method":[],"event":[],"css_var":[],"css_mixin":[]},"linenr":5,"files":[{"filename":"functions.coffee.js","href":"functions.coffee.html#Lumenize-functions"}],"html_meta":{},"statics":{"cfg":[],"property":[],"method":[{"name":"average","tagname":"method","owner":"Lumenize.functions","meta":{"static":true},"id":"static-method-average"},{"name":"count","tagname":"method","owner":"Lumenize.functions","meta":{"static":true},"id":"static-method-count"},{"name":"expandFandAs","tagname":"method","owner":"Lumenize.functions","meta":{"static":true},"id":"static-method-expandFandAs"},{"name":"expandMetrics","tagname":"method","owner":"Lumenize.functions","meta":{"static":true,"private":true},"id":"static-method-expandMetrics"},{"name":"firstValue","tagname":"method","owner":"Lumenize.functions","meta":{"static":true},"id":"static-method-firstValue"},{"name":"lastValue","tagname":"method","owner":"Lumenize.functions","meta":{"static":true},"id":"static-method-lastValue"},{"name":"max","tagname":"method","owner":"Lumenize.functions","meta":{"static":true},"id":"static-method-max"},{"name":"min","tagname":"method","owner":"Lumenize.functions","meta":{"static":true},"id":"static-method-min"},{"name":"percentileCreator","tagname":"method","owner":"Lumenize.functions","meta":{"static":true},"id":"static-method-percentileCreator"},{"name":"standardDeviation","tagname":"method","owner":"Lumenize.functions","meta":{"static":true},"id":"static-method-standardDeviation"},{"name":"sum","tagname":"method","owner":"Lumenize.functions","meta":{"static":true},"id":"static-method-sum"},{"name":"sumSquares","tagname":"method","owner":"Lumenize.functions","meta":{"static":true},"id":"static-method-sumSquares"},{"name":"uniqueValues","tagname":"method","owner":"Lumenize.functions","meta":{"static":true},"id":"static-method-uniqueValues"},{"name":"values","tagname":"method","owner":"Lumenize.functions","meta":{"static":true},"id":"static-method-values"},{"name":"variance","tagname":"method","owner":"Lumenize.functions","meta":{"static":true},"id":"static-method-variance"}],"event":[],"css_var":[],"css_mixin":[]},"component":false,"superclasses":[],"subclasses":[],"mixedInto":[],"parentMixins":[],"html":"<div><pre class=\"hierarchy\"><h4>Files</h4><div class='dependency'><a href='source/functions.coffee.html#Lumenize-functions' target='_blank'>functions.coffee.js</a></div></pre><div class='doc-contents'><p>Rules about dependencies:</p>\n\n<ul>\n<li>If a function can be calculated incrementally from an oldResult and newValues, then you do not need to specify dependencies</li>\n<li>If a funciton can be calculated from other incrementally calculable results, then you need only specify those dependencies</li>\n<li>If a function needs the full list of values to be calculated (like percentile coverage), then you must specify 'values'</li>\n<li>To support the direct passing in of OLAP cube cells, you can provide a prefix (field name) so the key in dependentValues\ncan be generated</li>\n<li>'count' is special and does not use a prefix because it is not dependent up a particular field</li>\n<li>You should calculate the dependencies before you calculate the thing that is depedent. The OLAP cube does some\nchecking to confirm you've done this.</li>\n</ul>\n\n</div><div class='members'><div class='members-section'><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div class='definedBy'>Defined By</div><h4 class='members-subtitle'>Static Methods</h3><div id='static-method-average' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Lumenize.functions'>Lumenize.functions</span><br/><a href='source/functions.coffee.html#Lumenize-functions-static-method-average' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Lumenize.functions-static-method-average' class='name expandable'>average</a>( <span class='pre'>values</span> ) : Number<strong class='static signature' >static</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>values</span> : Number[]<div class='sub-desc'>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Number</span><div class='sub-desc'><p>The arithmetic mean</p>\n</div></li></ul></div></div></div><div id='static-method-count' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Lumenize.functions'>Lumenize.functions</span><br/><a href='source/functions.coffee.html#Lumenize-functions-static-method-count' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Lumenize.functions-static-method-count' class='name expandable'>count</a>( <span class='pre'>values, [oldResult], [newValues]</span> ) : Number<strong class='static signature' >static</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>values</span> : Number[]<div class='sub-desc'>\n</div></li><li><span class='pre'>oldResult</span> : Number (optional)<div class='sub-desc'><p>for incremental calculation</p>\n</div></li><li><span class='pre'>newValues</span> : Number[] (optional)<div class='sub-desc'><p>for incremental calculation</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Number</span><div class='sub-desc'><p>The length of the values Array</p>\n</div></li></ul></div></div></div><div id='static-method-expandFandAs' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Lumenize.functions'>Lumenize.functions</span><br/><a href='source/functions.coffee.html#Lumenize-functions-static-method-expandFandAs' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Lumenize.functions-static-method-expandFandAs' class='name expandable'>expandFandAs</a>( <span class='pre'>a</span> ) : Object<strong class='static signature' >static</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>a</span> : Object<div class='sub-desc'><p>Will look like this <code>{as: 'mySum', f: 'sum', field: 'Points'}</code></p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object</span><div class='sub-desc'><p>returns the expanded specification</p>\n\n<p>Takes specifications for functions and expands them to include the actual function and 'as'. If you do not provide\nan 'as' property, it will build it from the field name and function with an underscore between. Also, if the\n'f' provided is a string, it is copied over to the 'metric' property before the 'f' property is replaced with the\nactual function. <code>{field: 'a', f: 'sum'}</code> would expand to <code>{as: 'a_sum', field: 'a', metric: 'sum', f: [Function]}</code>.</p>\n</div></li></ul></div></div></div><div id='static-method-expandMetrics' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Lumenize.functions'>Lumenize.functions</span><br/><a href='source/functions.coffee.html#Lumenize-functions-static-method-expandMetrics' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Lumenize.functions-static-method-expandMetrics' class='name expandable'>expandMetrics</a>( <span class='pre'></span> )<strong class='private signature' >private</strong><strong class='static signature' >static</strong></div><div class='description'><div class='short'>This is called internally by several Lumenize Calculators. ...</div><div class='long'><p>This is called internally by several Lumenize Calculators. You should probably not call it.</p>\n</div></div></div><div id='static-method-firstValue' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Lumenize.functions'>Lumenize.functions</span><br/><a href='source/functions.coffee.html#Lumenize-functions-static-method-firstValue' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Lumenize.functions-static-method-firstValue' class='name expandable'>firstValue</a>( <span class='pre'>values, [oldResult], [newValues]</span> ) : Number<strong class='static signature' >static</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>values</span> : Number[]<div class='sub-desc'>\n</div></li><li><span class='pre'>oldResult</span> : Number (optional)<div class='sub-desc'><p>for incremental calculation</p>\n</div></li><li><span class='pre'>newValues</span> : Number[] (optional)<div class='sub-desc'><p>Not used. It is included to make the interface consistent.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Number</span><div class='sub-desc'><p>The first value</p>\n</div></li></ul></div></div></div><div id='static-method-lastValue' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Lumenize.functions'>Lumenize.functions</span><br/><a href='source/functions.coffee.html#Lumenize-functions-static-method-lastValue' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Lumenize.functions-static-method-lastValue' class='name expandable'>lastValue</a>( <span class='pre'>values, [oldResult], [newValues]</span> ) : Number<strong class='static signature' >static</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>values</span> : Number[]<div class='sub-desc'>\n</div></li><li><span class='pre'>oldResult</span> : Number (optional)<div class='sub-desc'><p>Not used. It is included to make the interface consistent.</p>\n</div></li><li><span class='pre'>newValues</span> : Number[] (optional)<div class='sub-desc'><p>for incremental calculation</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Number</span><div class='sub-desc'><p>The last value</p>\n</div></li></ul></div></div></div><div id='static-method-max' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Lumenize.functions'>Lumenize.functions</span><br/><a href='source/functions.coffee.html#Lumenize-functions-static-method-max' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Lumenize.functions-static-method-max' class='name expandable'>max</a>( <span class='pre'>values, [oldResult], [newValues]</span> ) : Number<strong class='static signature' >static</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>values</span> : Number[]<div class='sub-desc'>\n</div></li><li><span class='pre'>oldResult</span> : Number (optional)<div class='sub-desc'><p>for incremental calculation</p>\n</div></li><li><span class='pre'>newValues</span> : Number[] (optional)<div class='sub-desc'><p>for incremental calculation</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Number</span><div class='sub-desc'><p>The maximum value or null if no values</p>\n</div></li></ul></div></div></div><div id='static-method-min' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Lumenize.functions'>Lumenize.functions</span><br/><a href='source/functions.coffee.html#Lumenize-functions-static-method-min' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Lumenize.functions-static-method-min' class='name expandable'>min</a>( <span class='pre'>values, [oldResult], [newValues]</span> ) : Number<strong class='static signature' >static</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>values</span> : Number[]<div class='sub-desc'>\n</div></li><li><span class='pre'>oldResult</span> : Number (optional)<div class='sub-desc'><p>for incremental calculation</p>\n</div></li><li><span class='pre'>newValues</span> : Number[] (optional)<div class='sub-desc'><p>for incremental calculation</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Number</span><div class='sub-desc'><p>The minimum value or null if no values</p>\n</div></li></ul></div></div></div><div id='static-method-percentileCreator' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Lumenize.functions'>Lumenize.functions</span><br/><a href='source/functions.coffee.html#Lumenize-functions-static-method-percentileCreator' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Lumenize.functions-static-method-percentileCreator' class='name expandable'>percentileCreator</a>( <span class='pre'>p</span> ) : Function<strong class='static signature' >static</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>p</span> : Number<div class='sub-desc'><p>The percentile for the resulting function (50 = median, 75, 99, etc.)</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Function</span><div class='sub-desc'><p>A funtion to calculate the percentile</p>\n\n<p>When the user passes in <code>p&lt;n&gt;</code> as an aggregation function, this <code>percentileCreator</code> is called to return the appropriate\npercentile function. The returned function will find the <code>&lt;n&gt;</code>th percentile where <code>&lt;n&gt;</code> is some number in the form of\n<code>##[.##]</code>. (e.g. <code>p40</code>, <code>p99</code>, <code>p99.9</code>).</p>\n\n<p>Note: <code>median</code> is an alias for <code>p50</code>.</p>\n\n<p>There is no official definition of percentile. The most popular choices differ in the interpolation algorithm that they\nuse. The function returned by this <code>percentileCreator</code> uses the Excel interpolation algorithm which is close to the NIST\nrecommendation and makes the most sense to me.</p>\n</div></li></ul></div></div></div><div id='static-method-standardDeviation' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Lumenize.functions'>Lumenize.functions</span><br/><a href='source/functions.coffee.html#Lumenize-functions-static-method-standardDeviation' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Lumenize.functions-static-method-standardDeviation' class='name expandable'>standardDeviation</a>( <span class='pre'>values</span> ) : Number<strong class='static signature' >static</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>values</span> : Number[]<div class='sub-desc'>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Number</span><div class='sub-desc'><p>The standard deviation</p>\n</div></li></ul></div></div></div><div id='static-method-sum' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Lumenize.functions'>Lumenize.functions</span><br/><a href='source/functions.coffee.html#Lumenize-functions-static-method-sum' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Lumenize.functions-static-method-sum' class='name expandable'>sum</a>( <span class='pre'>values, [oldResult], [newValues]</span> ) : Number<strong class='static signature' >static</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>values</span> : Number[]<div class='sub-desc'>\n</div></li><li><span class='pre'>oldResult</span> : Number (optional)<div class='sub-desc'><p>for incremental calculation</p>\n</div></li><li><span class='pre'>newValues</span> : Number[] (optional)<div class='sub-desc'><p>for incremental calculation</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Number</span><div class='sub-desc'><p>The sum of the values</p>\n</div></li></ul></div></div></div><div id='static-method-sumSquares' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Lumenize.functions'>Lumenize.functions</span><br/><a href='source/functions.coffee.html#Lumenize-functions-static-method-sumSquares' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Lumenize.functions-static-method-sumSquares' class='name expandable'>sumSquares</a>( <span class='pre'>values, [oldResult], [newValues]</span> ) : Number<strong class='static signature' >static</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>values</span> : Number[]<div class='sub-desc'>\n</div></li><li><span class='pre'>oldResult</span> : Number (optional)<div class='sub-desc'><p>for incremental calculation</p>\n</div></li><li><span class='pre'>newValues</span> : Number[] (optional)<div class='sub-desc'><p>for incremental calculation</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Number</span><div class='sub-desc'><p>The sum of the squares of the values</p>\n</div></li></ul></div></div></div><div id='static-method-uniqueValues' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Lumenize.functions'>Lumenize.functions</span><br/><a href='source/functions.coffee.html#Lumenize-functions-static-method-uniqueValues' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Lumenize.functions-static-method-uniqueValues' class='name expandable'>uniqueValues</a>( <span class='pre'>values, [oldResult], [newValues]</span> ) : Array<strong class='static signature' >static</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>values</span> : Object[]<div class='sub-desc'>\n</div></li><li><span class='pre'>oldResult</span> : Number (optional)<div class='sub-desc'><p>for incremental calculation</p>\n</div></li><li><span class='pre'>newValues</span> : Number[] (optional)<div class='sub-desc'><p>for incremental calculation</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Array</span><div class='sub-desc'><p>Unique values. This is good for generating an OLAP dimension or drill down.</p>\n</div></li></ul></div></div></div><div id='static-method-values' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Lumenize.functions'>Lumenize.functions</span><br/><a href='source/functions.coffee.html#Lumenize-functions-static-method-values' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Lumenize.functions-static-method-values' class='name expandable'>values</a>( <span class='pre'>values, [oldResult], [newValues]</span> ) : Array<strong class='static signature' >static</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>values</span> : Object[]<div class='sub-desc'>\n</div></li><li><span class='pre'>oldResult</span> : Number (optional)<div class='sub-desc'><p>for incremental calculation</p>\n</div></li><li><span class='pre'>newValues</span> : Number[] (optional)<div class='sub-desc'><p>for incremental calculation</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Array</span><div class='sub-desc'><p>All values (allows duplicates). Can be used for drill down.</p>\n</div></li></ul></div></div></div><div id='static-method-variance' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Lumenize.functions'>Lumenize.functions</span><br/><a href='source/functions.coffee.html#Lumenize-functions-static-method-variance' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Lumenize.functions-static-method-variance' class='name expandable'>variance</a>( <span class='pre'>values</span> ) : Number<strong class='static signature' >static</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>values</span> : Number[]<div class='sub-desc'>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Number</span><div class='sub-desc'><p>The variance</p>\n</div></li></ul></div></div></div></div></div></div></div>"});