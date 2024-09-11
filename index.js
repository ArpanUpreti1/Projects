const circles = document.querySelectorAll('.photo');
const displayText = document.getElementById('customer-info-text')
const displayName = document.getElementById('customer-info-name')
console.log(circles.id)
circles.forEach((circle) => {
    circle.addEventListener("click", () => {
        console.log(circle.id)
        // Remove the border from all circles
        circles.forEach((c) => c.style.border = "none");

        // Add border to the clicked circle
        circle.style.border = "3px solid #936147";

        // Use the id of the clicked circle to determine the text
        const text = getTextById(circle.id);
        const name = getNameById(circle.id);
        displayName.textContent = name;

        displayText.textContent = text;
    });
});

// A function to return text based on the circle's ID
function getTextById(id) {
    switch(id) {
        case 'Photo-one':
            return 'I had an amazing experience at Posh. The moment I walked in, I was welcomed with warmth and professionalism. The team truly knows their craft—my facial left my skin glowing, and the massage was incredibly relaxing. I also got a haircut and I couldn’t be happier with the results. The stylist listened to exactly what I wanted and gave me the perfect look. The atmosphere is serene and clean making it a perfect escape from daily stress. I’m already looking forward to my next visit. Highly recommend for anyone seeking top-notch beauty services! ';
        case 'Photo-two':
            return 'Posh exceeded all my expectations. The service was exceptional from start to finish. I opted for a body scrub and massage, and it was nothing short of heavenly. My skin felt silky smooth, and the massage was incredibly rejuvenating. The staff is highly skilled and made sure I was comfortable the entire time. The space itself is beautifully designed and exudes a peaceful vibe. I left feeling renewed and can’t wait to book my next session. If youre in need of relaxation and high-quality treatments, Posh is the place to go.';

        case 'Photo-three':
            return "My visit to Posh was such a treat! I tried their signature facial and was blown away by the results. My skin felt rejuvenated and soft, and I noticed a visible difference immediately. The staff was kind, knowledgeable, and took the time to explain each step of the process. The salon itself is spotless and has such a relaxing ambiance, it’s easy to unwind the moment you walk in. Overall, I had a fantastic experience and am already planning my next appointment. I highly recommend Posh for anyone looking for a quality beauty treatment.";
        case 'Photo-four':
            return "Posh truly knows how to make you feel pampered! I went for a full spa day, including a facial, massage, and manicure. Each treatment was done with care and precision, and the staff ensured I was comfortable every step of the way. The facial left my skin glowing, the massage eased all my tension, and the manicure was perfect. The salon has a luxurious and serene atmosphere that makes it easy to relax. I left feeling completely refreshed and can’t wait to go back. Posh is a must-visit for anyone seeking premium beauty services!";
        default:
            return '';
    }
}
function getNameById(id){
    switch(id){
        case 'Photo-one':
            return 'Leh Donald';
        case 'Photo-two':
            return 'Dex Ronald';

        case 'Photo-three':
            return "Lenald Doran";
        case 'Photo-four':
            return "Ray Donnel";
        default:
            return '';
    }
}
