(function(){var f=document.getElementById('qf');if(!f)return;var via='sms';
f.querySelectorAll('button[name=via]').forEach(function(b){b.addEventListener('click',function(){via=b.value;});});
f.addEventListener('submit',function(e){e.preventDefault();var d=new FormData(f);var n=(d.get('name')||'').trim(),p=(d.get('phone')||'').trim(),c=(d.get('city')||'').trim(),w=(d.get('what')||'').trim();
var err=document.getElementById('qerr');if(!n||!p||!w){err.hidden=false;return;}err.hidden=true;
var msg='Quote request - Rust & Roll Hauling\nName: '+n+'\nPhone: '+p+(c?'\nCity: '+c:'')+'\nNeeds hauling: '+w;
if(via==='email'){location.href='mailto:pawnsweat2021@gmail.com?subject='+encodeURIComponent('Quote request from '+n)+'&body='+encodeURIComponent(msg);}
else{var ios=/iPad|iPhone|iPod|Mac/.test(navigator.userAgent);location.href='sms:+17604106887'+(ios?'&':'?')+'body='+encodeURIComponent(msg);}});
var y=document.getElementById('yr');if(y)y.textContent=new Date().getFullYear();})();
