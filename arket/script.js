const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')
//---INPUT---//
const nameInput = document.getElementById('name')
const nrcInput = document.getElementById('nrc')
const classInput = document.getElementById('class')
const dateInput = document.getElementById('date')
const cidInput = document.getElementById('cid')

const downloadBtn = document.getElementById('download-btn')

const image = new Image()
image.src = 'certificate.jpg'
image.onload = function () {
	drawImage()
}

function drawImage() {
	// ctx.clearRect(0, 0, canvas.width, canvas.height)
	ctx.drawImage(image, 0, 0, canvas.width, canvas.height)
	ctx.font = '20px Gadugi bold'
	ctx.fillStyle = '#000000'

//---NAME---//
	ctx.fillText(nameInput.value, 280, 182)
//---NAME---//
	ctx.fillText(nrcInput.value, 60, 300)
//---CLASS---//
        ctx.fillText(classInput.value, 320, 300)
        ctx.fillText(classInput.value, 320, 475)
//---DATE---//
        ctx.fillText(dateInput.value, 89, 182)
}

nameInput.addEventListener('input', function () {
	drawImage()
})
nrcInput.addEventListener('input', function () {
	drawImage()
})
classInput.addEventListener('input', function () {
	drawImage()
})
dateInput.addEventListener('input', function () {
	drawImage()
})

downloadBtn.addEventListener('click', function () {
	downloadBtn.href = canvas.toDataURL('image/jpg')
	downloadBtn.download = 'voucher' + nameInput.value
})
