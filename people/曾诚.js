var data = {"person_name": "\u66fe\u8bda", "nicknames": "\u66fe\u8bda\u3001\u589e\u57ce", "aspects": {"\u70b9\u7403": 0.42177352020634834, "\u6bd4\u8d5b": 0.5384429437675127, "\u8fdb\u7403": 0.5748667553783771, "\u72af\u89c4": 0.466961032099436, "\u7403\u8ff7": 0.662863153989435, "\u7403\u5458": 0.49856529564030183, "\u624b\u7403": 0.6802262005532705, "\u8fdb\u653b": 0.3332464801566033, "\u9632\u5b88": 0.4611706772928216, "\u56fd\u95e8": 0.0}, "overall_heat": 466.0, "overall_polar": 0.559, "name": "6", "nationality": "\u4e2d\u56fd", "position": "\u5b88\u95e8\u5458", "goal": "0", "assist": "0", "team_name": "\u5e7f\u5dde\u6052\u5927\u6dd8\u5b9d", "name_en": "Zeng Cheng", "age": "31", "height": "191", "weight": "83"};
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
var topic_keywords = {"0": [{"name": "\u66fe\u8bda", "value": 0.04954378784002729}, {"name": "\uff1f", "value": 0.04186919075637418}, {"name": "\u8e29", "value": 0.018845399505414855}, {"name": "\u70b9\u7403", "value": 0.016287200477530486}, {"name": "\u72af\u89c4", "value": 0.015434467468235695}, {"name": "\u88c1\u5224", "value": 0.014581734458940907}, {"name": "\uff01", "value": 0.012876268440351325}, {"name": "\u5df4\u574e\u5e03", "value": 0.012023535431056536}, {"name": "var", "value": 0.010318069412466956}, {"name": "\u8fdb\u7403", "value": 0.010318069412466956}, {"name": "\u5439", "value": 0.010318069412466956}, {"name": "\u624b\u7403", "value": 0.010318069412466956}, {"name": "\u5934", "value": 0.010318069412466956}, {"name": "\u4e4b\u524d", "value": 0.010318069412466956}, {"name": "\u6052\u5927", "value": 0.009465336403172165}, {"name": "\u95ee\u9898", "value": 0.008612603393877377}, {"name": "\u660e\u663e", "value": 0.007759870384582587}, {"name": "\u589e\u57ce", "value": 0.007759870384582587}, {"name": "\u7403", "value": 0.007759870384582587}, {"name": "\u90d1\u667a", "value": 0.006907137375287797}, {"name": "\u56fd\u5b89", "value": 0.006054404365993007}, {"name": "\u6885\u65b9", "value": 0.006054404365993007}, {"name": "\u90a3\u7403", "value": 0.006054404365993007}, {"name": "\u52a8\u4f5c", "value": 0.0052016713566982176}, {"name": "\u5148", "value": 0.0052016713566982176}, {"name": "\u5df2\u7ecf", "value": 0.0052016713566982176}, {"name": "\u5e94\u8be5", "value": 0.0052016713566982176}, {"name": "\u4e3b\u88c1", "value": 0.0052016713566982176}, {"name": "\u5224\u7f5a", "value": 0.004348938347403427}, {"name": "\u5224", "value": 0.004348938347403427}], "1": [{"name": "\uff01", "value": 0.09128794278312778}, {"name": "\u66fe\u8bda", "value": 0.0845300444894971}, {"name": "\u6052\u5927", "value": 0.01469842878864673}, {"name": "\uff1f", "value": 0.014135270597510841}, {"name": "\u95e8\u5c06", "value": 0.011882637832967282}, {"name": "\u589e\u57ce", "value": 0.010756321450695501}, {"name": "\u725b", "value": 0.00963000506842372}, {"name": "\u5e7f\u5dde\u5854", "value": 0.00963000506842372}, {"name": "\u903c", "value": 0.00906684687728783}, {"name": "\u5723", "value": 0.00850368868615194}, {"name": "\u6251", "value": 0.00850368868615194}, {"name": "\u70b9\u7403", "value": 0.00850368868615194}, {"name": "\u597d", "value": 0.00850368868615194}, {"name": "\u60f3", "value": 0.00794053049501605}, {"name": "\u5389\u5bb3", "value": 0.00737737230388016}, {"name": "\u52a9\u5a01", "value": 0.00737737230388016}, {"name": "\u6b66\u6c49", "value": 0.005124739539336599}, {"name": "\u7edd\u6740", "value": 0.005124739539336599}, {"name": "\u8fd9\u573a", "value": 0.005124739539336599}, {"name": "\u5efa\u4e1a", "value": 0.005124739539336599}, {"name": "\u6251\u70b9", "value": 0.005124739539336599}, {"name": "\u72b6\u6001", "value": 0.005124739539336599}, {"name": "\u5439", "value": 0.004561581348200709}, {"name": "\u53d7\u4f24", "value": 0.004561581348200709}, {"name": "\u505a", "value": 0.004561581348200709}, {"name": "\u8138", "value": 0.004561581348200709}, {"name": "\u6342", "value": 0.004561581348200709}, {"name": "\u4e00\u6b21", "value": 0.004561581348200709}, {"name": "\u56fd\u5185", "value": 0.0039984231570648196}, {"name": "\u592a", "value": 0.0039984231570648196}], "2": [{"name": "\uff01", "value": 0.09053251212732326}, {"name": "\u6052\u5927", "value": 0.0485637978961138}, {"name": "\ud83d\ude01", "value": 0.04365836376519321}, {"name": "\u8d62", "value": 0.024581675478279826}, {"name": "\u66fe\u8bda", "value": 0.024036627241510875}, {"name": "\u603b\u7ed3", "value": 0.02240148253120401}, {"name": "\u5723", "value": 0.02240148253120401}, {"name": "\u5f31\u9879", "value": 0.021856434294435057}, {"name": "\u6551\u70b9", "value": 0.021856434294435057}, {"name": "\u620f\u7cbe", "value": 0.021856434294435057}, {"name": "\u5feb\u4e50", "value": 0.021856434294435057}, {"name": "\u5faa\u73af", "value": 0.021856434294435057}, {"name": "\u5f00\u6302", "value": 0.021856434294435057}, {"name": "\u6f14\u6280", "value": 0.021856434294435057}, {"name": "\u56de\u62a5", "value": 0.021856434294435057}, {"name": "\u552f\u4e00", "value": 0.021856434294435057}, {"name": "\u54e5\u4eec\u513f", "value": 0.021856434294435057}, {"name": "\u5165\u6728\u4e09\u5206", "value": 0.021856434294435057}, {"name": "\u513f\u7ae5\u8282", "value": 0.021856434294435057}, {"name": "\u4e8b\u524d", "value": 0.021856434294435057}, {"name": "\u4e09\u500d", "value": 0.021856434294435057}, {"name": "\u4e09\u4e2a", "value": 0.021856434294435057}, {"name": "\u6700\u8fd1", "value": 0.021856434294435057}, {"name": "\u6251\u70b9", "value": 0.021856434294435057}, {"name": "\u7b2c\u4e00", "value": 0.021856434294435057}, {"name": "\u91cd\u70b9", "value": 0.021856434294435057}, {"name": "\u90d1\u9f99", "value": 0.021856434294435057}, {"name": "\u8fdf\u6765", "value": 0.021856434294435057}, {"name": "\u795d\u798f", "value": 0.021856434294435057}, {"name": "\u8fde\u73af", "value": 0.021856434294435057}], "3": [{"name": "\u66fe\u8bda", "value": 0.04872454299019948}, {"name": "\uff01", "value": 0.03760339195106693}, {"name": "\u7403", "value": 0.011885730173072914}, {"name": "\u589e\u57ce", "value": 0.01119065823312713}, {"name": "\u6251", "value": 0.009800514353235559}, {"name": "\u6052\u5927", "value": 0.009105442413289776}, {"name": "\u4e00\u4e2a", "value": 0.008410370473343991}, {"name": "\u5218\u6bbf\u5ea7", "value": 0.008410370473343991}, {"name": "\u95e8\u5c06", "value": 0.0077152985333982065}, {"name": "\u4e70", "value": 0.007020226593452422}, {"name": "\u4e24\u4e2a", "value": 0.007020226593452422}, {"name": "\u7b11", "value": 0.006325154653506637}, {"name": "\u518d", "value": 0.006325154653506637}, {"name": "\u7a33", "value": 0.005630082713560853}, {"name": "\u8e22", "value": 0.005630082713560853}, {"name": "\u54ed", "value": 0.005630082713560853}, {"name": "\u8d23\u4efb", "value": 0.004935010773615069}, {"name": "\u989c\u9a8f\u51cc", "value": 0.004935010773615069}, {"name": "\u6c34\u5e73", "value": 0.004935010773615069}, {"name": "\u80fd\u529b", "value": 0.004239938833669284}, {"name": "\u4e70\u56de\u6765", "value": 0.004239938833669284}, {"name": "\u5605", "value": 0.004239938833669284}, {"name": "\u80af\u5b9a", "value": 0.004239938833669284}, {"name": "\u81f3\u5c11", "value": 0.004239938833669284}, {"name": "\u4eba", "value": 0.004239938833669284}, {"name": "\u6ce2", "value": 0.004239938833669284}, {"name": "\u5dee", "value": 0.004239938833669284}, {"name": "\u8fdb", "value": 0.0035448668937235}, {"name": "\u5e94\u8be5", "value": 0.0035448668937235}, {"name": "\u540e\u536b", "value": 0.0035448668937235}], "4": [{"name": "\u66fe\u8bda", "value": 0.048069457189242604}, {"name": "\u6052\u5927", "value": 0.029011082092186065}, {"name": "\u5c81", "value": 0.01489376720547752}, {"name": "\u6bd4\u8d5b", "value": 0.011364438483800381}, {"name": "\u8fd9\u573a", "value": 0.009952706995129526}, {"name": "\u771f\u7684", "value": 0.009246841250794098}, {"name": "\u4e0a\u6e2f", "value": 0.008540975506458671}, {"name": "\u90d1\u667a", "value": 0.008540975506458671}, {"name": "\u4e00\u4e2a", "value": 0.007835109762123243}, {"name": "\u8e22", "value": 0.007835109762123243}, {"name": "\uff1f", "value": 0.007835109762123243}, {"name": "\u5218\u6bbf\u5ea7", "value": 0.006423378273452389}, {"name": "\u90dc\u6797", "value": 0.006423378273452389}, {"name": "\u7403\u8ff7", "value": 0.006423378273452389}, {"name": "\uff01", "value": 0.006423378273452389}, {"name": "\u771f", "value": 0.006423378273452389}, {"name": "\u9ad8\u62c9\u7279", "value": 0.005717512529116961}, {"name": "\u597d", "value": 0.005717512529116961}, {"name": "\u989c\u9a8f\u51cc", "value": 0.005717512529116961}, {"name": "\u786e\u5b9e", "value": 0.005717512529116961}, {"name": "\u673a\u4f1a", "value": 0.005011646784781534}, {"name": "30", "value": 0.004305781040446106}, {"name": "\u53d1\u6325", "value": 0.004305781040446106}, {"name": "\u9632\u5b88", "value": 0.004305781040446106}, {"name": "\u89c9\u5f97", "value": 0.004305781040446106}, {"name": "\u7a33", "value": 0.004305781040446106}, {"name": "\u674e\u5b66\u9e4f", "value": 0.004305781040446106}, {"name": "\u7403", "value": 0.004305781040446106}, {"name": "\u7403\u5458", "value": 0.004305781040446106}, {"name": "\u5931\u8bef", "value": 0.004305781040446106}], "5": [{"name": "\u66fe\u8bda", "value": 0.043755773914504074}, {"name": "\u6052\u5927", "value": 0.01604098429495255}, {"name": "\uff01", "value": 0.01520114218526917}, {"name": "\uff1f", "value": 0.01352145796590241}, {"name": "\u90dc\u6797", "value": 0.009322247417485512}, {"name": "\u7403", "value": 0.009322247417485512}, {"name": "\u4e00\u4e2a", "value": 0.008482405307802133}, {"name": "\u90d1\u667a", "value": 0.007642563198118753}, {"name": "\u771f\u7684", "value": 0.007642563198118753}, {"name": "\u5bf9\u65b9", "value": 0.006802721088435374}, {"name": "\u5f00", "value": 0.006802721088435374}, {"name": "\u4e2d\u8d85", "value": 0.005962878978751994}, {"name": "\u8d70", "value": 0.005962878978751994}, {"name": "\u95e8\u5c06", "value": 0.005962878978751994}, {"name": "\u5927\u811a", "value": 0.005962878978751994}, {"name": "\u73b0\u5728", "value": 0.005962878978751994}, {"name": "\u6700\u540e", "value": 0.005962878978751994}, {"name": "\u5439", "value": 0.005123036869068615}, {"name": "\u8fdb\u7403", "value": 0.005123036869068615}, {"name": "\u7403\u5458", "value": 0.005123036869068615}, {"name": "\u4e0a\u6e2f", "value": 0.005123036869068615}, {"name": "\u9ad8\u62c9\u7279", "value": 0.004283194759385235}, {"name": "\u4e00\u70b9", "value": 0.004283194759385235}, {"name": "\u77e5\u9053", "value": 0.004283194759385235}, {"name": "\u4e22", "value": 0.004283194759385235}, {"name": "\u6bd4\u8d5b", "value": 0.004283194759385235}, {"name": "\u540e\u9632", "value": 0.004283194759385235}, {"name": "\u9ec4\u535a\u6587", "value": 0.004283194759385235}, {"name": "\u4e22\u7403", "value": 0.004283194759385235}, {"name": "\u8868\u73b0", "value": 0.004283194759385235}]};
var topic_summary = {"0": [{"content": "\u88c1\u5224\u4e0d\u884c\uff0c\u90d1\u667a\u6ca1\u6709\u660e\u663e\u72af\u89c4\u52a8\u4f5c\uff0c\u89c6\u9891\u4e5f\u6ca1\u770b\u5230\u6709\u6253\u5230\u7eff\u8272\u7403\u5458\uff0c\u8fd9\u6837\u8fdb\u7403\u60c5\u51b5\u4e0b\u5c45\u7136\u88ab\u5439\u51fa\u6765\uff0c\u53cd\u8fc7\u6765\u4e4b\u524d\u7eff\u961f\u8fdb\u653b\u76f4\u63a5\u8e29\u66fe\u8bda\u5934\u88c1\u5224\u4e0d\u5439\u624d\u6709\u4e86\u8865\u5c04\u6885\u65b9\u7684\u624b\u7403\uff0c2\u4e2a\u65b9\u9762\u90fd\u662f\u6052\u5927\u5403\u88c1\u5224\u4e8f\uff0c\u82e5\u975e\u7eff\u8863\u7403\u5458\u4e0d\u4e89\u6c14\uff0c\u6052\u5927\u5c31\u88ab\u5bb3\u60e8\u4e86\u3002", "up": 93}, {"content": "\u6709\u70b9\u6211\u4e0d\u662f\u5f88\u660e\u767d\uff0c\u6885\u65b9\u624b\u7403\u6ca1\u9519\uff0c\u4f46\u4e4b\u524d\u51e0\u79d2\u66fe\u8bda\u88ab\u8e29\u5934\u5c45\u7136\u6ca1\u6709\u5224\u7f5a\u72af\u89c4\uff0cVAR\u53ef\u4ee5\u56de\u653e\uff0c\u89c6\u9891\u88c1\u5224\u4e3a\u4ec0\u4e48\u4e0d\u63d0\u9192\uff1fOK\uff0c\u5982\u679c\u6309\u7167\u8fd9\u79cd\u5224\u7f5a\u5c3a\u5ea6\uff0c\u4e3a\u4ec0\u4e48\u9ad8\u62c9\u7279\u6ca1\u6709\u8d8a\u4f4d\u8fdb\u7403\uff0c\u5374\u5439\u7f5a\u4e4b\u524d\u90d1\u667a\u7684\u72af\u89c4\uff1f \u4e3b\u88c1\u6211\u89c9\u5f97\u95ee\u9898\u4e0d\u5927\uff0c\u89c6\u9891\u88c1\u5224\u7edd\u903c\u5411\u7740\u56fd\u5b89\u3002", "up": 35}, {"content": "\u811a\u8e29\u589e\u57ce\u8111\u888b\uff0c\u4e0d\u7ba1\u6709\u610f\u65e0\u610f\uff0c\u81f3\u5c11\u4e00\u4e2a\u5371\u9669\u52a8\u4f5c\u5427\uff01\u76f4\u63a5\u65e0\u89c6\uff0c\u8df3\u8fc7\u53bb\u76f4\u63a5\u770b\u6885\u82b3\u6709\u6ca1\u6709\u624b\u7403\uff0c\u4e5f\u662f\u5389\u5bb3\u7684\uff0c\u4e3a\u4e86\u4fdd\u9001****\u51a0\u519b\uff0c\u8db3\u534f\u8138\u90fd\u4e0d\u8981\u4e86\uff01", "up": 21}, {"content": "\u8db3\u534f\u7acb\u573a\u975e\u5e38\u660e\u663e\u7684\u4e00\u573a\u4e86\uff1a\u5df4\u574e\u5e03\u5148\u8e29\u4e86\u66fe\u8bda\uff0c\u7136\u540e\u6885\u65b9\u624b\u7403\uff0c\u76f4\u63a5var\u5439\u70b9\u7403\uff1b\u9ad8\u62c9\u7279\u8fdb\u7684\u90a3\u7403\uff0c\u8fd8\u6709\u9093\u6db5\u6587\u7981\u533a\u88ab\u62cc\u5012\uff0c\u53cd\u8fc7\u6765\u5c31\u53ef\u4ee5var\u56de\u6eaf\u53bb\u627e\u4e4b\u524d\u7684\u72af\u89c4\uff1b\u5439\u6389\u5df4\u574e\u5e03\u90a3\u4e2a\u8fdb\u7403\u660e\u663e\u624b\u8098\u52a8\u4f5c\uff0c\u65e2\u7136\u4f60\u5439\u4e86\uff0c\u8fd9\u79cd\u52a8\u4f5c\u51fa\u4e2a\u724c\u4e0d\u5408\u7406\uff1f\u6052\u5927\u8fdb\u7403\u540e\u7acb\u9a6cvar\u653e\u5927\u955c\u627e\u95ee\u9898\uff0c\u8fd9\u79cd\u64cd\u4f5c\u6211\u662f\u95fb\u6240\u672a\u95fb\u3002\u6362\u505a\u67d0\u961f\u5728\u81ea\u5df1\u4e3b\u573a\u8fd9\u6837\uff0c\u53c8\u662f\u4e00\u573a\u7f62\u8d5b\u4e86\u3002", "up": 20}, {"content": "\u5224\u6885\u65b9\u624b\u7403\u524d\u5df4\u574e\u5e03\u8e29\u4e86\u66fe\u8bda\u7684\u5934\u600e\u4e48\u4e0d\u5439\uff1fCNMVAR\u3002", "up": 16}], "1": [{"content": "\u5723\u66fe\u8bda\uff0c\u5e7f\u5dde\u5854\uff0c\u4eca\u665a\u7ed9\u6211\u5439\u7206\uff01\uff01\uff01\uff01\uff01\uff01", "up": 2356}, {"content": "\u66fe\u8bda\u725b\u903c\uff01\uff01\u5854\u5229\u65af\u5361\u725b\u903c\uff01\uff01\u6052\u5927\u725b\u903c\uff01\uff01", "up": 1047}, {"content": "\u6052\u5927\u68d2\uff01\uff01\uff01\uff01\u5854\u5229\u65af\u5361\u771f\u725b\u903c\uff01\uff01\uff01\uff01\u771f\u7684\u60ca\u5fc3\u52a8\u9b44\uff01\uff01\uff01\u7279\u522b\u662f\u589e\u57ce\uff01\u70b9\u7403\u6251\u51fa\u6765\uff01\u5e05\u54ed\u5566[\u5389\u5bb3][\u5389\u5bb3][\u5389\u5bb3]", "up": 904}, {"content": "\u66fe\u8bda\u6251\u51fa\u70b9\u7403\u90a3\u4e00\u523b\uff0c\u89e3\u6c14\u3002\u5854\u5229\u65af\u5361\u7edd\u6740\u90a3\u4e00\u4e0b\uff0c\u66f4\u89e3\u6c14\u3002\u8fd9\u5c31\u662f\u547d\uff01\u51a0\u519b\u547d\uff01", "up": 875}, {"content": "\u5929\u4f53\u4e4b\u77db\u5854\u5229\u65af\u5361\uff0c\u5929\u4f53\u4e4b\u76fe\u5723\u66fe\u8bda\uff01", "up": 367}], "2": [{"content": "\u603b\u7ed31\uff1a\u7b2c\u4e00\u5faa\u73af\u5343\u4e07\u4e0d\u8981\u8d62\u6052\u5927\uff0c\u6052\u5927\u4f1a\u4e09\u500d\u56de\u62a5\uff012\uff1a\u90d1\u9f99\u7b2c2\u4e2a\u8fdb\u7403\u56fa\u7136\u7cbe\u5f69\uff0c\u91cd\u70b9\u5728\u4e8b\u524d\u4e09\u4e2a\u620f\u7cbe\u7684\u6f14\u6280\uff0c\u5165\u6728\u4e09\u5206\uff013:\u5723\u66fe\u8bda\u552f\u4e00\u5f31\u9879\u662f\u6251\u70b9\uff0c\u6700\u8fd1\u8fde\u73af\u6551\u70b9\uff0c\u5f00\u6302\uff014\uff1a\u8fdf\u6765\u7684\u795d\u798f\uff0c\u5404\u4f4d\u54e5\u4eec\u513f\uff0c\u513f\u7ae5\u8282\u5feb\u4e50\uff01\ud83d\ude01\ud83d\ude01", "up": 295}, {"content": "\u603b\u7ed31\uff1a\u7b2c\u4e00\u5faa\u73af\u5343\u4e07\u4e0d\u8981\u8d62\u6052\u5927\uff0c\u6052\u5927\u4f1a\u4e09\u500d\u56de\u62a5\uff012\uff1a\u90d1\u9f99\u7b2c2\u4e2a\u8fdb\u7403\u56fa\u7136\u7cbe\u5f69\uff0c\u91cd\u70b9\u5728\u4e8b\u524d\u4e09\u4e2a\u620f\u7cbe\u7684\u6f14\u6280\uff0c\u5165\u6728\u4e09\u5206\uff013:\u5723\u66fe\u8bda\u552f\u4e00\u5f31\u9879\u662f\u6251\u70b9\uff0c\u6700\u8fd1\u8fde\u73af\u6551\u70b9\uff0c\u5f00\u6302\uff014\uff1a\u8fdf\u6765\u7684\u795d\u798f\uff0c\u5404\u4f4d\u54e5\u4eec\u513f\uff0c\u513f\u7ae5\u8282\u5feb\u4e50\uff01\ud83d\ude01\ud83d\ude01", "up": 111}, {"content": "\u66fe\u8bda\u8981\u662f\u5728\uff0c\u8fd9\u573a\u6052\u5927\u8d62\uff01", "up": 5}, {"content": "\u6211\u5f88\u559c\u6b22\u6052\u5927 \u597d\u6b79\u662f\u7b2c\u4e00\u652f\u8ba9\u4e9a\u6d32\u7403\u961f\u60e7\u6015\u7684\u7403\u961f \u6211\u4e4b\u524d\u6709\u4e00\u4e2a\u8bc4\u8bba \u8bf4\u8fc7\u8fd9\u573a\u6bd4\u8d5b\u6052\u5927\u8d62\u4e0d\u4e86 \u6700\u597d\u4e5f\u5c31\u80fd\u6253\u4e2a\u5e73\u5c40 \u8fd8\u4e0d\u4fe1 \u7ed9\u4f60\u5206\u6790\u4e00\u4e0b \u56fd\u5185\u7403\u5458\u8001\u9f84\u5316 \u90dc\u6797\u5168\u573a\u9690\u8eab \u90d1\u667a\u5e74\u9f84\u592a\u5927 \u66b4\u529b\u9e1f\u4e0d\u4f1a\u4f20\u7403 \u963f\u5170\u6709\u70b9\u6c34\u8eab\u4f53\u4e0d\u597d \u5f20\u7433\u8283\u73b0\u5728\u8d8a\u6765\u8d8a\u6c34 \u5931\u8bef\u9891\u9891 \u66fe\u8bda\u66f4\u662f\u4e0d\u7a33 \u5854\u5229\u65af\u5361\u7684\u5b9a\u4f4d\u4e0d\u51c6\u786e\u6ee1\u573a\u6362\u4f4d\u7f6e \u6240\u4ee5\u6211\u4e4b\u524d\u624d\u4f1a\u8bf4\u6052\u5927\u8d62\u4e0d\u4e86 \u6700\u597d\u6210\u7ee9\u80fd\u6253\u5e73\u5c31\u5f88\u4e0d\u9519\u4e86 \u73b0\u5728\u627f\u8ba4\u4e86\u561b \u8fd9\u4e5f\u6572\u54cd\u8b66\u949f \u544a\u8bc9\u6052\u5927\u8be5\u66f4\u65b0\u6362\u4ee3\u4e86", "up": 3}, {"content": "\u603b\u7ed3\u4e00\u4e0b\uff1a\u5723\u66fe\u8bda\uff01\u5e7f\u5dde\u5854\uff01\u5361\u7eb3\u74e6\u7f57\u751f\u65e5\u5feb\u4e50\uff01\uff01\uff01", "up": 3}], "3": [{"content": "\u5218\u6bbf\u5ea7 \u8ddf\u66fe\u8bda\u5dee\u4e86\u4e0d\u6b62\u4e00\u4e2a\u6863\u6b21", "up": 2065}, {"content": "\u66fe\u8bda\u672c\u573a\u6bd4\u8d5b\u6ca1\u6709\u6253\u51fa\u4ed6\u7684\u8eab\u4ef7", "up": 385}, {"content": "\u66fe\u8bda\u7684\u7a33\u5065\u6108\u52a0\u51f8\u663e\u5218\u6bbf\u5ea7\u7684\u4f4e\u7ea7", "up": 87}, {"content": "\u66fe\u8bda\uff0c\u4e0d\u8981\u70ed\u8eab\u4e86\uff0c\u76d6\u4e2a\u6bef\u5427\u3002", "up": 10}, {"content": "\u5982\u679c\u4e0d\u662f\u5927\u8fde\u9ed1\u4eba\u524d\u950b\u8fd0\u6c14\u4e0d\u597d\uff0c\u66fe\u8bda\u8868\u73b0\u6781\u4f73\uff01\u4e0a\u534a\u573a\u6052\u5927\u5df2\u7ecf\u6210\u4e86\u7b5b\u5b50\u3002\u5e0c\u671b\u4e0d\u8981\u88ab0:3\u8499\u853d\u4e86", "up": 10}], "4": [{"content": "\u4e2d\u7acb\u7403\u8ff7\u95ee\u4e00\u53e5\uff1a\u6052\u5927\u8ddf\u6743\u5065\u6709\u4ec0\u4e48\u8fc7\u8282\u5417\uff1f\u5168\u573a\u9a82\u58f0\uff0c\u770b\u76f4\u64ad\u7684\u65f6\u5019\u80cc\u540e\u97f3\u8fd8\u6709\u597d\u591a\u7403\u8ff7\u9a82\u90dc\u6797\uff0c\u66fe\u8bda\u3002\u4f60\u4eec\u8fc7\u8282\u90a3\u4e48\u5927\u7684\u5417\uff1f", "up": 871}, {"content": "\u90d1\u667a38\u5c81\u3001\u51af\u6f47\u970633\u5c81\u3001\u90dc\u679732\u5c81\u3001\u66fe\u8bda31\u5c81\u3001\u9ec4\u535a\u658731\u5c81\u3001\u674e\u5b66\u9e4f30\u5c81\u3001\u5f20\u7433\u828329\u5c81\u3001\u9ad8\u62c9\u727927\u5c81\u3001\u963f\u517029\u5c81\u2026\u2026\uff0c\u9996\u5148\u652f\u6301\u5168\u534e\u73ed\uff0c\u5176\u6b21\u5e73\u574730\u5c81\u7684\u7403\u961f\u771f\u7684\u9700\u8981\u5168\u9762\u6362\u8840\u4e86\uff0c\u9ec4\u535a\u6587\u8e22\u4e86\u5341\u51e0\u5206\u949f\u5c31\u6ee1\u8eab\u5927\u6c57\uff0c\u51af\u6f47\u9706\u548c\u5f20\u7433\u8283\u53ea\u80fd\u7528\u72af\u89c4\u5f25\u8865\u901f\u5ea6\u7f3a\u9677\uff0c\u800c\u5728\u4e0b\u534a\u573a\u540e\u9636\u6bb5\u674e\u5b66\u9e4f\u4e5f\u57fa\u672c\u4e0a\u542f\u52a8\u4e0d\u8d77\u6765\uff0c\u4e8e\u6c49\u8d85\u57fa\u672c\u900f\u652f\u2026\u2026\u770b\u5f97\u60ca\u5fc3\u52a8\u9b44\uff0c\u5f88\u96be\u60f3\u50cf\u660e\u5e74\u4f1a\u600e\u4e48\u6837", "up": 329}, {"content": "\u5c31\u6211\u4e00\u4e2a\u4eba\u611f\u89c9\u989c\u9a8f\u51cc\u7684\u529f\u52b3\u5417\uff1f\u51e0\u4e2a\u795e\u6251\uff1f\u8fd9\u8d5b\u5b63\u66fe\u8bda\u6ca1\u6cd5\u548c\u4ed6\u6bd4\uff01", "up": 311}, {"content": "\u4e3a3\uff1a0\u540e\u4f9d\u7136\u8fd8\u90a3\u4e48\u62fc\u7684\u66fe\u8bda\u70b9\u4e2azan", "up": 271}, {"content": "\u6cf0\u8fbe\u90a3\u4e2a\u7403\u662f\u597d\u7403\uff0c\u4e0d\u8fc7\u6052\u5927\u4e8e\u6c49\u8d85\u7ed9\u9ad8\u62c9\u7279\u7684\u5355\u5200\u4e5f\u662f\u597d\u7403\u88ab\u5439\uff0c\u975e\u6d17\uff0c\u90fd\u662f\u597d\u7403\u3002\u8fd9\u573a\u9ad8\u62c9\u7279\u548c\u5e7f\u5dde\u5854\u90fd\u4e0d\u5728\u72b6\u6001\uff0c\u4f46\u660e\u663e\u9ad8\u62c9\u7279\u8fd8\u662f\u66f4\u79ef\u6781\u4e00\u4e9b\uff0c\u6001\u5ea6\u6ca1\u5f97\u9ed1\u3002\u66b4\u529b\u9e1f\u7559\u7ed9\u4f60\u4eec\u5439\uff0c\u6885\u82b3\u548c\u4e8e\u6c49\u8d85\u8fd9\u573a\u4e5f\u5f88\u597d\uff0c\u90d1\u667a\u66fe\u8bda\u8fd8\u662f\u90a3\u4e48\u7a33", "up": 205}], "5": [{"content": "\u51e0\u70b9\u770b\u6cd5\uff1a1.\u5361\u7eb3\u74e6\u7f57\u662f\u771f\u7684\u592a\u83dc 2.\u4e8e\u6c49\u8d85\u771f\u7684\u4e0d\u9002\u5408\u9996\u53d1\uff0c\u8ddf\u5916\u63f4\u51e0\u4e4e\u6253\u4e0d\u51fa\u914d\u5408 3.\u9ec4\u535a\u6587\u9000\u5316\u4e25\u91cd 4.\u8ddf\u5bf9\u9762\u989c\u9a8f\u51cc\u4e00\u6bd4\u8f83\uff0c\u66fe\u8bda\u5b9e\u5728\u592a\u5e73\u5eb8\uff0c\u51fa\u51fb\u4e0d\u679c\u65ad\uff0c\u5bf9\u65b9\u4e00\u5c04\u4e00\u4e2a\u51c6\u30025.\u8bf4\u591a\u5c11\u6b21\u4e86\uff0c\u6253\u4e0a\u6e2f\u5343\u4e07\u4e0d\u80fd\u4e0a\u5f205 6.\u90d1\u667a\u8fd8\u662f\u4e0d\u53ef\u66ff\u4ee3", "up": 193}, {"content": "\u66fe\u8bda\u4e0b\u534a\u573a\u90fd\u4e0d\u6562\u5f00\u95e8\u7403\u4e86\uff0c\u6015\u968f\u65f6\u88ab\u5439\u4e00\u5f20\u9ec4\u724c\u3002", "up": 101}, {"content": "\u9ad8\u62c9\u7279\u963f\u5170\u6211\u5c31\u4e0d\u5439\u4e86\uff0c\u7ecf\u5e38\u5439\u4e86\uff0c\u6700\u8fd1\u8981\u5439\u5439\u90dc\u6797\uff0c\u4f20\u7ed9\u9ad8\u62c9\u7279\u90a3\u5934\u7403\u771f\u9a9a\uff0c\u8fd8\u6709\u5c31\u662f\u66fe\u8bda\u6bd4\u90a3\u5565\u6f0f\u7535\u7684\u7a33\u591a\u4e86", "up": 27}, {"content": "\u66fe\u8bda:\u7d2f\u4e86\uff0c\u56f0\u4e86\uff0c\u7403\u600e\u4e48\u8fd8\u6ca1\u6765", "up": 13}, {"content": "\u91d1\u656c\u9053\u8981\u662f\u8fdb\u4e0d\u4e86\u56fd\u5bb6\u961f\u5c31\u6ca1\u5929\u7406\u4e86\u3002\u3002\u3002\u611f\u89c9\u73b0\u5728\u4e2d\u8d85\u56de\u5230\u4e03\u516b\u5e74\u524d\u4e86\uff0c\u90a3\u65f6\u5019\u9c81\u80fd \u56fd\u5b89 \u7533\u82b1 \u4e9a\u6cf0 \u6c5f\u82cf\u821c\u5929\u4e89\u51a0\uff0c\u90a3\u65f6\u5019\u5e7f\u5dde\u6052\u5927\u7684\u524d\u8eab\u5e7f\u5dde\u767d\u4e91\u836f\u4e1a\u8fd8\u662f\u4e2d\u7532\uff0c\u6cb3\u5357\u5efa\u4e1a\u8fd8\u8fdb\u5165\u4e9a\u51a0\uff0c\u90a3\u65f6\u5019\u8fd8\u6709\u9752\u5c9b\u4e2d\u80fd\uff0c\u73b0\u5728\u4e2d\u80fd\u597d\u50cf\u662f\u4e59\u7ea7\u4e86\u3002\u90a3\u65f6\u5019\u8d5b\u573a\u7684\u4e3b\u89d2\u8fd8\u662f\u672c\u571f\u7403\u5458\u3002\u540e\u6765\u6052\u5927\u63a5\u624b\u5e7f\u5dde\u767d\u4e91\uff0c\u75af\u72c2\u7838\u94b1\u5f15\u8fdb\u90d1\u667a \u5f20\u7433\u8283 \u66fe\u8bda \u9ec4\u535a\u6587 \u51af\u6f47\u9706 \u90dc\u6797 \u7a46\u91cc\u5947 \u57c3\u5c14\u514b\u68ee\uff0c\u4ece\u6b64\u4e2d\u8d85\u683c\u5c40\u5f7b\u5e95\u53d8\u5929\u4e00\u5bb6\u72ec\u5927\u3002\u89c2\u8d4f\u6027\u4e0a\u6765\u4e86\u4e9a\u51a0\u4e5f\u62ff\u4e86\uff0c\u7136\u540e\u672c\u571f\u7403\u5458\u6218\u7ee9\u8fd8\u662f\u767d\u65a9\u9e21\u3002\u4ee5\u524d\u56fd\u5bb6\u961f\u7403\u5458\u591a\u662f\u9c81\u80fd \u56fd\u5b89 \u821c\u5929\u7b49\u7403\u961f\u7684\uff0c\u540e\u6765\u57fa\u672c\u4e0a\u662f\u6052\u5927\u7684\u73ed\u5e95\u3002\u4e4b\u524d\u4e2d\u8d85\u7c7b\u4f3c\u82f1\u8d85 \u7fa4\u96c4\u4e89\u9738\uff0c\u540e\u6765\u6052\u5927\u65f6\u671f\u7c7b\u4f3c\u5fb7\u7532\uff0c\u57fa\u672c\u4e0a\u62dc\u4ec1\u538b\u5012\u6027\u4f18\u52bf\u3002\u968f\u7740\u6052\u5927\u7403\u5458\u73ed\u5e95\u8001\u5316\uff0c\u73b0\u5728\u4e2d\u8d85\u53c8\u597d\u770b\u4e86\uff01", "up": 11}]};
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
