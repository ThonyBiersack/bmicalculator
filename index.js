var tinggi,berat,keterangan,bmi;
function hitung() {
	tinggi = parseFloat(document.getElementById("ipt_t").value);
	tinggi /= 100;
	berat = parseFloat(document.getElementById("ipt_b").value);
	bmi = berat / (tinggi * tinggi);

	if (bmi > 30) {
		keterangan = "Obesity";
	}else if ((bmi >= 25) & (bmi <= 29.9)){
		keterangan = "Overweight";
	}else if ((bmi >= 18.5) & (bmi <= 24.9)){
		keterangan = "Normal Weight";
	} else if ((bmi >= 17) & (bmi <= 18.5)){
		keterangan = "Underweight";
	}else {
		keterangan = "Malnutrition";
	}
	document.getElementById('bmi').innerHTML = "Hasil perhitungan BMI : " + bmi.toFixed(1);
	document.getElementById('keterangan').innerHTML = keterangan;
}