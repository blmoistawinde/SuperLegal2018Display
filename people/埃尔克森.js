var data = {"person_name": "\u57c3\u5c14\u514b\u68ee", "nicknames": "\u57c3\u5c14\u514b\u68ee", "aspects": {"\u8fdb\u7403": 0.45219874196771476, "\u5916\u63f4": 0.5525051158267114, "\u7403\u5458": 0.5404104623486649, "\u8d5b\u5b63": 0.7272036076314184, "\u6bd4\u8d5b": 0.6494092356986386, "\u8fdb\u653b": 0.36560161996215584, "\u7403\u8ff7": 0.8758443084331771, "\u56fd\u5bb6\u961f": 0.36836882078568794, "\u8d8a\u4f4d": 0.1725689358431042, "\u4f20\u7403": 0.6049761506737709}, "overall_heat": 139.0, "overall_polar": 0.373, "name": "38", "nationality": "\u5df4\u897f", "position": "\u524d\u950b", "goal": "11", "assist": "2", "team_name": "\u4e0a\u6d77\u4e0a\u6e2f", "name_en": "Elkeson de Oliveira ", "age": "29", "height": "181", "weight": "78"};
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
var topic_keywords = {"0": [{"name": "\u57c3\u5c14\u514b\u68ee", "value": 0.05439655172413793}, {"name": "\uff01", "value": 0.05008620689655172}, {"name": "\u5916\u63f4", "value": 0.01560344827586207}, {"name": "\u4e0a\u6e2f", "value": 0.014741379310344829}, {"name": "\uff1f", "value": 0.014741379310344829}, {"name": "\u9c81\u80fd", "value": 0.014741379310344829}, {"name": "\u9ad8\u62c9\u7279", "value": 0.013017241379310344}, {"name": "\u6052\u5927", "value": 0.012155172413793103}, {"name": "\u6b66\u78ca", "value": 0.011293103448275861}, {"name": "\u5965\u65af\u5361", "value": 0.011293103448275861}, {"name": "\u4e00\u4e2a", "value": 0.008706896551724137}, {"name": "\u597d", "value": 0.007844827586206896}, {"name": "\u963f\u5170", "value": 0.007844827586206896}, {"name": "\u4fdd\u5229\u5c3c\u5965", "value": 0.007844827586206896}, {"name": "\u5389\u5bb3", "value": 0.0069827586206896546}, {"name": "\u6d69\u514b", "value": 0.0069827586206896546}, {"name": "\u5854\u5229\u65af\u5361", "value": 0.006120689655172413}, {"name": "\u5df4\u897f", "value": 0.006120689655172413}, {"name": "\u8d5b\u5b63", "value": 0.006120689655172413}, {"name": "\u7403\u5458", "value": 0.006120689655172413}, {"name": "\u771f\u7684", "value": 0.006120689655172413}, {"name": "\u72b6\u6001", "value": 0.005258620689655172}, {"name": "\u683c\u5fb7\u65af", "value": 0.005258620689655172}, {"name": "\u5e0c\u671b", "value": 0.0043965517241379305}, {"name": "\u9009", "value": 0.0043965517241379305}, {"name": "\u80fd\u529b", "value": 0.0043965517241379305}, {"name": "\u80e1\u5c14\u514b", "value": 0.0043965517241379305}, {"name": "\u91cc\u5947", "value": 0.0043965517241379305}, {"name": "\u4e2d\u8d85", "value": 0.0043965517241379305}, {"name": "\u51e0\u4e2a", "value": 0.0043965517241379305}], "1": [{"name": "\u57c3\u5c14\u514b\u68ee", "value": 0.059033816425120775}, {"name": "\u6052\u5927", "value": 0.025217391304347827}, {"name": "\u4e0a\u6e2f", "value": 0.015555555555555557}, {"name": "\u6b66\u78ca", "value": 0.012657004830917874}, {"name": "\u5916\u63f4", "value": 0.011690821256038647}, {"name": "\u4e2d\u8d85", "value": 0.01072463768115942}, {"name": "\u8fdb\u7403", "value": 0.01072463768115942}, {"name": "\u7403", "value": 0.01072463768115942}, {"name": "\u8d8a\u4f4d", "value": 0.008792270531400966}, {"name": "\u91cc\u5947", "value": 0.008792270531400966}, {"name": "\u7403\u5458", "value": 0.008792270531400966}, {"name": "\u597d", "value": 0.007826086956521738}, {"name": "\u73b0\u5728", "value": 0.0068599033816425115}, {"name": "\u770b\u770b", "value": 0.0068599033816425115}, {"name": "\u8fdb\u653b", "value": 0.0068599033816425115}, {"name": "\uff01", "value": 0.0068599033816425115}, {"name": "\u80e1\u5c14\u514b", "value": 0.0068599033816425115}, {"name": "\u4eba", "value": 0.0068599033816425115}, {"name": "\u8bb0\u5f55", "value": 0.005893719806763285}, {"name": "\u9632\u5b88", "value": 0.005893719806763285}, {"name": "\u6362", "value": 0.005893719806763285}, {"name": "\uff1f", "value": 0.005893719806763285}, {"name": "\u5965\u65af\u5361", "value": 0.004927536231884058}, {"name": "\u4e9a\u51a0", "value": 0.004927536231884058}, {"name": "\u89e3\u8bf4", "value": 0.004927536231884058}, {"name": "28", "value": 0.004927536231884058}, {"name": "\u5e7f\u5dde", "value": 0.004927536231884058}, {"name": "\u5df4\u897f", "value": 0.004927536231884058}, {"name": "\u8d5b\u5b63", "value": 0.004927536231884058}, {"name": "\u7a46", "value": 0.004927536231884058}], "2": [{"name": "\u6052\u5927", "value": 0.03380809595202399}, {"name": "\u4e0a\u6e2f", "value": 0.020314842578710645}, {"name": "\u57c3\u5c14\u514b\u68ee", "value": 0.01956521739130435}, {"name": "\uff01", "value": 0.014317841079460271}, {"name": "\u6bd4\u8d5b", "value": 0.009820089955022489}, {"name": "\u5965\u65af\u5361", "value": 0.009820089955022489}, {"name": "\u7403\u5458", "value": 0.008320839580209894}, {"name": "\u80e1\u5c14\u514b", "value": 0.0075712143928035975}, {"name": "\u4e2d\u8d85", "value": 0.006821589205397301}, {"name": "\u8d5b\u5b63", "value": 0.006821589205397301}, {"name": "vs", "value": 0.0060719640179910045}, {"name": "\u51a0\u519b", "value": 0.0060719640179910045}, {"name": "\u8fdb\u7403", "value": 0.0060719640179910045}, {"name": "\u4eba", "value": 0.005322338830584707}, {"name": "\u88c1\u5224", "value": 0.005322338830584707}, {"name": "\u6bd4\u5206", "value": 0.005322338830584707}, {"name": "\u6b66\u78ca", "value": 0.005322338830584707}, {"name": "\u606d\u559c", "value": 0.005322338830584707}, {"name": "\u5206\u949f", "value": 0.004572713643178411}, {"name": "\u591a\u592b", "value": 0.004572713643178411}, {"name": "\u827e\u54c8\u8fc8", "value": 0.004572713643178411}, {"name": "\u7981\u533a", "value": 0.004572713643178411}, {"name": "\u4e00\u4e2a", "value": 0.004572713643178411}, {"name": "\u5916\u63f4", "value": 0.0038230884557721137}, {"name": "\u4e9a\u51a0", "value": 0.0038230884557721137}, {"name": "\u95ee\u9898", "value": 0.0038230884557721137}, {"name": "\u7403\u8ff7", "value": 0.0038230884557721137}, {"name": "\u60f3", "value": 0.0038230884557721137}, {"name": "\u90dc\u6797", "value": 0.0038230884557721137}, {"name": "\u65f6", "value": 0.0038230884557721137}]};
var topic_summary = {"0": [{"content": "\u672c\u6765\u6253\u7b97\u5f52\u5316\u6d69\u514b\u5965\u65af\u5361\u57c3\u5c14\u514b\u68ee\uff0c\u7ed3\u679c\u6b66\u78ca\u88ab\u4ed6\u4eec\u5f52\u5316\u5e26\u5df4\u897f\u4e86[\u6342\u8138]", "up": 690}, {"content": "\u80e1\u5c14\u514b\uff0c\u5965\u65af\u5361\uff0c\u57c3\u5c14\u514b\u68ee\uff1a\u7403\u738b\uff0c\u4f60\u7684\u5212\u8239\u59ff\u52bf\u597d\u50cf\u4e0d\u5bf9\u554a\uff1f \u6b66\u78ca\uff1a\u6211\u6ca1\u5212\u8239\uff0c\u6211\u5728\u51fb\u9f13", "up": 485}, {"content": "\u5efa\u8bae\u4e0a\u6e2f\u591a\u7528\u7528\u57c3\u5c14\u514b\u68ee\uff0c\u827e\u54c8\u8fc8\u591a\u592b\u8fd9\u79cd\u4ee5\u540e\u5c11\u7528\u7528\uff0c\u8d5b\u5b63\u7ed3\u675f\u5356\u6389\u5427\uff0c\u56fd\u5bb6\u961f\u7f3a\u597d\u7684\u4e2d\u573a\uff0c\u81ea\u5df1\u57f9\u517b\u4e00\u4e0b\u5427\uff0c\u5e2e\u522b\u4eba\u4e4c\u5179\u522b\u514b\u7ec3\u4eba\u5462\u3002", "up": 52}, {"content": "\u7533\u82b1\u6709\u51e0\u4e2a\u8457\u540d\u66b4\u813e\u6c14\u7403\u5458:\u79e6\u5347\u3001\u5b59\u4e16\u6797\u3001\u674e\u5efa\u6ee8\u3002\u4e0a\u6e2f\u6709\u51e0\u4e2a\u8457\u540d\u597d\u813e\u6c14\u7403\u5458:\u6b66\u78ca\u3001\u57c3\u5c14\u514b\u68ee\u3002", "up": 22}, {"content": "\u4e0a\u4e00\u4e2a\u4e24\u573a\u4e94\u7403\u8fd9\u4e48\u5389\u5bb3\u7684\uff0c\u6211\u6ca1\u8bb0\u9519\u7684\u8bdd\u662f\u5c0f\u718a\u57c3\u5c14\u514b\u68ee", "up": 11}], "1": [{"content": "\u57c3\u5c14\u514b\u68ee\u53bb\u54ea\u54ea\u51a0\u519b\uff0c\u53f2\u8482\u592b\u53bb\u54ea\u54ea\u964d\u7ea7[\u6342\u8138]", "up": 120}, {"content": "\u91d1\u656c\u9053\u8981\u662f\u8fdb\u4e0d\u4e86\u56fd\u5bb6\u961f\u5c31\u6ca1\u5929\u7406\u4e86\u3002\u3002\u3002\u611f\u89c9\u73b0\u5728\u4e2d\u8d85\u56de\u5230\u4e03\u516b\u5e74\u524d\u4e86\uff0c\u90a3\u65f6\u5019\u9c81\u80fd \u56fd\u5b89 \u7533\u82b1 \u4e9a\u6cf0 \u6c5f\u82cf\u821c\u5929\u4e89\u51a0\uff0c\u90a3\u65f6\u5019\u5e7f\u5dde\u6052\u5927\u7684\u524d\u8eab\u5e7f\u5dde\u767d\u4e91\u836f\u4e1a\u8fd8\u662f\u4e2d\u7532\uff0c\u6cb3\u5357\u5efa\u4e1a\u8fd8\u8fdb\u5165\u4e9a\u51a0\uff0c\u90a3\u65f6\u5019\u8fd8\u6709\u9752\u5c9b\u4e2d\u80fd\uff0c\u73b0\u5728\u4e2d\u80fd\u597d\u50cf\u662f\u4e59\u7ea7\u4e86\u3002\u90a3\u65f6\u5019\u8d5b\u573a\u7684\u4e3b\u89d2\u8fd8\u662f\u672c\u571f\u7403\u5458\u3002\u540e\u6765\u6052\u5927\u63a5\u624b\u5e7f\u5dde\u767d\u4e91\uff0c\u75af\u72c2\u7838\u94b1\u5f15\u8fdb\u90d1\u667a \u5f20\u7433\u8283 \u66fe\u8bda \u9ec4\u535a\u6587 \u51af\u6f47\u9706 \u90dc\u6797 \u7a46\u91cc\u5947 \u57c3\u5c14\u514b\u68ee\uff0c\u4ece\u6b64\u4e2d\u8d85\u683c\u5c40\u5f7b\u5e95\u53d8\u5929\u4e00\u5bb6\u72ec\u5927\u3002\u89c2\u8d4f\u6027\u4e0a\u6765\u4e86\u4e9a\u51a0\u4e5f\u62ff\u4e86\uff0c\u7136\u540e\u672c\u571f\u7403\u5458\u6218\u7ee9\u8fd8\u662f\u767d\u65a9\u9e21\u3002\u4ee5\u524d\u56fd\u5bb6\u961f\u7403\u5458\u591a\u662f\u9c81\u80fd \u56fd\u5b89 \u821c\u5929\u7b49\u7403\u961f\u7684\uff0c\u540e\u6765\u57fa\u672c\u4e0a\u662f\u6052\u5927\u7684\u73ed\u5e95\u3002\u4e4b\u524d\u4e2d\u8d85\u7c7b\u4f3c\u82f1\u8d85 \u7fa4\u96c4\u4e89\u9738\uff0c\u540e\u6765\u6052\u5927\u65f6\u671f\u7c7b\u4f3c\u5fb7\u7532\uff0c\u57fa\u672c\u4e0a\u62dc\u4ec1\u538b\u5012\u6027\u4f18\u52bf\u3002\u968f\u7740\u6052\u5927\u7403\u5458\u73ed\u5e95\u8001\u5316\uff0c\u73b0\u5728\u4e2d\u8d85\u53c8\u597d\u770b\u4e86\uff01", "up": 11}, {"content": "\u4e4b\u524d\u4e0a\u6e2f\u5bf9\u57c3\u5c14\u514b\u68ee\u4ec0\u4e48\u6837\uff0c\u73b0\u5728\u57c3\u795e\u5bf9\u4e0a\u6e2f\u600e\u4e48\u6837\uff1f\u5f88\u6709\u53ef\u80fd\u56e0\u4e3a\u57c3\u795e\u8fd9\u4e2a\u8fdb\u7403\u8ba9\u4e0a\u6e2f\u8d62\u5f97\u5386\u53f2\u4e0a\u7b2c\u4e00\u4e2a\u4e2d\u8d85\u51a0\u519b", "up": 10}, {"content": "\u606d\u559c\u4e0a\u6e2f\uff0c\u606d\u559c\u6b66\u78ca\uff0c\u5e0c\u671b\u6b66\u78ca\u7834\u4e86\u57c3\u5c14\u514b\u68ee\u5355\u8d5b\u5b6328\u7403\u4e2d\u8d85\u8fdb\u7403\u8bb0\u5f55", "up": 6}, {"content": "\u57c3\u5c14\u514b\u68ee\u8bf4\u5144\u5f1f\u6211\u768428\u7403\u7ec8\u4e8e\u4fdd\u4f4f\u4e86", "up": 5}], "2": [{"content": "\u6211\u662f\u4e0a\u6d77\u4eba \u8bf4\u51e0\u70b91.\u6052\u5927\u66f4\u6709\u63a7\u5236\u529b \u4e09\u4e2a\u5916\u63f4\u5f88\u5f3a 2.\u4e0a\u6e2f\u80e1\u5c14\u514b\u592a\u6bd2 \u597d\u591a\u673a\u4f1a\u90fd\u88ab\u4ed6\u6325\u970d \u5965\u65af\u5361\u7684\u4f20\u7403\u592a\u9a9a \u57c3\u5c14\u514b\u68ee\u5c04\u672f\u592a\u597d3.\u6bd4\u5206\u7684\u5929\u5e73\u4e0d\u5728\u4e8e\u5916\u63f4\u800c\u5728\u4e8e\u56fd\u5185 \u53c2\u7167\u6b66\u7403\u738b\u548c\u90dc\u98de\u673a4.\u6052\u5927\u7403\u98ce\u53ef\u4ee5 \u6709\u5f3a\u8005\u98ce\u8303 \u4e0d\u8fc7\u591a\u7ea0\u7f20\u88c1\u5224 \u52a8\u4f5c\u4e5f\u63a7\u5236\u4e0d\u9519 \u76f8\u6bd4\u4e8e\u67d0\u961f\u597d\u592a\u591a5.\u4e0a\u6e2f\u53bb\u5e74\u88ab\u4e3b\u6559\u7ec3\u5751\u4e86 \u8282\u594f\u4e5f\u88ab\u5e26\u4e86\u592a\u591a \u88ab\u5168\u56fd\u4eba\u6c11\u4e0d\u5f85\u89c1\u4e86 \u8fd8\u662f\u8981\u62ff\u6210\u7ee9\u8bf4\u8bdd \u4e0d\u8981\u62d8\u6ce5\u4e8e\u8d5b\u573a\u5916\u7684\u4e1c\u897f \u8e22\u7403\u8fd8\u662f\u5f88\u597d\u770b\u7684 \u552f\u4e00\u53ef\u4ee5\u8ddf\u6052\u5927\u6273\u624b\u8155\u76846.\u88c1\u5224\u5f88\u51fa\u8272 \u5c31\u662f\u6700\u540e\u8865\u4e86\u7a0d\u5fae\u957f\u4e86\u70b9 \u4e0d\u8fc7\u8003\u8651\u8865\u65f6\u9636\u6bb5\u6709\u7403\u5458\u53d7\u4f24\u4e5f\u5ffd\u7565\u4e0d\u8ba1\u4e867.\u6b66\u78ca\u62ff\u91d1\u9774", "up": 14}, {"content": "\u606d\u559c\u4e0a\u6e2f\u593a\u51a0\uff0c\u6211\u4e4b\u524d\u8bf4\u4e0a\u6e2f\u7684\u6253\u6cd5\u5f88\u597d\uff0c\u8fd8\u6709\u4e9b\u4eba\u55b7\u6211\uff0c\u6211\u8c01\u7684\u7403\u8ff7\u90fd\u4e0d\u662f\uff0c\u4f5c\u4e3a\u65c1\u89c2\u8005\u53ea\u6b23\u8d4f\u8868\u73b0\u597d\u7684\u4e00\u65b9\uff0c\u6bcb\u5eb8\u7f6e\u7591\u4e0a\u6e2f\u7684\u6253\u6cd5\u4e2d\u8d85\u662f\u6700\u597d\u7684\uff0c\u4e3b\u8981\u662f\u8f6c\u79fb\u7403\u901f\u5ea6\u65b9\u9762\u6bd4\u6052\u5927\u5f3a\uff0c\u4e8e\u6c49\u8d85\u548c\u90d1\u667a\u6362\u4e0b\u573a\u4e00\u5207\u90fd\u6539\u53d8\u4e86\uff0c\u5176\u4ed6\u7684\u4e2d\u8d85\u7403\u961f\u4e5f\u8981\u591a\u5b66\u5b66\u4e0a\u6e2f\u7684\u6253\u6cd5\uff0c\u6211\u9884\u6d4b\u4e0a\u6e2f\u660e\u5e74\u8fd8\u4f1a\u5f15\u8fdb\u4e00\u4e2a\u5916\u63f4\u524d\u950b\uff0c\u66ff\u6362\u57c3\u5c14\u514b\u68ee\uff0c\u6052\u5927\u4e5f\u4f1a\u5728\u5f15\u8fdb\u5916\u63f4\u7684\uff0c\u56e0\u4e3a\u963f\u5170\u548c\u9ad8\u62c9\u7279\u5728\u4e2d\u8d85\u4e0d\u7b97\u51fa\u8272\u7684\uff0c\u606d\u559c\u6b66\u78ca\uff0c\u5e0c\u671b\u6709\u7684\u7f51\u53cb\u4e0d\u8981\u55b7\u6211\uff0c\u6211\u4eec\u770b\u7684\u5c31\u662f\u4e00\u4e2a\u7cbe\u5f69\uff0c\u6d89\u53ca\u4e0d\u5230\u4ec0\u4e48\u4ec7\u6068\uff0c\u82b1\u65e0\u767e\u65e5\u7ea2\uff0c\u66f4\u65b0\u6362\u4ee3\u5f88\u6b63\u5e38\uff0c\u6211\u4e4b\u524d\u8bf4\u4e86\u4e0a\u6e2f\u4f1a\u572818\u5e74\u4e4b\u540e\u7edf\u6cbb\u4e2d\u8d85\uff0c\u4e0a\u6e2f\u80fd\u591f\u8d85\u8d8a\u6052\u5927\u76847\u51a0\u738b\uff01\u4e0d\u7ba1\u4f60\u662f\u6052\u5927\u7684\u7403\u8ff7\u8fd8\u662f\u4e0a\u6e2f\u7684\u7403\u8ff7\uff0c\u5343\u4e07\u4e0d\u8981\u55b7\uff0c\u770b\u6bd4\u8d5b\u770b\u5185\u5bb9\u770b\u7cbe\u5f69\u7a0b\u5ea6\uff0c\u6bd4\u8d5b\u80af\u5b9a\u4f1a\u5206\u51fa\u80dc\u8d1f\uff0c\u8c01\u8f93\u8c01\u8d62\u90fd\u8981\u770b\u5f00\u4e00\u4e9b\uff0c\u8d62\u5f97\u4e00\u65b9\u5fc5\u5b9a\u6709\u8fc7\u4eba\u4e4b\u5904\uff0c\u7406\u6027\u770b\u7403\uff0c\u606d\u559c\u4e0a\u6e2f\uff0c\u606d\u559c\u7403\u738b\u6b66\u78ca\uff01\uff01\uff01", "up": 9}, {"content": "\u4e25\u683c\u610f\u4e49\u4e0a\u8bb2\uff0c\u6052\u5927\u7684\u4e09\u4e2a\u8fdb\u7403\u88ab\u5439\u662f\u6b63\u786e\u7684\uff0c\u4f46\u662f\u57c3\u5c14\u514b\u68ee\u90a3\u7403\u4e5f\u5e94\u8be5\u88ab\u5224\u65e0\u6548\uff0c\u57c3\u795e\u6ca1\u95ee\u9898\uff0c\u4f46\u662f\u4efb\u610f\u7403\u5f00\u51fa\u7684\u65f6\u5019\u4e0a\u6e2f\u7403\u5458\u628a\u5854\u5229\u65af\u5361\u63a8\u5012\u4e86\uff01\u8f93\u5c31\u8f93\u4e86\uff0c\u73b0\u5728\u7279\u522b\u671f\u5f85\u56fd\u5b89VS\u4e0a\u6e2f\u7684\u6bd4\u8d5b\uff0c\u770b\u770b\u88c1\u5224\u662f\u600e\u4e48\u82f1\u660e\u795e\u6b66\u7684", "up": 7}, {"content": "\u4eca\u5929\u7684\u950b\u7ebf\uff0c\u57c3\u5c14\u514b\u68ee\uff0c\u80e1\u5c14\u514b\uff0c\u5965\u65af\u5361\u90fd\u8868\u73b0\u5f97\u592a\u51fa\u8272\u4e86\uff0c\u9002\u65f6\u9000\u56de\u4e2d\u573a\u9632\u5b88\u8d77\u4e86\u5173\u952e\u4f5c\u7528\uff0c\u5434\u78ca\u90a3\u5f00\u573a50\u79d2\u63a5\u57c3\u5c14\u514b\u68ee\u7684\u90a3\u4e00\u811a\u5916\u811a\u80cc\u62bd\u5c04\u5165\u7f51\u68d2\u6781\u4e86\uff0c\u6700\u8fd1\u72b6\u6001\u4e5f\u6781\u4f73\uff0c\u56fd\u5bb6\u961f\u53cb\u8c0a\u8d5b\u4e5f\u662f\u6001\u5ea6\u6700\u79ef\u6781\u7684\u7403\u5458\uff0c\u771f\u7684\u662f\u6ca1\u5f97\u9ed1\u4e5f\u6ca1\u5f97\u55b7\u3002\u4e2d\u573a\u8521\u6167\u5eb7\u7684\u529f\u52b3\u662f\u5f88\u5927\u7684\uff0c\u62e6\u622a\u62a2\u65ad\u90fd\u62fc\u5c3d\u4e86\u5168\u529b\uff0c\u540e\u9632\u8d3a\u8d2f\uff0c\u77f3\u67ef\uff0c\u5085\u6b22\u548c\u738b\u71ca\u8d85\u90fd\u53d1\u6325\u51fa\u4e86\u6b63\u5e38\u6c34\u5e73\uff0c\u53ea\u4e0d\u8fc7\u9020\u8d8a\u4f4d\u90a3\u51e0\u4e0b\u6709\u70b9\u8ba9\u4eba\u611f\u5230\u5bb3\u6015\uff0c\u66ff\u8865\u5415\u6587\u541b\u6362\u9648\u5f6c\u5f6c\u6b63\u662f\u65f6\u5019\uff0c\u8865\u4f4d\u7cbe\u786e\uff0c\u5168\u529b\u62fc\u62a2\uff0c\u95e8\u5c06\u989c\u9a8f\u51cc\u7684\u9ad8\u5149\u8868\u73b0\uff0c\u6251\u51fa\u7684\u51e0\u4e2a\u7403\u592a\u5173\u952e\u4e86\uff0c\u4f69\u96f7\u62c9\u7684\u6218\u672f\u5f88\u6210\u529f\uff0c\u9ad8\u4f4d\u9650\u5236\u9ad8\u62c9\u7279\uff0c\u4fdd\u5229\u5c3c\u5965\u548c\u5854\u5229\u65af\u5361\u7684\u76f8\u4e92\u4f20\u7403\uff0c\u9632\u4f4f\u4e86\u808b\u90e8\u76f4\u585e\u7684\u7a7a\u6321\uff0c\u51e0\u6b21\u7a7a\u5207\u4f20\u8eab\u540e\u9020\u5c31\u4e86\u4e86\u4fdd\u5229\u5c3c\u5965\u7684\u4e00\u6b21\u624b\u7403\u548c\u4e24\u6b21\u8d8a\u4f4d\u548c\u4e24\u6b21\u672c\u65b9\u7acb\u67f1\u6551\u9669\uff0c\u5bf9\u4e8e\u4e0a\u6e2f\u5168\u961f\u4e5f\u662f\u7279\u522b\u5e78\u8fd0\u7684\u4e86\u3002\u8fd8\u6709\u4e24\u70b9\uff1a\u2460\u90dc\u6797\u90a3\u7403\u6253\u4e0a\u4e86\u770b\u53f0\uff0c\u4e0d\u7136\u771f\u6709\u53ef\u80fd\u662f\u4e2a\u5e73\u5c40\uff1b\u2461\u4e0a\u534a\u573a\u8865\u4e866\u5206\u949f\uff0c\u4e0b\u534a\u573a\u56e0\u4e3a\u8521\u6167\u5eb7\u62bd\u7b4b\uff0c6\u5206\u949f\u53c8\u591a\u8865\u4e862\u5206\u949f\uff0c\u5168\u573a\u4e0a\u6e2f30%\u5bf9\u6bd4\u6052\u592760%\u7684\u63a7\u7403\u7387\uff0c\u8fd8\u6ca1\u8d62\u4e0b\u6bd4\u8d5b\uff0c\u8bf4\u660e\u4e0a\u6e2f\u628a\u63e1\u673a\u4f1a\u7684\u80fd\u529b\u81f3\u5c11\u672c\u573a\u770b\u6765\u662f\u4f18\u4e8e\u6052\u5927\u7684\u3002\u5230\u5e95\u662f\u6052\u5927\u7403\u5458\u8eab\u4f53\u5df2\u7ecf\u5f88\u75b2\u52b3\u4e86\uff0c\u8fd8\u662f\u4e3b\u6559\u7ec3\u5361\u7eb3\u74e6\u7f57\u7684\u6218\u672f\u5b89\u6392\u548c\u4e34\u573a\u8c03\u6574\u6709\u95ee\u9898\u3002\u7ed3\u5c3e\u6211\u8fd8\u60f3\u95ee\u4e00\u4e0b\u827e\u54c8\u8fc8\u591a\u592b\u662f\u4ec0\u4e48\u60c5\u51b5\uff0c\u662f\u4f24\u505c\u8fd8\u662f\u7d2f\u79ef\u9ec4\u724c\u505c\u8d5b", "up": 7}, {"content": "\u8fd9\u573a\u6bd4\u8d5b\u8f93\u4e86\uff0c\u8eab\u4e3a\u6052\u5927\u7403\u8ff7\uff0c\u670d\u3002\u88c1\u5224\u6ca1\u95ee\u9898\uff0c\u795d\u8d3a\u57c3\u5c14\u514b\u68ee\u8fdb\u7403\uff0c\u6b66\u78ca\u5355\u5200\u6253\u95e8\u6f02\u4eae\uff0c\u989c\u9a8f\u51cc\u7a33\u5982\u8001\u72d7\uff0c\u8f93\u7403\u90fd\u662f\u6052\u5927\u81ea\u8eab\u95ee\u9898\uff0c\u90dc\u6797\u771f\u5b9e\u5f97\u53ef\u6015\uff0c\u6ca1\u6709\u90d1\u667a\u7684\u4e2d\u573a\u6ca1\u63a7\u5236\uff0c\u6768\u7acb\u745c\u5904\u7406\u7403\u8ddf\u6211\u4e00\u6837\u70c2\uff0c\u606d\u559c\u4e0a\u6e2f\u8d62\u7403\uff0c\u4f46\u662f\u5e7f\u5dde\u672a\u8d62\u591f\uff01\u4e89\u51a0\u8fd8\u5728\u7ee7\u7eed\u3002", "up": 6}]};
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
