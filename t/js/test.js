    function 多组合编辑框(name,event){   
        //name表示组件在被创建时的名称，event表示组件拥有的事件
        //如果组件有多个事件，可以在后面继续填写这些事件名称
        //例如：function 多组合编辑框(name,event1,event2,event3){
        
        //组件内部属性，仅供组件内部使用：
        this.名称 = name;
        
		this.添加项目 = function (左侧标题,右侧标题,文本类型,标记){
			
		var div = document.createElement("div");//日常创建div节点
		div.className = "mui-input-row"; //创建一个类名
		var inputs = document.getElementById(this.名称).getElementsByClassName("mui-input-row");
		var index = 0;
            if(inputs==null){
                index = 0;
            }else{
                index = inputs.length;
            }
        div.setAttribute("index",index);//set index
		div.setAttribute("tag",标记);//set tag
		div.innerHTML = "<label>"+左侧标题+"</label>\n"+
                    "<input name='"+标记+"' type='"+文本类型+"' id='"+index+"' class='mui-input-clear mui-input' placeholder='"+右侧标题+"'>\n";
		var root = document.getElementById(this.名称);
			root.appendChild(div);//添加到根节点
		
		}
        //组件命令：
        this.置左侧标题 = function (index,title){
            var input = document.getElementById(this.名称).getElementsByClassName("mui-input-row");
            if(input==null){
                return;
            }
            if(input.length<=index){
                return;
            }
            var label = input[index].getElementsByTagName("label");
            label[0].innerText=title;
        } 
        
        //组件命令：
        this.取标题 = function (index){
           return document.getElementById(index).value;
            var input = document.getElementById(this.名称).getElementsByClassName("mui-input-row");
            if(input==null){
                return;
            }
            if(input.length<=index){
                return;
            }
            var label = input[index].getElementsByTagName("input");
                return label[0].value;
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