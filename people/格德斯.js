var data = {"person_name": "\u683c\u5fb7\u65af", "nicknames": "\u683c\u5fb7\u65af", "aspects": {"\u5916\u63f4": 0.47611070111096687, "\u8fdb\u7403": 0.5945526123356913, "\u7403\u5458": 0.559249529781925, "\u6bd4\u8d5b": 0.45854713821077225, "\u8fdb\u653b": 0.5190367586148166, "\u914d\u5408": 0.7216176408708147, "\u7403\u8ff7": 0.6742588082507865, "\u8d5b\u5b63": 0.5058065784886673, "\u9632\u5b88": 0.6902670735794927, "\u8db3\u534f\u676f": 0.15339289551365506}, "overall_heat": 279.0, "overall_polar": 0.421, "name": "119", "nationality": "\u5df4\u897f", "position": "\u524d\u950b", "goal": "0", "assist": "1", "team_name": "\u5c71\u4e1c\u9c81\u80fd\u6cf0\u5c71", "name_en": "Roger Guedes", "age": "21", "height": "182", "weight": "0"};
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
var topic_keywords = {"0": [{"name": "\u683c\u5fb7\u65af", "value": 0.053276909722222224}, {"name": "\uff01", "value": 0.05002170138888889}, {"name": "\u4f69\u83b1", "value": 0.025065104166666668}, {"name": "\u5916\u63f4", "value": 0.013129340277777776}, {"name": "\u9c81\u80fd", "value": 0.013129340277777776}, {"name": "\u5409\u5c14", "value": 0.010959201388888888}, {"name": "\u5854\u5c14\u5fb7\u5229", "value": 0.009874131944444444}, {"name": "\u91d1\u5b50", "value": 0.0087890625}, {"name": "\u8fdb\u7403", "value": 0.0087890625}, {"name": "\u52a0\u6cb9", "value": 0.007703993055555555}, {"name": "\u540e", "value": 0.007703993055555555}, {"name": "\u6253", "value": 0.00661892361111111}, {"name": "\u9e21\u513f", "value": 0.00661892361111111}, {"name": "\u8fdb\u653b", "value": 0.00661892361111111}, {"name": "\u6218\u672f", "value": 0.00661892361111111}, {"name": "\u5c0f", "value": 0.00661892361111111}, {"name": "\u4e00\u4e0b", "value": 0.00661892361111111}, {"name": "\u7834\u5904", "value": 0.005533854166666666}, {"name": "\u7ec8\u4e8e", "value": 0.005533854166666666}, {"name": "\u6052\u5927", "value": 0.005533854166666666}, {"name": "\u5e0c\u671b", "value": 0.005533854166666666}, {"name": "\u674e\u5c0f\u9e4f", "value": 0.005533854166666666}, {"name": "\u8fde\u573a", "value": 0.004448784722222222}, {"name": "\u7a97\u6237\u7eb8", "value": 0.004448784722222222}, {"name": "\u4f7f\u7528", "value": 0.004448784722222222}, {"name": "\u7834\u95e8", "value": 0.004448784722222222}, {"name": "\u4e0d\u7531\u81ea\u4e3b", "value": 0.004448784722222222}, {"name": "\u5468\u6d77\u6ee8", "value": 0.004448784722222222}, {"name": "\u524d\u573a", "value": 0.004448784722222222}, {"name": "\u80fd\u591f", "value": 0.004448784722222222}], "1": [{"name": "\u683c\u5fb7\u65af", "value": 0.059197564033673655}, {"name": "\u9c81\u80fd", "value": 0.026956833243775753}, {"name": "\u5854\u5c14\u5fb7\u5229", "value": 0.018001074691026332}, {"name": "\uff01", "value": 0.016209922980476448}, {"name": "\u597d", "value": 0.014418771269926566}, {"name": "\u5854\u795e", "value": 0.013523195414651622}, {"name": "\u8fdb\u7403", "value": 0.011732043704101738}, {"name": "\u5e74\u8f7b", "value": 0.009940891993551854}, {"name": "\u80af\u5b9a", "value": 0.009045316138276912}, {"name": "\u8e22", "value": 0.009045316138276912}, {"name": "\u6052\u5927", "value": 0.009045316138276912}, {"name": "\u8d5b\u5b63", "value": 0.00814974028300197}, {"name": "\u771f\u7684", "value": 0.00814974028300197}, {"name": "\u70b9", "value": 0.00814974028300197}, {"name": "\u4f69\u83b1", "value": 0.007254164427727029}, {"name": "\u6c34\u5854", "value": 0.007254164427727029}, {"name": "\uff1f", "value": 0.007254164427727029}, {"name": "\u8868\u73b0", "value": 0.007254164427727029}, {"name": "\u53d8", "value": 0.006358588572452087}, {"name": "\u6253", "value": 0.006358588572452087}, {"name": "\u73ed", "value": 0.006358588572452087}, {"name": "\u8d35\u5dde", "value": 0.006358588572452087}, {"name": "\u4e70", "value": 0.006358588572452087}, {"name": "\u5a76", "value": 0.006358588572452087}, {"name": "\u80fd\u63a5", "value": 0.006358588572452087}, {"name": "\u52e4\u594b", "value": 0.006358588572452087}, {"name": "\u53ea\u80fd", "value": 0.006358588572452087}, {"name": "\u8d70", "value": 0.005463012717177145}, {"name": "\u4ee5\u540e", "value": 0.005463012717177145}, {"name": "\u518d", "value": 0.0045674368619022035}], "2": [{"name": "\u683c\u5fb7\u65af", "value": 0.061482687185557855}, {"name": "\uff01", "value": 0.041506362829239425}, {"name": "\u9c81\u80fd", "value": 0.03928677123409293}, {"name": "\uff1f", "value": 0.02374963006806748}, {"name": "\u5916\u63f4", "value": 0.020050310742823322}, {"name": "\u8e22", "value": 0.016350991417579168}, {"name": "\u627e", "value": 0.010432080497188518}, {"name": "\u5854\u5c14\u5fb7\u5229", "value": 0.008212488902042025}, {"name": "\u91d1\u656c\u9053", "value": 0.008212488902042025}, {"name": "\u8868\u73b0", "value": 0.008212488902042025}, {"name": "\u6700\u597d", "value": 0.007472625036993193}, {"name": "\u673a\u4f1a", "value": 0.006732761171944363}, {"name": "\u611f\u89c9", "value": 0.005992897306895531}, {"name": "\u4f69\u83b1", "value": 0.005992897306895531}, {"name": "\u7b11", "value": 0.005992897306895531}, {"name": "\u54ed", "value": 0.0052530334418467006}, {"name": "\u5409\u5c14", "value": 0.0052530334418467006}, {"name": "\u674e\u9704\u9e4f", "value": 0.0052530334418467006}, {"name": "\u5e0c\u671b", "value": 0.0052530334418467006}, {"name": "\u5df4\u897f", "value": 0.0052530334418467006}, {"name": "\u4e00\u5b9a", "value": 0.0052530334418467006}, {"name": "\u4eca\u5929", "value": 0.0052530334418467006}, {"name": "\u8fdb\u7403", "value": 0.0052530334418467006}, {"name": "\u4e00\u4e2a", "value": 0.004513169576797869}, {"name": "\u7403\u5458", "value": 0.004513169576797869}, {"name": "\u73b0\u5728", "value": 0.004513169576797869}, {"name": "\u4e2d\u573a", "value": 0.003773305711749038}, {"name": "\u4e0d\u9519", "value": 0.003773305711749038}, {"name": "\u5218\u6d0b", "value": 0.003773305711749038}, {"name": "\u8fd9\u573a", "value": 0.003773305711749038}], "3": [{"name": "\u683c\u5fb7\u65af", "value": 0.07089370014650823}, {"name": "\uff01", "value": 0.043219925118020516}, {"name": "\u8fdb\u7403", "value": 0.0147322155298714}, {"name": "\u7b11", "value": 0.013104346410548594}, {"name": "\u9c81\u80fd", "value": 0.01229041185088719}, {"name": "\u5fae\u7b11", "value": 0.009034673612241577}, {"name": "\uff1f", "value": 0.0074068044929187695}, {"name": "\u52a0\u6cb9", "value": 0.0074068044929187695}, {"name": "\u523b\u8d77", "value": 0.006592869933257367}, {"name": "\u6211\u9c81", "value": 0.006592869933257367}, {"name": "\u8ddf\u7740", "value": 0.006592869933257367}, {"name": "\u4e4b\u540e", "value": 0.006592869933257367}, {"name": "\u4e2d\u8d85", "value": 0.006592869933257367}, {"name": "\u597d", "value": 0.006592869933257367}, {"name": "\u80fd\u529b", "value": 0.006592869933257367}, {"name": "\u4f69\u83b1", "value": 0.006592869933257367}, {"name": "\u7403\u5458", "value": 0.006592869933257367}, {"name": "\u7ec8\u4e8e", "value": 0.006592869933257367}, {"name": "\u7ee7\u7eed", "value": 0.005778935373595963}, {"name": "\u95ee\u9898", "value": 0.005778935373595963}, {"name": "\u5e0c\u671b", "value": 0.005778935373595963}, {"name": "\u524d\u573a", "value": 0.005778935373595963}, {"name": "\u6bd4\u8d5b", "value": 0.005778935373595963}, {"name": "\u9002\u5e94", "value": 0.005778935373595963}, {"name": "\u771f", "value": 0.005778935373595963}, {"name": "\u606d\u559c", "value": 0.00496500081393456}, {"name": "\u53d1\u6325", "value": 0.00496500081393456}, {"name": "\u914d\u5408", "value": 0.00496500081393456}, {"name": "\u5854\u5c14\u5fb7\u5229", "value": 0.00496500081393456}, {"name": "\u52a9\u653b", "value": 0.00496500081393456}], "4": [{"name": "\u683c\u5fb7\u65af", "value": 0.04393649055570764}, {"name": "\uff01", "value": 0.032986586367369286}, {"name": "\uff1f", "value": 0.019299206131946346}, {"name": "\u611f\u89c9", "value": 0.008349301943607992}, {"name": "\u961f", "value": 0.008349301943607992}, {"name": "\u673a\u4f1a", "value": 0.0069805639200656985}, {"name": "\u5165\u7403", "value": 0.0069805639200656985}, {"name": "\u597d", "value": 0.0069805639200656985}, {"name": "\u6342", "value": 0.0069805639200656985}, {"name": "\u518d", "value": 0.0069805639200656985}, {"name": "\u8138", "value": 0.0069805639200656985}, {"name": "\u674e\u6307\u5bfc", "value": 0.005611825896523405}, {"name": "\u5bb6\u5c5e", "value": 0.005611825896523405}, {"name": "\u7403\u961f", "value": 0.005611825896523405}, {"name": "\u8fdb\u7403", "value": 0.005611825896523405}, {"name": "\u5916\u63f4", "value": 0.005611825896523405}, {"name": "\u770b\u770b", "value": 0.005611825896523405}, {"name": "\u5854\u5c14\u5fb7\u5229", "value": 0.005611825896523405}, {"name": "\u4e00\u4e2a", "value": 0.005611825896523405}, {"name": "\u9ad8", "value": 0.005611825896523405}, {"name": "\u6709\u70b9", "value": 0.005611825896523405}, {"name": "\u5f00\u5fc3", "value": 0.005611825896523405}, {"name": "\u4fdd\u7ea7", "value": 0.004243087872981111}, {"name": "\u4e0d\u8fdb", "value": 0.004243087872981111}, {"name": "\u4f69\u83b1", "value": 0.004243087872981111}, {"name": "\u878d", "value": 0.004243087872981111}, {"name": "\u4eba", "value": 0.004243087872981111}, {"name": "\u56fd\u9a82", "value": 0.004243087872981111}, {"name": "\u6c34\u5e73", "value": 0.004243087872981111}, {"name": "\u55b7", "value": 0.004243087872981111}]};
var topic_summary = {"0": [{"content": "\u683c\u5fb7\u65af\u5f88\u53ef\u4ee5\uff0c\u4f20\u7403\u9a9a \u5c0f\u91d1\u5b50\u548c\u5854\u795e\u4e92\u76f8\u4f20\u5c04\u663e\u793a\u9ed8\u5951 \u9e21\u513f\u9632\u5b88\u5927\u95f8 \u53ef\u4ee5\u54e6", "up": 145}, {"content": "\u660e\u5e74\u8981\u662f\u674e\u9704\u9e4f\u53bb\u56fd\u5bb6\u96c6\u8bad\u961f\uff0c\u9c81\u80fd\u8fd8\u628a\u9a6c\u52a0\u7279\u8bf7\u6765\u5427\uff0c\u4e09\u5e74\u65f6\u95f4\u628a\u9c81\u80fd\u7684\u57fa\u7840\u6253\u7262\u592f\u5b9e\u3002\u5916\u63f4\u7559\u5409\u5c14\u3001\u4f69\u83b1\uff0c\u628a\u683c\u5fb7\u65af\u5916\u79df\u51fa\u53bb\u7ec3\u7ea7\uff0c\u627e\u4e2a\u901f\u5ea6\u5feb\u7684\u5df4\u897f\u524d\u950bor\u975e\u6d32\u7684\u9ed1\u53c8\u786c\uff0c\u518d\u627e\u4e2a\u4e2d\u573a\u725b\u903c\u5916\u63f4\uff0c\u5d14\u9e4f\u3001\u5468\u6d77\u6ee8\u3001\u5218\u5f6c\u5f6c\u3001\u5434\u5174\u6db5\u3001\u6210\u6e90\u3001\u674e\u5fae\uff0c\u8be5\u9000\u4e8c\u7ebf\u9000\u4e8c\u7ebf\uff0c\u8be5\u5916\u79df\u7684\u5916\u79df\uff0c\u817e\u51fa\u540d\u989d\u591a\u63d0\u62d4\u4e9b\u5e74\u8f7b\u7684\u4e0a\u6765\u3002\u8fd9\u4e48\u5730\u641e\u4e09\u5e74\uff0c\u9c81\u80fd\u5927\u4e1a\u53ef\u6210\u3002 \u54c8\u54c8 11.30\u8db3\u534f\u676f\u5fc5\u80dc\uff01", "up": 74}, {"content": "\u7ec8\u4e8e\u7b49\u5230\u4f60\uff0c\u8fd8\u597d\u6211\u6ca1\u653e\u5f03\uff01\u683c\u5fb7\u65af\uff0c\u4f60\u8fd9\u4e2a\u8fdb\u7403\u8ba9\u6211\u4eec\u9c81\u871c\u7b49\u7684\u592a\u4e45\u4e86\uff01\u52a0\u6cb9\u683c\u5fb7\u65af\uff01", "up": 9}, {"content": "\u6574\u573a\u6bd4\u8d5b\uff0c\u5c0f\u91d1\u5b50\u5e26\u7740\u4e24\u4e2a\u5916\u63f4\u524d\u950b\u8e22\u7403\uff0c\u771f\u5e26\u4e0d\u52a8\u554a\uff0c\u5c0f\u91d1\u5b50\u4f20\u4e86\u56db\u6b21\u5fc5\u8fdb\u7403\u7684\u673a\u4f1a\uff0c\u5854\u5c14\u5f97\u5229\u5410\u4e86\u4e24\u53e3\uff0c\u54bd\u4e86\u4e00\u53e3\uff0c\u683c\u5fb7\u65af\u5410\u4e86\u4e00\u53e3\uff0c\u90fd\u5410****\u4e86[\u7b11\u54ed]", "up": 9}, {"content": "\u683c\u5fb7\u65af\u8fdb\u7403\u540e\uff01\u62cd\u4e86\u5927\u817f\u4e00\u4e0b\uff0c\u4e0d\u7531\u81ea\u4e3b\u7684\u5927\u559d\u4e00\u58f0\uff1a\u7ec8\u4e8e\u7834\u5904\u4e86\uff01\u52a0\u6cb9\uff0c\u5e0c\u671b\u6345\u7834\u7a97\u6237\u7eb8\u4e4b\u540e\uff0c\u80fd\u591f\u8fde\u573a\u7834\u95e8\uff01", "up": 9}], "1": [{"content": "\u683c\u5fb7\u65af\u7528\u597d\u4e86\u80af\u5b9a\u6ca1\u95ee\u9898", "up": 80}, {"content": "\u683c\u5fb7\u65af\u8fdb\u7403\uff0c\u6211\u4eec\u5728\u4e1c\u770b\u53f0\u73a9\u8d77\u4e86\u4eba\u6d6a[\u5389\u5bb3]", "up": 47}, {"content": "\u5854\u795e\u503c\u5f97\u7eed\u957f\u7ea6!\u5c0f\u91d1\u5b50\u56fd\u5bb6\u961f\u6760\u6760\u7684!\u683c\u5fb7\u65af\u8868\u73b0\u8d8a\u6765\u8d8a\u597d!\u9c81\u80fd\u597d\u6837\u7684!", "up": 9}, {"content": "\u674e\u9704\u9e4f\u6559\u7ec3\u4e0a\u573a\u6ca1\u4e0a\u683c\u5fb7\u65af\u662f\u6b63\u786e\u7684", "up": 8}, {"content": "\u770b\u770b\u590f\u5b63\u7a97\u53e3\u671f\u9c81\u80fd\u4e70\u7684\u683c\u5fb7\u65af\uff0c\u518d\u770b\u770b\u6052\u5927\u4e70\u7684\u5854\u5229\u65af\u5361\uff0c\u8fd9\u5c31\u662f\u5dee\u8ddd", "up": 7}], "2": [{"content": "\u97e9\u9555\u6cfd\u4eca\u5929\u5168\u573a\u6700\u4f73\uff0c\u5409\u5c14\u4f9d\u7136\u7a33\uff0c\u5854\u795e\u7eed\u7ea6\u5427\uff0c\u683c\u5fb7\u65af\u8fd8\u662f\u6ca1\u80fd\u9002\u5e94\u4e2d\u8d85\u3002", "up": 147}, {"content": "\u91d1\u656c\u9053\u6bd4\u683c\u5fb7\u65af\u8868\u73b0\u7684\u66f4\u50cf\u4e00\u4e2a\u5916\u63f4[\u5389\u5bb3]", "up": 132}, {"content": "\u683c\u5fb7\u65af\u8868\u73b0\u707e\u96be\u7ea7", "up": 10}, {"content": "\u5c71\u4e1c\u9c81\u80fd\u62e5\u67093\u540d\u8d85\u7ea7\u5916\u63f4\u524d\u950b\uff0c\u8868\u73b0\u6700\u597d\u7684\u662f\u5854\u795e\u548c\u5c0f\u91d1\u656c\u9053\uff0c\u683c\u5fb7\u65af\u8fd8\u6ca1\u9002\u5e94\u4e0b\u6765\uff01[\u6ed1\u7a3d][\u54c8\u54c8][\u54c8\u54c8]", "up": 10}, {"content": "\u606d\u559c\u9c81\u80fd\uff0c\u5e0c\u671b\u9c81\u80fd\u56fd\u5185\u7403\u5458\u4e0e\u683c\u5fb7\u65af\uff0c\u5854\u5c14\u5fb7\u5229\u52a0\u5f3a\u914d\u5408\uff0c\u9c81\u80fd10\u5e74\u6765\u6700\u6709\u5e0c\u671b\u9760\u8fd1\u51a0\u519b\u7684\u4e00\u5e74\uff0c\u4e00\u5b9a\u628a\u63e1\u4f4f\u673a\u4f1a\uff0c\u5982\u593a\u51a0\u519b\u91cd\u632f\u5c71\u4e1c\u8db3\u7403\uff01", "up": 9}], "3": [{"content": "\u683c\u5fb7\u65af\u8fd9\u573a\u6bd4\u8d5b\u53d1\u6325\u7684\u6bd4\u4e0a\u573a\u8e22\u82cf\u5b81\u65f6\u597d\u591a\u4e86\uff0c\u4f5c\u4e3a\u4e00\u540d\u4e8c\u5341\u4e8c\u5c81\u7684\u7403\u5458\uff0c\u53c8\u662f\u7b2c\u4e00\u6b21\u51fa\u56fd\u8e22\u7403\uff0c\u5f97\u6162\u6162\u9002\u5e94\uff0c\u5e0c\u671b\u9c81\u5bc6\u4eec\u4e0d\u8981\u7740\u6025\uff0c\u6709\u70b9\u8010\u5fc3\uff0c\u76f8\u4fe1\u683c\u5fb7\u65af\u4e00\u5b9a\u4f1a\u627e\u5230\u6700\u4f73\u72b6\u6001\u7684\uff01", "up": 330}, {"content": "\u683c\u5fb7\u65af\u8fd9\u4e48\u5927\u724c\uff0c\u8fd8\u6ca1\u905b\u5f2f\u8001\u5927\u7237\u8d70\u7684\u5feb\uff01\uff01\uff01", "up": 201}, {"content": "\u683c\u5fb7\u65af\u9996\u79c0\u867d\u4e0d\u60ca\u8273\uff0c\u4f46\u4e5f\u60c5\u6709\u53ef\u539f\uff0c\u6bd5\u7adf\u5df4\u897f\u73b0\u5728\u662f\u51ac\u5929\uff0c\u6e29\u5ea6\u53ea\u670920\u5ea6\u5de6\u53f3\uff0c\u5230\u8fd9\u4e48\u6e7f\u70ed\u7684\u4e2d\u56fd\u5357\u65b9\u786e\u5b9e\u5f88\u96be\u9002\u5e94\uff0c\u4f46\u4ece\u4e0d\u591a\u7684\u62ff\u7403\u4f20\u7403\u6765\u770b\uff0c\u6280\u672f\u5148\u4e0d\u8bf4\uff0c\u811a\u4e0b\u57fa\u672c\u529f\u5f88\u624e\u5b9e\uff0c\u5904\u7406\u7403\u4e0d\u8131\u6ce5\u5e26\u6c34\uff0c\u53ef\u80fd\u81ea\u5df1\u4e5f\u662f\u9996\u79c0\uff0c\u8eab\u4f53\u5fc3\u7406\u90fd\u4e0d\u5728\u6700\u4f73\u72b6\u6001\uff0c\u6ca1\u6709\u53d1\u6325\u51fa\u6765\uff0c\u800c\u4e14\u5c0f\u4f19\u5b50\u8fd8\u5e74\u8f7b\uff0c\u9700\u8981\u961f\u5185\u5927\u54e5\u53ee\u5631\u5f15\u5bfc\uff0c\u4e0d\u8bb0\u5f97\u5854\u5c14\u5fb7\u5229\u521a\u6765\u7684\u65f6\u5019\u561b\uff0c\u4e0d\u4e5f\u88ab\u55b7\u7684\u4e00\u65e0\u662f\u5904...\u591a\u7ed9\u4eba\u5bb6\u4e00\u70b9\u65f6\u95f4\uff0c\u6bd5\u7adf\u7b2c\u4e00\u6b21\u51fa\u56fd\u8e22\u7403\uff0c\u4eba\u751f\u5730\u4e0d\u719f\uff0c\u6162\u6162\u6765\uff0c\u6211\u770b\u597d\u4ed6...", "up": 119}, {"content": "\u683c\u5fb7\u65af\u8fd8\u4e0d\u5982\u897f\u585e\u5462?[xjbt]\u4eba\u897f\u585e\u8fd8\u4f1a\u8650\u8650\u83dc\u3002[\u52a9\u5a01]", "up": 12}, {"content": "\u6211\u9c81\u62ff\u5230\u5e73\u5c40\u53ef\u4ee5\u4e86\uff0c\u4eca\u5929\u4e0d\u5174\u594b\uff0c\u683c\u5fb7\u65af\u660e\u663e\u8fd8\u6ca1\u878d\u5165\uff0c\u4e0d\u7ba1\u8eab\u4f53\u8fd8\u662f\u7cbe\u795e\uff0c\u7ee7\u7eed\u52a0\u6cb9\u5427\uff0c\u522b\u6389\u961f\u3002\u3002\u53e6\u5916\u6709\u4e00\u6b21\u53cd\u51fb\u9c81\u80fd\u5148\u540e\u56db\u4eba\u88ab\u653e\u5012\uff0c\u88c1\u5224\u9ec4\u724c\u90fd\u4e0d\u7528\u8865\u7684\u5417\uff1f", "up": 11}], "4": [{"content": "\u683c\u5fb7\u65af\u770b\u6765\u5df2\u7ecf\u878d\u5165\u4e2d\u56fd\u8db3\u7403\u4e86\uff0c\u597d\u673a\u4f1a\u4e0d\u8fdb+\u62b1\u5934+\u644a\u624b+\u634b\u5934\u53d1", "up": 362}, {"content": "\u674e\u6307\u5bfc\uff1a\u76f8\u4fe1\u73b0\u5728\u7684\u7403\u5706\u513f\uff0c\u6728\u6709\u5fc5\u8981\u5192\u9669\u4e0a\u65b0\u5916\u63f4\uff0c\u90a3\u4e2a\uff0c\u683c\u5fb7\u65af\u542b\u662f\u5f97\u8ddf\u7403\u961f\u513f\u518d\u78e8\u5408\u78e8\u5408\uff0c\u8fd9\u573a\u8e22\u7684\u4e0d\u9519\uff0c\u961f\u5458\u513f\u8e22\u7684\u90fd\u4e0d\u5b6c[\u6342\u8138]", "up": 252}, {"content": "\u80fd\u5439\u4e00\u6ce2\u683c\u5fb7\u65af\u4e48\uff0c\u867d\u7136\u8fd8\u6ca1\u878d\u5165\u7403\u961f\uff0c\u4f46\u662f\u683c\u5fb7\u65af\u7684\u62ff\u7403\u548c\u4f20\u7403\u8ba9\u4eba\u611f\u89c9\u5f88\u6709\u60f3\u8c61\u529b\uff0c\u671f\u5f85\u683c\u5fb7\u65af\u52a0\u901f\u878d\u5165\u7403\u961f\u6218\u672f\uff0c\u62ff\u7403\u7684\u7b2c\u4e00\u65f6\u95f4\u5c31\u80fd\u60f3\u5230\u961f\u53cb\u7684\u4f4d\u7f6e\uff0c\u901a\u8fc7\u6bd4\u8d5b\u611f\u89c9\u674e\u6307\u5bfc\u8fd8\u6ca1\u6709\u5b8c\u5168\u7528\u597d\u5b83\u7684\u7279\u70b9\uff0c\u6709\u70b9\u8ba9\u4ed6\u65e0\u6240\u9002\u4ece\uff0c\u4e2a\u4eba\u611f\u89c9\u4ed6\u662f\u4e2a\u4f20\u7403\u4e0d\u9519\u7684\u7ec8\u7ed3\u8005\uff0c\u53ef\u4ee5\u53c2\u8003\u5965\u65af\u5361\u548c\u5e15\u8036\u7684\u7279\u70b9\uff0c\u5982\u679c\u8111\u5b50\u806a\u660e\u4e9b\u53ef\u80fd\u4f1a\u6210\u4e3a\u9c81\u80fd\u7684\u5361\u5361\uff0c\u4e2a\u4eba\u89c2\u70b9\uff0c\u4e0d\u559c\u52ff\u55b7", "up": 65}, {"content": "\u8d62\u7403\u4e86,\u4f69\u83b1\u8fdb\u7403\u5f88\u5f00\u5fc3,\u683c\u5fb7\u65af\u5f00\u80e1\u66f4\u5f00\u5fc3,\u4e3b\u8981\u7684\u662f\u611f\u89c9\u5168\u961f\u4e0a\u4e0b\u601d\u60f3\u9ad8\u5ea6\u7edf\u4e00,\u674e\u6307\u5bfc\u4e5f\u9547\u5f97\u4f4f\u66f4\u8863\u5ba4,\u7403\u5458\u5bb6\u5c5e\u7684\u5bb6\u5c5e\u90fd\u6765\u6367\u573a,\u961f\u5185\u6c1b\u56f4\u548c\u51dd\u805a\u529b\u5f88\u91cd\u8981!", "up": 59}, {"content": "\u771f\u7684\u670d\u4e86\u683c\u5fb7\u65af\u4e86\uff0c\u7a7a\u95e8\u90fd\u5c04\u4e0d\u8fdb\u3002\u3002\u3002\u3002\u3002\u3002", "up": 9}]};
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
