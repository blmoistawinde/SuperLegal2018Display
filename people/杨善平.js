var data = {"person_name": "\u6768\u5584\u5e73", "nicknames": "\u6768\u5584\u5e73", "aspects": {"\u7403\u5458": 0.29716547152312467, "\u6bd4\u8d5b": 0.4857691500556465, "\u7403\u8ff7": 0.30034068394626423, "\u9632\u5b88": 0.3727311189075356, "\u5916\u63f4": 0.22620132913255994, "\u8d5b\u5b63": 0.5523381196220104, "\u540e\u9632": 0.1462694351397352, "\u964d\u7ea7": 0.3674244652453462, "\u8fdb\u653b": 0.1909657582983842}, "overall_heat": 142.0, "overall_polar": -0.762, "name": "354", "nationality": "\u4e2d\u56fd", "position": "\u540e\u536b", "goal": "0", "assist": "0", "team_name": "\u5927\u8fde\u4e00\u65b9", "name_en": "Yang Shanping", "age": "31", "height": "188", "weight": "80"};
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
var topic_keywords = {"0": [{"name": "\u6768\u5584\u5e73", "value": 0.10492184901895578}, {"name": "\u518d", "value": 0.018456933821084136}, {"name": "\u8fd9\u573a", "value": 0.018456933821084136}, {"name": "\u6bd4\u8d5b", "value": 0.018456933821084136}, {"name": "\uff1f", "value": 0.015131360159627535}, {"name": "\u6700\u597d", "value": 0.013468573328899235}, {"name": "\u6d88\u606f", "value": 0.013468573328899235}, {"name": "\u53ea", "value": 0.013468573328899235}, {"name": "\u9700\u8981", "value": 0.013468573328899235}, {"name": "\u5fcd\u53d7", "value": 0.013468573328899235}, {"name": "\u8e22", "value": 0.011805786498170934}, {"name": "\u573a", "value": 0.011805786498170934}, {"name": "\u7403", "value": 0.010142999667442634}, {"name": "\u60f3", "value": 0.010142999667442634}, {"name": "\uff01", "value": 0.010142999667442634}, {"name": "\u4e0b", "value": 0.008480212836714332}, {"name": "\u771f\u7684", "value": 0.008480212836714332}, {"name": "\u5e94\u8be5", "value": 0.0068174260059860325}, {"name": "\u4e00\u65b9", "value": 0.0068174260059860325}, {"name": "\u79e6\u5347", "value": 0.0068174260059860325}, {"name": "\u91d1\u5f3a", "value": 0.0068174260059860325}, {"name": "\u4eba", "value": 0.0068174260059860325}, {"name": "\u95ee\u9898", "value": 0.0068174260059860325}, {"name": "\u5df2\u7ecf", "value": 0.0068174260059860325}, {"name": "\u53d1\u73b0", "value": 0.005154639175257733}, {"name": "\u56de", "value": 0.005154639175257733}, {"name": "\u88c1\u5224", "value": 0.005154639175257733}, {"name": "\u6700", "value": 0.005154639175257733}, {"name": "\u7948\u7977", "value": 0.005154639175257733}, {"name": "\u7ea2\u724c", "value": 0.0034918523445294316}], "1": [{"name": "\u6768\u5584\u5e73", "value": 0.07033443962215982}, {"name": "\uff01", "value": 0.02182792953791167}, {"name": "\u5927\u8fde", "value": 0.01927495532295124}, {"name": "\u6743\u5065", "value": 0.016721981107990808}, {"name": "\uff1f", "value": 0.01416900689303038}, {"name": "\u7b11", "value": 0.009063058463109522}, {"name": "\u89e3\u8bf4", "value": 0.007786571355629308}, {"name": "\u54ed", "value": 0.007786571355629308}, {"name": "\u6c34\u5e73", "value": 0.007786571355629308}, {"name": "\u6ed1\u7a3d", "value": 0.0065100842481490935}, {"name": "\u73b0\u5728", "value": 0.0065100842481490935}, {"name": "\u7403\u5458", "value": 0.0065100842481490935}, {"name": "\u5751", "value": 0.0065100842481490935}, {"name": "\u5df2\u7ecf", "value": 0.0065100842481490935}, {"name": "\u4eba", "value": 0.0065100842481490935}, {"name": "\u4e00\u4e2a", "value": 0.0065100842481490935}, {"name": "\u627e", "value": 0.005233597140668879}, {"name": "\u95ee\u9898", "value": 0.005233597140668879}, {"name": "\u83ab\u5fb7\u65af\u7279", "value": 0.005233597140668879}, {"name": "\u5356", "value": 0.005233597140668879}, {"name": "\u961f", "value": 0.005233597140668879}, {"name": "\u4e2d\u536b", "value": 0.005233597140668879}, {"name": "\u901f\u5ea6", "value": 0.005233597140668879}, {"name": "\u9632\u5b88", "value": 0.005233597140668879}, {"name": "\u7403\u8ff7", "value": 0.005233597140668879}, {"name": "\u964d\u7ea7", "value": 0.005233597140668879}, {"name": "\u4e00\u65b9", "value": 0.005233597140668879}, {"name": "\u8fbd\u5b81", "value": 0.005233597140668879}, {"name": "\u6253", "value": 0.005233597140668879}, {"name": "\u4e70", "value": 0.003957110033188665}], "2": [{"name": "\u6768\u5584\u5e73", "value": 0.05110642781875659}, {"name": "\u540e\u536b", "value": 0.02827537759044609}, {"name": "\uff1f", "value": 0.0230066736916052}, {"name": "\u4e2d", "value": 0.019494204425711276}, {"name": "\u95e8\u5c06", "value": 0.017737969792764312}, {"name": "\u7403", "value": 0.017737969792764312}, {"name": "\u793a\u610f", "value": 0.01422550052687039}, {"name": "\u8ffd", "value": 0.01422550052687039}, {"name": "\u4e24\u4e2a", "value": 0.012469265893923429}, {"name": "\u4e3e\u624b", "value": 0.012469265893923429}, {"name": "\uff01", "value": 0.010713031260976466}, {"name": "\u771f", "value": 0.010713031260976466}, {"name": "\u4eba", "value": 0.008956796628029505}, {"name": "\u5361\u62c9\u65af\u79d1", "value": 0.008956796628029505}, {"name": "\u6307\u6325", "value": 0.008956796628029505}, {"name": "\u4e00\u4e2a", "value": 0.007200561995082543}, {"name": "\u518d", "value": 0.007200561995082543}, {"name": "\u4e22\u7403", "value": 0.007200561995082543}, {"name": "\u8463\u5ca9\u5cf0", "value": 0.007200561995082543}, {"name": "\u8d5b\u5b63", "value": 0.005444327362135582}, {"name": "\u76d6\u5766", "value": 0.005444327362135582}, {"name": "\u4e0d\u5230", "value": 0.005444327362135582}, {"name": "\u6253", "value": 0.005444327362135582}, {"name": "\u5148", "value": 0.005444327362135582}, {"name": "\u8138", "value": 0.005444327362135582}, {"name": "\u4e3b\u529b", "value": 0.005444327362135582}, {"name": "\u79e6\u5347", "value": 0.005444327362135582}, {"name": "\u7b2c\u4e09\u4e2a", "value": 0.005444327362135582}, {"name": "\u8d8a\u4f4d", "value": 0.005444327362135582}, {"name": "\u7403\u5458", "value": 0.005444327362135582}]};
var topic_summary = {"0": [{"content": "\u8fd9\u6b21\u6bd4\u8d5b\u5c31\u662f\u5728\u6709\u6768\u5584\u5e73", "up": 87}, {"content": "\u53e6\u5916\u6768\u5584\u5e73\u5c31\u662f\u4e00\u5934\u8822\u9a74", "up": 86}, {"content": "\u8fd9\u573a\u6bd4\u8d5b\u6700\u597d\u7684\u6d88\u606f\u662f\uff1a\u6211\u53ea\u9700\u8981\u518d\u5fcd\u53d7\u6768\u5584\u5e734\u573a\u4e86\u3002", "up": 56}, {"content": "\u674e\u6e90\u4e00\u8fdb\u7403\u662f\u8f6c\u6298\u70b9\uff0c\u4f46\u674e\u6e90\u4e00\u672c\u8be5\u7f5a\u4e0b\uff0c\u53e6\u5916\u60f3\u8bf4\u6743\u5065\u4e0d\u8981\u6768\u5584\u5e73\u592a\u7279\u4e48\u5bf9\u4e86\uff01\u5929\u6d25\u7403\u8ff7\u7559\u3002", "up": 48}, {"content": "\u91cc\u4e9a\u65af\u79d1\u65af\u5728\u573a\uff0c\u7b49\u4e8e\u4e00\u65b9\u5c11\u4e00\u4eba\uff0c\u6768\u5584\u5e73\u5728\u573a\uff0c\u7b49\u4e8e\u5bf9\u65b9\u591a\u4e00\u4eba\u3002\u6211\u8fd9\u6837\u8bf4\u4e0d\u8fc7\u5206\u5427\uff1f", "up": 15}], "1": [{"content": "\u6743\u5065\u7ec8\u4e8e\u628a\u6768\u5584\u5e73\u626b\u5730\u51fa\u95e8\u4e86", "up": 228}, {"content": "\u5927\u8fde\u4e70\u8d70\u6768\u5584\u5e73\uff0c\u5c31\u8bf4\u660e\u95ee\u9898\u4e86\uff0c\u4e0d\u4f1a\u9009\u4eba\uff0c\u7403\u8ff7\u90fd\u770b\u5f97\u51fa\u4ed6\u662f\u4e2a\u5751\uff0c\u5929\u6d25\u6743\u5065\u5df2\u7ecf\u9a8c\u8bc1\u8fc7\u4e86\uff0c\u8fd8\u597d\u79bb\u5f00\u6743\u5065\u4e86\u3002", "up": 156}, {"content": "\u6768\u5584\u5e73\uff0c\u5475\u5475\u00b7\u00b7\u00b7\u00b7", "up": 80}, {"content": "\u867d\u7136\u4e00\u65b9\u8fd9\u573a\u6709\u6218\u7565\u6027\u653e\u5f03\u7684\u56e0\u7d20\uff0c\u4f46\u5b9e\u8bdd\u5b9e\u8bf4\uff1a\u6bd4\u52065-2\uff0c\u573a\u97628-2\u4e5f\u4e0d\u5938\u5f20\uff01\u5927\u8fde\u7684\u9632\u5b88\u662f\u771f\u7684\u5dee\uff0c\u611f\u89c9\u4e70\u6768\u5584\u5e73\u548c\u91cc\u4e9a\u662f\u4e2a\u5927\u9519\u8bef\uff01\u4e0b\u4e24\u573a\u4e00\u65b9\u52a0\u6cb9\u5427\uff01\u56fd\u5b89\u4e5f\u52a0\u6cb9\u5427\uff01", "up": 11}, {"content": "\u602a\u4e0d\u5f97\u6743\u5065\u4e0d\u8981\u6768\u5584\u5e73", "up": 9}], "2": [{"content": "\u6768\u5584\u5e73\u4e22\u4e86\u4e24\u4e2a\u7403\uff0c\u54ea\u6709\u4e2d\u540e\u536b\u793a\u610f\u95e8\u5c06\u51fa\u51fb\u7684\u4e8b\u60c5\uff1f\uff1f\uff1f\u89c1\u8fc7\u95e8\u5c06\u6307\u6325\u4e2d\u540e\u536b\uff0c\u8fd8\u771f\u6ca1\u89c1\u8fc7\u4e2d\u540e\u536b\u6123\u7740\u793a\u610f\u95e8\u5c06\uff0c\u7b2c\u4e09\u4e2a\u7403\uff0c\u793a\u610f\u8d8a\u4f4d\u5c31\u4e0d\u8ffd\u4e86\uff0c\uff0c\uff0c\u5148\u8ffd\u5b8c\uff0c\u518d\u793a\u610f\u6216\u8fb9\u8ffd\u8fb9\u4e3e\u624b\u5440\uff01\u8981\u4e0d\u662f\u79e6\u5347\uff0c\u4f30\u8ba1\u5dee\u8ddd\u4e0d\u53ea\u4e00\u7403[\u6d41\u6c57]", "up": 236}, {"content": "\u5bf9\u624b\u8fd8\u662f\u592a\u4f9d\u8d56\u6768\u5584\u5e73\u4e86[\u6342\u8138]", "up": 55}, {"content": "\u8d62\u7403\u4e0d\u53ef\u6015\uff0c\u7f3a\u8c01\u8c01\u5c34\u5c2c\u2014\u2014\u6768\u5584\u5e73\u8fd9\u8d5b\u5b63\u8fd8\u80fd\u4e0a\u573a\u5417[\u6342\u8138]", "up": 11}, {"content": "\u7b2c\u4e00\u56de\u54080\uff1a8\uff0c\u7b2c\u4e8c\u56de\u54081\uff1a0\uff0c\u9635\u5bb9\u5dee\u522b\u57fa\u672c\u6ca1\u6709\uff0c\u533a\u522b\u5728\u4e8e\u4e00\u662f\u5916\u63f4\u548c\u56fd\u5185\u7403\u5458\u7ecf\u8fc7\u534a\u4e2a\u8d5b\u5b63\u78e8\u5408\u597d\u4e86\uff0c\u7b2c\u4e8c\u662f\u6559\u7ec3\u4e0d\u540c\u4e86\uff0c\u8ddf\u4e0a\u6e2f\u771f\u4e0d\u80fd\u62c9\u5f00\u5bf9\u653b\uff0c\u7b2c\u4e09\u662f\u5361\u62c9\u65af\u79d1\u660e\u663e\u662f\u618b\u7740\u9053\u6c14\u8981\u633d\u56de\u989c\u9762\u8fd9\u573a\u7403\u662f\u8981\u8ba4\u771f\u5e72\u7684\uff0c\u770b\u4ed6\u8fdb\u7403\u540e\u7684\u5e86\u795d\u4ee5\u53ca\u961f\u53cb\u6d6a\u8d39\u673a\u4f1a\u65f6\u7684\u7740\u6025\u5c31\u77e5\u9053\u3002\u53e6\u5916\u8fd8\u6709\u4e00\u4e2a\u5173\u952e\u5c31\u662f\u6768\u5584\u5e73\u771f\u4e0d\u80fd\u7528\uff0c\u4ed6\u5728\u548c\u4e0d\u5728\u660e\u663e\u6210\u7ee9\u5c31\u4e0d\u4e00\u6837\u4e86\uff0c\u6bcf\u573a\u7403\u90fd\u80fd\u51fa\u4e00\u4e24\u4e2a\u81f4\u547d\u5931\u8bef\u7684\uff0c\u73a9\u4e0d\u8d77", "up": 10}, {"content": "\u6768\u5584\u5e73\u5c31\u662f\u4e2a\u5e9f\u7269\uff0c\u4e0a\u4e00\u573a\u5149tm\u4f1a\u4e3e\u624b\u4e86", "up": 10}]};
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
