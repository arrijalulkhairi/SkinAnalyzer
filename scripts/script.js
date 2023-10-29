var results = 0;

function redirectToResult() {
    var checkboxes = document.querySelectorAll('input[name="input_gejala"]');
    var selectedOptions = 0;

    for (var i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].checked) {
            selectedOptions++;
        }
    }

    var gejalaChecked = [];
    for (var i = 1; i <= 30; i++) {
        var checkbox = document.querySelector('input[id="gejala' + i + '"]');
        gejalaChecked[i] = checkbox.checked;
    }

    if (selectedOptions !== 0) {
        var penyakitCount = 10; // Jumlah penyakit
        var penyakitScores = new Array(penyakitCount).fill(0); // Inisialisasi array skor penyakit

        for (var i = 1; i <= penyakitCount; i++) {
            for (var j = (i - 1) * 3 + 1; j <= (i - 1) * 3 + 3; j++) {
                if (gejalaChecked[j]) {
                    penyakitScores[i - 1]++;
                }
            }
        }

        // Temukan penyakit dengan skor tertinggi
        var maxScore = Math.max(...penyakitScores);
        results = penyakitScores.indexOf(maxScore) + 1; // indeks dimulai dari 0, jadi tambahkan 1

        localStorage.setItem("results", results);
        window.location.href = "hasil.html";
    } else {
        alert("Pilih salah satu");
    }
}

function hasilEdited() {
    var penyakitTitle = document.getElementById("penyakitTitle");
    var solusiText = document.getElementById("solusiText");

    var result = parseInt(localStorage.getItem("results"));
    var resultInfo = {
        1: {
            title: "Eksim",
            solution: "Gunakan pembersih kulit yang lembut dan hindari sabun atau produk yang mengandung bahan kimia keras. Hindari mandi dengan air panas, karena dapat mengeringkan kulit. Mandilah dengan air hangat dan gunakan sabun yang lembut. Setelah mandi, segera oleskan pelembap untuk menjaga kelembapan kulit."
        },
        2: {
            title: "Campak",
            solution: "Vaksin, Vaksin campak adalah cara terbaik untuk mencegah penyakit campak. Vaksinasi rutin pada anak-anak sangat penting untuk menciptakan kekebalan kelompok dan mencegah penyebaran penyakit ini."
        },
        3: {
            title: "bisul",
            solution: "1. Kompres hangat, Gunakan kompres hangat dengan air hangat atau handuk bersih yang dicelupkan ke dalam air panas. Tempatkan kompres hangat di atas bisul selama 15-20 menit beberapa kali sehari. Ini membantu mengurangkan rasa sakit, mempercepat pematangan bisul, dan membantu cairan nanah keluar."
        },
        4: {
            title: "herpes",
            solution: "1. Obat antivirus, Dokter dapat meresepkan obat antivirus seperti asiklovir, valasiklovir, atau famsiklovir untuk mengurangi keparahan gejala dan mengurangkan frekuensi kekambuhan. Ini dapat membantu meredakan rasa sakit, gatal, dan peradangan."
        },
        5: {
            title: "kudis",
            solution: "Rekomendasi obat, Dokter Anda mungkin akan meresepkan krim atau salep yang mengandung permetrin sebagai pengobatan utama untuk kudis. Obat ini harus dioleskan ke seluruh tubuh, dari leher ke bawah, dan dibiarkan selama waktu yang ditentukan oleh dokter."
        },
        6: {
            title: "cacar air",
            solution: "Menggunakan pakaian yang longgar dan berbahan lembut agar tidak bersinggungan secara langsung dengan lepuhan berisi air."
        },
        7: {
            title: "kurap",
            solution: "Obat antijamur topikal, Dokter akan meresepkan krim, salep, atau lotion antijamur yang mengandung zat seperti klotrimazol, mikonazol, atau terbinafin. Oleskan obat ini sesuai petunjuk dokter dan teruskan penggunaan selama jangka waktu yang direkomendasikan, bahkan jika gejala sudah membaik."
        },
        8: {
            title: "jerawat",
            solution: "Jaga kebersihan kulit, Cuci wajah dengan lembut dua kali sehari, pagi dan malam, menggunakan pembersih wajah yang lembut."
        },
        9: {
            title: "Melanoma",
            solution: "Pembedahan, Pengangkatan tumor melanoma dengan pembedahan adalah langkah utama dalam pengobatan jika melanoma belum menyebar. Dalam beberapa kasus, ini mungkin melibatkan eksisi sederhana, di mana dokter mengangkat melanoma dan sejumlah kulit di sekitarnya. Dalam kasus yang lebih parah, mungkin diperlukan prosedur bedah yang lebih besar atau biopsi kelenjar getah bening di sekitarnya."
        },
        10: {
            title: "Impetigo",
            solution: "Antibiotik topikal, Dokter biasanya meresepkan antibiotik topikal, seperti mupirosin atau retapamulin, yang dioleskan langsung ke area yang terinfeksi. Ikuti petunjuk dokter dengan cermat dan terapkan antibiotik seperti yang direkomendasikan."
        }
    };

    penyakitTitle.textContent = "Anda Memiliki Penyakit : " + resultInfo[result].title;
    solusiText.textContent = resultInfo[result].solution;
}