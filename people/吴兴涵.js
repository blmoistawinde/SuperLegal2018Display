var data = {"person_name": "\u5434\u5174\u6db5", "nicknames": "\u5434\u5174\u6db5", "aspects": {"\u7403\u5458": 0.5003463622896311, "\u4f20\u4e2d": 0.4355729146271024, "\u8fdb\u653b": 0.563346017775596, "\u7a81\u7834": 0.5839096467343333, "\u5916\u63f4": 0.52846218500238, "\u8fdb\u7403": 0.48463877606327294, "\u9632\u5b88": 0.5264045766955351, "\u8fb9\u8def": 0.6151403105768346, "\u66ff\u8865": 0.5772569969648879, "\u8d5b\u5b63": 0.7113258459676821}, "overall_heat": 234.0, "overall_polar": 0.045, "name": "99", "nationality": "\u4e2d\u56fd", "position": "\u524d\u950b", "goal": "4", "assist": "5", "team_name": "\u5c71\u4e1c\u9c81\u80fd\u6cf0\u5c71", "name_en": "Wu Xinghan", "age": "25", "height": "183", "weight": "68"};
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
var topic_keywords = {"0": [{"name": "\u5434\u5174\u6db5", "value": 0.07728270879081957}, {"name": "\uff01", "value": 0.05248990578734858}, {"name": "\u5218\u5f6c\u5f6c", "value": 0.03478076078486931}, {"name": "\u9c81\u80fd", "value": 0.0177799815824892}, {"name": "\u8e22", "value": 0.015654884182191683}, {"name": "\uff1f", "value": 0.013529786781894171}, {"name": "\u597d", "value": 0.0078628603811008}, {"name": "\u5e9f", "value": 0.006446128780902458}, {"name": "\u4eba", "value": 0.006446128780902458}, {"name": "\u4e24\u4e2a", "value": 0.005737762980803286}, {"name": "\u771f\u662f", "value": 0.005737762980803286}, {"name": "\u66ff\u8865", "value": 0.005737762980803286}, {"name": "\u73b0\u5728", "value": 0.005737762980803286}, {"name": "U23", "value": 0.005737762980803286}, {"name": "\u7403\u5458", "value": 0.005737762980803286}, {"name": "\u4e0d\u9519", "value": 0.005029397180704115}, {"name": "\u8d8a", "value": 0.005029397180704115}, {"name": "\u592a", "value": 0.004321031380604944}, {"name": "\u54c8\u54c8\u54c8", "value": 0.004321031380604944}, {"name": "\u84bf\u4fca\u95f5", "value": 0.003612665580505773}, {"name": "\u7403", "value": 0.003612665580505773}, {"name": "\u4e0d\u7528", "value": 0.003612665580505773}, {"name": "\u4f20\u4e2d", "value": 0.003612665580505773}, {"name": "\u770b\u770b", "value": 0.003612665580505773}, {"name": "\u5415\u5f81", "value": 0.003612665580505773}, {"name": "\u72b6\u6001", "value": 0.003612665580505773}, {"name": "\u524d\u573a", "value": 0.003612665580505773}, {"name": "\u4e00\u76f4", "value": 0.003612665580505773}, {"name": "\u5929\u6d25", "value": 0.003612665580505773}, {"name": "\u6362", "value": 0.003612665580505773}], "1": [{"name": "\u5434\u5174\u6db5", "value": 0.07111248327673149}, {"name": "\uff1f", "value": 0.01965627251209221}, {"name": "\uff01", "value": 0.01965627251209221}, {"name": "\u5854\u795e", "value": 0.011423278789749922}, {"name": "\u4f69\u83b1", "value": 0.011423278789749922}, {"name": "\u5854\u5c14\u5fb7\u5229", "value": 0.010394154574457136}, {"name": "\u7b11", "value": 0.009365030359164351}, {"name": "\u5218\u5f6c\u5f6c", "value": 0.008335906143871565}, {"name": "\u6700\u540e", "value": 0.008335906143871565}, {"name": "\u54ed", "value": 0.007306781928578779}, {"name": "\u7403", "value": 0.007306781928578779}, {"name": "\u5439", "value": 0.006277657713285993}, {"name": "\u673a\u4f1a", "value": 0.006277657713285993}, {"name": "\u4f20\u4e2d", "value": 0.006277657713285993}, {"name": "\u9c81\u80fd", "value": 0.006277657713285993}, {"name": "\u9632\u5b88", "value": 0.006277657713285993}, {"name": "\u5c04\u95e8", "value": 0.005248533497993207}, {"name": "\u8e22", "value": 0.005248533497993207}, {"name": "\u8fdb", "value": 0.005248533497993207}, {"name": "\u7a81\u7834", "value": 0.005248533497993207}, {"name": "\u6342", "value": 0.005248533497993207}, {"name": "\u51e0\u6b21", "value": 0.005248533497993207}, {"name": "\u8138", "value": 0.005248533497993207}, {"name": "\u6211\u9c81", "value": 0.005248533497993207}, {"name": "\u6253\u95e8", "value": 0.005248533497993207}, {"name": "\u5e72", "value": 0.005248533497993207}, {"name": "\u901f\u5ea6", "value": 0.004219409282700422}, {"name": "\u5976\u5976", "value": 0.004219409282700422}, {"name": "\u88c1\u5224", "value": 0.004219409282700422}, {"name": "\u6709\u70b9", "value": 0.004219409282700422}], "2": [{"name": "\u5434\u5174\u6db5", "value": 0.04293684806339452}, {"name": "\uff01", "value": 0.022721759521306704}, {"name": "\u9c81\u80fd", "value": 0.02191315597962319}, {"name": "\u5218\u5f6c\u5f6c", "value": 0.019487345354572652}, {"name": "\u4f69\u83b1", "value": 0.0097841028543705}, {"name": "\u4e00\u4e2a", "value": 0.008166895771003477}, {"name": "\u6253", "value": 0.007358292229319964}, {"name": "\u73b0\u5728", "value": 0.007358292229319964}, {"name": "\u8fdb\u653b", "value": 0.006549688687636451}, {"name": "\u5e94\u8be5", "value": 0.006549688687636451}, {"name": "\u901f\u5ea6", "value": 0.006549688687636451}, {"name": "\u6362", "value": 0.006549688687636451}, {"name": "\u518d", "value": 0.006549688687636451}, {"name": "\u84bf\u4fca\u95f5", "value": 0.005741085145952939}, {"name": "\u597d", "value": 0.005741085145952939}, {"name": "\u8e22", "value": 0.005741085145952939}, {"name": "\u9632\u5b88", "value": 0.005741085145952939}, {"name": "\u4eba", "value": 0.004932481604269426}, {"name": "\u8fb9\u8def", "value": 0.004932481604269426}, {"name": "\u5d14\u9e4f", "value": 0.004932481604269426}, {"name": "\u5916\u63f4", "value": 0.004932481604269426}, {"name": "\u4e0d\u597d", "value": 0.004123878062585914}, {"name": "\u4f20\u4e2d", "value": 0.004123878062585914}, {"name": "\u771f\u7684", "value": 0.004123878062585914}, {"name": "\u8868\u73b0", "value": 0.004123878062585914}, {"name": "\u4e0d\u884c", "value": 0.004123878062585914}, {"name": "\u4f20\u7403", "value": 0.004123878062585914}, {"name": "\u91d1\u656c\u9053", "value": 0.004123878062585914}, {"name": "\u5c24\u5176", "value": 0.004123878062585914}, {"name": "\u673a\u4f1a", "value": 0.004123878062585914}], "3": [{"name": "\uff01", "value": 0.04687966557181248}, {"name": "\u5434\u5174\u6db5", "value": 0.021996615905245348}, {"name": "\u9c81\u80fd", "value": 0.021996615905245348}, {"name": "\u7403", "value": 0.01702000597193192}, {"name": "\u4f69\u83b1", "value": 0.01702000597193192}, {"name": "\u7403\u5458", "value": 0.016024683985269236}, {"name": "\u6052\u5927", "value": 0.013038718025281178}, {"name": "\u5916\u63f4", "value": 0.013038718025281178}, {"name": "\u8fdb\u7403", "value": 0.010052752065293121}, {"name": "\u9752\u8bad", "value": 0.009057430078630435}, {"name": "\u8d8a\u4f4d", "value": 0.008062108091967751}, {"name": "\u52a9\u653b", "value": 0.008062108091967751}, {"name": "\u7b97", "value": 0.008062108091967751}, {"name": "\u8054\u8d5b", "value": 0.008062108091967751}, {"name": "\u8f6e", "value": 0.008062108091967751}, {"name": "\u56fd\u5bb6\u961f", "value": 0.008062108091967751}, {"name": "\u4e2d\u89c4\u4e2d\u77e9", "value": 0.008062108091967751}, {"name": "\u4e9a\u51a0", "value": 0.008062108091967751}, {"name": "\u5f3a\u591a", "value": 0.008062108091967751}, {"name": "\u84bf\u4fca\u95f5", "value": 0.008062108091967751}, {"name": "\u6865\u5934\u5821", "value": 0.007066786105305065}, {"name": "\u4ed6\u8fdb", "value": 0.007066786105305065}, {"name": "\u4eba", "value": 0.007066786105305065}, {"name": "\u4f7f\u7528", "value": 0.007066786105305065}, {"name": "\u6b66\u78ca", "value": 0.007066786105305065}, {"name": "10", "value": 0.007066786105305065}, {"name": "\u5f53\u505a", "value": 0.007066786105305065}, {"name": "\u672c\u6765", "value": 0.007066786105305065}, {"name": "\u674e\u7528", "value": 0.007066786105305065}, {"name": "\u6700\u540e", "value": 0.007066786105305065}]};
var topic_summary = {"0": [{"content": "\u5434\u5174\u6db5\u548c\u5218\u5f6c\u5f6c\u9000\u6b65\u592a\u5feb\u4e86", "up": 708}, {"content": "\u4e00\u573a5\u6bd40\uff0c\u8ba9\u5434\u5174\u6db5\u8e22\u6210\u4e862-0\u3002\u8fd8\u597d\u8d62\u4e86\u3002", "up": 409}, {"content": "\u4e00\u65b9\uff1a\u591a\u4e8f\u5434\u5174\u6db5\u4e0a\u573a\u4e86\uff0c\u8981\u4e0d\u53c8\u662f\u4e00\u573a\u60e8\u6848\u3002", "up": 328}, {"content": "\u5218\u5f6c\u5f6c\u8fdb\u4e0d\u4e86\u66ff\u8865\u540d\u5355\uff0c\u5434\u5174\u6db5\u8e22\u66ff\u8865\u4e0d\u662f\u6ca1\u9053\u7406\u3002 \u4e0a\u8d5b\u5b63\u540e\u534a\u6bb5\u4e24\u4e2a\u8fb9\u8def\u5feb\u9a6c\u7a81\u7136\u54d1\u706b\uff0c\u8e22\u7403\u6ca1\u4e86\u8111\u5b50\u662f\u9c81\u80fd\u6389\u961f\u7684\u4e00\u4e2a\u91cd\u8981\u539f\u56e0\u5427", "up": 263}, {"content": "\u84bf\u4fca\u95f5\u53d1\u6325\u7684\u592a\u5dee\u4e86\uff01\u5e26\u7684\u9c81\u80fd\u4e71\u5957\u4e86\uff01\u5c31\u738b\u5f64\uff0c\u5c0f\u91d1\u5b50\u8fd8\u884c\uff01\u5434\u5174\u6db5\u8fd9\u6837\u7684\u5c31\u5f97\u66ff\u8865\u731b\u51b2", "up": 208}], "1": [{"content": "\u4f69\u83b1:\u5434\u5174\u6db5\u6211\u6559\u4f60\u4f20\u4e2d\uff01 \u5434\u5174\u6db5:\u4f69\u54e5\u6211\u6559\u4f60\u5934\u7403\uff01", "up": 1560}, {"content": "\u6b22\u8fce\u5434\u5174\u6db5\u52a0\u5165\u6211\u5976\u5976\u90fd\u80fd\u8fdb\u7cfb\u5217", "up": 842}, {"content": "\u90dc\u98de\u673a\u8bf7\u6c42\u6dfb\u52a0\u5434\u5174\u6db5\u4e3a\u597d\u53cb", "up": 408}, {"content": "\u9c81\u80fd\u725b\u53c9\u5c31\u4e0d\u8bf4\u4e86\uff0c\u6cf0\u8fbe\u6700\u540e\u4e03\u516b\u4e2a\u4eba\u79bb\u5434\u5174\u6db5\u516b\u767e\u7c73\u8fdc\uff0c\u90fd\u4e0d\u8fc7\u53bb\u9632\uff0c\u53ea\u770b\u7403\u4e0d\u76ef\u4eba\uff0c\u4e2d\u56fd\u961f\u4f20\u7edf\u4f5c\u98ce\uff0c\u6d3b\u8be5\u554a[\u7b11\u54ed]", "up": 232}, {"content": "\u4f69\u83b1\u5e72\u4e86\u5434\u5174\u6db5\u7684\u6d3b\uff01\u5434\u5174\u6db5\u5e72\u4e86\u4f69\u83b1\u7684\u6d3b\uff01", "up": 169}], "2": [{"content": "\u5434\u5174\u6db5\u771f\u7684\u60af\u7136\u4f17\u4eba\u4e86", "up": 159}, {"content": "\u4f69\u5ac2\u4e0d\u5728\u5bb6\uff0c\u4f69\u83b1\u54d7\u54d7\u54d7\u3002\u5854\u795e\u5de7\u4e32\u8054\uff0c\u70b9\u7403\u8499\u7740\u53d1\u3002\u5218\u5f6c\u5f6c\uff0c \u8be5\u9192\u5566\u3002\u5434\u5174\u6db5\uff0c\u66f4\u731b\u4e86\u3002\u770b\u7740\u5d14\u9e4f\u8fd8\u6709\u5468\u6d77\u6ee8\uff0c\u54ce\uff0c\u6211\u7684\u9752\u6625\u98de\u8d70\u4e86\u3002", "up": 84}, {"content": "\u660e\u5e74\u8981\u662f\u674e\u9704\u9e4f\u53bb\u56fd\u5bb6\u96c6\u8bad\u961f\uff0c\u9c81\u80fd\u8fd8\u628a\u9a6c\u52a0\u7279\u8bf7\u6765\u5427\uff0c\u4e09\u5e74\u65f6\u95f4\u628a\u9c81\u80fd\u7684\u57fa\u7840\u6253\u7262\u592f\u5b9e\u3002\u5916\u63f4\u7559\u5409\u5c14\u3001\u4f69\u83b1\uff0c\u628a\u683c\u5fb7\u65af\u5916\u79df\u51fa\u53bb\u7ec3\u7ea7\uff0c\u627e\u4e2a\u901f\u5ea6\u5feb\u7684\u5df4\u897f\u524d\u950bor\u975e\u6d32\u7684\u9ed1\u53c8\u786c\uff0c\u518d\u627e\u4e2a\u4e2d\u573a\u725b\u903c\u5916\u63f4\uff0c\u5d14\u9e4f\u3001\u5468\u6d77\u6ee8\u3001\u5218\u5f6c\u5f6c\u3001\u5434\u5174\u6db5\u3001\u6210\u6e90\u3001\u674e\u5fae\uff0c\u8be5\u9000\u4e8c\u7ebf\u9000\u4e8c\u7ebf\uff0c\u8be5\u5916\u79df\u7684\u5916\u79df\uff0c\u817e\u51fa\u540d\u989d\u591a\u63d0\u62d4\u4e9b\u5e74\u8f7b\u7684\u4e0a\u6765\u3002\u8fd9\u4e48\u5730\u641e\u4e09\u5e74\uff0c\u9c81\u80fd\u5927\u4e1a\u53ef\u6210\u3002 \u54c8\u54c8 11.30\u8db3\u534f\u676f\u5fc5\u80dc\uff01", "up": 74}, {"content": "\u4f69\u83b1\u7684\u4f5c\u7528\uff0c\u4e0d\u4ec5\u4ec5\u662f\u8fdb\u7403\uff1b\u6ca1\u6709\u4f69\u83b1\uff0c\u518d\u725b\u903c\u7684\u5854\u5c14\u5fb7\u5229\uff0c\u4e5f\u53ea\u80fd\u53eb\u505a\u6c34\u5854\uff1b\u6ca1\u6709\u4f69\u83b1\uff0c\u9c81\u80fd\u7684\u91d1\u656c\u9053\u5218\u5f6c\u5f6c\u5434\u5174\u6db5\u8dd1\u518d\u5feb\uff0c\u4e5f\u662f\u778e****\u8dd1\uff1b\u6ca1\u6709\u4f69\u83b1\uff0c\u84bf\u4fca\u95f5\u53ea\u6709\u548c\u5bf9\u624b\u8fdb\u884c\u65e0\u4f11\u65e0\u6b62\u7684\u8089\u640f\u7f20\u6597\u3002\u4f69\u83b1\uff0c\u8ba9\u9c81\u80fd\u63d0\u5347\u4e86\u4e00\u4e2a\u6863\u6b21\u3002", "up": 28}, {"content": "\u518d\u6b21\u4e0d\u660e\u767d\u5218\u5f6c\u5f6c\u4e3a\u4f55\u4e00\u76f4\u5728\u56fd\u5bb6\u961f\u6ca1\u53d7\u5230\u91cd\u7528\uff0c\u8fd9\u4e2a\u52a9\u653b\u5f88\u597d\u5730\u5c55\u73b0\u4e86\u4ed6\u7684\u7279\u70b9\uff0c\u901f\u5ea6\u8d85\u5feb\uff0c\u800c\u4e14\u5feb\u4e4b\u4f59\u5341\u5206\u7075\u6d3b\uff0c\u4f1a\u89c2\u5bdf\u961f\u53cb\u4f4d\u7f6e\u5047\u52a8\u4f5c\u770b\u51c6\u673a\u4f1a\u518d\u4f20\u4e2d\uff0c\u8bf4\u660e\u7403\u5546\u5f88\u9ad8\uff0c\u800c\u4e14\u90fd\u662f\u4e0b\u534a\u573a\u66ff\u8865\u4e0a\u573a\u6548\u679c\u66f4\u4f73\u2026\u9c81\u80fd\u51e0\u5339\u5feb\u9a6c\u5434\u5174\u6db5\u3001\u5f20\u9a70\u3001\u5218\u5f6c\u5f6c\u3001\u91d1\u656c\u9053\u914d\u5408\u597d\u610f\u5927\u5229\u5927\u70ae\u548c\u6c34\u5854\u7684\u8bdd\uff0c\u4e0d\u5355\u53ea\u8fdb\u653b\u706b\u529b\u731b\u8fd8\u66f4\u5177\u89c2\u8d4f\u6027", "up": 16}], "3": [{"content": "\u4ec5\u4e2a\u4eba\u89c2\u70b9\uff0c\u9c81\u80fd\uff1a\u4e2d\u524d\u573a\u6709\u84bf\u4fca\u95f5\u3001\u5434\u5174\u6db5\uff0c\u5218\u519b\u5e05\uff0c\u5c0f\u91d1\uff0c\u5854\u5c14\u5fb7\u5229\u3002 \u6052\u5927\uff1a\u90d1\u667a\uff0c\u4fdd\u5229\u5c3c\u5965\uff0c\u90dc\u6797\uff0c\u5854\u91cc\u65af\u5361\uff0c\u66ff\u8865\uff0c\u6c49\u8d85\uff0c\u9ec4\u535a\u6587\uff0c\u90d1\u9f99\u65e0\u8bba\u5b9e\u529b\u8fd8\u662f\u5de8\u661f\u6c14\u8d28\uff0c\u65e0\u8bba\u662f\u5728\u8054\u8d5b\u8fd8\u662f\u5728\u4e9a\u51a0\u8d5b\u573a\u6052\u5927\u7684\u4e2d\u524d\u957f\u53ef\u4ee5\u662f\u9876\u7ea7\u914d\u7f6e\uff08\u6ca1\u6709\u4e4b\u4e00\uff09\u4f46\u662f\u9c81\u80fd\u4eca\u5e74\u5df2\u7ecf\u6709\u5f88\u5927\u7684\u7a81\u7834\uff0c\u5c06\u58eb\u9f50\u5fc3\uff0c\u6709\u5929\u65f6\uff0c\u6709\u4eba\u548c\uff0c\u4e0d\u5f97\u4e0d\u63d0\u7684\u672c\u8d5b\u5b63\u6709\u4e00\u90e8\u5206\u8fd0\u6c14\u6210\u5206\uff0c\u76ee\u524d\u4ee5\u8fd9\u4e2a\u9635\u5bb9\u8e22\u6210\u8fd9\u6837\u5df2\u7ecf\u5f88\u5f3a\u5927\u4e86\u3001\u4e0e\u4e0a\u6e2f\u6bd4\uff0c\u5916\u63f4\u5dee\u8ddd\u5927\uff0c\u4e0e\u5317\u4eac\u6bd4\u6574\u4f53\u53d1\u6325\u7684\u786e\u6b20\u7f3a\u4e00\u70b9\uff0c\u4f46\u662f\u8981\u662f\u4e89\u51a0\u7684\u8bdd\u5c31\u662f\u6709\u4e9b\u8de8\u6d77\u53e3\u4e86\uff0c\u771f\u4e0d\u5207\u5b9e\u9645\u3002\u6052\u5927\u76ee\u524d\u6218\u7ee9\u6392\u540d\u786e\u5b9e\u662f\u4e0a\u534a\u8d5b\u7a0b\u81ea\u5df1\u9635\u5bb9\u786e\u5b9e\u6bd4\u5f80\u5e74\u5f31\u4e86\uff0c\u7edf\u6cbb\u529b\u4e0b\u964d\u4e24\u4e2a\u5c42\u9762\uff0c\u8981\u662f\u6052\u5927\u4ee5\u73b0\u5728\u9635\u5bb9\u4ece\u8d5b\u5b63\u521d\u671f\u5f00\u59cb\uff0c\u90a3\u5176\u4ed6\u7403\u961f20\u8f6e\u4ee5\u540e\u5c31\u5f97\u8003\u8651\uff0c\u4e9a\u519b\u4ee5\u53ca\u4e9a\u51a0\u8d44\u683c\u8d5b\u4e86\uff0c\u671f\u5f85\u4eca\u5e74\u7ade\u4e89\u6fc0\u70c8\uff0c\u771f\u5fc3\u5e0c\u671b\u6052\u5927\u8fd8\u662f\u51a0\u519b\ud83c\udfc6\u4ee3\u8868\u7956\u56fd\u518d\u6b21\u51fa\u73b0\u5728\u4e16\u4ff1\u676f\u821e\u53f0\u4e0a^_^^_^(7\u5e74\u9c81\u80fd\u7403\u8ff7\uff0c8\u5e74\u7684\u6052\u5927\u8ff7\u7559\uff01)", "up": 18}, {"content": "\u6211\u8bf4\u7684\u7b2c\u4e00\u4e2a\u7403\u5144\u5f1f\uff0c\u84bf\u4fca\u95f5\u4f20\u4e2d\u65f6\u6cb3\u5357\u767d\u5916\u63f4\u5df2\u7ecf\u5012\u5730\u7529\u51fa\u53bb\u4e86\uff0c\u5854\u795e\u51fa\u7403\u7684\u4e00\u77ac\u95f4\uff0c\u767d\u5916\u63f4\u7684\u811a\u5c16\u6bd4\u91d1\u656c\u9053\u5434\u5174\u6db5\u548c\u84bf\u4fca\u95f5\u90fd\u66f4\u9760\u8fd1\u5b88\u95e8\u5458\uff0c\u6240\u4ee5\u8bf4\u4e09\u4e2a\u4eba\u90fd\u4e0d\u8d8a\u4f4d\uff0c\u8fb9\u88c1\u7adf\u7136\u751f\u751f\u7ed9\u5439\u6210\u8d8a\u4f4d\uff01\u64e6\uff01\u770b\u5230\u7403\u8fdb\u4e86\uff0c\u6cb3\u5357\u5176\u4ed6\u7403\u5458\u90fd\u4e3e\u624b\u793a\u610f\u8d8a\u4f4d\uff0c\u53ea\u6709\u90a3\u4e2a\u767d\u5916\u63f4\u5782\u5934\u4e27\u6c14\u5f80\u4e2d\u7ebf\u8d70\uff0c\u5373\u4f7f\u770b\u5230\u88c1\u5224\u4e3e\u65d7\u4e86\uff0c\u56e0\u4e3a\u53ea\u6709\u4ed6\u6700\u6e05\u695a\u662f\u4e0d\u662f\u8d8a\u4f4d\uff01", "up": 12}, {"content": "\u90d1\u94ee\u6ca1\u6709\u4e86\u521a\u51fa\u9053\u65f6\u751f\u9f99\u6d3b\u864e\u7684\u6837\u5b50 \u5434\u5174\u6db5 \u5218\u5f6c\u5f6c\u51fa\u4e8e\u62a5\u5e9f\u72b6\u6001 \u84bf\u961f\u548c\u59da\u5747\u665f\u4e2d\u89c4\u4e2d\u77e9\u7684\u5b8c\u6210\u6bcf\u4e00\u573a\u6bd4\u8d5b \u8001\u5854\u65f6\u7075\u65f6\u4e0d\u7075 \u4f69\u83b1\u7ecf\u5e38\u5fd8\u8bb0\u5e26\u5c04\u95e8\u9774 U23\u4e5f\u53ea\u662f\u5f62\u52bf\u4e3b\u4e49 \u53ea\u6709\u5927\u96f7 \u5409\u5c14 \u6234\u8001\u677f \u91d1\u656c\u9053\u770b\u8d77\u6765\u8ba9\u4eba\u653e\u5fc3 \u5f15\u4ee5\u4e3a\u50b2\u7684\u9752\u8bad\u54ea\u53bb\u4e86\uff1f\u66fe\u51e0\u4f55\u65f6\u79f0\u9738\u4e2d\u8d85\u7684\u6a58\u7ea2\u8272\u98ce\u66b4\u5462\uff1f\u771f\u5fc3\u5e0c\u671b\u6559\u6388\u80fd\u6765 \u63d0\u62d4\u4e00\u6279\u65b0\u4eba\u6765\u6362\u6389\u5931\u53bb\u51a0\u519b\u5fc3\u7684\u4e00\u4e9b\u9c81\u80fd\u7403\u5458", "up": 11}, {"content": "\u6211\u8bf4\u4e86\uff01\u6052\u5927\u593a\u51a0\u662f\u56e0\u4e3a\u4e2d\u56fd\u8db3\u534f\u9700\u8981\u6052\u5927\u7ed9\u4ed6\u4eec\u906e\u4e11\uff01\u63a9\u76d6\u4ed6\u4eec\u7684\u8150\u8d25\u9f8c\u9f8a\u65e0\u80fd\uff0c\u4e5f\u5c31\u662f\u4e0d\u662f\u6052\u5927\u5c31\u6bd4\u4e0a\u6e2f\u9c81\u80fd\u56fd\u5b89\u5b9e\u529b\u66f4\u5f3a\uff0c\u662f\u6052\u5927\u6bd4\u4e0a\u6e2f\u56fd\u5b89\u9c81\u80fd\u5728\u8db3\u534f\u5173\u7cfb\u66f4\u786c\uff0c\u660e\u767d\u8fd9\u70b9\u5c31\u884c\uff01\u8bf4\u5b9e\u8bdd\uff01\u6052\u5927\u62ff\u591a\u5c11\u51a0\u519b\u961f\u4e2d\u56fd\u8db3\u7403\u90fd\u6ca1\u6709\u7528\uff01\u5c31\u662f\u4e2d\u56fd\u8db3\u7403\u5728\u81ea\u6b3a\u6b3a\u4eba\u63a9\u8033\u76d7\u94c3\u81ea\u5df1\u9a97\u81ea\u5df1\uff01\u6052\u5927\u96c6\u4e2d\u4e86\u5168\u4e2d\u56fd\u6700\u597d\u7684\u7403\u5458\uff01\u8fd8\u662f\u4e25\u91cd\u4f9d\u8d56\u5916\u63f4\uff01\u800c\u4e14\u76f4\u63a5\u5bfc\u81f4\u8fde\u9c81\u80fd\u4e0a\u6e2f\u90fd\u4e25\u91cd\u4f9d\u8d56\u5916\u63f4\uff01\u66f4\u522b\u8bf4\u56fd\u5b89\uff01\u770b\u770b\u5434\u5174\u6db5\u5218\u5f6c\u5f6c\uff01\u5c31\u662f\u9c81\u80fd\u90fd\u4e0d\u5728\u4fe1\u4efb\u81ea\u5df1\u7684\u9752\u8bad\uff01\u66f4\u522b\u8bf4\u5176\u4ed6\u4ff1\u4e50\u90e8\uff01\u5176\u5b9e\u6211\u5e76\u4e0d\u5728\u610f\u8c01\u62ff\u51a0\u519b\uff01\u5173\u952e\u662f\u6709\u4e9b\u4ff1\u4e50\u90e8\u50cf\u9c81\u80fd\u5fc5\u987b\u575a\u6301\u81ea\u5df1\u7684\u7406\u5ff5\uff0c\u6bd4\u5982\u9c81\u80fd\u5176\u5b9e\u4e00\u76f4\u575a\u6301\u9760\u81ea\u5df1\u7684\u9752\u8bad\u7403\u5458\u4f5c\u4e3a\u7403\u961f\u5efa\u961f\u57fa\u7840\uff0c\u7403\u961f\u4e2d\u573a\u6838\u5fc3\u4e00\u76f4\u662f\u56fd\u5185\u7403\u5458\uff01\u8fd9\u70b9\u5176\u5b9e\u9c81\u80fd\u524d\u51e0\u5e74\u7279\u522b\u662f\u6709\u8499\u8482\u7565\u65f6\u662f\u9519\u7684\uff0c\u81f3\u4e8e\u5c04\u624b\uff01\u8fd9\u5176\u5b9e\u4e00\u76f4\u662f\u9c81\u80fd\u7684\u4f18\u52bf\uff01\u4e0d\u8fc7\u663e\u7136\u6052\u5927\u7684\u91d1\u5143\u8db3\u7403\u8ba9\u9c81\u80fd\u5f88\u96be\u8d70\u673a\u4f1a\u57f9\u517b\u81ea\u5df1\u7684\u56fd\u4ea7\u5c04\u624b\u4e86\uff01", "up": 9}, {"content": "\u4e0d\u8bba\u662f\u672c\u8d5b\u5b63\u8fd8\u662f\u4ee5\u540e\u7684\u8d5b\u5b63\uff0c\u9c81\u80fd\u8981\u60f3\u4e89\u51a0\u519b\uff0c\u8981\u505a\u7684\u8fd8\u6709\u5f88\u591a\uff0c\u5916\u63f4\u4e0a\u6700\u8fd1\u7684\u5f15\u63f4\u601d\u8def\u8fd8\u662f\u5728\u6b63\u8f68\u7684\uff0c\u4e0d\u6c42\u8d35\u7684\u4f46\u6c42\u5bf9\u7684\uff0c\u76ee\u524d\u7684\u51e0\u540d\u5916\u63f4\u878d\u5165\u7403\u961f\u4e0a\u8fd8\u7b97\u53ef\u4ee5\u3002\u56fd\u5185\u7403\u5458\u65b9\u9762\u8fd8\u662f\u4e0d\u8ba9\u4eba\u6ee1\u610f\uff0c\u5c24\u5176\u662f\u5f15\u4ee5\u4e3a\u50b2\u7684\u9752\u8bad\u51fa\u54c1\u7684\u7403\u5458\uff0c\u65e0\u8bba\u662fu23\u8fd8\u662f\u4e2d\u751f\u4ee3\u672c\u571f\u9752\u8bad\uff0c\u8fd8\u627e\u4e0d\u5230\u5728\u5404\u4e2a\u4f4d\u7f6e\u4e0a\u6311\u5927\u6881\u7684\u4eba\uff0c\u76ee\u524d\u7684\u56fd\u5185\u6838\u5fc3\u7403\u5458\u4ecd\u7136\u4ee5\u524d\u51e0\u5e74\u5f15\u8fdb\u7684\u84bf\u4fca\u95f5\u3001\u738b\u5927\u96f7\u3001\u91d1\u656c\u9053\u7b49\u4eba\u4e3a\u4e3b\uff0c\u8fd9\u51e0\u5e74\u7684\u5218\u5f6c\u5f6c\u5434\u5174\u6db5\u5218\u519b\u5e05\u5f20\u5f1b\u674e\u677e\u76ca\u7b49\u8db3\u6821\u51fa\u54c1\u7403\u5458\uff0c\u80fd\u529b\u7279\u70b9\u90fd\u6bd4\u8f83\u5355\u4e00\uff0c\u662f\u53ef\u7528\u4e4b\u4eba\uff0c\u4f46\u96be\u4ee5\u671f\u5f85\u4ed6\u4eec\u6709\u72ec\u5f53\u4e00\u9762\u4e34\u5371\u6551\u4e3b\u7684\u53d1\u6325\uff0c\u6709\u7684\u9ad8\u5f00\u4f4e\u8d70\uff0c\u6709\u7684\u4e00\u76f4\u6ca1\u8e22\u51fa\u6765\uff0c\u6709\u7684\u751a\u81f3\u8fd8\u62d6\u540e\u817f\uff0c\u6240\u4ee5\u8bf4\u9c81\u80fd\u6700\u5927\u7684\u8d44\u672c\u662f\u51fa\u8272\u7684\u9752\u8bad\uff0c\u4f46\u5982\u4f55\u8ba9\u9752\u8bad\u4eba\u624d\u62d4\u5c16\u513f\u5374\u662f\u96be\u4e8b\uff0c\u8981\u60f3\u4fdd\u6301\u5728\u4e89\u51a0\u884c\u5217\uff0c\u5f15\u8fdb\u9ad8\u6c34\u5e73\u5185\u63f4\u3001\u7a33\u5b9a\u7b26\u5408\u6280\u6218\u672f\u7684\u5916\u63f4\u3001\u57f9\u517b\u56fd\u5bb6\u961f\u5b9e\u529b\u7684\u9752\u8bad\u4eba\u624d\u624d\u662f\u5173\u952e\u3002", "up": 7}]};
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
