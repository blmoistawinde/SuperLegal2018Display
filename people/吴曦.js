var data = {"person_name": "\u5434\u66e6", "nicknames": "\u5434\u66e6", "aspects": {"\u6bd4\u8d5b": 0.6426559995597317, "\u7403\u5458": 0.38139585969182954, "\u4f20\u7403": 0.690708251405956, "\u8fdb\u7403": 0.4620541351038701, "\u56fd\u5bb6\u961f": 0.6462392203026626, "\u9632\u5b88": 0.6356332227828029, "\u8fdb\u653b": 0.7142369464226748, "\u5916\u63f4": 0.39178845131847595, "\u52a9\u653b": 0.34874592955424993, "\u8865\u65f6": 0.8233746324435801}, "overall_heat": 97.0, "overall_polar": 0.739, "name": "189", "nationality": "\u4e2d\u56fd", "position": "\u4e2d\u573a", "goal": "2", "assist": "3", "team_name": "\u6c5f\u82cf\u82cf\u5b81", "name_en": "Wu Xi", "age": "29", "height": "180", "weight": "75"};
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
var topic_keywords = {"0": [{"name": "\u5434\u66e6", "value": 0.05258560447239693}, {"name": "\uff1f", "value": 0.017645003494060098}, {"name": "\u6253", "value": 0.014150943396226415}, {"name": "\u5409\u7965", "value": 0.014150943396226415}, {"name": "\u82cf\u5b81", "value": 0.014150943396226415}, {"name": "\u7403\u5458", "value": 0.010656883298392731}, {"name": "\uff01", "value": 0.00890985324947589}, {"name": "\u8fdb\u7403", "value": 0.00890985324947589}, {"name": "\u597d", "value": 0.00890985324947589}, {"name": "\u5c01\u5835", "value": 0.00890985324947589}, {"name": "\u6253\u95e8", "value": 0.00890985324947589}, {"name": "\u5012", "value": 0.007162823200559049}, {"name": "\u8eb2", "value": 0.007162823200559049}, {"name": "\u60f3\u5230", "value": 0.007162823200559049}, {"name": "\u77e5\u9053", "value": 0.007162823200559049}, {"name": "\u770b\u5230", "value": 0.007162823200559049}, {"name": "\u5b59\u53ef", "value": 0.007162823200559049}, {"name": "\u5bf9\u65b9", "value": 0.007162823200559049}, {"name": "\u52a9\u653b", "value": 0.007162823200559049}, {"name": "\u53bb\u5e74", "value": 0.007162823200559049}, {"name": "\u516b\u6212", "value": 0.005415793151642209}, {"name": "\u7b11", "value": 0.005415793151642209}, {"name": "\u7cbe\u51c6", "value": 0.005415793151642209}, {"name": "\u7403", "value": 0.005415793151642209}, {"name": "\u653e", "value": 0.005415793151642209}, {"name": "\u7279\u8c22\u62c9", "value": 0.005415793151642209}, {"name": "\u6c6a\u5d69", "value": 0.005415793151642209}, {"name": "\u4e2d\u8d85", "value": 0.005415793151642209}, {"name": "\u6bd4\u8d5b", "value": 0.005415793151642209}, {"name": "\u53ef\u60dc", "value": 0.005415793151642209}], "1": [{"name": "\u5434\u66e6", "value": 0.05320867959372115}, {"name": "\uff01", "value": 0.031278855032317636}, {"name": "\u8e22", "value": 0.013965835641735919}, {"name": "\u4e2d\u573a", "value": 0.01281163434903047}, {"name": "\u9ec4\u7d2b\u660c", "value": 0.010503231763619576}, {"name": "\u57fa\u8036", "value": 0.009349030470914127}, {"name": "\u535a\u963f", "value": 0.009349030470914127}, {"name": "\u82cf\u5b81", "value": 0.009349030470914127}, {"name": "\u7279\u8c22\u62c9", "value": 0.00819482917820868}, {"name": "\u62c9\u7c73\u96f7\u65af", "value": 0.00819482917820868}, {"name": "\u6c5f\u82cf", "value": 0.007040627885503231}, {"name": "\u5e94\u8be5", "value": 0.007040627885503231}, {"name": "\u5409\u7fd4", "value": 0.007040627885503231}, {"name": "\u8c22\u9e4f\u98de", "value": 0.007040627885503231}, {"name": "\u90d1\u667a", "value": 0.005886426592797784}, {"name": "\u56fd\u5185", "value": 0.005886426592797784}, {"name": "\u597d", "value": 0.005886426592797784}, {"name": "\u56de\u6765", "value": 0.005886426592797784}, {"name": "\u4f4d\u7f6e", "value": 0.005886426592797784}, {"name": "\u8fdb\u7403", "value": 0.005886426592797784}, {"name": "\u592a", "value": 0.005886426592797784}, {"name": "\u524d\u573a", "value": 0.005886426592797784}, {"name": "\u7403\u5458", "value": 0.005886426592797784}, {"name": "\u4e00\u4e2a", "value": 0.005886426592797784}, {"name": "\u611f\u89c9", "value": 0.005886426592797784}, {"name": "\u6c6a\u5d69", "value": 0.005886426592797784}, {"name": "\u62c9\u7c73", "value": 0.005886426592797784}, {"name": "\u56fd\u5bb6\u961f", "value": 0.004732225300092336}, {"name": "\u786e\u5b9e", "value": 0.004732225300092336}, {"name": "\u8fd9\u573a", "value": 0.004732225300092336}], "2": [{"name": "\u5434\u66e6", "value": 0.04352544007716422}, {"name": "\u82cf\u5b81", "value": 0.0157945502773089}, {"name": "\u7403\u5458", "value": 0.0109717868338558}, {"name": "\u9632\u5b88", "value": 0.0109717868338558}, {"name": "\uff01", "value": 0.0109717868338558}, {"name": "\u8fdb\u653b", "value": 0.0109717868338558}, {"name": "\u4e2d\u573a", "value": 0.00856040511212925}, {"name": "\u56fd\u5bb6\u961f", "value": 0.007354714251265975}, {"name": "\u7403\u961f", "value": 0.007354714251265975}, {"name": "\u6052\u5927", "value": 0.007354714251265975}, {"name": "\u771f\u7684", "value": 0.007354714251265975}, {"name": "\u4f20\u7403", "value": 0.006149023390402701}, {"name": "\u6bd4\u8d5b", "value": 0.006149023390402701}, {"name": "\u4ff1\u4e50\u90e8", "value": 0.006149023390402701}, {"name": "\u80fd\u529b", "value": 0.006149023390402701}, {"name": "\u6b66\u78ca", "value": 0.006149023390402701}, {"name": "\u8fdb\u7403", "value": 0.006149023390402701}, {"name": "\u660e\u5e74", "value": 0.006149023390402701}, {"name": "\u5e94\u8be5", "value": 0.006149023390402701}, {"name": "\u5409\u7fd4", "value": 0.006149023390402701}, {"name": "\u4e00\u4e2a", "value": 0.006149023390402701}, {"name": "\u73ed\u5e95", "value": 0.004943332529539426}, {"name": "\u90d1\u667a", "value": 0.004943332529539426}, {"name": "\u53d1\u6325", "value": 0.004943332529539426}, {"name": "\u91cc", "value": 0.004943332529539426}, {"name": "\u672c\u573a", "value": 0.004943332529539426}, {"name": "\u4e0b", "value": 0.004943332529539426}, {"name": "\u8868\u73b0", "value": 0.004943332529539426}, {"name": "\u6280\u672f", "value": 0.004943332529539426}, {"name": "\u56fd\u5185", "value": 0.004943332529539426}]};
var topic_summary = {"0": [{"content": "[\u7b11\u54ed][\u7b11\u54ed]\u9ec4\u7d2b\u660c\u5f3a\u884c\u628a\u5434\u66e6\u7684\u5c04\u95e8\uff0c\u53d8\u6210\u4e86\u81ea\u5df1\u7684\u8fdb\u7403\uff0c\u53d8\u6210\u4e86\u5434\u66e6\u7684\u52a9\u653b\u3002\u3002\u3002\u8bdd\u8bf4\uff0c\u90a3\u4e00\u811a\u7684\u505c\u7403\uff0c\u8f6c\u8eab\uff0c\u4e00\u6c14\u5475\u6210\uff0c\u5f88\u6f02\u4eae\uff0c\u5f88\u6210\u719f\uff0c\u4e0d\u602f\u573a\u3002\u3002\u3002\u53ef\u60dc\u4e86\u4e0a\u534a\u573a\u90a3\u811a\u7ed9\u5434\u66e6\u7684\u6253\u5728\u5185\u6a2a\u6881\u7684\u52a9\u653b\u5566\uff0c\u4e5f\u53ef\u60dc\u4e86\u81ea\u5df1\u7684\u4e00\u811a\u5c04\u6b63\u7684\u90a3\u4e00\u7403\u5566\u3002\u3002\u3002\u5c0f\u4f19\u5b50\u7528\u8111\u5b50\u8e22\u7403\u7684\uff0c\u4e00\u811a\u4f20\u7403\uff0c\u4e0d\u7c98\u7403\uff0c\u4f20\u7684\u5f88\u7cbe\u51c6\uff0c\u961f\u53cb\u63a5\u8d77\u6765\u4e5f\u5f88\u8212\u670d\uff0c\u90a3\u811a\u7ed9\u57fa\u8036\u7684\u957f\u4f20\u7edd\u5bf9\u89c1\u529f\u5e95\uff0c\u53ca\u65f6\uff0c\u7cbe\u51c6\uff0c\u4e0d\u62d6\u6ce5\u5e26\u6c34\uff0c\u624d\u4fc3\u6210\u4e86\u7279\u8c22\u62c9\u7684\u5355\u5200\u8fdb\u7403\uff0c\u4e09\u4eba\u529f\u4e0d\u53ef\u6ca1\u3002\u3002\u3002\u3002\u3002\u6709\u901f\u5ea6\uff0c\u6709\u7403\u5546\uff0c\u6709\u610f\u8bc6\uff0c\u4e0d\u7c98\u7403\uff0c\u6293\u4f4f\u6218\u673a\uff0c\u5904\u7406\u7403\u6070\u5230\u597d\u5904\uff0c\u800c\u4e14\u5f88\u65e0\u79c1\uff0c\u600e\u80fd\u4e0d\u7231\u3002\u3002\u3002\u3002\u300221\u5c81\uff0c\u4ee5\u540e\u591a\u591a\u4e0a\u573a\uff0c\u591a\u591a\u5386\u7ec3\uff0c\u603b\u4f1a\u6210\u540d\u6210\u4e07\u7684\u3002\u3002\u3002", "up": 117}, {"content": "\u6ca1\u4eba\u5938\u5434\u66e6\u5417\uff1f\u4ed6\u7684\u51e0\u6b21\u4f20\u7403\u4e0d\u9519\ud83d\udc4d", "up": 10}, {"content": "\u5361\u4f69\u7f57\u5c31\u662f\u56fa\u6267\uff0c\u516b\u6212\u5176\u5b9e\u6ca1\u4ec0\u4e48\u4f24\u75c5\u5c31\u662f\u4e0d\u8ba9\u4e0a\uff0c\u8bf4\u8fbe\u4e0d\u5230\u6bd4\u8d5b\u8981\u6c42\u3002\u4e4b\u524d\u8fd8\u4e00\u4e2a\u52b2\u8981\u5356\u4e86\u7279\u795e\u3002\u8981\u4e0d\u662f\u7279\u795e\uff0c\u53ef\u80fd\u82cf\u5b81\u524d\u56db\u573a\u5168\u8d25\u4e86\u3002\u65e9\u7092\u5361\u4f69\u7f57\uff0c\u8fd8\u662f\u660e\u667a\u7684\u3002\u7b49\u62c9\u7c73\u5434\u66e6\u4f24\u6108\uff0c\u82cf\u5b81\u8fd8\u662f\u53ef\u4ee5\u548c\u5176\u4ed6\u4e2d\u8d85\u5f3a\u961f\u4ea4\u91cf\u4ea4\u91cf\u7684\u3002", "up": 8}, {"content": "\u5434\u66e6\u4eca\u665a\u55d1\u836f\u4e86\u5427\uff0c\u597d\u50cf\u53d8\u4e86\u4e2a\u4eba\u3002\u4f53\u529b\u7528\u4e0d\u5b8c", "up": 6}, {"content": "\u7b2c8\u5206\u949f\u5434\u66e6\u9632\u5b88\u53cd\u51fb\u4e2d\u653e\u5012\u7279\u8c22\u62c9\uff1f\u81ea\u5df1\u4eba\u653e\u5012\u81ea\u5df1\u4eba\uff1f", "up": 5}], "1": [{"content": "\u90d1\u667a\u7684\u63a5\u73ed\u4eba\u76ee\u524d\u6765\u770b\u8fd8\u662f\u5434\u66e6\u3002\u4f55\u8d85\u6bd4\u5434\u66e6\u5dee\u8bb8\u591a\uff0c\u4e0d\u8fc7\u5e74\u8f7b6\u5c81\u3002", "up": 571}, {"content": "\u7279\u795e\u5a01\u6b66\uff0c\u5c0f\u9ec4\u540c\u5b66\u591a\u7ec3\u7ec3\u5c04\u95e8\uff0c\u8fd8\u6709\u62c9\u7c73\u5434\u66e6\u5feb\u70b9\u56de\u6765\u5427\uff0c\u6ca1\u4f60\u4eec\u4e2d\u573a\u90fd\u4e71\u6210\u4ec0\u4e48\u4e86", "up": 101}, {"content": "\u8c22\u9e4f\u98de\u8fd9\u573a\u8e22\u51fa\u4e86\u611f\u89c9\u554a\uff0c\u4e24\u4e2a\u52a9\u653b\uff01\u5965\u5e05\u6362\u4e0a\u6c6a\u5d69\u662f\u5999\u7b14\uff0c\u6709\u6548\u7684\u63a7\u5236\u4e86\u4e2d\u573a\uff0c\u8fdb\u7403\u968f\u4e4b\u800c\u6765\uff01\u53e6\u5916\uff0c\u5434\u66e6\u8e22\u7684\u771f\u68d2\uff01\u6c5f\u82cf\u6218\u6597\uff01\uff01\uff01[\u52a0\u6cb9][\u52a0\u6cb9]", "up": 89}, {"content": "\u5409\u7fd4\uff0c\u5434\u66e6\uff0c\u674e\u6602\uff0c\u8c22\u9e4f\u98de\uff0c\u9ec4\u7d2b\u660c", "up": 78}, {"content": "mvp\u5434\u66e6\uff01\u771f\u7684\u8e22\u5f97\u5f88\u68d2\uff01", "up": 39}], "2": [{"content": "\u5434\u66e6\u771f\u7684\u88ab\u4f4e\u4f30\u4e86\uff01\u771f\u7684\u5f88\u5f3a\uff01", "up": 257}, {"content": "\u534e\u590f\u5e78\u798f\u8fd9\u4e2a\u7403\u961f\u5f88\u5947\u602a\uff0c\u4e70\u4eba\u90fd\u662f\u79c1\u4e0b\u63a5\u89e6\u903c\u7403\u5458\u548c\u4ff1\u4e50\u90e8\u95f9\u77db\u76fe\uff0c\u7136\u540e\u518d\u62a2\u4eba\uff0c\u8bdd\u8bf4\u8fd9\u6837\u4e70\u7684\u7684\u7403\u5458\u6709\u51e0\u4e2a\u4f1a\u6709\u96c6\u4f53\u8363\u8a89\u611f\uff1f\u5168\u961f\u7403\u5458\u5c31\u5982\u96c7\u4f63\u5175\u4e00\u6837\u3002\u4f1a\u6709\u90d1\u667a\uff0c\u5927\u96f7\uff0c\u83ab\u96f7\u8bfa\uff0c\u5434\u66e6\u7b49\u7403\u5458\u7403\u961f\u8363\u8a89\u611f\u5417\uff1f", "up": 57}, {"content": "\u4e3e\u62a5:\u9ec4\u7d2b\u660c\u65ad\u4e86\u5434\u66e6\u7684\u7206\u5c04\u7403\u7136\u540e\u81ea\u5df1\u8fdb\u7403\u3002\u3002\u3002", "up": 15}, {"content": "\u82cf\u5b81\u53ef\u80fd\u662f\u672c\u8d5b\u5b63\u4e2d\u8d85\u5e74\u9f84\u7ed3\u6784\u6700\u597d\u7684\u7403\u961f\u4e86\uff0c\u9664\u4e86\u5434\u66e6\u548c\u987e\u8d85\u56fd\u5185\u7403\u5458\u90fd\u662f90\u540e\u3002\u867d\u7136\u593a\u51a0\u7684\u5b9e\u529b\u7a0d\u900a\uff0c\u4f46\u4e9a\u51a0\u5e94\u8be5\u95ee\u9898\u4e0d\u5927\u3002\u4e0d\u8fc7\u8fd8\u662f\u8981\u89e3\u51b3\u8f6e\u6362\u548c\u6700\u540e\u65f6\u523b\u6ce8\u610f\u529b\u4e0d\u96c6\u4e2d\u7684\u95ee\u9898\u3002\u9ec4\u7d2b\u660c\u8fdb\u7403\u5176\u5b9e\u6211\u89c9\u5f97\u6ca1\u4ec0\u4e48\uff0c\u4f46\u7a81\u7834\u548c\u9632\u5b88\u5012\u662f\u4eae\u70b9\u3002", "up": 12}, {"content": "\u606d\u559c\u4e0a\u6e2f\u554a\uff0c\u4e0a\u6e2f\u540e\u9632\u8fd8\u9700\u8981\u52a0\u5f3a\uff0c\u660e\u5e74\u4e9a\u51a0\u624d\u80fd\u8d70\u7684\u66f4\u8fdc\u3002\u8d5b\u524d\u770b\u5230\u9996\u53d1\u540d\u5355\u5c31\u77e5\u9053\u6052\u5927\u540e\u9632\u8981\u4e70\u5355\u4e86\u3002\u5361\u7eb3\u74e6\u7f57\u4e34\u573a\u8c03\u5ea6\u518d\u6b21\u8bc1\u660e\u4e86\uff0c\u4ed6\u7684\u529f\u5e95\u8fd8\u4e0d\u591f\u6df1\u539a\u3002\u4e0a\u6e2f\u8d5b\u524d\u51c6\u5907\u505a\u8db3\u4e86\u529f\u592b\uff0c\u65e0\u53ef\u539a\u975e\u3002\u4e00\u4ee3\u9738\u4e3b\u7ec8\u7a76\u8981\u6613\u4e3b\uff0c\u4f46\u662f\u660e\u5e74\u7684\u8def\u8fd8\u5b58\u5728\u592a\u591a\u7684\u672a\u77e5\u3002\u671f\u5f85\u660e\u5e74\u4e2d\u8d85\u53cc\u96c4\u7684\u4e9a\u51a0\u4e4b\u65c5\u3002\u6b64\u5916\uff0c\u80e1\u5c14\u514b\u7684\u70b9\u7403\u771f\u662f\u53ef\u4ee5\u770bVAR\u7684\uff0c\u4ed6\u5148\u62e8\u5230\u4e86\u66b4\u529b\u9e1f\uff0c\u66b4\u529b\u9e1f\u7684\u624b\u90e8\u52a8\u4f5c\u80af\u5b9a\u4e0d\u662f\u6545\u610f\u7684\uff0c\u4f46\u662f\u5f53\u65f6\u90dc\u6797\u5484\u5484\u903c\u4eba\ud83d\ude02\uff0c\u8fd9\u573a\uff0c\u6362\u4e0b\u90dc\u6797\u624d\u662f\u6b63\u786e\u7684\uff0c\u90d1\u667a\u5e94\u8be5\u516b\u5341\u5206\u949f\u624d\u4e0b\uff0c\u5f20\u6210\u6797\u5e94\u8be5\u5148\u4e0b\u53bb\uff0c\u4e0b\u534a\u573a\u5f00\u59cb\u7684\u6f0f\uff0c\u7ed9\u4e86\u6b66\u78ca\u4e00\u4e2a\u5b8c\u7f8e\u7684\u5355\u5200\u3002\u5168\u573a\u6700\u4f73\u5e94\u8be5\u662f\u80e1\u5c14\u514b\uff01\u51fa\u8272\u7684\u652f\u70b9\u4f5c\u7528\uff0c\u4e24\u4e2a\u624b\u672f\u5200\u822c\u7684\u52a9\u653b\u3002\u6b66\u78ca\u518d\u6b21\u8bc1\u660e\u4e86\u81ea\u5df1\uff0c\u8fdf\u4e9b\u7684\u56fd\u5bb6\u961f\u6bd4\u8d5b\u5e0c\u671b\u7ee7\u7eed\u6709\u8fdb\u7403\uff0c\u56fd\u5bb6\u961f\u4e0d\u5e94\u8be5\u8981\u90dc\u6797\u4e86\uff0c\u4e0a\u534a\u573a\u5728\u73b0\u573a\u770b\u7684\u65f6\u5019\uff0c\u4ed6\u5c45\u7136\u8eba\u4e0b\u4e00\u5206\u591a\u949f\uff0c\u90a3\u8fb9\u963f\u5170\u548c\u5854\u795e\u90fd\u53cd\u51fb\u4e86\u3002\u3002\u3002\u3002\u770b\u770b\u6b66\u78ca\uff0c\u6ca1\u5f97\u9ed1\u554a\uff0c\u88ab\u591a\u6b21\u72af\u89c4\uff0c\u57fa\u672c\u6ca1\u6709\u53e8\u53e8\uff01\u6001\u5ea6\u5f88\u91cd\u8981\u3002\u56fd\u5bb6\u961f\u7684\u652f\u70b9\u8ba9\u7ed9\u8096\u667a\u548c\u6768\u65ed\u5427\u3002\u56fd\u5bb6\u961f\u73b0\u5728\u4e2d\u573a\u6162\u6162\u8f6c\u6280\u672f\u578b\u6253\u6cd5\uff0c\u7ed9\u591a\u70b9\u5feb\u7075\u5c0f\u7684\u7403\u5458\u53d1\u6325\u3002\u6c49\u8d85\u52a0\u6b66\u78ca\u4e24\u6761\u8fb9\uff0c\u4e2d\u573a\u5434\u66e6\u90d1\u667a\u91d1\u656c\u9053\uff0c\u611f\u89c9\u4f1a\u5f88\u6709\u770b\u70b9\uff5e\uff5e\u4e2a\u4eba\u6d45\u89c1\ud83d\ude48\ud83d\ude48\uff0c\u6052\u5927\u660e\u5e74\u8981\u597d\u597d\u601d\u8003\u4e0b\u540e\u8def\u4e86\uff0c\u9752\u8bad\u4e5f\u5f88\u91cd\u8981\uff01\u64b8", "up": 9}]};
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
