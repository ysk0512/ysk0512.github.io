// All copy stays in the HTML so the Korean page remains usable without JavaScript.
const language = new URLSearchParams(location.search).get('lang') === 'en' ? 'en' : 'ko';
document.documentElement.lang = language;
document.querySelectorAll('[data-ko][data-en]').forEach(element => {
  element.textContent = element.dataset[language];
});
document.querySelectorAll('[data-alt-ko][data-alt-en]').forEach(image => {
  image.alt = image.getAttribute(`data-alt-${language}`);
});
document.querySelectorAll('[data-shot]').forEach(image => {
  image.src = `assets/${language}/${image.dataset.shot}.webp`;
});
document.querySelectorAll('[data-language]').forEach(link => {
  if (link.dataset.language === language) link.setAttribute('aria-current', 'page');
  else link.removeAttribute('aria-current');
});
if (language === 'en') {
  document.title = 'Nyang Nyang Box: Cat Merge · Your little box of cozy';
  document.querySelector('meta[name="description"]').content = 'Drop, merge, and meet your next kitty. A cozy cat puzzle with Paw Chop, cute outfits, and a collection of little friends. Coming to iPhone.';
  document.querySelector('link[rel="canonical"]').href = 'https://ysk0512.github.io/nyangnyangbox/?lang=en';
}
