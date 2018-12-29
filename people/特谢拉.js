var data = {"person_name": "\u7279\u8c22\u62c9", "nicknames": "\u7279\u8c22\u62c9", "aspects": {"\u7403\u5458": 0.411259995439245, "\u6bd4\u8d5b": 0.5740262882895165, "\u5916\u63f4": 0.511037534525876, "\u8fdb\u7403": 0.5434527120461299, "\u7403\u8ff7": 0.5985576928805918, "\u8d5b\u5b63": 0.8100052370244475, "\u8fdb\u653b": 0.5476282935668952, "\u9632\u5b88": 0.533576695518918, "\u5c04\u95e8": 0.5349605586462172, "\u70b9\u7403": 0.3113526937170886}, "overall_heat": 334.0, "overall_polar": 0.424, "name": "193", "nationality": "\u5df4\u897f", "position": "\u4e2d\u573a", "goal": "12", "assist": "5", "team_name": "\u6c5f\u82cf\u82cf\u5b81", "name_en": "Alex Teixeira", "age": "28", "height": "173", "weight": "69"};
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
var topic_keywords = {"0": [{"name": "\u7279\u8c22\u62c9", "value": 0.04883551673944687}, {"name": "\u82cf\u5b81", "value": 0.019723435225618632}, {"name": "\uff01", "value": 0.01826783114992722}, {"name": "\u57fa\u8036", "value": 0.013173216885007279}, {"name": "\u9ec4\u7d2b\u660c", "value": 0.012445414847161574}, {"name": "\u535a\u963f", "value": 0.01098981077147016}, {"name": "\u5916\u63f4", "value": 0.010262008733624454}, {"name": "\u524d\u573a", "value": 0.010262008733624454}, {"name": "\u597d", "value": 0.008078602620087336}, {"name": "\uff1f", "value": 0.006622998544395924}, {"name": "\u4e2d\u573a", "value": 0.006622998544395924}, {"name": "\u9632\u5b88", "value": 0.006622998544395924}, {"name": "\u771f\u7684", "value": 0.006622998544395924}, {"name": "\u57c3\u5fb7\u5c14", "value": 0.005895196506550218}, {"name": "\u4e00\u4e2a", "value": 0.005895196506550218}, {"name": "\u5c04\u95e8", "value": 0.005167394468704512}, {"name": "\u7403\u5458", "value": 0.005167394468704512}, {"name": "\u53cd\u51fb", "value": 0.005167394468704512}, {"name": "\u6253", "value": 0.005167394468704512}, {"name": "\u524d\u950b", "value": 0.004439592430858806}, {"name": "\u5389\u5bb3", "value": 0.004439592430858806}, {"name": "\u592a", "value": 0.004439592430858806}, {"name": "\u8fdb\u7403", "value": 0.004439592430858806}, {"name": "\u6c5f\u82cf", "value": 0.004439592430858806}, {"name": "\u8fdb\u653b", "value": 0.004439592430858806}, {"name": "\u80fd\u529b", "value": 0.004439592430858806}, {"name": "\u62c9\u7c73\u96f7\u65af", "value": 0.004439592430858806}, {"name": "\u5434\u66e6", "value": 0.004439592430858806}, {"name": "\u9700\u8981", "value": 0.0037117903930131003}, {"name": "\u6c34\u5e73", "value": 0.0037117903930131003}], "1": [{"name": "\u7279\u8c22\u62c9", "value": 0.049506172839506174}, {"name": "\uff1f", "value": 0.02234567901234568}, {"name": "\u5b8c\u5168", "value": 0.01493827160493827}, {"name": "\u62bd\u7b4b", "value": 0.012469135802469136}, {"name": "\u8d8a\u4f4d", "value": 0.011234567901234567}, {"name": "\u8138", "value": 0.011234567901234567}, {"name": "\u534e\u590f\u5e78\u798f", "value": 0.01}, {"name": "\u5047\u88c5", "value": 0.01}, {"name": "\u6218\u672f\u72af\u89c4", "value": 0.01}, {"name": "\u9632\u5b88", "value": 0.008765432098765432}, {"name": "\u6253", "value": 0.008765432098765432}, {"name": "\u7403\u5458", "value": 0.008765432098765432}, {"name": "\u5361\u62c9\u65af\u79d1", "value": 0.007530864197530864}, {"name": "\u6807\u738b", "value": 0.007530864197530864}, {"name": "\u6342", "value": 0.007530864197530864}, {"name": "\u597d", "value": 0.007530864197530864}, {"name": "\u96be", "value": 0.007530864197530864}, {"name": "\u961f", "value": 0.007530864197530864}, {"name": "\u95ee\u9898", "value": 0.007530864197530864}, {"name": "\u7403", "value": 0.007530864197530864}, {"name": "\u5e94\u8be5", "value": 0.0062962962962962955}, {"name": "\u7a81\u7834", "value": 0.0062962962962962955}, {"name": "\u60f3", "value": 0.0062962962962962955}, {"name": "\u82cf\u5b81", "value": 0.0062962962962962955}, {"name": "\u4e00\u573a", "value": 0.0062962962962962955}, {"name": "\u5b88\u95e8\u5458", "value": 0.0062962962962962955}, {"name": "\u6d6a\u8d39", "value": 0.005061728395061728}, {"name": "\u72b6\u6001", "value": 0.005061728395061728}, {"name": "\u5c24\u5176", "value": 0.005061728395061728}, {"name": "\u5df2", "value": 0.005061728395061728}], "2": [{"name": "\u7279\u8c22\u62c9", "value": 0.064177131526768}, {"name": "\uff01", "value": 0.052280237937871774}, {"name": "\u82cf\u5b81", "value": 0.035756774619960345}, {"name": "\u6bd4\u8d5b", "value": 0.01658955717118308}, {"name": "\u5e0c\u671b", "value": 0.015928618638466622}, {"name": "\u8d5b\u5b63", "value": 0.013945803040317251}, {"name": "\u7403\u8ff7", "value": 0.013284864507600793}, {"name": "\u52a0\u6cb9", "value": 0.012623925974884336}, {"name": "\u6c5f\u82cf", "value": 0.012623925974884336}, {"name": "\u4eca\u5929", "value": 0.01196298744216788}, {"name": "\u673a\u4f1a", "value": 0.009980171844018506}, {"name": "\u5efa\u4e1a", "value": 0.00865829477858559}, {"name": "\u4e00\u4e2a", "value": 0.00865829477858559}, {"name": "\uff1f", "value": 0.00865829477858559}, {"name": "\u597d", "value": 0.00865829477858559}, {"name": "\u7a46\u574e\u4e54", "value": 0.00667547918043622}, {"name": "\u8d62", "value": 0.006014540647719762}, {"name": "\u8fdb\u7403", "value": 0.0053536021150033045}, {"name": "\u7f3a", "value": 0.0053536021150033045}, {"name": "\u54ed", "value": 0.0053536021150033045}, {"name": "\u524d\u950b", "value": 0.0053536021150033045}, {"name": "\u771f\u662f\u592a", "value": 0.0053536021150033045}, {"name": "\u7b11", "value": 0.0053536021150033045}, {"name": "\u5df2\u7ecf", "value": 0.0053536021150033045}, {"name": "\u795d\u798f", "value": 0.0053536021150033045}, {"name": "\u8d62\u4e0b", "value": 0.0053536021150033045}, {"name": "\u4e0b", "value": 0.0053536021150033045}, {"name": "2016", "value": 0.0053536021150033045}, {"name": "\u8fdb\u4e0d\u53bb", "value": 0.004692663582286847}, {"name": "\u8fdb\u4e9a\u51a0", "value": 0.004692663582286847}], "3": [{"name": "\u7279\u8c22\u62c9", "value": 0.04775435380384968}, {"name": "\uff1f", "value": 0.013840513290559119}, {"name": "\u82cf\u5b81", "value": 0.013840513290559119}, {"name": "\u4e00\u4e2a", "value": 0.010174152153987167}, {"name": "\u9ec4\u7d2b\u660c", "value": 0.009257561869844179}, {"name": "\u4eba", "value": 0.009257561869844179}, {"name": "\u8fdb\u7403", "value": 0.007424381301558203}, {"name": "\u4e2d\u8d85", "value": 0.006507791017415215}, {"name": "\u7403", "value": 0.006507791017415215}, {"name": "\u4e00\u573a", "value": 0.005591200733272227}, {"name": "\u8d8a\u4f4d", "value": 0.005591200733272227}, {"name": "\u8d5b\u5b63", "value": 0.005591200733272227}, {"name": "\u597d", "value": 0.005591200733272227}, {"name": "\u57fa\u8036", "value": 0.005591200733272227}, {"name": "\u7403\u8ff7", "value": 0.005591200733272227}, {"name": "\u660e\u663e", "value": 0.005591200733272227}, {"name": "\u8e22", "value": 0.005591200733272227}, {"name": "\u5434\u66e6", "value": 0.005591200733272227}, {"name": "\u5409\u7fd4", "value": 0.005591200733272227}, {"name": "\u53d7\u4f24", "value": 0.004674610449129239}, {"name": "\u957f\u4f20", "value": 0.004674610449129239}, {"name": "\u4e00\u811a", "value": 0.004674610449129239}, {"name": "\u9002\u5408", "value": 0.004674610449129239}, {"name": "\u5361\u4f69\u7f57", "value": 0.004674610449129239}, {"name": "\u674e\u6602", "value": 0.004674610449129239}, {"name": "\u72b6\u6001", "value": 0.004674610449129239}, {"name": "\u505c\u8d5b", "value": 0.004674610449129239}, {"name": "\u60f3", "value": 0.0037580201649862507}, {"name": "\u88c1\u5224", "value": 0.0037580201649862507}, {"name": "\u518d", "value": 0.0037580201649862507}], "4": [{"name": "\u7279\u8c22\u62c9", "value": 0.06780544296467864}, {"name": "\uff01", "value": 0.03827446438911407}, {"name": "\u82cf\u5b81", "value": 0.01453387376954256}, {"name": "\u6052\u5927", "value": 0.01337579617834395}, {"name": "\u8e22", "value": 0.009322524609148813}, {"name": "\u4e00\u4e2a", "value": 0.006427330631152287}, {"name": "\u73b0\u5728", "value": 0.006427330631152287}, {"name": "\u597d", "value": 0.006427330631152287}, {"name": "\u592a", "value": 0.005848291835552982}, {"name": "\u4eba", "value": 0.005848291835552982}, {"name": "\u4e0a\u6e2f", "value": 0.005848291835552982}, {"name": "\u70b9\u7403", "value": 0.005848291835552982}, {"name": "\u60f3", "value": 0.005848291835552982}, {"name": "\uff1f", "value": 0.005848291835552982}, {"name": "\u4e2d\u8d85", "value": 0.005848291835552982}, {"name": "\u9ec4\u7d2b\u660c", "value": 0.005848291835552982}, {"name": "\u771f", "value": 0.0052692530399536764}, {"name": "\u7403\u5458", "value": 0.0052692530399536764}, {"name": "\u9c81\u80fd", "value": 0.0052692530399536764}, {"name": "\u5916\u63f4", "value": 0.004690214244354372}, {"name": "\u674e\u9704\u9e4f", "value": 0.004690214244354372}, {"name": "\u77e5\u9053", "value": 0.004690214244354372}, {"name": "\u5389\u5bb3", "value": 0.004111175448755066}, {"name": "\u8fdb\u653b", "value": 0.004111175448755066}, {"name": "\u8fd9\u573a", "value": 0.004111175448755066}, {"name": "\u771f\u662f", "value": 0.004111175448755066}, {"name": "\u4e2d\u56fd", "value": 0.004111175448755066}, {"name": "\u4e70", "value": 0.004111175448755066}, {"name": "\u89c9\u5f97", "value": 0.003532136653155761}, {"name": "\u88c1\u5224", "value": 0.003532136653155761}]};
var topic_summary = {"0": [{"content": "\u7279\u8c22\u62c9\u7b80\u76f4\u662f\u5b8c\u7f8e\u65e0\u7455\uff1a\u8dd1\u4e86\u7ea6\u83ab10,000\u7c73\uff0c\u9020\u70b9\uff0c\u8fdb\u7403\uff01\u4e00\u4e2a\u7ec6\u8282\u66f4\u5f70\u663e\u4ed6\u9ad8\u5c1a\u4eba\u683c\uff0c\u5f53\u4fdd\u963f\u57fa\u8036\u5411\u4ed6\u8981\u5c04\u70b9\u7403\u65f6\uff0c\u4ed6\u6478\u7740\u5bf9\u65b9\u7684\u8138\u4e8c\u8bdd\u4e0d\u8bf4\u7684\u5c31\u8ba9\u4e86\uff0c\u9996\u4e2a\u8fdb\u7403\u5bf9\u8fd9\u65b0\u63f4\u610f\u4e49\u91cd\u5927\uff01", "up": 516}, {"content": "\u82cf\u5b81\u8fd9\u573a\u6bd4\u8d5b\u628a\u4e2d\u573a\u63a7\u5236\u4f4f\u4e86\uff0c\u6709\u4eba\u8bf4\u90fd\u662f\u5f00\u5927\u811a\u3002\u82cf\u5b81\u524d\u950b\u4e00\u4e2a\u7279\u8c22\u62c9\u4e00\u4e2a\u9ec4\u7d2b\u660c\u8fd8\u6709\u540e\u6765\u4e0a\u6765\u7684\u6d77\u7c73\u63d0\u90fd\u662f\u901f\u5ea6\u578b\u7684\uff0c\u627e\u8eab\u540e\u80af\u5b9a\u6548\u679c\u597d\u554a\u3002\u5c31\u8ddf\u5fb7\u62c9\u7518\u90a3\u65f6\u5019\u653e\u624b\u53cd\u51fb\u4e00\u6837\u3002\u7ed9\u9ec4\u7d2b\u660c\u7684\u62fc\u52b2\u62539\u5206\uff0c\u9ad8\u5929\u610f\u4e0d\u51f8\u524d\u6253\u4e2d\u573a\u6548\u679c\u5f88\u597d\u8bf6\u3002\u82cf\u5b81\u52a0\u6cb9\uff0c\u6253\u51fa\u9752\u6625\u98ce\u66b4\u5427", "up": 390}, {"content": "\u7279\u8c22\u62c9\u4e00\u8fc7\u4e8c\uff0c\u5bf9\u65b9\u94f2\u7403\u6ca1\u94f2\u5230\uff0c\u8fd8\u628a\u81ea\u5df1\u4eba\u94f2\u7ffb\u4e86[\u5389\u5bb3]", "up": 218}, {"content": "\u7279\u8c22\u62c9\u771f\u7684\u5f3a\uff0c\u535a\u963f\u57fa\u8036\u9002\u5408\u82cf\u5b81\uff0c\u9ec4\u7d2b\u660c\u8fd8\u9700\u8981\u65f6\u95f4\u3002\u4e2a\u4eba\u89c2\u70b9\u3002", "up": 215}, {"content": "\u5c0f\u9ec4\u7684\u4f5c\u7528\uff0c\u771f\u7684\u662f\u53ef\u4ee5\u5f53\u4f5c\u5916\u63f4\u7528\u554a\uff0c\u524d\u573a\u6ca1\u6709\u7279\u8c22\u62c9\uff0c\u5c0f\u9ec4\u4e5f\u53ef\u4ee5\u548c\u57c3\u5fb7\u5c14\u6253\u51fa\u914d\u5408\uff0c\u652f\u6491\u8d77\u4e86\u524d\u573a\u8fdb\u653b\uff0c\u987a\u5e26\u518d\u5237\u4e2a\u6570\u636e\uff0c\u5982\u679c\u4eca\u5e74\u4e0d\u662f\u957f\u671f\u56fd\u5bb6\u961f\u5f81\u8c03\u4f24\u505c\u4e86\u4e00\u4e2a\u591a\u6708\uff0c\u524d\u573a\u7279\u8c22\u62c9\u57c3\u5fb7\u5c14\u9ec4\u7d2b\u660c\u662f\u53ef\u4ee5\u628a\u82cf\u5b81\u5e26\u8fdb\u4e9a\u51a0\u7684\u3002", "up": 117}], "1": [{"content": "\u6c5f\u82cf\u7279\u8c22\u62c9\u961f2:1\u5929\u6d25\u6cf0\u8fbe", "up": 161}, {"content": "\u8fd9\u573a\u662f\u91d1\u82f1\u6743\u72b6\u6001\u6700\u597d\u7684\u4e00\u573a\uff0c\u4eca\u5929\u6362\u5f20\u6210\u6797\u679c\u65ad\u591a\u4e86\uff0c\u51af\u535a\u8f69\u867d\u7136\u4e0d\u6210\u719f\uff0c\u4f46\u5f97\u5230\u534a\u573a\u5bf9\u9635\u7279\u8c22\u62c9\u7684\u7684\u953b\u70bc", "up": 25}, {"content": "\u88c1\u5224\u6234\u7740\u6709\u8272\u773c\u955c\uff0c\u5224\u7f5a\u5c3a\u5ea6\u5dee\u7684\u592a\u591a\uff0c\u6731\u633a\u5927\u52a8\u4f5c2\u6b21\u8dfa\u811a\u6ca1\u4e8b\uff0c\u7279\u8c22\u62c9\u8fc7\u5b8c\u4eba\uff0c\u88ab\u76f4\u63a5\u4e0a\u624b\u6ca1\u724c\uff0c\u4e70\u4e70\u63d0\u6b63\u5e38\u4e89\u5934\u7403\uff0c\u4e24\u624b\u90fd\u653e\u7740\uff0c\u4f60\u5224\u72af\u89c4\u8fd8\u9ec4\u724c\u3002\u3002\u3002\u5475\u5475", "up": 23}, {"content": "\u7279\u8c22\u62c9\u771f\u7684\u8e22\u7684\u52aa\u529b\uff0c\u4e00\u6761\u9f99\u90a3\u7403\u5c31\u662f\u4eba\u7403\u7ed3\u5408\u597d\uff0c\u8ba9\u9632\u5b88\u961f\u5458\u4e0a\u4e0d\u4e0a\u6765\uff0c\u6362\u4e86\u9ec4\u5b50\u660c\u80af\u5b9a\u8d9f\u5927\u3002\u9ec4\u5b50\u660c\u5c31\u4e00\u573a\u6bd4\u8d5b\u8868\u73b0\u597d\uff0c\u5439\u592a\u5927\u4e86\uff0c\u5bf9\u4ed6\u5176\u5b9e\u4e0d\u597d\uff0c\u538b\u529b\u592a\u5927\uff0c\u8fd8\u662f\u5e94\u8be5\u7325\u7410\u53d1\u80b2\u3002\u6c5f\u82cf\u4eba\u7559", "up": 13}, {"content": "\u4e00\u5e2e\u81ed\u811a\u5728\u6e9c\u7279\u8c22\u62c9\uff0c\u4e00\u6b21\u6b21\u767e\u7c73\u51b2\u53bb\u8ffd\u8ddf\u672c\u8ffd\u4e0d\u5230\u7684\u7403\uff0c\u771f\u80fd\u88ab\u73a9\u6b7b\u3002", "up": 12}], "2": [{"content": "\u611f\u8c22\u89c6\u9891\u88c1\u5224\uff0c\u4fdd\u4f4f\u4e86\u7279\u8c22\u62c9\u7684\u5355\u5200\u8fdb\u7403\uff01\u53ef\u60dc\u4e86\uff0c\u672c\u8be5\u5e3d\u5b50\u620f\u6cd5\uff01\u6c5f\u82cf\u82cf\u5b81\u672c\u8d5b\u5b63\u53ef\u671f\uff01", "up": 251}, {"content": "\u8fd9\u573a\u7279\u8c22\u62c9\u4f24\uff0c\u5e15\u83b1\u5854\u505c\uff0c\u9ec4\u7d2b\u660c\u88ab\u62bd\u8c03\uff0c\u82cf\u5b81\u5b9e\u529b\u5927\u6253\u6298\u6263\uff0c\u51ed\u501f\u5168\u961f\u52aa\u529b\uff0c\u52a0\u4e0a\u9177\u6691\u4e2d\u4e0d\u505c\u7684\u5954\u8dd1\uff0c\u9006\u8f6c\u8d62\u5f97\u6bd4\u8d5b \u503c\u5f97\u8868\u626c", "up": 216}, {"content": "\u770b\u4e86\u6574\u573a\u6bd4\u8d5b\u4e0d\u77e5\u9053\u8bf4\u70b9\u5565\uff0c\u552f\u6709\u4e3a\u7279\u8c22\u62c9\u7948\u7977\u5427\uff0c\u5e0c\u671b\u4f24\u4e0d\u5927[\u7948\u7977][\u7948\u7977][\u7948\u7977]", "up": 184}, {"content": "\u4f5c\u4e3a\u5efa\u4e1a\u7403\u8ff7\u5e0c\u671b\u7279\u8c22\u62c9\u65e9\u65e5\u5eb7\u590d[\u7948\u7977]\u4e5f\u5e0c\u671b\u53cc\u65b9\u7403\u8ff7\u4e0d\u8981\u56e0\u4e3a\u8fd9\u573a\u6bd4\u8d5b\u4f24\u4e86\u548c\u6c14\uff0c\u90fd\u52a0\u6cb9", "up": 172}, {"content": "\u7279\u8c22\u62c9\u771f\u5f3a\uff0c\u82cf\u5b81\u8fd9\u573a\u4e09\u5206\u662f\u4f60\u4ece\u6cf0\u8fbe\u8eab\u4e0a\u786c\u6252\u4e0b\u6765\u7684\u3002", "up": 140}], "3": [{"content": "\u7279\u8c22\u62c9\uff1a\u4e00\u4e2a\u4eba\u625b\u774010\u4e2a\u961f\u53cb\u5728\u8e22\uff0c\u597d\u7d2f.....", "up": 511}, {"content": "\u7279\u8c22\u62c9\u4e00\u811a\u6cb9\u95e8\u955c\u5934\u91cc\u8d35\u5dde\u961f\u53ea\u5269\u4e0b\u95e8\u5c06\u4e86\u3002\u3002\u3002[\u518d\u89c1]", "up": 400}, {"content": "\u7b2c\u4e00\u3001\u822a\u6d77\u4f53\u80b2\u573a\u7684\u8349\u76ae\u771f\u7684\u611f\u4eba \u7b2c\u4e8c\u3001\u7279\u8c22\u62c9\u88ab\u94f2\u4f24\u6362\u4e0b\u573a\u4e3b\u573a\u7403\u8ff7\u9ad8\u558a\u201c**** \u201d\u662f\u4e0d\u662f\u6709\u70b9\u8fc7\u5206\u4e86\uff1f \u7b2c\u4e09\u3001\u738b\u4e0a\u6e90\u624b\u7403\u8fd9\u4e48\u660e\u663e\u770b\u4e0d\u51fa\u6765\uff1f", "up": 280}, {"content": "[\u7b11\u54ed][\u7b11\u54ed]\u9ec4\u7d2b\u660c\u5f3a\u884c\u628a\u5434\u66e6\u7684\u5c04\u95e8\uff0c\u53d8\u6210\u4e86\u81ea\u5df1\u7684\u8fdb\u7403\uff0c\u53d8\u6210\u4e86\u5434\u66e6\u7684\u52a9\u653b\u3002\u3002\u3002\u8bdd\u8bf4\uff0c\u90a3\u4e00\u811a\u7684\u505c\u7403\uff0c\u8f6c\u8eab\uff0c\u4e00\u6c14\u5475\u6210\uff0c\u5f88\u6f02\u4eae\uff0c\u5f88\u6210\u719f\uff0c\u4e0d\u602f\u573a\u3002\u3002\u3002\u53ef\u60dc\u4e86\u4e0a\u534a\u573a\u90a3\u811a\u7ed9\u5434\u66e6\u7684\u6253\u5728\u5185\u6a2a\u6881\u7684\u52a9\u653b\u5566\uff0c\u4e5f\u53ef\u60dc\u4e86\u81ea\u5df1\u7684\u4e00\u811a\u5c04\u6b63\u7684\u90a3\u4e00\u7403\u5566\u3002\u3002\u3002\u5c0f\u4f19\u5b50\u7528\u8111\u5b50\u8e22\u7403\u7684\uff0c\u4e00\u811a\u4f20\u7403\uff0c\u4e0d\u7c98\u7403\uff0c\u4f20\u7684\u5f88\u7cbe\u51c6\uff0c\u961f\u53cb\u63a5\u8d77\u6765\u4e5f\u5f88\u8212\u670d\uff0c\u90a3\u811a\u7ed9\u57fa\u8036\u7684\u957f\u4f20\u7edd\u5bf9\u89c1\u529f\u5e95\uff0c\u53ca\u65f6\uff0c\u7cbe\u51c6\uff0c\u4e0d\u62d6\u6ce5\u5e26\u6c34\uff0c\u624d\u4fc3\u6210\u4e86\u7279\u8c22\u62c9\u7684\u5355\u5200\u8fdb\u7403\uff0c\u4e09\u4eba\u529f\u4e0d\u53ef\u6ca1\u3002\u3002\u3002\u3002\u3002\u6709\u901f\u5ea6\uff0c\u6709\u7403\u5546\uff0c\u6709\u610f\u8bc6\uff0c\u4e0d\u7c98\u7403\uff0c\u6293\u4f4f\u6218\u673a\uff0c\u5904\u7406\u7403\u6070\u5230\u597d\u5904\uff0c\u800c\u4e14\u5f88\u65e0\u79c1\uff0c\u600e\u80fd\u4e0d\u7231\u3002\u3002\u3002\u3002\u300221\u5c81\uff0c\u4ee5\u540e\u591a\u591a\u4e0a\u573a\uff0c\u591a\u591a\u5386\u7ec3\uff0c\u603b\u4f1a\u6210\u540d\u6210\u4e07\u7684\u3002\u3002\u3002", "up": 117}, {"content": "\u5e78\u597d\u82cf\u5b81\u6ca1\u542c\u5361\u4f69\u7f57\u7684\u610f\u89c1\u628a\u7279\u8c22\u62c9\u5356\u6389\uff0c\u7279\u8c22\u62c9\u5bf9\u4e8e\u7403\u961f\u6765\u8bf4\u592a\u91cd\u8981\u4e86", "up": 87}], "4": [{"content": "\u7279\u8c22\u62c9\u7533\u8bf7\u52a0\u5165\u9996\u8f6e\u5e3d\u5b50\u620f\u6cd5\uff0c\u7fa4\u4e3b\u624e\u54c8\u7ef4\u521a\u51c6\u5907\u62d2\u7edd\uff0c\u7279\u8c22\u62c9\u64a4\u56de\u4e86\u52a0\u7fa4\u7533\u8bf7[\u7b11\u54ed]", "up": 695}, {"content": "\u7279\u8c22\u62c9\uff0c\u804c\u4e1a\u7403\u5458\u6807\u51c6", "up": 487}, {"content": "\u7279\u8c22\u62c9\u672c\u5e94\u8be5\u548c\u8428\u62c9\u8d6b\u5e76\u80a9\u4f5c\u6218\u3002", "up": 249}, {"content": "\u5047\u5982\u7279\u8c22\u62c9\u5728\u6052\u5927\u7684\u8bdd\u6bcf\u8d5b\u5b63\u5fc5\u8fdb25+\u7403\uff0c\u6211\u82cf\u6700\u559c\u6b22\u7684\u5916\u63f4[\u54c8\u54c8]", "up": 235}, {"content": "\u6ca1\u6709\u62c9\u7c73\u96f7\u65af\uff0c\u82cf\u5b81\u7684\u4e2d\u573a\u4e2d\u8d85\u5012\u6570\u4e86\uff0c\u7279\u8c22\u62c9\u5982\u679c\u7ed9\u4e0a\u6e2f\u6216\u6052\u5927\uff0c\u4f30\u8ba1\u8fdb\u7403\u6570\u7ffb\u500d\uff01\ud83d\udd1a\ud83d\ude4f", "up": 220}]};
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
