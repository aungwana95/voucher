const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')
//---INPUT---//
const nameInput = document.getElementById('name')
const nrcInput = document.getElementById('nrc')
const classInput = document.getElementById('class')
//---OUTPUT---//
const downloadBtn = document.getElementById('download-btn')

const image = new Image()
image.src = 'IELC Certificate.jpg'
image.onload = function () {
	drawImage()
}

function drawImage() {
	// ctx.clearRect(0, 0, canvas.width, canvas.height)
	ctx.drawImage(image, 0, 0, canvas.width, canvas.height)
	ctx.font = '35px Georgia'
	ctx.fillStyle = '#0f4070'

//---NAME---//
	ctx.fillText(nameInput.value, 270, 285)
//---NAME---//
	ctx.fillText(nrcInput.value, 270, 325)
//---CLASS---//
        ctx.fillText(classInput.value, 270, 394)
}
nameInput.addEventListener('input', function () {
	drawImage()})
nrcInput.addEventListener('input', function () {
	drawImage()})
classInput.addEventListener('input', function () {
	drawImage()})

downloadBtn.addEventListener('click', function () {
	downloadBtn.href = canvas.toDataURL('image/jpg')
	downloadBtn.download = 'IELC' + nameInput.value
})
