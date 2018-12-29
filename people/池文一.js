var data = {"person_name": "\u6c60\u6587\u4e00", "nicknames": "\u6c60\u6587\u4e00", "aspects": {"\u7403\u8ff7": 0.5107085137580717, "\u8d5b\u5b63": 0.45629090158104746, "\u6bd4\u8d5b": 0.5132902440366253, "\u5f3a\u961f": 0.9775851672580467, "\u56fd\u95e8": 0.008017235384497839, "\u7403\u5458": 0.43006167306684523, "\u66ff\u8865": 0.5686113407122844, "\u8db3\u534f\u676f": 0.0, "\u51fa\u51fb": 0.2365869238554669, "\u540e\u9632": 0.2651759476358561}, "overall_heat": 53.0, "overall_polar": -0.132, "name": "70", "nationality": "\u4e2d\u56fd", "position": "\u5b88\u95e8\u5458", "goal": "0", "assist": "0", "team_name": "\u5317\u4eac\u4e2d\u8d6b\u56fd\u5b89", "name_en": "Chi Wenyi", "age": "30", "height": "183", "weight": "70"};
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
var topic_keywords = {"0": [{"name": "\u6c60\u6587\u4e00", "value": 0.08684117438981252}, {"name": "\uff01", "value": 0.028475415634948712}, {"name": "\u56fd\u5b89", "value": 0.028475415634948712}, {"name": "\u4faf\u68ee", "value": 0.02493809692253272}, {"name": "\uff1f", "value": 0.023169437566324728}, {"name": "\u4e70", "value": 0.019632118853908736}, {"name": "\u95e8\u5c06", "value": 0.016094800141492747}, {"name": "\u5ef6\u8fb9", "value": 0.016094800141492747}, {"name": "\u4e0d\u7528", "value": 0.010788822072868765}, {"name": "\u65bd\u5bc6\u7279", "value": 0.010788822072868765}, {"name": "\u4e00\u76f4", "value": 0.00902016271666077}, {"name": "\u8868\u73b0", "value": 0.00902016271666077}, {"name": "\u7403\u8ff7", "value": 0.00902016271666077}, {"name": "\u82cf\u5b81", "value": 0.00902016271666077}, {"name": "\u6bd4\u8d5b", "value": 0.007251503360452776}, {"name": "\u673a\u4f1a", "value": 0.007251503360452776}, {"name": "\u4e4b\u524d", "value": 0.007251503360452776}, {"name": "\u5b88\u95e8\u5458", "value": 0.007251503360452776}, {"name": "\u4eca\u5929", "value": 0.005482844004244783}, {"name": "\u5e0c\u671b", "value": 0.005482844004244783}, {"name": "\u5317\u4eac", "value": 0.005482844004244783}, {"name": "\u57f9\u517b", "value": 0.005482844004244783}, {"name": "\u786e\u5b9e", "value": 0.005482844004244783}, {"name": "\u8d5b\u5b63", "value": 0.005482844004244783}, {"name": "\u6559\u7ec3", "value": 0.005482844004244783}, {"name": "\u7403\u5458", "value": 0.005482844004244783}, {"name": "\u8fc7\u6765", "value": 0.005482844004244783}, {"name": "\u73b0\u5728", "value": 0.005482844004244783}, {"name": "?", "value": 0.005482844004244783}, {"name": "\u597d", "value": 0.005482844004244783}], "1": [{"name": "\u6c60\u6587\u4e00", "value": 0.04218880534670008}, {"name": "\u4e00\u4e2a", "value": 0.017126148705096073}, {"name": "\u54ed", "value": 0.017126148705096073}, {"name": "\u80fd\u529b", "value": 0.017126148705096073}, {"name": "\uff1b", "value": 0.017126148705096073}, {"name": "\u9996\u53d1", "value": 0.012949039264828738}, {"name": "\u4e0d\u9519", "value": 0.012949039264828738}, {"name": "\u6734\u6210", "value": 0.012949039264828738}, {"name": "\u6c60\u5fe0\u56fd", "value": 0.012949039264828738}, {"name": "\u56fd\u5b89", "value": 0.012949039264828738}, {"name": "\u592a", "value": 0.012949039264828738}, {"name": "\u8e22", "value": 0.012949039264828738}, {"name": "\u7b11", "value": 0.012949039264828738}, {"name": "\u597d", "value": 0.012949039264828738}, {"name": "\u4e0d\u7528", "value": 0.008771929824561403}, {"name": "\u97e6\u4e16\u8c6a", "value": 0.008771929824561403}, {"name": "\u674e\u78ca", "value": 0.008771929824561403}, {"name": "\u4faf\u68ee", "value": 0.008771929824561403}, {"name": "\u7403", "value": 0.008771929824561403}, {"name": "\u540e\u536b", "value": 0.008771929824561403}, {"name": "\u540e\u8170", "value": 0.008771929824561403}, {"name": "\u8fd9\u573a", "value": 0.008771929824561403}, {"name": "U23", "value": 0.008771929824561403}, {"name": "\u786c", "value": 0.008771929824561403}, {"name": "\u4e8e\u6d0b", "value": 0.008771929824561403}, {"name": "\u66ff\u8865", "value": 0.008771929824561403}, {"name": "\u77e5\u9053", "value": 0.008771929824561403}, {"name": "\u7d22\u91cc\u4e9a\u8bfa", "value": 0.008771929824561403}, {"name": "\u95e8\u5c06", "value": 0.008771929824561403}, {"name": "\u5df4\u574e\u5e03", "value": 0.008771929824561403}]};
var topic_summary = {"0": [{"content": "\u8fd9u23\u95e8\u5c06\u9996\u6b21\u4eae\u76f8\u5c31\u8fd9\u4e48\u60ca\u8273\uff1f\u8ddf\u6c60\u6587\u4e00\u6709\u4e00\u62fc\uff0c\u771f\u5389\u5bb3\uff01", "up": 292}, {"content": "\u6709\u70b9\u4e0d\u7406\u89e3 \u56fd\u5b89\u4e70\u4e86\u5ef6\u8fb9\u7684\u95e8\u5c06\u6c60\u6587\u4e00\u4e3a\u5565\u4e0d\u7528\uff01\uff01\uff01\uff01\u591a\u597d\u7684\u95e8\u5c06\u554a", "up": 207}, {"content": "\u56fd\u5b89\u6700\u5927\u7684\u8f6f\u808b\u5b88\u95e8\u5458\uff01\u6c60\u6587\u4e00\u4e3a\u4ec0\u4e48\u9ad8\u4ef7\u4e70\u8fc7\u6765\u4e0d\u7528?", "up": 146}, {"content": "\u90ed\u5168\u535a\u8981\u662f\u8e22\u51fa\u6765\u4e86\uff0c\u6768\u667a\u4faf\u68ee\u6c60\u6587\u4e00\u7ec4\u961f\u51c9\u51c9\u2026", "up": 143}, {"content": "\u56fd\u5b89\u4e70\u4e86\u90a3\u4e48\u591a\u5ef6\u8fb9\u7403\u5458\u600e\u4e48\u4e00\u4e2a\u90fd\u4e0d\u7528?\uff01\u6c60\u5fe0\u56fd\uff0c\u6c60\u6587\u4e00\uff0c\u6734\u6210\uff0c\u91d1\u6cf0\u960e\uff0c\u96be\u5012\u4e0d\u6bd4\u8fd9\u4e9b\u9996\u53d1\u56fd\u5185\u7403\u5458\u5f3a?\uff01\u56fd\u5b89\u8fd9\u662f\u81ea\u4f5c\u5b7d\u4e0d\u53ef\u6d3b\uff01", "up": 15}], "1": [{"content": "\u5ba2\u89c2\u8bc4\u7403\u3002\u56fd\u5b89\u8fd9\u8fb9\u65bd\u5bc6\u7279\u8fd9\u573a\u8981\u5e72\u4ec0\u4e48\u6211\u6ca1\u770b\u61c2\u3002\u5355\u4ece\u8fd9\u573a\u6765\u770b\uff0c\u5df4\u574e\u5e03\u662f\u4e0d\u662f\u6c34\u8d27\u4e0d\u597d\u8bf4\uff0c\u4f46\u663e\u7136\u4e0d\u662f\u9ed1\u53c8\u786c\u81ea\u5df1\u5355\u5e72\u7c7b\u578b\u7684\uff0c\u5c0f\u6280\u672f\u770b\u8d77\u6765\u4e5f\u4e0d\u5982\u7d22\u91cc\u4e9a\u8bfa\uff0c\u518d\u770b\u4e24\u573a\u518d\u8bf4\u5427\uff0c\u4f46\u8fd9\u4e24\u4e2a\u524d\u950b\u4e0d\u80fd\u540c\u65f6\u4e0a\u4e86\u3002\u664b\u9e4f\u7fd4\u662f\u7edd\u5bf9\u4e0d\u80fd\u7528\u4e86\uff0c\u4f5c\u4e2d\u536b\u592a\u6bdb\u7cd9\uff0c\u4f5c\u4e3a\u8fb9\u536b\u66f4\u4e0d\u884c\u3002\u65b0\u6765\u7684\u90a3\u4e2a\u5218\u6b22\u66ff\u8865\u7528\u7528\u8fd8\u884c\uff0c\u6253\u4e0d\u4e86\u9996\u53d1\u3002\u540e\u8170\u6734\u6210\u548c\u6c60\u5fe0\u56fd\u81f3\u5c11\u4e0a\u4e00\u4e2a\uff0c\u628a\u50b2\u9aa8\u9876\u5230\u524d\u8170\u4e0a\u3002\u95e8\u5c06\u4faf\u68ee\u53cd\u5e94\u548c\u5f00\u5927\u811a\u80fd\u529b\u582a\u5fe7\uff0c\u4e0d\u77e5\u9053\u4e3a\u5565\u4e0d\u7528\u6c60\u6587\u4e00\u3002\u674e\u78ca\u8fd8\u662f\u653e\u5728\u5de6\u540e\u536b\u4e0a\u5427\uff0c\u51fa\u7403\u80fd\u529b\u548c\u5927\u5c40\u89c2\u8e22\u4e0d\u4e86\u540e\u8170\u3002U23\u9996\u53d1\u7528\u5df4\u987f\u6bd4\u8f83\u597d\uff0c\u97e6\u4e16\u8c6a\u662f\u4e00\u4e2a\u96f7\uff0c\u9996\u53d1\u98ce\u9669\u592a\u5927\uff0c\u53ef\u4ee5\u7528\u505a\u66ff\u8865\u5947\u5175\u3002\u8fd9\u6837\u4e0b\u6765\uff0c\u9635\u5bb9\u53ef\u4ee5\u662f\u8fd9\u6837:\u6c60\u6587\u4e00\uff1b\u674e\u78ca\uff0c\u4e8e\u6d0b\uff0c\u96f7\u817e\u9f99\uff0c\u59dc\u6d9b\uff1b\u6c60\u5fe0\u56fd\uff0c\u6734\u6210\uff08\u5415\u9e4f\uff09\uff1b\u6bd4\u57c3\u62c9\uff0c\u5965\u53e4\u65af\u6258\uff0c\u5df4\u987f\uff08\u97e6\u4e16\u8c6a\uff09\uff1b\u5df4\u574e\u5e03\uff08\u7d22\u91cc\u4e9a\u8bfa\uff09\u3002\u9c81\u80fd\u8fd9\u8fb9\u4eca\u5929\u8e22\u5f97\u4e0d\u9519\uff0cU23\u59da\u5747\u665f\u4e0d\u9519\uff0c\u811a\u6cd5\u548c\u7ec4\u7ec7\u80fd\u529b\u4ee5\u540e\u53ef\u4ee5\u63a5\u84bf\u4fca\u95f5\u7684\u73ed\u4e86\u3002\u9c81\u80fd\u7684\u4eba\u624d\u50a8\u5907\u77ed\u671f\u5185\u4e5f\u4e0d\u7528\u5728\u5927\u9762\u79ef\u4e70\u4eba\u4e86\uff0c\u627e\u4e2a\u597d\u6559\u7ec3\u591a\u591a\u6253\u78e8\u5427\uff0c\u672a\u6765\u53ef\u671f\u3002", "up": 20}, {"content": "\u6c60\u6587\u4e00\u662f\u4f24\u5417\uff0c\u4faf\u68ee\u592a\u4e0d\u7a33\u5b9a\u4e86", "up": 9}, {"content": "\u6c60\u6587\u4e00\u54ed\u6655\u5728\u5395\u6240", "up": 8}, {"content": "\u8fd9\u4e8e\u6d0b\u771f\u662f\u4e2a\u5927\u5751\uff01\u9664\u4e862\u4e2a\u4e22\u7403\u8ddf\u4ed6\u6709\u76f4\u63a5\u5173\u7cfb\uff0c\u6bcf\u6b21\u89e3\u56f4\u7403\u4e0d\u662f\u8e22\u803b\u5c31\u662f\u8e22\u50cf\u672c\u65b9\uff0c\u505c\u7403\u90fd\u505c\u523010m\u8fdc\uff0c\u56fd\u5b89\u8981\u4e89\u51a0\uff0c\u5fc5\u987b\u6362\u4e2d\u540e\u536b\uff0c\u8fd8\u6709\u95e8\u5c06\u5fc5\u987b\u4e0a\u6c60\u6587\u4e00\u3002", "up": 8}, {"content": "\u4e3a\u4ec0\u4e48\u4e0d\u4e0a\u6c60\u6587\u4e00\u554a \u6655", "up": 5}]};
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
