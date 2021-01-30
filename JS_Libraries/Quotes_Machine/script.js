$(document).ready(function(){

    const data = [
        { text: "If you don't like the road you're walking, start paving another one.", author: 'Dolly Parton' },
        { text: 'The most beautiful things in the world cannot be seen or even touched. They must be felt with the heart.', author: 'Helen Keller' },
        { text: 'Life is a series of baby steps.', author: 'Hoda Kotb' },
        { text: 'Love yourself first and everything else falls into line.', author: 'Lucille Ball' },
        { text: 'Lead from the heart, not the head.', author: 'Princess Diana' },
        { text: 'Wherever life plants you, bloom with grace.', author: 'Anonymous' },
        { text: "Don't give it five minutes if you're not going to give it five years.", author: 'Meghan Markle​' },
        { text: 'What comes easy won’t last long, and what lasts long won’t come easy.', author: 'Anonymous' },
        { text: 'Every day is not a success. Every year is not a success. You have to celebrate the good.', author: 'Reese Witherspoon' },
        { text: "Those who don't believe in magic will never find it.", author: 'Roald Dahl' },
        { text: 'No one is you and that is your superpower.', author: 'Anonymous' },
        { text: 'To succeed in life, you need three things: a wishbone, a backbone, and a funny bone.', author: 'Reba McEntire' },
        { text: 'The biggest adventure you can take is to live the life of your dreams.', author: 'Oprah Winfrey' },
        { text: 'The best time for new beginnings is now.', author: 'Anonymous' },
        { text: "It's not what we have in life but who we have in our life that matters.", author: 'Margaret Laurence' },
        { text: "One day or day one. It's your decision.", author: 'Anonymous' },
        { text: "Every day may not be good, but there is something good in every day.", author: 'Anonymous' },
        { text: 'Difficult roads <b>often lead</b> to beautiful destinations.', author: 'Anonymous' },
        { text: 'Only I can change my life. No one can do it for me.', author: 'Carol Burnett' },
        { text: 'A diamond is a chunk of coal that did well under pressure.', author: 'Anonymous' },
        { text: "You can't go back and change the beginning, but you can start where you are and change the ending.", author: 'C.S. Lewis' },
        { text: "Small steps in the right direction can turn out to be the biggest step of your life.", author: 'Anonymous' },
      ];

    var allQuotes = data.map(quote => {
        return quote;
    });

    var randomQuote = allQuotes[Math.floor(Math.random() * Math.floor(data.length))];

    $('#text').text(randomQuote.text);
    $('#author').text(randomQuote.author)

    $('#new-quote').click(() => {
        $('#text').text(() => {
            text = randomQuote.text();
            return text;
        });
        $('#author').text(randomQuote.author)
    });
    
});