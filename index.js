import{A as v}from"./assets/vendor-CTqzIL4Y.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const r of t.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&a(r)}).observe(document,{childList:!0,subtree:!0});function p(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=p(e);fetch(e.href,t)}})();const l=document.querySelector("button.js-burger-menu"),d=document.querySelector("div.js-mobile-menu"),f=document.querySelector("#mobile-menu"),c=document.querySelector("div.js-nav-menu"),L=window.matchMedia("(min-width: 768px)");y();L.addEventListener("change",g);function y(){window.innerWidth>=768?c.addEventListener("click",s):l.addEventListener("click",i)}function i(){d.classList.add("is-open"),document.body.style.position="fixed",this.removeEventListener("click",i),f.addEventListener("click",u)}function u(n){n.target.nodeName!=="DIV"&&n.target.nodeName!=="UL"&&(d.classList.remove("is-open"),document.body.style.position="",this.removeEventListener("click",u),l.addEventListener("click",i))}function s(){document.querySelector("ul.menu-nav-list").classList.toggle("is-visible")}function g(n){if(!n.matches){l.addEventListener("click",i),c.removeEventListener("click",s);return}d.classList.remove("is-open"),document.body.style.position="",f.removeEventListener("click",u),c.addEventListener("click",s)}document.querySelector(".accordion-container");new v(".accordion",{openOnInit:[],showMultiple:!1,duration:500,easing:"ease-in-out",triggerClass:"btn-svg-opn",panelClass:"accordion-content",elementClass:"accordion-item"});const m=document.querySelectorAll(".btn-svg-opn");m.forEach(n=>{n.addEventListener("click",()=>{m.forEach(o=>{o!==n&&o.classList.remove("rotate")}),n.classList.toggle("rotate")})});
//# sourceMappingURL=index.js.map
