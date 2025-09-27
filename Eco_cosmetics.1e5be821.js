document.getElementById("message-form").addEventListener("submit",function(e){e.preventDefault(),fetch("#",{method:"POST",body:new FormData(this)}).then(e=>e.json()).then(e=>{console.log("Success:",e),window.alert("Form submitted successfully!")}).catch(e=>{console.error("Error:",e),window.alert("There was an error submitting the form.")})});
//# sourceMappingURL=Eco_cosmetics.1e5be821.js.map
