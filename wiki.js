function qry(){
var q=document.getElementById("searchbox").value;
console.log(q)
document.getElementById("search-container").style.display='none'
document.getElementById("back").style.display='inline-block'
var url="https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=" + q + "&prop=info&inprop=url&utf8=&format=json&origin=*"
console.log(url)
fetch(url)
  .then(response => response.json())
  .then(json => {
      var que=json.query.search;
      que.forEach(item => {
        //   document.write(item.title + "<br>")
          var d= document.getElementById("result")
          var para = document.createElement("P");
          var title=item.title
          console.log(title)
          titleurl=encodeURIComponent(title.trim())
          para.innerHTML =  "<a href=https://en.wikipedia.org/wiki/" +titleurl + ">" + title + "</a><br>" + item.snippet + "...";
          d.appendChild(para);
        });
  })
}