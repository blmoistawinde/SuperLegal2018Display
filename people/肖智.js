var data = {"person_name": "\u8096\u667a", "nicknames": "\u8096\u667a", "aspects": {"\u8fdb\u7403": 0.4006104416276194, "\u7403\u5458": 0.5635179824794414, "\u8d8a\u4f4d": 0.20476773450868693, "\u7403\u8ff7": 0.36255543827690745, "\u70b9\u7403": 0.5200222997949961, "\u56fd\u5bb6\u961f": 0.4302357931909538, "\u5934\u7403": 0.8093934530485017, "\u6bd4\u8d5b": 0.6477920386863477, "\u9ec4\u724c": 0.3817671401334435, "\u72af\u89c4": 0.6931113789352047}, "overall_heat": 223.0, "overall_polar": 0.07, "name": "125", "nationality": "\u4e2d\u56fd", "position": "\u524d\u950b", "goal": "7", "assist": "4", "team_name": "\u5e7f\u5dde\u5bcc\u529b", "name_en": "Xiao Zhi", "age": "33", "height": "187", "weight": "70"};
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
var topic_keywords = {"0": [{"name": "\u8096\u667a", "value": 0.06908866995073892}, {"name": "\uff01", "value": 0.025985221674876848}, {"name": "\uff1f", "value": 0.013669950738916256}, {"name": "\u5bcc\u529b", "value": 0.012438423645320197}, {"name": "\u8e22", "value": 0.011206896551724138}, {"name": "\u70b9\u7403", "value": 0.011206896551724138}, {"name": "\u6052\u5927", "value": 0.009975369458128078}, {"name": "\u4e00\u4e2a", "value": 0.009975369458128078}, {"name": "\u6251", "value": 0.008743842364532019}, {"name": "\u8138", "value": 0.00751231527093596}, {"name": "\u7403\u5458", "value": 0.00751231527093596}, {"name": "\u6342", "value": 0.00751231527093596}, {"name": "\u624e\u54c8\u7ef4", "value": 0.006280788177339901}, {"name": "\u4e09\u4e2a", "value": 0.006280788177339901}, {"name": "\u6b66\u78ca", "value": 0.006280788177339901}, {"name": "\u90dc\u6797", "value": 0.005049261083743842}, {"name": "\u4e2d\u56fd", "value": 0.005049261083743842}, {"name": "\u4e24\u4e2a", "value": 0.005049261083743842}, {"name": "\u8fdb\u7403", "value": 0.005049261083743842}, {"name": "\u771f", "value": 0.005049261083743842}, {"name": "\u597d", "value": 0.005049261083743842}, {"name": "\u8fdb", "value": 0.0038177339901477834}, {"name": "\u5c81", "value": 0.0038177339901477834}, {"name": "\u5934\u7403", "value": 0.0038177339901477834}, {"name": "\u5c39\u9e3f\u535a", "value": 0.0038177339901477834}, {"name": "\ud83d\udca3", "value": 0.0038177339901477834}, {"name": "\u5efa\u4e1a", "value": 0.0038177339901477834}, {"name": "\u65e0", "value": 0.0038177339901477834}, {"name": "\u667a\u5546", "value": 0.0038177339901477834}, {"name": "\u70b9\u7403\u5927\u6218", "value": 0.0038177339901477834}], "1": [{"name": "\u8096\u667a", "value": 0.0951259138911454}, {"name": "\uff1f", "value": 0.02445166531275386}, {"name": "\u8001\u4e1c\u5bb6", "value": 0.021202274573517466}, {"name": "\u8131\u8863", "value": 0.02038992688870837}, {"name": "\u5efa\u4e1a", "value": 0.01957757920389927}, {"name": "\uff01", "value": 0.01957757920389927}, {"name": "\u5e86\u795d", "value": 0.017140536149471974}, {"name": "\u54ed", "value": 0.012266450040617384}, {"name": "\u8fdb\u7403", "value": 0.012266450040617384}, {"name": "\u8fdb", "value": 0.011454102355808286}, {"name": "\u7b11", "value": 0.011454102355808286}, {"name": "\u7403\u8ff7", "value": 0.00901705930138099}, {"name": "\u4e00\u4e2a", "value": 0.008204711616571892}, {"name": "\u6cb3\u5357", "value": 0.007392363931762794}, {"name": "\u77e5\u9053", "value": 0.0065800162469536955}, {"name": "\u4eba", "value": 0.0065800162469536955}, {"name": "\u9762\u5bf9", "value": 0.0065800162469536955}, {"name": "\u8d8a\u4f4d", "value": 0.0057676685621445975}, {"name": "\u7ea2\u724c", "value": 0.0057676685621445975}, {"name": "\u65e7\u4e3b", "value": 0.0057676685621445975}, {"name": "\u4e0b", "value": 0.0057676685621445975}, {"name": "\u611f\u8c22", "value": 0.0057676685621445975}, {"name": "\u7403", "value": 0.0057676685621445975}, {"name": "\u5bcc\u529b", "value": 0.0057676685621445975}, {"name": "\u53ea\u80fd", "value": 0.004955320877335499}, {"name": "\u9ec4\u724c", "value": 0.004955320877335499}, {"name": "\u597d", "value": 0.004142973192526401}, {"name": "\u6700\u540e", "value": 0.004142973192526401}, {"name": "\u6709\u70b9", "value": 0.004142973192526401}, {"name": "\u5455\u5410", "value": 0.004142973192526401}], "2": [{"name": "\u8096\u667a", "value": 0.04756410256410257}, {"name": "\u7403", "value": 0.023205128205128208}, {"name": "\u5bcc\u529b", "value": 0.019358974358974358}, {"name": "\u6052\u5927", "value": 0.016794871794871793}, {"name": "\u7403\u5458", "value": 0.015512820512820512}, {"name": "\u8d8a\u4f4d", "value": 0.010384615384615384}, {"name": "\u8fdb", "value": 0.009102564102564102}, {"name": "\u8fdb\u7403", "value": 0.009102564102564102}, {"name": "\u6bd4\u8d5b", "value": 0.009102564102564102}, {"name": "\u6700\u540e", "value": 0.009102564102564102}, {"name": "\u4e00\u4e2a", "value": 0.00782051282051282}, {"name": "\u5e94\u8be5", "value": 0.00782051282051282}, {"name": "\u4e22", "value": 0.006538461538461538}, {"name": "\u8e22", "value": 0.006538461538461538}, {"name": "\u5916\u63f4", "value": 0.006538461538461538}, {"name": "\u9c81\u80fd", "value": 0.006538461538461538}, {"name": "\uff01", "value": 0.006538461538461538}, {"name": "\u7b97", "value": 0.006538461538461538}, {"name": "\u4e09\u4e2a", "value": 0.006538461538461538}, {"name": "\u804c\u4e1a", "value": 0.005256410256410256}, {"name": "\u70b9\u7403", "value": 0.005256410256410256}, {"name": "\u56fd\u5185", "value": 0.005256410256410256}, {"name": "\u4eba", "value": 0.005256410256410256}, {"name": "\u72af\u89c4", "value": 0.005256410256410256}, {"name": "\u611f\u89c9", "value": 0.005256410256410256}, {"name": "\u7b2c\u4e8c\u4e2a", "value": 0.005256410256410256}, {"name": "\u5f3a", "value": 0.005256410256410256}, {"name": "\u7b2c\u4e00\u4e2a", "value": 0.005256410256410256}, {"name": "\u6253", "value": 0.005256410256410256}, {"name": "\u5f3a\u5f3a", "value": 0.005256410256410256}], "3": [{"name": "\u8096\u667a", "value": 0.029679802955665028}, {"name": "\u6052\u5927", "value": 0.016133004926108373}, {"name": "\uff01", "value": 0.014901477832512314}, {"name": "\u56fd\u5bb6\u961f", "value": 0.013669950738916256}, {"name": "\u8d5b\u5b63", "value": 0.011206896551724138}, {"name": "\u90dc\u6797", "value": 0.008743842364532019}, {"name": "\u4e0b", "value": 0.008743842364532019}, {"name": "\u597d", "value": 0.008743842364532019}, {"name": "\u5e94\u8be5", "value": 0.00751231527093596}, {"name": "\u4e2d\u950b", "value": 0.00751231527093596}, {"name": "\u7403", "value": 0.006280788177339901}, {"name": "\u5bcc\u529b", "value": 0.006280788177339901}, {"name": "\u6b66\u78ca", "value": 0.006280788177339901}, {"name": "\u6768\u65ed", "value": 0.006280788177339901}, {"name": "\u4e00\u4e2a", "value": 0.006280788177339901}, {"name": "\u5e0c\u671b", "value": 0.005049261083743842}, {"name": "\ud83d\ude02", "value": 0.005049261083743842}, {"name": "\u4f20\u4e2d", "value": 0.005049261083743842}, {"name": "\u624e\u54c8\u7ef4", "value": 0.005049261083743842}, {"name": "\u80fd\u529b", "value": 0.005049261083743842}, {"name": "\u6253", "value": 0.005049261083743842}, {"name": "\u660e\u5e74", "value": 0.005049261083743842}, {"name": "\u6bd4\u8d5b", "value": 0.005049261083743842}, {"name": "\u4e0b\u534a\u573a", "value": 0.005049261083743842}, {"name": "\u9996\u53d1", "value": 0.005049261083743842}, {"name": "\u4e0a\u6e2f", "value": 0.005049261083743842}, {"name": "\u4e2d\u8d85", "value": 0.005049261083743842}, {"name": "\u8e22", "value": 0.0038177339901477834}, {"name": "\u66b4\u529b\u9e1f", "value": 0.0038177339901477834}, {"name": "\u60c5\u51b5", "value": 0.0038177339901477834}]};
var topic_summary = {"0": [{"content": "\u8096\u667a\u628a\u81ea\u5df1\u7531\u9ad8\u5927\u5e05\u6447\u8eab\u4e00\u53d8\u6210\u4e3a\u9ad8\u5927\u8870\uff01\u60c5\u5546\u4f4e\u8fc78\u5c81\u5c0f\u7ae5\u2026\u2026\u59d4\u5b9e\u65e0\u8bed\uff01", "up": 1140}, {"content": "\u8096\u667a\u771f\u662f\u8be0\u91ca\u4e86\u4ec0\u4e48\u53eb\u732a\u961f\u53cb[\u6342\u8138][\u6342\u8138]", "up": 391}, {"content": "\u8096\u667a\uff1a\u64e6\uff0c\u8fd9\u90fd\u80fd\u8fdb\uff0c\u6211\u771f\u732a\u8111\u5b50\u3002\u4e34\u673a\u4e00\u52a8\uff0c\u628a\u7403\u8863\u5f80\u5730\u4e0a\u4e00\u7838\uff0c\u563f\u563f\u3002\u3002\u3002", "up": 96}, {"content": "\u6b66\u78ca\u7529\u90dc\u6797\u5341\u6761\u8857\u52a01\u4e2a\u8096\u667a\uff01", "up": 13}, {"content": "\u6211\u8981\u662f\u5bcc\u529b\u4e3b\u6559\u7ec3\u76f4\u63a5\u628a\u8096\u667a\u5f00\u9664\u51fa\u4e00\u7ebf\u961f\uff0c\u6c38\u4e0d\u5f97\u56de\u4e00\u7ebf\u961f\uff0c\u9664\u975e\u8f6c\u4f1a\uff0cmmp\uff0c\u7403\u8e22\u7684\u4e0d\u4e4d\u5f97\uff0c\u6bdb\u75c5\u4e0d\u5c11\uff0c\u60ef\u574f\u4e86\u5e74\u8f7b\u4eba", "up": 10}], "1": [{"content": "\u8096\u667a\uff1a\u9762\u5bf9\u8001\u4e1c\u5bb6\u8fdb\u7403\uff0c\u6211\u81ea\u7f5a\u4e00\u7ea2[\u6342\u8138]", "up": 1021}, {"content": "\u8096\u667a\u8131\u8863\u6551\u65e7\u4e3b\uff0c\u5efa\u4e1a1-1\u6218\u5e73\u5bcc\u529b[\u7b11\u54ed][\u7b11\u54ed][\u7b11\u54ed]", "up": 738}, {"content": "\u611f\u8c22\u8096\u667a\u3002\u611f\u8c22\u3002", "up": 692}, {"content": "\u8096\u667a\u8131\u8863\u6551\u65e7\u4e3b\uff0c\u5efa\u4e1a1-1\u6218\u5e73\u5bcc\u529b[\u7b11\u54ed][\u7b11\u54ed][\u7b11\u54ed]", "up": 270}, {"content": "\u5176\u5b9e\u8096\u667a\u4e4b\u524d\u5bf9\u5efa\u4e1a\u8fdb\u7403\u90fd\u662f\u4e0d\u5e86\u795d\u7684\u554a\uff0c\u8131\u8863\u771f\u7684\u5f88\u4e0d\u89e3\uff0c\u800c\u4e14\u5355\u5c31\u8fd9\u573a\u6bd4\u8d5b\u6765\u8bf4\uff0c\u66f4\u618b\u5c48\u7684\u662f\u624e\u54c8\u7ef4\u554a", "up": 207}], "2": [{"content": "\u8fd9\u7403\u8ddf\u6628\u5929\u8096\u667a\u90a3\u4e2a\u5dee\u4e0d\u591a \u90a3\u4e2a\u7b97\u8fdb\u8fd9\u4e2a\u5c31\u4e0d\u7b97 VAR\u4e0d\u6210\u719f\u4e0d\u4e13\u4e1a\u5c31\u522b\u6d6a\u8d39\u65f6\u95f4\u4e86", "up": 98}, {"content": "\u8096\u667a\u7b2c\u4e00\u4e2a\u8fdb\u7403\u8d8a\u4f4d\u4e861/3\u4e2a\u8eab\u4f4d\uff0c\u7b2c\u4e8c\u4e2a\u8fdb\u7403\u5c5e\u4e8e\u5e78\u8fd0\u7403\u3002\u8fd8\u662f\u9c81\u80fd\u6bd4\u8f83\u7a33\uff0c\u5c0f\u5c06\u5d14\u9e4f\u4ee5\u540e\u4f1a\u6709\u7a33\u5b9a\u7684\u51fa\u573a\u65f6\u95f4\u7684\u3002", "up": 17}, {"content": "\u8096\u667a\u7b2c\u4e8c\u4e2a\u7403\u7684\u786e\u8d8a\u4f4d\u4e86\uff01", "up": 10}, {"content": "\u8096\u667a\u8fd9\u4e0b\u8981\u706b\u4e86", "up": 7}, {"content": "\u8096\u667a\u8fd9\u7403\u4e25\u683c\u4e00\u70b9\uff0c\u8eab\u4f53\u6709\u70b9\u63a2\u51fa\u53bb\u4e86\u3002", "up": 7}], "3": [{"content": "\u606d\u559c\u4e0a\u6e2f\u554a\uff0c\u4e0a\u6e2f\u540e\u9632\u8fd8\u9700\u8981\u52a0\u5f3a\uff0c\u660e\u5e74\u4e9a\u51a0\u624d\u80fd\u8d70\u7684\u66f4\u8fdc\u3002\u8d5b\u524d\u770b\u5230\u9996\u53d1\u540d\u5355\u5c31\u77e5\u9053\u6052\u5927\u540e\u9632\u8981\u4e70\u5355\u4e86\u3002\u5361\u7eb3\u74e6\u7f57\u4e34\u573a\u8c03\u5ea6\u518d\u6b21\u8bc1\u660e\u4e86\uff0c\u4ed6\u7684\u529f\u5e95\u8fd8\u4e0d\u591f\u6df1\u539a\u3002\u4e0a\u6e2f\u8d5b\u524d\u51c6\u5907\u505a\u8db3\u4e86\u529f\u592b\uff0c\u65e0\u53ef\u539a\u975e\u3002\u4e00\u4ee3\u9738\u4e3b\u7ec8\u7a76\u8981\u6613\u4e3b\uff0c\u4f46\u662f\u660e\u5e74\u7684\u8def\u8fd8\u5b58\u5728\u592a\u591a\u7684\u672a\u77e5\u3002\u671f\u5f85\u660e\u5e74\u4e2d\u8d85\u53cc\u96c4\u7684\u4e9a\u51a0\u4e4b\u65c5\u3002\u6b64\u5916\uff0c\u80e1\u5c14\u514b\u7684\u70b9\u7403\u771f\u662f\u53ef\u4ee5\u770bVAR\u7684\uff0c\u4ed6\u5148\u62e8\u5230\u4e86\u66b4\u529b\u9e1f\uff0c\u66b4\u529b\u9e1f\u7684\u624b\u90e8\u52a8\u4f5c\u80af\u5b9a\u4e0d\u662f\u6545\u610f\u7684\uff0c\u4f46\u662f\u5f53\u65f6\u90dc\u6797\u5484\u5484\u903c\u4eba\ud83d\ude02\uff0c\u8fd9\u573a\uff0c\u6362\u4e0b\u90dc\u6797\u624d\u662f\u6b63\u786e\u7684\uff0c\u90d1\u667a\u5e94\u8be5\u516b\u5341\u5206\u949f\u624d\u4e0b\uff0c\u5f20\u6210\u6797\u5e94\u8be5\u5148\u4e0b\u53bb\uff0c\u4e0b\u534a\u573a\u5f00\u59cb\u7684\u6f0f\uff0c\u7ed9\u4e86\u6b66\u78ca\u4e00\u4e2a\u5b8c\u7f8e\u7684\u5355\u5200\u3002\u5168\u573a\u6700\u4f73\u5e94\u8be5\u662f\u80e1\u5c14\u514b\uff01\u51fa\u8272\u7684\u652f\u70b9\u4f5c\u7528\uff0c\u4e24\u4e2a\u624b\u672f\u5200\u822c\u7684\u52a9\u653b\u3002\u6b66\u78ca\u518d\u6b21\u8bc1\u660e\u4e86\u81ea\u5df1\uff0c\u8fdf\u4e9b\u7684\u56fd\u5bb6\u961f\u6bd4\u8d5b\u5e0c\u671b\u7ee7\u7eed\u6709\u8fdb\u7403\uff0c\u56fd\u5bb6\u961f\u4e0d\u5e94\u8be5\u8981\u90dc\u6797\u4e86\uff0c\u4e0a\u534a\u573a\u5728\u73b0\u573a\u770b\u7684\u65f6\u5019\uff0c\u4ed6\u5c45\u7136\u8eba\u4e0b\u4e00\u5206\u591a\u949f\uff0c\u90a3\u8fb9\u963f\u5170\u548c\u5854\u795e\u90fd\u53cd\u51fb\u4e86\u3002\u3002\u3002\u3002\u770b\u770b\u6b66\u78ca\uff0c\u6ca1\u5f97\u9ed1\u554a\uff0c\u88ab\u591a\u6b21\u72af\u89c4\uff0c\u57fa\u672c\u6ca1\u6709\u53e8\u53e8\uff01\u6001\u5ea6\u5f88\u91cd\u8981\u3002\u56fd\u5bb6\u961f\u7684\u652f\u70b9\u8ba9\u7ed9\u8096\u667a\u548c\u6768\u65ed\u5427\u3002\u56fd\u5bb6\u961f\u73b0\u5728\u4e2d\u573a\u6162\u6162\u8f6c\u6280\u672f\u578b\u6253\u6cd5\uff0c\u7ed9\u591a\u70b9\u5feb\u7075\u5c0f\u7684\u7403\u5458\u53d1\u6325\u3002\u6c49\u8d85\u52a0\u6b66\u78ca\u4e24\u6761\u8fb9\uff0c\u4e2d\u573a\u5434\u66e6\u90d1\u667a\u91d1\u656c\u9053\uff0c\u611f\u89c9\u4f1a\u5f88\u6709\u770b\u70b9\uff5e\uff5e\u4e2a\u4eba\u6d45\u89c1\ud83d\ude48\ud83d\ude48\uff0c\u6052\u5927\u660e\u5e74\u8981\u597d\u597d\u601d\u8003\u4e0b\u540e\u8def\u4e86\uff0c\u9752\u8bad\u4e5f\u5f88\u91cd\u8981\uff01\u64b8", "up": 9}, {"content": "\u97e6\u4e16\u8c6a\u5b9e\u529b\u9ad8\u51fa\u540c\u9f84\u4e00\u7b79\uff0c\u901f\u5ea6\u811a\u6cd5\u53ef\u4ee5\uff0c\u5e0c\u671b\u56fd\u5bb6\u961f\u80fd\u5c1d\u8bd5\u548c\u6b66\u78ca\u4e00\u4eba\u4e00\u8fb9\uff0c\u8096\u667a\u4e2d\u95f4\uff0c\u8bd5\u8bd5", "up": 7}, {"content": "\u91cc\u76ae\u62ff\u51fa\u5c0f\u672c\u672c\uff0c\u8096\u667a\u6765\u56fd\u5bb6\u961f\uff0c\u5510\u6dfc\u4e5f\u884c\uff0c\u624e\u54c8\u7ef4\u3002\u3002\u3002\u8db3\u534f\u4f60\u80fd\u4e0d\u80fd\u89c4\u5212\u4e00\u4e0b", "up": 7}, {"content": "\u53e4\u6709\u82f1\u8d85\u5fe0\u4e49\u6cd5\uff0c\u4eca\u6709\u4e2d\u8d85\u5fe0\u4e49\u667a\u3002\u8096\u667a\u4e3a\u4e86\u8001\u4e1c\u5bb6\u4e5f\u662f\u62fc\u4e86\uff0c\u5b81\u80af\u81ea\u5df1\u4e0b\u573a\uff0c\u53ef\u656c~~~\u5728\u8096\u667a\u7684\u5149\u8f89\u5f62\u8c61\u4e0b\uff0c\u5fe0\u4e49\u6cd5\uff0c\u8303\u96c4\u5fc3\uff0c\u963f\u5fb7\u5df4\u7ea6\u8fd9\u4e9b\u9876\u7ea7\u540d\u5c06\u9eef\u7136\u5931\u8272~~", "up": 7}, {"content": "\u6ca1\u4e86\u59dc\u81f3\u9e4f\u548c\u5510\u6dfc\u7684\u5bcc\u529b\uff0c\u548c\u65ad\u4e86\u53cc\u81c2\u5dee\u4e0d\u591a\uff0c\u6ca1\u4e86\u4e24\u8fb9\u8096\u667a\u51e0\u4e4e\u9690\u8eab\u4e86\uff0c\u80fd\u8ddf\u624e\u54c8\u7ef4\u5408\u4f5c\u7684\u53ea\u5269\u4e0b\u96f7\u9e1f", "up": 6}]};
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
