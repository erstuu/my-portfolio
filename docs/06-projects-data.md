# 06 — Projects Data (Source of Truth)

Dipakai oleh `04-sections-skills-projects.md`. Ini satu-satunya tempat isi/edit
daftar project — jangan duplikasi data project di file lain.

| Project | Kategori | Deskripsi Singkat | Tech Tags | Repo |
|---|---|---|---|---|
| DiaFit / DM-Care | Mobile | Android app edukasi & pencegahan diabetes melitus | Kotlin, Android SDK | `DiaFit`, `DM-Care` |
| SmartDose | Mobile | Android app pengingat dosis obat, integrasi Firebase | Kotlin, Firebase | `SmartDose` |
| Rainfall Prediction | ML | Prediksi curah hujan pakai Random Forest, dari notebook ke deployed app | Python, scikit-learn, Jupyter | `prediksi-curah-hujan-random-forest`, `rainfall-app` |
| Villa Review Sentiment Dashboard | ML / Web | Dashboard sentiment analysis review villa, pipeline LSTM/Word2Vec | TypeScript, Python, LSTM | `villa-review-sentiment-analysis-dashboard`, `Pipeline-Analisis-Sentiment-Pengunjung-Villa-LSTM-Word2Vec` |
| Forex EUR/USD Prediction | ML | Prediksi pergerakan forex pair EUR/USD | Python, Jupyter | `UAS-ML-Prediksi-Pergerakan-FOREX-Pair-EURUSD` |
| Alarm Pengingat Tidur | IoT | Project mikrokontroler, alarm pengingat tidur berbasis Arduino | C++, Arduino | `Alarm-Pengingat-Tidur-Arduino` |
| Mejeng | Web | Web app Laravel (UTS MPPL) | PHP, Laravel | `Mejeng-Laravel-App-v2` |
| SwimEase | Web | Aplikasi pendaftaran les renang berbasis Laravel | PHP, Laravel, Blade | `SwimEase` |

## Notes
- Kolom **Repo** = nama repo GitHub (bukan URL penuh), URL di-generate di kode:
  `https://github.com/erstuu/{repo}`
- Kategori HARUS salah satu dari: `Mobile`, `Web`, `ML`, `IoT` — sesuai
  `02-design-system.md` § Category Colors. Kalau nambah kategori baru, ikuti
  Sync Note di `04-sections-skills-projects.md`.
- Project yang punya 2 repo terkait (misal DiaFit/DM-Care, Rainfall) boleh
  ditampilkan sebagai satu card dengan 2 link, atau dipisah — keputusan ada di
  implementasi, tapi datanya tetap dari tabel ini.

## Sync Note
Setiap ada repo baru yang mau ditambahkan ke portfolio, HANYA edit tabel di file
ini. Section spec (`04-sections-skills-projects.md`) dan design token (`02-design-system.md`)
tidak perlu disentuh kecuali kategori barunya belum ada.
