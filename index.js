const timeEl = document.getElementById('time');
setInterval(() => {
  timeEl.textContent = Date.now();
}, 100); // updates every 100ms

// Avatar upload
const avatar = document.getElementById('avatar');
const upload = document.getElementById('avatarUpload');



upload.addEventListener('change', (e) => {
  const file = e.target.files[0];
  if (file) {
    avatar.src = URL.createObjectURL(file);
  }
});




