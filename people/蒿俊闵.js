var data = {"person_name": "\u84bf\u4fca\u95f5", "nicknames": "\u84bf\u4fca\u95f5", "aspects": {"\u7403\u5458": 0.4123433803399536, "\u5916\u63f4": 0.40371610843058114, "\u8fdb\u7403": 0.4105647234022697, "\u540e\u8170": 0.5036827696469719, "\u4f20\u4e2d": 0.4035487458349124, "\u9632\u5b88": 0.5676259758582212, "\u56fd\u5bb6\u961f": 0.515336786655633, "\u7403\u8ff7": 0.6048064033708463, "\u540e\u9632": 0.493649795150992, "\u8fdb\u653b": 0.505576691106646}, "overall_heat": 124.0, "overall_polar": 0.329, "name": "92", "nationality": "\u4e2d\u56fd", "position": "\u4e2d\u573a", "goal": "2", "assist": "7", "team_name": "\u5c71\u4e1c\u9c81\u80fd\u6cf0\u5c71", "name_en": "Hao Junmin", "age": "31", "height": "181", "weight": "74"};
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
var topic_keywords = {"0": [{"name": "\u84bf\u4fca\u95f5", "value": 0.04087233884726653}, {"name": "\uff1f", "value": 0.029745567836213935}, {"name": "\u9c81\u80fd", "value": 0.017877012091091167}, {"name": "\uff01", "value": 0.014168088420740303}, {"name": "\u4e2d\u573a", "value": 0.009717380016319265}, {"name": "\u5d14\u9e4f", "value": 0.009717380016319265}, {"name": "\u6253", "value": 0.008975595282249092}, {"name": "\u73b0\u5728", "value": 0.006750241080038573}, {"name": "\u4e00\u4e2a", "value": 0.006750241080038573}, {"name": "\u5439", "value": 0.006750241080038573}, {"name": "\u9632\u5b88", "value": 0.006750241080038573}, {"name": "\u4f9d\u7136", "value": 0.0060084563459684}, {"name": "\u7403\u5458", "value": 0.0060084563459684}, {"name": "\u56fd\u5bb6\u961f", "value": 0.0060084563459684}, {"name": "\u6b66\u78ca", "value": 0.005266671611898227}, {"name": "\u597d", "value": 0.005266671611898227}, {"name": "\u4e00\u4e0b", "value": 0.005266671611898227}, {"name": "\u5916\u63f4", "value": 0.005266671611898227}, {"name": "\u91d1\u656c\u9053", "value": 0.005266671611898227}, {"name": "\u90d1\u667a", "value": 0.005266671611898227}, {"name": "\u8fdb\u653b", "value": 0.005266671611898227}, {"name": "\u7533\u82b1", "value": 0.005266671611898227}, {"name": "\u540e\u8170", "value": 0.005266671611898227}, {"name": "\u540e\u9632", "value": 0.004524886877828055}, {"name": "\u5409\u5c14", "value": 0.004524886877828055}, {"name": "\u4eba", "value": 0.004524886877828055}, {"name": "\u6052\u5927", "value": 0.004524886877828055}, {"name": "\u4e0b", "value": 0.004524886877828055}, {"name": "\u6700", "value": 0.004524886877828055}, {"name": "\u5434\u5174\u6db5", "value": 0.004524886877828055}], "1": [{"name": "\uff01", "value": 0.08752327746741155}, {"name": "\u84bf\u4fca\u95f5", "value": 0.04218281920492268}, {"name": "\u9c81\u80fd", "value": 0.020322241114079834}, {"name": "\u8d8a\u4f4d", "value": 0.010606428629260789}, {"name": "\u8e22", "value": 0.008987126548457616}, {"name": "\u7403", "value": 0.008987126548457616}, {"name": "\u5434\u5174\u6db5", "value": 0.008177475508056028}, {"name": "\u7403\u5458", "value": 0.008177475508056028}, {"name": "\u8fdb\u7403", "value": 0.0073678244676544415}, {"name": "\u5dee", "value": 0.006558173427252854}, {"name": "\u5916\u63f4", "value": 0.006558173427252854}, {"name": "\u91d1\u656c\u9053", "value": 0.005748522386851267}, {"name": "\u4f69\u83b1", "value": 0.005748522386851267}, {"name": "\u770b\u5230", "value": 0.005748522386851267}, {"name": "\u5c0f", "value": 0.005748522386851267}, {"name": "\u88c1\u5224", "value": 0.005748522386851267}, {"name": "\u4e2d\u573a", "value": 0.004938871346449681}, {"name": "\u4e0a\u6e2f", "value": 0.004938871346449681}, {"name": "\uff1f", "value": 0.004938871346449681}, {"name": "\u5e94\u8be5", "value": 0.004938871346449681}, {"name": "\u7403\u8ff7", "value": 0.004129220306048093}, {"name": "\u5f3a", "value": 0.004129220306048093}, {"name": "\u51fa\u7403", "value": 0.004129220306048093}, {"name": "\u53d1\u6325", "value": 0.004129220306048093}, {"name": "\u597d", "value": 0.004129220306048093}, {"name": "\u60f3", "value": 0.004129220306048093}, {"name": "\u4e00\u4e2a", "value": 0.004129220306048093}, {"name": "\u6cb3\u5357", "value": 0.003319569265646506}, {"name": "\u6c34\u5e73", "value": 0.003319569265646506}, {"name": "\u52a9\u653b", "value": 0.003319569265646506}], "2": [{"name": "\uff01", "value": 0.02891797943939058}, {"name": "\u9c81\u80fd", "value": 0.021522076769469715}, {"name": "\u84bf\u4fca\u95f5", "value": 0.02078248650247763}, {"name": "\u8e22", "value": 0.014865764366540938}, {"name": "\uff1f", "value": 0.011907403298572592}, {"name": "\u4e2d\u573a", "value": 0.010428222764588418}, {"name": "\u90d1\u667a", "value": 0.008949042230604245}, {"name": "\u6052\u5927", "value": 0.008209451963612158}, {"name": "\u5916\u63f4", "value": 0.008209451963612158}, {"name": "\u4eba", "value": 0.007469861696620073}, {"name": "\u4e70", "value": 0.007469861696620073}, {"name": "\u9752\u8bad", "value": 0.006730271429627986}, {"name": "\u4e00\u4e2a", "value": 0.0059906811626359}, {"name": "\u80fd\u529b", "value": 0.0059906811626359}, {"name": "\u4e24\u4e2a", "value": 0.0059906811626359}, {"name": "\u77e5\u9053", "value": 0.005251090895643813}, {"name": "\u518d", "value": 0.005251090895643813}, {"name": "\u7403\u5458", "value": 0.005251090895643813}, {"name": "\u4e0d\u597d", "value": 0.004511500628651727}, {"name": "\u4f4d\u7f6e", "value": 0.004511500628651727}, {"name": "\u91d1\u656c\u9053", "value": 0.004511500628651727}, {"name": "\u683c\u5fb7\u65af", "value": 0.004511500628651727}, {"name": "\u4e70\u56de\u6765", "value": 0.004511500628651727}, {"name": "\u597d", "value": 0.004511500628651727}, {"name": "\u5218\u6d0b", "value": 0.0037719103616596404}, {"name": "\u9635\u5bb9", "value": 0.0037719103616596404}, {"name": "\u6253", "value": 0.0037719103616596404}, {"name": "\u4e00\u4e0b", "value": 0.0037719103616596404}, {"name": "\u540e\u8170", "value": 0.0037719103616596404}, {"name": "\u8fb9\u8def", "value": 0.0037719103616596404}]};
var topic_summary = {"0": [{"content": "\u5854\u5c14\u5fb7\u5229\uff1a\u84bf\u4fca\u95f5\u8fd9\u7403\u6211\u7684\u5934\u53d1\u78b0\u5230\u4e86", "up": 642}, {"content": "\u59da\u5747\u665f\u4e0d\u9519\uff0cT9 \u4f9d\u7136\u98ce\u9a9a\uff0c\u84bf\u4fca\u95f5\u51fa\u7403\u4f9d\u7136\u56fd\u5185\u7fd8\u695a\uff0c\u4f69\u83b1\u4f9d\u7136\u7f3a\u4e4f\u8fd0\u6c14\uff0c\u91d1\u656c\u9053\u4f9d\u7136\u5f88\u62fc\uff0c\u6234\u8001\u677f\u4f9d\u7136\u813e\u6c14\u706b\u7206\uff0c\u5409\u5c14\u4f9d\u7136\u7a33\u7684\u4e00\u6279\uff0c\u552f\u4e00\u6709\u70b9\u5c0f\u5c0f\u4e0d\u5f00\u5fc3\u7684\uff0c\u4f69\u5ac2\u6ca1\u770b\u5230", "up": 22}, {"content": "\u6ca1\u4eba\u5439\u4e00\u6ce2\u84bf\u4fca\u95f5\u561b\uff1f\u4e2d\u573a\u7684\u5927\u8111", "up": 14}, {"content": "\u9876\u4e00\u9876\u59da\u4fca\u665f\uff0c\u5c0f\u4f19\u5b50\u6709\u524d\u9014\u3002\u672a\u6765\u63a5\u68d2\u84bf\u4fca\u95f5", "up": 13}, {"content": "\u5d14\u9e4f\u51cf\u80a5\u6210\u529f\uff0c\u6280\u672f\u8fd8\u662f\u597d\u7684\u6ca1\u8bdd\u8bf4\uff0c\uff0c\u80fd\u529b\u73b0\u5728\u4e2d\u8d85\u4f9d\u7136\u80fd\u6392\u4e0a\u53f7\u3002\u5c0f\u91d1\u4f9d\u7136\u662f\u6beb\u4e0d\u60dc\u529b\u5168\u573a\u98de\u5954\uff0c\u8fdb\u7403\u662f\u6700\u597d\u7684\u56de\u62a5\u3002\u84bf\u4fca\u95f5\u5931\u8bef\u6709\u70b9\u591a\u5566\uff0c\u53ef\u4ee5\u4f11\u606f\u4e00\u4e0b\u8bd5\u8bd5\u3002\u5218\u519b\u5e05\u8fd8\u662f\u6bd4\u8f83\u7a33\u7684\uff0c\u5434\u5174\u6db5\u6cef\u7136\u4f17\u4eba\u77e3\uff0c\u738b\u5f64\u5e94\u8be5\u662f\u4e0b\u4e00\u4efb\u961f\u957f\uff0c\u5b8b\u9f99\u9632\u5b88\u6709\u4f59\u8fdb\u653b\u4e0d\u8db3\uff0c\u603b\u4e4b\uff0c\u6c38\u8fdc\u652f\u6301\u9c81\u80fd\uff0c\u52a0\u6cb9\uff01\uff01\uff01\uff01", "up": 12}], "1": [{"content": "\u84bf\u4fca\u95f5\u90a3\u7403\u7edd\u58c1\u662f\u51ef\u6069\u8fdb\u7684\uff01", "up": 1005}, {"content": "\u4f69\u6765\u548c\u84bf\u4fca\u95f5\u597d\u5f3a\uff0c\u5218\u5f6c\u5f6c\u548c\u5468\u6d77\u6ee8\u5df2\u7ecf\u51c9\u4e86", "up": 324}, {"content": "\u9700\u8981\u5927\u5bb6\u770b\u5230\u84bf\u4fca\u95f5\u7684\u51e0\u6b21\u5173\u952e\u8f6c\u79fb\uff0c\u4e09\u54e5\u5927\u5c40\u89c2\u5728\u56fd\u5185\u7403\u5458\u91cc\u5e94\u8be5\u80fd\u6392\u5f97\u4e0a\uff01", "up": 245}, {"content": "\u84bf\u4fca\u95f5\u53d1\u6325\u7684\u592a\u5dee\u4e86\uff01\u5e26\u7684\u9c81\u80fd\u4e71\u5957\u4e86\uff01\u5c31\u738b\u5f64\uff0c\u5c0f\u91d1\u5b50\u8fd8\u884c\uff01\u5434\u5174\u6db5\u8fd9\u6837\u7684\u5c31\u5f97\u66ff\u8865\u731b\u51b2", "up": 208}, {"content": "\u4f69\u83b1\u7684\u4f5c\u7528\uff0c\u4e0d\u4ec5\u4ec5\u662f\u8fdb\u7403\uff1b\u6ca1\u6709\u4f69\u83b1\uff0c\u518d\u725b\u903c\u7684\u5854\u5c14\u5fb7\u5229\uff0c\u4e5f\u53ea\u80fd\u53eb\u505a\u6c34\u5854\uff1b\u6ca1\u6709\u4f69\u83b1\uff0c\u9c81\u80fd\u7684\u91d1\u656c\u9053\u5218\u5f6c\u5f6c\u5434\u5174\u6db5\u8dd1\u518d\u5feb\uff0c\u4e5f\u662f\u778e****\u8dd1\uff1b\u6ca1\u6709\u4f69\u83b1\uff0c\u84bf\u4fca\u95f5\u53ea\u6709\u548c\u5bf9\u624b\u8fdb\u884c\u65e0\u4f11\u65e0\u6b62\u7684\u8089\u640f\u7f20\u6597\u3002\u4f69\u83b1\uff0c\u8ba9\u9c81\u80fd\u63d0\u5347\u4e86\u4e00\u4e2a\u6863\u6b21\u3002", "up": 28}], "2": [{"content": "\u5ba2\u89c2\u8bc4\u7403\u3002\u56fd\u5b89\u8fd9\u8fb9\u65bd\u5bc6\u7279\u8fd9\u573a\u8981\u5e72\u4ec0\u4e48\u6211\u6ca1\u770b\u61c2\u3002\u5355\u4ece\u8fd9\u573a\u6765\u770b\uff0c\u5df4\u574e\u5e03\u662f\u4e0d\u662f\u6c34\u8d27\u4e0d\u597d\u8bf4\uff0c\u4f46\u663e\u7136\u4e0d\u662f\u9ed1\u53c8\u786c\u81ea\u5df1\u5355\u5e72\u7c7b\u578b\u7684\uff0c\u5c0f\u6280\u672f\u770b\u8d77\u6765\u4e5f\u4e0d\u5982\u7d22\u91cc\u4e9a\u8bfa\uff0c\u518d\u770b\u4e24\u573a\u518d\u8bf4\u5427\uff0c\u4f46\u8fd9\u4e24\u4e2a\u524d\u950b\u4e0d\u80fd\u540c\u65f6\u4e0a\u4e86\u3002\u664b\u9e4f\u7fd4\u662f\u7edd\u5bf9\u4e0d\u80fd\u7528\u4e86\uff0c\u4f5c\u4e2d\u536b\u592a\u6bdb\u7cd9\uff0c\u4f5c\u4e3a\u8fb9\u536b\u66f4\u4e0d\u884c\u3002\u65b0\u6765\u7684\u90a3\u4e2a\u5218\u6b22\u66ff\u8865\u7528\u7528\u8fd8\u884c\uff0c\u6253\u4e0d\u4e86\u9996\u53d1\u3002\u540e\u8170\u6734\u6210\u548c\u6c60\u5fe0\u56fd\u81f3\u5c11\u4e0a\u4e00\u4e2a\uff0c\u628a\u50b2\u9aa8\u9876\u5230\u524d\u8170\u4e0a\u3002\u95e8\u5c06\u4faf\u68ee\u53cd\u5e94\u548c\u5f00\u5927\u811a\u80fd\u529b\u582a\u5fe7\uff0c\u4e0d\u77e5\u9053\u4e3a\u5565\u4e0d\u7528\u6c60\u6587\u4e00\u3002\u674e\u78ca\u8fd8\u662f\u653e\u5728\u5de6\u540e\u536b\u4e0a\u5427\uff0c\u51fa\u7403\u80fd\u529b\u548c\u5927\u5c40\u89c2\u8e22\u4e0d\u4e86\u540e\u8170\u3002U23\u9996\u53d1\u7528\u5df4\u987f\u6bd4\u8f83\u597d\uff0c\u97e6\u4e16\u8c6a\u662f\u4e00\u4e2a\u96f7\uff0c\u9996\u53d1\u98ce\u9669\u592a\u5927\uff0c\u53ef\u4ee5\u7528\u505a\u66ff\u8865\u5947\u5175\u3002\u8fd9\u6837\u4e0b\u6765\uff0c\u9635\u5bb9\u53ef\u4ee5\u662f\u8fd9\u6837:\u6c60\u6587\u4e00\uff1b\u674e\u78ca\uff0c\u4e8e\u6d0b\uff0c\u96f7\u817e\u9f99\uff0c\u59dc\u6d9b\uff1b\u6c60\u5fe0\u56fd\uff0c\u6734\u6210\uff08\u5415\u9e4f\uff09\uff1b\u6bd4\u57c3\u62c9\uff0c\u5965\u53e4\u65af\u6258\uff0c\u5df4\u987f\uff08\u97e6\u4e16\u8c6a\uff09\uff1b\u5df4\u574e\u5e03\uff08\u7d22\u91cc\u4e9a\u8bfa\uff09\u3002\u9c81\u80fd\u8fd9\u8fb9\u4eca\u5929\u8e22\u5f97\u4e0d\u9519\uff0cU23\u59da\u5747\u665f\u4e0d\u9519\uff0c\u811a\u6cd5\u548c\u7ec4\u7ec7\u80fd\u529b\u4ee5\u540e\u53ef\u4ee5\u63a5\u84bf\u4fca\u95f5\u7684\u73ed\u4e86\u3002\u9c81\u80fd\u7684\u4eba\u624d\u50a8\u5907\u77ed\u671f\u5185\u4e5f\u4e0d\u7528\u5728\u5927\u9762\u79ef\u4e70\u4eba\u4e86\uff0c\u627e\u4e2a\u597d\u6559\u7ec3\u591a\u591a\u6253\u78e8\u5427\uff0c\u672a\u6765\u53ef\u671f\u3002", "up": 20}, {"content": "\u4ec5\u4e2a\u4eba\u89c2\u70b9\uff0c\u9c81\u80fd\uff1a\u4e2d\u524d\u573a\u6709\u84bf\u4fca\u95f5\u3001\u5434\u5174\u6db5\uff0c\u5218\u519b\u5e05\uff0c\u5c0f\u91d1\uff0c\u5854\u5c14\u5fb7\u5229\u3002 \u6052\u5927\uff1a\u90d1\u667a\uff0c\u4fdd\u5229\u5c3c\u5965\uff0c\u90dc\u6797\uff0c\u5854\u91cc\u65af\u5361\uff0c\u66ff\u8865\uff0c\u6c49\u8d85\uff0c\u9ec4\u535a\u6587\uff0c\u90d1\u9f99\u65e0\u8bba\u5b9e\u529b\u8fd8\u662f\u5de8\u661f\u6c14\u8d28\uff0c\u65e0\u8bba\u662f\u5728\u8054\u8d5b\u8fd8\u662f\u5728\u4e9a\u51a0\u8d5b\u573a\u6052\u5927\u7684\u4e2d\u524d\u957f\u53ef\u4ee5\u662f\u9876\u7ea7\u914d\u7f6e\uff08\u6ca1\u6709\u4e4b\u4e00\uff09\u4f46\u662f\u9c81\u80fd\u4eca\u5e74\u5df2\u7ecf\u6709\u5f88\u5927\u7684\u7a81\u7834\uff0c\u5c06\u58eb\u9f50\u5fc3\uff0c\u6709\u5929\u65f6\uff0c\u6709\u4eba\u548c\uff0c\u4e0d\u5f97\u4e0d\u63d0\u7684\u672c\u8d5b\u5b63\u6709\u4e00\u90e8\u5206\u8fd0\u6c14\u6210\u5206\uff0c\u76ee\u524d\u4ee5\u8fd9\u4e2a\u9635\u5bb9\u8e22\u6210\u8fd9\u6837\u5df2\u7ecf\u5f88\u5f3a\u5927\u4e86\u3001\u4e0e\u4e0a\u6e2f\u6bd4\uff0c\u5916\u63f4\u5dee\u8ddd\u5927\uff0c\u4e0e\u5317\u4eac\u6bd4\u6574\u4f53\u53d1\u6325\u7684\u786e\u6b20\u7f3a\u4e00\u70b9\uff0c\u4f46\u662f\u8981\u662f\u4e89\u51a0\u7684\u8bdd\u5c31\u662f\u6709\u4e9b\u8de8\u6d77\u53e3\u4e86\uff0c\u771f\u4e0d\u5207\u5b9e\u9645\u3002\u6052\u5927\u76ee\u524d\u6218\u7ee9\u6392\u540d\u786e\u5b9e\u662f\u4e0a\u534a\u8d5b\u7a0b\u81ea\u5df1\u9635\u5bb9\u786e\u5b9e\u6bd4\u5f80\u5e74\u5f31\u4e86\uff0c\u7edf\u6cbb\u529b\u4e0b\u964d\u4e24\u4e2a\u5c42\u9762\uff0c\u8981\u662f\u6052\u5927\u4ee5\u73b0\u5728\u9635\u5bb9\u4ece\u8d5b\u5b63\u521d\u671f\u5f00\u59cb\uff0c\u90a3\u5176\u4ed6\u7403\u961f20\u8f6e\u4ee5\u540e\u5c31\u5f97\u8003\u8651\uff0c\u4e9a\u519b\u4ee5\u53ca\u4e9a\u51a0\u8d44\u683c\u8d5b\u4e86\uff0c\u671f\u5f85\u4eca\u5e74\u7ade\u4e89\u6fc0\u70c8\uff0c\u771f\u5fc3\u5e0c\u671b\u6052\u5927\u8fd8\u662f\u51a0\u519b\ud83c\udfc6\u4ee3\u8868\u7956\u56fd\u518d\u6b21\u51fa\u73b0\u5728\u4e16\u4ff1\u676f\u821e\u53f0\u4e0a^_^^_^(7\u5e74\u9c81\u80fd\u7403\u8ff7\uff0c8\u5e74\u7684\u6052\u5927\u8ff7\u7559\uff01)", "up": 18}, {"content": "\u8bf4\u5b9e\u8bdd\u6211\u4e0d\u662f\u9c81\u80fd\u7403\u8ff7\uff0c\u4f46\u8fd9\u4e00\u6218\uff0c\u8def\u8f6c\u7c89\u4e86\uff0c\u9c81\u80fd\u4e2d\u573a\u8e22\u5f97\u4e0d\u9519\uff0c\u84bf\u4fca\u95f5\u7ec4\u7ec7\u5f97\u53ef\u4ee5\uff0c\u4e24\u4e2a\u8fb9\u8def\u4e5f\u7a81\u7684\u53ef\u4ee5\uff0c\u6700\u503c\u5f97\u8bf4\u7684\u5c31\u662fU23\u7684\u4f7f\u7528\uff0cU23\u6362U23\uff0c\u53ef\u4ee5\u770b\u51fa\u9752\u8bad\u4f53\u7cfb\u7684\u5f3a\u5927\uff01\u7ee7\u7eed\u52a0\u6cb9\uff0c\u795d\u9c81\u80fd\u4eca\u5e74\u53d6\u5f97\u597d\u6210\u7ee9\uff01", "up": 15}, {"content": "\u539f\u6765\u6c5f\u6e56\u4e2d\u4f20\u95fb\u5df2\u4e45\u7684\u201c\u90d1\u667a\u63a5\u73ed\u4eba\u201d\u4e0d\u662f\u5434\u66e6\u3001\u84bf\u4fca\u95f5\u3001\u9ec4\u535a\u6587\uff0c\u4e5f\u4e0d\u662f\u5ed6\u529b\u751f\u3001\u5f90\u65b0\u7b49\uff0c\u800c\u662f\u4ed6\u2014\u2014\u4e2d\u56fd\u7684\u9b54\u7b1b\u5f20\u4fee\u7ef4\uff01", "up": 9}, {"content": "\u4e0d\u8bba\u662f\u672c\u8d5b\u5b63\u8fd8\u662f\u4ee5\u540e\u7684\u8d5b\u5b63\uff0c\u9c81\u80fd\u8981\u60f3\u4e89\u51a0\u519b\uff0c\u8981\u505a\u7684\u8fd8\u6709\u5f88\u591a\uff0c\u5916\u63f4\u4e0a\u6700\u8fd1\u7684\u5f15\u63f4\u601d\u8def\u8fd8\u662f\u5728\u6b63\u8f68\u7684\uff0c\u4e0d\u6c42\u8d35\u7684\u4f46\u6c42\u5bf9\u7684\uff0c\u76ee\u524d\u7684\u51e0\u540d\u5916\u63f4\u878d\u5165\u7403\u961f\u4e0a\u8fd8\u7b97\u53ef\u4ee5\u3002\u56fd\u5185\u7403\u5458\u65b9\u9762\u8fd8\u662f\u4e0d\u8ba9\u4eba\u6ee1\u610f\uff0c\u5c24\u5176\u662f\u5f15\u4ee5\u4e3a\u50b2\u7684\u9752\u8bad\u51fa\u54c1\u7684\u7403\u5458\uff0c\u65e0\u8bba\u662fu23\u8fd8\u662f\u4e2d\u751f\u4ee3\u672c\u571f\u9752\u8bad\uff0c\u8fd8\u627e\u4e0d\u5230\u5728\u5404\u4e2a\u4f4d\u7f6e\u4e0a\u6311\u5927\u6881\u7684\u4eba\uff0c\u76ee\u524d\u7684\u56fd\u5185\u6838\u5fc3\u7403\u5458\u4ecd\u7136\u4ee5\u524d\u51e0\u5e74\u5f15\u8fdb\u7684\u84bf\u4fca\u95f5\u3001\u738b\u5927\u96f7\u3001\u91d1\u656c\u9053\u7b49\u4eba\u4e3a\u4e3b\uff0c\u8fd9\u51e0\u5e74\u7684\u5218\u5f6c\u5f6c\u5434\u5174\u6db5\u5218\u519b\u5e05\u5f20\u5f1b\u674e\u677e\u76ca\u7b49\u8db3\u6821\u51fa\u54c1\u7403\u5458\uff0c\u80fd\u529b\u7279\u70b9\u90fd\u6bd4\u8f83\u5355\u4e00\uff0c\u662f\u53ef\u7528\u4e4b\u4eba\uff0c\u4f46\u96be\u4ee5\u671f\u5f85\u4ed6\u4eec\u6709\u72ec\u5f53\u4e00\u9762\u4e34\u5371\u6551\u4e3b\u7684\u53d1\u6325\uff0c\u6709\u7684\u9ad8\u5f00\u4f4e\u8d70\uff0c\u6709\u7684\u4e00\u76f4\u6ca1\u8e22\u51fa\u6765\uff0c\u6709\u7684\u751a\u81f3\u8fd8\u62d6\u540e\u817f\uff0c\u6240\u4ee5\u8bf4\u9c81\u80fd\u6700\u5927\u7684\u8d44\u672c\u662f\u51fa\u8272\u7684\u9752\u8bad\uff0c\u4f46\u5982\u4f55\u8ba9\u9752\u8bad\u4eba\u624d\u62d4\u5c16\u513f\u5374\u662f\u96be\u4e8b\uff0c\u8981\u60f3\u4fdd\u6301\u5728\u4e89\u51a0\u884c\u5217\uff0c\u5f15\u8fdb\u9ad8\u6c34\u5e73\u5185\u63f4\u3001\u7a33\u5b9a\u7b26\u5408\u6280\u6218\u672f\u7684\u5916\u63f4\u3001\u57f9\u517b\u56fd\u5bb6\u961f\u5b9e\u529b\u7684\u9752\u8bad\u4eba\u624d\u624d\u662f\u5173\u952e\u3002", "up": 7}]};
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
