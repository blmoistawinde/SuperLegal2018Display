var data = {"person_name": "\u5854\u5c14\u5fb7\u5229", "nicknames": "\u5854\u5c14\u5fb7\u5229", "aspects": {"\u8fdb\u7403": 0.4993666845084819, "\u8d8a\u4f4d": 0.2724800084760732, "\u7403\u5458": 0.5197679910795362, "\u5916\u63f4": 0.5639756245872433, "\u7403\u8ff7": 0.49859308923748596, "\u6bd4\u8d5b": 0.42946149448429227, "\u70b9\u7403": 0.3160772663915434, "\u8d5b\u5b63": 0.7570817312152927, "\u9632\u5b88": 0.4512493045373651, "\u52a9\u653b": 0.2816439592909068}, "overall_heat": 330.0, "overall_polar": 0.337, "name": "95", "nationality": "\u5df4\u897f", "position": "\u524d\u950b", "goal": "18", "assist": "9", "team_name": "\u5c71\u4e1c\u9c81\u80fd\u6cf0\u5c71", "name_en": "Diego Tardelli Marti", "age": "33", "height": "180", "weight": "70"};
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
var topic_keywords = {"0": [{"name": "\u5854\u5c14\u5fb7\u5229", "value": 0.07348328105185876}, {"name": "\uff01", "value": 0.03810985783888407}, {"name": "\u4f69\u83b1", "value": 0.020089434692651672}, {"name": "\uff1f", "value": 0.014082626977240874}, {"name": "\u8fdb\u7403", "value": 0.012080357738770609}, {"name": "\u9c81\u80fd", "value": 0.011412934659280519}, {"name": "\u91d1\u656c\u9053", "value": 0.01007808850030034}, {"name": "\u7403", "value": 0.01007808850030034}, {"name": "\u5434\u5174\u6db5", "value": 0.007408396182339985}, {"name": "\u52a9\u653b", "value": 0.006740973102849897}, {"name": "\u5927\u96f7", "value": 0.006740973102849897}, {"name": "\u597d", "value": 0.006740973102849897}, {"name": "\u673a\u4f1a", "value": 0.006073550023359808}, {"name": "\u5439", "value": 0.006073550023359808}, {"name": "\u4eba", "value": 0.006073550023359808}, {"name": "\u6700\u540e", "value": 0.006073550023359808}, {"name": "\u88c1\u5224", "value": 0.005406126943869719}, {"name": "\u903c", "value": 0.005406126943869719}, {"name": "\u8fdb\u653b", "value": 0.005406126943869719}, {"name": "\u4e00\u4e2a", "value": 0.005406126943869719}, {"name": "\u8d8a", "value": 0.00473870386437963}, {"name": "\u5218\u5f6c\u5f6c", "value": 0.00473870386437963}, {"name": "\u5854\u795e", "value": 0.00473870386437963}, {"name": "\u5965\u65af\u5361", "value": 0.00473870386437963}, {"name": "\u8fdb", "value": 0.00473870386437963}, {"name": "\u7403\u8ff7", "value": 0.00473870386437963}, {"name": "\u518d", "value": 0.004071280784889541}, {"name": "\u6253\u98de", "value": 0.004071280784889541}, {"name": "\u611f\u89c9", "value": 0.004071280784889541}, {"name": "\u79ef\u6781", "value": 0.004071280784889541}], "1": [{"name": "\u5854\u5c14\u5fb7\u5229", "value": 0.050777029834621464}, {"name": "\uff01", "value": 0.02833873514501787}, {"name": "\u8d8a\u4f4d", "value": 0.022521399484750272}, {"name": "\u9c81\u80fd", "value": 0.021690351533283473}, {"name": "\u88c1\u5224", "value": 0.012548824067148674}, {"name": "\u5439", "value": 0.010886728164215076}, {"name": "\u7403", "value": 0.010886728164215076}, {"name": "\u89c9\u5f97", "value": 0.010886728164215076}, {"name": "\u5916\u63f4", "value": 0.010055680212748276}, {"name": "\u627e", "value": 0.008393584309814676}, {"name": "\u8fd9\u573a", "value": 0.008393584309814676}, {"name": "\u8fdb\u7403", "value": 0.0075625363583478765}, {"name": "\u4f69\u83b1", "value": 0.0075625363583478765}, {"name": "\u5e94\u8be5", "value": 0.006731488406881077}, {"name": "\u6052\u5927", "value": 0.006731488406881077}, {"name": "\u8054\u8d5b", "value": 0.006731488406881077}, {"name": "\u8e22", "value": 0.005900440455414277}, {"name": "\u4e2d\u56fd", "value": 0.005900440455414277}, {"name": "\u7403\u5458", "value": 0.005900440455414277}, {"name": "\uff1f", "value": 0.005900440455414277}, {"name": "\u4e00\u4e2a", "value": 0.005900440455414277}, {"name": "\u5927\u8fde", "value": 0.005069392503947477}, {"name": "\u534a\u573a", "value": 0.005069392503947477}, {"name": "\u683c\u5fb7\u65af", "value": 0.005069392503947477}, {"name": "\u73b0\u5728", "value": 0.005069392503947477}, {"name": "\u8d35\u5dde", "value": 0.005069392503947477}, {"name": "\u4e3b\u573a", "value": 0.005069392503947477}, {"name": "\u9a6c\u529b", "value": 0.004238344552480678}, {"name": "\u786e\u5b9e", "value": 0.004238344552480678}, {"name": "\u6253", "value": 0.004238344552480678}], "2": [{"name": "\u5854\u5c14\u5fb7\u5229", "value": 0.07112422156669944}, {"name": "\uff01", "value": 0.01758986124767836}, {"name": "\u8d8a\u4f4d", "value": 0.01649732328198405}, {"name": "\u683c\u5fb7\u65af", "value": 0.015404785316289742}, {"name": "\uff1f", "value": 0.013219709384901126}, {"name": "\u5854\u795e", "value": 0.013219709384901126}, {"name": "\u80af\u5b9a", "value": 0.011034633453512509}, {"name": "\u9c81\u80fd", "value": 0.011034633453512509}, {"name": "\u70b9", "value": 0.009942095487818202}, {"name": "\u6c34\u5854", "value": 0.009942095487818202}, {"name": "\u771f\u7684", "value": 0.008849557522123894}, {"name": "\u53d8", "value": 0.008849557522123894}, {"name": "\u5e74\u8f7b", "value": 0.008849557522123894}, {"name": "\u534a\u573a", "value": 0.007757019556429586}, {"name": "\u4f69\u83b1", "value": 0.007757019556429586}, {"name": "\u5a76", "value": 0.007757019556429586}, {"name": "\u52e4\u594b", "value": 0.007757019556429586}, {"name": "\u80fd\u63a5", "value": 0.007757019556429586}, {"name": "\u73ed", "value": 0.007757019556429586}, {"name": "\u8fdb\u7403", "value": 0.006664481590735278}, {"name": "\u4eba", "value": 0.006664481590735278}, {"name": "\u4e2d\u8d85", "value": 0.006664481590735278}, {"name": "\u6ed1\u7a3d", "value": 0.00557194362504097}, {"name": "\u8fd9\u7403", "value": 0.00557194362504097}, {"name": "\u88c1\u5224", "value": 0.00557194362504097}, {"name": "\u8d5b\u5b63", "value": 0.00557194362504097}, {"name": "\u4e0d\u60f3", "value": 0.004479405659346662}, {"name": "\u72af\u89c4", "value": 0.004479405659346662}, {"name": "\u662f\u4e0d\u662f", "value": 0.004479405659346662}, {"name": "\u6700\u540e", "value": 0.004479405659346662}], "3": [{"name": "\u5854\u5c14\u5fb7\u5229", "value": 0.048945235373584126}, {"name": "\u9c81\u80fd", "value": 0.020887457133949915}, {"name": "\u6052\u5927", "value": 0.01257404135924348}, {"name": "\u6052\u4e30", "value": 0.01257404135924348}, {"name": "\u8d62", "value": 0.010495687415566871}, {"name": "\u4e2d\u573a", "value": 0.010495687415566871}, {"name": "\uff1f", "value": 0.009456510443728567}, {"name": "\u7403", "value": 0.009456510443728567}, {"name": "\u8e22", "value": 0.008417333471890264}, {"name": "\u7ec4\u7ec7", "value": 0.0073781565000519585}, {"name": "\u70b9\u7403", "value": 0.0073781565000519585}, {"name": "\u73b0\u5728", "value": 0.006338979528213655}, {"name": "\u4f69\u83b1", "value": 0.006338979528213655}, {"name": "\u6839\u672c", "value": 0.0052998025563753505}, {"name": "\uff01", "value": 0.0052998025563753505}, {"name": "\u55b7", "value": 0.0052998025563753505}, {"name": "\u597d", "value": 0.0052998025563753505}, {"name": "\u8fd9\u573a", "value": 0.0052998025563753505}, {"name": "\u65f6\u95f4", "value": 0.0052998025563753505}, {"name": "\u7403\u5458", "value": 0.0052998025563753505}, {"name": "\u7b11", "value": 0.0052998025563753505}, {"name": "\u4e22", "value": 0.004260625584537047}, {"name": "\u4e0d\u4f4f", "value": 0.004260625584537047}, {"name": "\u4fdd\u7ea7", "value": 0.004260625584537047}, {"name": "\u592a\u7d2f", "value": 0.004260625584537047}, {"name": "\u80af\u5b9a", "value": 0.004260625584537047}, {"name": "\u8fdb\u7403", "value": 0.004260625584537047}, {"name": "\u5c04\u95e8", "value": 0.004260625584537047}, {"name": "\u4e0a\u573a", "value": 0.004260625584537047}, {"name": "\u6743\u5065", "value": 0.004260625584537047}], "4": [{"name": "\u5854\u5c14\u5fb7\u5229", "value": 0.04326951929424473}, {"name": "\uff01", "value": 0.04026885914901278}, {"name": "\u9c81\u80fd", "value": 0.03726819900378083}, {"name": "\u683c\u5fb7\u65af", "value": 0.012662785812878835}, {"name": "\u4f69\u83b1", "value": 0.012062653783832445}, {"name": "\u8e22", "value": 0.012062653783832445}, {"name": "\u5916\u63f4", "value": 0.009061993638600493}, {"name": "\u5e0c\u671b", "value": 0.008461861609554103}, {"name": "\u7403\u5458", "value": 0.007861729580507711}, {"name": "\u6052\u5927", "value": 0.007861729580507711}, {"name": "\uff1f", "value": 0.007861729580507711}, {"name": "\u8fdb\u7403", "value": 0.007261597551461322}, {"name": "\u5409\u5c14", "value": 0.006661465522414931}, {"name": "\u73b0\u5728", "value": 0.006661465522414931}, {"name": "\u4e2d\u8d85", "value": 0.006661465522414931}, {"name": "\u5df4\u897f", "value": 0.006061333493368541}, {"name": "\u592a", "value": 0.005461201464322151}, {"name": "\u8d5b\u5b63", "value": 0.005461201464322151}, {"name": "\u4eca\u5e74", "value": 0.004861069435275761}, {"name": "\u4e2d\u573a", "value": 0.004861069435275761}, {"name": "\u4e0d\u9519", "value": 0.004861069435275761}, {"name": "\u673a\u4f1a", "value": 0.004861069435275761}, {"name": "\u674e\u9704\u9e4f", "value": 0.004861069435275761}, {"name": "\u80fd\u529b", "value": 0.004260937406229371}, {"name": "\u6253", "value": 0.004260937406229371}, {"name": "\u518d", "value": 0.004260937406229371}, {"name": "\u51a0\u519b", "value": 0.004260937406229371}, {"name": "\u6bd4\u8d5b", "value": 0.004260937406229371}, {"name": "\u9635\u5bb9", "value": 0.00366080537718298}, {"name": "\u91d1\u656c\u9053", "value": 0.00366080537718298}]};
var topic_summary = {"0": [{"content": "\u9c81\u80fd\u5df2\u7ecf2:0\u7684\u60c5\u51b5\u4e0b\uff0c88\u5206\u949f\u7684\u65f6\u5019\u5218\u5f6c\u5f6c\u8ddf\u5854\u5c14\u5fb7\u5229\u4e24\u4e2a\u4eba\u8fd8\u79ef\u6781\u524d\u573a\u7d27\u903c\uff0c\u6700\u7ec8\u5b8c\u6210\u4e86\u62a2\u65ad\u3002\u60f3\u4e00\u60f3\u5f53\u65f6\u7684\u6563\u6b65\u961f\uff0c\u518d\u770b\u770b\u8fd9\u4e2a\u8d5b\u5b63\u7684\u9c81\u80fd\uff0c\u771f\u7684\u611f\u5230\u5f00\u5fc3\u3002\u5e0c\u671b\u9c81\u80fd\u8fd9\u8d5b\u5b63\u53ef\u4ee5\u53d6\u5f97\u597d\u6210\u7ee9\uff0c\u529f\u592b\u4e0d\u8d1f\u6709\u5fc3\u4eba\uff0c\u9c81\u80fd\u52a0\u6cb9\uff01\uff01\uff01", "up": 740}, {"content": "\u770b\u5b8c\u8fd9\u8f6e\u6bd4\u8d5b\uff0c\u6211\u5f97\u6279\u8bc4\u5854\u5c14\u5fb7\u5229\u4e86\uff0c\u4f5c\u4e3a\u5df4\u897f\u4eba\uff0c\u4f60\u770b\u770b\u963f\u5170\uff0c\u5965\u65af\u5361\u90fd\u6234\u5e3d\u5b50\u4e86\uff0c\u4f60\u4e0d\u89c9\u5f97\u7f3a\u70b9\u513f\u4ec0\u4e48\u5417\uff1f", "up": 665}, {"content": "\u8d5b\u540e\uff0c\u5854\u5c14\u5fb7\u5229\u5927\u6c14\u4e0d\u5598\uff0c\u6602\u9996\u633a\u80f8\uff1a\u6211\u548c\u4f60\u4eec\u771f\u7684\u4e0d\u5728\u4e00\u4e2a\u4e16\u754c\u8e22\u7403\u3002\u3002\u3002", "up": 591}, {"content": "\u5854\u5c14\u5fb7\u5229:\u543e\u5fc3\u5bd2\u554a\uff01", "up": 402}, {"content": "\u4f69\u83b1\u548c\u5854\u5c14\u5fb7\u5229\u7684\u914d\u5408\u9a9a\u7684\u4e00\u6279\uff01", "up": 400}], "1": [{"content": "\u5854\u5c14\u5fb7\u5229\uff1a\u84bf\u4fca\u95f5\u8fd9\u7403\u6211\u7684\u5934\u53d1\u78b0\u5230\u4e86", "up": 642}, {"content": "\u6ca1\u6709\u5bf9\u6bd4\u5c31\u6ca1\u6709\u4f24\u5bb3\uff0c\u8fd9\u573a\u56fd\u5185\u88c1\u5224\u5bf9\u6bd4\u4e0a\u4e00\u8f6e\u7684\u56fd\u9645\u88c1\u5224\u5929\u5730\u4e4b\u5dee\uff0c\u5934\u78b0\u5934\u7684\u4e89\u7403\u7ed9\u9ec4\u724c\uff0c\u80cc\u540e\u94f2\u7403\u811a\u8e22\u8138\u53cd\u800c\u6ca1\u4e8b\uff0c\u6700TM\u6c14\u7684\u662f\u5854\u5c14\u5fb7\u5229\u90fd\u6ca1\u8fc7\u4e2d\u7ebf\u90fd\u80fd\u5439\u8d8a\u4f4d", "up": 570}, {"content": "\u544a\u8bc9\u4f60\u4eec\u4e2a\u7b11\u8bdd\uff0c\u5854\u5c14\u5fb7\u5229\u672a\u8fc7\u534a\u573a\u8d8a\u4f4d\uff01\uff01\uff01", "up": 566}, {"content": "\u5927\u5bb6\u90fd\u628a\u706b\u529b\u96c6\u4e2d\u5230\u8fb9\u88c1\u6ca1\u8fc7\u534a\u573a\u5439\u8d8a\u4f4d\u4e0a\u6765\uff0c\u6211\u89c9\u5f97\u53ef\u80fd\u9519\u8bef\u4e86\uff0c\u8fb9\u88c1\u53ef\u80fd\u771f\u7684\u662f\u6ca1\u6709\u6ce8\u610f\u5230\u5854\u5c14\u5fb7\u5229\u7684\u4f4d\u7f6e\uff0c\u5c5e\u4e8e\u8bef\u5224\u4e86\uff0c\u6211\u89c9\u5f97\u8fd8\u662f\u53ef\u4ee5\u7406\u89e3\u63a5\u53d7\u7684\uff0c\u4e3b\u88c1\u9a6c\u529b\u7684\u5224\u7f5a\u624d\u662f\u4e0d\u53ef\u63a5\u53d7\u7684\uff0c\u6309\u7167\u5218\u6d0b\u3001\u6234\u8001\u677f\u7684\u9ec4\u724c\u6807\u51c6\uff0c\u7edf\u4e00\u5c3a\u5ea6\u7684\u8bdd\uff0c\u91cd\u5e86\u65af\u5a01\u8fd9\u573a\u6bd4\u8d5b\u8981\u5f97\u5230\u591a\u5c11\u7ea2\u9ec4\u724c\uff1f\u518d\u9000\u4e00\u6b65\uff0c\u8981\u662f\u5ba2\u573a\u9a6c\u529b\u4f60\u8fd9\u4e48\u5224\u7f5a\u6211\u4e5f\u8ba4\u4e86\uff0c\u53efTMD\u8fd9\u662f\u6211\u4e3b\u573a\u554a\uff0c\u6211\u4e0d\u6c42\u4f60\u9a6c\u529b\u504f\u8892\u6211\u4e3b\u961f\uff0c\u516c\u5e73\u5bf9\u5f85\u53ef\u4ee5\u5427\uff1f\u5c3a\u5ea6\u7edf\u4e00\u53ef\u4ee5\u5427\uff1f\u7978\u4e0d\u53ca\u5bb6\u4eba\uff0c\u6211\u5c31\u4e0d\u95ee\u5019\u9a6c\u529b\u4f60\u5bb6\u4eba\u4e86\uff0c\u9a6c\u529bSB", "up": 16}, {"content": "\u4f5c\u4e3a\u9c81\u80fd\u7403\u8ff7\uff0c\u5df2\u7ecf\u4e60\u60ef\u4e86\u3002\u3002\u3002\u524d\u51e0\u8f6e\u5854\u5c14\u5fb7\u5229\u4e24\u6b21\u6ca1\u8fc7\u534a\u573a\u7684\u5355\u5200\u53cd\u51fb\u90fd\u5224\u8d8a\u4f4d\uff08\u8fd8\u90fd\u662f\u4e3b\u573a\u3002\u3002\u3002\u3002\u3002\u3002\uff09", "up": 15}], "2": [{"content": "\u5854\u5c14\u5fb7\u5229\u771f\u662f\u6c34\u5854\u554a\uff01\u6765\u4e2d\u8d85\u597d\u51e0\u5e74\u4e86\u8fde\u4e2d\u8d85\u7684\u8d8a\u4f4d\u89c4\u5219\u90fd\u4e0d\u61c2\uff0c\u4e0b\u6b21\u4f60\u76f4\u63a5\u5728\u81ea\u5df1\u5bb6\u7981\u533a\u5e26\u8fc7\u534a\u573a\uff0c\u53bb\u88c1\u5224\u5c31\u4e0d\u4f1a\u5439\u4f60\u8d8a\u4f4d\u4e86[\u6ed1\u7a3d][\u6ed1\u7a3d][\u6ed1\u7a3d]", "up": 653}, {"content": "\u4eca\u5929\u56e0\u4e3a\u8ddf\u7eff\u8272\u8e22\uff0c\u6240\u4ee5\u5854\u5c14\u5fb7\u5229\u4e0d\u6562\u6234\u5e3d", "up": 22}, {"content": "\u4f69\u83b1\uff1a\u5854\u5c14\u5fb7\u5229\uff0c\u5409\u5c14\uff0c\u91d1\u656c\u9053\uff0c\u4eca\u665a\u53bb\u6211\u5bb6\u73a9\u554a\uff0c\u4f60\u5ac2\u5b50\u5305\u7684\u997a\u5b50\u554a", "up": 14}, {"content": "\u5854\u5c14\u5fb7\u5229\u5bf9\u5f20\u7490\u72af\u89c4\u540e\uff0c\u5929\u6d25\u5168\u573a\u5728\u558a\u8f93\u4e0d\u8d77\uff0c\u5f53\u65f6\u5fc3\u91cc\u5f88\u6124\u6012\uff01\u5f53\u53d1\u6700\u540e\u4e00\u4e2a\u89d2\u7403\u65f6\uff0c\u6211\u5728\u60f3\u8fd9\u7403\u8981\u662f\u80fd\u8fdb\u6247\u4e86\u522b\u4eba\u7684\u8138\uff0c\u6211\u4eca\u665a\u5c31\u53bb\u559d\u9152\uff0c\u5e72\u676f\ud83c\udf7b", "up": 14}, {"content": "\u8d28\u7591\u8865\u65f6\u591a\u4e24\u5206\u949f\u7684 \u770b\u770b92\u5206\u949f\u6768\u65ed\u53d7\u4f24\u803d\u8bef\u4e86\u591a\u4e45\u3002\u5854\u5c14\u5fb7\u5229\u548c\u5f20\u7490\u51b2\u7a81\u803d\u8bef\u4e86\u591a\u4e45\u3002", "up": 13}], "3": [{"content": "\u683c\u5fb7\u65af\u9996\u79c0\u867d\u4e0d\u60ca\u8273\uff0c\u4f46\u4e5f\u60c5\u6709\u53ef\u539f\uff0c\u6bd5\u7adf\u5df4\u897f\u73b0\u5728\u662f\u51ac\u5929\uff0c\u6e29\u5ea6\u53ea\u670920\u5ea6\u5de6\u53f3\uff0c\u5230\u8fd9\u4e48\u6e7f\u70ed\u7684\u4e2d\u56fd\u5357\u65b9\u786e\u5b9e\u5f88\u96be\u9002\u5e94\uff0c\u4f46\u4ece\u4e0d\u591a\u7684\u62ff\u7403\u4f20\u7403\u6765\u770b\uff0c\u6280\u672f\u5148\u4e0d\u8bf4\uff0c\u811a\u4e0b\u57fa\u672c\u529f\u5f88\u624e\u5b9e\uff0c\u5904\u7406\u7403\u4e0d\u8131\u6ce5\u5e26\u6c34\uff0c\u53ef\u80fd\u81ea\u5df1\u4e5f\u662f\u9996\u79c0\uff0c\u8eab\u4f53\u5fc3\u7406\u90fd\u4e0d\u5728\u6700\u4f73\u72b6\u6001\uff0c\u6ca1\u6709\u53d1\u6325\u51fa\u6765\uff0c\u800c\u4e14\u5c0f\u4f19\u5b50\u8fd8\u5e74\u8f7b\uff0c\u9700\u8981\u961f\u5185\u5927\u54e5\u53ee\u5631\u5f15\u5bfc\uff0c\u4e0d\u8bb0\u5f97\u5854\u5c14\u5fb7\u5229\u521a\u6765\u7684\u65f6\u5019\u561b\uff0c\u4e0d\u4e5f\u88ab\u55b7\u7684\u4e00\u65e0\u662f\u5904...\u591a\u7ed9\u4eba\u5bb6\u4e00\u70b9\u65f6\u95f4\uff0c\u6bd5\u7adf\u7b2c\u4e00\u6b21\u51fa\u56fd\u8e22\u7403\uff0c\u4eba\u751f\u5730\u4e0d\u719f\uff0c\u6162\u6162\u6765\uff0c\u6211\u770b\u597d\u4ed6...", "up": 119}, {"content": "\u5854\u5c14\u5fb7\u5229\u8e22\u4e22\u70b9\u7403\u540e\u4e0d\u5c11\u4eba\u90fd\u5728\u55b7\uff0c\u5176\u5b9e\u6211\u89c9\u5f97\u5854\u5c14\u5fb7\u5229\u8fd8\u662f\u86ee\u597d\u7684\uff0c\u8fd9\u573a\u6bd4\u8d5b\u5954\u8dd1\u5f88\u79ef\u6781\uff0c\u9c81\u80fd\u4e2d\u573a\u5403\u529b\uff0c\u56de\u64a4\u7684\u6df1\u4e00\u70b9\u662f\u5e94\u8be5\u7684\uff0c\u5982\u679c\u6ca1\u6709\u5854\u5c14\u5fb7\u5229\u7684\u53d1\u6325\uff0c\u6211\u9c81\u80af\u5b9a\u4f1a\u66f4\u52a0\u5403\u7d27\u3002", "up": 48}, {"content": "1\u53ea\u80fd\u8bf4\u662f\u9c81\u80fd\u7684\u8fd0\u6c14\u597d\uff0c\u6743\u5065\u4e09\u4e2a\u95e8\u67f1\u4e0d\u8d70\u8fd0\u3002\u4ee5\u73b0\u5728\u7684\u4eba\u5458\u914d\u7f6e\uff0c\u80fd\u6b7b\u62fc\u9c81\u80fd\uff0c\u6743\u5065\u5df2\u7ecf\u505a\u7684\u5f88\u597d\u4e86\u30022\u5c0f\u91d1\u5b50\u8fd8\u662f\u4e0d\u65ad\u7684\u5954\u8dd1\uff0c\u5404\u79cd\u62a2\u65ad\u548c\u51b2\u523a\u30023\u5f20\u4fee\u7ef4\u95e8\u7ebf\u6551\u9669\u30024\u5168\u573a\u6700\u4f73:\u5854\u5c14\u5fb7\u5229\uff0c17\u4e2a\u8fdb\u7403\u3002", "up": 8}, {"content": "\u5854\u5c14\u5fb7\u5229\u7b11\u4e86", "up": 8}, {"content": "\u4e0d\u5f97\u4e0d\u8bf4\u8fd9\u573a\u9c81\u80fd\u7684\u62a2\u65ad\u8ddf\u62e6\u622a\u505a\u7684\u5f88\u5230\u4f4d\uff0c\u914d\u5408\u4e5f\u86ee\u4e0d\u9519\uff0c\u4f46\u662f\u7403\u5458\u4eec\u5e73\u65f6\u90fd\u4e0d\u7ec3\u5c04\u95e8\u7684\u5417\uff1f\u9664\u4e86\u5854\u5c14\u5fb7\u5229\u6ca1\u4e00\u4e2a\u9760\u8c31\u7684", "up": 7}], "4": [{"content": "\u4ec5\u4e2a\u4eba\u89c2\u70b9\uff0c\u9c81\u80fd\uff1a\u4e2d\u524d\u573a\u6709\u84bf\u4fca\u95f5\u3001\u5434\u5174\u6db5\uff0c\u5218\u519b\u5e05\uff0c\u5c0f\u91d1\uff0c\u5854\u5c14\u5fb7\u5229\u3002 \u6052\u5927\uff1a\u90d1\u667a\uff0c\u4fdd\u5229\u5c3c\u5965\uff0c\u90dc\u6797\uff0c\u5854\u91cc\u65af\u5361\uff0c\u66ff\u8865\uff0c\u6c49\u8d85\uff0c\u9ec4\u535a\u6587\uff0c\u90d1\u9f99\u65e0\u8bba\u5b9e\u529b\u8fd8\u662f\u5de8\u661f\u6c14\u8d28\uff0c\u65e0\u8bba\u662f\u5728\u8054\u8d5b\u8fd8\u662f\u5728\u4e9a\u51a0\u8d5b\u573a\u6052\u5927\u7684\u4e2d\u524d\u957f\u53ef\u4ee5\u662f\u9876\u7ea7\u914d\u7f6e\uff08\u6ca1\u6709\u4e4b\u4e00\uff09\u4f46\u662f\u9c81\u80fd\u4eca\u5e74\u5df2\u7ecf\u6709\u5f88\u5927\u7684\u7a81\u7834\uff0c\u5c06\u58eb\u9f50\u5fc3\uff0c\u6709\u5929\u65f6\uff0c\u6709\u4eba\u548c\uff0c\u4e0d\u5f97\u4e0d\u63d0\u7684\u672c\u8d5b\u5b63\u6709\u4e00\u90e8\u5206\u8fd0\u6c14\u6210\u5206\uff0c\u76ee\u524d\u4ee5\u8fd9\u4e2a\u9635\u5bb9\u8e22\u6210\u8fd9\u6837\u5df2\u7ecf\u5f88\u5f3a\u5927\u4e86\u3001\u4e0e\u4e0a\u6e2f\u6bd4\uff0c\u5916\u63f4\u5dee\u8ddd\u5927\uff0c\u4e0e\u5317\u4eac\u6bd4\u6574\u4f53\u53d1\u6325\u7684\u786e\u6b20\u7f3a\u4e00\u70b9\uff0c\u4f46\u662f\u8981\u662f\u4e89\u51a0\u7684\u8bdd\u5c31\u662f\u6709\u4e9b\u8de8\u6d77\u53e3\u4e86\uff0c\u771f\u4e0d\u5207\u5b9e\u9645\u3002\u6052\u5927\u76ee\u524d\u6218\u7ee9\u6392\u540d\u786e\u5b9e\u662f\u4e0a\u534a\u8d5b\u7a0b\u81ea\u5df1\u9635\u5bb9\u786e\u5b9e\u6bd4\u5f80\u5e74\u5f31\u4e86\uff0c\u7edf\u6cbb\u529b\u4e0b\u964d\u4e24\u4e2a\u5c42\u9762\uff0c\u8981\u662f\u6052\u5927\u4ee5\u73b0\u5728\u9635\u5bb9\u4ece\u8d5b\u5b63\u521d\u671f\u5f00\u59cb\uff0c\u90a3\u5176\u4ed6\u7403\u961f20\u8f6e\u4ee5\u540e\u5c31\u5f97\u8003\u8651\uff0c\u4e9a\u519b\u4ee5\u53ca\u4e9a\u51a0\u8d44\u683c\u8d5b\u4e86\uff0c\u671f\u5f85\u4eca\u5e74\u7ade\u4e89\u6fc0\u70c8\uff0c\u771f\u5fc3\u5e0c\u671b\u6052\u5927\u8fd8\u662f\u51a0\u519b\ud83c\udfc6\u4ee3\u8868\u7956\u56fd\u518d\u6b21\u51fa\u73b0\u5728\u4e16\u4ff1\u676f\u821e\u53f0\u4e0a^_^^_^(7\u5e74\u9c81\u80fd\u7403\u8ff7\uff0c8\u5e74\u7684\u6052\u5927\u8ff7\u7559\uff01)", "up": 18}, {"content": "\u672c\u8d5b\u5b63\u56fd\u5b89\u653b\u51fb\u529b\u5f3a\u5927\uff0c\u9c81\u80fd\u4e0b\u573a\u9762\u4e34\u8003\u9a8c\uff01\u5854\u5c14\u5fb7\u5229\u626e\u6f14\u4e00\u6b21\u7ec8\u7ed3\u8005\u5427\uff01", "up": 12}, {"content": "\u91d1\u656c\u9053\u6709\u80fd\u529b\u5728\u56fd\u8db3\u9996\u53d1\u5360\u4e00\u5e2d\u4f4d\u554a\uff0c\u5854\u5c14\u5fb7\u5229\u8fd8\u662f\u6709\u5e0c\u671b\u8e22\u4e0a\u4e16\u754c\u676f\u7684\uff0c\u5728\u5df4\u897f\u56fd\u5bb6\u961f\u5360\u4e2a\u66ff\u8865\u540d\u989d\u4e30\u5bcc\u4e0b\u6218\u672f\u4e5f\u4e0d\u9519\uff0c\u90a3\u9b3c\u9b45\u7684\u8dd1\u4f4d\u548c\u4f20\u7403\u53ef\u4ee5\u505a\u5947\u5175\u6d3e\u4e0a", "up": 10}, {"content": "\u9c81\u80fd\u9886\u5148\u540e\u6253\u7684\u592a\u4fdd\u5b88\uff0c\u88ab\u677f\u5e73\u6ca1\u8f93\u7403\u5f88\u5e78\u8fd0\uff0c\u5e0c\u671b\u603b\u7ed3\u7ecf\u9a8c\uff0c\u4e30\u5bcc\u6253\u6cd5\uff0c\u4f69\u83b1\u7684\u5934\u7403\u9700\u5b66\u4e60\u5854\u5c14\u5fb7\u5229\u4e0a\u4e00\u573a\u5934\u7403\u7684\u8d28\u91cf\u5c31\u8fdb\u4e86\uff0c\u4eca\u5e74\u8ddd\u5934\u540d\u6700\u8fd1\uff0c\u628a\u63e1\u673a\u4f1a\uff0c\u8981\u518d\u593a\u4e2d\u8d85\u8054\u8d5b\u51a0\u519b\u91cd\u632f\u5c71\u4e1c\u8db3\u7403\u5c31\u6700\u7406\u60f3\uff01", "up": 9}, {"content": "\u606d\u559c\u9c81\u80fd\uff0c\u5e0c\u671b\u9c81\u80fd\u56fd\u5185\u7403\u5458\u4e0e\u683c\u5fb7\u65af\uff0c\u5854\u5c14\u5fb7\u5229\u52a0\u5f3a\u914d\u5408\uff0c\u9c81\u80fd10\u5e74\u6765\u6700\u6709\u5e0c\u671b\u9760\u8fd1\u51a0\u519b\u7684\u4e00\u5e74\uff0c\u4e00\u5b9a\u628a\u63e1\u4f4f\u673a\u4f1a\uff0c\u5982\u593a\u51a0\u519b\u91cd\u632f\u5c71\u4e1c\u8db3\u7403\uff01", "up": 9}]};
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
