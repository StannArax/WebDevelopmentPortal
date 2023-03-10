function OnPageLoad() {
  $("#navigator").load("pages/navigation-menu.html");
  $("#page-article-space").load("pages/main.html");
  var link = document.querySelector("link[rel~='icon']");
  if (!link) {
    link = document.createElement("link");
    link.rel = "icon";
    document.getElementsByTagName("head")[0].appendChild(link);
  }
  link.href = 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512"><path d="M80 212v236a16 16 0 0016 16h96V328a24 24 0 0124-24h80a24 24 0 0124 24v136h96a16 16 0 0016-16V212" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"/><path d="M480 256L266.89 52c-5-5.28-16.69-5.34-21.78 0L32 256M400 179V64h-48v69" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"/></svg>'
  link.rel = "icon";
  document.getElementsByTagName("head")[0].appendChild(link);
  window.history.pushState("page2", "Title", "home");
}
function replaceContent(id) {
  if (id == "idHome") {
    $("#page-article-space").load("pages/main.html")
    var link = document.querySelector("link[rel~='icon']");
    if (!link) {
      link = document.createElement("link");
      link.rel = "icon";
      document.getElementsByTagName("head")[0].appendChild(link);
    }
    link.href = 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512"><path d="M80 212v236a16 16 0 0016 16h96V328a24 24 0 0124-24h80a24 24 0 0124 24v136h96a16 16 0 0016-16V212" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"/><path d="M480 256L266.89 52c-5-5.28-16.69-5.34-21.78 0L32 256M400 179V64h-48v69" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"/></svg>'
    link.rel = "icon";
    document.getElementsByTagName("head")[0].appendChild(link);
    window.history.pushState("page2", "Title", "home");
  }
  else if (id == "idProjects") {
    $("#page-article-space").load("pages/projects.html");
    var link = document.querySelector("link[rel~='icon']");
    if (!link) {
      link = document.createElement("link");
      link.rel = "icon";
      document.getElementsByTagName("head")[0].appendChild(link);
    }
    link.href = 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512"><path d="M436.67 184.11a27.17 27.17 0 01-38.3 0l-22.48-22.49a27.15 27.15 0 010-38.29l50.89-50.89a.85.85 0 00-.26-1.38C393.68 57 351.09 64.15 324.05 91c-25.88 25.69-27.35 64.27-17.87 98a27 27 0 01-7.67 27.14l-173 160.76a40.76 40.76 0 1057.57 57.54l162.15-173.3a27 27 0 0126.77-7.7c33.46 8.94 71.49 7.26 97.07-17.94 27.49-27.08 33.42-74.94 20.1-102.33a.85.85 0 00-1.36-.22z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32"/><path d="M224 284c-17.48-17-25.49-24.91-31-30.29a18.24 18.24 0 01-3.33-21.35 20.76 20.76 0 013.5-4.62l15.68-15.29a18.66 18.66 0 015.63-3.87 18.11 18.11 0 0120 3.62c5.45 5.29 15.43 15 33.41 32.52M317.07 291.3c40.95 38.1 90.62 83.27 110 99.41a13.46 13.46 0 01.94 19.92L394.63 444a14 14 0 01-20.29-.76c-16.53-19.18-61.09-67.11-99.27-107" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"/><path d="M17.34 193.5l29.41-28.74a4.71 4.71 0 013.41-1.35 4.85 4.85 0 013.41 1.35h0a9.86 9.86 0 008.19 2.77c3.83-.42 7.92-1.6 10.57-4.12 6-5.8-.94-17.23 4.34-24.54a207 207 0 0119.78-22.6c6-5.88 29.84-28.32 69.9-44.45A107.31 107.31 0 01206.67 64c22.59 0 40 10 46.26 15.67a89.54 89.54 0 0110.28 11.64 78.92 78.92 0 00-9.21-2.77 68.82 68.82 0 00-20-1.26c-13.33 1.09-29.41 7.26-38 14-13.9 11-19.87 25.72-20.81 44.71-.68 14.12 2.72 22.1 36.1 55.49a6.6 6.6 0 01-.34 9.16l-18.22 18a6.88 6.88 0 01-9.54.09c-21.94-21.94-36.65-33.09-45-38.16s-15.07-6.5-18.3-6.85a30.85 30.85 0 00-18.27 3.87 11.39 11.39 0 00-2.64 2 14.14 14.14 0 00.42 20.08l1.71 1.6a4.63 4.63 0 010 6.64L71.73 246.6a4.71 4.71 0 01-3.41 1.4 4.86 4.86 0 01-3.41-1.35l-47.57-46.43a4.88 4.88 0 010-6.72z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"/></svg>'
    link.rel = "icon";
    document.getElementsByTagName("head")[0].appendChild(link);
    window.history.pushState("page2", "Title", "projects");
  }
  else if (id == "idChat") {
    $("#page-article-space").load("pages/chat.html");
    var link = document.querySelector("link[rel~='icon']");
    if (!link) {
      link = document.createElement("link");
      link.rel = "icon";
      document.getElementsByTagName("head")[0].appendChild(link);
    }
    link.href = 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512"><path d="M87.49 380c1.19-4.38-1.44-10.47-3.95-14.86a44.86 44.86 0 00-2.54-3.8 199.81 199.81 0 01-33-110C47.65 139.09 140.73 48 255.83 48 356.21 48 440 117.54 459.58 209.85a199 199 0 014.42 41.64c0 112.41-89.49 204.93-204.59 204.93-18.3 0-43-4.6-56.47-8.37s-26.92-8.77-30.39-10.11a31.09 31.09 0 00-11.12-2.07 30.71 30.71 0 00-12.09 2.43l-67.83 24.48a16 16 0 01-4.67 1.22 9.6 9.6 0 01-9.57-9.74 15.85 15.85 0 01.6-3.29z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32"/></svg>'
    link.rel = "icon";
    document.getElementsByTagName("head")[0].appendChild(link);
    window.history.pushState("page2", "Title", "chat");
  }
  else if (id == "idPhotos") {
    $("#page-article-space").load("pages/photos.html");
    var link = document.querySelector("link[rel~='icon']");
    if (!link) {
      link = document.createElement("link");
      link.rel = "icon";
      document.getElementsByTagName("head")[0].appendChild(link);
    }
    link.href = 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512"><rect x="48" y="80" width="416" height="352" rx="48" ry="48" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="32"/><circle cx="336" cy="176" r="32" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32"/><path d="M304 335.79l-90.66-90.49a32 32 0 00-43.87-1.3L48 352M224 432l123.34-123.34a32 32 0 0143.11-2L464 368" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"/></svg>'
    link.rel = "icon";
    document.getElementsByTagName("head")[0].appendChild(link);
    window.history.pushState("page2", "Title", "photos");
  }
  else if (id == "idSettings") {
    $("#page-article-space").load("pages/settings.html");
    var link = document.querySelector("link[rel~='icon']");
    if (!link) {
      link = document.createElement("link");
      link.rel = "icon";
      document.getElementsByTagName("head")[0].appendChild(link);
    }
    link.href = 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512"><path d="M262.29 192.31a64 64 0 1057.4 57.4 64.13 64.13 0 00-57.4-57.4zM416.39 256a154.34 154.34 0 01-1.53 20.79l45.21 35.46a10.81 10.81 0 012.45 13.75l-42.77 74a10.81 10.81 0 01-13.14 4.59l-44.9-18.08a16.11 16.11 0 00-15.17 1.75A164.48 164.48 0 01325 400.8a15.94 15.94 0 00-8.82 12.14l-6.73 47.89a11.08 11.08 0 01-10.68 9.17h-85.54a11.11 11.11 0 01-10.69-8.87l-6.72-47.82a16.07 16.07 0 00-9-12.22 155.3 155.3 0 01-21.46-12.57 16 16 0 00-15.11-1.71l-44.89 18.07a10.81 10.81 0 01-13.14-4.58l-42.77-74a10.8 10.8 0 012.45-13.75l38.21-30a16.05 16.05 0 006-14.08c-.36-4.17-.58-8.33-.58-12.5s.21-8.27.58-12.35a16 16 0 00-6.07-13.94l-38.19-30A10.81 10.81 0 0149.48 186l42.77-74a10.81 10.81 0 0113.14-4.59l44.9 18.08a16.11 16.11 0 0015.17-1.75A164.48 164.48 0 01187 111.2a15.94 15.94 0 008.82-12.14l6.73-47.89A11.08 11.08 0 01213.23 42h85.54a11.11 11.11 0 0110.69 8.87l6.72 47.82a16.07 16.07 0 009 12.22 155.3 155.3 0 0121.46 12.57 16 16 0 0015.11 1.71l44.89-18.07a10.81 10.81 0 0113.14 4.58l42.77 74a10.8 10.8 0 01-2.45 13.75l-38.21 30a16.05 16.05 0 00-6.05 14.08c.33 4.14.55 8.3.55 12.47z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"/></svg>'
    link.rel = "icon";
    document.getElementsByTagName("head")[0].appendChild(link);
    window.history.pushState("page2", "Title", "settings");
  }
}
var isDark = false;
function changeTheme() {
  isDark = !isDark;
  //--clr: #161718;
  //--navclr: #fdfdfd;
  //--indclr: #f4f80a;
  //--backclr: black;
  //--forecld: white;
  //--navtextclr: black;

  if (isDark) {
    $(':root').css('--clr', '#fafafa');
    $(':root').css('--indclr', '#2cd419');
    $(':root').css('--navclr', '#212121');
    $(':root').css('--backclr', 'black');
    $(':root').css('--forecld', 'white');
    $(':root').css('--navtextclr', 'white');
    document.getElementById("left11").style.fill = "black";
    document.getElementById("left12").style.fill = "black";
    document.getElementById("left21").style.fill = "black";
    document.getElementById("left31").style.fill = "black";
    document.getElementById("chat-left").style.backgroundColor = "#a3a3a3";
    document.getElementById("chat-left").style.color = "#fcfcfc";
    document.getElementById("chat-new").style.backgroundcolor = "#a3a3a3";
    document.getElementById("chat-new").style.color = "#ededed";
    document.getElementById("chat-right").style.backgroundColor = "#c2c2c2";
    document.getElementById("chat-right").style.color = "rgb(48, 48, 48)";
    document.getElementById("chat-textbox").style.backgroundColor = "#f5eded";
    document.getElementById("chat-textbox").style.color = "rgb(48, 48, 48)";
  }
  else {
    $(':root').css('--clr', '#161718');
    $(':root').css('--indclr', '#f4f80a');
    $(':root').css('--navclr', '#fdfdfd');
    $(':root').css('--backclr', 'white');
    $(':root').css('--forecld', 'black');
    $(':root').css('--navtextclr', 'black');
    document.getElementById("left11").style.fill = "white";
    document.getElementById("left12").style.fill = "white";
    document.getElementById("left21").style.fill = "white";
    document.getElementById("left31").style.fill = "white";
    document.getElementById("chat-left").style.backgroundColor = "rgb(37, 37, 37)";
    document.getElementById("chat-left").style.color = "white";
    document.getElementById("chat-new").style.color = "wheat";
    document.getElementById("chat-right").style.backgroundColor = "rgb(48, 48, 48)";
    document.getElementById("chat-right").style.color = "white";
    document.getElementById("chat-textbox").style.backgroundColor = "white";
    document.getElementById("chat-textbox").style.color = "rgb(48, 48, 48)";
  }
}
function loginPerformClick() {
  let modal = document.createElement("div");
  modal.style.position = "fixed";
  modal.style.top = "0";
  modal.style.left = "0";
  modal.style.width = "100%";
  modal.style.height = "100%";
  modal.style.backgroundColor = "rgba(0,0,0,0.5)";
  modal.style.display = "flex";
  modal.style.justifyContent = "center";
  modal.style.alignItems = "center";

  let iframe = document.createElement("iframe");
  iframe.src = "pages/register.html";
  iframe.style.width = "404px";
  iframe.style.height = "358px";
  iframe.style.border = "none";

  modal.appendChild(iframe);
  document.body.appendChild(modal);

  modal.addEventListener("click", function () {
    modal.remove();
  });
}
function redir(){
  window.location.href = "index.html";
}
function reloadPage(){
  window.location.reload();
}