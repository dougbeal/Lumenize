Ext.data.JsonP.Lumenize_ChartTimeInStateCalculator({"tagname":"class","name":"Lumenize.ChartTimeInStateCalculator","extends":null,"mixins":[],"alternateClassNames":[],"aliases":{},"singleton":false,"requires":[],"uses":[],"enum":null,"override":null,"inheritable":null,"inheritdoc":null,"meta":{},"private":null,"id":"class-Lumenize.ChartTimeInStateCalculator","members":{"cfg":[],"property":[],"method":[{"name":"constructor","tagname":"method","owner":"Lumenize.ChartTimeInStateCalculator","meta":{},"id":"method-constructor"},{"name":"timeInState","tagname":"method","owner":"Lumenize.ChartTimeInStateCalculator","meta":{},"id":"method-timeInState"}],"event":[],"css_var":[],"css_mixin":[]},"linenr":6,"files":[{"filename":"ChartTimeInStateCalculator.coffee.js","href":"ChartTimeInStateCalculator.coffee.html#Lumenize-ChartTimeInStateCalculator"}],"html_meta":{},"statics":{"cfg":[],"property":[],"method":[],"event":[],"css_var":[],"css_mixin":[]},"component":false,"superclasses":[],"subclasses":[],"mixedInto":[],"parentMixins":[],"html":"<div><pre class=\"hierarchy\"><h4>Files</h4><div class='dependency'><a href='source/ChartTimeInStateCalculator.coffee.html#Lumenize-ChartTimeInStateCalculator' target='_blank'>ChartTimeInStateCalculator.coffee.js</a></div></pre><div class='doc-contents'><p>Used to calculate how much time each uniqueID spent \"in-state\". You use this by querying a temporal data\nmodel (like Rally's Lookback API) with a predicate indicating the \"state\" of interest. You'll then have a list of\nsnapshots where that predicate was true. You pass this in to the timeInState method of this previously instantiated\nChartTimeInStateCalculator class to identify how many \"ticks\" of the timeline specified by the iterator you used\nto instantiate this class.</p>\n\n<p>Usage:</p>\n\n<pre><code>charttime = require('../')\n{ChartTimeRange, ChartTime, ChartTimeIterator, ChartTimeInStateCalculator} = charttime\n\nsnapshots = [ \n  { id: 1, from: '2011-01-06T15:10:00.000Z', to: '2011-01-06T15:30:00.000Z' }, # 20 minutes all within an hour\n  { id: 2, from: '2011-01-06T15:50:00.000Z', to: '2011-01-06T16:10:00.000Z' }, # 20 minutes spanning an hour\n  { id: 3, from: '2011-01-07T13:00:00.000Z', to: '2011-01-07T15:20:00.000Z' }, # start 2 hours before but overlap by 20 minutes of start\n  { id: 4, from: '2011-01-06T16:40:00.000Z', to: '2011-01-06T19:00:00.000Z' }, # 20 minutes before end of day\n  { id: 5, from: '2011-01-06T16:50:00.000Z', to: '2011-01-07T15:10:00.000Z' }, # 10 minutes before end of one day and 10 before the start of next\n  { id: 6, from: '2011-01-06T16:55:00.000Z', to: '2011-01-07T15:05:00.000Z' }, # multiple cycles over several days for a total of 20 minutes of work time\n  { id: 6, from: '2011-01-07T16:55:00.000Z', to: '2011-01-10T15:05:00.000Z' }, \n  { id: 7, from: '2011-01-06T16:40:00.000Z', to: '2011-01-20T19:00:00.000Z' }  # false beyond scope of iterator\n]\n\ngranularity = 'minute'\ntimezone = 'America/Chicago'\n\nrangeSpec = \n  granularity: granularity\n  start: new ChartTime(snapshots[0].from, granularity, timezone).decrement()\n  pastEnd: '2011-01-11T00:00:00.000'\n  startWorkTime: {hour: 9, minute: 0}  # 15:00 in Chicago\n  pastEndWorkTime: {hour: 11, minute: 0}  # 17:00 in Chicago.\n\nr1 = new ChartTimeRange(rangeSpec)\ni1 = r1.getIterator('ChartTime')\nisc1 = i1.getChartTimeInStateCalculator(timezone)\ntimeInState = isc1.timeInState(snapshots, 'from', 'to', 'id')\nconsole.log(timeInState)\n\n# [ { ticks: 20,\n#     finalState: false,\n#     finalEventAt: '2011-01-06T15:30:00.000Z',\n#     finalTickAt: '2011-01-06T15:29:00.000Z',\n#     id: '1' },\n#   { ticks: 20,\n#     finalState: false,\n#     finalEventAt: '2011-01-06T16:10:00.000Z',\n#     finalTickAt: '2011-01-06T16:09:00.000Z',\n#     id: '2' },\n#   { ticks: 20,\n#     finalState: false,\n#     finalEventAt: '2011-01-07T15:20:00.000Z',\n#     finalTickAt: '2011-01-07T15:19:00.000Z',\n#     id: '3' },\n#   { ticks: 20,\n#     finalState: false,\n#     finalEventAt: '2011-01-06T19:00:00.000Z',\n#     finalTickAt: '2011-01-06T16:59:00.000Z',\n#     id: '4' },\n#   { ticks: 20,\n#     finalState: false,\n#     finalEventAt: '2011-01-07T15:10:00.000Z',\n#     finalTickAt: '2011-01-07T15:09:00.000Z',\n#     id: '5' },\n#   { ticks: 20,\n#     finalState: false,\n#     finalEventAt: '2011-01-10T15:05:00.000Z',\n#     finalTickAt: '2011-01-10T15:04:00.000Z',\n#     id: '6' } ]\n</code></pre>\n\n<p>The default supresses the ones that are still open at the end, but we can override that</p>\n\n<pre><code>snapshots = [snapshots[7]]\nconsole.log(isc1.timeInState(snapshots, 'from', 'to', 'id', false))\n\n# [ { ticks: 260,\n#     finalState: true,\n#     finalEventAt: '2011-01-06T16:40:00.000Z',\n#     finalTickAt: '2011-01-10T16:59:00.000Z',\n#     id: '7' } ]\n</code></pre>\n\n<p>We can adjust the granularity</p>\n\n<pre><code>rangeSpec.granularity = 'hour'\nisc2 = new ChartTimeRange(rangeSpec).getIterator().getChartTimeInStateCalculator(timezone)\ntimeInState = isc2.timeInState(snapshots, 'from', 'to', 'id', false)\nconsole.log(timeInState)\n\n# [ { ticks: 4,\n#     finalState: true,\n#     finalEventAt: '2011-01-06T16:40:00.000Z',\n#     finalTickAt: '2011-01-10T16:00:00.000Z',\n#     id: '7' } ]\n</code></pre>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-constructor' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Lumenize.ChartTimeInStateCalculator'>Lumenize.ChartTimeInStateCalculator</span><br/><a href='source/ChartTimeInStateCalculator.coffee.html#Lumenize-ChartTimeInStateCalculator-method-constructor' target='_blank' class='view-source'>view source</a></div><strong class='new-keyword'>new</strong><a href='#!/api/Lumenize.ChartTimeInStateCalculator-method-constructor' class='name expandable'>Lumenize.ChartTimeInStateCalculator</a>( <span class='pre'>iterator, tz</span> ) : <a href=\"#!/api/Lumenize.ChartTimeInStateCalculator\" rel=\"Lumenize.ChartTimeInStateCalculator\" class=\"docClass\">Lumenize.ChartTimeInStateCalculator</a></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>iterator</span> : ChartTimeIterator<div class='sub-desc'><p>You must pass in a ChartTimeIterator in the correct granularity and wide enough to cover any snapshots that you will analyze with this ChartTimeInStateCalculator</p>\n</div></li><li><span class='pre'>tz</span> : String<div class='sub-desc'><p>The timezone for analysis</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Lumenize.ChartTimeInStateCalculator\" rel=\"Lumenize.ChartTimeInStateCalculator\" class=\"docClass\">Lumenize.ChartTimeInStateCalculator</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-timeInState' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Lumenize.ChartTimeInStateCalculator'>Lumenize.ChartTimeInStateCalculator</span><br/><a href='source/ChartTimeInStateCalculator.coffee.html#Lumenize-ChartTimeInStateCalculator-method-timeInState' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Lumenize.ChartTimeInStateCalculator-method-timeInState' class='name expandable'>timeInState</a>( <span class='pre'>snapshotArray, validFromField, validToField, uniqueIDField, [excludeStillInState]</span> ) : Object[]</div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>snapshotArray</span> : Object[]<div class='sub-desc'>\n</div></li><li><span class='pre'>validFromField</span> : String<div class='sub-desc'><p>What field in the snapshotArray indicates when the snapshot starts (inclusive)?</p>\n</div></li><li><span class='pre'>validToField</span> : String<div class='sub-desc'><p>What field in the snapshotArray indicates when the snapshot ends (exclusive)?</p>\n</div></li><li><span class='pre'>uniqueIDField</span> : String<div class='sub-desc'><p>What field in the snapshotArray holds the uniqueID</p>\n</div></li><li><span class='pre'>excludeStillInState</span> : Boolean (optional)<div class='sub-desc'><p>If false, even ids that are still active on the last tick are included</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object[]</span><div class='sub-desc'><p>An entry for each uniqueID.</p>\n\n<p>The fields in each row in the returned Array include:</p>\n\n<ul>\n<li>ticks: The number of ticks of the iterator that intersect with the snapshots</li>\n<li>finalState: true if the last snapshot for this uniqueID had not yet ended by the moment of the last tick</li>\n<li>finalEventAt: the validFrom value for the final event</li>\n<li>finalTickAt: the last tick that intersected with this uniqueID</li>\n<li>|uniqueIDField|: The uniqueID value</li>\n</ul>\n\n\n<p>Assumptions about the snapshotArray that's passed in:</p>\n\n<ul>\n<li>The snapshotArray includes all snapshots where the logical state you want\nto measure the \"time in\" is true. So, send the predicate you want to be true as part of the query to the snapshot service.</li>\n<li>The <code>validFromField</code> and <code>validToField</code> in the <code>snapshotArray</code> contain strings in ISO-8601 canonical\nZulu format (eg <code>'2011-01-01T12:34:56.789Z'</code>).</li>\n</ul>\n\n</div></li></ul></div></div></div></div></div></div></div>"});