var data = {"person_name": "\u963f\u5170", "nicknames": "\u963f\u5170", "aspects": {"\u5916\u63f4": 0.4021283893788766, "\u6bd4\u8d5b": 0.49108936401453546, "\u8fdb\u7403": 0.5415225369929811, "\u7403\u5458": 0.5099157615567642, "\u7ea2\u724c": 0.5759409279066129, "\u7403\u8ff7": 0.5110061761957643, "\u8d5b\u5b63": 0.5742548628903352, "\u4e0b\u534a\u573a": 0.5789156915718753, "\u70b9\u7403": 0.34841899864200887, "\u505c\u8d5b": 0.47790848619906884}, "overall_heat": 576.0, "overall_polar": 0.028, "name": "11", "nationality": "\u5df4\u897f", "position": "\u524d\u950b", "goal": "14", "assist": "5", "team_name": "\u5e7f\u5dde\u6052\u5927\u6dd8\u5b9d", "name_en": "Alan Douglas Borges ", "age": "29", "height": "184", "weight": "75"};
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
var topic_keywords = {"0": [{"name": "\u963f\u5170", "value": 0.05138339920948617}, {"name": "\u6052\u5927", "value": 0.012698679673702801}, {"name": "\u9ad8\u62c9\u7279", "value": 0.011857707509881424}, {"name": "\u8fdb\u7403", "value": 0.011857707509881424}, {"name": "\uff01", "value": 0.011857707509881424}, {"name": "\u4e00\u4e2a", "value": 0.011016735346060047}, {"name": "\ud83d\udc4d", "value": 0.00933479101841729}, {"name": "\u6253", "value": 0.00933479101841729}, {"name": "\u8138", "value": 0.007652846690774535}, {"name": "\u6342", "value": 0.007652846690774535}, {"name": "\u5bcc\u529b", "value": 0.006811874526953158}, {"name": "MVP", "value": 0.006811874526953158}, {"name": "11", "value": 0.006811874526953158}, {"name": "\u624e\u54c8\u7ef4", "value": 0.005970902363131781}, {"name": "\u90dc\u6797", "value": 0.005970902363131781}, {"name": "\u8fd9\u573a", "value": 0.005129930199310403}, {"name": "\u88c1\u5224", "value": 0.005129930199310403}, {"name": "\u65f6\u95f4", "value": 0.005129930199310403}, {"name": "\u5367\u5e95", "value": 0.005129930199310403}, {"name": "\u5b8c\u5168", "value": 0.005129930199310403}, {"name": "\u6f02\u4eae", "value": 0.005129930199310403}, {"name": "\u70b9\u7403", "value": 0.004288958035489026}, {"name": "\u9001", "value": 0.004288958035489026}, {"name": "\u624e\u7403\u738b", "value": 0.004288958035489026}, {"name": "\u4e09\u5e26", "value": 0.004288958035489026}, {"name": "\u7ea2\u724c", "value": 0.004288958035489026}, {"name": "\u4e01\u6d77\u5cf0", "value": 0.004288958035489026}, {"name": "\u5bf9\u51b3", "value": 0.0034479858716676475}, {"name": "\u6ce2", "value": 0.0034479858716676475}, {"name": "\u7ea7", "value": 0.0034479858716676475}], "1": [{"name": "\u963f\u5170", "value": 0.04866196701115598}, {"name": "\uff01", "value": 0.03497364998973376}, {"name": "\u6052\u5927", "value": 0.02128533296831155}, {"name": "\u88c1\u5224", "value": 0.012387926904387107}, {"name": "\uff1f", "value": 0.012387926904387107}, {"name": "\u70b9\u7403", "value": 0.011703511053315997}, {"name": "\u5e94\u8be5", "value": 0.010334679351173773}, {"name": "\u5206\u949f", "value": 0.009650263500102663}, {"name": "\u4e00\u4e2a", "value": 0.009650263500102663}, {"name": "\u4e0a\u6e2f", "value": 0.008965847649031551}, {"name": "\u6253", "value": 0.008281431797960441}, {"name": "\u90dc\u6797", "value": 0.00759701594688933}, {"name": "\u9ad8\u62c9\u7279", "value": 0.00759701594688933}, {"name": "\u7403", "value": 0.00759701594688933}, {"name": "\u8e22", "value": 0.00759701594688933}, {"name": "\u5224", "value": 0.006912600095818219}, {"name": "\u5224\u7f5a", "value": 0.006228184244747108}, {"name": "\u5965\u65af\u5361", "value": 0.005543768393675997}, {"name": "\u4e0a\u5c97", "value": 0.005543768393675997}, {"name": "\u5916\u63f4", "value": 0.005543768393675997}, {"name": "\u6bd4\u8d5b", "value": 0.005543768393675997}, {"name": "\u90d1\u9f99", "value": 0.004859352542604887}, {"name": "\u7981\u533a", "value": 0.004859352542604887}, {"name": "\u4f5c\u7528", "value": 0.004174936691533776}, {"name": "\u8fdb\u7403", "value": 0.004174936691533776}, {"name": "\u8e22\u5012", "value": 0.004174936691533776}, {"name": "\uff1b", "value": 0.004174936691533776}, {"name": "\u5fb7\u5229", "value": 0.004174936691533776}, {"name": "\u91d1\u82f1\u6743", "value": 0.004174936691533776}, {"name": "\u4eba", "value": 0.003490520840462665}], "2": [{"name": "\u963f\u5170", "value": 0.04894119597198624}, {"name": "\uff01", "value": 0.037337864158136835}, {"name": "\u6052\u5927", "value": 0.026977746467199866}, {"name": "\u9ad8\u62c9\u7279", "value": 0.01951846172972525}, {"name": "\uff1f", "value": 0.011230367576975675}, {"name": "\u72b6\u6001", "value": 0.00957274874642576}, {"name": "\u597d", "value": 0.008329534623513324}, {"name": "\u8e22", "value": 0.007500725208238366}, {"name": "\u73b0\u5728", "value": 0.007500725208238366}, {"name": "\u90d1\u667a", "value": 0.007086320500600887}, {"name": "\u4e00\u4e2a", "value": 0.007086320500600887}, {"name": "\u90d1\u9f99", "value": 0.007086320500600887}, {"name": "\u4e09\u4e2a", "value": 0.00625751108532593}, {"name": "\u7b11", "value": 0.00625751108532593}, {"name": "\u8fdb\u7403", "value": 0.00625751108532593}, {"name": "\u5916\u63f4", "value": 0.005843106377688451}, {"name": "\u5854\u5229\u65af\u5361", "value": 0.005843106377688451}, {"name": "\u7403", "value": 0.005843106377688451}, {"name": "\u4fdd\u5229\u5c3c\u5965", "value": 0.005843106377688451}, {"name": "\u54ed", "value": 0.0054287016700509715}, {"name": "\u7403\u8ff7", "value": 0.0054287016700509715}, {"name": "\u8fdb", "value": 0.0054287016700509715}, {"name": "\u4e0d\u9519", "value": 0.005014296962413493}, {"name": "\u5361\u5e05", "value": 0.004599892254776014}, {"name": "\u4e0d\u597d", "value": 0.004185487547138536}, {"name": "\u4e2d\u8d85", "value": 0.004185487547138536}, {"name": "\u90dc\u6797", "value": 0.004185487547138536}, {"name": "\u51a0\u519b", "value": 0.0037710828395010566}, {"name": "\u4eba", "value": 0.0037710828395010566}, {"name": "\u52a0\u6cb9", "value": 0.0037710828395010566}], "3": [{"name": "\u963f\u5170", "value": 0.06497194239740382}, {"name": "\uff1f", "value": 0.030491515110540195}, {"name": "\u9ad8\u62c9\u7279", "value": 0.018998039348252317}, {"name": "\u6052\u5927", "value": 0.014941518490974243}, {"name": "\u5c81", "value": 0.013589344871881551}, {"name": "\u5916\u63f4", "value": 0.007504563585964438}, {"name": "\u60f3", "value": 0.007504563585964438}, {"name": "\u90dc\u6797", "value": 0.006152389966871746}, {"name": "\u8d70", "value": 0.006152389966871746}, {"name": "\u7981\u8d5b", "value": 0.005476303157325401}, {"name": "\u4e0b", "value": 0.005476303157325401}, {"name": "\u51e0\u573a", "value": 0.005476303157325401}, {"name": "\u9f13\u638c", "value": 0.005476303157325401}, {"name": "\u7ea2\u724c", "value": 0.005476303157325401}, {"name": "\u7f5a", "value": 0.004800216347779055}, {"name": "\u5f20\u7433\u8283", "value": 0.004800216347779055}, {"name": "\u8d5b\u5b63", "value": 0.004800216347779055}, {"name": "\u4e00\u4e2a", "value": 0.004800216347779055}, {"name": "\u4e0a\u6e2f", "value": 0.004124129538232709}, {"name": "\u4e2d\u56fd", "value": 0.004124129538232709}, {"name": "\u8db3\u534f", "value": 0.004124129538232709}, {"name": "\u95ee", "value": 0.004124129538232709}, {"name": "\u5168\u534e\u73ed", "value": 0.004124129538232709}, {"name": "\u51e0\u4e2a", "value": 0.004124129538232709}, {"name": "\u90d1\u667a", "value": 0.004124129538232709}, {"name": "\u674e\u5b66\u9e4f", "value": 0.004124129538232709}, {"name": "\u9ec4\u535a\u6587", "value": 0.004124129538232709}, {"name": "\u51af\u6f47\u9706", "value": 0.004124129538232709}, {"name": "\u6bd4\u8d5b", "value": 0.004124129538232709}, {"name": "\u4f30\u8ba1", "value": 0.003448042728686363}], "4": [{"name": "\u963f\u5170", "value": 0.06552468491052155}, {"name": "\uff01", "value": 0.0502054174500383}, {"name": "\u6052\u5927", "value": 0.030708167954877796}, {"name": "\uff1f", "value": 0.016781561172620293}, {"name": "\u9ad8\u62c9\u7279", "value": 0.00981825778149154}, {"name": "\u7981\u8d5b", "value": 0.00842559710326579}, {"name": "\u52a0\u6cb9", "value": 0.007729266764152915}, {"name": "\u4e00\u4e0b", "value": 0.007032936425040039}, {"name": "\u8d5b\u5b63", "value": 0.0056402757468142885}, {"name": "\u7403\u8ff7", "value": 0.004943945407701413}, {"name": "\u73b0\u5728", "value": 0.004943945407701413}, {"name": "\u573a", "value": 0.004943945407701413}, {"name": "\u53d7\u4f24", "value": 0.004943945407701413}, {"name": "\u673a\u4f1a", "value": 0.004247615068588538}, {"name": "\u5361\u7eb3\u74e6\u7f57", "value": 0.004247615068588538}, {"name": "\u5361", "value": 0.004247615068588538}, {"name": "\u771f\u7684", "value": 0.004247615068588538}, {"name": "\u7ee7\u7eed", "value": 0.004247615068588538}, {"name": "\u5916\u63f4", "value": 0.004247615068588538}, {"name": "\u56de\u6765", "value": 0.003551284729475663}, {"name": "\u8fd9\u662f", "value": 0.003551284729475663}, {"name": "\u5b8c\u5168", "value": 0.003551284729475663}, {"name": "\u5e7f\u5dde\u5854", "value": 0.003551284729475663}, {"name": "\u66b4\u529b\u9e1f", "value": 0.003551284729475663}, {"name": "\u51a0\u519b", "value": 0.003551284729475663}, {"name": "\u4e0b", "value": 0.003551284729475663}, {"name": "10", "value": 0.003551284729475663}, {"name": "\u4e9a\u51a0", "value": 0.002854954390362788}, {"name": "\u5446", "value": 0.002854954390362788}, {"name": "\u5f15\u8fdb", "value": 0.002854954390362788}], "5": [{"name": "\u963f\u5170", "value": 0.07410923359281059}, {"name": "\uff01", "value": 0.026643883298525413}, {"name": "\uff1f", "value": 0.020315169925954054}, {"name": "\u5e94\u8be5", "value": 0.011454971204354156}, {"name": "\u6743\u5065", "value": 0.010822099867097021}, {"name": "\u52a8\u4f5c", "value": 0.009556357192582748}, {"name": "\u88c1\u5224", "value": 0.009556357192582748}, {"name": "\u505c\u8d5b", "value": 0.008923485855325613}, {"name": "\u7ea2\u724c", "value": 0.008290614518068477}, {"name": "\u6052\u5927", "value": 0.00639200050629707}, {"name": "\u6253", "value": 0.005759129169039934}, {"name": "\ud83d\ude02", "value": 0.005126257831782798}, {"name": "\u4eba", "value": 0.005126257831782798}, {"name": "\u7403\u5458", "value": 0.005126257831782798}, {"name": "\u89c9\u5f97", "value": 0.005126257831782798}, {"name": "\u8e22", "value": 0.005126257831782798}, {"name": "\u7981\u8d5b", "value": 0.004493386494525663}, {"name": "\u80af\u5b9a", "value": 0.004493386494525663}, {"name": "\u8fdb\u7403", "value": 0.004493386494525663}, {"name": "\u592a", "value": 0.004493386494525663}, {"name": "\u5904\u7f5a", "value": 0.0038605151572685273}, {"name": "\u786e\u5b9e", "value": 0.0038605151572685273}, {"name": "\u5e3d\u5b50\u620f\u6cd5", "value": 0.0038605151572685273}, {"name": "\u77e5\u9053", "value": 0.0038605151572685273}, {"name": "\u7403\u8ff7", "value": 0.0038605151572685273}, {"name": "\u6bd4\u8d5b", "value": 0.0038605151572685273}, {"name": "\u573a", "value": 0.0038605151572685273}, {"name": "\u8ffd\u52a0", "value": 0.0032276438200113918}, {"name": "\u95ee\u9898", "value": 0.0032276438200113918}, {"name": "\u73b0\u5728", "value": 0.0032276438200113918}], "6": [{"name": "\u6052\u5927", "value": 0.024342528157401972}, {"name": "\u963f\u5170", "value": 0.020988792934797797}, {"name": "\u6bd4\u8d5b", "value": 0.010927587266985271}, {"name": "\uff01", "value": 0.010089153461334228}, {"name": "\u4e0a\u6e2f", "value": 0.0095301975909002}, {"name": "\u7403\u5458", "value": 0.0072943741091640825}, {"name": "\u9ad8\u62c9\u7279", "value": 0.0072943741091640825}, {"name": "\u8fdb\u7403", "value": 0.006735418238730053}, {"name": "\u4e00\u4e2a", "value": 0.005896984433079009}, {"name": "\u5e94\u8be5", "value": 0.005617506497861994}, {"name": "\u5916\u63f4", "value": 0.005617506497861994}, {"name": "\u4eca\u5929", "value": 0.005617506497861994}, {"name": "\u597d", "value": 0.00533802856264498}, {"name": "\u90dc\u6797", "value": 0.0047790726922109505}, {"name": "\u8fdb\u653b", "value": 0.0047790726922109505}, {"name": "\uff1f", "value": 0.004499594756993935}, {"name": "\u5361\u5e05", "value": 0.004220116821776921}, {"name": "\u72b6\u6001", "value": 0.004220116821776921}, {"name": "\uff1b", "value": 0.004220116821776921}, {"name": "\u90d1\u667a", "value": 0.004220116821776921}, {"name": "\u70b9\u7403", "value": 0.003940638886559906}, {"name": "\u8f93", "value": 0.003940638886559906}, {"name": "\u8fd9\u573a", "value": 0.003940638886559906}, {"name": "\u673a\u4f1a", "value": 0.003940638886559906}, {"name": "\u80fd\u529b", "value": 0.003940638886559906}, {"name": "\u80e1\u5c14\u514b", "value": 0.003940638886559906}, {"name": "\u5e0c\u671b", "value": 0.003940638886559906}, {"name": "\u5854\u5229\u65af\u5361", "value": 0.003940638886559906}, {"name": "\u4fdd\u5229\u5c3c\u5965", "value": 0.0036611609513428913}, {"name": "\u4e2d\u573a", "value": 0.0036611609513428913}]};
var topic_summary = {"0": [{"content": "\u963f\u5170\u592a\u53ef\u7231\u4e86\uff0c\u559d\u6c34\u7684\u65f6\u5019\u8fd8\u95ee\u88c1\u5224\u559d\u4e0d\u559d\uff0c\u54c8\u54c8\u54c8[\u54c8\u54c8]", "up": 860}, {"content": "\u9ad8\u62c9\u7279\u70b9\u7403\u4e0d\u8fdb\u53ef\u60dc\uff0c\u8d56\u573a\u5730\u4e0d\u591f\u597d\u3002\u963f\u5170\u7ea2\u724c\u6d3b\u8be5\uff0c\u8be5\u91cd\u7f5a\u3002\u90dc\u6797\u5c04\u7684\u597d\u3002\u6052\u5927\u53c8\u96f6\u5c01\u3002\u5361\u5e05\u4e16\u754c\u7ea7\u540e\u536b\uff0c\u611f\u89c9\u63d0\u5347\u4e86\u6052\u5927\u7684\u9632\u5b88\u3002\u4e94\u8fde\u80dc\uff0c\ud83d\udc4d\ud83d\udc4d\ud83d\udc4d", "up": 361}, {"content": "\u963f\u5170\u80af\u5b9a\u4ee5\u4e3a\u88c1\u5224\u778e\u4e86\uff0c\u6ca1\u60f3\u5230\u662f\u9009\u62e9\u6027\u5931\u660e[\u6342\u8138][\u6342\u8138]", "up": 252}, {"content": "\u6700\u4f73\u7403\u5458\u963f\u5170", "up": 122}, {"content": "\u9f50\u8170\u98de\u8e39\uff0c\u6309\u5934\uff0c\u597d\u597d\u5148\u751f\u963f\u5170\u90fd\u88ab\u5218\u60f9\u6bdb\u4e86\u3002", "up": 17}], "1": [{"content": "\u5982\u679c\u9093\u6db5\u6587\u90a3\u4e2a\u624b\u4e0a\u52a8\u4f5c\u662f\u9ec4\u724c\uff0c\u90a3\u4e0b\u534a\u573a68\u5206\u949f\u5de6\u53f3\u8d35\u5dde5\u53f7\u63a8\u5012\u963f\u5170\u7684\u4e3a\u4ec0\u4e48\u6ca1\u724c\uff0c\u8fd8\u6709\u963f\u5170\u7684\u9ec4\u724c\u56de\u653e\u5728\u90a3\u91cc\uff01\u4e0d\u89e3", "up": 149}, {"content": "\u4eca\u5e74\u8054\u8d5b\u548c\u4e0a\u5c97\u6709\u7684\u4e00\u8e22\uff01 \u522b\u4e0d\u670d\uff01\u4f46\u662f\u4e9a\u51a0 \u6052\u5927\u771f\u6253\u4e0d\u8fc7\u4e0a\u5c97 \u56db\u4e2a\u5916\u63f4 \u4e0a\u5c97\u592a\u5f3a\u4e86\uff01\u6052\u5927\u56db\u4e2a\u5916\u63f4\u548c\u4e0a\u5c97\u56db\u4e2a\u5916\u63f4\u6bd4 \u6574\u6574\u5dee\u4e00\u4e2a\u7ea7\u522b\uff01 \u963f\u5170\u662f\u673a\u4f1a\u4e3b\u4e49\u8005 \u6ca1\u6709\u5bf9\u6297\u80fd\u529b\uff01\u8fd9\u662f\u6d69\u514b\u5f3a\u4e8e\u963f\u5170\u7684\u539f\u56e0 \u91d1\u82f1\u6743\u7684\u4f5c\u7528\u66f4\u662f\u6ca1\u6709\u827e\u54c8\u7684\u4f5c\u7528\u5927\uff01\u53e4\u5fb7\u5229\u4e5f\u5f88\u96be\u9632\u4f4f\u5965\u65af\u5361\uff01\u8fd8\u6709\u4e00\u4e2a\u57c3\u795e\uff01\uff01\uff01\u6052\u5927\u73b0\u5728\u8d8a\u6765\u8d8a\u6253\u6574\u4f53\u4e86 \u50cf\u65e5\u97e9\u7403\u961f\u4e00\u6837\uff01\u4e00\u4e2a\u6d69\u514b\u4f1a\u6467\u6bc1\u6052\u5927\u6574\u4e2a\u9632\u7ebf\uff01\u6240\u4ee5\u4e09\u5916\u63f4\u7684\u60c5\u51b5\u4e0b \u6709\u7684\u4e00\u6253 \u56db\u5916\u63f4\u6052\u5927\u6839\u672c\u6253\u4e0d\u8fc7\u4e0a\u5c97 \u6d69\u514b \u5965\u65af\u5361 \u57c3\u795e \u4e09\u4e2a\u4eba\u52a0\u8d77\u6765\u4e00\u4ebf\u591a\u6b27\u5143 \u6052\u5927\u4e09\u4e2a\u5916\u63f4\u52a0\u8d77\u6765\u53ea\u6709\u4e09\u5343\u591a\u4e07\u6b27\u5143 \u8fd9\u5c31\u662f\u5dee\u8ddd\u554a\u2026\u2026 \u6211\u662f\u6052\u8ff7", "up": 69}, {"content": "\u963f\u5170\u771f\u7537\u4eba\uff0c\u672c\u8d5b\u5b63\u591a\u6b21\u88ab\u6076\u610f\u4fb5\u72af\u90fd\u906d\u76f2\u50e7\u65e0\u89c6\uff0c\u603b\u4e8e\u7206\u53d1\u4e86\u4e00\u6b21\u3002[\u9707\u60ca]", "up": 22}, {"content": "\u5982\u679c\u5218\u4e00\u817f\u88ab\u7f5a\u7684\u8bdd\uff0c\u5c31\u6ca1\u6709\u540e\u6765\u963f\u5170\u7684\u62a5\u590d\u4e86\u3002\u6240\u4ee5\u88c1\u5224\u662f\u6709\u8d23\u4efb\u7684\u3002", "up": 16}, {"content": "\u606d\u559c\u6052\u5927\uff0c\u606d\u559c\u90dc\u6797\u4e00\u4f20\u4e00\u5c04\u3001\u9ad8\u62c9\u7279\u4e24\u5c04\u4e24\u4f20\u72ec\u9020\u56db\u7403\u3001\u963f\u5170\u66ff\u8865\u5b8c\u6210\u6885\u5f00\u4e8c", "up": 11}], "2": [{"content": "\u4ee5\u524d\u7684\u6052\u5927\u662f\u201c\u987a\u5883\u770b\u963f\u5170\uff0c\u9006\u5883\u770b\u9ad8\u62c9\u7279\uff0c\u7edd\u5883\u770b\u4fdd\u5229\u5c3c\u5965\u201d\uff0c\u5854\u5229\u65af\u5361\u66ff\u6362\u963f\u5170\u540e\uff0c\u53d8\u6210\u4e86\u201c\u987a\u5883\u770b\u5854\u5229\u65af\u5361\u548c\u4fdd\u5229\u5c3c\u5965\u201d\uff0c\u7136\u540e\u5c31\u6ca1\u4e86\uff0c\u9006\u5883\uff1f\u7edd\u5883\uff1f\u4e0d\u5b58\u5728\u7684", "up": 1852}, {"content": "\u6052\u5927\u4f17\u5c06\uff1a\u667a\u54e5\uff0c\u4e2d\u8d85\u63ed\u5e55\u6218\u54b1\u4eec\u8fdb\u4e86\u56db\u4e2a\uff01 \u90d1\u667a\uff1a\u54c8\u54c8\uff0c\u53ef\u4ee5\u53ef\u4ee5\uff01 \u6052\u5927\u4f17\u5c06\uff1a\u963f\u5170\u5e3d\u5b50\u620f\u6cd5\uff01 \u90d1\u667a\uff1a\u5367\u69fd\uff01\u8ba9\u8fd9\u5c0f\u5b50\u8bf7\u5ba2\uff01 \u5bf9\u4e86\uff0c\u6700\u540e\u8d62\u4e86\u51e0\u4e2a\uff1f \u6052\u5927\u4f17\u5c06\uff1a\u8f93\u4e86\u4e00\u4e2a\u3002 \u90d1\u667a\uff1aMMP\uff01\u6eda\u728a\u5b50\uff01\uff01\uff01", "up": 609}, {"content": "\u4fdd\u5854\u90fd\u8fdb\u7403\u4e86\uff0c\u5c31\u963f\u5170\u6ca1\u6709\u8fdb\u7403\uff0c\u53ef\u662f\u5f53\u963f\u5170\u4e00\u62ff\u7403\u7684\u65f6\u5019\uff0c\u73b0\u573a\u6052\u5927\u7403\u8ff7\u9f50\u558a\u963f\u5170\uff0c\u7ed9\u963f\u5170\u52a0\u6cb9\u9f13\u52b2\uff0c\u6211\u771f\u7684\u88ab\u611f\u52a8\u4e86\uff0c\u6052\u5927\u80fd\u5230\u4eca\u5929\u8fd9\u4e2a\u6210\u5c31\uff0c\u7edd\u5bf9\u6709\u6052\u5927\u7403\u8ff7\u7684\u4e00\u4efd\u529f\u52b3\uff01", "up": 251}, {"content": "\u7edd\u6740\u4e86\uff0c\u201c\u8d85\u201d\u5f00\u5fc3\uff01\u5728\u9ad8\u62c9\u7279\u548c\u963f\u5170\u5747\u7f3a\u5e2d\u7684\u60c5\u51b5\u4e0b\u8270\u96be\u53d6\u80dc\uff0c\u6b8a\u4e3a\u4e0d\u6613\uff01\u4e8e\u6c49\u8d85\u4eca\u5e74\u51e0\u6b21\u4e0e\u8fdb\u7403\u5931\u4e4b\u4ea4\u81c2\uff0c\u5e0c\u671b\u8fd9\u662f\u4e00\u4e2a\u826f\u597d\u7684\u5f00\u7aef\uff0c\u4eca\u5e74\u4e09\u7ebf\u8fdb\u7403\u53ef\u4ee5\u4e0a\u53cc\u3002\u770b\u5230\u8bf4\u90d1\u9f99\u7684\uff0c\u6211\u89c9\u5f97\u4ed6\u5728\u573a\u4e0a\u7684\u6001\u5ea6\u662f\u6ca1\u5f97\u9ed1\u7684\uff0c\u6ee1\u573a\u98de\u5954\uff0c\u79ef\u6781\u62fc\u62a2\uff0c\u53ea\u662f\u6700\u540e\u5904\u7406\u7403\u7684\u5fc3\u6001\u8fd8\u6709\u4e9b\u6025\u8e81\u3002\u7403\u662f\u4e8e\u6c49\u8d85\u8fdb\u7684\uff0c\u5f20\u6587\u948a\u4f20\u7684\u3002\u3002\u3002\u4f46\u662f\uff0c\u4f60\u4eec\u8fd8\u8bb0\u5f97\u7ed9\u5f20\u6587\u948a\u4f20\u7684\u662f\u8c01\u5417\uff1f\u5ed6\u529b\u751f\uff01\u4ece\u4e2d\u5708\u7cbe\u51c6\u957f\u4f20\u7ed9\u5927\u7981\u533a\u53f3\u4fa7\u7684\u5f20\uff0c\u4f9d\u7a00\u770b\u5230\u4e8613\u8d5b\u5b63\u7684\u90a3\u4e2a\u5ed62\uff0c\u4ed6\u5c31\u5e94\u8be5\u662f\u8fd9\u6837\u7684\u5ed62\uff0c\u4e00\u76f4\u4ee5\u4e3a\u4ed6\u5c06\u662f\u6052\u5927\u672a\u6765\u5341\u5e74\u7684\u7ec4\u7ec7\u6838\u5fc3\uff0c\u4e00\u76f4\u671f\u5f85\u4ed6\u7684\u91cd\u65b0\u5d1b\u8d77\u3002\u3002\u3002\u4eca\u5929\uff0c\u5ed6\u529b\u751f\u7684\u8fd9\u811a\u4f20\u7403\u624d\u6700\u8ba9\u6211\u5f00\u5fc3\uff01\uff01\uff01", "up": 33}, {"content": "\u9ad8\u62c9\u7279\u963f\u5170\u6211\u5c31\u4e0d\u5439\u4e86\uff0c\u7ecf\u5e38\u5439\u4e86\uff0c\u6700\u8fd1\u8981\u5439\u5439\u90dc\u6797\uff0c\u4f20\u7ed9\u9ad8\u62c9\u7279\u90a3\u5934\u7403\u771f\u9a9a\uff0c\u8fd8\u6709\u5c31\u662f\u66fe\u8bda\u6bd4\u90a3\u5565\u6f0f\u7535\u7684\u7a33\u591a\u4e86", "up": 27}], "3": [{"content": "\u90d1\u667a38\u5c81\u3001\u51af\u6f47\u970633\u5c81\u3001\u90dc\u679732\u5c81\u3001\u66fe\u8bda31\u5c81\u3001\u9ec4\u535a\u658731\u5c81\u3001\u674e\u5b66\u9e4f30\u5c81\u3001\u5f20\u7433\u828329\u5c81\u3001\u9ad8\u62c9\u727927\u5c81\u3001\u963f\u517029\u5c81\u2026\u2026\uff0c\u9996\u5148\u652f\u6301\u5168\u534e\u73ed\uff0c\u5176\u6b21\u5e73\u574730\u5c81\u7684\u7403\u961f\u771f\u7684\u9700\u8981\u5168\u9762\u6362\u8840\u4e86\uff0c\u9ec4\u535a\u6587\u8e22\u4e86\u5341\u51e0\u5206\u949f\u5c31\u6ee1\u8eab\u5927\u6c57\uff0c\u51af\u6f47\u9706\u548c\u5f20\u7433\u8283\u53ea\u80fd\u7528\u72af\u89c4\u5f25\u8865\u901f\u5ea6\u7f3a\u9677\uff0c\u800c\u5728\u4e0b\u534a\u573a\u540e\u9636\u6bb5\u674e\u5b66\u9e4f\u4e5f\u57fa\u672c\u4e0a\u542f\u52a8\u4e0d\u8d77\u6765\uff0c\u4e8e\u6c49\u8d85\u57fa\u672c\u900f\u652f\u2026\u2026\u770b\u5f97\u60ca\u5fc3\u52a8\u9b44\uff0c\u5f88\u96be\u60f3\u50cf\u660e\u5e74\u4f1a\u600e\u4e48\u6837", "up": 329}, {"content": "\u4e3a\u4ec0\u4e48\u963f\u5170\u88ab\u7ea2\u724c\u7f5a\u4e0b\u65f6\uff0c\u6743\u5065\u4e24\u540d\u961f\u5458\u9f13\u638c\u6ca1\u6709\u88ab\u7f5a\uff1f\u800c\u4e0a\u4e2a\u8d5b\u5b63\u4e0a\u6e2f\u5bf9\u5bcc\u529b\uff0c\u5085\u6b22\u9f13\u638c\u88ab\u5f53\u503c\u4e3b\u88c1\u5224\u7ea2\u724c\u53d1\u4e0b\uff1f\u8fd9\u662f\u53cc\u91cd\u6807\u51c6\u4e48\uff1f", "up": 32}, {"content": "\u5361\u7eb3\u74e6\u7f57\uff1a\u5965\u65af\u5361\u8981\u8fdb\u5df4\u897f\u56fd\u5bb6\u961f\u7684\u8bdd\uff0c\u90a3\u9ad8\u62c9\u7279\u548c\u963f\u5170\u5fc5\u987b\u8fdb", "up": 17}, {"content": "\u8bc4\u8bba\u6709\u70b9\u770b\u4e0d\u4e0b\u53bb\u4e86\uff0c\u5927\u8fde\u662f\u8d62\u7403\u4e86\u3002\u6052\u5927\u963f\u5170\u505c\u4e86\uff0c\u9ad8\u62c9\u7279\u8fd8\u5728\u95f9\uff0c\u6ca1\u5916\u63f4\u8f93\u4e86\u4e5f\u6b63\u5e38\u5427\u3002\u6bd5\u7adf\u5927\u8fde3\u5916\u63f4\u22488\u4e2a\u56fd\u8db3\u7403\u5458\u5440", "up": 10}, {"content": "\u53e4\u5fb7\u91cc\u8fd9\u79cd\u5916\u63f4\u5e72\u8106\u5c31\u522b\u4e0a\u4e86\uff0c\u4f55\u5fc5\u4e3a\u4e86\u5916\u63f4\u800c\u5916\u63f4\uff1f\u5c31\u9ad8\u62c9\u7279\u963f\u5170\u5e26\u7740\u6253\u5427\uff0c\u8981\u4ea4\u5b66\u8d39\u5c31\u4f7f\u52b2\u4ea4\uff0c\u522b\u53c8\u60f3\u8981\u6210\u7ee9\u8fd8\u60f3\u7ec3\u65b0\u4eba\uff0c\u5f53\u7136\uff0c\u8fd9\u51e0\u4e2aU23\u548c\u53bb\u5e74\u7684\u5f90\u65b0\u4e00\u4e2a\u4e0b\u573a\u5df2\u7ecf\u662f\u6ce8\u5b9a\u7684\u4e8b\uff0c\u63d0\u524d\u9000\u4f11\uff0c\u4eab\u53d7\u4f60\u4eec\u7684\u6700\u540e\u4e00\u4e2a\u804c\u4e1a\u8d5b\u5b63\u5427\uff01", "up": 9}], "4": [{"content": "\u603b\u7ed3\u4e00\u4e0b\uff1a\u8fd9\u662f\u5c5e\u4e8e\u624e\u54c8\u7ef4\u548c\u5218\u6bbf\u5ea7pk\u963f\u5170\u548c\u4e01\u6d77\u5cf0\u3002\u90fd\u662f\u65e0\u95f4\u9053\u963f[\u8870][\u8870]", "up": 1275}, {"content": "\u90a3\u4e9b\u65e9\u524d\u8bf4\u5356\u6389\u963f\u5170\u7684\u7403\u8ff7\uff0c\u4f30\u8ba1\u65e9\u5fd8\u4e86\u4eba\u5bb6\u662f\u6b27\u8054\u91d1\u9774\u8fdb\u6765\u6052\u5927\u7684\uff0c\u867d\u8bf4\u9ad8\u62c9\u7279\u662f\u5df4\u7532mvp\uff0c\u5927\u5bb6\u5f53\u65f6\u8eab\u4ef7\u5176\u5b9e\u76f8\u5dee\u4e0d\u8fdc\u7684\uff01\u5dee\u522b\u662f\u9ad8\u6765\u6052\u5927\u540e\u8868\u73b0\u7565\u8d70\u4e0b\u5761\uff0c\u800c\u963f\u5170\u4e00\u76f4\u662f\u4fdd\u6301\u7a33\u5b9a\u5b5c\u5b5c\u4e0d\u5026\u7684\u8d21\u732e\u7740\uff0c\u5374\u8001\u88ab\u4e00\u4e9b\u7403\u8ff7\u9057\u5fd8\uff0c\u751a\u81f3\u8bf4\u7559j\u9a6c\u5356\u963f\u5170\uff0c\u8fd9\u4e48\u597d\u7684\u5916\u63f4\u4f60\u53c8\u600e\u4e48\u820d\u5f97\u5356\uff1f\u963f\u5170\u5e72\u5f97\u6f02\u4eae\uff01", "up": 172}, {"content": "\u6211\uff0c8\u5e74\u6052\u5927\u7403\u8ff7\uff0c \u4f46\u662f\u963f\u5170\u8fd8\u662f\u8981\u7981\u8d5b10\u573a", "up": 152}, {"content": "\u542c\u5317\u4eac\u53f0\u7684\u89e3\u8bf4\uff1a\u963f\u5170\u8fd9\u7403\u7981\u8d5b\u5341\u573a\uff0c\u6211****\uff01", "up": 12}, {"content": "\u8981\u662f\u6052\u5927\u628a\u963f\u5170 \u9ad8\u62c9\u7279\u5356\u8d70\uff0c\u4e70\u4e2a\u66f4NB\u7684\u653b\u51fb\u624b\uff0c\u6211\u4f30\u8ba1\u6052\u5927\u4e2d\u8d8510\u8fde\u51a0\uff0c2020\u5e74\u524d\u4e9a\u51a0\u51a0\u519b\u90fd\u6709\u53ef\u80fd\u3002", "up": 11}], "5": [{"content": "\u6211\u4e0d\u8892\u62a4\u963f\u5170\u548c\u674e\u5b66\u9e4f \u6211\u662f\u6052\u8ff7\uff0c\u4f46\u6743\u5065\u53c8\u8e22\u5f97\u6709\u591a\u5e72\u51c0\uff0c\u7403\u8ff7\u591a\u6709\u7d20\u8d28", "up": 1507}, {"content": "\u624e\u54c8\u7ef4\u5df2\u9080\u8bf7\u5965\u65af\u5361\u3001\u6b66\u78ca\u52a0\u5165\u4e2d\u8d85\u9996\u8f6e\u5e3d\u5b50\u620f\u6cd5\u7fa4\u3002\u6d69\u514b\u4e5f\u7533\u8bf7\u52a0\u7fa4\uff0c\u7406\u7531\u662f\u4ed6\u4eca\u5929\u4e0a\u6f14\u4e86\u6253\u98de\u673a\u5e3d\u5b50\u620f\u6cd5\uff0c\u7ed3\u679c\u88ab\u7ba1\u7406\u5458\u963f\u5170\u62d2\u7edd\u3002", "up": 1360}, {"content": "\u963f\u5170\u90a3\u4e2a\u52a8\u4f5c\u5b8c\u5168\u6ca1\u6709\u5fc5\u8981\u554a\uff0c\u5509", "up": 749}, {"content": "\u770b\u5b8c\u8fd9\u8f6e\u6bd4\u8d5b\uff0c\u6211\u5f97\u6279\u8bc4\u5854\u5c14\u5fb7\u5229\u4e86\uff0c\u4f5c\u4e3a\u5df4\u897f\u4eba\uff0c\u4f60\u770b\u770b\u963f\u5170\uff0c\u5965\u65af\u5361\u90fd\u6234\u5e3d\u5b50\u4e86\uff0c\u4f60\u4e0d\u89c9\u5f97\u7f3a\u70b9\u513f\u4ec0\u4e48\u5417\uff1f", "up": 665}, {"content": "\u90a3\u4e2a\u8c01\u8e22\u963f\u5170\u90a3\u4e00\u811a\u4e00\u5f20\u9ec4\u724c\u90fd\u6ca1\u6709\uff0c\u5dee\u70b9\u628a\u4eba\u8e22\u6b7b\u4e86\u3002\u5728\u7ea2\u724c\u4e4b\u524d\u62c9\u963f\u5170\u90a3\u4e2a\u52a8\u4f5c\u8981\u5439\u72af\u89c4\u5c31\u4e0d\u4f1a\u6709\u963f\u5170\u7684\u52a8\u4f5c\u4e86", "up": 148}], "6": [{"content": "\u4eca\u5929\u51af\u6f47\u9706\u4e0d\u9519.\u4e0d\u9ecf\u7403\u4e86\uff0c\u4f20\u7403\u9632\u5b88\u90fd\u5f88\u597d\uff0c\u90dc\u6797\u7684\u8fdb\u7403\u7ed9\u5bf9\u65b9\u6253\u51fb\u5f88\u5927\uff0c\u5f88\u957f\u65f6\u95f4\u88ab\u538b\u6253\uff0c\u963f\u5170\u672c\u573a\u4e5f\u4e0d\u9519\uff0c\u7075\u6d3b\u5e94\u53d8\u80fd\u529b\u5f3a\uff0c\u5bf9\u65b9\u90fd\u4e0d\u77e5\u9053\u4ed6\u7684\u8dd1\u4f4d\uff0c\u8fdb\u7403\uff0c\u4f20\u7403\uff0c\u5c31\u662f\u4ed6\u548c\u9ad8\u62c9\u7279\u7684\u533a\u522b\u3002\u8fd8\u6709\u5c31\u662f\u90d1\u667a\u80fd\u529b\u771f\u5f3a\uff0c\u4e0d\u8001\uff0c\u4fdd\u5229\u5c3c\u5965\u5854\u5229\u65af\u5361\u4e0d\u7528\u8bf4\u4e86\uff0c\u7edd\u5bf9\u6838\u5fc3\uff0c\u6700\u540e\u60f3\u8bf4\u7684\u662f\u660e\u5929\u4e0a\u6e2f\u8f93\u7403\uff0c\u5bf9\u4e0d\u8d77\u4e86\u3002", "up": 328}, {"content": "\u4eca\u5929\u5176\u4e2d\u6700\u6df1\u523b\u7684\u5370\u8c61\uff0c\u5c31\u662f\u963f\u5170\u8fdb\u7403\u540e\u5728\u8138\u4e0a\u4e00\u5410\u70cf\u6c14\u90a3\u79cd\u8868\u60c5\uff0c\u770b\u4e86\u963f\u5170\u8fd9\u51e0\u5e74\u7684\u8868\u73b0\uff0c\u53d1\u89c9\u4ed6\u4ec0\u4e48\u60c5\u7eea\u90fd\u5199\u5728\u8138\u4e0a\u3002\u867d\u7136\u6709\u65f6\u5019\u662f\u60c5\u5546\u4f4e\u4e86\u4e00\u70b9\uff0c\u4f46\u662f\u8fd9\u79cd\u771f\u8bda\u76f4\u723d\u7684\u7403\u5458\uff0c\u8fd8\u662f\u7279\u522b\u559c\u6b22\uff01", "up": 68}, {"content": "\u4eca\u5929\u7684\u97e9\u56fd\u88c1\u5224\u54e8\u5b50\u5f88\u677e\uff0c\u5728\u5e7f\u5dde\u5854\u7b2c\u4e8c\u4e2a\u8fdb\u7403\u4e4b\u524d\uff0c\u5f88\u591a\u9c81\u80fd\u7684\u72af\u89c4\u90fd\u6ca1\u5439\u300242\u5206\u949f\u5e7f\u5dde\u5854\u7684\u8fdb\u7403\u524d\uff0c\u674e\u5b66\u9e4f\u786e\u5b9e\u662f\u624b\u90e8\u6709\u52a8\u4f5c\u4e86\uff0c\u8fd9\u4e5f\u662f\u4e2d\u56fd\u7403\u5458\u7684\u6bdb\u75c5\u3002\u5728\u90a3\u4e4b\u524d\uff0c\u9c81\u80fd\u7684\u5f88\u591a\u72af\u89c4\u751a\u81f3\u8be5\u62ff\u724c\u7684\u90fd\u6ca1\u4e8b\u3002\u88c1\u5224\u770bVAR\u65f6\uff0c\u611f\u89c9\u8981\u5224\u6052\u5927\u72af\u89c4\uff0c\u8fdb\u7403\u8db3\u7403\uff0c\u4f46\u7ed3\u679c\u663e\u793a\u8fdb\u7403\u6709\u6548\uff0c\u771f\u7684\u6709\u70b9\u610f\u5916\u3002\u5168\u573a\u6bd4\u8d5b\uff0c\u9664\u4e86\u90a3\u4e2a\u63d2\u66f2\uff0c\u5176\u4ed6\u65f6\u95f4\uff0c\u6052\u5927\u7684\u6280\u6218\u672f\uff0c\u7279\u522b\u662f\u5b9d\u5854\u4e24\u4eba\u7684\u53d1\u6325\u771f\u7684\u6ca1\u5f97\u8bf4\u3002\u9c81\u80fd\u7684\u4f69\u83b1\u505c\u7403\u505a\u7403\u4e5f\u4e0d\u9519\uff0c\u4e0d\u8fc7\u6ca1\u4e2d\u573a\u7684\u6709\u6548\u8f93\u9001\uff0c\u673a\u4f1a\u4e0d\u591a\uff0c\u80fd\u8fdb\u7684\u90a3\u7403\u662f\u610f\u5927\u5229\u524d\u950b\u7684\u6807\u5fd7\u6027\u80fd\u529b\u4f53\u73b0\u3002\u90d1\u667a\u4e0b\u573a\u505c\u8d5b\uff0c\u9ec4\u535a\u6587\u53ef\u4ee5\u9876\u4e0a\uff0c\u6709\u5df4\u897f\u4e09\u53c9\u621f\u5728\uff0c\u4f30\u8ba1\u95ee\u9898\u4e0d\u5927\u3002\u4f46\u66ff\u8865\u5e2d\u7684\u5ed6\u529b\u751f\uff0c\u90d1\u9f99\u7b49\u6d41\u4f30\u8ba1\u51c9\u4e86\uff0c\u7279\u522b\u662f\u963f\u5170\uff0c\u73b0\u5728\u8fd9\u60c5\u51b5\u4e0b\uff0c\u53ea\u80fd\u5e72\u5750\u3002\u5e0c\u671b\u6052\u5927\u518d\u63a5\u518d\u5389\uff0c\u518d\u8d62\u4e09\u573a\uff0c\u4e89\u51a0\u683c\u5c40\u57fa\u672c\u660e\u6717\u4e86\u3002\u51a0\u519b\u7ec8\u5f52\u8fd9\u91cc[\u52a9\u5a01][\u52a9\u5a01]", "up": 14}, {"content": "\u5927\u8fde\u4e00\u65b9\u60f3\u8981\u8fdb\u7403\uff0c\u6559\u7ec3\u9700\u8981\u89e3\u96c7\uff0c\u5361\u62c9\u65af\u79d1\u662f\u4e2a\u8fb9\u524d\u536b\u653b\u51fb\u624b\uff0c\u9700\u8981\u6709\u961f\u5458\u914d\u5408\uff0c\u653e\u5230\u950b\u7ebf\u7b49\u4e8e\u5b64\u7acb\u65e0\u63f4\uff0c\u8fd8\u4e0d\u5982\u62c9\u5230\u4e2d\u573a\u4ee5\u4ed6\u7684\u63a7\u7403\u6280\u672f\u5bfb\u6c42\u914d\u5408\uff0c\u79bb\u76d6\u5766\u6253\u8fb9\u8def\u6ca1\u95ee\u9898\u3002\u518d\u4e00\u4e2a\u5927\u8fde\u672c\u571f\u7403\u5458\u5b9e\u8bdd\u8bf4\u6280\u672f\u592a\u7cd9\uff0c\u65e0\u6218\u672f\u914d\u5408\uff0c\u4f20\u7403\u4e0d\u8fc7\u4e09\u811a\u88ab\u65ad\uff0c\u4e3a\u96be\u6559\u7ec3\u7ec4\u65e0\u4eba\u53ef\u7528\u3002\u5982\u679c\u5361\u62c9\u65af\u79d1\u548c\u76d6\u5766\u6700\u9002\u5408\u4e0b\u5bb6\u662f\u6052\u5927\uff0c\u66ff\u6362\u6389\u963f\u5170\u548c\u53e4\u5fb7\u5229\uff0c\u6b63\u597d\u548c\u9ad8\u62c9\u7279\u4e09\u53c9\u621f\uff0c\u4e24\u8fb9\u8def\u7a81\u51fb\u624b\u52a0\u90dc\u6797\u4e3a\u9ad8\u62c9\u7279\u4f20\u70ae\u5f39\uff0c\u4e8e\u6c49\u8d85\u66ff\u8865\uff0c\u5356\u6389\u91d1\u82f1\u6743\uff0c\u4e70\u4e00\u4e2a\u4e2d\u573a\u94c1\u8170\u4e9a\u6d32\u5916\u63f4\u642d\u6863\u9ec4\u535a\u6587\u4e2d\u573a\uff0c\u540e\u573a\u674e\u5b66\u9e4f\uff0c\u51af\u6f47\u9706\uff0c\u9093\u6db5\u6587\uff0c\u5f20\u7433\u8283\u53cau23\u8f6e\u6362\u3002", "up": 9}, {"content": "\u672c\u573a\u6700\u4f73\uff1a\u963f\u5170\uff01", "up": 9}]};
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
