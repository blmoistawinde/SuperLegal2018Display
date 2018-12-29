var data = {"person_name": "\u79e6\u5347", "nicknames": "\u79e6\u5347", "aspects": {"\u7403\u5458": 0.25451924736015047, "\u7403\u8ff7": 0.33020473219352786, "\u72af\u89c4": 0.5365139109731409, "\u5916\u63f4": 0.24333874703588196, "\u6bd4\u8d5b": 0.3507761972661966, "\u8db3\u7403": 0.12660239527615397, "\u8db3\u534f": 0.0, "\u7ea2\u724c": 0.39753960814999384, "\u8fdb\u653b": 0.660234310906055, "\u8fdb\u7403": 0.25352004875530526}, "overall_heat": 176.0, "overall_polar": -0.579, "name": "352", "nationality": "\u4e2d\u56fd", "position": "\u4e2d\u573a", "goal": "1", "assist": "1", "team_name": "\u5927\u8fde\u4e00\u65b9", "name_en": "Qin Sheng", "age": "32", "height": "183", "weight": "76"};
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
var topic_keywords = {"0": [{"name": "\u79e6\u5347", "value": 0.08319299427416638}, {"name": "\uff1f", "value": 0.029302795554058604}, {"name": "\uff01", "value": 0.01470753340069608}, {"name": "\u4eba", "value": 0.01470753340069608}, {"name": "\u7533\u82b1", "value": 0.013584820927360502}, {"name": "\u7403\u5458", "value": 0.012462108454024923}, {"name": "\u4e00\u4e2a", "value": 0.011339395980689344}, {"name": "\u4e0a\u6e2f", "value": 0.010216683507353766}, {"name": "\u7403\u8ff7", "value": 0.009093971034018187}, {"name": "\u8e22", "value": 0.009093971034018187}, {"name": "\u770b\u5230", "value": 0.007971258560682608}, {"name": "\u771f\u662f", "value": 0.007971258560682608}, {"name": "\u73b0\u5728", "value": 0.006848546087347029}, {"name": "\u597d", "value": 0.006848546087347029}, {"name": "\u8fd9\u79cd", "value": 0.006848546087347029}, {"name": "\u8138", "value": 0.006848546087347029}, {"name": "\u88c1\u5224", "value": 0.006848546087347029}, {"name": "\u4e00\u65b9", "value": 0.006848546087347029}, {"name": "\u8111\u5b50", "value": 0.005725833614011451}, {"name": "\u653e\u8d70", "value": 0.005725833614011451}, {"name": "\u7ed3\u675f", "value": 0.004603121140675872}, {"name": "\u8d70", "value": 0.004603121140675872}, {"name": "\u6768\u5584\u5e73", "value": 0.004603121140675872}, {"name": "\u674e\u5efa\u658c", "value": 0.004603121140675872}, {"name": "\u8e29", "value": 0.004603121140675872}, {"name": "\u5916\u63f4", "value": 0.004603121140675872}, {"name": "\u6342", "value": 0.004603121140675872}, {"name": "\u8fbd\u8db3", "value": 0.004603121140675872}, {"name": "\u54c8\u54c8\u54c8", "value": 0.004603121140675872}, {"name": "\u6700\u540e", "value": 0.004603121140675872}], "1": [{"name": "\u79e6\u5347", "value": 0.05901967322440813}, {"name": "\u5927\u8fde", "value": 0.02567522507502501}, {"name": "\u4e3b\u529b", "value": 0.02011781705012782}, {"name": "\uff1f", "value": 0.02011781705012782}, {"name": "\u8e22", "value": 0.014560409025230632}, {"name": "\u95ee\u9898", "value": 0.011225964210292318}, {"name": "\u8d70", "value": 0.011225964210292318}, {"name": "\u5468\u633a", "value": 0.01011448260531288}, {"name": "\u4f24", "value": 0.01011448260531288}, {"name": "\uff01", "value": 0.01011448260531288}, {"name": "\u5361\u62c9\u65af\u79d1", "value": 0.01011448260531288}, {"name": "\u5916\u63f4", "value": 0.009003001000333443}, {"name": "\u7403\u5458", "value": 0.009003001000333443}, {"name": "\u674e\u5e05", "value": 0.009003001000333443}, {"name": "\u6ca1\u56de\u5c11", "value": 0.007891519395354006}, {"name": "\u8c03", "value": 0.007891519395354006}, {"name": "\u4e00\u534a", "value": 0.007891519395354006}, {"name": "\u6210", "value": 0.007891519395354006}, {"name": "\u660e\u5e74", "value": 0.006780037790374569}, {"name": "\u56fd\u5185", "value": 0.006780037790374569}, {"name": "\u4e00\u5b9a", "value": 0.006780037790374569}, {"name": "\u6bd4\u8d5b", "value": 0.006780037790374569}, {"name": "\u4e00\u65b9", "value": 0.005668556185395131}, {"name": "\u8d5b\u5b63", "value": 0.005668556185395131}, {"name": "\u4e2d", "value": 0.005668556185395131}, {"name": "\u540e\u536b", "value": 0.005668556185395131}, {"name": "\u6731\u633a", "value": 0.005668556185395131}, {"name": "\u73b0\u5728", "value": 0.005668556185395131}, {"name": "\u4e0b", "value": 0.005668556185395131}, {"name": "\u771f", "value": 0.005668556185395131}], "2": [{"name": "\uff1f", "value": 0.03757017417590327}, {"name": "\uff01", "value": 0.027493882251331512}, {"name": "\u79e6\u5347", "value": 0.02605441197639269}, {"name": "\u7403\u8ff7", "value": 0.024614941701453865}, {"name": "\u8db3\u7403", "value": 0.018857060601698575}, {"name": "\u4e2d\u56fd", "value": 0.014538649776882106}, {"name": "\u4eba", "value": 0.013099179501943283}, {"name": "\u771f", "value": 0.013099179501943283}, {"name": "\u793a\u610f", "value": 0.011659709227004461}, {"name": "\u540e\u536b", "value": 0.008780768677126816}, {"name": "\u72af\u89c4", "value": 0.008780768677126816}, {"name": "\u95e8\u5c06", "value": 0.008780768677126816}, {"name": "\u4e2d", "value": 0.008780768677126816}, {"name": "\u5e94\u8be5", "value": 0.007341298402187993}, {"name": "\u5047\u7403", "value": 0.007341298402187993}, {"name": "\u4e3b\u529b", "value": 0.007341298402187993}, {"name": "\u7403", "value": 0.007341298402187993}, {"name": "\u7d20\u8d28", "value": 0.007341298402187993}, {"name": "\u592a", "value": 0.005901828127249172}, {"name": "\u89c9\u5f97", "value": 0.005901828127249172}, {"name": "\u771f\u6b63", "value": 0.005901828127249172}, {"name": "\u793c\u8c8c", "value": 0.005901828127249172}, {"name": "\u5439", "value": 0.005901828127249172}, {"name": "\u7b2c\u4e00", "value": 0.005901828127249172}, {"name": "\u55b7", "value": 0.005901828127249172}, {"name": "\u573a\u573a", "value": 0.005901828127249172}, {"name": "\u8ffd", "value": 0.005901828127249172}, {"name": "\u4e09\u4e2a", "value": 0.005901828127249172}, {"name": "\u518d", "value": 0.00446235785231035}, {"name": "\u573a", "value": 0.00446235785231035}], "3": [{"name": "\u79e6\u5347", "value": 0.053241113077046806}, {"name": "\uff1f", "value": 0.014637284864082353}, {"name": "\uff01", "value": 0.01142029917966865}, {"name": "\u8e22", "value": 0.008203313495254945}, {"name": "\u8fdb\u7403", "value": 0.008203313495254945}, {"name": "\u5927\u8fde", "value": 0.008203313495254945}, {"name": "\u9ec4\u724c", "value": 0.0065948206530480925}, {"name": "\u771f\u7684", "value": 0.0065948206530480925}, {"name": "\u597d", "value": 0.0065948206530480925}, {"name": "\u5916\u63f4", "value": 0.0065948206530480925}, {"name": "\u673a\u4f1a", "value": 0.0065948206530480925}, {"name": "\u963f\u5170", "value": 0.0065948206530480925}, {"name": "\u76d6\u5766", "value": 0.0065948206530480925}, {"name": "var", "value": 0.0065948206530480925}, {"name": "\u611f\u89c9", "value": 0.0065948206530480925}, {"name": "\u51e0\u573a", "value": 0.004986327810841242}, {"name": "\u90a3\u811a", "value": 0.004986327810841242}, {"name": "\u6bd4\u8d5b", "value": 0.004986327810841242}, {"name": "\u5168\u573a", "value": 0.004986327810841242}, {"name": "\u6e23", "value": 0.004986327810841242}, {"name": "\u6839\u672c", "value": 0.004986327810841242}, {"name": "\u679c\u65ad", "value": 0.004986327810841242}, {"name": "\u573a\u4e0a", "value": 0.004986327810841242}, {"name": "\u6ed1\u7a3d", "value": 0.004986327810841242}, {"name": "\u7533\u82b1", "value": 0.004986327810841242}, {"name": "\u7403", "value": 0.004986327810841242}, {"name": "\u72af\u89c4", "value": 0.004986327810841242}, {"name": "\ud83d\ude2d", "value": 0.004986327810841242}, {"name": "\u4e00\u4e2a", "value": 0.004986327810841242}, {"name": "\u9707\u60ca", "value": 0.004986327810841242}]};
var topic_summary = {"0": [{"content": "\u606d\u559c\u4e00\u65b9\uff0c\u8fd8\u6709\u5361\u62c9\u65af\u79d1\u80fd\u529b\u771f\u662f\u4e0d\u9519\u4e00\u70b9\u4e0d\u865a\u80e1\u5c14\u514b\u554a\u3002\u62a5\u9996\u56de\u5408\u5927\u6bd4\u5206\u7684\u4ec7\u4e86\uff0c\u79e6\u5347\u8e22\u4e0a\u6e2f\u786e\u5b9e\u5f88\u6709\u5fc3\u5f97", "up": 791}, {"content": "\u79e6\u5347\u91cd\u56de\u6545\u5730\uff0c\u7ed3\u675f\u540e\uff0c\u611f\u8c22\u7403\u8ff7\uff0c\u75db\u54ed\u6d41\u6d95\u3002\u6709\u60c5\u6709\u4e49\u4e4b\u4eba", "up": 439}, {"content": "\u771f\u7279\u4e48\u8f93\u4e0d\u8d77\uff0c\u5bf9\u526f\u73ed\u957f\u5c31\u8f93\u5728\u79e6\u5347\u4e00\u5047\u6454\uff1f\u5c31\u8fd9\u6c14\u8d28\u600e\u4e48\u4e89\u51a0\uff1f\u90a3\u4e2a\u5bf9\u88c1\u5224\u52a8\u624b\u7684\u600e\u4e48\u8fde\u4e2a\u724c\u90fd\u6ca1\u6709\uff1f", "up": 364}, {"content": "\u79e6\u5347\u771f\u7279\u7801\u6bd4\u7684****\u4e00\u4e2a\uff0c\u4ed6\u8fd9\u79cd\u8d27\u8272\u600e\u4e48\u80fd\u7559\u5728\u4e2d\u949e\u8e22\u7403\uff0c\u771f\u662f\u8e22\u4eba\u8e29\u4eba\u603c\u4eba\u9a82\u4eba\u5168\u7528\u4e0a\u4e86", "up": 144}, {"content": "\u79e6\u5347\u8111\u5b50\u80af\u5b9a\u6709\u95ee\u9898\uff0c\u4e0d\u662f\u62fc\u52b2\u662f\u8111\u6b8b", "up": 88}], "1": [{"content": "\u7533\u82b1\u7684\u5f90\u53cb\u521a\u539f\u6765\u5728\u9752\u5c9b\u9ec4\u6d77\uff0c\u518d\u52a0\u4e0a\u6731\u5efa\u5d58\uff0c\u79e6\u5347\uff0c\u6bdb\u5251\u537f\uff0c\u6817\u9e4f\uff0c\u738b\u4f1f\uff0c\u674e\u5e05\uff0c\u6052\u5927\u7684\u90b9\u6b63\uff0c\u90d1\u9f99\uff01\u8fd9\u5e2e\u4eba\u518d\u52a0\u4ee8\u725b\u53c9\u5916\u63f4\uff0c\u4e2d\u8d85\u524d\u516d\u5e94\u8be5\u6ca1\u95ee\u9898\u5427\uff01\u5509\u53c8\u8ba9\u6211\u60f3\u8d77\u4e86\u9752\u5c9b[\u5927\u54ed][\u5927\u54ed][\u5927\u54ed]", "up": 373}, {"content": "\u79e6\u5347\u4e5f\u914d\u505a\u8fd0\u52a8\u5458\uff0c\u7b97\u4e86\u5427", "up": 169}, {"content": "\u5927\u8fde\u88ab\u8c03\u8d70\u4e863\u4e2a\u4e3b\u529b\uff0c\u79e6\u5347\u4f24\u4e86\uff0c\u5361\u62c9\u65af\u79d1\u6ca1\u56de\uff0c\u5c11\u4e86\u4e00\u534a\u4e3b\u529b\uff0c\u8e22\u6210\u8fd9\u6837\u6709\u95ee\u9898\uff1f\uff1f", "up": 166}, {"content": "\u79e6\u5347\u8e29\u3001\u4e16\u6797\u8d5e\u3001\u6731\u633a\u5478\u3001\u8096\u667a\u8131\u3001\u638c\u58f0\u9001\u7ed9\u4f60\u4e0b\u4e00\u4f4d[\u8870]", "up": 111}, {"content": "\u8c01\u80fd\u89e3\u91ca\u4e0b\u79e6\u5347\u90a3\u4e00\u811a", "up": 54}], "2": [{"content": "\u6768\u5584\u5e73\u4e22\u4e86\u4e24\u4e2a\u7403\uff0c\u54ea\u6709\u4e2d\u540e\u536b\u793a\u610f\u95e8\u5c06\u51fa\u51fb\u7684\u4e8b\u60c5\uff1f\uff1f\uff1f\u89c1\u8fc7\u95e8\u5c06\u6307\u6325\u4e2d\u540e\u536b\uff0c\u8fd8\u771f\u6ca1\u89c1\u8fc7\u4e2d\u540e\u536b\u6123\u7740\u793a\u610f\u95e8\u5c06\uff0c\u7b2c\u4e09\u4e2a\u7403\uff0c\u793a\u610f\u8d8a\u4f4d\u5c31\u4e0d\u8ffd\u4e86\uff0c\uff0c\uff0c\u5148\u8ffd\u5b8c\uff0c\u518d\u793a\u610f\u6216\u8fb9\u8ffd\u8fb9\u4e3e\u624b\u5440\uff01\u8981\u4e0d\u662f\u79e6\u5347\uff0c\u4f30\u8ba1\u5dee\u8ddd\u4e0d\u53ea\u4e00\u7403[\u6d41\u6c57]", "up": 236}, {"content": "\u79e6\u5347\u90a3\u4e2a\u72af\u89c4\u5e94\u8be5\u76f4\u63a5\u7ea2\u724c\u7684", "up": 216}, {"content": "\u79e6\u5347\u90a3\u4e2a\u80cc\u540e\u94f2\u4eba\u5c45\u7136\u6ca1\u724c\uff0c\u8fd9\u88c1\u5224\u8ba9\u4eba\u8dcc\u773c\u955c", "up": 191}, {"content": "\u771f\u4e0d\u61c2\u8fd9\u4e9b\u9e1f\u4eba\u600e\u4e48\u60f3\u7684\uff0c\u8c03\u8d70\u7684\u4e09\u4e2au23\u5168\u662f\u4e3b\u529b\uff0c\u51e0\u4e4e\u90fd\u662f\u573a\u573a\u9996\u53d1\u573a\u573a\u6253\u6ee1\u7684\uff0c\u5361\u5566\u65af\u79d1\u505c\u8d5b\uff0c\u79e6\u5347\u4e0a\u534a\u573a20\u591a\u5206\u949f\u7684\u65f6\u5019\u5427\uff0c\u4f24\u4e86\u300211\u4e2a\u4eba\u5c11\u4e86\u56db\u4e2a\u534a\u4e3b\u529b\uff08\u5c0f\u6c6a\u4e4b\u524d\u6709\u4f24\uff09\u4f60\u4eec\u80fd\u4ed6\u5417\u8bf4\u662f\u5047\u7403\uff1f\u4f60\u8981\u662f\u8bf4\u6ca1\u6253\u7b97\u62fc\u8fd9\u573a\uff0c\u6211\u8ba4\u540c\uff0c\u5047\u7403\uff1f\u4f60\u662f\u4e3a\u55b7\u800c\u55b7\u4e48\uff01\uff1f", "up": 6}, {"content": "\u6211\u770b\u4e86\u4e0b\u534a\u573a\u5c31\u8bb0\u5f97\u4e09\u4e2a\u72af\u89c4\uff0c\u7b2c\u4e00\u79e6\u5347\u80cc\u540e\u94f2\u4eba\u6ca1\u724c\uff0c\u7b2c\u4e8c\u6700\u540e\u4e00\u4eba\u94f2\u90dc\u6797\u6ca1\u72af\u89c4\uff0c\u8fd8\u6709\u4e00\u4e2a\u62b1\u6454\u6ca1\u724c", "up": 4}], "3": [{"content": "\u79e6\u5347\u5c45\u7136\u4eca\u5929\u6ca1\u6709\u9ec4\u724c", "up": 100}, {"content": "\u79e6\u5347\u8e22\u76d6\u5766\u90a3\u811a\u8fde\u4e00\u5f20\u724c\u90fd\u6ca1\u6709\u5417\uff0c\u90a3\u662f\u8e22\u7403\u5417\uff0c\u5b8c\u5168\u662f\u51b2\u7740\u4eba\u53bb\u7684\uff0c\u810f", "up": 20}, {"content": "\u79e6\u5347\u65e9\u8be5\u7f5a\u4e0b\u53bb\uff0c\u8e22\u5b8c\u76d6\u5766\u8fd8\u903c\u903c", "up": 14}, {"content": "\u7533\u82b1\u771f\u7684\u592a\u810f\u4e86\uff0c\u8fde\u5916\u63f4\u90fd\u88ab\u79e6\u5347\u674e\u5065\u6ee8\u8fd9\u4e24\u5927\u6bd2\u7624\u5e26\u574f\u4e86\uff0c\u72af\u89c4\u9634\u62db\u4e0d\u65ad\uff0c\u50cf\u83ab\u96f7\u8bfa\u8fd9\u8d27\u8fd8\u5b66\u4f1a\u8e6c\u8e0f\u4e86\u4eba\u5bb6\u53cd\u800c\u88c5\u53d7\u5bb3\u8005\u81ea\u5df1\u5148\u75db\u82e6\u5012\u5730\u2026\u2026\u88c1\u5224\u4e1a\u4f59\u5f97\u8981\u6b7b\uff0c\u591a\u5c11\u8be5\u51fa\u9ec4\u724c\u7684\u90fd\u6ca1\u51fa\u6839\u672c\u63a7\u5236\u4e0d\u4f4f\u573a\u9762\uff0c\u597d\u597d\u4e00\u573a\u6bd4\u8d5b\u5f04\u5f97\u652f\u79bb\u7834\u788e\u7684\u3002\u5361\u62c9\u65af\u79d1\u8fd8\u662f\u6709\u70b9\u72ec\uff0c\u4e0d\u8fc7\u4e2d\u524d\u573a\u914d\u5408\u5f00\u59cb\u9ed8\u5951\u8d77\u6765\u4e86\uff0c\u4e0a\u534a\u573a\u660e\u663e\u5927\u8fde\u8e22\u5f97\u66f4\u597d\uff0c\u8981\u662f\u80fd\u6293\u4f4f\u673a\u4f1a\u8fdb\u4e00\u4e2a\u5c31\u597d\u4e86", "up": 13}, {"content": "\u5168\u573a\u770b\u5b8c\uff0c\u8c01\u90fd\u4e0d\u670d\uff0c\u5c31\u670d\u79e6\u5347\u7684\u8bed\u8a00\u529f\u5e95[\u6ed1\u7a3d][\u6ed1\u7a3d]", "up": 12}]};
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
