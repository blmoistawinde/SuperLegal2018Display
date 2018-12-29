var data = {"person_name": "\u7a46\u8c22\u594e", "nicknames": "\u7a46\u8c22\u594e\u3001\u5927\u594e", "aspects": {"\u8fdb\u7403": 0.47447315655936784, "\u5916\u63f4": 0.3571402920559875, "\u7403\u8ff7": 0.5010987363222026, "\u8d5b\u5b63": 0.5187437598304571, "\u7403\u5458": 0.36141175042280166, "\u6bd4\u8d5b": 0.3074894747415743, "\u70b9\u7403": 0.09892457789324177, "\u4fdd\u7ea7": 0.582619618619826, "\u72af\u89c4": 0.3566084050626813, "\u8db3\u7403": 0.6570809729523952}, "overall_heat": 464.0, "overall_polar": 0.31, "name": "355", "nationality": "\u6d25\u5df4\u5e03\u97e6", "position": "\u524d\u950b", "goal": "14", "assist": "4", "team_name": "\u5927\u8fde\u4e00\u65b9", "name_en": "Nyasha Mushekwi", "age": "31", "height": "188", "weight": "0"};
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
var topic_keywords = {"0": [{"name": "\u5927\u594e", "value": 0.0469760900140647}, {"name": "\u7a46\u8c22\u594e", "value": 0.0375996249413971}, {"name": "\uff01", "value": 0.020721987810595408}, {"name": "\u5927\u8fde", "value": 0.014158462259728083}, {"name": "\u7b11", "value": 0.0113455227379278}, {"name": "\u6d41\u6c57", "value": 0.0113455227379278}, {"name": "\u8138", "value": 0.01040787623066104}, {"name": "\u6342", "value": 0.01040787623066104}, {"name": "\u54ed", "value": 0.00853258321612752}, {"name": "\u7403\u8ff7", "value": 0.007594936708860759}, {"name": "\uff1f", "value": 0.007594936708860759}, {"name": "\u8fdb\u7403", "value": 0.006657290201593999}, {"name": "\ud83d\ude02", "value": 0.006657290201593999}, {"name": "\u606d\u559c", "value": 0.006657290201593999}, {"name": "\u6bd4\u8d5b", "value": 0.006657290201593999}, {"name": "\u771f\u7684", "value": 0.005719643694327238}, {"name": "\u4e24\u4e2a", "value": 0.005719643694327238}, {"name": "\u5927\u56db\u559c", "value": 0.005719643694327238}, {"name": "\u89e3\u8bf4", "value": 0.005719643694327238}, {"name": "\u5439", "value": 0.005719643694327238}, {"name": "\u771f\u662f", "value": 0.004781997187060478}, {"name": "\u674e\u5e05", "value": 0.004781997187060478}, {"name": "\u4ee5\u4e3a", "value": 0.004781997187060478}, {"name": "\u4ee5\u524d", "value": 0.004781997187060478}, {"name": "\u4e00\u4e2a", "value": 0.004781997187060478}, {"name": "\u5f20\u7fc0", "value": 0.004781997187060478}, {"name": "\u6f02\u4eae", "value": 0.0038443506797937173}, {"name": "\u5361\u62c9\u65af\u79d1", "value": 0.0038443506797937173}, {"name": "\u6b7b", "value": 0.0038443506797937173}, {"name": "\u7403", "value": 0.0038443506797937173}], "1": [{"name": "\u7a46\u8c22\u594e", "value": 0.03507236620666442}, {"name": "\u5927\u594e", "value": 0.03372601817569842}, {"name": "\uff01", "value": 0.01958936385055537}, {"name": "\u4e2d\u950b", "value": 0.01689666778862336}, {"name": "\u5361\u62c9\u65af\u79d1", "value": 0.01420397172669135}, {"name": "\uff1f", "value": 0.012857623695725346}, {"name": "\u9a6c\u6797", "value": 0.010164927633793334}, {"name": "\u5927\u8fde", "value": 0.009491753618310334}, {"name": "\u6253", "value": 0.008818579602827331}, {"name": "\u60f3", "value": 0.008145405587344329}, {"name": "\u8d5b\u5b63", "value": 0.008145405587344329}, {"name": "\u5e94\u8be5", "value": 0.008145405587344329}, {"name": "\u4f5c\u7528", "value": 0.007472231571861326}, {"name": "\u540e\u536b", "value": 0.0067990575563783235}, {"name": "\u8e22", "value": 0.0067990575563783235}, {"name": "\u5f3a", "value": 0.0067990575563783235}, {"name": "\u652f\u70b9", "value": 0.006125883540895321}, {"name": "\u8fdb\u7403", "value": 0.006125883540895321}, {"name": "\u597d", "value": 0.006125883540895321}, {"name": "\u5916\u63f4", "value": 0.006125883540895321}, {"name": "\u4e2d\u8d85", "value": 0.006125883540895321}, {"name": "\u9632\u5b88", "value": 0.005452709525412319}, {"name": "\u4eba", "value": 0.005452709525412319}, {"name": "\u4e00\u4e2a", "value": 0.005452709525412319}, {"name": "\u524d\u573a", "value": 0.004779535509929316}, {"name": "\u7403\u5458", "value": 0.004779535509929316}, {"name": "\u524d", "value": 0.004779535509929316}, {"name": "\u80fd\u529b", "value": 0.004779535509929316}, {"name": "\u6bd4\u8d5b", "value": 0.004106361494446314}, {"name": "\u89c9\u5f97", "value": 0.004106361494446314}], "2": [{"name": "\u5927\u594e", "value": 0.04570426651081239}, {"name": "\uff1f", "value": 0.037521917007597896}, {"name": "\u7a46\u8c22\u594e", "value": 0.02349503214494448}, {"name": "\u6ed1\u7a3d", "value": 0.01765049678550555}, {"name": "\u7403", "value": 0.012974868497954413}, {"name": "\uff01", "value": 0.011805961426066627}, {"name": "\u70b9\u7403", "value": 0.010637054354178842}, {"name": "\u8fdb", "value": 0.008299240210403272}, {"name": "\u6311\u7403", "value": 0.008299240210403272}, {"name": "\u76d6\u5766", "value": 0.008299240210403272}, {"name": "\u8fc7\u4eba", "value": 0.008299240210403272}, {"name": "\u5361\u62c9\u65af\u79d1", "value": 0.008299240210403272}, {"name": "\u95ee\u9898", "value": 0.007130333138515487}, {"name": "\u7403\u5458", "value": 0.007130333138515487}, {"name": "\u9a6c\u6797", "value": 0.005961426066627703}, {"name": "\u63a7\u5236", "value": 0.005961426066627703}, {"name": "\u76f4\u63a5", "value": 0.005961426066627703}, {"name": "\u60f3", "value": 0.005961426066627703}, {"name": "\u989d", "value": 0.004792518994739918}, {"name": "\u5c04\u95e8", "value": 0.004792518994739918}, {"name": "\u597d", "value": 0.004792518994739918}, {"name": "\u8fdb\u7403", "value": 0.004792518994739918}, {"name": "\u672c\u6765", "value": 0.004792518994739918}, {"name": "\u94f2", "value": 0.004792518994739918}, {"name": "\u672c\u8f6e", "value": 0.004792518994739918}, {"name": "\u6ca1\u60f3\u5230", "value": 0.0036236119228521334}, {"name": "\u4e24\u4e2a", "value": 0.0036236119228521334}, {"name": "\u51e0\u4e2a", "value": 0.0036236119228521334}, {"name": "\u9ec4\u91d1", "value": 0.0036236119228521334}, {"name": "\u7b11", "value": 0.0036236119228521334}], "3": [{"name": "\uff01", "value": 0.11981475355607013}, {"name": "\u5927\u594e", "value": 0.0655640092623222}, {"name": "\u7a46\u8c22\u594e", "value": 0.03182269268938141}, {"name": "\u5927\u8fde", "value": 0.029837909361561363}, {"name": "\u903c", "value": 0.011313264968574264}, {"name": "\u725b", "value": 0.0099900760833609}, {"name": "\u5361\u62c9\u65af\u79d1", "value": 0.009328481640754217}, {"name": "\u52a0\u6cb9", "value": 0.008666887198147535}, {"name": "\u8d62", "value": 0.007343698312934171}, {"name": "\u4e00\u65b9", "value": 0.007343698312934171}, {"name": "\u611f\u8c22", "value": 0.006020509427720807}, {"name": "\u771f", "value": 0.006020509427720807}, {"name": "\u7403\u8ff7", "value": 0.006020509427720807}, {"name": "\u62fc", "value": 0.005358914985114125}, {"name": "\u7403\u5458", "value": 0.005358914985114125}, {"name": "\u4e00\u5b9a", "value": 0.005358914985114125}, {"name": "\u5389\u5bb3", "value": 0.005358914985114125}, {"name": "\u597d", "value": 0.005358914985114125}, {"name": "\u8fdb\u7403", "value": 0.004697320542507443}, {"name": "\u771f\u7684", "value": 0.004697320542507443}, {"name": "\u4e2d\u8d85", "value": 0.004697320542507443}, {"name": "\u6052\u5927", "value": 0.004697320542507443}, {"name": "\u8d5b\u5b63", "value": 0.004697320542507443}, {"name": "\u80dc\u5229", "value": 0.00403572609990076}, {"name": "\u4fdd\u7ea7", "value": 0.00403572609990076}, {"name": "\u8e22", "value": 0.00403572609990076}, {"name": "\u8fd9\u573a", "value": 0.00403572609990076}, {"name": "\u5916\u63f4", "value": 0.00403572609990076}, {"name": "\u961f", "value": 0.0033741316572940784}, {"name": "\u79e6\u5347", "value": 0.0033741316572940784}], "4": [{"name": "\u7a46\u8c22\u594e", "value": 0.031042330450614476}, {"name": "\uff1f", "value": 0.025580336822940374}, {"name": "\u88c1\u5224", "value": 0.020118343195266272}, {"name": "\u5927\u594e", "value": 0.01556668183887119}, {"name": "\u5927\u8fde", "value": 0.013746017296313154}, {"name": "\u7403", "value": 0.012835685025034137}, {"name": "\u8fdb\u7403", "value": 0.011925352753755121}, {"name": "\u8e22", "value": 0.010104688211197086}, {"name": "\u70b9\u7403", "value": 0.00919435593991807}, {"name": "\u4e00\u65b9", "value": 0.00919435593991807}, {"name": "\u56de\u653e", "value": 0.008284023668639054}, {"name": "\uff01", "value": 0.008284023668639054}, {"name": "\u78b0\u5230", "value": 0.007373691397360036}, {"name": "\u4eba\u548c", "value": 0.006463359126081019}, {"name": "\u5439", "value": 0.006463359126081019}, {"name": "\u4e00\u4e2a", "value": 0.006463359126081019}, {"name": "\u770b\u770b", "value": 0.005553026854802003}, {"name": "\u95ee\u9898", "value": 0.005553026854802003}, {"name": "\u4e00\u6b21", "value": 0.005553026854802003}, {"name": "\u7981\u533a", "value": 0.004642694583522985}, {"name": "\u4eba", "value": 0.004642694583522985}, {"name": "\u5148", "value": 0.004642694583522985}, {"name": "\u72af\u89c4", "value": 0.004642694583522985}, {"name": "\u627e", "value": 0.004642694583522985}, {"name": "\u5224", "value": 0.004642694583522985}, {"name": "\u5224\u7f5a", "value": 0.004642694583522985}, {"name": "\u6bd4\u8d5b", "value": 0.004642694583522985}, {"name": "\u6743\u5065", "value": 0.003732362312243969}, {"name": "\u660e\u663e", "value": 0.003732362312243969}, {"name": "\u662f\u4e0d\u662f", "value": 0.003732362312243969}], "5": [{"name": "\u5927\u594e", "value": 0.022043207616257783}, {"name": "\u7a46\u8c22\u594e", "value": 0.021310875137312342}, {"name": "\u5927\u8fde", "value": 0.01911387770047602}, {"name": "\uff1f", "value": 0.01618454778469425}, {"name": "\u5916\u63f4", "value": 0.012522885389967046}, {"name": "\u5361\u62c9\u65af\u79d1", "value": 0.011058220432076162}, {"name": "\u8d5b\u5b63", "value": 0.008861222995239839}, {"name": "\u8e22", "value": 0.008861222995239839}, {"name": "\u8fd9\u573a", "value": 0.008128890516294398}, {"name": "\u4e00\u4e2a", "value": 0.008128890516294398}, {"name": "\u76d6\u5766", "value": 0.008128890516294398}, {"name": "\u6bd4\u8d5b", "value": 0.008128890516294398}, {"name": "\u4fdd\u7ea7", "value": 0.0073965580373489565}, {"name": "\u597d", "value": 0.0073965580373489565}, {"name": "\u7403", "value": 0.006664225558403515}, {"name": "\u9a6c\u6797", "value": 0.006664225558403515}, {"name": "\u77e5\u9053", "value": 0.0059318930794580735}, {"name": "\u4e09\u4e2a", "value": 0.0059318930794580735}, {"name": "\u8fdb\u7403", "value": 0.0059318930794580735}, {"name": "\u771f\u662f", "value": 0.0051995606005126324}, {"name": "\u786c", "value": 0.004467228121567191}, {"name": "\u6c34\u5e73", "value": 0.004467228121567191}, {"name": "\u7403\u5458", "value": 0.004467228121567191}, {"name": "\u771f", "value": 0.004467228121567191}, {"name": "\u7403\u8ff7", "value": 0.00373489564262175}, {"name": "\u518d", "value": 0.00373489564262175}, {"name": "\u5e95\u7ebf", "value": 0.00373489564262175}, {"name": "\u4e00\u65b9", "value": 0.00373489564262175}, {"name": "\u9ed1", "value": 0.00373489564262175}, {"name": "\u4f4d\u7f6e", "value": 0.00373489564262175}]};
var topic_summary = {"0": [{"content": "\u7a46\u8c22\u594e\uff1a\u65e2\u7136\u9c7c\u8dc3 \u5012\u52fe\u90fd\u88ab\u4f60\u5439\u4e86 \u90a3\u5c31\u6765\u4e2a\u811a\u540e\u8ddf \u8fd9\u4e0b\u4f60\u770b\u4e0d\u6e05\u4e86\u5427 \u61f5\u903c\u4e86\u5427", "up": 1089}, {"content": "\u4e3b\u8981\u6362\u4e86\u6559\u7ec3\uff0c\u8fd9\u6559\u7ec3\u624d\u770b\u4e0a\u5927\u594e\u7684\uff0c\u4ee5\u524d\u9a6c\u6797\u4ece\u4e0d\u7528\u5927\u594e[\u7b11\u54ed][\u7b11\u54ed]", "up": 508}, {"content": "\u5f53\u521d\u7559\u5927\u594e\uff5e\u611f\u89c9\u662f\u7167\u987e\u8001\u5458\u5de5\u4e00\u6837\uff0c\u73b0\u5728\u771f\u7684\u662f\u6361\u4e86\u4e00\u4e2a\u5b9d\u554a", "up": 361}, {"content": "\u4eca\u5929\u5927\u594e\u4f9d\u7136\u51fa\u8272\uff0c\u867d\u7136\u5f20\u7fc0\u6709\u5931\u8bef\u4f46\u662f\u5927\u8fde\u4e0d\u80fd\u6ca1\u6709\u5f20\u7fc0\uff0c\u5f20\u7fc0\u5927\u8fde\u7403\u8ff7\u652f\u6301\u4f60\u4f60\u662f\u6211\u4eec\u5927\u8fde\u6700\u68d2\u7684\u95e8\u5c06\u3002", "up": 92}, {"content": "\u76f4\u64ad\u7684\u65f6\u5019\u542c\u5230\u6574\u573a\u5728\u558a\uff0c\u5927\u8fde\u5fc5\u80dc\uff0c\u5927\u8fde\u7403\u8ff7\u6700\u68d2\uff01\uff01\u674e\u5e05\uff0c\u5927\u594e\u90fd\u6709\u4eba\u5938\u4e86\uff0c\u5938\u5938\u79e6\u5347\u5427\uff0c\u8fd9\u79cd\u7126\u707c\u7684\u6bd4\u8d5b\u771f\u80fd\u770b\u51fa\u8001\u5c06\u7684\u4f5c\u7528\ud83d\udc4d", "up": 53}], "1": [{"content": "\u5927\u594e\uff1a\u9a6c\u6797\u4ecb\u4e2abiang\u989d\u5f6a\uff0c\u5f00\u5c40\u5c31\u4e0a\u90fd\u80fd\u7ade\u4e89\u6700\u4f73\u5c04\u624b\u4e86[\u6342\u8138]", "up": 638}, {"content": "\u5927\u594e\u7684\u4f5c\u7528\u660e\u663e\uff0c\u53e6\u5916\u6211\u60f3\u8bf4\u4e00\u53e5\u5f88\u591a\u4eba\u7684\u5fc3\u58f0\uff1a\u7d22\u8428\u4f60\u771f\u5fc3\u4e0d\u9002\u5408\u6743\u5065\uff01", "up": 454}, {"content": "\u7a46\u8c22\u594e\u8981\u706b\u554a\uff0c\u6df7\u8ff9\u4e2d\u7532\u591a\u5e74\uff0c\u5728\u4e2d\u8d85\u4e5f\u80fd\u7ad9\u4f4f\u811a", "up": 376}, {"content": "\u4e0d\u80fd\u8bf4\u5361\u62c9\u65af\u79d1\uff0c\u76d6\u5766\u4e0d\u52aa\u529b\uff0c\u4e5f\u4e0d\u80fd\u602a\u56fd\u5185\u7403\u5458\u4e0d\u7ed9\u529b\uff0c\u4f46\u662f\u8fde\u8f93\u4e86\u4e24\u573a\uff0c\u573a\u4e0a\u8fd8\u662f\u6ca1\u6709\u4e00\u4e1d\u6539\u53d8\uff0c\u5c31\u8fde\u9996\u53d1\u9635\u5bb9\u9a6c\u6797\u90fd\u61d2\u5f97\u8c03\u6574\uff0c\u96be\u9053\u60f3\u4e09\u4e2d\u536b\u6446\u5927\u5df4\u4e00\u76f4\u5230\u4e0b\u8bfe\u5417\uff0c\u6c6a\u664b\u8d24\u3001\u674e\u5e05\u4e5f\u7b97\u662f\u6210\u540dU23\u554a\uff0c\u4e00\u4e2a\u4e0d\u5230\u534a\u573a\u6362\u4e0b\uff0c\u4e00\u4e2a\u6392\u9664\u5728\u5927\u540d\u5355\u4e4b\u5916\uff0c\u9664\u6b64\u4e4b\u5916\uff0c\u9632\u5b88\u53cd\u51fb\u4f60\u4e5f\u8981\u6709\u4e2a\u9ad8\u4e2d\u950b\u9876\u7740\u5427\uff0c\u4e0a\u8d5b\u5b63\u7403\u961f\u5c04\u624b\u738b\u7a46\u8c22\u594e\u53ea\u80fd\u5728\u770b\u53f0\u4e0a\uff0c\u9a6c\u6797\u786e\u5b9e\u591f\u5dee\u7684", "up": 213}, {"content": "\u524d\u573a\u6ca1\u4eba\u914d\u5408\uff0c\u4e0a\u51af\u7279\u5176\u5b9e\u4e5f\u5b88\u4e0d\u4f4f\u3002\u8fd8\u4e0d\u5982\u4e94\u4e2a\u56fd\u4ea7\u540e\u536b\uff0c\u628a\u5468\u633a\u64a4\u56de\u6765\u6253\u540e\u536b\u3002\u524d\u573a\u4e0a\u5927\u594e\uff0c\u8d77\u7801\u6709\u4e2a\u652f\u70b9\uff0c\u5361\u62c9\u65af\u79d1\u8d70\u8fb9\u4f20\u4e2d\u7a81\u7834\u90fd\u884c\u30025-4-1\u5c31\u5b8c\u4e8b\u4e86\u3002\u4e0d\u75bc\u4e0d\u75d2\u76d6\u5766\u5361\u62c9\u65af\u79d1\uff0c\u540e\u8fb9\u51af\u7279\u6ca1\u5565\u7528\u3002\u524d\u573a\u62ff\u7403\u7684\u70b9\u592a\u5c11\u4e86\u3002", "up": 197}], "2": [{"content": "\u5927\u594e\u773c\u770b\u7403\u5f39\u5730\u800c\u8d77\u5fc3\u60f3\uff1a\u6211\u6765\u4e2a\u6311\u7403\u8fc7\u4eba\uff01\u987a\u52bf\u811a\u5c16\u4e00\u62ac\u3002\u3002\u3002\u80cc\u540e\u4e0d\u7981\u5192\u51fa\u51b7\u6c57\uff08\u6211\u9760\uff0c\u6311\u5927\u4e86~\uff09\u5f85\u56de\u8fc7\u795e\u6765\uff0c\u53d1\u73b0\u7403\u8fdb\u4e86\uff01\uff01\uff01\u6211\u662f\u8c01\uff1f\u6211\u5728\u54ea\uff1f[\u7b11\u54ed]", "up": 10}, {"content": "\u5927\u594e\u5bf9\u4f60\u5472\u7259\u4e00\u4e50[\u6ed1\u7a3d][\u6ed1\u7a3d]", "up": 10}, {"content": "1:\u89d2\u5ea6\u95ee\u9898\uff0c\u786e\u5b9e\u8d8a\u4f4d\u4e86\uff0c2\uff1a\u7d22\u8428\u8981\u51c9\u4e86\uff0c3:\u7a46\u8c22\u594e\u914d\u5f97\u4e0a\u9996\u53d1", "up": 10}, {"content": "\u7a46\u8c22\u594e\uff1a\u5565\u65f6\u5019\u8fdb\u4e24\u4e2a\u7b97\u4e00\u5206\u4e86\uff1f", "up": 10}, {"content": "\u5927\u594e\u8fd9\u7b2c\u4e8c\u4e2a\u600e\u4e48\u770b\u90fd\u50cf\u7403\u6ca1\u505c\u597d\u3002\u76f4\u63a5\u6311\u8fdb\u4e86\u3002", "up": 8}], "3": [{"content": "\u8fdb\u7403\u7684\u7403\u5458\u662f\uff0c\u7a46\u8c22\u594e\uff01\uff01\uff01\u8fdb\u7403\u7684\u7403\u5458\u662f\uff0c\u7a46\u8c22\u594e\uff01\uff01\uff01\u8fdb\u7403\u7684\u7403\u5458\u662f\u7a46\u8c22\u594e\uff01\uff01\uff01", "up": 478}, {"content": "\u5927\u594e\u4e00\u8138\u8840\uff0c\u674e\u5e05\u4e5f\u662f\u771f\u62fc\u554a\uff01", "up": 426}, {"content": "\u4eba\u4eba\u90fd\u7231\u7a46\u8c22\u594e\uff01\uff01\uff01\uff01\uff01\uff01\uff01", "up": 391}, {"content": "\u5927\u594e\u725b\u903c \u6211\u5c31\u559c\u6b22\u5927\u8fde\u8d62\uff01", "up": 325}, {"content": "\u7403\u8fdb\u5566\uff01\u4f1f\u5927\u7684\u7a46\u8c22\u594e\uff01\u90dd\u6d77\u4e1c\u3001\u738b\u6d9b\u3001\u674e\u660e\u5728\u8fd9\u4e00\u523b\u7075\u9b42\u9644\u4f53\uff01\u5361\u62c9\u65af\u79d1\u3001\u76d6\u5766\u5b8c\u7f8e\u7684\u4f20\u7403\uff01\u4ed6\u6218\u80dc\u4e86\u88c1\u5224\uff0c\u4ed6\u4e0d\u662f\u4e00\u4e2a\u4eba\u5728\u6218\u6597\uff01\u4ed6\u4e0d\u662f\u4e00\u4e2a\u4eba\uff01\u5927\u8fde\u961f\u4e07\u5c81\uff01\uff01\uff01", "up": 230}], "4": [{"content": "\u6211\u521a\u770b\u7403\uff0c\u4e0d\u61c2\u7403\uff0c\u8bf7\u95ee\u4e3a\u5565\u8d35\u5dde\u63e1\u83494\uff0c5\u6b21\u6ca1\u4e8b\uff0c\u5927\u8fde\u7a46\u8c22\u594e\u8eba\u4e00\u6b21\u5c31\u5403\u724c\uff1f\u56e0\u4e3a\u4e00\u65b9\u597d\u6b3a\u8d1f\u5417\uff1f", "up": 438}, {"content": "\u5927\u8fde\u80fd\u8d62\u6052\u5927\u4e0a\u6e2f\u51ed\u4ec0\u4e48\u5c31\u4e0d\u80fd\u8d62\u9c81\u80fd\uff1f\u9c81\u80fd\u80fd\u8f93\u8d35\u5dde\u51ed\u4ec0\u4e48\u5c31\u4e0d\u80fd\u8f93\u5927\u8fde\uff1f\u9c81\u80fd\u4e0a\u534a\u573a\u81ea\u5df1\u8e22\u7684\u548c\u5c4e\u4e00\u6837\u4e5f\u6028\u88c1\u5224\u5457\uff1f\u5409\u5c14\u662f\u4e0d\u662f\u6ca1\u8e22\u5230\u7403\u8e22\u5230\u4e86\u7a46\u8c22\u594e\uff1f\u5361\u62c9\u65af\u79d1\u5c04\u95e8\u65f6\u5019\u662f\u4e0d\u662f\u91d1\u5f3a\u8fd8\u6ca1\u8d8a\u4f4d\uff1f\u76f4\u64ad\u5427\u91cc\u6709\u52a8\u56fe\u53ef\u4ee5\u770b\u554a\uff01\u81ea\u5df1\u8e22\u7684\u548c\u5c4e\u4e00\u6837\u4e0d\u627e\u627e\u81ea\u5df1\u539f\u56e0\uff0c\u5c31\u770b\u4e0d\u5f97\u522b\u4eba\u597d\u5457\uff01", "up": 372}, {"content": "\u6b32\u4e0e\u5929\u7a7a\u8bd5\u6bd4\u9ad8\uff0c \u4e00\u65b9\u5927\u594e\u4f60\u6700\u9a9a\uff5e", "up": 54}, {"content": "\u4eba\u548c\u8fdb\u7403\u65f6\u5019\u4e3a\u4ec0\u4e48\u89c6\u9891\u88c1\u5224\u4e0d\u51fa\u73b0\uff0c\u76d6\u5766\u88ab\u8e22\u5012\u65f6\u5019\u4e3a\u4ec0\u4e48\u89c6\u9891\u88c1\u5224\u4e0d\u51fa\u73b0\uff0c\u7a46\u8c22\u594e\u5728\u4eba\u548c\u7981\u533a\u6454\u5012\u65f6\u5019\u4e3a\u4ec0\u4e48\u89c6\u9891\u88c1\u5224\u4e0d\u51fa\u73b0\uff1f\u4e00\u65b9\u8fdb\u4e2a\u7403\u4f60\u6765\u4e86\u5de6\u770b\u53f3\u770b\u770b\u534a\u5929\uff01\u8bf4\u767d\u4e86\uff0c\u5c31\u662f\u88c1\u5224\u5728\u64cd\u63a7\u6bd4\u8d5b\uff01", "up": 46}, {"content": "\u6709\u6ca1\u6709\u95ee\u9898\u4f1a\u770b\u7403\u7684\u660e\u773c\u90fd\u80fd\u770b\u51fa\u6765 \u4eca\u5929\u5f00\u573a\u56db\u5206\u949f\u7684\u7403\u8ddf\u4e16\u754c\u676f\u4e0a\u7f57\u970d\u62c9\u62fd\u59c6\u5df4\u4f69\u7684\u7403\u6709\u4ec0\u4e48\u4e0d\u4e00\u6837 \u5224\u7f5a\u7ed3\u679c\u5c31\u5dee\u8fd9\u4e48\u591a\uff1f\u4e16\u754c\u676f\u8fd9\u4e48\u4e25\u8083\u7684\u6b63\u8d5b\u8fd8\u662f\u6dd8\u6c70\u8d5b\u90fd\u4e0d\u662f\u7ea2\u70b9\u5927\u8fde\u8fd9\u4e2a\u4e00\u6478\u4e00\u6837\u7684\u7403\u8fd8\u9700\u8981VAR\u63d0\u9192\u88c1\u5224\u5e94\u8be5\u7ed9\u7ea2\u724c\uff1f\u8fd8\u6709\u4eca\u5929\u4e9a\u6cf0\u7684\u79bb\u5730\u8e6c\u8e0f\u94f2\u7403\u4e3a\u4ec0\u4e48\u5c31\u4e0d\u662f\u7ea2\u724c VAR\u5c31\u4e0d\u53bb\u63d0\u9192\u4e3b\u88c1\u5224 \u7136\u540e\u4e0a\u5468\u5927\u8fde\u5ba2\u573a\u8e22\u4eba\u548c\u4e3a\u4ec0\u4e48\u4e00\u6837\u7684\u7403VAR\u5c31\u8981\u63d0\u9192\u4e3b\u88c1\u5224\u56de\u770b\u7136\u540e\u5f00\u573a\u5341\u5206\u949f\u5c31\u7f5a\u4e0b\u5927\u8fde\u7403\u5458 \u8fd9\u5c31\u662f\u4e24\u4e2a\u660e\u663e\u7684\u4f8b\u5b50 \u5927\u594e\u76d6\u5766\u5404\u79cd\u6ca1\u6bdb\u75c5\u7684\u8fdb\u7403\u6123\u662f\u7ed9\u5439\u65e0\u6548\u6211\u5c31\u4e0d\u4e3e\u4f8b\u4e86 \u51e1\u662f\u770b\u660e\u767d\u7684\u5c31\u4e0d\u8981\u518d\u5728\u8fd9\u88c5\u81ea\u5df1\u5f88\u61c2\u7403\u4e86 \u5927\u8fde\u4e0d\u662f\u8f93\u4e0d\u8d77 \u4e5f\u4e0d\u662f\u6015\u8f93 \u53ea\u662f\u73b0\u5728\u8f93\u7684\u592a\u7a9d\u56ca \u5b9e\u529b\u4e0d\u6d4e\u6211\u4eec\u627f\u8ba4 \u8bf4\u98ce\u51c9\u8bdd\u89c9\u5f97\u81ea\u5df1\u5f88\u61c2\u7403\u7684 \u5c31\u4ed6\u5988\u95ed\u5634\u6eda\u86cb\u5427", "up": 11}], "5": [{"content": "\u7a46\u8c22\u594e\u771f\u662f\u53c8\u4fbf\u5b9c\u53c8\u597d\u7528\u7684\u9ed1\u53c8\u786c\u5916\u63f4", "up": 916}, {"content": "\u5927\u594e\u6700\u540e\u8840\u67d3\u8d5b\u573a\uff0c\u52b3\u6a21\u5916\u63f4\u7684\u5178\u8303[mvp]", "up": 221}, {"content": "\u9a6c\u6797\u6700\u5f00\u59cb\u7528\u7a46\u8c22\u594e\uff0c\u5e94\u8be5\u5df2\u7ecf\u662f\u4e89\u51a0\u884c\u5217", "up": 144}, {"content": "\u7a46\u8c22\u594e\u4e0a\u8d5b\u5b63\u4e2d\u7532\u817f\u90fd\u53d8\u5f62\u4e86\u8fd8\u80fd\u8fdb\u7403 \u5927\u8fde\u8fd9\u51e0\u540d\u5916\u63f4\u9664\u4e86\u7533\u82b1\u540e\u6765\u90a3\u4e2a\u771f\u7684\u90fd\u5f88\u597d\u7528\u5f88\u62fc", "up": 131}, {"content": "\u5f53\u53cd\u51fb\u53f7\u89d2\u5439\u8d77\u7684\u65f6\u5019\uff0c\u7a46\u8c22\u594e\u603b\u662f\u5728\u524d\u65b9\u505a\u5f15\u5bfc\u8005\u3002 \u5f53\u5361\u62c9\u65af\u79d1\u4e00\u6b21\u6b21\u88ab\u4fb5\u72af\u7684\u65f6\u5019\uff0c\u4ed6\u603b\u662f\u4f1a\u505a\u51fa\u8ba9\u4eba\u4eec\u95ed\u5634\u7684\u56de\u5e94\u3002\u5927\u8fde\u52a0\u6cb9\uff0c\u4eca\u5e74\u4fdd\u7ea7\u6210\u529f\uff0c\u660e\u5e74\u4e89\u53d6\u8fdb\u593a\u51a0\u533a\u3002", "up": 128}]};
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
