const path = require('path')
const express = require('express')
const hbs = require('hbs')
const sassMiddleware = require('node-sass-middleware')

const app = express()

// Paths for Express config
const publicDirectoryPath = path.join(__dirname, 'public')
const viewsPath = path.join(__dirname, 'templates/views')
const partialsPath = path.join(__dirname, 'templates/partials')

// Setup for view engine
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

app.use(sassMiddleware({
    src: path.join(__dirname, 'src'),
    dest: path.join(__dirname, 'public'),
    debug: true,
    outputStyle: 'compressed'
}))

app.use(express.static(publicDirectoryPath))

app.get('', (req, res) => {
    res.render('index')
})

const port = process.env.PORT || 3000
app.listen(port, () => {
    console.log(`Server is up on port ${port}`)
})