import"./vendor.88fded0d.js";const u=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const r of t.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&o(r)}).observe(document,{childList:!0,subtree:!0});function c(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=c(e);fetch(e.href,t)}};u();const i=document.getElementById("top-header"),s=document.getElementById("hero-header"),d=document.getElementById("footer"),l=document.getElementById("open-menu-btn");l.addEventListener("click",()=>{document.getElementById("menu").classList.add("menu__open"),i.setAttribute("inert",!0),s.setAttribute("inert",!0),d.setAttribute("inert",!0)});const m=document.getElementById("close-menu-btn");m.addEventListener("click",()=>{document.getElementById("menu").classList.remove("menu__open"),i.removeAttribute("inert",!1),s.removeAttribute("inert",!1),d.removeAttribute("inert",!1)});
