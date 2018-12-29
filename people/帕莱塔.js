var data = {"person_name": "\u5e15\u83b1\u5854", "nicknames": "\u5e15\u83b1\u5854", "aspects": {"\u7403\u5458": 0.39386784546786735, "\u6bd4\u8d5b": 0.6035323307362485, "\u5916\u63f4": 0.655987788474629, "\u8d5b\u5b63": 0.5216439330405198, "\u9632\u5b88": 0.3072523225394307, "\u540e\u9632": 0.29708850152081917, "\u8db3\u534f": 0.808205729451962, "\u70b9\u7403": 0.4936332135699354, "\u505c\u8d5b": 0.35231235054634186, "\u8fdb\u7403": 0.4918919051258364}, "overall_heat": 65.0, "overall_polar": 0.454, "name": "185", "nationality": "\u610f\u5927\u5229", "position": "\u540e\u536b", "goal": "1", "assist": "0", "team_name": "\u6c5f\u82cf\u82cf\u5b81", "name_en": "Gabriel Paletta", "age": "32", "height": "190", "weight": "88"};
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
var topic_keywords = {"0": [{"name": "\u5e15\u83b1\u5854", "value": 0.07534597642234753}, {"name": "\u82cf\u5b81", "value": 0.04117546557321033}, {"name": "\uff1f", "value": 0.020673159063728002}, {"name": "\uff01", "value": 0.017256107978814283}, {"name": "\u88c1\u5224", "value": 0.013839056893900564}, {"name": "\u70b9\u7403", "value": 0.012130531351443704}, {"name": "\u8e22", "value": 0.010422005808986844}, {"name": "\u9632\u5b88", "value": 0.010422005808986844}, {"name": "\u7981\u533a", "value": 0.008713480266529985}, {"name": "\u5439", "value": 0.008713480266529985}, {"name": "\u6bd4\u8d5b", "value": 0.008713480266529985}, {"name": "\u52a8\u4f5c", "value": 0.007004954724073125}, {"name": "\u4e00\u70b9", "value": 0.007004954724073125}, {"name": "\u540e\u9632", "value": 0.007004954724073125}, {"name": "\u7981\u8d5b", "value": 0.007004954724073125}, {"name": "\u4eca\u5929", "value": 0.007004954724073125}, {"name": "\u4e0a\u6e2f", "value": 0.007004954724073125}, {"name": "\u6700\u540e", "value": 0.007004954724073125}, {"name": "\u4e0b", "value": 0.007004954724073125}, {"name": "\u5bcc\u529b", "value": 0.007004954724073125}, {"name": "\u9ec4\u7d2b\u660c", "value": 0.007004954724073125}, {"name": "\u9ec4\u724c", "value": 0.007004954724073125}, {"name": "\u4e00\u4e0b", "value": 0.007004954724073125}, {"name": "\u9a82", "value": 0.007004954724073125}, {"name": "\u4e0d\u9519", "value": 0.0052964291816162655}, {"name": "\u8096\u667a", "value": 0.0052964291816162655}, {"name": "\u6052\u5927", "value": 0.0052964291816162655}, {"name": "\u786e\u5b9e", "value": 0.0052964291816162655}, {"name": "\u771f\u7684", "value": 0.0052964291816162655}, {"name": "\u4e00\u4e2a", "value": 0.0052964291816162655}], "1": [{"name": "\u5e15\u83b1\u5854", "value": 0.04331520720045003}, {"name": "\uff01", "value": 0.032064504031501975}, {"name": "\u7403\u5458", "value": 0.011438214888430527}, {"name": "\u8d5b\u5b63", "value": 0.011438214888430527}, {"name": "\u5916\u63f4", "value": 0.011438214888430527}, {"name": "\u7279\u8c22\u62c9", "value": 0.011438214888430527}, {"name": "\u597d", "value": 0.009563097693605851}, {"name": "\u674e\u6602", "value": 0.009563097693605851}, {"name": "\u771f", "value": 0.007687980498781174}, {"name": "\u82cf\u5b81", "value": 0.007687980498781174}, {"name": "\u505c\u8d5b", "value": 0.007687980498781174}, {"name": "\u53ea\u80fd", "value": 0.007687980498781174}, {"name": "?", "value": 0.007687980498781174}, {"name": "\u4f4d\u7f6e", "value": 0.007687980498781174}, {"name": "\u72b6\u6001", "value": 0.007687980498781174}, {"name": "\u57c3\u5fb7\u5c14", "value": 0.005812863303956498}, {"name": "\u62c9\u7c73", "value": 0.005812863303956498}, {"name": "\u8e22", "value": 0.005812863303956498}, {"name": "\u8c22\u9e4f\u98de", "value": 0.005812863303956498}, {"name": "\u4eba", "value": 0.005812863303956498}, {"name": "\u4e2d\u950b", "value": 0.005812863303956498}, {"name": "\u4e24\u4e2a", "value": 0.005812863303956498}, {"name": "\u8fdb\u653b", "value": 0.005812863303956498}, {"name": "\u9002\u5408", "value": 0.005812863303956498}, {"name": "\u540e\u536b", "value": 0.005812863303956498}, {"name": "\u5409\u7fd4", "value": 0.005812863303956498}, {"name": "\u5468\u4e91", "value": 0.005812863303956498}, {"name": "\u5c0f", "value": 0.005812863303956498}, {"name": "\u7403", "value": 0.005812863303956498}, {"name": "\u5f53\u5e74", "value": 0.005812863303956498}]};
var topic_summary = {"0": [{"content": "\u5168\u573a\u6700\u4f73\u5e15\u83b1\u5854", "up": 233}, {"content": "\u8fd9\u573a\u7279\u8c22\u62c9\u4f24\uff0c\u5e15\u83b1\u5854\u505c\uff0c\u9ec4\u7d2b\u660c\u88ab\u62bd\u8c03\uff0c\u82cf\u5b81\u5b9e\u529b\u5927\u6253\u6298\u6263\uff0c\u51ed\u501f\u5168\u961f\u52aa\u529b\uff0c\u52a0\u4e0a\u9177\u6691\u4e2d\u4e0d\u505c\u7684\u5954\u8dd1\uff0c\u9006\u8f6c\u8d62\u5f97\u6bd4\u8d5b \u503c\u5f97\u8868\u626c", "up": 216}, {"content": "\u5c0f\u9ec4\u4e0d\u5728\uff0c\u5e15\u83b1\u5854\u7981\u8d5b\uff0c\u7279\u8c22\u62c9\u53c8\u88ab\u5e9f\u4e86\uff0c\u82cf\u5b81\u96be\u554a", "up": 38}, {"content": "\u5a01\u5c14\u85e4\u85e4\u7684\u5224\u7f5a\u5b8c\u5168\u6ca1\u6709\u8868\u73b0\u51fa\u671f\u5f85\u7684\u6b27\u6d32\u88c1\u5224\u7684\u6c34\u51c6\uff0c\u662f\u4e00\u573a\u95f9\u5267\uff01\u82cf\u5b81\u7684\u4e09\u4e2a\u9ec4\u724c\uff0c\u5f88\u6709\u610f\u601d\uff01\u9ec4\u7d2b\u660c\u90a3\u7403\uff0c\u5bf9\u65b9\u80af\u5b9a\u78b0\u5230\u4e86\uff0c\u4f46\u662f\u4e0d\u81f3\u4e8e\u5bfc\u81f4\u4ed6\u5012\u5730\uff0c\u6216\u8005\u8bf4\u4e0d\u4f1a\u662f\u90a3\u79cd\u5012\u5730\u52a8\u4f5c\uff0c\u72af\u89c4\u662f\u6709\uff0c\u8df3\u6c34\u66f4\u591a\uff0c\u9f13\u52b1\u516c\u7ade\u8d5b\u9ec4\u724c\u6ca1\u95ee\u9898\u3002\u4f46\u662f\uff0c\u535a\u963f\u57fa\u8036\u548c\u5e15\u83b1\u5854\u7684\u9ec4\u724c\u5c31\u5b8c\u5168\u662fxjb\u51fa\u724c\u4e86\uff01", "up": 14}, {"content": "\u5439\u4e00\u6ce2\u5e15\u83b1\u5854\uff0c\u6ca1\u4eba\u53cd\u5bf9\u5427\uff1f", "up": 14}], "1": [{"content": "\u57c3\u5fb7\u5c14\uff01\uff01\uff01\u5934\u9876\u811a\u8e22\u6885\u5f00\u4e8c\u5ea6\uff01\uff01\uff01\u51b2\u950b\u9677\u9635\u57c3\u5fb7\u5c14\uff01\u5b9a\u6d77\u795e\u9488\u5e15\u83b1\u5854\uff01\u6211\u82cf\u5a01\u6b66\u9738\u6c14\uff01\uff01\uff01", "up": 66}, {"content": "\u6211\u53d1\u73b0\u82cf\u5b81\u672c\u8d5b\u5b63\u6ca1\u6709\u4e00\u573a\u6bd4\u8d5b\u662f\u5168\u4f53\u4e3b\u529b\u7403\u5458\u90fd\u80fd\u4e0a\u573a\u7684\uff0c\u4e0d\u662f\u8fd9\u4e2a\u4f24\u4e86\uff0c\u5c31\u662f\u90a3\u4e2a\u505c\u8d5b\uff0c\u5e15\u83b1\u5854\uff0c\u5409\u7fd4\uff0c\u9ec4\u7d2b\u660c\u7b49\u7b49\uff0c\u7279\u8c22\u62c9\u4e5f\u505c\u8d5b\u4e86\u597d\u51e0\u573a\uff0c\u53ef\u80fd\u8fd9\u5c31\u662f\u547d\u5427\uff0c\u80fd\u6392\u7b2c\u4e94\u6ee1\u8db3\u4e86\u3002", "up": 39}, {"content": "\u5434\u66e6\u8fd9\u573a\u72b6\u6001\u771f\u597d\uff0c\u5e15\u83b1\u5854\u4e00\u5982\u65e2\u5f80\u7684\u7a33\uff0c\u9ec4\u7d2b\u660c\u4e00\u76f4\u5f80\u4e0a\u8d70\uff0c\u7279\u8c22\u62c9\u7d2f\u4e86\uff0c\u535a\u963f\u57fa\u8036\u7684\u8fdb\u653b\u5f31\u70b9\u8d8a\u53d1\u660e\u663e\uff0c\u5409\u7fd4\u987e\u8d85\u674e\u6602\u4e3b\u529b\u4f4d\u7f6e\u6ca1\u95ee\u9898\uff0c\u5468\u4e91\u4e0d\u9002\u5408\u5de6\u8fb9\u540e\u536b\uff0c\u8c22\u9e4f\u98de\u72b6\u6001\u6709\u8d77\u4f0f\uff0c\u5f20\u6653\u5f6c\u5b9a\u4f4d\u662f\u66ff\u8865\uff01", "up": 11}, {"content": "\u672c\u6765\u5df2\u7ecf\u6d17\u6d17\u51c6\u5907\u7761\u4e86\uff0c\u4f46\u662f\u8fd8\u662f\u7761\u4e0d\u7740\u3002\u600e\u4e48\u80fd\u8ba9\u5468\u4e91\u674e\u6602\u548c30\u591a\u5c81\u7684\u5e15\u83b1\u5854\u8e22\u4e09\u4e2d\u536b\uff0c\u7eed\u7ea6\u524d\u4e91\u59b9\u59b9\u95f9\u7740\u8981\u9996\u53d1\u4f4d\u7f6e\u8981\u4e0d\u522b\u7684\u7403\u961f\u5c31\u8bb8\u7ed9\u4ed6\uff0c\u8ba9\u4ed6\u8d70\u5c31\u662f\u4e86\u573a\u573a\u88ab\u7206\u8981\u662f\u6211\u771f\u4e0d\u597d\u610f\u601d\u5f20\u8fd9\u53e3\uff0c\u674e\u6602\u4e09\u4e2a\u4e09\u4e2a\u8d5b\u5b63\u4e0b\u6765\u9664\u4e86\u5439\u4efb\u610f\u7403(\u4e5f\u6ca1\u8fdb\u51e0\u4e2a)\u5f3a\u58ee\u524d\u950b\u4e00\u625b\u5c31\u6ca1\u5e73\u8861\uff0c\u7075\u5de7\u524d\u950b\u4e00\u62a2\u5c31\u88ab\u8fc7\u8fdb\u653b\u89d2\u7403\u6ca1\u5934\u7403\u771f\u6ca1\u770b\u51fa\u6765\u4ed6\u6709\u54ea\u4e00\u70b9\u6bd4\u6768\u535a\u5b87\u5f3a\uff0c\u8bdd\u8bf4\u8fd8\u4e0d\u5982\u7559\u8bb8\u6709\u5fd7\u597d\u6b79\u4eba\u5bb6\u7ad9\u5f97\u4f4f\u554a\uff0c\u901f\u5ea6\u5904\u7406\u6389\u3002\u8c22\u9e4f\u98de\u771f\u4e0d\u662f\u8e22\u8fb9\u8def\u7684\u6599\uff0c\u8fd8\u4e0d\u5982\u8ba9\u4ed6\u56de\u4e2d\u8def\u4e70\u8fc7\u6765\u7684\u7533\u946b\u7684\u6768\u5bb6\u5a01\u4e24\u4e2a\u8d5b\u5b63\u4e0a\u573a\u5c31\u51e0\u6b21\u8fd8\u662f\u8865\u65f6\u4e0a\u7684\uff0c\u82b1\u4e861500\u4e07\u5462\uff0c\u5c31\u9884\u5907\u961f\u8017\u5408\u540c?\u597d\u6b79\u4eba\u5bb6\u5728\u7533\u946b\u8e22\u8fb9\u8def\u4e5f\u662f\u597d\u624b\u3002\u9676\u6e90\u4e5f\u53ef\u4ee5\u554a\u5357\u5c0f\u54fc\u4e0d\u4e86\u89e3\u4e0d\u8fc7\u8eab\u4f53\u770b\u4e0a\u53bb\u7626\u7626\u7684\u5904\u7406\u7403\u4e5f\u4e0d\u884c\uff0c\u591a\u636223\u7403\u5458\u522b\u653e\u7740\u4e86\uff0c\u540e25\u5206\u949f\u90fd\u662f\u957f\u8fdc\u7403\u8ba9\u7279\u8c22\u62c9\u4e89\uff0c\u4ee5\u4e3a\u4ed6\u662f\u8d85\u4eba\u4f1a\u98de?\u4e3a\u4ec0\u4e48\u7530\u4e00\u519c\u975e\u8981\u63d2\u90a3\u4e48\u6df1?\u8ba9\u5218\u5efa\u4e1a\u8865\u5b8c\u8d39\u5c14\u5357\u591a\u8865\u8d39\u5c14\u5357\u8fea\u9e1f\u3002\u6208\u4f1f\u4e0d\u80fd\u7528?\u4e0b\u4e00\u8f6e\u5bf9\u5929\u6d25\u963f\u5207\u59c6\u4f30\u8ba1\u674e\u6602\u53c8\u8981\u88ab\u62b9\u8fc7\u54af\uff0c\u5475\u5475\u65e0\u8bed\u5509\u3002[\u7b11\u54ed]", "up": 10}, {"content": "\u6211\u4e0d\u89c9\u5f97\u7403\u5458\u6709\u591a\u5dee\uff08\u5e15\u83b1\u5854\u5c31\u662f\u5f53\u5e74\u7684\u9c81\u667a\u6df1\uff0c\u7279\u8c22\u62c9\u4f9d\u7136\u662f\u4e2d\u8d85\u9876\u7ea7\u5916\u63f4\uff0c\u5409\u7fd4\u4e00\u5982\u65e2\u5f80\u7684\u7231\u5c97\u656c\u4e1a\u4e14\u4eca\u5e74\u72b6\u6001\u8d85\u7ea7\u597d\uff0c\u5f20\u6653\u5f6c\u8ba9\u4eba\u6b23\u559c\uff0c\u8c22\u9e4f\u98de\u6768\u7b11\u5929\u674e\u6602\u76f8\u5bf9\u4e8e\u4e0a\u8d5b\u5b63\u90fd\u6da8\u7403\u4e86\uff0c\u9664\u4e86\u5218\u5efa\u4e1a\u6c6a\u5d69\u5468\u4e91\u72b6\u6001\u5dee\u4e00\u70b9\uff0c\u603b\u4f53\u4e0a\u7403\u5458\u8868\u73b0\u8fd8\u53ef\u4ee5\uff09\uff0c\u5361\u4f69\u7f57\u5fc5\u987b\u4e3a\u8fd9\u573a\u8106\u8d25\u4e70\u5355\uff0c\u6218\u672f\u5b8c\u8d25\uff0c\u6211\u8fd8\u662f\u90a3\u53e5\u8bdd\u5361\u4f69\u7f57\u662f\u540d\u5e05\u4f46\u4e0d\u9002\u5408\u4e2d\u8d85\u66f4\u4e0d\u9002\u5408\u82cf\u5b81\uff01", "up": 9}]};
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
