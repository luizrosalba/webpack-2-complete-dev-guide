import '../styles/image_viewer.css' /// non js must have extension
import big from '../assets/big.png'
import small from '../assets/small.png'

const image = document.createElement('img');

image.src = 'http://lorempixel.com.br/400/400'

document.body.appendChild(image);