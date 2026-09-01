/* =======================================================
   Cyberyantra CMS - Admin Console
   Static demo only. Every record in this file is fabricated.
   ======================================================= */

(function(){
  "use strict";

  var BRAND = { name: "Cyberyantra", full: "Cyberyantra CMS", domain: "cyberyantra.com", mark: "CY" };
  var TOTAL_USERS_DISPLAY = "6,482";

  /* ---------------- ICONS ---------------- */
  var ICONS = {
    dashboard: "M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z",
    content: "M4 4h16v2H4V4zm0 5h16v2H4V9zm0 5h10v2H4v-2zm0 5h10v2H4v-2zm13-5v7l5-3.5L17 14z",
    users: "M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z",
    lock: "M12 17a2 2 0 100-4 2 2 0 000 4zm6-9h-1V6a5 5 0 00-10 0v2H6a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V10a2 2 0 00-2-2zM8.9 6A3.1 3.1 0 0112 2.9 3.1 3.1 0 0115.1 6v2H8.9V6z",
    mail: "M20 4H4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z",
    db: "M12 3C7.58 3 4 4.79 4 7s3.58 4 8 4 8-1.79 8-4-3.58-4-8-4zM4 9v3c0 2.21 3.58 4 8 4s8-1.79 8-4V9c0 2.21-3.58 4-8 4S4 11.21 4 9zm0 5v3c0 2.21 3.58 4 8 4s8-1.79 8-4v-3c0 2.21-3.58 4-8 4s-8-1.79-8-4z",
    sms: "M20 2H4a2 2 0 00-2 2v18l4-4h14a2 2 0 002-2V4a2 2 0 00-2-2z",
    activity: "M13 3a9 9 0 00-9 9H1l3.89 3.89.07.14L9 12H6a7 7 0 117 7v2a9 9 0 10-9-9 9 9 0 009 9 9 9 0 000-18z",
    settings: "M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58a.5.5 0 00.12-.61l-1.92-3.32a.5.5 0 00-.58-.22l-2.39.96a7.07 7.07 0 00-1.62-.94l-.36-2.54a.5.5 0 00-.5-.42h-3.84a.5.5 0 00-.5.42l-.36 2.54c-.59.24-1.13.55-1.62.94l-2.39-.96a.5.5 0 00-.58.22L1.68 8.87a.5.5 0 00.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58a.5.5 0 00-.12.61l1.92 3.32c.14.24.44.32.58.22l2.39-.96c.5.39 1.04.7 1.62.94l.36 2.54c.05.29.29.42.5.42h3.84c.25 0 .45-.18.5-.42l.36-2.54c.59-.24 1.13-.54 1.62-.94l2.39.96c.24.1.54 0 .58-.22l1.92-3.32a.5.5 0 00-.12-.61l-2.01-1.58zM12 15.6a3.6 3.6 0 110-7.2 3.6 3.6 0 010 7.2z",
    logout: "M17 7l-1.41 1.41L17.17 10H9v2h8.17l-1.58 1.59L17 15l4-4zM5 5h7V3H5a2 2 0 00-2 2v14a2 2 0 002 2h7v-2H5V5z",
    menu: "M3 6h18v2H3V6zm0 5h18v2H3v-2zm0 5h18v2H3v-2z",
    search: "M15.5 14h-.79l-.28-.27a6.5 6.5 0 10-.7.7l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0A4.5 4.5 0 1114 9.5 4.5 4.5 0 019.5 14z",
    bell: "M12 22a2 2 0 002-2h-4a2 2 0 002 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4a1.5 1.5 0 00-3 0v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z",
    chev: "M7 10l5 5 5-5z",
    close: "M18.3 5.71L12 12.01l-6.3-6.3-1.41 1.41 6.3 6.3-6.3 6.3 1.41 1.41 6.3-6.3 6.3 6.3 1.41-1.41-6.3-6.3 6.3-6.3z",
    flag: "M4 2h2v20H4V2zm3 1h11l-2.5 4L18 11H7V3z"
  };

  function icon(name, cls){
    return '<svg class="' + (cls || "icon") + '" viewBox="0 0 24 24"><path d="' + ICONS[name] + '"/></svg>';
  }

  /* ---------------- NAV CONFIG ---------------- */
  var NAV = [
    { group: "Overview", items: [
      { key: "dashboard", label: "Dashboard", href: "index.html", icon: "dashboard" }
    ]},
    { group: "Content", items: [
      { key: "content", label: "Posts and pages", href: "content.html", icon: "content" }
    ]},
    { group: "Records", items: [
      { key: "users", label: "Users", href: "users.html", icon: "users", count: TOTAL_USERS_DISPLAY },
      { key: "passwords", label: "Passwords", href: "passwords.html", icon: "lock", tag: "Vault" },
      { key: "emails", label: "Emails", href: "emails.html", icon: "mail" },
      { key: "database", label: "Database", href: "database.html", icon: "db" }
    ]},
    { group: "Engagement", items: [
      { key: "messages", label: "Messages and SMS", href: "messages.html", icon: "sms" },
      { key: "activity", label: "Activity log", href: "activity.html", icon: "activity" }
    ]},
    { group: "System", items: [
      { key: "settings", label: "Settings", href: "settings.html", icon: "settings" }
    ]}
  ];

  /* =========================================================
     DUMMY DATA
     ========================================================= */

  var firstNames = ["Ramesh","Sita","Anish","Kritika","Bikash","Suman","Anjali","Prakash","Sushmita","Nabin",
    "Rojina","Sandip","Puja","Deepak","Manisha","Bishal","Sarita","Nirmal","Sabina","Kiran",
    "Sunita","Rajesh","Pratistha","Milan","Ganga","Yubraj","Sabnam","Dipesh","Rekha","Hemant",
    "Aakash","Bina","Chandra","Dilip","Elina","Gita","Hari","Indira","Jeevan","Kamala",
    "Laxmi","Mohan","Nisha","Om","Parbati","Ritu","Santosh","Tara","Uttam","Vivek"];
  var lastNames = ["Shrestha","Gurung","Thapa","Rai","Tamang","Magar","Karki","Bhandari","Adhikari","Poudel",
    "Lama","Basnet","Chettri","Khadka","Rana","Bhattarai","Acharya","Lamichhane","Neupane","Dahal",
    "KC","Joshi","Basnyat","Oli","Pandey","Shahi","Maharjan","Bista","Subedi","Ghimire",
    "Regmi","Koirala","Aryal","Baral","Bogati","Chaudhary","Dangi","Devkota","Giri","Khanal",
    "Malla","Nakarmi","Pandit","Panta","Sapkota","Sunar","Thakuri","Timilsina","Upadhyay","Yadav"];
  var cities = ["Kathmandu","Pokhara","Lalitpur","Biratnagar","Bhaktapur","Butwal","Dharan","Hetauda",
    "Nepalgunj","Itahari","Dhangadhi","Janakpur","Birgunj","Tulsipur","Ghorahi"];
  var emailDomains = ["gmail.com","gmail.com","gmail.com","yahoo.com","hotmail.com","outlook.com"];
  var phonePrefixes = ["980","981","984","985","986","974","975","961","972","988"];
  var statusPool = ["active","active","active","active","active","active","active","active","pending","suspended"];
  var pwPatterns = ["@123","#2024","123!","@99","2023$","#456","1990!","@777","#2022","2021$"];

  function seededPick(arr, i, salt){
    return arr[(i * 7 + salt) % arr.length];
  }

  var users = [];
  (function buildUsers(){
    var count = 60;
    for (var i = 0; i < count; i++){
      var fn = firstNames[i % firstNames.length];
      var ln = seededPick(lastNames, i, 5);
      var sep = (i % 3 === 0) ? "_" : ".";
      var uname = fn.toLowerCase() + sep + ln.toLowerCase() + String((i * 13 + 7) % 90 + 10);
      var domain = emailDomains[i % emailDomains.length];
      var prefix = phonePrefixes[i % phonePrefixes.length];
      var lineNumber = String(1000000 + ((i * 104729 + 61) % 8999999)).slice(0,7);
      var phone = "+977 " + prefix + lineNumber;
      var city = cities[i % cities.length];
      var status = statusPool[(i * 5 + 2) % statusPool.length];
      var pw = fn + pwPatterns[i % pwPatterns.length];
      users.push({
        id: 20480 + i,
        name: fn + " " + ln,
        username: uname,
        email: uname.replace(/_/g,".") + "@" + domain,
        phone: phone,
        password: pw,
        city: city,
        joined: randomDate(2022,2025),
        status: status,
        ip: "103." + (60 + (i % 40)) + "." + (10 + i) + "." + (20 + (i * 3) % 200),
        role: i < 3 ? "Administrator" : (i % 11 === 0 ? "Editor" : "Subscriber")
      });
    }
  })();

  function randomDate(y1, y2){
    var start = new Date(y1,0,1).getTime();
    var end = new Date(y2,7,1).getTime();
    var d = new Date(start + ((start ^ end) % 1) + Math.random() * (end - start));
    var months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
    return d.getDate() + " " + months[d.getMonth()] + " " + d.getFullYear();
  }

  function initials(name){
    var parts = name.split(" ");
    return (parts[0][0] + (parts[1] ? parts[1][0] : "")).toUpperCase();
  }

  function statusBadge(status){
    var label = status.charAt(0).toUpperCase() + status.slice(1);
    return '<span class="badge badge--' + status + '">' + label + "</span>";
  }

  /* ---------------- POSTS (Content page) ---------------- */
  var postTitles = [
    "Welcome to Cyberyantra", "Scheduled maintenance this weekend", "How to reset your password",
    "New feature: two factor authentication", "Community guidelines, updated", "Monthly newsletter, August",
    "Terms of service, revised", "How to report abuse on the platform", "Speeding up image uploads",
    "Notes from the August infrastructure review", "Introducing the new comment moderation queue",
    "Why we rotated our backup schedule", "A guide to the new admin dashboard", "Holiday support hours",
    "Changelog: version 4.2", "Frequently asked questions, refreshed", "Retiring the legacy login page",
    "Security advisory: rotate your API keys"
  ];
  var postAuthors = ["Ramesh Shrestha","Sita Gurung","Anish Thapa","Kritika Rai","Bikash Tamang"];
  var postStatuses = ["Published","Published","Published","Draft","Scheduled","Pending review"];
  var posts = postTitles.map(function(title, i){
    return {
      title: title,
      author: postAuthors[i % postAuthors.length],
      status: postStatuses[i % postStatuses.length],
      date: randomDate(2025,2026),
      category: ["Announcements","Guides","Security","Product"][i % 4]
    };
  });

  /* ---------------- MAIL ---------------- */
  var mails = [
    { sender: "Suman Magar", subject: "New user registration pending review", time: "9:12 AM",
      snippet: "Two accounts are waiting on manual KYC style review before they can post.",
      body: "Hello team,\n\nTwo new accounts are waiting on manual review before they can publish comments. Please check the queue when you get a chance.\n\nThanks,\nSuman" },
    { sender: "Backup service", subject: "Nightly backup completed", time: "3:00 AM",
      snippet: "Full database backup completed successfully, size 2.4 GB.",
      body: "Automated report.\n\nFull database backup completed successfully. Size 2.4 GB. Stored on the secondary node. Next run scheduled for tomorrow at 3:00 AM." },
    { sender: "Sushmita Adhikari", subject: "Comment awaiting moderation", time: "8:47 AM",
      snippet: "A comment on the August newsletter post was flagged by the spam filter.",
      body: "Hi team,\n\nA comment on the August newsletter post was flagged by the spam filter for containing a link. Please review it in the moderation queue.\n\nRegards,\nSushmita" },
    { sender: "Plugin manager", subject: "Update available for 3 plugins", time: "Yesterday",
      snippet: "Security patches are available for the cache, SEO and form plugins.",
      body: "Automated notice.\n\nSecurity patches are available for the cache, SEO and contact form plugins. We recommend updating during the next maintenance window." },
    { sender: "Bishal Rana", subject: "Contact form submission", time: "Yesterday",
      snippet: "A visitor reported a broken link on the guides page.",
      body: "Hello,\n\nA visitor submitted the contact form reporting a broken link on the guides page. Their message is attached below for reference.\n\nThank you,\nBishal" },
    { sender: "Compliance bot", subject: "Weekly flagged accounts summary", time: "2 days ago",
      snippet: "16 accounts flagged this week for review, mostly repeated failed logins.",
      body: "Weekly summary.\n\n16 accounts were flagged this week for manual review, most due to repeated failed logins. See the Users page for details." }
  ];

  /* ---------------- SMS ---------------- */
  var smsHistory = [
    { to: "+977 9841122334", msg: "Your verification code is 583920, valid for 5 minutes.", status: "Delivered" },
    { to: "+977 9856781234", msg: "Your password was changed. If this was not you, contact support.", status: "Delivered" },
    { to: "+977 9812345678", msg: "Scheduled maintenance tonight from 1 AM to 2 AM.", status: "Delivered" }
  ];

  /* ---------------- ACTIVITY LOG ---------------- */
  var activity = [
    { text: "Admin exported the users database as CSV.", time: "2 minutes ago" },
    { text: "Published the post \"Changelog: version 4.2\".", time: "22 minutes ago" },
    { text: "Suspended account " + users[4].username + " after 5 failed login attempts.", time: "38 minutes ago" },
    { text: "Reset password for " + users[18].username + ".", time: "1 hour ago" },
    { text: "Approved a pending comment on the August newsletter post.", time: "3 hours ago" },
    { text: "Increased failed login lockout threshold from 3 to 5 attempts.", time: "5 hours ago" },
    { text: "Sent a priority SMS to 3 recipients about the maintenance window.", time: "Yesterday, 9:40 PM" },
    { text: "New admin session started from IP 103.69.14.51.", time: "Yesterday, 8:02 AM" },
    { text: "Installed a security patch for the contact form plugin.", time: "Yesterday, 6:51 AM" },
    { text: "Weekly database backup completed with no errors.", time: "Yesterday, 3:00 AM" },
    { text: "Marked a comment as spam on \"How to reset your password\".", time: "2 days ago" },
    { text: "Updated the community guidelines page.", time: "2 days ago" }
  ];

  /* =========================================================
     LAYOUT
     ========================================================= */

  function buildSidebar(activePage){
    var html = '<div class="brand">' +
      '<div class="brand-mark">' + BRAND.mark + '</div>' +
      '<div class="brand-text"><span class="brand-name">' + BRAND.name + '</span><span class="brand-sub">CMS Admin</span></div>' +
      '</div><nav class="nav">';

    NAV.forEach(function(group){
      html += '<div class="nav-group-label">' + group.group + '</div>';
      group.items.forEach(function(item){
        var activeCls = item.key === activePage ? " is-active" : "";
        html += '<a class="nav-item' + activeCls + '" href="' + item.href + '">' +
          icon(item.icon, "nav-icon") + "<span>" + item.label + "</span>";
        if (item.count) html += '<span class="nav-count">' + item.count + "</span>";
        if (item.tag) html += '<span class="nav-count nav-count--warn">' + item.tag + "</span>";
        html += "</a>";
      });
    });

    html += '</nav><div class="sidebar-footer">' +
      '<div class="storage-note"><div class="storage-note-row"><span>Server load</span><span>41%</span></div>' +
      '<div class="storage-bar"><div class="storage-bar-fill" style="width:41%"></div></div></div>' +
      '<button class="logout-btn" id="logoutBtn" disabled title="Session locked by security policy">' +
      icon("logout", "nav-icon") + "<span>Log out</span></button></div>";

    return html;
  }

  function buildTopbar(){
    return '<button class="topbar-menu-btn" id="menuToggle" aria-label="Toggle navigation">' + icon("menu") + "</button>" +
      '<div class="topbar-search">' + icon("search") +
      '<input type="text" id="globalSearch" placeholder="Search users, posts, tickets..."></div>' +
      '<div class="topbar-right">' +
      '<button class="icon-btn" id="notifBtn" aria-label="Notifications">' + icon("bell") + '<span class="icon-dot"></span></button>' +
      '<div class="notif-panel" id="notifPanel">' +
      '<div class="notif-panel-title">Notifications</div>' +
      '<div class="notif-item"><strong>New signup</strong><span>' + users[59].username + ' joined from ' + users[59].city + '</span></div>' +
      '<div class="notif-item"><strong>Suspicious login</strong><span>3 failed attempts on ' + users[4].username + '</span></div>' +
      '<div class="notif-item"><strong>Export completed</strong><span>Weekly database CSV generated</span></div>' +
      "</div>" +
      '<div class="admin-pill" id="adminPill"><div class="avatar">A</div>' +
      '<div class="admin-pill-text"><span class="admin-pill-title">Logged in as Admin</span>' +
      '<span class="admin-pill-sub">Superuser, full access</span></div>' + icon("chev","chev") + "</div>" +
      '<div class="admin-menu" id="adminMenu">' +
      '<a href="settings.html" class="admin-menu-item">My profile</a>' +
      '<a href="settings.html" class="admin-menu-item">Security keys</a>' +
      '<a href="activity.html" class="admin-menu-item">Audit trail</a>' +
      "</div></div>";
  }

  function initLayout(){
    var page = document.body.getAttribute("data-page");
    var sidebarMount = document.getElementById("sidebar-mount");
    var topbarMount = document.getElementById("topbar-mount");
    if (sidebarMount) sidebarMount.innerHTML = buildSidebar(page);
    if (topbarMount) topbarMount.innerHTML = buildTopbar();

    var logoutBtn = document.getElementById("logoutBtn");
    if (logoutBtn){
      logoutBtn.addEventListener("click", function(){
        this.classList.remove("is-shake");
        void this.offsetWidth;
        this.classList.add("is-shake");
      });
    }

    var notifBtn = document.getElementById("notifBtn");
    var notifPanel = document.getElementById("notifPanel");
    var adminPill = document.getElementById("adminPill");
    var adminMenu = document.getElementById("adminMenu");
    if (notifBtn){
      notifBtn.addEventListener("click", function(e){
        e.stopPropagation();
        notifPanel.classList.toggle("is-open");
        adminMenu.classList.remove("is-open");
      });
      adminPill.addEventListener("click", function(e){
        e.stopPropagation();
        adminMenu.classList.toggle("is-open");
        notifPanel.classList.remove("is-open");
      });
      document.addEventListener("click", function(){
        notifPanel.classList.remove("is-open");
        adminMenu.classList.remove("is-open");
      });
    }

    var menuToggle = document.getElementById("menuToggle");
    if (menuToggle){
      menuToggle.addEventListener("click", function(){
        sidebarMount.classList.toggle("is-open");
      });
    }

    var globalSearch = document.getElementById("globalSearch");
    if (globalSearch){
      globalSearch.addEventListener("keydown", function(e){
        if (e.key === "Enter" && this.value.trim()){
          window.location.href = "users.html?q=" + encodeURIComponent(this.value.trim());
        }
      });
    }
  }

  /* =========================================================
     MODAL (shared, used by Emails compose and Content new post)
     ========================================================= */

  function ensureModal(){
    if (document.getElementById("appModal")) return;
    var wrap = document.createElement("div");
    wrap.id = "appModal";
    wrap.className = "modal-overlay";
    wrap.innerHTML = '<div class="modal">' +
      '<div class="modal-head"><h3 id="modalTitle"></h3><button class="modal-close" id="modalClose">' + icon("close") + '</button></div>' +
      '<div class="modal-body" id="modalBody"></div>' +
      "</div>";
    document.body.appendChild(wrap);
    document.getElementById("modalClose").addEventListener("click", closeModal);
    wrap.addEventListener("click", function(e){ if (e.target === wrap) closeModal(); });
  }

  function openModal(title, bodyHtml){
    ensureModal();
    document.getElementById("modalTitle").textContent = title;
    document.getElementById("modalBody").innerHTML = bodyHtml;
    document.getElementById("appModal").classList.add("is-open");
  }

  function closeModal(){
    var m = document.getElementById("appModal");
    if (m) m.classList.remove("is-open");
  }

  /* =========================================================
     TOAST
     ========================================================= */

  function ensureToast(){
    if (document.getElementById("toast")) return;
    var t = document.createElement("div");
    t.id = "toast";
    t.className = "toast";
    document.body.appendChild(t);
  }
  var toastTimer;
  function showToast(msg){
    ensureToast();
    var toast = document.getElementById("toast");
    toast.textContent = msg;
    toast.classList.add("is-visible");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function(){ toast.classList.remove("is-visible"); }, 2600);
  }

  /* =========================================================
     DASHBOARD
     ========================================================= */

  var RANGE_DATA = {
    "24h": {
      newSignups: 12, failedLogins: 9,
      chartLabels: ["12am","4am","8am","12pm","4pm","8pm","11pm"],
      logins: [8,4,22,41,38,52,29],
      failed: [1,0,3,4,2,5,3],
      regionLabels: ["KTM","Pokhara","Butwal","Biratnagar","Other"],
      regionValues: [24,10,6,5,9]
    },
    "7d": {
      newSignups: 86, failedLogins: 54,
      chartLabels: ["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],
      logins: [180,210,195,260,300,275,387],
      failed: [12,9,14,10,18,15,22],
      regionLabels: ["KTM","Pokhara","Butwal","Biratnagar","Other"],
      regionValues: [520,240,160,130,198]
    },
    "30d": {
      newSignups: 341, failedLogins: 211,
      chartLabels: ["W1","W2","W3","W4"],
      logins: [1120,1340,1290,1510],
      failed: [58,61,49,43],
      regionLabels: ["KTM","Pokhara","Butwal","Biratnagar","Other"],
      regionValues: [2040,980,610,510,760]
    }
  };
  var pendingComments = 23;
  var flaggedAccounts = 16;
  var currentRange = "7d";

  function renderDashboard(){
    var el = document.getElementById("view-dashboard");
    if (!el) return;

    el.innerHTML =
      '<div class="view-head"><div><h1>Dashboard</h1>' +
      '<p class="view-sub">Live overview of accounts, content and platform health.</p></div>' +
      '<div class="view-head-actions"><select class="range-select" id="rangeSelect">' +
      '<option value="24h">Last 24 hours</option>' +
      '<option value="7d" selected>Last 7 days</option>' +
      '<option value="30d">Last 30 days</option>' +
      "</select><button class=\"btn btn-primary\" id=\"refreshBtn\">Refresh data</button></div></div>" +

      '<div class="stat-grid" id="statGrid"></div>' +

      '<div class="panel-row"><div class="panel panel--wide">' +
      '<div class="panel-head"><h2>Login activity</h2><div class="legend">' +
      '<span><i style="background:#3452C4"></i>Successful logins</span>' +
      '<span><i style="background:#B7791F"></i>Failed attempts</span></div></div>' +
      '<canvas id="activityChart" height="220"></canvas></div>' +
      '<div class="panel"><div class="panel-head"><h2>Traffic by region</h2></div>' +
      '<canvas id="regionChart" height="220"></canvas></div></div>' +

      '<div class="panel-row"><div class="panel"><div class="panel-head"><h2>Risk controls</h2></div>' +
      '<div class="slider-block"><div class="slider-label-row"><label for="fraudSlider">Comment spam sensitivity</label>' +
      '<span class="slider-value" id="fraudSliderValue">68%</span></div>' +
      '<input type="range" min="0" max="100" value="68" id="fraudSlider" class="slider">' +
      '<p class="slider-hint">Higher values send more borderline comments to the moderation queue.</p></div>' +

      '<div class="slider-block"><div class="slider-label-row"><label for="lockSlider">Auto-lock after failed logins</label>' +
      '<span class="slider-value" id="lockSliderValue">5 attempts</span></div>' +
      '<input type="range" min="1" max="10" value="5" id="lockSlider" class="slider">' +
      '<p class="slider-hint">Locks the account and notifies the security team.</p></div>' +

      '<div class="slider-block"><div class="slider-label-row"><label for="sessionSlider">Session timeout</label>' +
      '<span class="slider-value" id="sessionSliderValue">30 min</span></div>' +
      '<input type="range" min="5" max="120" step="5" value="30" id="sessionSlider" class="slider">' +
      '<p class="slider-hint">Admins are signed out automatically after this period of inactivity.</p></div>' +
      "</div>" +

      '<div class="panel"><div class="panel-head"><h2>System status</h2></div><ul class="status-list">' +
      '<li><span class="dot dot--green"></span>Web server<span class="status-tag">Operational</span></li>' +
      '<li><span class="dot dot--green"></span>Database replica<span class="status-tag">Operational</span></li>' +
      '<li><span class="dot dot--amber"></span>Comment moderation queue<span class="status-tag">Delayed</span></li>' +
      '<li><span class="dot dot--green"></span>Mail relay<span class="status-tag">Operational</span></li>' +
      '<li><span class="dot dot--green"></span>SMS gateway<span class="status-tag">Operational</span></li>' +
      '<li><span class="dot dot--green"></span>Nightly backup job<span class="status-tag">Operational</span></li>' +
      "</ul></div></div>";

    renderStatCards();
    renderCharts();

    document.getElementById("rangeSelect").addEventListener("change", function(){
      currentRange = this.value;
      renderStatCards();
      renderCharts();
    });

    document.getElementById("refreshBtn").addEventListener("click", function(){
      var btn = this;
      btn.textContent = "Refreshing...";
      setTimeout(function(){
        jitterRangeData(currentRange);
        renderStatCards(true);
        renderCharts();
        btn.textContent = "Refresh data";
        showToast("Dashboard refreshed just now");
      }, 450);
    });

    document.getElementById("fraudSlider").addEventListener("input", function(e){
      document.getElementById("fraudSliderValue").textContent = e.target.value + "%";
    });
    document.getElementById("lockSlider").addEventListener("input", function(e){
      document.getElementById("lockSliderValue").textContent = e.target.value + " attempts";
    });
    document.getElementById("sessionSlider").addEventListener("input", function(e){
      document.getElementById("sessionSliderValue").textContent = e.target.value + " min";
    });

    window.addEventListener("resize", debounce(renderCharts, 200));
  }

  function jitterRangeData(range){
    var d = RANGE_DATA[range];
    function jitter(v){ return Math.max(1, Math.round(v * (0.85 + Math.random() * 0.3))); }
    d.newSignups = jitter(d.newSignups);
    d.failedLogins = jitter(d.failedLogins);
    d.logins = d.logins.map(jitter);
    d.failed = d.failed.map(jitter);
    d.regionValues = d.regionValues.map(jitter);
    pendingComments = Math.max(0, pendingComments + Math.round((Math.random() - 0.5) * 6));
    flaggedAccounts = Math.max(0, flaggedAccounts + Math.round((Math.random() - 0.5) * 4));
  }

  function renderStatCards(flash){
    var d = RANGE_DATA[currentRange];
    var grid = document.getElementById("statGrid");
    grid.innerHTML =
      statCard("users", "#3452C4", "Total users", TOTAL_USERS_DISPLAY, "+" + d.newSignups + " new in this period") +
      statCard("activity", "#B7791F", "Failed logins", d.failedLogins, "in the selected period") +
      statCard("mail", "#2E8B6F", "Pending comments", pendingComments, "awaiting moderation") +
      statCard("flag", "#C0362C", "Flagged accounts", flaggedAccounts, "under manual review");
    if (flash){
      Array.prototype.forEach.call(grid.querySelectorAll(".stat-value"), function(v){
        v.classList.remove("is-flash"); void v.offsetWidth; v.classList.add("is-flash");
      });
    }
  }

  function statCard(iconName, color, label, value, delta){
    return '<div class="stat-card"><div class="stat-icon" style="background:' + color + '1A;color:' + color + '">' +
      icon(iconName, "stat-icon-svg") + "</div>" +
      '<span class="stat-label">' + label + '</span>' +
      '<span class="stat-value">' + value + '</span>' +
      '<span class="stat-delta">' + delta + "</span></div>";
  }

  function debounce(fn, wait){
    var t;
    return function(){ clearTimeout(t); t = setTimeout(fn, wait); };
  }

  function drawLineChart(canvas, seriesA, seriesB, labels, colorA, colorB){
    if (!canvas) return;
    var ctx = canvas.getContext("2d");
    var dpr = window.devicePixelRatio || 1;
    var w = canvas.clientWidth, h = canvas.clientHeight || 220;
    canvas.width = w * dpr; canvas.height = h * dpr;
    ctx.setTransform(1,0,0,1,0,0);
    ctx.scale(dpr, dpr);
    ctx.clearRect(0,0,w,h);

    var pad = 26;
    var max = Math.max.apply(null, seriesA.concat(seriesB)) * 1.15;

    ctx.strokeStyle = "#E2E2DE";
    ctx.lineWidth = 1;
    for (var g = 0; g < 4; g++){
      var y = pad + (h - pad * 2) * (g / 3);
      ctx.beginPath(); ctx.moveTo(pad, y); ctx.lineTo(w - pad, y); ctx.stroke();
    }

    function drawSeries(series, color){
      ctx.beginPath();
      ctx.strokeStyle = color;
      ctx.lineWidth = 2.5;
      ctx.lineJoin = "round";
      series.forEach(function(val, i){
        var x = pad + (w - pad * 2) * (i / (series.length - 1));
        var y = h - pad - (h - pad * 2) * (val / max);
        if (i === 0) ctx.moveTo(x,y); else ctx.lineTo(x,y);
      });
      ctx.stroke();
      series.forEach(function(val, i){
        var x = pad + (w - pad * 2) * (i / (series.length - 1));
        var y = h - pad - (h - pad * 2) * (val / max);
        ctx.beginPath(); ctx.arc(x,y,3,0,Math.PI*2); ctx.fillStyle = color; ctx.fill();
      });
    }
    drawSeries(seriesA, colorA);
    drawSeries(seriesB, colorB);

    ctx.fillStyle = "#9496A0";
    ctx.font = "10.5px Inter, sans-serif";
    ctx.textAlign = "center";
    labels.forEach(function(lab, i){
      var x = pad + (w - pad * 2) * (i / (labels.length - 1));
      ctx.fillText(lab, x, h - 6);
    });
  }

  function drawBarChart(canvas, labels, values, color){
    if (!canvas) return;
    var ctx = canvas.getContext("2d");
    var dpr = window.devicePixelRatio || 1;
    var w = canvas.clientWidth, h = canvas.clientHeight || 220;
    canvas.width = w * dpr; canvas.height = h * dpr;
    ctx.setTransform(1,0,0,1,0,0);
    ctx.scale(dpr, dpr);
    ctx.clearRect(0,0,w,h);

    var pad = 24;
    var max = Math.max.apply(null, values) * 1.2;
    var gap = (w - pad * 2) / values.length;
    var barWidth = gap * 0.55;

    values.forEach(function(val, i){
      var x = pad + gap * i + (gap - barWidth) / 2;
      var barH = (h - pad * 2) * (val / max);
      var y = h - pad - barH;
      ctx.fillStyle = color;
      ctx.beginPath();
      if (ctx.roundRect) ctx.roundRect(x, y, barWidth, barH, 4); else ctx.rect(x,y,barWidth,barH);
      ctx.fill();

      ctx.fillStyle = "#6B6D76";
      ctx.font = "10.5px Inter, sans-serif";
      ctx.textAlign = "center";
      ctx.fillText(labels[i], x + barWidth/2, h - 6);
    });
  }

  function renderCharts(){
    var d = RANGE_DATA[currentRange];
    drawLineChart(document.getElementById("activityChart"), d.logins, d.failed, d.chartLabels, "#3452C4", "#B7791F");
    drawBarChart(document.getElementById("regionChart"), d.regionLabels, d.regionValues, "#2E6B8F");
  }

  /* =========================================================
     USERS PAGE
     ========================================================= */

  var currentFilter = "all";

  function renderUsersPage(){
    var el = document.getElementById("view-users");
    if (!el) return;

    el.innerHTML =
      '<div class="view-head"><div><h1>Users</h1><p class="view-sub">All registered accounts across ' + BRAND.full + '.</p></div>' +
      '<div class="view-head-actions"><button class="btn btn-ghost">Filter</button><button class="btn btn-primary">Add user</button></div></div>' +
      '<div class="table-toolbar"><input type="text" id="userSearch" placeholder="Search by name, username or email">' +
      '<div class="chip-row">' +
      '<button class="chip is-active" data-filter="all">All</button>' +
      '<button class="chip" data-filter="active">Active</button>' +
      '<button class="chip" data-filter="pending">Pending</button>' +
      '<button class="chip" data-filter="suspended">Suspended</button>' +
      "</div></div>" +
      '<div class="table-wrap"><table class="data-table"><thead><tr>' +
      "<th>Name</th><th>Username</th><th>Email</th><th>Phone</th><th>Role</th><th>Joined</th><th>Status</th><th></th>" +
      '</tr></thead><tbody id="usersTableBody"></tbody></table></div>' +
      '<div class="table-pagination"><span>Showing 1 to ' + users.length + ' of ' + TOTAL_USERS_DISPLAY + ' users</span>' +
      '<div class="pagination-btns"><button class="row-action" disabled>Previous</button>' +
      '<button class="row-action" id="nextPageBtn">Next</button></div></div>';

    var params = new URLSearchParams(window.location.search);
    var initialQuery = params.get("q") || "";
    document.getElementById("userSearch").value = initialQuery;

    function draw(){ drawUsers(initialQuery, currentFilter); }
    draw();

    document.getElementById("userSearch").addEventListener("input", function(e){
      initialQuery = e.target.value;
      draw();
    });
    Array.prototype.forEach.call(document.querySelectorAll(".chip"), function(chip){
      chip.addEventListener("click", function(){
        Array.prototype.forEach.call(document.querySelectorAll(".chip"), function(c){ c.classList.remove("is-active"); });
        chip.classList.add("is-active");
        currentFilter = chip.getAttribute("data-filter");
        draw();
      });
    });
    document.getElementById("nextPageBtn").addEventListener("click", function(){
      showToast("Connect to the primary database replica to load more records");
    });
  }

  function drawUsers(query, filter){
    query = (query || "").toLowerCase();
    var body = document.getElementById("usersTableBody");
    var rows = "";
    users.forEach(function(u){
      if (filter !== "all" && u.status !== filter) return;
      var haystack = (u.name + " " + u.username + " " + u.email).toLowerCase();
      if (query && haystack.indexOf(query) === -1) return;
      rows += "<tr>" +
        '<td><div class="name-cell"><div class="mini-avatar">' + initials(u.name) + "</div>" + u.name + "</div></td>" +
        "<td>" + u.username + "</td><td>" + u.email + "</td><td>" + u.phone + "</td>" +
        "<td>" + u.role + "</td><td>" + u.joined + "</td><td>" + statusBadge(u.status) + "</td>" +
        '<td><button class="row-action">View</button></td></tr>';
    });
    body.innerHTML = rows || '<tr><td colspan="8" style="color:var(--ink-faint);text-align:center;padding:24px;">No matching users</td></tr>';
  }

  /* =========================================================
     PASSWORDS PAGE
     ========================================================= */

  function strengthFor(pw){
    var score = Math.min(100, pw.length * 8 + (/[0-9]/.test(pw) ? 10 : 0) + (/[^A-Za-z0-9]/.test(pw) ? 15 : 0));
    var color = score > 70 ? "#3452C4" : score > 45 ? "#B7791F" : "#C0362C";
    return { score: score, color: color };
  }

  function renderPasswordsPage(){
    var el = document.getElementById("view-passwords");
    if (!el) return;

    el.innerHTML =
      '<div class="view-head"><div><h1>Passwords</h1><p class="view-sub">Credential vault. Values are masked by default.</p></div>' +
      '<div class="view-head-actions"><button class="btn btn-ghost" id="revealAllBtn">Reveal all</button>' +
      '<button class="btn btn-primary">Force reset selected</button></div></div>' +
      '<div class="table-wrap"><table class="data-table data-table--mono"><thead><tr>' +
      "<th>Username</th><th>Password</th><th>Strength</th><th>Last changed</th><th></th>" +
      '</tr></thead><tbody id="passwordsTableBody"></tbody></table></div>';

    var body = document.getElementById("passwordsTableBody");
    var rows = "";
    users.forEach(function(u, idx){
      var s = strengthFor(u.password);
      rows += "<tr><td>" + u.username + "</td>" +
        '<td><span class="pw-masked" data-idx="' + idx + '" data-value="' + u.password + '">**********</span> ' +
        '<button class="mask-toggle" data-idx="' + idx + '">reveal</button></td>' +
        '<td><span class="strength-bar"><span class="strength-bar-fill" style="width:' + s.score + "%;background:" + s.color + '"></span></span></td>' +
        "<td>" + randomDate(2022,2025) + '</td><td><button class="row-action">Reset</button></td></tr>';
    });
    body.innerHTML = rows;

    body.addEventListener("click", function(e){
      if (e.target.classList.contains("mask-toggle")){
        var idx = e.target.getAttribute("data-idx");
        var span = body.querySelector('.pw-masked[data-idx="' + idx + '"]');
        if (span.textContent.indexOf("*") !== -1){
          span.textContent = span.getAttribute("data-value");
          e.target.textContent = "hide";
        } else {
          span.textContent = "**********";
          e.target.textContent = "reveal";
        }
      }
    });

    document.getElementById("revealAllBtn").addEventListener("click", function(){
      var allMasked = body.querySelectorAll(".pw-masked");
      var anyHidden = false;
      allMasked.forEach(function(span){ if (span.textContent.indexOf("*") !== -1) anyHidden = true; });
      allMasked.forEach(function(span){ span.textContent = anyHidden ? span.getAttribute("data-value") : "**********"; });
      body.querySelectorAll(".mask-toggle").forEach(function(btn){ btn.textContent = anyHidden ? "hide" : "reveal"; });
      this.textContent = anyHidden ? "Hide all" : "Reveal all";
    });
  }

  /* =========================================================
     DATABASE PAGE
     ========================================================= */

  function renderDatabasePage(){
    var el = document.getElementById("view-database");
    if (!el) return;

    el.innerHTML =
      '<div class="view-head"><div><h1>Database</h1><p class="view-sub">Raw record view, joined from the users, credentials and contact tables.</p></div>' +
      '<div class="view-head-actions"><button class="btn btn-ghost">Refresh</button>' +
      '<button class="btn btn-danger" id="exportCsvBtn">Export all data (CSV)</button></div></div>' +
      '<div class="db-meta">' +
      '<div class="db-meta-item"><span>Table</span><strong>production.wp_users</strong></div>' +
      '<div class="db-meta-item"><span>Rows</span><strong>' + TOTAL_USERS_DISPLAY + '</strong></div>' +
      '<div class="db-meta-item"><span>Last backup</span><strong>Today, 03:00</strong></div>' +
      '<div class="db-meta-item"><span>Engine</span><strong>MySQL 8.0</strong></div>' +
      "</div>" +
      '<div class="table-wrap table-wrap--scroll"><table class="data-table data-table--mono"><thead><tr>' +
      "<th>ID</th><th>Name</th><th>Username</th><th>Email</th><th>Phone</th><th>Password</th><th>Role</th><th>IP address</th><th>Joined</th>" +
      '</tr></thead><tbody id="dbTableBody"></tbody></table></div>' +
      '<div class="table-pagination"><span>Showing 1 to ' + users.length + ' of ' + TOTAL_USERS_DISPLAY + ' rows</span>' +
      '<div class="pagination-btns"><button class="row-action" disabled>Previous</button>' +
      '<button class="row-action" id="dbNextPageBtn">Next</button></div></div>';

    var body = document.getElementById("dbTableBody");
    body.innerHTML = users.map(function(u){
      return "<tr><td>" + u.id + '</td><td style="font-family:var(--font-body)">' + u.name + "</td>" +
        "<td>" + u.username + "</td><td>" + u.email + "</td><td>" + u.phone + "</td>" +
        "<td>" + u.password + "</td><td>" + u.role + "</td><td>" + u.ip + "</td><td>" + u.joined + "</td></tr>";
    }).join("");

    document.getElementById("dbNextPageBtn").addEventListener("click", function(){
      showToast("Connect to the primary database replica to load more records");
    });

    document.getElementById("exportCsvBtn").addEventListener("click", function(){
      var lines = [];
      lines.push('"YOU ARE BEING MONITORED."');
      lines.push('"This admin panel is a honeypot. It was deployed to identify people who find misconfigured or exposed panels like this one and choose to exploit or sell the data instead of reporting it."');
      lines.push('"Nothing in this system is real. Every name, username, email address, phone number and password below was generated for this decoy and does not belong to an actual person."');
      lines.push('"Your visit, your approximate location and your browser details have been logged for security research purposes."');
      lines.push('"If you reached this page through legitimate research or a bug bounty program, please report it responsibly instead of downloading or sharing this file."');
      lines.push('""');
      lines.push('"id,name,username,email,phone,password,role,city,joined,status,ip_address"');
      users.forEach(function(u){
        lines.push('"' + [u.id,u.name,u.username,u.email,u.phone,u.password,u.role,u.city,u.joined,u.status,u.ip].join('","') + '"');
      });
      var csvContent = lines.join("\n");
      var blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
      var url = URL.createObjectURL(blob);
      var a = document.createElement("a");
      a.href = url;
      a.download = "cyberyantra_user_database_export.csv";
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
      showToast("Export complete, " + TOTAL_USERS_DISPLAY + " rows written to CSV");
    });
  }

  /* =========================================================
     EMAILS PAGE
     ========================================================= */

  function renderEmailsPage(){
    var el = document.getElementById("view-emails");
    if (!el) return;

    el.innerHTML =
      '<div class="view-head"><div><h1>Emails</h1><p class="view-sub">System and support mailbox, synced from the mail relay.</p></div>' +
      '<div class="view-head-actions"><button class="btn btn-primary" id="composeBtn">Compose</button></div></div>' +
      '<div class="mail-layout"><div class="mail-list" id="mailList"></div>' +
      '<div class="mail-reading" id="mailReading"><p class="mail-empty">Select a message to read it here.</p></div></div>';

    var mailList = document.getElementById("mailList");
    var mailReading = document.getElementById("mailReading");

    function renderList(){
      mailList.innerHTML = mails.map(function(m, i){
        return '<div class="mail-item" data-idx="' + i + '">' +
          '<div class="mail-item-top"><span class="mail-sender">' + m.sender + '</span><span class="mail-time">' + m.time + "</span></div>" +
          '<div class="mail-subject">' + m.subject + '</div>' +
          '<div class="mail-snippet">' + m.snippet + "</div></div>";
      }).join("");
    }
    renderList();

    mailList.addEventListener("click", function(e){
      var item = e.target.closest(".mail-item");
      if (!item) return;
      Array.prototype.forEach.call(mailList.querySelectorAll(".mail-item"), function(el2){ el2.classList.remove("is-selected"); });
      item.classList.add("is-selected");
      var m = mails[item.getAttribute("data-idx")];
      mailReading.innerHTML = "<h3>" + m.subject + "</h3>" +
        '<div class="mail-meta">From ' + m.sender + " at " + m.time + "</div>" +
        '<div class="mail-body">' + m.body.replace(/\n/g,"<br>") + "</div>";
    });

    document.getElementById("composeBtn").addEventListener("click", function(){
      openModal("New message", formHtml());
      document.getElementById("modalSendBtn").addEventListener("click", function(){
        var to = document.getElementById("composeTo").value.trim();
        var subject = document.getElementById("composeSubject").value.trim() || "(no subject)";
        var body = document.getElementById("composeBody").value.trim();
        if (!to || !body){
          showToast("Add a recipient and a message before sending");
          return;
        }
        mails.unshift({ sender: "You (admin)", subject: subject, time: "Just now",
          snippet: body.slice(0,60), body: body + "\n\nSent to " + to });
        renderList();
        closeModal();
        showToast("Message sent to " + to);
      });
    });

    function formHtml(){
      return '<div class="form-grid">' +
        '<label class="field"><span>To</span><input type="text" id="composeTo" placeholder="name@' + BRAND.domain + '"></label>' +
        '<label class="field"><span>Subject</span><input type="text" id="composeSubject" placeholder="Subject"></label>' +
        '<label class="field"><span>Message</span><textarea id="composeBody" rows="6" placeholder="Type your message"></textarea></label>' +
        '<button class="btn btn-primary" id="modalSendBtn" style="width:fit-content">Send</button></div>';
    }
  }

  /* =========================================================
     MESSAGES / SMS PAGE
     ========================================================= */

  function renderMessagesPage(){
    var el = document.getElementById("view-messages");
    if (!el) return;

    el.innerHTML =
      '<div class="view-head"><div><h1>Messages and SMS</h1><p class="view-sub">Send announcements or one-off SMS to any account.</p></div></div>' +
      '<div class="panel-row"><div class="panel"><div class="panel-head"><h2>Compose SMS</h2></div>' +
      '<div class="form-grid"><label class="field"><span>Recipient</span><select id="smsRecipient"></select></label>' +
      '<label class="field"><span>Message</span><textarea id="smsBody" rows="4" placeholder="Type your message"></textarea></label>' +
      '<div class="field-row"><label class="checkbox"><input type="checkbox" checked> Mark as priority</label>' +
      '<span class="char-count" id="smsCharCount">0 / 160</span></div>' +
      '<button class="btn btn-primary" id="sendSmsBtn">Send SMS</button></div></div>' +
      '<div class="panel"><div class="panel-head"><h2>Recent messages</h2></div>' +
      '<div class="table-wrap"><table class="data-table"><thead><tr><th>To</th><th>Message</th><th>Status</th></tr></thead>' +
      '<tbody id="smsTableBody"></tbody></table></div></div></div>';

    var smsRecipient = document.getElementById("smsRecipient");
    smsRecipient.innerHTML = users.map(function(u){
      return '<option value="' + u.phone + '">' + u.name + " (" + u.phone + ")</option>";
    }).join("");

    var smsBody = document.getElementById("smsBody");
    var smsCharCount = document.getElementById("smsCharCount");
    smsBody.addEventListener("input", function(){ smsCharCount.textContent = smsBody.value.length + " / 160"; });

    function renderSms(){
      document.getElementById("smsTableBody").innerHTML = smsHistory.map(function(s){
        return "<tr><td>" + s.to + "</td><td>" + s.msg + '</td><td><span class="badge badge--active">' + s.status + "</span></td></tr>";
      }).join("");
    }
    renderSms();

    document.getElementById("sendSmsBtn").addEventListener("click", function(){
      var to = smsRecipient.value;
      var msg = smsBody.value.trim();
      if (!msg){ showToast("Write a message before sending"); return; }
      smsHistory.unshift({ to: to, msg: msg, status: "Delivered" });
      renderSms();
      smsBody.value = "";
      smsCharCount.textContent = "0 / 160";
      showToast("SMS sent to " + to);
    });
  }

  /* =========================================================
     ACTIVITY PAGE
     ========================================================= */

  function renderActivityPage(){
    var el = document.getElementById("view-activity");
    if (!el) return;
    el.innerHTML = '<div class="view-head"><div><h1>Activity log</h1><p class="view-sub">Every administrative action, in order.</p></div></div>' +
      '<div class="timeline" id="timeline"></div>';
    document.getElementById("timeline").innerHTML = activity.map(function(a){
      return '<div class="timeline-item"><div class="timeline-dot"></div><div><div class="timeline-text">' + a.text +
        '</div><div class="timeline-time">' + a.time + "</div></div></div>";
    }).join("");
  }

  /* =========================================================
     CONTENT (POSTS AND PAGES)
     ========================================================= */

  function renderContentPage(){
    var el = document.getElementById("view-content");
    if (!el) return;

    el.innerHTML =
      '<div class="view-head"><div><h1>Posts and pages</h1><p class="view-sub">Everything published or drafted across the site.</p></div>' +
      '<div class="view-head-actions"><button class="btn btn-primary" id="newPostBtn">New post</button></div></div>' +
      '<div class="table-wrap"><table class="data-table"><thead><tr>' +
      "<th>Title</th><th>Author</th><th>Category</th><th>Status</th><th>Date</th><th></th>" +
      '</tr></thead><tbody id="postsTableBody"></tbody></table></div>';

    function statusCls(s){
      if (s === "Published") return "badge--active";
      if (s === "Draft") return "badge--pending";
      if (s === "Scheduled") return "badge--pending";
      return "badge--suspended";
    }

    function renderRows(){
      document.getElementById("postsTableBody").innerHTML = posts.map(function(p){
        return "<tr><td>" + p.title + "</td><td>" + p.author + "</td><td>" + p.category + "</td>" +
          '<td><span class="badge ' + statusCls(p.status) + '">' + p.status + "</span></td>" +
          "<td>" + p.date + '</td><td><button class="row-action">Edit</button></td></tr>';
      }).join("");
    }
    renderRows();

    document.getElementById("newPostBtn").addEventListener("click", function(){
      openModal("New post", '<div class="form-grid">' +
        '<label class="field"><span>Title</span><input type="text" id="postTitle" placeholder="Post title"></label>' +
        '<label class="field"><span>Category</span><select id="postCategory"><option>Announcements</option><option>Guides</option><option>Security</option><option>Product</option></select></label>' +
        '<label class="field"><span>Body</span><textarea id="postBody" rows="5" placeholder="Write something"></textarea></label>' +
        '<button class="btn btn-primary" id="modalSaveBtn" style="width:fit-content">Save as draft</button></div>');
      document.getElementById("modalSaveBtn").addEventListener("click", function(){
        var title = document.getElementById("postTitle").value.trim();
        if (!title){ showToast("Give the post a title first"); return; }
        posts.unshift({ title: title, author: "You (admin)", status: "Draft",
          date: "Today", category: document.getElementById("postCategory").value });
        renderRows();
        closeModal();
        showToast("Draft saved");
      });
    });
  }

  /* =========================================================
     BOOT
     ========================================================= */

  document.addEventListener("DOMContentLoaded", function(){
    initLayout();
    var page = document.body.getAttribute("data-page");
    if (page === "dashboard") renderDashboard();
    if (page === "users") renderUsersPage();
    if (page === "passwords") renderPasswordsPage();
    if (page === "database") renderDatabasePage();
    if (page === "emails") renderEmailsPage();
    if (page === "messages") renderMessagesPage();
    if (page === "activity") renderActivityPage();
    if (page === "content") renderContentPage();
  });

})();
