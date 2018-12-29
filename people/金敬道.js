var data = {"person_name": "\u91d1\u656c\u9053", "nicknames": "\u91d1\u656c\u9053", "aspects": {"\u56fd\u5bb6\u961f": 0.4174662258793829, "\u7403\u5458": 0.5428670021937569, "\u5916\u63f4": 0.4375605429505402, "\u8fdb\u7403": 0.6046635276783857, "\u6bd4\u8d5b": 0.5349754114411596, "\u7403\u8ff7": 0.6293522678706914, "\u8e22\u7403": 0.9338676167477516, "\u4f20\u7403": 0.7653025342515813, "\u4f20\u4e2d": 0.4224716086061866, "\u8d5b\u5b63": 0.621958625752312}, "overall_heat": 475.0, "overall_polar": 0.591, "name": "101", "nationality": "\u4e2d\u56fd", "position": "\u4e2d\u573a", "goal": "8", "assist": "5", "team_name": "\u5c71\u4e1c\u9c81\u80fd\u6cf0\u5c71", "name_en": "Jin Jingdao", "age": "26", "height": "170", "weight": "64"};
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
var topic_keywords = {"0": [{"name": "\u91d1\u656c\u9053", "value": 0.045160545160545164}, {"name": "\uff01", "value": 0.041695541695541696}, {"name": "\uff1f", "value": 0.02552552552552553}, {"name": "\u7403\u5458", "value": 0.022060522060522062}, {"name": "\ud83d\udc2e", "value": 0.01975051975051975}, {"name": "\u77e5\u9053", "value": 0.011665511665511667}, {"name": "\u4e00\u76f4", "value": 0.010510510510510511}, {"name": "\u770b\u770b", "value": 0.010510510510510511}, {"name": "\u8dd1\u52a8", "value": 0.010510510510510511}, {"name": "\u8ddd\u79bb", "value": 0.009355509355509356}, {"name": "\u9c81\u80fd", "value": 0.009355509355509356}, {"name": "\u699c", "value": 0.009355509355509356}, {"name": "\u4eba", "value": 0.009355509355509356}, {"name": "\u56fd\u5bb6\u961f", "value": 0.009355509355509356}, {"name": "\u6240\u6709", "value": 0.009355509355509356}, {"name": "\u672c\u571f", "value": 0.009355509355509356}, {"name": "\u518d", "value": 0.0082005082005082}, {"name": "\u4e00\u4e2a", "value": 0.0082005082005082}, {"name": "\u6570\u636e", "value": 0.0082005082005082}, {"name": "\u91d1\u5b50", "value": 0.0070455070455070455}, {"name": "\u5916\u63f4", "value": 0.0070455070455070455}, {"name": "\u4e2d\u8d85", "value": 0.0070455070455070455}, {"name": "\u7403\u8ff7", "value": 0.0070455070455070455}, {"name": "\u76f4\u64ad", "value": 0.00589050589050589}, {"name": "\u638f", "value": 0.00589050589050589}, {"name": "\u73b0\u5728", "value": 0.00589050589050589}, {"name": "\u6765\u81ea", "value": 0.00589050589050589}, {"name": "\u8f93", "value": 0.00589050589050589}, {"name": "\u5f3a\u5927", "value": 0.00589050589050589}, {"name": "\u56fd\u5bb6", "value": 0.00589050589050589}], "1": [{"name": "\u91d1\u656c\u9053", "value": 0.05904848327715841}, {"name": "\uff01", "value": 0.029880736323567542}, {"name": "\u597d", "value": 0.012380088151413017}, {"name": "\u771f\u7684", "value": 0.012380088151413017}, {"name": "\uff1f", "value": 0.011731915996888775}, {"name": "\u56fd\u5bb6\u961f", "value": 0.011083743842364534}, {"name": "\u9c81\u80fd", "value": 0.011083743842364534}, {"name": "\u8e22", "value": 0.010435571687840291}, {"name": "\u7403\u5458", "value": 0.009787399533316048}, {"name": "\u4f69\u83b1", "value": 0.009139227378791807}, {"name": "\u4e0d\u9519", "value": 0.006546538760694841}, {"name": "\u8dd1", "value": 0.006546538760694841}, {"name": "\u7403\u8ff7", "value": 0.0058983666061705985}, {"name": "\u8fdb", "value": 0.0058983666061705985}, {"name": "\u7403", "value": 0.0058983666061705985}, {"name": "\u4f20\u7403", "value": 0.0058983666061705985}, {"name": "\u70b9\u7403", "value": 0.005250194451646357}, {"name": "\u6bd4\u8d5b", "value": 0.005250194451646357}, {"name": "\u91cc", "value": 0.005250194451646357}, {"name": "\u8e22\u7403", "value": 0.005250194451646357}, {"name": "\u76ae", "value": 0.004602022297122116}, {"name": "\u6700\u540e", "value": 0.004602022297122116}, {"name": "\u6280\u672f", "value": 0.004602022297122116}, {"name": "\u8868\u73b0", "value": 0.004602022297122116}, {"name": "\u611f\u89c9", "value": 0.004602022297122116}, {"name": "\u52a0\u6cb9", "value": 0.004602022297122116}, {"name": "\u4f9d\u7136", "value": 0.003953850142597874}, {"name": "\u5e94\u8be5", "value": 0.003953850142597874}, {"name": "\u8dd1\u4f4d", "value": 0.003953850142597874}, {"name": "\u770b\u5230", "value": 0.003953850142597874}], "2": [{"name": "\uff01", "value": 0.11697615772581385}, {"name": "\u91d1\u656c\u9053", "value": 0.08889270976616231}, {"name": "\u56fd\u5bb6\u961f", "value": 0.03329894543787254}, {"name": "\uff1f", "value": 0.026421366345712977}, {"name": "\u91cc", "value": 0.016678129298486933}, {"name": "\u8fdb", "value": 0.014958734525447043}, {"name": "\u76ae", "value": 0.014385602934433746}, {"name": "\u4eba", "value": 0.013239339752407153}, {"name": "\u5916\u63f4", "value": 0.009800550206327373}, {"name": "\u97e9\u56fd", "value": 0.009227418615314077}, {"name": "\u4e2d\u56fd", "value": 0.008081155433287484}, {"name": "\u725b", "value": 0.0069348922512608895}, {"name": "\u903c", "value": 0.0069348922512608895}, {"name": "\u8dd1", "value": 0.006361760660247593}, {"name": "\u8fd9\u573a", "value": 0.006361760660247593}, {"name": "\u6bd4\u8d5b", "value": 0.006361760660247593}, {"name": "\u8868\u73b0", "value": 0.006361760660247593}, {"name": "\u8fdb\u4e0d\u4e86", "value": 0.005788629069234296}, {"name": "\u91d1\u5b50", "value": 0.005788629069234296}, {"name": "\u5e94\u8be5", "value": 0.005788629069234296}, {"name": "\u8e22", "value": 0.005215497478221}, {"name": "\u770b\u5230", "value": 0.005215497478221}, {"name": "\u5c0f", "value": 0.005215497478221}, {"name": "\u771f", "value": 0.004642365887207703}, {"name": "\u8d8a\u4f4d", "value": 0.004642365887207703}, {"name": "\u5854\u795e", "value": 0.004069234296194406}, {"name": "\u5927\u7237", "value": 0.004069234296194406}, {"name": "\u505c\u7403", "value": 0.004069234296194406}, {"name": "\u6ed1\u7a3d", "value": 0.0034961027051811093}, {"name": "\u4e0d\u9519", "value": 0.0034961027051811093}], "3": [{"name": "\u91d1\u656c\u9053", "value": 0.09068448023426061}, {"name": "\uff01", "value": 0.028459004392386533}, {"name": "\u9c81\u80fd", "value": 0.015647877013177162}, {"name": "\u5389\u5bb3", "value": 0.015647877013177162}, {"name": "\u8dd1", "value": 0.014732796486090778}, {"name": "\u5854\u5c14\u5fb7\u5229", "value": 0.01290263543191801}, {"name": "\u4f69\u83b1", "value": 0.01290263543191801}, {"name": "\u5439", "value": 0.011987554904831626}, {"name": "\u88c1\u5224", "value": 0.011072474377745242}, {"name": "\u7403", "value": 0.010157393850658858}, {"name": "\u8fdb\u7403", "value": 0.010157393850658858}, {"name": "\u7b11", "value": 0.009242313323572475}, {"name": "\u8138", "value": 0.009242313323572475}, {"name": "\u54ed", "value": 0.008327232796486091}, {"name": "\u6342", "value": 0.008327232796486091}, {"name": "\u4eba", "value": 0.008327232796486091}, {"name": "\u611f\u89c9", "value": 0.008327232796486091}, {"name": "\u4e00\u4e2a", "value": 0.007412152269399707}, {"name": "\u725b", "value": 0.007412152269399707}, {"name": "\u903c", "value": 0.006497071742313324}, {"name": "\ud83d\udc4d", "value": 0.00558199121522694}, {"name": "\u5854\u795e", "value": 0.00558199121522694}, {"name": "\uff1b", "value": 0.00558199121522694}, {"name": "\u8e22", "value": 0.0046669106881405565}, {"name": "\u4e2d\u56fd", "value": 0.0046669106881405565}, {"name": "\u72af\u89c4", "value": 0.0046669106881405565}, {"name": "\u4e00\u6ce2", "value": 0.0046669106881405565}, {"name": "\u5e94\u8be5", "value": 0.0046669106881405565}, {"name": "\u9ec4\u724c", "value": 0.0046669106881405565}, {"name": "\u60f9\u4e0d\u8d77", "value": 0.0046669106881405565}], "4": [{"name": "\u91d1\u656c\u9053", "value": 0.05595602811317355}, {"name": "\uff01", "value": 0.022616687691475942}, {"name": "\u9c81\u80fd", "value": 0.014507118399711662}, {"name": "\u8e22", "value": 0.013606055145071185}, {"name": "\u597d", "value": 0.011803928635790233}, {"name": "\u7403\u5458", "value": 0.010902865381149757}, {"name": "\u5434\u5174\u6db5", "value": 0.00819967561722833}, {"name": "\u4f20\u4e2d", "value": 0.00819967561722833}, {"name": "\u5218\u5f6c\u5f6c", "value": 0.00819967561722833}, {"name": "\u4e0d\u884c", "value": 0.007298612362587853}, {"name": "\u540e\u8170", "value": 0.006397549107947378}, {"name": "\u56fd\u5185", "value": 0.006397549107947378}, {"name": "\u8d8a", "value": 0.005496485853306902}, {"name": "\u8d5b\u5b63", "value": 0.005496485853306902}, {"name": "\u4f69\u83b1", "value": 0.005496485853306902}, {"name": "\u4f4d\u7f6e", "value": 0.005496485853306902}, {"name": "\u91d1\u5b50", "value": 0.004595422598666426}, {"name": "\u6700\u597d", "value": 0.004595422598666426}, {"name": "\u6253", "value": 0.004595422598666426}, {"name": "\u524d\u8170", "value": 0.004595422598666426}, {"name": "\u771f\u662f", "value": 0.004595422598666426}, {"name": "\u91cc", "value": 0.004595422598666426}, {"name": "\u4e2d\u56fd", "value": 0.004595422598666426}, {"name": "\u55b7", "value": 0.004595422598666426}, {"name": "\u5c0f", "value": 0.004595422598666426}, {"name": "\u60f3", "value": 0.004595422598666426}, {"name": "\u4eba", "value": 0.0036943593440259504}, {"name": "\u89c9\u5f97", "value": 0.0036943593440259504}, {"name": "\u4e24\u4e2a", "value": 0.0036943593440259504}, {"name": "\u8fb9\u8def", "value": 0.0036943593440259504}], "5": [{"name": "\u91d1\u656c\u9053", "value": 0.044365341205070324}, {"name": "\u56fd\u5bb6\u961f", "value": 0.020055565202292066}, {"name": "\u8e22", "value": 0.01571453377322452}, {"name": "\u9c81\u80fd", "value": 0.01484632748741101}, {"name": "\uff1f", "value": 0.011373502344156973}, {"name": "\u7403\u5458", "value": 0.010505296058343463}, {"name": "\u6052\u5927", "value": 0.009637089772529953}, {"name": "\u73b0\u5728", "value": 0.008768883486716443}, {"name": "\u4f4d\u7f6e", "value": 0.008768883486716443}, {"name": "\u4e2d\u8d85", "value": 0.008768883486716443}, {"name": "\u84bf\u4fca\u95f5", "value": 0.007900677200902935}, {"name": "\u8fdb\u7403", "value": 0.007900677200902935}, {"name": "\u4e0a\u6e2f", "value": 0.007032470915089425}, {"name": "\uff01", "value": 0.006164264629275916}, {"name": "\u5e94\u8be5", "value": 0.006164264629275916}, {"name": "\u9752\u8bad", "value": 0.006164264629275916}, {"name": "\u4e00\u4e2a", "value": 0.005296058343462406}, {"name": "\u4e2d\u573a", "value": 0.005296058343462406}, {"name": "\u5916\u63f4", "value": 0.005296058343462406}, {"name": "\u6b66\u78ca", "value": 0.005296058343462406}, {"name": "\u8fdb\u4e0d\u4e86", "value": 0.004427852057648897}, {"name": "\ud83d\ude02", "value": 0.004427852057648897}, {"name": "\u524d\u950b", "value": 0.004427852057648897}, {"name": "\u90dc\u6797", "value": 0.004427852057648897}, {"name": "\u660e\u5e74", "value": 0.004427852057648897}, {"name": "\u8dd1\u52a8", "value": 0.004427852057648897}, {"name": "\u4e9a\u51a0", "value": 0.004427852057648897}, {"name": "\u7533\u82b1", "value": 0.004427852057648897}, {"name": "\u683c\u5fb7\u65af", "value": 0.004427852057648897}, {"name": "\u7b2c\u4e8c", "value": 0.003559645771835388}]};
var topic_summary = {"0": [{"content": "\u770b\u4e86\u770b\u76f4\u64ad\u5427\u7684\u4e2d\u8d85\u6570\u636e\u699c\uff0c\u4e0d\u5f97\u4e0d\u5938\u91d1\u656c\u9053\uff0c\u62a2\u65ad\u699c\u6240\u6709\u7403\u5458\u7b2c2\uff0c\u72af\u89c4\u6570\u6240\u6709\u7403\u5458\u7b2c3\uff0c\u88ab\u4fb5\u72af\u6b21\u6570\u672c\u571f\u7403\u5458\u7b2c1\uff0c\u603b\u8dd1\u52a8\u8ddd\u79bb\u6240\u6709\u7403\u5458\u7b2c1\uff0c\u9ad8\u5f3a\u5ea6\u8dd1\u52a8\u8ddd\u79bb\u6240\u6709\u7403\u5458\u7b2c1\uff0c\u5c04\u624b\u699c\u6392\u672c\u571f\u4e2d\u573a\u7b2c1\uff0c\u52a9\u653b\u699c\u548c\u4f20\u7403\u6b21\u6570\u4e5f\u90fd\u6392\u540d\u672c\u571f\u7403\u5458\u524d\u5217\u3002\u6709\u62fc\u52b2\u6709\u6280\u672f\uff0c\u770b\u6570\u636e\u699c\u582a\u79f0\u672c\u571f\u4e2d\u573a\u7b2c\u4e00\u4eba\u4e86\u3002\u5927\u8d5e\u5c0f\u91d1\u5b50\uff01", "up": 192}, {"content": "\u91d1\u656c\u9053\uff0c\u4e0d\u8981\u518d\u9690\u7792\u8eab\u4efd\uff0c\u6211\u77e5\u9053\u4f60\u662f\u5f3a\u5927\u5916\u63f4\uff01\u5feb\u5feb\u638f\u62a4\u7167\u51fa\u6765\uff0c\u8ba9\u54b1\u770b\u770b\u4f60\u7a76\u7adf\u662f\u6765\u81ea\u54ea\u4e2a\u56fd\u5bb6\uff1f\uff01\uff01\ud83d\udc2e\ud83d\udc2e\ud83d\udc2e", "up": 189}, {"content": "md\uff0c\u6211\u4e00\u76f4\u4ee5\u4e3a\u91d1\u656c\u9053\u662f\u5916\u63f4\uff0c\u4eca\u5929\u624d\u77e5\u9053\u4ed6\u662f\u4e2d\u56fd\u7403\u5458\uff0c\u60ed\u6127\u3002\u4ed6\u914d\u8fdb\u56fd\u5bb6\u961f\uff01\u67d0\u4e9b\u4eba\u4e0d\u914d\uff01", "up": 19}, {"content": "\u6211\u4eca\u5929\u770b\u4e86\u534a\u4e2a\u5c0f\u65f6\uff0c\u91d1\u656c\u9053\u5230\u5e95\u4e3a\u5565\u8fdb\u4e0d\u4e86\u56fd\u5bb6\u961f\uff1f\u8eab\u9ad8\u4e0d\u591f\u8fd8\u662f\u5012\u7740\u9009\u7684\uff1f", "up": 15}, {"content": "\u6211\u901f\u5ea6\u4e0d\u5feb\uff0c\u529b\u91cf\u4e0d\u5f3a\uff0c\u8eab\u4f53\u7626\u5f31\uff0c\u6211\u77e5\u9053\u552f\u6709\u4e0d\u505c\u7684\u5954\u8dd1\u624d\u80fd\u4f7f\u6211\u5f3a\u5927\uff0c\u6211\u662f\u91d1\u656c\u9053\uff0c\u6211\u4e3a\u81ea\u5df1\u4ee3\u8a00", "up": 12}], "1": [{"content": "\u5176\u5b9e\u6807\u9898\u6539\u4e3a\u91d1\u656c\u9053\u7834\u95e8VAR\u6551\u52a9\u4e0a\u6e2f\uff0c\u53cc\u65b91:1\u63e1\u624b\u8a00\u548c\u66f4\u5408\u9002", "up": 388}, {"content": "\u91cc\u76ae\uff1a\u91d1\u656c\u9053\u4f20\u7403\u597d\uff0c\u8dd1\u4f4d\u7cbe\uff0c\u8fdb\u7403\u591a\uff0c\u8fd9\u7403\u5458\u592a\u5f3a\u5566\uff0c\u4e0d\u9002\u5408\u54b1\u56fd\u8db3\u7684\uff01", "up": 208}, {"content": "\u91d1\u656c\u9053\u592a\u5f3a\u5566\uff0c\u4f1a\u4f20\u7403\uff0c\u4f1a\u8fdb\u7403\uff0c\u53c8\u8dd1\u4e0d\u6b7b\uff0c\u600e\u4e48\u8fdb\u56fd\u8db3\u554a\uff1f\uff01", "up": 145}, {"content": "\u901a\u8fc7\u8d5b\u540e\u91c7\u8bbf\u624d\u5f97\u77e5\u91d1\u656c\u9053\u5165\u9009\u4e86\u4e0b\u4e00\u671f\u56fd\u8db3,\u54ce,\u771f\u7684\u66ff\u4ed6\u60cb\u60dc....", "up": 109}, {"content": "\u91d1\u656c\u9053\u771f\u662f\u5f3a", "up": 35}], "2": [{"content": "\u97e6\u4e16\u8c6a\u503c\u4e00\u4ebf\u7684\u8bdd\uff0c\u91d1\u656c\u9053\u80fd\u503c\u591a\u5c11", "up": 1230}, {"content": "\u6709\u591a\u5c11\u4eba\u770b\u5230\u7b2c88\u5206\u949f\uff0c\u91d1\u656c\u9053\u662f\u8dd1\u7740\u88ab\u6362\u4e0b\u53bb\u7684\uff01", "up": 1057}, {"content": "\u5c0a\u656c\u7684\u91cc\u76ae\u5148\u751f:\u91d1\u656c\u9053\u867d\u7136\u59d3\u91d1\uff0c\u867d\u7136\u8dd1\u7684\u5feb\uff0c\u867d\u7136\u8dd1\u7684\u591a\uff0c\u867d\u7136\u62fc\u52b2\u5341\u8db3\uff0c\u867d\u7136\u4f20\u4e2d\u51c6\uff0c\u4f46\u662f\u4ed6\u662f\u6211\u4eec\u4e2d\u56fd\u4eba\ud83c\udde8\ud83c\uddf3\ud83c\udde8\ud83c\uddf3\ud83c\udde8\ud83c\uddf3", "up": 628}, {"content": "\u91d1\u656c\u9053\uff1a\u6211\u5c31\u662f\u4e0d\u82b1\u94b1\uff0c\u770b\u770b\u80fd\u4e0d\u80fd\u8fdb\u56fd\u5bb6\u961f", "up": 503}, {"content": "\u91cc\u76ae:\u672c\u6765\u53bb\u770b\u770b\u91d1\u656c\u9053\u7684\uff0c\u7ed3\u679c\u4f60\u5927\u96f7\u628a\u6211\u622a\u80e1\u4e86\u3002\u3002\u3002", "up": 275}], "3": [{"content": "\u4f9d\u7a00\u8bb0\u5f97\u91d1\u656c\u9053\u521a\u6765\u9c81\u80fd\u7684\u65f6\u5019\u4e5f\u662f\u88ab\u5410\u69fd\u7684\u4e0d\u8981\u4e0d\u8981\u7684\uff0c\u73b0\u5728\u4e5f\u8be5\u9002\u65f6\u7684\u5439\u4e00\u6ce2\u4e86", "up": 726}, {"content": "\u4eca\u5929\u6709\u5fc5\u8981\u5439\u4e00\u6ce2\u5f20\u5f1b\uff0c\u6362\u5230\u53f3\u8fb9\u524d\u536b\u4f4d\u7f6e\u4ee5\u540e\u5b8c\u7f8e\u590d\u5236\u91d1\u656c\u9053\uff0c\u8fde85\u5206\u949f\u88ab\u6362\u4e0b\u4e5f\u662f\u8dd1\u7740\u4e0b\u53bb\u7684", "up": 427}, {"content": "\u8001\u5b50\u5c31\u662f\u8981\u5439\u4e00\u6ce2\u91d1\u656c\u9053\uff01\u6700\u540e\u4e00\u5206\u949f\u88ab\u6362\u4e0b\u573a\u90fd\u662f\u8dd1\u7740\u4e0b\u53bb\u7684\uff01", "up": 420}, {"content": "\u91d1\u656c\u9053\u90a3\u4e2a\u7403\u548c\u963f\u5947\u59c6\u5f6d\u7684\u90a3\u4e2a\u7403 \u4e3a\u4ec0\u4e48\u5224\u7f5a\u5c3a\u5ea6\u4e0d\u4e00\u6837\uff1f", "up": 263}, {"content": "\u4e2d\u8d85\u56db\u5927\u60f9\u4e0d\u8d77\uff1a\u4e0b\u534a\u573a\u7684\u9c81\u80fd\u60f9\u4e0d\u8d77\uff1b\u8dd1\u8d77\u6765\u7684\u91d1\u656c\u9053\u60f9\u4e0d\u8d77\uff1b\u62ff\u94a2\u7b14\u7684\u738b\u5c0f\u5e73\u60f9\u4e0d\u8d77\uff1b\u7741\u773c\u778e\u7684\u88c1\u5224\u5458\u60f9\u4e0d\u8d77\u3002", "up": 136}], "4": [{"content": "\u91d1\u656c\u9053\u524d\u51e0\u4e2a\u8d5b\u5b63\u88ab\u9a82\u7684\u6700\u60e8\u7684\uff0c\u73b0\u5728\u7ec8\u4e8e\u8e22\u51fa\u6765\u4e86", "up": 429}, {"content": "\u5c0f\u9e4f\u7684\u52a8\u4f5c\u5f88\u660e\u663e\u793a\u610f\u538b\u4e0a\u4e89\u53d6\u6700\u540e\u4e00\u4e2a\u8fdb\u653b \u91d1\u656c\u9053\u600e\u4e48\u56de\u4e8b \u5176\u4ed6\u7403\u5458\u600e\u4e48\u56de\u4e8b", "up": 288}, {"content": "\u91d1\u656c\u9053\u7684\u4f20\u4e2d\uff0c\u6211\u89c9\u5f97\u5728\u56fd\u5185\u5df2\u7ecf\u7b97\u6570\u4e00\u6570\u4e8c\u4e86\u3002", "up": 133}, {"content": "\u91d1\u656c\u9053\u5c0f\u5fc3\u70b9\uff0c\u4e0d\u7136\u4e0b\u8d5b\u5b63\u8981\u53bb\u5df4\u8428\u4e86\u2026\u2026", "up": 116}, {"content": "\u518d\u6b21\u4e0d\u660e\u767d\u5218\u5f6c\u5f6c\u4e3a\u4f55\u4e00\u76f4\u5728\u56fd\u5bb6\u961f\u6ca1\u53d7\u5230\u91cd\u7528\uff0c\u8fd9\u4e2a\u52a9\u653b\u5f88\u597d\u5730\u5c55\u73b0\u4e86\u4ed6\u7684\u7279\u70b9\uff0c\u901f\u5ea6\u8d85\u5feb\uff0c\u800c\u4e14\u5feb\u4e4b\u4f59\u5341\u5206\u7075\u6d3b\uff0c\u4f1a\u89c2\u5bdf\u961f\u53cb\u4f4d\u7f6e\u5047\u52a8\u4f5c\u770b\u51c6\u673a\u4f1a\u518d\u4f20\u4e2d\uff0c\u8bf4\u660e\u7403\u5546\u5f88\u9ad8\uff0c\u800c\u4e14\u90fd\u662f\u4e0b\u534a\u573a\u66ff\u8865\u4e0a\u573a\u6548\u679c\u66f4\u4f73\u2026\u9c81\u80fd\u51e0\u5339\u5feb\u9a6c\u5434\u5174\u6db5\u3001\u5f20\u9a70\u3001\u5218\u5f6c\u5f6c\u3001\u91d1\u656c\u9053\u914d\u5408\u597d\u610f\u5927\u5229\u5927\u70ae\u548c\u6c34\u5854\u7684\u8bdd\uff0c\u4e0d\u5355\u53ea\u8fdb\u653b\u706b\u529b\u731b\u8fd8\u66f4\u5177\u89c2\u8d4f\u6027", "up": 16}], "5": [{"content": "\u91d1\u656c\u9053\u8fdb\u56fd\u5bb6\u961f\u5b8c\u5168\u6ca1\u6709\u4efb\u4f55\u7591\u95ee\uff0c\u603b\u8dd1\u52a8\u8ddd\u79bb\u7b2c\u4e8c\uff0c\u9ad8\u5f3a\u5ea6\u8dd1\u52a8\u8ddd\u79bb\u7b2c\u4e00\uff0c\u8eab\u4e3a\u524d\u950b\u62a2\u65ad\u8fd8\u6392\u7b2c\u4e8c\uff0c\u80fd\u52a9\u653b\u80fd\u8fdb\u7403\uff0c\u6001\u5ea6\u79ef\u6781\uff0c\u56fd\u5bb6\u961f\u73b0\u5728\u6700\u9700\u8981\u8fd9\u79cd\u62fc\u547d\u4e09\u90ce\uff0c\u5b8c\u5168\u60f3\u4e0d\u5230\u6709\u4efb\u4f55\u7406\u7531\u4e0d\u8fdb\u56fd\u5bb6\u961f", "up": 1667}, {"content": "\u91d1\u656c\u9053\uff1a\u6211\u5c31\u662f\u4e0d\u9001\u94b1\uff0c\u6211\u5c31\u770b\u770b\u80fd\u8fdb\u56fd\u5bb6\u961f\u4e0d\uff1f", "up": 1007}, {"content": "\u91d1\u656c\u9053\u5728\u573a\u4e0a\u8e22\u5f97\u4ec0\u4e48\u4f4d\u7f6e\u2014\u2014\u5173\u952e\u4f4d\u7f6e[\u52a9\u5a01][\u52a9\u5a01][\u52a9\u5a01]", "up": 349}, {"content": "\u91d1\u656c\u9053 \u8e22\u4ec0\u4e48\u4f4d\u7f6e\uff1f\u54fc \u5173\u952e\u4f4d\u7f6e\uff01[mvp]", "up": 249}, {"content": "\u91d1\u656c\u9053\u90a3\u7403\uff0c\u4eba\u5bb6\u5b8b\u9f99\u5728\u540e\u9762\u90fd\u6446\u597d\u59ff\u52bf\u51c6\u5907\u5934\u7403\u4e86\uff0c\u7ed3\u679c\u88ab\u4f60\u62a2\u4e86\uff0c\u54c8\u54c8", "up": 122}]};
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
