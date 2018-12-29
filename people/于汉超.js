var data = {"person_name": "\u4e8e\u6c49\u8d85", "nicknames": "\u4e8e\u6c49\u8d85", "aspects": {"\u6bd4\u8d5b": 0.44875852494823204, "\u7403\u5458": 0.49335993640740716, "\u8fdb\u7403": 0.46762221625666794, "\u7ea2\u724c": 0.4737130682146147, "\u7403\u8ff7": 0.5018945292406581, "\u4e0b\u534a\u573a": 0.4978075858500478, "\u5916\u63f4": 0.5168391421128636, "\u8fb9\u8def": 0.6453101283838033, "\u9ec4\u724c": 0.41392150580748915, "\u72af\u89c4": 0.4805996248175832}, "overall_heat": 480.0, "overall_polar": 0.283, "name": "2", "nationality": "\u4e2d\u56fd", "position": "\u524d\u950b", "goal": "3", "assist": "11", "team_name": "\u5e7f\u5dde\u6052\u5927\u6dd8\u5b9d", "name_en": "Yu Hanchao", "age": "31", "height": "178", "weight": "65"};
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
var topic_keywords = {"0": [{"name": "\u4e8e\u6c49\u8d85", "value": 0.03886788795192401}, {"name": "\u6709\u70b9", "value": 0.021420955704177572}, {"name": "\u6052\u5927", "value": 0.014636037607831734}, {"name": "\u90d1\u9f99", "value": 0.01269748958030435}, {"name": "\u6253", "value": 0.01172821556654066}, {"name": "\u674e\u5b66\u9e4f", "value": 0.01075894155277697}, {"name": "\u7403", "value": 0.009789667539013279}, {"name": "\u771f\u7684", "value": 0.008820393525249588}, {"name": "\u524d", "value": 0.008820393525249588}, {"name": "\u8fd9\u573a", "value": 0.008820393525249588}, {"name": "\u4eca\u5929", "value": 0.007851119511485897}, {"name": "\u53d1\u6325", "value": 0.007851119511485897}, {"name": "\u8e22", "value": 0.006881845497722206}, {"name": "\u90dc\u6797", "value": 0.006881845497722206}, {"name": "\u60f3", "value": 0.006881845497722206}, {"name": "\u51af\u6f47\u9706", "value": 0.006881845497722206}, {"name": "\u611f\u89c9", "value": 0.005912571483958514}, {"name": "\u5927\u8fde", "value": 0.005912571483958514}, {"name": "\u5341\u5e74", "value": 0.004943297470194823}, {"name": "\u505c\u8d5b", "value": 0.004943297470194823}, {"name": "\u524d\u536b", "value": 0.004943297470194823}, {"name": "\u5206\u949f", "value": 0.004943297470194823}, {"name": "\u8ddf\u4e0d\u4e0a", "value": 0.003974023456431133}, {"name": "\u65e0\u6b32\u65e0\u6c42", "value": 0.003974023456431133}, {"name": "23", "value": 0.003974023456431133}, {"name": "\u4e00\u4e2a", "value": 0.003974023456431133}, {"name": "\u73b0\u5728", "value": 0.003974023456431133}, {"name": "\u7384\u4e4e", "value": 0.003974023456431133}, {"name": "\u68a6\u56de", "value": 0.003974023456431133}, {"name": "\u4e0b\u534a\u573a", "value": 0.003974023456431133}], "1": [{"name": "\u4e8e\u6c49\u8d85", "value": 0.06843377511044427}, {"name": "\uff1f", "value": 0.030924397766108194}, {"name": "\u7ea2\u724c", "value": 0.024256064016004}, {"name": "\u52a8\u4f5c", "value": 0.022588980578477955}, {"name": "\u4eba", "value": 0.018421271984662833}, {"name": "\u88c1\u5224", "value": 0.016754188547136784}, {"name": "\uff01", "value": 0.016754188547136784}, {"name": "\u5965\u53e4\u65af\u6258", "value": 0.013420021672084689}, {"name": "\u5439", "value": 0.010919396515795614}, {"name": "\u5e94\u8be5", "value": 0.009252313078269566}, {"name": "\u72af\u89c4", "value": 0.009252313078269566}, {"name": "\u9ec4\u724c", "value": 0.008418771359506543}, {"name": "\u8e22", "value": 0.008418771359506543}, {"name": "\u62a5\u590d", "value": 0.008418771359506543}, {"name": "\u6bd4\u8d5b", "value": 0.005918146203217471}, {"name": "\u80cc\u540e", "value": 0.005918146203217471}, {"name": "\u4e2d\u56fd", "value": 0.0050846044844544466}, {"name": "\u94f2\u7403", "value": 0.0050846044844544466}, {"name": "\u95ee\u9898", "value": 0.0042510627656914225}, {"name": "\u8ffd\u52a0", "value": 0.0042510627656914225}, {"name": "\u94f2", "value": 0.0042510627656914225}, {"name": "\u8fb9\u88c1", "value": 0.0042510627656914225}, {"name": "\u505c", "value": 0.0042510627656914225}, {"name": "\u5fae\u7b11", "value": 0.0042510627656914225}, {"name": "\u7403", "value": 0.0034175210469283984}, {"name": "\u660e\u663e", "value": 0.0034175210469283984}, {"name": "\u6c34\u5e73", "value": 0.0034175210469283984}, {"name": "\u8e22\u7403", "value": 0.0034175210469283984}, {"name": "\u89c9\u5f97", "value": 0.0034175210469283984}, {"name": "\u5916\u63f4", "value": 0.0034175210469283984}], "2": [{"name": "\u4e8e\u6c49\u8d85", "value": 0.06901754537224641}, {"name": "\uff1f", "value": 0.031081605380006035}, {"name": "\uff01", "value": 0.016424537655731347}, {"name": "\u90d1\u9f99", "value": 0.014700176746993147}, {"name": "\u6052\u5927", "value": 0.011682545156701299}, {"name": "\u90dc\u6797", "value": 0.0108203647023322}, {"name": "\u7403", "value": 0.009096003793594001}, {"name": "\u6253", "value": 0.00866491356640945}, {"name": "\u8fdb\u7403", "value": 0.008233823339224901}, {"name": "\u7403\u5458", "value": 0.007802733112040351}, {"name": "\uff1b", "value": 0.006940552657671252}, {"name": "\u6bd4\u8d5b", "value": 0.006940552657671252}, {"name": "\u6b66\u78ca", "value": 0.0065094624304867016}, {"name": "\u8e22", "value": 0.0060783722033021514}, {"name": "\u77e5\u9053", "value": 0.0060783722033021514}, {"name": "\u674e\u5b66\u9e4f", "value": 0.0060783722033021514}, {"name": "\u540e", "value": 0.0060783722033021514}, {"name": "\u597d", "value": 0.005647281976117601}, {"name": "\u56fd\u5b89", "value": 0.005647281976117601}, {"name": "\u5e94\u8be5", "value": 0.005216191748933052}, {"name": "\u9ec4\u724c", "value": 0.005216191748933052}, {"name": "\u56fd\u5bb6\u961f", "value": 0.005216191748933052}, {"name": "\u6362", "value": 0.005216191748933052}, {"name": "\u4e00\u76f4", "value": 0.004785101521748502}, {"name": "\u4f20\u7ed9", "value": 0.004785101521748502}, {"name": "\u8fd9\u573a", "value": 0.004354011294563953}, {"name": "\u771f", "value": 0.004354011294563953}, {"name": "\u6362\u4e0b", "value": 0.004354011294563953}, {"name": "\u5916\u63f4", "value": 0.004354011294563953}, {"name": "\u770b\u770b", "value": 0.004354011294563953}], "3": [{"name": "\u4e8e\u6c49\u8d85", "value": 0.05364053104721081}, {"name": "\uff01", "value": 0.020896588676549383}, {"name": "\u6052\u5927", "value": 0.020896588676549383}, {"name": "\u90dc\u6797", "value": 0.015538489015895695}, {"name": "\u90d1\u9f99", "value": 0.0137524557956778}, {"name": "\u7403\u5458", "value": 0.011371078168720605}, {"name": "\u90d1\u667a", "value": 0.010775733761981307}, {"name": "\u6362\u4e0b", "value": 0.00958504494850271}, {"name": "\u9ad8\u62c9\u7279", "value": 0.00958504494850271}, {"name": "\u4e00\u4e2a", "value": 0.00839435613502411}, {"name": "\u9ec4\u535a\u6587", "value": 0.0077990117282848125}, {"name": "\u56fd\u5185", "value": 0.006608322914806215}, {"name": "\u8fdb\u7403", "value": 0.006608322914806215}, {"name": "\u674e\u5b66\u9e4f", "value": 0.006012978508066916}, {"name": "\u5c81", "value": 0.006012978508066916}, {"name": "\u6253", "value": 0.0054176341013276175}, {"name": "\u51af\u6f47\u9706", "value": 0.0054176341013276175}, {"name": "\u5f20\u7433\u8283", "value": 0.004822289694588319}, {"name": "\u5f20\u6210\u6797", "value": 0.004822289694588319}, {"name": "\u66ff\u8865", "value": 0.004822289694588319}, {"name": "\u4eca\u5929", "value": 0.004822289694588319}, {"name": "\u5dee", "value": 0.004822289694588319}, {"name": "\u597d", "value": 0.004822289694588319}, {"name": "\u9632\u5b88", "value": 0.004822289694588319}, {"name": "\u66b4\u529b\u9e1f", "value": 0.00422694528784902}, {"name": "\u963f\u5170", "value": 0.00422694528784902}, {"name": "\u52a9\u5a01", "value": 0.00422694528784902}, {"name": "\u914d\u5408", "value": 0.00422694528784902}, {"name": "\u5916\u63f4", "value": 0.0036316008811097217}, {"name": "\u5439", "value": 0.0036316008811097217}], "4": [{"name": "\uff01", "value": 0.08263967503496038}, {"name": "\u4e8e\u6c49\u8d85", "value": 0.06998734767263767}, {"name": "\u7edd\u6740", "value": 0.025371245921289205}, {"name": "\u6052\u5927", "value": 0.02403942198841313}, {"name": "\u7403", "value": 0.00938935872677632}, {"name": "\u90d1\u9f99", "value": 0.008057534793900246}, {"name": "\u7403\u8ff7", "value": 0.008057534793900246}, {"name": "\uff1f", "value": 0.008057534793900246}, {"name": "\u6700\u540e", "value": 0.0073916228274622095}, {"name": "\u8fdb\u7403", "value": 0.006059798894586135}, {"name": "\u4e00\u4e2a", "value": 0.005393886928148099}, {"name": "\u5f20\u6587\u948a", "value": 0.005393886928148099}, {"name": "\u725b", "value": 0.005393886928148099}, {"name": "\u673a\u4f1a", "value": 0.005393886928148099}, {"name": "\u8fbd\u5b81", "value": 0.004727974961710062}, {"name": "\u6700", "value": 0.0040620629952720245}, {"name": "\u903c", "value": 0.0040620629952720245}, {"name": "\u5e94\u8be5", "value": 0.0040620629952720245}, {"name": "\u52a0\u6cb9", "value": 0.0040620629952720245}, {"name": "\u8d85", "value": 0.0040620629952720245}, {"name": "\u5934\u7403", "value": 0.0033961510288339877}, {"name": "\u4eca\u5929", "value": 0.0033961510288339877}, {"name": "\u90dc\u6797", "value": 0.0033961510288339877}, {"name": "\u597d", "value": 0.0033961510288339877}, {"name": "\u8fdb", "value": 0.0033961510288339877}, {"name": "\u4e09\u5206", "value": 0.0033961510288339877}, {"name": "\u4e00\u76f4", "value": 0.0033961510288339877}, {"name": "\u7ee7\u7eed", "value": 0.0033961510288339877}, {"name": "\u6bd4\u8d5b", "value": 0.0033961510288339877}, {"name": "\u80fd\u529b", "value": 0.0033961510288339877}], "5": [{"name": "\uff01", "value": 0.024924232143664904}, {"name": "\u6052\u5927", "value": 0.0244718867327091}, {"name": "\u4e8e\u6c49\u8d85", "value": 0.02221015967793007}, {"name": "\u4e0a\u6e2f", "value": 0.016329669335504594}, {"name": "\uff1f", "value": 0.008639797349255893}, {"name": "\u90dc\u6797", "value": 0.008639797349255893}, {"name": "\u597d", "value": 0.008639797349255893}, {"name": "\u4e00\u4e2a", "value": 0.007735106527344281}, {"name": "\u8868\u73b0", "value": 0.007735106527344281}, {"name": "\u5361\u5e05", "value": 0.006378070294476863}, {"name": "\u6362\u4e0b", "value": 0.005925724883521057}, {"name": "\u6bd4\u8d5b", "value": 0.005925724883521057}, {"name": "\u771f\u7684", "value": 0.005925724883521057}, {"name": "\u6700\u540e", "value": 0.005925724883521057}, {"name": "\u7403\u8ff7", "value": 0.005473379472565251}, {"name": "\u6253", "value": 0.005473379472565251}, {"name": "\u673a\u4f1a", "value": 0.005473379472565251}, {"name": "\u4e0b\u534a\u573a", "value": 0.005021034061609446}, {"name": "\u5361\u7eb3\u74e6\u7f57", "value": 0.004568688650653639}, {"name": "\u8fb9\u8def", "value": 0.004568688650653639}, {"name": "\u5f20\u6587\u948a", "value": 0.004568688650653639}, {"name": "\u8db3\u7403", "value": 0.004568688650653639}, {"name": "\u70b9\u7403", "value": 0.004116343239697833}, {"name": "\u5854\u5229\u65af\u5361", "value": 0.004116343239697833}, {"name": "\u5e94\u8be5", "value": 0.004116343239697833}, {"name": "\u6362\u4eba", "value": 0.004116343239697833}, {"name": "\u90d1\u667a", "value": 0.004116343239697833}, {"name": "\u5efa\u4e1a", "value": 0.0036639978287420277}, {"name": "\u88c1\u5224", "value": 0.0036639978287420277}, {"name": "\u4eba", "value": 0.0036639978287420277}]};
var topic_summary = {"0": [{"content": "\u6211\u60f3\u8bf4\u90d1\u9f99\u4f60\u4e3a\u4e86\u60f3\u8bc1\u660e\u81ea\u5df1\uff0c\u4e0d\u4f20\u7ed9\u4e8e\u6c49\u8d85\u5bfc\u81f42:2\uff0c\u628a\u4e2a\u4eba\u7684\u5fc3\u601d\u653e\u5728\u4e86\u7b2c\u4e00\u4f4d\uff0c\u4f60\u60f3\u8bc1\u660e\u4e86\uff0c\u4f60\u8fd9\u6837\u628a\u56e2\u961f\u4e0d\u653e\u5728\u7b2c\u4e00\u4f4d\u7684\u8fd0\u52a8\u5458\u6211\u770b\u804c\u4e1a\u751f\u6daf\u4e5f\u5c31\u8fd9\u6837\u4e86\uff0c\u6ca1\u4e8b\u5c31\u505a\u5750\u51b7\u677f\u51f3\u5427\u3002\u60b2\u54c0\u3002", "up": 17}, {"content": "\u4e8e\u6c49\u8d85\u8fb9\u8def\u6253\u5f97\u771f\u597d", "up": 11}, {"content": "\u53e4\u5fb7\u5229\uff0c\u90d1\u9f99\uff0c\u4e8e\u6c49\u8d85\uff0c\u4e09\u4eba\u8fd9\u573a\u53d1\u6325\u6709\u70b9\u6b20\u4f73\uff0c\u751a\u81f3\u62ff\u4e0d\u4f4f\u7403\uff0c\u5931\u8bef\u592a\u591a\u3002\u9ad8\u62c9\u7279\u56e0\u4e3a\u90dc\u6797\u7684\u4e24\u6b21\u6253\u98de\u7403\uff0c\u6709\u70b9\u4e0d\u6ee1\uff0c\u81ea\u5df1\u4e5f\u60f3\u5355\u5e72\uff0c\u540e\u6765\u81ea\u5df1\u4f53\u529b\u4e5f\u8ddf\u4e0d\u4e0a\u4e86\u3002\u674e\u5b66\u9e4f\u7684\u5de6\u8def\u8fdb\u653b\u8fd9\u573a\u88ab\u9650\u5236\u4f4f\u4e86\uff0c\u6709\u70b9\u6253\u4e0d\u5f00\u5c40\u9762\u3002\u90dc\u8001\u677f\u524d23\u5206\u949f\uff0c\u4eff\u4f5b\u56de\u5230\u4e86\u5341\u5e74\u524d\uff0c\u9093\u6db5\u6587\u4eca\u5929\u5c31\u662f\u4e03\u5e74\u524d\u7684\u5f205\uff0c\u52a9\u653b\uff0c\u4e0b\u5e95\u4f20\u4e2d\uff0c\u4fe8\u7136\u4e00\u4e2a\u53f3\u8fb9\u524d\u536b\u3002\u6768\u7acb\u745c\u771f\u7684\u8fd8\u9700\u8981\u78e8\u70bc\u4e00\u4e0b\uff0c\u90dc\u6797\uff0c\u4e8e\u6c49\u8d85\u8fd9\u4e9b\u6052\u5927\u56fd\u5b57\u53f7\u7684\u4e2d\u950b\u548c\u524d\u950b\u7ec8\u7a76\u8981\u8001\u53bb\uff0c\u8d76\u7d27\u591a\u5b66\u591a\u7ec3\u591a\u8bf7\u6559\u5440\uff0c\u672a\u6765\u6052\u5927\u7684\u5929\uff0c\u90fd\u5c5e\u4e8e\u4f60\u4eec\u554a\u3002\u516b\u5e74\u6052\u8ff7\u4e00\u679a\u5ba2\u89c2\u8bc4\u7403\uff0c\u4e0d\u59a5\u4e4b\u5904\uff0c\u671b\u6d77\u6db5\u3002", "up": 9}, {"content": "\u8fd9\u7403\u4f20\u4e86\uff0c\u6807\u9898\u5c31\u662f:\u4e8e\u6c49\u8d85\u53cc\u54cd....\uff0c\u81ea\u5df1\u6765\u5c31\u662f:\u90d1\u9f99\u4f20\u5c04....\uff0c\u90a3\u4e00\u77ac\u95f4\u7ecf\u8fc7\u4e00\u756a\u5929\u4eba\u4ea4\u5408\uff0c\u4ed6\u51b3\u5b9a\u4e3a\u4e86\u70ed\u5ea6\u6765\u4e00\u811a!", "up": 8}, {"content": "\u4e8e\u6c49\u8d85\u5e7f\u5dde\u96e8\u795e\uff1a\u4eba\u5728\u5e7f\u5dde\u6f02\u6cca\u5341\u5e74", "up": 7}], "1": [{"content": "\u4e8e\u6c49\u8d85\u90a3\u4e2a\u94f2\u7403\uff0c\u660e\u767d\u4eba\u7ed9\u4e2a\u770b\u6cd5\uff0c\u8be5\u7ea2\u724c\u8fd8\u662f\u9ec4\u724c\uff0c\u5965\u53e4\u65af\u6258\u62a5\u590d\u52a8\u4f5c\uff0c\u7ea2\u724c\u6ca1\u610f\u4e49\u3002\u4f46\u662f\u5982\u679c\u88c1\u5224\u5439\u4e86\u4e8e\u6c49\u8d85\u94f2\u7403\u72af\u89c4\uff0c\u4f1a\u53d1\u751f\u4ec0\u4e48\uff0c\u6ca1\u522b\u7684\u610f\u601d\uff0c\u660e\u767d\u4eba\u7ed9\u4e2a\u770b\u6cd5\uff0c\u8c22\u8c22\uff01", "up": 532}, {"content": "\u4e8e\u6c49\u8d85\u7684\u52a8\u4f5c\u4e5f\u662f\u7ea2\u724c\u554a\uff0c\u4e2d\u56fd\u88c1\u5224\u771f\u7684\u670d\u4e86", "up": 407}, {"content": "\u54b1\u5ba2\u89c2\u70b9\u513f\u8bf4\uff0c\u5965\u53e4\u65af\u6258\u8fd9\u62a5\u590d\u52a8\u4f5c\u7ea2\u724c\u5b8c\u5168\u6ca1\u95ee\u9898\uff0c\u4f60\u4e8e\u6c49\u8d85\u8fd9\u526a\u5200\u817f\u660e\u663e\u4eba\u5bb6\u90fd\u51fa\u7403\u4e86\u4e5f\u6ca1\u89c1\u6536\uff0c\u8fd8\u53cc\u811a\u79bb\u5730\u7684\u526a\uff0c\u4e00\u7ea2\u4e00\u9ec4\uff0c\u5408\u7406\u4e48\uff1f", "up": 385}, {"content": "\u4e8e\u6c49\u8d85\u80cc\u540e\u98de\u94f2\u4e0d\u62ff\u7ea2\u5b9d\u77f3\u4e48\uff1f", "up": 191}, {"content": "\u4e8e\u6c49\u8d85\u8fd9\u811a\u653e\u94f2\u5f53\u65f6\u9a6c\u4e0a\u5439\u54e8\uff0c\u54ea\u6015\u7ed9\u5f20\u9ec4\u724c\uff0c\u4e5f\u4e0d\u81f3\u4e8e\u8ba9\u51b2\u7a81\u5347\u7ea7\u3002\u53ea\u80fd\u8bf4\u88c1\u5224\u4e1a\u52a1\u6c34\u5e73\u592a\u4f4e\uff0c\u7403\u5728\u4eba\u548c\u540e\u573a\uff0c\u6ca1\u6709\u660e\u663e\u7684\u8fdb\u653b\u6709\u5229\uff0c\u8fd9\u6837\u7684\u80cc\u540e\u653e\u94f2\u5c45\u7136\u54e8\u5b50\u90fd\u4e0d\u54cd\uff0c\u6700\u8be5\u7f5a\u4e0b\u7684\u4eba\u662f\u88c1\u5224\u3002", "up": 176}], "2": [{"content": "\u4e00\u76f4\u90fd\u5f88\u559c\u6b22\u4e8e\u6c49\u8d85\u3002\u5373\u4f7f\u53bb\u5e74\u7684\u624b\u7403\uff0c\u4e5f\u6ca1\u9ed1\u8fc7\u4ed6\uff0c\u5162\u5162\u4e1a\u4e1a\uff0c\u4f4e\u8c03\u52e4\u594b\uff0c\u4f60\u751a\u81f3\u627e\u4e0d\u51fa\u4ed6\u7684\u82b1\u8fb9\u65b0\u95fb\uff0c\u6ca1\u4ec0\u4e48\u9ed1\u70b9\u7684\u7403\u5458\uff0c\u662f\u4e2d\u56fd\u7403\u5458\u91cc\u4e3a\u6570\u4e0d\u591a\u6709\u81ea\u4e3b\u7a81\u7834\u80fd\u529b\u7684\u7403\u5458\uff0c\u4e2a\u4eba\u5355\u6311\u963f\u5c14\u7ef4\u65af\u7684\u90a3\u4e2a\u7403\uff0c\u8fd8\u8bb0\u5f97\u7684\u670b\u53cb\u4e00\u8d77\u7ad9\u51fa\u6765\u3002", "up": 2669}, {"content": "\u4e00\u5207\u90fd\u8981\u4ece\u90d1\u9f99\u8d2a\u5fc3\u8bf4\u8d77\uff0c\u672c\u6765\u53ef\u4ee5\u52a9\u653b\u4e8e\u6c49\u8d85\u7a7a\u95e8\u6740\u6b7b\u6bd4\u8d5b\uff0c\u504f\u504f\u81ea\u5df1\u8d2a\u5fc3\uff0c\u8fd9\u4e2a\u8f6c\u6298\u70b9\u8db3\u4ee5\u78e8\u706d\u6389\u4ed6\u4e4b\u524d\u6240\u6709\u7684\u529f\u52b3\uff0c\u7ed9\u4ed6\u62530\u5206\uff0c\u771f\u88ab\u6c14\u6b7b\u3002", "up": 970}, {"content": "\u4e0a\u4e00\u573a\u5bf9\u56fd\u5b89\u8981\u4e0d\u662f\u90d1\u9f99\u8fd9\u4e2a\u72ec\u903c\uff0c\u4e8e\u6c49\u8d85\u4e5f\u7edd\u6740\u4e86[\u6124\u6012]", "up": 729}, {"content": "\u4e8e\u6c49\u8d85\u6bd4\u90d1\u9f99\u8fd8\u662f\u8981\u5f3a\uff01", "up": 350}, {"content": "\u53bb\u5e74\u624b\u7403\u906d\u5230\u8d28\u7591\u65f6\u8d85\u54e5\u4ec0\u4e48\u4e5f\u6ca1\u8bf4\uff0c\u7528\u5b9e\u9645\u884c\u52a8\u56de\u5e94\u4e86\u65e0\u8111\u9ed1\u7684\u55b7\u5b50\u4eec\uff0c\u8fd9\u8d5b\u5b63\u521d\u6253\u4e86\u51e0\u811a\u95e8\u67f1\u53c8\u6709\u4eba\u5f00\u59cb\u8bf4\u4e86\u3002\u8fd9\u4e24\u5929\u7684\u8fdb\u7403\u55b7\u5b50\u4eec\u8138\u75bc\u4e48\uff1f\u8fd9\u6837\u4f4e\u8c03\u52e4\u6073\u7684\u4e8e\u6c49\u8d85\u600e\u80fd\u4e0d\u7231\uff01", "up": 237}], "3": [{"content": "\u90d1\u9f99\u6253\u8fb9\u540e\u536b\u5427\uff0c\u5f53\u5e74\u7684\u7075\u6c14\u5168\u6ca1\u4e86\uff0c\u7a81\u7834\u80fd\u529b\u6bd4\u4e8e\u6c49\u8d85\u5dee\u4e86\u4e00\u4e2a\u6863\u6b21", "up": 947}, {"content": "\u8bf4\u771f\u7684\uff0c\u4e8e\u6c49\u8d85\u6bd4\u90a3\u5565\u90d1\u9f99\u9ad8\u51e0\u4e2a\u6863\u6b21", "up": 912}, {"content": "\u6362\u4e0b\u90d1\u667a\u6ca1\u4e86\u9632\u5b88\uff0c\u6362\u4e0b\u4e8e\u6c49\u8d85\u6ca1\u4e86\u8fdb\u653b", "up": 754}, {"content": "\u90d1\u667a38\u5c81\u3001\u51af\u6f47\u970633\u5c81\u3001\u90dc\u679732\u5c81\u3001\u66fe\u8bda31\u5c81\u3001\u9ec4\u535a\u658731\u5c81\u3001\u674e\u5b66\u9e4f30\u5c81\u3001\u5f20\u7433\u828329\u5c81\u3001\u9ad8\u62c9\u727927\u5c81\u3001\u963f\u517029\u5c81\u2026\u2026\uff0c\u9996\u5148\u652f\u6301\u5168\u534e\u73ed\uff0c\u5176\u6b21\u5e73\u574730\u5c81\u7684\u7403\u961f\u771f\u7684\u9700\u8981\u5168\u9762\u6362\u8840\u4e86\uff0c\u9ec4\u535a\u6587\u8e22\u4e86\u5341\u51e0\u5206\u949f\u5c31\u6ee1\u8eab\u5927\u6c57\uff0c\u51af\u6f47\u9706\u548c\u5f20\u7433\u8283\u53ea\u80fd\u7528\u72af\u89c4\u5f25\u8865\u901f\u5ea6\u7f3a\u9677\uff0c\u800c\u5728\u4e0b\u534a\u573a\u540e\u9636\u6bb5\u674e\u5b66\u9e4f\u4e5f\u57fa\u672c\u4e0a\u542f\u52a8\u4e0d\u8d77\u6765\uff0c\u4e8e\u6c49\u8d85\u57fa\u672c\u900f\u652f\u2026\u2026\u770b\u5f97\u60ca\u5fc3\u52a8\u9b44\uff0c\u5f88\u96be\u60f3\u50cf\u660e\u5e74\u4f1a\u600e\u4e48\u6837", "up": 329}, {"content": "\u53ef\u60dc\u4e86\u4e8e\u6c49\u8d85\u8d85\u7ea7\u5927\u817f\u7684\u8868\u73b0\u4e86\uff0c\u8981\u4e0d3:0\u8fd8\u662f\u6709\u53ef\u80fd\u7684", "up": 228}], "4": [{"content": "\u73b0\u573a\u90a3\u4e2a\u4e3e\u6d77\u62a5\u8bf4\u4e8e\u6c49\u8d85\u7edd\u6740\u7684\u54e5\u4eec\uff0c\u6211\u5c31\u95ee\u4e00\u53e5\uff1a\u4f60\u4e0d\u4f1a\u662f\u6bcf\u573a\u7403\u90fd\u628a\u8fd9\u6d77\u62a5\u5e26\u4e0a\u7684\u5427\uff1f", "up": 225}, {"content": "\u6ca1\u6709\u90dc\u6797\u5b9d\u5854\u5c31\u6ca1\u6709\u8fde\u7ebf\uff0c\u4e8e\u6c49\u8d85\u662f\u5f88\u62fc\uff0c\u4f46\u4ed6\u4e0d\u9002\u5408\u4e32\u8054\u7684\u804c\u8d23\uff0c\u6700\u9002\u5408\u4ed6\u7684\u8fd8\u662f\u8fb9\u8def\u7206\u7834\u624b\u3002\u8fd8\u6709\u90d1\u9f99\u4e5f\u662f\u725b\u903c\uff0c\u6bcf\u6b21\u6362\u4ed6\u4e0a\u6765\u4e00\u5b9a\u88ab\u5bf9\u624b\u641e\u5b9a\u3002\u5f205\u8fd8\u662f\u522b\u89e6\u7403\u4e86\uff0c\u76f4\u63a5\u5f00\u5927\u811a\u5427\uff0c\u53ef\u80fd\u8fd8\u80fd\u5f62\u6210\u52a9\u653b\u3002", "up": 205}, {"content": "\u4e8e\u6c49\u8d85\u5f97\u6709\u591a\u5c11\u4e2a\u7edd\u6740\u4e86\uff1f", "up": 154}, {"content": "\u90d1\u9f99\u80fd\u529b\u662f\u6709\u7684\uff0c\u95ee\u9898\u5728\u4e8e\u4e0d\u7a33\u5b9a\uff0c\u4e0d\u50cf\u4e8e\u6c49\u8d85\u90a3\u4e48\u503c\u5f97\u4fe1\u8d56", "up": 58}, {"content": "\u7edd\u6740\u4e86\uff0c\u201c\u8d85\u201d\u5f00\u5fc3\uff01\u5728\u9ad8\u62c9\u7279\u548c\u963f\u5170\u5747\u7f3a\u5e2d\u7684\u60c5\u51b5\u4e0b\u8270\u96be\u53d6\u80dc\uff0c\u6b8a\u4e3a\u4e0d\u6613\uff01\u4e8e\u6c49\u8d85\u4eca\u5e74\u51e0\u6b21\u4e0e\u8fdb\u7403\u5931\u4e4b\u4ea4\u81c2\uff0c\u5e0c\u671b\u8fd9\u662f\u4e00\u4e2a\u826f\u597d\u7684\u5f00\u7aef\uff0c\u4eca\u5e74\u4e09\u7ebf\u8fdb\u7403\u53ef\u4ee5\u4e0a\u53cc\u3002\u770b\u5230\u8bf4\u90d1\u9f99\u7684\uff0c\u6211\u89c9\u5f97\u4ed6\u5728\u573a\u4e0a\u7684\u6001\u5ea6\u662f\u6ca1\u5f97\u9ed1\u7684\uff0c\u6ee1\u573a\u98de\u5954\uff0c\u79ef\u6781\u62fc\u62a2\uff0c\u53ea\u662f\u6700\u540e\u5904\u7406\u7403\u7684\u5fc3\u6001\u8fd8\u6709\u4e9b\u6025\u8e81\u3002\u7403\u662f\u4e8e\u6c49\u8d85\u8fdb\u7684\uff0c\u5f20\u6587\u948a\u4f20\u7684\u3002\u3002\u3002\u4f46\u662f\uff0c\u4f60\u4eec\u8fd8\u8bb0\u5f97\u7ed9\u5f20\u6587\u948a\u4f20\u7684\u662f\u8c01\u5417\uff1f\u5ed6\u529b\u751f\uff01\u4ece\u4e2d\u5708\u7cbe\u51c6\u957f\u4f20\u7ed9\u5927\u7981\u533a\u53f3\u4fa7\u7684\u5f20\uff0c\u4f9d\u7a00\u770b\u5230\u4e8613\u8d5b\u5b63\u7684\u90a3\u4e2a\u5ed62\uff0c\u4ed6\u5c31\u5e94\u8be5\u662f\u8fd9\u6837\u7684\u5ed62\uff0c\u4e00\u76f4\u4ee5\u4e3a\u4ed6\u5c06\u662f\u6052\u5927\u672a\u6765\u5341\u5e74\u7684\u7ec4\u7ec7\u6838\u5fc3\uff0c\u4e00\u76f4\u671f\u5f85\u4ed6\u7684\u91cd\u65b0\u5d1b\u8d77\u3002\u3002\u3002\u4eca\u5929\uff0c\u5ed6\u529b\u751f\u7684\u8fd9\u811a\u4f20\u7403\u624d\u6700\u8ba9\u6211\u5f00\u5fc3\uff01\uff01\uff01", "up": 33}], "5": [{"content": "\u51e0\u70b9\u770b\u6cd5\uff1a1.\u5361\u7eb3\u74e6\u7f57\u662f\u771f\u7684\u592a\u83dc 2.\u4e8e\u6c49\u8d85\u771f\u7684\u4e0d\u9002\u5408\u9996\u53d1\uff0c\u8ddf\u5916\u63f4\u51e0\u4e4e\u6253\u4e0d\u51fa\u914d\u5408 3.\u9ec4\u535a\u6587\u9000\u5316\u4e25\u91cd 4.\u8ddf\u5bf9\u9762\u989c\u9a8f\u51cc\u4e00\u6bd4\u8f83\uff0c\u66fe\u8bda\u5b9e\u5728\u592a\u5e73\u5eb8\uff0c\u51fa\u51fb\u4e0d\u679c\u65ad\uff0c\u5bf9\u65b9\u4e00\u5c04\u4e00\u4e2a\u51c6\u30025.\u8bf4\u591a\u5c11\u6b21\u4e86\uff0c\u6253\u4e0a\u6e2f\u5343\u4e07\u4e0d\u80fd\u4e0a\u5f205 6.\u90d1\u667a\u8fd8\u662f\u4e0d\u53ef\u66ff\u4ee3", "up": 193}, {"content": "0\u20030 \u5728\u4e0a\u6d77\u8bfb\u4e66\u7684\u65f6\u5019\u4e00\u76f4\u60f3\u53bb\u4f46\u662f\u6ca1\u6709\u53bb\u6210\u529f\u770b\u8db3\u7403\uff01\u4eca\u5e74\u6052\u5927\u5bf9\u82cf\u5b81\u90a3\u5929\u4ece\u798f\u5efa\u8fc7\u53bb\uff0c\u4ee5\u4e3a\u7403\u7968\u597d\u4e70\uff0c\u5230\u4e86\u5730\u94c1\u770b\u5230\u5f88\u591a\u7403\u8ff7\uff0c\u81ea\u5df1\u4e5f\u5f88\u5174\u594b\uff0c\u5230\u4e86\u5929\u6cb3\u624d\u53d1\u73b0\u7968\u90fd\u6ca1\u6709\u5730\u65b9\u4e70\uff0c\u95ee\u4e86\u5f88\u591a\u7403\u8ff7\u90fd\u662f\u4e70\u7684\u5e74\u7968\uff0c\u90a3\u65f6\u5019\u771f\u5fc3\u6025\u7684\uff0c\u56e0\u4e3a\u597d\u4e0d\u5bb9\u6613\u5750\u706b\u8f66\u5468\u672b\u8fc7\u53bb\u770b\uff0c\u5c31\u60f3\u611f\u53d7\u4e00\u4e0b\u5929\u6cb3\u7684\u6c14\u6c1b\uff01\u6700\u540e\u5728\u5927\u95e8\u90a3\u91cc\u4e70\u5230\u4e86\uff01\u8bf4\u5b9e\u5728\u7684\uff0c\u5e7f\u5dde\u7403\u8ff7\u771f\u7684\u662f\u5f88\u6e29\u67d4\u7684\uff01\u4e94\u516d\u4e2a\u5b89\u68c0\u4e4b\u540e\u8e0f\u5165\u5929\u6cb3\u4e4b\u540e\u53d1\u73b0\uff0c\u771f\u7684\u592a\u540a\u4e86\uff01\u65e0\u6bd4\u6fc0\u52a8\uff0c\u5bf9\u4e8e\u7535\u89c6\u4e0a\u6bcf\u573a\u770b\u6052\u5927\u7684\u6bd4\u8d5b\u5b8c\u5168\u4e0d\u4e00\u6837\uff01\u90a3\u6c14\u6c1b\u771f\u7684\u592a\u68d2\u5566\uff01\u4e0b\u534a\u573a\u7a81\u7136\u4e0b\u96e8\uff0c\u7136\u540e\u5f88\u591a\u4eba\u90fd\u8dd1\u5230\u96e8\u6dcb\u4e0d\u5230\u7684\u5730\u65b9\u770b\u7403\uff0c\u8fd9\u65f6\u5019\u4fdd\u5b89\u8bf4\u4e86\u4e00\u53e5\uff0c\u5c45\u7136\u4f60\u662f\u7403\u8ff7\u3002\u5c31\u5e94\u8be5\u6709\u6fc0\u60c5\uff0c\u4e0d\u5e94\u8be5\u88ab\u5927\u96e8\u6df9\u6ca1\u6fc0\u60c5\uff0c\u7136\u540e\u6211\u5c31\u6dcb\u96e8\u770b\u4e86\uff0c90\u5206\u949f\u7684\u65f6\u5019\u6211\u89c9\u5f97\u8001\u5929\u7237\u4e0d\u5e94\u8be5\u7ed9\u6211\u770b\u4e00\u573a\u5e73\u5c40\u5427\uff01\u8fd9\u65f6\u5019\u4e8e\u6c49\u8d85\u7edd\u6740\u4e86\uff01\u90a3\u5c71\u547c\u6d77\u5578\u7684\u611f\u89c9\u5c31\u662f\u723d\uff01\u5176\u5b9e\u5e7f\u5dde\u7403\u8ff7\u662f\u771f\u7684\u7231\u8db3\u7403\uff0c\u4ed6\u4eec\u4e0d\u662f\u5f88\u5728\u4e4e\u8f93\u8d62\uff0c\u4f46\u662f\u4ed6\u4eec\u786e\u5b9e\u5728\u4eab\u53d7\u7740\u8db3\u7403 2018-09-15 12:40:36", "up": 14}, {"content": "\u606d\u559c\u4e0a\u6e2f\u593a\u51a0\uff0c\u6211\u4e4b\u524d\u8bf4\u4e0a\u6e2f\u7684\u6253\u6cd5\u5f88\u597d\uff0c\u8fd8\u6709\u4e9b\u4eba\u55b7\u6211\uff0c\u6211\u8c01\u7684\u7403\u8ff7\u90fd\u4e0d\u662f\uff0c\u4f5c\u4e3a\u65c1\u89c2\u8005\u53ea\u6b23\u8d4f\u8868\u73b0\u597d\u7684\u4e00\u65b9\uff0c\u6bcb\u5eb8\u7f6e\u7591\u4e0a\u6e2f\u7684\u6253\u6cd5\u4e2d\u8d85\u662f\u6700\u597d\u7684\uff0c\u4e3b\u8981\u662f\u8f6c\u79fb\u7403\u901f\u5ea6\u65b9\u9762\u6bd4\u6052\u5927\u5f3a\uff0c\u4e8e\u6c49\u8d85\u548c\u90d1\u667a\u6362\u4e0b\u573a\u4e00\u5207\u90fd\u6539\u53d8\u4e86\uff0c\u5176\u4ed6\u7684\u4e2d\u8d85\u7403\u961f\u4e5f\u8981\u591a\u5b66\u5b66\u4e0a\u6e2f\u7684\u6253\u6cd5\uff0c\u6211\u9884\u6d4b\u4e0a\u6e2f\u660e\u5e74\u8fd8\u4f1a\u5f15\u8fdb\u4e00\u4e2a\u5916\u63f4\u524d\u950b\uff0c\u66ff\u6362\u57c3\u5c14\u514b\u68ee\uff0c\u6052\u5927\u4e5f\u4f1a\u5728\u5f15\u8fdb\u5916\u63f4\u7684\uff0c\u56e0\u4e3a\u963f\u5170\u548c\u9ad8\u62c9\u7279\u5728\u4e2d\u8d85\u4e0d\u7b97\u51fa\u8272\u7684\uff0c\u606d\u559c\u6b66\u78ca\uff0c\u5e0c\u671b\u6709\u7684\u7f51\u53cb\u4e0d\u8981\u55b7\u6211\uff0c\u6211\u4eec\u770b\u7684\u5c31\u662f\u4e00\u4e2a\u7cbe\u5f69\uff0c\u6d89\u53ca\u4e0d\u5230\u4ec0\u4e48\u4ec7\u6068\uff0c\u82b1\u65e0\u767e\u65e5\u7ea2\uff0c\u66f4\u65b0\u6362\u4ee3\u5f88\u6b63\u5e38\uff0c\u6211\u4e4b\u524d\u8bf4\u4e86\u4e0a\u6e2f\u4f1a\u572818\u5e74\u4e4b\u540e\u7edf\u6cbb\u4e2d\u8d85\uff0c\u4e0a\u6e2f\u80fd\u591f\u8d85\u8d8a\u6052\u5927\u76847\u51a0\u738b\uff01\u4e0d\u7ba1\u4f60\u662f\u6052\u5927\u7684\u7403\u8ff7\u8fd8\u662f\u4e0a\u6e2f\u7684\u7403\u8ff7\uff0c\u5343\u4e07\u4e0d\u8981\u55b7\uff0c\u770b\u6bd4\u8d5b\u770b\u5185\u5bb9\u770b\u7cbe\u5f69\u7a0b\u5ea6\uff0c\u6bd4\u8d5b\u80af\u5b9a\u4f1a\u5206\u51fa\u80dc\u8d1f\uff0c\u8c01\u8f93\u8c01\u8d62\u90fd\u8981\u770b\u5f00\u4e00\u4e9b\uff0c\u8d62\u5f97\u4e00\u65b9\u5fc5\u5b9a\u6709\u8fc7\u4eba\u4e4b\u5904\uff0c\u7406\u6027\u770b\u7403\uff0c\u606d\u559c\u4e0a\u6e2f\uff0c\u606d\u559c\u7403\u738b\u6b66\u78ca\uff01\uff01\uff01", "up": 9}, {"content": "\u9a9a\u90dc\u4e00\u628a\u63a8\u5012\u4e8e\u6c49\u8d85\uff0c\u8eab\u4f53\u4f0f\u4e86\u4e0b\u53bb\u2026\u2026", "up": 9}, {"content": "\u8bf4\u5b9e\u8bdd\uff0c\u6052\u5927\u5c31\u6015\u56fd\u5b89\u8fd9\u6837\u7684\u7403\u961f\uff0c\u867d\u7136\u4ea4\u6218\u6210\u7ee9\u90fd\u662f\u80dc\u5229\u5c45\u591a\uff0c\u4f46\u6bcf\u6b21\u90fd\u6253\u5f97\u78d5\u78d5\u7eca\u7eca\u3002\u8fd9\u6b21\u5728\u5173\u952e\u76846\u5206\u4e4b\u6218\u8d62\u4e0b\u4e86\uff0c\u6052\u5927\u53ef\u4ee5\u8bf4\u6574\u4e2a\u8d5b\u5b63\u6700\u91cd\u8981\u7684\u6bd4\u8d5b\u5df2\u7ecf\u8d62\u4e0b\u6765\u4e86\u3002\u4e0b\u4e00\u573a\u6052\u5927\u6253\u4e0a\u6e2f\uff0c\u5de6\u540e\u536b\u674e\u5b66\u9e4f\u5f52\u6765\uff0c\u8fd8\u6709\u4e8e\u6c49\u8d85\u4e5f\u80fd\u767b\u573a\uff0c\u5de6\u8fb9\u8def\u52a0\u5f3a\u3002\u6211\u76f8\u4fe1\u6052\u5927\u6253\u4e0a\u6e2f\u6bd4\u6253\u56fd\u5b89\u5bb9\u6613\u591a\u4e86\u3002\u8d62\u4e0b\u4e0a\u6e2f\u8fd9\u4e2a\u8d5b\u5b63\u7684\u51a0\u519b\u5c31\u7a33\u4e86[\u5389\u5bb3]", "up": 9}]};
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
