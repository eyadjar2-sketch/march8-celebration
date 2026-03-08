// ============================================
// نظام إدارة الصفحات
// ============================================

const page1 = document.getElementById('page1');
const page2 = document.getElementById('page2');
const flowerBtn = document.getElementById('flowerBtn');
const backBtn = document.getElementById('backBtn');

// الانتقال من الصفحة الأولى إلى الثانية
flowerBtn.addEventListener('click', () => {
    page1.classList.remove('active');
    page2.classList.add('active');
    
    // تشغيل تأثير الرسالة عند الانتقال
    playMessageAnimation();
});

// الانتقال من الصفحة الثانية إلى الأولى
backBtn.addEventListener('click', () => {
    page2.classList.remove('active');
    page1.classList.add('active');
});

// ============================================
// تأثير الجزيئات (Confetti)
// ============================================

function createConfetti() {
    const confettiContainer = document.getElementById('confetti');
    
    // إنشاء جزيئات عند تحميل الصفحة
    for (let i = 0; i < 30; i++) {
        const piece = document.createElement('div');
        piece.className = 'confetti-piece';
        
        // موضع عشوائي في الأفقي
        const randomX = Math.random() * 100;
        piece.style.left = randomX + '%';
        
        // تأخير عشوائي للبدء
        const randomDelay = Math.random() * 2;
        piece.style.animationDelay = randomDelay + 's';
        
        // مدة عشوائية
        const randomDuration = 3 + Math.random() * 2;
        piece.style.animationDuration = randomDuration + 's';
        
        confettiContainer.appendChild(piece);
    }
}

// استدعاء الدالة عند تحميل الصفحة
window.addEventListener('load', createConfetti);

// ============================================
// تأثير الرسالة (Typewriter Effect)
// ============================================

function playMessageAnimation() {
    const messageElement = document.getElementById('message');
    const originalText = messageElement.textContent;
    
    // إعادة تعيين النص
    messageElement.textContent = '';
    
    // طباعة النص حرف بحرف
    let index = 0;
    const speed = 50; // ميلي ثانية لكل حرف
    
    function typeCharacter() {
        if (index < originalText.length) {
            messageElement.textContent += originalText.charAt(index);
            index++;
            setTimeout(typeCharacter, speed);
        }
    }
    
    typeCharacter();
}

// ============================================
// تأثيرات إضافية
// ============================================

// إضافة تأثير الصوت (اختياري)
function playSound() {
    // يمكنك إضافة صوت هنا إذا أردت
    // const audio = new Audio('sound.mp3');
    // audio.play();
}

// تشغيل الصوت عند الضغط على الزر
flowerBtn.addEventListener('click', playSound);

// ============================================
// معالجة لوحة المفاتيح
// ============================================

document.addEventListener('keydown', (e) => {
    // الضغط على ESC للعودة
    if (e.key === 'Escape' && page2.classList.contains('active')) {
        backBtn.click();
    }
});

// ============================================
// تأثيرات إضافية عند التمرير
// ============================================

// إضافة تأثير على الزر عند التمرير
flowerBtn.addEventListener('mouseenter', () => {
    flowerBtn.style.transform = 'translateY(-10px) scale(1.05)';
});

flowerBtn.addEventListener('mouseleave', () => {
    flowerBtn.style.transform = 'translateY(0) scale(1)';
});

// ============================================
// دعم اللمس للأجهزة المحمولة
// ============================================

flowerBtn.addEventListener('touchstart', () => {
    flowerBtn.style.transform = 'scale(0.95)';
});

flowerBtn.addEventListener('touchend', () => {
    flowerBtn.style.transform = 'scale(1)';
});

// ============================================
// تحسينات الأداء
// ============================================

// تحميل الصور مسبقاً
window.addEventListener('load', () => {
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        img.style.willChange = 'transform';
    });
});
