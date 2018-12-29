var data = {"person_name": "\u5218\u5f6c\u5f6c", "nicknames": "\u5218\u5f6c\u5f6c", "aspects": {"\u7403\u5458": 0.5004339064452857, "\u7a81\u7834": 0.4808668306867549, "\u8fdb\u653b": 0.6690016772498611, "\u6bd4\u8d5b": 0.5612116801832392, "\u4f20\u4e2d": 0.3869076889204902, "\u8e22\u7403": 0.7647955593755511, "\u9632\u5b88": 0.44571326762194974, "\u8d5b\u5b63": 0.6845368797579491, "\u5916\u63f4": 0.5573898599116858, "\u4f20\u7403": 0.4983387186532745}, "overall_heat": 219.0, "overall_polar": -0.048, "name": "93", "nationality": "\u4e2d\u56fd", "position": "\u4e2d\u573a", "goal": "0", "assist": "3", "team_name": "\u5c71\u4e1c\u9c81\u80fd\u6cf0\u5c71", "name_en": "Liu Binbin", "age": "25", "height": "172", "weight": "72"};
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
var topic_keywords = {"0": [{"name": "\u5218\u5f6c\u5f6c", "value": 0.046364027538726336}, {"name": "\u5434\u5174\u6db5", "value": 0.024849397590361446}, {"name": "\u9c81\u80fd", "value": 0.020546471600688468}, {"name": "\u4f69\u83b1", "value": 0.017319277108433735}, {"name": "\u4f20\u4e2d", "value": 0.014092082616179}, {"name": "\u901f\u5ea6", "value": 0.009789156626506023}, {"name": "\u4e00\u4e2a", "value": 0.008713425129087779}, {"name": "\uff01", "value": 0.008713425129087779}, {"name": "\u7a81\u7834", "value": 0.00656196213425129}, {"name": "\u5dee", "value": 0.00656196213425129}, {"name": "\u786e\u5b9e", "value": 0.00656196213425129}, {"name": "\u7403\u5458", "value": 0.00656196213425129}, {"name": "\u597d\u597d", "value": 0.00656196213425129}, {"name": "\u6700\u540e", "value": 0.005486230636833046}, {"name": "\u7b11", "value": 0.005486230636833046}, {"name": "\u4e0d\u884c", "value": 0.005486230636833046}, {"name": "\u54ed", "value": 0.005486230636833046}, {"name": "\u673a\u4f1a", "value": 0.005486230636833046}, {"name": "\uff1f", "value": 0.005486230636833046}, {"name": "\uff1b", "value": 0.005486230636833046}, {"name": "\u6bd4\u8d5b", "value": 0.004410499139414802}, {"name": "\u5de6\u8def", "value": 0.004410499139414802}, {"name": "\u518d", "value": 0.004410499139414802}, {"name": "\u597d", "value": 0.004410499139414802}, {"name": "\u5356", "value": 0.004410499139414802}, {"name": "\u91d1\u656c\u9053", "value": 0.004410499139414802}, {"name": "\u778e", "value": 0.004410499139414802}, {"name": "\u89c9\u5f97", "value": 0.004410499139414802}, {"name": "\u4e00\u70b9", "value": 0.004410499139414802}, {"name": "\u4f20\u7403", "value": 0.004410499139414802}], "1": [{"name": "\u5218\u5f6c\u5f6c", "value": 0.09977845944103612}, {"name": "\uff01", "value": 0.027351738241308796}, {"name": "\u5434\u5174\u6db5", "value": 0.027351738241308796}, {"name": "\uff1f", "value": 0.022239263803680985}, {"name": "\u8e22", "value": 0.015422631220177235}, {"name": "\u5e9f", "value": 0.014570552147239266}, {"name": "\u73b0\u5728", "value": 0.01116223585548739}, {"name": "\u8d8a", "value": 0.01031015678254942}, {"name": "\u611f\u89c9", "value": 0.007753919563735515}, {"name": "\u8e22\u7403", "value": 0.006901840490797546}, {"name": "\u88c1\u5224", "value": 0.0060497614178595775}, {"name": "\u7403", "value": 0.0060497614178595775}, {"name": "\u5f7b\u5e95", "value": 0.0060497614178595775}, {"name": "\u91d1\u5b50", "value": 0.0060497614178595775}, {"name": "\u6bd4\u8d5b", "value": 0.0060497614178595775}, {"name": "\u5f53\u5e74", "value": 0.005197682344921609}, {"name": "\u66ff\u8865", "value": 0.005197682344921609}, {"name": "\u5415\u5f81", "value": 0.005197682344921609}, {"name": "\u9c81\u80fd", "value": 0.005197682344921609}, {"name": "\u4e00\u4e2a", "value": 0.005197682344921609}, {"name": "\u5c0f", "value": 0.005197682344921609}, {"name": "\u91d1\u656c\u9053", "value": 0.005197682344921609}, {"name": "\u53ef\u60dc", "value": 0.0043456032719836404}, {"name": "\u52a8\u4f5c", "value": 0.0043456032719836404}, {"name": "\u6253", "value": 0.0043456032719836404}, {"name": "\u4e0d\u597d", "value": 0.0043456032719836404}, {"name": "\u4e24\u4e2a", "value": 0.0043456032719836404}, {"name": "\u60f3", "value": 0.0043456032719836404}, {"name": "\u597d", "value": 0.0034935241990456715}, {"name": "\u6ed1\u7a3d", "value": 0.0034935241990456715}], "2": [{"name": "\u5218\u5f6c\u5f6c", "value": 0.05076581027667984}, {"name": "\u9c81\u80fd", "value": 0.027297430830039528}, {"name": "\u5434\u5174\u6db5", "value": 0.014945652173913042}, {"name": "\u9632\u5b88", "value": 0.013710474308300394}, {"name": "\u611f\u89c9", "value": 0.01000494071146245}, {"name": "\u771f\u7684", "value": 0.01000494071146245}, {"name": "\u5e9f", "value": 0.008769762845849802}, {"name": "\u8e22", "value": 0.007534584980237153}, {"name": "\u4e0d\u884c", "value": 0.007534584980237153}, {"name": "\u6709\u70b9", "value": 0.007534584980237153}, {"name": "\u5916\u63f4", "value": 0.007534584980237153}, {"name": "\u540e\u536b", "value": 0.006299407114624505}, {"name": "\u8f6e\u4f11", "value": 0.006299407114624505}, {"name": "\u6253", "value": 0.005064229249011857}, {"name": "\u5bf9\u6297", "value": 0.005064229249011857}, {"name": "\u518d", "value": 0.005064229249011857}, {"name": "\u91d1\u5b50", "value": 0.005064229249011857}, {"name": "\u8d70", "value": 0.005064229249011857}, {"name": "\u5d14\u9e4f", "value": 0.005064229249011857}, {"name": "\u592a", "value": 0.005064229249011857}, {"name": "\u7559", "value": 0.005064229249011857}, {"name": "\u4f69\u83b1", "value": 0.005064229249011857}, {"name": "\u5e94\u8be5", "value": 0.005064229249011857}, {"name": "\u7403\u8ff7", "value": 0.005064229249011857}, {"name": "\u73b0\u5728", "value": 0.005064229249011857}, {"name": "\u738b\u5927\u96f7", "value": 0.005064229249011857}, {"name": "\u540e\u8170", "value": 0.005064229249011857}, {"name": "\u4e00\u4e2a", "value": 0.005064229249011857}, {"name": "\u5468\u6d77\u6ee8", "value": 0.005064229249011857}, {"name": "\u84bf\u4fca\u95f5", "value": 0.005064229249011857}], "3": [{"name": "\uff01", "value": 0.08063264117989521}, {"name": "\u9c81\u80fd", "value": 0.03502813894818553}, {"name": "\u5218\u5f6c\u5f6c", "value": 0.030176596157578114}, {"name": "\u7403\u5458", "value": 0.014651659227634388}, {"name": "\u5434\u5174\u6db5", "value": 0.01174073355326994}, {"name": "\u6052\u5927", "value": 0.010770424995148457}, {"name": "\u8e22", "value": 0.009800116437026975}, {"name": "\u4e2d\u56fd", "value": 0.008829807878905492}, {"name": "\u9752\u8bad", "value": 0.00785949932078401}, {"name": "\u597d", "value": 0.00785949932078401}, {"name": "\u73b0\u5728", "value": 0.00785949932078401}, {"name": "\u4eba", "value": 0.00785949932078401}, {"name": "\uff1f", "value": 0.00785949932078401}, {"name": "\u8db3\u534f", "value": 0.006889190762662527}, {"name": "\u4e0a\u6e2f", "value": 0.005918882204541044}, {"name": "\u5916\u63f4", "value": 0.005918882204541044}, {"name": "\u8fd9\u573a", "value": 0.005918882204541044}, {"name": "\u4e0d\u9519", "value": 0.005918882204541044}, {"name": "\u56fd\u5b89", "value": 0.005918882204541044}, {"name": "\u5e9f", "value": 0.005918882204541044}, {"name": "\u8d5b\u5b63", "value": 0.005918882204541044}, {"name": "\u8fd9\u79cd", "value": 0.0049485736464195615}, {"name": "\u653e", "value": 0.0049485736464195615}, {"name": "\u653f\u7b56", "value": 0.0049485736464195615}, {"name": "U23", "value": 0.0049485736464195615}, {"name": "\u52a0\u6cb9", "value": 0.0049485736464195615}, {"name": "\u6700\u597d", "value": 0.0049485736464195615}, {"name": "\u72b6\u6001", "value": 0.003978265088298079}, {"name": "\u4e00\u76f4", "value": 0.003978265088298079}, {"name": "\u60f3", "value": 0.003978265088298079}]};
var topic_summary = {"0": [{"content": "\u6709\u4e9b\u4eba\u6574\u5929\u5435\u5435\u7740\u4e0a\u5218\u5f6c\u5f6c\uff0c\u8bf4\u6559\u7ec3\u5e9f\u4eba\uff0c\u4e0d\u7ed9\u673a\u4f1a\uff0c\u5982\u613f\u4e86\uff1f\u4e0a\u4e86\uff0c\u7ed3\u679c\u5462\uff1f\u8981\u6210\u7ee9\u5c31\u522b\u778eBB\uff01\u6574\u5929\u4e0a\u8fd9\u4e2a\u4e0a\u90a3\u4e2a\u7684\uff0c\u53ef\u522b\u89c9\u7740\u81ea\u5df1\u63d0\u51fa\u70b9\u76f8\u5de6\u7684\u610f\u89c1\u5c31\u61c2\u7403\u4e86\uff0c\u5c31\u5389\u5bb3\u4e86\uff0c\u5176\u5b9e\u5c31\u662f\u5403\u9971\u6491\u5f97\uff5e", "up": 30}, {"content": "\u4f69\u83b1\u7684\u4f5c\u7528\uff0c\u4e0d\u4ec5\u4ec5\u662f\u8fdb\u7403\uff1b\u6ca1\u6709\u4f69\u83b1\uff0c\u518d\u725b\u903c\u7684\u5854\u5c14\u5fb7\u5229\uff0c\u4e5f\u53ea\u80fd\u53eb\u505a\u6c34\u5854\uff1b\u6ca1\u6709\u4f69\u83b1\uff0c\u9c81\u80fd\u7684\u91d1\u656c\u9053\u5218\u5f6c\u5f6c\u5434\u5174\u6db5\u8dd1\u518d\u5feb\uff0c\u4e5f\u662f\u778e****\u8dd1\uff1b\u6ca1\u6709\u4f69\u83b1\uff0c\u84bf\u4fca\u95f5\u53ea\u6709\u548c\u5bf9\u624b\u8fdb\u884c\u65e0\u4f11\u65e0\u6b62\u7684\u8089\u640f\u7f20\u6597\u3002\u4f69\u83b1\uff0c\u8ba9\u9c81\u80fd\u63d0\u5347\u4e86\u4e00\u4e2a\u6863\u6b21\u3002", "up": 28}, {"content": "\u6682\u4e14\u4e0d\u8bf4\u9ad8\u62c9\u7279\u8fdb\u7403\u662f\u5426\u8d8a\u4f4d\u3002\u6bd4\u8d5b\u6700\u540e\u9636\u6bb5\uff0c\u5218\u5f6c\u5f6c\u90a3\u4e2a\u6454\u7403\u52a8\u4f5c\uff0c\u6362\u505a\u6052\u5927\u7403\u5458\u7684\u8bdd\uff0c\u4f30\u8ba1\u53c8\u9ec4\u724c\u52a0\u8eab\u4e86\u2026\u2026", "up": 18}, {"content": "\u518d\u6b21\u4e0d\u660e\u767d\u5218\u5f6c\u5f6c\u4e3a\u4f55\u4e00\u76f4\u5728\u56fd\u5bb6\u961f\u6ca1\u53d7\u5230\u91cd\u7528\uff0c\u8fd9\u4e2a\u52a9\u653b\u5f88\u597d\u5730\u5c55\u73b0\u4e86\u4ed6\u7684\u7279\u70b9\uff0c\u901f\u5ea6\u8d85\u5feb\uff0c\u800c\u4e14\u5feb\u4e4b\u4f59\u5341\u5206\u7075\u6d3b\uff0c\u4f1a\u89c2\u5bdf\u961f\u53cb\u4f4d\u7f6e\u5047\u52a8\u4f5c\u770b\u51c6\u673a\u4f1a\u518d\u4f20\u4e2d\uff0c\u8bf4\u660e\u7403\u5546\u5f88\u9ad8\uff0c\u800c\u4e14\u90fd\u662f\u4e0b\u534a\u573a\u66ff\u8865\u4e0a\u573a\u6548\u679c\u66f4\u4f73\u2026\u9c81\u80fd\u51e0\u5339\u5feb\u9a6c\u5434\u5174\u6db5\u3001\u5f20\u9a70\u3001\u5218\u5f6c\u5f6c\u3001\u91d1\u656c\u9053\u914d\u5408\u597d\u610f\u5927\u5229\u5927\u70ae\u548c\u6c34\u5854\u7684\u8bdd\uff0c\u4e0d\u5355\u53ea\u8fdb\u653b\u706b\u529b\u731b\u8fd8\u66f4\u5177\u89c2\u8d4f\u6027", "up": 16}, {"content": "\u80fd\u4e0d\u80fd\u7528\u5434\u5174\u6db5\u2795\u5218\u5f6c\u5f6c\u6362\u5bf9\u9762\u7684\u66f9\u8d5f\u5b9a\u554a", "up": 10}], "1": [{"content": "\u5218\u5f6c\u5f6c\u5df2\u7ecf\u6cef\u7136\u4f17\u4eba\u77e3", "up": 987}, {"content": "\u5434\u5174\u6db5\u548c\u5218\u5f6c\u5f6c\u9000\u6b65\u592a\u5feb\u4e86", "up": 708}, {"content": "\u90dc\u6797\u5c31\u5403\u724c\uff0c\u5218\u5f6c\u5f6c\u5c31\u6ca1\u6709\uff01\u6234\u7433\u65e9\u8be5\u4e0b\u53bb\u4e86\u5427\uff0c\u738b\u54f2\u771f\u9ed1\uff01", "up": 528}, {"content": "\u5218\u5f6c\u5f6c\u611f\u89c9\u6cef\u7136\u4f17\u4eba\u77e3\u4e86", "up": 424}, {"content": "\u5218\u5f6c\u5f6c\u8fdb\u4e0d\u4e86\u66ff\u8865\u540d\u5355\uff0c\u5434\u5174\u6db5\u8e22\u66ff\u8865\u4e0d\u662f\u6ca1\u9053\u7406\u3002 \u4e0a\u8d5b\u5b63\u540e\u534a\u6bb5\u4e24\u4e2a\u8fb9\u8def\u5feb\u9a6c\u7a81\u7136\u54d1\u706b\uff0c\u8e22\u7403\u6ca1\u4e86\u8111\u5b50\u662f\u9c81\u80fd\u6389\u961f\u7684\u4e00\u4e2a\u91cd\u8981\u539f\u56e0\u5427", "up": 263}], "2": [{"content": "\u4f69\u6765\u548c\u84bf\u4fca\u95f5\u597d\u5f3a\uff0c\u5218\u5f6c\u5f6c\u548c\u5468\u6d77\u6ee8\u5df2\u7ecf\u51c9\u4e86", "up": 324}, {"content": "\u9c81\u80fd\u4e70\u4eba\u5427 \u6ca1\u4eba\u7528\u4e86 \u5218\u5f6c\u5f6c\u5e9f\u4e86", "up": 151}, {"content": "\u611f\u89c9\u5218\u5f6c\u5f6c\u771f\u7684\u6ca1\u6709\u51e0\u5e74\u524d\u7684\u7075\u6027\u4e86\uff0c\u738b\u5927\u96f7\u7238\u7238\u725b\u903c\uff0c\u5e0c\u671b\u9c81\u80fd\u80fd\u627e\u56de\u72b6\u6001\uff0c\u5bf9\u5f97\u8d77\u81ea\u5df1\uff0c\u5bf9\u5f97\u8d77\u7403\u8ff7", "up": 145}, {"content": "\u4f69\u5ac2\u4e0d\u5728\u5bb6\uff0c\u4f69\u83b1\u54d7\u54d7\u54d7\u3002\u5854\u795e\u5de7\u4e32\u8054\uff0c\u70b9\u7403\u8499\u7740\u53d1\u3002\u5218\u5f6c\u5f6c\uff0c \u8be5\u9192\u5566\u3002\u5434\u5174\u6db5\uff0c\u66f4\u731b\u4e86\u3002\u770b\u7740\u5d14\u9e4f\u8fd8\u6709\u5468\u6d77\u6ee8\uff0c\u54ce\uff0c\u6211\u7684\u9752\u6625\u98de\u8d70\u4e86\u3002", "up": 84}, {"content": "\u660e\u5e74\u8981\u662f\u674e\u9704\u9e4f\u53bb\u56fd\u5bb6\u96c6\u8bad\u961f\uff0c\u9c81\u80fd\u8fd8\u628a\u9a6c\u52a0\u7279\u8bf7\u6765\u5427\uff0c\u4e09\u5e74\u65f6\u95f4\u628a\u9c81\u80fd\u7684\u57fa\u7840\u6253\u7262\u592f\u5b9e\u3002\u5916\u63f4\u7559\u5409\u5c14\u3001\u4f69\u83b1\uff0c\u628a\u683c\u5fb7\u65af\u5916\u79df\u51fa\u53bb\u7ec3\u7ea7\uff0c\u627e\u4e2a\u901f\u5ea6\u5feb\u7684\u5df4\u897f\u524d\u950bor\u975e\u6d32\u7684\u9ed1\u53c8\u786c\uff0c\u518d\u627e\u4e2a\u4e2d\u573a\u725b\u903c\u5916\u63f4\uff0c\u5d14\u9e4f\u3001\u5468\u6d77\u6ee8\u3001\u5218\u5f6c\u5f6c\u3001\u5434\u5174\u6db5\u3001\u6210\u6e90\u3001\u674e\u5fae\uff0c\u8be5\u9000\u4e8c\u7ebf\u9000\u4e8c\u7ebf\uff0c\u8be5\u5916\u79df\u7684\u5916\u79df\uff0c\u817e\u51fa\u540d\u989d\u591a\u63d0\u62d4\u4e9b\u5e74\u8f7b\u7684\u4e0a\u6765\u3002\u8fd9\u4e48\u5730\u641e\u4e09\u5e74\uff0c\u9c81\u80fd\u5927\u4e1a\u53ef\u6210\u3002 \u54c8\u54c8 11.30\u8db3\u534f\u676f\u5fc5\u80dc\uff01", "up": 74}], "3": [{"content": "\u9c81\u80fd\u5df2\u7ecf2:0\u7684\u60c5\u51b5\u4e0b\uff0c88\u5206\u949f\u7684\u65f6\u5019\u5218\u5f6c\u5f6c\u8ddf\u5854\u5c14\u5fb7\u5229\u4e24\u4e2a\u4eba\u8fd8\u79ef\u6781\u524d\u573a\u7d27\u903c\uff0c\u6700\u7ec8\u5b8c\u6210\u4e86\u62a2\u65ad\u3002\u60f3\u4e00\u60f3\u5f53\u65f6\u7684\u6563\u6b65\u961f\uff0c\u518d\u770b\u770b\u8fd9\u4e2a\u8d5b\u5b63\u7684\u9c81\u80fd\uff0c\u771f\u7684\u611f\u5230\u5f00\u5fc3\u3002\u5e0c\u671b\u9c81\u80fd\u8fd9\u8d5b\u5b63\u53ef\u4ee5\u53d6\u5f97\u597d\u6210\u7ee9\uff0c\u529f\u592b\u4e0d\u8d1f\u6709\u5fc3\u4eba\uff0c\u9c81\u80fd\u52a0\u6cb9\uff01\uff01\uff01", "up": 740}, {"content": "\u4e8b\u5b9e\u8bc1\u660e\uff0c\u5728\u9c81\u80fd\uff0c\u4e0d\u4f1a\u9632\u5b88\u4f60\u6839\u672c\u8e22\u4e0d\u4e0a\u7403\uff0c\u5305\u62ec\u524d\u950b\uff0c\u5218\u5f6c\u5f6c\u8981\u52a0\u6cb9\u4e86\u3002", "up": 214}, {"content": "\u90d1\u94ee\u6ca1\u6709\u4e86\u521a\u51fa\u9053\u65f6\u751f\u9f99\u6d3b\u864e\u7684\u6837\u5b50 \u5434\u5174\u6db5 \u5218\u5f6c\u5f6c\u51fa\u4e8e\u62a5\u5e9f\u72b6\u6001 \u84bf\u961f\u548c\u59da\u5747\u665f\u4e2d\u89c4\u4e2d\u77e9\u7684\u5b8c\u6210\u6bcf\u4e00\u573a\u6bd4\u8d5b \u8001\u5854\u65f6\u7075\u65f6\u4e0d\u7075 \u4f69\u83b1\u7ecf\u5e38\u5fd8\u8bb0\u5e26\u5c04\u95e8\u9774 U23\u4e5f\u53ea\u662f\u5f62\u52bf\u4e3b\u4e49 \u53ea\u6709\u5927\u96f7 \u5409\u5c14 \u6234\u8001\u677f \u91d1\u656c\u9053\u770b\u8d77\u6765\u8ba9\u4eba\u653e\u5fc3 \u5f15\u4ee5\u4e3a\u50b2\u7684\u9752\u8bad\u54ea\u53bb\u4e86\uff1f\u66fe\u51e0\u4f55\u65f6\u79f0\u9738\u4e2d\u8d85\u7684\u6a58\u7ea2\u8272\u98ce\u66b4\u5462\uff1f\u771f\u5fc3\u5e0c\u671b\u6559\u6388\u80fd\u6765 \u63d0\u62d4\u4e00\u6279\u65b0\u4eba\u6765\u6362\u6389\u5931\u53bb\u51a0\u519b\u5fc3\u7684\u4e00\u4e9b\u9c81\u80fd\u7403\u5458", "up": 11}, {"content": "\u52a0\u6cb9\uff0c\u59da\u5747\u665f\u3002\u52a0\u6cb9\uff0c\u5218\u5f6c\u5f6c", "up": 9}, {"content": "\u6211\u8bf4\u4e86\uff01\u6052\u5927\u593a\u51a0\u662f\u56e0\u4e3a\u4e2d\u56fd\u8db3\u534f\u9700\u8981\u6052\u5927\u7ed9\u4ed6\u4eec\u906e\u4e11\uff01\u63a9\u76d6\u4ed6\u4eec\u7684\u8150\u8d25\u9f8c\u9f8a\u65e0\u80fd\uff0c\u4e5f\u5c31\u662f\u4e0d\u662f\u6052\u5927\u5c31\u6bd4\u4e0a\u6e2f\u9c81\u80fd\u56fd\u5b89\u5b9e\u529b\u66f4\u5f3a\uff0c\u662f\u6052\u5927\u6bd4\u4e0a\u6e2f\u56fd\u5b89\u9c81\u80fd\u5728\u8db3\u534f\u5173\u7cfb\u66f4\u786c\uff0c\u660e\u767d\u8fd9\u70b9\u5c31\u884c\uff01\u8bf4\u5b9e\u8bdd\uff01\u6052\u5927\u62ff\u591a\u5c11\u51a0\u519b\u961f\u4e2d\u56fd\u8db3\u7403\u90fd\u6ca1\u6709\u7528\uff01\u5c31\u662f\u4e2d\u56fd\u8db3\u7403\u5728\u81ea\u6b3a\u6b3a\u4eba\u63a9\u8033\u76d7\u94c3\u81ea\u5df1\u9a97\u81ea\u5df1\uff01\u6052\u5927\u96c6\u4e2d\u4e86\u5168\u4e2d\u56fd\u6700\u597d\u7684\u7403\u5458\uff01\u8fd8\u662f\u4e25\u91cd\u4f9d\u8d56\u5916\u63f4\uff01\u800c\u4e14\u76f4\u63a5\u5bfc\u81f4\u8fde\u9c81\u80fd\u4e0a\u6e2f\u90fd\u4e25\u91cd\u4f9d\u8d56\u5916\u63f4\uff01\u66f4\u522b\u8bf4\u56fd\u5b89\uff01\u770b\u770b\u5434\u5174\u6db5\u5218\u5f6c\u5f6c\uff01\u5c31\u662f\u9c81\u80fd\u90fd\u4e0d\u5728\u4fe1\u4efb\u81ea\u5df1\u7684\u9752\u8bad\uff01\u66f4\u522b\u8bf4\u5176\u4ed6\u4ff1\u4e50\u90e8\uff01\u5176\u5b9e\u6211\u5e76\u4e0d\u5728\u610f\u8c01\u62ff\u51a0\u519b\uff01\u5173\u952e\u662f\u6709\u4e9b\u4ff1\u4e50\u90e8\u50cf\u9c81\u80fd\u5fc5\u987b\u575a\u6301\u81ea\u5df1\u7684\u7406\u5ff5\uff0c\u6bd4\u5982\u9c81\u80fd\u5176\u5b9e\u4e00\u76f4\u575a\u6301\u9760\u81ea\u5df1\u7684\u9752\u8bad\u7403\u5458\u4f5c\u4e3a\u7403\u961f\u5efa\u961f\u57fa\u7840\uff0c\u7403\u961f\u4e2d\u573a\u6838\u5fc3\u4e00\u76f4\u662f\u56fd\u5185\u7403\u5458\uff01\u8fd9\u70b9\u5176\u5b9e\u9c81\u80fd\u524d\u51e0\u5e74\u7279\u522b\u662f\u6709\u8499\u8482\u7565\u65f6\u662f\u9519\u7684\uff0c\u81f3\u4e8e\u5c04\u624b\uff01\u8fd9\u5176\u5b9e\u4e00\u76f4\u662f\u9c81\u80fd\u7684\u4f18\u52bf\uff01\u4e0d\u8fc7\u663e\u7136\u6052\u5927\u7684\u91d1\u5143\u8db3\u7403\u8ba9\u9c81\u80fd\u5f88\u96be\u8d70\u673a\u4f1a\u57f9\u517b\u81ea\u5df1\u7684\u56fd\u4ea7\u5c04\u624b\u4e86\uff01", "up": 9}]};
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
