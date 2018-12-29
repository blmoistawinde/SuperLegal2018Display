var data = {"person_name": "\u4e8e\u6d77", "nicknames": "\u4e8e\u6d77", "aspects": {"\u624b\u7403": 0.4225328243027295, "\u8d8a\u4f4d": 0.19964874728216425, "\u7403\u5458": 0.46085756329425737, "\u8fdb\u653b": 0.46954590825140263, "\u56fd\u5bb6\u961f": 0.4841756674170748, "\u70b9\u7403": 0.3296020154130873, "\u6bd4\u8d5b": 0.5369078022135806, "\u9632\u5b88": 0.7545536054148408, "\u72af\u89c4": 0.42586554422162787, "\u5934\u7403": 0.8671878258216412}, "overall_heat": 74.0, "overall_polar": -0.159, "name": "33", "nationality": "\u4e2d\u56fd", "position": "\u540e\u536b", "goal": "3", "assist": "4", "team_name": "\u4e0a\u6d77\u4e0a\u6e2f", "name_en": "Yu Hai", "age": "31", "height": "183", "weight": "70"};
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
var topic_keywords = {"0": [{"name": "\u4e8e\u6d77", "value": 0.042987701681146344}, {"name": "\u4e0a\u6e2f", "value": 0.036217984880965816}, {"name": "\u6052\u5927", "value": 0.02944826808078529}, {"name": "\u6b66\u78ca", "value": 0.017037120613787655}, {"name": "\u56fd\u5bb6\u961f", "value": 0.012523976080333973}, {"name": "\u7403\u5458", "value": 0.011395689946970551}, {"name": "\u597d", "value": 0.010267403813607131}, {"name": "\uff1f", "value": 0.00913911768024371}, {"name": "\u7b2c\u4e00", "value": 0.00913911768024371}, {"name": "\u63a7\u5236", "value": 0.00913911768024371}, {"name": "\u5730\u9762", "value": 0.006882545413516868}, {"name": "\u4e0d\u9519", "value": 0.006882545413516868}, {"name": "\u80fd\u529b", "value": 0.006882545413516868}, {"name": "\u53d7\u4f24", "value": 0.006882545413516868}, {"name": "\u6bd4\u8d5b", "value": 0.006882545413516868}, {"name": "\u9632\u5b88", "value": 0.006882545413516868}, {"name": "\u5934\u7403", "value": 0.006882545413516868}, {"name": "\uff01", "value": 0.006882545413516868}, {"name": "\u4e00\u70b9", "value": 0.005754259280153447}, {"name": "\u8e22", "value": 0.005754259280153447}, {"name": "\u88c1\u5224", "value": 0.005754259280153447}, {"name": "\u51a0\u519b", "value": 0.005754259280153447}, {"name": "\u786e\u5b9e", "value": 0.005754259280153447}, {"name": "\u7a81\u7834", "value": 0.005754259280153447}, {"name": "\u4e2d\u8d85", "value": 0.005754259280153447}, {"name": "\u6001\u5ea6", "value": 0.004625973146790026}, {"name": "\u4e2d\u8def", "value": 0.004625973146790026}, {"name": "\u56fd\u5185", "value": 0.004625973146790026}, {"name": "\u5df2\u7ecf", "value": 0.004625973146790026}, {"name": "\u4eba\u7269", "value": 0.004625973146790026}], "1": [{"name": "\u4e8e\u6d77", "value": 0.057488099597217145}, {"name": "\u8d8a\u4f4d", "value": 0.030635908702550962}, {"name": "\u624b\u7403", "value": 0.026974246307823756}, {"name": "\uff01", "value": 0.01720981325521787}, {"name": "\u4e0a\u6e2f", "value": 0.01720981325521787}, {"name": "\u88c1\u5224", "value": 0.012327596728914928}, {"name": "\uff1f", "value": 0.011107042597339193}, {"name": "\u8d5b\u5b63", "value": 0.011107042597339193}, {"name": "\u5224", "value": 0.009886488465763456}, {"name": "\u7403", "value": 0.009886488465763456}, {"name": "\u5148", "value": 0.009886488465763456}, {"name": "\u6700\u540e", "value": 0.009886488465763456}, {"name": "\u70b9\u7403", "value": 0.008665934334187721}, {"name": "\u4e4b\u524d", "value": 0.008665934334187721}, {"name": "\u8fdb\u653b", "value": 0.008665934334187721}, {"name": "\u56fd\u5b89", "value": 0.007445380202611986}, {"name": "\u7533\u82b1", "value": 0.007445380202611986}, {"name": "\u4eba", "value": 0.007445380202611986}, {"name": "\u89c6\u9891", "value": 0.007445380202611986}, {"name": "\u78b0\u5230", "value": 0.00622482607103625}, {"name": "\u72af\u89c4", "value": 0.00622482607103625}, {"name": "\u5218\u6b22", "value": 0.005004271939460515}, {"name": "\u53c2\u4e0e", "value": 0.005004271939460515}, {"name": "\u95ee\u9898", "value": 0.005004271939460515}, {"name": "\u80e1\u5c14\u514b", "value": 0.005004271939460515}, {"name": "\u76f4\u64ad", "value": 0.005004271939460515}, {"name": "\u786e\u5b9e", "value": 0.005004271939460515}, {"name": "\u6253\u6cd5", "value": 0.00378371780788478}, {"name": "\u89e6\u7403", "value": 0.00378371780788478}, {"name": "\u4e3b\u573a", "value": 0.00378371780788478}]};
var topic_summary = {"0": [{"content": "\u6052\u5927\u63a7\u5236\u4e86\u8db3\u534f\u8d5b\u7a0b\u8ba9\u4e0a\u6e2f\u6253\u5f3a\u961f\u6052\u5927\u6253\u5f31\u961f\uff0c\u6052\u5927\u63a7\u5236\u4e86\u88c1\u5224\u8fd9\u573a\u6ca1\u6709\u6d3e\u9a6c\u5b81\uff0c\u6052\u5927\u63a7\u5236\u4e86\u82cf\u5b81\u8ba9\u82cf\u5b81\u6218\u6597\u529b\u4e0a\u5347\uff0c\u6052\u5927\u63a7\u5236\u4e86\u4f69\u96f7\u62c9\u8ba9\u4ed6\u9f13\u638c\u88ab\u7981\u8d5b\uff0c\u6052\u5927\u63a7\u5236\u4e86\u91cc\u76ae\u8ba9\u4e8e\u6d77\u4e0a\u573a\u53d7\u4f24\uff0c\u6052\u5927\u63a7\u5236\u4e86\u5927\u5c41\u80a1\u8ba9\u4ed6\u62ff\u9ec4\u6d3e\u7981\u8d5b\uff0c\u6052\u5927\u63a7\u5236\u4e86\u5931\u8d25\u8005\u8054\u76df\u8ba9\u8054\u76df\u6ca1\u8f93\u7403\u7ed9\u4e0a\u6e2f\uff0c\u6052\u5927\u63a7\u5236\u4e86\u4e00\u5207\u5df2\u7ecf\u62ff\u4e867\u5e74\u51a0\u519b\u4e86\uff0c\u8fd9\u7b2c\u516b\u5e74\u8fd8\u60f3\u62ff\uff1f", "up": 10}, {"content": "\u6211\u89c9\u5f97\u4e8e\u6d77\u5f88\u4e0d\u9519\u6ca1\u6709\u8d1f\u9762\u65b0\u95fb,\u8fd9\u4e48\u591a\u5e74\u4e86\u4e00\u76f4\u5728\u573a\u52e4\u52e4\u6073\u6073\uff0c\u4e0d\u77e5\u9053\u4e3a\u4ec0\u4e48\u8fd9\u4e48\u9ed1\u4ed6", "up": 9}, {"content": "\u771f\u7684\u4e0a\u6e2f\u7403\u8ff7\u8d5b\u524d\u5fd0\u5fd1 \u8db3\u89c1\u5bf9\u5c71\u4e1c\u5b9e\u529b\u7684\u8ba4\u53ef \u800c\u6052\u5927\u7403\u8ff7\u5e0c\u671b\u5c71\u4e1c\u963b\u51fb\u4e0a\u6e2f \u90fd\u53ef\u4ee5\u7406\u89e3 \u4e0b\u5348\u6211\u8fd8\u5e0c\u671b\u6052\u4e30\u54ea\u6015\u4ece\u6052\u5927\u8eab\u4e0a\u62ff\u4e00\u5206\u5462 \u5e73\u5fc3\u800c\u8bba \u4e0a\u6e2f\u4e3a\u4ec0\u4e48\u4e0d\u80fd\u62ff\u4e00\u6b21\u51a0\u519b \u4ed6\u4eec\u90fd\u90a3\u4e48\u52aa\u529b \u4e8e\u6d77\u56fd\u5bb6\u5bf9\u6bd4\u8d5b\u53d7\u4f24 \u6b66\u78ca\u56fd\u5bb6\u961f\u6bd4\u8d5b\u573a\u573a\u51fa\u5de5\u51fa\u529b \u4e0d\u8fc7\u4f60\u4eec\u600e\u4e48\u9ed1\u738b\u9879\u94fe \u5730\u94c1\u6b22 \u56de\u53bb\u770b\u770b\u4f60\u4eec\u4e3b\u961f\u7684\u540e\u536b\u771f\u7684\u6709\u4ed6\u4eec\u597d\u4e48 \u4e0d\u89c1\u5f97 \u8bf4\u4e86\u90a3\u4e48\u591a \u8fd8\u662f\u5e0c\u671b\u4e0a\u6e2f\u8d8a\u6765\u8d8a\u597d", "up": 7}, {"content": "\u987e\u8d85\u8fd8\u662f\u9000\u5f79\u5427\uff0c\u534e\u800c\u4e0d\u5b9e\u3002\u5361\u4f69\u7f57\u4e0b\u8bfe\u5427\uff0c\u610f\u5927\u5229\u8db3\u7403\u5df2\u7ecf\u8fc7\u65f6\u4e86\u3002\u9ec4\u601d\u660c\u56de\u4e2d\u7532\u5728\u7ec3\u7ec3\u5427\uff0c\u7f57\u5708\u817f\u7a7a\u8dd1\u5bb9\u6613\u62bd\u7b4b\u3002\u7279\u8c22\u62c9\u56de\u56fd\u7c73\uff0c\u732a\u5e26\u4e0d\u52a8\u554a\u3002\u5982\u679c\u6ca1\u6709\u4e9a\u6d32\u4e8e\u6d77\uff5e\u5218\u5efa\u4e1a\u7684\u53d1\u6325\uff0c\u82cf\u5b81\u5f97\u8f935\u8f93\u4ee5\u4e0a\u3002", "up": 6}, {"content": "\u5439\u4e00\u6ce2\u4e8e\u6d77\uff0c\u5e26\u4f24\u575a\u6301\u5b8c\u4e86\u8fd1\u534a\u4e2a\u5c0f\u65f6\uff0c\u6559\u7ec3\u6ca1\u5e26\u4e8e\u54e5\u66ff\u8865\u8fc7\u6765\u554a", "up": 6}], "1": [{"content": "\u6162\u52a8\u4f5c\uff0c\u4e8e\u6d77\u7684\u786e\u6709\u72af\u89c4\uff0c\u4e8e\u6d77\u8fd9\u4e2a\u8d5b\u5b63\u6ca1\u5c11\u9001\u70b9\u4e86\uff0c\u5224\u70b9\u7403\u4e5f\u6ca1\u95ee\u9898\uff0c\u4f55\u51b5\u662f\u5728\u534e\u590f\u4e3b\u573a\u3002", "up": 172}, {"content": "\u8fd9\u573a\u88c1\u5224\u6536\u94b1\u4e86\uff0cVAR\u88c1\u5224\u4e5f\u6536\u94b1\u4e86.1\u738b\u71ca\u8d85\u7981\u533a\u88ab\u7eca\u5012\u662f\u70b9\u7403VAR\u63d0\u9192\u90fd\u4e0d\u63d0\u9192\uff0c2\u8d3a\u60ef\u843d\u4e0b\u6765\u8e29\u5230\u6cb3\u5357\u7403\u5458\u4e86\uff0cVAR\u7acb\u9a6c\u63d0\u9192\u53ef\u80fd\u662f\u7ea2\u724c\u30023\u80e1\u5c14\u514b\u7981\u533a\u90a3\u4e2a\uff0c\u5b88\u95e8\u5458\u51fa\u6765\u6839\u672c\u6ca1\u78b0\u5230\u7403\u76f4\u63a5\u649e\u5012\u80e1\u5c14\u514b\u30024\u674e\u5723\u9f99\u90a3\u4e2a\u88ab\u4fb5\u72af\u4e0d\u5439\uff0c\u7ed9\u4e8e\u6d77\u4e00\u5f20\u9ec4\u724c\u30025\u80e1\u5c14\u514b\u8fc7\u4eba\u540e\u88ab\u52fe\u5012\u4e0d\u5439\u3002678910\u771f\u662f\u778e", "up": 90}, {"content": "\u6700\u540e\u5224\u7f5a\u6ca1\u6bdb\u75c5\uff0c\u8981\u4e48\u4e8e\u6d77\u5148\u8d8a\u4f4d\uff0c\u8981\u4e48\u5c31\u662f\u4ed6\u5148\u624b\u7403\u3002\u53e6\u5e0c\u671b\u80e1\u5c14\u514b\u6ca1\u4e8b\uff0c\u4e0a\u6e2f\u4e9a\u51a0\u52a0\u6cb9\uff0c\u4e3a\u56fd\u4e89\u5149", "up": 12}, {"content": "\u76f4\u64ad\u5427\u603b\u662f\u641e\u8fd9\u4e9b\u4e4c\u9f99\u4e8b\u4ef6 \u76f4\u64ad\u6700\u540e\u7684\u90a3\u4e2a\u52a8\u56fe\u4e4b\u524d\u8fd8\u6709\u4e8e\u6d77\u7684\u624b\u7403 \u7ed3\u679c\u53ea\u7ed9\u770b\u5218\u6b22\u7684\u624b\u7403 \u5224\u7684\u5f53\u7136\u662f\u524d\u8005 \u4f46\u52a8\u56fe\u975e\u5e38\u8bef\u5bfc\u89c2\u4f17", "up": 10}, {"content": "\u5434\u78ca\u5440\uff0c\u5434\u78ca\u3002\u5982\u679c\u6211\u662f\u4f60\uff0c\u6211\u5c31\u6b7b\u4e86\u7b97\u4e86\u3002\u9ec4\u5065\u7fd4\u8bf4\u7684\u6ca1\u9519\u53c8\u662f\u4e00\u4e2a\u8feb\u51fb\u70ae\u5f0f\u8f70\u5230\u54ea\u91cc\uff01\u3002\u3002\u3002\u3002\u4e0a\u4e00\u573a\u4e9a\u51a0\u8054\u8d5b\u7edd\u4f73\u5f97\u5206\u673a\u4f1a\u3002\u8fde\u5c0f\u65e5\u672c\u7684\u5df2\u7ecf\u6295\u964d\u4e86\u3002\u4f60\u5c45\u7136\u8e22\u98de\uff0c\u771f\u662f\u65e0\u8bed\u3002\u3002\u3002\u3002\u3002\u4f60\u6bd4\u4e8e\u6d77\u66f4\u8ba8\u4eba\u538c\u3002", "up": 8}]};
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
