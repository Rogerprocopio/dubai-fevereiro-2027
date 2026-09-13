(function () {
  "use strict";

  var WA_TEXT = "Olá! Quero saber mais sobre o roteiro Dubai Fevereiro 2027.";
  var WA_URL = "https://wa.me/5527997922687?text=" + encodeURIComponent(WA_TEXT);
  var CONSENT_KEY = "lgpd_consent_v1";

  function onWhatsAppClick() {
    if (window.__vsPixelLoad) window.__vsPixelLoad();
    if (window.fbq) window.fbq("track", "Contact");
  }

  document.querySelectorAll("[data-wa]").forEach(function (el) {
    el.setAttribute("href", WA_URL);
    el.addEventListener("click", onWhatsAppClick);
  });

  function lerConsentimento() {
    try {
      var raw = localStorage.getItem(CONSENT_KEY);
      if (!raw) return null;
      var data = JSON.parse(raw);
      if (data && typeof data === "object" && "accepted" in data) return !!data.accepted;
      if (data === true) return true;
      if (data === false) return false;
    } catch (err) {}
    return null;
  }

  function gravarConsentimento(aceito) {
    try {
      localStorage.setItem(CONSENT_KEY, JSON.stringify({
        accepted: aceito,
        date: new Date().toISOString()
      }));
    } catch (err) {}
    if (window.fbq) window.fbq("consent", aceito ? "grant" : "revoke");
    if (aceito && window.__vsPixelLoad) window.__vsPixelLoad();
  }

  var banner = document.getElementById("lgpd-banner");
  var aceitar = document.getElementById("lgpd-aceitar");
  var recusar = document.getElementById("lgpd-recusar");

  if (banner && lerConsentimento() !== null) {
    banner.hidden = true;
  }

  if (aceitar) {
    aceitar.addEventListener("click", function () {
      gravarConsentimento(true);
      banner.hidden = true;
    });
  }

  if (recusar) {
    recusar.addEventListener("click", function () {
      gravarConsentimento(false);
      banner.hidden = true;
    });
  }
})();
