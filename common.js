
function getC(){
  const p = new URLSearchParams(location.search);
  return Math.max(0, Math.min(CHAPTERS.length - 1, parseInt(p.get("c") || "0", 10) || 0));
}
function norm(s){ return (s||"").trim().toUpperCase().replace(/\s+/g,""); }
function matches(v, arr){ const n=norm(v); return arr.some(a => n.includes(norm(a))); }
function clock(){
  const e = document.getElementById("clock");
  if(!e) return;
  const d = new Date();
  e.textContent = d.toLocaleTimeString("zh-TW",{hour:"2-digit",minute:"2-digit",hour12:false});
}
clock(); setInterval(clock,1000);


function goBack(fallback){
  if(window.history.length > 1){
    window.history.back();
  }else if(fallback){
    window.location.href = fallback;
  }
}
