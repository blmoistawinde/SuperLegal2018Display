var data = {"person_name": "\u5f20\u7433\u8283", "nicknames": "\u5f20\u7433\u8283", "aspects": {"\u7403\u5458": 0.39610189932867373, "\u6bd4\u8d5b": 0.4560276170041423, "\u9632\u5b88": 0.5812302428089848, "\u56fd\u5bb6\u961f": 0.4685750931294379, "\u4f20\u4e2d": 0.4459964139324179, "\u8d5b\u5b63": 0.6863127698652788, "\u8fb9\u8def": 0.5721585787876903, "\u961f\u5458": 0.6850340575697269, "\u8fdb\u653b": 0.4220972955510837, "\u5916\u63f4": 0.46787416197991594}, "overall_heat": 151.0, "overall_polar": -0.327, "name": "5", "nationality": "\u4e2d\u56fd", "position": "\u540e\u536b", "goal": "0", "assist": "5", "team_name": "\u5e7f\u5dde\u6052\u5927\u6dd8\u5b9d", "name_en": "Zhang Linpeng", "age": "29", "height": "186", "weight": "78"};
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
var topic_keywords = {"0": [{"name": "\u5f20\u7433\u8283", "value": 0.043720017444395985}, {"name": "\u6253", "value": 0.017553423462712603}, {"name": "\u6052\u5927", "value": 0.013192324465765373}, {"name": "\u51af\u6f47\u9706", "value": 0.009921500218054949}, {"name": "\u6bd4\u8d5b", "value": 0.009921500218054949}, {"name": "\u4e00\u4e2a", "value": 0.008831225468818142}, {"name": "\u771f\u7684", "value": 0.008831225468818142}, {"name": "\u53d1\u6325", "value": 0.008831225468818142}, {"name": "\uff01", "value": 0.007740950719581334}, {"name": "\u91d1\u82f1\u6743", "value": 0.007740950719581334}, {"name": "\u4e2d\u573a", "value": 0.006650675970344526}, {"name": "\u8fd9\u573a", "value": 0.0055604012211077185}, {"name": "\u6700\u540e", "value": 0.0055604012211077185}, {"name": "\u73b0\u5728", "value": 0.0055604012211077185}, {"name": "\u90d1\u667a", "value": 0.0055604012211077185}, {"name": "\u9ad8\u62c9\u7279", "value": 0.0055604012211077185}, {"name": "\u90dc\u6797", "value": 0.004470126471870911}, {"name": "\u4e2d\u8d85", "value": 0.004470126471870911}, {"name": "\u7403\u961f", "value": 0.004470126471870911}, {"name": "\u5927\u8fde", "value": 0.004470126471870911}, {"name": "\u8138", "value": 0.004470126471870911}, {"name": "\u4f4d\u7f6e", "value": 0.004470126471870911}, {"name": "\u6342", "value": 0.004470126471870911}, {"name": "\u7384\u4e4e", "value": 0.004470126471870911}, {"name": "\u9093\u6db5\u6587", "value": 0.004470126471870911}, {"name": "\u963f\u5170", "value": 0.004470126471870911}, {"name": "\u9ec4\u535a\u6587", "value": 0.004470126471870911}, {"name": "\u524d", "value": 0.004470126471870911}, {"name": "\u8fb9\u8def", "value": 0.004470126471870911}, {"name": "\u4e00\u5e74", "value": 0.004470126471870911}], "1": [{"name": "\u5f20\u7433\u8283", "value": 0.07050895192114262}, {"name": "\uff01", "value": 0.02424059545363106}, {"name": "\u6052\u5927", "value": 0.018205592436129552}, {"name": "\uff1f", "value": 0.0171997585998793}, {"name": "\u7403\u5458", "value": 0.014182257091128544}, {"name": "\u4eba", "value": 0.01116475558237779}, {"name": "\u56fd\u5bb6\u961f", "value": 0.009153087909877287}, {"name": "\u90dc\u6797", "value": 0.009153087909877287}, {"name": "\u674e\u5b66\u9e4f", "value": 0.009153087909877287}, {"name": "\u9ec4\u535a\u6587", "value": 0.007141420237376785}, {"name": "\u51af\u6f47\u9706", "value": 0.007141420237376785}, {"name": "\u4e8e\u6c49\u8d85", "value": 0.007141420237376785}, {"name": "\u73b0\u5728", "value": 0.007141420237376785}, {"name": "\u77e5\u9053", "value": 0.006135586401126533}, {"name": "\u4e00\u4e2a", "value": 0.006135586401126533}, {"name": "\u4e2d\u8d85", "value": 0.006135586401126533}, {"name": "\u8e22", "value": 0.006135586401126533}, {"name": "\u4e0a\u6e2f", "value": 0.005129752564876282}, {"name": "\u56fd\u5185", "value": 0.005129752564876282}, {"name": "\u9c81\u80fd", "value": 0.005129752564876282}, {"name": "\u5854\u5229\u65af\u5361", "value": 0.00412391872862603}, {"name": "\u8868\u73b0", "value": 0.00412391872862603}, {"name": "\u4e00\u76f4", "value": 0.00412391872862603}, {"name": "\u90d1\u9f99", "value": 0.00412391872862603}, {"name": "\u9632\u5b88", "value": 0.00412391872862603}, {"name": "\u6342\u8138", "value": 0.00412391872862603}, {"name": "\u611f\u89c9", "value": 0.00412391872862603}, {"name": "\u597d", "value": 0.00412391872862603}, {"name": "\u88c1\u5224", "value": 0.00412391872862603}, {"name": "\u4e2d\u56fd", "value": 0.00412391872862603}], "2": [{"name": "\u5f20\u7433\u8283", "value": 0.03618467639144597}, {"name": "\u6052\u5927", "value": 0.026979181419062456}, {"name": "\uff01", "value": 0.0262710664211868}, {"name": "\u5c81", "value": 0.014233111457300666}, {"name": "\u90d1\u667a", "value": 0.012816881461549356}, {"name": "\uff1f", "value": 0.01069253646792239}, {"name": "\u9ec4\u535a\u6587", "value": 0.009984421470046734}, {"name": "\u90dc\u6797", "value": 0.00927630647217108}, {"name": "\u51af\u6f47\u9706", "value": 0.008568191474295425}, {"name": "\u6bd4\u8d5b", "value": 0.00786007647641977}, {"name": "\u674e\u5b66\u9e4f", "value": 0.00786007647641977}, {"name": "\u4e00\u4e2a", "value": 0.00786007647641977}, {"name": "\u8e22", "value": 0.007151961478544115}, {"name": "\u540e\u536b", "value": 0.007151961478544115}, {"name": "\u72b6\u6001", "value": 0.00644384648066846}, {"name": "\u4e0a\u6e2f", "value": 0.00644384648066846}, {"name": "\u5931\u8bef", "value": 0.00644384648066846}, {"name": "\u4e24\u4e2a", "value": 0.005735731482792805}, {"name": "\u73b0\u5728", "value": 0.005735731482792805}, {"name": "\u9632\u5b88", "value": 0.00502761648491715}, {"name": "\u597d", "value": 0.00502761648491715}, {"name": "\u66fe\u8bda", "value": 0.00502761648491715}, {"name": "\u963f\u5170", "value": 0.00502761648491715}, {"name": "\u592a", "value": 0.004319501487041496}, {"name": "\u76f4\u63a5", "value": 0.004319501487041496}, {"name": "\u771f\u7684", "value": 0.004319501487041496}, {"name": "\u7403\u5458", "value": 0.004319501487041496}, {"name": "\u8d5b\u5b63", "value": 0.004319501487041496}, {"name": "\u8d62", "value": 0.004319501487041496}, {"name": "\u4e4b\u524d", "value": 0.004319501487041496}]};
var topic_summary = {"0": [{"content": "\u5f20\u7433\u8283\u73b0\u5728\u4e2d\u4e59\u6c34\u5e73", "up": 344}, {"content": "\u4f9d\u7136\u8bb0\u5f97\u963f\u5947\u59c6\u5f6d\u5728\u6b66\u91cc\u5357\u8054\u6253\u7206\u5f20\u7433\u8283\u7684\u753b\u9762\uff0c\u60e0\u5bb6\u5eb7\u5728\u90a3\u4e2a\u533a\u57df\u8d8a\u6765\u8d8a\ud83d\udc2e\u4e86\uff0c\u6cf0\u8fbe\u8fde\u7eed\u4e24\u573a\u597d\u7403\u88ab\u5439\u8d8a\u4f4d\uff0c\u4f46\u4e0a\u573a\u8bef\u5224\u7684\u51b7\u9759\u6512\u4e0b\u7684\u4eba\u54c1\uff0c\u5728\u8fd9\u573a\u5f97\u5230\u4e86\u56de\u62a5\uff01\uff01\uff01", "up": 175}, {"content": "\u5927\u8fde\u4e00\u65b9\u60f3\u8981\u8fdb\u7403\uff0c\u6559\u7ec3\u9700\u8981\u89e3\u96c7\uff0c\u5361\u62c9\u65af\u79d1\u662f\u4e2a\u8fb9\u524d\u536b\u653b\u51fb\u624b\uff0c\u9700\u8981\u6709\u961f\u5458\u914d\u5408\uff0c\u653e\u5230\u950b\u7ebf\u7b49\u4e8e\u5b64\u7acb\u65e0\u63f4\uff0c\u8fd8\u4e0d\u5982\u62c9\u5230\u4e2d\u573a\u4ee5\u4ed6\u7684\u63a7\u7403\u6280\u672f\u5bfb\u6c42\u914d\u5408\uff0c\u79bb\u76d6\u5766\u6253\u8fb9\u8def\u6ca1\u95ee\u9898\u3002\u518d\u4e00\u4e2a\u5927\u8fde\u672c\u571f\u7403\u5458\u5b9e\u8bdd\u8bf4\u6280\u672f\u592a\u7cd9\uff0c\u65e0\u6218\u672f\u914d\u5408\uff0c\u4f20\u7403\u4e0d\u8fc7\u4e09\u811a\u88ab\u65ad\uff0c\u4e3a\u96be\u6559\u7ec3\u7ec4\u65e0\u4eba\u53ef\u7528\u3002\u5982\u679c\u5361\u62c9\u65af\u79d1\u548c\u76d6\u5766\u6700\u9002\u5408\u4e0b\u5bb6\u662f\u6052\u5927\uff0c\u66ff\u6362\u6389\u963f\u5170\u548c\u53e4\u5fb7\u5229\uff0c\u6b63\u597d\u548c\u9ad8\u62c9\u7279\u4e09\u53c9\u621f\uff0c\u4e24\u8fb9\u8def\u7a81\u51fb\u624b\u52a0\u90dc\u6797\u4e3a\u9ad8\u62c9\u7279\u4f20\u70ae\u5f39\uff0c\u4e8e\u6c49\u8d85\u66ff\u8865\uff0c\u5356\u6389\u91d1\u82f1\u6743\uff0c\u4e70\u4e00\u4e2a\u4e2d\u573a\u94c1\u8170\u4e9a\u6d32\u5916\u63f4\u642d\u6863\u9ec4\u535a\u6587\u4e2d\u573a\uff0c\u540e\u573a\u674e\u5b66\u9e4f\uff0c\u51af\u6f47\u9706\uff0c\u9093\u6db5\u6587\uff0c\u5f20\u7433\u8283\u53cau23\u8f6e\u6362\u3002", "up": 9}, {"content": "\u8bb0\u5f97\u56fd\u8db3\u6709\u4e00\u573a\u6bd4\u8d5b\u9093\u6db5\u6587\u540e\u573a\u4e22\u7403\u5bfc\u81f4\u5bf9\u65b9\u6253\u53cd\u51fb\u5f88\u5371\u9669\uff0c\u5f20\u7433\u8283\u548c\u66fe\u8bda\u9a6c\u4e0a\u4e0a\u53bb\u5b89\u6170\u9f13\u52b1\u9093\u6db5\u6587\uff0c\u65e5\u5988\u8fd9\u4e2a\u968b\u4ec0\u4e48\uff0c\u5c31\u77e5\u9053\u548c\u5e74\u8f7b\u961f\u5458\u88c5\u903c", "up": 8}, {"content": "\u4e9a\u6cf0\u8e22\u5f97\u4e0d\u8d56\uff0c\u6052\u592a\u8f93\u5f97\u6d3b\u8be5\uff01\u5f20\u7433\u8283\u6280\u672f\u771f\u7684\u662f\u77ed\u677f\u5440", "up": 7}], "1": [{"content": "\u672b\u4f4d\u6dd8\u6c70\u7b2c\u4e00\u4eba\u5f20\u7433\u8283\uff01\u7b2c\u4e8c\u4eba\u90d1\u9f99\uff01\u7b2c\u4e09\u4eba\u5361\u7eb3\u74e6\u7f57\uff01", "up": 149}, {"content": "\u5bf9\u5c31\u662f\u4ed6\u4e9a\u51a0\u6253\u7206\u5f20\u7433\u8283\u7684\u5c0f\u9ed1\uff01\uff01\uff01", "up": 21}, {"content": "\u91d1\u656c\u9053\u8981\u662f\u8fdb\u4e0d\u4e86\u56fd\u5bb6\u961f\u5c31\u6ca1\u5929\u7406\u4e86\u3002\u3002\u3002\u611f\u89c9\u73b0\u5728\u4e2d\u8d85\u56de\u5230\u4e03\u516b\u5e74\u524d\u4e86\uff0c\u90a3\u65f6\u5019\u9c81\u80fd \u56fd\u5b89 \u7533\u82b1 \u4e9a\u6cf0 \u6c5f\u82cf\u821c\u5929\u4e89\u51a0\uff0c\u90a3\u65f6\u5019\u5e7f\u5dde\u6052\u5927\u7684\u524d\u8eab\u5e7f\u5dde\u767d\u4e91\u836f\u4e1a\u8fd8\u662f\u4e2d\u7532\uff0c\u6cb3\u5357\u5efa\u4e1a\u8fd8\u8fdb\u5165\u4e9a\u51a0\uff0c\u90a3\u65f6\u5019\u8fd8\u6709\u9752\u5c9b\u4e2d\u80fd\uff0c\u73b0\u5728\u4e2d\u80fd\u597d\u50cf\u662f\u4e59\u7ea7\u4e86\u3002\u90a3\u65f6\u5019\u8d5b\u573a\u7684\u4e3b\u89d2\u8fd8\u662f\u672c\u571f\u7403\u5458\u3002\u540e\u6765\u6052\u5927\u63a5\u624b\u5e7f\u5dde\u767d\u4e91\uff0c\u75af\u72c2\u7838\u94b1\u5f15\u8fdb\u90d1\u667a \u5f20\u7433\u8283 \u66fe\u8bda \u9ec4\u535a\u6587 \u51af\u6f47\u9706 \u90dc\u6797 \u7a46\u91cc\u5947 \u57c3\u5c14\u514b\u68ee\uff0c\u4ece\u6b64\u4e2d\u8d85\u683c\u5c40\u5f7b\u5e95\u53d8\u5929\u4e00\u5bb6\u72ec\u5927\u3002\u89c2\u8d4f\u6027\u4e0a\u6765\u4e86\u4e9a\u51a0\u4e5f\u62ff\u4e86\uff0c\u7136\u540e\u672c\u571f\u7403\u5458\u6218\u7ee9\u8fd8\u662f\u767d\u65a9\u9e21\u3002\u4ee5\u524d\u56fd\u5bb6\u961f\u7403\u5458\u591a\u662f\u9c81\u80fd \u56fd\u5b89 \u821c\u5929\u7b49\u7403\u961f\u7684\uff0c\u540e\u6765\u57fa\u672c\u4e0a\u662f\u6052\u5927\u7684\u73ed\u5e95\u3002\u4e4b\u524d\u4e2d\u8d85\u7c7b\u4f3c\u82f1\u8d85 \u7fa4\u96c4\u4e89\u9738\uff0c\u540e\u6765\u6052\u5927\u65f6\u671f\u7c7b\u4f3c\u5fb7\u7532\uff0c\u57fa\u672c\u4e0a\u62dc\u4ec1\u538b\u5012\u6027\u4f18\u52bf\u3002\u968f\u7740\u6052\u5927\u7403\u5458\u73ed\u5e95\u8001\u5316\uff0c\u73b0\u5728\u4e2d\u8d85\u53c8\u597d\u770b\u4e86\uff01", "up": 11}, {"content": "\u5f20\u7433\u8283\u5c31\u8fd9\u5b9e\u529b\u8fd8\u7559\u6d0b\uff1f\u996e\u6c34\u673a\u7403\u5458\u90fd\u4e0d\u5982\uff0c\u64e6", "up": 9}, {"content": "\u5f20\u7433\u8283\u4e0b\u653e\u9884\u5907\u961f\uff0c\u5982\u679c\u4e0d\u662f\u4ed6\u4f20\u7403\u5931\u8bef\u4e5f\u4e0d\u4f1a\u88ab\u7edd\u6740\u3002", "up": 9}], "2": [{"content": "\u90d1\u667a38\u5c81\u3001\u51af\u6f47\u970633\u5c81\u3001\u90dc\u679732\u5c81\u3001\u66fe\u8bda31\u5c81\u3001\u9ec4\u535a\u658731\u5c81\u3001\u674e\u5b66\u9e4f30\u5c81\u3001\u5f20\u7433\u828329\u5c81\u3001\u9ad8\u62c9\u727927\u5c81\u3001\u963f\u517029\u5c81\u2026\u2026\uff0c\u9996\u5148\u652f\u6301\u5168\u534e\u73ed\uff0c\u5176\u6b21\u5e73\u574730\u5c81\u7684\u7403\u961f\u771f\u7684\u9700\u8981\u5168\u9762\u6362\u8840\u4e86\uff0c\u9ec4\u535a\u6587\u8e22\u4e86\u5341\u51e0\u5206\u949f\u5c31\u6ee1\u8eab\u5927\u6c57\uff0c\u51af\u6f47\u9706\u548c\u5f20\u7433\u8283\u53ea\u80fd\u7528\u72af\u89c4\u5f25\u8865\u901f\u5ea6\u7f3a\u9677\uff0c\u800c\u5728\u4e0b\u534a\u573a\u540e\u9636\u6bb5\u674e\u5b66\u9e4f\u4e5f\u57fa\u672c\u4e0a\u542f\u52a8\u4e0d\u8d77\u6765\uff0c\u4e8e\u6c49\u8d85\u57fa\u672c\u900f\u652f\u2026\u2026\u770b\u5f97\u60ca\u5fc3\u52a8\u9b44\uff0c\u5f88\u96be\u60f3\u50cf\u660e\u5e74\u4f1a\u600e\u4e48\u6837", "up": 329}, {"content": "\u8fd9\u573a\u6bd4\u8d5b\u6052\u5927\u7684\u6536\u83b7\u662f \u9093\u6db5\u6587\u8e22\u7684\u6bd4\u8f83\u81ea\u4fe1\u4e86\uff01\u51af\u535a\u8f69\u4e0d\u602f\u573a \u57fa\u672c\u529f\u6bd4\u8f83\u624e\u5b9e\uff01\u5361\u7eb3\u74e6\u7f57\u8fd8\u662f\u6709\u70b9\u773c\u5149 \u5f20\u6587\u948a\u5361\u7eb3\u74e6\u7f57\u4e00\u5b9a\u8981\u591a\u7528\uff01\uff01\uff01\u73b0\u5728\u7684\u72b6\u6001 \u7edd\u5bf9\u5f3a\u4e8e\u90d1\u9f99\uff01\uff01\uff01\u5f20\u7433\u8283 \u9700\u8981\u4f11\u606f \u5176\u4ed6\u4eba\u90fd\u6709\u8f6e\u6362\u8c8c\u4f3c\u5f20\u7433\u8283\u6ca1\u6709", "up": 290}, {"content": "\u6709\u4e24\u4e2a\u4e22\u7403\u662f\u5f20\u7433\u8283\u76f4\u63a5\u5931\u8bef\u9020\u6210\u7684\uff0c\u5f20\u7684\u6280\u672f\u6c34\u5e73\u6211\u4f30\u8ba1\u7403\u7ae5\u90fd\u6bd4\u4ed6\u597d", "up": 109}, {"content": "\u6052\u5927\u5c11\u4e86\u90d1\u667a\u8fd8\u662f\u4e0d\u884c\uff0c\u800c\u5f20\u7433\u8283\u548c\u9ec4\u535a\u6587\u624d\u521a\u4e09\u5341\u5de6\u53f3\u72b6\u6001\u5c31\u5df2\u7ecf\u5927\u4e0d\u5982\u524d\u4e86\uff0c\u591a\u5411\u90d1\u667a\u5b66\u4e60\u5427\u3002\u53e6\u5916\u8fd8\u662f\u611f\u89c9\u8fd9\u8d5b\u5b63\u7684\u51a0\u519b\u4f1a\u5728\u6052\u5927\u548c\u56fd\u5b89\u4e4b\u95f4\u4ea7\u751f", "up": 6}, {"content": "\u8c01\u4e0a\u6765\u628a\u5f20\u7433\u8283\u9876\u4e0b\u53bb\uff01", "up": 6}]};
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
