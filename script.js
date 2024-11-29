
 ScrollReveal().reveal('.home',  '.about', '.cta' ,'.menu', '.products' , '.review' , '.contact' , '.footer' ,{
    duration : 1000,// Durasi animasi dalam milidetik
    distance: '50px', // Jarak pergerakan animasi
    easing: 'ease-in-out', // Jenis easing untuk transisi
    opacity: 0, // Opasitas awal
    origin: 'bottom', // Arah pergerakan (top, right, bottom, left)
    reset: true, // Menjadikan animasi bisa diulang saat elemen muncul kembali
  } );
    // Inisialisasi ScrollReveal
    ScrollReveal().reveal('.about .contents', {
        duration: 1000,
        origin: 'bottom', 
        distance: '50px', 
        easing:'ease-in-out',  
        opacity: 0,         
        reset: true         
    });

