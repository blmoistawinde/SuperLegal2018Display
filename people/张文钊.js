var data = {"person_name": "\u5f20\u6587\u948a", "nicknames": "\u5f20\u6587\u948a", "aspects": {"\u9632\u5b88": 0.4642125434103755, "\u6bd4\u8d5b": 0.3450935713135893, "\u6362\u4eba": 0.4878821042194454, "\u4f20\u4e2d": 0.3157891489731213, "\u4f20\u7403": 0.5444939902001915, "\u7403\u5458": 0.42565149815673486, "\u7a81\u7834": 0.4256816598930149, "\u8fb9\u8def": 0.5488814538156183, "\u56fd\u5bb6\u961f": 0.6662865772702172, "\u8fdb\u653b": 0.4844624019742273}, "overall_heat": 83.0, "overall_polar": -0.011, "name": "12", "nationality": "\u4e2d\u56fd", "position": "\u4e2d\u573a", "goal": "1", "assist": "2", "team_name": "\u5e7f\u5dde\u6052\u5927\u6dd8\u5b9d", "name_en": "Zhang Wenzhao", "age": "31", "height": "177", "weight": "63"};
        var set0 = document.getElementsByName("person_name");
        for (var i=0;i<set0.length;i++)
            set0[i].innerHTML=data.person_name;
        
        var set0 = document.getElementsByName("team_name");
        for (var i=0;i<set0.length;i++)
            set0[i].innerHTML=data.team_name;
        
        var set0 = document.getElementsByName("position");
        for (var i=0;i<set0.length;i++)
            set0[i].innerHTML=data.position;
        
        var set0 = document.getElementsByName("goal");
        for (var i=0;i<set0.length;i++)
            set0[i].innerHTML=data.goal;
        
        var set0 = document.getElementsByName("assist");
        for (var i=0;i<set0.length;i++)
            set0[i].innerHTML=data.assist;
        
        var set0 = document.getElementsByName("nicknames");
        for (var i=0;i<set0.length;i++)
            set0[i].innerHTML=data.nicknames;
        
        var set0 = document.getElementsByName("overall_polar");
        for (var i=0;i<set0.length;i++)
            set0[i].innerHTML=data.overall_polar;
        
        var set0 = document.getElementsByName("overall_heat");
        for (var i=0;i<set0.length;i++)
            set0[i].innerHTML=data.overall_heat;
        var c=document.getElementById("aspects");
var ctx=c.getContext("2d");
var i;
var x0 = 100,y0 = 20;
var gap = 30;
var h_m = 20;
var w_m = 200;
var v_m = 1.0;

//画总框
ctx.fillStyle="#999999";
i = 0;
for (var aspect in data.aspects){
	ctx.fillRect(x0,y0+gap*i,w_m,h_m);
	i++;
}
//显示文字
ctx.fillStyle="#000000";
ctx.font="16px SimHei";
i = 0;
for (var aspect in data.aspects){
	ctx.fillText(aspect+"："+Math.round(data.aspects[aspect]*100),10,y0+4+gap*i+h_m/2);
	i++;
}
//显示数值条
var w0; 
i = 0;
ctx.fillStyle="#FF0000";
for (var aspect in data.aspects){
	w0 = Math.round((data.aspects[aspect]/v_m)*w_m);
	ctx.fillRect(x0,y0+gap*i,w0,h_m);
	i++;
}var tmp;
var summary0;
var div_left0, div_right0;
var option;
var chart;
var keywords0;
for (var topicid in topic_summary){
	//表格部分
	div_right0 = document.getElementById('right'+topicid);
	summary0 = topic_summary[topicid];
	//txt = '<table border="1" style="transform:translateY(50%); float:left;">'
	txt = '<table border="1" style="float:left;">'
	txt += "<tr><td>序号</td><td>点赞数</td><td>内容</td></tr>\n"
	for (var cid in summary0){
		tmp = summary0[cid];
		txt += "<tr><td>"+(cid)+"</td><td>"+tmp["up"]+"</td><td>"+tmp["content"]+"</td></tr>\n";
	}
    txt += "</table>\n"
	div_right0.innerHTML = txt;
	//词云部分
	div_right0 = document.getElementById('left'+topicid);
	chart = echarts.init(div_right0);
	keywords0 = topic_keywords[topicid];
	option = {
		title : {
			text: '主题'+topicid,
			textStyle: {
				color: '#000'
			}
		},
		tooltip: {},
		series: [ {
			type: 'wordCloud',
			gridSize: 2,
			sizeRange: [12, 50],
			rotationRange: [-90, 90],
			shape: 'pentagon',
			width: 200,
			height: 200,
			drawOutOfBound: true,
			textStyle: {
				normal: {
					color: function () {
						return 'rgb(' + [
							Math.round(Math.random() * 160),
							Math.round(Math.random() * 160),
							Math.round(Math.random() * 160)
						].join(',') + ')';
					}
				},
				emphasis: {
					shadowBlur: 10,
					shadowColor: '#333'
				}
			},
			data: keywords0
		} ]
	};

	chart.setOption(option);
}
var topic_keywords = {"0": [{"name": "\u5f20\u6587\u948a", "value": 0.06382380506091846}, {"name": "\uff01", "value": 0.030084348641049672}, {"name": "\u90d1\u9f99", "value": 0.02633552014995314}, {"name": "\u6052\u5927", "value": 0.01977507029053421}, {"name": "\uff1f", "value": 0.015089034676663544}, {"name": "\u4e8e\u6c49\u8d85", "value": 0.013214620431115277}, {"name": "\u8e22", "value": 0.012277413308341143}, {"name": "\u5361\u5e05", "value": 0.010402999062792876}, {"name": "\u6362", "value": 0.009465791940018745}, {"name": "\u90dc\u6797", "value": 0.008528584817244611}, {"name": "\u4eba", "value": 0.0075913776944704775}, {"name": "\u4e0a\u573a", "value": 0.0075913776944704775}, {"name": "\u6700\u540e", "value": 0.0075913776944704775}, {"name": "\u6bd4\u8d5b", "value": 0.0075913776944704775}, {"name": "\u77e5\u9053", "value": 0.006654170571696345}, {"name": "\u6362\u4e0b", "value": 0.006654170571696345}, {"name": "\u89c9\u5f97", "value": 0.006654170571696345}, {"name": "\u6709\u70b9", "value": 0.005716963448922211}, {"name": "\u9996\u53d1", "value": 0.005716963448922211}, {"name": "\u9ec4\u535a\u6587", "value": 0.005716963448922211}, {"name": "\u6342", "value": 0.004779756326148079}, {"name": "\u6362\u4eba", "value": 0.004779756326148079}, {"name": "\u9632\u5b88", "value": 0.004779756326148079}, {"name": "\u8138", "value": 0.004779756326148079}, {"name": "\u6362\u4e0a", "value": 0.004779756326148079}, {"name": "\u4e0a\u6e2f", "value": 0.004779756326148079}, {"name": "\u4e00\u76f4", "value": 0.004779756326148079}, {"name": "\u5f20\u6210\u6797", "value": 0.004779756326148079}, {"name": "\u7403\u5458", "value": 0.004779756326148079}, {"name": "\u8fd9\u573a", "value": 0.004779756326148079}], "1": [{"name": "\uff01", "value": 0.04551971326164875}, {"name": "\u5f20\u6587\u948a", "value": 0.029988052568697732}, {"name": "\u6052\u5927", "value": 0.029988052568697732}, {"name": "\u9c81\u80fd", "value": 0.018040621266427716}, {"name": "\uff1f", "value": 0.013261648745519713}, {"name": "\u4e2d\u56fd", "value": 0.00967741935483871}, {"name": "\u5361\u7eb3\u74e6\u7f57", "value": 0.00967741935483871}, {"name": "\u8d5b\u5b63", "value": 0.008482676224611707}, {"name": "\u4e00\u4e2a", "value": 0.008482676224611707}, {"name": "\u8db3\u534f", "value": 0.008482676224611707}, {"name": "\u4e8e\u6c49\u8d85", "value": 0.008482676224611707}, {"name": "\u7403", "value": 0.0072879330943847066}, {"name": "\u5ed6\u529b\u751f", "value": 0.0072879330943847066}, {"name": "\u90d1\u9f99", "value": 0.0072879330943847066}, {"name": "\u5f53\u5e74", "value": 0.006093189964157706}, {"name": "\u673a\u4f1a", "value": 0.006093189964157706}, {"name": "\u9632\u5b88", "value": 0.004898446833930705}, {"name": "\u8fb9\u8def", "value": 0.004898446833930705}, {"name": "\u4f20\u7403", "value": 0.004898446833930705}, {"name": "\u4f20\u4e2d", "value": 0.004898446833930705}, {"name": "\u4e0b", "value": 0.004898446833930705}, {"name": "\u89c9\u5f97", "value": 0.004898446833930705}, {"name": "\u4eba", "value": 0.004898446833930705}, {"name": "\u4eca\u5929", "value": 0.004898446833930705}, {"name": "\u4eca\u5e74", "value": 0.004898446833930705}, {"name": "\u4e24\u4e2a", "value": 0.004898446833930705}, {"name": "\u672c\u6765", "value": 0.003703703703703704}, {"name": "\u8dd1\u4f4d", "value": 0.003703703703703704}, {"name": "\u540e\u536b", "value": 0.003703703703703704}, {"name": "\u7403\u8ff7", "value": 0.003703703703703704}]};
var topic_summary = {"0": [{"content": "\u6709\u4eba\u5938\u5938\u5f20\u6587\u948a\u5417\uff0c\u6bd4\u90d1\u9f99\u597d\u592a\u591a[\u5fae\u7b11]", "up": 555}, {"content": "\u70b9\u7403\u4e0d\u70b9\u7403\u7684\u6211\u5c31\u4e0d\u8bc4\u8bba\u4e86\u3002\u5f20\u6587\u948a\u8fd9\u61a8\u539a\u7684\u7b11\u5bb9\u6211\u770b\u4e86\u4e0d\u4e0b\u5341\u904d\u3002\u7279\u4e48\u7684\u6211\u5c45\u7136\u4e5f\u8ddf\u7740\u7b11\u4e86[\u6342\u8138][\u6342\u8138]", "up": 463}, {"content": "\u8fd9\u573a\u6bd4\u8d5b\u6052\u5927\u7684\u6536\u83b7\u662f \u9093\u6db5\u6587\u8e22\u7684\u6bd4\u8f83\u81ea\u4fe1\u4e86\uff01\u51af\u535a\u8f69\u4e0d\u602f\u573a \u57fa\u672c\u529f\u6bd4\u8f83\u624e\u5b9e\uff01\u5361\u7eb3\u74e6\u7f57\u8fd8\u662f\u6709\u70b9\u773c\u5149 \u5f20\u6587\u948a\u5361\u7eb3\u74e6\u7f57\u4e00\u5b9a\u8981\u591a\u7528\uff01\uff01\uff01\u73b0\u5728\u7684\u72b6\u6001 \u7edd\u5bf9\u5f3a\u4e8e\u90d1\u9f99\uff01\uff01\uff01\u5f20\u7433\u8283 \u9700\u8981\u4f11\u606f \u5176\u4ed6\u4eba\u90fd\u6709\u8f6e\u6362\u8c8c\u4f3c\u5f20\u7433\u8283\u6ca1\u6709", "up": 290}, {"content": "\u4e8e\u6c49\u8d85\u5c31\u7b97\u4e0d\u8fdb\u7403\uff0c\u4e5f\u6bd4\u5f20\u6587\u948a\uff0c\u6768\u529b\u5b87\uff0c\u90d1\u9f99\u5f3a\u592a\u591a", "up": 15}, {"content": "\u8fd9\u5c31\u662f\u5f20\u6587\u948a\u4e8e\u6c49\u8d85\uff01\u5bf9\u4e8e\u6052\u5927\u6765\u8bf4\u76f8\u5f53\u5b9d\u8d35\u7684\u4e09\u5206\uff01\u606d\u559c\uff01", "up": 15}], "1": [{"content": "\u7edd\u6740\u4e86\uff0c\u201c\u8d85\u201d\u5f00\u5fc3\uff01\u5728\u9ad8\u62c9\u7279\u548c\u963f\u5170\u5747\u7f3a\u5e2d\u7684\u60c5\u51b5\u4e0b\u8270\u96be\u53d6\u80dc\uff0c\u6b8a\u4e3a\u4e0d\u6613\uff01\u4e8e\u6c49\u8d85\u4eca\u5e74\u51e0\u6b21\u4e0e\u8fdb\u7403\u5931\u4e4b\u4ea4\u81c2\uff0c\u5e0c\u671b\u8fd9\u662f\u4e00\u4e2a\u826f\u597d\u7684\u5f00\u7aef\uff0c\u4eca\u5e74\u4e09\u7ebf\u8fdb\u7403\u53ef\u4ee5\u4e0a\u53cc\u3002\u770b\u5230\u8bf4\u90d1\u9f99\u7684\uff0c\u6211\u89c9\u5f97\u4ed6\u5728\u573a\u4e0a\u7684\u6001\u5ea6\u662f\u6ca1\u5f97\u9ed1\u7684\uff0c\u6ee1\u573a\u98de\u5954\uff0c\u79ef\u6781\u62fc\u62a2\uff0c\u53ea\u662f\u6700\u540e\u5904\u7406\u7403\u7684\u5fc3\u6001\u8fd8\u6709\u4e9b\u6025\u8e81\u3002\u7403\u662f\u4e8e\u6c49\u8d85\u8fdb\u7684\uff0c\u5f20\u6587\u948a\u4f20\u7684\u3002\u3002\u3002\u4f46\u662f\uff0c\u4f60\u4eec\u8fd8\u8bb0\u5f97\u7ed9\u5f20\u6587\u948a\u4f20\u7684\u662f\u8c01\u5417\uff1f\u5ed6\u529b\u751f\uff01\u4ece\u4e2d\u5708\u7cbe\u51c6\u957f\u4f20\u7ed9\u5927\u7981\u533a\u53f3\u4fa7\u7684\u5f20\uff0c\u4f9d\u7a00\u770b\u5230\u4e8613\u8d5b\u5b63\u7684\u90a3\u4e2a\u5ed62\uff0c\u4ed6\u5c31\u5e94\u8be5\u662f\u8fd9\u6837\u7684\u5ed62\uff0c\u4e00\u76f4\u4ee5\u4e3a\u4ed6\u5c06\u662f\u6052\u5927\u672a\u6765\u5341\u5e74\u7684\u7ec4\u7ec7\u6838\u5fc3\uff0c\u4e00\u76f4\u671f\u5f85\u4ed6\u7684\u91cd\u65b0\u5d1b\u8d77\u3002\u3002\u3002\u4eca\u5929\uff0c\u5ed6\u529b\u751f\u7684\u8fd9\u811a\u4f20\u7403\u624d\u6700\u8ba9\u6211\u5f00\u5fc3\uff01\uff01\uff01", "up": 33}, {"content": "\u5361\u5e05\u5e26\u961f\u5c31\u662f\u4e00\u6293\u9632\u5b88\uff0c\u4e8c\u6293\u53d8\u9635\u53d6\u80dc\uff0c\u4e09\u6293\u5e74\u8f7b\u4eba\u3002\u4eca\u5929\u6052\u5927\u7684\u8fb9\u8def\u8d77\u7403\u4e0d\u7ed9\u529b\uff0c\u5bf9\u65b9\u5149\u5934\u4e2d\u536b\u53c8\u5389\u5bb3\uff0c\u6362\u4e0a\u5f20\u6587\u948a\u6765\u4e2a\u53f3\u8def\u7684\u5de6\u811a\u5f27\u7ebf\uff0c\u4e00\u4e0b\u5c31\u628a\u4e2d\u536b\u7ed5\u8fc7\u53bb\u4e86\uff0c\u624d\u6709\u9876\u51fa\u7edd\u6740\u7403\u7684\u7a7a\u95f4\uff01", "up": 13}, {"content": "\u8bf4\u5b9e\u8bdd\uff0c\u5c0f\u91d1\u548c\u5a77\u59d0\u4f9d\u65e7\u662f\u4e9a\u6d32\u4e00\u7ea7\u4e2d\u536b\uff0c34\u53f7\u5f88\u51fa\u8272\uff0c\u53ef\u4ee5\u8bf4\u662f\u4eae\u70b9\u3002\u4e2d\u573a\u4ea4\u7ed9\u5ed6\u529b\u751f\u771f\u7684\u65e0\u529b\u5410\u69fd\uff0c\u6ca1\u6709\u51e0\u4e2a\u6210\u529f\u4f20\u7403\uff0c\u62e6\u622a\u4e5f\u4e0d\u884c\uff0c\u7ec4\u7ec7\u66f4\u5dee\u3002\u53e4\u5fb7\u5229\u4f3c\u4e4e\u90fd\u6e38\u8d70\u5230\u524d\u8170\u751a\u81f3\u524d\u950b\u4f4d\u7f6e\u4e86\u3002\u5f20\u6587\u948a\u8fd8\u662f\u6709\u70b9\u72ec\uff0c17\u53f7\u7b80\u76f4\u83dc\u3002\u603b\u7684\u6765\u8bf4\uff0c\u8d62\u5f97\u5f88\u96be", "up": 9}, {"content": "\u5361\u7eb3\u74e6\u7f57\u8bf4\u57f9\u517b\u65b0\u4eba\uff0c\u53cd\u800c\u8d8a\u7528\u8d8a\u8001\u3002\u4ee5\u524d\u65af\u79d1\u62c9\u91cc\u4e0d\u7528\u7684\u5f20\u6210\u6797\uff0c\u5f20\u6587\u948a\uff0c\u90d1\u9f99\u90fd\u573a\u573a\u8e22\u7403\u4e86\uff0c\u53cd\u800c\u5f90\u65b0\u3001\u5510\u8bd7\u3001\u5ed6\u529b\u751f\u8fd9\u4e9b\u4e00\u70b9\u673a\u4f1a\u90fd\u6ca1\u6709\u3002", "up": 9}, {"content": "\u8fd9\u7edd\u6740\u725b\u903c\uff01\ud83d\udc2e\u5f20\u6587\u948a\uff0b\u4e8e\u6c49\u8d85", "up": 8}]};
var tmp;
var summary0;
var div_left0, div_right0;
var option;
var chart;
var keywords0;
for (var topicid in topic_summary){
	//表格部分
	div_right0 = document.getElementById('right'+topicid);
	summary0 = topic_summary[topicid];
	//txt = '<table border="1" style="transform:translateY(50%); float:left;">'
	txt = '<table border="1" style="float:left;">'
	txt += "<tr><td>序号</td><td>点赞数</td><td>内容</td></tr>\n"
	for (var cid in summary0){
		tmp = summary0[cid];
		txt += "<tr><td>"+(cid)+"</td><td>"+tmp["up"]+"</td><td>"+tmp["content"]+"</td></tr>\n";
	}
    txt += "</table>\n"
	div_right0.innerHTML = txt;
	//词云部分
	div_right0 = document.getElementById('left'+topicid);
	chart = echarts.init(div_right0);
	keywords0 = topic_keywords[topicid];
	option = {
		title : {
			text: '主题'+topicid,
			textStyle: {
				color: '#000'
			}
		},
		tooltip: {},
		series: [ {
			type: 'wordCloud',
			gridSize: 2,
			sizeRange: [12, 50],
			rotationRange: [-90, 90],
			shape: 'pentagon',
			width: 200,
			height: 200,
			drawOutOfBound: true,
			textStyle: {
				normal: {
					color: function () {
						return 'rgb(' + [
							Math.round(Math.random() * 160),
							Math.round(Math.random() * 160),
							Math.round(Math.random() * 160)
						].join(',') + ')';
					}
				},
				emphasis: {
					shadowBlur: 10,
					shadowColor: '#333'
				}
			},
			data: keywords0
		} ]
	};

	chart.setOption(option);
}
