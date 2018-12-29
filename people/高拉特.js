var data = {"person_name": "\u9ad8\u62c9\u7279", "nicknames": "\u9ad8\u62c9\u7279", "aspects": {"\u8fdb\u7403": 0.4149345374186117, "\u5916\u63f4": 0.4517632580340733, "\u8d8a\u4f4d": 0.2711747496682134, "\u7403\u5458": 0.4634688157933674, "\u6bd4\u8d5b": 0.5359423116100802, "\u70b9\u7403": 0.31524822046832485, "\u72af\u89c4": 0.571748860481402, "\u8fdb\u653b": 0.6293874401401349, "\u7403\u8ff7": 0.444233088516106, "\u4e0b\u534a\u573a": 0.7340406860760872}, "overall_heat": 702.0, "overall_polar": 0.135, "name": "10", "nationality": "\u5df4\u897f", "position": "\u524d\u950b", "goal": "21", "assist": "10", "team_name": "\u5e7f\u5dde\u6052\u5927\u6dd8\u5b9d", "name_en": "Ricardo Goulart Pere", "age": "27", "height": "181", "weight": "80"};
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
var topic_keywords = {"0": [{"name": "\u9ad8\u62c9\u7279", "value": 0.0821592030871399}, {"name": "\uff1f", "value": 0.04491609081934847}, {"name": "\uff01", "value": 0.027865027371443956}, {"name": "\u963f\u5170", "value": 0.020685632235484162}, {"name": "\u6052\u5927", "value": 0.012160100511531904}, {"name": "\u73b0\u5728", "value": 0.007224266355559545}, {"name": "\u597d", "value": 0.006775554159562057}, {"name": "\u7403", "value": 0.00632684196356457}, {"name": "\u7403\u5458", "value": 0.00632684196356457}, {"name": "\u8fdb\u7403", "value": 0.005878129767567083}, {"name": "\u673a\u4f1a", "value": 0.005878129767567083}, {"name": "\u6bd4\u8d5b", "value": 0.005878129767567083}, {"name": "\u611f\u89c9", "value": 0.005429417571569595}, {"name": "\u90d1\u9f99", "value": 0.005429417571569595}, {"name": "\u72b6\u6001", "value": 0.004980705375572108}, {"name": "\u8e22", "value": 0.004531993179574621}, {"name": "\u5439", "value": 0.004531993179574621}, {"name": "\u7403\u8ff7", "value": 0.004531993179574621}, {"name": "\u4e0d\u597d", "value": 0.004531993179574621}, {"name": "\u6700\u8fd1", "value": 0.004531993179574621}, {"name": "\u4e24\u573a", "value": 0.004531993179574621}, {"name": "\u8fd9\u573a", "value": 0.004083280983577134}, {"name": "\u60f3", "value": 0.004083280983577134}, {"name": "\u4fdd\u5229\u5c3c\u5965", "value": 0.004083280983577134}, {"name": "\u70b9\u7403", "value": 0.004083280983577134}, {"name": "\u6ed1\u7a3d", "value": 0.004083280983577134}, {"name": "\u540e", "value": 0.0036345687875796464}, {"name": "\u90dc\u6797", "value": 0.0036345687875796464}, {"name": "\u4e00\u4e2a", "value": 0.0036345687875796464}, {"name": "\u6d6a\u8d39", "value": 0.0036345687875796464}], "1": [{"name": "\u9ad8\u62c9\u7279", "value": 0.024812940140845074}, {"name": "\u6052\u5927", "value": 0.01876100352112676}, {"name": "\u5c81", "value": 0.011058538732394367}, {"name": "\u90dc\u6797", "value": 0.011058538732394367}, {"name": "\u4e8e\u6c49\u8d85", "value": 0.01050836267605634}, {"name": "\u674e\u5b66\u9e4f", "value": 0.01050836267605634}, {"name": "\uff1f", "value": 0.008857834507042256}, {"name": "\u8fd9\u573a", "value": 0.008857834507042256}, {"name": "\u771f\u7684", "value": 0.007207306338028169}, {"name": "\u7403", "value": 0.007207306338028169}, {"name": "\u963f\u5170", "value": 0.007207306338028169}, {"name": "\u7403\u5458", "value": 0.006657130281690141}, {"name": "\u90d1\u667a", "value": 0.006106954225352113}, {"name": "\u6709\u70b9", "value": 0.006106954225352113}, {"name": "\u524d", "value": 0.006106954225352113}, {"name": "\u9ec4\u535a\u6587", "value": 0.005556778169014085}, {"name": "\u5efa\u4e1a", "value": 0.005556778169014085}, {"name": "\u5916\u63f4", "value": 0.005556778169014085}, {"name": "\u4e00\u4e2a", "value": 0.005556778169014085}, {"name": "\u8fdb\u653b", "value": 0.005006602112676057}, {"name": "\u597d", "value": 0.005006602112676057}, {"name": "\u5fb7\u5229", "value": 0.004456426056338028}, {"name": "\u4e2d\u56fd", "value": 0.004456426056338028}, {"name": "\uff01", "value": 0.004456426056338028}, {"name": "\u9093\u6db5\u6587", "value": 0.00390625}, {"name": "\u5f20\u7433\u8283", "value": 0.00390625}, {"name": "\u6bd4\u8d5b", "value": 0.00390625}, {"name": "\u51af\u6f47\u9706", "value": 0.00390625}, {"name": "\u5e94\u8be5", "value": 0.00390625}, {"name": "\u8db3\u7403", "value": 0.00390625}], "2": [{"name": "\u9ad8\u62c9\u7279", "value": 0.06464688101126684}, {"name": "\uff01", "value": 0.02136575982412751}, {"name": "\u6052\u5927", "value": 0.019304754053311352}, {"name": "\uff1f", "value": 0.01586974443528442}, {"name": "\u7403", "value": 0.01037372904644133}, {"name": "\u597d", "value": 0.009686727122835944}, {"name": "\u90dc\u6797", "value": 0.009686727122835944}, {"name": "\u914d\u5408", "value": 0.008312723275625171}, {"name": "\u6700\u540e", "value": 0.0069387194284144}, {"name": "\u70b9\u7403", "value": 0.0062517175048090136}, {"name": "\u8fdb\u7403", "value": 0.0062517175048090136}, {"name": "\u4e0a\u6e2f", "value": 0.005564715581203627}, {"name": "\u90d1\u667a", "value": 0.005564715581203627}, {"name": "\u8fdb", "value": 0.005564715581203627}, {"name": "\u6253", "value": 0.005564715581203627}, {"name": "\u662f\u4e0d\u662f", "value": 0.005564715581203627}, {"name": "\ud83d\udc4d", "value": 0.005564715581203627}, {"name": "\u963f\u5170", "value": 0.004877713657598241}, {"name": "\u505a", "value": 0.004877713657598241}, {"name": "\u8d8a\u4f4d", "value": 0.004877713657598241}, {"name": "\u6218\u672f", "value": 0.004877713657598241}, {"name": "\u4e0b\u534a\u573a", "value": 0.004877713657598241}, {"name": "\u8349\u76ae", "value": 0.004190711733992855}, {"name": "\u89c9\u5f97", "value": 0.004190711733992855}, {"name": "\u540e\u536b", "value": 0.004190711733992855}, {"name": "\u4e0a\u534a\u573a", "value": 0.004190711733992855}, {"name": "\u5389\u5bb3", "value": 0.003503709810387469}, {"name": "\u4fdd\u5229\u5c3c\u5965", "value": 0.003503709810387469}, {"name": "\u8fd9\u573a", "value": 0.003503709810387469}, {"name": "\u5439", "value": 0.003503709810387469}], "3": [{"name": "\u9ad8\u62c9\u7279", "value": 0.05120139467899644}, {"name": "\uff01", "value": 0.028083074357613886}, {"name": "\u6052\u5927", "value": 0.02050329720306223}, {"name": "\u963f\u5170", "value": 0.015955430910331237}, {"name": "\u5854\u5229\u65af\u5361", "value": 0.012544531190782991}, {"name": "\u5916\u63f4", "value": 0.01102857575987266}, {"name": "\uff1f", "value": 0.009512620328962329}, {"name": "\u4fdd\u5229\u5c3c\u5965", "value": 0.009133631471234747}, {"name": "\u9c81\u80fd", "value": 0.007617676040324415}, {"name": "\u8fdb\u7403", "value": 0.007238687182596832}, {"name": "\u6bd4\u8d5b", "value": 0.007238687182596832}, {"name": "\u8e22", "value": 0.006480709467141667}, {"name": "\u4e2d\u8d85", "value": 0.006101720609414084}, {"name": "\u597d", "value": 0.006101720609414084}, {"name": "\u4e00\u4e2a", "value": 0.006101720609414084}, {"name": "\u5df4\u897f", "value": 0.0057227317516865}, {"name": "\u8fdb", "value": 0.0057227317516865}, {"name": "\u7403", "value": 0.005343742893958918}, {"name": "\u4e0d\u884c", "value": 0.005343742893958918}, {"name": "\u73b0\u5728", "value": 0.005343742893958918}, {"name": "\u7403\u5458", "value": 0.004964754036231335}, {"name": "\u57c3\u5c14\u514b\u68ee", "value": 0.004964754036231335}, {"name": "\u524d\u950b", "value": 0.004964754036231335}, {"name": "\u4e24\u4e2a", "value": 0.004585765178503752}, {"name": "\u51a0\u519b", "value": 0.0038277874630485865}, {"name": "\u90dc\u6797", "value": 0.0038277874630485865}, {"name": "\u6c34\u5e73", "value": 0.0038277874630485865}, {"name": "\u786e\u5b9e", "value": 0.0034487986053210037}, {"name": "\u5e94\u8be5", "value": 0.0034487986053210037}, {"name": "\u72b6\u6001", "value": 0.0034487986053210037}], "4": [{"name": "\u9ad8\u62c9\u7279", "value": 0.05188847849398308}, {"name": "\uff01", "value": 0.02746336232574765}, {"name": "\u6052\u5927", "value": 0.025676158703681642}, {"name": "\uff1f", "value": 0.008995591564398903}, {"name": "\u4e9a\u51a0", "value": 0.008399857023710235}, {"name": "\u54ed", "value": 0.007804122483021566}, {"name": "\u5854\u5229\u65af\u5361", "value": 0.007804122483021566}, {"name": "\u7b11", "value": 0.007208387942332897}, {"name": "\u5916\u63f4", "value": 0.007208387942332897}, {"name": "\u4fdd\u5229\u5c3c\u5965", "value": 0.007208387942332897}, {"name": "\u8e22", "value": 0.006612653401644228}, {"name": "\u73b0\u5728", "value": 0.006016918860955558}, {"name": "\u963f\u5170", "value": 0.006016918860955558}, {"name": "\u7403\u7f51", "value": 0.005421184320266889}, {"name": "\u70b9\u7403", "value": 0.005421184320266889}, {"name": "\u90dc\u6797", "value": 0.005421184320266889}, {"name": "\u592a", "value": 0.005421184320266889}, {"name": "\u7403\u961f", "value": 0.00482544977957822}, {"name": "\u8d70", "value": 0.00482544977957822}, {"name": "\u903c", "value": 0.00482544977957822}, {"name": "\u8d5b\u5b63", "value": 0.00482544977957822}, {"name": "\u66b4\u529b\u9e1f", "value": 0.00482544977957822}, {"name": "\u6253", "value": 0.00482544977957822}, {"name": "\u4e2d\u8d85", "value": 0.00482544977957822}, {"name": "\u8fdb\u7403", "value": 0.004229715238889551}, {"name": "\u51e0\u4e2a", "value": 0.004229715238889551}, {"name": "\u5361\u7eb3\u74e6\u7f57", "value": 0.004229715238889551}, {"name": "\u725b", "value": 0.004229715238889551}, {"name": "\u4e00\u4e2a", "value": 0.004229715238889551}, {"name": "\u7403", "value": 0.004229715238889551}], "5": [{"name": "\u9ad8\u62c9\u7279", "value": 0.026271503365744207}, {"name": "\u6052\u5927", "value": 0.01692221391174271}, {"name": "\u4e00\u4e2a", "value": 0.01131264023934181}, {"name": "\uff01", "value": 0.009442782348541512}, {"name": "\u5bcc\u529b", "value": 0.007572924457741212}, {"name": "\u674e\u5b66\u9e4f", "value": 0.006637995512341063}, {"name": "\u8fdb\u7403", "value": 0.006637995512341063}, {"name": "\u7403\u5458", "value": 0.006637995512341063}, {"name": "\u6251", "value": 0.005703066566940912}, {"name": "\u4e09\u4e2a", "value": 0.005703066566940912}, {"name": "\u4eba", "value": 0.004768137621540763}, {"name": "\u963f\u5170", "value": 0.004768137621540763}, {"name": "\u56fd\u811a", "value": 0.004768137621540763}, {"name": "\u8fdb\u653b", "value": 0.004768137621540763}, {"name": "\u7403", "value": 0.004768137621540763}, {"name": "\u4fdd\u5229\u5c3c\u5965", "value": 0.004768137621540763}, {"name": "\u77e5\u9053", "value": 0.004768137621540763}, {"name": "\u5a01\u80c1", "value": 0.0038332086761406134}, {"name": "\u56fd\u5185", "value": 0.0038332086761406134}, {"name": "\u6001\u5ea6", "value": 0.0038332086761406134}, {"name": "\u73b0\u5728", "value": 0.0038332086761406134}, {"name": "\u8e22", "value": 0.0038332086761406134}, {"name": "\u987e\u64cd", "value": 0.0038332086761406134}, {"name": "\u8fd8\u8981", "value": 0.0038332086761406134}, {"name": "\u6cb3\u5357", "value": 0.0038332086761406134}, {"name": "\u8f93\u7403", "value": 0.002898279730740464}, {"name": "\u8096\u667a", "value": 0.002898279730740464}, {"name": "\u4e4c\u7d22", "value": 0.002898279730740464}, {"name": "\u5168\u534e\u73ed", "value": 0.002898279730740464}, {"name": "\u524d", "value": 0.002898279730740464}], "6": [{"name": "\u9ad8\u62c9\u7279", "value": 0.05005988867751709}, {"name": "\u8d8a\u4f4d", "value": 0.033150144437398714}, {"name": "\uff1f", "value": 0.020115549918974143}, {"name": "\u8fdb\u7403", "value": 0.01659268653561615}, {"name": "\u88c1\u5224", "value": 0.015535827520608753}, {"name": "\u72af\u89c4", "value": 0.015183541182272952}, {"name": "\u7403\u5458", "value": 0.012012964137250759}, {"name": "\u9c81\u80fd", "value": 0.01166067779891496}, {"name": "\uff01", "value": 0.011308391460579159}, {"name": "\u811a", "value": 0.011308391460579159}, {"name": "\u5439", "value": 0.010603818783907561}, {"name": "\u5224\u7f5a", "value": 0.009899246107235962}, {"name": "\u90d1\u667a", "value": 0.008137814415556966}, {"name": "\u9632\u5b88", "value": 0.008137814415556966}, {"name": "\u90a3\u7403", "value": 0.0067286690622137685}, {"name": "\u7403", "value": 0.0067286690622137685}, {"name": "VAR", "value": 0.0067286690622137685}, {"name": "\u7b11", "value": 0.00567181004720637}, {"name": "\u54ed", "value": 0.00567181004720637}, {"name": "\u8fb9\u88c1", "value": 0.00567181004720637}, {"name": "\u5e94\u8be5", "value": 0.00531952370887057}, {"name": "\u6052\u5927", "value": 0.004967237370534771}, {"name": "\u95ee\u9898", "value": 0.004967237370534771}, {"name": "\u5355\u5200", "value": 0.004967237370534771}, {"name": "\u70b9\u7403", "value": 0.004614951032198972}, {"name": "\u540e", "value": 0.004614951032198972}, {"name": "var", "value": 0.004614951032198972}, {"name": "\u6bd4\u8d5b", "value": 0.004614951032198972}, {"name": "\u786e\u5b9e", "value": 0.004262664693863172}, {"name": "\u52a8\u4f5c", "value": 0.004262664693863172}], "7": [{"name": "\u6052\u5927", "value": 0.02001547089537807}, {"name": "\u9ad8\u62c9\u7279", "value": 0.01808160897311932}, {"name": "\uff01", "value": 0.01614774705086057}, {"name": "\u4e0a\u6e2f", "value": 0.012602333526719526}, {"name": "\u4e00\u4e2a", "value": 0.008734609682202025}, {"name": "\u963f\u5170", "value": 0.008412299361825566}, {"name": "\u6bd4\u8d5b", "value": 0.008089989041449109}, {"name": "\u6253", "value": 0.007445368400696191}, {"name": "\u5916\u63f4", "value": 0.0071230580803197325}, {"name": "\u597d", "value": 0.006478437439566815}, {"name": "\u7403\u5458", "value": 0.006156127119190357}, {"name": "\u8fdb\u653b", "value": 0.00551150647843744}, {"name": "\u5854\u5229\u65af\u5361", "value": 0.005189196158060982}, {"name": "\u90dc\u6797", "value": 0.005189196158060982}, {"name": "\u80fd\u529b", "value": 0.004222265196931606}, {"name": "\u9c81\u80fd", "value": 0.004222265196931606}, {"name": "\u4fdd\u5229\u5c3c\u5965", "value": 0.004222265196931606}, {"name": "\u5361\u5e05", "value": 0.0038999548765551472}, {"name": "\u8fdb\u7403", "value": 0.0038999548765551472}, {"name": "\u53d1\u6325", "value": 0.0038999548765551472}, {"name": "\u5e94\u8be5", "value": 0.0038999548765551472}, {"name": "\u88c1\u5224", "value": 0.0035776445561786887}, {"name": "\u8e22", "value": 0.0035776445561786887}, {"name": "\uff1f", "value": 0.0035776445561786887}, {"name": "\u9632\u5b88", "value": 0.0035776445561786887}, {"name": "\u7403", "value": 0.0035776445561786887}, {"name": "\u6700\u540e", "value": 0.0032553342358022305}, {"name": "\u72b6\u6001", "value": 0.0032553342358022305}, {"name": "\u80e1\u5c14\u514b", "value": 0.0032553342358022305}, {"name": "\u4eca\u5929", "value": 0.0032553342358022305}]};
var topic_summary = {"0": [{"content": "\u4ee5\u524d\u7684\u6052\u5927\u662f\u201c\u987a\u5883\u770b\u963f\u5170\uff0c\u9006\u5883\u770b\u9ad8\u62c9\u7279\uff0c\u7edd\u5883\u770b\u4fdd\u5229\u5c3c\u5965\u201d\uff0c\u5854\u5229\u65af\u5361\u66ff\u6362\u963f\u5170\u540e\uff0c\u53d8\u6210\u4e86\u201c\u987a\u5883\u770b\u5854\u5229\u65af\u5361\u548c\u4fdd\u5229\u5c3c\u5965\u201d\uff0c\u7136\u540e\u5c31\u6ca1\u4e86\uff0c\u9006\u5883\uff1f\u7edd\u5883\uff1f\u4e0d\u5b58\u5728\u7684", "up": 1852}, {"content": "\u9ad8\u62c9\u7279\u4e24\u573a\u90208\u7403\uff0c\u79bd\u517d\u554a\uff0c\u83ab\u975e\u4ed6\u8981\u8e22\u4e16\u754c\u676f\uff1f", "up": 713}, {"content": "\u4ece\u90d1\u9f99\u90a3\u7403\u5f00\u59cb\uff0c\u6211\u5c31\u9884\u611f\u5230\u5f62\u52bf\u4e0d\u5999\u4e86\u3002\u8fd9\u4e2a\u548c\u8e22\u6b66\u91cc\u5357\u8054\u6700\u540e\u9ad8\u62c9\u7279\u6d6a\u8d39\u673a\u4f1a\uff0c\u88ab\u7edd\u5e73\u6709\u5f97\u4e00\u62fc\u4e86\uff01", "up": 259}, {"content": "\u6cf0\u8fbe\u90a3\u4e2a\u7403\u662f\u597d\u7403\uff0c\u4e0d\u8fc7\u6052\u5927\u4e8e\u6c49\u8d85\u7ed9\u9ad8\u62c9\u7279\u7684\u5355\u5200\u4e5f\u662f\u597d\u7403\u88ab\u5439\uff0c\u975e\u6d17\uff0c\u90fd\u662f\u597d\u7403\u3002\u8fd9\u573a\u9ad8\u62c9\u7279\u548c\u5e7f\u5dde\u5854\u90fd\u4e0d\u5728\u72b6\u6001\uff0c\u4f46\u660e\u663e\u9ad8\u62c9\u7279\u8fd8\u662f\u66f4\u79ef\u6781\u4e00\u4e9b\uff0c\u6001\u5ea6\u6ca1\u5f97\u9ed1\u3002\u66b4\u529b\u9e1f\u7559\u7ed9\u4f60\u4eec\u5439\uff0c\u6885\u82b3\u548c\u4e8e\u6c49\u8d85\u8fd9\u573a\u4e5f\u5f88\u597d\uff0c\u90d1\u667a\u66fe\u8bda\u8fd8\u662f\u90a3\u4e48\u7a33", "up": 205}, {"content": "\u987e\u64cd\uff1a\u9ad8\u62c9\u7279\u4f60\u90fd\u8fdb\u7403\u4e86\u8fd8\u90a3\u4e48\u62fc\u547d\u5e72\u561b \u8d70\u5f00\u51fa\u53bb \u5509\u5440\uff01\u4f60\u8fd9\u5c0f\u5b50\u4e0d\u670d\u662f\u5427\u6211\u518d\u63a8\u4f60\u4e00\u4e0b\u53c8\u600e\u4e86[\u6d41\u6c57][\u6d41\u6c57]", "up": 203}], "1": [{"content": "\u9ad8\u62c9\u7279\u4eca\u5e74\u6ca1\u8d70\u662f\u6b63\u786e\u7684\uff0c\u4e5f\u8bb8\u8fd9\u51e0\u5e74\u771f\u7684\u662f\u9ad8\u62c9\u7279\u7684\u804c\u4e1a\u9ec4\u91d1\u671f\uff0c\u6052\u5927\u597d\u597d\u73cd\u60dc\u5e76\u591a\u52a0\u5229\u7528\u5427\uff01\u90dc\u6797\u90fd30\u591a\u4e86\uff0c\u901f\u5ea6\u548c\u4f53\u529b\u6ca1\u964d\u53cd\u800c\u6da8\u4e86\uff0c\u53ef\u80fd\u662f\u7ed3\u5b8c\u5a5a\u751f\u5b8c\u5c0f\u5b69\u4e0d\u7528\u4ea4\u516c\u7cae\u6709\u66f4\u591a\u7684\u529b\u6c14\u8e22\u7403\u4e86\u5427[\u6342\u8138][\u6342\u8138]", "up": 1946}, {"content": "\u53cc\u811a\u79bb\u5730\u94f2\u674e\u5b66\u9e4f\uff0c\u65e0\u7f18\u65e0\u6545\u63a8\u6421\u9ad8\u62c9\u7279\u8fd8\u9a82\u9a82\u54a7\u54a7\uff0c\u8fd9\u4e2a\u4eba\u5e94\u8be5\u662f\u8981\u88ab\u64e6\u5427\uff1f", "up": 1554}, {"content": "\u90d1\u667a38\u5c81\u3001\u51af\u6f47\u970633\u5c81\u3001\u90dc\u679732\u5c81\u3001\u66fe\u8bda31\u5c81\u3001\u9ec4\u535a\u658731\u5c81\u3001\u674e\u5b66\u9e4f30\u5c81\u3001\u5f20\u7433\u828329\u5c81\u3001\u9ad8\u62c9\u727927\u5c81\u3001\u963f\u517029\u5c81\u2026\u2026\uff0c\u9996\u5148\u652f\u6301\u5168\u534e\u73ed\uff0c\u5176\u6b21\u5e73\u574730\u5c81\u7684\u7403\u961f\u771f\u7684\u9700\u8981\u5168\u9762\u6362\u8840\u4e86\uff0c\u9ec4\u535a\u6587\u8e22\u4e86\u5341\u51e0\u5206\u949f\u5c31\u6ee1\u8eab\u5927\u6c57\uff0c\u51af\u6f47\u9706\u548c\u5f20\u7433\u8283\u53ea\u80fd\u7528\u72af\u89c4\u5f25\u8865\u901f\u5ea6\u7f3a\u9677\uff0c\u800c\u5728\u4e0b\u534a\u573a\u540e\u9636\u6bb5\u674e\u5b66\u9e4f\u4e5f\u57fa\u672c\u4e0a\u542f\u52a8\u4e0d\u8d77\u6765\uff0c\u4e8e\u6c49\u8d85\u57fa\u672c\u900f\u652f\u2026\u2026\u770b\u5f97\u60ca\u5fc3\u52a8\u9b44\uff0c\u5f88\u96be\u60f3\u50cf\u660e\u5e74\u4f1a\u600e\u4e48\u6837", "up": 329}, {"content": "\u6211\u4eec\u5f88\u591a\u4eba\u5f88\u591a\u65f6\u5019\u90fd\u8bf4\u4e2d\u56fd\u8db3\u7403\u5e94\u8be5\u600e\u6837\u600e\u6837\uff0c\u8bf4\u5f88\u591a\u6211\u4eec\u666e\u901a\u7403\u8ff7\u7fa4\u4f17\u6ca1\u80fd\u529b\u53bb\u6539\u53d8\u7684\u4e8b\u3002\u90a3\u6211\u4eec\u80fd\u4e0d\u80fd\u505a\u4e9b\u6211\u4eec\u80fd\u505a\u7684\u4e8b\u5462\uff0c\u6bd4\u5982\u6211\u4eec\u7684\u4ef7\u503c\u89c2\u6211\u4eec\u7684\u7d20\u8d28\u3002\u6bd4\u5982\u8fd9\u573a\u6bd4\u8d5b\uff0c\u5047\u5982\u662f\u674e\u5b66\u9e4f\u66b4\u529b\u98de\u94f2\u4f60\u5efa\u4e1a\u7684\u7403\u5458\uff0c\u4f60\u9a82\u7239\u9a82\u5a18\u5f97\u9a82\u4ed6\u6ca1\u6bdb\u75c5\uff0c\u4f46\u73b0\u5728\u662f\u674e\u5b66\u9e4f\u88ab\u66b4\u529b\u98de\u94f2\uff0c\u6362\u505a\u662f\u4f60\u4f60\u53cd\u5e94\u5e94\u8be5\u4e5f\u4f1a\u5f88\u5927\u5427\uff01\u51b5\u4e14\u90a3\u7403\u5458\u4e00\u5f00\u59cb\u8fd8\u62ff\u5934\u9876\u674e35\uff0c\u5f53\u81ea\u5df1\u662f\u9f50\u8fbe\u5185\uff1f\uff08\u540e\u9762\u8fd8\u6311\u8845\u9ad8\u62c9\u7279\uff09\u53ef\u73b0\u573a\u90e8\u5206\u7684\u5efa\u4e1a\u7403\u8ff7\u5728\u5e72\u561b\u5462\uff1f\u90a3\u9a82\u58f0\u7535\u89c6\u90fd\u5f88\u6e05\u6670\uff0c\u4f60\u4eec\u7684\u529b\u6c14\u4e0d\u7528\u5728\u9f13\u821e\u7403\u5458\u4e0a\u5417\uff1f\u5168\u573a\u5efa\u4e1a\u6709\u591a\u5c11\u6b21\u5c11\u6797\u529f\u592b\u7684\u9632\u5b88\u4f60\u4eec\u4e5f\u6ca1\u770b\u5230\u5417\uff1f\u771f\u7684\uff0c\u8981\u6539\u53d8\u4e2d\u56fd\u8db3\u7403\uff0c\u5148\u4ece\u6211\u4eec\u81ea\u8eab\u7684\u4ef7\u503c\u89c2\u7d20\u8d28\u5148\u6539\u53d8\u53ef\u597d\uff1f", "up": 13}, {"content": "\u90fd\u8bf4\u8fd9\u573a\u662f\u9001\u4eba\u60c5\uff0c\u800c\u6211\u5374\u8bf4\u8fd9\u5c31\u662f\u73b0\u5728\u6052\u5927\u7684\u80fd\u529b\u4f53\u73b0\u3002\u9ad8\u62c9\u7279\u4f24\u4e86\u6ca1\u6709\u524d\u573a\u7ec4\u7ec7\u8fdb\u653b\u7684\uff0c\u8001\u961f\u5458\u6253\u5230\u8d5b\u5b63\u672b\u90fd\u7d2f\u4e86\uff0c\u72b6\u6001\u4e0b\u6ed1\uff0c\u81f3\u4e8e\u5e74\u8f7b\u4eba\uff0c\u5475\u5475\u2026\u2026\u8fd8\u662f\u90a3\u53e5\u8bdd\uff0c\u5fc5\u987b\u6362\u6559\u7ec3\uff0c\u961f\u5458\u5927\u6362\u8840\uff0c\u8981\u4e0d\u4e0b\u8d5b\u5b63\u8fd8\u6ca1\u620f\u3002", "up": 10}], "2": [{"content": "\u9ad8\u62c9\u7279\u8fd9\u8d8a\u4f4d\uff0c\u7cbe\u786e\u5230\u4e24\u5398\u7c73", "up": 605}, {"content": "\u9ad8\u62c9\u7279\u70b9\u7403\u4e0d\u8fdb\u53ef\u60dc\uff0c\u8d56\u573a\u5730\u4e0d\u591f\u597d\u3002\u963f\u5170\u7ea2\u724c\u6d3b\u8be5\uff0c\u8be5\u91cd\u7f5a\u3002\u90dc\u6797\u5c04\u7684\u597d\u3002\u6052\u5927\u53c8\u96f6\u5c01\u3002\u5361\u5e05\u4e16\u754c\u7ea7\u540e\u536b\uff0c\u611f\u89c9\u63d0\u5347\u4e86\u6052\u5927\u7684\u9632\u5b88\u3002\u4e94\u8fde\u80dc\uff0c\ud83d\udc4d\ud83d\udc4d\ud83d\udc4d", "up": 361}, {"content": "\u90dc\u6797\u5355\u5200\u633a\u7a33\uff0c\u9ad8\u62c9\u7279\u8fd9\u573a\u4e5f\u5f88\u65e0\u79c1\uff0c\u5e7f\u5dde\u5854\u57fa\u672c\u64cd\u4f5c\uff0c\u6052\u5927\u7684\u7b2c\u56db\u4e2a\u8fdb\u7403\u4e4b\u524d\u7684\u4e00\u7cfb\u5217\u914d\u5408\u771f\u7684\u7f8e\u5982\u753b\uff0c\u7ee7\u7eed\u52a0\u6cb9\u5427\uff01", "up": 154}, {"content": "\u5439\u4e00\u6ce2\u9ad8\u62c9\u7279\uff0c\u597d\u813e\u6c14\uff0c\u6700\u540e\u7684\u4e00\u4e2a\u5206\u7403\u4e5f\u5f88\u662f\u65e0\u79c1\u3002", "up": 84}, {"content": "\u9ad8\u62c9\u7279\u6bd4\u4e0a\u6e2f\u80e1\u5c14\u514b\u5f3a\u591a\u4e86\ud83d\udc4d", "up": 20}], "3": [{"content": "\u6700\u53ef\u60dc\u7684\u662f\u9ad8\u62c9\u7279\u6ca1\u8fdb\u7403\uff0c\u5fc3\u75bc [\u6342\u8138]", "up": 390}, {"content": "\u770b\u7403\u8d5b\u5374\u6389\u773c\u6cea\u4e86\uff0c\u60f3\u5230\u4e86\u5f88\u591a\uff0c\u9ad8\u62c9\u7279\u633a\u5e05\u7684\uff0c\u611f\u89c9\u6027\u683c\u7279\u597d\uff0c\u4fdd\u5229\u5c3c\u5965\u592a\u7231\u6052\u5927\u4e86\uff0c\u6709\u4f60\u5728\uff0c\u51a0\u519b\u4e5f\u5728\u3002\u5854\u5229\u65af\u5361\uff0c\u8868\u73b0\u4e0d\u9519\uff0c\u592a\u613f\u610f\u8868\u73b0\u4e86\uff0c\u653e\u5fc3\uff0c\u5df4\u897f\u4e3b\u5e05\u4f1a\u5173\u6ce8\u4f60\uff0c\u4e0d\u8981\u6025\uff0c\u8010\u5fc3\u7b49\u5f85\uff0c\u8fd8\u6709\u56fd\u5185\u7403\u5458\u811a\u6cd5\u4e0d\u9519\uff0c\u62fc\u52b2\u5341\u8db3\uff0c\u56fd\u4ea7\u540e\u9632\u4e5f\u4e0d\u9519\uff0c\u66f4\u91cd\u8981\u7684\u56fd\u5b89\u9c81\u80fd\u5e73\u4e86\uff0c\u4e0a\u6e2f\u8f93\u4e86\uff0c\u611f\u8c22\u5361\u62c9\u65af\u79d1\u3002", "up": 226}, {"content": "\u4e0b\u573a\u5854\u5229\u65af\u5361\u505c\u8d5b \u9ad8\u62c9\u7279\u5e94\u8be5\u9996\u53d1\u4e86\uff01\u91cd\u73b02017\u593a\u51a0\u9635\u5bb9\uff01\uff01\uff01", "up": 207}, {"content": "\u4fdd\u5229\u5c3c\u5965\uff1a\u6211\u8fdb\u4e86\u4e24\u4e2a\u2026\u2026\u2026 \u5854\u5229\u65af\u5361\uff1a\u6211\u4e5f\u8fdb\u4e86\u4e24\u4e2a\u2026\u2026\u2026 \u9ad8\u62c9\u7279\uff1a\u6211\u4e5f\u8fdb\u4e86\u4e24\u4e2a\u2026\u2026\u2026\u2026", "up": 168}, {"content": "\u9ad8\u62c9\u7279\u963f\u5170\u4e0d\u4e0a\uff0c\u6052\u5927\u80fd\u8e22\u6210\u8fd9\u6837\u7b97\u4e0d\u9519\u4e86", "up": 20}], "4": [{"content": "\u7206\u529b\u9e1f\u81ea\u5df1\u5403\u4e24\u4e2a\u997c\uff0c\u63b0\u5f00\u9ad8\u62c9\u7279\u7684\u5634\u585e\u4e86\u4e00\u4e2a\u997c", "up": 1577}, {"content": "\u6b63\u503c\u5dc5\u5cf0\u7684\u5854\u5229\u65af\u5361\uff0c\u7ec3\u7ea7\u5f52\u6765\u7684\u4fdd\u5229\u5c3c\u5965\uff0c\u62c5\u5fc3\u4e0b\u5c97\u7684\u9ad8\u62c9\u7279\uff01\u52a0\u4e0a\u9b45\u529b\u5c11\u5e05\u5361\u7eb3\u74e6\u7f57\uff01\u76ee\u524d\u867d\u65e0\u4e9a\u51a0\u53ef\u8bc1\uff0c\u4f46\u6211\u89c9\u5f97\u8fd9\u662f\u5386\u5e74\u6765\u7efc\u5408\u5b9e\u529b\u6700\u5f3a\u7684\u6052\u5927\uff01\u7edd\u4e0d\u6bd4\u4e24\u593a\u4e9a\u51a0\u7684\u65f6\u5019\u5dee\uff01\u6b63\u5e94\u4e86\u90a3\u53e5\u8bdd\uff0c\u8170\u597d\uff0c\u817f\u811a\u5c31\u597d\uff01", "up": 282}, {"content": "\u9ad8\u62c9\u7279\u725b\u903c\uff01\u4e09\u573a9\u7403\u4e86", "up": 224}, {"content": "\u6211\u53ea\u670d\u9ad8\u62c9\u7279\uff0c\u628a\u7403\u7f51\u90fd\u5c04\u7834\u4e86[\u6342\u8138]\u8fd8\u6709\u4fdd\u5229\u5c3c\u5965\u5bf9\u6052\u5927\u662f\u771f\u771f\u771f\u7231\uff0c\u4eca\u5929100\u573a\uff0c\u4ece\u6765\u6ca1\u6709\u89c1\u8fc7\u4fdd\u5229\u5c3c\u5965\u8fd9\u4e48\u5174\u594b\uff0c\u8fd8\u800d\u8d77\u4e86\u82b1\u6d3b\u3002\u5f53\u5e74\u65af\u5361\u62c9\u91cc\u628a\u4f4e\u8c37\u4e2d\u7684\u4fdd\u5229\u5c3c\u5965\u5e26\u5230\u6052\u5927\uff0c\u8ba9\u4fdd\u5229\u5c3c\u5965\u8fce\u6765\u804c\u4e1a\u751f\u6daf\u5dc5\u5cf0\uff0c\u4e00\u6b65\u6b65\u5230\u4e16\u754c\u8c6a\u95e8\u5df4\u8428\u518d\u5230\u4e16\u754c\u676f\uff0c\u51e0\u4e4e\u5b9e\u73b0\u4e86\u4eba\u751f\u6240\u6709\u68a6\u60f3", "up": 217}, {"content": "\u5361\u7eb3\u74e6\u7f57\u7b2c\u4e00\u6b21\u6267\u6559\u6052\u5927\u548c\u73b0\u5728\u6267\u6559\u6052\u5927\uff0c\u90fd\u9047\u5230\u53ea\u6709\u9ad8\u62c9\u7279\u6216\u8005\u53e4\u5fb7\u5229\u5355\u5916\u63f4\u7684\u60c5\u51b5\uff0c\u90fd\u4f1a\u8ba9\u4eba\u89c9\u5f97\u62c5\u5fc3\uff0c\u4f46\u6052\u5927\u7ed9\u51fa\u7684\u90a3\u79cd\u4f17\u5fd7\u8bda\u57ce\uff0c\u8ba9\u4eba\u8083\u7136\u8d77\u656c\uff0c\u52a0\u6cb9[\u51fb\u638c]", "up": 15}], "5": [{"content": "\u987e\u64cd\u4f60\u9664\u4e86\u8981\u7ed9\u674e\u5b66\u9e4f\u548c\u9ad8\u62c9\u7279\u9053\u6b49\u5916\u8fd8\u8981\u7ed9\u987e\u8d85\u9053\u6b49\uff0c\u56e0\u4e3a\u987e\u8d85\u66ff\u4f60\u6328\u4e86\u4e0d\u5c11\u9a82\uff0c\u771f\u8eba\u7740\u4e5f\u4e2d\u67aa\u2026\u2026", "up": 675}, {"content": "\u4e2d\u7acb\u7403\u8ff7\u8bf4\u4e2a\u7ec6\u8282\u3002\u9ad8\u62c9\u7279\u548c\u4fdd\u5229\u5c3c\u5965\u8865\u5c04\u7684\u90a3\u4e24\u4e2a\u7403\uff0c\u4e0d\u77e5\u9053\u5927\u5bb6\u6709\u6ca1\u6709\u53d1\u73b0\uff0c\u6052\u5927\u961f\u5458\u5c04\u95e8\u524d\uff0c\u5927\u5bb6\u90fd\u5728\u5f80\u56de\u8d70\uff0c\u800c\u6052\u5927\u961f\u5458\u5c04\u95e8\u7684\u4e00\u77ac\u95f4\uff0c\u9ad8\u62c9\u7279\u548c\u4fdd\u5229\u5c3c\u5965\u540c\u65f6\u7acb\u9a6c\u53bb\u62a2\u70b9\uff0c\u800c\u5bcc\u529b\u7684\u9632\u5b88\u7403\u5458\u5728\u4e3e\u624b\u793a\u610f\u8d8a\u4f4d\u3002\u3002\u3002\u5c24\u5176\u662f\u4fdd\u5229\u5c3c\u5965\u8fd9\u4e2a\u7403\uff0c\u771f\u7684\u592a\u660e\u663e\u4e86\u3002\u522b\u4eba\u80fd\u529b\u6bd4\u4f60\u5f3a\u4e00\u5927\u5757\uff0c\u8fd8\u6bd4\u4f60\u52e4\u594b\uff0c\u4f60\u8bf4\u4f60\u4e0d\u8f93\u7403\u771f\u6ca1\u5929\u7406\u3002", "up": 16}, {"content": "\u9ad8\u62c9\u7279\u548c\u90dc\u6797\u6210\u4e86\u8fdb\u653b\u7ec8\u7ed3\u8005\u4e86\uff0c\u6210\u77ed\u677f\u4e86", "up": 11}, {"content": "4:1\uff0c\u4e0a\u534a\u573a\u9ad8\u62c9\u7279\u4e00\u4e2a\uff0c\u4e0b\u534a\u573a\u963f\u5947\u59c6\u5f6d\u4e00\u4e2a", "up": 8}, {"content": "\u987e\u64cd\u5b8c\u5168\u662f\u6001\u5ea6\u95ee\u9898\uff0c\u98de\u94f2\u5b8c\u8fd8\u8981\u62ff\u5934\u9876\u674e\u5b66\u9e4f\uff0c\u8fd8\u8981\u52a8\u624b\u63a8\u9ad8\u62c9\u7279\uff0c\u8fd9\u6837\u7684\u7d20\u517b\u548c\u6001\u5ea6\uff0c\u602a\u4e0d\u5f97\u6cb3\u5357\u8f93\u7403\u53c8\u8f93\u4eba\uff0c\u5bf9\u8c61\u5e26\u5934\u8fd9\u6837\u3002", "up": 7}], "6": [{"content": "VR\uff1a\u4f60\u8fd9\u4e48\u786e\u5b9a\u9ad8\u62c9\u7279\u7684\u8fdb\u7403\u8d8a\u4f4d\uff1f\uff1f\uff1f", "up": 1946}, {"content": "\u9ad8\u62c9\u7279\u90a3\u7403\u6211\u770b\u6162\u52a8\u4f5c\u5c31\u6ca1\u8d8a\u4f4d\uff0c\u5fc3\u60f3\u8fd8\u597d\u6709\u89c6\u9891\u56de\u653e\u5224\u7f5a\uff0c\u53ef\u4ee5\u8ba9\u8bf4\u8d8a\u4f4d\u7684\u4eba\u95ed\u5634\u4e86\uff0c\u7ed3\u679c\u556a\u556a\u556a\uff01\u4e0d\u8bf4\u4e86\uff0c\u6211\u53bb\u716e\u4e2a\u9e21\u86cb\u6577\u4e0b\u8138[\u518d\u89c1]", "up": 1132}, {"content": "4:1\uff0c\u4e0a\u534a\u573a\u9ad8\u62c9\u7279\u4e00\u4e2a\uff0c\u4e0b\u534a\u573a\u963f\u5947\u59c6\u5f6d\u4e00\u4e2a", "up": 280}, {"content": "\u5435\u5435\u5565\uff01\u9ad8\u62c9\u7279\u5934\u53d1\u8d8a\u4f4d \uff01\u4f60\u4eec\u770b\u4e0d\u61c2\uff1f", "up": 267}, {"content": "\u4e0d\u8981\u9ed1\u6052\u5927\uff0c\u8fb9\u88c1\u80fd\u529b\u5c31\u662f\u8fd9\u6837\uff0c\u9ad8\u62c9\u7279\u5355\u5200\u4e5f\u5439\u8d8a\u4f4d\u4e86\uff01\uff01\uff01", "up": 164}], "7": [{"content": "\u4eca\u5929\u51af\u6f47\u9706\u4e0d\u9519.\u4e0d\u9ecf\u7403\u4e86\uff0c\u4f20\u7403\u9632\u5b88\u90fd\u5f88\u597d\uff0c\u90dc\u6797\u7684\u8fdb\u7403\u7ed9\u5bf9\u65b9\u6253\u51fb\u5f88\u5927\uff0c\u5f88\u957f\u65f6\u95f4\u88ab\u538b\u6253\uff0c\u963f\u5170\u672c\u573a\u4e5f\u4e0d\u9519\uff0c\u7075\u6d3b\u5e94\u53d8\u80fd\u529b\u5f3a\uff0c\u5bf9\u65b9\u90fd\u4e0d\u77e5\u9053\u4ed6\u7684\u8dd1\u4f4d\uff0c\u8fdb\u7403\uff0c\u4f20\u7403\uff0c\u5c31\u662f\u4ed6\u548c\u9ad8\u62c9\u7279\u7684\u533a\u522b\u3002\u8fd8\u6709\u5c31\u662f\u90d1\u667a\u80fd\u529b\u771f\u5f3a\uff0c\u4e0d\u8001\uff0c\u4fdd\u5229\u5c3c\u5965\u5854\u5229\u65af\u5361\u4e0d\u7528\u8bf4\u4e86\uff0c\u7edd\u5bf9\u6838\u5fc3\uff0c\u6700\u540e\u60f3\u8bf4\u7684\u662f\u660e\u5929\u4e0a\u6e2f\u8f93\u7403\uff0c\u5bf9\u4e0d\u8d77\u4e86\u3002", "up": 328}, {"content": "\u8fd9\u662f\u6211\u89c1\u8fc7\u5439\u7684\u6700\u5dee\u7684\u88c1\u5224\uff0c\u8fd8\u4e0d\u5982\u672c\u571f\u88c1\u5224\u3002\u63a7\u5236\u529b\u51e0\u4e4e\u4e3a\u96f6\uff0c\u5b8c\u5168\u6210\u4e3a\u4e86\u89c6\u9891\u88c1\u5224\u7684\u5080\u5121\u3002\u5f00\u59cb\u60f3\u8981\u628a\u5c3a\u5ea6\u653e\u5bbd\u677e\uff0c\u4fdd\u6301\u6d41\u7545\uff0c\u4f46\u4e5f\u4e0d\u80fd\u8fde\u72af\u89c4\u90fd\u4e0d\u5439\u554a\uff0c\u90a3\u8fb9\u7403\u8fdb\u4e86\u8fd9\u8fb9\u518d\u770b\u89c6\u9891\uff0c\u4e00\u770b\u63e1\u8349\u72af\u89c4\u4e86\uff0c\u8fd8\u633a\u660e\u663e\uff0c\u4e0d\u5439\u4e0d\u5408\u9002\u90a3\u4e48\u591a\u4eba\u770b\u7740\u5462\uff0c\u6700\u540e\u5f04\u5f97\u4e24\u8fb9\u4e0d\u8ba8\u597d\uff0c\u8981\u662f\u6309\u7167\u4ed6\u7684\u5c3a\u5ea6\u5df4\u574e\u5e03\u90a3\u7403\u5c31\u6ca1\u95ee\u9898\uff0c\u672c\u6765\u5e94\u8be5\u662f\u4e00\u573a\u7cbe\u5f69\u7684\u699c\u9996\u5bf9\u51b3\uff0c\u8e22\u5f97\u65ad\u65ad\u7eed\u7eed\uff0c\u8fd8\u6ee1\u573a\u4e89\u8bae\u3002\u4e0d\u8fc7\u6052\u5927\u786e\u5b9e\u914d\u5f97\u4e0a\u8fd9\u573a\u80dc\u5229\uff0c\u5916\u63f4\u4e2a\u4eba\u80fd\u529b\u592a\u7a81\u51fa\u4e86\uff0c\u9ad8\u62c9\u7279\u548c\u5854\u5229\u65af\u5361\u7684\u524d\u573a\u914d\u5408\u5f88\u9ed8\u5951\uff0c\u7edd\u6740\u90a3\u4e2a\u914d\u5408\uff0c\u9ad8\u62c9\u7279\u8fd8\u6ca1\u89e6\u7403\uff0c\u5854\u5229\u65af\u5361\u5c31\u5df2\u7ecf\u542f\u52a8\u4e86\uff0c\u6362\u8c01\u4e5f\u8ffd\u4e0d\u4e0a\u3002\u56fd\u5b89\u5916\u63f4\u66f4\u56e2\u961f\u4e00\u4e9b\uff0c\u5728\u9002\u5e94\u4e86\u6052\u5927\u903c\u62a2\u7684\u5f3a\u5ea6\u4e4b\u540e\u4e5f\u521b\u9020\u4e86\u4e00\u4e9b\u673a\u4f1a\uff0c\u53ef\u60dc\u524d\u9762\u653e\u4e2a\u5df4\u987f\uff0c\u6ca1\u6709\u901f\u5ea6\u4e5f\u6ca1\u6709\u7075\u6027\uff0c\u6d6a\u8d39\u4e86\u4e0d\u5c11\u597d\u7403\u3002\u6bd4\u8d5b\u8fd8\u662f\u5f88\u7cbe\u5f69\u3002\u9664\u4e86\u8fd9\u4e2a\u50bb \u6bd4\u88c1\u5224\u6405\u548c\u4ee5\u5916\u3002\u8fd8\u4e0d\u5982\u9a6c\u5b81\uff0c\u867d\u7136\u9a6c\u5b81\u5439\u7f5a\u6bd4\u8f83\u4e25\u683c\uff0c\u4f46\u662f\u6700\u8d77\u7801\u80fd\u63a7\u5236\u4f4f\u573a\u9762\uff0c\u6052\u5927\u8981\u662f\u4e0b\u4e00\u573a\u628a\u4e0a\u6e2f\u529e\u4e86\uff0c\u57fa\u672c\u51a0\u519b\u4e5f\u5c31\u7a33\u4e86\uff0c\u4ee5\u6052\u5927\u7684\u5b9e\u529b\uff0c\u5b9e\u81f3\u540d\u5f52\uff0c\u56fd\u5b89\u7403\u8ff7\u7559[\u52a0\u6cb9]", "up": 24}, {"content": "\u4e0d\u5f97\u4e0d\u8bf4\u5c11\u4e86\u9ad8\u62c9\u7279\uff0c\u6052\u5927\u8fdb\u653b\u706b\u529b\u8fd8\u662f\u5dee\u4e00\u4e2a\u6863\u6b21\uff01", "up": 16}, {"content": "\u7279\u8c22\u62c9\u5728\u4e2d\u8d85\u4ecd\u7136\u662f\u5355\u5175\u4f5c\u6218\u4e4b\u738b\uff0c\u957f\u8ddd\u79bb\u53cd\u51fb\u548c\u5c0f\u8303\u56f4\u9635\u5730\u6218\u5f97\u5206\u90fd\u662f\u9876\u7ea7\u3002\u5bf9\u6bd4\u5176\u4ed6\u901f\u5ea6\u6280\u672f\u578b\u5f97\u5206\u624b\uff0c\u624e\u7403\u738b\u5f97\u76ca\u4e8e\u5bcc\u529b\u7684\u534e\u4e3d\u8fdb\u653b\u6253\u6cd5\uff0c\u9ad8\u62c9\u7279\u7a81\u7834\u5dee\u70b9\uff0c\u7eff\u5de8\u4eba\u6280\u672f\u7a0d\u900a\uff0c\u5efa\u4e1a\u5361\u901a\u6208\u5f97\u5206\u7a0d\u5dee\uff0c\u534e\u590f\u963f\u6839\u5ef7\u6218\u795e\u5e74\u7eaa\u7a0d\u5927\u3002", "up": 13}, {"content": "\u606d\u559c\u6052\u5927\uff0c\u606d\u559c\u90dc\u6797\u4e00\u4f20\u4e00\u5c04\u3001\u9ad8\u62c9\u7279\u4e24\u5c04\u4e24\u4f20\u72ec\u9020\u56db\u7403\u3001\u963f\u5170\u66ff\u8865\u5b8c\u6210\u6885\u5f00\u4e8c", "up": 11}]};
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
