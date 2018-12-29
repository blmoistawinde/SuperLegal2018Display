var data = {"person_name": "\u738b\u5927\u96f7", "nicknames": "\u738b\u5927\u96f7\u3001\u5927\u96f7", "aspects": {"\u52a9\u653b": 0.5545373237028302, "\u6bd4\u8d5b": 0.8016013368191531, "\u7403\u8ff7": 0.8091251437199072, "\u7403\u5458": 0.5727831790604837, "\u8d5b\u5b63": 0.8813457422181419, "\u8fdb\u7403": 0.7497676629451648, "\u8fdb\u653b": 0.9199983225599554, "\u56fd\u5bb6\u961f": 0.5328056991769483, "\u4e0b\u534a\u573a": 0.5774659796641395}, "overall_heat": 901.0, "overall_polar": 1.618, "name": "94", "nationality": "\u4e2d\u56fd", "position": "\u5b88\u95e8\u5458", "goal": "0", "assist": "0", "team_name": "\u5c71\u4e1c\u9c81\u80fd\u6cf0\u5c71", "name_en": "Wang Dalei", "age": "29", "height": "185", "weight": "75"};
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
var topic_keywords = {"0": [{"name": "\u5927\u96f7", "value": 0.07203785152605624}, {"name": "\u738b\u5927\u96f7", "value": 0.022057843529254967}, {"name": "\uff01", "value": 0.02139144342263095}, {"name": "\u903c", "value": 0.0193922431027589}, {"name": "\u9c81\u80fd", "value": 0.0193922431027589}, {"name": "\u725b", "value": 0.0193922431027589}, {"name": "\u5389\u5bb3", "value": 0.01672664267626283}, {"name": "\u4e00\u4e2a", "value": 0.013394642143142744}, {"name": "\u6052\u5927", "value": 0.010062641610022658}, {"name": "\u6ed1\u7a3d", "value": 0.010062641610022658}, {"name": "\u88c5", "value": 0.010062641610022658}, {"name": "\u95e8\u5c06", "value": 0.00939624150339864}, {"name": "\u88c5\u903c", "value": 0.00739704118352659}, {"name": "\u771f\u7684", "value": 0.006730641076902573}, {"name": "\u6211\u9c81", "value": 0.006730641076902573}, {"name": "\u786e\u5b9e", "value": 0.006064240970278556}, {"name": "B", "value": 0.006064240970278556}, {"name": "\u8fd9\u573a", "value": 0.005397840863654539}, {"name": "\u8d1f\u8d23", "value": 0.005397840863654539}, {"name": "\u4e3b\u8981", "value": 0.005397840863654539}, {"name": "\u5b9e\u529b", "value": 0.005397840863654539}, {"name": "\u7403", "value": 0.0047314407570305216}, {"name": "\u592a", "value": 0.0047314407570305216}, {"name": "\u6bd4\u8d5b", "value": 0.0047314407570305216}, {"name": "\u52a0\u6cb9", "value": 0.0040650406504065045}, {"name": "\u56fd\u5b89", "value": 0.003398640543782487}, {"name": "b", "value": 0.003398640543782487}, {"name": "\u5382", "value": 0.003398640543782487}, {"name": "\u4e22", "value": 0.003398640543782487}, {"name": "\u5e0c\u671b", "value": 0.003398640543782487}], "1": [{"name": "\uff01", "value": 0.10889203308663474}, {"name": "\u5927\u96f7", "value": 0.05828254244666957}, {"name": "\u738b\u5927\u96f7", "value": 0.055561602089682194}, {"name": "\u903c", "value": 0.027263822377013497}, {"name": "\u725b", "value": 0.021821941663038746}, {"name": "\uff1f", "value": 0.020189377448846323}, {"name": "\u5439", "value": 0.019101001306051375}, {"name": "\u624b\u629b\u7403", "value": 0.014203308663474098}, {"name": "\u95e8\u5c06", "value": 0.009849804092294297}, {"name": "\u6700\u540e", "value": 0.007128863735306922}, {"name": "\u4e00\u6ce2", "value": 0.007128863735306922}, {"name": "\u771f", "value": 0.006584675663909447}, {"name": "\u9c81\u80fd", "value": 0.006584675663909447}, {"name": "\u88c5\u903c", "value": 0.006040487592511972}, {"name": "\u4eba", "value": 0.006040487592511972}, {"name": "\u52a9\u653b", "value": 0.006040487592511972}, {"name": "\u8d8a\u4f4d", "value": 0.0054962995211144975}, {"name": "\u88c1\u5224", "value": 0.004952111449717023}, {"name": "\u4e00\u4e2a", "value": 0.004952111449717023}, {"name": "\u771f\u7684", "value": 0.004407923378319547}, {"name": "\u88c5", "value": 0.004407923378319547}, {"name": "\u4eca\u5929", "value": 0.0038637353069220725}, {"name": "\u7ef4\u5947", "value": 0.0038637353069220725}, {"name": "\u70b9", "value": 0.0038637353069220725}, {"name": "\u597d", "value": 0.0038637353069220725}, {"name": "\u4e16\u754c\u7ea7", "value": 0.0038637353069220725}, {"name": "\u4f0a\u5c14", "value": 0.0038637353069220725}, {"name": "\u4efb\u610f\u7403", "value": 0.003319547235524597}, {"name": "\u62c9", "value": 0.003319547235524597}, {"name": "\u53ea\u670d", "value": 0.003319547235524597}], "2": [{"name": "\u738b\u5927\u96f7", "value": 0.05108508809626128}, {"name": "\u5927\u96f7", "value": 0.03819295229909755}, {"name": "\u9c81\u80fd", "value": 0.03443274602492479}, {"name": "\uff01", "value": 0.03013536742587022}, {"name": "\u7b11", "value": 0.018317576278470134}, {"name": "\u56fd\u5b89", "value": 0.017780403953588313}, {"name": "\u54ed", "value": 0.017780403953588313}, {"name": "\u8fd9\u573a", "value": 0.014020197679415558}, {"name": "\u6bd4\u8d5b", "value": 0.012945853029651913}, {"name": "\u6700\u4f73", "value": 0.01187150837988827}, {"name": "\u6052\u5927", "value": 0.01187150837988827}, {"name": "\u4eca\u5929", "value": 0.010259991405242802}, {"name": "\u7403\u8ff7", "value": 0.00972281908036098}, {"name": "\u7403", "value": 0.008111302105715514}, {"name": "\u7cbe\u5f69", "value": 0.00703695745595187}, {"name": "\u8e22", "value": 0.006499785131070047}, {"name": "\u8868\u73b0", "value": 0.006499785131070047}, {"name": "\u672c\u573a", "value": 0.0059626128061882255}, {"name": "\u5168\u573a", "value": 0.0059626128061882255}, {"name": "\u597d", "value": 0.005425440481306403}, {"name": "\ud83d\udc4d", "value": 0.005425440481306403}, {"name": "\u771f", "value": 0.004888268156424581}, {"name": "\u53d1\u6325", "value": 0.004888268156424581}, {"name": "\uff1f", "value": 0.004351095831542759}, {"name": "\u673a\u4f1a", "value": 0.004351095831542759}, {"name": "\u6253", "value": 0.004351095831542759}, {"name": "\u4e00\u4e2a", "value": 0.004351095831542759}, {"name": "\u52a0\u6cb9", "value": 0.004351095831542759}, {"name": "\u4eca\u665a", "value": 0.004351095831542759}, {"name": "\u795e\u52c7", "value": 0.0038139235066609366}], "3": [{"name": "\u5927\u96f7", "value": 0.04382750845546787}, {"name": "\uff01", "value": 0.015642615558060877}, {"name": "\u8868\u73b0", "value": 0.01282412626832018}, {"name": "\u611f\u89c9", "value": 0.01141488162344983}, {"name": "\u9c81\u80fd", "value": 0.007187147688838782}, {"name": "\u6211\u9c81", "value": 0.005777903043968432}, {"name": "\u738b\u5927\u96f7", "value": 0.005777903043968432}, {"name": "\u7403\u5458", "value": 0.005777903043968432}, {"name": "\u8fdb", "value": 0.005777903043968432}, {"name": "\u5c31\u8981", "value": 0.004368658399098084}, {"name": "\u518d", "value": 0.004368658399098084}, {"name": "\uff1f", "value": 0.004368658399098084}, {"name": "\u4f30\u8ba1", "value": 0.004368658399098084}, {"name": "\u6052\u5927", "value": 0.004368658399098084}, {"name": "\u6bd4\u8d5b", "value": 0.004368658399098084}, {"name": "\u6253", "value": 0.004368658399098084}, {"name": "\u4e00\u573a", "value": 0.004368658399098084}, {"name": "\u5e94\u8be5", "value": 0.004368658399098084}, {"name": "\u543c", "value": 0.004368658399098084}, {"name": "\u540e\u9632", "value": 0.004368658399098084}, {"name": "\u8d5b\u540e", "value": 0.002959413754227734}, {"name": "\u4ee5\u540e", "value": 0.002959413754227734}, {"name": "\u4eba", "value": 0.002959413754227734}, {"name": "\u4e9a\u6d32\u676f", "value": 0.002959413754227734}, {"name": "\u513f\u5b50", "value": 0.002959413754227734}, {"name": "\u4ee5\u4e3a", "value": 0.002959413754227734}, {"name": "\u7f57", "value": 0.002959413754227734}, {"name": "\u65e0\u654c", "value": 0.002959413754227734}, {"name": "\u8282\u594f", "value": 0.002959413754227734}, {"name": "\u51a0\u519b", "value": 0.002959413754227734}], "4": [{"name": "\u5927\u96f7", "value": 0.02069517493711411}, {"name": "\u9c81\u80fd", "value": 0.019551795106334327}, {"name": "\u7403\u5458", "value": 0.012691516121655613}, {"name": "\u4e00\u4e2a", "value": 0.011548136290875827}, {"name": "\u738b\u5927\u96f7", "value": 0.010404756460096044}, {"name": "\u5854\u795e", "value": 0.008117996798536474}, {"name": "\u5439", "value": 0.008117996798536474}, {"name": "\u6bd4\u8d5b", "value": 0.0069746169677566885}, {"name": "\u4f69\u83b1", "value": 0.0069746169677566885}, {"name": "\uff1f", "value": 0.0069746169677566885}, {"name": "\u4e00\u4e0b", "value": 0.005831237136976903}, {"name": "\u5916\u63f4", "value": 0.005831237136976903}, {"name": "\u7403\u961f", "value": 0.005831237136976903}, {"name": "\u597d", "value": 0.005831237136976903}, {"name": "\u5173\u6ce8", "value": 0.004687857306197118}, {"name": "\u5e0c\u671b", "value": 0.004687857306197118}, {"name": "\u59da\u5747\u665f", "value": 0.004687857306197118}, {"name": "\u91d1\u5b50", "value": 0.004687857306197118}, {"name": "\u771f\u7684", "value": 0.004687857306197118}, {"name": "\u90d1\u94ee", "value": 0.004687857306197118}, {"name": "\u84bf\u4fca\u95f5", "value": 0.004687857306197118}, {"name": "\u4e09\u54e5", "value": 0.004687857306197118}, {"name": "\u5356", "value": 0.004687857306197118}, {"name": "\u9ed1", "value": 0.004687857306197118}, {"name": "\u524d\u573a", "value": 0.004687857306197118}, {"name": "\uff01", "value": 0.004687857306197118}, {"name": "\u8fdb\u653b", "value": 0.003544477475417334}, {"name": "\u5409\u5c14", "value": 0.003544477475417334}, {"name": "\u5fae\u535a", "value": 0.003544477475417334}, {"name": "\u5d14\u9e4f", "value": 0.003544477475417334}], "5": [{"name": "\uff01", "value": 0.05329915878023134}, {"name": "\u5927\u96f7", "value": 0.04606992639327024}, {"name": "\u738b\u5927\u96f7", "value": 0.028325446898002107}, {"name": "\u52a9\u653b", "value": 0.022410620399579393}, {"name": "\u4f69\u83b1", "value": 0.009923764458464775}, {"name": "\u8fdb\u7403", "value": 0.009923764458464775}, {"name": "\u7edd\u6740", "value": 0.008609358569926394}, {"name": "\u9c81\u80fd", "value": 0.007294952681388013}, {"name": "\u8d5b\u5b63", "value": 0.006637749737118823}, {"name": "\u95e8\u5c06", "value": 0.006637749737118823}, {"name": "\u597d", "value": 0.006637749737118823}, {"name": "\u771f", "value": 0.005980546792849632}, {"name": "\u4e00\u6b21", "value": 0.0053233438485804415}, {"name": "\u56fd\u5b89", "value": 0.0053233438485804415}, {"name": "\u6bd4\u8d5b", "value": 0.0053233438485804415}, {"name": "\u8e22", "value": 0.0053233438485804415}, {"name": "\u4e00\u573a", "value": 0.0053233438485804415}, {"name": "\u53f7", "value": 0.004666140904311251}, {"name": "\u8db3\u534f\u676f", "value": 0.004666140904311251}, {"name": "\u6743\u5065", "value": 0.004666140904311251}, {"name": "\u88c1\u5224", "value": 0.004008937960042061}, {"name": "\u5237", "value": 0.004008937960042061}, {"name": "\u82cf\u5b81", "value": 0.004008937960042061}, {"name": "\u6700\u540e", "value": 0.004008937960042061}, {"name": "\u5e74", "value": 0.004008937960042061}, {"name": "\u5389\u5bb3", "value": 0.004008937960042061}, {"name": "\u8bfb\u79d2", "value": 0.004008937960042061}, {"name": "14", "value": 0.004008937960042061}, {"name": "11", "value": 0.004008937960042061}, {"name": "\u76f4\u63a5", "value": 0.0033517350157728706}], "6": [{"name": "\u5927\u96f7", "value": 0.056541507773540625}, {"name": "\u738b\u5927\u96f7", "value": 0.03160750953358757}, {"name": "\uff01", "value": 0.027940745086535643}, {"name": "\uff1f", "value": 0.0206072161924318}, {"name": "\u6342", "value": 0.015473745966559111}, {"name": "\u8138", "value": 0.015473745966559111}, {"name": "\u52a9\u653b", "value": 0.010340275740686418}, {"name": "\ud83d\ude02", "value": 0.009606922851276034}, {"name": "\u60f3", "value": 0.008140217072455266}, {"name": "\u592a", "value": 0.007406864183044881}, {"name": "\u6253", "value": 0.007406864183044881}, {"name": "\u70b9\u7403", "value": 0.007406864183044881}, {"name": "\u95e8\u5c06", "value": 0.006673511293634497}, {"name": "\u5c0f", "value": 0.006673511293634497}, {"name": "\u53d1\u6325", "value": 0.006673511293634497}, {"name": "\u9c81\u80fd", "value": 0.005940158404224113}, {"name": "\u4f30\u8ba1", "value": 0.005940158404224113}, {"name": "\u6700\u540e", "value": 0.005206805514813728}, {"name": "\u6709\u70b9", "value": 0.005206805514813728}, {"name": "\u5439", "value": 0.005206805514813728}, {"name": "\u6251", "value": 0.005206805514813728}, {"name": "\u7403", "value": 0.005206805514813728}, {"name": "\u4e0a\u6e2f", "value": 0.005206805514813728}, {"name": "\u7a33", "value": 0.005206805514813728}, {"name": "\u5e94\u8be5", "value": 0.005206805514813728}, {"name": "\u97e9\u9555\u6cfd", "value": 0.005206805514813728}, {"name": "\u5ba2\u573a", "value": 0.004473452625403344}, {"name": "\u8fdb", "value": 0.004473452625403344}, {"name": "\u4e00\u4e2a", "value": 0.004473452625403344}, {"name": "\u4e00\u4e0b", "value": 0.00374009973599296}], "7": [{"name": "\u5927\u96f7", "value": 0.0424150005647803}, {"name": "\u9c81\u80fd", "value": 0.031684174855981025}, {"name": "\uff01", "value": 0.026036371851349827}, {"name": "\u738b\u5927\u96f7", "value": 0.026036371851349827}, {"name": "\u903c", "value": 0.01191686433977183}, {"name": "\u6211\u9c81", "value": 0.009657743137919351}, {"name": "\u56fd\u5b89", "value": 0.009657743137919351}, {"name": "\u725b", "value": 0.009657743137919351}, {"name": "\u8fd9\u573a", "value": 0.00909296283745623}, {"name": "\u8fdb\u653b", "value": 0.00909296283745623}, {"name": "\u9632\u5b88", "value": 0.00852818253699311}, {"name": "\u8e22", "value": 0.00796340223652999}, {"name": "\u4e0d\u9519", "value": 0.00739862193606687}, {"name": "\u597d", "value": 0.00739862193606687}, {"name": "\uff1f", "value": 0.00739862193606687}, {"name": "\u771f\u7684", "value": 0.006269061335140631}, {"name": "\u5439", "value": 0.006269061335140631}, {"name": "\u4e00\u5206", "value": 0.006269061335140631}, {"name": "\u6700\u540e", "value": 0.00570428103467751}, {"name": "\u786e\u5b9e", "value": 0.00570428103467751}, {"name": "\u7403\u5458", "value": 0.00570428103467751}, {"name": "\u6052\u5927", "value": 0.00570428103467751}, {"name": "\u518d\u89c1", "value": 0.005139500734214391}, {"name": "\u4f69\u83b1", "value": 0.005139500734214391}, {"name": "\u771f\u662f", "value": 0.005139500734214391}, {"name": "\u4eca\u5929", "value": 0.004574720433751271}, {"name": "\u5df2\u7ecf", "value": 0.004574720433751271}, {"name": "\u7403", "value": 0.004574720433751271}, {"name": "\u5409\u5c14", "value": 0.0040099401332881505}, {"name": "\u8d5b\u5b63", "value": 0.0040099401332881505}], "8": [{"name": "\u5927\u96f7", "value": 0.021611578329747704}, {"name": "\u9c81\u80fd", "value": 0.01867787991394485}, {"name": "\u738b\u5927\u96f7", "value": 0.016722080970076277}, {"name": "\u56fd\u5bb6\u961f", "value": 0.010854684138470565}, {"name": "\uff01", "value": 0.008898885194601995}, {"name": "\u7403\u5458", "value": 0.008898885194601995}, {"name": "\u8d5b\u5b63", "value": 0.006943086250733424}, {"name": "\uff1f", "value": 0.006943086250733424}, {"name": "\u56fd\u5b89", "value": 0.006943086250733424}, {"name": "\u9752\u8bad", "value": 0.006943086250733424}, {"name": "\u76ae", "value": 0.005965186778799139}, {"name": "\u597d", "value": 0.005965186778799139}, {"name": "\u7533\u82b1", "value": 0.005965186778799139}, {"name": "\u91cc", "value": 0.005965186778799139}, {"name": "\u8e22", "value": 0.005965186778799139}, {"name": "\u95e8\u5c06", "value": 0.004987287306864854}, {"name": "\u4eba", "value": 0.004987287306864854}, {"name": "\u60b2\u5267", "value": 0.004987287306864854}, {"name": "\u53d1\u6325", "value": 0.004987287306864854}, {"name": "\u77e5\u9053", "value": 0.004987287306864854}, {"name": "\u5f15\u8fdb", "value": 0.004987287306864854}, {"name": "\u5173\u7cfb", "value": 0.004987287306864854}, {"name": "\u5916\u63f4", "value": 0.004009387834930569}, {"name": "\u6253", "value": 0.004009387834930569}, {"name": "\u91d1\u656c\u9053", "value": 0.004009387834930569}, {"name": "\u56fd\u5185", "value": 0.004009387834930569}, {"name": "\u51e0\u5e74", "value": 0.004009387834930569}, {"name": "\u771f\u7684", "value": 0.004009387834930569}, {"name": "\u4e09\u4e2a", "value": 0.004009387834930569}, {"name": "\u8fd9\u79cd", "value": 0.004009387834930569}]};
var topic_summary = {"0": [{"content": "\u7ed9\u9c81\u80fd\u7403\u8ff7\u4e00\u4e2a\u5efa\u8bae\uff1a\u5bf9\u5927\u96f7\u597d\u70b9\uff0c\u662f\u4ed6\u8ba9\u6bd4\u8d5b\u4e0d\u81f3\u4e8e\u65e9\u5c31\u6ca1\u60ac\u5ff5\uff0c\u5bf9\u90d1\u667a\u597d\u70b9\uff0c\u66fe\u7ecf\u7684\u53cc\u51a0\u738b\u6709\u4ed6\u7684\u529f\u52b3\uff01", "up": 2371}, {"content": "\u4ee5\u540e\u5927\u96f7\u518d\u88c5\u903c \u6211\u4e5f\u4e0d\u8bf4\u4ed6\u4e86", "up": 946}, {"content": "\u770b\u7684\u6211\u5fc3\u8df3\u52a0\u901f\uff0c\u5fc3\u614c\u6574\u4e2a\u4e0b\u534a\u573a\u3002\u5927\u96f7\u725b\u903c\uff0c\u88c5\u903c\u96f7\u662f\u6709\u88c5\u7684\u8d44\u672c\u7684\uff01", "up": 767}, {"content": "\u539f\u6765\u56fd\u8425\u5355\u4f4d\u90a3\u4f1a\u513f\uff0c\u6211\u4eec\u548c\u5927\u96f7\u90fd\u5728\u4e00\u4e2a\u5382\uff0c\u5382\u91cc\u4e3b\u8981\u751f\u4ea7\u5145\u6c14\u5a03\u5a03\u3002\u6211\u4eec\u8d1f\u8d23\u88c5\u80f3\u818a\uff0c\u88c5\u817f\u3002\u5927\u96f7\u4e3b\u8981\u8d1f\u8d23\u88c5\u903c\u3002(\u8f6c\u81ea\u5427\u8ff7)", "up": 396}, {"content": "\u5f31\u961f\u51fa\u95e8\u5c06\uff0c\u6211\u9c81\u8981\u4e0d\u662f\u6709\u88c5\u903c\u72af\u738b\u5927\u96f7\uff0c\u8fd8\u4e0d\u77e5\u9053\u8981\u88ab\u704c\u51e0\u4e2a\u7403~", "up": 288}], "1": [{"content": "\u5927\u96f7\u90a3\u4e2a\u7403\u80fd\u6251\u51fa\u53bb\u5c31\u5f88\u4e0d\u9519\u4e86\u3002\u3002\u3002\u8fd9\u7403\u4ed6\u5c45\u7136\u3002\u3002\u3002\u62b1\u4f4f\u4e86\u3002\u3002\u3002\uff1f\uff1f\uff1f\u5927\u96f7\u725b\u903c\uff01", "up": 2266}, {"content": "\u6211\u53eb\u738b\u5927\u96f7\uff0c\u6211\u60f3\u6a2a\u7740\u8d70", "up": 1527}, {"content": "\u4eca\u5929\u5439\u4e00\u5439\u738b\u5927\u96f7\u7684\u624b\u629b\u7403\u3002\u8fd9\u7403\u4e0d\u7528\u88c5.\u903c\uff01\uff01", "up": 1460}, {"content": "\u738b\u5927\u96f7\u6700\u540e\u4e00\u4e2a\u624b\u629b\u7403\u6ca1\u88ab\u5439\u8d8a\u4f4d\uff0c\u88c1\u5224\u6709\u8fdb\u6b65\u3002", "up": 1260}, {"content": "\u6700\u540e\u738b\u5927\u96f7\u6251\u51fa\u4e86\u62c9\u7ef4\u5947\u4efb\u610f\u7403\u7b80\u76f4\u4e16\u754c\u7ea7", "up": 1153}], "2": [{"content": "\u5409\u5c14\u548c\u5927\u96f7\u4fe9\u4eba\u529e\u4e86\u4eca\u5929\u6240\u6709\u7684\u4e8b", "up": 1286}, {"content": "\u5168\u573a\u6700\u4f73\u6211\u9009\u738b\u5927\u96f7\uff01\u540c\u610f\u7684\u2197****", "up": 699}, {"content": "\u522b\u7684\u4e0d\u8bf4\uff0c\u738b\u5927\u96f7\u4fdd\u62a4\u674e\u5b66\u9e4f\u90a3\u77ac\u95f4\u611f\u5230\u6ee1\u6ee1\u7684\u5584\u610f\uff0c\ud83d\udc4d", "up": 656}, {"content": "\u4f5c\u4e3a\u6052\u5927\u7403\u8ff7\uff0c\u89c9\u5f97\u738b\u5927\u96f7\u8fd9\u573a\u867d\u7136\u4e22\u56db\u4e2a\u7403\uff0c\u611f\u89c9\u5927\u96f7\u8868\u73b0\u7684\u4e0d\u9519\uff0c\u5e7f\u5dde\u5854\u4eca\u5929\u8fdb\u7403\u4f20\u7403\u90fd\u633a\u5389\u5bb3\uff0c\u6052\u5927\u52a0\u6cb9\uff0c\u63a5\u4e0b\u6765\u628a\u4e0a\u6e2f\u548c\u56fd\u5b89\u62ff\u4e0b\uff0c\u516b\u8fde\u51a0\u6307\u65e5\u53ef\u5f85", "up": 602}, {"content": "\u672c\u573a\u6bd4\u8d5b\u8c01\u90fd\u4e0d\u670d\u5c31\u670d\u738b\u5927\u96f7", "up": 453}], "3": [{"content": "\u738b\u5927\u96f7\u7684\u624b\u96f7\u5f39", "up": 80}, {"content": "\u53d1\u89d2\u7403\u65f6\u6211\u95ee\u4e09\u5c81\u7684\u513f\u5b50\u8fd9\u7403\u4f1a\u4e0d\u4f1a\u8fdb \u513f\u5b50\u8bf4\u4f1a \u518d\u7136\u540e\u5f53\u6211\u770b\u5230\u7edd\u5e73\u90a3\u4e00\u5239\u90a3\u6211\u8df3\u4e86\u8d77\u6765 \u6fc0\u52a8\u7684\u6325\u821e\u62f3\u5934 \u518d\u7136\u540e\u9eef\u7136\u6cea\u4e0b\u2026\u2026\u867d\u7136\u9c81\u80fd\u81ea\u5df1\u6398\u7684\u5751 \u4f46\u4e0d\u653e\u5f03\u62fc\u640f\u7cbe\u795e\u8ba9\u4eba\u52a8\u5bb9 \u9e4f\u54e5\u6fc0\u60c5\u6325\u821e \u5927\u96f7\u7684\u5173\u952e\u4e89\u9876 \u53ca\u8d5b\u540e\u7684\u6e29\u60c5\u4e00\u523b\u90fd\u8ba9\u6211\u5fc3\u7eea\u4e0d\u5b81", "up": 11}, {"content": "\u6211\u9c81\u5c31\u662f\u6280\u4e0d\u5982\u4eba\uff0c\u6ca1\u813e\u6c14\uff0c\u5927\u96f7\u5c3d\u529b\u4e86\uff0c\u5468\u56f4\u5751\u592a\u591a\u4e86", "up": 10}, {"content": "\u8fd9\u7403\u4f30\u8ba1\u5e03\u8bfa\u7279\u4f1a\u53cc\u624b\u6251\u51fa\uff0c\u5510\u5361\u9e2d\u4f1a\u5355\u638c\u6258\u51fa\uff0c\u88e4\u889c\u4f1a\u4e00\u4e2a\u4e00\u5b57\u9a6c\u8ba9\u8fc7\uff0c\u5927\u96f7\u5374\u5367\u69fd\u6441\u86cb\uff01", "up": 10}, {"content": "\u6cf0\u5c71\u79fb\u4e0d\u52a8\uff0c\u56e0\u4e3a\u4e0a\u9762\u5750\u7740\u5927\u96f7", "up": 8}], "4": [{"content": "\u7eb5\u89c2\u6574\u573a\u6bd4\u8d5b\uff0c\u9c81\u80fd\u6218\u672f\u6548\u7387\u6781\u4f4e\u4e14\u7403\u5458\u6563\u6f2b\u6ca1\u6709\u65b9\u5411\uff0c\u4e00\u70b9\u90fd\u6ca1\u6709\u6240\u8c13\u8c6a\u95e8\u7684\u8363\u8a89\u611f\u3002\u5bf9\u6bd4\u4eba\u548c\u7403\u5458\u4eec\u7684\u903c\u62a2\u548c\u79ef\u6781\u6001\u5ea6\u4e3a\u4ed6\u4eec\u521b\u9020\u7684\u51e0\u6b21\u826f\u673a\uff0c\u5982\u679c\u4e0d\u662f\u738b\u5927\u96f7\u9c81\u80fd\u65e9\u88ab\u6253\u6210\u67ff\u5b50\u3002\u8fd8\u767e\u5e74\u8c6a\u95e8\uff0c\u771f\u662f\u4e00\u7fa4\u4ed8\u4e0d\u8d77\u7684\u963f\u6597\uff01", "up": 219}, {"content": "\u534e\u590f\u5e78\u798f\u8fd9\u4e2a\u7403\u961f\u5f88\u5947\u602a\uff0c\u4e70\u4eba\u90fd\u662f\u79c1\u4e0b\u63a5\u89e6\u903c\u7403\u5458\u548c\u4ff1\u4e50\u90e8\u95f9\u77db\u76fe\uff0c\u7136\u540e\u518d\u62a2\u4eba\uff0c\u8bdd\u8bf4\u8fd9\u6837\u4e70\u7684\u7684\u7403\u5458\u6709\u51e0\u4e2a\u4f1a\u6709\u96c6\u4f53\u8363\u8a89\u611f\uff1f\u5168\u961f\u7403\u5458\u5c31\u5982\u96c7\u4f63\u5175\u4e00\u6837\u3002\u4f1a\u6709\u90d1\u667a\uff0c\u5927\u96f7\uff0c\u83ab\u96f7\u8bfa\uff0c\u5434\u66e6\u7b49\u7403\u5458\u7403\u961f\u8363\u8a89\u611f\u5417\uff1f", "up": 57}, {"content": "\u4f60\u4eec\u90fd\u5439\u5927\u96f7\uff0c\u5854\u795e\uff0c\u5c0f\u9e4f\u54e5\uff0c\u6211\u5439\u4e00\u4e0b\u9a6c\u52a0\u7279\u3002\u6bd4\u8d5b\u5230\u4e86\u4f24\u505c\u8865\u65f6\uff0c\u9c81\u80fd\u7403\u5458\u8fd8\u6709\u5145\u6c9b\u4f53\u529b\u524d\u573a\u9ad8\u4f4d\u903c\u62a2\u3002\u611f\u6fc0\u8001\u9a6c\u8ba9\u6211\u4eec\u544a\u522b\u4e86\u6b65\u884c\u8005\uff01", "up": 18}, {"content": "\u90d1\u94ee\u6ca1\u6709\u4e86\u521a\u51fa\u9053\u65f6\u751f\u9f99\u6d3b\u864e\u7684\u6837\u5b50 \u5434\u5174\u6db5 \u5218\u5f6c\u5f6c\u51fa\u4e8e\u62a5\u5e9f\u72b6\u6001 \u84bf\u961f\u548c\u59da\u5747\u665f\u4e2d\u89c4\u4e2d\u77e9\u7684\u5b8c\u6210\u6bcf\u4e00\u573a\u6bd4\u8d5b \u8001\u5854\u65f6\u7075\u65f6\u4e0d\u7075 \u4f69\u83b1\u7ecf\u5e38\u5fd8\u8bb0\u5e26\u5c04\u95e8\u9774 U23\u4e5f\u53ea\u662f\u5f62\u52bf\u4e3b\u4e49 \u53ea\u6709\u5927\u96f7 \u5409\u5c14 \u6234\u8001\u677f \u91d1\u656c\u9053\u770b\u8d77\u6765\u8ba9\u4eba\u653e\u5fc3 \u5f15\u4ee5\u4e3a\u50b2\u7684\u9752\u8bad\u54ea\u53bb\u4e86\uff1f\u66fe\u51e0\u4f55\u65f6\u79f0\u9738\u4e2d\u8d85\u7684\u6a58\u7ea2\u8272\u98ce\u66b4\u5462\uff1f\u771f\u5fc3\u5e0c\u671b\u6559\u6388\u80fd\u6765 \u63d0\u62d4\u4e00\u6279\u65b0\u4eba\u6765\u6362\u6389\u5931\u53bb\u51a0\u519b\u5fc3\u7684\u4e00\u4e9b\u9c81\u80fd\u7403\u5458", "up": 11}, {"content": "\u8fd8\u8f93\u4e0d\u8d77\uff0c\u62ff\u7740\u76ae\u7403\u4e0d\u8ba9\u53d1\u89d2\u7403\uff0c\u5927\u96f7\u4f69\u83b1\u5b9e\u529b\u6253\u8138\uff0c\u5e05\u6c14", "up": 11}], "5": [{"content": "\u738b\u5927\u96f7:\u5218\u6bbf\u5ea7\u5982\u679c\u54b1\u4e24\u89d2\u8272\u4e92\u6362\uff0c\u4f60\u4f1a\u77e5\u9053\u4ec0\u4e48\u53eb\u505a\u6b8b\u5fcd", "up": 825}, {"content": "\u5927\u96f7\u572814\u8d5b\u5b63\u52a9\u653b\u9ea6\u514b\u683c\u6587\u7edd\u6740\uff0c15\u5e74\u95e8\u524d\u865a\u6643\u4e00\u67aa\uff0c\u7981\u533a\u5916\u4e4c\u7d22\u7edd\u6740\uff0c\u4eca\u5929\uff0c\u53c8\u505a\u5230\u4e86\uff01\uff01\uff01", "up": 772}, {"content": "\u738b\u5927\u96f7\u7684\u52a9\u653b\uff0c\u4f69\u83b1\u7684\u8fdb\u7403\uff0c\u732e\u7ed9\u674e\u660e\u73e0\uff0c\u4e00\u8def\u8d70\u597d", "up": 494}, {"content": "\u5927\u96f7\uff1a\u6bd5\u7adf\u521a\u521a\u548c\u603b\u88c1\u63e1\u4e86\u624b", "up": 272}, {"content": "\u5927\u96f7\uff1a\u81ea\u4ece\u548c\u603b\u88c1\u63e1\u4e86\u624b\u5c31\u6ca1\u6d17\u8fc7", "up": 244}], "6": [{"content": "\u4e0d\u662f\u5927\u96f7\uff0c\u65e9\u82b1\u4e86\ud83d\ude02[\u6342\u8138]", "up": 370}, {"content": "\u6211\u521a\u770b\u7403\u7684\uff0c\u5c31\u60f3\u95ee\u95ee\u592e\u89c6\u89e3\u8bf4\uff0c\u5927\u96f7\u662f\u8c01\uff1f\u7a00\u54f2\u53c8\u662f\u8c01\uff1f\u6052\u5927\u88ab\u8fdb\u4e2a\u7403\u600e\u4e48\u6fc0\u52a8\u6210\u90a3\u6837\uff0c\u4f60\u662f\u7403\u8ff7\u8fd8\u662f\u89e3\u8bf4\uff1f", "up": 253}, {"content": "\u4e0d\u7528\u9009\u4e86\uff0c\u6700\u4f73\u7403\u5458\u97e9\u9555\u6cfd\uff0c\u5927\u96f7\u53ef\u4ee5\u5b89\u5fc3\u517b\u4f24\u4e86\u3002\u6700\u540e\u731b\u5938\u5c0f\u91d1\u5b50\uff0c\u6700\u597d\u522b\u8ba9\u5c0f\u91d1\u5b50\u8fdb\u56fd\u5bb6\u961f\uff0c\u5b89\u5fc3\u4e3a\u9c81\u80fd\u6548\u529b\u3002", "up": 220}, {"content": "\u9c81\u80fd\u592a\u4f9d\u8d56\u738b\u5927\u96f7\u548c\u5df4\u574e\u5e03\u4e86\u2026\u2026", "up": 213}, {"content": "\u5927\u96f7:\u64e6\uff0c\u8fd9\u4e2a\u7403\u6251\u5b8c\u5fd8\u6446pose\u88c5\u6bd4\u4e86\uff01", "up": 119}], "7": [{"content": "\u8fd9\u573a\u60e8\u8d25\uff0c\u6211\u9c81\u8868\u73b0\u6700\u597d\u7684\u5c45\u7136\u662f\u5927\u96f7[\u6342\u8138]", "up": 781}, {"content": "\u6ee1\u53e3\u4eac\u9a82\u7684\u6cb3\u5317\u7403\u8ff7\uff0c\u53c8\u8ba9\u4f60\u4eec\u5931\u671b\u4e86\uff0c\u5927\u96f7\u725b\u903c\uff0c\u6c34\u5854\u725b\u903c\uff0c\u9c81\u80fd\u7403\u8ff7\u9876\u8d77\u6765", "up": 316}, {"content": "\u4eca\u5929\u771f\u7684\u5439\u738b\u5927\u96f7\u2026\u2026\u90a3\u7403\u5df2\u7ecf\u4e16\u754c\u6ce2", "up": 294}, {"content": "80+\u5206\u949f\u738b\u5927\u96f7\u7684\u4e16\u754c\u7ea7\u6251\u6551\uff0c\u4ee4\u62c9\u7ef4\u5947\u671b\u95e8\u5174\u6b4e\uff0c\u6211\u8d1f\u8d23\u5439\u5927\u96f7\uff0c\u4f60\u8d1f\u8d23 \u2026\u2026\u4f60\u61c2\u7684\uff01", "up": 232}, {"content": "\u738b\u5927\u96f7\u771f\u725b\u903c\u554a[\u6342\u8138]", "up": 123}], "8": [{"content": "\u738b\u5927\u96f7\u53ef\u4ee5\u91cd\u56de\u56fd\u5bb6\u961f\u4e86", "up": 626}, {"content": "\u91cc\u76ae:\u672c\u6765\u53bb\u770b\u770b\u91d1\u656c\u9053\u7684\uff0c\u7ed3\u679c\u4f60\u5927\u96f7\u628a\u6211\u622a\u80e1\u4e86\u3002\u3002\u3002", "up": 275}, {"content": "\u8e22\u7403\u5c31\u5e94\u8be5\u8fd9\u6837\uff0c\u4e0d\u7ba1\u8f93\u8d62\uff0c\u90fd\u50cf\u5927\u96f7\u4fdd\u62a4\u5b66\u670b\u4e00\u6837\uff0c\u573a\u4e0a\u961f\u5458\u62a4\u76f8\u4fdd\u62a4\uff0c\u53ef\u4ee5\u72af\u89c4\uff0c\u4f46\u522b\u4e0b\u9ed1\u811a\uff0c\u7a7f\u4e0a\u56fd\u5bb6\u961f\u670d\uff0c\u6211\u4eec\u662f\u4e2d\u56fd\u4eba\uff0c\u4e0d\u7ba1\u4f60\u4eec\u4ff1\u4e50\u90e8\u6709\u4ec0\u4e48\u6069\u6028\uff0c\u4e00\u81f3\u5bf9\u5916", "up": 10}, {"content": "\u5218\u519b\u5e05\u3001\u738b\u5927\u96f7\u3001\u6234\u7433\uff0c\u4ed6\u4e09\u4e2a\u8c01\u7684\u773c\u5927\uff1f", "up": 9}, {"content": "\u80fd\u628a\u5916\u63f4\u6251\u8dea\u7684\u56fd\u95e8\uff0c\u738b\u5927\u96f7", "up": 8}]};
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
