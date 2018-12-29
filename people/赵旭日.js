var data = {"person_name": "\u8d75\u65ed\u65e5", "nicknames": "\u8d75\u65ed\u65e5", "aspects": {"\u7403\u5458": 0.20900465167491208, "\u961f\u5458": 0.07149003054222694, "\u9ec4\u724c": 0.314129296034637, "\u6bd4\u8d5b": 0.446543411882757, "\u9635\u5bb9": 0.37985524885240096, "\u8fdb\u7403": 0.7480005340817072, "\u7ea2\u724c": 0.3925043008218831, "\u56fd\u5bb6\u961f": 0.25417778470516517, "\u7403\u8ff7": 0.0798520225400999, "\u8db3\u534f": 0.16584745940885903}, "overall_heat": 74.0, "overall_polar": -0.754, "name": "443", "nationality": "\u4e2d\u56fd", "position": "\u4e2d\u573a", "goal": "4", "assist": "1", "team_name": "\u5929\u6d25\u6743\u5065", "name_en": "Zhao Xuri", "age": "33", "height": "183", "weight": "80"};
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
var topic_keywords = {"0": [{"name": "\u8d75\u65ed\u65e5", "value": 0.07876520112254444}, {"name": "\uff1f", "value": 0.04321796071094481}, {"name": "\u7ea2\u724c", "value": 0.011412535079513564}, {"name": "\u949f\u4e49\u6d69", "value": 0.009541627689429373}, {"name": "\u52a8\u4f5c", "value": 0.009541627689429373}, {"name": "\u56fd\u5b89", "value": 0.009541627689429373}, {"name": "\u6124\u6012", "value": 0.009541627689429373}, {"name": "\u9ec4\u724c", "value": 0.009541627689429373}, {"name": "\u7403\u5458", "value": 0.007670720299345182}, {"name": "\u56fd\u5bb6\u961f", "value": 0.007670720299345182}, {"name": "\uff01", "value": 0.007670720299345182}, {"name": "\u8e39", "value": 0.007670720299345182}, {"name": "\u4e8e\u6d0b", "value": 0.005799812909260992}, {"name": "\u76f8\u4f3c", "value": 0.005799812909260992}, {"name": "\u8fdb", "value": 0.005799812909260992}, {"name": "\u6052\u5927", "value": 0.005799812909260992}, {"name": "\u7b11", "value": 0.005799812909260992}, {"name": "\u51af\u6f47\u9706", "value": 0.005799812909260992}, {"name": "\u7403", "value": 0.005799812909260992}, {"name": "\u5e94\u8be5", "value": 0.005799812909260992}, {"name": "\u4e3b\u573a", "value": 0.005799812909260992}, {"name": "\u6c34\u5e73", "value": 0.005799812909260992}, {"name": "\u6743\u5065", "value": 0.005799812909260992}, {"name": "\u54ed", "value": 0.005799812909260992}, {"name": "\u88c1\u5224", "value": 0.005799812909260992}, {"name": "\u771f", "value": 0.003928905519176801}, {"name": "\u7f57", "value": 0.003928905519176801}, {"name": "\u4eba", "value": 0.003928905519176801}, {"name": "\u4e2d\u8d85", "value": 0.003928905519176801}, {"name": "\u8868\u793a", "value": 0.003928905519176801}], "1": [{"name": "\u8d75\u65ed\u65e5", "value": 0.05488663017982799}, {"name": "\uff01", "value": 0.04081313526192338}, {"name": "\u738b\u6c38\u73c0", "value": 0.014229867083659108}, {"name": "\u6743\u5065", "value": 0.014229867083659108}, {"name": "\u4eba", "value": 0.011102423768569195}, {"name": "\u4e3b\u529b", "value": 0.011102423768569195}, {"name": "\u7ef4\u7279", "value": 0.011102423768569195}, {"name": "\u660e\u663e", "value": 0.009538702111024236}, {"name": "\u7403\u5458", "value": 0.009538702111024236}, {"name": "\u4e2d\u573a", "value": 0.00797498045347928}, {"name": "\u4e16\u9752\u8d5b", "value": 0.00797498045347928}, {"name": "\u585e\u5c14", "value": 0.00797498045347928}, {"name": "\u4e0d\u60f3", "value": 0.00797498045347928}, {"name": "\u4e00\u811a", "value": 0.00797498045347928}, {"name": "\u6253", "value": 0.006411258795934323}, {"name": "\u5b9e\u529b", "value": 0.006411258795934323}, {"name": "\u5c81", "value": 0.006411258795934323}, {"name": "\u83ab\u5fb7\u65af\u7279", "value": 0.006411258795934323}, {"name": "\u5e15\u6258", "value": 0.006411258795934323}, {"name": "\u5e74", "value": 0.006411258795934323}, {"name": "\u4e09\u4e2a", "value": 0.006411258795934323}, {"name": "\u4e2d", "value": 0.006411258795934323}, {"name": "\u6bd4\u8d5b", "value": 0.006411258795934323}, {"name": "\u5e74\u8f7b", "value": 0.004847537138389367}, {"name": "\u6768\u65ed", "value": 0.004847537138389367}, {"name": "\u8d62\u7403", "value": 0.004847537138389367}, {"name": "\u5916\u63f4", "value": 0.004847537138389367}, {"name": "\u6342", "value": 0.004847537138389367}, {"name": "\u597d", "value": 0.004847537138389367}, {"name": "\u8d62", "value": 0.004847537138389367}]};
var topic_summary = {"0": [{"content": "\u6743\u5065\u80dc\u5f97\u65e0\u53ef\u539a\u975e\uff0c\u6211\u53ea\u662f\u89c9\u5f97\u8d75\u65ed\u65e5\u4f60\u8fc7\u4efd\u4e86[\u6124\u6012][\u6124\u6012][\u6124\u6012]\u540c\u80de\u800c\u5df2\u4f55\u5fc5\u4e0b\u72e0\u811a\uff1f\uff1f\uff1f", "up": 359}, {"content": "\u76f8\u4f3c\u7684\u52a8\u4f5c\uff0c\u8d75\u65ed\u65e5\u7ea2\u724c\uff0c\u949f\u4e49\u6d69\u7ea2\u724c\uff0c\u4e8e\u6d0b\u9ec4\u724c[\u9ec4\u724c]", "up": 343}, {"content": "\u6211\u5c31\u7b49\u7740\u770b\u770b\u8d75\u65ed\u65e5\u4f1a\u4e0d\u4f1a\u6709\u540e\u7eed\u5904\u7f5a\uff0c\u6bc1\u4eba\u804c\u4e1a\u751f\u6daf\u7684\u52a8\u4f5c\uff0c\u591a\u5927\u4ec7\u554a\uff1f\uff01", "up": 236}, {"content": "\u8d75\u65ed\u65e5\u90a3\u4e2a\u8fde\u73af\u8e22666", "up": 227}, {"content": "\u4e3b\u573a\u54e8\uff0c\u6743\u5065\u673a\u4f1a\u4e0d\u5c11\uff0c\u8fd0\u6c14\u6b20\u4f73\uff0c\u88ab\u8fdb\u4e24\u7403\u540e\uff0c\u7403\u5458\u6ca1\u6709\u6597\u5fd7\u4e86\uff0c\u633a\u4e0b\u8d75\u65ed\u65e5\uff0c\u88c1\u5224\u8be5\u9a82", "up": 126}], "1": [{"content": "\u672c\u6765\u90fd\u662f\u5927\u8fde\u4eba\u4e0d\u60f3\u8bf4\uff0c\u4e0d\u8fc7\u8d75\u65ed\u65e5\u72af\u89c4\u76d6\u5766\u90a3\u7403\u771f\u662f\u65e0\u8bed\u4e86\uff0c\u8d75\u4e00\u811a\u90fd\u5feb\u9000\u5f79\u7684\u4eba\u4e86\uff0c\u8fd8\u90a3\u718a\u6837\uff0c\u771f\u662f\u4e22\u4eba\uff0c\u6ca1\u522b\u7684\u8bcd\uff0c\u4e22\u4eba\uff01", "up": 233}, {"content": "\u5931\u53bb\u5361\u7eb3\u74e6\u7f57\u8ddf\u5931\u53bb\u9b42\u4e00\u6837\u3002\u7403\u5458\u4e5f\u6ca1\u6709\u62fc\u640f\u7cbe\u795e\u3002\u4e0d\u6e05\u695a\u4fdd\u7f57\u7d22\u8428\u6267\u6559\u80fd\u529b\u5982\u4f55\uff0c\u76ee\u524d\u770b\u6765\u8fd8\u662f\u4e0d\u592a\u719f\u6089\u4e2d\u8d85\u7684\u3002\u5e78\u597d\u6ca1\u4e0a\u8d75\u65ed\u65e5\uff0c\u4e2d\u8d85\u4e9a\u51a0\u4e2d\u56fd\u961f\u4e0a\u573a\u7ecf\u5e38\u80fd\u770b\u89c1\u4ed6\u5728\u90a3\u6563\u6b65\uff0c\u6216\u8bb8\u662f\u5e74\u9f84\u5927\u4e86\u3002", "up": 158}, {"content": "\u8d75\u65ed\u65e5\u5df2\u7ecf\u4e0d\u9519\u4e86\uff01\u4ed6\u5988\u8981\u662f\u6211\u5728\u573a\u4e0a\uff0c\u80af\u5b9a\u72c2\u63cd\u8fd9\u88c1\u5224\u4e00\u987f\uff0c\u6700\u597d\u628a\u4ed6\u6253\u6b8b\u89e3\u89e3\u6c14\u3002\u6a2a\u7ad6\u662f\u88ab\u7f5a\u4e0b\u573a\uff0c\u8db3\u534f\u7231\u600e\u4e48\u7f5a\u5c31\u600e\u4e48\u7f5a\uff0c\u5927\u4e0d\u4e86\uff0c\u4ee5\u540e\u4e0d\u8e22\u7403\u4e86\uff01\u5c31\u60f3\u8b66\u544a\u4e00\u4e0b\u6709\u5931\u516c\u5e73\u7684\u88c1\u5224\u3002\u5c31\u8fd9\u79cd\u5224\u7f5a\u5728\u56fd\u5916\u90fd\u6709\u88ab\u6697\u6740\u7684\u53ef\u80fd\u3002\u4e2d\u56fd\u88c1\u5224\u7684\u80fd\u529b\u9650\u5236\u4e86\u4e2d\u56fd\u8db3\u7403\u7684\u53d1\u5c55\u3002", "up": 68}, {"content": "\u5e15\u6258\u8fdb\u7403\u5f88\u6f02\u4eae\uff0c\u8d75\u65ed\u65e5\u6700\u597d\u7981\u8d5b5\u573a", "up": 36}, {"content": "\u8d75\u65ed\u65e5\uff0c\u738b\u6c38\u73c0\uff0c\u6768\u65ed\uff0c\u6743\u5065\u4e09\u5927\u6076\u4eba", "up": 15}]};
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
