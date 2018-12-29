var data = {"person_name": "\u4e01\u6d77\u5cf0", "nicknames": "\u4e01\u6d77\u5cf0", "aspects": {"\u7403\u5458": 0.15541541485662488, "\u8fdb\u7403": 0.8166604384173868, "\u7403\u8ff7": 0.3742516902761987, "\u8fb9\u8def": 0.29872366459177446, "\u72af\u89c4": 0.4336642895143248, "\u5224\u7f5a": 0.04680791097469776, "\u4f20\u7403": 0.4645763876013634, "\u66ff\u8865\u5e2d": 1.0, "\u6bd4\u8d5b": 0.2173965908686777}, "overall_heat": 45.0, "overall_polar": 0.171, "name": "142", "nationality": "\u4e2d\u56fd", "position": "\u540e\u536b", "goal": "0", "assist": "1", "team_name": "\u5e7f\u5dde\u5bcc\u529b", "name_en": "Ding Haifeng", "age": "27", "height": "182", "weight": "71"};
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
var topic_keywords = {"0": [{"name": "#", "value": 0.2764014156867222}, {"name": "\u4eba\u540d", "value": 0.09144879552460326}, {"name": "\u672f\u8bed", "value": 0.033222970658751}, {"name": "\u7403\u961f", "value": 0.027514556456216466}, {"name": "##", "value": 0.025231190775202653}, {"name": "\uff01", "value": 0.0172394108916543}, {"name": "\u4e86", "value": 0.01609772805114739}, {"name": "\u4f4d\u7f6e", "value": 0.014956045210640484}, {"name": "\u554a", "value": 0.014956045210640484}, {"name": "\u7684", "value": 0.013814362370133577}, {"name": "\u4e00\u4e2a", "value": 0.010389313848612856}, {"name": "\u6211", "value": 0.00810594816759904}, {"name": "\u4e00\u6837", "value": 0.006964265327092134}, {"name": "\uff1f", "value": 0.006964265327092134}, {"name": "\u6765", "value": 0.006964265327092134}, {"name": "\ud83d\udca3", "value": 0.006964265327092134}, {"name": "\u4e09\u4e2a", "value": 0.005822582486585227}, {"name": "\u5f97", "value": 0.005822582486585227}, {"name": "\u4e5f", "value": 0.005822582486585227}, {"name": "\u2026", "value": 0.005822582486585227}, {"name": "\u4e00", "value": 0.005822582486585227}, {"name": "\u8bf4", "value": 0.005822582486585227}, {"name": "\u771f", "value": 0.005822582486585227}, {"name": "\u5bf9\u65b9", "value": 0.004680899646078319}, {"name": "\u52a0", "value": 0.004680899646078319}, {"name": "\u592a", "value": 0.004680899646078319}, {"name": "\u597d\u50cf", "value": 0.004680899646078319}, {"name": "\u90fd", "value": 0.004680899646078319}, {"name": "\u6ca1\u6709", "value": 0.004680899646078319}, {"name": "\u7403", "value": 0.004680899646078319}], "1": [{"name": "#", "value": 0.22914600054107673}, {"name": "\u4eba\u540d", "value": 0.07403733429524753}, {"name": "\u672f\u8bed", "value": 0.030751194877806833}, {"name": "\u7684", "value": 0.02894760573541347}, {"name": "##", "value": 0.022635043737036703}, {"name": "\u7403\u961f", "value": 0.022635043737036703}, {"name": "*", "value": 0.018126070881053297}, {"name": "\u4e86", "value": 0.01632248173865993}, {"name": "\u548c", "value": 0.015420687167463252}, {"name": "\u5367\u5e95", "value": 0.014518892596266571}, {"name": "MVP", "value": 0.014518892596266571}, {"name": "\u662f", "value": 0.012715303453873207}, {"name": "\u7ea7", "value": 0.0073045360266931186}, {"name": "\u53f2\u8bd7", "value": 0.0073045360266931186}, {"name": "\u4e0e", "value": 0.0073045360266931186}, {"name": "\u90fd", "value": 0.0073045360266931186}, {"name": "\u5c31\u662f", "value": 0.005500946884299755}, {"name": "\u57ce\u5e02", "value": 0.005500946884299755}, {"name": "\u4f4d\u7f6e", "value": 0.005500946884299755}, {"name": "\u8fd9\u573a", "value": 0.005500946884299755}, {"name": "\u5728", "value": 0.005500946884299755}, {"name": "\u5c31", "value": 0.005500946884299755}, {"name": "\u8fd9\u662f", "value": 0.005500946884299755}, {"name": "\u6709", "value": 0.005500946884299755}, {"name": "\u4e0a", "value": 0.005500946884299755}, {"name": "\u4e0d", "value": 0.004599152313103074}, {"name": "\u4e00\u4e0b", "value": 0.004599152313103074}, {"name": "\u597d\u770b", "value": 0.004599152313103074}, {"name": "\u6ca1", "value": 0.004599152313103074}, {"name": "\u771f\u7684", "value": 0.004599152313103074}]};
var topic_summary = {"0": [{"content": "\u4e01\u6d77\u5cf0\u771f\u662f\u5e9f\u4e86\uff0c\u4e4b\u524d\u65e9\u8be5\u7528\u5362\u7433\uff0c\u548c\u5510\u6dfc\u4e24\u7ffc\u9f50\u98de", "up": 72}, {"content": "\u6709\u6ca1\u6709\u4eba\u89c9\u5f97\u5f20\u6668\u9f99\u6bd4\u4e01\u6d77\u5cf0\u8e22\u5f97\u597d\u592a\u591a\u4e86\uff0c", "up": 8}, {"content": "\u81ea\u4ece\u59dc\u81f3\u9e4f\u6362\u4e86\u4e01\u6d77\u5cf0\uff0c\u8fd9\u5de6\u8fb9\u8def\u5927\u6f0f\u52fa\u6211\u662f\u771f\u770b\u4e0d\u4e0b\u53bb\uff0c\u5bcc\u529b\u660e\u5e74\u53ef\u4ee5\u5356\u4e86\u4e01\u6d77\u5cf0\u6362\u5e74\u8f7b\u7403\u5458\u4e0a\u4e0a\uff0c\u59dc\u81f3\u9e4f\u5728\u534e\u590f\u4e5f\u6ca1\u600e\u4e48\u51fa\u8272\uff0c\u53cc\u8f93\u5c40\u9762\u3002\u6052\u8ff7\u7559", "up": 7}, {"content": "\u8bf7\u4e01\u6d77\u5cf0\u4e0d\u8981\u9996\u53d1\uff01\uff01\uff01\uff01\u7b80\u76f4\u5e9f\u4e86\u4e00\u6761\u8def", "up": 6}, {"content": "\u611f\u89c9\u4e01\u6d77\u5cf0\u5f7b\u5e95\u51c9\u4e86\uff0c\u9648\u5fd7\u948a\u4e5f\u51b7\u5750\u677f\u51f3\u4e86\u4e00\u6574\u573a\u3002\u65af\u5e05\u5f00\u59cb\u6574\u98ce\u4e86\u3002", "up": 6}], "1": [{"content": "\u603b\u7ed3\u4e00\u4e0b\uff1a\u8fd9\u662f\u5c5e\u4e8e\u624e\u54c8\u7ef4\u548c\u5218\u6bbf\u5ea7pk\u963f\u5170\u548c\u4e01\u6d77\u5cf0\u3002\u90fd\u662f\u65e0\u95f4\u9053\u963f[\u8870][\u8870]", "up": 1275}, {"content": "\u603b\u7ed3\u4e00\u4e0b\uff1a\u8fd9\u662f\u5c5e\u4e8e\u624e\u54c8\u7ef4\u548c\u5218\u6bbf\u5ea7pk\u963f\u5170\u548c\u4e01\u6d77\u5cf0\u3002\u90fd\u662f\u65e0\u95f4\u9053\u963f[\u8870][\u8870]", "up": 1275}, {"content": "\u5bcc\u529b\u4e0a\u4e01\u6d77\u5cf0\u5c31\u597d\u50cf\u6052\u5927\u4e0a\u738b\u4e0a\u6e90\u4e00\u6837\u4ee4\u4eba\u7ea0\u5fc3\uff0c********\uff01", "up": 9}, {"content": "\u5728\u73b0\u573a\u770b\u7684\u7403\uff0c\u81ea\u6211\u611f\u89c9\u662f\u8fd9\u4e2a\u8d5b\u5b63\u8e22\u7684\u6700\u597d\u770b\u7684\u4e00\u573a\u7403\uff0c\u7403\u8ff7\u4eca\u5929\u4e5f\u7ed9\u529b\uff0c\u6ca1\u8d62\u4e0b\u6765\uff0c\u6709\u70b9\u9057\u61be\u3002\u611f\u89c9\u8463\u5b66\u5347\u8fdb\u4e86\u4e24\u7403\u4e4b\u540e\uff0c\u7565\u6709\u70b9\u72ec\uff0c\u6709\u4e24\u4e2a\u673a\u4f1a\u90fd\u6ca1\u7ed9\u4f4d\u7f6e\u66f4\u597d\u7684\u5361\u57c3\u6bd4\uff0c\u73b0\u573a\u770b\uff0c\u5361\u57c3\u6bd4\u8fd8\u662f\u5f88\u6709\u5b9e\u529b\u7684\uff0c\u8eab\u4f53\uff0c\u610f\u8bc6\u52a0\u5c04\u672f\u90fd\u53ef\u4ee5\uff0c\u961f\u5458\u7ed9\u4ed6\u7684\u7403\u592a\u5c11\u3002\u57c3\u5c14\u7eb3\u5185\u65af\u8fd8\u662f\u597d\u4e00\u9635\u70c2\u4e00\u9635\uff0c\u8fd9\u573a\u4e0a\u4ed6\u786e\u5b9e\u591f\u5931\u8bef\u3002\u8fd8\u662f\u90a3\u53e5\u8bdd\uff0c\u534e\u590f\u6700\u5f3a\u7684\u662f\u66ff\u8865\u5e2d\u4e0a\u7684\u975eu23\u56fd\u5185\u7403\u5458\u50a8\u5907\uff0c\u8fd9\u4e2a\u8d5b\u5b63\u6210\u7ee9\u4e0d\u4f73\uff0c\u548cu23\u5b9e\u529b\u4e0d\u7a81\u51fa\u53c8\u5f88\u5927\u5173\u7cfb\uff0c\u5f53\u7136\u9ad8\u51c6\u7ffc\u9664\u5916\u3002\u8fd9\u573a\u4e0a\u573a\u7684\u9ad8\u534e\u6cfd\u8fd8\u662f\u503c\u5f97\u7ed9\u8d5e\u7684\uff0c\u6562\u7a81\u6562\u4f20\u6562\u5c04\uff0c\u79d1\u5e05\u8981\u662f\u628a\u4ed6\u7ec3\u51fa\u6765\uff0c\u80fd\u8e22\u534a\u573a\u7403\u5c31\u53ef\u4ee5\u4e86\u3002\u6700\u540e\uff0c\u8bf4\u70b9\u611f\u52a8\u7684\uff0c\u8d5b\u540e\u6700\u540e\u8c22\u573a\u7684\u4e01\u6d77\u5cf0\u548c\u59dc\u5fd7\u9e4f\u56e0\u4e3a\u5927\u5bb6\u77e5\u9053\u7684\u539f\u56e0\u5f97\u5230\u7403\u8ff7\u6700\u591a\u7684\u638c\u58f0\u548c\u6b22\u547c\uff0c\u7403\u8ff7\u6254\u4e0b\u7684\u56f4\u5dfe\uff0c\u4ed6\u4eec\u62ff\u7684\u6ee1\u6ee1\u7684\uff0c\u4e5f\u4e00\u4ef6\u4e0d\u5269\u7684\u6361\u8d77\u6765\u3002\u5e0c\u671b\uff0c\u534e\u590f\u522b\u8f9c\u8d1f\u7403\u8ff7\u7684\u5e0c\u671b\uff0c\u65e9\u70b9\u62ff\u51fa\u597d\u7684\u6218\u7ee9\u6765", "up": 8}, {"content": "\u624e\u54c8\u7dadPK\u963f\u862d\uff1f\u4f60\u5011\u932f\u4e86\uff0c\u662f\u5289\u6bbf\u5ea7PK\u4e01\u6d77\u5cf0", "up": 8}]};
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
