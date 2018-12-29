        // 基于准备好的dom，初始化echarts实例
		let lineData = [];
		var data = [8645, 3837, 5707, 4526, 3051, 2423, 4718, 3717, 5839, 3866, 4688, 4425, 4114, 4298, 4172, 4565, 4426, 2939, 4263, 2974, 4042, 3932, 4103, 2044, 2367, 3810, 3483, 5526, 3223, 1885];
        var round_focus = {"0": "\u672c\u8f6e\u70ed\u70b9\uff1a<br/>1.\u4e2d\u8d85-\u5965\u65af\u5361\u9020\u4e94\u7403\u6b66\u78ca\u6234\u5e3d \u4e0a\u6e2f\u4e3b\u573a8-0\u5927\u80dc\u4e00\u65b9<br/>2.\u4e2d\u8d85-\u624e\u54c8\u7ef4\u963f\u5170\u53cc\u53cc\u6234\u5e3d\u8096\u667a\u81f4\u80dc \u5bcc\u529b5-4\u80dc\u6052\u5927<br/>3.\u4e2d\u8d85-\u5854\u795e\u53cc\u54cd\u664b\u9e4f\u7fd4\u534a\u573a\u67d3\u7ea2 \u9c81\u80fd3-0\u80dc\u5341\u4eba\u56fd\u5b89<br/>", "1": "\u672c\u8f6e\u70ed\u70b9\uff1a<br/>1.\u4e2d\u8d85-\u97e6\u4e16\u8c6a\u4e16\u754c\u6ce2\u5df4\u574e\u5e03\u7834\u95e8 \u56fd\u5b892-1\u5ba2\u80dc\u82cf\u5b81<br/>2.\u4e2d\u8d85-\u5854\u5c14\u5fb7\u5229\u3001\u4f69\u83b1\u8054\u624b\u7834\u95e8 \u9c81\u80fd2-0\u80dc\u91cd\u5e86\u65af\u5a01<br/>3.\u4e2d\u8d85-\u9ad8\u62c9\u7279\u9020\u56db\u7403\u90dc\u6797\u4f20\u5c04 \u6052\u59275-0\u4e9a\u6cf0\u8fce\u8054\u8d5b\u9996\u80dc<br/>", "2": "\u672c\u8f6e\u70ed\u70b9\uff1a<br/>1.\u4e2d\u8d85-\u6b66\u78ca\u5927\u56db\u559c\u80e1\u5c14\u514b\u4f20\u5c04 \u4e0a\u6e2f5-2\u9006\u8f6c\u5bcc\u529b\u91cd\u56de\u699c\u9996<br/>2.\u4e2d\u8d85-\u7d22\u91cc\u4e9a\u8bfa\u53cc\u54cd\u97e6\u4e16\u8c6a\u7834\u95e8 \u56fd\u5b893-0\u9001\u4e00\u65b9\u4e09\u8fde\u8d25<br/>3.\u4e2d\u8d85-\u5854\u795e\u6885\u5f00\u4e8c\u5ea6 \u9c81\u80fd2-1\u5ba2\u80dc\u534e\u590f\u8fce\u4e09\u8fde\u80dc<br/>", "3": "\u672c\u8f6e\u70ed\u70b9\uff1a<br/>1.\u4e2d\u8d85-\u963f\u5170\u67d3\u7ea2\u90dc\u6797\u7834\u95e8 \u6052\u59271-0\u6743\u5065\u8054\u8d5b\u4e09\u8fde\u80dc<br/>2.\u4e2d\u8d85-\u6b66\u78ca\u8fde\u573a\u7834\u95e8 \u4e0a\u6e2f2-1\u9006\u8f6c\u91cd\u5e86\u8054\u8d5b\u56db\u8fde\u80dc<br/>3.\u4e2d\u8d85-\u65af\u8482\u592b\u7834\u95e8 \u9c81\u80fd0-2\u4e0d\u654c\u8d35\u5dde\u4e09\u8fde\u80dc\u906d\u7ec8\u7ed3<br/>", "4": "\u672c\u8f6e\u70ed\u70b9\uff1a<br/>1.\u4e2d\u8d85-\u76d6\u5766\u4f20\u5c04 \u5341\u4eba\u4e00\u65b9\u88ab\u8fde\u6273\u4e24\u74032-2\u91cd\u5e86<br/>2.\u4e2d\u8d85-\u90dc\u6797\u95ea\u51fb+\u4e2d\u67f1 \u6052\u59271-0\u9c81\u80fd\u6536\u83b7\u8054\u8d5b\u56db\u8fde\u80dc<br/>3.\u4e2d\u8d85-\u9ec4\u7d2b\u660c\u7834\u95e8+\u9020\u70b9\u7279\u8c22\u62c9\u5efa\u529f \u82cf\u5b812-0\u5bcc\u529b\u53d6\u4e24\u8fde\u80dc<br/>", "5": "\u672c\u8f6e\u70ed\u70b9\uff1a<br/>1.\u4e2d\u8d85-\u53e4\u5fb7\u5229\u4e16\u754c\u6ce2\u6731\u5efa\u8363\u9996\u7403 \u7533\u82b12-2\u6218\u5e73\u6052\u5927<br/>2.\u4e2d\u8d85-\u5854\u5c14\u5fb7\u5229\u53cc\u54cd \u9c81\u80fd2-0\u4e00\u65b9\u7ec8\u7ed3\u4e24\u8fde\u8d25<br/>3.\u4e2d\u8d85-\u80e1\u5c14\u514b\u70b9\u5c04\u6b66\u78ca\u7834\u95e8 \u4e0a\u6e2f2-0\u534e\u590f\u8054\u8d5b\u516d\u8fde\u80dc<br/>", "6": "\u672c\u8f6e\u70ed\u70b9\uff1a<br/>1.\u4e2d\u8d85-\u53e4\u5fb7\u5229\u7834\u95e8\u5df4\u574e\u5e03\u8865\u65f6\u6551\u4e3b \u56fd\u5b89\u4e3b\u573a2-2\u6052\u5927<br/>2.\u4e2d\u8d85-\u624e\u54c8\u7ef4\u5931\u70b9\u4f69\u83b1\u4f20\u5c04 \u9c81\u80fd4-2\u9006\u8f6c\u5bcc\u529b\u4e24\u8fde\u80dc<br/>3.\u4e2d\u8d85-\u9ec4\u7d2b\u660c\u7834\u95e8\u5409\u7fd4\u4e09\u4f20\u4e00\u5c04 \u82cf\u5b815-1\u5927\u80dc\u7533\u82b1<br/>", "7": "\u672c\u8f6e\u70ed\u70b9\uff1a<br/>1.\u4e2d\u8d85-\u4f0a\u54c8\u6d1b\u53cc\u54cd \u4e9a\u6cf0\u56db\u4e2d\u68462-1\u9001\u4e0a\u6e2f\u4e2d\u8d85\u8d5b\u5b63\u9996\u8d25<br/>2.\u4e2d\u8d85-\u4e8e\u6c49\u8d85\u8fde\u573a\u7834\u95e8\u9001\u7edd\u6740 \u6052\u59271-0\u82cf\u5b81\u4e09\u8f6e\u9996\u80dc<br/>3.\u4e2d\u8d85-\u91d1\u656c\u9053\u516b\u5206\u949f\u53cc\u54cd \u9c81\u80fd2-1\u9006\u8f6c\u5efa\u4e1a\u4e09\u8fde\u80dc<br/>", "8": "\u672c\u8f6e\u70ed\u70b9\uff1a<br/>1.\u4e2d\u8d85-\u7a46\u8c22\u594e\u5efa\u529f\u5361\u62c9\u65af\u79d1\u4f20\u5c04 \u4e00\u65b93-0\u6052\u5927\u8054\u8d5b\u9996\u80dc<br/>2.\u4e2d\u8d85-\u80e1\u5c14\u514b\u4f24\u9000\u5df4\u574e\u5e03\u7834\u95e8 \u56fd\u5b892-1\u9006\u8f6c\u4e0a\u6e2f\u516b\u8f6e\u4e0d\u8d25<br/>3.\u4e2d\u8d85-\u738b\u5927\u96f7\u5c61\u6551\u9669\u7a46\u574e\u4e54\u4f24\u9000 \u9c81\u80fd0-0\u4eba\u548c\u65e0\u7f18\u767b\u9876<br/>", "9": "\u672c\u8f6e\u70ed\u70b9\uff1a<br/>1.\u4e2d\u8d85-\u738b\u5927\u96f7\u52a9\u653b\u4f69\u83b1\u8bfb\u79d2\u6273\u5e73 \u9c81\u80fd1-1\u5ba2\u5e73\u6743\u5065<br/>2.\u4e2d\u8d85-\u9ec4\u7d2b\u660c\u8fde\u573a\u7834\u95e8\u7279\u8c22\u62c9\u4e2d\u67f1 \u82cf\u5b811-0\u80dc\u4e00\u65b9\u8fdb\u524d\u56db<br/>3.\u4e2d\u8d85-\u6b66\u78ca\u7834\u95e8\u989c\u9a8f\u51cc\u6251\u70b9 \u4e0a\u6e2f1-1\u8d35\u5dde\u56db\u8f6e\u4e0d\u80dc<br/>", "10": "\u672c\u8f6e\u70ed\u70b9\uff1a<br/>1.\u4e2d\u8d85-\u84bf\u4fca\u95f5\u7834\u95e8\u5434\u5174\u6db5\u7edd\u6740 \u9c81\u80fd2-1\u9006\u8f6c\u6cf0\u8fbe\u6682\u767b\u9876<br/>2.\u4e2d\u8d85-\u5965\u53e4\u65af\u6258\u4e16\u754c\u6ce2+\u67d3\u7ea2 \u6052\u59270-2\u8d1f\u4eba\u548c\u516d\u573a\u4e0d\u80dc<br/>3.\u4e2d\u8d85-\u7a46\u8c22\u594e\u53cc\u54cd+\u7edd\u6740 \u4e00\u65b92-1\u9006\u8f6c\u6052\u4e30\u8d62\u4e0b\u4fdd\u7ea7\u6218<br/>", "11": "\u672c\u8f6e\u70ed\u70b9\uff1a<br/>1.\u4e2d\u8d85-\u5854\u5229\u65af\u5361\u9996\u79c0\u9020\u56db\u7403 \u6052\u59274-0\u8d35\u5dde\u7ec8\u7ed3\u4e09\u8f6e\u4e0d\u80dc<br/>2.\u4e2d\u8d85-\u91d1\u656c\u9053\u7834\u95e8\u5965\u65af\u5361\u6551\u4e3b \u9c81\u80fd\u4e3b\u573a1-1\u5e73\u4e0a\u6e2f<br/>3.\u4e2d\u8d85-\u5df4\u574e\u5e03\u7834\u95e8\u6bd4\u57c3\u62c9\u5236\u80dc\u7403 \u56fd\u5b892-1\u5efa\u4e1a\u767b\u699c\u9996<br/>", "12": "\u672c\u8f6e\u70ed\u70b9\uff1a<br/>1.\u4e2d\u8d85-\u6b66\u78ca47\u79d2\u95ea\u51fb\u57c3\u795e\u7834\u65e7\u4e3b \u4e0a\u6e2f2-1\u6052\u59274\u5206\u9886\u8dd1<br/>2.\u4e2d\u8d85-\u5854\u5c14\u5fb7\u5229\u9020\u4e24\u7403\u4f69\u83b1\u7834\u95e8 \u9c81\u80fd\u5ba2\u573a2-1\u9006\u8f6c\u4e9a\u6cf0<br/>3.\u4e2d\u8d85-\u4eba\u548c\u4e09\u5916\u63f4\u7834\u95e8\u91cc\u4e9a\u65af\u79d1\u65af\u9996\u7403 \u4eba\u548c3-1\u5341\u4eba\u4e00\u65b9<br/>", "13": "\u672c\u8f6e\u70ed\u70b9\uff1a<br/>1.\u4e2d\u8d85-\u5854\u5229\u65af\u5361\u53cc\u54cd\u66b4\u529b\u9e1f\u56de\u5f52\u9996\u7403 \u6052\u59275-0\u5927\u80dc\u65af\u5a01<br/>2.\u4e2d\u8d85-\u5df4\u574e\u5e03\u7834\u95e8\u97e6\u4e16\u8c6a\u8865\u65f6\u8be1\u5f02\u4e4c\u9f99 \u7533\u82b1\u4e3b\u573a2-2\u56fd\u5b89<br/>3.\u4e2d\u8d85-\u674e\u6e90\u4e00\u795e\u4ed9\u7403\u60e0\u5bb6\u5eb7\u5355\u5200\u7834\u95e8 \u6cf0\u8fbe3-2\u80dc\u4e00\u65b9<br/>", "14": "\u672c\u8f6e\u70ed\u70b9\uff1a<br/>1.\u4e2d\u8d85-\u4fdd\u5229\u5c3c\u5965\u9020\u4e09\u7403\u88c1\u5224\u4e89\u8bae\u5224\u7f5a \u6052\u59273-0\u6cf0\u8fbe\u4e09\u8fde\u80dc<br/>2.\u4e2d\u8d85-\u91d1\u656c\u9053\u4f20\u5c04\u5854\u795e\u7834\u95e8 \u9c81\u80fd3-1\u9006\u8f6c\u7533\u82b1\u5347\u699c\u9996<br/>3.\u4e2d\u8d85-\u7d22\u91cc\u4e9a\u8bfa\u6234\u5e3d\u6bd4\u57c3\u62c9\u4e24\u7403 \u56fd\u5b896-3\u80dc\u534e\u590f\u534a\u7a0b\u767b\u9876<br/>", "15": "\u672c\u8f6e\u70ed\u70b9\uff1a<br/>1.\u4e2d\u8d85-\u66b4\u529b\u9e1f\u53cc\u54cd\u5854\u5229\u65af\u5361\u7834\u95e8 \u6052\u59274-2\u5ba2\u80dc\u5bcc\u529b<br/>2.\u4e2d\u8d85-\u5361\u62c9\u65af\u79d1\u7834\u95e8 \u4e00\u65b91-0\u4e0a\u6e2f\u7ec8\u7ed3\u4e09\u8fde\u8d25<br/>3.\u4e2d\u8d85-\u5854\u795e\u7834\u95e8\u5965\u53e4\u65af\u6258\u4efb\u610f\u7403\u5efa\u529f \u56fd\u5b891-1\u9c81\u80fd\u4ecd\u9886\u8dd1<br/>", "16": "\u672c\u8f6e\u70ed\u70b9\uff1a<br/>1.\u4e2d\u8d85-\u9ad8\u62c9\u7279\u5934\u69cc\u8c2d\u9f99\u53cc\u54cd+\u7edd\u6740 \u4e9a\u6cf03-2\u9006\u8f6c\u6052\u5927<br/>2.\u4e2d\u8d85-\u7a46\u8c22\u594e\u6234\u5e3d\u5361\u62c9\u65af\u79d1\u4e24\u52a9 \u4e00\u65b93-0\u5bcc\u529b\u8fce\u4e24\u8fde\u80dc<br/>3.\u4e2d\u8d85-\u5f20\u7a00\u54f2\u7834\u95e8\u6bd4\u57c3\u62c9\u4f20\u5c04 \u56fd\u5b893-1\u82cf\u5b81\u7ee7\u7eed\u9886\u8dd1<br/>", "17": "\u672c\u8f6e\u70ed\u70b9\uff1a<br/>1.\u4e2d\u8d85-\u5e7f\u5dde\u5854\u4f20\u5c04\u9ad8\u62c9\u7279\u90dc\u6797\u5404\u53cc\u54cd \u6052\u59275-0\u5ba2\u80dc\u5efa\u4e1a<br/>2.\u4e2d\u8d85-\u5965\u53e4\u65af\u6258\u9020\u4e09\u7403\u5df4\u574e\u5e03\u53cc\u54cd \u56fd\u5b895-2\u80dc\u4e00\u65b9<br/>3.\u4e2d\u8d85-\u4f69\u83b1\u53cc\u54cd\u84bf\u4fca\u95f5\u9020\u70b9 \u9c81\u80fd3-1\u80dc\u534e\u590f<br/>", "18": "\u672c\u8f6e\u70ed\u70b9\uff1a<br/>1.\u4e2d\u8d85-\u66b4\u529b\u9e1f\u767e\u573a\u9020\u4e09\u7403\u5854\u5229\u65af\u5361\u53cc\u54cd \u6052\u59275-0\u5927\u80dc\u6743\u5065<br/>2.\u4e2d\u8d85-\u6b66\u78ca\u4e24\u5c04\u4e00\u4f20+\u7edd\u6740 \u4e0a\u6e2f3-2\u91cd\u5e86\u53d6\u4e09\u8fde\u80dc<br/>3.\u4e2d\u8d85-\u65af\u8482\u592b\u7834\u95e8\u540e\u4f24\u9000 \u9c81\u80fd1-3\u5ba2\u8d1f\u6052\u4e30\u906d\u53cc\u6740<br/>", "19": "\u672c\u8f6e\u70ed\u70b9\uff1a<br/>1.\u4e2d\u8d85-\u4e09\u5916\u63f4\u9f50\u7834\u95e8\u4f69\u83b1\u96be\u6551\u4e3b \u6052\u59274-1\u5ba2\u80dc\u9c81\u80fd<br/>2.\u4e2d\u8d85-\u5f20\u7a00\u54f2\u4f20\u5c04\u5965\u53e4\u65af\u6258\u6234\u5e3d \u56fd\u5b895-2\u9006\u8f6c\u6cf0\u8fbe<br/>3.\u4e2d\u8d85-\u8d75\u65ed\u65e5\u4e16\u754c\u6ce2\u5f20\u9e6d\u6251\u70b9 \u6743\u5065\u4e3b\u573a1-0\u6052\u4e30<br/>", "20": "\u672c\u8f6e\u70ed\u70b9\uff1a<br/>1.\u4e2d\u8d85-\u90dc\u6797\u5efa\u529f\u6768\u7acb\u745c\u66ff\u8865\u7edd\u6740 \u6052\u5927\u4e3b\u573a2-1\u9006\u8f6c\u7533\u82b1<br/>2.\u4e2d\u8d85-\u6bd4\u57c3\u62c9\u4f20\u5c04\u88c1\u5224\u4e89\u8bae\u5224\u7f5a \u56fd\u5b892-1\u65af\u5a01\u7ee7\u7eed\u9886\u8dd1<br/>3.\u4e2d\u8d85-\u76d6\u5766\u4e16\u754c\u6ce2\u8001\u5c06\u5468\u633a\u7834\u95e8 \u4e00\u65b94-3\u9001\u9c81\u80fd\u4e09\u8fde\u8d25<br/>", "21": "\u672c\u8f6e\u70ed\u70b9\uff1a<br/>1.\u4e2d\u8d85-\u66fe\u8bda\u6251\u70b9\u5854\u5229\u65af\u5361\u8865\u65f6\u7edd\u6740 \u6052\u59271-0\u56fd\u5b89\u4e94\u8fde\u80dc<br/>2.\u4e2d\u8d85-\u6b66\u78ca\u5efa\u529f\u5965\u65af\u5361\u53cc\u54cd \u4e0a\u6e2f5-2\u5ba2\u80dc\u6cf0\u8fbe\u91cd\u8fd4\u699c\u9996<br/>3.\u4e2d\u8d85-\u4f69\u83b1\u5efa\u529f\u96f7\u9e1f\u4e16\u754c\u6ce2\u96be\u6551\u4e3b \u9c81\u80fd\u4e3b\u573a2-1\u5bcc\u529b<br/>", "22": "\u672c\u8f6e\u70ed\u70b9\uff1a<br/>1.\u4e2d\u8d85-\u5854\u5229\u65af\u5361\u53cc\u54cd \u6052\u5927\u8fde\u8ffd\u4e09\u7403\u5ba2\u573a3-2\u9006\u8f6c\u82cf\u5b81<br/>2.\u4e2d\u8d85-\u65af\u8482\u592b\u4f20\u5c04\u4e8e\u5927\u5b9d\u67d3\u7ea2 \u56fd\u5b892-3\u5ba2\u8d1f\u6052\u4e30\u906d\u4e24\u8fde\u8d25<br/>3.\u4e2d\u8d85-\u7a46\u8c22\u594e\u53cc\u54cd\u5218\u82e5\u9492\u5904\u5b50\u7403 \u4e00\u65b92-1\u9001\u7533\u82b1\u4e94\u8f6e\u4e0d\u80dc<br/>", "23": "\u672c\u8f6e\u70ed\u70b9\uff1a<br/>1.\u4e2d\u8d85-\u80e1\u5c14\u514b\u7834\u95e8VAR\u53d6\u6d88\u6bd4\u57c3\u62c9\u8fdb\u7403 \u4e0a\u6e2f1-0\u56fd\u5b89\u9886\u8dd1<br/>2.\u4e2d\u8d85-\u963f\u5170\u70b9\u5c04\u90dc\u6797\u5934\u69cc\u5efa\u529f \u6052\u59273-0\u5b8c\u80dc\u4e00\u65b9\u6210\u529f\u590d\u4ec7<br/>3.\u4e2d\u8d85-\u8d39\u5c14\u5357\u591a\u8fdc\u5c04\u5361\u5c14\u5fb7\u514b\u53cc\u54cd \u91cd\u5e863-0\u9001\u6743\u50654\u8f6e\u4e0d\u80dc<br/>", "24": "\u672c\u8f6e\u70ed\u70b9\uff1a<br/>1.\u4e2d\u8d85-\u7a46\u8c22\u594e\u53cc\u54cd\u5361\u62c9\u65af\u79d1\u5efa\u529f \u4e00\u65b93-1\u82cf\u5b81\u4e3b\u573a\u516d\u8fde\u80dc<br/>2.\u4e2d\u8d85-\u90dc\u6797\u95ea\u51fb\u963f\u5170\u4e24\u4f20\u4e00\u5c04 \u6052\u59273-0\u5ba2\u80dc\u534e\u590f<br/>3.\u4e2d\u8d85-\u6b66\u78ca\u6885\u5f00\u4e8c\u5ea6\u80e1\u5c14\u514b\u4f20\u5c04 \u4e0a\u6e2f5-0\u8d35\u5dde\u8c6a\u53d6\u4e94\u8fde\u80dc<br/>", "25": "\u672c\u8f6e\u70ed\u70b9\uff1a<br/>1.\u4e2d\u8d85-\u90d1\u9f99\u53cc\u54cd\u4e8e\u6c49\u8d85\u7cbe\u5f69\u4e16\u754c\u6ce2 \u6052\u5927\u4e3b\u573a6-1\u4eba\u548c<br/>2.\u4e2d\u8d85-\u57c3\u795e\u5931\u826f\u673a \u4e0a\u6e2f\u5ba2\u573a0-0\u5e73\u82cf\u5b81\u4ec5\u9886\u5148\u6052\u59272\u5206<br/>3.\u4e2d\u8d85-\u738b\u5bff\u633a97\u5206\u949f\u9001\u70b9\u7d22\u91cc\u4e9a\u8bfa\u7edd\u5e73 \u56fd\u5b89\u4e3b\u573a1-1\u4e9a\u6cf0<br/>", "26": "\u672c\u8f6e\u70ed\u70b9\uff1a<br/>1.\u4e2d\u8d85-\u6b66\u78ca\u9020\u56db\u7403+\u4e2d\u8d85\u767e\u7403 \u4e0a\u6e2f4-2\u9c81\u80fd\u91cd\u8fd4\u699c\u9996<br/>2.\u4e2d\u8d85-\u5361\u5170\u52a0\u7834\u95e8\u675c\u957f\u6770\u5efa\u529f \u56fd\u5b890-2\u5ba2\u8d1f\u5efa\u4e1a<br/>3.\u4e2d\u8d85-\u5854\u5229\u65af\u5361\u4f20\u5c04\u4e8e\u6c49\u8d85\u7834\u95e8 \u6052\u59273-0\u5ba2\u80dc\u8d35\u5dde<br/>", "27": "\u672c\u8f6e\u70ed\u70b9\uff1a<br/>1.\u4e2d\u8d85-\u4e09\u571f\u70ae\u7834\u95e8\u80e1\u5c14\u514b\u5efa\u529f \u4e0a\u6e2f5-4\u6218\u80dc\u6052\u5927\u593a\u51a0\u5728\u671b<br/>2.\u4e2d\u8d85-\u91cc\u5361\u591a\u53cc\u54cd\u5434\u9f91\u6251\u70b9 \u5efa\u4e1a\u5ba2\u573a2-0\u7533\u82b1\u9003\u79bb\u964d\u7ea7\u533a<br/>3.\u4e2d\u8d85-\u5218\u6d0b\u4e2d\u8d85\u9996\u7403\u5409\u5c14\u7834\u95e8 \u9c81\u80fd2-0\u4e9a\u6cf0\u9501\u5b9a\u4e9a\u51a0\u8d44\u683c<br/>", "28": "\u672c\u8f6e\u70ed\u70b9\uff1a<br/>1.\u4e2d\u8d85-\u6b66\u78ca\u7834\u95e8\u521b\u7eaa\u5f55 \u4e0a\u6e2f2-1\u4eba\u548c\u63d0\u524d\u4e00\u8f6e\u4e2d\u8d85\u6367\u676f<br/>2.\u4e2d\u8d85-\u8d39\u9e1f\u4f20\u5c04\u585e\u5df4\u7834\u95e8 \u5341\u4eba\u6052\u59270-2\u8d1f\u91cd\u5e86\u65e0\u7f18\u51a0\u519b<br/>3.\u4e2d\u8d85-\u8d75\u82f1\u6770\u4e16\u754c\u6ce2 \u6cf0\u8fbe3-1\u9006\u8f6c\u4e00\u65b9\u4ecd\u5b58\u4fdd\u7ea7\u5e0c\u671b<br/>", "29": "\u672c\u8f6e\u70ed\u70b9\uff1a<br/>1.\u4e2d\u8d85-\u5361\u62c9\u65af\u79d1\u7834\u95e8\u91cc\u4e9a\u65af\u79d1\u65af\u5efa\u529f \u4e00\u65b92-0\u9001\u4e9a\u6cf0\u964d\u7ea7<br/>2.\u4e2d\u8d85-\u5854\u5229\u65af\u5361\u7834\u95e8\u963f\u5170\u53cc\u54cd \u5341\u4eba\u6052\u59275-1\u9006\u8f6c\u6cf0\u8fbe<br/>3.\u4e2d\u8d85-\u8036\u62c9\u7ef4\u5947\u7834\u95e8 \u65af\u5a01\u5ba2\u573a0-1\u4e0d\u654c\u6052\u4e30\u4ecd\u4fdd\u7ea7\u6210\u529f<br/>"}
		for (let i = 0; i < 30; i++) {
    lineData.push({
        "name": i,
        "value": data[i],
        "tip0": round_focus[i.toString()]
    });
}
		var myChart = echarts.init(document.getElementById('round_heat'));
	var option = {
		title: {
			text: '2018赛季中超各轮讨论热度趋势图'
		},
		tooltip : {
			trigger: 'axis',
			formatter: function(params) {
				return '热度: ' + params[0]["data"].value + "<br/>" + params[0]["data"].tip0;
			},
			axisPointer: {
				type: 'cross',
				label: {
					backgroundColor: '#6a7985'
				}
			}
		},
		legend: {
			data:['热度'],
			x:"right"
		},
		grid: {
			left: '3%',
			right: '4%',
			bottom: '3%',
			containLabel: true
		},
		xAxis : [
			{
				name : '日期',
				type : 'category',
				boundaryGap : false,
				markPoint: {
					show : true,
					data: [
						{type: 'max', name: '最大值'},
						{type: 'min', name: '最小值'}
					]
				},
				data : [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30]
			}
		],
		yAxis : [
			{
				type : 'value'
			}
		],
		series : [
			{
				name : '热度',
				type:'line',
				markPoint: {
					data: [
						{type: 'max', name: '最大值'},
						{type: 'min', name: '最小值'}
					]
				},
				data:lineData
			}
		]
	};
	// 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
