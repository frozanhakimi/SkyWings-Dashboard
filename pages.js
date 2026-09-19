/* =========================================
   TABS - 
   ========================================= */
   const tabBtns = document.querySelectorAll('.tab-btn');
   const viewContents = document.querySelectorAll('.view-content');
   
   tabBtns.forEach(btn => {
       btn.addEventListener('click', function () {
           tabBtns.forEach(b => b.classList.remove('active'));
           viewContents.forEach(c => c.classList.remove('active'));
           this.classList.add('active');
           const targetId = this.getAttribute('data-target');
           const targetContent = document.getElementById(targetId);
           if (targetContent) targetContent.classList.add('active');
       });
   });
   
   /* =========================================
      BOOK FLIGHT - 
      ========================================= */
   const bookingPanel = document.getElementById('bookingPanel');
   const bookingOverlay = document.getElementById('bookingOverlay');
   const closePanelBtn = document.getElementById('closePanel');
   const cancelBookBtn = document.getElementById('cancelBookBtn');
   const confirmBookBtn = document.getElementById('confirmBookBtn');
   
   let currentFlight = {};
   
   const bookBtns = document.querySelectorAll('.book-flight');
   
   bookBtns.forEach(btn => {
       btn.addEventListener('click', function () {
           const flightCard = this.closest('.flight-card, .flight-card-grid');
           if (!flightCard) return;
   
           let airline = "Flight";
           let price = "$0";
           let route = "KBL → DXB";
           let time = "08:00 - 10:30";
   
           if (flightCard.classList.contains('flight-card')) {
               const airlineEl = flightCard.querySelector('.flight-airline span');
               const priceEl = flightCard.querySelector('.flight-price span');
               const times = flightCard.querySelectorAll('.time');
   
               if (airlineEl) airline = airlineEl.textContent.trim();
               if (priceEl) price = priceEl.textContent.trim();
   
               if (times.length >= 2) {
                   const fromCode = times[0].querySelector('span').textContent;
                   const toCode = times[1].querySelector('span').textContent;
                   const fromTime = times[0].textContent.replace(fromCode, '').trim();
                   const toTime = times[1].textContent.replace(toCode, '').trim();
                   route = `${fromCode} → ${toCode}`;
                   time = `${fromTime} - ${toTime}`;
               }
           } else {
               const airlineEl = flightCard.querySelector('h4');
               const priceEl = flightCard.querySelector('.grid-price');
               const routeEl = flightCard.querySelector('.route-text');
               const metaEl = flightCard.querySelector('.grid-meta');
   
               if (airlineEl) airline = airlineEl.textContent.trim();
               if (priceEl) price = priceEl.textContent.trim();
               if (routeEl) {
                   const match = routeEl.textContent.match(/\((\w+)\)\s*→\s*.*?\((\w+)\)/);
                   if (match) route = `${match[1]} → ${match[2]}`;
               }
               if (metaEl) {
                   const timeMatch = metaEl.textContent.match(/(\d+:\d+)\s*-\s*(\d+:\d+)/);
                   if (timeMatch) time = `${timeMatch[1]} - ${timeMatch[2]}`;
               }
           }
   
           currentFlight = { airline, price, route, time };
   
           document.getElementById('panelAirline').textContent = airline;
           document.getElementById('panelRoute').textContent = route;
           document.getElementById('panelTime').textContent = time;
           document.getElementById('panelPrice').textContent = price;
   
           bookingPanel.classList.add('show');
           bookingOverlay.classList.add('show');
       });
   });
   
   function closeBookingPanel() {
       if (bookingPanel) bookingPanel.classList.remove('show');
       if (bookingOverlay) bookingOverlay.classList.remove('show');
   }
   
   if (closePanelBtn) closePanelBtn.addEventListener('click', closeBookingPanel);
   if (bookingOverlay) bookingOverlay.addEventListener('click', closeBookingPanel);
   if (cancelBookBtn) cancelBookBtn.addEventListener('click', closeBookingPanel);
   
   if (confirmBookBtn) {
       confirmBookBtn.addEventListener('click', function () {
           closeBookingPanel();
           window.location.href = 'booking.html';
       });
   }
   
   /* =========================================
      CANCEL BOOKING
      ========================================= */
   const cancelBtns = document.querySelectorAll('.btn-cancel');
   
   cancelBtns.forEach(btn => {
       btn.addEventListener('click', function () {
           if (confirm("Are you sure you want to cancel this booking?")) {
               const card = this.closest('.booking-card');
               if (card) {
                   card.style.opacity = '0.6';
                   const status = card.querySelector('.status');
                   if (status) {
                       status.textContent = 'Cancelled';
                       status.className = 'status cancelled';
                   }
                   const cancelledSection = document.getElementById('cancelled');
                   if (cancelledSection) {
                       const clonedCard = card.cloneNode(true);
                       clonedCard.style.opacity = '0.85';
                       const cancelBtnClone = clonedCard.querySelector('.btn-cancel');
                       if (cancelBtnClone) cancelBtnClone.remove();
                       cancelledSection.appendChild(clonedCard);
                   }
               }
           }
       });
   });
   
   /* =========================================
      VIEW TICKET - 
      ========================================= */
   const ticketPanel = document.getElementById('ticketPanel');
   const ticketOverlay = document.getElementById('ticketOverlay');
   const closeTicketBtn = document.getElementById('closeTicket');
   
   const viewTicketBtns = document.querySelectorAll('.booking-actions .btn-blue');
   
   viewTicketBtns.forEach(btn => {
       btn.addEventListener('click', function () {
           const card = this.closest('.booking-card');
           if (!card) return;
   
           const bookingId = card.querySelector('.booking-header span').textContent;
           const routeText = card.querySelector('.booking-route h4').textContent;
           const dateText = card.querySelector('.booking-route p:nth-child(2)').textContent;
           const passengerText = card.querySelector('.booking-route p:nth-child(3)').textContent;
   
           const match = routeText.match(/\((\w+)\)\s*→\s*.*?\((\w+)\)/);
           const fromCode = match ? match[1] : 'KBL';
           const toCode = match ? match[2] : 'DXB';
   
           const cityMatchFrom = routeText.match(/^([^(]+)/);
           const cityMatchTo = routeText.match(/→\s*([^(]+)/);
   
           const fromCity = cityMatchFrom ? cityMatchFrom[1].trim() : 'Kabul';
           const toCity = cityMatchTo ? cityMatchTo[1].trim() : 'Dubai';
   
           const dateMatch = dateText.match(/Date:\s*([^|]+)/);
           const timeMatch = dateText.match(/Time:\s*(.+)/);
           const passengerMatch = passengerText.match(/Passenger:\s*(.+)/);
   
           document.getElementById('ticketId').textContent = bookingId;
           document.getElementById('ticketFrom').textContent = fromCode;
           document.getElementById('ticketTo').textContent = toCode;
           document.getElementById('ticketFromCity').textContent = fromCity;
           document.getElementById('ticketToCity').textContent = toCity;
           document.getElementById('ticketDate').textContent = dateMatch ? dateMatch[1].trim() : '---';
           document.getElementById('ticketTime').textContent = timeMatch ? timeMatch[1].trim() : '---';
           document.getElementById('ticketPassenger').textContent = passengerMatch ? passengerMatch[1].trim() : '---';
   
           ticketPanel.classList.add('show');
           ticketOverlay.classList.add('show');
       });
   });
   
   function closeTicket() {
       if (ticketPanel) ticketPanel.classList.remove('show');
       if (ticketOverlay) ticketOverlay.classList.remove('show');
   }
   
   if (closeTicketBtn) closeTicketBtn.addEventListener('click', closeTicket);
   if (ticketOverlay) ticketOverlay.addEventListener('click', closeTicket);
   
   document.addEventListener('keydown', function (e) {
       if (e.key === 'Escape') {
           closeTicket();
           closeBookingPanel();
       }
   });
   
   /* =========================================
      SELECT OPTION -
      ========================================= */
   function selectOption(event) {
       event.preventDefault();
       const selectedText = event.target.textContent.trim();
       if (selectedText === "Log out") {
           if (confirm("Are you sure you want to log out?")) {
               window.location.href = "login-page/index.html";
           }
       } else {
           alert(selectedText + " selected.");
       }
       const dropdown = document.getElementById('hamburgerDropdown');
       if (dropdown) dropdown.classList.remove('show');
   }