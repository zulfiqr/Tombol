# Tombol
jquery button 

Tombol merupakan class untuk memanipulasi tag button

cara penggunaan

html
<button type="button" id="btnTest"></button>

javascript
var btntest = new Tombol('#btnTest');

#membuat caption button menjadi animasi loading
btntest.setLoading('Meload');

#mereset tombol ke default
btntest.reset();

