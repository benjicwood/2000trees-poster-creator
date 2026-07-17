export function trackBandSelectedOncePerSession({
  bandName,
  day,
  section,
  custom = false,
  divider = null,
}) {
  if (!bandName || typeof window.gtag !== "function") return;

  const normalisedBandName = bandName.trim().toUpperCase();
  const storageKey = `band-selected:${normalisedBandName}`;

  if (sessionStorage.getItem(storageKey)) {
    return;
  }

  window.gtag("event", "band_selected", {
    band_name: normalisedBandName,
    day,
    section,
    custom,
    divider,
    value: 1,
  });

  sessionStorage.setItem(storageKey, "true");
}