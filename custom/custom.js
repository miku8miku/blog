function addLoadEvent(o){var n=window.onload;"function"!=typeof window.onload?window.onload=o:window.onload=function(){n(),o()}}document.addEventListener("DOMContentLoaded",(o=>{console.log("DOM fully loaded and parsed"),Blog.hellworld()}));const Blog={hellworld:function(){console.info("--- Blog.hellowrold() ---")},setControlIcon:function(){console.info(new Date+": setControlIcon"),(document.getElementById("center-console").innerHTML||"").indexOf("fa-windows")<0&&(console.info("--- Blog.setControlIcon() ---"),document.getElementById("center-console").innerHTML='<i class="fa-brands fa-windows fa-beat-fade"></i>')},welcomeAlrt:function(){1!=sessionStorage.getItem("firstEnter")&&(sessionStorage.setItem("firstEnter",1),this.swalAler())},swalAler:function(o,n,e){Swal.fire({title:"",html:"<span style='color:red;'>欢迎光临</span>",type:"info",showCancelButton:!0,confirmButtonColor:"#DD6B55",confirmButtonText:"进入博客",cancelButtonText:"进入主页",allowOutsideClick:!1,background:"linear-gradient(145deg, #0396FF, transparent)"}).then((o=>{o.value?anzhiyu.musicToggle():location.href="https://home.geekswg.top"}))}};