var express = require('express')
var logger = require('morgan')
var bodyParser = require('body-parser')
var app = express()
// EJS - Embedded JavaScript
app.set('view engine', 'ejs')

// Serve Static Content - HTML/CSS/JS
app.use(express.static('views'))
app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended:false  }))



app.set('views', __dirname + '/views')

var store = {
    food: [
        {
            id: 1, 
            name: 'Flamin Hot Cheetos',
            price: '1.50',
            description: 'The small bag of Flamin Hot Cheetos that get your fingers all red and make doing work impossibly messy.'
            
        }, 
        {
            id: 2, 
            name: 'Flamin Hot Funyons',
            price: '1.50',
            description: 'Spicy corn circles with magic red powder liberally applied.'
        },
        {
            id: 3, 
            name: 'Takis',
            price: '2.00',
            description: 'Sticks of sticky carbohydrates in a purple bag.'
        },
        {
            id: 4, 
            name: "Cup O' Noodles",
            price: '2.50',
            description: 'The shrimp kind. But ask yourself, is it ever wise to eat shrimp that mostly sits on a shelf?'
        },
        {
            id: 5, 
            name: 'Poptarts',
            price: '1.00',
            description: 'Crusty cake filled with sugar goo and covered in sugar paste. Whats not to like?'
        },
        {
            id: 6, 
            name: 'Mangoneada',
            price: '0.50',
            description: 'A plastic wrapper around sugar, water, and ice. Worth the 50 cents.'
        },
        {
            id: 7, 
            name: 'Oreos',
            price: '0.75',
            description: 'Because come on, who hates oreos?'
        },
        {
            id: 8, 
            name: 'Rice Krispie Bar',
            price: '1.00',
            description: 'Rice that has been fried and sugared, and then held together by a sugar and gelatin paste. Aka diabetes in a bar.'
        }        
    ],
    clothes: [
        {
            id: 1, 
            name: 'Simon Tech Sweater',
            price: '1.50',
            description: 'The small bag of Flamin Hot Cheetos that get your fingers all red and make doing work impossibly messy.'
            
        }, 
        {
            id: 2, 
            name: 'Simon Tech Cardigan',
            price: '1.50',
            description: 'Spicy corn circles with magic red powder liberally applied.'
        },
        {
            id: 3, 
            name: 'Simon Tech Spirit Shirt',
            price: '2.00',
            description: 'Sticks of sticky carbohydrates in a purple bag.'
        },
        {
            id: 4, 
            name: 'Simon Tech Freshman Shirt',
            price: '0.75',
            description: 'Because come on, who hates oreos?'
        },
        {
            id: 5, 
            name: 'Simon Tech Sophmore Shirt',
            price: '0.50',
            description: 'A plastic wrapper around sugar, water, and ice. Worth the 50 cents.'
        },
        {
            id: 6, 
            name: 'Simon Tech Junior Shirt',
            price: '1.00',
            description: 'Crusty cake filled with sugar goo and covered in sugar paste. Whats not to like?'
        },
        {
            id: 7, 
            name: 'Simon Tech Senior Shirt',
            price: '2.50',
            description: 'The shrimp kind. But ask yourself, is it ever wise to eat shrimp that mostly sits on a shelf?'
        }
        
    ],
    simontech: [
        
    ]
}


// First, the url to get
// Second argument is the function to run
// when the user gets that url
app.get('/', function(request, response) {
    // response.send('<h1>My Server</h1>')
    response.render('home.ejs', {studentStore :store})
})
app.post('/', function(request, response,next) {
    var name = request.body.name
    var email = request.body.email
    var order = request.body.order
    
    
    response.render('response.ejs', {
        name: name,
        email: email,
        order: order
    })
})

var port = process.env.PORT

app.listen(port, function(){
    console.log('App is running on port ' + port)
})