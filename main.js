const quoteOptions = [{
        "quote": "“The only sin is ignorance”",
        "source": "Christopher Marlowe"
    },
    {
        "quote": "“A man is his own easiest dupe, for what he wishes to be true he generally believes to be true”",
        "source": "Demosthenes"
    },
    {
        "quote": "“A lie can travel halfway around the world while the truth is putting on its shoes”",
        "source": "Mark Twain"
    },
    {
        "quote": "“Great minds discuss ideas; average minds discuss events; small minds discuss people”",
        "source": "Eleanor Roosevelt"
    },
    {
        "quote": "“If you have a garden and a library, you have everything you need”",
        "source": "Marcus Tullius Cicero"
    },
    {
        "quote": "“Truth comes out in wine”",
        "source": "Pliny the Elder"
    },
    {
        "quote": "“Everything in the universe is within you. Ask all from yourself”",
        "source": "Rumi"
    },
    {
        "quote": "“When I get a little money I buy books; and if any is left I buy food and clothes”",
        "source": "Desiderius Erasmus"
    },
    {
        "quote": "“I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.”",
        "source": "Marilyn Monroe"
    },
    {
        "quote": "“Don't cry because it's over, smile because it happened.”",
        "source": "Dr. Seuss"
    },
    {
        "quote": "“Be yourself; everyone else is already taken.”",
        "source": "Oscar Wilde"
    },
    {
        "quote": "“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”",
        "source": "Albert Einstein"
    },
    {
        "quote": "“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”",
        "source": " Bernard M. Baruch"
    },
    {
        "quote": "“You know you're in love when you can't fall asleep because reality is finally better than your dreams.”",
        "source": "Dr. Seuss"
    },
    {
        "quote": "“A room without books is like a body without a soul.”",
        "source": "Marcus Tullius Cicero"
    },
    {
        "quote": "“So many books, so little time.”",
        "source": "Frank Zappa"
    },
    {
        "quote": "“You only live once, but if you do it right, once is enough.”",
        "source": "Mae West"
    },
    {
        "quote": "“Be the change that you wish to see in the world.”",
        "source": "Mahatma Gandhi"
    }
]

document.getElementById('button').addEventListener('click', newQuote)

function newQuote() {
    let quoteNumber = Math.floor(Math.random() * 17);
    document.getElementById('quotes').innerText = quoteOptions[quoteNumber].quote;
    document.getElementById('quotesource').innerText = quoteOptions[quoteNumber].source;
};