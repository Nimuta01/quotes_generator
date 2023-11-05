// Untuk Mengambil dari API 
let front = true; 

// Mendapatkan bagian depan dan belakang bagian author di kotak quote
const authors = document.querySelectorAll(".author"); 

// Mendapatkan bagian depan dan belakang bagian quote di kotak quote 
const texts = document.querySelectorAll(".text"); 

// Mendapatkan body 
const body = document.getElementById("body"); 

// Mendapatkan buttons 
const button = document.querySelectorAll(".new-quote"); 

const blockFront = document.querySelector(".block__front"); 
const blockBack = document.querySelector(".block__back"); 

const authorFront = authors[0]; 
const authorBack = authors[1]; 

const textFront = texts[0]; 
const textBack = texts[1]; 

const buttonFront = button[0]; 
const buttonBack = button[1]; 


// Untuk mendapatkan quote 
const displayQuote = () =>{ 
	let index = Math.floor(Math.random()*data.length); 
	let quote = data[index].text; 
	let author = data[index].author; 

	// Jadikan author anonymous jika tidak ada author
	if(!author){ 
		author = "Anonymous"
	} 


	if(front){ 
		// Mengubah dari depan ke belakang
		textFront.innerHTML = quote; 
		authorFront.innerHTML = author; 
	}else{ 
		// Mengubah dari belakang ke depan
		textBack.innerHTML = quote; 
		authorBack.innerHTML = author; 
	} 
	
	front = !front; 

} 

// Mengambil dari API
fetch("https://type.fit/api/quotes") 
	.then(function(response) { 
		return response.json(); 
	}) // Mendapatkan data JSON
	.then(function(data) { 
		this.data = data; 
		displayQuote() 
}); 


// Menambahkan on click listener pada button
function newQuote(){ 
	
	// Memutar kotak quote
	blockBack.classList.toggle('rotateB'); 
	blockFront.classList.toggle('rotateF'); 
	displayQuote(); 
}
