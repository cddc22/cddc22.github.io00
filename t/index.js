mui.init({swipeBack: false
,gestureConfig: {tap: true,doubletap: true,longtap: true}});

var 轮播列表框1 = new 轮播列表框("轮播列表框1",true,2,null,null);
var 龙猫视频播放器1 = new 龙猫视频播放器("龙猫视频播放器1");
var 标签1 = new 标签("标签1",null);
var 列表框1 = new 列表框("列表框1",false,列表框1_表项被单击,null);
var 多组合编辑框1 = new 多组合编辑框("多组合编辑框1",null);
var HK精易1 = new HK精易("HK精易1");
var 按钮1 = new 按钮("按钮1",按钮1_被单击,null,null);
var 网络操作1 = new 网络操作("网络操作1",网络操作1_发送完毕);
var 对话框1 = new 对话框("对话框1",null,null,null);
if(mui.os.plus){
    mui.plusReady(function() {
        主窗口_创建完毕();
    });
}else{
    window.onload=function(){ 
        主窗口_创建完毕();
    }
}

var rand= 转换操作.到文本(数学操作.取随机数(6666,6666));
function 主窗口_创建完毕(){




	龙猫视频播放器1.置可视(false);

	轮播列表框1.置项目图片(0,"/images/1.jpg");
	轮播列表框1.置项目图片(1,"/images/2.jpg");
	轮播列表框1.置项目标题(0,"火星云解析-强大简约");
	轮播列表框1.置项目标题(1,"火星云解析-方便稳定");
	轮播列表框1.置轮播周期(3000);
	标签1.置可视2(false);
    HK精易1.组件移动("标签1","5px");
	HK精易1.组件移动("多组合编辑框1","8px");
	HK精易1.组件移动("按钮1","8px");
	列表框1.添加项目("系统设计思想：简约,强大,方便.系统将不断更新完善不足之处","","","");
	列表框1.添加项目("2017/10/17更新:优化后端以及前端逻辑代码,QQ群：670793833","","","");
	多组合编辑框1.添加项目("关键词：","输入种子关键词","text","");
	多组合编辑框1.添加项目("CDKEY：",rand,"text","");
}

function 按钮1_被单击(){
	if(多组合编辑框1.取标题(0)!="" && 多组合编辑框1.取标题(1)==rand){
	对话框1.显示等待框("正在获取数据,请耐心等待(15s).");
	网络操作1.发送网络请求("http://bt.lm992.cn/ hash.class.php","post","json","a="+多组合编辑框1.取标题(0),15000);
	}else{
	对话框1.信息框("提示","你不是真正的老司机.");
	}
}


function 网络操作1_发送完毕(发送结果,返回信息){
	对话框1.关闭等待框();
	if(发送结果==true && 返回信息 != ""){

	var typedata= 返回信息.type;
	      switch(typedata){
		  case "searchdata":
		     var 计次= 0;

			 列表框1.清空项目();
			 列表框1.添加项目("关键词搜索结果：","searchdata","","");
	         while(计次 < 返回信息.title.length){
		     列表框1.添加项目(返回信息.title[计次],返回信息.url[计次],"","");
		     计次 = 计次 + 1;
	         }
			 break;
		  case "hashlist":
		     var 计次= 0;

			 列表框1.清空项目();
			 列表框1.添加项目("种子解析结果：","hashlist","","");
	         while(计次 < 返回信息.title.length){
		     列表框1.添加项目(返回信息.title[计次],返回信息.url[计次],"","");
		     计次 = 计次 + 1;
	         }
			 break;
		  case "videourl":
		     轮播列表框1.置可视(false);
		     龙猫视频播放器1.置可视(true);
		     龙猫视频播放器1.置视频播放地址(返回信息.url);
			 龙猫视频播放器1.开始播放();
			break;
		  default:
		     对话框1.信息框("提示","后端数据不匹配.");
	}
	}else{
	对话框1.弹出提示("请求超时,建议重试,或该资源服务器中还未离线");
	}
}

function 列表框1_表项被单击(项目索引,项目标题,项目标记){
if(项目索引 != 0){
	switch(列表框1.取项目标记(0)){
	  case "searchdata":
	       对话框1.显示等待框("正在解析种子中(15s)..");
		   网络操作1.发送网络请求("http://bt.lm992.cn/hash.class.php","post","json","b="+ 列表框1.取项目标记(项目索引),15000);
		   break;
	  case "hashlist":
	       对话框1.显示等待框("正在获取播放地址中(15s)..");
		   网络操作1.发送网络请求("http://bt.lm992.cn/hash.class.php","post","json","c="+ 列表框1.取项目标记(项目索引),15000);
		   break;
	  default:
	      对话框1.信息框("提示","后端数据不匹配");
	}
	}else{
	对话框1.信息框("提示","你点人家干嘛？");
	}
}
