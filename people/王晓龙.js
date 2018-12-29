var data = {"person_name": "\u738b\u6653\u9f99", "nicknames": "\u738b\u6653\u9f99", "aspects": {"\u7403\u5458": 0.3680532132047939, "\u7a81\u7834": 0.0, "\u70b9\u7403": 0.06454649551842004, "\u5224\u7f5a": 0.0, "\u7403\u8ff7": 0.21512545986843945, "\u53f3\u8def": 0.0, "\u7981\u533a": 0.2152244164434271, "\u72af\u89c4": 0.39807479881852265, "\u6bd4\u8d5b": 0.6971738095331935}, "overall_heat": 61.0, "overall_polar": -0.926, "name": "445", "nationality": "\u4e2d\u56fd", "position": "\u4e2d\u573a", "goal": "1", "assist": "2", "team_name": "\u5929\u6d25\u6743\u5065", "name_en": "Wang Xiaolong", "age": "32", "height": "176", "weight": "68"};
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
var topic_keywords = {"0": [{"name": "\u738b\u6653\u9f99", "value": 0.06096451319381256}, {"name": "\uff01", "value": 0.05793145283591144}, {"name": "\uff1f", "value": 0.030633909614801336}, {"name": "\u9c81\u80fd", "value": 0.027600849256900213}, {"name": "\ud83d\udca9", "value": 0.021534728541097968}, {"name": "\u738b\u6c38\u73c0", "value": 0.0124355474673946}, {"name": "\u8f93\u4e0d\u8d77", "value": 0.00940248710949348}, {"name": "\u4eba", "value": 0.00940248710949348}, {"name": "\u4e00\u4e2a", "value": 0.00940248710949348}, {"name": "\u5dee", "value": 0.00940248710949348}, {"name": "\u674e\u5fae", "value": 0.006369426751592357}, {"name": "\u5415\u5f81", "value": 0.006369426751592357}, {"name": "\u4fdd\u62a4", "value": 0.006369426751592357}, {"name": "\u8d5b\u5b63", "value": 0.006369426751592357}, {"name": "\u505a", "value": 0.006369426751592357}, {"name": "\u518d", "value": 0.006369426751592357}, {"name": "\u8ba8\u538c", "value": 0.006369426751592357}, {"name": "\u89c9\u5f97", "value": 0.006369426751592357}, {"name": "\u6700\u540e", "value": 0.006369426751592357}, {"name": "\u5927\u8fde", "value": 0.006369426751592357}, {"name": "\u5317\u4eac", "value": 0.006369426751592357}, {"name": "\u56fd\u5b89", "value": 0.006369426751592357}, {"name": "\u7533\u82b1", "value": 0.006369426751592357}, {"name": "\u4e3b\u573a", "value": 0.006369426751592357}, {"name": "\u4eca\u5929", "value": 0.006369426751592357}, {"name": "\u5f3a\u961f", "value": 0.006369426751592357}, {"name": "\u4e00\u4e0b", "value": 0.006369426751592357}, {"name": "\u97e6\u4e16\u8c6a", "value": 0.006369426751592357}, {"name": "\u5927\u7403\u573a", "value": 0.003336366393691235}, {"name": "\u5904\u7406", "value": 0.003336366393691235}], "1": [{"name": "\u738b\u6653\u9f99", "value": 0.11116712881270482}, {"name": "\u9c81\u80fd", "value": 0.03554323166120494}, {"name": "\u6768\u65ed", "value": 0.02546004537433829}, {"name": "\uff1f", "value": 0.022939248802621628}, {"name": "\u88f4\u5e05", "value": 0.017897655659188303}, {"name": "\uff01", "value": 0.01537685908747164}, {"name": "\u7403\u5458", "value": 0.01537685908747164}, {"name": "\u738b\u6c38\u73c0", "value": 0.01537685908747164}, {"name": "\u5012", "value": 0.012856062515754978}, {"name": "\u8c22\u573a", "value": 0.012856062515754978}, {"name": "\u5224\u7f5a", "value": 0.012856062515754978}, {"name": "\u70b9\u7403", "value": 0.012856062515754978}, {"name": "\u679c\u65ad", "value": 0.010335265944038316}, {"name": "\u7a81\u7834", "value": 0.010335265944038316}, {"name": "\u7cdc\u660a\u4f26", "value": 0.010335265944038316}, {"name": "\u653e", "value": 0.010335265944038316}, {"name": "\u4e00\u76f4", "value": 0.010335265944038316}, {"name": "\u5fd8\u6069\u8d1f\u4e49", "value": 0.007814469372321654}, {"name": "\u60f3", "value": 0.007814469372321654}, {"name": "\u7981\u533a", "value": 0.007814469372321654}, {"name": "\u4e3b\u88c1\u5224", "value": 0.007814469372321654}, {"name": "\u9a82", "value": 0.007814469372321654}, {"name": "\u552f\u72ec", "value": 0.007814469372321654}, {"name": "\u5455\u5410", "value": 0.007814469372321654}, {"name": "\u6700\u540e", "value": 0.007814469372321654}, {"name": "\u53f3\u8def", "value": 0.007814469372321654}, {"name": "\u8fdb\u5165", "value": 0.007814469372321654}, {"name": "\u94f2", "value": 0.007814469372321654}, {"name": "\u6ca1\u53bb", "value": 0.005293672800604991}, {"name": "\u767d\u773c\u72fc", "value": 0.005293672800604991}]};
var topic_summary = {"0": [{"content": "\u6211\u4eec\u4e0d\u662f\u8f93\u4e0d\u8d77 \u6211\u4eec\u53ea\u662f\u4e0d\u653e\u5f03 \u8fd8\u8981\u91cd\u70b9\u8bf4\u4e00\u4e0b \uff08\u738b\u6653\u9f99\uff09 \uff01\uff01\uff01\u4f60\u5fd8\u672c\u4e86\uff01", "up": 257}, {"content": "\u5d14\u9e4f \u5468\u6d77\u6ee8 \u738b\u6653\u9f99 \u82d1\u7ef4\u73ae \u738b\u6c38\u73c0 \u674e\u5fae\u6000\u5ff5\u90a3\u4e2a\u65f6\u5019\u7684\u9c81\u80fd", "up": 211}, {"content": "\u8bf4\u51e0\u70b9\u81ea\u5df1\u7684\u770b\u6cd5 1 \u6559\u7ec3\u4e34\u573a\u5e94\u53d8\u80fd\u529b\u8fd9\u4e48\u5dee\u5417\uff1f\u5f31\u70b9\u66b4\u9732\u7684\u8fd9\u4e48\u660e\u663e\u5c45\u713670\u5206\u949f\u624d\u6362\u738b\u6653\u9f99\uff1f 2 \u4e2d\u573a\u8fb9\u524d\u536b\u62ff\u7403\u4e0d\u6562\u7a81\u7834\u3001\u4e0d\u6253\u5c0f\u8303\u56f4\u914d\u5408\uff0c\u5bf9\u65b9\u4e00\u4e0a\u62a2\u5c31\u80cc\u8eab\u56de\u4f20\u7684\u81ed\u6bdb\u75c5\u8ddf\u8c01\u5b66\u7684\u5462\uff1f\u63a8\u8fdb\u5f0f\u8fdb\u653b\u5c31\u8fd9\u4e48\u8e22\u7684\uff1f 3 \u540e\u573a\u4e0e\u524d\u573a\u8854\u63a5\u8fd9\u4e48\u5dee\uff0c\u4e3a\u4ec0\u4e48\u4e0d\u591a\u4e0a\u4e00\u4e2a\u4fdd\u62a4\u578b\u7684\u540e\u8170\uff0c\u6216\u8005\u8ba9\u6240\u8c13\u7684\u7ffc\u536b\u505a\u4fdd\u62a4\u6765\u91ca\u653e\u7ef4\u7279\u585e\u5c14\uff1f\u738b\u6c38\u73c0\u64a4\u5230\u4e2d\u5708\u5904\u7406\u7403\u5bf9\u7ec4\u7ec7\u6709\u6548\u679c\u5417\uff1f 4 \u5f3a\u961f\u8be5\u6709\u7684\u7cbe\u6c14\u795e\u4e00\u70b9\u513f\u6ca1\u770b\u5230\uff01\u60f3\u4fdd\u7559\u5b9e\u529b\u4e3b\u573a\u62fc\u5168\u5317\u522b\u8f93\u592a\u96be\u770b\u5417\uff1f\u4e0d\u5982\u62ff\u6389\u8fd9\u5757\u906e\u7f9e\u5e03\uff01\u6bcf\u4e00\u573a\u90fd\u4ece\u5bb9\u4e0d\u8feb\u3001\u4e0d\u9057\u4f59\u529b\u5730\u62fc\u640f\u66f4\u662f\u4e00\u4e2a\u5f3a\u961f\u8be5\u505a\u7684\uff01 \u603b\u800c\u8a00\u4e4b\uff0c\u5dee\u7684\u8fd8\u8fdc\uff0c\u7825\u783a\u524d\u884c\u5427\uff01", "up": 94}, {"content": "\u738b\u6653\u9f99\uff0c\u4f60\u5728\u9c81\u80fd\u7684\u65f6\u5019\u6211\u53ea\u662f\u4e0d\u559c\u6b22\u4f60\uff0c\u4f60\u53bb\u4e86\u5317\u4eac\u5e7f\u5dde\u540e\u6211\u6162\u6162\u7684\u8ba8\u538c\u4f60\uff0c\u4eca\u5929\u6211\u538c\u6076\u4f60\uff0c\u4ece\u4eca\u5929\u5f00\u59cb\uff0c\u8001\u5b50\u662f\u4f60\u4e00\u751f\u9ed1\u3002wcnmlgb !\u6eda\uff01\uff01\uff01", "up": 19}, {"content": "\u9c81\u80fd\u51fa\u53bb\u7684\uff0c\u4e5f\u5c31\u738b\u6653\u9f99\u8fd9\u8d27\u4e0d\u5f97\u4eba\u5fc3\uff01\u7cdc\u6d69\u7eb6\u4e5f\u6709\u5f80\u8fd9\u65b9\u9762\u53d1\u5c55\u7684\u8d8b\u52bf\uff01", "up": 14}], "1": [{"content": "\u738b\u6653\u9f99\uff0c\u4f60\u4e2a\u767d\u773c\u72fc\uff01\u573a\u4e0a\u80cc\u540e\u4eae\u978b\u5e95\u94f2\u98de\u90d1\u94ee\uff0c\u6700\u540e\u8c22\u573a\u738b\u6c38\u73c0\uff0c\u7cdc\u660a\u4f26\uff0c\u6768\u65ed\u90fd\u53bb\u4e86\uff0c\u552f\u72ec\u4f60\u738b\u6653\u9f99\u6ca1\u53bb\uff0c\u662f\u8c01\u57f9\u517b\u4e86\u4f60\uff1f\u662f\u8c01\u6210\u5c31\u4e86\u4f60\uff1f\u591a\u5c11\u5e74\u4e86\u5fd8\u6069\u8d1f\u4e49\u7684\u4e1c\u897f\uff01", "up": 24}, {"content": "\u8d5b\u540e\u7403\u5458\u8c22\u573a \u6768\u65ed \u738b\u6c38\u73c0 \u7cdc\u660a\u4f26 \u90fd\u52a0\u5165 \u7f05\u6000\u674e\u660e\u73e0\u65f6\u523b \u8fd9\u4efd\u60c5\u8c0a \u8fd9\u4efd\u611f\u60c5 \u8bc1\u660e\u4e86\u4f60\u4eec\u662f\u6709\u60c5\u6709\u4e49\u7684\u7237\u4eec \u552f\u72ec\u6ca1\u6709\u738b\u6653\u9f99 \u6211\u7528\u4e00\u4e2a\u5b57\u5f62\u5bb9 \u53bb\u4f60 \u5976 \u5976 \u4e2a \u5634", "up": 12}, {"content": "\u738b\u6653\u9f99\u662f\u4e00\u76f4\u8fd9\u4e48\u810f\u8fd8\u662f\u5bf9\u9c81\u80fd\u6709\u4ec7\u5f88\uff0c\u8fd9\u573a\u6bd4\u8d5b\u597d\u51e0\u6b21\u4e0b\u9ed1\u811a", "up": 12}, {"content": "\u5176\u5b9e\u6211\u60f3\u9a82\u738b\u6653\u9f99\u4e86\uff0c\u4f60\u8ddf\u9c81\u80fd\u662f\u6709\u591a\u5927\u7684\u4ec7\u554a\uff0cwqnmlgbd", "up": 11}, {"content": "\u6768\u65ed \u738b\u6653\u9f99\u4f60\u4eec\u7684\u8868\u73b0\u4e0d\u914d\u524d\u9c81\u80fd\u7403\u5458", "up": 11}]};
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
