var data = {"person_name": "\u987e\u64cd", "nicknames": "\u987e\u64cd\u3001\u5efa\u4e1a5\u53f7", "aspects": {"\u7403\u8ff7": 0.3407737875514197, "\u9ec4\u724c": 0.3550761866205588, "\u7403\u5458": 0.17131866293738685, "\u6bd4\u8d5b": 0.36642394043621734, "\u7ea2\u724c": 0.5839878970314554, "\u72af\u89c4": 0.3913399791214402, "\u8e22\u7403": 0.5243459978923756, "\u8db3\u7403": 0.43461990132239026, "\u8fdb\u7403": 0.11086499753062137, "\u9632\u5b88": 0.40376503274265396}, "overall_heat": 189.0, "overall_polar": -0.468, "name": "474", "nationality": "\u4e2d\u56fd", "position": "\u540e\u536b", "goal": "0", "assist": "0", "team_name": "\u6cb3\u5357\u5efa\u4e1a", "name_en": "Gu Cao", "age": "30", "height": "182", "weight": "75"};
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
var topic_keywords = {"0": [{"name": "\u987e\u64cd", "value": 0.058674933976346315}, {"name": "\uff1f", "value": 0.035710184866230336}, {"name": "\u52a8\u4f5c", "value": 0.01619014812263176}, {"name": "\u4e00\u4e0b", "value": 0.01619014812263176}, {"name": "\u5361\u62c9\u65af\u79d1", "value": 0.013893673211620163}, {"name": "\u9ec4\u724c", "value": 0.012745435756114365}, {"name": "\u9ad8\u62c9\u7279", "value": 0.011597198300608565}, {"name": "\u7403\u5458", "value": 0.011597198300608565}, {"name": "\u4eba", "value": 0.010448960845102767}, {"name": "\u5e94\u8be5", "value": 0.010448960845102767}, {"name": "\u6ed1\u7a3d", "value": 0.010448960845102767}, {"name": "\u88c1\u5224", "value": 0.010448960845102767}, {"name": "\u5efa\u4e1a", "value": 0.010448960845102767}, {"name": "VAR", "value": 0.010448960845102767}, {"name": "\uff01", "value": 0.010448960845102767}, {"name": "\u7403\u8ff7", "value": 0.009300723389596968}, {"name": "\u60f3", "value": 0.009300723389596968}, {"name": "\u7ea2\u724c", "value": 0.009300723389596968}, {"name": "\u95ee\u9898", "value": 0.009300723389596968}, {"name": "\u4e00\u65b9", "value": 0.00815248593409117}, {"name": "\u810f", "value": 0.007004248478585371}, {"name": "\u9a82\u9a82\u54a7\u54a7", "value": 0.007004248478585371}, {"name": "\u7591\u4f3c", "value": 0.007004248478585371}, {"name": "\u90a3\u4e0b", "value": 0.0058560110230795725}, {"name": "\u674e\u5b66\u9e4f", "value": 0.0058560110230795725}, {"name": "\u63a8", "value": 0.0058560110230795725}, {"name": "\u91cc\u9762", "value": 0.004707773567573774}, {"name": "\u8fd8\u8981", "value": 0.004707773567573774}, {"name": "\u62c9", "value": 0.004707773567573774}, {"name": "\u5148", "value": 0.004707773567573774}], "1": [{"name": "\u987e\u64cd", "value": 0.08161602049132612}, {"name": "\uff1f", "value": 0.025730585632786126}, {"name": "\uff01", "value": 0.024566305739899874}, {"name": "\u987e\u8d85", "value": 0.014087786703923624}, {"name": "\u961f\u957f", "value": 0.012923506811037374}, {"name": "\u4eba", "value": 0.011759226918151124}, {"name": "\u5efa\u4e1a", "value": 0.011759226918151124}, {"name": "\u540d\u5b57", "value": 0.009430667132378624}, {"name": "\u8fd9\u79cd", "value": 0.009430667132378624}, {"name": "\u5361\u62c9\u65af\u79d1", "value": 0.009430667132378624}, {"name": "\u4e0b", "value": 0.009430667132378624}, {"name": "\u8e22\u7403", "value": 0.009430667132378624}, {"name": "\u9ed1\u811a", "value": 0.007102107346606124}, {"name": "\u810f", "value": 0.007102107346606124}, {"name": "\u53f7", "value": 0.007102107346606124}, {"name": "\u9a82", "value": 0.005937827453719874}, {"name": "\u6bd4\u8d5b", "value": 0.005937827453719874}, {"name": "\u88c1\u5224", "value": 0.005937827453719874}, {"name": "\u771f\u7684", "value": 0.005937827453719874}, {"name": "\u4e00\u573a", "value": 0.005937827453719874}, {"name": "\u5bf9\u5f97\u8d77", "value": 0.005937827453719874}, {"name": "\uff1b", "value": 0.005937827453719874}, {"name": "\u82cf\u5b81", "value": 0.004773547560833624}, {"name": "\u76f4\u63a5", "value": 0.004773547560833624}, {"name": "\u662f\u4e0d\u662f", "value": 0.004773547560833624}, {"name": "\u771f", "value": 0.004773547560833624}, {"name": "\u6cb3\u5357", "value": 0.004773547560833624}, {"name": "\u786e\u5b9e", "value": 0.004773547560833624}, {"name": "\u91cc\u5361\u591a", "value": 0.004773547560833624}, {"name": "\u611f\u89c9", "value": 0.004773547560833624}], "2": [{"name": "\u987e\u64cd", "value": 0.05964336954293913}, {"name": "\uff1f", "value": 0.01250256200040992}, {"name": "\u7403\u5458", "value": 0.010452961672473867}, {"name": "\u89e3\u8bf4", "value": 0.010452961672473867}, {"name": "\u4eba", "value": 0.010452961672473867}, {"name": "\u770b\u770b", "value": 0.008403361344537815}, {"name": "\u597d", "value": 0.008403361344537815}, {"name": "\u5361\u62c9\u65af\u79d1", "value": 0.008403361344537815}, {"name": "\u4e2d\u8d85", "value": 0.006353761016601763}, {"name": "\u5bf9\u65b9", "value": 0.006353761016601763}, {"name": "\u5730\u7403", "value": 0.006353761016601763}, {"name": "\u770b\u89c1", "value": 0.006353761016601763}, {"name": "\u7eb9", "value": 0.006353761016601763}, {"name": "\u8001\u5e08", "value": 0.006353761016601763}, {"name": "\u8bf4\u8bdd", "value": 0.006353761016601763}, {"name": "\u8e39", "value": 0.006353761016601763}, {"name": "\ud83d\udc4f", "value": 0.006353761016601763}, {"name": "\u9ec4\u724c", "value": 0.006353761016601763}, {"name": "\u4e00\u811a", "value": 0.006353761016601763}, {"name": "\u7279\u8c22\u62c9", "value": 0.004304160688665711}, {"name": "\u6bcf\u4e2a", "value": 0.004304160688665711}, {"name": "\u813e\u6c14", "value": 0.004304160688665711}, {"name": "\u51e0\u4e2a", "value": 0.004304160688665711}, {"name": "\u4e00\u76f4", "value": 0.004304160688665711}, {"name": "\u767b\u5df4\u5df4", "value": 0.004304160688665711}, {"name": "\u4e1c\u897f", "value": 0.004304160688665711}, {"name": "\u5367\u69fd", "value": 0.004304160688665711}, {"name": "\u540e", "value": 0.004304160688665711}, {"name": "\u6bd4\u8d5b", "value": 0.004304160688665711}, {"name": "\u5929\u4ea6\u8001", "value": 0.004304160688665711}], "3": [{"name": "\u987e\u64cd", "value": 0.06800824342344527}, {"name": "\uff01", "value": 0.026791126197114806}, {"name": "\uff1f", "value": 0.01951751727482119}, {"name": "\u5efa\u4e1a", "value": 0.01830524912110559}, {"name": "\u4eba", "value": 0.013456176506243181}, {"name": "\u813e\u6c14", "value": 0.011031640198811978}, {"name": "\u7403\u8ff7", "value": 0.011031640198811978}, {"name": "\u597d", "value": 0.011031640198811978}, {"name": "\u505a", "value": 0.008607103891380773}, {"name": "\u9632\u5b88", "value": 0.008607103891380773}, {"name": "\u8e22", "value": 0.008607103891380773}, {"name": "\u771f\u7684", "value": 0.007394835737665171}, {"name": "\u5468\u633a", "value": 0.007394835737665171}, {"name": "\u52a8\u4f5c", "value": 0.007394835737665171}, {"name": "\u7ea2\u724c", "value": 0.007394835737665171}, {"name": "\u961f\u957f", "value": 0.007394835737665171}, {"name": "\u5df4\u7d22", "value": 0.006182567583949569}, {"name": "\u4ee5\u540e", "value": 0.006182567583949569}, {"name": "\u771f", "value": 0.006182567583949569}, {"name": "\u7403\u961f", "value": 0.006182567583949569}, {"name": "\u7d20\u8d28", "value": 0.006182567583949569}, {"name": "\u611f\u89c9", "value": 0.006182567583949569}, {"name": "\u6bd4\u8d5b", "value": 0.0049702994302339674}, {"name": "\u77e5\u9053", "value": 0.0049702994302339674}, {"name": "\u4f0a\u6c83", "value": 0.0049702994302339674}, {"name": "\u88c1\u5224", "value": 0.0049702994302339674}, {"name": "\u7403\u5458", "value": 0.0049702994302339674}, {"name": "\u7403", "value": 0.0049702994302339674}, {"name": "\u72af\u89c4", "value": 0.0049702994302339674}, {"name": "\u4e0d\u9519", "value": 0.0049702994302339674}]};
var topic_summary = {"0": [{"content": "\u987e\u64cd\uff1a\u9ad8\u62c9\u7279\u4f60\u90fd\u8fdb\u7403\u4e86\u8fd8\u90a3\u4e48\u62fc\u547d\u5e72\u561b \u8d70\u5f00\u51fa\u53bb \u5509\u5440\uff01\u4f60\u8fd9\u5c0f\u5b50\u4e0d\u670d\u662f\u5427\u6211\u518d\u63a8\u4f60\u4e00\u4e0b\u53c8\u600e\u4e86[\u6d41\u6c57][\u6d41\u6c57]", "up": 203}, {"content": "\u90a3\u72af\u89c4\u7684\u987e\u64cd S B \u4f60\u5728\u5361\u62c9\u65af\u79d1\u9762\u524d\u5c41\u90fd\u4e0d\u662f", "up": 69}, {"content": "\u810f B\u987e\u64cd", "up": 57}, {"content": "\u987e\u64cd\u771fsb\u554a\uff0c\u88c1\u5224\u4e5f\u8f6f\uff0c\u6545\u610f\u649e\u88c1\u5224\uff0c\u653e\u56fd\u5916\u7edd\u58c1\u7ea2\u724c", "up": 21}, {"content": "\u672c\u8f6e\u4e2d\u8d85\u770b\u70b9\uff1aVAR\u4e5f\u770b\u5fc3\u60c5\uff01\u674e\u5b66\u9e4f[\u6ed1\u7a3d]\uff0c\u4e70\u63d0\u6c5f[\u6ed1\u7a3d]\uff0c\u987e\u64cd[\u6ed1\u7a3d]", "up": 12}], "1": [{"content": "\u6cb3\u5357\u76845\u53f7\u961f\u957f\u987e\u64cd\u4e00\u76f4\u5728\u5bf9\u5361\u62c9\u65af\u79d1\u4e0b\u9ed1\u811a\u554a", "up": 1003}, {"content": "5\u53f7\u987e\u64cd \u4e0d\u81ca\u4e48 \u4e0b\u9ed1\u811a\u8fd8\u7279\u4e48\u6709\u7406\u4e86 \u60ef\u7684\u6bdb\u75c5", "up": 746}, {"content": "\u987e\u64cd\u4f60\u9664\u4e86\u8981\u7ed9\u674e\u5b66\u9e4f\u548c\u9ad8\u62c9\u7279\u9053\u6b49\u5916\u8fd8\u8981\u7ed9\u987e\u8d85\u9053\u6b49\uff0c\u56e0\u4e3a\u987e\u8d85\u66ff\u4f60\u6328\u4e86\u4e0d\u5c11\u9a82\uff0c\u771f\u8eba\u7740\u4e5f\u4e2d\u67aa\u2026\u2026", "up": 675}, {"content": "\u8fd8\u771f\u7684\u53eb\u987e\u64cd\u554a \u6211\u4ee5\u4e3a\u662f\u987e\u8d85\u5462 \u4e0b\u9ed1\u811a\u7684\u672c\u4e8b\u4e5f\u5bf9\u5f97\u8d77\u8fd9\u4e2a\u540d\u5b57", "up": 284}, {"content": "\u672c\u573a\u6700\u4f73\uff0c\u7b2c\u4e00\u5434\u9f91\u6251\u70b9\u7403\uff0c\u7b2c\u4e8c\u987e\u64cd\u95e8\u7ebf\u6551\u9669\uff0c\u7b2c\u4e09\u95e8\u67f1\u53ef\u4ee5\u4e0a\u7206\u7b11\u8db3\u7403\uff0c\u7b2c\u56db\u91cc\u5361\u591a\u9690\u8eab\u6885\u5f00\u4e8c\u5ea6\u3002\u540c\u610f\u6211\u7684\u89c2\u70b9\u7ed9\u4e2a\u5927\u62c7\u6307\u8c22\u8c22\uff01", "up": 219}], "2": [{"content": "\u4e0d\u662f\u5d07\u6d0b\u5a9a\u5916\uff0c\u4f46\u770b\u89c1\u6162\u955c\u91cd\u653e\u987e\u64cd\u4eae\u978b\u5e95\u4e00\u811a\u8e39\u5230\u5361\u62c9\u65af\u79d1\u5c0f\u817f\u4e0a\uff0c\u5e78\u4e8f\u6709\u62a4\u817f\u677f\uff0c\u88c1\u5224\u7ed9\u4e86\u9ec4\u724c\u8fd9\u53ae\u5c45\u7136\u8dd1\u5230\u5361\u62c9\u65af\u79d1\u8ddf\u524d\u624b\u6307\u5bf9\u65b9\uff0c\u6211****\uff0c\u8fd8\u6076\u4eba\u5148\u544a\u72b6\uff0c\u4e22\u4e0d\u4e22\u8138\uff1f", "up": 141}, {"content": "\u987e\u64cd\uff1a\u4ec0\u4e48\uff0c\u4e2d\u8d85\u56db\u5927\u6076\u4eba\u8001\u4e86\uff1f\u6211\u987e\u67d0\u4eba\u6765\u4e5f", "up": 139}, {"content": "\u987e\u64cd \u540d\u8d77\u7684\u5c31\u6b20\u64cd \u771f\u628a\u81ea\u5df1\u5f53\u56de\u4e8b\u4e86", "up": 67}, {"content": "\u987e\u64cd\u4e00\u76f4\u90fd\u5f88\u810f", "up": 60}, {"content": "\u5929\u82e5\u6709\u60c5\u5929\u4ea6\u8001\uff0c\u770b\u89c1\u987e\u64cd\u6765\u4e00\u811a\uff01", "up": 31}], "3": [{"content": "\u6cb3\u5357\u8fd9\u4e2a\u987e\u64cd\u662f\u6765\u641e\u7b11\u7684\u5427\uff0c\u81ea\u5df1\u72af\u89c4\uff0c\u8fd8\u5728\u90a3\u9a82\u522b\u4eba[\u5fae\u7b11][\u518d\u89c1]", "up": 927}, {"content": "\u6211\u5c31\u770b\u770b\u6709\u591a\u5c11\u4eba\u6765\u9a82\u987e\u64cd\u7684\uff0c\u7403\u6280\u5dee\u813e\u6c14\u5927\uff0c\u8fd9\u8d27\u662f\u600e\u4e48\u5f53\u4e0a\u961f\u957f\u7684", "up": 407}, {"content": "\u8fd9\u573a\u987e\u64cd\u771f\u810f\uff0c\u975e\u8981\u6765\u90a3\u4e00\u4e0b\uff0c\u6211\u4eec\u575a\u51b3\u62b5\u5236\u8fd9\u79cd\u7403\u573a\u66b4\u529b\uff0c\u7403\u573a\u6d41\u6c13\uff01\uff01\uff01", "up": 393}, {"content": "\u4e2d\u56fd\u6709\u987e\u64cd\u8fd9\u6837\u7403\u5458\u4e0d\u5e26\u597d\u7684\uff0c\u7403\u6280\u4e0d\u884c\uff0c\u6bdb\u75c5\u4e00\u8eab\uff01", "up": 349}, {"content": "\u90fd\u4e0d\u77e5\u9053\u5efa\u4e1a5\u53f7\u5728\u5e72\u561b\uff0c\u6280\u672f\u6ca1\u591a\u5c11\uff0c\u813e\u6c14\u5012\u662f\u5927\u5230\u5929\u4e0a\u53bb\u4e86", "up": 153}]};
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
