var data = {"person_name": "\u624e\u54c8\u7ef4", "nicknames": "\u624e\u54c8\u7ef4\u3001\u624e\u7403\u738b", "aspects": {"\u8fdb\u7403": 0.5343122599271268, "\u70b9\u7403": 0.3178029302351813, "\u6bd4\u8d5b": 1.0, "\u91d1\u9774": 0.8369821134556188, "\u8d5b\u5b63": 0.6507701522859733, "\u7403\u5458": 0.5432623095706772, "\u9632\u5b88": 0.6207867331322835, "\u5916\u63f4": 0.6329820019033219, "\u5c04\u95e8": 0.5361707671413668, "\u4f20\u4e2d": 0.44214950129249464}, "overall_heat": 294.0, "overall_polar": 0.731, "name": "124", "nationality": "\u4ee5\u8272\u5217", "position": "\u524d\u950b", "goal": "19", "assist": "8", "team_name": "\u5e7f\u5dde\u5bcc\u529b", "name_en": "Eran Zahavi", "age": "31", "height": "180", "weight": "80"};
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
var topic_keywords = {"0": [{"name": "\u624e\u54c8\u7ef4", "value": 0.05335551858014421}, {"name": "\uff01", "value": 0.03338879645036051}, {"name": "\u624e\u7403\u738b", "value": 0.024514697726012204}, {"name": "\uff1f", "value": 0.01785912368275097}, {"name": "\u6253", "value": 0.01674986134220743}, {"name": "\u6052\u5927", "value": 0.013422074320576816}, {"name": "\u70b9\u7403", "value": 0.013422074320576816}, {"name": "\u9c81\u80fd", "value": 0.0100942872989462}, {"name": "\u6251", "value": 0.0100942872989462}, {"name": "MVP", "value": 0.008985024958402662}, {"name": "\u5bcc\u529b", "value": 0.008985024958402662}, {"name": "\u8fd9\u573a", "value": 0.008985024958402662}, {"name": "\u7403", "value": 0.007875762617859123}, {"name": "\u8fdb\u7403", "value": 0.0067665002773155845}, {"name": "\u771f\u7684", "value": 0.0067665002773155845}, {"name": "\u963f\u5170", "value": 0.0067665002773155845}, {"name": "\u5367\u5e95", "value": 0.0067665002773155845}, {"name": "\u9632\u5b88", "value": 0.0067665002773155845}, {"name": "\u7a0b\u6708\u78ca", "value": 0.005657237936772046}, {"name": "\u5c04\u672f", "value": 0.005657237936772046}, {"name": "\u540e\u9762", "value": 0.005657237936772046}, {"name": "\u9ad8\u62c9\u7279", "value": 0.005657237936772046}, {"name": "\u5965\u65af\u5361", "value": 0.004547975596228508}, {"name": "\u53f2\u8bd7", "value": 0.004547975596228508}, {"name": "\u5c04\u95e8", "value": 0.004547975596228508}, {"name": "\u4eca\u5929", "value": 0.004547975596228508}, {"name": "\u7ea7", "value": 0.004547975596228508}, {"name": "\uff1b", "value": 0.004547975596228508}, {"name": "\u72b6\u6001", "value": 0.004547975596228508}, {"name": "\u53d1\u6325", "value": 0.004547975596228508}], "1": [{"name": "\u624e\u54c8\u7ef4", "value": 0.07391124014931563}, {"name": "\uff01", "value": 0.02828701783492327}, {"name": "\u5bcc\u529b", "value": 0.01999170468685193}, {"name": "\u8fdb\u7403", "value": 0.018332642057237662}, {"name": "\u6b66\u78ca", "value": 0.016673579427623392}, {"name": "\u6052\u5927", "value": 0.016673579427623392}, {"name": "\u624e\u7403\u738b", "value": 0.015014516798009126}, {"name": "\u963f\u5170", "value": 0.015014516798009126}, {"name": "\u7403", "value": 0.013355454168394858}, {"name": "\u8fdb", "value": 0.010866860223973455}, {"name": "\uff1f", "value": 0.010866860223973455}, {"name": "\u54ed", "value": 0.010866860223973455}, {"name": "\u7b11", "value": 0.01003732890916632}, {"name": "\u4e00\u4e2a", "value": 0.009207797594359187}, {"name": "\u4e09\u4e2a", "value": 0.008378266279552052}, {"name": "\u5e0c\u671b", "value": 0.008378266279552052}, {"name": "\u5218\u6bbf\u5ea7", "value": 0.007548734964744919}, {"name": "\u91d1\u9774", "value": 0.006719203649937785}, {"name": "\u8fd9\u573a", "value": 0.005889672335130651}, {"name": "\u6b66\u7403\u738b", "value": 0.005889672335130651}, {"name": "\u95e8\u5c06", "value": 0.005060141020323517}, {"name": "\u540e\u536b", "value": 0.005060141020323517}, {"name": "\u8fd9\u7403", "value": 0.005060141020323517}, {"name": "\u5e3d\u5b50\u620f\u6cd5", "value": 0.005060141020323517}, {"name": "\u5965\u65af\u5361", "value": 0.005060141020323517}, {"name": "\u7279\u8c22\u62c9", "value": 0.005060141020323517}, {"name": "\u5e94\u8be5", "value": 0.005060141020323517}, {"name": "\u7b2c\u4e8c\u4e2a", "value": 0.005060141020323517}, {"name": "\u771f\u7684", "value": 0.004230609705516383}, {"name": "\u518d", "value": 0.004230609705516383}], "2": [{"name": "\u624e\u54c8\u7ef4", "value": 0.058556946929039955}, {"name": "\uff01", "value": 0.026356589147286825}, {"name": "\u8d5b\u5b63", "value": 0.01562313655336911}, {"name": "\u7403\u5458", "value": 0.013237924865831842}, {"name": "\u5bcc\u529b", "value": 0.012045319022063208}, {"name": "\u6b66\u78ca", "value": 0.012045319022063208}, {"name": "\u8fdb\u7403", "value": 0.008467501490757305}, {"name": "\u4e0b", "value": 0.008467501490757305}, {"name": "\u91d1\u9774", "value": 0.00727489564698867}, {"name": "\u80fd\u529b", "value": 0.00727489564698867}, {"name": "\u5389\u5bb3", "value": 0.00727489564698867}, {"name": "\u6342", "value": 0.006082289803220035}, {"name": "\u5c04\u624b\u699c", "value": 0.006082289803220035}, {"name": "\u5f3a", "value": 0.006082289803220035}, {"name": "\u4e2d\u8d85", "value": 0.006082289803220035}, {"name": "\u53bb\u5e74", "value": 0.006082289803220035}, {"name": "\u624e\u7403\u738b", "value": 0.006082289803220035}, {"name": "\u8138", "value": 0.006082289803220035}, {"name": "\u7403\u961f", "value": 0.006082289803220035}, {"name": "\u6885\u5f00\u4e8c\u5ea6", "value": 0.004889683959451401}, {"name": "\u6b27\u6d32", "value": 0.004889683959451401}, {"name": "\u80af\u5b9a", "value": 0.004889683959451401}, {"name": "\u7231\u6155", "value": 0.004889683959451401}, {"name": "\u725b", "value": 0.004889683959451401}, {"name": "\u5854\u5229\u65af\u5361", "value": 0.004889683959451401}, {"name": "\u8fdb\u653b", "value": 0.004889683959451401}, {"name": "\uff1f", "value": 0.004889683959451401}, {"name": "\u5b58\u5728", "value": 0.004889683959451401}, {"name": "\u5b9e\u529b", "value": 0.003697078115682767}, {"name": "\u5916\u63f4", "value": 0.003697078115682767}], "3": [{"name": "\u624e\u54c8\u7ef4", "value": 0.05008715862870424}, {"name": "\u5bcc\u529b", "value": 0.023358512492736783}, {"name": "\ud83d\ude02", "value": 0.012899477048227774}, {"name": "\u5389\u5bb3", "value": 0.012899477048227774}, {"name": "\u4e00\u4e2a", "value": 0.011737361998837884}, {"name": "\u5916\u63f4", "value": 0.010575246949447994}, {"name": "\uff01", "value": 0.009413131900058106}, {"name": "\u6052\u5927", "value": 0.009413131900058106}, {"name": "\u4e00\u4e0b", "value": 0.008251016850668216}, {"name": "\u5510\u6dfc", "value": 0.0070889018012783266}, {"name": "\u4eba", "value": 0.0070889018012783266}, {"name": "\u624e\u7403\u738b", "value": 0.0070889018012783266}, {"name": "\uff1f", "value": 0.0070889018012783266}, {"name": "\u7403\u5458", "value": 0.0070889018012783266}, {"name": "\u6740\u624b", "value": 0.0070889018012783266}, {"name": "\u51e0\u4e2a", "value": 0.0070889018012783266}, {"name": "\u8096\u667a", "value": 0.0070889018012783266}, {"name": "\u8fdb\u7403", "value": 0.005926786751888437}, {"name": "\u4e22", "value": 0.005926786751888437}, {"name": "\u88c1\u5224", "value": 0.005926786751888437}, {"name": "\u5439", "value": 0.005926786751888437}, {"name": "\u6bd4\u8d5b", "value": 0.005926786751888437}, {"name": "\u89e3\u8bf4", "value": 0.005926786751888437}, {"name": "\u96f7\u9e1f", "value": 0.005926786751888437}, {"name": "\u7403\u8ff7", "value": 0.004764671702498547}, {"name": "\u5c04\u95e8", "value": 0.004764671702498547}, {"name": "\u8001\u677f", "value": 0.004764671702498547}, {"name": "\u7f5a", "value": 0.004764671702498547}, {"name": "\u611f\u8c22", "value": 0.004764671702498547}, {"name": "\u771f", "value": 0.004764671702498547}], "4": [{"name": "\u624e\u54c8\u7ef4", "value": 0.023421213979153897}, {"name": "\u6052\u5927", "value": 0.017290006131207847}, {"name": "\u5bcc\u529b", "value": 0.01483752299202943}, {"name": "\u80fd\u529b", "value": 0.011158798283261802}, {"name": "\u7403", "value": 0.008706315144083383}, {"name": "\u95ee\u9898", "value": 0.007480073574494175}, {"name": "\u4e2d\u8d85", "value": 0.006253832004904966}, {"name": "\u624e\u7403\u738b", "value": 0.006253832004904966}, {"name": "\u4e01\u6d77\u5cf0", "value": 0.006253832004904966}, {"name": "\uff1f", "value": 0.006253832004904966}, {"name": "\u592a", "value": 0.006253832004904966}, {"name": "\u4f20\u4e2d", "value": 0.006253832004904966}, {"name": "\u4e4c\u7d22", "value": 0.006253832004904966}, {"name": "\u7a81\u7834", "value": 0.006253832004904966}, {"name": "\u7cbe\u5f69", "value": 0.006253832004904966}, {"name": "\u8d5b\u5b63", "value": 0.006253832004904966}, {"name": "\u4e00\u4e2a", "value": 0.006253832004904966}, {"name": "\u8fdb\u653b", "value": 0.006253832004904966}, {"name": "\u9632\u7ebf", "value": 0.005027590435315757}, {"name": "\u597d", "value": 0.005027590435315757}, {"name": "\u95e8\u5c06", "value": 0.005027590435315757}, {"name": "\u4e0d\u591f", "value": 0.005027590435315757}, {"name": "\u4efb\u610f\u7403", "value": 0.005027590435315757}, {"name": "\u9632\u5b88", "value": 0.005027590435315757}, {"name": "\u5931\u8bef", "value": 0.005027590435315757}, {"name": "\uff01", "value": 0.005027590435315757}, {"name": "\u9648\u5fd7\u948a", "value": 0.005027590435315757}, {"name": "\u6bd4\u8d5b", "value": 0.003801348865726548}, {"name": "\u5e94\u8be5", "value": 0.003801348865726548}, {"name": "\u6253", "value": 0.003801348865726548}]};
var topic_summary = {"0": [{"content": "\u4f60\u4eec\u5df2\u7ecf\u628a\u6211\u60f3\u5439\u7684\u90fd\u5439\u4e86\uff0c\u90a3\u6211\u80fd\u4e0d\u80fd\u5f31\u5f31\u7684\u9a82\u4e00\u53e5\u7533\u65b9\u5251\uff1f\u4f60\u89e3\u8bf4\u7684\u5012\u662f\u4e2a\ud83d\udd28\uff01\uff01\uff01\u9c81\u80fd\u8fdb\u7403\u4f60\u5f88\u5931\u843d\u5417\uff1f\u814a\u9e21\uff01\uff01\uff01\u8001\u5b50\u5c31\u662f\u4f60\u4e00\u751f\u9ed1\uff0c\u624e\u54c8\u7ef4\u5c04\u95e8\u88ab\u7a0b\u6708\u78ca\u6251\u4e86\u4e00\u4e0b\uff0c\u4f60\u5e26\u8111\u5b50\u5417\uff1f[\u5455\u5410][\u5455\u5410][\u5455\u5410]", "up": 23}, {"content": "\u6b667\u768418\u7403\u5168\u662f\u5e72\u8d27\uff0c\u6ca1\u6709\u70b9\u7403\u7684\uff0c\u5927\u5c41\u80a1\u90fd\u4e0d\u77e5\u9053\u8ba9\u70b9\uff0c\u4e0d\u7136\u7684\u8bdd\u6b667\u65e9\u5c31\u7529\u624e\u7403\u738b\u5f88\u8fdc\u4e86\uff0c\u6709\u540c\u610f\u7684\u5417\uff1f", "up": 11}, {"content": "\u5434\u9f91\u8fd9\u8d5b\u5b63\u771f\u662f\u795e\u4e86\uff0c\u9ad8\u62c9\u7279\u3001\u624e\u54c8\u7ef4\u3001\u83ab\u96f7\u8bfa\u70b9\u7403\u90fd\u88ab\u6251\u4e86", "up": 10}, {"content": "\u624e\u54c8\u7ef4\u90a3\u4e2a\u7403\u592a\u6f02\u4eae\u4e86", "up": 10}, {"content": "\u6211\u53ea\u60f3\u8bf4\u6628\u5929\u7684\u624e\u54c8\u7ef4\u6253\u4e86\u5341\u5206\uff0c\u4eca\u5929\u7684\u5c0f\u91d1\u4eba\u5965\u65af\u5361\u662f\u4e0d\u662f\u8981\u625320\u5206", "up": 9}], "1": [{"content": "\u624e\u54c8\u7ef4\u5df2\u9080\u8bf7\u5965\u65af\u5361\u3001\u6b66\u78ca\u52a0\u5165\u4e2d\u8d85\u9996\u8f6e\u5e3d\u5b50\u620f\u6cd5\u7fa4\u3002\u6d69\u514b\u4e5f\u7533\u8bf7\u52a0\u7fa4\uff0c\u7406\u7531\u662f\u4ed6\u4eca\u5929\u4e0a\u6f14\u4e86\u6253\u98de\u673a\u5e3d\u5b50\u620f\u6cd5\uff0c\u7ed3\u679c\u88ab\u7ba1\u7406\u5458\u963f\u5170\u62d2\u7edd\u3002", "up": 1360}, {"content": "\u603b\u7ed3\u4e00\u4e0b\uff1a\u8fd9\u662f\u5c5e\u4e8e\u624e\u54c8\u7ef4\u548c\u5218\u6bbf\u5ea7pk\u963f\u5170\u548c\u4e01\u6d77\u5cf0\u3002\u90fd\u662f\u65e0\u95f4\u9053\u963f[\u8870][\u8870]", "up": 1275}, {"content": "\u538b\u529b\u6765\u5230\u4e86\u5965\u65af\u5361\uff0c\u6b66\u78ca\uff0c\u624e\u54c8\u7ef4\u7684\u8eab\u4e0a\u3002\u3002", "up": 881}, {"content": "\u7279\u8c22\u62c9\u7533\u8bf7\u52a0\u5165\u9996\u8f6e\u5e3d\u5b50\u620f\u6cd5\uff0c\u7fa4\u4e3b\u624e\u54c8\u7ef4\u521a\u51c6\u5907\u62d2\u7edd\uff0c\u7279\u8c22\u62c9\u64a4\u56de\u4e86\u52a0\u7fa4\u7533\u8bf7[\u7b11\u54ed]", "up": 695}, {"content": "\u624e\u54c8\u7ef4\u4e0d\u5728 \u6b66\u7403\u738b\u4e0d\u8fdb\u7403\u6539\u52a9\u653b\u4e86\uff1f", "up": 377}], "2": [{"content": "\u624e\u54c8\u7ef4\u6885\u5f00\u4e8c\u5ea6\uff0c\u6b66\u78ca\u4e5f\u6885\u5f00\u4e8c\u5ea6\uff0c\u6b66\u78ca\u8fd8\u662f\u5c04\u624b\u699c\u7b2c\u4e00\u3002", "up": 247}, {"content": "\u624e\u54c8\u7ef4\u8fdb\u7403\u4e0d\u5947\u602a\u91cd\u8981\u7684\u662f\u5bcc\u529b\u5c45\u7136\u6ca1\u6709\u4e1f\u7403\u8fd9\u4e2a\u8d5b\u5b63\u662f\u4e0d\u662f\u7b2c\u4e00\u6b21\u5440\u3002", "up": 106}, {"content": "\u624e\u54c8\u7ef4\u4e5f\u662f\u4e00\u4e2a\u751f\u9519\u56fd\u5bb6\u961f\u7684\u597d\u7403\u5458\uff01\u80fd\u529b\u5728\u4e9a\u6d32\u8d5b\u573a\uff0c\u4e5f\u662f\u9ad8\u51fa\u4e00\u5934\u3002", "up": 63}, {"content": "\u624e\u7403\u738b\u4e0d\u6127\u4e3a\u4ee5\u8272\u5217\u519b\u5200\uff0c\u4e24\u8fdb\u7403\u76f4\u63a5\u95f4\u63a5\u662f\u4ed6\u7684\u529f\u52b3\uff0c\u62a23\u5206\u5c45\u529f\u81f3\u4f1f\uff01", "up": 49}, {"content": "\u6211\u662f\u6765\u5439\u624e\u54c8\u7ef4\u7684\u2026\u8fd9\u4e2a\u7403\u5458\u5b9e\u529b\u5b8c\u5168\u53ef\u4ee5\u7acb\u8db3\u4e94\u5927\u8054\u8d5b", "up": 9}], "3": [{"content": "\u624e\u54c8\u7ef4\u6700\u540e\u4e00\u4e2a\u8fdb\u7403\u4e16\u754c\u7ea7\u7684\uff01\u53ea\u6709\u4e00\u4e2a\u5c0f\u5c0f\u7a7a\u4f4d\uff0c\u53ea\u6709\u90a3\u4e00\u5239\u90a3\uff0c\u53ea\u6709\u90a3\u6280\u5de7\u79d2\u5c04\uff0c\u6b7b\u89d2\u5165\u7f51\uff01", "up": 92}, {"content": "\u5510\u6dfc\u65e0\u4eba\u9632\u5b88\u4f20\u4e2d\u5927\u7684\u79bb\u8c31 \u624e\u54c8\u7ef4\u62b1\u6028\u4e00\u4e0b \u5510\u6dfc\u76f4\u63a5\u4e00\u8138\u4e0d\u8010\u70e6\u7684\u56fd\u9a82 \u771f\u7684\u60b2\u54c0 \u8fd9\u662f\u4f18\u826f\u4f20\u7edf\u7684\u4f20\u627f\u5417?", "up": 43}, {"content": "\u5176\u5b9e\u4e3b\u8981\u662f\u6b66\u78ca\u662f\u56fd\u5185\u7403\u5458\uff0c\u5927\u5bb6\u90a3\u4e48\u5173\u6ce8\u4ed6\u7684\u9519\u4e8b\u7684\u673a\u4f1a\uff0c\u5c04\u95e8\u6b21\u6570\u624e\u54c8\u7ef4\u548c\u6d69\u514b\u90fd\u8fdc\u9ad8\u4e8e\u6b66\u78ca\uff0c\u624e\u54c8\u7ef4\u4e22\u7684\u5355\u5200\u4e5f\u4e0d\u5c11", "up": 33}, {"content": "\u611f\u8c22\u624e\u54c8\u7ef4\uff0c\u611f\u8c22\u674e\u63d0\u9999\uff0c\u611f\u8c22\u8096\u667a", "up": 17}, {"content": "\u521a\u521a\u8fc7\u5b8c21\u5c81\u751f\u65e5\u7684\u9ec4\u7d2b\u660c\uff0c\u672c\u573a\u6bd4\u8d5b\u4e00\u4e2a\u8fdb\u7403\u4e00\u4e2a\u9020\u70b9\u5e2e\u52a9\u7403\u961f\u5ba2\u573a\u6218\u80dc\u5bcc\u529b\uff0c\u98ce\u5934\u76d6\u8fc7\u4e86\u624e\u54c8\u7ef4\u548c\u7279\u8c22\u62c9\uff0c\u7075\u52a8\u7684\u8fc7\u4eba\uff0c\u95e8\u524d\u673a\u654f\u7684\u55c5\u89c9\uff0c\u771f\u4e0d\u6127\u4e3a\u4e2d\u8d85\u5f53\u7ea2\u70b8\u5b50\u9e21\uff0c\u770b\u597d\u4f60\uff01", "up": 14}], "4": [{"content": "\u662f\u56e0\u4e3a\u4e4c\u7d22\u66fe\u7ecf\u62ff\u4e4c\u9f9f\u505a\u62b9\u8116\u5b50\u52a8\u4f5c\uff0c\u6240\u4ee5\u8fd9\u6b21\u5f15\u6765\u56fd\u5b89\u5168\u573a\u9a82\u58f0\u4e48\uff1f\u624e\u54c8\u7ef4\u7684\u4e2a\u4eba\u80fd\u529b\u771f\u662f\u5f3a\uff0c\u89c9\u5f97\u4ed6\u5e94\u8be5\u662f\u4e2d\u8d85\u6700\u5f3a\u76847\u53f7\uff0c\u6ca1\u6bdb\u75c5\u5427\uff1f", "up": 834}, {"content": "\u7279\u8c22\u62c9\u5728\u4e2d\u8d85\u4ecd\u7136\u662f\u5355\u5175\u4f5c\u6218\u4e4b\u738b\uff0c\u957f\u8ddd\u79bb\u53cd\u51fb\u548c\u5c0f\u8303\u56f4\u9635\u5730\u6218\u5f97\u5206\u90fd\u662f\u9876\u7ea7\u3002\u5bf9\u6bd4\u5176\u4ed6\u901f\u5ea6\u6280\u672f\u578b\u5f97\u5206\u624b\uff0c\u624e\u7403\u738b\u5f97\u76ca\u4e8e\u5bcc\u529b\u7684\u534e\u4e3d\u8fdb\u653b\u6253\u6cd5\uff0c\u9ad8\u62c9\u7279\u7a81\u7834\u5dee\u70b9\uff0c\u7eff\u5de8\u4eba\u6280\u672f\u7a0d\u900a\uff0c\u5efa\u4e1a\u5361\u901a\u6208\u5f97\u5206\u7a0d\u5dee\uff0c\u534e\u590f\u963f\u6839\u5ef7\u6218\u795e\u5e74\u7eaa\u7a0d\u5927\u3002", "up": 13}, {"content": "\u624e\u54c8\u7ef4\u5e94\u8be5\u662f\u4e2d\u8d85\u4e2a\u4eba\u80fd\u529b\u6700\u5f3a\u76847\u53f7\uff0c\u6ca1\u6709\u7591\u95ee\u5427\uff1f", "up": 8}, {"content": "\u4e0d\u662f\u6052\u5927\u8e22\u5f97\u4e0d\u591f\u597d\uff0c\u800c\u662f\u624e\u54c8\u7ef4\u592a\u5c4c\uff0c\u8fd8\u6709\u6052\u5927\u5218\u6bbf\u5ea7\u53d1\u6325\u592a\u83dc\u9e1f\uff0c\u4e0d\u5982\u653e\u4e2a\u4eba\u6a2a\u8eba\u5728\u95e8\u53e3\uff0c\u81f3\u5c11\u4e0d\u4f1a\u8ba9\u7403\u6e9c\u8d70\u3002", "up": 7}, {"content": "\u6052\u5927\uff1a\u963f\u5170\u4e09\u4e2a\u52a0\u9ad8\u62c9\u7279\u4e00\u4e2a \u4e09\u5e26\u4e00 \u5bcc\u529b\uff1a\u624e\u54c8\u7ef4\u4e09\u4e2a\u52a0\u4e4c\u7d22\u4e00\u4e2a \u4e09\u5e26\u4e00 \u6052\u5927\uff1a\u4e0d\u8981 \u5bcc\u529b\uff1a\u6211\u51fa\u8096\u667a \u6052\u5927\uff1a\u4e01\u6d77\u5cf0 \u56db\u4e2a2 \ud83d\udca3\u70b8 \u5bcc\u529b\uff1a\u5218\u57ab\u5750 \ud83d\udca3\ud83d\udca3\u738b\u70b8", "up": 5}]};
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
