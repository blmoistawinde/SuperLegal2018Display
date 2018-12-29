var data = {"person_name": "\u80e1\u5c14\u514b", "nicknames": "\u80e1\u5c14\u514b", "aspects": {"\u8fdb\u7403": 0.4688988417855457, "\u56fd\u5bb6\u961f": 0.4349740171938673, "\u4f20\u7403": 0.6771720330350498, "\u5916\u63f4": 0.4900684707326089, "\u7403\u5458": 0.5495703004407123, "\u6bd4\u8d5b": 0.4893523115713163, "\u70b9\u7403": 0.23999774597799073, "\u52a9\u653b": 0.2559287096690421, "\u9632\u5b88": 0.5331842780292403, "\u8fdb\u653b": 0.6385843843625859}, "overall_heat": 401.0, "overall_polar": 0.313, "name": "35", "nationality": "\u5df4\u897f", "position": "\u524d\u950b", "goal": "14", "assist": "15", "team_name": "\u4e0a\u6d77\u4e0a\u6e2f", "name_en": "Givanildo Vieira de ", "age": "32", "height": "180", "weight": "85"};
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
var topic_keywords = {"0": [{"name": "\u80e1\u5c14\u514b", "value": 0.061967171395851894}, {"name": "\u5965\u65af\u5361", "value": 0.029308224116723926}, {"name": "\u6b66\u78ca", "value": 0.02591508673707427}, {"name": "\u4e0a\u6e2f", "value": 0.023370233702337026}, {"name": "\uff01", "value": 0.019552954150231158}, {"name": "\u56fd\u5bb6\u961f", "value": 0.013614963735844256}, {"name": "\uff1f", "value": 0.01319082156338805}, {"name": "\u8fdb\u7403", "value": 0.012766679390931842}, {"name": "\u80fd\u529b", "value": 0.00979768418373839}, {"name": "\u7403", "value": 0.009373542011282184}, {"name": "\u4eba", "value": 0.008949399838825976}, {"name": "\u4f20\u7403", "value": 0.008949399838825976}, {"name": "\u8fdb", "value": 0.007676973321457354}, {"name": "\u771f\u7684", "value": 0.006828688976544939}, {"name": "\u4e00\u4e2a", "value": 0.006404546804088731}, {"name": "\u4e2d\u573a", "value": 0.005980404631632523}, {"name": "\u5916\u63f4", "value": 0.005980404631632523}, {"name": "\u673a\u4f1a", "value": 0.005980404631632523}, {"name": "\u5f3a", "value": 0.005556262459176316}, {"name": "\u903c", "value": 0.005556262459176316}, {"name": "\u4e0d\u884c", "value": 0.005132120286720109}, {"name": "\u597d", "value": 0.005132120286720109}, {"name": "\u8d5b\u5b63", "value": 0.005132120286720109}, {"name": "\u52a9\u653b", "value": 0.004707978114263901}, {"name": "\u771f", "value": 0.004707978114263901}, {"name": "\u7403\u5458", "value": 0.004707978114263901}, {"name": "\u5c04\u95e8", "value": 0.004283835941807694}, {"name": "\u725b", "value": 0.004283835941807694}, {"name": "\u8e22", "value": 0.004283835941807694}, {"name": "\u8868\u73b0", "value": 0.0038596937693514866}], "1": [{"name": "\u80e1\u5c14\u514b", "value": 0.04176859653891456}, {"name": "\u4e0a\u6e2f", "value": 0.027271903596991935}, {"name": "\u88c1\u5224", "value": 0.02364773036151128}, {"name": "\uff1f", "value": 0.02092960043490079}, {"name": "\u70b9\u7403", "value": 0.015493340581679805}, {"name": "\u5224\u7f5a", "value": 0.011869167346199147}, {"name": "\uff01", "value": 0.010963124037328983}, {"name": "\u5224", "value": 0.010057080728458819}, {"name": "\u5206\u949f", "value": 0.009151037419588656}, {"name": "\u7403", "value": 0.008244994110718492}, {"name": "\u6052\u5927", "value": 0.008244994110718492}, {"name": "\u7981\u533a", "value": 0.008244994110718492}, {"name": "\u5916\u63f4", "value": 0.007338950801848328}, {"name": "\u5e94\u8be5", "value": 0.007338950801848328}, {"name": "\uff1b", "value": 0.007338950801848328}, {"name": "\u90dc\u6797", "value": 0.006432907492978163}, {"name": "\u8e22\u5012", "value": 0.005526864184108}, {"name": "\u5fc3\u7406", "value": 0.005526864184108}, {"name": "\u660e\u663e", "value": 0.005526864184108}, {"name": "\u5965\u65af\u5361", "value": 0.005526864184108}, {"name": "\u6bd4\u8d5b", "value": 0.005526864184108}, {"name": "\u52a8\u4f5c", "value": 0.004620820875237836}, {"name": "\u5927\u54ed", "value": 0.004620820875237836}, {"name": "\u8bef\u5224", "value": 0.004620820875237836}, {"name": "\u62b1\u6028", "value": 0.004620820875237836}, {"name": "\u770b\u770b", "value": 0.004620820875237836}, {"name": "\u4e00\u4e2a", "value": 0.004620820875237836}, {"name": "\u95ee\u9898", "value": 0.004620820875237836}, {"name": "\u5c0a\u91cd", "value": 0.0037147775663676718}, {"name": "\u6001\u5ea6", "value": 0.0037147775663676718}], "2": [{"name": "\u80e1\u5c14\u514b", "value": 0.044711883318721606}, {"name": "\uff01", "value": 0.02956882123216705}, {"name": "\u4e0a\u6e2f", "value": 0.02398979835817327}, {"name": "\u6052\u5927", "value": 0.011237746074758906}, {"name": "\uff1f", "value": 0.011237746074758906}, {"name": "\u4e00\u4e2a", "value": 0.008846736271618713}, {"name": "\u6b66\u78ca", "value": 0.008049733003905315}, {"name": "\u5965\u65af\u5361", "value": 0.008049733003905315}, {"name": "\u7403", "value": 0.007252729736191918}, {"name": "\u7403\u8ff7", "value": 0.007252729736191918}, {"name": "\u5c11", "value": 0.0056587232007651225}, {"name": "\u8e22", "value": 0.004861719933051725}, {"name": "\u51a0\u519b", "value": 0.004861719933051725}, {"name": "\u7533\u82b1", "value": 0.004861719933051725}, {"name": "\u4eca\u5e74", "value": 0.004861719933051725}, {"name": "\u4eba", "value": 0.004861719933051725}, {"name": "\u6253", "value": 0.004861719933051725}, {"name": "\u5361\u62c9\u65af\u79d1", "value": 0.004861719933051725}, {"name": "\u5927\u8fde", "value": 0.004064716665338327}, {"name": "\u524d\u573a", "value": 0.004064716665338327}, {"name": "\u8d62", "value": 0.004064716665338327}, {"name": "\u4e0d\u9519", "value": 0.004064716665338327}, {"name": "\u8fd9\u573a", "value": 0.004064716665338327}, {"name": "\u7403\u961f", "value": 0.004064716665338327}, {"name": "\u4e00\u70b9", "value": 0.004064716665338327}, {"name": "\u5c04\u95e8", "value": 0.0032677133976249297}, {"name": "\u5e94\u8be5", "value": 0.0032677133976249297}, {"name": "\u60f3", "value": 0.0032677133976249297}, {"name": "\u6700", "value": 0.0032677133976249297}, {"name": "\u5415\u6587\u541b", "value": 0.0032677133976249297}], "3": [{"name": "\u80e1\u5c14\u514b", "value": 0.06469059492870688}, {"name": "\uff01", "value": 0.05204748191332443}, {"name": "\u6b66\u78ca", "value": 0.022546884877432043}, {"name": "\u70b9\u7403", "value": 0.016927723537262063}, {"name": "\u5965\u65af\u5361", "value": 0.015522933202219568}, {"name": "\u4e0a\u6e2f", "value": 0.010606167029570837}, {"name": "\uff1f", "value": 0.008498981527007093}, {"name": "\u8fdb\u7403", "value": 0.007796586359485846}, {"name": "\u8138", "value": 0.007094191191964598}, {"name": "\u7403", "value": 0.005689400856922104}, {"name": "\u54ed", "value": 0.004987005689400857}, {"name": "\u6342", "value": 0.004987005689400857}, {"name": "\u7b11", "value": 0.004987005689400857}, {"name": "\u4e2d\u8d85", "value": 0.004987005689400857}, {"name": "\u5355\u5200", "value": 0.004987005689400857}, {"name": "\u4e2d\u56fd", "value": 0.004284610521879609}, {"name": "\u57c3\u5c14\u514b\u68ee", "value": 0.004284610521879609}, {"name": "\u5434\u78ca", "value": 0.004284610521879609}, {"name": "\ud83d\ude02", "value": 0.004284610521879609}, {"name": "\u4e0d\u8fdb", "value": 0.004284610521879609}, {"name": "\u9ad8\u62c9\u7279", "value": 0.004284610521879609}, {"name": "\u8e22", "value": 0.004284610521879609}, {"name": "\u77e5\u9053", "value": 0.003582215354358362}, {"name": "\u6700\u540e", "value": 0.003582215354358362}, {"name": "\u4e3b\u88c1", "value": 0.003582215354358362}, {"name": "\u8fdb", "value": 0.003582215354358362}, {"name": "\u5439", "value": 0.003582215354358362}, {"name": "\u5389\u5bb3", "value": 0.003582215354358362}, {"name": "\u4e00\u4e2a", "value": 0.003582215354358362}, {"name": "\u5e94\u8be5", "value": 0.003582215354358362}], "4": [{"name": "\u80e1\u5c14\u514b", "value": 0.03460418500711045}, {"name": "\u4e0a\u6e2f", "value": 0.025800771991602897}, {"name": "\u6052\u5927", "value": 0.015642987742940342}, {"name": "\uff01", "value": 0.015642987742940342}, {"name": "\u5965\u65af\u5361", "value": 0.01225705966005282}, {"name": "\uff1f", "value": 0.010902688426897813}, {"name": "\u82cf\u5b81", "value": 0.008193945960587796}, {"name": "\u771f\u7684", "value": 0.007516760344010292}, {"name": "\u6b66\u78ca", "value": 0.007516760344010292}, {"name": "\u5916\u63f4", "value": 0.007516760344010292}, {"name": "\u77e5\u9053", "value": 0.006839574727432789}, {"name": "\u6bd4\u8d5b", "value": 0.006839574727432789}, {"name": "\u4e2d\u8d85", "value": 0.006839574727432789}, {"name": "\u7403\u5458", "value": 0.005485203494277781}, {"name": "\u8fdb\u7403", "value": 0.004808017877700277}, {"name": "\u573a", "value": 0.004808017877700277}, {"name": "\u673a\u4f1a", "value": 0.004808017877700277}, {"name": "\u6253", "value": 0.004808017877700277}, {"name": "\u6210\u7ee9", "value": 0.004130832261122774}, {"name": "\u8fdb\u653b", "value": 0.004130832261122774}, {"name": "\u73b0\u5728", "value": 0.004130832261122774}, {"name": "\u7403\u8ff7", "value": 0.004130832261122774}, {"name": "\u4e9a\u51a0", "value": 0.004130832261122774}, {"name": "\u56fd\u5b89", "value": 0.004130832261122774}, {"name": "\u53bb\u5e74", "value": 0.004130832261122774}, {"name": "\u7403\u961f", "value": 0.0034536466445452695}, {"name": "\u597d", "value": 0.0034536466445452695}, {"name": "\u5f53\u521d", "value": 0.0034536466445452695}, {"name": "\u5e0c\u671b", "value": 0.0034536466445452695}, {"name": "\u518d", "value": 0.0034536466445452695}], "5": [{"name": "\u80e1\u5c14\u514b", "value": 0.020872865275142316}, {"name": "\u4e0a\u6e2f", "value": 0.01491981992037802}, {"name": "\u6052\u5927", "value": 0.01491981992037802}, {"name": "\u6b66\u78ca", "value": 0.013059493247014177}, {"name": "\u5965\u65af\u5361", "value": 0.00971090523495926}, {"name": "\u7403\u5458", "value": 0.008966774565613723}, {"name": "\uff01", "value": 0.008222643896268186}, {"name": "\uff1f", "value": 0.007478513226922649}, {"name": "\u80fd\u529b", "value": 0.006362317222904343}, {"name": "\u6bd4\u8d5b", "value": 0.006362317222904343}, {"name": "\u4e00\u4e2a", "value": 0.006362317222904343}, {"name": "\u7403", "value": 0.0059902518882315745}, {"name": "\u4e2d\u8d85", "value": 0.005618186553558805}, {"name": "\u597d", "value": 0.005618186553558805}, {"name": "\u5e94\u8be5", "value": 0.005246121218886036}, {"name": "\u5916\u63f4", "value": 0.004874055884213268}, {"name": "\u51a0\u519b", "value": 0.004874055884213268}, {"name": "\u540e\u9632", "value": 0.0045019905495405}, {"name": "\u5a01\u80c1", "value": 0.0045019905495405}, {"name": "\u540e\u536b", "value": 0.0045019905495405}, {"name": "\u8fd9\u573a", "value": 0.0045019905495405}, {"name": "\u660e\u5e74", "value": 0.0045019905495405}, {"name": "\u4e9a\u51a0", "value": 0.004129925214867731}, {"name": "\u6253", "value": 0.004129925214867731}, {"name": "\u4fdd\u5229\u5c3c\u5965", "value": 0.004129925214867731}, {"name": "\u8054\u8d5b", "value": 0.003757859880194962}, {"name": "\u8d5b\u5b63", "value": 0.003757859880194962}, {"name": "\u53cd\u51fb", "value": 0.003757859880194962}, {"name": "\u6362", "value": 0.003757859880194962}, {"name": "\u9632\u5b88", "value": 0.003757859880194962}]};
var topic_summary = {"0": [{"content": "\u6ca1\u80e1\u5c14\u514b \u4e0a\u6e2f\u771f\u83dc", "up": 272}, {"content": "1\u3001\u5e94\u8be5\u662f\u4e00\u573a\u5e73\u5c40\uff0c\u80e1\u5c14\u514b\u6ca1\u4f24\u4e0a\u6e2f\u81f3\u5c11\u4e0d\u8d252\u3001\u786e\u5b9e\u5b9e\u529b\u4e0d\u5982\u4e0a\u6e2f\uff0c\u76ee\u524d\u8e22\u8fc7\u7684\u961f\u53ea\u6709\u4e0a\u6e2f\u903c\u65bd\u5bc6\u7279\u6446\u4e86\u5927\u5df4\uff08\u56fd\u5b89\u5f88\u5c11\u6446\uff0c\u5373\u4fbf\u540e\u536b\u7ebf\u662f\u7eb8\u7cca\u7684\uff093\u3001\u6734\u6210\u548c\u4faf\u68ee\u8fd9\u4fe9\u8d27\u4eca\u5929\u6ca1\u5f97\u9ed1\uff08\u5e73\u65f6\u7740\u5b9e\u5f88\u4e00\u822c\uff094\u3001\u5e0c\u671b\u7eff\u5de8\u4eba\u4e9a\u51a0\u53ef\u4ee5\u51fa\u6218\uff0c\u4e24\u961f\u672c\u8d5b\u5b63\u90fd\u80fd\u591f\u6709\u6240\u6536\u83b7\u3002\u56fd\u5b89\u7403\u8ff7\u7559\u3002", "up": 21}, {"content": "\u8d8a\u60f3\u8d8a\u89c9\u5f97\uff0c\u4e0e\u5176\u8bf4\u6fc0\u6d3b\u5965\u65af\u5361\uff0c\u80e1\u5c14\u514b\uff0c\u5854\u5c14\u5fb7\u5229\u7684\u662f\u4ed6\u4eec\u672c\u4eba\uff0c\u4e0d\u5982\u8bf4\u662f\u4eca\u5e74\u7684\u4e16\u754c\u676f\u3002", "up": 13}, {"content": "\u91cd\u5e86\u592a\u51a4\u4e86\uff0c\u80e1\u5c14\u514b\u4e3a\u4ec0\u4e48\u4e0d\u80fd\u8fdb\u5df4\u897f\u56fd\u5bb6\u961f\uff0c\u8fd9\u5c31\u662f\u539f\u56e0\u3002\u5728\u4e0a\u6e2f\u4ec0\u4e48\u90fd\u6ca1\u5b66\u4f1a\uff0c\u5b66\u4f1a\u5410\uff5e\uff5e\uff5e \u4e0a\u6e2f\u6709\u4eba\u5440\uff0c\u89c6\u9891\u88c1\u5224\u90fd\u4e0d\u7ed9\u770b\u3002\u8fd9\u4e2a\u4e3b\u88c1\u5224\uff0c\u6211\u662f\u771f\u8ba8\u538c\u7684\uff0c\uff0c\u91cd\u5e86\u53ef\u60dc\u4e86", "up": 12}, {"content": "3\u4e2a\u4eba\u9632\u80e1\u5c14\u514b\uff0c2\u4e2a\u4eba\u9632\u5965\u65af\u5361\u3002 \u6b66\u78ca\uff1a\u611f\u8c22", "up": 10}], "1": [{"content": "\u8fd9\u573a\u88c1\u5224\u6536\u94b1\u4e86\uff0cVAR\u88c1\u5224\u4e5f\u6536\u94b1\u4e86.1\u738b\u71ca\u8d85\u7981\u533a\u88ab\u7eca\u5012\u662f\u70b9\u7403VAR\u63d0\u9192\u90fd\u4e0d\u63d0\u9192\uff0c2\u8d3a\u60ef\u843d\u4e0b\u6765\u8e29\u5230\u6cb3\u5357\u7403\u5458\u4e86\uff0cVAR\u7acb\u9a6c\u63d0\u9192\u53ef\u80fd\u662f\u7ea2\u724c\u30023\u80e1\u5c14\u514b\u7981\u533a\u90a3\u4e2a\uff0c\u5b88\u95e8\u5458\u51fa\u6765\u6839\u672c\u6ca1\u78b0\u5230\u7403\u76f4\u63a5\u649e\u5012\u80e1\u5c14\u514b\u30024\u674e\u5723\u9f99\u90a3\u4e2a\u88ab\u4fb5\u72af\u4e0d\u5439\uff0c\u7ed9\u4e8e\u6d77\u4e00\u5f20\u9ec4\u724c\u30025\u80e1\u5c14\u514b\u8fc7\u4eba\u540e\u88ab\u52fe\u5012\u4e0d\u5439\u3002678910\u771f\u662f\u778e", "up": 90}, {"content": "\u6574\u573a\u611f\u89c9\u80e1\u5c14\u514b\u7684\u558b\u558b\u4e0d\u4f11\u6bd4\u4ed6\u7684\u7403\u6280\u66f4\u62a2\u773c\u554a\uff01\u7b2c\u4e00\u4e2a\u8fdb\u7403\u6cf0\u8fbe\u7684\u53cd\u51fb\u6709\u95ee\u9898\u5417\uff01\uff1f\u53e6\u5916\u4e0a\u534a\u573a\u4e0a\u6e2f\u88ab\u5439\u6389\u90a3\u7403\u4ed6\u7684\u8d8a\u4f4d\u4e0d\u662f\u5f88\u660e\u663e\u5417\uff01\uff1f\u6709\u4ec0\u4e48\u53ef\u62b1\u6028\u7684\uff01\uff1f\u5168\u573a\u90a3\u4e48\u54cd\u4eae\u7684\u201c\u88c1\u5224****\u201d\u8bf4\u660e\u6392\u540d\u7b2c\u4e00\u7684\u7403\u8ff7\u7d20\u8d28\u4e5f\u5c31\u90a3\u4e48\u56de\u4e8b\u513f", "up": 42}, {"content": "\u4e0a\u6e2f\u771f\u662f\u5a18\u4eec\uff0c\u6bcf\u6b21\u53ea\u8981\u662f\u5bf9\u81ea\u5df1\u4e0d\u5229\u7684\u5224\u7f5a\uff0c\u5c31\u50cf\u88ab\u5f3a\u884c\u5815\u80ce\u4f3c\u7684\uff0c\u5168\u961f\u56f4\u7740\u88c1\u5224\u54ed\u8bc9\u81ea\u5df1\u7684\u4f24\u5fc3\u3001\u59d4\u5c48\u3001\u65e0\u52a9\uff0c\u5c24\u5176\u662f\u80e1\u5c14\u514b\u558b\u558b\u4e0d\u4f11\uff0c\u5b8c\u5168\u6253\u4e71\u4e86\u6bd4\u8d5b\u8282\u594f\uff0c\u771f\u662f\u5e73\u5747\u51a0\u519b\u554a\u3002", "up": 27}, {"content": "\u9ad8\u62c9\u7279\u6bd4\u4e0a\u6e2f\u80e1\u5c14\u514b\u5f3a\u591a\u4e86\ud83d\udc4d", "up": 20}, {"content": "\u4e0a\u6e2f\u5916\u63f4\u548c\u6052\u5927\u5916\u63f4\u7684\u533a\u522b\u662f\u7403\u5546\u4f4e\u4e00\u4e2a\u6863\u6b21\uff01\u80e1\u5c14\u514b\uff0c\u5965\u65af\u5361\u548c\u4fdd\u5229\u5c3c\u5965\u76f8\u6bd4\uff0c\u524d\u8005\u50b2\u6162\u4e0e\u504f\u89c1\u90fd\u6709\uff0c\u8e22\u7403\u4ee5\u6211\u4e3a\u4e3b\uff0c\u76ee\u4e2d\u65e0\u4eba\uff0c\u8c13\u4e4b\u72ec\uff1b\u540e\u8005\u8c26\u548c\u4f4e\u8c03\uff0c\u8be5\u4f20\u5219\u4f20\uff0c\u8be5\u7a81\u5219\u7a81\uff0c\u8be5\u5c04\u5219\u5c04\uff0c\u5c0a\u91cd\u961f\u53cb\u548c\u5bf9\u624b\uff0c\u66f4\u52a0\u5c0a\u91cd\u8db3\u7403\u89c4\u5f8b\u3002 \u628a\u81ea\u5df1\u5f53\u505a\u573a\u4e0a\u4e00\u5458\uff0c\u5fc3\u7406\u5fc3\u6001\u5c31\u987a\uff0c\u628a\u81ea\u5df1\u5f53\u7403\u661f\uff0c\u5fc3\u7406\u81a8\u80c0\uff0c\u5fc3\u6001\u5c31\u5931\u8861\uff0c\u51fa\u4e00\u70b9\u5c94\u5b50\u5c31\u6028\u5929\u5c24\u4eba\uff0c\u558b\u558b\u4e0d\u4f11\u3002 \u5e0c\u671b\u6211\u7684\u5f02\u8bae\u80fd\u88ab\u4e0a\u6e2f\u4eba\u770b\u5230\uff0c\u5e76\u5f15\u8d77\u53cd\u601d\u548c\u6539\u8fdb\u3002\u5c24\u5176\u662f\u5bf9\u4e24\u4e2a\u5df4\u897f\u5916\u63f4\u7684\u5fc3\u7406\u758f\u5bfc\u5fc5\u987b\u8ddf\u8fdb\uff0c\u4e3b\u6559\u7ec3\u8981\u609f\u51fa\u95ee\u9898\u6765\uff0c\u8981\u591a\u770b\u770b\u6052\u5927\u7684\u6bd4\u8d5b\u5f55\u50cf\uff0c\u770b\u770b\u6052\u5927\u5916\u63f4\u5728\u7403\u573a\u4e0a\u4ec0\u4e48\u6001\u5ea6\uff0c\u5438\u53d6\u7ecf\u9a8c\u3002", "up": 18}], "2": [{"content": "\u606d\u559c\u4e00\u65b9\uff0c\u8fd8\u6709\u5361\u62c9\u65af\u79d1\u80fd\u529b\u771f\u662f\u4e0d\u9519\u4e00\u70b9\u4e0d\u865a\u80e1\u5c14\u514b\u554a\u3002\u62a5\u9996\u56de\u5408\u5927\u6bd4\u5206\u7684\u4ec7\u4e86\uff0c\u79e6\u5347\u8e22\u4e0a\u6e2f\u786e\u5b9e\u5f88\u6709\u5fc3\u5f97", "up": 791}, {"content": "\u5361\u62c9\u65af\u79d1\u628a\u80e1\u5c14\u514b\u9632\u5f97\u6ca1\u813e\u6c14", "up": 488}, {"content": "\u80e1\u5c14\u514b\u8fd9\u5927\u6bd2\u7624\uff0c7\uff1a0\u786c\u662f\u8e22\u6210\u4e862:0", "up": 216}, {"content": "\u53f2\u4e0a\u6700\u65e0\u804a\u4e0a\u6d77\u5fb7\u6bd4\uff01\u4e0a\u6e2f\u8fd8\u6ca1\u53d1\u529b\u5462\uff0c\u7533\u82b1\u5c31\u5012\u4e0b\u4e86\uff01\u770b\u4e0b\u534a\u573a\u80e1\u5c14\u514b\u73a9\u7684\u90a3\u53eb\u4e00\u4e2a6\uff1a\u8e29\u5355\u8f66\u3001\u6253\u98de\u673a\u3001\u5f69\u8679\u8fc7\u4eba\uff0c\u6837\u6837\u90fd\u6765\uff0c\u5389\u5bb3\u3002", "up": 115}, {"content": "\u6211\u5728\u73b0\u573a\uff0c\u5c31\u4ed6\u5988\u542c\u89c1\u5468\u56f4\u4e0a\u6d77\u4eba\u53fd\u53fd\u6b6a\u6b6a\u7684\u53eb\u88c1\u5224\u5439\u5f97\u597d\uff0c\u90a3\u4e48\u660e\u663e\u7684\u4e0d\u8d8a\u4f4d\uff0c\u90fd\u662f\u778e\u5b50\u5417\uff1f\uff1f\uff1f\u7279\u522b\u662f\u6709\u4e2a\u5973\u7684\uff0c\u739b\u5fb7\u53ea\u8981\u80e1\u5c14\u514b\u4e00\u62ff\u7403\u5c31\u5728\u90a3\u53eb\uff01****\uff01\u4f5c\u4e3a\u4e00\u4e2a\u5728\u4e0a\u6d77\u6253\u62fc\u7684\u56db\u5ddd\u4eba\uff0c\u5c31\u60f3\u4e3a\u534a\u4e2a\u4e3b\u961f\u7684\u91cd\u5e86\u5bf9\u52a0\u4e2a\u6cb9\uff0c\u543c\u4e00\u58f0\u5468\u56f4\u7684\u4e0a\u6d77\u4eba\u5c31\u770b\u6211\u4e00\u773c\uff0c\u8eab\u6015\u906d\u6253\u4e86\uff01\u4e0d\u77e5\u9053\u6709\u6ca1\u6709\u5927\u795e\u5e2e\u6211\u7ed9\u91cd\u5e86\u961f\u8bf4\u4e00\u58f0\uff0c\u4e0b\u6b21\u6253\u7533\u82b1\u5e2e\u6211\u7559\u4e00\u5f20\u5ba2\u961f\u7403\u8ff7\u533a\u7968\uff0c\u6211\u8981\u5927\u58f0\u543c\u51fa\u6765\uff0c\u8c22\u8c22\u4e86\uff01\uff01\uff01", "up": 15}], "3": [{"content": "\u80e1\u5c14\u514b\uff0c\u5965\u65af\u5361\uff0c\u57c3\u5c14\u514b\u68ee\uff1a\u7403\u738b\uff0c\u4f60\u7684\u5212\u8239\u59ff\u52bf\u597d\u50cf\u4e0d\u5bf9\u554a\uff1f \u6b66\u78ca\uff1a\u6211\u6ca1\u5212\u8239\uff0c\u6211\u5728\u51fb\u9f13", "up": 485}, {"content": "\u4e2d\u8d85\u4e24\u4e2a\u602a\u7269\uff0c\u4f69\u83b1\u548c\u80e1\u5c14\u514b\uff0c\u8c01\u4e5f\u625b\u4e0d\u4f4f\uff01", "up": 326}, {"content": "\u4e0a\u6e2f\u4e3b\u6559\u7ec3\uff1a\u6211\u75af\u8d77\u6765\u8fde\u81ea\u5df1\u90fd\u6d17\u724c\uff01\ud83d\ude02\u2026\u2026\u7eaf\u5c5e\u73a9\u7b11\uff0c\u660e\u663e\u662f\u4e0d\u5e0c\u671b\u80e1\u5c14\u514b\u62ff\u724c\uff01\u4f46\u80e1\u5c14\u514b\u5c31\u662f\u6539\u4e0d\u4e86\u8fd9\u8c0d\u8c0d\u4e0d\u4f11\u7684\u6bdb\u75c5\uff0c\u53e6\uff1a\u6b66\u78ca\uff01\u6a21\u5b50\uff01\uff01", "up": 273}, {"content": "\u80e1\u5c14\u514b\u4e5f\u52a0\u5165\u5feb\u4e50\u8db3\u7403\u4e86\u5417\ud83d\ude02\ud83d\ude02\ud83d\ude02", "up": 125}, {"content": "\u8fd9\u95e8\u5c06\u8fde\u80e1\u5c14\u514b\u90fd\u5c04\u7684\u6ca1\u529e\u6cd5[\u7b11\u54ed]", "up": 113}], "4": [{"content": "\u4e0a\u6e2f\u662f\u600e\u4e48\u88ab\u6dd8\u6c70\u7684\uff1f\u6743\u5065\u73b0\u5728\u662f\u6b8b\u9635\uff0c\u6838\u5fc3\u540e\u8170\u7ef4\u7279\u585e\u5c14\u6ca1\u6765\uff0c\u4e3b\u529b\u4e2d\u536b\u88ab\u5f81\u8c03\uff0c\u4f60\u8ba9\u4e0a\u6e2f\u628a\u5965\u65af\u5361\u6216\u8005\u80e1\u5c14\u514b\u62ff\u6389\u770b\u770b\uff0c\u4ec0\u4e48\u90fd\u4e0d\u662f\uff0c\u6052\u5927\u5168\u56fd\u811a\u6ca1\u4e86\u4fdd\u5229\u5c3c\u5965\u4e5f\u662f\u70c2\u6210\u6e23", "up": 18}, {"content": "\u54e8\u5b50\u771f\u7684\u504f\u4e0a\u6e2f \u8db3\u534f\u5c31\u8fd9\u4e48\u60f3\u641e\u6389\u6052\u5927\u738b\u671d\uff1f\u80e1\u5c14\u514b\u90a3\u4e2a\u70b9\u7403\u771f\u7684\u670d\u4e86", "up": 15}, {"content": "\u6211\u662f\u4e0a\u6d77\u4eba \u8bf4\u51e0\u70b91.\u6052\u5927\u66f4\u6709\u63a7\u5236\u529b \u4e09\u4e2a\u5916\u63f4\u5f88\u5f3a 2.\u4e0a\u6e2f\u80e1\u5c14\u514b\u592a\u6bd2 \u597d\u591a\u673a\u4f1a\u90fd\u88ab\u4ed6\u6325\u970d \u5965\u65af\u5361\u7684\u4f20\u7403\u592a\u9a9a \u57c3\u5c14\u514b\u68ee\u5c04\u672f\u592a\u597d3.\u6bd4\u5206\u7684\u5929\u5e73\u4e0d\u5728\u4e8e\u5916\u63f4\u800c\u5728\u4e8e\u56fd\u5185 \u53c2\u7167\u6b66\u7403\u738b\u548c\u90dc\u98de\u673a4.\u6052\u5927\u7403\u98ce\u53ef\u4ee5 \u6709\u5f3a\u8005\u98ce\u8303 \u4e0d\u8fc7\u591a\u7ea0\u7f20\u88c1\u5224 \u52a8\u4f5c\u4e5f\u63a7\u5236\u4e0d\u9519 \u76f8\u6bd4\u4e8e\u67d0\u961f\u597d\u592a\u591a5.\u4e0a\u6e2f\u53bb\u5e74\u88ab\u4e3b\u6559\u7ec3\u5751\u4e86 \u8282\u594f\u4e5f\u88ab\u5e26\u4e86\u592a\u591a \u88ab\u5168\u56fd\u4eba\u6c11\u4e0d\u5f85\u89c1\u4e86 \u8fd8\u662f\u8981\u62ff\u6210\u7ee9\u8bf4\u8bdd \u4e0d\u8981\u62d8\u6ce5\u4e8e\u8d5b\u573a\u5916\u7684\u4e1c\u897f \u8e22\u7403\u8fd8\u662f\u5f88\u597d\u770b\u7684 \u552f\u4e00\u53ef\u4ee5\u8ddf\u6052\u5927\u6273\u624b\u8155\u76846.\u88c1\u5224\u5f88\u51fa\u8272 \u5c31\u662f\u6700\u540e\u8865\u4e86\u7a0d\u5fae\u957f\u4e86\u70b9 \u4e0d\u8fc7\u8003\u8651\u8865\u65f6\u9636\u6bb5\u6709\u7403\u5458\u53d7\u4f24\u4e5f\u5ffd\u7565\u4e0d\u8ba1\u4e867.\u6b66\u78ca\u62ff\u91d1\u9774", "up": 14}, {"content": "\u80e1\u5c14\u514b\u90a3\u5957\u4e1c\u897f\u5728\u4e16\u754c\u9876\u7ea7\u7403\u661f\u9762\u524d\u771f\u7684\u4e0d\u592a\u7075\u5149\u3002", "up": 11}, {"content": "\u53bb\u5e74\u5982\u679c\u4e0d\u662f\u521a\u610e\u81ea\u7528\u7684\u535a\u963f\u65af\uff0c\u4e0a\u6e2f\u5c31\u593a\u51a0\u4e86\uff0c\u5965\u65af\u5361\u516b\u573a \u80e1\u5c14\u514b \u6b66\u78ca\u5404\u4e24\u573a\u635f\u5931\u60e8\u91cd", "up": 10}], "5": [{"content": "\u6ca1\u4e86\u5965\u65af\u5361\u548c\u80e1\u5c14\u514b\u4e24\u6761\u5927\u817f\uff0c\u4e0a\u6e2f\u7eb8\u7cca\u7684\u540e\u9632\u7ebf\u5c31\u663e\u51fa\u6765\u4e86\u3002\u91cc\u76ae\u8981\u662f\u518d\u62db\u4e0a\u6e2f\u7684\u540e\u573a\uff0c\u90a3\u771f\u662f\u4f5c\u6b7b\u4e86\u3002", "up": 215}, {"content": "\u6700\u559c\u6b22\u7684\u4e24\u7403\u961f\uff0c\u53ea\u8981\u4e0d\u5e73\u8c01\u8d62\u6211\u90fd\u5f00\u5fc3\u3002\u4e0d\u8fc7\u8ba8\u538c\u80e1\u5c14\u514b\uff0c\u65e2\u7136\u9009\u62e9\u4e24\u4e09\u4e2a\u4eba\u8fd8\u7a81\u7834\uff0c\u5c31\u522b\u52a8\u4e0d\u52a8\u50cf\u6028\u5987\u4e00\u6837\u8981\u72af\u89c4\uff0c\u8fd8\u559c\u6b22bb\u3002\u4e2d\u8d85\u6700\u559c\u6b22\u7684\u5916\u63f4\u7279\u8c22\u62c9\u5965\u65af\u5361\uff0c\u56e0\u4e3a\u4ed6\u4eec\u4f1a\u8ddf\u4e2d\u56fd\u7403\u5458\u914d\u5408\uff0c\u4e5f\u5e0c\u671b\u6b66\u78ca\u548c\u9ec4\u7d2b\u660c\u80fd\u6da8\u7403\uff0c\u63a5\u4e0b\u6765\u51e0\u5e74\u56fd\u5bb6\u961f\u5e94\u8be5\u5c31\u770b\u4ed6\u4fe9\u4e86", "up": 78}, {"content": "\u9632\u5b88\u65f6\u5c42\u5c42\u7d27\u51d1\uff0c\u540e\u8170\u4e0e\u540e\u536b\u4e4b\u95f4\u7684\u534f\u8c03\u975e\u5e38\u597d\uff0c\u6709\u597d\u51e0\u6b21\u90fd\u662f\u540e\u536b\u76f4\u63a5\u65ad\u7403\u4ea4\u7ed9\u827e\u54c8\u6216\u8005\u5965\u65af\u5361\u76f4\u63a5\u53d1\u52a8\u53cd\u51fb\u3002\u5728\u53cd\u51fb\u65f6\uff0c\u524d\u573a\u4e09\u4e2a\u70b9\u8dd1\u7684\u5206\u6563\uff0c\u5374\u5f88\u6709\u89c4\u5f8b\uff0c\u6b66\u78ca \u80e1\u5c14\u514b \u524d\u53c9\u7684\u5965\u65af\u5361 \u6216\u827e\u54c8\u5728\u523b\u610f\u7684\u626f\u5f00\u7533\u82b1\u4e2d\u540e\u536b\u4e4b\u95f4\u7684\u7a7a\u5f53\uff0c\u4e4b\u540e\u8981\u4e48\u662f\u6b66\u78ca\u6216\u80e1\u5c14\u514b\u5728\u4e48\u662f\u521a\u4e0a\u573a\u7684\u5415\u6587\u541b\u4e00\u51fb\u81f4\u547d\u3002\u770b\u6765\u4e0a\u6e2f\u8fd9\u4e2a\u51ac\u5929\u771f\u7684\u662f\u6ca1\u5c11\u7ec3\u3002\u540e\u65b9\u7403\u5458\u7ecf\u9a8c\u6709\u589e\u957f\u4e86\uff0c\u524d\u573a\u653b\u51fb\u7403\u5458\u914d\u5408\u66f4\u9ed8\u5951\u4e86\u3002\u8981\u8bf4\u4e0a\u6e2f\u80fd\u51fa\u6210\u7ee9\u6211\u4e5f\u5c31\u89c9\u5f97\u662f\u4eca\u5e74\u4e86\u3002\u3002[\u52a0\u6cb9][\u52a0\u6cb9][\u52a0\u6cb9]", "up": 15}, {"content": "\u5bf9\u4e8e\u5927\u8fde\u5361\u62c9\u65af\u79d1\uff0c\u4e2d\u8d85\u5c31\u50cf\u4e2a\u5c0f\u5b66\u751f\u8054\u8d5b\uff0c\u8fdb\u653b\u5c31\u50cf\u5728\u905b\u72d7\uff0c\u9632\u5b88\u4e2d\u8d85\u6ca1\u4eba\u80fd\u9632\u4f4f\u7684\u80e1\u5c14\u514b\uff0c\u4e00\u5bf9\u4e00\u90fd\u80fd\u5e72\u5e72\u51c0\u51c0\u9632\u4f4f\uff0c\u8fd9\u90fd\u8fd8\u662f\u6b27\u6d32\u8fdb\u653b\u7403\u5458\u7684\u9632\u5b88\uff0c\u53ef\u60f3\u800c\u77e5\uff0c\u8fd9\u4e9b\u4e2d\u8d85\u767d\u65a9\u9e21\u540e\u536b\u6709\u591a\u4e1a\u4f59", "up": 12}, {"content": "\u606d\u559c\u4e0a\u6e2f\u554a\uff0c\u4e0a\u6e2f\u540e\u9632\u8fd8\u9700\u8981\u52a0\u5f3a\uff0c\u660e\u5e74\u4e9a\u51a0\u624d\u80fd\u8d70\u7684\u66f4\u8fdc\u3002\u8d5b\u524d\u770b\u5230\u9996\u53d1\u540d\u5355\u5c31\u77e5\u9053\u6052\u5927\u540e\u9632\u8981\u4e70\u5355\u4e86\u3002\u5361\u7eb3\u74e6\u7f57\u4e34\u573a\u8c03\u5ea6\u518d\u6b21\u8bc1\u660e\u4e86\uff0c\u4ed6\u7684\u529f\u5e95\u8fd8\u4e0d\u591f\u6df1\u539a\u3002\u4e0a\u6e2f\u8d5b\u524d\u51c6\u5907\u505a\u8db3\u4e86\u529f\u592b\uff0c\u65e0\u53ef\u539a\u975e\u3002\u4e00\u4ee3\u9738\u4e3b\u7ec8\u7a76\u8981\u6613\u4e3b\uff0c\u4f46\u662f\u660e\u5e74\u7684\u8def\u8fd8\u5b58\u5728\u592a\u591a\u7684\u672a\u77e5\u3002\u671f\u5f85\u660e\u5e74\u4e2d\u8d85\u53cc\u96c4\u7684\u4e9a\u51a0\u4e4b\u65c5\u3002\u6b64\u5916\uff0c\u80e1\u5c14\u514b\u7684\u70b9\u7403\u771f\u662f\u53ef\u4ee5\u770bVAR\u7684\uff0c\u4ed6\u5148\u62e8\u5230\u4e86\u66b4\u529b\u9e1f\uff0c\u66b4\u529b\u9e1f\u7684\u624b\u90e8\u52a8\u4f5c\u80af\u5b9a\u4e0d\u662f\u6545\u610f\u7684\uff0c\u4f46\u662f\u5f53\u65f6\u90dc\u6797\u5484\u5484\u903c\u4eba\ud83d\ude02\uff0c\u8fd9\u573a\uff0c\u6362\u4e0b\u90dc\u6797\u624d\u662f\u6b63\u786e\u7684\uff0c\u90d1\u667a\u5e94\u8be5\u516b\u5341\u5206\u949f\u624d\u4e0b\uff0c\u5f20\u6210\u6797\u5e94\u8be5\u5148\u4e0b\u53bb\uff0c\u4e0b\u534a\u573a\u5f00\u59cb\u7684\u6f0f\uff0c\u7ed9\u4e86\u6b66\u78ca\u4e00\u4e2a\u5b8c\u7f8e\u7684\u5355\u5200\u3002\u5168\u573a\u6700\u4f73\u5e94\u8be5\u662f\u80e1\u5c14\u514b\uff01\u51fa\u8272\u7684\u652f\u70b9\u4f5c\u7528\uff0c\u4e24\u4e2a\u624b\u672f\u5200\u822c\u7684\u52a9\u653b\u3002\u6b66\u78ca\u518d\u6b21\u8bc1\u660e\u4e86\u81ea\u5df1\uff0c\u8fdf\u4e9b\u7684\u56fd\u5bb6\u961f\u6bd4\u8d5b\u5e0c\u671b\u7ee7\u7eed\u6709\u8fdb\u7403\uff0c\u56fd\u5bb6\u961f\u4e0d\u5e94\u8be5\u8981\u90dc\u6797\u4e86\uff0c\u4e0a\u534a\u573a\u5728\u73b0\u573a\u770b\u7684\u65f6\u5019\uff0c\u4ed6\u5c45\u7136\u8eba\u4e0b\u4e00\u5206\u591a\u949f\uff0c\u90a3\u8fb9\u963f\u5170\u548c\u5854\u795e\u90fd\u53cd\u51fb\u4e86\u3002\u3002\u3002\u3002\u770b\u770b\u6b66\u78ca\uff0c\u6ca1\u5f97\u9ed1\u554a\uff0c\u88ab\u591a\u6b21\u72af\u89c4\uff0c\u57fa\u672c\u6ca1\u6709\u53e8\u53e8\uff01\u6001\u5ea6\u5f88\u91cd\u8981\u3002\u56fd\u5bb6\u961f\u7684\u652f\u70b9\u8ba9\u7ed9\u8096\u667a\u548c\u6768\u65ed\u5427\u3002\u56fd\u5bb6\u961f\u73b0\u5728\u4e2d\u573a\u6162\u6162\u8f6c\u6280\u672f\u578b\u6253\u6cd5\uff0c\u7ed9\u591a\u70b9\u5feb\u7075\u5c0f\u7684\u7403\u5458\u53d1\u6325\u3002\u6c49\u8d85\u52a0\u6b66\u78ca\u4e24\u6761\u8fb9\uff0c\u4e2d\u573a\u5434\u66e6\u90d1\u667a\u91d1\u656c\u9053\uff0c\u611f\u89c9\u4f1a\u5f88\u6709\u770b\u70b9\uff5e\uff5e\u4e2a\u4eba\u6d45\u89c1\ud83d\ude48\ud83d\ude48\uff0c\u6052\u5927\u660e\u5e74\u8981\u597d\u597d\u601d\u8003\u4e0b\u540e\u8def\u4e86\uff0c\u9752\u8bad\u4e5f\u5f88\u91cd\u8981\uff01\u64b8", "up": 9}]};
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
