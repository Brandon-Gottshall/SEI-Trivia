//Random Motivational Statement Generator
export default function RMS() {
    const motivationalStatments = [
        "You Got This!",
        "Go Get Em'",
        "Push Yourself",
        "I believe in you!",
        "Just do it! Make your dreams come true!",
        "Wish it, Want it, Do it",
        "Focus on Goals, not Obstacles."
    ]
    let randomInt = Math.floor(Math.random() * Math.floor(motivationalStatments.length))
    return motivationalStatments[randomInt]
}
