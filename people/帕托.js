var data = {"person_name": "\u5e15\u6258", "nicknames": "\u5e15\u6258", "aspects": {"\u7403\u5458": 0.3551343731275866, "\u8fdb\u7403": 0.5359964996820933, "\u5916\u63f4": 0.43687613447454365, "\u7403\u8ff7": 0.44438341308300305, "\u8d5b\u5b63": 0.5300400452690864, "\u6bd4\u8d5b": 0.4349659955472818, "\u8fdb\u653b": 0.29520362056136734, "\u8054\u8d5b": 0.305287905450821, "\u9ec4\u724c": 0.5230381702195982, "\u9632\u5b88": 0.46587508514096043}, "overall_heat": 426.0, "overall_polar": -0.236, "name": "436", "nationality": "\u5df4\u897f", "position": "\u524d\u950b", "goal": "15", "assist": "4", "team_name": "\u5929\u6d25\u6743\u5065", "name_en": "Alexandre Rodrigues ", "age": "29", "height": "180", "weight": "72"};
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
var topic_keywords = {"0": [{"name": "\u5e15\u6258", "value": 0.07874601487778958}, {"name": "\uff01", "value": 0.028799149840595114}, {"name": "\uff1f", "value": 0.02561105207226355}, {"name": "\u6743\u5065", "value": 0.01604675876726886}, {"name": "\u5e94\u8be5", "value": 0.01073326248671626}, {"name": "\u4e0d\u7528", "value": 0.009670563230605738}, {"name": "\u4e2d\u8d85", "value": 0.008607863974495217}, {"name": "\u4e8e\u5927\u5b9d", "value": 0.007545164718384696}, {"name": "\u6052\u5927", "value": 0.007545164718384696}, {"name": "\u8d5b\u5b63", "value": 0.007545164718384696}, {"name": "\u8fdb\u7403", "value": 0.007545164718384696}, {"name": "\u4e0b", "value": 0.007545164718384696}, {"name": "\u7403\u8ff7", "value": 0.007545164718384696}, {"name": "\u7ef4\u7279", "value": 0.006482465462274176}, {"name": "\u5916\u63f4", "value": 0.006482465462274176}, {"name": "\u4e9a\u51a0", "value": 0.006482465462274176}, {"name": "\u559c\u6b22", "value": 0.006482465462274176}, {"name": "\u540e\u536b", "value": 0.005419766206163655}, {"name": "\u72af\u89c4", "value": 0.005419766206163655}, {"name": "\u65e9", "value": 0.005419766206163655}, {"name": "\u6559\u7ec3", "value": 0.005419766206163655}, {"name": "\u7403\u5458", "value": 0.005419766206163655}, {"name": "\u9ec4\u724c", "value": 0.005419766206163655}, {"name": "\u88c1\u5224", "value": 0.004357066950053135}, {"name": "\u77e5\u9053", "value": 0.004357066950053135}, {"name": "\u7ea2\u724c", "value": 0.004357066950053135}, {"name": "\u6700\u597d", "value": 0.004357066950053135}, {"name": "\u817f", "value": 0.004357066950053135}, {"name": "\u518d", "value": 0.004357066950053135}, {"name": "\u5439\u6389", "value": 0.004357066950053135}], "1": [{"name": "\u5e15\u6258", "value": 0.04613583138173302}, {"name": "\uff01", "value": 0.041451990632318504}, {"name": "\u6743\u5065", "value": 0.026619828259172522}, {"name": "\u83ab\u5fb7\u65af\u7279", "value": 0.02271662763466042}, {"name": "\uff1f", "value": 0.01647150663544106}, {"name": "\u6253", "value": 0.012568306010928962}, {"name": "\u6052\u5927", "value": 0.011787665886026541}, {"name": "\u73b0\u5728", "value": 0.009445745511319282}, {"name": "\u6bd4\u8d5b", "value": 0.007884465261514442}, {"name": "\u8fdb\u7403", "value": 0.007884465261514442}, {"name": "\u4eba", "value": 0.007103825136612021}, {"name": "\u89c9\u5f97", "value": 0.007103825136612021}, {"name": "\u7ef4\u7279", "value": 0.007103825136612021}, {"name": "\u7403\u5458", "value": 0.007103825136612021}, {"name": "\u8d5b\u5b63", "value": 0.0063231850117096014}, {"name": "\u585e\u5c14", "value": 0.0063231850117096014}, {"name": "\u5e94\u8be5", "value": 0.0063231850117096014}, {"name": "\u5916\u63f4", "value": 0.0063231850117096014}, {"name": "\u901f\u5ea6", "value": 0.0055425448868071815}, {"name": "\u7d22\u8428", "value": 0.0055425448868071815}, {"name": "\u4e00\u5b9a", "value": 0.0055425448868071815}, {"name": "\u5b59\u53ef", "value": 0.0055425448868071815}, {"name": "\u8e22", "value": 0.0055425448868071815}, {"name": "\u6700\u540e", "value": 0.0047619047619047615}, {"name": "\u627e", "value": 0.0047619047619047615}, {"name": "\u4eca\u5e74", "value": 0.0047619047619047615}, {"name": "\u72b6\u6001", "value": 0.0047619047619047615}, {"name": "\u62fc", "value": 0.0047619047619047615}, {"name": "\u53bb\u5e74", "value": 0.0047619047619047615}, {"name": "\u5b9e\u529b", "value": 0.0039812646370023415}], "2": [{"name": "\u5e15\u6258", "value": 0.1425512104283054}, {"name": "\uff01", "value": 0.04944134078212291}, {"name": "\uff1f", "value": 0.02709497206703911}, {"name": "\u70ed\u5df4", "value": 0.023370577281191806}, {"name": "\u72b6\u6001", "value": 0.010335195530726256}, {"name": "\u597d", "value": 0.010335195530726256}, {"name": "\u6743\u5065", "value": 0.010335195530726256}, {"name": "\u903c", "value": 0.009404096834264433}, {"name": "\u725b", "value": 0.007541899441340782}, {"name": "\u52a0\u6cb9", "value": 0.007541899441340782}, {"name": "\u8fdb\u7403", "value": 0.007541899441340782}, {"name": "\u770b\u5230", "value": 0.006610800744878957}, {"name": "\u771f\u7684", "value": 0.006610800744878957}, {"name": "\u4eca\u5929", "value": 0.006610800744878957}, {"name": "\u4e0d\u7528", "value": 0.005679702048417132}, {"name": "\u53ef\u60dc", "value": 0.004748603351955307}, {"name": "\u4fe9", "value": 0.004748603351955307}, {"name": "520", "value": 0.004748603351955307}, {"name": "\u5389\u5bb3", "value": 0.004748603351955307}, {"name": "\u540e\u536b", "value": 0.003817504655493482}, {"name": "\u4e00\u4e2a", "value": 0.003817504655493482}, {"name": "\u4e0d\u4e0a", "value": 0.003817504655493482}, {"name": "\u6362", "value": 0.003817504655493482}, {"name": "\u6362\u4e0b", "value": 0.003817504655493482}, {"name": "\u770b\u89c1", "value": 0.003817504655493482}, {"name": "\u73b0\u5728", "value": 0.003817504655493482}, {"name": "\u4e3a\u5565", "value": 0.003817504655493482}, {"name": "\u8d5e", "value": 0.003817504655493482}, {"name": "\u6709\u70b9", "value": 0.003817504655493482}, {"name": "\u706b\u70ed", "value": 0.003817504655493482}], "3": [{"name": "\u5e15\u6258", "value": 0.09254201680672268}, {"name": "\uff01", "value": 0.026365546218487395}, {"name": "\u6342", "value": 0.015861344537815125}, {"name": "\u8138", "value": 0.015861344537815125}, {"name": "\uff1f", "value": 0.011659663865546219}, {"name": "\u7d22\u8428", "value": 0.009558823529411764}, {"name": "\u7c73\u5170", "value": 0.009558823529411764}, {"name": "\u4e00\u4e2a", "value": 0.008508403361344537}, {"name": "\u6743\u5065", "value": 0.008508403361344537}, {"name": "\u4e2d\u8d85", "value": 0.008508403361344537}, {"name": "\u8e22", "value": 0.0074579831932773104}, {"name": "\u771f", "value": 0.006407563025210084}, {"name": "\u6253", "value": 0.006407563025210084}, {"name": "\u7403\u5458", "value": 0.006407563025210084}, {"name": "\u5f53\u5e74", "value": 0.006407563025210084}, {"name": "\u5bb6", "value": 0.005357142857142857}, {"name": "\u7403\u8ff7", "value": 0.005357142857142857}, {"name": "\u8fdb", "value": 0.005357142857142857}, {"name": "\u771f\u662f", "value": 0.005357142857142857}, {"name": "\u7403", "value": 0.005357142857142857}, {"name": "\u5c04\u95e8", "value": 0.005357142857142857}, {"name": "\u56de", "value": 0.005357142857142857}, {"name": "\u53ef\u60dc", "value": 0.005357142857142857}, {"name": "\u6b27\u6d32", "value": 0.005357142857142857}, {"name": "\u80fd\u529b", "value": 0.00430672268907563}, {"name": "\u4eba", "value": 0.00430672268907563}, {"name": "\u7edd\u6740", "value": 0.00430672268907563}, {"name": "\u5bcc\u529b", "value": 0.00430672268907563}, {"name": "\u771f\u725b", "value": 0.00430672268907563}, {"name": "\u4e3b\u529b", "value": 0.0032563025210084035}], "4": [{"name": "\u5e15\u6258", "value": 0.05535911602209945}, {"name": "\u7d22\u8428", "value": 0.024419889502762433}, {"name": "\uff01", "value": 0.023314917127071826}, {"name": "\u6743\u5065", "value": 0.02}, {"name": "\u6768\u65ed", "value": 0.01005524861878453}, {"name": "\u8e22", "value": 0.008950276243093922}, {"name": "\uff1f", "value": 0.008950276243093922}, {"name": "\u7403\u5458", "value": 0.007845303867403314}, {"name": "\u4e0d\u7528", "value": 0.006740331491712707}, {"name": "\u4e0b\u8bfe", "value": 0.006740331491712707}, {"name": "\u83ab\u5fb7\u65af\u7279", "value": 0.006740331491712707}, {"name": "\u6559\u7ec3", "value": 0.005635359116022099}, {"name": "\u73b0\u5728", "value": 0.005635359116022099}, {"name": "\u7403\u8ff7", "value": 0.005635359116022099}, {"name": "\u8fdb\u653b", "value": 0.005635359116022099}, {"name": "\u4e00\u4e2a", "value": 0.005635359116022099}, {"name": "\u6539\u53d8", "value": 0.004530386740331491}, {"name": "\u4e0d\u9519", "value": 0.004530386740331491}, {"name": "\u8fdb\u7403", "value": 0.004530386740331491}, {"name": "\u8fd9\u79cd", "value": 0.004530386740331491}, {"name": "\u4e0d\u597d", "value": 0.004530386740331491}, {"name": "\u7ec4\u7ec7", "value": 0.004530386740331491}, {"name": "\u597d", "value": 0.004530386740331491}, {"name": "\u8d62\u7403", "value": 0.004530386740331491}, {"name": "\u4f9d\u7136", "value": 0.004530386740331491}, {"name": "\u4e9a\u51a0", "value": 0.004530386740331491}, {"name": "\u771f", "value": 0.004530386740331491}, {"name": "\u8d5b\u5b63", "value": 0.004530386740331491}, {"name": "\u7b11", "value": 0.0034254143646408842}, {"name": "\u4fdd\u7f57", "value": 0.0034254143646408842}], "5": [{"name": "\u5e15\u6258", "value": 0.03657458563535912}, {"name": "\u6743\u5065", "value": 0.02552486187845304}, {"name": "\u5916\u63f4", "value": 0.01447513812154696}, {"name": "\u7403\u5458", "value": 0.01447513812154696}, {"name": "\uff01", "value": 0.01447513812154696}, {"name": "\u6052\u5927", "value": 0.011160220994475138}, {"name": "\u597d", "value": 0.01005524861878453}, {"name": "\u9c81\u80fd", "value": 0.008950276243093922}, {"name": "\u6bd4\u8d5b", "value": 0.006740331491712707}, {"name": "\u518d", "value": 0.006740331491712707}, {"name": "\u5df4\u897f", "value": 0.006740331491712707}, {"name": "\u6253", "value": 0.006740331491712707}, {"name": "\u5e0c\u671b", "value": 0.005635359116022099}, {"name": "\u4e2d\u8d85", "value": 0.005635359116022099}, {"name": "\u66f4\u597d", "value": 0.005635359116022099}, {"name": "\uff1f", "value": 0.005635359116022099}, {"name": "\u7403", "value": 0.005635359116022099}, {"name": "\u4e00\u4e2a", "value": 0.005635359116022099}, {"name": "\u8054\u8d5b", "value": 0.004530386740331491}, {"name": "\u7403\u961f", "value": 0.004530386740331491}, {"name": "\u641e", "value": 0.004530386740331491}, {"name": "\u524d", "value": 0.004530386740331491}, {"name": "\u56fd\u5185", "value": 0.004530386740331491}, {"name": "\u5bcc\u529b", "value": 0.004530386740331491}, {"name": "\u4eba", "value": 0.004530386740331491}, {"name": "\u7403\u661f", "value": 0.004530386740331491}, {"name": "\u4e0a\u6e2f", "value": 0.0034254143646408842}, {"name": "\u8bd5\u8bd5", "value": 0.0034254143646408842}, {"name": "\u653f\u7b56", "value": 0.0034254143646408842}, {"name": "\u73b0\u5728", "value": 0.0034254143646408842}]};
var topic_summary = {"0": [{"content": "\u5e15\u6258\u7684\u8fdb\u7403\u5f70\u663e\u529f\u529b\u6df1\u539a\uff01", "up": 579}, {"content": "\u5e15\u6258\u8fd9\u72b6\u6001\u65e9\u6765\u534a\u5e74\u80fd\u8e22\u4e16\u754c\u676f[\u6ed1\u7a3d]", "up": 570}, {"content": "\u81f3\u4eca\u4e0d\u660e\u767d\u4e3a\u5565\u6743\u5065\u8d5b\u5b63\u521d\u4e0d\u7528\u5e15\u6258....", "up": 545}, {"content": "\u4e8b\u5b9e\u8bc1\u660e\uff0c\u4e2d\u8d85\u4e0d\u9700\u8981\u5916\u63f4\u540e\u536b\uff0c\u64a4\u4e0b\u97e9\u56fd\u4eba\uff0c\u5e15\u6258\u548c\u83ab\u5f97\u65af\u7279\u4e00\u8d77\u9996\u53d1\uff0c\u6743\u5065\u5e94\u8be5\u4e0d\u81f3\u4e8e\u8fd9\u4e48\u88ab\u52a8\u3002\u770b\u770b\u5927\u8fde\u4e00\u65b9\u64a4\u4e0b\u51af\u7279\uff0c\u6253\u51fa\u524d\u573a\u5916\u63f4\u4e09\u53c9\u621f\u4e4b\u540e\u7684\u53d8\u5316\uff01", "up": 193}, {"content": "\u7d22\u8428\u8981\u628a\u81ea\u5df1\u4f5c\u4e0b\u8bfe\u4e86\uff0c\u4e9a\u51a0\u88ab\u6052\u5927\u6dd8\u6c70\u94c1\u5b9a\u4e0b\u8bfe\u3002\u7528\u5e15\u6258\u4e0d\u7528\u7ef4\u7279\u8d5b\u5c14\u4e5f\u884c\uff0c\u8d75\u4e00\u811a \u548c\u738b\u6c38\u73c0\u540e\u8170\uff0c\u5e15\u6258\u8fc7\u4e2d\u8d85\u540e\u536b\u8fd8\u662f\u5f88\u7b80\u5355\u7684", "up": 130}], "1": [{"content": "\u6743\u5065\u8fd9\u72b6\u6001\u53ef\u4ee5\uff0c\u4fdd\u7ea7\u4e4b\u8def\u8fd8\u9700\u52aa\u529b\uff0c\u800c\u4e14\u4e0b\u4e2a\u8d5b\u5b63\u7403\u961f\u5185\u90e8\u6709\u51e0\u4e2a\u4eba\u4e00\u5b9a\u8981\u7559\u4f4f\uff0c\u6768\u65ed\u5e15\u6258\u738b\u6c38\u73c0\u4e00\u4e2a\u90fd\u4e0d\u80fd\u5c11\uff0c\u542c\u8bf4\u6052\u5927\u60f3\u8981\u5f20\u4fee\u4e3a\uff0c\u6743\u5065\u4e00\u5b9a\u4e0d\u80fd\u5356\uff0c\u5356\u4e86\u7684\u8bdd\u5bb3\u4e86\u81ea\u5df1\uff0c\u4e5f\u5bb3\u4e86\u5f20\u4fee\u4e3a\uff0c\u4e00\u5b9a\u7559\u4f4f\u5f20\u4fee\u4e3a\uff0c\u5728\u5f15\u8fdb\u51e0\u4e2a\u5916\u63f4\uff0c\u4e0b\u4e2a\u8d5b\u5b63\u8fd8\u662f\u6709\u7ade\u4e89\u529b\u7684\uff0c\u8fd8\u6709\u4e00\u4ef6\u4e8b\uff0c\u4e00\u5b9a\u8981\u628a\u83ab\u5fb7\u65af\u7279\u8fd9\u4e2a\u72d7\u7ed9\u529e\u4e86\uff0c\u4e00\u5b9a\u8981\u901a\u8fc7\u5404\u79cd\u624b\u6bb5\u8ba9\u4ed6\u4e00\u8f88\u5b50\u8e22\u4e0d\u4e0a\u6bd4\u8d5b\uff01", "up": 98}, {"content": "\u5e15\u6258\u4e0a\u534a\u8d5b\u5b63\u7adf\u7136\u6253\u4e0d\u4e86\u6bd4\u8d5b\uff0c\u771f\u662f\u65e0\u6cd5\u7406\u89e3\u554a", "up": 42}, {"content": "\u5361\u7eb3\u74e6\u7f57\u81ea\u5df1\u90fd\u8bf4\u4ed6\u89c9\u5f97\u5bf9\u7403\u961f\u7684\u638c\u63a7\u529b\u4e0d\u591f\u4e86\u6240\u4ee5\u56de\u4e86\u6052\u5927\uff0c\u5c31\u662f\u56e0\u4e3a\u6743\u5065\u603b\u8e22\u5047\u7403\uff0c\u8bb0\u5f97\u4e0a\u8d5b\u5b63\u8f93\u6cf0\u8fbe\u65f6\u8ff7\u4e4b\u5fae\u7b11\u4e48\uff0c\u8fd9\u573a\u7403\u4e00\u6837\uff0c\u53ea\u56de\u4f20\u4e0d\u914d\u5408\uff0c\u5168\u573a\u6ca1\u4e00\u6b21\u4e0b\u5e95\u4f20\u4e2d\uff0c\u6015\u83ab\u5fb7\u65af\u7279\u8fdb\u7403\uff0c\u6ce8\u610f\u4e86\u4e48\uff1f\u5e15\u6258\u4e00\u4e2a\u4eba\u5b81\u613f\u5e26\u6b7b\u4e5f\u4e0d\u613f\u610f\u7ed9\u672c\u571f\u7403\u5458\u4f20\u7403\uff0c\u56e0\u4e3a\u4ed6\u65e9\u770b\u51fa\u6765\u5728\u6253\u5047\u7403\u4e86", "up": 12}, {"content": "\u6211\u4e0d\u77e5\u9053\u4e3a\u4ec0\u4e48\u5e15\u6258\u88ab\u6362\u4e0b\uff0c\u9707\u8033\u6b32\u804b\u7684sha bi\u58f0\uff0c\u6211\u867d\u713626\u5c81\uff0c\u4f46\u662f\u4ece98\u5e74\u5c31\u770b\u6cf0\u8fbe\uff0c\u6211\u6df1\u7231\u6cf0\u8fbe\uff0c\u540c\u6837\u559c\u6b22\u6743\u5065\uff0c\u56e0\u4e3a\u6211\u89c9\u5f97\u80fd\u4ee3\u8868\u5929\u6d25\u6bd4\u8d5b\u7684\u7403\u961f\u5c31\u662f\u597d\u6837\u7684\uff0c\u5509\uff0c\u603b\u89c9\u5f97\u8e22\u7403\u8ba4\u771f\u662f\u5bf9\u7684\uff0c\u4f46\u662f\u573a\u5916\u8fd9\u4e48\u9a82\u8857\u53ef\u771f\u7684\u4e0d\u5e94\u8be5\uff0c\u8fd9\u6837\u53ef\u80fd\u662f\u6211\u4e0d\u61c2\u7403\uff0c\u4e0d\u61c2\u5fb7\u6bd4\u7684\u6c1b\u56f4\uff0c\u4e0d\u61c2\u6b7b\u5fe0\u7684\u611f\u53d7\u5427\u3002", "up": 12}, {"content": "\u5e15\u6258\u6ca1\u4e0a \u7ef4\u7279\u585e\u5c14\uff0c\u5b59\u53ef\uff0c\u83ab\u5fb7\u65af\u7279\u591a\u70b9\u5f00\u82b1 \u5982\u679c\u6052\u5927\u4eca\u5929\u4e3b\u573a\u8f93 \u89c9\u5f97\u5361\u7eb3\u74e6\u7f57\u4f1a\u54ed\u6655\u2026", "up": 9}], "2": [{"content": "\u5e15\u6258\uff0c\u5f53\u4f60\u4e94\u5b50\u767b\u79d1\uff0c\u5c31\u662f\u5a36\u6211\u4e4b\u65f6\uff01", "up": 1256}, {"content": "\u5e15\u6258\u7ed9\u4f60\u4e2a\u70ed\u5df4\u8d5e", "up": 861}, {"content": "\u4e07\u4eba\u9f50\u9876\u5e15\u6258\uff01\uff01\uff01\uff01\uff01\uff01\u5e15\u6258\uff01\uff01\uff01\uff01\uff01\uff01", "up": 830}, {"content": "\u5e15\u6258\u4e00\u811a\u786e\u5b9e\u4e16\u754c\u7ea7\u3002", "up": 340}, {"content": "\u5e15\u6258666~\u5b8c\u573a\u6025\u7740\u8dd1\u56de\u66f4\u8863\u5ba4\u96be\u4e0d\u6210\u5728\u7279\u522b\u7684\u65e5\u5b50\u7ea6\u4e86\u70ed\u5df4\uff1f", "up": 201}], "3": [{"content": "\u5e15\u6258\u7684\u80fd\u529b\u5728\u4e2d\u8d85\u8fd8\u662f\u50cf\u73a9\u4e00\u6837\uff0c\u8f7b\u63cf\u6de1\u5199\u51e0\u4e0b\u5c31\u8fdb\u4e86\uff0c\u4e0d\u50cf\u67d0\u4e9b\u7403\u5458\uff0c\u4e00\u5927\u4e32\u52a8\u4f5c\uff0c\u5dee\u70b9\u8fd8\u628a\u81ea\u5df1\u6643\u5012\uff0c\u7136\u540e\u5c31\u6ca1\u6709\u7136\u540e\u4e86\u3002", "up": 451}, {"content": "VCR\u5c31\u662f\u4e2a\u7b11\u8bdd\uff0c\u5c31\u4e00\u4e2a\u4e0d\u662f\u5e73\u884c\u7684\u673a\u4f4d\u4e5f\u80fd\u5f53\u4f9d\u636e\uff1f\u5e15\u6258\u7684\u4e24\u4e2a\u5355\u5200\u597d\u7403\u88ab\u5439\u8d8a\u4f4d\uff0c\u4eca\u665a\u7684\u88c1\u5224\u773c\u795e\u771f\u597d\uff0c\u4e3b\u88c1\u5224\u7ed9\u4e86\u6743\u5065\u591a\u5c11\u9ec4\u724c\uff1f", "up": 351}, {"content": "\u5e15\u6258\u725b\u9f3b\uff01\u5f20\u4fee\u7ef4\u771f\u662f\u7075\u6c14\u5341\u8db3\uff01\u4e0d\u60f3\u70b9\u8bc4\u53ea\u4f1a\u6253\u6211\u6052\u7684\u5bcc\u529b", "up": 313}, {"content": "\u5e0c\u671b\u6709\u4e00\u5929\u5e15\u6258\u80fd\u53c2\u52a0\u4e0b\u5c4a\u4e16\u754c\u676f\uff0c\u5e26\u9886\u5df4\u897f\u91cd\u56de\u5dc5\u5cf0\uff01", "up": 166}, {"content": "\u5e15\u6258\u6015\u662f\u60f3\u56deAC\u7c73\u5170\u4e86[\u9707\u60ca]", "up": 149}], "4": [{"content": "[\u7b11\u54ed]\u5e15\u6258\u8fdb\u7403\u8fc7\u53bb\u62e5\u62b1\u7d22\u8428\u5c31\u770b\u51fa\u8fd9\u5c0f\u5b50\u60c5\u5546\u591a\u9ad8", "up": 625}, {"content": "\u5ba2\u89c2\u8bc4\u4ef7\uff0c\u5168\u5065\u7b97\u662f\u62e3\u56de\u4e00\u5206\uff01\u5168\u573a\u9760\u5c0f\u80d6\u5929\u5916\u98de\u4ed9\u8499\u4e00\u4e2a\uff01\u7136\u540e\u540e\u9762\u6b7b\u5b88\uff0c\u9632\u53cd\u8e22\u7684\u6beb\u65e0\u7ae0\u6cd5\uff0c\u9632\u53cd\u7528\u83ab\u7279\u6709\u6bdb\u7ebf\u7528\uff0c\u5e15\u6258\u4e0d\u7528\uff01\u5168\u573a\u88ab\u82cf\u5b81\u538b\u7740\u63cd\uff0c\u8fd9\u8fd8\u4e3b\u573a\uff01\u5ba2\u573a\u548c\u4e9a\u51a0\u8fd8\u600e\u4e48\u8e22\uff1f[\u6124\u6012]\ud83d\udd1a", "up": 444}, {"content": "\u7d22\u8428\u4f9d\u7136\u56fa\u6267\uff0c\u5218\u5955\u9e23\u4f9d\u7136\u201c\u7a33\u201d\uff0c\u83ab\u5fb7\u65af\u7279\u4f9d\u7136\u5c41\u7528\u6ca1\u6709\uff0c\u6211\u4f9d\u7136\u547c\u5401\u7d22\u8428\u4e0b\u8bfe\uff0c\u8fd8\u6211\u5e15\u6258\uff0c\u8fd8\u6211\u6743\u5065\uff0c\u540c\u610f\u7684\u6263\u8d77\u6765\uff01\uff01\uff01\uff01", "up": 229}, {"content": "\u5e15\u6258\u60c5\u5546\u771f\u9ad8\uff0c\u8fd9\u4e00\u62b1\u9996\u53d1\u7a33\u4e86\uff01", "up": 119}, {"content": "\u4fdd\u7f57\u7d22\u8428\u5feb\u886e\u5427 \u8fd8\u6211\u5361\u5e05 \u8fd8\u6211\u5e15\u6258 \u633a\u597d\u7684\u7403\u961f \u8ba9\u4f60\u6559\u7684\u8ddf\u6cf0\u8fbe\u8d5b\u7684 \u600e\u4e48\u63cd\u7684", "up": 86}], "5": [{"content": "\u97e9\u56fd\u4eba\u6362\u4e0b\u5e15\u6258\u53c8\u5728\u8d70\u7d22\u6492\u7684\u8def\uff01\u6700\u5927\u7684\u8d25\u7b14\uff0c\u6743\u5065\u6ca1\u6709\u8fdb\u653b\u6838\u5fc3\u540e\u7acb\u523b\u88ab\u957f\u6625\u538b\u7740\u6253\uff0c\u672c\u6765\u662f3\u5206\u7684\uff0c\u6700\u5927\u7684\u660f\u62db\u6362\u4e0b\u5e15\u6258\u2026\u2026", "up": 157}, {"content": "\u5f3a\u70c8\u8981\u6c42\uff0c\u770b\u597d\u4e86\uff0c\u662f\u8981\u6c42\uff0c\u4e0d\u662f\u5efa\u8bae\uff0c\u5e15\u6258\u9000\u5f79\u524d\u522b\u641e\u5bf9\u8c61\u4e86\uff0c\u5373\u4f7f\u641e\u4e5f\u53ea\u80fd\u5728\u4e24\u573a\u6bd4\u8d5b\u4e2d\u95f4\u641e\uff0c\u6bd4\u5982\u4eca\u5929\u6bd4\u8d5b\u7ed3\u675f\u4e4b\u540e\u53ef\u4ee5\u641e\uff0c\u4f46\u662f\u4e0b\u573a\u6bd4\u8d5b\u4ee5\u524d\u5fc5\u987b\u6563\u4f19\u3002", "up": 12}, {"content": "\u4f5c\u4e3a\u534e\u590f\u7403\u8ff7\u3001\u6211\u8ba4\u4e3a\u5e15\u6258\u8fd8\u662f\u5f88\u7ed9\u529b\u7684\u2026\u2026\u6211\u534e\u590f\u7684\u70ed\u9e1f\u662f\u600e\u4e48\u4e86\uff0c\u597d\u50cf\u5728\u6df7\u65e5\u5b50\u3001", "up": 9}, {"content": "\u5e15\u6258\u8fd9\u4e2a\u7403\u592a\u9a9a\u4e86\uff0c\u8fd9\u624d\u662f\u5df4\u897f\u7403\u5458\u8be5\u6709\u7684\u6837\u5b50[\u5389\u5bb3]", "up": 8}, {"content": "\u6743\u5065\u9760\u7403\u961f\u63d0\u9ad8\u4e86\u4e0d\u5c0f\u7684\u54c1\u724c\u540d\u6c14\uff0c\u5efa\u56fd\u5c31\u662f\u4e2a\u6d3b\u5e7f\u544a\uff0c\u5356\u6743\u5065\u4fdd\u5065\u54c1\u7684\u73b0\u5728\u4e00\u8bf4\u5c31\u662f\u5df4\u897f\u7403\u661f\u5e15\u6258\u90fd\u662f\u6211\u4eec\u516c\u53f8\u7684", "up": 7}]};
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
