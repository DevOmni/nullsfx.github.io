function nullsfx(t){this.sfx_list=t,this.audioEles={},this.addSFXs(this.sfx_list),window.addEventListener("DOMContentLoaded",(()=>{this.init()}))}nullsfx.prototype.init=function(){this.targets=document.querySelectorAll("[nsfx]"),this.targets.forEach((t=>{t.getAttribute("nsfx").trim().split(";").forEach((e=>{let n,r,[i,l]=e.trim().split("?",2);[i,n]=i.trim().split("!",2),[l,r]=l.trim().split("%",2),t.addEventListener(i,(e=>{e.stopPropagation(),"key"===i.substring(0,3)&&n&&e.key!==n||this.play(l,r??t.getAttribute("nsfx-vol"),e)}))}))}))},nullsfx.prototype.addSFXs=function(t={}){for(let[n,r]of Object.entries(t)){let t=document.createElement("audio");function e(){t.removeEventListener("ended",e),t.pause(),t.remove()}t.src=r,t.setAttribute("preload","auto"),t.setAttribute("controls","none"),t.volume=0,t.load(),this.audioEles[n]=t,t.addEventListener("ended",e)}},nullsfx.prototype.play=function(t,e=null){let n=this.audioEles[t].cloneNode();n.currentTime=0,n.volume=parseFloat(e)??1,n.play(),n.addEventListener("ended",(function t(){n.removeEventListener("ended",t),n.pause(),n.remove()}))},nullsfx.prototype.playTheList=function(t=[]){if(!t)return;let e=document.createElement("audio");return e.playlist=t,e.src=t[0],e.currentTrack=0,e.replay=!1,e.loop=!1,e.playing=!1,e.setAttribute("preload","auto"),e.setAttribute("controls","none"),e.volume=.8,e.load(),e.previous=()=>{let t=(i=e.currentTrack-1)<0?e.playlist.length-1:i;e.jumpTo(t)},e.next=()=>{let t=(i=e.currentTrack+1)>=e.playlist.length?0:i;e.jumpTo(t)},e.jumpTo=n=>{e.currentTrack=n,e.src=t[n],e.currentTime=0,e.playing&&e.play(),e.onTrackChange()},e.playIt=()=>{e.playing=!0,e.play()},e.pauseIt=()=>{e.playing=!1,e.pause()},e.addEventListener("ended",(function(){if(e.loop)return;e.currentTrack+1>=e.playlist.length&&!e.replay||e.next()})),e.onTrackChange=()=>{},e};