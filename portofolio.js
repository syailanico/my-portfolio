let portofolio = [
    { nama: "Website Sekolah", tahun: 2023 },
    { nama: "Aplikasi Kasir", tahun: 2024 },
    { nama: "Web CV Digital", tahun: 2025}
];

console.log("Daftar Proyek Saya:");
for (let i = 0; i < portofolio.length; i++) {
    console.log((i + 1) + ". " + portofolio[i].nama + " (" + portofolio[i].tahun + ")");
}