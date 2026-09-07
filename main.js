const readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

const quotes = [
    "It's dangerous to go alone! Take this. - Old man, The legend of Zelda",
    "It's a-me, Mario! - Mario, Super Mario 64",
    "Do you think love can bloom even on a battlefield? - Otacon, Metal Gear Solid",
    "What is a man? A miserable little pile of secrets. - Dracula, Castlevania: Symphony of the Night",
    "The cake is a lie. - Wall graffiti, Portal",
    "All your base are belong to us! - Cats, Zero Wing",
    "When you're lost in the darkness, look for the light. - Fireflies, The Last of Us",
    "Hey! Listen! - Navi, The legend of Zelda: Ocarina of Time", 
    "Wind's howling. - Geralt, The Witcher 3: Wild Hunt",
    "For those who come after. - Motto, Clair Obscur: Expedition 33" ,
    "Did I ever tell you what the definition of insanity is? - Vaas, Far Cry 3" 
]

rl.question('Vad heter du? ', (namn) => {
    const response = `You've met with a terrible fate, haven't you, ${namn}?`
    console.log(`
       
⣀⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣴⣄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣀       
⠸⣿⣿⣶⣤⣄⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣾⣿⣿⣆⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣀⣤⣶⣿⣿⡏     
⠀⣿⣿⣿⣿⣿⣿⣿⣶⣦⣄⡀⠀⠀⠀⠀⠀⠀⠀⠀⢀⡤⠀⠀⠀⠀⢀⣾⣿⣿⣿⣿⣦⠀⠀⠀⠀⠀⢠⣄⠀⠀⠀⠀⠀⠀⠀⠀⢀⣠⣤⣶⣿⣿⣿⣿⣿⣿⣿⠁  
⠀⢸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣶⣦⣄⣀⠀⢀⣴⡟⠀⠀⠀⠀⢠⣟⠛⠛⠛⠛⠛⠛⣣⡀⠀⠀⠀⠀⠹⣷⡀⠀⢀⣠⣴⣶⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡏⠀
⠀⠀⠉⠛⠛⠛⠻⠿⠿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠁⠀⠀⠀⣰⣿⣿⣦⠀⠀⠀⠀⣰⣿⣿⣄⠀⠀⠀⠀⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠿⠿⠿⠛⠛⠛⠉⠁⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠉⠉⠛⠛⠻⠿⣿⣿⡀⠀⠀⣴⣿⣿⣿⣿⣷⡀⠀⣼⣿⣿⣿⣿⣦⠀⠀⠀⣿⣿⡿⠿⠛⠛⠉⠉⠉⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀   
⠀⠀⠀⠀⠀⠀⠀⠀⢀⣀⣀⣀⣀⣤⣤⣤⣤⣶⣿⣿⡇⠀⠼⠿⠿⠿⠿⠿⠿⠷⠾⠿⠿⠿⠿⠿⠿⠷⠀⢰⣿⣿⣷⣦⣤⣤⣤⣀⣀⣀⣀⡀⠀⠀⠀⠀⠀⠀⠀⠀ 
⠀⠀⠀⠀⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠀⠀⠀⠀  
⠀⠀⠀⠀⠈⢿⣿⣿⣿⣿⣿⣿⣿⡿⠟⠛⠉⢁⣹⣿⣿⣿⣶⣄⡀⠀⠀⠀⠀⢠⣆⠀⠀⠀⠀⢀⣠⣴⣿⣿⣿⣿⡀⠉⠙⠻⠿⣿⣿⣿⣿⣿⣿⣿⣿⠃⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠘⣿⣿⠿⠟⠛⠉⠁⠀⠀⣀⣴⣿⣿⣿⣿⣿⣿⣿⣿⣷⡀⠀⢀⣾⣿⣆⠀⠀⣴⣿⣿⣿⣿⣿⣿⣿⣿⣦⣄⠀⠀⠀⠉⠛⠻⠿⣿⣿⠇⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠈⠀⠀⠀⠀⠀⢀⣠⣾⣿⣿⣿⡿⠋⣸⣿⣿⣿⣿⡿⠃⢀⣾⣿⣿⣿⡄⠀⠿⣿⣿⣿⣿⣯⠈⢿⣿⣿⣿⣷⣤⡀⠀⠀⠀⠀⠀⠉⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⣴⣿⣿⣿⣿⣿⠋⠀⢠⣿⣿⣿⡏⠀⠀⢀⣼⣿⣿⣿⣿⣷⡀⠀⠀⠘⣿⣿⣿⡆⠀⠙⢿⣿⣿⣿⣿⣦⣄⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠙⠻⣿⣿⣿⠟⠁⠀⠀⣾⣿⣿⣿⠀⠀⠀⢿⣿⣿⣿⣿⣿⣿⡿⠂⠀⠀⢿⣿⣿⣿⡀⠀⠀⠙⣿⣿⣿⠿⠋⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠙⠁⠀⠀⠀⣸⣿⣿⣿⡇⠀⢠⣤⡀⠉⢻⣿⣿⣿⠋⠀⣠⣄⠀⠘⣿⣿⣿⣧⠀⠀⠀⠈⠋⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⠉⠙⠛⠀⢠⣿⣿⠃⠀⢸⣿⣿⣿⠀⠈⢿⣿⣇⠀⠛⠋⠉⠉⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⣿⣿⠃⠀⠀⢸⣿⣿⣿⠂⠀⠈⢻⣿⣦⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠰⣿⣿⡿⠿⠿⠿⣿⣿⡆⠀⠀⠈⢿⣿⠃⠀⠀⠰⣿⣿⠿⠿⠿⢿⣿⣿⠗⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠻⢧⡀⠀⠀⠘⠉⠀⠀⠀⠀⠈⠃⠀⠀⠀⠀⠈⠛⠀⠀⠀⣠⠟⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀              
╔═════════════════════════════════════════════════════════════════════╗
║ ${response.padEnd(67)} ║
╚═════════════════════════════════════════════════════════════════════╝
`)
const randomQuote = Math.floor(Math.random() * quotes.length)
console.log(quotes[randomQuote])
rl.close()
})