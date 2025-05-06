fetch('https://ipwho.is/')
.then(res => res.json())
.then(data => {
  const country = data.country_code;
   console.log(data)
  const currentHost = window.location.hostname;

  // Redirect UK users to companion store
  if (country === "GB" && currentHost.includes("abdullah-practice-mean3")) {
    window.location.href = "https://companion-mean3.myshopify.com/";
  }

  // Redirect Pakistan users to abdullah store
  if (country === "PK" && currentHost.includes("companion-mean3")) {
    window.location.href = "https://abdullah-practice-mean3.myshopify.com/";
  }
})
.catch(err => console.error("Geo fetch error:", err));
