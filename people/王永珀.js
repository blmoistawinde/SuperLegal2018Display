var data = {"person_name": "\u738b\u6c38\u73c0", "nicknames": "\u738b\u6c38\u73c0", "aspects": {"\u7403\u5458": 0.3566240007375663, "\u7403\u8ff7": 0.17758620177892928, "\u8fdb\u7403": 0.530526278760698, "\u6bd4\u8d5b": 0.35314938363890835, "\u5916\u63f4": 0.20403667658031044, "\u51fa\u573a": 0.10409404985292536, "\u8db3\u7403": 0.4877686336052372, "\u52a9\u653b": 0.7606814519697247, "\u5c04\u95e8": 0.522875582524073, "\u914d\u5408": 0.22616858371224444}, "overall_heat": 94.0, "overall_polar": -0.671, "name": "440", "nationality": "\u4e2d\u56fd", "position": "\u4e2d\u573a", "goal": "2", "assist": "4", "team_name": "\u5929\u6d25\u6743\u5065", "name_en": "Wang Yongpo", "age": "31", "height": "178", "weight": "71"};
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
var topic_keywords = {"0": [{"name": "\u738b\u6c38\u73c0", "value": 0.0700028514399772}, {"name": "\u9c81\u80fd", "value": 0.03721129170230967}, {"name": "\u6768\u65ed", "value": 0.02580553179355575}, {"name": "\uff01", "value": 0.02437981180496151}, {"name": "\u738b\u6653\u9f99", "value": 0.012974051896207584}, {"name": "\u6743\u5065", "value": 0.012974051896207584}, {"name": "\u6bd4\u8d5b", "value": 0.011548331907613344}, {"name": "\u7403\u8ff7", "value": 0.011548331907613344}, {"name": "\u738b\u5c0f\u9f99", "value": 0.011548331907613344}, {"name": "\uff1f", "value": 0.010122611919019104}, {"name": "\u7403\u5458", "value": 0.008696891930424864}, {"name": "\u8c22\u573a", "value": 0.008696891930424864}, {"name": "\u8d5b\u540e", "value": 0.008696891930424864}, {"name": "\u6700\u540e", "value": 0.007271171941830624}, {"name": "\u8d75\u65ed\u65e5", "value": 0.007271171941830624}, {"name": "\u7cdc\u660a\u4f26", "value": 0.007271171941830624}, {"name": "\u770b\u770b", "value": 0.005845451953236384}, {"name": "\u95ee\u9898", "value": 0.005845451953236384}, {"name": "\u52a9\u653b", "value": 0.005845451953236384}, {"name": "\u518d", "value": 0.005845451953236384}, {"name": "\u552f\u72ec", "value": 0.005845451953236384}, {"name": "\u5916\u63f4", "value": 0.005845451953236384}, {"name": "\u4e3b\u529b", "value": 0.005845451953236384}, {"name": "\u4e2d\u573a", "value": 0.005845451953236384}, {"name": "\u8fd9\u573a", "value": 0.005845451953236384}, {"name": "\u4e00\u4e2a", "value": 0.005845451953236384}, {"name": "\u8d62", "value": 0.005845451953236384}, {"name": "\u5173\u6ce8", "value": 0.0044197319646421445}, {"name": "\u88c1\u5224", "value": 0.0044197319646421445}, {"name": "\u8138", "value": 0.0044197319646421445}], "1": [{"name": "\u738b\u6c38\u73c0", "value": 0.03792886370790054}, {"name": "\uff1f", "value": 0.034781240163676425}, {"name": "\uff01", "value": 0.03163361661945232}, {"name": "\u6743\u5065", "value": 0.023764557758892038}, {"name": "\u83ab\u5fb7\u65af\u7279", "value": 0.014321687126219704}, {"name": "\u7ef4\u7279", "value": 0.012747875354107648}, {"name": "\u4e2d\u573a", "value": 0.012747875354107648}, {"name": "\u5e15\u6258", "value": 0.011174063581995594}, {"name": "\u5b59\u53ef", "value": 0.011174063581995594}, {"name": "\u7d22\u8428", "value": 0.011174063581995594}, {"name": "\u4e00\u5b9a", "value": 0.011174063581995594}, {"name": "\u585e\u5c14", "value": 0.009600251809883538}, {"name": "\u4eba", "value": 0.009600251809883538}, {"name": "\u4e0b\u8bfe", "value": 0.008026440037771481}, {"name": "\u5916\u63f4", "value": 0.008026440037771481}, {"name": "\u73b0\u5728", "value": 0.008026440037771481}, {"name": "\u4e00\u4e2a", "value": 0.008026440037771481}, {"name": "\u5b9e\u529b", "value": 0.006452628265659427}, {"name": "\u8d75\u65ed\u65e5", "value": 0.006452628265659427}, {"name": "\u8e22", "value": 0.006452628265659427}, {"name": "\u5e9f", "value": 0.006452628265659427}, {"name": "\u7403", "value": 0.0048788164935473725}, {"name": "\u60f3", "value": 0.0048788164935473725}, {"name": "\u6124\u6012", "value": 0.0048788164935473725}, {"name": "\u5b8c\u5168", "value": 0.0048788164935473725}, {"name": "\u5f20\u7389\u5b81", "value": 0.0048788164935473725}, {"name": "\u627e\u4e2a", "value": 0.0048788164935473725}, {"name": "\u5f20\u4fee", "value": 0.0048788164935473725}, {"name": "\u6362", "value": 0.0048788164935473725}, {"name": "\u6052\u5927", "value": 0.0048788164935473725}], "2": [{"name": "\uff01", "value": 0.05228879791589133}, {"name": "\u738b\u6c38\u73c0", "value": 0.044845552660960186}, {"name": "\uff1f", "value": 0.020655005582433942}, {"name": "\u9c81\u80fd", "value": 0.018794194268701155}, {"name": "\u8e22", "value": 0.011350949013770003}, {"name": "\u558a", "value": 0.011350949013770003}, {"name": "\u53f7", "value": 0.011350949013770003}, {"name": "\u7403\u5458", "value": 0.011350949013770003}, {"name": "\u7403\u8ff7", "value": 0.011350949013770003}, {"name": "\u4ff1\u4e50\u90e8", "value": 0.009490137700037217}, {"name": "\u4eba", "value": 0.007629326386304428}, {"name": "\u8f93\u4e0d\u8d77", "value": 0.007629326386304428}, {"name": "\u5bcc\u529b", "value": 0.007629326386304428}, {"name": "\u6743\u5065", "value": 0.007629326386304428}, {"name": "\u4e00\u76f4", "value": 0.007629326386304428}, {"name": "\u7403", "value": 0.0057685150725716415}, {"name": "\u56fd\u5bb6\u961f", "value": 0.0057685150725716415}, {"name": "\u6700", "value": 0.0057685150725716415}, {"name": "\u97e9\u56fd", "value": 0.0057685150725716415}, {"name": "\u8fd9\u662f", "value": 0.0057685150725716415}, {"name": "\u73b0\u5728", "value": 0.0057685150725716415}, {"name": "\u5f53\u5e74", "value": 0.0057685150725716415}, {"name": "\u53ef\u60dc", "value": 0.0057685150725716415}, {"name": "\u5434\u5174\u6db5", "value": 0.0057685150725716415}, {"name": "\u6768\u65ed", "value": 0.0057685150725716415}, {"name": "\u5d14\u9e4f", "value": 0.0057685150725716415}, {"name": "\u5c81", "value": 0.0057685150725716415}, {"name": "16", "value": 0.003907703758838854}, {"name": "\u66f4\u597d", "value": 0.003907703758838854}, {"name": "\u5929\u6d25\u6743\u5065", "value": 0.003907703758838854}]};
var topic_summary = {"0": [{"content": "\u738b\u6c38\u73c0\u8fd9\u6837\u7a7f\u88c1\u5224\u4e0d\u8bf4\u4e00\u4e0b\u5417\u2026\u2026[\u6d41\u6c57]", "up": 211}, {"content": "\u738b\u6c38\u73c0\u52a9\u653b\u6768\u65ed\u8fdb\u7403\uff0c\u9c81\u80fd\u6218\u80dc\u6743\u5065\u3002", "up": 148}, {"content": "\u8fd9\u573a\u6bd4\u8d5b\u771f\u662f\u611f\u52a8\uff1a\u6768\u65ed\u8fdb\u7403\u5168\u573a\u638c\u58f0\uff0c\u6768\u65ed\u4e5f\u6ca1\u6709\u5e86\u795d\uff1b\u738b\u6c38\u73c0\u8d5b\u540e\u8c22\u573a\u6b22\u8fce\u56de\u5bb6\uff0c\u738b\u6c38\u73c0\u5408\u5f71\u7559\u5ff5\uff1b\u5f20\u4fee\u4e3a\u72c2\u5954\u89e3\u56f4\u53cc\u817f\u62bd\u7b4b\uff0c\u8d5b\u540e\u63a5\u53d7\u91c7\u8bbf\u8bf4\u8fd9\u4e2a\u7403\u56e0\u4ed6\u800c\u8d77\uff0c\u4ed6\u65e0\u8bba\u5982\u4f55\u4e5f\u4e0d\u80fd\u8ba9\u8fd9\u4e2a\u7403\u8fdb\u3002\u5230\u6700\u540e\u5f20\u9e6d\u90a3\u4e2a\u5934\u7403\u6211\u771f\u5e0c\u671b\u80fd\u8fdb\uff0c\u5e73\u5c40\u4e0d\u4e5f\u5f88\u597d\u5417", "up": 46}, {"content": "\u738b\u6c38\u73c0\u5f00\u51fa\u89d2\u7403\uff0c\u6768\u65ed\u5934\u7403\u7834\u95e8\uff0c\u5f97\u5206\u7684\u5374\u4e0d\u662f\u9c81\u80fd[\u53ef\u601c]", "up": 37}, {"content": "\u738b\u6653\u9f99\uff0c\u4f60\u4e2a\u767d\u773c\u72fc\uff01\u573a\u4e0a\u80cc\u540e\u4eae\u978b\u5e95\u94f2\u98de\u90d1\u94ee\uff0c\u6700\u540e\u8c22\u573a\u738b\u6c38\u73c0\uff0c\u7cdc\u660a\u4f26\uff0c\u6768\u65ed\u90fd\u53bb\u4e86\uff0c\u552f\u72ec\u4f60\u738b\u6653\u9f99\u6ca1\u53bb\uff0c\u662f\u8c01\u57f9\u517b\u4e86\u4f60\uff1f\u662f\u8c01\u6210\u5c31\u4e86\u4f60\uff1f\u591a\u5c11\u5e74\u4e86\u5fd8\u6069\u8d1f\u4e49\u7684\u4e1c\u897f\uff01", "up": 24}], "1": [{"content": "\u8001\u51e0\u4f4d \u6ce8\u610f\u738b\u6c38\u73c0\u5938\u83ab\u5fb7\u65af\u7279\u7684\u53e3\u578b\u4e86\u5417[\u7b11\u54ed][\u7b11\u54ed]", "up": 341}, {"content": "\u7d22\u8428\u8981\u628a\u81ea\u5df1\u4f5c\u4e0b\u8bfe\u4e86\uff0c\u4e9a\u51a0\u88ab\u6052\u5927\u6dd8\u6c70\u94c1\u5b9a\u4e0b\u8bfe\u3002\u7528\u5e15\u6258\u4e0d\u7528\u7ef4\u7279\u8d5b\u5c14\u4e5f\u884c\uff0c\u8d75\u4e00\u811a \u548c\u738b\u6c38\u73c0\u540e\u8170\uff0c\u5e15\u6258\u8fc7\u4e2d\u8d85\u540e\u536b\u8fd8\u662f\u5f88\u7b80\u5355\u7684", "up": 130}, {"content": "\u6743\u5065\u8fd9\u72b6\u6001\u53ef\u4ee5\uff0c\u4fdd\u7ea7\u4e4b\u8def\u8fd8\u9700\u52aa\u529b\uff0c\u800c\u4e14\u4e0b\u4e2a\u8d5b\u5b63\u7403\u961f\u5185\u90e8\u6709\u51e0\u4e2a\u4eba\u4e00\u5b9a\u8981\u7559\u4f4f\uff0c\u6768\u65ed\u5e15\u6258\u738b\u6c38\u73c0\u4e00\u4e2a\u90fd\u4e0d\u80fd\u5c11\uff0c\u542c\u8bf4\u6052\u5927\u60f3\u8981\u5f20\u4fee\u4e3a\uff0c\u6743\u5065\u4e00\u5b9a\u4e0d\u80fd\u5356\uff0c\u5356\u4e86\u7684\u8bdd\u5bb3\u4e86\u81ea\u5df1\uff0c\u4e5f\u5bb3\u4e86\u5f20\u4fee\u4e3a\uff0c\u4e00\u5b9a\u7559\u4f4f\u5f20\u4fee\u4e3a\uff0c\u5728\u5f15\u8fdb\u51e0\u4e2a\u5916\u63f4\uff0c\u4e0b\u4e2a\u8d5b\u5b63\u8fd8\u662f\u6709\u7ade\u4e89\u529b\u7684\uff0c\u8fd8\u6709\u4e00\u4ef6\u4e8b\uff0c\u4e00\u5b9a\u8981\u628a\u83ab\u5fb7\u65af\u7279\u8fd9\u4e2a\u72d7\u7ed9\u529e\u4e86\uff0c\u4e00\u5b9a\u8981\u901a\u8fc7\u5404\u79cd\u624b\u6bb5\u8ba9\u4ed6\u4e00\u8f88\u5b50\u8e22\u4e0d\u4e0a\u6bd4\u8d5b\uff01", "up": 98}, {"content": "\u8bf4\u51e0\u70b9\u81ea\u5df1\u7684\u770b\u6cd5 1 \u6559\u7ec3\u4e34\u573a\u5e94\u53d8\u80fd\u529b\u8fd9\u4e48\u5dee\u5417\uff1f\u5f31\u70b9\u66b4\u9732\u7684\u8fd9\u4e48\u660e\u663e\u5c45\u713670\u5206\u949f\u624d\u6362\u738b\u6653\u9f99\uff1f 2 \u4e2d\u573a\u8fb9\u524d\u536b\u62ff\u7403\u4e0d\u6562\u7a81\u7834\u3001\u4e0d\u6253\u5c0f\u8303\u56f4\u914d\u5408\uff0c\u5bf9\u65b9\u4e00\u4e0a\u62a2\u5c31\u80cc\u8eab\u56de\u4f20\u7684\u81ed\u6bdb\u75c5\u8ddf\u8c01\u5b66\u7684\u5462\uff1f\u63a8\u8fdb\u5f0f\u8fdb\u653b\u5c31\u8fd9\u4e48\u8e22\u7684\uff1f 3 \u540e\u573a\u4e0e\u524d\u573a\u8854\u63a5\u8fd9\u4e48\u5dee\uff0c\u4e3a\u4ec0\u4e48\u4e0d\u591a\u4e0a\u4e00\u4e2a\u4fdd\u62a4\u578b\u7684\u540e\u8170\uff0c\u6216\u8005\u8ba9\u6240\u8c13\u7684\u7ffc\u536b\u505a\u4fdd\u62a4\u6765\u91ca\u653e\u7ef4\u7279\u585e\u5c14\uff1f\u738b\u6c38\u73c0\u64a4\u5230\u4e2d\u5708\u5904\u7406\u7403\u5bf9\u7ec4\u7ec7\u6709\u6548\u679c\u5417\uff1f 4 \u5f3a\u961f\u8be5\u6709\u7684\u7cbe\u6c14\u795e\u4e00\u70b9\u513f\u6ca1\u770b\u5230\uff01\u60f3\u4fdd\u7559\u5b9e\u529b\u4e3b\u573a\u62fc\u5168\u5317\u522b\u8f93\u592a\u96be\u770b\u5417\uff1f\u4e0d\u5982\u62ff\u6389\u8fd9\u5757\u906e\u7f9e\u5e03\uff01\u6bcf\u4e00\u573a\u90fd\u4ece\u5bb9\u4e0d\u8feb\u3001\u4e0d\u9057\u4f59\u529b\u5730\u62fc\u640f\u66f4\u662f\u4e00\u4e2a\u5f3a\u961f\u8be5\u505a\u7684\uff01 \u603b\u800c\u8a00\u4e4b\uff0c\u5dee\u7684\u8fd8\u8fdc\uff0c\u7825\u783a\u524d\u884c\u5427\uff01", "up": 94}, {"content": "\u5e9f\u738b\u6c38\u73c0\u589e\u52a0\u5b59\u53ef\u65f6\u95f4\u3002", "up": 89}], "2": [{"content": "\u5d14\u9e4f \u5468\u6d77\u6ee8 \u738b\u6653\u9f99 \u82d1\u7ef4\u73ae \u738b\u6c38\u73c0 \u674e\u5fae\u6000\u5ff5\u90a3\u4e2a\u65f6\u5019\u7684\u9c81\u80fd", "up": 211}, {"content": "\u738b\u6c38\u73c0\u8e22\u5047\u7403\uff0c\u6211\u8205\u8205\u8bf4\u7684", "up": 13}, {"content": "\u6743\u5065\u6700\u559c\u6b22\u738b\u6c38\u73c0\uff0c\u4e00\u76f4\u90fd\u8ba4\u4e3a\u4ed6\u662f\u56fd\u5185\u7403\u5458\u6700\u63a5\u8fd1\u6b27\u6d32\u6c34\u5e73\u7684\u3002\u4e0d\u8fc7\u4e2d\u8d85\u6700\u597d\u770b\u7684\u8fd8\u662f\u5bcc\u529b\uff0c\u4ece\u53bb\u5e74\u5c31\u559c\u6b22\u5bcc\u529b\uff0c\u4eca\u5e74\u611f\u89c9\u66f4\u597d\u4e86", "up": 10}, {"content": "\u767d\u65a9\u9e21\u738b\u6c38\u73c0\u9996\u53d1\u8fd8\u771f\u5389\u5bb3\uff01", "up": 10}, {"content": "\u5929\u6d25\u6743\u5065\u7684\u7403\u8ff7\u662f\u5fc3\u673a\u88f1\u5417\uff1f\u4ece\u90a3\u91cc\u558a\u6768\u65ed\u548c\u738b\u6c38\u73c0 \u558a\u5b8c\u63a5\u7740\u5c31\u770b\u9c81\u80fd\u7403\u8ff7 \u8fd9\u662f\u4ec0\u4e48\u5fc3\u7406\uff1f\u8fd8\u558a\u8f93\u4e0d\u8d77 \u6211\u4eec\u4e0d\u662f\u8f93\u4e0d\u8d77 \u800c\u662f\u4e0d\u653e\u5f03 \u4e0d\u50cf\u4f60\u4eec \u70c2\u8fdb\u53bb\u4e00\u4e2a\u7403 \u5c31\u77e5\u9053\u803d\u8bef\u65f6\u95f4", "up": 8}]};
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
