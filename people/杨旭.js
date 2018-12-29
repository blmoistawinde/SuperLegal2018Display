var data = {"person_name": "\u6768\u65ed", "nicknames": "\u6768\u65ed", "aspects": {"\u7403\u5458": 0.3949048052967484, "\u56fd\u5bb6\u961f": 0.41264591108994936, "\u8fdb\u7403": 0.473988281170962, "\u7403\u8ff7": 0.35215931261359873, "\u8865\u65f6": 0.7522452030903926, "\u6bd4\u8d5b": 0.4018843197659811, "\u5916\u63f4": 0.4463234889863453, "\u72af\u89c4": 0.695152548716088, "\u52a9\u653b": 0.4039884531893567, "\u51fa\u573a": 0.1099177562406302}, "overall_heat": 192.0, "overall_polar": 0.331, "name": "432", "nationality": "\u4e2d\u56fd", "position": "\u524d\u950b", "goal": "6", "assist": "2", "team_name": "\u5929\u6d25\u6743\u5065", "name_en": "Yang Xu", "age": "30", "height": "188", "weight": "80"};
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
var topic_keywords = {"0": [{"name": "\u6768\u65ed", "value": 0.10929896093647244}, {"name": "\uff01", "value": 0.044850716822306985}, {"name": "\u56fd\u5bb6\u961f", "value": 0.030382743653820862}, {"name": "\u8463\u5b66\u5347", "value": 0.01328422990924635}, {"name": "\u72b6\u6001", "value": 0.010653689333157964}, {"name": "\u4e2d\u950b", "value": 0.009338419045113771}, {"name": "\u6b66\u78ca", "value": 0.009338419045113771}, {"name": "\u56fd\u5185", "value": 0.009338419045113771}, {"name": "\u4e00\u4e2a", "value": 0.009338419045113771}, {"name": "\u52a0\u6cb9", "value": 0.009338419045113771}, {"name": "\u771f", "value": 0.009338419045113771}, {"name": "\u73b0\u5728", "value": 0.008023148757069578}, {"name": "\u914d\u5408", "value": 0.008023148757069578}, {"name": "\u59cb\u7ec8\u8ba4\u4e3a", "value": 0.008023148757069578}, {"name": "\u9ad8\u4e00", "value": 0.008023148757069578}, {"name": "\u7403\u5458", "value": 0.006707878469025385}, {"name": "\u54ed", "value": 0.006707878469025385}, {"name": "\u5434\u78ca", "value": 0.006707878469025385}, {"name": "\u597d", "value": 0.006707878469025385}, {"name": "\u76ae", "value": 0.006707878469025385}, {"name": "\u91cc", "value": 0.006707878469025385}, {"name": "\u4e8e\u6c49\u8d85", "value": 0.006707878469025385}, {"name": "\u8096\u667a", "value": 0.005392608180981191}, {"name": "\u725b", "value": 0.005392608180981191}, {"name": "\u611f\u89c9", "value": 0.005392608180981191}, {"name": "\u5389\u5bb3", "value": 0.005392608180981191}, {"name": "\u8fbd\u5b81", "value": 0.005392608180981191}, {"name": "\u7403", "value": 0.005392608180981191}, {"name": "\u8fdb\u7403", "value": 0.005392608180981191}, {"name": "\u524d\u950b", "value": 0.004077337892936999}], "1": [{"name": "\u6768\u65ed", "value": 0.04001099958751547}, {"name": "\uff01", "value": 0.034511205829781386}, {"name": "\u6743\u5065", "value": 0.03313625739034787}, {"name": "\u5e15\u6258", "value": 0.016636876117145608}, {"name": "\u83ab\u5fb7\u65af\u7279", "value": 0.012512030798845044}, {"name": "\u597d", "value": 0.011137082359411523}, {"name": "\u4e00\u5b9a", "value": 0.009762133919978001}, {"name": "\u8e22", "value": 0.009762133919978001}, {"name": "\u7d22\u8428", "value": 0.009762133919978001}, {"name": "\u89c9\u5f97", "value": 0.00838718548054448}, {"name": "\u73b0\u5728", "value": 0.00838718548054448}, {"name": "\u5916\u63f4", "value": 0.00838718548054448}, {"name": "\u7403\u5458", "value": 0.0070122370411109585}, {"name": "\u738b\u6c38\u73c0", "value": 0.0070122370411109585}, {"name": "\u7ef4\u7279", "value": 0.005637288601677437}, {"name": "\u4e2d\u573a", "value": 0.005637288601677437}, {"name": "\u72b6\u6001", "value": 0.005637288601677437}, {"name": "\u8d62", "value": 0.005637288601677437}, {"name": "\uff1f", "value": 0.005637288601677437}, {"name": "\u4e0d\u9519", "value": 0.005637288601677437}, {"name": "\u5e94\u8be5", "value": 0.005637288601677437}, {"name": "\u5f20\u4fee", "value": 0.005637288601677437}, {"name": "\u4e00\u4e0b", "value": 0.005637288601677437}, {"name": "\u660e\u663e", "value": 0.004262340162243916}, {"name": "\u6839\u672c", "value": 0.004262340162243916}, {"name": "\u8d75\u65ed\u65e5", "value": 0.004262340162243916}, {"name": "\u88f4\u5e05", "value": 0.004262340162243916}, {"name": "\u5f20\u7389\u5b81", "value": 0.004262340162243916}, {"name": "\u5f3a", "value": 0.004262340162243916}, {"name": "\u4f5c\u7528", "value": 0.004262340162243916}], "2": [{"name": "\u6768\u65ed", "value": 0.08225966303270565}, {"name": "\u9c81\u80fd", "value": 0.03270564915758177}, {"name": "\uff1f", "value": 0.01854735947897494}, {"name": "\u5206\u949f", "value": 0.015715701543253576}, {"name": "\u8865\u65f6", "value": 0.015715701543253576}, {"name": "\uff01", "value": 0.01288404360753221}, {"name": "\u558a", "value": 0.011468214639671528}, {"name": "\u738b\u6c38\u73c0", "value": 0.011468214639671528}, {"name": "\u8f93\u4e0d\u8d77", "value": 0.010052385671810845}, {"name": "\u7403\u8ff7", "value": 0.010052385671810845}, {"name": "\u88c1\u5224", "value": 0.010052385671810845}, {"name": "\u5367\u8349", "value": 0.008636556703950162}, {"name": "\u77e5\u9053", "value": 0.007220727736089481}, {"name": "\u5fc3\u6001", "value": 0.007220727736089481}, {"name": "\u4eba", "value": 0.007220727736089481}, {"name": "\u4e00\u4e2a", "value": 0.007220727736089481}, {"name": "\u591a\u4e45", "value": 0.007220727736089481}, {"name": "\u65f6\u95f4", "value": 0.007220727736089481}, {"name": "\u738b\u5c0f\u9f99", "value": 0.005804898768228798}, {"name": "\u5e15\u6258", "value": 0.005804898768228798}, {"name": "\u6743\u5065", "value": 0.005804898768228798}, {"name": "\u597d", "value": 0.005804898768228798}, {"name": "\u60f3", "value": 0.005804898768228798}, {"name": "\u803d\u8bef", "value": 0.005804898768228798}, {"name": "\u771f\u7684", "value": 0.005804898768228798}, {"name": "\u7403", "value": 0.005804898768228798}, {"name": "\u6bd4\u8d5b", "value": 0.004389069800368116}, {"name": "\u53d7\u4f24", "value": 0.004389069800368116}, {"name": "\u5012\u5730", "value": 0.004389069800368116}, {"name": "\u6d3b\u8be5", "value": 0.004389069800368116}], "3": [{"name": "\u6768\u65ed", "value": 0.04106949295435385}, {"name": "\uff01", "value": 0.02541250150547995}, {"name": "\u9c81\u80fd", "value": 0.02300373359026858}, {"name": "\u738b\u6c38\u73c0", "value": 0.0133686619294231}, {"name": "\u8865\u65f6", "value": 0.0133686619294231}, {"name": "\u8fdb\u7403", "value": 0.012164277971817416}, {"name": "\u6743\u5065", "value": 0.012164277971817416}, {"name": "\u6bd4\u8d5b", "value": 0.01095989401421173}, {"name": "\u738b\u6653\u9f99", "value": 0.009755510056606046}, {"name": "\u6700\u540e", "value": 0.009755510056606046}, {"name": "\u65f6\u95f4", "value": 0.008551126099000361}, {"name": "\u5e94\u8be5", "value": 0.007346742141394676}, {"name": "\u8d5b\u540e", "value": 0.007346742141394676}, {"name": "\u8c22\u573a", "value": 0.007346742141394676}, {"name": "\u5bfc\u81f4", "value": 0.007346742141394676}, {"name": "\u95e8\u5c06", "value": 0.007346742141394676}, {"name": "\uff1f", "value": 0.007346742141394676}, {"name": "\u7403\u5458", "value": 0.007346742141394676}, {"name": "\u52a8\u4f5c", "value": 0.007346742141394676}, {"name": "\u72af\u89c4", "value": 0.0061423581837889915}, {"name": "\u7cdc\u660a\u4f26", "value": 0.0061423581837889915}, {"name": "\u52a9\u653b", "value": 0.0061423581837889915}, {"name": "\u771f\u662f", "value": 0.0061423581837889915}, {"name": "\u4e0b", "value": 0.0061423581837889915}, {"name": "\u606d\u559c", "value": 0.004937974226183307}, {"name": "\u552f\u72ec", "value": 0.004937974226183307}, {"name": "\u8fde\u7eed", "value": 0.004937974226183307}, {"name": "\u56fd\u5bb6\u961f", "value": 0.004937974226183307}, {"name": "\u738b\u5c0f\u9f99", "value": 0.004937974226183307}, {"name": "\u660e\u5e74", "value": 0.004937974226183307}]};
var topic_summary = {"0": [{"content": "\u6211\u53ea\u60f3\u7ed9\u6768\u65ed****\ud83d\udc4d\uff0c\u5173\u952e\u65f6\u523b\u6551\u4e3b\uff01[\u52a0\u6cb9]", "up": 229}, {"content": "\u6700\u8fd1\u72b6\u6001\u56de\u5347\u7684\u4e24\u4e2a\u56fd\u5185\u4e2d\u950b\uff0c\u4e00\u4e2a\u8463\u5b66\u5347\uff0c\u4e00\u4e2a\u6768\u65ed", "up": 199}, {"content": "\u6768\u65ed\u5728\u56fd\u5bb6\u961f\u662f\u8650\u83dc\u5229\u5668\uff0c\u4f46\u662f\u603b\u6bd4\u73b0\u5728\u8fde\u83dc\u90fd\u8650\u4e0d\u4e86\u7684\u597d\u3002\u51c6\u5907\u56de\u56fd\u5bb6\u961f\u5427\u3002", "up": 155}, {"content": "\u4e24\u4e2a\u7403\u90fd\u662f\u56fd\u5185\u7403\u5458\u8fdb\u7684\uff0c\u800c\u4e14\u90fd\u5f88\u6f02\u4eae\uff01\u56fd\u4ea7\u524d\u950b\u8fde\u7eed\u4e09\u573a\u8fdb\u7403\uff0c\u7ed9\u6768\u65ed****\uff01\uff01", "up": 80}, {"content": "\u6768\u65ed\u4eba\u54c1\u548c\u6001\u5ea6\u6ca1\u5f97\u8bf4\uff01\uff01\uff01\u6cf0\u8fbe\u6743\u5065\u53cc\u6599\u7403\u8ff7\u7559\uff01\uff01\uff01\u52a0\u6cb9\u5427\u3002", "up": 76}], "1": [{"content": "\u6743\u5065\u8fd9\u72b6\u6001\u53ef\u4ee5\uff0c\u4fdd\u7ea7\u4e4b\u8def\u8fd8\u9700\u52aa\u529b\uff0c\u800c\u4e14\u4e0b\u4e2a\u8d5b\u5b63\u7403\u961f\u5185\u90e8\u6709\u51e0\u4e2a\u4eba\u4e00\u5b9a\u8981\u7559\u4f4f\uff0c\u6768\u65ed\u5e15\u6258\u738b\u6c38\u73c0\u4e00\u4e2a\u90fd\u4e0d\u80fd\u5c11\uff0c\u542c\u8bf4\u6052\u5927\u60f3\u8981\u5f20\u4fee\u4e3a\uff0c\u6743\u5065\u4e00\u5b9a\u4e0d\u80fd\u5356\uff0c\u5356\u4e86\u7684\u8bdd\u5bb3\u4e86\u81ea\u5df1\uff0c\u4e5f\u5bb3\u4e86\u5f20\u4fee\u4e3a\uff0c\u4e00\u5b9a\u7559\u4f4f\u5f20\u4fee\u4e3a\uff0c\u5728\u5f15\u8fdb\u51e0\u4e2a\u5916\u63f4\uff0c\u4e0b\u4e2a\u8d5b\u5b63\u8fd8\u662f\u6709\u7ade\u4e89\u529b\u7684\uff0c\u8fd8\u6709\u4e00\u4ef6\u4e8b\uff0c\u4e00\u5b9a\u8981\u628a\u83ab\u5fb7\u65af\u7279\u8fd9\u4e2a\u72d7\u7ed9\u529e\u4e86\uff0c\u4e00\u5b9a\u8981\u901a\u8fc7\u5404\u79cd\u624b\u6bb5\u8ba9\u4ed6\u4e00\u8f88\u5b50\u8e22\u4e0d\u4e0a\u6bd4\u8d5b\uff01", "up": 98}, {"content": "\u6211\u4e3a\u5f53\u521d\u9ed1\u6768\u65ed\u800c\u7f9e\u6127\u4e07\u5206\uff01", "up": 57}, {"content": "\u8d75\u65ed\u65e5\uff0c\u738b\u6c38\u73c0\uff0c\u6768\u65ed\uff0c\u6743\u5065\u4e09\u5927\u6076\u4eba", "up": 15}, {"content": "\u6743\u5065\u53ef\u4ee5\u591a\u7ed9\u82cf\u5143\u6770\u70b9\u4e0a\u573a\u7684\u673a\u4f1a\uff0c\u5f88\u52aa\u529b\u7684\u3002\u5e15\u6258\u5f80\u56de\u62c9\u4e00\u62c9\u7ec4\u7ec7\u4e00\u4e0b\u8fdb\u653b\uff0c\u524d\u9762\u653e\u4e2a\u4e00\u9ad8\u4e00\u5757\uff0c\u633a\u597d\u3002\u8d75\u8ddf\u738b\u7ec4\u7ec7\u7684\u8fdb\u653b\u90fd\u4e0d\u600e\u4e48\u6837\uff0c\u4f20\u7403\u592a\u5dee\uff0c\u6768\u65ed\u8ddf\u82cf\u5143\u6770\u9876\u5728\u524d\u9762\u5f53\u524d\u950b\u3002\u95f4\u6b47\u671f\u8fc7\u540e\uff0c\u5f20\u8bda\u8ddf\u8ff7\u7cca\u8f6e\u4f24\u6108\u5f52\u961f\uff0c\u6743\u5065\u8fd8\u662f\u8ddf\u5176\u5b83\u961f\u6709\u4e00\u62fc\u7684\u3002", "up": 11}, {"content": "\u6768\u65ed\u8fd9\u6837\u7684\u72b6\u6001\u53bb\u5e74\u5728\u8fbd\u5b81\u5c45\u7136\u88ab\u7528\u6765\u6253\u540e\u8170\u3002\u8d75\u65ed\u65e5\u660e\u663e\u627e\u52a0\u7f5a\u597d\u4e09\u4f0f\u5929\u4e0d\u51fa\u573a\u3002", "up": 8}], "2": [{"content": "\u6768\u65ed\u8d5b\u524d\u63a5\u5230\u5bb6\u91cc\u6d88\u606f\uff0c\u59bb\u5b50\u8eab\u4f53\u539f\u56e0\uff0c\u5fd8\u5927\u5bb6\u4e0d\u8981\u4e71\u55b7\u4e3b\u6559\u7ec3\uff0c\u73b0\u5728\u6743\u5065\u4eba\u5458\u5904\u4e8e\u56f0\u5883\u65f6\u671f\u3002\u6700\u540e\u7ed9\u6768\u65ed\u5bb6\u4eba\u9001\u53bb\u795d\u798f\ud83d\ude4f", "up": 511}, {"content": "\u6709\u6ca1\u6709\u4eba\u6ce8\u610f\u5230\u6768\u65ed\u8fde\u7eed3\u573a\u7834\u95e8\uff1f\u52a0\u6cb9\u6768\u65ed\uff01", "up": 502}, {"content": "\u5176\u5b9e\u4e0d\u77e5\u9053\u6709\u6ca1\u6709\u4eba\u6ce8\u610f\u7ec6\u8282\uff0c\u6768\u65ed\u573a\u4e0a\u5f88\u6709\u793c\u8c8c\uff0c\u8eab\u4f53\u63a5\u89e6\u4e86\u8d76\u7d27\u53bb\u62cd\u62cd\u5bf9\u624b\uff0c\u4e0d\u662f\u8fd9\u4e00\u573a\u4e86\uff0c\u4f60\u5f88\u5c11\u770b\u5230\u6768\u65ed\u53bb\u8ddf\u5bf9\u65b9\u4e89\u6267\u751a\u81f3\u9a82\u8857\uff0c\u56fd\u5185\u7403\u5458\u7684\u4e00\u80a1\u6e05\u6d41", "up": 425}, {"content": "\u6768\u65ed\u8865\u65f6\u724c\u521a\u4e3e\u5b8c\u5c31\u70b8\u4f24\u5012\u5730\u5367\u8349\u4e863\u5206\u949f\uff0c\u88c1\u5224\u53c8\u8865\u65f62\u5206\u949f\uff0c\u7edd\u6740\uff01\u8c22\u8c22\u626c\u65ed", "up": 250}, {"content": "93\u5206\u949f\u6768\u65ed\u53d7\u4f24\u8eba\u4e0b\u4e86\uff0c\u867d\u7136\u6bd4\u8d5b\u8fd8\u5269\u4e00\u5206\u949f\u9c81\u80fd\u7403\u5458\u6700\u540e\u8fd8\u662f\u628a\u7403\u6743\u7ed9\u4e86\u6743\u5065\uff0c95\u5206\u949f\u9c81\u80fd\u89d2\u7403\u5f20\u9e6d\u62b1\u7740\u7403\u4e0d\u7ed9\u9c81\u80fd\uff0c\u5f15\u53d1\u7403\u5458\u51b2\u7a81\uff0c\u6743\u5065\u7403\u8ff7\u9ad8\u558a:\u8f93\u4e0d\u8d77\u300296\u5206\u949f\u4f69\u83b1\u6253\u8138\u5f0f\u7edd\u6740\uff01\u4eba\u5728\u505a\uff01\u5929\u5728\u770b\uff01\u6d3b\u8be5\u4e3b\u573a\u4e00\u76f4\u4e0d\u80dc\uff01", "up": 162}], "3": [{"content": "\u738b\u6c38\u73c0\u52a9\u653b\u6768\u65ed\u8fdb\u7403\uff0c\u9c81\u80fd\u6218\u80dc\u6743\u5065\u3002", "up": 148}, {"content": "\u6768\u65ed\u6b64\u573a\u80dc\u5229\u5c45\u529f\u81f3\u4f1f\uff0c\u53c8\u8fdb\u7403\uff0c\u53c8\u62bd\u7b4b\uff0c\u51fa\u573a\u6cbb\u7597\u540e\u518d\u8fdb\u573a\uff0c\u8d5b\u540e\u8fd8\u548c\u961f\u53cb\u70ed\u70c8\u62e5\u62b1\uff0c\u679c\u7136\u662f\u4e13\u4e1a\u7684\u4e2d\u950b\uff01", "up": 103}, {"content": "\u8fd9\u573a\u6bd4\u8d5b\u771f\u662f\u611f\u52a8\uff1a\u6768\u65ed\u8fdb\u7403\u5168\u573a\u638c\u58f0\uff0c\u6768\u65ed\u4e5f\u6ca1\u6709\u5e86\u795d\uff1b\u738b\u6c38\u73c0\u8d5b\u540e\u8c22\u573a\u6b22\u8fce\u56de\u5bb6\uff0c\u738b\u6c38\u73c0\u5408\u5f71\u7559\u5ff5\uff1b\u5f20\u4fee\u4e3a\u72c2\u5954\u89e3\u56f4\u53cc\u817f\u62bd\u7b4b\uff0c\u8d5b\u540e\u63a5\u53d7\u91c7\u8bbf\u8bf4\u8fd9\u4e2a\u7403\u56e0\u4ed6\u800c\u8d77\uff0c\u4ed6\u65e0\u8bba\u5982\u4f55\u4e5f\u4e0d\u80fd\u8ba9\u8fd9\u4e2a\u7403\u8fdb\u3002\u5230\u6700\u540e\u5f20\u9e6d\u90a3\u4e2a\u5934\u7403\u6211\u771f\u5e0c\u671b\u80fd\u8fdb\uff0c\u5e73\u5c40\u4e0d\u4e5f\u5f88\u597d\u5417", "up": 46}, {"content": "\u738b\u6653\u9f99\uff0c\u4f60\u4e2a\u767d\u773c\u72fc\uff01\u573a\u4e0a\u80cc\u540e\u4eae\u978b\u5e95\u94f2\u98de\u90d1\u94ee\uff0c\u6700\u540e\u8c22\u573a\u738b\u6c38\u73c0\uff0c\u7cdc\u660a\u4f26\uff0c\u6768\u65ed\u90fd\u53bb\u4e86\uff0c\u552f\u72ec\u4f60\u738b\u6653\u9f99\u6ca1\u53bb\uff0c\u662f\u8c01\u57f9\u517b\u4e86\u4f60\uff1f\u662f\u8c01\u6210\u5c31\u4e86\u4f60\uff1f\u591a\u5c11\u5e74\u4e86\u5fd8\u6069\u8d1f\u4e49\u7684\u4e1c\u897f\uff01", "up": 24}, {"content": "\u8d5b\u540e\u7403\u5458\u8c22\u573a \u6768\u65ed \u738b\u6c38\u73c0 \u7cdc\u660a\u4f26 \u90fd\u52a0\u5165 \u7f05\u6000\u674e\u660e\u73e0\u65f6\u523b \u8fd9\u4efd\u60c5\u8c0a \u8fd9\u4efd\u611f\u60c5 \u8bc1\u660e\u4e86\u4f60\u4eec\u662f\u6709\u60c5\u6709\u4e49\u7684\u7237\u4eec \u552f\u72ec\u6ca1\u6709\u738b\u6653\u9f99 \u6211\u7528\u4e00\u4e2a\u5b57\u5f62\u5bb9 \u53bb\u4f60 \u5976 \u5976 \u4e2a \u5634", "up": 12}]};
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
