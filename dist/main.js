(()=>{const t=document.getElementById("locationInput"),e=document.getElementById("locationDisplay"),n=document.getElementById("temperatureDisplay"),o=document.getElementById("feelsLikeDisplay"),c=document.getElementById("conditionsDisplay"),i=document.getElementById("conditionsImage");document.getElementById("getWeatherButton").addEventListener("click",(async function(){const r=`http://api.weatherapi.com/v1/current.json?key=1fc1165584224c2184e181414233010&q=${t.value}&aqi=no`;try{const t=await fetch(r,{mode:"cors"});if(t.ok){const r=await t.json();e.textContent=r.location.name+", "+r.location.country,n.textContent="Temperature: "+r.current.temp_f+"°F",o.textContent="Feels like: "+r.current.feelslike_f+"°F",c.textContent="Conditions: "+r.current.condition.text,i.setAttribute("src","http:"+r.current.condition.icon),i.style.display="inline-block"}else console.error("Error fetching weather data: ",t.statusText)}catch(t){console.error("There was an error: ",t)}}))})();