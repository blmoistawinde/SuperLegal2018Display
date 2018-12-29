var data = {"person_name": "\u5f20\u6210\u6797", "nicknames": "\u5f20\u6210\u6797", "aspects": {"\u7403\u5458": 0.41153505767202414, "\u540e\u9632": 0.35097824673260963, "\u6bd4\u8d5b": 0.4705936205808415, "\u8fdb\u7403": 0.4832674570328504, "\u9632\u5b88": 0.4514926630368178, "\u4e0b\u534a\u573a": 0.4300248004552521, "\u8fdb\u653b": 0.6005189325354965, "\u8d5b\u5b63": 0.5055219255745159, "\u7403\u8ff7": 0.49323694917861355, "\u6362\u4eba": 0.1424330572757807}, "overall_heat": 100.0, "overall_polar": -0.179, "name": "8", "nationality": "\u4e2d\u56fd", "position": "\u540e\u536b", "goal": "0", "assist": "0", "team_name": "\u5e7f\u5dde\u6052\u5927\u6dd8\u5b9d", "name_en": "Zhang Chenglin", "age": "31", "height": "183", "weight": "75"};
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
var topic_keywords = {"0": [{"name": "\u5f20\u6210\u6797", "value": 0.06222278545178051}, {"name": "\uff01", "value": 0.019135724242808263}, {"name": "\u6362\u4e0b", "value": 0.015333924724369534}, {"name": "\u9ec4\u535a\u6587", "value": 0.012799391712077049}, {"name": "\u72b6\u6001", "value": 0.011532125205930806}, {"name": "\u597d", "value": 0.011532125205930806}, {"name": "\u90d1\u9f99", "value": 0.010264858699784564}, {"name": "\u6052\u5927", "value": 0.010264858699784564}, {"name": "\u90d1\u667a", "value": 0.010264858699784564}, {"name": "\uff1f", "value": 0.010264858699784564}, {"name": "\u5361\u7eb3\u74e6\u7f57", "value": 0.008997592193638321}, {"name": "\u540e\u536b", "value": 0.008997592193638321}, {"name": "\u4e8e\u6c49\u8d85", "value": 0.008997592193638321}, {"name": "\u90dc\u6797", "value": 0.008997592193638321}, {"name": "\u8d25\u7b14", "value": 0.007730325687492079}, {"name": "\u4e00\u4e2a", "value": 0.007730325687492079}, {"name": "\u8fd9\u573a", "value": 0.007730325687492079}, {"name": "\u673a\u4f1a", "value": 0.007730325687492079}, {"name": "\u7533\u82b1", "value": 0.006463059181345836}, {"name": "\u6700\u5927", "value": 0.006463059181345836}, {"name": "\u4e0d\u8be5", "value": 0.006463059181345836}, {"name": "\u5f20\u6587\u948a", "value": 0.006463059181345836}, {"name": "\u5ed6\u529b\u751f", "value": 0.006463059181345836}, {"name": "\u4eba", "value": 0.006463059181345836}, {"name": "\u4e00\u70b9", "value": 0.006463059181345836}, {"name": "\u5f90\u65b0", "value": 0.006463059181345836}, {"name": "\u6bd4\u8d5b", "value": 0.006463059181345836}, {"name": "\u8e22", "value": 0.006463059181345836}, {"name": "\u4e3b\u529b", "value": 0.005195792675199594}, {"name": "\u65af\u79d1\u62c9\u91cc", "value": 0.005195792675199594}], "1": [{"name": "\u5f20\u6210\u6797", "value": 0.07404367098998522}, {"name": "\u6052\u5927", "value": 0.028074207847644066}, {"name": "\uff01", "value": 0.023148908225250366}, {"name": "\u8dea", "value": 0.01165654243966508}, {"name": "\u6ed1", "value": 0.01001477589886718}, {"name": "\u90d1\u667a", "value": 0.008373009358069282}, {"name": "\u7b11", "value": 0.008373009358069282}, {"name": "\u90dc\u6797", "value": 0.008373009358069282}, {"name": "\u51af\u6f47\u9706", "value": 0.008373009358069282}, {"name": "\u7403\u5458", "value": 0.008373009358069282}, {"name": "\u540e", "value": 0.008373009358069282}, {"name": "\u4e4c\u9f99", "value": 0.008373009358069282}, {"name": "\u54ed", "value": 0.0067312428172713835}, {"name": "\u4fdd\u5229\u5c3c\u5965", "value": 0.0067312428172713835}, {"name": "\u6ed1\u7a3d", "value": 0.0067312428172713835}, {"name": "\u5751", "value": 0.0067312428172713835}, {"name": "\u8fdb\u7403", "value": 0.0067312428172713835}, {"name": "\u4e0a\u6e2f", "value": 0.0067312428172713835}, {"name": "\u6885\u65b9", "value": 0.0067312428172713835}, {"name": "\u56fd\u5185", "value": 0.0067312428172713835}, {"name": "\u4e0d\u884c", "value": 0.0050894762764734855}, {"name": "\u4e24\u4e2a", "value": 0.0050894762764734855}, {"name": "\u597d", "value": 0.0050894762764734855}, {"name": "\u89c9\u5f97", "value": 0.0050894762764734855}, {"name": "\u660e\u663e", "value": 0.0050894762764734855}, {"name": "\u7403\u8ff7", "value": 0.0050894762764734855}, {"name": "\u771f", "value": 0.0050894762764734855}, {"name": "\u771f\u7684", "value": 0.0050894762764734855}, {"name": "\u88c1\u5224", "value": 0.0050894762764734855}, {"name": "\u90d1\u9f99", "value": 0.0050894762764734855}], "2": [{"name": "\u4e0a\u6e2f", "value": 0.01951278632892983}, {"name": "\uff1f", "value": 0.017088837716640406}, {"name": "\uff01", "value": 0.017088837716640406}, {"name": "\u6052\u5927", "value": 0.017088837716640406}, {"name": "\u5f20\u6210\u6797", "value": 0.015876863410495698}, {"name": "\u80e1\u5c14\u514b", "value": 0.009816991879772148}, {"name": "\u5e94\u8be5", "value": 0.009816991879772148}, {"name": "\u66b4\u529b\u9e1f", "value": 0.009816991879772148}, {"name": "\u6b66\u78ca", "value": 0.009816991879772148}, {"name": "\u540e\u8170", "value": 0.008605017573627438}, {"name": "\u4e00\u4e2a", "value": 0.007393043267482729}, {"name": "\u90d1\u667a", "value": 0.007393043267482729}, {"name": "\u540e\u9632", "value": 0.007393043267482729}, {"name": "\u6253", "value": 0.007393043267482729}, {"name": "\u6bd4\u8d5b", "value": 0.006181068961338019}, {"name": "\u80fd\u529b", "value": 0.006181068961338019}, {"name": "\u597d", "value": 0.006181068961338019}, {"name": "\u90dc\u6797", "value": 0.006181068961338019}, {"name": "\u8fdb\u653b", "value": 0.00496909465519331}, {"name": "\u5e72\u6270", "value": 0.00496909465519331}, {"name": "\u660e\u5e74", "value": 0.00496909465519331}, {"name": "\u516c\u6b63", "value": 0.00496909465519331}, {"name": "\u6700\u540e", "value": 0.00496909465519331}, {"name": "\u56fd\u5bb6\u961f", "value": 0.00496909465519331}, {"name": "\u5854\u5229\u65af\u5361", "value": 0.00496909465519331}, {"name": "\u771f", "value": 0.00496909465519331}, {"name": "\u4e0b\u534a\u573a", "value": 0.00496909465519331}, {"name": "\u4e0b", "value": 0.00496909465519331}, {"name": "\u4e0a\u534a\u573a", "value": 0.00496909465519331}, {"name": "\u606d\u559c", "value": 0.0037571203490486}]};
var topic_summary = {"0": [{"content": "\u8fd9\u573a\u662f\u91d1\u82f1\u6743\u72b6\u6001\u6700\u597d\u7684\u4e00\u573a\uff0c\u4eca\u5929\u6362\u5f20\u6210\u6797\u679c\u65ad\u591a\u4e86\uff0c\u51af\u535a\u8f69\u867d\u7136\u4e0d\u6210\u719f\uff0c\u4f46\u5f97\u5230\u534a\u573a\u5bf9\u9635\u7279\u8c22\u62c9\u7684\u7684\u953b\u70bc", "up": 25}, {"content": "\u5f20\u6210\u6797\u6362\u4e0b\u4e8e\u6c49\u8d85\u8fd9\u4e2a\u6362\u4eba\u6211\u5c31\u89c9\u5f97\u4e0d\u5bf9\u52b2\u4e86\uff0c\u4e8e\u6c49\u8d85\u72b6\u6001\u90a3\u4e48\u597d\uff0c\u5361\u7eb3\u74e6\u7f57\u4f60\u6362\u4ed6\u4e0b\u53bb\u5e72\u561b\u3002\u3002\u3002\u7ed3\u679c\u7528\u90d1\u9f99\u628a\u5f20\u6210\u6797\u6362\u4e0b\u53bb\uff0c\u4f60\u7279\u4e48\u662f\u6765\u641e\u7b11\u7684\u5417\uff1f\uff01\u5f20\u6210\u6797\u8e22\u4e86\u8fd9\u4e48\u591a\u4e2a\u8d5b\u5b63\uff0c\u6211\u771f\u5fc3\u770b\u4e0d\u51fa\u4ed6\u6709\u4ec0\u4e48\u4f18\u52bf\u3002", "up": 10}, {"content": "\u5361\u7eb3\u74e6\u7f57\u8bf4\u57f9\u517b\u65b0\u4eba\uff0c\u53cd\u800c\u8d8a\u7528\u8d8a\u8001\u3002\u4ee5\u524d\u65af\u79d1\u62c9\u91cc\u4e0d\u7528\u7684\u5f20\u6210\u6797\uff0c\u5f20\u6587\u948a\uff0c\u90d1\u9f99\u90fd\u573a\u573a\u8e22\u7403\u4e86\uff0c\u53cd\u800c\u5f90\u65b0\u3001\u5510\u8bd7\u3001\u5ed6\u529b\u751f\u8fd9\u4e9b\u4e00\u70b9\u673a\u4f1a\u90fd\u6ca1\u6709\u3002", "up": 9}, {"content": "\u6700\u4f4e\u5206\uff0c\u66ff\u8865\u4e0a\u573a\u5f20\u6210\u6797\uff0c\u9996\u53d1\u91cc\u5c0f\u9ec4\u8e22\u7684\u592a\u5dee\u4e86\uff0c\u9664\u4e86\u90a3\u811a\u76f4\u585e\uff0c\u5176\u4ed6\u65f6\u95f4\u5b8c\u5168\u4e0d\u5728\u72b6\u6001\uff0c\u5854\u91cc\u65af\u5361\u76f8\u5bf9\u4e8e\u4ed6\u7684\u6c34\u5e73\u6765\u8bf4\u72b6\u6001\u4e5f\u5f88\u5dee\u3002\u4e2d\u573a\u7f3a\u5c11\u90d1\u667a\uff0c\u786e\u5b9e\u7a0d\u5fae\u6709\u70b9\u4e71\u3002", "up": 9}, {"content": "\u9ec4\u535a\u6587\u548c\u5f20\u6210\u6797\u771f\u662f\u4e0d\u582a\u5927\u7528\uff01\u753b\u9762\u7ecf\u5e38\u770b\u5230\u7533\u82b1\u7684\u7403\u5458\u62ff\u7403\uff0c\u7136\u540e\u8f7b\u677e\u63a8\u8fc7\u4e2d\u573a\uff0c\u955c\u5934\u4e00\u8f6c\u624d\u770b\u5230\u9ec4\u535a\u6587\u6162\u6162\u60a0\u60a0\u7684\u56f4\u4e0a\u6765\uff0c\u6211\u4e0d\u77e5\u9053\u4ed6\u6253\u7684\u662f\u540e\u536b\u8fd8\u662f\u540e\u8170\uff0c\u4ed6\u7684\u7684\u8865\u4f4d\u903c\u62a2\u522b\u8bf4\u80fd\u529b\uff0c\u4e00\u70b9\u610f\u8bc6\u90fd\u6ca1\u6709\uff01\u5f20\u6210\u6797\u7684\u5192\u9876\u4e5f\u5dee\u70b9\u88ab\u7edd\u6740\uff0c\u8981\u4e0d\u662f\u7533\u82b1\u7684\u7403\u5458\u628a\u63e1\u80fd\u529b\u592a\u5dee\uff0c\u8fd8\u6709\u5218\u6bbf\u5ea7\uff0c\u6052\u5927\u4eca\u5e74\u53ef\u4ee5\u62dc\u62dc\u4e86\uff01\u660e\u5e74\u90d1\u667a\u53c8\u5927\u4e00\u5c81\uff0c\u4e2d\u573a\u8c01\u80fd\u63a5\u73ed\uff1f\u9ec4\u535a\u6587\u8fd9\u53ae\u600e\u4e48\u63a5\uff1f\u5ed6\u529b\u751f\u592a\u5ae9\uff01", "up": 6}], "1": [{"content": "\u5f20\u6210\u6797\u90a3\u7403\uff0c\u5373\u4f7f\u4ed6\u4e0d\u4e4c\u9f99\uff0c\u8fd9\u7403\u4e0a\u6e2f\u90a3\u4e24\u4e2a\u7403\u5458\u4e5f\u80fd\u8e22\u8fdb\u53bb\uff0c\u56e0\u4e3a\u540e\u70b9\u90fd\u5305\u6284\u5230\u4f4d\u4e86\u3002", "up": 13}, {"content": "\u611f\u89c9\u5f20\u6210\u6797\u662f\u738b\u4e0a\u6e90\u8d70\u540e\u7684\u53c8\u4e00\u4e2a\u5751\u554a", "up": 10}, {"content": "\u7ec8\u573a\u524d\u5f20\u6210\u6797\u4f20\u9012\u7403\u7ed9\u4fdd\u5229\u5c3c\u5965\uff0c\u8fd9\u4e48\u77ed\u3002\u3002\u5413\u5f97\u4fdd\u5229\u5c3c\u5965\u4f7f\u52b2\u62a2\u4f20\u51fa\u53bb\uff0c\u7279\u4e48\uff0c\u771f\u662f\u670d\u4e86", "up": 6}, {"content": "\u5f20\u6210\u6797\u7684\u6ed1\u8dea\u95ea\u8000\u5929\u6cb3\u4f53\u80b2\u4e2d\u5fc3\uff01\uff01\uff01[\u7b11\u54ed]", "up": 5}, {"content": "\u5dee\u4e2a\u6885\u65b9\uff0c\u5f20\u6210\u6797\u663e\u7136\u4e0d\u9002\u5e94", "up": 5}], "2": [{"content": "\u606d\u559c\u4e0a\u6e2f\u554a\uff0c\u4e0a\u6e2f\u540e\u9632\u8fd8\u9700\u8981\u52a0\u5f3a\uff0c\u660e\u5e74\u4e9a\u51a0\u624d\u80fd\u8d70\u7684\u66f4\u8fdc\u3002\u8d5b\u524d\u770b\u5230\u9996\u53d1\u540d\u5355\u5c31\u77e5\u9053\u6052\u5927\u540e\u9632\u8981\u4e70\u5355\u4e86\u3002\u5361\u7eb3\u74e6\u7f57\u4e34\u573a\u8c03\u5ea6\u518d\u6b21\u8bc1\u660e\u4e86\uff0c\u4ed6\u7684\u529f\u5e95\u8fd8\u4e0d\u591f\u6df1\u539a\u3002\u4e0a\u6e2f\u8d5b\u524d\u51c6\u5907\u505a\u8db3\u4e86\u529f\u592b\uff0c\u65e0\u53ef\u539a\u975e\u3002\u4e00\u4ee3\u9738\u4e3b\u7ec8\u7a76\u8981\u6613\u4e3b\uff0c\u4f46\u662f\u660e\u5e74\u7684\u8def\u8fd8\u5b58\u5728\u592a\u591a\u7684\u672a\u77e5\u3002\u671f\u5f85\u660e\u5e74\u4e2d\u8d85\u53cc\u96c4\u7684\u4e9a\u51a0\u4e4b\u65c5\u3002\u6b64\u5916\uff0c\u80e1\u5c14\u514b\u7684\u70b9\u7403\u771f\u662f\u53ef\u4ee5\u770bVAR\u7684\uff0c\u4ed6\u5148\u62e8\u5230\u4e86\u66b4\u529b\u9e1f\uff0c\u66b4\u529b\u9e1f\u7684\u624b\u90e8\u52a8\u4f5c\u80af\u5b9a\u4e0d\u662f\u6545\u610f\u7684\uff0c\u4f46\u662f\u5f53\u65f6\u90dc\u6797\u5484\u5484\u903c\u4eba\ud83d\ude02\uff0c\u8fd9\u573a\uff0c\u6362\u4e0b\u90dc\u6797\u624d\u662f\u6b63\u786e\u7684\uff0c\u90d1\u667a\u5e94\u8be5\u516b\u5341\u5206\u949f\u624d\u4e0b\uff0c\u5f20\u6210\u6797\u5e94\u8be5\u5148\u4e0b\u53bb\uff0c\u4e0b\u534a\u573a\u5f00\u59cb\u7684\u6f0f\uff0c\u7ed9\u4e86\u6b66\u78ca\u4e00\u4e2a\u5b8c\u7f8e\u7684\u5355\u5200\u3002\u5168\u573a\u6700\u4f73\u5e94\u8be5\u662f\u80e1\u5c14\u514b\uff01\u51fa\u8272\u7684\u652f\u70b9\u4f5c\u7528\uff0c\u4e24\u4e2a\u624b\u672f\u5200\u822c\u7684\u52a9\u653b\u3002\u6b66\u78ca\u518d\u6b21\u8bc1\u660e\u4e86\u81ea\u5df1\uff0c\u8fdf\u4e9b\u7684\u56fd\u5bb6\u961f\u6bd4\u8d5b\u5e0c\u671b\u7ee7\u7eed\u6709\u8fdb\u7403\uff0c\u56fd\u5bb6\u961f\u4e0d\u5e94\u8be5\u8981\u90dc\u6797\u4e86\uff0c\u4e0a\u534a\u573a\u5728\u73b0\u573a\u770b\u7684\u65f6\u5019\uff0c\u4ed6\u5c45\u7136\u8eba\u4e0b\u4e00\u5206\u591a\u949f\uff0c\u90a3\u8fb9\u963f\u5170\u548c\u5854\u795e\u90fd\u53cd\u51fb\u4e86\u3002\u3002\u3002\u3002\u770b\u770b\u6b66\u78ca\uff0c\u6ca1\u5f97\u9ed1\u554a\uff0c\u88ab\u591a\u6b21\u72af\u89c4\uff0c\u57fa\u672c\u6ca1\u6709\u53e8\u53e8\uff01\u6001\u5ea6\u5f88\u91cd\u8981\u3002\u56fd\u5bb6\u961f\u7684\u652f\u70b9\u8ba9\u7ed9\u8096\u667a\u548c\u6768\u65ed\u5427\u3002\u56fd\u5bb6\u961f\u73b0\u5728\u4e2d\u573a\u6162\u6162\u8f6c\u6280\u672f\u578b\u6253\u6cd5\uff0c\u7ed9\u591a\u70b9\u5feb\u7075\u5c0f\u7684\u7403\u5458\u53d1\u6325\u3002\u6c49\u8d85\u52a0\u6b66\u78ca\u4e24\u6761\u8fb9\uff0c\u4e2d\u573a\u5434\u66e6\u90d1\u667a\u91d1\u656c\u9053\uff0c\u611f\u89c9\u4f1a\u5f88\u6709\u770b\u70b9\uff5e\uff5e\u4e2a\u4eba\u6d45\u89c1\ud83d\ude48\ud83d\ude48\uff0c\u6052\u5927\u660e\u5e74\u8981\u597d\u597d\u601d\u8003\u4e0b\u540e\u8def\u4e86\uff0c\u9752\u8bad\u4e5f\u5f88\u91cd\u8981\uff01\u64b8", "up": 9}, {"content": "\u51af\u5927\u59d0\u538b\u4e0a\u505a\u6700\u540e\u4e00\u4f20\uff1f\u53ef\u7b11\u554a\uff0c\u4ed6\u4f1a\u4f20\u5a01\u80c1\u7403\uff1f\uff1f\u9ad8\u4fdd\u5854\u576d\uff1f\u3002\u4e09\u540e\u536b\uff0c\u5f20\u4e94\u4e0a\uff0c\u5f20\u6210\u6797\u53f3\u540e\uff0c\u51af\u4e2d\uff0c\u5b66\u9e4f\u5de6\uff0c\u5854\u56de\u4e0e\u4fdd\u8fde\u63a5\u7ec4\u7ec7\u5e76\u505a\u6700\u540e\u4e00\u4f20\u3002\u591a\u597d\uff1f\u5f20\u4e94\u6700\u540e\u4e00\u4f20\u63a9\u76d6\u4e86\u771f\u60c5\u3002", "up": 4}, {"content": "\u5361\u7eb2\u74e6\u7f57\u53c8\u662f\u4e00\u573a\u6218\u672f\u4e0a\u7684\u5b8c\u8d25\uff01\u6ca1\u6709\u652f\u70b9\u524d\u950b\u8fd8\u4e0d\u505c\u7684\u6253\u4f20\u4e2d\uff0c\u4e2d\u573a2\u5bf93\uff0c\u4fdd\u5229\u5c3c\u5965\u6765\u56de\u8dd1\u4e5f\u9632\u4e0d\u4f4f\u6d69\u514b\uff0c\u4e0b\u534a\u573a\u4e00\u4e0b\u5c31\u5e94\u8be5\u4e0a\u4e00\u4e2a\u540e\u8170\u62ff\u4e0b\u90dc\u6797\uff0c\u53cd\u89c2\u4e0a\u6e2f\u4e0a\u534a\u573a3\u540e\u9632\u5b88\uff0c\u7528\u6b66\u78ca\u548c\u5415\u6587\u541b\u538b\u7740\u6052\u5927\u8fb9\u8def\uff0c\u8fb9\u540e\u536b\u4e0d\u6562\u540e\uff0c\u6d69\u514b\u9876\u524d\u9762\u53bb\u6d88\u8017\u5bf9\u624b\uff0c\u4e0b\u534a\u573a\u8ba9\u6b66\u78ca\u6253\u4e2d\u95f4\u53bb\u51b2\u4e2d\u536b\u8eab\u540e\uff0c\u51af6\u548c\u5f20\u6210\u6797\u4e24\u4eba\u5c31\u662f\u707e\u96be\u6027\u9632\u5b88\uff0c\u5361\u7eb3\u74e6\u7f57\u5fc5\u987b\u8981\u6362\u6389\uff0c\u6253\u786c\u4e08\u4e34\u573a\u6307\u6325\u5dee\u7684\u4e0d\u662f\u4e00\u70b9\u70b9\uff0c\u5f00\u4e0d\u52a8\u822a\u6bcd\uff0c\u4eca\u5e74\u4e00\u4e8b\u65e0\u6210\uff0c\u65b0\u4eba\u4e5f\u6ca1\u6253\u51fa\u6765\uff0c\u4e0a\u6b21\u6253\u5ba2\u573a\u5c31\u51fa\u73b0\u8fc7\u8fd9\u79cd\u60c5\u51b5\u4e86\uff0c\u4f9d\u7136\u4e0d\u77e5\u9053\uff0c\u4e0a3\u540e\u8170\u62534141\uff0c\u4e13\u514b\u4e0a\u6e2f\uff0c\u62d6\u540e\u7684\u540e\u8170\u4e13\u76ef\u6d69\u514b\u3002", "up": 4}, {"content": "1\u3001\u6574\u573a\u5c31\u4f1a\u5927\u811a\u957f\u4f20\uff0c\u8fd9\u4e0d\u662f\u6052\u5927\u7684\u6253\u6cd5\uff012\u3001\u5f20\u6210\u6797\u65e9\u5c31\u5e94\u8be5\u6362\u4e0b\uff013\u3001\u8fd9\u6837\u7684\u540e\u9632\uff0c\u7684\u786e\u4e0d\u914d\u51a0\u519b\uff01", "up": 3}, {"content": "\u867d\u7136\u4e0d\u5e0c\u671b\u4e0a\u6e2f\u8d62\uff0c\u4f46\u5ba2\u89c2\u8bf4\u8fd9\u573a\u6bd4\u8d5b\u4e0a\u6e2f\u8e22\u5f97\u6bd4\u6052\u5927\u597d\u3002\u53cc\u65b9\u90fd\u4e0d\u8bbe\u9632\u7684\u6bd4\u8d5b\uff0c\u6bd4\u7684\u5c31\u662f\u8fdb\u653b\u3002\u9ad8\u62c9\u7279\u4e0d\u5728\u524d\u573a\u914d\u5408\u9ed8\u5951\u6b20\u7f3a\uff0c\u5854\u5229\u65af\u5361\u51e0\u4e4e\u6d88\u5931\u4e86\uff0c\u8fdb\u653b\u5957\u8def\u4e0a\u6052\u5927\u771f\u6ca1\u62ff\u7684\u51fa\u624b\u7684\uff0c\u8981\u4e0d\u662f\u66b4\u529b\u9e1f\u63d2\u4e0a\u62a2\u70b9\u7684\u4e2a\u4eba\u80fd\u529b\u5f3a\u4e5f\u8fdb\u4e0d\u4e86\u8fd9\u51e0\u7403\uff0c\u800c\u4e0a\u6e2f\u53ea\u8981\u80e1\u5c14\u514b\u4e0d\u72ec\uff0c\u6b66\u78ca\u7684\u901f\u5ea6\u53cd\u63d2\u62e5\u6709\u4e00\u51fb\u81f4\u547d\u7684\u5a01\u80c1\uff0c\u5305\u62ec\u5415\u6587\u541b\u8521\u6167\u5eb7\u5728\u5185\u7684\u51e0\u540d\u672c\u571f\u7403\u5458\u8fdb\u653b\u7aef\u53d1\u6325\u90fd\u5f88\u597d\uff0c\u6052\u5927\u4eca\u665a\u4e3b\u8981\u8f93\u5728\u8fd9\u65b9\u9762\u3002\u8981\u5410\u69fd\u7684\u662f\u5965\u65af\u5361\u7684\u6f14\u6280\uff0c\u591a\u5c11\u6b21\u63d2\u6c34\u548c\u5938\u5927\uff1b\u6052\u5927\u552f\u4e00\u4eae\u70b9\u662f\u674e\u5b66\u9e4f\uff0c\u524d\u63d2\u52a9\u653b\u610f\u8bc6\u3001\u4f20\u4e2d\u8d28\u91cf\u548c\u5c0f\u6280\u672f\u4e00\u6d41\uff0c\u4f46\u9632\u5b88\u7aef\u8fd8\u662f\u4e0d\u7a33\uff0c\u5f20\u6210\u6797\u7684\u4e4c\u9f99\u5c31\u8be5\u674e\u5b66\u9e4f\u80cc\u7684\u9505\uff0c\u5b8c\u5168\u6f0f\u4e86\u540e\u70b9\u7684\u4eba\u3002\u5e0c\u671b\u5173\u51a0\u519b\u60ac\u5ff5\u80fd\u7559\u5230\u6700\u540e\u4e00\u8f6e\u5427\uff01", "up": 3}]};
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
