# Modern Portfolyo Websitesi (Çift Dil & Koyu Mod)

Bu proje, HTML, CSS ve vanilya JavaScript kullanılarak oluşturulmuş, tamamen duyarlı (responsive) modern bir kişisel portfolyo websitesidir. JavaScript ile dinamik olarak yönetilen çift dil (TR/EN) ve koyu/açık tema özelliklerine sahiptir.

---

# Modern Portfolio Website (Dual Language & Dark Mode)

This project is a fully responsive, modern personal portfolio website built using HTML, CSS, and vanilla JavaScript. It features dynamic dual-language (TR/EN) and dark/light theme toggles managed entirely with JavaScript.

---

## 🖥️ Ekran Görüntüleri / Screenshots

*(Buraya hazırladığınız ekran görüntülerini (SS) ekleyebilirsiniz.)*

### Açık Mod (Light Mode)
![Açık Mod Ekran Görüntüsü](DESTEK-DOSYALARI/ss-light.png)

### Koyu Mod (Dark Mode)
![Koyu Mod Ekran Görüntüsü](DESTEK-DOSYALARI/ss-dark.png)

### Mobil Görünüm (Responsive Design)
![Mobil Görünüm](DESTEK-DOSYALARI/ss-mobile.png)

---

## ✨ Özellikler

* **Çift Dil Desteği:** Tek bir butona tıklayarak sitenin tüm içeriğini anında Türkçe ve İngilizce arasında değiştirir (Bu özellik `main.js` içindeki `translations` objesi ile yönetilir).
* **Koyu/Açık Mod:** Kullanıcı tercihine göre siteyi aydınlık ve karanlık tema arasında geçiş yapar. Stil, `body` etiketine eklenen `dark-mode` sınıfı ile dinamik olarak değişir.
* **Tamamen Duyarlı (Responsive):** Masaüstü, laptop, tablet ve mobil cihazların tamamıyla uyumludur. (Tüm düzenlemeler `style.css` içindeki `@media` sorguları ile yapılmıştır).
* **Dinamik JavaScript Fonksiyonları:**
    * **Pürüzsüz Kaydırma (Smooth Scroll):** Navigasyon linkleri (`Ben Kimim`, `Projelerim` vb.), sayfa içinde ilgili bölümlere (`id`'ler aracılığıyla) yumuşak bir kaydırma efekti ile gider.
    * **Demo Form Gönderimi:** "Bana Ulaş" kısmındaki form, sayfanın yenilenmesini engelleyerek (`e.preventDefault()`) mevcut dile uygun bir "Bu bir demodur..." başarı mesajı gösterir.
    * **CV İndirme:** "CV'mi İndir" butonu, JavaScript kullanarak dinamik bir link oluşturur ve `cv.txt` dosyasının indirilmesini tetikler.
* **Modern CSS Efektleri:**
    * **Profil Resmi Animasyonu:** Ana bölümdeki profil resminin etrafında dönen bir `conic-gradient` çerçeve animasyonu.
    * **Buton Animasyonları:** Tüm buton ve linklerde `:active` (basılma) ve `:focus-visible` (klavye ile odaklanma) durumları için modern ve erişilebilir animasyonlar.

## ✨ Features

* **Dual Language Support:** Instantly switch all site content between Turkish and English with a single button (managed by the `translations` object in `main.js`).
* **Dark/Light Mode:** Toggle the site between light and dark themes based on user preference. Styles are dynamically changed via a `dark-mode` class on the `body` tag.
* **Fully Responsive:** Completely compatible with desktop, laptop, tablet, and mobile devices (achieved using `@media` queries in `style.css`).
* **Dynamic JavaScript Functions:**
    * **Smooth Scroll:** Navigation links (e.g., "Who Am I," "My Projects") scroll smoothly to their respective sections on the page (via `id`s).
    * **Demo Form Submission:** The contact form prevents page reload (using `e.preventDefault()`) and displays a "This is a demo..." success message in the currently selected language.
    * **CV Download:** The "Download CV" button dynamically generates a link using JavaScript to trigger the download of the `cv.txt` file.
* **Modern CSS Effects:**
    * **Profile Picture Animation:** A rotating `conic-gradient` border animation around the profile picture in the hero section.
    * **Button Animations:** Modern and accessible animations for `:active` (press) and `:focus-visible` (keyboard focus) states on all buttons and links.

---

## 🛠️ Kullanılan Teknolojiler / Technologies Used

* **HTML5:** Semantik etiketler ve temiz bir DOM yapısı için kullanıldı.
* **CSS3:** Flexbox, `@media` sorguları, CSS Değişkenleri (`:root`) ve animasyonlar (`@keyframes`) ile modern ve duyarlı bir tasarım için kullanıldı.
* **Vanilya JavaScript (ES6+):** Hiçbir kütüphane veya framework olmadan, DOM manipülasyonu, olay dinleyicileri (event listeners), dinamik stil ve içerik yönetimi için kullanıldı.

---

## 🚀 Kurulum ve Kullanım / Setup and Usage

Bu projeyi yerel makinenizde çalıştırmak için:

1.  Bu repoyu klonlayın (veya dosyaları ZIP olarak indirin):
    ```sh
    git clone [https://github.com/ockcienes-code/BU-PROJENIN-ADI.git](https://github.com/ockcienes-code/BU-PROJENIN-ADI.git)
    ```
2.  Klonlanan klasörün içine girin:
    ```sh
    cd BU-PROJENIN-ADI
    ```
3.  `index.html` dosyasını tarayıcınızda açmanız yeterlidir.

**Not:** CV indirme özelliğinin düzgün çalışması için `cv.txt` dosyasının `index.html` dosyasıyla aynı dizinde bulunduğundan emin olun.

---
```
## 📁 Dosya Yapısı / File Structure

/ (Ana Proje Klasörü)
  |
  |-- index.html      (Ana HTML dosyası)
  |-- style.css       (Tüm stiller, animasyonlar ve responsive medya sorguları)
  |-- main.js         (Tema, dil, pürüzsüz kaydırma ve form yönetimi için tüm JS kodları)
  |-- cv.txt          (İndirilecek örnek CV dosyası)
  |
  \-- img/            (Görsellerin bulunduğu klasör)
       |
       |-- IMG-20230203-WA0050 (1).jpg
       |-- IMG_20221018_084110.jpg
       |-- (ve diğer proje görselleri...)
```
---
---
## 🔎 Denemek İçin Alttaki Linke Tıklayın / 🔎 Click the Link Below to Try

* **Deneyin / Try:** [Modern-Portfolio-Site-Modern-Portfolyo-Sitesi](https://ockcienes-code.github.io/Modern-Portfolio-Site-Modern-Portfolyo-Sitesi/)
---
## 👤 Yazar / Author

**Enes Ocakçı**

* **GitHub:** [@ockcienes-code](https://github.com/ockcienes-code)
* **LinkedIn:** [Enes Ocakçı](https://www.linkedin.com/in/enes-ocak%C3%A7%C4%B1-177537387/)
