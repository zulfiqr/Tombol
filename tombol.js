class Tombol {

	constructor(elemen)
	{
		this.elemen = elemen;
		this.originalCaption = $(elemen).html();
		this.originalClass = $(elemen).attr('class');

	}

	reset()
	{
		$(this.elemen).html(this.originalCaption);
		$(this.elemen).removeAttr('class').addClass(this.originalClass);
		

	}


	//fungsi untuk menset warna tombol
	setWarna(classWarna) {
		this.resetTombol();
		$(this.elemen).addClass('btn-'+classWarna);
	}

	//fungsi untuk menset caption tombol
	setCaption(captionTombol) {
		$(this.elemen).html('').html(captionTombol);
	}

	//fungsi private untuk mereset tomobl
	resetTombol() {
		this.removeClass('btn-primary');
		this.removeClass('btn-warning');
		this.removeClass('btn-default');
		this.removeClass('btn-success');
		this.removeClass('btn-danger');

	}


	primary(caption)
	{
		this.resetTombol();
		this.setCaption(caption);
		this.setWarna('primary');
	}

	warning(caption)
	{
		this.resetTombol();
		this.setCaption(caption);
		this.setWarna('warning');
	}

	success(caption)
	{
		this.resetTombol();
		this.setCaption(caption);
		this.setWarna('success');
	}

	danger(caption)
	{
		this.resetTombol();
		this.setCaption(caption);
		this.setWarna('danger');
	}

	//fungsi private untuk mengahpus kelas tombol
	removeClass(classHapus) {

		if($(this.elemen).hasClass(classHapus))
		{
			console.log(`Tombol ${this.elemen} memiliki kelas ${classHapus}`);
			$(this.elemen).removeClass(classHapus);	
		}
		
	}

	//fungsi untuk set text Loading
	setLoading(textLoading)
	{
		console.log(`set Caption Tombol sebagai Loading `);
		this.resetTombol();
		this.setWarna('warning');
		this.setCaption(`<i class="fas fa-spinner fa-pulse"></i> ${textLoading}`);
	}


} //end of class Tombol()
