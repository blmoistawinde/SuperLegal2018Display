var data = {"person_name": "\u674e\u6602", "nicknames": "\u674e\u6602", "aspects": {"\u56fd\u5bb6\u961f": 0.3785778266550622, "\u7403\u8ff7": 0.5163343792085365, "\u8fdb\u7403": 0.6674798296887342, "\u4efb\u610f\u7403": 0.16385258958692345, "\u5934\u7403": 0.29853760176927174, "\u5c04\u95e8": 0.5873478993245818, "\u9632\u5b88": 0.5950255002960613, "\u62a2\u70b9": 1.0, "\u8d5b\u5b63": 0.5495286414016027, "\u7403\u5458": 0.34345810838698826}, "overall_heat": 62.0, "overall_polar": 0.499, "name": "187", "nationality": "\u4e2d\u56fd", "position": "\u540e\u536b", "goal": "3", "assist": "0", "team_name": "\u6c5f\u82cf\u82cf\u5b81", "name_en": "Li Ang", "age": "25", "height": "187", "weight": "85"};
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
var topic_keywords = {"0": [{"name": "\u674e\u6602", "value": 0.07164906580016248}, {"name": "\uff1f", "value": 0.019658813972380177}, {"name": "\u82cf\u5b81", "value": 0.013160032493907391}, {"name": "\u97e6\u4e16\u8c6a", "value": 0.013160032493907391}, {"name": "\u4e00\u4e2a", "value": 0.011535337124289195}, {"name": "\u5434\u66e6", "value": 0.011535337124289195}, {"name": "\u5409\u7fd4", "value": 0.009910641754670999}, {"name": "\u8e22", "value": 0.009910641754670999}, {"name": "\u56fd\u5bb6\u961f", "value": 0.008285946385052803}, {"name": "\u7b11", "value": 0.008285946385052803}, {"name": "\u54ed", "value": 0.008285946385052803}, {"name": "\u8fdb\u7403", "value": 0.008285946385052803}, {"name": "\u91cc", "value": 0.008285946385052803}, {"name": "\u987e\u8d85", "value": 0.008285946385052803}, {"name": "\u72b6\u6001", "value": 0.008285946385052803}, {"name": "\u597d", "value": 0.006661251015434606}, {"name": "\u9ec4\u7d2b\u660c", "value": 0.006661251015434606}, {"name": "\u8868\u73b0", "value": 0.006661251015434606}, {"name": "\u89c9\u5f97", "value": 0.00503655564581641}, {"name": "\u5e15\u83b1\u5854", "value": 0.00503655564581641}, {"name": "\u9002\u5408", "value": 0.00503655564581641}, {"name": "\u4eca\u5929", "value": 0.00503655564581641}, {"name": "\u4e2d\u8d85", "value": 0.00503655564581641}, {"name": "\uff01", "value": 0.00503655564581641}, {"name": "\u8fd9\u573a", "value": 0.00503655564581641}, {"name": "\u6700\u4f73", "value": 0.00503655564581641}, {"name": "\u4f4d\u7f6e", "value": 0.00503655564581641}, {"name": "\u6342", "value": 0.00503655564581641}, {"name": "\u56fd\u5185", "value": 0.00503655564581641}, {"name": "\u513f\u5b50", "value": 0.00503655564581641}], "1": [{"name": "\u674e\u6602", "value": 0.04}, {"name": "\uff01", "value": 0.030438247011952194}, {"name": "\u82cf\u5b81", "value": 0.017689243027888445}, {"name": "\u8e22", "value": 0.012908366533864542}, {"name": "\u4e00\u4e2a", "value": 0.011314741035856573}, {"name": "\u7279\u8c22\u62c9", "value": 0.009721115537848605}, {"name": "\u8d5b\u5b63", "value": 0.008127490039840637}, {"name": "\u5934\u7403", "value": 0.008127490039840637}, {"name": "\u80fd\u529b", "value": 0.0065338645418326685}, {"name": "\u51e0\u4e2a", "value": 0.0065338645418326685}, {"name": "\u903c", "value": 0.0065338645418326685}, {"name": "\u901f\u5ea6", "value": 0.0065338645418326685}, {"name": "\u7403\u8ff7", "value": 0.0065338645418326685}, {"name": "\u4efb\u610f\u7403", "value": 0.0065338645418326685}, {"name": "\u57c3\u5fb7\u5c14", "value": 0.0065338645418326685}, {"name": "\u8fb9\u8def", "value": 0.0065338645418326685}, {"name": "\u62a2", "value": 0.0065338645418326685}, {"name": "\u8eab\u4f53", "value": 0.0065338645418326685}, {"name": "\u505c\u7403", "value": 0.0065338645418326685}, {"name": "\u4f20\u4e2d", "value": 0.0065338645418326685}, {"name": "\u7403", "value": 0.0065338645418326685}, {"name": "\u8fdb", "value": 0.0065338645418326685}, {"name": "?", "value": 0.0065338645418326685}, {"name": "\u725b", "value": 0.0065338645418326685}, {"name": "\u5b89\u6392", "value": 0.0065338645418326685}, {"name": "\u4e0a\u573a", "value": 0.004940239043824702}, {"name": "\u660e", "value": 0.004940239043824702}, {"name": "\u4e24\u4e2a", "value": 0.004940239043824702}, {"name": "\u8d70", "value": 0.004940239043824702}, {"name": "\u79d1\u65af", "value": 0.004940239043824702}]};
var topic_summary = {"0": [{"content": "\u5409\u7fd4\uff0c\u5434\u66e6\uff0c\u674e\u6602\uff0c\u8c22\u9e4f\u98de\uff0c\u9ec4\u7d2b\u660c", "up": 78}, {"content": "\u770b\u5230\u9ec4\u7d2b\u660c\u7684\u5c04\u95e8\u548c\u674e\u6602\u7684\u76ef\u4eba\u771f\u5fc3\u60f3\u7b11\u3002\u3002\u3002\u3002", "up": 49}, {"content": "\u674e\u6602\u90a3\u4e2a\u9632\u5b88\u6211\u7ed9\u6ee1\u5206\uff0c\u81ea\u52a8\u5f39\u5f00", "up": 39}, {"content": "\u674e\u6602\u90a3\u4e2a\u4efb\u610f\u7403\u662f\u4e00\u4e2a\u8bef\u5224\u83b7\u5f97\u7684\uff0c\u5c45\u7136\u6ca1\u4eba\u8bf4\uff1f\uff1f\uff1f", "up": 20}, {"content": "\u9c81\u80fd\u4eca\u665a\u8981\u611f\u8c222\u4e2a\u4eba\uff0c\u4e00\u4e2a\u674e\u6602\u4e00\u4e2a\u97e6\u4e16\u8c6a\uff01", "up": 16}], "1": [{"content": "\u5413\u6b7b\u7239\u5566\uff0c\u5728\u73b0\u573a\u57cb\u4f0f\u5728\u82cf\u5b81\u7403\u8ff7\u91cc\uff0c\u6052\u5927\u8fdb\u4e86\u8981\u8bf4\u5509\uff0c\u600e\u4e48\u641e\u7684\u3002\u82cf\u5b81\u8fdb\u4e86\u8981\u558a\uff1a\u674e\u6602\u725b\u903c\u3002\u4f60\u77e5\u9053\u6211\u5fc3\u91cc\u591a\u82e6\u4e48\u3002\u6700\u540e\u8bf4\u4e00\u53e5\uff0c\u6052\u5927\u725b\u903c\uff0c\u5854\u5229\u65af\u5361\u725b\u903c", "up": 361}, {"content": "\u674e\u6602\u628a\u4efb\u610f\u7403\u5f53\u70b9\u7403\u8e22\uff0c\u7279\u8c22\u62c9\u628a\u70b9\u7403\u5f53\u89e3\u56f4\u8e22\uff0c\u8868\u626c\u674e\u6602\uff0c\u5434\u9f91\uff0c\u606d\u559c\u82cf\u5b81\uff01", "up": 49}, {"content": "\u674e\u6602\u8fd9\u7403\u548c\u5927\u97e6\u5c11\u6709\u4e00\u62fc", "up": 22}, {"content": "\u4f5c\u4e3a\u82cf\u5b81\u7684\u7403\u8ff7\uff0c\u8001\u751f\u5e38\u8c08\u7684\u8bdd\u9898\uff0c4\u4e2a\u4eba\u4e0d\u8d70\u96be\u6709\u4f5c\u4e3a\uff0c1\uff0c\u535a\u963f\u57fa\u8036\uff0c\u6709\u610f\u8bc6\uff0c\u6ca1\u80fd\u529b\uff0c\u6ca1\u8eab\u4f53\uff0c\u6ca1\u62a4\u7403\uff0c\u7528\u57c3\u5fb7\u5c14\u4ee3\u66ff\uff0c2\uff0c\u5468\u4e91\uff0c\u4e91\u59b9\u59b9\u8d76\u7d27\u6362\u4e2a\u884c\u4e1a\u5427\uff0c\u5c31\u4f60\u5c31\u6c34\u5e73\u8fd8\u8e22\u8fb9\u8def\uff0c\u6ca1\u6709\u505c\u7403\u6ca1\u6709\u4f20\u4e2d\u6ca1\u6709\u901f\u5ea6\uff0c\u8d81\u65e9\u5f00\u4e2a\u706b\u9505\u5e97\uff0c3\uff0c\u674e\u6602\uff0c\u4f5c\u4e3a\u4e2d\u540e\u536b\uff0c\u4e00\u4e2a\u8d5b\u5b63\u90fd\u89c1\u4e0d\u4e86\u51e0\u6b21\u62a2\u70b9\u7684\uff0c\u5bf9\u624b\u8fdb\u653b\u90fd\u4e0d\u77e5\u9053\u4ed6\u5728\u54ea\u91cc\uff0c4\uff0c\u8c22\u9e4f\u98de\uff0c\u505c\u7403\u5c1a\u53ef\uff0c\u4f20\u4e2d\u592a\u5dee\u4e86\uff0c\u8fd8\u7ecf\u5e38\u559c\u6b22\u62a2\u7740\u53d1\u89d2\u7403\uff0c\u4e0d\u8981\u8138\uff0c\u53e6\u5916\uff0c\u79d1\u65af\u660e\u5965\u62c9\u7f57\u5c24\uff0c\u80fd\u4e0d\u80fd\u591a\u5b89\u6392\u5b89\u6392\u9ad8\u5929\u610f\uff0c\u5f20\u51cc\u5cf0\uff0c\u963f\u5e03\u90fd\u6d77\u7c73\u63d0\u4e0a\u4e0a\u573a\u554a\uff0c\u4e0d\u6bd4\u8fd9\u51e0\u4e2a\u5dee\uff0c\u603b\u4e4b\uff0c\u82cf\u5b81\u7403\u961f\u8fd0\u4f5c\u786e\u5b9e\u4e0d\u5927\u804c\u4e1a\uff0c\u4e0d\u53ef\u9ad8\u770b\uff01", "up": 20}, {"content": "\u6cf0\u8fbe\u8fdb\u7684\u90a3\u4e2a\u5934\u7403\uff0c\u674e\u6602\u672c\u6765\u8d34\u7684\u5f88\u7d27\uff0c\u7a81\u7136\u5c31\u64a4\u9000\u5f00\u4e86\uff0c\u800c\u4e14\u5468\u8fb9\u5c31\u53e6\u4e00\u4e2a\u6cf0\u8fbe\u7684\u7403\u5458\u4e5f\u6709\u4eba\u9632\uff0c\u770b\u4e86\u51e0\u904d\u6ca1\u770b\u61c2\u3002\u8fd9\u7403\u8fdb\u4e86\u674e\u6602\u8fd8\u62b1\u6028\u961f\u53cb\u3002", "up": 12}]};
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
