var data = {"person_name": "\u5965\u65af\u5361", "nicknames": "\u5965\u65af\u5361", "aspects": {"\u8fdb\u7403": 0.4333425112409726, "\u56fd\u5bb6\u961f": 0.4395122165761604, "\u4f20\u7403": 0.7658633997134833, "\u7403\u5458": 0.5200084684109125, "\u5916\u63f4": 0.4912238872904412, "\u6bd4\u8d5b": 0.5058760887521384, "\u52a9\u653b": 0.3640051123577196, "\u9632\u5b88": 0.5642648950234329, "\u72af\u89c4": 0.45463315404022453, "\u8d5b\u5b63": 0.7901259946543697}, "overall_heat": 544.0, "overall_polar": 0.45, "name": "44", "nationality": "\u5df4\u897f", "position": "\u4e2d\u573a", "goal": "16", "assist": "23", "team_name": "\u4e0a\u6d77\u4e0a\u6e2f", "name_en": "Oscar dos Santos Emb", "age": "27", "height": "179", "weight": "66"};
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
var topic_keywords = {"0": [{"name": "\u5965\u65af\u5361", "value": 0.055400759905916405}, {"name": "\u6b66\u78ca", "value": 0.031156142572824314}, {"name": "\uff1f", "value": 0.02391894336891623}, {"name": "\u80e1\u5c14\u514b", "value": 0.019214763886375972}, {"name": "\u56fd\u5bb6\u961f", "value": 0.01812918400578976}, {"name": "\u4e0a\u6e2f", "value": 0.01487244436403112}, {"name": "\uff01", "value": 0.01487244436403112}, {"name": "\u8fdb\u7403", "value": 0.013786864483444907}, {"name": "\u6d69\u514b", "value": 0.01161570472227248}, {"name": "\u4eba", "value": 0.011253844762077077}, {"name": "\u4f20\u7403", "value": 0.010530124841686268}, {"name": "\u80fd\u529b", "value": 0.010530124841686268}, {"name": "\u52a9\u653b", "value": 0.00980640492129546}, {"name": "\u7403\u5458", "value": 0.009444544961100055}, {"name": "\u4e2d\u8d85", "value": 0.008358965080513842}, {"name": "\u5916\u63f4", "value": 0.008358965080513842}, {"name": "\u5f3a", "value": 0.0072733851999276285}, {"name": "\u8054\u8d5b", "value": 0.0072733851999276285}, {"name": "\u4e00\u4e2a", "value": 0.0069115252397322245}, {"name": "\u771f\u7684", "value": 0.0061878053193414155}, {"name": "\u7403", "value": 0.005825945359146011}, {"name": "\u5e94\u8be5", "value": 0.005825945359146011}, {"name": "\u6052\u5927", "value": 0.005464085398950606}, {"name": "\u6bd4\u8d5b", "value": 0.0047403654785597975}, {"name": "\u8fdb", "value": 0.0047403654785597975}, {"name": "\u7403\u961f", "value": 0.004378505518364393}, {"name": "\u89c9\u5f97", "value": 0.004378505518364393}, {"name": "\u7b2c\u4e00", "value": 0.004378505518364393}, {"name": "\u8868\u73b0", "value": 0.004016645558168989}, {"name": "\u961f\u53cb", "value": 0.003654785597973584}], "1": [{"name": "\u5965\u65af\u5361", "value": 0.042201834862385317}, {"name": "\uff01", "value": 0.03972229109843788}, {"name": "\u6052\u5927", "value": 0.020381849739647906}, {"name": "\u6b66\u78ca", "value": 0.014430944706174065}, {"name": "\u4e0a\u6e2f", "value": 0.012943218447805604}, {"name": "\u6d69\u514b", "value": 0.011455492189437144}, {"name": "\uff1f", "value": 0.011455492189437144}, {"name": "\u5916\u63f4", "value": 0.009967765931068684}, {"name": "\u4eba", "value": 0.008480039672700224}, {"name": "\u4e09\u4e2a", "value": 0.007984130919910737}, {"name": "\u4e00\u4e2a", "value": 0.007984130919910737}, {"name": "\u963f\u5170", "value": 0.007984130919910737}, {"name": "\u6253", "value": 0.007984130919910737}, {"name": "\u80e1\u5c14\u514b", "value": 0.0069923134143317625}, {"name": "\u7403\u5458", "value": 0.006496404661542276}, {"name": "\u9ad8\u62c9\u7279", "value": 0.005504587155963302}, {"name": "\u4e0a\u5c97", "value": 0.005504587155963302}, {"name": "\u573a", "value": 0.005504587155963302}, {"name": "\u5df4\u897f", "value": 0.005504587155963302}, {"name": "\u57c3\u5c14\u514b\u68ee", "value": 0.005504587155963302}, {"name": "\u53bb\u5e74", "value": 0.005008678403173815}, {"name": "\u9632\u5b88", "value": 0.0045127696503843295}, {"name": "\u4e2d\u8d85", "value": 0.0045127696503843295}, {"name": "\u8fd9\u573a", "value": 0.0045127696503843295}, {"name": "\u786e\u5b9e", "value": 0.004016860897594843}, {"name": "\u56fd\u5bb6\u961f", "value": 0.004016860897594843}, {"name": "\u8d5b\u5b63", "value": 0.004016860897594843}, {"name": "\u82cf\u5b81", "value": 0.0035209521448053556}, {"name": "\u77e5\u9053", "value": 0.0035209521448053556}, {"name": "\u8fdb", "value": 0.0035209521448053556}], "2": [{"name": "\u5965\u65af\u5361", "value": 0.048373029184837296}, {"name": "\uff1f", "value": 0.02220731298222073}, {"name": "\uff01", "value": 0.018852733981885274}, {"name": "\u7403", "value": 0.018181818181818184}, {"name": "\u72af\u89c4", "value": 0.014156323381415634}, {"name": "\u88c1\u5224", "value": 0.01281449178128145}, {"name": "\u8fdb\u7403", "value": 0.010130828581013083}, {"name": "\u4e0a\u6e2f", "value": 0.009459912780945991}, {"name": "\u70b9\u7403", "value": 0.0087889969808789}, {"name": "\u5e94\u8be5", "value": 0.0074471653807447165}, {"name": "\u5224", "value": 0.0074471653807447165}, {"name": "\u4e00\u4e2a", "value": 0.006776249580677625}, {"name": "\u80e1\u5c14\u514b", "value": 0.006776249580677625}, {"name": "\u5206\u949f", "value": 0.006776249580677625}, {"name": "\u6700\u540e", "value": 0.006105333780610533}, {"name": "\u78b0\u5230", "value": 0.006105333780610533}, {"name": "\u7981\u533a", "value": 0.006105333780610533}, {"name": "\u5148", "value": 0.006105333780610533}, {"name": "\u5224\u7f5a", "value": 0.006105333780610533}, {"name": "\u56de\u653e", "value": 0.005434417980543441}, {"name": "\u6bd4\u5206", "value": 0.00476350218047635}, {"name": "\uff1b", "value": 0.00476350218047635}, {"name": "\u738b\u5f64", "value": 0.00476350218047635}, {"name": "\u5439", "value": 0.00476350218047635}, {"name": "\u5b9e\u529b", "value": 0.004092586380409258}, {"name": "\u6b66\u78ca", "value": 0.004092586380409258}, {"name": "\u90dc\u6797", "value": 0.004092586380409258}, {"name": "\u89c6\u9891\u88c1\u5224", "value": 0.004092586380409258}, {"name": "\u6628\u5929", "value": 0.004092586380409258}, {"name": "\u8e22\u5012", "value": 0.004092586380409258}], "3": [{"name": "\u5965\u65af\u5361", "value": 0.03422680412371134}, {"name": "\u4e0a\u6e2f", "value": 0.022444771723122238}, {"name": "\u80e1\u5c14\u514b", "value": 0.011840942562592048}, {"name": "\u6052\u5927", "value": 0.010073637702503684}, {"name": "\u6b66\u78ca", "value": 0.00889543446244477}, {"name": "\u4eca\u5929", "value": 0.008306332842415316}, {"name": "\u88c1\u5224", "value": 0.0071281296023564065}, {"name": "\u673a\u4f1a", "value": 0.006539027982326951}, {"name": "\u5916\u63f4", "value": 0.005949926362297496}, {"name": "\uff01", "value": 0.005949926362297496}, {"name": "\u8868\u73b0", "value": 0.005949926362297496}, {"name": "\u9632\u5b88", "value": 0.005949926362297496}, {"name": "\u7403\u5458", "value": 0.005949926362297496}, {"name": "\u611f\u89c9", "value": 0.0053608247422680414}, {"name": "\u6253", "value": 0.0053608247422680414}, {"name": "\u6d69\u514b", "value": 0.0053608247422680414}, {"name": "\u5e94\u8be5", "value": 0.004771723122238586}, {"name": "\u7533\u82b1", "value": 0.004771723122238586}, {"name": "\u51a0\u519b", "value": 0.004182621502209131}, {"name": "\uff1f", "value": 0.004182621502209131}, {"name": "\u4e00\u4e2a", "value": 0.004182621502209131}, {"name": "\u4e0d\u9519", "value": 0.004182621502209131}, {"name": "\u771f\u7684", "value": 0.004182621502209131}, {"name": "\u8e22", "value": 0.004182621502209131}, {"name": "\u7403\u8ff7", "value": 0.004182621502209131}, {"name": "\u6bd4\u8d5b", "value": 0.004182621502209131}, {"name": "\u8fdb\u7403", "value": 0.003593519882179676}, {"name": "\u4f20\u4e2d", "value": 0.003593519882179676}, {"name": "\u4eca\u5e74", "value": 0.003593519882179676}, {"name": "\u6700\u540e", "value": 0.003593519882179676}], "4": [{"name": "\u5965\u65af\u5361", "value": 0.05322183964584358}, {"name": "\uff1f", "value": 0.01485489424495819}, {"name": "\u6b66\u78ca", "value": 0.012887358583374323}, {"name": "\u4e07\u6b27", "value": 0.007968519429414659}, {"name": "\u5389\u5bb3", "value": 0.006984751598622724}, {"name": "\u963f\u5170", "value": 0.006984751598622724}, {"name": "\u7403", "value": 0.006984751598622724}, {"name": "\u4e2d\u56fd", "value": 0.006984751598622724}, {"name": "\u4e0a\u6e2f", "value": 0.006000983767830792}, {"name": "\u770b\u770b", "value": 0.005017215937038858}, {"name": "\u5e3d\u5b50\u620f\u6cd5", "value": 0.005017215937038858}, {"name": "\uff01", "value": 0.005017215937038858}, {"name": "\u80e1\u5c14\u514b", "value": 0.0040334481062469256}, {"name": "\u7b2c\u4e00", "value": 0.0040334481062469256}, {"name": "\u8e22", "value": 0.0040334481062469256}, {"name": "\u725b", "value": 0.0040334481062469256}, {"name": "\ud83d\udc2e", "value": 0.0040334481062469256}, {"name": "\u4e2d\u8d85", "value": 0.0040334481062469256}, {"name": "\u4fdd\u5229\u5c3c\u5965", "value": 0.0040334481062469256}, {"name": "\u624e\u54c8\u7ef4", "value": 0.0040334481062469256}, {"name": "\u606d\u559c", "value": 0.0040334481062469256}, {"name": "\u6052\u5927", "value": 0.0040334481062469256}, {"name": "6000", "value": 0.0040334481062469256}, {"name": "\u5f15\u8fdb", "value": 0.0040334481062469256}, {"name": "\u4e70", "value": 0.0030496802754549925}, {"name": "\u82b1", "value": 0.0030496802754549925}, {"name": "\u8d5b\u540e", "value": 0.0030496802754549925}, {"name": "\u7ef4\u7279", "value": 0.0030496802754549925}, {"name": "\u73b0\u5728", "value": 0.0030496802754549925}, {"name": "\u4fe1\u5fc3", "value": 0.0030496802754549925}], "5": [{"name": "\u5965\u65af\u5361", "value": 0.06277656212010697}, {"name": "\uff01", "value": 0.03457330415754923}, {"name": "\u6b66\u78ca", "value": 0.019985412107950403}, {"name": "\uff1f", "value": 0.01463651835643083}, {"name": "\u80e1\u5c14\u514b", "value": 0.013663992219790908}, {"name": "\u4e0a\u6e2f", "value": 0.009287624604911258}, {"name": "\u7403", "value": 0.007342572331631413}, {"name": "\u725b", "value": 0.007342572331631413}, {"name": "\u56fd\u5bb6\u961f", "value": 0.00637004619499149}, {"name": "\u8138", "value": 0.00637004619499149}, {"name": "\u903c", "value": 0.00637004619499149}, {"name": "\u8d5b\u5b63", "value": 0.005883783126671529}, {"name": "\u52a9\u653b", "value": 0.005883783126671529}, {"name": "\u6052\u5927", "value": 0.005397520058351568}, {"name": "\u8fdb\u7403", "value": 0.005397520058351568}, {"name": "\u8fdb", "value": 0.005397520058351568}, {"name": "\u6342", "value": 0.005397520058351568}, {"name": "\u5916\u63f4", "value": 0.005397520058351568}, {"name": "\u771f\u7684", "value": 0.005397520058351568}, {"name": "\u77e5\u9053", "value": 0.004911256990031607}, {"name": "\u5361\u62c9\u65af\u79d1", "value": 0.004424993921711646}, {"name": "\u8d8a\u4f4d", "value": 0.004424993921711646}, {"name": "\u597d", "value": 0.004424993921711646}, {"name": "\u5df4\u897f", "value": 0.004424993921711646}, {"name": "\u673a\u4f1a", "value": 0.004424993921711646}, {"name": "\u5355\u5200", "value": 0.004424993921711646}, {"name": "\u6253", "value": 0.004424993921711646}, {"name": "\u4e00\u4e2a", "value": 0.004424993921711646}, {"name": "\u4eba", "value": 0.004424993921711646}, {"name": "\u5854\u795e", "value": 0.003938730853391685}], "6": [{"name": "\u5965\u65af\u5361", "value": 0.016664001279385894}, {"name": "\u4e0a\u6e2f", "value": 0.016664001279385894}, {"name": "\uff01", "value": 0.013465536542459619}, {"name": "\uff1f", "value": 0.010267071805533344}, {"name": "\u6052\u5927", "value": 0.010267071805533344}, {"name": "\u7403\u5458", "value": 0.008987685910762834}, {"name": "\u6bd4\u8d5b", "value": 0.008028146489684952}, {"name": "\u6b66\u78ca", "value": 0.007388453542299697}, {"name": "\u80e1\u5c14\u514b", "value": 0.007068607068607069}, {"name": "\u4e00\u4e2a", "value": 0.006748760594914442}, {"name": "\u597d", "value": 0.006748760594914442}, {"name": "\u95e8\u5c06", "value": 0.0054693747001439315}, {"name": "\u8d5b\u5b63", "value": 0.0051495282264513035}, {"name": "\u80fd\u529b", "value": 0.0051495282264513035}, {"name": "\u8e22", "value": 0.0051495282264513035}, {"name": "\u4e2d\u56fd", "value": 0.0051495282264513035}, {"name": "\u9632\u5b88", "value": 0.0048296817527586754}, {"name": "\u5916\u63f4", "value": 0.004509835279066048}, {"name": "\u673a\u4f1a", "value": 0.004509835279066048}, {"name": "\u8fdb\u653b", "value": 0.003870142331680793}, {"name": "\u6cf0\u8fbe", "value": 0.003870142331680793}, {"name": "\u4e0a\u5c97", "value": 0.003870142331680793}, {"name": "\u7403", "value": 0.003870142331680793}, {"name": "\u4e0a\u534a\u573a", "value": 0.003870142331680793}, {"name": "\u56fd\u5185", "value": 0.0035502958579881655}, {"name": "\u8fdb\u7403", "value": 0.0035502958579881655}, {"name": "\u8db3\u7403", "value": 0.0035502958579881655}, {"name": "\u7981\u533a", "value": 0.0035502958579881655}, {"name": "\u53d1\u6325", "value": 0.0035502958579881655}, {"name": "\u524d\u573a", "value": 0.003230449384295538}]};
var topic_summary = {"0": [{"content": "\u6d69\u514b\u548c\u5965\u65af\u5361\u90fd\u662f\u6709\u610f\u8bc6\u7684\u7ed9\u6b66\u78ca\u505a\u7403\uff0c\u8bf4\u660e\u5c0f\u4f19\u5b50\u4eba\u7f18\u597d\uff0c\u7403\u961f\u4e5f\u56e2\u7ed3\u3002\u6b66\u78ca\u534a\u573a\u4e24\u7403 \u5f88\u7ed9\u529b\uff0c\u7403\u8ff7\u90fd\u5e94\u8be5\u652f\u6301\u4ed6\uff0c\u6211\u662f\u5f88\u652f\u6301\u4ed6\u5f88\u559c\u6b22\u4ed6\uff0c\u53ea\u662f\u53ef\u60dc\u6240\u5728\u7684\u4ff1\u4e50\u90e8\u4e0d\u600e\u4e48\u62db\u4eba\u5f85\u89c1", "up": 880}, {"content": "\u5965\u65af\u5361\u662f\u4e2d\u8d85\u73b0\u6709\u5916\u63f4\u4e2d\u6211\u6700\u8ba8\u538c\u7684\u4e00\u4e2a\uff0c\u6ca1\u6709\u4e4b\u4e00\uff01\uff01\uff01", "up": 630}, {"content": "\u8fd8\u662f\u90a3\u53e5\u8bdd\uff0c\u56fd\u5bb6\u961f\u6709\u5965\u65af\u5361\u8fd9\u6837\u7684\u5582\u997c\u5927\u5e08\uff0c\u6b66\u78ca\u4e5f\u53ef\u4ee5\u591a\u8fdb\u51e0\u4e2a", "up": 215}, {"content": "\u5965\u65af\u5361\u548c\u5854\u5229\u65af\u5361\u8fd9\u4e24\u4e2a\u662f\u771f\u7684\u53d8\u6001\uff0c\u5e94\u8be5\u662f\u4e16\u754c\u6ce2\u673a\u5668\uff0c\u4e00\u4e2a\u662f\u5168\u80fd\u9b3c\u624d.....\u5e94\u8be5\u51fa\u53bb\u6253\u62fc\u6253\u62fc.......", "up": 87}, {"content": "\u56fd\u8db3\u6bd4\u8d5b\u4e0d\u662f\u6b66\u7403\u738b\u4e0d\u8fdb\u7403\uff0c\u800c\u662f\u524d\u573a\u6ca1\u6709\u6d69\u514b\u548c\u5965\u65af\u5361\u8fd9\u6837\u7684\u624b\u672f\u5200\u4e00\u6837\u7cbe\u51c6\u7684\u4f20\u7403\uff0c\u56fd\u8db3\u591a\u4e00\u4e2a\u5965\u65af\u5361\u90fd\u4f1a\u6709\u8d28\u7684\u98de\u8dc3", "up": 86}], "1": [{"content": "\u538b\u529b\u6765\u5230\u4e86\u5965\u65af\u5361\uff0c\u6b66\u78ca\uff0c\u624e\u54c8\u7ef4\u7684\u8eab\u4e0a\u3002\u3002", "up": 881}, {"content": "\u80e1\u5c14\u514b\uff0c\u5965\u65af\u5361\uff0c\u57c3\u5c14\u514b\u68ee\uff1a\u7403\u738b\uff0c\u4f60\u7684\u5212\u8239\u59ff\u52bf\u597d\u50cf\u4e0d\u5bf9\u554a\uff1f \u6b66\u78ca\uff1a\u6211\u6ca1\u5212\u8239\uff0c\u6211\u5728\u51fb\u9f13", "up": 485}, {"content": "\u4eca\u5e74\u8054\u8d5b\u548c\u4e0a\u5c97\u6709\u7684\u4e00\u8e22\uff01 \u522b\u4e0d\u670d\uff01\u4f46\u662f\u4e9a\u51a0 \u6052\u5927\u771f\u6253\u4e0d\u8fc7\u4e0a\u5c97 \u56db\u4e2a\u5916\u63f4 \u4e0a\u5c97\u592a\u5f3a\u4e86\uff01\u6052\u5927\u56db\u4e2a\u5916\u63f4\u548c\u4e0a\u5c97\u56db\u4e2a\u5916\u63f4\u6bd4 \u6574\u6574\u5dee\u4e00\u4e2a\u7ea7\u522b\uff01 \u963f\u5170\u662f\u673a\u4f1a\u4e3b\u4e49\u8005 \u6ca1\u6709\u5bf9\u6297\u80fd\u529b\uff01\u8fd9\u662f\u6d69\u514b\u5f3a\u4e8e\u963f\u5170\u7684\u539f\u56e0 \u91d1\u82f1\u6743\u7684\u4f5c\u7528\u66f4\u662f\u6ca1\u6709\u827e\u54c8\u7684\u4f5c\u7528\u5927\uff01\u53e4\u5fb7\u5229\u4e5f\u5f88\u96be\u9632\u4f4f\u5965\u65af\u5361\uff01\u8fd8\u6709\u4e00\u4e2a\u57c3\u795e\uff01\uff01\uff01\u6052\u5927\u73b0\u5728\u8d8a\u6765\u8d8a\u6253\u6574\u4f53\u4e86 \u50cf\u65e5\u97e9\u7403\u961f\u4e00\u6837\uff01\u4e00\u4e2a\u6d69\u514b\u4f1a\u6467\u6bc1\u6052\u5927\u6574\u4e2a\u9632\u7ebf\uff01\u6240\u4ee5\u4e09\u5916\u63f4\u7684\u60c5\u51b5\u4e0b \u6709\u7684\u4e00\u6253 \u56db\u5916\u63f4\u6052\u5927\u6839\u672c\u6253\u4e0d\u8fc7\u4e0a\u5c97 \u6d69\u514b \u5965\u65af\u5361 \u57c3\u795e \u4e09\u4e2a\u4eba\u52a0\u8d77\u6765\u4e00\u4ebf\u591a\u6b27\u5143 \u6052\u5927\u4e09\u4e2a\u5916\u63f4\u52a0\u8d77\u6765\u53ea\u6709\u4e09\u5343\u591a\u4e07\u6b27\u5143 \u8fd9\u5c31\u662f\u5dee\u8ddd\u554a\u2026\u2026 \u6211\u662f\u6052\u8ff7", "up": 69}, {"content": "\u5965\u65af\u5361\u5bf9\u4e8e\u4e0a\u6e2f\u81f3\u5173\u91cd\u8981\uff0c\u53ea\u53ef\u60dc\u4e0a\u8d5b\u5b63\u88ab\u505c\u8d5b\u4e868\u573a\uff0c\u5426\u5219\u2026\u2026", "up": 55}, {"content": "\u5361\u7eb3\u74e6\u7f57\uff1a\u5965\u65af\u5361\u8981\u8fdb\u5df4\u897f\u56fd\u5bb6\u961f\u7684\u8bdd\uff0c\u90a3\u9ad8\u62c9\u7279\u548c\u963f\u5170\u5fc5\u987b\u8fdb", "up": 17}], "2": [{"content": "\u7ed9\u5965\u65af\u5361\u6700\u540e\u4e00\u7403\u8ba9\u7ed9u23\u7684\u4e3e\u52a8****\uff01", "up": 586}, {"content": "\u6709\u6ca1\u6709\u4eba\u80fd\u544a\u8bc9\u6211 \u5965\u65af\u5361\u7b2c\u4e00\u7403\u4e3a\u5565\u88ab\u53d6\u6d88\uff1f\u5982\u679c\u662f\u56e0\u4e3a\u72af\u89c4 \u4e3a\u5565\u5230\u8fdb\u7403\u540e\u624d\u5439\uff1f\u88c1\u5224\u8111\u5b50\u6709\u6ce1\uff1f", "up": 58}, {"content": "\u4e16\u754c\u676f\u4e3b\u88c1\u5224\u6ca1\u6709\u5224\u7f5a\uff0c\u89c6\u9891\u88c1\u5224\u63d0\u51fa\u5f02\u8bae\u7136\u540e\u4e3b\u88c1\u53bb\u770bvar\uff0c\u5982\u679c\u4e3b\u88c1\u9009\u62e9\u4e0d\u770b\u90a3\u4e48\u5c31\u4f1a\u8ba4\u5b9a\u81ea\u5df1\u5224\u7f5a\uff0c\u54ea\u6709\u4e0d\u770b\u89c6\u9891\u5c31\u5426\u5b9a\u81ea\u5df1\u4e4b\u524d\u5224\u7f5a\u8fd9\u662f\u5947\u8469\uff0c\u8fd8\u6709\u4e00\u70b9\u89c6\u9891\u88c1\u5224\u539f\u5219\u4e0a\u5bf9\u7981\u533a\u5916\u666e\u901a\u72af\u89c4\u4e0d\u4f1a\u63d0\u51fa\u5f02\u8bae\uff0c\u53ea\u4f1a\u5bf9\u7981\u533a\u5185\u624b\u7403\uff0c\u8d8a\u4f4d\uff0c\u70b9\u7403\u63d0\u51fa\u5f02\u8bae\uff0c\u8fd9\u4e2a\u7403\u5965\u65af\u5361\u5012\u5730\u6ca1\u6709\u76f4\u63a5\u9020\u6210\u8fdb\u7403\u4e2d\u95f4\u4f20\u4e862\u811a\u7403\uff0c\u5982\u679c\u8bf4\u5965\u65af\u5361\u5012\u5730\u90a3\u4e2a\u4eba\u76f4\u63a5\u5c04\u95e8\u8fdb\u4e86\u6211\u4e3a\u8ba4\u4e86\uff0c\u53ea\u80fd\u8bf4\u89c6\u9891\u88c1\u5224\u4e1a\u52a1\u4e0d\u719f\uff0c\u4e16\u754c\u676f\u683c\u5b50\u90a3\u7403\u660e\u663e\u5047\u6454\u4e3a\u4ec0\u4e48\u4e0d\u5439\uff0c\u90a3\u5c31\u662f\u56e0\u4e3a\u7981\u533a\u5916\u666e\u901a\u72af\u89c4\u89c6\u9891\u88c1\u5224\u4e0d\u5f97\u6709\u5f02\u8bae\uff0c\u5b8c\u5168\u7531\u4e3b\u88c1\u5224\u5b9a\u593a", "up": 17}, {"content": "\u5965\u65af\u5361\u90a3\u70b9\u7403\u5224\u4e86\u534e\u590f\u4e0d\u5f00\u5fc3 \u4e0d\u5224\u4e0a\u6e2f\u4e0d\u5f00\u5fc3 \u4e0d\u80fd\u7b97\u8bef\u5224 \u800c\u4e14\u4e4b\u524d\u6b66\u78ca\u90a3\u4e2a\u4e5f\u6ca1\u5224 \u4f46\u5c31\u7b97\u6ca1\u70b9\u7403 \u4e0a\u6e2f\u4e0d\u7ba1\u5b9e\u529b\u8fd8\u662f\u573a\u9762\u90fd\u914d\u5f97\u4e0a\u8d62\u7403", "up": 11}, {"content": "\u6211\u5c31\u60f3\u95ee\u95ee\u88c1\u5224\u7b2c\u4e8c\u4e2a\u8fdb\u7403\u54ea\u513f\u72af\u89c4\u4e86\uff01\u5982\u679c\u662f\u4e4b\u524d\u62a2\u5965\u65af\u5361\u7403\u90a3\u4e0b\uff0c\u90a3\u53ef\u662f\u5c31\u5728\u88c1\u5224\u773c\u76ae\u5b50\u5e95\u4e0b\uff0c\u4f60\u5f53\u65f6\u4e0d\u5439\u7b49\u9c81\u80fd\u8fdb\u4e86\u518d\u5439\uff0c\u53bb\u4f60nnd\uff01", "up": 11}], "3": [{"content": "\u7533\u82b1\u7403\u8ff7\u591f\u65e0\u804a\u7684\uff0c\u4eba\u6b66\u78ca\u53c8\u6ca1\u62db\u60f9\u4f60\u4eec\uff0c\u600e\u4e48\u4e0d\u9a82\u6d69\u514b\u5965\u65af\u5361\u554a\uff0c\u7a9d\u91cc\u6597\uff0c\u8e22\u4e2a\u7403\u771f\u4e0d\u81f3\u4e8e", "up": 750}, {"content": "\u611f\u89c9\u4f69\u96f7\u62c9\u65e0\u8bba\u662f\u80fd\u529b\u8fd8\u662f\u4eba\u54c1\u90fd\u6bd4\u535a\u963f\u65af\u5f3a\u592a\u591a\uff0c\u6bcf\u4e2a\u7403\u961f\u90fd\u77e5\u9053\u4e0a\u5c97\u7684\u5957\u8def\u8fdb\u653b\u5f88\u4f9d\u8d56\u5965\u65af\u5361\u8ddf\u6d69\u514b\uff0c\u8d5b\u524d\u53d1\u5e03\u4f1a\u4e5f\u8bf4\u4e86\u4f1a\u6d3e\u4e09\u4e2a\u7403\u5458\u9632\u6d69\u514b\uff0c\u4eca\u5929\u4e3b\u6253\u6b66\u78ca\uff0c\u5965\u65af\u5361\u4eca\u5929\u5f88\u5c11\u5f80\u7981\u533a\u8d70\uff0c\u4e00\u76f4\u5728\u7ec4\u7ec7\uff0c\u611f\u89c9\u5b8c\u5168\u628a\u5bcc\u529b\u90fd\u6253\u8499\u4e86\uff0c\u4eca\u5929\u770b\u5230\u4f69\u96f7\u62c9\u5728\u8fdb\u7403\u540e\u6fc0\u60c5\u5e86\u795d\uff0c\u6211\u90fd\u4e50\u4e86", "up": 298}, {"content": "\u6ca1\u4e86\u5965\u65af\u5361\u548c\u80e1\u5c14\u514b\u4e24\u6761\u5927\u817f\uff0c\u4e0a\u6e2f\u7eb8\u7cca\u7684\u540e\u9632\u7ebf\u5c31\u663e\u51fa\u6765\u4e86\u3002\u91cc\u76ae\u8981\u662f\u518d\u62db\u4e0a\u6e2f\u7684\u540e\u573a\uff0c\u90a3\u771f\u662f\u4f5c\u6b7b\u4e86\u3002", "up": 215}, {"content": "\u6211\u662f\u4e0a\u6d77\u4eba \u8bf4\u51e0\u70b91.\u6052\u5927\u66f4\u6709\u63a7\u5236\u529b \u4e09\u4e2a\u5916\u63f4\u5f88\u5f3a 2.\u4e0a\u6e2f\u80e1\u5c14\u514b\u592a\u6bd2 \u597d\u591a\u673a\u4f1a\u90fd\u88ab\u4ed6\u6325\u970d \u5965\u65af\u5361\u7684\u4f20\u7403\u592a\u9a9a \u57c3\u5c14\u514b\u68ee\u5c04\u672f\u592a\u597d3.\u6bd4\u5206\u7684\u5929\u5e73\u4e0d\u5728\u4e8e\u5916\u63f4\u800c\u5728\u4e8e\u56fd\u5185 \u53c2\u7167\u6b66\u7403\u738b\u548c\u90dc\u98de\u673a4.\u6052\u5927\u7403\u98ce\u53ef\u4ee5 \u6709\u5f3a\u8005\u98ce\u8303 \u4e0d\u8fc7\u591a\u7ea0\u7f20\u88c1\u5224 \u52a8\u4f5c\u4e5f\u63a7\u5236\u4e0d\u9519 \u76f8\u6bd4\u4e8e\u67d0\u961f\u597d\u592a\u591a5.\u4e0a\u6e2f\u53bb\u5e74\u88ab\u4e3b\u6559\u7ec3\u5751\u4e86 \u8282\u594f\u4e5f\u88ab\u5e26\u4e86\u592a\u591a \u88ab\u5168\u56fd\u4eba\u6c11\u4e0d\u5f85\u89c1\u4e86 \u8fd8\u662f\u8981\u62ff\u6210\u7ee9\u8bf4\u8bdd \u4e0d\u8981\u62d8\u6ce5\u4e8e\u8d5b\u573a\u5916\u7684\u4e1c\u897f \u8e22\u7403\u8fd8\u662f\u5f88\u597d\u770b\u7684 \u552f\u4e00\u53ef\u4ee5\u8ddf\u6052\u5927\u6273\u624b\u8155\u76846.\u88c1\u5224\u5f88\u51fa\u8272 \u5c31\u662f\u6700\u540e\u8865\u4e86\u7a0d\u5fae\u957f\u4e86\u70b9 \u4e0d\u8fc7\u8003\u8651\u8865\u65f6\u9636\u6bb5\u6709\u7403\u5458\u53d7\u4f24\u4e5f\u5ffd\u7565\u4e0d\u8ba1\u4e867.\u6b66\u78ca\u62ff\u91d1\u9774", "up": 14}, {"content": "\u7b11\u4e86\uff0c\u6700\u540e\u4e0a\u6e2f\u56f4\u653b\u88c1\u5224\u7ed3\u679c\u5c31\u5415\u6587\u541b\u5403\u4e86\u4e00\u5f20\u9ec4\u724c\uff1f\u8d3a\u60ef\uff0c\u5965\u65af\u5361\uff0c\u6d69\u514b\u90fd\u5e94\u8be5\u5403\u724c\uff0c\u4e2d\u8d85\u7403\u5458\u813e\u6c14\u8d8a\u6765\u8d8a\u5927\u8bf4\u4e0d\u5b9a\u5c31\u662f\u8fd9\u79cd\u8f6f\u5f31\u7684\u88c1\u5224\u5bb3\u7684", "up": 12}], "4": [{"content": "\u624e\u54c8\u7ef4\u5df2\u9080\u8bf7\u5965\u65af\u5361\u3001\u6b66\u78ca\u52a0\u5165\u4e2d\u8d85\u9996\u8f6e\u5e3d\u5b50\u620f\u6cd5\u7fa4\u3002\u6d69\u514b\u4e5f\u7533\u8bf7\u52a0\u7fa4\uff0c\u7406\u7531\u662f\u4ed6\u4eca\u5929\u4e0a\u6f14\u4e86\u6253\u98de\u673a\u5e3d\u5b50\u620f\u6cd5\uff0c\u7ed3\u679c\u88ab\u7ba1\u7406\u5458\u963f\u5170\u62d2\u7edd\u3002", "up": 1360}, {"content": "\u770b\u5b8c\u8fd9\u8f6e\u6bd4\u8d5b\uff0c\u6211\u5f97\u6279\u8bc4\u5854\u5c14\u5fb7\u5229\u4e86\uff0c\u4f5c\u4e3a\u5df4\u897f\u4eba\uff0c\u4f60\u770b\u770b\u963f\u5170\uff0c\u5965\u65af\u5361\u90fd\u6234\u5e3d\u5b50\u4e86\uff0c\u4f60\u4e0d\u89c9\u5f97\u7f3a\u70b9\u513f\u4ec0\u4e48\u5417\uff1f", "up": 665}, {"content": "\u5965\u65af\u5361\u4e00\u5bf9\u4e09\u4f20\u51fa\u7403\uff0c\u88ab\u5305\u56f4\u53ef\u4ee5\u8d62\u7684\u754c\u5916\u7403\uff0c\u5999\u4f20\u8ba9\u5bf9\u65b9\u90fd\u53cd\u5e94\u4e0d\u8fc7\u6765\uff0c\u7403\u5546\u548c\u9ad8\u6c34\u5e73\u771f\u7684\u662f\u5962\u4f88\u554a", "up": 236}, {"content": "\u70ed\u9e1f\uff1a\u70b9\u7403\u4e3a\u5565\u4e0d\u8ba9\u547d\u4e2d\u7387\u767e\u5206\u767e\u7684\u5c0f\u9a6c\u54e5\u6765\u7f5a\uff1f\u5965\u65af\u5361\uff1a\u6d69\u514b\u5355\u5200\u65f6\u6ee1\u8111\u5b50\u662f\u4e0d\u662f\u5728\u60f3\u6b66\u7403\u738b\uff1f\u6b66\u78ca\uff1a\u90fd\u770b\u6211\u5e72\u561b\uff0c\u6211\u73b0\u57289\u7403\u5c04\u624b\u699c\u7b2c\u4e00", "up": 208}, {"content": "\u4e0a\u6e2f\u662f\u600e\u4e48\u88ab\u6dd8\u6c70\u7684\uff1f\u6743\u5065\u73b0\u5728\u662f\u6b8b\u9635\uff0c\u6838\u5fc3\u540e\u8170\u7ef4\u7279\u585e\u5c14\u6ca1\u6765\uff0c\u4e3b\u529b\u4e2d\u536b\u88ab\u5f81\u8c03\uff0c\u4f60\u8ba9\u4e0a\u6e2f\u628a\u5965\u65af\u5361\u6216\u8005\u80e1\u5c14\u514b\u62ff\u6389\u770b\u770b\uff0c\u4ec0\u4e48\u90fd\u4e0d\u662f\uff0c\u6052\u5927\u5168\u56fd\u811a\u6ca1\u4e86\u4fdd\u5229\u5c3c\u5965\u4e5f\u662f\u70c2\u6210\u6e23", "up": 18}], "5": [{"content": "\u5965\u65af\u5361\uff1a\u4e0a\u4e00\u6b21\u89c1\u8bc1\u4e00\u573a8\u4e2a\u7403\uff0c\u8fd8\u662f\u4e16\u754c\u676f\u6253\u5fb7\u56fd\u2026", "up": 769}, {"content": "\u672c\u6765\u6253\u7b97\u5f52\u5316\u6d69\u514b\u5965\u65af\u5361\u57c3\u5c14\u514b\u68ee\uff0c\u7ed3\u679c\u6b66\u78ca\u88ab\u4ed6\u4eec\u5f52\u5316\u5e26\u5df4\u897f\u4e86[\u6342\u8138]", "up": 690}, {"content": "\u5965\u65af\u5361\u7684\u4f20\u7403\u662f\u771f\u7684\u53fc\uff01[\u9707\u60ca]", "up": 278}, {"content": "\u8fd9\u8d5b\u5b63\u4e0a\u6e2f\u8981\u662f\u80fd\u593a\u51a0\uff0c\u8db3\u7403\u5148\u751f\u5c31\u662f\u5965\u65af\u5361\u7684\u4e86\uff01\u53ef\u60dc\u6052\u5927\u4e0d\u613f\u610f\u3002", "up": 119}, {"content": "\u80e1\u5c14\u514b\u5bf9\u5965\u65af\u5361\u8bf4\uff1a\u5144\u5f1f\u3001\u6211\u4fe9\u4eca\u665a\u4e00\u8d77\u53bb\u6d17\u811a\u57ce\u3001\u6d17\u811a\ud83d\ude02", "up": 90}], "6": [{"content": "[\u6ed1\u7a3d]\u672c\u573a\u6700\u4f73\u5965\u65af\u5361\uff0c\u8fdb\u4e00\u7403\u6d88\u4e00\u7403", "up": 900}, {"content": "\u89c9\u5f97\u5965\u65af\u5361\u4eca\u5929\u8e22\u51fa\u4e86\u8eab\u4ef7\u7684\u9876\u8d5e\u5427\uff01", "up": 148}, {"content": "\u73b0\u5728\u770b\u6765\uff0c\u5965\u65af\u5361\u4e0a\u8d5b\u5b63\u505c\u8d5b\u662f\u6700\u7ec8\u6052\u5927\u80fd\u62ff\u51a0\u519b\u7684\u91cd\u8981\u4fdd\u8bc1\uff0c\u62ff\u7403\u7ec4\u7ec7\u592a\u5f3a\uff0c\u52a0\u5f3a\u7248\u7684\u5b54\u5361\uff0c\u54ce\uff0c\u770b\u7740\u7ade\u4e89\u5bf9\u624b\u4e00\u5468\u53cc\u8d5b\u8fd8\u79ef\u6781\u62fc\u62a2\uff0c\u60ed\u6127\uff01", "up": 111}, {"content": "\u9632\u5b88\u65f6\u5c42\u5c42\u7d27\u51d1\uff0c\u540e\u8170\u4e0e\u540e\u536b\u4e4b\u95f4\u7684\u534f\u8c03\u975e\u5e38\u597d\uff0c\u6709\u597d\u51e0\u6b21\u90fd\u662f\u540e\u536b\u76f4\u63a5\u65ad\u7403\u4ea4\u7ed9\u827e\u54c8\u6216\u8005\u5965\u65af\u5361\u76f4\u63a5\u53d1\u52a8\u53cd\u51fb\u3002\u5728\u53cd\u51fb\u65f6\uff0c\u524d\u573a\u4e09\u4e2a\u70b9\u8dd1\u7684\u5206\u6563\uff0c\u5374\u5f88\u6709\u89c4\u5f8b\uff0c\u6b66\u78ca \u80e1\u5c14\u514b \u524d\u53c9\u7684\u5965\u65af\u5361 \u6216\u827e\u54c8\u5728\u523b\u610f\u7684\u626f\u5f00\u7533\u82b1\u4e2d\u540e\u536b\u4e4b\u95f4\u7684\u7a7a\u5f53\uff0c\u4e4b\u540e\u8981\u4e48\u662f\u6b66\u78ca\u6216\u80e1\u5c14\u514b\u5728\u4e48\u662f\u521a\u4e0a\u573a\u7684\u5415\u6587\u541b\u4e00\u51fb\u81f4\u547d\u3002\u770b\u6765\u4e0a\u6e2f\u8fd9\u4e2a\u51ac\u5929\u771f\u7684\u662f\u6ca1\u5c11\u7ec3\u3002\u540e\u65b9\u7403\u5458\u7ecf\u9a8c\u6709\u589e\u957f\u4e86\uff0c\u524d\u573a\u653b\u51fb\u7403\u5458\u914d\u5408\u66f4\u9ed8\u5951\u4e86\u3002\u8981\u8bf4\u4e0a\u6e2f\u80fd\u51fa\u6210\u7ee9\u6211\u4e5f\u5c31\u89c9\u5f97\u662f\u4eca\u5e74\u4e86\u3002\u3002[\u52a0\u6cb9][\u52a0\u6cb9][\u52a0\u6cb9]", "up": 15}, {"content": "\u9a6c\u6797\u5fc5\u987b\u8981\u627f\u62c5\u4e3b\u8981\u8d23\u4efb\u3002\u6052\u5927\u4e0a\u8d5b\u5b63\u5ba2\u573a\u76840:4\u5df2\u7ecf\u8bc1\u660e\u4e86\u5ba2\u573a\u8e22\u4e0a\u6e2f\u8fd9\u6837\u7684\u7403\u961f\u5927\u4e3e\u8fdb\u653b\u662f\u591a\u4e48\u611a\u8822\u7684\u4e8b\u60c5\uff0c\u5c24\u5176\u662f\u4f60\u7684\u5916\u63f4\u5230\u961f\u624d3\u5929\u3002\u6211\u6562\u8bf4\u5982\u679c\u6ca1\u6709\u5361\u62c9\u65af\u79d1\u76d6\u5766\u7684\u8f6c\u4f1a\u4eca\u5929\u7684\u5927\u8fde\u7edd\u4e0d\u4f1a\u4e22\u7403\u540e\u5927\u4e3e\u538b\u4e0a\uff0c\u9ad8\u4f30\u81ea\u5df1\u4f4e\u4f30\u654c\u4eba\u5c31\u79bb\u6b7b\u4e0d\u8fdc\u4e86\u3002\u4e0a\u6e2f\u7ecf\u8fc7\u4e24\u4e2a\u8d5b\u5b63\u7a33\u5b9a\u7684\u4eba\u5458\u914d\u5907\u953b\u70bc\uff0c\u79bb\u6536\u83b7\u786e\u5b9e\u8d8a\u6765\u8d8a\u8fd1\u4e86\uff0c\u7279\u522b\u662f\u53cd\u51fb\u4e2d\u5965\u65af\u5361\u5728\u4e2d\u573a\u7684\u6700\u540e\u4e00\u4f20\u80fd\u529b\u81f3\u5173\u91cd\u8981\uff0c\u524d\u573a\u51e0\u4e2a\u4eba\u5305\u62ec\u827e\u54c8\u8fc8\u591a\u592b\u7684\u914d\u5408\u5df2\u7ecf\u5f62\u6210\u4f53\u7cfb\uff0c\u7a7f\u900f\u6027\u6781\u5f3a\uff0c\u6b66\u78ca\u5982\u679c\u518d\u63d0\u9ad8\u5c04\u95e8\u6210\u529f\u7387\u90a3\u4f1a\u662f\u975e\u5e38\u53ef\u6015\u7684\u3002\u4e0a\u6e2f\u7684\u95ee\u9898\u4e00\u662f\u6253\u53cd\u51fb\u7545\u5feb\u6dcb\u6f13\uff0c\u4f46\u6253\u9635\u5730\u6218\u529e\u6cd5\u4e0d\u591a\u3002\u4e8c\u662f\u677f\u51f3\u6df1\u5ea6\u4f9d\u7136\u4e0d\u591f\uff0c\u524d\u573a\u5c31\u8fd9\u51e0\u4e2a\u4eba\uff0c\u4e00\u65e6\u6709\u4eba\u53d7\u4f24\u6216\u8005\u72b6\u6001\u4e0d\u597d\u6574\u4e2a\u961f\u90fd\u53d7\u5f71\u54cd\u3002\u6628\u5929\u5e7f\u5dde\u5fb7\u6bd4\u770b\u5f97\u8361\u6c14\u56de\u80a0\uff0c\u4eca\u5929\u5927\u8fde\u56de\u5f52\u770b\u5f97\u550f\u5618\u4e0d\u5df2\uff0c\u4eca\u5e74\u7684\u4e2d\u8d85\u786e\u5b9e\u503c\u5f97\u671f\u5f85\u3002", "up": 11}]};
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
