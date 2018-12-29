var data = {"person_name": "\u5468\u6d77\u6ee8", "nicknames": "\u5468\u6d77\u6ee8", "aspects": {"\u6bd4\u8d5b": 0.5096936631111111, "\u8fb9\u8def": 0.6179116305169557, "\u7403\u5458": 0.5362552443142979, "\u9635\u5bb9": 0.6287450300044599, "\u66ff\u8865": 0.5870402529360464, "\u961f\u5458": 0.8777489438649256, "\u8fdb\u7403": 0.48617840991138905, "\u4f20\u7403": 0.3974900342751313, "\u8d5b\u5b63": 0.6585510345751664, "\u8db3\u534f\u676f": 0.3993854132506623}, "overall_heat": 71.0, "overall_polar": -0.004, "name": "103", "nationality": "\u4e2d\u56fd", "position": "\u4e2d\u573a", "goal": "0", "assist": "1", "team_name": "\u5c71\u4e1c\u9c81\u80fd\u6cf0\u5c71", "name_en": "Zhou Haibin", "age": "33", "height": "182", "weight": "78"};
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
var topic_keywords = {"0": [{"name": "\u5468\u6d77\u6ee8", "value": 0.06373784659704718}, {"name": "\uff01", "value": 0.04093146080902653}, {"name": "\u5d14\u9e4f", "value": 0.03492978033849478}, {"name": "\u9c81\u80fd", "value": 0.02652742767975033}, {"name": "\u73b0\u5728", "value": 0.012123394550474132}, {"name": "\uff1f", "value": 0.012123394550474132}, {"name": "\u8e22", "value": 0.009722722362261432}, {"name": "\u5218\u5f6c\u5f6c", "value": 0.009722722362261432}, {"name": "\u4f69\u83b1", "value": 0.008522386268155083}, {"name": "\u89c9\u5f97", "value": 0.007322050174048733}, {"name": "\u8fd9\u573a", "value": 0.007322050174048733}, {"name": "\u6700\u540e", "value": 0.007322050174048733}, {"name": "\u5434\u5174\u6db5", "value": 0.007322050174048733}, {"name": "\u674e\u5fae", "value": 0.006121714079942383}, {"name": "\u683c\u5fb7\u65af", "value": 0.006121714079942383}, {"name": "\u65b0\u4eba", "value": 0.006121714079942383}, {"name": "\u7b11", "value": 0.006121714079942383}, {"name": "\u54ed", "value": 0.006121714079942383}, {"name": "\u5e94\u8be5", "value": 0.006121714079942383}, {"name": "\u5e0c\u671b", "value": 0.004921377985836034}, {"name": "\u611f\u89c9", "value": 0.004921377985836034}, {"name": "\u7403\u961f", "value": 0.004921377985836034}, {"name": "\u4f11\u606f", "value": 0.004921377985836034}, {"name": "\u6bd4\u8d5b", "value": 0.004921377985836034}, {"name": "\u6052\u5927", "value": 0.004921377985836034}, {"name": "\u5f20\u9a70", "value": 0.004921377985836034}, {"name": "\u4e00\u4e0b", "value": 0.004921377985836034}, {"name": "\u9752\u6625", "value": 0.0037210418917296845}, {"name": "\u5b8c\u5168", "value": 0.0037210418917296845}, {"name": "\u771f", "value": 0.0037210418917296845}], "1": [{"name": "\u5468\u6d77\u6ee8", "value": 0.03569525839104955}, {"name": "\u9c81\u80fd", "value": 0.026815840880838215}, {"name": "\u5d14\u9e4f", "value": 0.02148819037471142}, {"name": "\uff01", "value": 0.01971230687266915}, {"name": "\u53f7", "value": 0.01971230687266915}, {"name": "\u8d5b\u5b63", "value": 0.012608772864500087}, {"name": "\u4e2d\u56fd", "value": 0.010832889362457822}, {"name": "\u4e3b\u529b", "value": 0.010832889362457822}, {"name": "\u5e74", "value": 0.010832889362457822}, {"name": "\u5389\u5bb3", "value": 0.010832889362457822}, {"name": "\u8db3\u7403", "value": 0.009057005860415556}, {"name": "\u573a", "value": 0.009057005860415556}, {"name": "\u7403\u5458", "value": 0.0072811223583732895}, {"name": "\u90d1\u667a", "value": 0.0072811223583732895}, {"name": "\u6bd4\u8d5b", "value": 0.0072811223583732895}, {"name": "\u5f53\u5e74", "value": 0.0072811223583732895}, {"name": "\u9a6c\u52a0\u7279", "value": 0.0072811223583732895}, {"name": "\u7403\u8ff7", "value": 0.005505238856331024}, {"name": "\u4eba", "value": 0.005505238856331024}, {"name": "\u73b0\u5728", "value": 0.005505238856331024}, {"name": "\u4f53\u529b", "value": 0.005505238856331024}, {"name": "\u4fdd\u62a4", "value": 0.005505238856331024}, {"name": "\u84bf\u4fca\u95f5", "value": 0.005505238856331024}, {"name": "\u80fd\u529b", "value": 0.005505238856331024}, {"name": "?", "value": 0.005505238856331024}, {"name": "\u4e16\u9752\u8d5b", "value": 0.005505238856331024}, {"name": "\u97e6\u4e16\u8c6a", "value": 0.005505238856331024}, {"name": "\u9632\u5b88", "value": 0.005505238856331024}, {"name": "05", "value": 0.005505238856331024}, {"name": "\u5c81", "value": 0.005505238856331024}]};
var topic_summary = {"0": [{"content": "\u4f69\u6765\u548c\u84bf\u4fca\u95f5\u597d\u5f3a\uff0c\u5218\u5f6c\u5f6c\u548c\u5468\u6d77\u6ee8\u5df2\u7ecf\u51c9\u4e86", "up": 324}, {"content": "\u5d14\u9e4f \u5468\u6d77\u6ee8 \u738b\u6653\u9f99 \u82d1\u7ef4\u73ae \u738b\u6c38\u73c0 \u674e\u5fae\u6000\u5ff5\u90a3\u4e2a\u65f6\u5019\u7684\u9c81\u80fd", "up": 211}, {"content": "\u5f53\u5468\u6d77\u6ee8\u6362\u4e0b\u5d14\u9e4f\u7684\u65f6\u5019\uff0c\u5f77\u4f5b\u56de\u5230\u4e8610\u5e74\u524d\uff01\u65f6\u95f4\u8fc7\u5f97\u771f\u5feb\uff0c\u800c\u6211\u7684\u9752\u6625\u4e5f\u4e00\u76f4\u9c81\u80fd\u76f8\u4f34\uff01", "up": 188}, {"content": "\u5d14\u9e4f \u5468\u6d77\u6ee8 \u611f\u89c9\u7a7f\u8d8a\u4e86\u4f3c\u7684", "up": 183}, {"content": "\u4f69\u5ac2\u4e0d\u5728\u5bb6\uff0c\u4f69\u83b1\u54d7\u54d7\u54d7\u3002\u5854\u795e\u5de7\u4e32\u8054\uff0c\u70b9\u7403\u8499\u7740\u53d1\u3002\u5218\u5f6c\u5f6c\uff0c \u8be5\u9192\u5566\u3002\u5434\u5174\u6db5\uff0c\u66f4\u731b\u4e86\u3002\u770b\u7740\u5d14\u9e4f\u8fd8\u6709\u5468\u6d77\u6ee8\uff0c\u54ce\uff0c\u6211\u7684\u9752\u6625\u98de\u8d70\u4e86\u3002", "up": 84}], "1": [{"content": "\u73b0\u5728\u6ee1\u8111\u5b50\u91cc\u8fd8\u90fd\u662f1\u53f7\u674e\u96f7\u96f7\uff0c3\u53f7\u738b\u8d855\u53f7\u8212\u75459\u53f7\u5df4\u8f9b25\u53f7\u77eb\u5586\uff0c8\u53f7\u65e5\u79d1\u592b\u7ef4\u594710\u53f7\u90d1\u667a18\u53f7\u5468\u6d77\u6ee820\u53f7\u5d14\u9e4f\uff0c6\u53f7\u97e9\u9e4f29\u53f7\u674e\u91d1\u7fbd\u7684\u5f71\u5b50\u300212\u5e74\u8fc7\u53bb\u4e86\uff0c\u4e0d\u7ba1\u5468\u6d77\u6ee8\u548c\u5d14\u9e4f\u53d1\u751f\u8fc7\u4ec0\u4e48\uff0c\u73b0\u5728\u8fd8\u5728\u575a\u6301\uff0c\u4f5c\u4e3a\u7403\u8ff7\u53ea\u4f1a\u7ed9\u4ed6\u4eec\u66f4\u591a\u7684\u638c\u58f0\u3002\u4f60\u4eec\u6c38\u8fdc\u90fd\u662f\u9c81\u80fd\u7684\u5b69\u5b50\u3002[\u5389\u5bb3][\u5389\u5bb3][\u5389\u5bb3][\u5389\u5bb3][\u5389\u5bb3][\u5389\u5bb3]", "up": 1086}, {"content": "\u4e0a\u6b21\u6768\u7a0b\uff0c\u5468\u6d77\u6ee8\uff0c\u5d14\u9e4f\u540c\u65f6\u5728\u573a\u662f\u4ec0\u4e48\u65f6\u5019\uff01\uff1f", "up": 13}, {"content": "\u5468\u6d77\u6ee8300\u573a\u84bf\u4fca\u95f5200\u573a\u6234\u7433100\u573a\u9c81\u80fd3\u6bd41\u7533\u82b1\u4e00\u573a\u503c\u5f97\u7eaa\u5ff5\u7684\u6bd4\u8d5b\u52a0\u6cb9\ud83d\udcaa\u9c81\u80fd \u4e0b\u573a\u5ba2\u573a\u5e72\u6389****\ud83d\ude05", "up": 9}, {"content": "\u770b\u5230\u5d14\u9e4f\u3001\u5468\u6d77\u6ee8\u540c\u573a\u53c8\u60f3\u5230\u4e8606\u5e74\u7684\u5dc5\u5cf0\u9c81\u80fd\uff0c\u4e00\u5927\u5806\u4e2d\u8d85\u8bb0\u5f55\uff0c\u63d0\u524d6\u573a\u593a\u51a0\u2026\u2026\u90d1\u667a\u3001\u65e5\u79d1\u592b\u3001\u5468\u6d77\u6ee8\u3001\u5d14\u9e4f\u7ec4\u6210\u7684\u4e2d\u573a\u6240\u5411\u62ab\u9761\uff01", "up": 8}, {"content": "\u674e\u9704\u9e4f\u786e\u5b9e\u5feb\u628a\u9a6c\u52a0\u7279\u7684\u672c\u5403\u5b8c\u4e86\uff0c\u9a6c\u52a0\u7279\u65f6\u8fdb\u653b\u5f31\u9632\u5b88\u5f3a\uff0c\u73b0\u5728\u5462?\u524d\u534a\u7a0b\u9c81\u80fd\u80fd\u8fdb\u524d\u4e09\u591a\u534a\u662f\u9760\u9632\u5b88\uff0c\u8fdb\u653b\u4e0d\u8fdb\u6b65\u5374\u9000\u6b65\u4e86\uff0c\u5177\u4f53\u53ef\u770b\u524d\u8d5b\u5b63\u548c\u8fd9\u8d5b\u5b63\u6570\u636e\u5bf9\u6bd4\uff0c\u6570\u636e\u4e0d\u4f1a\u9a97\u4eba\uff0c\u540e\u534a\u7a0b\u8fd9\u51e0\u573a\u6bd4\u8d5b\u9c81\u80fd\u7684\u9632\u5b88\u4e5f\u6ca1\u6709\u4e86\uff0c\u5176\u4e2d\u5f88\u5927\u539f\u56e0\u4f30\u8ba1\u5c31\u662f\u9c81\u80fd\u4f53\u529b\u95ee\u9898\u8fd8\u6709\u53ef\u7528\u5e74\u8f7b\u4eba\u592a\u5c11\uff0c\u771f\u5c11\u5417\uff1f\u4e0a\u8d5b\u5b63\u9a6c\u52a0\u7279\u5f00\u53d1\u4e86\u4e0d\u5c11\u4eba\uff0c\u8fd9\u8d5b\u5b63\u5462\uff0c\u5f00\u53d1\u4e86\u5d14\u9e4f\u548c\u5468\u6d77\u6ee8?\u5c0f\u91d1\u81ea\u5df1\u5f88\u52aa\u529b\u5982\u679c\u7b97\u5c31\u7b97\u5427\u3002\u8bb0\u5f97\u4e0a\u8d5b\u5b63\u6bcf\u573a\u6bd4\u8d5b\u89e3\u8bf4\u603b\u8bf4\u9c81\u80fd\u4f53\u529b\u771f\u597d\u554a\uff0c\u62fc\u52b2\u5f3a\uff0c\u8fd9\u8d5b\u5b63\uff0c\u89e3\u8bf4\u4e5f\u4f1a\u8bf4\u4e0b\u534a\u573a\u9c81\u80fd\u4f53\u529b\u660e\u663e\u8ddf\u4e0d\u4e0a\u4e86\u554a?\u4f5c\u4e3a\u8fd9\u4e9b\u5e74\u7684\u9c81\u80fd\u7403\u8ff7\uff0c\u611f\u89c9\u9a6c\u52a0\u7279\u771f\u4e0d\u9519\uff0c\u4e3a\u4ec0\u4e48\u6362\u4e86\u5462\uff0c\u56fd\u4f01\u771f\u4e0d\u8981\u641e\u8db3\u7403\u4e86\uff0c\u5982\u679c\u641e\u4e5f\u4e0d\u8981\u62ff\u7403\u8ff7\u7684\u611f\u60c5\u5f53\u5404\u4f4d\u9886\u5bfc\u664b\u5347\u7684\u5de5\u5177\u3002", "up": 4}]};
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
