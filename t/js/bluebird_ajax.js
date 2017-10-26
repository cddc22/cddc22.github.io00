
    //相关文档地址 http://dev.dcloud.net.cn/mui/ajax/

    function 网络操作(name,eventName){  
        this.名称 = name;
        this.服务端返回数据类型 = "";
        this.请求头 = null;
        this.跨域 = false;

        this.取网络状态 = function(){
            return plus.networkinfo.getCurrentType();
            /*plus.networkinfo.CONNECTION_UNKNOW：0  未知状态
              plus.networkinfo.CONNECTION_NONE：1  无网络连接
              plus.networkinfo.CONNECTION_ETHERNET：2 有线网络
              plus.networkinfo.CONNECTION_WIFI：3 WIFI网络
              plus.networkinfo.CONNECTION_CELL2G：4   2G网络
              plus.networkinfo.CONNECTION_CELL3G：5   3G网络
              plus.networkinfo.CONNECTION_CELL4G：6   4G网络
            */
        }
        
        this.置跨域请求 = function(cross){
            this.跨域 = cross;
        }
        
        this.置附加请求头 = function(header){
            this.请求头 = header;
        }

        this.置UserAgent = function(ua){
            plus.navigator.setUserAgent(ua, false);
        }

        this.取UserAgent = function(){
            return plus.navigator.getUserAgent();
        }

        this.置Cookie = function(url, value){
            plus.navigator.setCookie(url, value);
        }

        this.取Cookie = function(url){
            return plus.navigator.getCookie(url);
        }

        this.删除全部Cookie = function(){
            return plus.navigator.removeAllCookie();
        }

        this.删除指定Cookie = function(url){
            return plus.navigator.removeCookie(url);
        }

        this.删除会话Cookie = function(){
            return plus.navigator.removeSessionCookie();
        }
                
        this.发送网络请求 = function (url地址,type请求类型,dataType返回数据类型,data数据,timeout超时){
            this.服务端返回数据类型 = dataType返回数据类型;
            
            mui.ajax(url地址, {
                        crossDomain:this.跨域,
                        type: type请求类型,                        
                        headers:this.请求头,
                        dataType: dataType返回数据类型,
                        data: data数据,
                        timeout: timeout超时,
                        
                        success: function(response) {
                            complete(true,response);
                        },
                        
                        error: function(xhr,type,errorThrown) {
                            complete(false,type);
                        }
                    });  
                    
        }
        
        var complete = function(result,response) {
            if(eventName==null){
                return;
            }
            if(result==true){
                if (this.服务端返回数据类型 === "json") {
                    response = JSON.stringify(response);
                } else if (this.服务端返回数据类型 === "xml") {
                    response = new XMLSerializer().serializeToString(response);
                }
            }
            eventName(result,response);//发送完毕
        };      
        
    }  


 