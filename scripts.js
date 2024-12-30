function initMap() {
    // Lokasi koordinat yang ingin ditampilkan di Google Maps
    const lokasi = { lat: -6.200000, lng: 106.816666 }; // Ganti dengan koordinat lokasi Anda

    // Membuat peta dengan lokasi tertentu
    const map = new google.maps.Map(document.getElementById("google-map"), {
        zoom: 10,
        center: lokasi,
    });

    // Menambahkan marker pada peta
    const marker = new google.maps.Marker({
        position: lokasi,
        map: map,
        title: "Lokasi Tim Robotika Umrah",
    });
}
