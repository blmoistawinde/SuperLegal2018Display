var data = {"person_name": "\u6b66\u78ca", "nicknames": "\u6b66\u78ca\u3001\u5434\u78ca\u3001\u6b66\u7403\u738b\u3001\u6838\u6b667", "aspects": {"\u8fdb\u7403": 0.48809773551869934, "\u56fd\u5bb6\u961f": 0.4704884007615746, "\u7403\u5458": 0.5624722653306784, "\u5355\u5200": 0.6344196545651788, "\u91d1\u9774": 1.0, "\u6bd4\u8d5b": 0.5617592703605788, "\u8054\u8d5b": 0.7781640705566052, "\u5916\u63f4": 0.5062018186878972, "\u7403\u8ff7": 0.6914393131030124, "\u8d5b\u5b63": 0.8469355618164724}, "overall_heat": 4001.0, "overall_polar": 0.836, "name": "31", "nationality": "\u4e2d\u56fd", "position": "\u524d\u950b", "goal": "25", "assist": "11", "team_name": "\u4e0a\u6d77\u4e0a\u6e2f", "name_en": "Wu Lei", "age": "27", "height": "174", "weight": "66"};
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
var topic_keywords = {"0": [{"name": "\u6b66\u78ca", "value": 0.054437190182565584}, {"name": "\uff01", "value": 0.041742231894571394}, {"name": "\u6b66\u7403\u738b", "value": 0.02662918631362592}, {"name": "\u4e2d\u56fd", "value": 0.014841010760488453}, {"name": "\u8428\u62c9", "value": 0.012725184379156087}, {"name": "\u7f57", "value": 0.01181840164429936}, {"name": "\u8d6b", "value": 0.01091161890944263}, {"name": "\uff1f", "value": 0.010307097086204812}, {"name": "\u6ed1\u7a3d", "value": 0.010004836174585903}, {"name": "\u4eca\u5929", "value": 0.009098053439729175}, {"name": "\u52a0\u6cb9", "value": 0.009098053439729175}, {"name": "\u5927\u56db\u559c", "value": 0.008493531616491355}, {"name": "C", "value": 0.007889009793253536}, {"name": "\u4e0a\u6e2f", "value": 0.007586748881634627}, {"name": "\u5355\u5200", "value": 0.006679966146777899}, {"name": "\u6885\u897f", "value": 0.0063777052351589895}, {"name": "\u4e00\u4e2a", "value": 0.00577318341192117}, {"name": "c", "value": 0.00577318341192117}, {"name": "\u6052\u5927", "value": 0.005470922500302261}, {"name": "\u51a0\u519b", "value": 0.004866400677064443}, {"name": "\u7403\u738b", "value": 0.0045641397654455325}, {"name": "\u8d5b\u5b63", "value": 0.004261878853826623}, {"name": "\u8fdb", "value": 0.004261878853826623}, {"name": "\u73b0\u5728", "value": 0.003959617942207713}, {"name": "\u4eba", "value": 0.003959617942207713}, {"name": "\u57c3\u53ca", "value": 0.003657357030588804}, {"name": "\u8461\u8404\u7259", "value": 0.003657357030588804}, {"name": "\u60f3", "value": 0.003657357030588804}, {"name": "\u606d\u559c", "value": 0.003355096118969895}, {"name": "\u4e0b", "value": 0.003355096118969895}], "1": [{"name": "\u6b66\u78ca", "value": 0.07872090226367695}, {"name": "\uff1f", "value": 0.025536520832776546}, {"name": "\uff01", "value": 0.015514338402330491}, {"name": "\u5355\u5200", "value": 0.01511345110511265}, {"name": "\u7403", "value": 0.013109014619023439}, {"name": "\u8fdb\u7403", "value": 0.011639094529224684}, {"name": "\u56fd\u5bb6\u961f", "value": 0.008031108854264106}, {"name": "\u4e00\u4e2a", "value": 0.008031108854264106}, {"name": "\u6b66\u7403\u738b", "value": 0.007496592457973649}, {"name": "\u597d", "value": 0.00656118876446535}, {"name": "\u5916\u63f4", "value": 0.00656118876446535}, {"name": "\u7403\u5458", "value": 0.006293930566320122}, {"name": "\u8e22", "value": 0.00589304326910228}, {"name": "\u70b9\u7403", "value": 0.005625785070957052}, {"name": "\u5434\u78ca", "value": 0.005492155971884438}, {"name": "\u5c04\u95e8", "value": 0.005358526872811824}, {"name": "\u8fdb", "value": 0.00522489777373921}, {"name": "\u90dc\u6797", "value": 0.00522489777373921}, {"name": "\u771f", "value": 0.0050912686746665955}, {"name": "\u4eba", "value": 0.0050912686746665955}, {"name": "\u6bd4\u8d5b", "value": 0.004824010476521368}, {"name": "\u4e0a\u6e2f", "value": 0.004423123179303525}, {"name": "\u73b0\u5728", "value": 0.004289494080230912}, {"name": "\u770b\u770b", "value": 0.004289494080230912}, {"name": "\u725b", "value": 0.004155864981158297}, {"name": "\u5965\u65af\u5361", "value": 0.004155864981158297}, {"name": "\u9ed1", "value": 0.0038886067830130695}, {"name": "\u77e5\u9053", "value": 0.0038886067830130695}, {"name": "\u903c", "value": 0.003754977683940455}, {"name": "\u770b\u5230", "value": 0.003621348584867841}], "2": [{"name": "\u6b66\u78ca", "value": 0.05347245786675715}, {"name": "\u54ed", "value": 0.03198167628096369}, {"name": "\u7b11", "value": 0.031698902839045355}, {"name": "\u8138", "value": 0.024346793349168644}, {"name": "\u6342", "value": 0.023215699581495303}, {"name": "\u6b66\u7403\u738b", "value": 0.022932926139576967}, {"name": "\uff01", "value": 0.00935980092749689}, {"name": "\u5355\u5200", "value": 0.007380386834068544}, {"name": "\uff1f", "value": 0.00709761339215021}, {"name": "\u4e0a\u6e2f", "value": 0.006532066508313539}, {"name": "\u4e2d\u8d85", "value": 0.005683746182558534}, {"name": "\u4e00\u4e2a", "value": 0.005683746182558534}, {"name": "\u8fdb\u7403", "value": 0.0054009727406402}, {"name": "\u51e0\u4e2a", "value": 0.0051181992987218644}, {"name": "\u91d1\u9774", "value": 0.0051181992987218644}, {"name": "\u4eba", "value": 0.004835425856803529}, {"name": "\u5965\u65af\u5361", "value": 0.004552652414885195}, {"name": "\u5bcc\u529b", "value": 0.004552652414885195}, {"name": "\ud83d\ude02", "value": 0.0042698789729668585}, {"name": "\u4eca\u5929", "value": 0.0042698789729668585}, {"name": "\u5c04\u624b", "value": 0.0037043320891301888}, {"name": "\u8e22", "value": 0.0037043320891301888}, {"name": "\u624e\u54c8\u7ef4", "value": 0.0037043320891301888}, {"name": "\u5e0c\u671b", "value": 0.0037043320891301888}, {"name": "\u80e1\u5c14\u514b", "value": 0.003421558647211854}, {"name": "\u738b", "value": 0.003421558647211854}, {"name": "\u80af\u5b9a", "value": 0.0031387852052935186}, {"name": "\u6052\u5927", "value": 0.0031387852052935186}, {"name": "\u8fdb", "value": 0.0031387852052935186}, {"name": "\u6bd4\u8d5b", "value": 0.0031387852052935186}], "3": [{"name": "\u6b66\u78ca", "value": 0.06706499389099145}, {"name": "\uff1f", "value": 0.03279494591292428}, {"name": "\u56fd\u5bb6\u961f", "value": 0.015957922341091276}, {"name": "\uff01", "value": 0.013424918794886312}, {"name": "\u4eba", "value": 0.012083916917483685}, {"name": "\u7403\u5458", "value": 0.011487916083082516}, {"name": "\u8fdb\u7403", "value": 0.011338915874482224}, {"name": "\u4e00\u4e2a", "value": 0.010593914831480764}, {"name": "\u4e2d\u56fd", "value": 0.009848913788479303}, {"name": "\u8054\u8d5b", "value": 0.009401913162678428}, {"name": "\u6b66\u7403\u738b", "value": 0.009401913162678428}, {"name": "\u56fd\u5185", "value": 0.008656912119676969}, {"name": "\u5916\u63f4", "value": 0.008358911702476384}, {"name": "\u4e2d\u8d85", "value": 0.007762910868075216}, {"name": "\u524d\u950b", "value": 0.007017909825073756}, {"name": "\u8e22", "value": 0.005974908364871711}, {"name": "\u7403", "value": 0.00582590815627142}, {"name": "\u7b2c\u4e00", "value": 0.005378907530470543}, {"name": "\u5434\u78ca", "value": 0.005378907530470543}, {"name": "\u5c04\u624b\u699c", "value": 0.005229907321870251}, {"name": "\u8db3\u7403", "value": 0.004633906487469083}, {"name": "\u5965\u65af\u5361", "value": 0.004633906487469083}, {"name": "\u9ed1", "value": 0.004633906487469083}, {"name": "\u80fd\u529b", "value": 0.004484906278868791}, {"name": "\u7403\u961f", "value": 0.004484906278868791}, {"name": "\u90dc\u6797", "value": 0.004335906070268499}, {"name": "\u770b\u770b", "value": 0.004186905861668207}, {"name": "\u6c34\u5e73", "value": 0.004186905861668207}, {"name": "\u5f3a", "value": 0.004186905861668207}, {"name": "\u55b7", "value": 0.0038889054444676227}], "4": [{"name": "\u6b66\u78ca", "value": 0.04042054634026022}, {"name": "\uff01", "value": 0.024696306345193313}, {"name": "\u88c1\u5224", "value": 0.018529937719676884}, {"name": "\uff1f", "value": 0.0145217981130912}, {"name": "\u624b\u7403", "value": 0.01421347968181538}, {"name": "\ud83d\udc2e", "value": 0.008663747918850589}, {"name": "\u4e0a\u6e2f", "value": 0.007738792625023124}, {"name": "\u5434\u78ca", "value": 0.007122155762471481}, {"name": "\u8fdb\u7403", "value": 0.006813837331195659}, {"name": "\u5e94\u8be5", "value": 0.006197200468644016}, {"name": "\u6b66\u7403\u738b", "value": 0.005888882037368194}, {"name": "\u4e00\u4e2a", "value": 0.005888882037368194}, {"name": "\u8d8a\u4f4d", "value": 0.005888882037368194}, {"name": "\u9a82", "value": 0.005580563606092373}, {"name": "\u70b9\u7403", "value": 0.005580563606092373}, {"name": "\u7403", "value": 0.005272245174816551}, {"name": "\u89c6\u9891", "value": 0.004655608312264907}, {"name": "\u540e", "value": 0.004038971449713264}, {"name": "\u8fd9\u573a", "value": 0.004038971449713264}, {"name": "\u7533\u82b1", "value": 0.004038971449713264}, {"name": "\u7403\u5458", "value": 0.003730653018437442}, {"name": "\u7403\u8ff7", "value": 0.003730653018437442}, {"name": "\u660e\u663e", "value": 0.0034223345871616205}, {"name": "\u771f\u7684", "value": 0.0034223345871616205}, {"name": "\u6bd4\u8d5b", "value": 0.0034223345871616205}, {"name": "\u5965\u65af\u5361", "value": 0.0031140161558857985}, {"name": "\u73b0\u5728", "value": 0.0031140161558857985}, {"name": "\u597d", "value": 0.0031140161558857985}, {"name": "\u78b0\u5230", "value": 0.0031140161558857985}, {"name": "\u5224\u7f5a", "value": 0.002805697724609977}], "5": [{"name": "\uff01", "value": 0.12390633041688112}, {"name": "\u6b66\u78ca", "value": 0.06710903610028675}, {"name": "\u6b66\u7403\u738b", "value": 0.03769943386515698}, {"name": "\u725b", "value": 0.01986986251010955}, {"name": "\u903c", "value": 0.01968605249613999}, {"name": "\u5389\u5bb3", "value": 0.015090802146900962}, {"name": "\u4e0a\u6e2f", "value": 0.014723182118961842}, {"name": "\u606d\u559c", "value": 0.01453937210499228}, {"name": "\u8fdb\u7403", "value": 0.010495551797661937}, {"name": "\u6838\u6b667", "value": 0.008841261671935888}, {"name": "\u5439", "value": 0.007186971546209838}, {"name": "\u52a0\u6cb9", "value": 0.005900301448422911}, {"name": "\u91d1\u9774", "value": 0.00571649143445335}, {"name": "\u70b9\u7403", "value": 0.0053488714065142275}, {"name": "\u4e2d\u8d85", "value": 0.0053488714065142275}, {"name": "\u56fd\u5bb6\u961f", "value": 0.005165061392544666}, {"name": "\uff1f", "value": 0.004981251378575105}, {"name": "\u7b2c\u4e00", "value": 0.004613631350635983}, {"name": "\u5c04\u624b", "value": 0.004613631350635983}, {"name": "\u52a9\u653b", "value": 0.004429821336666422}, {"name": "\u6052\u5927", "value": 0.0040622013087273}, {"name": "\u4e00\u4e0b", "value": 0.0040622013087273}, {"name": "\u5434\u78ca", "value": 0.0040622013087273}, {"name": "\u4e2d\u56fd", "value": 0.003694581280788178}, {"name": "\u7403\u738b", "value": 0.003510771266818617}, {"name": "\u90dc\u6797", "value": 0.003510771266818617}, {"name": "\u4e00\u4e2a", "value": 0.0033269612528490557}, {"name": "\u5355\u5200", "value": 0.0031431512388794946}, {"name": "\u5c04\u624b\u699c", "value": 0.0031431512388794946}, {"name": "\u738b", "value": 0.0031431512388794946}], "6": [{"name": "\u6b66\u78ca", "value": 0.07202719061365119}, {"name": "\uff01", "value": 0.023295154731973803}, {"name": "\u5355\u5200", "value": 0.016466461805878883}, {"name": "\u673a\u4f1a", "value": 0.015535276406865941}, {"name": "\u56fd\u5bb6\u961f", "value": 0.011189744544805537}, {"name": "\u6b66\u7403\u738b", "value": 0.010568954278796908}, {"name": "\u8fdb\u7403", "value": 0.009637768879783966}, {"name": "\u8dd1\u4f4d", "value": 0.008706583480771022}, {"name": "\u7403", "value": 0.008551385914268865}, {"name": "\u80fd\u529b", "value": 0.008085793214762393}, {"name": "\u597d", "value": 0.00715460781574945}, {"name": "\u524d\u950b", "value": 0.006999410249247292}, {"name": "\u5c04\u95e8", "value": 0.006999410249247292}, {"name": "\u8fdb", "value": 0.0065338175497408205}, {"name": "\u4eba", "value": 0.005602632150727877}, {"name": "\u771f\u7684", "value": 0.005602632150727877}, {"name": "\u7403\u5458", "value": 0.005292237017723562}, {"name": "\u5434\u78ca", "value": 0.005137039451221405}, {"name": "\u4e2d\u56fd", "value": 0.005137039451221405}, {"name": "\uff1f", "value": 0.005137039451221405}, {"name": "\u9ed1", "value": 0.00482664431821709}, {"name": "\u56fd\u5185", "value": 0.0046714467517149335}, {"name": "\u628a\u63e1", "value": 0.0045162491852127765}, {"name": "\u6d6a\u8d39", "value": 0.0045162491852127765}, {"name": "\u997c", "value": 0.0045162491852127765}, {"name": "\u610f\u8bc6", "value": 0.0045162491852127765}, {"name": "\u4e00\u4e2a", "value": 0.004205854052208462}, {"name": "\u518d", "value": 0.004205854052208462}, {"name": "\u5965\u65af\u5361", "value": 0.004205854052208462}, {"name": "\u90dc\u6797", "value": 0.004050656485706305}], "7": [{"name": "\u6b66\u78ca", "value": 0.08190238439643507}, {"name": "\uff01", "value": 0.05460547804582148}, {"name": "\u4e0a\u6e2f", "value": 0.03477439223554664}, {"name": "\u606d\u559c", "value": 0.019959404600811907}, {"name": "\u91d1\u9774", "value": 0.018092949465727218}, {"name": "\u5e0c\u671b", "value": 0.01739302879007046}, {"name": "\u51a0\u519b", "value": 0.01447669264150063}, {"name": "\u4e2d\u8d85", "value": 0.01377677196584387}, {"name": "\u6b66\u7403\u738b", "value": 0.013660118519901078}, {"name": "\u5c04\u624b", "value": 0.012376930614530353}, {"name": "\u6052\u5927", "value": 0.010743782371331249}, {"name": "\u4eca\u5e74", "value": 0.010743782371331249}, {"name": "\u8d5b\u5b63", "value": 0.010160515141617282}, {"name": "\u52a0\u6cb9", "value": 0.00969390135784611}, {"name": "\u8054\u8d5b", "value": 0.009110634128132145}, {"name": "\u672c\u571f", "value": 0.008877327236246558}, {"name": "\u593a\u51a0", "value": 0.008294060006532593}, {"name": "\u7403\u8ff7", "value": 0.008294060006532593}, {"name": "\u6b27\u6d32", "value": 0.0081774065605898}, {"name": "\u738b", "value": 0.008060753114647006}, {"name": "\u70b9\u7403", "value": 0.007944099668704213}, {"name": "\u7403\u5458", "value": 0.00596099108767673}, {"name": "\u4e2d\u56fd", "value": 0.005727684195791144}, {"name": "\u652f\u6301", "value": 0.004561149736363212}, {"name": "\u8fdb\u7403", "value": 0.004327842844477626}, {"name": "\u56fd\u5bb6\u961f", "value": 0.004327842844477626}, {"name": "\u4e00\u4e2a", "value": 0.00409453595259204}, {"name": "\u5434\u78ca", "value": 0.00409453595259204}, {"name": "\uff1f", "value": 0.003977882506649247}, {"name": "\u771f\u7684", "value": 0.003977882506649247}], "8": [{"name": "\u6b66\u78ca", "value": 0.04399533824230545}, {"name": "\u56fd\u5bb6\u961f", "value": 0.012210626688562801}, {"name": "\u4e0a\u6e2f", "value": 0.011151136303438046}, {"name": "\uff1f", "value": 0.011151136303438046}, {"name": "\u7403\u5458", "value": 0.00823753774434497}, {"name": "\uff01", "value": 0.0077077925517825925}, {"name": "\u6052\u5927", "value": 0.006648302166657838}, {"name": "\u4e00\u4e2a", "value": 0.00611855697409546}, {"name": "\u7403", "value": 0.00611855697409546}, {"name": "\u8fdb\u7403", "value": 0.005588811781533083}, {"name": "\u5965\u65af\u5361", "value": 0.005588811781533083}, {"name": "\u4f69\u83b1", "value": 0.005059066588970706}, {"name": "\u5434\u78ca", "value": 0.004529321396408328}, {"name": "\u8e22", "value": 0.004529321396408328}, {"name": "\u7403\u8ff7", "value": 0.004264448800127139}, {"name": "\u6700\u540e", "value": 0.00399957620384595}, {"name": "\u9c81\u80fd", "value": 0.00399957620384595}, {"name": "\u4e16\u754c\u676f", "value": 0.00399957620384595}, {"name": "\u597d", "value": 0.00399957620384595}, {"name": "\u9632\u5b88", "value": 0.00399957620384595}, {"name": "\u90dc\u6797", "value": 0.00399957620384595}, {"name": "\u4eba", "value": 0.0037347036075647613}, {"name": "\u8054\u8d5b", "value": 0.0037347036075647613}, {"name": "\u6bd4\u8d5b", "value": 0.0037347036075647613}, {"name": "\u4eca\u5929", "value": 0.003469831011283572}, {"name": "\u89c9\u5f97", "value": 0.003469831011283572}, {"name": "\u524d\u573a", "value": 0.003469831011283572}, {"name": "\u56fd\u5185", "value": 0.0032049584150023835}, {"name": "\u4e2d\u8d85", "value": 0.0032049584150023835}, {"name": "\u56fd\u5b89", "value": 0.0032049584150023835}], "9": [{"name": "\u6b66\u78ca", "value": 0.031805819163715346}, {"name": "\u4e0a\u6e2f", "value": 0.02172892167413466}, {"name": "\u6052\u5927", "value": 0.019087404856477586}, {"name": "\uff01", "value": 0.015858884301563386}, {"name": "\u6bd4\u8d5b", "value": 0.008717005498268338}, {"name": "\u7403\u5458", "value": 0.008521337585849297}, {"name": "\u597d", "value": 0.00724949615512552}, {"name": "\u7403\u8ff7", "value": 0.006564658461658872}, {"name": "\u5916\u63f4", "value": 0.006173322636820788}, {"name": "\uff1f", "value": 0.005977654724401746}, {"name": "\u4eba", "value": 0.005879820768192224}, {"name": "\u4e00\u4e2a", "value": 0.005684152855773182}, {"name": "\u5e0c\u671b", "value": 0.005390650987144618}, {"name": "\u4e2d\u56fd", "value": 0.005097149118516055}, {"name": "\u4e2d\u8d85", "value": 0.0049993151623065335}, {"name": "\u8fdb\u7403", "value": 0.0049993151623065335}, {"name": "\u90dc\u6797", "value": 0.004803647249887491}, {"name": "\u8054\u8d5b", "value": 0.00470581329367797}, {"name": "\u80e1\u5c14\u514b", "value": 0.004607979337468449}, {"name": "\u8e22", "value": 0.004510145381258927}, {"name": "\u8868\u73b0", "value": 0.004412311425049407}, {"name": "\u5965\u65af\u5361", "value": 0.004314477468839885}, {"name": "\u51a0\u519b", "value": 0.004314477468839885}, {"name": "\u6253", "value": 0.004314477468839885}, {"name": "\u8d5b\u5b63", "value": 0.004216643512630364}, {"name": "\u8fd9\u573a", "value": 0.004216643512630364}, {"name": "\u5e94\u8be5", "value": 0.0038253076877922793}, {"name": "\u56fd\u5bb6\u961f", "value": 0.003629639775373237}, {"name": "\u771f\u7684", "value": 0.0035318058191637154}, {"name": "\u88c1\u5224", "value": 0.0035318058191637154}]};
var topic_summary = {"0": [{"content": "\u6b66\u78ca\u4eca\u5929\u7684\u5355\u5200\u662f\u7403\u738b\u7ea7\u7684[\u9177][\u9177]", "up": 2346}, {"content": "\u897f\u7532\u6709\u6885\u897f\uff0c\u610f\u7532\u6709C\u7f57\uff0c\u4e2d\u8d85\u6709\u6b66\u78ca\uff01", "up": 1902}, {"content": "\u6b66\u7403\u738b\uff1a\u4eca\u5929\u4e8c\u6708\u4e8c \uff0c\u6211\u8981\u62ac\u5934\u4e86", "up": 1712}, {"content": "\u8bf7\u4e0d\u8981\u53eb\u8428\u62c9\u8d6b\u662f\u975e\u6d32\u6885\u897f\uff0c\u4ed6\u4e0d\u7528\u4e0e\u6885\u897f\u76f8\u6bd4\uff0c\u4ed6\u662f\u57c3\u53ca\u7684\u6cd5\u8001\u738b\uff0c\u5e94\u8be5\u88ab\u79f0\u4e3a\u57c3\u53ca\u6b66\u78ca", "up": 1608}, {"content": "\u8461\u8404\u7259\u6709C\u7f57\u3001\u963f\u6839\u5ef7\u6709\u6885\u897f\u3001\u6211\u4eec\u6709\u6b66\u78ca\uff01", "up": 780}], "1": [{"content": "\u6b66\u78ca\u8fd9\u72b6\u6001\u8981\u662f\u534a\u5e74\u524d\u51fa\u6765\u3001\u6211\u73b0\u5728\u5df2\u7ecf\u628a\u4fc4\u7f57\u65af\u8def\u7ebf\u56fe\u89c4\u5212\u597d\u4e86", "up": 3479}, {"content": "\u8c01\u4e5f\u6ca1\u60f3\u5230\uff0c\u95f4\u6b47\u671f\u8fc7\u540e\uff0c\u6b66\u78ca\u91d1\u9774\u7684\u6700\u5927\u7ade\u4e89\u8005\u5c45\u7136\u662f\u5e7f\u5dde\u5854", "up": 1019}, {"content": "\u6b66\u78ca \u4f60\u5df2\u7ecf\u4e0d\u9002\u5408\u4e2d\u8d85\u4e86", "up": 990}, {"content": "\u7533\u82b1\u7403\u8ff7\u591f\u65e0\u804a\u7684\uff0c\u4eba\u6b66\u78ca\u53c8\u6ca1\u62db\u60f9\u4f60\u4eec\uff0c\u600e\u4e48\u4e0d\u9a82\u6d69\u514b\u5965\u65af\u5361\u554a\uff0c\u7a9d\u91cc\u6597\uff0c\u8e22\u4e2a\u7403\u771f\u4e0d\u81f3\u4e8e", "up": 750}, {"content": "\u80fd\u8fdb\u5355\u5200\u7684\u6b66\u78ca\u662f\u771f\u53ef\u6015[\u7b11\u54ed]", "up": 715}], "2": [{"content": "\u6b66\u7403\u738b\u5df2\u7ecf\u4e0d\u662f\u5f53\u5e74\u7684\u6b66\u7403\u738b\u4e86.....\u90dc\u98de\u673a\u8fd8\u662f\u5f53\u5e74\u7684\u90dc\u98de\u673a....", "up": 2277}, {"content": "\u624e\u54c8\u7ef4\u5df2\u9080\u8bf7\u5965\u65af\u5361\u3001\u6b66\u78ca\u52a0\u5165\u4e2d\u8d85\u9996\u8f6e\u5e3d\u5b50\u620f\u6cd5\u7fa4\u3002\u6d69\u514b\u4e5f\u7533\u8bf7\u52a0\u7fa4\uff0c\u7406\u7531\u662f\u4ed6\u4eca\u5929\u4e0a\u6f14\u4e86\u6253\u98de\u673a\u5e3d\u5b50\u620f\u6cd5\uff0c\u7ed3\u679c\u88ab\u7ba1\u7406\u5458\u963f\u5170\u62d2\u7edd\u3002", "up": 1360}, {"content": "\u6b66\u7403\u738b\uff1a\u4e00\u65b9\u7167\u8fd9\u4e48\u8e22\u4e0b\u53bb\uff0c\u80af\u5b9a\u80fd\u4fdd\u7ea7\ud83d\ude02\ud83d\ude02", "up": 1238}, {"content": "\u538b\u529b\u6765\u5230\u4e86\u5965\u65af\u5361\uff0c\u6b66\u78ca\uff0c\u624e\u54c8\u7ef4\u7684\u8eab\u4e0a\u3002\u3002", "up": 881}, {"content": "\u6d69\u514b\u548c\u5965\u65af\u5361\u90fd\u662f\u6709\u610f\u8bc6\u7684\u7ed9\u6b66\u78ca\u505a\u7403\uff0c\u8bf4\u660e\u5c0f\u4f19\u5b50\u4eba\u7f18\u597d\uff0c\u7403\u961f\u4e5f\u56e2\u7ed3\u3002\u6b66\u78ca\u534a\u573a\u4e24\u7403 \u5f88\u7ed9\u529b\uff0c\u7403\u8ff7\u90fd\u5e94\u8be5\u652f\u6301\u4ed6\uff0c\u6211\u662f\u5f88\u652f\u6301\u4ed6\u5f88\u559c\u6b22\u4ed6\uff0c\u53ea\u662f\u53ef\u60dc\u6240\u5728\u7684\u4ff1\u4e50\u90e8\u4e0d\u600e\u4e48\u62db\u4eba\u5f85\u89c1", "up": 880}], "3": [{"content": "\u6b66\u78ca\u4e0d\u914d\u8e22\u4e2d\u8d85 \u4ed6\u53ea\u914d\u8e22\u4e94\u5927\u8054\u8d5b", "up": 2793}, {"content": "\u6b66\u78ca\uff0c\u5c04\u624b\u699c\u7b2c\u4e00\u3002****\uff0c\u90a3\u4e48\u591a\u5927\u724c\u5916\u63f4\uff0c\u6392\u7b2c\u4e00\u7684\u662f\u672c\u571f\u7403\u5458\uff0c\u6709\u5565\u8bf4\u5f97\u3002", "up": 1138}, {"content": "\u6b66\u78ca\u5144\u5f1f\u4f60\u4e00\u5251\u5c01\u5589\uff0c\u76f4\u63a5\u8ba9\u6211\u628a\u5f69\u7968\u53c8\u6361\u4e86\u56de\u6765[\u54c8\u54c8]", "up": 971}, {"content": "\u6b66\u78ca\u4e00\u573a\u53ef\u4ee5\u62b5\u90dc\u6797\u4e00\u4e2a\u8d5b\u5b63\uff01", "up": 535}, {"content": "\u5f53\u521d\u5f90\u6839\u5b9d\u6295\u8d44\u8db3\u74033000\u4e07\u2026\u2026\u8bf4\u8fc7\u4e00\u4e2a\u6b66\u78ca\u5c31\u4e0d\u6b623000\u4e07\uff01\u7684\u786e\u662f\u725b\ud83d\udc2e", "up": 410}], "4": [{"content": "\u6b66\u78ca\u4e00\u4e2a\u660e\u663e\u7684\u624b\u7403\uff0cVR\u5224\u7f5a\u540e\u5c45\u7136\u5bf9\u88c1\u5224\u66b4\u6012\uff0c\u8fd9\u6c38\u8fdc\u4e0d\u662f\u4e00\u4e2a\u6210\u719f\u7403\u5458\u8be5\u6709\u7684\u5fc3\u91cc\u7d20\u8d28\uff0c\u96be\u6210\u5927\u5668\uff01", "up": 1299}, {"content": "\u90a3\u672c\u8eab\u662f\u4e00\u4e2a\u6545\u610f\u624b\u7403\uff0c\u6b66\u78ca\u8fd9\u6837\u7684\u597d\u7403\u5458\uff0c\u4e0d\u5e94\u8be5\u5bf9\u7740\u88c1\u5224\u50cf\u7334\u5b50\u4e00\u6837\u7684\u5486\u54ee\u3002\u957f\u70b9\u5fc3\u5427\uff0c\u5728\u56fd\u5bb6\u961f\u96c4\u8d77\u4e00\u4e0b\u3002", "up": 1190}, {"content": "\u6b66\u7403\u738b\u5728\u9c81\u80fd\u7981\u533a\u4e3b\u52a8\u4f38\u624b\u6ca1\u89c1var\u63d0\u793a\u4e3b\u88c1\u5224\uff0c\u9c81\u80fd\u8fdb\u74035\u5206\u949f\u540e\uff0cvar\u63d0\u793a\u88c1\u5224\u4e3b\u88c1\u5224\u53d6\u6d88\uff0c\u987a\u4fbf\u8bf4\u4e0b\u9664\u4e86\u5f00\u573a\u7684u23\uff0c83\u548c85\u5206\u949f\u4f8b\u884c\u516c\u4e8b\u6362\u4e0au23\u5bf9\u56fd\u8db3\u8d21\u732e\u597d\u5927\u54df\uff01", "up": 1046}, {"content": "\u6734\u5b9e\u5584\u826f\u7684\u5b69\u5b50\uff0c\u6ca1\u6709\u7eb9\u8eab\u65f6\u5c1a\u53d1\u578b\uff0c\u4e0d\u6652\u8c6a\u8f66\u5a07\u59bb\uff0c\u8fd9\u6837\u7684\u6b66\u78ca\u4e0d\u8981\u9ed1", "up": 366}, {"content": "\u8fdb\u4fe9\u7403\uff0c\u9020\u4e00\u70b9\u7403\uff0c\u53e6\u5916\u4e00\u4e2a\u70b9\u7403\u4e5f\u662f\u6b66\u78ca\u5728\u4e89\u9020\u6210\u5bf9\u65b9\u624b\u7403\uff0c\u4f60\u6562\u8bf4\u6b66\u78ca\u4e0d\u662f\u5916\u63f4\uff1f\u53e6\u5916\u8fd9\u573a\u8e22\u5b8c\u9c81\u80fd\u53ef\u80fd\u4f1a\u906d\u6b83\u4e86\uff0c\u633a\u4f60\u4eec\u633a\u7684\u6700\u5389\u5bb3\u7684\u4e5f\u662f\u9a82\u4f60\u4eec\u9a82\u7684\u6700\u51f6\u7684", "up": 259}], "5": [{"content": "\u5bcc\u529b\u6559\u7ec3\uff1a\u8c01TM\u544a\u8bc9\u6211\uff0c\u6b66\u78ca\u5355\u5200\u968f\u4fbf\u653e\u7684", "up": 4371}, {"content": "\u6211\u5c31\u4f69\u670d\u6b66\u78ca\uff0c\u4e00\u4e2a\u70b9\u7403\u90fd\u4e0d\u8981\u7167\u6837\u62ff\u4e2d\u8d85\u91d1\u9774[\u5389\u5bb3][\u5389\u5bb3]", "up": 3349}, {"content": "\u6211\u6562\u8bf4\u6b66\u78ca\u5df2\u7ecf\u57fa\u672c\u9884\u8ba22018\u4e2d\u8d85\u672c\u571f\u5c04\u624b\u738b\uff01\uff01\uff01", "up": 1931}, {"content": "\u5439\u6b66\u78ca\u4e0d\u7528\u8d70\u7a0b\u5e8f\uff0c\u6b66\u78ca\u725b\uff01", "up": 1213}, {"content": "\u518d\u5439\u4e00\u6ce2\u6b66\u7403\u738b \u8fd9\u8d5b\u5b63\u51a0\u519b\u7a33\u4e86\uff01", "up": 1111}], "6": [{"content": "\u4ee5\u524d\u9ed1\u6b66\u78ca\uff0c\u90fd\u662f\u6068\u94c1\u4e0d\u6210\u94a2\uff0c\u8c01\u4e0d\u5e0c\u671b\u81ea\u5bb6\u51fa\u4e2a\u771f\u7403\u738b\uff1f", "up": 2830}, {"content": "\u5982\u679c\u4f60\u770b\u4e86\u6b66\u78ca\u8fd9\u51e0\u573a\u7684\u8868\u73b0\u8fd8\u9ed1\u4ed6\u7684\u8bdd\uff0c\u90a3\u8bf4\u660e\u4f60\u5c31\u662f\u4e2a\u7eaf\u9ed1\u5b50\uff01\uff01\uff01", "up": 2009}, {"content": "\u8ba4\u4e3a\u6b66\u78ca\u73b0\u5728\u662f\u56fd\u5185\u7403\u5458\u7b2c\u4e00\u4eba\u7684\u70b9\ud83d\udc4d", "up": 1212}, {"content": "\u6b66\u78ca\u5e26\u7403\u72c2\u5618\uff0c\u6362\u4e0b\u573a\uff0c\u6574\u6574\u9f50\u9f50\u7684xx\u58f0\u3002", "up": 710}, {"content": "\u4f60\u5c31\u770b\u6b66\u78ca\u4e0a\u534a\u573a\u95e8\u67f1\u8fd9\u4e2a\u7403\uff0c\u4e09\u4e2a\u4eba\u4e4b\u95f4\u62a2\u5230\u70b9\uff0c\u62a2\u5b8c\u4e0d\u662f\u770b\u7740\uff0c\u800c\u662f\u79ef\u6781\u8dd1\u53bb\u53ef\u80fd\u6709\u8865\u5c04\u7684\u673a\u4f1a\uff0c\u95e8\u67f1\u540e\u56db\u4e2a\u540e\u536b\u90fd\u6123\u4f4f\u4e86\uff0c\u53ea\u6709\u6b66\u78ca\u4e00\u4e2a\u4eba\u5728\u8dd1\uff0c\u629b\u53bb\u6280\u672f\u5c42\u9762\uff0c\u8fd9\u79cd\u79ef\u6781\u6027\u8db3\u4ee5\u6210\u4e3a\u73b0\u5728\u4e2d\u56fd\u7b2c\u4e00\u4eba", "up": 571}], "7": [{"content": "\u652f\u6301\u6b66\u78ca\u62ff\u672c\u8d5b\u5b63\u4e2d\u8d85\u91d1\u9774\u7684\u5de6\u8fb9\uff01\uff01\uff01\uff01\uff01\uff01", "up": 3523}, {"content": "\u652f\u6301\u6b66\u78ca\u62ff\u4e2d\u8d85\u91d1\u9774\u7684\u6709\u591a\u5c11\uff1f", "up": 2824}, {"content": "\u6b66\u78ca\u725b\u903c666666\u62ff\u4e2a\u51a0\u519b\u52a0\u91d1\u9774!\u7ed9\u54b1\u672c\u571f\u7403\u5458\u957f\u8138\uff01\uff01\uff01\uff01\u672c\u8d5b\u5b63\u652f\u6301\u4e0a\u6e2f\u593a\u51a0\uff0c\u6b66\u78ca\u62ff\u91d1\u9774\uff0c\u540c\u610f\u7684\u9876\u8d77\uff01\uff01\uff01", "up": 2344}, {"content": "\u6b66\u7403\u738b\u6ca1\u6709\u70b9\u7403\u83b7\u5f97\u4e2d\u8d85\u5c04\u624b\u738b", "up": 1958}, {"content": "\u4e0a\u6e2f\u593a\u51a0\uff0c\u6b66\u78ca\u91d1\u9774\u3002", "up": 1570}], "8": [{"content": "\u6b66\u78ca\u5728\u56fd\u8db3\u7684\u6001\u5ea6\u6ca1\u6709\u95ee\u9898\uff0c\u52e4\u52e4\u6073\u6073\uff0c\u6ca1\u6709\u6563\u6b65\uff0c\u62fc\u5c3d\u5168\u529b\u3002\u80fd\u529b\u4e5f\u80af\u5b9a\u6709\u7684\u3002\u53ea\u4e0d\u8fc7\u5230\u4e86\u4ff1\u4e50\u90e8\uff0c\u961f\u53cb\u5927\u5927\u53d8\u5f3a\uff0c\u5bf9\u624b\u5927\u5927\u53d8\u5f31\u4e86\u800c\u5df2\u3002\u56fd\u8db3\u5b9e\u5728\u592a\u5f31\uff0c\u4ed6\u4e00\u4e2a\u4eba\u5e26\u4e0d\u52a8\u3002", "up": 1669}, {"content": "\u8d5b\u524d\u6052\u5927\u9c81\u80fd\u4e24\u5927\u7701\u4efd2.5\u4ebf\u5927\u96c6\u7ed3\uff0c\u4f17\u5fd7\u6210\u57ce\uff0c\u4e0a\u534a\u573a\u7ed3\u675f\uff0c\u6052\u592a\u7403\u8ff7\u89e3\u6563\u7684\u89e3\u6563\uff0c\u8c29\u9a82\u7684\u8c29\u9a82\u4e86\uff0c85\u5206\u6052\u592a\u7403\u8ff7\u53c8\u6765\u96c6\u7ed3\u4e86\u521a\u60f3\u642c\u4e2a\u677f\u51f3\u8fd8\u6ca1\u5750\u4e0b\u53c8\u64a4\u4e86[\u54c8\u54c8]\uff0c\u6700\u540e\u4e00\u53e5\uff1a\u6b66\u78ca\uff0c\u6b66\u78ca\uff0c\u6b66\u78ca........", "up": 848}, {"content": "\u6b66\u78ca\u771f\u662f\u597d\u7403\u5458\uff0c\u79c1\u5e95\u4e0b\u7edd\u5bf9\u52e4\u52a0\u7ec3\u4e60\u5c04\u95e8\u8ddf\u5355\u5200\u4e86\uff0c\u8fdb\u6b65\u5f88\u5927\uff0c\u4e0d\u7136\u4e5f\u4e0d\u4f1a\u5728\u4e2d\u8d85\u4e00\u5806\u8c6a\u534e\u5916\u63f4\u91cc\u6392\u7b2c\u4e00\uff01\u9762\u5bf9\u7403\u8ff7\u8c03\u4f83\u751a\u81f3\u8c29\u9a82\u4e5f\u6ca1\u6709\u4ec0\u4e48\u6307\u8d23\uff0c\u62ff\u8868\u73b0\u8bf4\u8bdd\uff0c\u522b\u8bf4\u56fd\u5bb6\u961f\u600e\u6837\uff0c\u770b\u8fc7\u56fd\u5bb6\u961f\u6bd4\u8d5b\u7684\u90fd\u77e5\u9053\uff0c\u5c31\u5c5e\u4ed6\u6700\u62fc\uff01", "up": 491}, {"content": "\u56fd\u5bb6\u961f\u6b66\u78ca\u662f\u88ab\u91cd\u70b9\u9632\u5b88\u7684\uff0c\u4e5f\u6ca1\u6709\u80fd\u4f20\u7403\u7684\uff0c\u800c\u4e14\u5341\u4e8c\u5f3a\u8d5b\u6052\u5927\u5e2e\u66f4\u4e0d\u4f20\u7ed9\u6b66\u78ca", "up": 395}, {"content": "\u6b66\u78ca\u73b0\u5728\u8fd9\u4e48\u731b\u4e86\u554a", "up": 387}], "9": [{"content": "\u9c81\u80fd\u5f88\u62fc\uff0c\u843d\u540e\u4e5f\u662f\u6ca1\u6709\u529e\u6cd5\u7684\uff0c\u4eca\u5929\u7684\u6b66\u78ca\u592a\u725b\u4e86\uff0c\u4eca\u5929\u7684\u4e0a\u6e2f\u4e5f\u8d85\u6c34\u5e73\u53d1\u6325\uff0c\u4e3a\u4ec0\u4e48\u8ba9\u6211\u9c81\u80fd\u7ed9\u8d76\u4e0a\u4e86\uff0c\u8fd8\u6709\uff0c\u5c31\u4e0d\u660e\u767d\u6052\u5927\u7684\u4e00\u4e9b\u4e0d\u7406\u667a\u7c89\uff0c\u4f60\u4eec\u62ff\u4e0d\u62ff\u51a0\u519b\uff0c\u548c\u6211\u4eec\u6709\u6bdb\u94b1\u5173\u7cfb\u5417\uff1f\u4e3a\u4ec0\u4e48\u8981\u9a82\u9c81\u80fd\uff0c\u53c8\u4e0d\u662f\u4e9a\u51a0\uff0c\u4e9a\u51a0\u767e\u5206\u4e4b\u4e00\u767e\u4e00\u7684\u652f\u6301\u4f60\u3002\u8054\u8d5b\u8c01\u62ff\u51a0\u519b\u90fd\u4e00\u4e2a\u540a\u6837\uff0c\u9664\u4e86\u56fd\u5b89\u3002\u518d\u5c31\u662f\uff0c\u6b66\u78ca\u8981\u662f\u7f5a\u51e0\u4e2a\u70b9\u7403\uff0c\u91d1\u9774\u60ac\u5ff5\u4f1a\u63d0\u524d\u7ed3\u675f\u3002", "up": 1663}, {"content": "\u76f8\u6bd4\u90dc\u6797\u6bcf\u6bcf\u90fd\u5728\u8ddf\u88c1\u5224\u62b1\u6028\u788e\u788e\u5ff5\uff0c\u6b66\u78ca\u8e22\u7403\u5c31\u4e13\u6ce8\u591a\u4e86\uff0c\u5373\u4f7f\u89c9\u5f97\u6709\u4e89\u8bae\u4e5f\u5148\u8d77\u8eab\u63a5\u7740\u6bd4\u8d5b\u518d\u8bf4\uff0c\u8fd9\u6837\u7684\u6001\u5ea6\u600e\u80fd\u8ba9\u4eba\u4e0d\u7231\uff01\u4e0d\u77e5\u5927\u5bb6\u6709\u6ca1\u6709\u6ce8\u610f\uff0c\u4e0a\u534a\u573a\u90dc\u6797\u7981\u533a\u5185\u7591\u4f3c\u88ab\u72af\u89c4\u540e\u8eba\u5728\u5730\u4e0a\u534a\u5929\u6ca1\u8d77\u6765\uff0c\u767d\u767d\u6d6a\u8d39\u4e86\u6052\u5927\u7684\u4e00\u6b21\u53cd\u62a2\u673a\u4f1a\uff0c\u4ee5\u540e\u8fd8\u662f\u8fd9\u6837\u7684\u6001\u5ea6\uff0c\u56fd\u5bb6\u961f\u8fd8\u662f\u4e0d\u8981\u53bb\u4e86\u5427\uff01", "up": 1041}, {"content": "\u6b66\u7403\u738b\u5f3a\u7684\u4e00\u7b14\uff0c\u88c1\u5224\u51c6\u7684\u4e00\u6bd4\uff0c\u6052\u5927\u8fd0\u6c14\u5dee\u4e86\u4e00\u70b9\uff0c\u6574\u573a\u6bd4\u8d5b\u7cbe\u5f69\u5f97\u5dee\u70b9\u4ee5\u4e3a\u5728\u770b\u82f1\u8d85\uff01", "up": 886}, {"content": "\u6052\u5927\u7403\u8ff7\u771f\u7684\u75af\u4e86 \u9c81\u80fd\u867d\u7136\u843d\u540e \u7403\u573a\u4e0a\u4e5f\u662f\u5728\u79ef\u6781\u62fc\u62a2 \u5e76\u4e14\u4e5f\u6709\u51e0\u6b21\u597d\u673a\u4f1a\uff01\u4e3a\u4ec0\u4e48\u53ea\u8981\u5bf9\u6052\u5927\u4e0d\u5229\u5c31\u53ef\u4ee5\u8fd9\u4e48\u9ed1\u9c81\u80fd\uff01\u518d\u8bf4\u4e0b\u6b66\u78ca\uff01\u8bf4\u4ed6\u56fd\u5bb6\u961f\u8868\u73b0\u4e0d\u5982\u4ff1\u4e50\u90e8\uff0c\u7684\u786e\u8fdb\u7403\u4e0d\u591a\uff01\u4f46\u662f\u8be5\u62fc\u7684\u62fc \u8be5\u8dd1\u7684\u8dd1\uff0c\u53ea\u662f\u6709\u4e9b\u7403\u7f3a\u4e4f\u70b9\u8fd0\u6c14\uff01\u6b66\u78ca\u548c\u5916\u63f4\u5728\u4e00\u8d77\u914d\u5408\u80af\u8dd1\u6562\u5c04\uff01\u5916\u63f4\u4f20\u7403\u8d28\u91cf\u4e5f\u9ad8\uff01\u56fd\u8db3\u90a3\u51e0\u4e2a\u4e2d\u573a\u6709\u8fd9\u80fd\u529b\u5417\uff1f\u5c31\u4e0d\u80fd\u5ba2\u89c2\u53bb\u770b\u5f85\u95ee\u9898\u5417", "up": 733}, {"content": "\u6b66\u78ca\u7684\u8dd1\u4f4d\u4e00\u6d41\uff0c\u53ea\u662f\u56fd\u5bb6\u961f\u6ca1\u4eba\u80fd\u4f20\u51fa\u8fd9\u79cd\u52a9\u653b\uff0c\u989c\u9a8f\u51cc\u8fd9\u8d5b\u5b63\u8fdb\u6b65\u660e\u663e\uff0c\u6251\u70b9\u9ad8\u624b\uff0c\u5fc3\u75bc\u8fd9\u8d5b\u5b63\u7684\u6052\u4e30\uff0c\u6709\u70b9\u4e0d\u8d70\u8fd0\uff0c\u6587\u603b\u6211\u613f\u610f\u7ed9\u4f60\u4e00\u4e2a\u62b1\u62b1\u548c\u652f\u6301\uff0c\u671b\u4f60\u4eec\u80fd\u6446\u8131\u964d\u7ea7\u533a", "up": 693}]};
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
