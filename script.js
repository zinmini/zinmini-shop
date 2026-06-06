```javascript
document.addEventListener("DOMContentLoaded", () => {

    const discordBtn = document.querySelector(".btn");

    if(discordBtn){
        discordBtn.addEventListener("click", () => {
            alert("Đang chuyển đến Discord...");
        });
    }

    console.log("ZINMINI SHOP Loaded");
});
```
