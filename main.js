document.addEventListener('DOMContentLoaded', () => {

    // -----------------------------------------------------------------
    // DİL DEĞİŞTİRME SİSTEMİ
    // -----------------------------------------------------------------

    const translations = {
        'tr': {
            // Navbar
            'nav-whoami': "<i class='bx bx-info-circle' ></i>Ben Kimim",
            'nav-projects': "<i class='bx bx-folder' ></i>Projelerim",
            'nav-contact': "<i class='bx bx-message-square-dots' ></i>Bana Ulaş",
            'btn-lang': '<i class="ri-global-line"></i>Türkçe',
            // Hero Section
            'hero-greeting': 'Merhaba Ben',
            'hero-title': 'Full Stack Devoloper',
            'hero-contact': 'Bana Ulaş',
            // About Section
            'about-subtitle': 'Daha fazla bilgi',
            'about-title': 'Ben Kimim',
            'about-exp-title': 'Deneyim',
            'about-exp-desc': '2+<br> Full Stack Developer Starter',
            'about-edu-title': 'Eğitim',
            'about-edu-desc': 'Mehmet Akif Ersoy Üniversitesi<br>Bilişim Sistemleri Ve Teknolojileri<br>2.Sınıf Öğrencisiyim<br>+<br>Workintech Full Stack Devoloper Kursiyeriyim',
            'about-proj-title': 'Projeler',
            'about-proj-desc': '12+',
            'about-loc-title': 'Ülke',
            'about-loc-desc': 'Türkiye',
            'about-cv': "CV'mi İndir",
            // Skills Section
            'skills-subtitle': 'Bakmaya Değer',
            'skills-title': 'Yeteneklerim',
            'skills-frontend-title': 'Frontend Yetenekler',
            'skills-html-level': 'İleri Seviye',
            'skills-css-level': 'Orta Seviye',
            'skills-js-level': 'Basit Seviye',
            'skills-tailwind-level': 'Başlangıç',
            'skills-react-level': 'Başlangıç',
            'skills-backend-title': 'Backend Yetenekler',
            'skills-js-backend-level': 'Basit Seviye',
            'skills-node-level': 'Başlangıç',
            'skills-mongo-level': 'Basit Seviye',
            'skills-git-level': 'Başlangıç',
            // Projects Section
            'projects-subtitle': 'Bir Göz At',
            'projects-title': 'Projelerim',
            'project1-title': 'Yemek Sipariş Sitesi',
            'project1-desc': 'Profesyonel bir yemek sipariş sitesi, ödeneme altyapısı, e-fiş sistemi ve animasyonlu şık tasarımı ile dikkat çekici bir site.',
            'project1-details': 'Detaylar İçin',
            'project2-title': 'E-ticaret Sitesi',
            'project2-desc': 'Profesyonel veritabanı sistemi olan ve kolay , kullanışlı arayüze sahip E-ticaret sitesi.',
            'project2-details': 'Detaylar İçin',
            'project3-title': 'E-ticaret Sitesi',
            'project3-desc': 'Profesyonel veritabanı sistemi olan ve kolay , kullanışlı arayüze sahip E-ticaret sitesi.',
            'project3-details': 'Detaylar İçin',
            // Contact Section
            'contact-subtitle': 'Bana Ulaşmak İstersen',
            'contact-title': 'Bana Ulaş',
            'contact-address': '<i class="ri-navigation-line"></i> Lale Sokak. Zümbül Caddesi. Daire.08',
            'contact-phone': '<i class="ri-phone-line"></i> 0(555) 555 55 55',
            'form-name': 'Ad Soyad : ',
            'form-email': 'E-posta : ',
            'form-message': 'Mesajınız : ',
            'form-submit': 'Gönder',
            'form-success': 'Bu bir demodur : mesajınız gönderildi', // YENİ
            // Footer
            'footer-desc': 'Örnek portfolio sitesi<br> Yapımcısı : Enes Ocakçı',
        },
        'en': {
            // Navbar
            'nav-whoami': "<i class='bx bx-info-circle' ></i>Who Am I",
            'nav-projects': "<i class='bx bx-folder' ></i>My Projects",
            'nav-contact': "<i class='bx bx-message-square-dots' ></i>Contact Me",
            'btn-lang': '<i class="ri-global-line"></i>English',
            // Hero Section
            'hero-greeting': 'Hello, I am',
            'hero-title': 'Full Stack Developer',
            'hero-contact': 'Contact Me',
            // About Section
            'about-subtitle': 'More information',
            'about-title': 'Who Am I',
            'about-exp-title': 'Experience',
            'about-exp-desc': '2+<br> Full Stack Developer Starter',
            'about-edu-title': 'Education',
            'about-edu-desc': 'Mehmet Akif Ersoy University<br>Information Systems and Technologies<br>2nd Year Student<br>+<br>Workintech Full Stack Developer Trainee',
            'about-proj-title': 'Projects',
            'about-proj-desc': '12+',
            'about-loc-title': 'Country',
            'about-loc-desc': 'Turkey',
            'about-cv': 'Download CV',
            // Skills Section
            'skills-subtitle': 'Worth a Look',
            'skills-title': 'My Skills',
            'skills-frontend-title': 'Frontend Skills',
            'skills-html-level': 'Advanced',
            'skills-css-level': 'Intermediate',
            'skills-js-level': 'Basic',
            'skills-tailwind-level': 'Beginner',
            'skills-react-level': 'Beginner',
            'skills-backend-title': 'Backend Skills',
            'skills-js-backend-level': 'Basic',
            'skills-node-level': 'Beginner',
            'skills-mongo-level': 'Basic',
            'skills-git-level': 'Beginner',
            // Projects Section
            'projects-subtitle': 'Take a Look',
            'projects-title': 'My Projects',
            'project1-title': 'Food Order Website',
            'project1-desc': 'A professional food ordering site that stands out with its payment infrastructure, e-receipt system, and stylish animated design.',
            'project1-details': 'For Details',
            'project2-title': 'E-commerce Website',
            'project2-desc': 'An E-commerce site with a professional database system and an easy, user-friendly interface.',
            'project2-details': 'For Details',
            'project3-title': 'E-commerce Website',
            'project3-desc': 'An E-commerce site with a professional database system and an easy, user-friendly interface.',
            'project3-details': 'For Details',
            // Contact Section
            'contact-subtitle': 'If You Want to Reach Me',
            'contact-title': 'Contact Me',
            'contact-address': '<i class="ri-navigation-line"></i> Lale Street. Zümbül Avenue. Apt.08',
            'contact-phone': '<i class="ri-phone-line"></i> 0(555) 555 55 55',
            'form-name': 'Name Surname : ',
            'form-email': 'E-mail : ',
            'form-message': 'Your Message : ',
            'form-submit': 'Send',
            'form-success': 'This is a demo: your message has been sent',
            // Footer
            'footer-desc': 'Sample portfolio website<br> Made by : Enes Ocakçı',
        }
    };

    const languageButton = document.querySelector('.language');
    let currentLang = 'tr'; 

    function updateTranslations() {
        const langData = translations[currentLang];

        (document.querySelector('.navigator ul li:nth-child(1) a') || {}).innerHTML = langData['nav-whoami'];
        (document.querySelector('.navigator ul li:nth-child(2) a') || {}).innerHTML = langData['nav-projects'];
        (document.querySelector('.navigator ul li:nth-child(3) a') || {}).innerHTML = langData['nav-contact'];
        (languageButton || {}).innerHTML = langData['btn-lang'];
        (document.querySelector('.section p:nth-child(1)') || {}).innerHTML = langData['hero-greeting'];
        (document.querySelector('.section .is') || {}).innerHTML = langData['hero-title'];
        (document.querySelector('.section .contact') || {}).innerHTML = langData['hero-contact'];
        (document.querySelector('.about-headers .about-header2') || {}).innerHTML = langData['about-subtitle'];
        (document.querySelector('.about-headers .about-header') || {}).innerHTML = langData['about-title'];
        (document.querySelector('.deneyim .baslik') || {}).innerHTML = langData['about-exp-title'];
        (document.querySelector('.deneyim p:last-child') || {}).innerHTML = langData['about-exp-desc'];
        (document.querySelector('.egitim .baslik') || {}).innerHTML = langData['about-edu-title'];
        (document.querySelector('.egitim p:last-child') || {}).innerHTML = langData['about-edu-desc'];
        (document.querySelector('.proje .baslik') || {}).innerHTML = langData['about-proj-title'];
        (document.querySelector('.proje p:last-child') || {}).innerHTML = langData['about-proj-desc'];
        (document.querySelector('.konum .baslik') || {}).innerHTML = langData['about-loc-title'];
        (document.querySelector('.konum p:last-child') || {}).innerHTML = langData['about-loc-desc'];
        (document.querySelector('.cv') || {}).innerHTML = langData['about-cv'];
        (document.querySelector('.yetenek-headers .header1') || {}).innerHTML = langData['skills-subtitle'];
        (document.querySelector('.yetenek-headers .header2') || {}).innerHTML = langData['skills-title'];
        (document.querySelector('.frontend-header p') || {}).innerHTML = langData['skills-frontend-title'];
        (document.querySelector('.frontendyetenekler .bir .yetenek:nth-child(1) p:last-child') || {}).innerHTML = langData['skills-html-level'];
        (document.querySelector('.frontendyetenekler .bir .yetenek:nth-child(2) p:last-child') || {}).innerHTML = langData['skills-css-level'];
        (document.querySelector('.frontendyetenekler .iki .yetenek:nth-child(1) p:last-child') || {}).innerHTML = langData['skills-js-level'];
        (document.querySelector('.frontendyetenekler .iki .yetenek:nth-child(2) p:last-child') || {}).innerHTML = langData['skills-tailwind-level'];
        (document.querySelector('.frontendyetenekler > .yetenek p:last-child') || {}).innerHTML = langData['skills-react-level'];
        (document.querySelector('.backend-header p') || {}).innerHTML = langData['skills-backend-title'];
        (document.querySelector('.backendyetenekler .bir .yetenek:nth-child(1) p:last-child') || {}).innerHTML = langData['skills-js-backend-level'];
        (document.querySelector('.backendyetenekler .bir .yetenek:nth-child(2) p:last-child') || {}).innerHTML = langData['skills-node-level'];
        (document.querySelector('.backendyetenekler .iki .yetenek:nth-child(1) p:last-child') || {}).innerHTML = langData['skills-mongo-level'];
        (document.querySelector('.backendyetenekler .iki .yetenek:nth-child(2) p:last-child') || {}).innerHTML = langData['skills-git-level'];
        (document.querySelector('.projects-headers .projects-headers2') || {}).innerHTML = langData['projects-subtitle'];
        (document.querySelector('.projects-headers .projects-header') || {}).innerHTML = langData['projects-title'];
        (document.querySelector('.p1 .project-header') || {}).innerHTML = langData['project1-title'];
        (document.querySelector('.p1 .project-contents') || {}).innerHTML = langData['project1-desc'];
        (document.querySelector('.p1 .project-details') || {}).innerHTML = langData['project1-details'];
        (document.querySelector('.p2 .project-header') || {}).innerHTML = langData['project2-title'];
        (document.querySelector('.p2 .project-contents') || {}).innerHTML = langData['project2-desc'];
        (document.querySelector('.p2 .project-details') || {}).innerHTML = langData['project2-details'];
        (document.querySelector('.p3 .project-header') || {}).innerHTML = langData['project3-title'];
        (document.querySelector('.p3 .project-contents') || {}).innerHTML = langData['project3-desc'];
        (document.querySelector('.p3 .project-details') || {}).innerHTML = langData['project3-details'];
        (document.querySelector('.contacts-headers .contacts-headers2') || {}).innerHTML = langData['contact-subtitle'];
        (document.querySelector('.contacts-headers .contacts-header') || {}).innerHTML = langData['contact-title'];
        (document.querySelector('.contacts-info p:nth-child(2)') || {}).innerHTML = langData['contact-address'];
        (document.querySelector('.contacts-info p:nth-child(3)') || {}).innerHTML = langData['contact-phone'];
        (document.querySelector('.c-isim p') || {}).innerHTML = langData['form-name'];
        (document.querySelector('.c-email p') || {}).innerHTML = langData['form-email'];
        (document.querySelector('.c-mesaj p') || {}).innerHTML = langData['form-message'];
        (document.querySelector('.contacts-form button') || {}).innerHTML = langData['form-submit'];
        (document.querySelector('.footer-info p') || {}).innerHTML = langData['footer-desc'];
    }

    languageButton.addEventListener('click', () => {
        currentLang = (currentLang === 'tr') ? 'en' : 'tr';
        updateTranslations();
        updateThemeButtonText();
    });


    // -----------------------------------------------------------------
    // TEMA DEĞİŞTİRME SİSTEMİ (KOYU MOD)
    // -----------------------------------------------------------------

    const lightThemeFormMessageStyles = `
        .form-message {
            font-size: 1rem;
            margin-top: 15px;
            text-align: center;
            color: #2E7D32; /* Koyu yeşil (başarı) */
        }
    `;

    const darkThemeCSS = `
        body.dark-mode {
            background-color: #121212;
            color: #f0f0f0;
        }
        body.dark-mode html { 
            scrollbar-color: #444 transparent; 
        }
        body.dark-mode .navbar {
            background-color: #1a1a1a;
            border-bottom: 2px solid #333;
        }
        body.dark-mode .logo a,
        body.dark-mode .logo p,
        body.dark-mode .navigator a {
            color: #f0f0f0;
        }
        body.dark-mode .navigator li:hover {
            border-bottom: 2px solid #f0f0f0;
        }
        body.dark-mode .option button {
            background-color: #333;
            color: #f0f0f0;
        }
        body.dark-mode .option button:hover {
            background-color: #f0f0f0;
            color: #121212;
        }
        body.dark-mode .container {
            background-color: #121212;
            border-bottom: 2px solid #333;
        }
        body.dark-mode .container p { 
            color: #aaa; 
        }
        body.dark-mode .container .isim { 
            color: #f0f0f0; 
        }
        body.dark-mode .img::before {
            background: conic-gradient(from 0deg, #111, #555, #f0f0f0, #111);
        }
        body.dark-mode .socialmedia a {
            background-color: #f0f0f0;
            color: #121212;
            border-color: #f0f0f0;
        }
        body.dark-mode .socialmedia a:hover {
            background-color: #121212;
            color: #f0f0f0;
            border-color: #f0f0f0;
        }
        body.dark-mode .contact {
            border-color: #f0f0f0;
            color: #f0f0f0;
        }
        body.dark-mode .contact:hover {
            background-color: #f0f0f0;
            color: #121212;
            border-color: #f0f0f0;
        }
        body.dark-mode .about-header { 
            border-bottom-color: #f0f0f0; 
        }
        body.dark-mode .about-header2,
        body.dark-mode .yetenek-headers .header1,
        body.dark-mode .projects-headers .projects-headers2,
        body.dark-mode .contacts-headers .contacts-headers2 {
            color: #888;
        }
        body.dark-mode .about { 
            border-bottom-color: #333; 
        }
        body.dark-mode .info1 .deneyim,
        body.dark-mode .info1 .egitim,
        body.dark-mode .info1 .proje,
        body.dark-mode .info1 .konum {
            border-color: #f0f0f0;
        }
        body.dark-mode .info1 i { 
            color: #aaa; 
        }
        body.dark-mode .cv {
            border-color: #f0f0f0;
            color: #f0f0f0;
        }
        body.dark-mode .cv:hover {
            background-color: #f0f0f0;
            color: #121212;
        }
        body.dark-mode .yetenekler { 
            border-bottom-color: #333; 
        }
        body.dark-mode .projects .p1,
        body.dark-mode .projects .p2,
        body.dark-mode .projects .p3 {
            border-color: #f0f0f0;
        }
        body.dark-mode .projects img { 
            border-color: #555; 
        }
        body.dark-mode .projects a {
            background-color: #f0f0f0;
            color: #121212;
            border-color: #f0f0f0;
        }
        body.dark-mode .projects a:hover {
            background-color: #121212;
            color: #f0f0f0;
        }
        body.dark-mode .projects .project-details { 
            color: #888; 
        }
        body.dark-mode .contacts-headers { 
            border-top-color: #333; 
        }
        body.dark-mode .contacts .contacts-form form p { 
            color: #888; 
        }
        body.dark-mode .contacts .contacts-form form input,
        body.dark-mode .contacts .contacts-form form textarea {
            background-color: #2a2a2a;
            color: #f0f0f0;
            border-color: #555;
        }
        body.dark-mode .contacts .contacts-form form button {
            background-color: #333;
            color: #f0f0f0;
        }
        body.dark-mode .contacts .contacts-form form button:hover {
            background-color: #f0f0f0;
            color: #121212;
        }
        body.dark-mode .footer { 
            border-top-color: #333; 
        }
        body.dark-mode .footer .icons a {
            background-color: #f0f0f0;
            color: #121212;
            border-color: #f0f0f0;
        }
        body.dark-mode .footer .icons a:hover {
            background-color: #121212;
            color: #f0f0f0;
            border-color: #f0f0f0;
        }
        /* YENİ: Koyu mod form mesajı */
        body.dark-mode .form-message {
            color: #66bb6a; /* Açık yeşil (başarı) */
        }
    `;

    const styleTag = document.createElement('style');
    styleTag.innerHTML = lightThemeFormMessageStyles + darkThemeCSS;
    document.head.appendChild(styleTag);

    const themeButton = document.querySelector('.thema');
    let currentTheme = 'light'; 

    function updateThemeButtonText() {
        if (currentTheme === 'light') {
            themeButton.innerHTML = (currentLang === 'tr') 
                ? '<i class="ri-sun-line"></i>Beyaz' 
                : '<i class="ri-sun-line"></i>White';
        } else {
            themeButton.innerHTML = (currentLang === 'tr') 
                ? '<i class="ri-moon-line"></i>Koyu' 
                : '<i class="ri-moon-line"></i>Dark';
        }
    }

    themeButton.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        currentTheme = document.body.classList.contains('dark-mode') ? 'dark' : 'light';
        updateThemeButtonText();
    });

    // -----------------------------------------------------------------
    // CV İNDİRME
    // -----------------------------------------------------------------
    const cvButton = document.querySelector('.cv');

    cvButton.addEventListener('click', () => {
        const a = document.createElement('a');
        a.href = 'cv.txt';
        a.download = 'cv.txt';
        
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
    });


    // -----------------------------------------------------------------
    // PÜRÜZSÜZ SAYFA İÇİ NAVİGASYON (SMOOTH SCROLL)
    // -----------------------------------------------------------------

    const whoAmISection = document.querySelector('.about-headers');
    const projectsSection = document.querySelector('.projects-headers');
    const contactSection = document.querySelector('.contacts-headers');

    const navWhoAmI = document.querySelector('.navigator ul li:nth-child(1) a');
    const navProjects = document.querySelector('.navigator ul li:nth-child(2) a');
    const navContact = document.querySelector('.navigator ul li:nth-child(3) a');
    const heroContact = document.querySelector('.contact');

    const smoothScroll = (targetElement) => {
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth' 
            });
        }
    };

    navWhoAmI.addEventListener('click', (e) => {
        e.preventDefault(); 
        smoothScroll(whoAmISection);
    });

    navProjects.addEventListener('click', (e) => {
        e.preventDefault();
        smoothScroll(projectsSection);
    });

    navContact.addEventListener('click', (e) => {
        e.preventDefault();
        smoothScroll(contactSection);
    });

    heroContact.addEventListener('click', (e) => {
        e.preventDefault(); 
        smoothScroll(contactSection);
    });


    // -----------------------------------------------------------------
    //DEMO FORM GÖNDERİMİ
    // -----------------------------------------------------------------
    
    const contactForm = document.querySelector('.contacts-form form');

    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        let oldMessage = contactForm.querySelector('.form-message');
        if (oldMessage) {
            oldMessage.remove();
        }

        const successMessage = document.createElement('p');
        successMessage.className = 'form-message'; // Stil vermek için class ataması
        
        successMessage.textContent = translations[currentLang]['form-success'];

        contactForm.appendChild(successMessage);

        contactForm.reset();

        setTimeout(() => {
            successMessage.remove();
        }, 4000);
    });

});