    function 龙猫视频播放器(name,event){   
        //name表示组件在被创建时的名称，event表示组件拥有的事件
        //如果组件有多个事件，可以在后面继续填写这些事件名称
        //例如：function 龙猫视频播放器(name,event1,event2,event3){
        
        //组件内部属性，仅供组件内部使用：
        this.名称 = name;
        
        //组件命令：
        this.置视频播放地址 = function (url){
           // var video = document.getElementById(this.名称);
			 document.getElementById("v1").src=url;
        } 
		
        this.开始播放 = function (){
			 document.getElementById(this.名称).load();
        } 
      
        
        //组件命令：
        this.置可视 = function (value){
            if(value==true){
                var div = document.getElementById(this.名称);
                div.style.display="";//显示，也可以设置为block	                
            }else{
                var div = document.getElementById(this.名称);
                div.style.display="none"; //不占位隐藏               
            }
        } 
        
        //组件命令：
        this.置可视2 = function (value){
            if(value==true){
                var div = document.getElementById(this.名称).parentNode;
                div.style.visibility="visible";//显示	                
            }else{
                var div = document.getElementById(this.名称).parentNode;
                div.style.visibility="hidden"; //占位隐藏               
            }
        } 
        
        //组件事件
        if(event!=null){
 		document.getElementById(this.名称).addEventListener("tap", function () {
                event();//触发组件的相关事件，这里演示的是被单击事件
            });       	
        }
    }