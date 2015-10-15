function getTitle(url,callback){
    var xhr=new XMLHttpRequest()
    xhr.onload = function() {
        var title=this.responseXML.title||"no title"
        callback(url,title)
    }
    xhr.open("GET", url ,true);
    xhr.responseType="document";
    xhr.send();
}
a= []//取得するURLの配列を格納
for(var i = 0;i<a.length;i++){
    getTitle(a[i], function(url, title) {
        console.log(title+","+url);
    });
}