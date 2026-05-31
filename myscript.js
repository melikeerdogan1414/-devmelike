let sepet =
JSON.parse(localStorage.getItem("sepet")) || [];


const sepetButonlari =
document.querySelectorAll(".sepetBtn");

sepetButonlari.forEach(function(btn)
{
    btn.addEventListener("click", function()
    {
        let urun = this.dataset.urun;

        let fiyat = "";

        if(urun === "Türk Kahvesi")
        {
            fiyat = "80 TL";
        }
        else if(urun === "Espresso")
        {
            fiyat = "90 TL";
        }
        else if(urun === "Americano")
        {
            fiyat = "95 TL";
        }
        else if(urun === "Cappuccino")
        {
            fiyat = "105 TL";
        }
        else if(urun === "Latte")
        {
            fiyat = "110 TL";
        }

        sepet.push(urun + " - " + fiyat);

        localStorage.setItem(
            "sepet",
            JSON.stringify(sepet)
        );

        alert(urun + " sepete eklendi.");
    });
});

const sepetAlani =
document.getElementById("sepetAlani");

if(sepetAlani)
{
    if(sepet.length === 0)
    {
        sepetAlani.innerHTML =
        "<p>Sepetiniz boş.</p>";
    }
    else
    {
        let liste = "<h2>Sepetinizdeki Ürünler</h2>";
        liste += "<ul>";

        sepet.forEach(function(urun)
        {
            liste += "<li>" + urun + "</li>";
        });

        liste += "</ul>";

        sepetAlani.innerHTML = liste;
    }
}
const temizleBtn =
document.getElementById("temizleBtn");

if(temizleBtn)
{
    temizleBtn.addEventListener("click", function()
    {
        sepet = [];

        localStorage.removeItem("sepet");

        sepetAlani.innerHTML =
        "<p>Sepetiniz boş.</p>";

        alert("Sepet temizlendi.");
    });
}