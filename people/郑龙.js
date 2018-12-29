var data = {"person_name": "\u90d1\u9f99", "nicknames": "\u90d1\u9f99", "aspects": {"\u6bd4\u8d5b": 0.39009115255609544, "\u8fdb\u7403": 0.6212770971842292, "\u7403\u5458": 0.39786665409562083, "\u5355\u5200": 0.28614533357157385, "\u7403\u8ff7": 0.5037068599072444, "\u4f20\u7403": 0.5388840006886848, "\u52a9\u653b": 0.10088474597681457, "\u9632\u5b88": 0.5185025447834889, "\u70b9\u7403": 0.19414008882468484, "\u8fdb\u653b": 0.47447682984529005}, "overall_heat": 733.0, "overall_polar": 0.092, "name": "13", "nationality": "\u4e2d\u56fd", "position": "\u4e2d\u573a", "goal": "1", "assist": "3", "team_name": "\u5e7f\u5dde\u6052\u5927\u6dd8\u5b9d", "name_en": "Zheng Long", "age": "30", "height": "178", "weight": "75"};
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
var topic_keywords = {"0": [{"name": "\u90d1\u9f99", "value": 0.05906688117674098}, {"name": "\uff01", "value": 0.017697081130774537}, {"name": "\u6052\u5927", "value": 0.0169309737225159}, {"name": "\u4e8e\u6c49\u8d85", "value": 0.012334329272964071}, {"name": "\u725b", "value": 0.010036007048188156}, {"name": "\u903c", "value": 0.009269899639929519}, {"name": "\u7403", "value": 0.00850379223167088}, {"name": "\u963f\u5170", "value": 0.00850379223167088}, {"name": "\u4eba", "value": 0.007737684823412243}, {"name": "\u72b6\u6001", "value": 0.006971577415153605}, {"name": "\u4ee5\u524d", "value": 0.006205470006894967}, {"name": "\u6253", "value": 0.006205470006894967}, {"name": "\u8e22", "value": 0.0054393625986363285}, {"name": "\u7403\u5458", "value": 0.0054393625986363285}, {"name": "\uff1f", "value": 0.0054393625986363285}, {"name": "\u56fd\u811a", "value": 0.0054393625986363285}, {"name": "\u56fd\u5bb6\u961f", "value": 0.0054393625986363285}, {"name": "\u51a0\u519b", "value": 0.0054393625986363285}, {"name": "\u771f\u662f", "value": 0.0046732551903776905}, {"name": "\u8fd9\u573a", "value": 0.0046732551903776905}, {"name": "\u65f6\u95f4", "value": 0.0046732551903776905}, {"name": "\u5854\u5229\u65af\u5361", "value": 0.0046732551903776905}, {"name": "\u4e00\u4e2a", "value": 0.0046732551903776905}, {"name": "\u9752\u5c9b", "value": 0.0046732551903776905}, {"name": "\u73b0\u5728", "value": 0.0046732551903776905}, {"name": "\u7b11", "value": 0.0046732551903776905}, {"name": "\u54ed", "value": 0.0046732551903776905}, {"name": "\u5dee", "value": 0.0046732551903776905}, {"name": "\u5439", "value": 0.0046732551903776905}, {"name": "\u4e0b", "value": 0.003907147782119053}], "1": [{"name": "\u90d1\u9f99", "value": 0.08029837648091268}, {"name": "\uff01", "value": 0.02513633799285401}, {"name": "\u6052\u5927", "value": 0.02513633799285401}, {"name": "\u6362", "value": 0.014480035103115402}, {"name": "\u8e22", "value": 0.011972669717294554}, {"name": "\u4e8e\u6c49\u8d85", "value": 0.011345828370839342}, {"name": "\u5361\u7eb3\u74e6\u7f57", "value": 0.010092145677928918}, {"name": "\u90dc\u6797", "value": 0.010092145677928918}, {"name": "\u5361\u5e05", "value": 0.009465304331473703}, {"name": "\u5f20\u6587\u948a", "value": 0.009465304331473703}, {"name": "\u4e0a\u573a", "value": 0.008838462985018492}, {"name": "\u5f20\u6210\u6797", "value": 0.008838462985018492}, {"name": "\u6362\u4e0b", "value": 0.007584780292108067}, {"name": "\u95ee\u9898", "value": 0.007584780292108067}, {"name": "\u6bd4\u8d5b", "value": 0.006331097599197643}, {"name": "\u559c\u6b22", "value": 0.006331097599197643}, {"name": "\u80cc", "value": 0.006331097599197643}, {"name": "\u771f", "value": 0.005704256252742431}, {"name": "\u4e00\u76f4", "value": 0.005704256252742431}, {"name": "\uff1f", "value": 0.005704256252742431}, {"name": "\u963f\u5170", "value": 0.005077414906287219}, {"name": "\u6362\u4eba", "value": 0.005077414906287219}, {"name": "\u771f\u7684", "value": 0.005077414906287219}, {"name": "\u4eba", "value": 0.005077414906287219}, {"name": "\u90d1\u667a", "value": 0.005077414906287219}, {"name": "\u77e5\u9053", "value": 0.0044505735598320065}, {"name": "\u597d", "value": 0.0044505735598320065}, {"name": "\u8d8a", "value": 0.0044505735598320065}, {"name": "\u770b\u5230", "value": 0.0044505735598320065}, {"name": "\u7403\u8ff7", "value": 0.0044505735598320065}], "2": [{"name": "\u90d1\u9f99", "value": 0.09914967390407001}, {"name": "\uff1f", "value": 0.03805828448774045}, {"name": "\uff01", "value": 0.036407165854866676}, {"name": "\u8138", "value": 0.030628250639808473}, {"name": "\u6342", "value": 0.02072153884256584}, {"name": "\u6253", "value": 0.01659374226038141}, {"name": "\u6d41\u6c57", "value": 0.013291504994633866}, {"name": "\u6bd4\u8d5b", "value": 0.012465945678196979}, {"name": "\u9a82", "value": 0.009163708412449435}, {"name": "\u5b8c", "value": 0.008338149096012548}, {"name": "\u65e9\u65e9", "value": 0.007512589779575663}, {"name": "\u4e0a\u573a", "value": 0.007512589779575663}, {"name": "\u771f\u9999", "value": 0.007512589779575663}, {"name": "\u4e0b", "value": 0.0066870304631387765}, {"name": "\u9ed1", "value": 0.0066870304631387765}, {"name": "\u8d5b\u524d", "value": 0.00586147114670189}, {"name": "\u6bcf\u6b21", "value": 0.00586147114670189}, {"name": "\u9707\u60ca", "value": 0.00586147114670189}, {"name": "\u51c9\u51c9\u7684", "value": 0.00586147114670189}, {"name": "\u6052\u5927", "value": 0.00586147114670189}, {"name": "\u5fae\u7b11", "value": 0.00586147114670189}, {"name": "\u4e4b\u524d", "value": 0.00586147114670189}, {"name": "\u6ed1\u7a3d", "value": 0.005035911830265004}, {"name": "\u707e\u96be", "value": 0.005035911830265004}, {"name": "\u55b7", "value": 0.005035911830265004}, {"name": "\u9a6c\u5b81", "value": 0.005035911830265004}, {"name": "\u7403\u8ff7", "value": 0.005035911830265004}, {"name": "\u673a\u4f1a", "value": 0.004210352513828119}, {"name": "\u7ea7", "value": 0.004210352513828119}, {"name": "\u56fd\u5b89", "value": 0.004210352513828119}], "3": [{"name": "\u90d1\u9f99", "value": 0.0995606838511618}, {"name": "\uff01", "value": 0.06303922087545652}, {"name": "\uff1f", "value": 0.014873233472714763}, {"name": "\u6052\u5927", "value": 0.013285343778118882}, {"name": "\u4e8e\u6c49\u8d85", "value": 0.011697454083522999}, {"name": "\u77e5\u9053", "value": 0.010638860953792411}, {"name": "\u771f\u9999", "value": 0.009050971259196528}, {"name": "\u60f3", "value": 0.00799237812946594}, {"name": "\u7403", "value": 0.00799237812946594}, {"name": "\u597d", "value": 0.007463081564600646}, {"name": "\u8fdb\u7403", "value": 0.007463081564600646}, {"name": "\u9996\u53d1", "value": 0.007463081564600646}, {"name": "\u8fd9\u573a", "value": 0.006933784999735352}, {"name": "\u5361\u7eb3\u74e6\u7f57", "value": 0.006933784999735352}, {"name": "12", "value": 0.006404488434870057}, {"name": "\u6bd4\u8d5b", "value": 0.006404488434870057}, {"name": "\u672c\u6765", "value": 0.005875191870004764}, {"name": "\u4eba", "value": 0.005875191870004764}, {"name": "\u4e00\u4e2a", "value": 0.005875191870004764}, {"name": "\u52a9\u653b", "value": 0.00534589530513947}, {"name": "\u7403\u5458", "value": 0.00534589530513947}, {"name": "\u8dd1", "value": 0.00534589530513947}, {"name": "\u771f\u7684", "value": 0.00534589530513947}, {"name": "\u6253", "value": 0.004816598740274175}, {"name": "\u6b6a", "value": 0.004816598740274175}, {"name": "\u73b0\u5728", "value": 0.004287302175408882}, {"name": "\u4eca\u5929", "value": 0.004287302175408882}, {"name": "\u8e22", "value": 0.004287302175408882}, {"name": "\u4f4e\u7740\u5934", "value": 0.004287302175408882}, {"name": "\u628a\u67c4", "value": 0.004287302175408882}], "4": [{"name": "\u90d1\u9f99", "value": 0.04858839209984248}, {"name": "\u4eca\u5929", "value": 0.014661335272022295}, {"name": "\u524d", "value": 0.014661335272022295}, {"name": "\u4e8e\u6c49\u8d85", "value": 0.01223797407003514}, {"name": "\u6052\u5927", "value": 0.01223797407003514}, {"name": "\uff01", "value": 0.01102629346904156}, {"name": "\u6b6a", "value": 0.01102629346904156}, {"name": "\u6709\u70b9", "value": 0.01102629346904156}, {"name": "\u90dc\u6797", "value": 0.009814612868047983}, {"name": "\u7ec8\u4e8e", "value": 0.009814612868047983}, {"name": "\u6606\u5c71", "value": 0.009814612868047983}, {"name": "\u9f99\u54e5", "value": 0.009814612868047983}, {"name": "TMD", "value": 0.009814612868047983}, {"name": "\u8fd9\u573a", "value": 0.009814612868047983}, {"name": "\u60f3", "value": 0.008602932267054405}, {"name": "\u7403", "value": 0.008602932267054405}, {"name": "\u5389\u5bb3", "value": 0.007391251666060826}, {"name": "\u771f\u7684", "value": 0.007391251666060826}, {"name": "\u5931\u8bef", "value": 0.0061795710650672485}, {"name": "\u5206\u949f", "value": 0.0061795710650672485}, {"name": "\u5730\u65b9", "value": 0.0061795710650672485}, {"name": "\u53d1\u6325", "value": 0.0061795710650672485}, {"name": "\u9700\u8981", "value": 0.0061795710650672485}, {"name": "\u8116\u5b50", "value": 0.00496789046407367}, {"name": "\u8fdb\u653b", "value": 0.00496789046407367}, {"name": "\u6bd4\u8d5b", "value": 0.00496789046407367}, {"name": "\u6768\u7acb\u745c", "value": 0.00496789046407367}, {"name": "\u611f\u89c9", "value": 0.00496789046407367}, {"name": "\u672a\u6765", "value": 0.0037562098630800926}, {"name": "\u592a", "value": 0.0037562098630800926}], "5": [{"name": "\u90d1\u9f99", "value": 0.07283642352441162}, {"name": "\uff1f", "value": 0.025553843701854116}, {"name": "\uff01", "value": 0.017053604632630295}, {"name": "\u6052\u5927", "value": 0.012272220156191893}, {"name": "\u5355\u5200", "value": 0.010147160388885938}, {"name": "\u4e8e\u6c49\u8d85", "value": 0.008553365563406471}, {"name": "\u8e22", "value": 0.008553365563406471}, {"name": "\u56fd\u5b89", "value": 0.008022100621579983}, {"name": "\u7403", "value": 0.0074908356797534935}, {"name": "\u771f\u7684", "value": 0.0074908356797534935}, {"name": "\u6700\u540e", "value": 0.006959570737927004}, {"name": "\u4f20\u7403", "value": 0.006959570737927004}, {"name": "\u4e00\u4e2a", "value": 0.006959570737927004}, {"name": "\u673a\u4f1a", "value": 0.005897040854274027}, {"name": "\u611f\u89c9", "value": 0.005897040854274027}, {"name": "\u89c9\u5f97", "value": 0.005365775912447537}, {"name": "\u4eca\u5929", "value": 0.005365775912447537}, {"name": "\u6d6a\u8d39", "value": 0.005365775912447537}, {"name": "\u4eba", "value": 0.005365775912447537}, {"name": "\u5206\u949f", "value": 0.004834510970621049}, {"name": "\u9632\u5b88", "value": 0.004834510970621049}, {"name": "\u4e0a\u573a", "value": 0.004834510970621049}, {"name": "\u8d23\u4efb", "value": 0.004834510970621049}, {"name": "\u771f\u662f", "value": 0.00430324602879456}, {"name": "\u8868\u73b0", "value": 0.00430324602879456}, {"name": "\u4e22", "value": 0.00430324602879456}, {"name": "\u9ad8\u62c9\u7279", "value": 0.003771981086968071}, {"name": "\u597d", "value": 0.003771981086968071}, {"name": "\u8fdb\u7403", "value": 0.003771981086968071}, {"name": "\u4eca\u5e74", "value": 0.003771981086968071}], "6": [{"name": "\uff01", "value": 0.09233991960595596}, {"name": "\u6052\u5927", "value": 0.04591518994508294}, {"name": "\ud83d\ude01", "value": 0.0453490347053162}, {"name": "\u90d1\u9f99", "value": 0.02440129083394667}, {"name": "\u5f00\u6302", "value": 0.02326898035441318}, {"name": "\u66fe\u8bda", "value": 0.02326898035441318}, {"name": "\u8fdb\u7403", "value": 0.02326898035441318}, {"name": "\u5feb\u4e50", "value": 0.02326898035441318}, {"name": "\u7cbe\u5f69", "value": 0.02326898035441318}, {"name": "\u603b\u7ed3", "value": 0.022702825114646438}, {"name": "\u91cd\u70b9", "value": 0.022702825114646438}, {"name": "\u5faa\u73af", "value": 0.022702825114646438}, {"name": "\u5f31\u9879", "value": 0.022702825114646438}, {"name": "\u5723", "value": 0.022702825114646438}, {"name": "\u513f\u7ae5\u8282", "value": 0.022702825114646438}, {"name": "\u6251\u70b9", "value": 0.022702825114646438}, {"name": "\u56de\u62a5", "value": 0.022702825114646438}, {"name": "\u552f\u4e00", "value": 0.022702825114646438}, {"name": "\u54e5\u4eec\u513f", "value": 0.022702825114646438}, {"name": "\u5165\u6728\u4e09\u5206", "value": 0.022702825114646438}, {"name": "\u620f\u7cbe", "value": 0.022702825114646438}, {"name": "\u6551\u70b9", "value": 0.022702825114646438}, {"name": "\u4e8b\u524d", "value": 0.022702825114646438}, {"name": "\u6700\u8fd1", "value": 0.022702825114646438}, {"name": "\u6f14\u6280", "value": 0.022702825114646438}, {"name": "\u4e09\u500d", "value": 0.022702825114646438}, {"name": "\u795d\u798f", "value": 0.022702825114646438}, {"name": "\u7b2c\u4e00", "value": 0.022702825114646438}, {"name": "\u4e09\u4e2a", "value": 0.022702825114646438}, {"name": "\u8d62", "value": 0.022702825114646438}], "7": [{"name": "\u90d1\u9f99", "value": 0.0357829934590227}, {"name": "\uff01", "value": 0.02149178255372946}, {"name": "\u6052\u5927", "value": 0.02149178255372946}, {"name": "\u88c1\u5224", "value": 0.009948881437915683}, {"name": "\u70b9\u7403", "value": 0.009399219480019788}, {"name": "\u6700\u540e", "value": 0.009399219480019788}, {"name": "\u8e22", "value": 0.008299895564228}, {"name": "\uff1f", "value": 0.007200571648436212}, {"name": "\u5361\u5e05", "value": 0.006650909690540318}, {"name": "\u8fdb\u7403", "value": 0.006650909690540318}, {"name": "\u4eba", "value": 0.006650909690540318}, {"name": "\u6bd4\u8d5b", "value": 0.006101247732644424}, {"name": "\u9ec4\u535a\u6587", "value": 0.00555158577474853}, {"name": "\u673a\u4f1a", "value": 0.005001923816852635}, {"name": "\u90dc\u6797", "value": 0.005001923816852635}, {"name": "\u6709\u70b9", "value": 0.005001923816852635}, {"name": "\u9c81\u80fd", "value": 0.005001923816852635}, {"name": "\u963f\u5170", "value": 0.005001923816852635}, {"name": "\u5206\u949f", "value": 0.0044522618589567416}, {"name": "\u9632\u5b88", "value": 0.0044522618589567416}, {"name": "\u8fd9\u573a", "value": 0.0044522618589567416}, {"name": "\u4e0a\u6e2f", "value": 0.0044522618589567416}, {"name": "\u8fdb", "value": 0.0044522618589567416}, {"name": "\u4e00\u573a", "value": 0.0044522618589567416}, {"name": "\u95ee\u9898", "value": 0.0039025999010608475}, {"name": "\u7403", "value": 0.0039025999010608475}, {"name": "\u5916\u63f4", "value": 0.0039025999010608475}, {"name": "\u5439", "value": 0.0039025999010608475}, {"name": "\u82cf\u5b81", "value": 0.0039025999010608475}, {"name": "\u8d5b\u5b63", "value": 0.0039025999010608475}]};
var topic_summary = {"0": [{"content": "\u90d1\u9f99\u6253\u8fb9\u540e\u536b\u5427\uff0c\u5f53\u5e74\u7684\u7075\u6c14\u5168\u6ca1\u4e86\uff0c\u7a81\u7834\u80fd\u529b\u6bd4\u4e8e\u6c49\u8d85\u5dee\u4e86\u4e00\u4e2a\u6863\u6b21", "up": 947}, {"content": "\u8bf4\u771f\u7684\uff0c\u4e8e\u6c49\u8d85\u6bd4\u90a3\u5565\u90d1\u9f99\u9ad8\u51e0\u4e2a\u6863\u6b21", "up": 912}, {"content": "\u4e0a\u8f6e\u6052\u5927\u8981\u662f\u8d62\u4e86\u79ef\u5206\u5c31\u8ffd\u5e73\u4e86\uff0c\u90d1\u9f99\u8981\u5565\u8bf4\u7684\u5417[\u7b11\u54ed]", "up": 532}, {"content": "\u7533\u82b1\u7684\u5f90\u53cb\u521a\u539f\u6765\u5728\u9752\u5c9b\u9ec4\u6d77\uff0c\u518d\u52a0\u4e0a\u6731\u5efa\u5d58\uff0c\u79e6\u5347\uff0c\u6bdb\u5251\u537f\uff0c\u6817\u9e4f\uff0c\u738b\u4f1f\uff0c\u674e\u5e05\uff0c\u6052\u5927\u7684\u90b9\u6b63\uff0c\u90d1\u9f99\uff01\u8fd9\u5e2e\u4eba\u518d\u52a0\u4ee8\u725b\u53c9\u5916\u63f4\uff0c\u4e2d\u8d85\u524d\u516d\u5e94\u8be5\u6ca1\u95ee\u9898\u5427\uff01\u5509\u53c8\u8ba9\u6211\u60f3\u8d77\u4e86\u9752\u5c9b[\u5927\u54ed][\u5927\u54ed][\u5927\u54ed]", "up": 373}, {"content": "1\u3001\u6052\u5927\u786e\u5b9e\u97e7\u6027\u8db3 2\u3001\u82cf\u5b81\u8fd9\u573a\u8e22\u5f97\u4e0d\u9519 3\u3001\u8bf7\u4ea4\u6613\u90d1\u9f99 4\u3001\u95ee\u4eac\u5a92\u56fd\u5b89\u8fd8\u662f\u4e0d\u662f\u51a0\u519b\uff1f", "up": 213}], "1": [{"content": "\u90d1\u9f99\u548c\u9a6c\u5b81\u8054\u624b\u903c\u5e73\u6052\u5927 mmp", "up": 2525}, {"content": "****\u90d1\u9f99\u8fd9\u4e2a\u9505\u4f60\u6015\u662f\u8981\u80cc\u4e00\u8f88\u5b50\u4e86[\u6124\u6012]", "up": 634}, {"content": "\u5e0c\u671b\u6052\u5927\u591a\u591a\u4f7f\u7528\u90d1\u9f99\uff0c\u56e0\u4e3a\u4ed6\u4efb\u610f\u7403\u7834\u95e8\u8fd8\u662f\u6709\u4e00\u5957\uff0c\u4e3a\u4ec0\u4e48\u8fd9\u4e48\u8bf4\uff0c\u4ed6\u7684\u89c6\u89c9\u548c\u4e00\u822c\u4eba\u4e0d\u4e00\u6837\uff0c\u4ed6\u7684\u8116\u5b50\u5f2f\u7684\uff0c\u89d2\u5ea6\u4e0d\u4e00\u6837\u3002", "up": 510}, {"content": "\u6211\u5c31\u670d\u4e86\u90d1\u9f99\u4e86\uff0c\u600e\u4e48\u8d8a\u8e22\u8d8a\u5dee\uff0c\u8fde\u4e2au23\u90fd\u4e0d\u5982\u4e86\u3002\u8fd9\u90fd\u8fde\u7740\u51e0\u573a\u4e86\u3002\u771f\u5fc3\u770b\u4e0d\u61c2\u3002", "up": 329}, {"content": "\u4ee5\u524d\u603b\u611f\u89c9\u4e8e\u6c49\u8d85\u8ddf\u90d1\u9f99\u6709\u4e9b\u76f8\u4f3c\uff0c\u540e\u6765\u53d1\u73b0\u5728\u6709\u4e9b\u6bd4\u8d5b\u4e2d\uff0c\u4e8e\u6c49\u8d85\u66f4\u4e3a\u6210\u719f\u3002", "up": 158}], "2": [{"content": "Ctmd\u90d1\u9f99\uff0c\u65e9\u65e9\u4f20\u7403\u4e0d\u5c31\u5b8c\u4e8b\u4e86", "up": 1226}, {"content": "\u90d1\u9f99\u554a\u90d1\u9f99\uff01\u5230\u624b\u7684\u4e09\u5206\u88ab\u4f60\u641e\u7684\u53ea\u5269\u4e00\u5206\uff01[\u6342\u8138][\u6342\u8138][\u6342\u8138]", "up": 580}, {"content": "\u6709\u4eba\u5938\u5938\u5f20\u6587\u948a\u5417\uff0c\u6bd4\u90d1\u9f99\u597d\u592a\u591a[\u5fae\u7b11]", "up": 555}, {"content": "\u8d28\u7591\u90d1\u9f99\u7684\u4eba\uff0c\u6253\u8138\u4e86\u5427[\u54c8\u54c8][\u54c8\u54c8]\u5176\u5b9e\u6211\u4e5f\u9ed1\u8fc7\u90d1\u9f99[\u9707\u60ca][\u9707\u60ca]", "up": 190}, {"content": "\u770b\u5230\u8f93\u7403\u6211\u5c31\u76f4\u5954\u53cc\u65b9\u51fa\u573a\u9635\u5bb9\u800c\u53bb\uff0c\u60f3\u63ea\u51fa\u738b\u4e0a\u6e90\u548c\u90d1\u9f99\u6765\u80cc\u9505\uff0c\u7ed3\u679c\u65e0\u5904\u53d1\u6cc4[\u9707\u60ca][\u9707\u60ca][\u9707\u60ca][\u9707\u60ca]", "up": 174}], "3": [{"content": "\u4e00\u5207\u4ece\u90d1\u9f99\u7684\u5355\u5200\u8bf4\u8d77\uff01\uff01\uff01", "up": 1442}, {"content": "\u4e00\u5207\u90fd\u8981\u4ece\u90d1\u9f99\u8d2a\u5fc3\u8bf4\u8d77\uff0c\u672c\u6765\u53ef\u4ee5\u52a9\u653b\u4e8e\u6c49\u8d85\u7a7a\u95e8\u6740\u6b7b\u6bd4\u8d5b\uff0c\u504f\u504f\u81ea\u5df1\u8d2a\u5fc3\uff0c\u8fd9\u4e2a\u8f6c\u6298\u70b9\u8db3\u4ee5\u78e8\u706d\u6389\u4ed6\u4e4b\u524d\u6240\u6709\u7684\u529f\u52b3\uff0c\u7ed9\u4ed6\u62530\u5206\uff0c\u771f\u88ab\u6c14\u6b7b\u3002", "up": 970}, {"content": "\u90d1\u9f99\u5178\u578b\u7684\u65e0\u8111\u7403\u5458", "up": 891}, {"content": "\u4e0a\u4e00\u573a\u5bf9\u56fd\u5b89\u8981\u4e0d\u662f\u90d1\u9f99\u8fd9\u4e2a\u72ec\u903c\uff0c\u4e8e\u6c49\u8d85\u4e5f\u7edd\u6740\u4e86[\u6124\u6012]", "up": 729}, {"content": "\u90d1\u9f99\u738b\u4e0a\u6e90\u4e0d\u4e0a\uff0c\u6211\u7684\u5fc3\u60c5\u8fd8\u662f\u597d\u5f88\u591a\u7684", "up": 454}], "4": [{"content": "\u6211\u60f3\u8bf4\u90d1\u9f99\u4f60\u4e3a\u4e86\u60f3\u8bc1\u660e\u81ea\u5df1\uff0c\u4e0d\u4f20\u7ed9\u4e8e\u6c49\u8d85\u5bfc\u81f42:2\uff0c\u628a\u4e2a\u4eba\u7684\u5fc3\u601d\u653e\u5728\u4e86\u7b2c\u4e00\u4f4d\uff0c\u4f60\u60f3\u8bc1\u660e\u4e86\uff0c\u4f60\u8fd9\u6837\u628a\u56e2\u961f\u4e0d\u653e\u5728\u7b2c\u4e00\u4f4d\u7684\u8fd0\u52a8\u5458\u6211\u770b\u804c\u4e1a\u751f\u6daf\u4e5f\u5c31\u8fd9\u6837\u4e86\uff0c\u6ca1\u4e8b\u5c31\u505a\u5750\u51b7\u677f\u51f3\u5427\u3002\u60b2\u54c0\u3002", "up": 17}, {"content": "\u90d1\u9f99\u771f\u7684\u52aa\u529b\u6ca1\u5f97\u8bf4\uff0c\u7403\u5546\u771f\u7684\u4e0d\u6562\u606d\u7ef4\uff0c\u53e6\u5916\u5965\u53e4\u65af\u6258\u771f****\uff0c\u4e00\u78b0\u5c31\u5230\uff0c\u78b0\u5230\u8116\u5b50\u6342\u7740\u8111\u888b\u6253\u6eda\uff0c\u8d77\u6765\u8fd8\u63c9\u63c9\u8111\u888b\uff0c\u6162\u955c\u5934\u770b\u7684\u6e05\u6e05\u695a\u695a\u6ca1\u78b0\u5230\u3002\uff0c\u771f\u65e0\u8bed\u554a", "up": 12}, {"content": "\u53e4\u5fb7\u5229\uff0c\u90d1\u9f99\uff0c\u4e8e\u6c49\u8d85\uff0c\u4e09\u4eba\u8fd9\u573a\u53d1\u6325\u6709\u70b9\u6b20\u4f73\uff0c\u751a\u81f3\u62ff\u4e0d\u4f4f\u7403\uff0c\u5931\u8bef\u592a\u591a\u3002\u9ad8\u62c9\u7279\u56e0\u4e3a\u90dc\u6797\u7684\u4e24\u6b21\u6253\u98de\u7403\uff0c\u6709\u70b9\u4e0d\u6ee1\uff0c\u81ea\u5df1\u4e5f\u60f3\u5355\u5e72\uff0c\u540e\u6765\u81ea\u5df1\u4f53\u529b\u4e5f\u8ddf\u4e0d\u4e0a\u4e86\u3002\u674e\u5b66\u9e4f\u7684\u5de6\u8def\u8fdb\u653b\u8fd9\u573a\u88ab\u9650\u5236\u4f4f\u4e86\uff0c\u6709\u70b9\u6253\u4e0d\u5f00\u5c40\u9762\u3002\u90dc\u8001\u677f\u524d23\u5206\u949f\uff0c\u4eff\u4f5b\u56de\u5230\u4e86\u5341\u5e74\u524d\uff0c\u9093\u6db5\u6587\u4eca\u5929\u5c31\u662f\u4e03\u5e74\u524d\u7684\u5f205\uff0c\u52a9\u653b\uff0c\u4e0b\u5e95\u4f20\u4e2d\uff0c\u4fe8\u7136\u4e00\u4e2a\u53f3\u8fb9\u524d\u536b\u3002\u6768\u7acb\u745c\u771f\u7684\u8fd8\u9700\u8981\u78e8\u70bc\u4e00\u4e0b\uff0c\u90dc\u6797\uff0c\u4e8e\u6c49\u8d85\u8fd9\u4e9b\u6052\u5927\u56fd\u5b57\u53f7\u7684\u4e2d\u950b\u548c\u524d\u950b\u7ec8\u7a76\u8981\u8001\u53bb\uff0c\u8d76\u7d27\u591a\u5b66\u591a\u7ec3\u591a\u8bf7\u6559\u5440\uff0c\u672a\u6765\u6052\u5927\u7684\u5929\uff0c\u90fd\u5c5e\u4e8e\u4f60\u4eec\u554a\u3002\u516b\u5e74\u6052\u8ff7\u4e00\u679a\u5ba2\u89c2\u8bc4\u7403\uff0c\u4e0d\u59a5\u4e4b\u5904\uff0c\u671b\u6d77\u6db5\u3002", "up": 9}, {"content": "\u8fd9\u8349\u576a\u8fd8\u4e0d\u5982\u6211\u5468\u672b\u8e22\u7403\u516b\u767e\u5305\u7684\u5927\u573a\uff0c\u8fd8\u6709\u90d1\u9f99\u8116\u5b50\u8d8a\u6765\u8d8a\u6b6a\u4e86\uff0c\u611f\u89c9\u54ea\u5929\u5934\u5c31\u8981\u6389\u4e0b\u6765\u4e86", "up": 7}, {"content": "\u90d1\u9f99\u4e0a\u53bb\u4ee5\u540e\uff0c\u611f\u89c9\u5c11\u6253\u4e00\u4eba\uff0c\u8fd8\u9001\u5931\u8bef\uff0c\u8fd8\u4e0d\u5982\u65e9\u70b9\u4e0a\u6768\u7acb\u745c\u548c\u949f\u4e49\u6d69", "up": 5}], "5": [{"content": "\u90d1\u9f99\u4e0a\u53bb\u5f7b\u5e95\u6fc0\u6d3b\u4e86\u8c2d\u9f99\uff01", "up": 725}, {"content": "\u5e78\u597d\u9192\u4e86\uff0c\u611f\u8c22\u5e7f\u5dde\u5854\uff0c\u8fd8\u6709\u90d1\u9f99\u8fd8\u662f\u4e0d\u8981\u4e0a\u4e86\uff0c\u770b\u4ed6\u5e26\u7403\u611f\u89c9\u5c31\u8981\u4e22\uff0c\u6052\u5927\u52a0\u6cb9\uff0c\u516b\u8fde\u51a0\u4ecd\u662f\u552f\u4e00\u76ee\u6807\u3002", "up": 608}, {"content": "\u4e00\u5207\u8981\u4ece\u90d1\u9f99\u90a3\u4e2a\u5355\u5200\u8bf4\u8d77\u2026\u2026", "up": 293}, {"content": "\u53ef\u80fd\u6211\u4e0d\u61c2\u7403\uff0c\u611f\u89c9\u949f\u4e49\u6d69\u90fd\u8981\u6bd4\u90d1\u9f99\u5f3a\u4e00\u4e2a\u6863\u6b21\uff0c\u4f20\u7403\u4f20\u5931\uff0c\u5e26\u7403\u5e26\u4e22\uff0c\u5509\u2026\u2026", "up": 273}, {"content": "\u4ece\u90d1\u9f99\u90a3\u7403\u5f00\u59cb\uff0c\u6211\u5c31\u9884\u611f\u5230\u5f62\u52bf\u4e0d\u5999\u4e86\u3002\u8fd9\u4e2a\u548c\u8e22\u6b66\u91cc\u5357\u8054\u6700\u540e\u9ad8\u62c9\u7279\u6d6a\u8d39\u673a\u4f1a\uff0c\u88ab\u7edd\u5e73\u6709\u5f97\u4e00\u62fc\u4e86\uff01", "up": 259}], "6": [{"content": "\u603b\u7ed31\uff1a\u7b2c\u4e00\u5faa\u73af\u5343\u4e07\u4e0d\u8981\u8d62\u6052\u5927\uff0c\u6052\u5927\u4f1a\u4e09\u500d\u56de\u62a5\uff012\uff1a\u90d1\u9f99\u7b2c2\u4e2a\u8fdb\u7403\u56fa\u7136\u7cbe\u5f69\uff0c\u91cd\u70b9\u5728\u4e8b\u524d\u4e09\u4e2a\u620f\u7cbe\u7684\u6f14\u6280\uff0c\u5165\u6728\u4e09\u5206\uff013:\u5723\u66fe\u8bda\u552f\u4e00\u5f31\u9879\u662f\u6251\u70b9\uff0c\u6700\u8fd1\u8fde\u73af\u6551\u70b9\uff0c\u5f00\u6302\uff014\uff1a\u8fdf\u6765\u7684\u795d\u798f\uff0c\u5404\u4f4d\u54e5\u4eec\u513f\uff0c\u513f\u7ae5\u8282\u5feb\u4e50\uff01\ud83d\ude01\ud83d\ude01", "up": 295}, {"content": "\u603b\u7ed31\uff1a\u7b2c\u4e00\u5faa\u73af\u5343\u4e07\u4e0d\u8981\u8d62\u6052\u5927\uff0c\u6052\u5927\u4f1a\u4e09\u500d\u56de\u62a5\uff012\uff1a\u90d1\u9f99\u7b2c2\u4e2a\u8fdb\u7403\u56fa\u7136\u7cbe\u5f69\uff0c\u91cd\u70b9\u5728\u4e8b\u524d\u4e09\u4e2a\u620f\u7cbe\u7684\u6f14\u6280\uff0c\u5165\u6728\u4e09\u5206\uff013:\u5723\u66fe\u8bda\u552f\u4e00\u5f31\u9879\u662f\u6251\u70b9\uff0c\u6700\u8fd1\u8fde\u73af\u6551\u70b9\uff0c\u5f00\u6302\uff014\uff1a\u8fdf\u6765\u7684\u795d\u798f\uff0c\u5404\u4f4d\u54e5\u4eec\u513f\uff0c\u513f\u7ae5\u8282\u5feb\u4e50\uff01\ud83d\ude01\ud83d\ude01", "up": 111}, {"content": "\u518d\u4e0a\u90d1\u9f99\uff0c\u57fa\u672c\u544a\u522b\u4e89\u51a0\u3002", "up": 12}, {"content": "\u6052\u5927\u4eca\u65e5\u5168\u961f\u5f00\u6302\u4e86\uff0c\u90d1\u9f99\u4e24\u7403\uff0c\u66fe\u8bda\u6251\u70b9....[\u51fb\u638c][\u51fb\u638c][\u51fb\u638c]", "up": 8}, {"content": "\u603b\u7ed31\uff1a\u7b2c\u4e00\u5faa\u73af\u5343\u4e07\u4e0d\u8981\u8d62\u6052\u5927\uff0c\u6052\u5927\u4f1a\u4e09\u500d\u56de\u62a5\uff012\uff1a\u90d1\u9f99\u7b2c2\u4e2a\u8fdb\u7403\u56fa\u7136\u7cbe\u5f69\uff0c\u91cd\u70b9\u5728\u4e8b\u524d\u4e09\u4e2a\u620f\u7cbe\u7684\u6f14\u6280\uff0c\u5165\u6728\u4e09\u5206\uff013:\u5723\u66fe\u8bda\u552f\u4e00\u5f31\u9879\u662f\u6251\u70b9\uff0c\u6700\u8fd1\u8fde\u73af\u6551\u70b9\uff0c\u5f00\u6302\uff014\uff1a\u8fdf\u6765\u7684\u795d\u798f\uff0c\u5404\u4f4d\u54e5\u4eec\u513f\uff0c\u513f\u7ae5\u8282\u5feb\u4e50\uff01\ud83d\ude01\ud83d\ude01", "up": 2}], "7": [{"content": "\u90d1\u9f99SB\u561b\uff01\u90a3\u4e2a\u7403\u6a2a\u4f20\u5c313:0\u4e86\uff0c\u8fd8\u72ec\uff0c****\uff0c\u4eca\u5e74\u6052\u5927\u6ca1\u620f\u4e86\uff0c\u4e0a\u6e2f\u662f\u51a0\u519b\u4e86", "up": 956}, {"content": "\u5bf9\u90d1\u9f99\u5370\u8c61\u6700\u6df1\u7684\u662f\uff0c\u5f53\u5e74\u5728\u91cc\u76ae\u624b\u4e0b\u4e0d\u53d7\u91cd\u7528\uff0c\u91cc\u76ae\u8d70\u540e\u5361\u5e05\u4e0a\u6765\u5c31\u7ed9\u90d1\u9f99\u673a\u4f1a\uff0c\u800c\u4ed6\u4e5f\u6ca1\u8f9c\u8d1f\u5361\u5e05\u7684\u7528\u5fc3\uff0c\u5728\u67d0\u4e00\u573a\u6bd4\u8d5b\u4e2d\u6253\u8fdb\u4e00\u7403\uff0c\u8fdb\u7403\u540e\u4ed6\u7528\u624b\u6307\u5411\u5361\u5e05\u5e76\u5f80\u4ed6\u98de\u5954\u8fc7\u53bb\uff0c\u60f3\u60f3\u90fd\u6709\u70b9\u611f\u52a8", "up": 31}, {"content": "\u4ec5\u4e2a\u4eba\u89c2\u70b9\uff0c\u9c81\u80fd\uff1a\u4e2d\u524d\u573a\u6709\u84bf\u4fca\u95f5\u3001\u5434\u5174\u6db5\uff0c\u5218\u519b\u5e05\uff0c\u5c0f\u91d1\uff0c\u5854\u5c14\u5fb7\u5229\u3002 \u6052\u5927\uff1a\u90d1\u667a\uff0c\u4fdd\u5229\u5c3c\u5965\uff0c\u90dc\u6797\uff0c\u5854\u91cc\u65af\u5361\uff0c\u66ff\u8865\uff0c\u6c49\u8d85\uff0c\u9ec4\u535a\u6587\uff0c\u90d1\u9f99\u65e0\u8bba\u5b9e\u529b\u8fd8\u662f\u5de8\u661f\u6c14\u8d28\uff0c\u65e0\u8bba\u662f\u5728\u8054\u8d5b\u8fd8\u662f\u5728\u4e9a\u51a0\u8d5b\u573a\u6052\u5927\u7684\u4e2d\u524d\u957f\u53ef\u4ee5\u662f\u9876\u7ea7\u914d\u7f6e\uff08\u6ca1\u6709\u4e4b\u4e00\uff09\u4f46\u662f\u9c81\u80fd\u4eca\u5e74\u5df2\u7ecf\u6709\u5f88\u5927\u7684\u7a81\u7834\uff0c\u5c06\u58eb\u9f50\u5fc3\uff0c\u6709\u5929\u65f6\uff0c\u6709\u4eba\u548c\uff0c\u4e0d\u5f97\u4e0d\u63d0\u7684\u672c\u8d5b\u5b63\u6709\u4e00\u90e8\u5206\u8fd0\u6c14\u6210\u5206\uff0c\u76ee\u524d\u4ee5\u8fd9\u4e2a\u9635\u5bb9\u8e22\u6210\u8fd9\u6837\u5df2\u7ecf\u5f88\u5f3a\u5927\u4e86\u3001\u4e0e\u4e0a\u6e2f\u6bd4\uff0c\u5916\u63f4\u5dee\u8ddd\u5927\uff0c\u4e0e\u5317\u4eac\u6bd4\u6574\u4f53\u53d1\u6325\u7684\u786e\u6b20\u7f3a\u4e00\u70b9\uff0c\u4f46\u662f\u8981\u662f\u4e89\u51a0\u7684\u8bdd\u5c31\u662f\u6709\u4e9b\u8de8\u6d77\u53e3\u4e86\uff0c\u771f\u4e0d\u5207\u5b9e\u9645\u3002\u6052\u5927\u76ee\u524d\u6218\u7ee9\u6392\u540d\u786e\u5b9e\u662f\u4e0a\u534a\u8d5b\u7a0b\u81ea\u5df1\u9635\u5bb9\u786e\u5b9e\u6bd4\u5f80\u5e74\u5f31\u4e86\uff0c\u7edf\u6cbb\u529b\u4e0b\u964d\u4e24\u4e2a\u5c42\u9762\uff0c\u8981\u662f\u6052\u5927\u4ee5\u73b0\u5728\u9635\u5bb9\u4ece\u8d5b\u5b63\u521d\u671f\u5f00\u59cb\uff0c\u90a3\u5176\u4ed6\u7403\u961f20\u8f6e\u4ee5\u540e\u5c31\u5f97\u8003\u8651\uff0c\u4e9a\u519b\u4ee5\u53ca\u4e9a\u51a0\u8d44\u683c\u8d5b\u4e86\uff0c\u671f\u5f85\u4eca\u5e74\u7ade\u4e89\u6fc0\u70c8\uff0c\u771f\u5fc3\u5e0c\u671b\u6052\u5927\u8fd8\u662f\u51a0\u519b\ud83c\udfc6\u4ee3\u8868\u7956\u56fd\u518d\u6b21\u51fa\u73b0\u5728\u4e16\u4ff1\u676f\u821e\u53f0\u4e0a^_^^_^(7\u5e74\u9c81\u80fd\u7403\u8ff7\uff0c8\u5e74\u7684\u6052\u5927\u8ff7\u7559\uff01)", "up": 18}, {"content": "\u592a\u6fc0\u6c14\u4e86\uff0c\u4e9a\u51a0\u6253\u6cf0\u56fd\u7684\u65f6\u5019\u9ad8\u62c9\u7279\u662f\u8fd9\u6837\uff0c\u4eca\u5929\u665a\u4e0a\u90d1\u9f99\u53c8\u662f\u8fd9\u6837\uff0c\u5361\u7eb3\u74e6\u7f57\u5403\u4e86\u4e24\u6b21\u8fd9\u6837\u7684\u4e8f\uff0c\u8fd8\u6709\u7b2c\u4e09\u6b21\u5417\uff1f\u5f53\u90d1\u9f99\u5355\u5200\u4e0d\u7a7f\uff0c\u8981\u81ea\u5df1\u6d6a\u5c04\u7684\u65f6\u5019\u6211\u5c31\u77e5\u9053\u51fa\u4e8b\u4e86\uff0c\u679c\u7136\u4e0d\u8d1f\u6240\u671b\uff01\u90d1\u9f99\u8fd9\u4eba\u5c31\u91cc\u76ae\u5728\u7684\u65f6\u5019\u4eae\u8fc7\u4e00\u6bb5\u65f6\u95f4\uff0c\u8fd9\u4e00\u573a\u8e22\u7684\u4ec0\u4e48\u73a9\u610f\uff0c\u4f20\u7403\u5931\u8bef\uff0c\u65e0\u8111\u64cd\u4f5c\uff0c\u5361\u7eb3\u74e6\u7f57\u8fd8\u4e0d\u628a\u5b83\u62ff\u4e0b\uff0c\u6211\u4e5f\u9189\u4e86\uff01", "up": 14}, {"content": "\u4eca\u5929\u7684\u97e9\u56fd\u88c1\u5224\u54e8\u5b50\u5f88\u677e\uff0c\u5728\u5e7f\u5dde\u5854\u7b2c\u4e8c\u4e2a\u8fdb\u7403\u4e4b\u524d\uff0c\u5f88\u591a\u9c81\u80fd\u7684\u72af\u89c4\u90fd\u6ca1\u5439\u300242\u5206\u949f\u5e7f\u5dde\u5854\u7684\u8fdb\u7403\u524d\uff0c\u674e\u5b66\u9e4f\u786e\u5b9e\u662f\u624b\u90e8\u6709\u52a8\u4f5c\u4e86\uff0c\u8fd9\u4e5f\u662f\u4e2d\u56fd\u7403\u5458\u7684\u6bdb\u75c5\u3002\u5728\u90a3\u4e4b\u524d\uff0c\u9c81\u80fd\u7684\u5f88\u591a\u72af\u89c4\u751a\u81f3\u8be5\u62ff\u724c\u7684\u90fd\u6ca1\u4e8b\u3002\u88c1\u5224\u770bVAR\u65f6\uff0c\u611f\u89c9\u8981\u5224\u6052\u5927\u72af\u89c4\uff0c\u8fdb\u7403\u8db3\u7403\uff0c\u4f46\u7ed3\u679c\u663e\u793a\u8fdb\u7403\u6709\u6548\uff0c\u771f\u7684\u6709\u70b9\u610f\u5916\u3002\u5168\u573a\u6bd4\u8d5b\uff0c\u9664\u4e86\u90a3\u4e2a\u63d2\u66f2\uff0c\u5176\u4ed6\u65f6\u95f4\uff0c\u6052\u5927\u7684\u6280\u6218\u672f\uff0c\u7279\u522b\u662f\u5b9d\u5854\u4e24\u4eba\u7684\u53d1\u6325\u771f\u7684\u6ca1\u5f97\u8bf4\u3002\u9c81\u80fd\u7684\u4f69\u83b1\u505c\u7403\u505a\u7403\u4e5f\u4e0d\u9519\uff0c\u4e0d\u8fc7\u6ca1\u4e2d\u573a\u7684\u6709\u6548\u8f93\u9001\uff0c\u673a\u4f1a\u4e0d\u591a\uff0c\u80fd\u8fdb\u7684\u90a3\u7403\u662f\u610f\u5927\u5229\u524d\u950b\u7684\u6807\u5fd7\u6027\u80fd\u529b\u4f53\u73b0\u3002\u90d1\u667a\u4e0b\u573a\u505c\u8d5b\uff0c\u9ec4\u535a\u6587\u53ef\u4ee5\u9876\u4e0a\uff0c\u6709\u5df4\u897f\u4e09\u53c9\u621f\u5728\uff0c\u4f30\u8ba1\u95ee\u9898\u4e0d\u5927\u3002\u4f46\u66ff\u8865\u5e2d\u7684\u5ed6\u529b\u751f\uff0c\u90d1\u9f99\u7b49\u6d41\u4f30\u8ba1\u51c9\u4e86\uff0c\u7279\u522b\u662f\u963f\u5170\uff0c\u73b0\u5728\u8fd9\u60c5\u51b5\u4e0b\uff0c\u53ea\u80fd\u5e72\u5750\u3002\u5e0c\u671b\u6052\u5927\u518d\u63a5\u518d\u5389\uff0c\u518d\u8d62\u4e09\u573a\uff0c\u4e89\u51a0\u683c\u5c40\u57fa\u672c\u660e\u6717\u4e86\u3002\u51a0\u519b\u7ec8\u5f52\u8fd9\u91cc[\u52a9\u5a01][\u52a9\u5a01]", "up": 14}]};
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
