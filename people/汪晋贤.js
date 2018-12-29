var data = {"person_name": "\u6c6a\u664b\u8d24", "nicknames": "\u6c6a\u664b\u8d24", "aspects": {"\u7403\u5458": 0.15624880234268868, "\u7ea2\u724c": 0.5804822675814859, "\u9632\u5b88": 0.3493254972075527, "\u6bd4\u8d5b": 0.16496409944897372, "\u5916\u63f4": 0.30205778877001827, "\u70b9\u7403": 0.0, "\u8fdb\u653b": 0.08249397900679208, "\u8fdb\u7403": 0.2953073026463463, "\u7403\u8ff7": 0.15563136740096897, "\u66ff\u8865": 0.36400677517253277}, "overall_heat": 52.0, "overall_polar": -0.013, "name": "341", "nationality": "\u4e2d\u56fd", "position": "\u524d\u950b", "goal": "2", "assist": "5", "team_name": "\u5927\u8fde\u4e00\u65b9", "name_en": "Wang Jinxian", "age": "22", "height": "176", "weight": "70"};
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
var topic_keywords = {"0": [{"name": "\u6c6a\u664b\u8d24", "value": 0.04308176100628931}, {"name": "\uff01", "value": 0.015828092243186584}, {"name": "\u5927\u8fde", "value": 0.015828092243186584}, {"name": "\u7403\u5458", "value": 0.012683438155136268}, {"name": "\u5361\u62c9\u65af\u79d1", "value": 0.011635220125786163}, {"name": "\u8e22", "value": 0.009538784067085953}, {"name": "\u76d6\u5766", "value": 0.009538784067085953}, {"name": "\u4e00\u4e2a", "value": 0.007442348008385744}, {"name": "\u7403", "value": 0.007442348008385744}, {"name": "\u5bcc\u529b", "value": 0.006394129979035639}, {"name": "\u6731\u633a", "value": 0.006394129979035639}, {"name": "\u674e\u5e05", "value": 0.006394129979035639}, {"name": "\u6bd4\u8d5b", "value": 0.006394129979035639}, {"name": "\u9632\u5b88", "value": 0.006394129979035639}, {"name": "\u738b\u8000\u9e4f", "value": 0.006394129979035639}, {"name": "\u56fd\u5185", "value": 0.006394129979035639}, {"name": "\u88c1\u5224", "value": 0.005345911949685534}, {"name": "20", "value": 0.005345911949685534}, {"name": "\u7ea2\u724c", "value": 0.005345911949685534}, {"name": "\u6c34\u5e73", "value": 0.005345911949685534}, {"name": "\u7403\u961f", "value": 0.005345911949685534}, {"name": "\u53f7", "value": 0.005345911949685534}, {"name": "\u5927\u8fde\u4e00\u65b9", "value": 0.004297693920335429}, {"name": "\u961f", "value": 0.004297693920335429}, {"name": "\u95ee\u9898", "value": 0.004297693920335429}, {"name": "\u559c\u6b22", "value": 0.004297693920335429}, {"name": "\u592a", "value": 0.004297693920335429}, {"name": "\u8f93", "value": 0.004297693920335429}, {"name": "\u5b9e\u529b", "value": 0.004297693920335429}, {"name": "\u5dee", "value": 0.004297693920335429}], "1": [{"name": "\uff1f", "value": 0.03582589285714286}, {"name": "\u9a6c\u6797", "value": 0.03136160714285714}, {"name": "\u8bb0\u8005", "value": 0.02689732142857143}, {"name": "\u6c6a\u664b\u8d24", "value": 0.020200892857142858}, {"name": "\u8bf7\u95ee", "value": 0.017968750000000002}, {"name": "\u60f3", "value": 0.014620535714285714}, {"name": "\u7403\u961f", "value": 0.013504464285714285}, {"name": "\u558a", "value": 0.013504464285714285}, {"name": "\u5b8c", "value": 0.00904017857142857}, {"name": "\u6bd4\u8d5b", "value": 0.00904017857142857}, {"name": "\u738b\u4eae", "value": 0.00904017857142857}, {"name": "\u7403\u5458", "value": 0.00904017857142857}, {"name": "\u52a8\u4f5c", "value": 0.00904017857142857}, {"name": "\u9632\u5b88", "value": 0.007924107142857142}, {"name": "\u7403", "value": 0.007924107142857142}, {"name": "\u7ea2\u724c", "value": 0.007924107142857142}, {"name": "\u91cd\u5e86", "value": 0.0068080357142857135}, {"name": "\u5f53\u65f6", "value": 0.0068080357142857135}, {"name": "\u5439", "value": 0.0068080357142857135}, {"name": "\u77e5\u9053", "value": 0.0068080357142857135}, {"name": "\u4e2d\u8d85", "value": 0.0068080357142857135}, {"name": "\u95ee\u9898", "value": 0.0056919642857142854}, {"name": "\u4e22", "value": 0.0056919642857142854}, {"name": "\u76d6\u5766", "value": 0.0056919642857142854}, {"name": "\u6253", "value": 0.0056919642857142854}, {"name": "\u627e\u5230", "value": 0.0045758928571428565}, {"name": "\u6708", "value": 0.0045758928571428565}, {"name": "\u66ff\u6362", "value": 0.0045758928571428565}, {"name": "\u6362\u4eba", "value": 0.0045758928571428565}, {"name": "\u6307\u5bfc", "value": 0.0045758928571428565}]};
var topic_summary = {"0": [{"content": "\u4e0d\u80fd\u8bf4\u5361\u62c9\u65af\u79d1\uff0c\u76d6\u5766\u4e0d\u52aa\u529b\uff0c\u4e5f\u4e0d\u80fd\u602a\u56fd\u5185\u7403\u5458\u4e0d\u7ed9\u529b\uff0c\u4f46\u662f\u8fde\u8f93\u4e86\u4e24\u573a\uff0c\u573a\u4e0a\u8fd8\u662f\u6ca1\u6709\u4e00\u4e1d\u6539\u53d8\uff0c\u5c31\u8fde\u9996\u53d1\u9635\u5bb9\u9a6c\u6797\u90fd\u61d2\u5f97\u8c03\u6574\uff0c\u96be\u9053\u60f3\u4e09\u4e2d\u536b\u6446\u5927\u5df4\u4e00\u76f4\u5230\u4e0b\u8bfe\u5417\uff0c\u6c6a\u664b\u8d24\u3001\u674e\u5e05\u4e5f\u7b97\u662f\u6210\u540dU23\u554a\uff0c\u4e00\u4e2a\u4e0d\u5230\u534a\u573a\u6362\u4e0b\uff0c\u4e00\u4e2a\u6392\u9664\u5728\u5927\u540d\u5355\u4e4b\u5916\uff0c\u9664\u6b64\u4e4b\u5916\uff0c\u9632\u5b88\u53cd\u51fb\u4f60\u4e5f\u8981\u6709\u4e2a\u9ad8\u4e2d\u950b\u9876\u7740\u5427\uff0c\u4e0a\u8d5b\u5b63\u7403\u961f\u5c04\u624b\u738b\u7a46\u8c22\u594e\u53ea\u80fd\u5728\u770b\u53f0\u4e0a\uff0c\u9a6c\u6797\u786e\u5b9e\u591f\u5dee\u7684", "up": 213}, {"content": "\u76d6\u5766\uff0c\u6c6a\u664b\u8d24\uff0c\u5361\u62c9\u65af\u79d1\u8e22\u5f97\u90fd\u4e0d\u9519\uff0c\u8fd9\u4e2a\u88c1\u5224\u4ee5\u540e\u771f\u7684\u522b\u518d\u51fa\u73b0\u4e86\uff0c\u592a\u8ba9\u4eba****\u4e86[\u518d\u89c1]", "up": 197}, {"content": "\u672c\u573a\u6bd4\u8d5b\u4e00\u5171\u770b\u4e863\u6b21\u89c6\u9891\uff0c\u7b2c\u4e00\u6b21\u5224\u6c6a\u664b\u8d24\u7ea2\u724c\uff0c\u7b2c\u4e8c\u6b21\u770b\u5927\u8fde\u4e00\u65b9\u8fdb\u7403\u6709\u6ca1\u6709\u72af\u89c4\uff0c\u7b2c\u4e09\u6b21\u5224\u5927\u8fde\u4e00\u65b9\u70b9\u7403\uff0c\u4e0d\u591a\u8bf4\u4e0d\u89e3\u91ca\uff01\u81ea\u5df1\u60f3\u5427\uff01", "up": 176}, {"content": "\u7406\u6027\u6765\u8bf4\uff0c\u6c6a\u664b\u8d24\u7684\u7ea2\u724c\u4e00\u70b9\u95ee\u9898\u90fd\u6ca1\u6709\uff0c\u4f46\u662f\u88c1\u5224\u5374\u6210\u4e3a\u672c\u573a\u6bd4\u8d5b\u7684\u4e3b\u89d2\uff0c\u88c1\u5224\u8fd9\u6c34\u5e73\u592a\u70c2\u4e86\uff0c\u672c\u8eab\u5c31\u4e0d\u7cbe\u5f69\u7684\u6bd4\u8d5b\uff0c\u786c\u662f\u7ed9\u5439\u7684\u4e03\u96f6\u516b\u843d\u3002", "up": 82}, {"content": "\u8fd9\u89e3\u8bf4\u7126\u7814\u5cf0\u867d\u7136\u662f\u8001\u8d44\u683c\uff0c\u53f7\u79f0\u5927\u8fde\u4e00\u5b9d \u4f46\u6bd4\u8d5b\u4e2d\u7684\u4eae\u70b9 \u7cbe\u5f69\u4e4b\u5904\u90fd\u6ca1\u6709\u89e3\u8bf4\u51fa\u6765\uff0c\u6bd4\u5982\u6c6a\u664b\u8d24\u90a3\u4e2a\u7403\u6700\u5177\u6280\u672f\u542b\u91cf\u7684\u662f\u5361\u62c9\u65af\u79d1\u7684\u7cbe\u5f69\u8fc7\u4eba\uff0c\u4ed6\u5374\u72c2\u8d5e\u6c6a\u664b\u8d24\u8bf4\u4f20\u7403\u597d\uff0c\u90a3\u4e2a\u7403\u4e0d\u662f\u4f20\u5f97\u597d\uff0c\u662f\u8fc7\u5f97\u6f02\u4eae\uff1f\u867d\u7136\u89e3\u8bf4\u4e86\u8fd9\u4e48\u591a\u5e74\u4f9d\u7136\u662f\u9760\u504f\u8892\u4e3b\u961f\u9e2d\u5b50\u822c\u7684\u7684\u53eb\u5e8a\u4e3a\u7279\u8272\uff0c\u4f9d\u7136\u662f\u4e1a\u4f59\u89e3\u8bf4 **** \u6eda\u5427\u7126\u7814\u5cf0", "up": 9}], "1": [{"content": "\u4e0d\u8bf4\u522b\u7684\uff0c\u4e25\u667a\u5b87\u98de\u8e39\u6c6a\u664b\u8d24\u7ed9\u4e24\u5f20\u7ea2\u724c\u90fd\u4e0d\u51a4\uff0c\u88c1\u5224\u5c45\u7136\u4e24\u7ea2\u53d8\u4e00\u9ec4\uff0c\u6211\u5c31\u5475\u5475\u4e86\u3002", "up": 36}, {"content": "\u8bb0\u8005\uff1a\u8bf7\u95ee\u9a6c\u6797\u4e3b\u6559\u7ec3 \u5bf9\u4e8e\u7403\u961f\u4e09\u8fde\u8d25 \u4e2213\u7403 1\u7403\u672a\u8fdb \u4f60\u6709\u4ec0\u4e48\u60f3\u8bf4\u7684\uff1f \u9a6c\u6797\uff1a\u7403\u961f\u76ee\u524d\u9632\u5b88\u6709\u95ee\u9898 \u4e0d\u8fc7\u4e09\u573a\u6bd4\u8d5b\u8fdb\u653b\u4e00\u76f4\u5f88\u7a33\u5b9a\u3002 \u8bb0\u8005\uff1a\u8bf7\u95ee\u9a6c\u6307\u5bfc\uff0c\u60a8\u5728\u4e0a\u534a\u573a\u66ff\u6362\u4e0b\u8868\u73b0\u4e0d\u9519\u7684U23\u7403\u5458\u6c6a\u664b\u8d24\uff0c\u662f\u51fa\u4e8e\u600e\u6837\u7684\u8003\u8651\u5462\uff1f \u9a6c\u6797\uff1a\u6211\u54ea\u9e21\u989d\u77e5\u9053\uff0c\u7a81\u7136\u6765\u4e86\u7075\u611f\u4e86\uff0c\u8fd9\u73a9\u610f\uff0c\u6362\u4eba\u5c31\u8ddf\u8c08\u604b\u7231\u4f3c\u7684\uff0c\u4e0d\u4e00\u5b9a\u4ec0\u4e48\u65f6\u5019\u8111\u989d\u4e00\u70ed\u505a\u51fa\u4ec0\u4e48\u4e8b\u6765\u3002 \u8bb0\u8005\uff1a\u955c\u5934\u4e2d\u66fe\u51fa\u73b0\u60a8\u5fae\u5fae\u4e00\u7b11\u7684\u753b\u9762\uff0c\u8bf7\u95ee\u60a8\u5f53\u65f6\u5728\u60f3\u4ec0\u4e48\u5462\uff1f \u9a6c\u6797\uff1a\u4f53\u80b2\u5c40\u90a3\u5e2e\u8bf4\u6bd4\u8d5b\u5b8c\u558a\u6211\u559d\u9152 \u6211\u521a\u624d\u624b\u673a\u770b\u4e86\u773c\u7f8e\u56e2 \u627e\u5230\u5bb6\u51ef\u9f99\u6253\u6298\u7684 \u6709\u70b9\u9ad8\u5174\u5c31\u7b11\u4e86\u3002 \u8bb0\u8005\uff1a\u73b0\u573a\u56db\u4e07\u591a\u7403\u8ff7\u558a\u4f60\u4e0b\u8bfe\uff0c\u4f60\u6709\u4ec0\u4e48\u60f3\u8bf4\u7684\uff1f \u9a6c\u6797\uff1a\u54c8\u54c8\u54c8\uff0c\u58f0\u633a\u9f50\u7684\uff0c\u6211\u90fd\u5fcd\u4e0d\u4f4f\u8ddf\u7740\u558a\u4e86\u4e24\u58f0\uff0c\u4e0d\u8fc7\u558a\u4e86\u4f1a\u4ed6\u4eec\u5c31\u505c\u4e86\uff0c\u6ca1\u8fc7\u763e\u3002\u3002 \u8bb0\u8005\uff1a\u9a6c\u4e0a\u5c31\u662f\u534a\u4e2a\u6708\u7684\u8c03\u6574\u671f \u7403\u961f\u5c06\u4f1a\u5982\u4f55\u8c03\u6574\u5462\uff1f \u9a6c\u6797\uff1a\u51af\u7279\u6253\u5b8c\u524d\u950b\u4e86\uff0c\u5361\u62c9\u4e5f\u6253\u8fc7\u4e86\uff0c\u6253\u7b97\u518d\u8bd5\u8bd5\u76d6\u5766\u3002 \u8bb0\u8005\uff1a\u7f51\u4f20\u738b\u4eae\u662f\u60a8\u7684\u4eb2\u621a\uff0c\u8bf7\u95ee\u6709\u8fd9\u56de\u4e8b\u5417\uff1f \u9a6c\u6797\uff1a\u6ca1\u6709\uff0c\u8fd9\u5e2e\u5f6a\u5b50\u600e\u4e48\u778e\u9e21\u989d\u8bf4\u4e86\u5f00\u59cb\uff0c\u738b\u4eae\u662f\u9876\u94b1\u7684\uff0c\u91d1\u5f3a\u624d\u662f\uff0c\u884c\u4e86\uff0c\u5c31\u5230\u8fd9\u5427\uff0c\u8bf4\u8bdd\u8fd9\u4f1a\u529f\u592b\uff0c\u6211\u5305\u95f4\u8ba2\u5b8c\u4e86\uff0c\u4eca\u665a\u4e09\u4e2d\u5168\u4f1a\uff0c\u5c31\u5230\u8fd9\u5427\uff0c\u6211\u5f97\u8d70\u4e86\u3002", "up": 16}, {"content": "\u8bb0\u8005\uff1a\u8bf7\u95ee\u9a6c\u6797\u4e3b\u6559\u7ec3 \u5bf9\u4e8e\u7403\u961f\u4e09\u8fde\u8d25 \u4e2213\u7403 1\u7403\u672a\u8fdb \u4f60\u6709\u4ec0\u4e48\u60f3\u8bf4\u7684\uff1f \u9a6c\u6797\uff1a\u7403\u961f\u76ee\u524d\u9632\u5b88\u6709\u95ee\u9898 \u4e0d\u8fc7\u4e09\u573a\u6bd4\u8d5b\u8fdb\u653b\u4e00\u76f4\u5f88\u7a33\u5b9a\u3002 \u8bb0\u8005\uff1a\u8bf7\u95ee\u9a6c\u6307\u5bfc\uff0c\u60a8\u5728\u4e0a\u534a\u573a\u66ff\u6362\u4e0b\u8868\u73b0\u4e0d\u9519\u7684U23\u7403\u5458\u6c6a\u664b\u8d24\uff0c\u662f\u51fa\u4e8e\u600e\u6837\u7684\u8003\u8651\u5462\uff1f \u9a6c\u6797\uff1a\u6211\u54ea\u9e21\u989d\u77e5\u9053\uff0c\u7a81\u7136\u6765\u4e86\u7075\u611f\u4e86\uff0c\u8fd9\u73a9\u610f\uff0c\u6362\u4eba\u5c31\u8ddf\u8c08\u604b\u7231\u4f3c\u7684\uff0c\u4e0d\u4e00\u5b9a\u4ec0\u4e48\u65f6\u5019\u8111\u989d\u4e00\u70ed\u505a\u51fa\u4ec0\u4e48\u4e8b\u6765\u3002 \u8bb0\u8005\uff1a\u955c\u5934\u4e2d\u66fe\u51fa\u73b0\u60a8\u5fae\u5fae\u4e00\u7b11\u7684\u753b\u9762\uff0c\u8bf7\u95ee\u60a8\u5f53\u65f6\u5728\u60f3\u4ec0\u4e48\u5462\uff1f \u9a6c\u6797\uff1a\u4f53\u80b2\u5c40\u90a3\u5e2e\u8bf4\u6bd4\u8d5b\u5b8c\u558a\u6211\u559d\u9152 \u6211\u521a\u624d\u624b\u673a\u770b\u4e86\u773c\u7f8e\u56e2 \u627e\u5230\u5bb6\u51ef\u9f99\u6253\u6298\u7684 \u6709\u70b9\u9ad8\u5174\u5c31\u7b11\u4e86\u3002 \u8bb0\u8005\uff1a\u73b0\u573a\u56db\u4e07\u591a\u7403\u8ff7\u558a\u4f60\u4e0b\u8bfe\uff0c\u4f60\u6709\u4ec0\u4e48\u60f3\u8bf4\u7684\uff1f \u9a6c\u6797\uff1a\u54c8\u54c8\u54c8\uff0c\u58f0\u633a\u9f50\u7684\uff0c\u6211\u90fd\u5fcd\u4e0d\u4f4f\u8ddf\u7740\u558a\u4e86\u4e24\u58f0\uff0c\u4e0d\u8fc7\u558a\u4e86\u4f1a\u4ed6\u4eec\u5c31\u505c\u4e86\uff0c\u6ca1\u8fc7\u763e\u3002\u3002 \u8bb0\u8005\uff1a\u9a6c\u4e0a\u5c31\u662f\u534a\u4e2a\u6708\u7684\u8c03\u6574\u671f \u7403\u961f\u5c06\u4f1a\u5982\u4f55\u8c03\u6574\u5462\uff1f \u9a6c\u6797\uff1a\u51af\u7279\u6253\u5b8c\u524d\u950b\u4e86\uff0c\u5361\u62c9\u4e5f\u6253\u8fc7\u4e86\uff0c\u6253\u7b97\u518d\u8bd5\u8bd5\u76d6\u5766\u3002 \u8bb0\u8005\uff1a\u7f51\u4f20\u738b\u4eae\u662f\u60a8\u7684\u4eb2\u621a\uff0c\u8bf7\u95ee\u6709\u8fd9\u56de\u4e8b\u5417\uff1f \u9a6c\u6797\uff1a\u6ca1\u6709\uff0c\u8fd9\u5e2e\u5f6a\u5b50\u600e\u4e48\u778e\u9e21\u989d\u8bf4\u4e86\u5f00\u59cb\uff0c\u738b\u4eae\u662f\u9876\u94b1\u7684\uff0c\u91d1\u5f3a\u624d\u662f\uff0c\u884c\u4e86\uff0c\u5c31\u5230\u8fd9\u5427\uff0c\u8bf4\u8bdd\u8fd9\u4f1a\u529f\u592b\uff0c\u6211\u5305\u95f4\u8ba2\u5b8c\u4e86\uff0c\u4eca\u665a\u4e09\u4e2d\u5168\u4f1a\uff0c\u5c31\u5230\u8fd9\u5427\uff0c\u6211\u5f97\u8d70\u4e86\u3002", "up": 15}, {"content": "\u8bb0\u8005\uff1a\u8bf7\u95ee\u9a6c\u6797\u4e3b\u6559\u7ec3 \u5bf9\u4e8e\u7403\u961f\u4e09\u8fde\u8d25 \u4e2213\u7403 1\u7403\u672a\u8fdb \u4f60\u6709\u4ec0\u4e48\u60f3\u8bf4\u7684\uff1f \u9a6c\u6797\uff1a\u7403\u961f\u76ee\u524d\u9632\u5b88\u6709\u95ee\u9898 \u4e0d\u8fc7\u4e09\u573a\u6bd4\u8d5b\u8fdb\u653b\u4e00\u76f4\u5f88\u7a33\u5b9a\u3002 \u8bb0\u8005\uff1a\u8bf7\u95ee\u9a6c\u6307\u5bfc\uff0c\u60a8\u5728\u4e0a\u534a\u573a\u66ff\u6362\u4e0b\u8868\u73b0\u4e0d\u9519\u7684U23\u7403\u5458\u6c6a\u664b\u8d24\uff0c\u662f\u51fa\u4e8e\u600e\u6837\u7684\u8003\u8651\u5462\uff1f \u9a6c\u6797\uff1a\u6211TM\u548b\u77e5\u9053\uff0c\u7a81\u7136\u5c31\u6765\u4e86\u7075\u611f\u4e86\uff0c\u8fd9\u73a9\u610f\uff0c\u6362\u4eba\u5c31\u8ddf\u8c08\u604b\u7231\u4f3c\u7684\uff0c\u4e0d\u4e00\u5b9a\u4ec0\u4e48\u65f6\u5019\u8111\u989d\u4e00\u70ed\u505a\u51fa\u4ec0\u4e48\u4e8b\u6765\u3002 \u8bb0\u8005\uff1a\u955c\u5934\u4e2d\u66fe\u51fa\u73b0\u60a8\u5fae\u5fae\u4e00\u7b11\u7684\u753b\u9762\uff0c\u8bf7\u95ee\u60a8\u5f53\u65f6\u5728\u60f3\u4ec0\u4e48\u5462\uff1f \u9a6c\u6797\uff1a\u4f53\u80b2\u5c40\u90a3\u5e2e\u4f19\u8ba1\u8bf4\u6bd4\u8d5b\u5b8c\u558a\u6211\u559d\u9152 \u6211\u521a\u624d\u624b\u673a\u770b\u4e86\u4e00\u773c\u7f8e\u56e2 \u627e\u5230\u5bb6\u51ef\u9f99\u6253\u6298\u7684 \u6709\u70b9\u9ad8\u5174\u5c31\u7b11\u4e86\u3002 \u8bb0\u8005\uff1a\u73b0\u573a\u56db\u4e07\u591a\u7403\u8ff7\u558a\u4f60\u4e0b\u8bfe\uff0c\u4f60\u6709\u4ec0\u4e48\u60f3\u8bf4\u7684\uff1f \u9a6c\u6797\uff1a\u54c8\u54c8\u54c8\uff0c\u58f0\u633a\u9f50\u7684\uff0c\u6211\u90fd\u5fcd\u4e0d\u4f4f\u8ddf\u7740\u558a\u4e86\u4e24\u58f0\uff0c\u4e0d\u8fc7\u558a\u4e86\u4f1a\u4ed6\u4eec\u5c31\u505c\u4e86\uff0c\u6ca1\u8fc7\u763e\u3002\u3002 \u8bb0\u8005\uff1a\u9a6c\u4e0a\u5c31\u662f\u534a\u4e2a\u6708\u7684\u8c03\u6574\u671f \u7403\u961f\u5c06\u4f1a\u5982\u4f55\u8c03\u6574\u5462\uff1f \u9a6c\u6797\uff1a\u51af\u7279\u6253\u5b8c\u524d\u950b\u4e86\uff0c\u5361\u62c9\u4e5f\u6253\u8fc7\u4e86\uff0c\u6253\u7b97\u518d\u8bd5\u8bd5\u76d6\u5766\u3002 \u8bb0\u8005\uff1a\u7f51\u4f20\u738b\u4eae\u662f\u60a8\u7684\u4eb2\u621a\uff0c\u8bf7\u95ee\u6709\u8fd9\u56de\u4e8b\u5417\uff1f \u9a6c\u6797\uff1a\u6ca1\u6709\uff0c\u8fd9\u5e2e\u5f6a\u5b50\u600e\u4e48\u778e\u9e21\u989d\u8bf4\u4e86\u5f00\u59cb\uff0c\u738b\u4eae\u662f\u9876\u94b1\u7684\uff0c\u91d1\u5f3a\u624d\u662f\uff0c\u884c\u4e86\uff0c\u5c31\u5230\u8fd9\u5427\uff0c\u8bf4\u8bdd\u8fd9\u4f1a\u529f\u592b\uff0c\u6211\u5305\u95f4\u8ba2\u5b8c\u4e86\uff0c\u4eca\u665a\u4e09\u4e2d\u5168\u4f1a\uff0c\u5c31\u5230\u8fd9\u5427\uff0c\u6211\u5f97\u8d70\u4e86\u3002", "up": 12}, {"content": "\u5148\u4e0d\u8bf4\u662f\u4e0d\u662f\u70b9\u7403\uff0c\u4f46\u662f\u7ea2\u724c\u5e94\u8be5\u7ed9\u5427\uff01\u6c6a\u664b\u8d24\u90a3\u4e2a\u7403\u660e\u663e\u6709\u7403\u6743\uff0c\u800c\u4e14\u8eab\u4f4d\u5df2\u7ecf\u8fc7\u53bb\u4e86\uff0c\u9632\u5b88\u961f\u5458\u624b\u4e0a\u811a\u4e0b\u90fd\u6709\u52a8\u4f5c\uff0c\u8fd9\u90fd\u4e0d\u5439\uff0c\u4e3b\u88c1\u8fb9\u88c1\u90fd\u778e\u4e86\u5427\uff0c\u89c6\u9891\u88c1\u5224\u662f\u7761\u8fc7\u53bb\u6b7b\u4e86\u5417", "up": 6}]};
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
