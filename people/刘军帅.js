var data = {"person_name": "\u5218\u519b\u5e05", "nicknames": "\u5218\u519b\u5e05", "aspects": {"\u5916\u63f4": 0.35955837868845325, "\u8d5b\u5b63": 0.7380760340939343, "\u6bd4\u8d5b": 0.41010715928429675, "\u9632\u5b88": 0.6428416377813029, "\u9635\u5bb9": 0.6090527356222123, "\u540e\u9632": 0.39865250132963637, "\u8fdb\u653b": 0.7589401806753513, "\u56fd\u5bb6\u961f": 0.2199218027825556, "\u72af\u89c4": 0.6668832050403791, "\u7403\u5458": 0.396194028594511}, "overall_heat": 50.0, "overall_polar": 0.133, "name": "107", "nationality": "\u4e2d\u56fd", "position": "\u540e\u536b", "goal": "2", "assist": "2", "team_name": "\u5c71\u4e1c\u9c81\u80fd\u6cf0\u5c71", "name_en": "Liu Junshuai", "age": "23", "height": "185", "weight": "80"};
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
var topic_keywords = {"0": [{"name": "\u5218\u519b\u5e05", "value": 0.06080242658210396}, {"name": "\u8e22", "value": 0.026333930787260446}, {"name": "\uff1f", "value": 0.023576451123672966}, {"name": "\u9c81\u80fd", "value": 0.020818971460085482}, {"name": "\uff01", "value": 0.01254653246932304}, {"name": "\u540e\u536b", "value": 0.009789052805735558}, {"name": "\u683c\u5fb7\u65af", "value": 0.009789052805735558}, {"name": "\u5439", "value": 0.009789052805735558}, {"name": "\u7403", "value": 0.008410312973941817}, {"name": "\u5409\u5c14", "value": 0.008410312973941817}, {"name": "\u524d\u573a", "value": 0.008410312973941817}, {"name": "\u4e2d\u573a", "value": 0.008410312973941817}, {"name": "\u597d", "value": 0.0070315731421480765}, {"name": "\u6253", "value": 0.0070315731421480765}, {"name": "\u738b\u5f64", "value": 0.0070315731421480765}, {"name": "\u5218\u6d0b", "value": 0.0070315731421480765}, {"name": "\u95ee\u9898", "value": 0.0070315731421480765}, {"name": "\u6234\u7433", "value": 0.0070315731421480765}, {"name": "\u84bf\u4fca\u95f5", "value": 0.0070315731421480765}, {"name": "\u4e00\u4e2a", "value": 0.0070315731421480765}, {"name": "\u540e\u9632", "value": 0.005652833310354336}, {"name": "\u5f97\u5206", "value": 0.005652833310354336}, {"name": "\u6bd4\u8d5b", "value": 0.005652833310354336}, {"name": "\u66f4\u5e05", "value": 0.005652833310354336}, {"name": "\u5f20\u5f1b", "value": 0.005652833310354336}, {"name": "\u5916\u63f4", "value": 0.005652833310354336}, {"name": "\u4f69\u83b1", "value": 0.004274093478560596}, {"name": "\u771f\u7684", "value": 0.004274093478560596}, {"name": "\u4eba", "value": 0.004274093478560596}, {"name": "\u5854\u5c14\u5fb7\u5229", "value": 0.004274093478560596}], "1": [{"name": "\u9c81\u80fd", "value": 0.022652602455472938}, {"name": "\u5218\u519b\u5e05", "value": 0.02092339616116203}, {"name": "\uff01", "value": 0.019194189866851116}, {"name": "\u6052\u5927", "value": 0.01227736468960747}, {"name": "\u7403\u5458", "value": 0.01227736468960747}, {"name": "\u5434\u5174\u6db5", "value": 0.008818952100985648}, {"name": "\u9752\u8bad", "value": 0.008818952100985648}, {"name": "\u4eba", "value": 0.008818952100985648}, {"name": "\u8d5b\u5b63", "value": 0.008818952100985648}, {"name": "\u8e22", "value": 0.008818952100985648}, {"name": "\u5e94\u8be5", "value": 0.008818952100985648}, {"name": "\u5916\u63f4", "value": 0.008818952100985648}, {"name": "\u56fd\u5b89", "value": 0.007089745806674736}, {"name": "\u76ee\u524d", "value": 0.007089745806674736}, {"name": "\u9635\u5bb9", "value": 0.007089745806674736}, {"name": "\u6bd4\u8d5b", "value": 0.005360539512363826}, {"name": "\u53d1\u6325", "value": 0.005360539512363826}, {"name": "\u6bd4\u8f83", "value": 0.005360539512363826}, {"name": "\u4e0b", "value": 0.005360539512363826}, {"name": "\u8138", "value": 0.005360539512363826}, {"name": "\u9632\u5b88", "value": 0.005360539512363826}, {"name": "\u84bf\u4fca\u95f5", "value": 0.005360539512363826}, {"name": "\u5c0f\u91d1", "value": 0.005360539512363826}, {"name": "\u5df2\u7ecf", "value": 0.005360539512363826}, {"name": "\u6342", "value": 0.005360539512363826}, {"name": "\u9ed1", "value": 0.005360539512363826}, {"name": "\u4e00\u4e0b", "value": 0.005360539512363826}, {"name": "\u80fd\u529b", "value": 0.0036313332180529143}, {"name": "\u5f15\u8fdb", "value": 0.0036313332180529143}, {"name": "\u4eba\u624d", "value": 0.0036313332180529143}]};
var topic_summary = {"0": [{"content": "\u5218\u519b\u5e05\u8fd9\u4e2a\u7403\u9876\u7684\u5f88\u5e05\u4e86\uff0c\u6ca1\u60f3\u5230\u674e\u5e05\u6251\u6551\u66f4\u5e05\u3002", "up": 45}, {"content": "\u5218\u519b\u5e05\u3001\u738b\u5927\u96f7\u3001\u6234\u7433\uff0c\u4ed6\u4e09\u4e2a\u8c01\u7684\u773c\u5927\uff1f", "up": 9}, {"content": "\u540e\u9632\u5409\u5c14\u7edd\u5bf9\u7684\u5173\u6c34\u95f8\uff0c\u4efb\u51ed\u524d\u573a\u5982\u4f55\u653e\u6c34\uff0c\u5c31\u662f\u80fd\u628a\u4f60\u5835\u6b7b\u3002\u4e2d\u573a\u5439\u4e00\u6ce2\u84bf\u4fca\u95f5\uff0c\u8f6c\u79fb\u8c03\u5ea6\u5f88\u6709\u5927\u5c40\u89c2\u3002\u5218\u519b\u5e05\u786c\u8170\u771f\u662f\u5757\u597d\u521a\u3002\u524d\u573a\u3002\u3002\u3002\u7b97\u4e86\u3002\u5927\u54e5\u4eec\u4f60\u4eec\u6765\u8bf4\u8bf4\u3002\u5c0f\u5f1f\u6587\u91c7\u4e0d\u597d\u3002", "up": 7}, {"content": "\u8bb0\u4e0d\u5f97\u662f\u54ea\u4e2a\u5c0f\u7f16\u7edf\u8ba1\u7684\uff0c\u5218\u519b\u5e05\u4e0a\u573a\u7684\u6bd4\u8d5b\uff0c\u9c81\u80fd\u975e\u8d62\u5373\u5e73\uff0c\u8fd8\u672a\u8f93\u8fc7\uff0c\u5e0c\u671b\u674e\u9704\u9e4f\u80fd\u591a\u6d3e\u5218\u519b\u5e05\u51fa\u573a\u3002\u8fd9\u4e5f\u6210\u4e86\u7384\u5b66\uff1f", "up": 7}, {"content": "\u5218\u519b\u5e05\u957f\u5f97\u548c\u6234\u8001\u677f\u597d\u50cf\u3002\u3002\u3002", "up": 6}], "1": [{"content": "\u4ec5\u4e2a\u4eba\u89c2\u70b9\uff0c\u9c81\u80fd\uff1a\u4e2d\u524d\u573a\u6709\u84bf\u4fca\u95f5\u3001\u5434\u5174\u6db5\uff0c\u5218\u519b\u5e05\uff0c\u5c0f\u91d1\uff0c\u5854\u5c14\u5fb7\u5229\u3002 \u6052\u5927\uff1a\u90d1\u667a\uff0c\u4fdd\u5229\u5c3c\u5965\uff0c\u90dc\u6797\uff0c\u5854\u91cc\u65af\u5361\uff0c\u66ff\u8865\uff0c\u6c49\u8d85\uff0c\u9ec4\u535a\u6587\uff0c\u90d1\u9f99\u65e0\u8bba\u5b9e\u529b\u8fd8\u662f\u5de8\u661f\u6c14\u8d28\uff0c\u65e0\u8bba\u662f\u5728\u8054\u8d5b\u8fd8\u662f\u5728\u4e9a\u51a0\u8d5b\u573a\u6052\u5927\u7684\u4e2d\u524d\u957f\u53ef\u4ee5\u662f\u9876\u7ea7\u914d\u7f6e\uff08\u6ca1\u6709\u4e4b\u4e00\uff09\u4f46\u662f\u9c81\u80fd\u4eca\u5e74\u5df2\u7ecf\u6709\u5f88\u5927\u7684\u7a81\u7834\uff0c\u5c06\u58eb\u9f50\u5fc3\uff0c\u6709\u5929\u65f6\uff0c\u6709\u4eba\u548c\uff0c\u4e0d\u5f97\u4e0d\u63d0\u7684\u672c\u8d5b\u5b63\u6709\u4e00\u90e8\u5206\u8fd0\u6c14\u6210\u5206\uff0c\u76ee\u524d\u4ee5\u8fd9\u4e2a\u9635\u5bb9\u8e22\u6210\u8fd9\u6837\u5df2\u7ecf\u5f88\u5f3a\u5927\u4e86\u3001\u4e0e\u4e0a\u6e2f\u6bd4\uff0c\u5916\u63f4\u5dee\u8ddd\u5927\uff0c\u4e0e\u5317\u4eac\u6bd4\u6574\u4f53\u53d1\u6325\u7684\u786e\u6b20\u7f3a\u4e00\u70b9\uff0c\u4f46\u662f\u8981\u662f\u4e89\u51a0\u7684\u8bdd\u5c31\u662f\u6709\u4e9b\u8de8\u6d77\u53e3\u4e86\uff0c\u771f\u4e0d\u5207\u5b9e\u9645\u3002\u6052\u5927\u76ee\u524d\u6218\u7ee9\u6392\u540d\u786e\u5b9e\u662f\u4e0a\u534a\u8d5b\u7a0b\u81ea\u5df1\u9635\u5bb9\u786e\u5b9e\u6bd4\u5f80\u5e74\u5f31\u4e86\uff0c\u7edf\u6cbb\u529b\u4e0b\u964d\u4e24\u4e2a\u5c42\u9762\uff0c\u8981\u662f\u6052\u5927\u4ee5\u73b0\u5728\u9635\u5bb9\u4ece\u8d5b\u5b63\u521d\u671f\u5f00\u59cb\uff0c\u90a3\u5176\u4ed6\u7403\u961f20\u8f6e\u4ee5\u540e\u5c31\u5f97\u8003\u8651\uff0c\u4e9a\u519b\u4ee5\u53ca\u4e9a\u51a0\u8d44\u683c\u8d5b\u4e86\uff0c\u671f\u5f85\u4eca\u5e74\u7ade\u4e89\u6fc0\u70c8\uff0c\u771f\u5fc3\u5e0c\u671b\u6052\u5927\u8fd8\u662f\u51a0\u519b\ud83c\udfc6\u4ee3\u8868\u7956\u56fd\u518d\u6b21\u51fa\u73b0\u5728\u4e16\u4ff1\u676f\u821e\u53f0\u4e0a^_^^_^(7\u5e74\u9c81\u80fd\u7403\u8ff7\uff0c8\u5e74\u7684\u6052\u5927\u8ff7\u7559\uff01)", "up": 18}, {"content": "\u88c1\u5224\u5c3a\u5ea6\u4e0d\u4e00\uff0c\u5bf9\u9c81\u80fd\u6bd4\u8f83\u677e\uff0c\u6309\u7167\u5bf9\u6052\u5927\u7684\u6807\u51c6\uff0c\u6234\u7433\u5e94\u8be5\u7f5a\u4e0b\uff0c\u5218\u519b\u5e05\u5bf9\u90dc\u6797\u7684\u66b4\u94f2\u4e5f\u4eae\u4e86\u978b\u5e95\u4e86\u3002", "up": 14}, {"content": "\u5d14\u9e4f\u51cf\u80a5\u6210\u529f\uff0c\u6280\u672f\u8fd8\u662f\u597d\u7684\u6ca1\u8bdd\u8bf4\uff0c\uff0c\u80fd\u529b\u73b0\u5728\u4e2d\u8d85\u4f9d\u7136\u80fd\u6392\u4e0a\u53f7\u3002\u5c0f\u91d1\u4f9d\u7136\u662f\u6beb\u4e0d\u60dc\u529b\u5168\u573a\u98de\u5954\uff0c\u8fdb\u7403\u662f\u6700\u597d\u7684\u56de\u62a5\u3002\u84bf\u4fca\u95f5\u5931\u8bef\u6709\u70b9\u591a\u5566\uff0c\u53ef\u4ee5\u4f11\u606f\u4e00\u4e0b\u8bd5\u8bd5\u3002\u5218\u519b\u5e05\u8fd8\u662f\u6bd4\u8f83\u7a33\u7684\uff0c\u5434\u5174\u6db5\u6cef\u7136\u4f17\u4eba\u77e3\uff0c\u738b\u5f64\u5e94\u8be5\u662f\u4e0b\u4e00\u4efb\u961f\u957f\uff0c\u5b8b\u9f99\u9632\u5b88\u6709\u4f59\u8fdb\u653b\u4e0d\u8db3\uff0c\u603b\u4e4b\uff0c\u6c38\u8fdc\u652f\u6301\u9c81\u80fd\uff0c\u52a0\u6cb9\uff01\uff01\uff01\uff01", "up": 12}, {"content": "\u9ed1\u4e0d\u4e86\u7403\u5458\u4e86\u53c8\u5f00\u59cb\u9ed1\u89e3\u8bf4,\u89e3\u8bf4\u53ef\u662f\u5938\u4e86\u4e00\u6574\u573a\u4f69\u83b1\u738b\u5927\u96f7.\u800c\u4e14\u5218\u519b\u5e05\u9003\u8fc7\u7b2c\u4e8c\u5f20\u9ec4\u724c\u53c8\u6ca1\u4eba\u63d0\u4e86\u662f\u4e48,\u8fd9\u8981\u6362\u6210\u56fd\u5b89\u8fd8\u4e0d\u5f97\u628a\u7956\u575f\u5228\u51fa\u6765?\u4e2d\u8d85\u6700\u9ad8\u6c34\u5e73\u7403\u961f\u4e4b\u95f4\u7684\u6bd4\u8d5b,\u4e13\u6ce8\u4e8e\u6bd4\u8d5b\u591a\u597d,\u4e3a\u4ec0\u4e48\u975e\u8981\u4e3a\u4e86\u9ed1\u800c\u9ed1.", "up": 8}, {"content": "\u4e0d\u8bba\u662f\u672c\u8d5b\u5b63\u8fd8\u662f\u4ee5\u540e\u7684\u8d5b\u5b63\uff0c\u9c81\u80fd\u8981\u60f3\u4e89\u51a0\u519b\uff0c\u8981\u505a\u7684\u8fd8\u6709\u5f88\u591a\uff0c\u5916\u63f4\u4e0a\u6700\u8fd1\u7684\u5f15\u63f4\u601d\u8def\u8fd8\u662f\u5728\u6b63\u8f68\u7684\uff0c\u4e0d\u6c42\u8d35\u7684\u4f46\u6c42\u5bf9\u7684\uff0c\u76ee\u524d\u7684\u51e0\u540d\u5916\u63f4\u878d\u5165\u7403\u961f\u4e0a\u8fd8\u7b97\u53ef\u4ee5\u3002\u56fd\u5185\u7403\u5458\u65b9\u9762\u8fd8\u662f\u4e0d\u8ba9\u4eba\u6ee1\u610f\uff0c\u5c24\u5176\u662f\u5f15\u4ee5\u4e3a\u50b2\u7684\u9752\u8bad\u51fa\u54c1\u7684\u7403\u5458\uff0c\u65e0\u8bba\u662fu23\u8fd8\u662f\u4e2d\u751f\u4ee3\u672c\u571f\u9752\u8bad\uff0c\u8fd8\u627e\u4e0d\u5230\u5728\u5404\u4e2a\u4f4d\u7f6e\u4e0a\u6311\u5927\u6881\u7684\u4eba\uff0c\u76ee\u524d\u7684\u56fd\u5185\u6838\u5fc3\u7403\u5458\u4ecd\u7136\u4ee5\u524d\u51e0\u5e74\u5f15\u8fdb\u7684\u84bf\u4fca\u95f5\u3001\u738b\u5927\u96f7\u3001\u91d1\u656c\u9053\u7b49\u4eba\u4e3a\u4e3b\uff0c\u8fd9\u51e0\u5e74\u7684\u5218\u5f6c\u5f6c\u5434\u5174\u6db5\u5218\u519b\u5e05\u5f20\u5f1b\u674e\u677e\u76ca\u7b49\u8db3\u6821\u51fa\u54c1\u7403\u5458\uff0c\u80fd\u529b\u7279\u70b9\u90fd\u6bd4\u8f83\u5355\u4e00\uff0c\u662f\u53ef\u7528\u4e4b\u4eba\uff0c\u4f46\u96be\u4ee5\u671f\u5f85\u4ed6\u4eec\u6709\u72ec\u5f53\u4e00\u9762\u4e34\u5371\u6551\u4e3b\u7684\u53d1\u6325\uff0c\u6709\u7684\u9ad8\u5f00\u4f4e\u8d70\uff0c\u6709\u7684\u4e00\u76f4\u6ca1\u8e22\u51fa\u6765\uff0c\u6709\u7684\u751a\u81f3\u8fd8\u62d6\u540e\u817f\uff0c\u6240\u4ee5\u8bf4\u9c81\u80fd\u6700\u5927\u7684\u8d44\u672c\u662f\u51fa\u8272\u7684\u9752\u8bad\uff0c\u4f46\u5982\u4f55\u8ba9\u9752\u8bad\u4eba\u624d\u62d4\u5c16\u513f\u5374\u662f\u96be\u4e8b\uff0c\u8981\u60f3\u4fdd\u6301\u5728\u4e89\u51a0\u884c\u5217\uff0c\u5f15\u8fdb\u9ad8\u6c34\u5e73\u5185\u63f4\u3001\u7a33\u5b9a\u7b26\u5408\u6280\u6218\u672f\u7684\u5916\u63f4\u3001\u57f9\u517b\u56fd\u5bb6\u961f\u5b9e\u529b\u7684\u9752\u8bad\u4eba\u624d\u624d\u662f\u5173\u952e\u3002", "up": 7}]};
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
