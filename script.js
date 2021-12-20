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
	ctx.font = '20px Gadugi'
	ctx.fillStyle = '#000000'

//---NAME---//
	ctx.fillText(nameInput.value, 290, 179)
//---NAME---//
	ctx.fillText(nrcInput.value, 60, 300)
//---CLASS---//
        ctx.fillText(classInput.value, 320, 300)
        ctx.fillText(classInput.value, 320, 475)
//---DATE---//
        ctx.fillText(dateInput.value, 80, 179)
//---CID---//
        ctx.fillText(cidInput.value, 500, 660)
}


nameInput.addEventListener('input', function () {
	drawImage()
})

downloadBtn.addEventListener('click', function () {
	downloadBtn.href = canvas.toDataURL('image/jpg')
	downloadBtn.download = 'Certificate' + nameInput.value
})
