//Random Motivational Statement Generator
export default function RMS() {
    const motivationalStatments = [
        "You got this!",
        "Go get em'!",
        "Push yourself!",
        "I believe in you!",
        "Just do it!",
        "Make your dreams come true!",
        "Wish it. Want it. Do it.",
        "Focus on goals, not obstacles."
    ]
    let randomInt = Math.floor(Math.random() * Math.floor(motivationalStatments.length))
    return motivationalStatments[randomInt]
}
