var data = {"person_name": "\u5218\u6bbf\u5ea7", "nicknames": "\u5218\u6bbf\u5ea7\u3001\u6444\u653f\u738b", "aspects": {"\u6bd4\u8d5b": 0.6473470553207793, "\u540e\u9632": 0.2288257191048838, "\u9632\u5b88": 0.45446823136591413, "\u7403\u5458": 0.4787693597730694, "\u8d5b\u5b63": 0.616438312662284, "\u8fdb\u653b": 0.5050162061597323, "\u7403\u8ff7": 0.5828498749202483, "\u8fdb\u7403": 0.5871676705764737, "\u8db3\u7403": 0.3401597253491592, "\u5916\u63f4": 0.7513510367231371}, "overall_heat": 463.0, "overall_polar": 0.37, "name": "21", "nationality": "\u4e2d\u56fd", "position": "\u5b88\u95e8\u5458", "goal": "0", "assist": "0", "team_name": "\u5e7f\u5dde\u6052\u5927\u6dd8\u5b9d", "name_en": "Liu Dianzuo", "age": "28", "height": "188", "weight": "82"};
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
var topic_keywords = {"0": [{"name": "\u5218\u6bbf\u5ea7", "value": 0.10720342765330715}, {"name": "\uff01", "value": 0.09827724716593769}, {"name": "\u6444\u653f\u738b", "value": 0.02329733107203428}, {"name": "\uff1f", "value": 0.021512094974560386}, {"name": "\u5bcc\u529b", "value": 0.020619476925823443}, {"name": "\u6052\u5927", "value": 0.017941622779612604}, {"name": "\u95e8\u5c06", "value": 0.009908060340980095}, {"name": "\u4e2d\u8d85", "value": 0.00901544229224315}, {"name": "\u6342", "value": 0.008122824243506204}, {"name": "\u8138", "value": 0.008122824243506204}, {"name": "\u6bd4\u8d5b", "value": 0.006337588146032313}, {"name": "\u5367\u5e95", "value": 0.006337588146032313}, {"name": "\u4eca\u5929", "value": 0.006337588146032313}, {"name": "\u5e03\u62c9\u6c83", "value": 0.006337588146032313}, {"name": "\u592a", "value": 0.006337588146032313}, {"name": "\u8f6c\u4f1a", "value": 0.0054449700972953674}, {"name": "\u4e00\u573a", "value": 0.0054449700972953674}, {"name": "\u7403", "value": 0.0054449700972953674}, {"name": "\u5403", "value": 0.004552352048558422}, {"name": "\u70b9", "value": 0.004552352048558422}, {"name": "\u9632\u5b88", "value": 0.004552352048558422}, {"name": "\ud83d\ude02", "value": 0.004552352048558422}, {"name": "\u4e00\u6218", "value": 0.003659733999821476}, {"name": "\u53d1\u6325", "value": 0.003659733999821476}, {"name": "\u5218", "value": 0.003659733999821476}, {"name": "\ud83d\udc4d", "value": 0.003659733999821476}, {"name": "\u8fd9\u6b21", "value": 0.003659733999821476}, {"name": "\u66fe\u8bda", "value": 0.003659733999821476}, {"name": "\u4e9a\u6cf0", "value": 0.003659733999821476}, {"name": "\u4f9d\u8d56", "value": 0.003659733999821476}], "1": [{"name": "\u5218\u6bbf\u5ea7", "value": 0.053458169737239505}, {"name": "\uff01", "value": 0.03433001107419712}, {"name": "\u95e8\u5c06", "value": 0.016208597603946443}, {"name": "\u4eca\u665a", "value": 0.01117487163998792}, {"name": "\u7403", "value": 0.01117487163998792}, {"name": "\u4e22\u7403", "value": 0.010168126447196215}, {"name": "\u6052\u5927", "value": 0.009161381254404511}, {"name": "\u6bd4\u8d5b", "value": 0.008154636061612805}, {"name": "\u82cd\u4e95\u7a7a", "value": 0.0071478908688211015}, {"name": "\u540e\u9632", "value": 0.0071478908688211015}, {"name": "\u6000\u4e0a", "value": 0.0071478908688211015}, {"name": "\u6ca1\u51c6\u513f", "value": 0.0071478908688211015}, {"name": "\u6ce2", "value": 0.0071478908688211015}, {"name": "\u8d23\u4efb", "value": 0.0071478908688211015}, {"name": "\u6c34\u5e73", "value": 0.0071478908688211015}, {"name": "\u4e00\u4e2a", "value": 0.0071478908688211015}, {"name": "\u9632\u5b88", "value": 0.006141145676029397}, {"name": "\uff1f", "value": 0.006141145676029397}, {"name": "\u5605", "value": 0.006141145676029397}, {"name": "\u6253\u6210", "value": 0.006141145676029397}, {"name": "\u81f3\u5c11", "value": 0.005134400483237693}, {"name": "\u771f\u662f", "value": 0.005134400483237693}, {"name": "\u624b", "value": 0.005134400483237693}, {"name": "\u4e2d", "value": 0.005134400483237693}, {"name": "\u90a3\u7403", "value": 0.005134400483237693}, {"name": "\u9ec4\u6cb9", "value": 0.005134400483237693}, {"name": "\u77e5\u9053", "value": 0.005134400483237693}, {"name": "\u5931\u7403", "value": 0.005134400483237693}, {"name": "\u7b2c\u4e8c\u4e2a", "value": 0.005134400483237693}, {"name": "\u707e\u96be", "value": 0.005134400483237693}], "2": [{"name": "\u5218\u6bbf\u5ea7", "value": 0.03963733581308846}, {"name": "\u6052\u5927", "value": 0.02801348366848774}, {"name": "\u6444\u653f\u738b", "value": 0.01871440195280716}, {"name": "\u54ed", "value": 0.015227246309426944}, {"name": "\u5bcc\u529b", "value": 0.014064861094966873}, {"name": "\u7b11", "value": 0.014064861094966873}, {"name": "\u4e00\u4e2a", "value": 0.011740090666046728}, {"name": "\u8e22", "value": 0.011740090666046728}, {"name": "\u6251", "value": 0.010577705451586657}, {"name": "\u5389\u5bb3", "value": 0.009415320237126584}, {"name": "\u592a", "value": 0.008252935022666512}, {"name": "\u95e8\u5c06", "value": 0.008252935022666512}, {"name": "\u6700\u540e", "value": 0.00709054980820644}, {"name": "\ud83d\ude02", "value": 0.00709054980820644}, {"name": "\u7403", "value": 0.00709054980820644}, {"name": "\u5b88\u95e8\u5458", "value": 0.00709054980820644}, {"name": "\u6740\u624b", "value": 0.00709054980820644}, {"name": "\u540e\u9632", "value": 0.005928164593746368}, {"name": "\u624e\u54c8\u7ef4", "value": 0.005928164593746368}, {"name": "\u8fdb", "value": 0.005928164593746368}, {"name": "\u5916\u63f4", "value": 0.005928164593746368}, {"name": "\u51e0\u6b21", "value": 0.005928164593746368}, {"name": "\u4e2d\u8d85", "value": 0.005928164593746368}, {"name": "\u5439", "value": 0.0047657793792862954}, {"name": "\u672c\u571f", "value": 0.0047657793792862954}, {"name": "\u5218", "value": 0.0047657793792862954}, {"name": "\u4eca\u5929", "value": 0.0047657793792862954}, {"name": "\u8d5b\u5b63", "value": 0.0047657793792862954}, {"name": "\u8fdb\u7403", "value": 0.0047657793792862954}, {"name": "\u597d", "value": 0.0047657793792862954}], "3": [{"name": "\u5218\u6bbf\u5ea7", "value": 0.09386561128796352}, {"name": "\uff01", "value": 0.019014023918093436}, {"name": "\uff1f", "value": 0.01729329777165964}, {"name": "\u6052\u5927", "value": 0.016432934698442744}, {"name": "\u6444\u653f\u738b", "value": 0.015572571625225847}, {"name": "\u4e00\u4e2a", "value": 0.012991482405575154}, {"name": "\u66fe\u8bda", "value": 0.011270756259141358}, {"name": "\u6ed1\u7a3d", "value": 0.008689667039490666}, {"name": "\u6bd4\u8d5b", "value": 0.008689667039490666}, {"name": "\u4eca\u5929", "value": 0.008689667039490666}, {"name": "\u95e8\u5c06", "value": 0.00696894089305687}, {"name": "\u5938", "value": 0.00696894089305687}, {"name": "\u66ff\u8865", "value": 0.00696894089305687}, {"name": "\u8fd9\u573a", "value": 0.006108577819839972}, {"name": "\u8fd8\u597d", "value": 0.006108577819839972}, {"name": "\u673a\u4f1a", "value": 0.006108577819839972}, {"name": "\u5bcc\u529b", "value": 0.006108577819839972}, {"name": "\u505a", "value": 0.005248214746623075}, {"name": "\u4e01\u6d77\u5cf0", "value": 0.004387851673406177}, {"name": "\u5168\u573a", "value": 0.004387851673406177}, {"name": "\u611f\u89c9", "value": 0.004387851673406177}, {"name": "\u5750", "value": 0.004387851673406177}, {"name": "\u597d", "value": 0.004387851673406177}, {"name": "\u771f\u662f", "value": 0.004387851673406177}, {"name": "\u8868\u73b0", "value": 0.004387851673406177}, {"name": "\u4eba", "value": 0.004387851673406177}, {"name": "\u6700\u4f73", "value": 0.004387851673406177}, {"name": "\u770b\u5230", "value": 0.00352748860018928}, {"name": "\u77e5\u9053", "value": 0.00352748860018928}, {"name": "\u4e0d\u597d", "value": 0.00352748860018928}], "4": [{"name": "\u5218\u6bbf\u5ea7", "value": 0.039587441225542246}, {"name": "\uff01", "value": 0.024419839223418782}, {"name": "\u53d1\u6325", "value": 0.01076899742150766}, {"name": "\u7403\u5458", "value": 0.01076899742150766}, {"name": "\u6052\u5927", "value": 0.009252237221295314}, {"name": "\u4e2d\u573a", "value": 0.009252237221295314}, {"name": "\u6251", "value": 0.009252237221295314}, {"name": "\u80e1\u777f\u5b9d", "value": 0.007735477021082967}, {"name": "\uff1f", "value": 0.007735477021082967}, {"name": "\u9ec4\u535a\u6587", "value": 0.007735477021082967}, {"name": "\u5fb7\u5229", "value": 0.006218716820870621}, {"name": "\u90d1\u667a", "value": 0.006218716820870621}, {"name": "\u80fd\u529b", "value": 0.006218716820870621}, {"name": "\u7948\u7977", "value": 0.006218716820870621}, {"name": "\u4eca\u5929", "value": 0.006218716820870621}, {"name": "\u4eca\u5e74", "value": 0.006218716820870621}, {"name": "\u5dee", "value": 0.006218716820870621}, {"name": "\u53e4", "value": 0.006218716820870621}, {"name": "\u5b8c\u5168", "value": 0.004701956620658274}, {"name": "\u66fe", "value": 0.004701956620658274}, {"name": "\u6bd4\u8d5b", "value": 0.004701956620658274}, {"name": "\u6210\u4e3a", "value": 0.004701956620658274}, {"name": "\u4e0d\u9519", "value": 0.004701956620658274}, {"name": "\u771f\u7684", "value": 0.004701956620658274}, {"name": "\u540e\u536b", "value": 0.004701956620658274}, {"name": "\u7ea2\u724c", "value": 0.004701956620658274}, {"name": "\u5e0c\u671b", "value": 0.004701956620658274}, {"name": "\u4e2d", "value": 0.004701956620658274}, {"name": "\u540e\u8170", "value": 0.004701956620658274}, {"name": "\u5f20\u6210\u6797", "value": 0.004701956620658274}], "5": [{"name": "\u5218\u6bbf\u5ea7", "value": 0.06825761505966056}, {"name": "\u6052\u5927", "value": 0.035648113836804274}, {"name": "\uff01", "value": 0.014896613058622991}, {"name": "\u771f\u7684", "value": 0.014155488030830802}, {"name": "\u5bcc\u529b", "value": 0.011932112947454237}, {"name": "\uff1f", "value": 0.011932112947454237}, {"name": "\u4eba", "value": 0.011190987919662047}, {"name": "\u8fd9\u573a", "value": 0.010449862891869858}, {"name": "\u592a", "value": 0.010449862891869858}, {"name": "\u4e00\u4e2a", "value": 0.00970873786407767}, {"name": "\uff1b", "value": 0.00970873786407767}, {"name": "\u7403", "value": 0.008967612836285482}, {"name": "\u7403\u8ff7", "value": 0.008226487808493292}, {"name": "\u771f", "value": 0.007485362780701104}, {"name": "\u89c9\u5f97", "value": 0.006744237752908916}, {"name": "\u8d5b\u5b63", "value": 0.006744237752908916}, {"name": "\u8868\u73b0", "value": 0.006003112725116727}, {"name": "\u8fdb\u653b", "value": 0.006003112725116727}, {"name": "\u963f\u5170", "value": 0.006003112725116727}, {"name": "\u66fe\u8bda", "value": 0.0052619876973245385}, {"name": "\u4e1a\u4f59", "value": 0.0052619876973245385}, {"name": "\u9632\u5b88", "value": 0.0052619876973245385}, {"name": "\u6bd4\u8d5b", "value": 0.0052619876973245385}, {"name": "\u9505", "value": 0.0052619876973245385}, {"name": "\u611f\u89c9", "value": 0.00452086266953235}, {"name": "\u5fae\u7b11", "value": 0.00452086266953235}, {"name": "\u4eca\u5929", "value": 0.00452086266953235}, {"name": "\u8f93", "value": 0.00452086266953235}, {"name": "\u624e\u54c8\u7ef4", "value": 0.0037797376417401615}, {"name": "\u4e00\u76f4", "value": 0.0037797376417401615}]};
var topic_summary = {"0": [{"content": "\u4f9d\u9760\u5218\u6bbf\u5ea7\u7684\u51fa\u8272\u53d1\u6325\uff0c\u5bcc\u529b\u5ba2\u573a\u51fb\u8d25\u6052\u5927[\u518d\u89c1]", "up": 3805}, {"content": "\u4e9a\u6d32\u5e03\u62c9\u6c83\uff0c\u5f53\u4ee3\u6444\u653f\u738b\u2014\u2014\u5218\u6bbf\u5ea7", "up": 2667}, {"content": "\u5218\u6bbf\u5ea7\uff0c\u539f\u6c5f\u897f\u8861\u6e90\u7403\u5458\uff0c\u6c5f\u897f\u8861\u6e90\u5728\u5357\u660c\u90a3\u51e0\u5e74\uff0c\u5218\u6bbf\u5ea7\u4e3a\u7403\u961f\u4fdd\u7ea7\u7acb\u4e0b\u4e86\u6c57\u9a6c\u529f\u52b3\uff0c\u8fd9\u4e5f\u662f\u4e3a\u4ec0\u4e48\u4ed6\u80fd\u53bb\u6052\u5927\u7684\u539f\u56e0\u3002\u52a0\u6cb9\uff01", "up": 145}, {"content": "\u4e2d\u8d85\u7b2c\u4e00\u8f6e\u6700\u7ea2\u4eba\u7269+\u5934\u6761\u541b\uff1a\u5218\u6bbf\u5ea7", "up": 20}, {"content": "\u73b0\u5728\u60f3\u60f3\u7b2c\u4e00\u8f6e \u6052\u5927\u8f93\u7684\u771f\u7a9d\u56ca\uff01\u4e00\u573a\u4e22\u4e865\u4e2a\u7403\uff01\uff01\uff01\u5218\u6bbf\u5ea7\u554a \u5173\u952e\u6bd4\u8d5b\u8fd8\u662f\u522b\u4e0a\u4e86\uff01\uff01\uff01", "up": 11}], "1": [{"content": "\u6211\u4e5f\u662f\u4e00\u540d\u95e8\u5c06\uff0c\u6211\u77e5\u9053\u95e8\u5c06\u4f4d\u7f6e\u7684\u7279\u6b8a\u6027\uff0c\u4e00\u6b21\u5931\u8bef\u5c31\u662f\u4e22\u7403\uff0c\u8c01\u90fd\u60f3\u505a\u597d\u3002\u6bcf\u4e00\u4e2a\u95e8\u5c06\u90fd\u5f88\u52aa\u529b\u3002\u6211\u4eec\u4e0d\u5e94\u8be5\u9ed1\u5218\u6bbf\u5ea7\u3002\u3002\u3002\u3002\u3002\u90a3\u4ed6\u5988\u8fd8\u80fd\u9ed1\u8c01", "up": 742}, {"content": "\u6211\u662f\u957f\u6625\u7403\u8ff7 \u522b\u7684\u4e0d\u591a\u8bf4 \u8981\u611f\u8c22\u4e00\u4e0b\u5f00\u573a\u738b\u5bff\u633a\u53d7\u4f24\u65f6\u7b2c\u4e00\u65f6\u95f4\u51b2\u4e0a\u53bb\u7684\u5e94\u8be5\u662f\u5218\u6bbf\u5ea7\u5427\uff01\u8fd8\u6709\u6052\u5927\u7684\u961f\u533b\u4ee5\u53ca\u53c2\u4e0e\u5904\u7f6e\u4f24\u60c5\u7684\u6bcf\u4e2a\u4eba\uff01\u603b\u6709\u4e9b\u4e8b\u60c5\u6bd4\u6bd4\u8d5b\u8f93\u8d62\u8981\u91cd\u8981\uff01", "up": 15}, {"content": "3\u8f6e\u4e0d\u5931\u7403\uff0c\u4e0d\u77e5\u9053\u5218\u6bbf\u5ea7\u4ec0\u4e48\u6ecb\u5473", "up": 13}, {"content": "\u5176\u5b9e\u5218\u6bbf\u5ea7\u8fd9\u4e2a\u5931\u8bef\u6ca1\u90a3\u4e48\u4f4e\u7ea7\uff0c\u7403\u6709\u4e00\u4e2a\u6298\u7ebf\u800c\u4e14\u4ed6\u91cd\u5fc3\u5df2\u7ecf\u51fa\u53bb\u4e86\uff0c\u53ea\u80fd\u7528\u817f\u6321\u8fd9\u4e00\u4e0b\uff0c\u7403\u7684\u65cb\u8f6c\u548c\u817f\u7684\u89d2\u5ea6\u6b63\u597d\u662f\u5411\u540e\u5f39\u7684", "up": 8}, {"content": "\u8fd9\u573a\u6bd4\u8d5b\uff0c\u524d\u573a\u653b\u51fb\u6b27\u6d32\u6bd4\u8d5b\uff0c\u4e2d\u573a\u4e2d\u8d85\u6c34\u5e73\uff0c\u540e\u536b\u4e2d\u7532\u6c34\u5e73\uff0c\u95e8\u5c06\u6821\u961f\u6c34\u5e73\uff0c\u6ca1\u9519\uff0c\u6211\u8bf4\u7684\u662f\u5218\u6bbf\u5ea7", "up": 7}], "2": [{"content": "\u5f20\u601d\u9e4f\u88ab\u5c04\u6b63\u4e867\u811a\uff0c\u8fdb\u4e864\u4e2a\u7403\uff0c \u4faf\u68ee\u88ab\u5c04\u6b63\u4e863\u811a\uff0c\u8fdb\u4e863\u4e2a\u7403\uff0c\u6211\u7a0d\u5fae\u6709\u4e00\u70b9\u4e3a\u5f20\u601d\u9e4f\u9e23\u4e0d\u5e73\u554a\uff0c\u8c01\u624d\u662f\u771f\u7684\u6444\u653f\u738b[\u7b11\u54ed]", "up": 330}, {"content": "\u4eca\u5929\u8bf4\u5b9e\u8bdd\uff0c\u6ca1\u6709\u5916\u63f4\u7684\u7533\u82b1\u8e22\u7684\u6bd4\u6052\u5927\u597d\uff0c\u9ec4\u535a\u6587\u56e0\u4e3a\u4f24\u75c5\u8e22\u7684\u592a\u5c11\uff0c\u9664\u4e86\u5c11\u6570\u4f20\u7403\uff0c\u51e0\u6b21\u4f4e\u7ea7\u5931\u8bef\u592a\u81f4\u547d\uff0c\u5218\u6bbf\u5ea7\u7b97\u518d\u6b21\u8bc1\u660e\u81ea\u5df1\uff0c\u6768\u7acb\u745c\u8fdb\u7403\u4e0d\u9519\uff0c\u4f46\u662f\u8131\u8863\u5e86\u795d\u662f\u4e0d\u662f\u6709\u70b9\u8fc7\u4e86\uff0c\u548c\u5176\u4ed6\u7403\u961fu23\u6bd4\uff0c\u4f60\u8fd8\u8981\u63d0\u5347\u592a\u591a\uff01", "up": 101}, {"content": "\u5bcc\u529b\u8fd8\u662f\u592a\u4f9d\u8d56\u5218\u6bbf\u5ea7\u4e86[\u7b11\u54ed]", "up": 10}, {"content": "\u4e0d\u662f\u6052\u5927\u8e22\u5f97\u4e0d\u591f\u597d\uff0c\u800c\u662f\u624e\u54c8\u7ef4\u592a\u5c4c\uff0c\u8fd8\u6709\u6052\u5927\u5218\u6bbf\u5ea7\u53d1\u6325\u592a\u83dc\u9e1f\uff0c\u4e0d\u5982\u653e\u4e2a\u4eba\u6a2a\u8eba\u5728\u95e8\u53e3\uff0c\u81f3\u5c11\u4e0d\u4f1a\u8ba9\u7403\u6e9c\u8d70\u3002", "up": 7}, {"content": "\u8bf4\u5b9e\u8bdd\uff0c\u6052\u5927\u4e22\u76845\u4e2a\u7403\uff0c\u5b88\u95e8\u5458\u5982\u679c\u4e0d\u662f\u5218\u6bbf\u5ea7\u800c\u662f\u5fb7\u8d6b\u4e9a\uff0c\u90fd\u80fd\u8f7b\u677e\u6251\u51fa\u3002\u6052\u5927\u73b0\u5728\u5916\u63f4\u662f\u4e2d\u8d85\u6700\u5dee\u7684\uff0c\u5b88\u95e8\u5458\u662f\u4e2d\u8d85\u6700\u5dee\u7684\uff0c\u672c\u571f\u7403\u5458\u662f\u4e2d\u8d85\u6700\u8001\u7684\uff0c\u53ef\u4ee5\u8bf4\u5bcc\u529b\u63d0\u524d4\u5e74\u628a\u6052\u5927\u8e22\u6210\u5168\u534e\u73ed\ud83d\ude2b\ud83d\ude2b\ud83d\ude2b", "up": 6}], "3": [{"content": "\u5218\u6bbf\u5ea7 \u8ddf\u66fe\u8bda\u5dee\u4e86\u4e0d\u6b62\u4e00\u4e2a\u6863\u6b21", "up": 2065}, {"content": "\u8d5b\u540e\u5218\u6bbf\u5ea7\u7ed9\u5f20\u7fc0\u53d1\u4e86\u6761\u77ed\u4fe1\uff1a\u5144\u5f1f\uff0c\u8c22\u8c22\u554a", "up": 1712}, {"content": "\u7adf\u7136\u6ca1\u6709\u4eba\u5938\u5218\u6bbf\u5ea7\u7684\u4e34\u5371\u4e0d\u4e71\uff0c\u529b\u6551\u5371\u7403\u5417\uff1f\u6211\u9996\u5148\u51b2\u51fa\u6765\u5938\u4ed6\u4e00\u4e0b\u3002\u652f\u6301\u7684\u54e5\u4eec\u513f\u6709\u6ca1\u6709\uff1f", "up": 1494}, {"content": "\u738b\u5927\u96f7:\u5218\u6bbf\u5ea7\u5982\u679c\u54b1\u4e24\u89d2\u8272\u4e92\u6362\uff0c\u4f60\u4f1a\u77e5\u9053\u4ec0\u4e48\u53eb\u505a\u6b8b\u5fcd", "up": 825}, {"content": "\u8fd8\u597d\u4e0a\u7684\u4e0d\u662f\u5218\u6bbf\u5ea7\uff0c\u4e0d\u7136\u8bf4\u4e0d\u51c6\u6253\u62105\uff1a5", "up": 450}], "4": [{"content": "\u606d\u559c\u5218\u6bbf\u5ea7\u6210\u4e3a\u5929\u6cb3\u7b2c\u4e00\u4e2a\u88ab\u5618\u7684\u4e3b\u961f\u7403\u5458", "up": 7}, {"content": "\u80e1\u777f\u5b9d\u548c\u5218\u6bbf\u5ea7\uff0c\u6211\u64e6\u3002\u3002\u3002\u3002\u3002", "up": 7}, {"content": "\u5218\u6bbf\u5ea7\u662f\u4e00\u65b9\u9762\uff0c\u6052\u5927\u6ca1\u6709\u4e2d\u573a\uff0c\u53e4\u5fb7\u5229\u5c31\u50cf\u9690\u5f62\u4e86\u3002\u6162\u6162\u78e8\u5408\u5427", "up": 7}, {"content": "\u5218\u6bbf\u5ea7\u548c\u9ca4\u9c7c\u4eca\u5929\u6210\u4e3a\u4e86\u4e24\u5927\u5927\u817f \u795d\u8d3a\u4e00\u4e0b \u4e5f\u5e0c\u671b\u6b6a\u8116\u5b50\u65e9\u65e5\u627e\u56de\u4fe1\u5fc3[\u7948\u7977][\u7948\u7977]", "up": 6}, {"content": "\u5218\u6bbf\u5ea7\uff0c\u4e00\u6218\u6210\u540d\u3002\u53e4\u5fb7\u5229\uff0c\u5750\u5b9e\u5e9f\u67f4\u3002\u80e1\u777f\u5b9d\uff0c\u53ef\u4ee5\u56de\u66fc\u57ce\u4e86\u3002\u53bb\u5e74\u4e0d\u6295\u8d44\u5df2\u7ecf\u95ee\u9898\u5f88\u5927\u4e86\uff0c\u4eca\u5e74\u8fd8\u4e0d\u6295\uff0c\u4e9a\u51a0\u8d70\u4e0d\u8fdc\u6700\u591a\u516b\u5f3a\u6218\uff0c\u4e2d\u8d85\u4e09\u5230\u4e94\u540d\u5427\u3002\u8bb8\u7684\u5168\u534e\u73ed\u7b49\u7740\u53bb\u4e2d\u7532\u5427\uff01", "up": 6}], "5": [{"content": "\u603b\u7ed3\u4e00\u4e0b\uff1a\u8fd9\u662f\u5c5e\u4e8e\u624e\u54c8\u7ef4\u548c\u5218\u6bbf\u5ea7pk\u963f\u5170\u548c\u4e01\u6d77\u5cf0\u3002\u90fd\u662f\u65e0\u95f4\u9053\u963f[\u8870][\u8870]", "up": 1275}, {"content": "\u6052\u5927\u7684\u8fdb\u653b\u4f9d\u7136\u7280\u5229\uff0c\u5218\u6bbf\u5ea7\u9996\u53d1\u4f1a\u4e0d\u4f1a5:6\u2026", "up": 12}, {"content": "\u5218\u6bbf\u5ea7\u4e0d\u662f\u6211\u8bf4\u4f60\uff0c\u8fd9\u573a\u6bd4\u8d5b\u4e0d\u662f\u56e0\u4e3a\u4f60\u6052\u5927\u6839\u672c\u8f93\u4e0d\u4e86\uff01", "up": 10}, {"content": "\u770b\u4e0d\u4e0b\u53bb\u4e86\uff0c\u4e00\u5e2e\u4ec0\u4e48\u4eba\u554a\uff0c\u4f60\u884c\u4f60\u4e0a\uff0c\u5728\u8fd9\u88c51 3\uff0c\u5218\u6bbf\u5ea7\u518d\u5dee\u4e5f\u662f\u4e2d\u56fd\u8db3\u7403\u7684\u672a\u6765\uff0c\u800c\u4f60\u662f\u4ec0\u4e48\uff1f\u4f60\u4eec\u51ed\u8fd9\u4e00\u573a\u7403\u5c31\u80fd\u628a\u4e00\u4e2a\u4eba\u8bf4\u7684\u4f53\u65e0\u5b8c\u80a4\uff0c\u6709\u6ca1\u6709\u4e00\u70b9\u539f\u5219\u5462\uff1f\u4e2d\u56fd\u8db3\u7403\u6b63\u56e0\u4e3a\u6709\u4f60\u4eec\u8fd9\u5e2e\u55b7\u5b50\uff0c\u624d\u4f1a\u4e00\u76f4\u8fd9\u4e48\u4e0d\u81ea\u4fe1\uff0c\u88ab\u9a82\u50bb\u4e86\u3002\u89c9\u5f97\u5218\u6bbf\u5ea7****\u7684\u4eba\u53ef\u4ee5\u6eda\u4e86\u3002\u90fd\u8ba9\u4e00\u4e0b\uff0c\u6211\u5148\u6eda\u3002", "up": 9}, {"content": "\u5218\u6bbf\u5ea7\u8fd8\u662f\u4e0d\u9519\u7684\u3002\u4ed6\u4e5f\u77e5\u9053\u51a0\u519b\u7684\u91cd\u8981\u6027\u3002", "up": 8}]};
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
