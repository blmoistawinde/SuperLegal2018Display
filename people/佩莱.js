var data = {"person_name": "\u4f69\u83b1", "nicknames": "\u4f69\u83b1", "aspects": {"\u8fdb\u7403": 0.5173730981273063, "\u7403\u5458": 0.5243101477443698, "\u6bd4\u8d5b": 0.6170919946727413, "\u5916\u63f4": 0.4688784716690615, "\u8fdb\u653b": 0.5080823155336875, "\u7403\u8ff7": 0.6349153788696239, "\u5934\u7403": 0.5013679948828109, "\u52a9\u653b": 0.31437933251657274, "\u4f20\u7403": 0.621097811010859, "\u8d5b\u5b63": 0.6833964866475712}, "overall_heat": 679.0, "overall_polar": 0.35, "name": "97", "nationality": "\u610f\u5927\u5229", "position": "\u524d\u950b", "goal": "11", "assist": "10", "team_name": "\u5c71\u4e1c\u9c81\u80fd\u6cf0\u5c71", "name_en": "Graziano Pelle", "age": "33", "height": "194", "weight": "84"};
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
var topic_keywords = {"0": [{"name": "\u4f69\u83b1", "value": 0.048730668222935515}, {"name": "\uff01", "value": 0.0312226437117012}, {"name": "\u5e0c\u671b", "value": 0.013714619200466882}, {"name": "\u8fdb\u7403", "value": 0.013714619200466882}, {"name": "\u5854\u5c14\u5fb7\u5229", "value": 0.012741951172064975}, {"name": "\u52a0\u6cb9", "value": 0.009823947086859255}, {"name": "\u6bd4\u8d5b", "value": 0.008851279058457348}, {"name": "\u8001\u5854", "value": 0.007878611030055443}, {"name": "\u597d", "value": 0.007878611030055443}, {"name": "\u4ee5\u540e", "value": 0.005933274973251629}, {"name": "\u961f", "value": 0.005933274973251629}, {"name": "\u53d1\u6325", "value": 0.005933274973251629}, {"name": "\u6cf0\u5c71", "value": 0.005933274973251629}, {"name": "\u7559\u4e0b", "value": 0.004960606944849723}, {"name": "\u683c\u5fb7\u65af", "value": 0.004960606944849723}, {"name": "21", "value": 0.004960606944849723}, {"name": "\u79ef\u6781", "value": 0.004960606944849723}, {"name": "\u8d8a\u6765\u8d8a", "value": 0.004960606944849723}, {"name": "\u7ec8\u4e8e", "value": 0.004960606944849723}, {"name": "\u7eed\u7ea6", "value": 0.004960606944849723}, {"name": "\u88c1\u5224", "value": 0.004960606944849723}, {"name": "\u673a", "value": 0.004960606944849723}, {"name": "\u91d1\u656c\u9053", "value": 0.004960606944849723}, {"name": "\u8d70", "value": 0.004960606944849723}, {"name": "\u4ff1\u4e50\u90e8", "value": 0.004960606944849723}, {"name": "\u9c81\u80fd", "value": 0.004960606944849723}, {"name": "\u6253\u98de", "value": 0.004960606944849723}, {"name": "\u76ee\u524d", "value": 0.003987938916447816}, {"name": "\u4e9a\u51a0", "value": 0.003987938916447816}, {"name": "\u8001\u7599\u7629", "value": 0.003987938916447816}], "1": [{"name": "\u4f69\u83b1", "value": 0.08734324070493343}, {"name": "\uff01", "value": 0.03320258549251423}, {"name": "\uff1f", "value": 0.011656814540633116}, {"name": "\u8fdb\u7403", "value": 0.011104358875200266}, {"name": "\u4f69\u5ac2", "value": 0.010551903209767418}, {"name": "\u9c81\u80fd", "value": 0.009999447544334569}, {"name": "\u6ed1\u7a3d", "value": 0.009999447544334569}, {"name": "\u5206\u949f", "value": 0.007237169217170322}, {"name": "\u683c\u5fb7\u65af", "value": 0.007237169217170322}, {"name": "\u6700\u540e", "value": 0.0066847135517374735}, {"name": "\u91d1\u5b50", "value": 0.006132257886304624}, {"name": "\u665a\u4e0a", "value": 0.006132257886304624}, {"name": "\u5439", "value": 0.006132257886304624}, {"name": "\u8fd9\u573a", "value": 0.005579802220871775}, {"name": "\u5854\u795e", "value": 0.005579802220871775}, {"name": "\u5c0f", "value": 0.005027346555438926}, {"name": "\u52a0", "value": 0.005027346555438926}, {"name": "\u7403", "value": 0.005027346555438926}, {"name": "\u7403\u5458", "value": 0.005027346555438926}, {"name": "\u77e5\u9053", "value": 0.004474890890006077}, {"name": "\u8e22", "value": 0.004474890890006077}, {"name": "\u74e6\u5c14", "value": 0.004474890890006077}, {"name": "\ud83d\ude02", "value": 0.004474890890006077}, {"name": "\u4e00\u4e0b", "value": 0.004474890890006077}, {"name": "\u7403\u8ff7", "value": 0.003922435224573228}, {"name": "\u9a82", "value": 0.003922435224573228}, {"name": "\u673a\u4f1a", "value": 0.003922435224573228}, {"name": "\u4e00\u4e2a", "value": 0.003369979559140379}, {"name": "\u5854\u5c14\u5fb7\u5229", "value": 0.003369979559140379}, {"name": "\u770b\u7740", "value": 0.003369979559140379}], "2": [{"name": "\u4f69\u83b1", "value": 0.06886835725050783}, {"name": "\uff01", "value": 0.05052093571849813}, {"name": "\u54ed", "value": 0.022999803420483588}, {"name": "\u7b11", "value": 0.021689273311054323}, {"name": "\u4f69\u5ac2", "value": 0.01775768298276653}, {"name": "\u8fdb\u7403", "value": 0.012515562545049473}, {"name": "\u9c81\u80fd", "value": 0.01120503243562021}, {"name": "\u6342", "value": 0.010549767380905578}, {"name": "\u8138", "value": 0.010549767380905578}, {"name": "\u4eca\u665a", "value": 0.007273442107332416}, {"name": "\u4e00\u4e2a", "value": 0.006618177052617784}, {"name": "\u771f", "value": 0.006618177052617784}, {"name": "\u5389\u5bb3", "value": 0.006618177052617784}, {"name": "\u725b", "value": 0.005962911997903152}, {"name": "\u52a9\u653b", "value": 0.0053076469431885195}, {"name": "\u7231\u6155", "value": 0.0053076469431885195}, {"name": "\u5927\u96f7", "value": 0.0053076469431885195}, {"name": "\u8fd0\u6c14", "value": 0.0053076469431885195}, {"name": "\u5434\u5174\u6db5", "value": 0.004652381888473888}, {"name": "\u5854\u795e", "value": 0.004652381888473888}, {"name": "\u9707\u60ca", "value": 0.004652381888473888}, {"name": "\u5c04", "value": 0.004652381888473888}, {"name": "\u6bd4\u8d5b", "value": 0.003997116833759255}, {"name": "\u5e72", "value": 0.003997116833759255}, {"name": "\u597d", "value": 0.003997116833759255}, {"name": "\u6f02\u4eae", "value": 0.003997116833759255}, {"name": "\u7edd\u6740", "value": 0.003997116833759255}, {"name": "\u8d5b\u524d", "value": 0.003997116833759255}, {"name": "\u52a0\u6cb9", "value": 0.003997116833759255}, {"name": "\u771f\u662f", "value": 0.0033418517790446234}], "3": [{"name": "\u4f69\u83b1", "value": 0.048603432527282345}, {"name": "\u9c81\u80fd", "value": 0.013508965915100236}, {"name": "\u5854\u5c14\u5fb7\u5229", "value": 0.009662996971299458}, {"name": "\u5916\u63f4", "value": 0.00918225085332436}, {"name": "\u8fdb\u7403", "value": 0.007740012499399068}, {"name": "\u4e00\u4e2a", "value": 0.007740012499399068}, {"name": "\u4e2d\u573a", "value": 0.006778520263448873}, {"name": "\u7403", "value": 0.006778520263448873}, {"name": "\u7403\u5458", "value": 0.006778520263448873}, {"name": "\u5409\u5c14", "value": 0.006778520263448873}, {"name": "\uff01", "value": 0.006778520263448873}, {"name": "\u524d\u573a", "value": 0.005817028027498678}, {"name": "\u8e22", "value": 0.005817028027498678}, {"name": "\u5854\u795e", "value": 0.005817028027498678}, {"name": "\u56fd\u5185", "value": 0.005336281909523581}, {"name": "\u597d", "value": 0.005336281909523581}, {"name": "\u4f5c\u7528", "value": 0.005336281909523581}, {"name": "\u4f20\u7403", "value": 0.005336281909523581}, {"name": "\u91d1\u5b50", "value": 0.005336281909523581}, {"name": "\u771f\u7684", "value": 0.004855535791548483}, {"name": "\u5927\u96f7", "value": 0.004855535791548483}, {"name": "\u5c0f", "value": 0.004855535791548483}, {"name": "\u72b6\u6001", "value": 0.004855535791548483}, {"name": "\u80fd\u529b", "value": 0.004855535791548483}, {"name": "\u914d\u5408", "value": 0.004855535791548483}, {"name": "\u6c34\u5854", "value": 0.004855535791548483}, {"name": "\u73b0\u5728", "value": 0.004374789673573386}, {"name": "\u611f\u89c9", "value": 0.004374789673573386}, {"name": "\u5e0c\u671b", "value": 0.004374789673573386}, {"name": "\u683c\u5fb7\u65af", "value": 0.004374789673573386}], "4": [{"name": "\u4f69\u83b1", "value": 0.04934785531800457}, {"name": "\u9c81\u80fd", "value": 0.028730222760073504}, {"name": "\uff01", "value": 0.021558872305140964}, {"name": "\u95ee\u9898", "value": 0.010353637219308862}, {"name": "\uff1f", "value": 0.008560799605575726}, {"name": "\u627e", "value": 0.008112590202142441}, {"name": "\u4f20\u4e2d", "value": 0.007216171395275874}, {"name": "\u6253", "value": 0.006767961991842589}, {"name": "\u4e00\u4e2a", "value": 0.006767961991842589}, {"name": "\u6052\u5927", "value": 0.006767961991842589}, {"name": "\u4f5c\u7528", "value": 0.0058715431849760205}, {"name": "\u6bd4\u8d5b", "value": 0.0058715431849760205}, {"name": "\u7403\u5458", "value": 0.0058715431849760205}, {"name": "\u597d", "value": 0.005423333781542737}, {"name": "\u5934\u7403", "value": 0.004975124378109453}, {"name": "\u770b\u770b", "value": 0.004526914974676169}, {"name": "\u60f3", "value": 0.004526914974676169}, {"name": "\u4e2d\u8d85", "value": 0.004526914974676169}, {"name": "\u56fd\u5b89", "value": 0.004526914974676169}, {"name": "\u4e0d\u884c", "value": 0.004526914974676169}, {"name": "\u8fd9\u573a", "value": 0.004526914974676169}, {"name": "\u5854\u795e", "value": 0.004078705571242885}, {"name": "\u5e94\u8be5", "value": 0.004078705571242885}, {"name": "\u673a\u4f1a", "value": 0.004078705571242885}, {"name": "\u89c9\u5f97", "value": 0.004078705571242885}, {"name": "\u5916\u63f4", "value": 0.004078705571242885}, {"name": "\u4eca\u5929", "value": 0.003630496167809601}, {"name": "\u592a", "value": 0.003630496167809601}, {"name": "\u53ea", "value": 0.003630496167809601}, {"name": "\u6218\u672f", "value": 0.003630496167809601}], "5": [{"name": "\u4f69\u83b1", "value": 0.07412748774156332}, {"name": "\uff01", "value": 0.029900971060474957}, {"name": "\u74e6\u5c14", "value": 0.016440726853187197}, {"name": "\u683c\u91cc", "value": 0.013556388808768388}, {"name": "\u52a0", "value": 0.01259494279396212}, {"name": "\u5c3c", "value": 0.011633496779155851}, {"name": "\uff1f", "value": 0.011633496779155851}, {"name": "\u9c81\u80fd", "value": 0.010672050764349583}, {"name": "\u5934\u7403", "value": 0.007787712719930776}, {"name": "\u674e\u6307\u5bfc", "value": 0.005864820690318239}, {"name": "\u8111\u5b50", "value": 0.005864820690318239}, {"name": "\u683c\u5fb7\u65af", "value": 0.005864820690318239}, {"name": "\u8fdb\u7403", "value": 0.005864820690318239}, {"name": "\u5220", "value": 0.005864820690318239}, {"name": "\u771f\u7684", "value": 0.005864820690318239}, {"name": "\u611f\u89c9", "value": 0.00490337467551197}, {"name": "\u6fc0\u60c5", "value": 0.00490337467551197}, {"name": "\u624b\u4e0b\u7559\u60c5", "value": 0.00490337467551197}, {"name": "\u534e\u590f", "value": 0.00490337467551197}, {"name": "\u4e0b\u8bfe", "value": 0.003941928660705701}, {"name": "\u4e2d\u8d85", "value": 0.003941928660705701}, {"name": "\u7403\u5458", "value": 0.003941928660705701}, {"name": "\u573a\u4e0a", "value": 0.003941928660705701}, {"name": "\u5434\u5174\u6db5", "value": 0.003941928660705701}, {"name": "\u4e00\u8138", "value": 0.003941928660705701}, {"name": "\u4f20\u4e2d", "value": 0.003941928660705701}, {"name": "\u4f69\u5ac2", "value": 0.003941928660705701}, {"name": "\u79bb\u5f00", "value": 0.003941928660705701}, {"name": "\u5f00\u5fc3", "value": 0.003941928660705701}, {"name": "\u5bb6\u5c5e", "value": 0.003941928660705701}], "6": [{"name": "\uff01", "value": 0.04560457440379341}, {"name": "\u4f69\u83b1", "value": 0.042350425363767374}, {"name": "\u9c81\u80fd", "value": 0.022360652689321744}, {"name": "\u5916\u63f4", "value": 0.011668448700664778}, {"name": "\u7403\u5458", "value": 0.008879178094928178}, {"name": "\u5854\u5c14\u5fb7\u5229", "value": 0.007019664357770444}, {"name": "\u683c\u5fb7\u65af", "value": 0.007019664357770444}, {"name": "\uff1f", "value": 0.00655478592348101}, {"name": "\u73b0\u5728", "value": 0.00655478592348101}, {"name": "\u4e00\u4e2a", "value": 0.00655478592348101}, {"name": "\u518d", "value": 0.0060899074891915764}, {"name": "\u4f5c\u7528", "value": 0.0060899074891915764}, {"name": "\u4e00\u5e74", "value": 0.005625029054902143}, {"name": "\u597d", "value": 0.00516015062061271}, {"name": "\u90ed\u7530\u96e8", "value": 0.00516015062061271}, {"name": "\u592a", "value": 0.00516015062061271}, {"name": "\u8d5b\u5b63", "value": 0.004695272186323277}, {"name": "\u8e22", "value": 0.004695272186323277}, {"name": "\u524d\u950b", "value": 0.004695272186323277}, {"name": "\u5409\u5c14", "value": 0.004695272186323277}, {"name": "\u771f\u7684", "value": 0.004695272186323277}, {"name": "\u660e\u663e", "value": 0.004230393752033843}, {"name": "\u7eed\u7ea6", "value": 0.00376551531774441}, {"name": "\u7403\u961f", "value": 0.00376551531774441}, {"name": "\u611f\u89c9", "value": 0.00376551531774441}, {"name": "\u674e\u9704\u9e4f", "value": 0.00376551531774441}, {"name": "\u8fdb\u653b", "value": 0.00376551531774441}, {"name": "\u8fdb\u7403", "value": 0.00376551531774441}, {"name": "\u6052\u5927", "value": 0.00376551531774441}, {"name": "\u6218\u672f", "value": 0.00376551531774441}], "7": [{"name": "\u4f69\u83b1", "value": 0.04270827709086982}, {"name": "\uff01", "value": 0.028670158198801362}, {"name": "\u8fdb\u7403", "value": 0.024350737001241837}, {"name": "\uff1f", "value": 0.02165109875276713}, {"name": "\u9c81\u80fd", "value": 0.01517196695642784}, {"name": "\u7403", "value": 0.013552184007343017}, {"name": "\u72af\u89c4", "value": 0.010312618109173373}, {"name": "\u6700\u540e", "value": 0.009772690459478432}, {"name": "\u6253", "value": 0.00869283516008855}, {"name": "\u8fdb", "value": 0.007073052211003726}, {"name": "\u52a9\u653b", "value": 0.007073052211003726}, {"name": "\u6052\u5927", "value": 0.006533124561308785}, {"name": "\u673a\u4f1a", "value": 0.006533124561308785}, {"name": "\u88c1\u5224", "value": 0.006533124561308785}, {"name": "\u4e00\u4e2a", "value": 0.0059931969116138436}, {"name": "\u8d8a\u4f4d", "value": 0.0059931969116138436}, {"name": "\u7b97", "value": 0.0054532692619189025}, {"name": "\u5434\u5174\u6db5", "value": 0.0054532692619189025}, {"name": "\u6743\u5065", "value": 0.0054532692619189025}, {"name": "\u597d", "value": 0.004913341612223962}, {"name": "\u8054\u8d5b", "value": 0.004913341612223962}, {"name": "\u6865\u5934\u5821", "value": 0.004913341612223962}, {"name": "\u8fdb\u653b", "value": 0.004913341612223962}, {"name": "\u6b66\u78ca", "value": 0.004373413962529021}, {"name": "\u672c\u6765", "value": 0.004373413962529021}, {"name": "\u5854\u5c14\u5fb7\u5229", "value": 0.004373413962529021}, {"name": "\u4e9a\u51a0", "value": 0.004373413962529021}, {"name": "\u4e4b\u524d", "value": 0.004373413962529021}, {"name": "\u8f6e", "value": 0.004373413962529021}, {"name": "\u518d", "value": 0.004373413962529021}]};
var topic_summary = {"0": [{"content": "\u738b\u5927\u96f7\u7684\u52a9\u653b\uff0c\u4f69\u83b1\u7684\u8fdb\u7403\uff0c\u732e\u7ed9\u674e\u660e\u73e0\uff0c\u4e00\u8def\u8d70\u597d", "up": 494}, {"content": "\u8001\u7599\u7629\u7ec8\u4e8e\u8fdb\u7403\u4e86\uff01\u7a97\u6237\u7eb8\u4e00\u6345\u5f00\uff0c\u5e0c\u671b\u4ee5\u540e\u53d1\u6325\u8d8a\u6765\u8d8a\u597d\u3002\u4f69\u83b1\u76ee\u524d\u8fd8\u662f\u65e0\u6cd5\u66ff\u4ee3\u7684\uff0c\u5e0c\u671b\u80fd\u7eed\u7ea6\u7559\u4e0b\u3002\u4ff1\u4e50\u90e8\u548c\u8001\u5854\u5404\u9000\u4e00\u6b65\uff0c2+1\uff0c\u65e9\u70b9\u5907\u6218\u660e\u5e74\u7684\u4e9a\u51a0\u6bd4\u8d5b\u3002\u52a0\u6cb9\uff0c\u6cf0\u5c71\u961f\uff01", "up": 214}, {"content": "\u6bd4\u8d5b\u7ed3\u675f\u53cc\u65b9\u4e3b\u6559\u7ec3\u8d70\u4e0a\u524d\u63e1\u624b\u7684\u65f6\u5019\uff0c\u674e\u5bb5\u9e4f\u5f2f\u8170\u53cc\u624b\u63e1\u4f4f\u4f69\u83b1\u683c\u91cc\u5c3c\u7684\u624b\u5c31\u50cf\u665a\u8f88\u89c1\u5230\u957f\u8f88\u90a3\u6837\u5c0a\u656c\u51f8\u663e\u4e86\u9b45\u529b[\u52a0\u6cb9][\u52a0\u6cb9][\u52a0\u6cb9]", "up": 143}, {"content": "\u80fd\u6321\u4f4f\u4f69\u83b1\u7684\u53ea\u6709\u7403\u95e8\u67f1\uff0c\u80fd\u6321\u4f4f\u9c81\u80fd\u7684\u53ea\u6709\u778e\u88c1\u5224\uff0c\u4ec0\u4e48\u73a9\u513f\u610f\u662f\uff5e", "up": 16}, {"content": "\u4f69\u83b1\uff1a\u5854\u5c14\u5fb7\u5229\uff0c\u5409\u5c14\uff0c\u91d1\u656c\u9053\uff0c\u4eca\u665a\u53bb\u6211\u5bb6\u73a9\u554a\uff0c\u4f60\u5ac2\u5b50\u5305\u7684\u997a\u5b50\u554a", "up": 14}], "1": [{"content": "1. \u4f69\u5ac2\u51fa\u5dee\u89e3\u653e\u4f69\u83b1\uff0c\u652f\u70b9\u4f5c\u7528\u65e0\u89e3\u30022. \u4e09\u54e5\u8d8a\u6765\u8d8a\u5996\uff0c\u653b\u9632\u4e24\u7aef\u65e0\u5904\u4e0d\u5728\u30023. \u5f6c\u5f6c\u5218\u2026\u5509\u2026", "up": 831}, {"content": "\u770b\u4f69\u83b1\u8fd9\u8868\u73b0\uff0c\u74e6\u5c14\u52a0\u80af\u5b9a\u662f\u56de\u8001\u5bb6\u4e86\ud83d\ude02", "up": 309}, {"content": "\u674e\u9704\u9e4f\u6307\u5bfc\u8d5b\u540e\u91c7\u8bbf\u8868\u793a\uff0c\u8981\u7740\u91cd\u611f\u8c22\u56fd\u9645\u5171\u4ea7\u4e3b\u4e49\u6218\u58eb\u74e6\u5c14\u52a0\u540c\u5fd7\uff0c\u662f\u5979\u5728\u8d5b\u7a0b\u5982\u6b64\u5bc6\u96c6\u7684\u91cd\u8981\u65f6\u523b\u9009\u62e9\u4e86\u51fa\u5dee\uff0c\u4ece\u800c\u7ed9\u4e86\u9c81\u80fd\u961f\u548c\u5e7f\u5927\u7403\u8ff7\u4e00\u4e2a\u5982\u6b64\u52c3\u8d77\u7684\u4f69\u83b1\uff0c\u8c22\u8c22\u554a\ud83d\ude4f[\u6ed1\u7a3d][\u6ed1\u7a3d][\u6ed1\u7a3d]", "up": 223}, {"content": "\u4f69\u83b1\u8fdb\u7403\uff0c\u74e6\u5c14\u52a0\u677e\u4e86\u4e00\u53e3\u6c14\uff0c\u2018\u4f60\u7ec8\u4e8e\u5c04\u4e86\u2019[\u53ef\u601c]", "up": 176}, {"content": "93\u5206\u949f\u6768\u65ed\u53d7\u4f24\u8eba\u4e0b\u4e86\uff0c\u867d\u7136\u6bd4\u8d5b\u8fd8\u5269\u4e00\u5206\u949f\u9c81\u80fd\u7403\u5458\u6700\u540e\u8fd8\u662f\u628a\u7403\u6743\u7ed9\u4e86\u6743\u5065\uff0c95\u5206\u949f\u9c81\u80fd\u89d2\u7403\u5f20\u9e6d\u62b1\u7740\u7403\u4e0d\u7ed9\u9c81\u80fd\uff0c\u5f15\u53d1\u7403\u5458\u51b2\u7a81\uff0c\u6743\u5065\u7403\u8ff7\u9ad8\u558a:\u8f93\u4e0d\u8d77\u300296\u5206\u949f\u4f69\u83b1\u6253\u8138\u5f0f\u7edd\u6740\uff01\u4eba\u5728\u505a\uff01\u5929\u5728\u770b\uff01\u6d3b\u8be5\u4e3b\u573a\u4e00\u76f4\u4e0d\u80dc\uff01", "up": 162}], "2": [{"content": "\u770b\u4f69\u83b1\u8ddf\u5854\u795e\u7684\u5e86\u795d\u52a8\u4f5c\uff0c\u5df2\u7ecf\u7b49\u4e0d\u6025\u4e86\u3002\u5fc3\u75bc\u4eca\u665a\u7684\u4f69\u5ac2[\u5927\u54ed][\u6342\u8138][\u6342\u8138]", "up": 1100}, {"content": "\u6211\u575a\u6301\u5230\u6b64\u523b\u53ea\u4e3a\u4e86\u7ed9\u4f69\u83b1\u6253\u4e2a0\u5206\uff01", "up": 415}, {"content": "\u4f69\u83b1\u4eca\u5929\u628a\u957f\u6625\u95e8\u5c06\u5413\u7684\u4e0d\u8f7b[\u7b11\u54ed]", "up": 316}, {"content": "\u5927\u96f7\u7ed9\u4eba\u7684\u611f\u89c9\u5c31\u662f\uff0c\u80fd\u76f4\u63a5\u62b1\u4f4f\u7684\u7403\uff0c\u7edd\u5bf9\u4e0d\u6251\u51fa\u53bb\uff0c\u8fd8\u6709\u5c31\u662f\u5f00\u4e2a\u5e73\u5feb\u5927\u811a\u540e\u8005\u624b\u69b4\u5f39\u76f4\u63a5\u627e\u4f69\u83b1\u6216\u5854\u795e\uff0c\u4e00\u4e2a\u8d5b\u5b63\u4e0b\u6765\u80fd\u6df7\u51e0\u4e2a\u52a9\u653b\uff0c\u53cd\u6b63\u6211\u662f\u670d\u4e86\uff0c\u5f53\u771f\u7b2c\u4e00\u95e8\u5c06[\u5389\u5bb3]", "up": 172}, {"content": "\u4f69\u83b1\u5e72\u4e86\u5434\u5174\u6db5\u7684\u6d3b\uff01\u5434\u5174\u6db5\u5e72\u4e86\u4f69\u83b1\u7684\u6d3b\uff01", "up": 169}], "3": [{"content": "\u516b\u8f88\u5b50\u5582\u4e0d\u4e86\u4f69\u83b1\u4e00\u4e2a\u597d\u997c\uff0c\u54bd\u809a\u5b50\u91cc\u4e86\u8fd8\u7ed9\u6d17\u80c3\u4e86\uff0c\u5988\u7684", "up": 450}, {"content": "\u4f69\u83b1\u548c\u5854\u5c14\u5fb7\u5229\u7684\u914d\u5408\u9a9a\u7684\u4e00\u6279\uff01", "up": 400}, {"content": "\u5bf9\u6bd4\u4f69\u83b1\u7684\u4e0d\u8fdb\u7403\uff0c\u61c2\u7403\u7684\u5e94\u8be5\u6ce8\u610f\u7b2c\u4e8c\u4e2a\u7403\u62fc\u8eab\u4f53\u501a\u4f4f\u5bf9\u65b9\uff0c\u8f6c\u8eab\u4f20\u7403\u7684\u90a3\u4e00\u4e0b\u4f5c\u7528\uff0c\u90a3\u624d\u662f\u4f69\u83b1\u6700\u4f73\u4f7f\u7528\u65b9\u5f0f\uff01", "up": 333}, {"content": "\u4f69\u83b1\u4e0b\u534a\u7a0b\u5f00\u59cb\uff0c\u72b6\u6001\u8d8a\u6765\u8d8a\u597d\u4e86\u3002", "up": 167}, {"content": "\u4f69\u83b1\u7b2c\u4e8c\u4e2a\u8fdb\u7403\uff0c\u9c81\u80fd\u7684\u56e2\u961f\u914d\u5408\uff0c\u4e00\u811a\u51fa\u7403\uff0c\u7edd\u5bf9\u7684\u672c\u5468\u4e94\u4f73\u7403\uff0c\u4f9d\u7a00\u770b\u5230\u4e86\u5df4\u8428\u548c\u963f\u68ee\u7eb3\u7684\u5f71\u5b50\u3002", "up": 143}], "4": [{"content": "\u4f69\u83b1\u7981\u6b32\u4e86\u5427\uff1f", "up": 659}, {"content": "\u4e0d\u5439\u4f69\u83b1\uff0c\u4e0d\u5938\u4e09\u54e5\uff0c\u53ea\u60f3\u7ed9\u4eca\u5929\u7684\u6d0b\u88c1\u5224\u4e00\u5f20\u656c\u4e1a\u798f\uff01[mvp][mvp][mvp]", "up": 518}, {"content": "\u4e00\u5468\u53cc\u8d5b\u7684\u6052\u5927\u8dd1\u52a8103\u516c\u91cc\uff0c\u9c81\u80fd\u5927\u7237\u4eec\u8dd1\u52a898\u516c\u91cc\uff0c\u53c8\u56de\u5230\u4e86\u6563\u6b65\u65f6\u4ee3\uff0c\u8fd8\u6709\u4f69\u83b1\u80fd\u4e0d\u80fd\u7ec3\u7ec3\u5934\u7403\uff0c\u8fd9\u4e48\u5927\u4e2a\u5b50\u4e0a\u4e00\u4e2a\u5934\u7403\u8fdb\u7403\u6211\u90fd\u60f3\u4e0d\u8d77\u6765\u662f\u4ec0\u4e48\u65f6\u5019\uff0c\u5988\u7684", "up": 424}, {"content": "\u4e2d\u8d85\u4e24\u4e2a\u602a\u7269\uff0c\u4f69\u83b1\u548c\u80e1\u5c14\u514b\uff0c\u8c01\u4e5f\u625b\u4e0d\u4f4f\uff01", "up": 326}, {"content": "\u6ce8\u610f\u5230\u56fd\u5b89\u7b2c\u4e00\u4e2a\u5931\u7403\uff1a\u6b63\u5e38\u7684\u7981\u533a\u6323\u9876\uff0c\u5927\u5b9d\u60f3\u90fd\u6ca1\u60f3\u5f80\u4f69\u83b1\u8eab\u4e0a\u4e00\u5012\u5c31\u60f3\u8981\u72af\u89c4\uff0c\u5176\u4ed6\u961f\u53cb\u4e5f\u90fd\u89c9\u5f97\u5fc5\u987b\u72af\u89c4\u4e86\u3002\u6ca1\u60f3\u5230\u4eca\u5929\u662f\u5916\u7c4d\u88c1\u5224\uff01\u54c8\u54c8\u54c8\u2026\u2026\u56fd\u5b89\u8eab\u4e0a\u7684\u574f\u4e60\u60ef\u592a\u591a\u4e86", "up": 36}], "5": [{"content": "\u4f69\u83b1:\u5434\u5174\u6db5\u6211\u6559\u4f60\u4f20\u4e2d\uff01 \u5434\u5174\u6db5:\u4f69\u54e5\u6211\u6559\u4f60\u5934\u7403\uff01", "up": 1560}, {"content": "\u8d5b\u540e\u674e\u9704\u9e4f\u5bf9\u4f69\u83b1\u683c\u91cc\u5c3c\u7684\u5c0a\u91cd\uff0c\u8ba9\u6211\u5c71\u4e1c\u7403\u8ff7\u611f\u5230\u9a84\u50b2\uff01", "up": 529}, {"content": "\u4e3a\u751a\u4e48\u611f\u89c9\u4f69\u83b1\u7684\u8001\u5a46\u4e0d\u5728\uff0c\u9c81\u80fd\u5168\u961f\u90fd\u6709\u52b2\u4e86\uff1f", "up": 80}, {"content": "\u9c81\u80fd\u96c6\u56e2:\u74e6\u5c14\u52a0\u5c0f\u59d0\uff0c\u8fd9\u662f500\u4e07\uff0c\u8bf7\u79bb\u5f00\u6211\u4eec\u5bb6\u4f69\u83b1", "up": 64}, {"content": "\u8d62\u7403\u4e86,\u4f69\u83b1\u8fdb\u7403\u5f88\u5f00\u5fc3,\u683c\u5fb7\u65af\u5f00\u80e1\u66f4\u5f00\u5fc3,\u4e3b\u8981\u7684\u662f\u611f\u89c9\u5168\u961f\u4e0a\u4e0b\u601d\u60f3\u9ad8\u5ea6\u7edf\u4e00,\u674e\u6307\u5bfc\u4e5f\u9547\u5f97\u4f4f\u66f4\u8863\u5ba4,\u7403\u5458\u5bb6\u5c5e\u7684\u5bb6\u5c5e\u90fd\u6765\u6367\u573a,\u961f\u5185\u6c1b\u56f4\u548c\u51dd\u805a\u529b\u5f88\u91cd\u8981!", "up": 59}], "6": [{"content": "\u660e\u5e74\u8981\u662f\u674e\u9704\u9e4f\u53bb\u56fd\u5bb6\u96c6\u8bad\u961f\uff0c\u9c81\u80fd\u8fd8\u628a\u9a6c\u52a0\u7279\u8bf7\u6765\u5427\uff0c\u4e09\u5e74\u65f6\u95f4\u628a\u9c81\u80fd\u7684\u57fa\u7840\u6253\u7262\u592f\u5b9e\u3002\u5916\u63f4\u7559\u5409\u5c14\u3001\u4f69\u83b1\uff0c\u628a\u683c\u5fb7\u65af\u5916\u79df\u51fa\u53bb\u7ec3\u7ea7\uff0c\u627e\u4e2a\u901f\u5ea6\u5feb\u7684\u5df4\u897f\u524d\u950bor\u975e\u6d32\u7684\u9ed1\u53c8\u786c\uff0c\u518d\u627e\u4e2a\u4e2d\u573a\u725b\u903c\u5916\u63f4\uff0c\u5d14\u9e4f\u3001\u5468\u6d77\u6ee8\u3001\u5218\u5f6c\u5f6c\u3001\u5434\u5174\u6db5\u3001\u6210\u6e90\u3001\u674e\u5fae\uff0c\u8be5\u9000\u4e8c\u7ebf\u9000\u4e8c\u7ebf\uff0c\u8be5\u5916\u79df\u7684\u5916\u79df\uff0c\u817e\u51fa\u540d\u989d\u591a\u63d0\u62d4\u4e9b\u5e74\u8f7b\u7684\u4e0a\u6765\u3002\u8fd9\u4e48\u5730\u641e\u4e09\u5e74\uff0c\u9c81\u80fd\u5927\u4e1a\u53ef\u6210\u3002 \u54c8\u54c8 11.30\u8db3\u534f\u676f\u5fc5\u80dc\uff01", "up": 74}, {"content": "\u8bf7\u5217\u961f\u5411\u5d14\u9e4f\u548c\u4f69\u83b1\u9053\u6b49\u7684\u540c\u5fd7\u4eec\u4fdd\u6301\u597d\u961f\u5f62\uff0c\u4e0d\u8981\u4e71\uff01", "up": 11}, {"content": "\u6309\u7167\u73b0\u5728\u9c81\u80fd\u7684\u6253\u6cd5\uff0c\u683c\u5fb7\u65af\u7684\u4f4d\u7f6e\u592a\u5c34\u5c2c\u4e86\uff0c\u65e2\u4e0d\u80fd\u50cf\u5854\u5c14\u5fb7\u5229\u90a3\u6837\u7ec4\u7ec7\u548c\u7a81\u7834\uff0c\u53c8\u4e0d\u80fd\u50cf\u4f69\u83b1\u4e00\u6837\u4f5c\u4e3a\u8fdb\u653b\u652f\u70b9", "up": 9}, {"content": "\u8bf7\u5217\u961f\u5411\u5d14\u9e4f\u548c\u4f69\u83b1\u9053\u6b49\u7684\u540c\u5fd7\u4eec\u4fdd\u6301\u597d\u961f\u5f62\uff0c\u4e0d\u8981\u4e71\uff01", "up": 8}, {"content": "\u5c71\u4e1c\u8db3\u7403\u4e0d\u80fd\u7f3a\u5c11\u9ad8\u4e2d\u950b\uff0c\u8fd9\u662f\u4e00\u79cd\u4f20\u627f\uff0c\u4f69\u83b1\u4e0d\u53ef\u6216\u7f3a\u3002\u4f46\u5e0c\u671b\u8fd8\u662f\u80fd\u518d\u51fa\u4e00\u4e2a\u5bbf\u8302\u81fb\u97e9\u9e4f\u3002\u6210\u6e90\u90ed\u7530\u96e8\u52a0\u6cb9\uff01", "up": 8}], "7": [{"content": "\u4e0d\u7ba1\u6709\u65e0\u72af\u89c4\uff0c\u5176\u5b9e\u4e0a\u6e2f\u7403\u5458\u5012\u5730\u65f6\u88c1\u5224\u6ca1\u6709\u5439\u505c\u6bd4\u8d5b\uff0c\u8fd9\u6837\u7684\u8bdd\u9c81\u80fd\u901a\u8fc7\u914d\u5408\u9700\u8981\u4e00\u6bb5\u65f6\u95f4\u4f69\u83b1\u6253\u8fdb\u8fd9\u4e2a\u7403\u5c31\u5e94\u8be5\u6709\u6548\uff0c\u662f\u4e2a\u597d\u7403\uff0c\u4e0d\u5e94\u8be5\u53d6\u6d88\uff01", "up": 312}, {"content": "\u88c1\u5224\u725b\u903c\uff0c\u5148\u5439\u6389\u4e00\u4e2a\u597d\u7403\uff0c\u7136\u540e\u6234\u7433\u5e26\u7740\u9ec4\u724c\u540e\u573a2\u62532\u72af\u89c4\u4e5f\u6ca1\u724c\uff0c\u4f69\u83b1\u54cd\u54e8\u5c04\u95e8\u903c\u4e8b\u6ca1\u6709", "up": 302}, {"content": "\u4f69\u83b1\u771f\u5fc3\u4e0d\u5982\u897f\u585e\u4f5c\u7528\u5927", "up": 97}, {"content": "\u6211\u9c81\u4f69\u83b1\u7684\u8fdb\u7403\u548c\u6c5f\u82cf\u7684\u70b9\u7403...var?", "up": 52}, {"content": "\u4eca\u5929\u7684\u97e9\u56fd\u88c1\u5224\u54e8\u5b50\u5f88\u677e\uff0c\u5728\u5e7f\u5dde\u5854\u7b2c\u4e8c\u4e2a\u8fdb\u7403\u4e4b\u524d\uff0c\u5f88\u591a\u9c81\u80fd\u7684\u72af\u89c4\u90fd\u6ca1\u5439\u300242\u5206\u949f\u5e7f\u5dde\u5854\u7684\u8fdb\u7403\u524d\uff0c\u674e\u5b66\u9e4f\u786e\u5b9e\u662f\u624b\u90e8\u6709\u52a8\u4f5c\u4e86\uff0c\u8fd9\u4e5f\u662f\u4e2d\u56fd\u7403\u5458\u7684\u6bdb\u75c5\u3002\u5728\u90a3\u4e4b\u524d\uff0c\u9c81\u80fd\u7684\u5f88\u591a\u72af\u89c4\u751a\u81f3\u8be5\u62ff\u724c\u7684\u90fd\u6ca1\u4e8b\u3002\u88c1\u5224\u770bVAR\u65f6\uff0c\u611f\u89c9\u8981\u5224\u6052\u5927\u72af\u89c4\uff0c\u8fdb\u7403\u8db3\u7403\uff0c\u4f46\u7ed3\u679c\u663e\u793a\u8fdb\u7403\u6709\u6548\uff0c\u771f\u7684\u6709\u70b9\u610f\u5916\u3002\u5168\u573a\u6bd4\u8d5b\uff0c\u9664\u4e86\u90a3\u4e2a\u63d2\u66f2\uff0c\u5176\u4ed6\u65f6\u95f4\uff0c\u6052\u5927\u7684\u6280\u6218\u672f\uff0c\u7279\u522b\u662f\u5b9d\u5854\u4e24\u4eba\u7684\u53d1\u6325\u771f\u7684\u6ca1\u5f97\u8bf4\u3002\u9c81\u80fd\u7684\u4f69\u83b1\u505c\u7403\u505a\u7403\u4e5f\u4e0d\u9519\uff0c\u4e0d\u8fc7\u6ca1\u4e2d\u573a\u7684\u6709\u6548\u8f93\u9001\uff0c\u673a\u4f1a\u4e0d\u591a\uff0c\u80fd\u8fdb\u7684\u90a3\u7403\u662f\u610f\u5927\u5229\u524d\u950b\u7684\u6807\u5fd7\u6027\u80fd\u529b\u4f53\u73b0\u3002\u90d1\u667a\u4e0b\u573a\u505c\u8d5b\uff0c\u9ec4\u535a\u6587\u53ef\u4ee5\u9876\u4e0a\uff0c\u6709\u5df4\u897f\u4e09\u53c9\u621f\u5728\uff0c\u4f30\u8ba1\u95ee\u9898\u4e0d\u5927\u3002\u4f46\u66ff\u8865\u5e2d\u7684\u5ed6\u529b\u751f\uff0c\u90d1\u9f99\u7b49\u6d41\u4f30\u8ba1\u51c9\u4e86\uff0c\u7279\u522b\u662f\u963f\u5170\uff0c\u73b0\u5728\u8fd9\u60c5\u51b5\u4e0b\uff0c\u53ea\u80fd\u5e72\u5750\u3002\u5e0c\u671b\u6052\u5927\u518d\u63a5\u518d\u5389\uff0c\u518d\u8d62\u4e09\u573a\uff0c\u4e89\u51a0\u683c\u5c40\u57fa\u672c\u660e\u6717\u4e86\u3002\u51a0\u519b\u7ec8\u5f52\u8fd9\u91cc[\u52a9\u5a01][\u52a9\u5a01]", "up": 14}]};
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
