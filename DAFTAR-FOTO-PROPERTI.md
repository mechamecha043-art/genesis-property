# Daftar Lengkap Foto Properti Park Serpong

## Struktur Folder

```
/public/images/
├── hero/                    (1 file)
├── residential/              (29 files)
│   ├── phase-1/            (3 files)
│   ├── phase-2/            (4 files)
│   ├── phase-3/            (4 files)
│   ├── phase-5/            (5 files)
│   ├── phase-6/            (6 files)
│   └── phase-7/            (5 files)
├── commercial/               (6 files)
├── gallery/                  (36 files)
└── fallback/                 (2 files)
```

---

## File yang Dibutuhkan di Landing Page

### Folder: /public/images/hero/
- `hero-luxury-house.jpg` - Foto utama di bagian hero section

### Folder: /public/images/residential/phase-1/
- `type-y.jpg` - Type Y
- `type-x2.jpg` - Type X2
- `cendana-living.jpg` - Type Cendana Living

### Folder: /public/images/residential/phase-2/
- `cendana-living-p2.jpg` - Type Cendana Living
- `type-x3.jpg` - Type X3
- `q21.jpg` - Q21
- `q11.jpg` - Q11

### Folder: /public/images/residential/phase-3/
- `q23.jpg` - Q23
- `x6.jpg` - X6
- `cendana-suite.jpg` - Cendana Suite
- `premium-blackstar.jpg` - Premium Blackstar

### Folder: /public/images/residential/phase-5/
- `treetops-livin.jpg` - Treetops Livin
- `gold-livin.jpg` - Gold Livin
- `goldtop-livin.jpg` - Goldtop Livin
- `quartz-livin.jpg` - Quartz Livin
- `bronze.jpg` - Bronze

### Folder: /public/images/residential/phase-6/
- `bronze-alfa-b.jpg` - Bronze Alfa B
- `silver-alfa.jpg` - Silver Alfa
- `treetops-alfa.jpg` - Treetops Alfa
- `gold-alfa.jpg` - Gold Alfa
- `goldtops-alfa.jpg` - Goldtops Alfa
- `cendana-alfa.jpg` - Cendana Alfa

### Folder: /public/images/residential/phase-7/
- `goldtop-beverly.jpg` - Goldtop Beverly
- `gold-beverly.jpg` - Gold Beverly
- `urban-beverly-treetops.jpg` - Urban Beverly Treetops
- `urban-beverly.jpg` - Urban Beverly
- `bronze-beverly.jpg` - Bronze Beverly

### Folder: /public/images/commercial/

#### The Hive Park Avenue
- `hive-park-avenue.jpg` - The Hive Park Avenue (Ruko Phase 1)

#### The Hive Parkhills Boulevard
- `hive-parkhills-boulevard.jpg` - Hive Parkhills Boulevard (Type Standar & Type Hoek)

#### The Hive Aurora
- `hive-aurora.jpg` - Aurora Type Standar & Type B

#### The Hive Teraza
- `hive-teraza.jpg` - Teraza Type Standar & Type B

#### SOHO Treetops
- `soho-treetops.jpg` - SOHO Treetops (3,3x10m & 3,6x10m)

#### Park Exchange
- `park-exchange-lot.jpg` - Commercial Lot Park Exchange

### Folder: /public/images/gallery/
- `1.jpg` s/d `36.jpg` - 36 foto untuk galeri properti

### Folder: /public/images/fallback/
- `townhouse-exterior.jpg` - Fallback untuk kartu rumah jika image tidak ditemukan
- `shop-house.jpg` - Fallback untuk kartu komersial jika image tidak ditemukan

---

## Total File Foto yang Dibutuhkan: 74 file

### Rincian:
- Hero: 1 file
- Rumah Residensial: 27 file (29 references, some shared)
- Properti Komersial: 6 file
- Galeri: 36 file
- Fallback: 2 file

---

## Daftar Nama File untuk Galeri (Manual Replacement)
**Lokasi:** `/public/images/gallery/`

1. 1.jpg
2. 2.jpg
3. 3.jpg
4. 4.jpg
5. 5.jpg
6. 6.jpg
7. 7.jpg
8. 8.jpg
9. 9.jpg
10. 10.jpg
11. 11.jpg
12. 12.jpg
13. 13.jpg
14. 14.jpg
15. 15.jpg
16. 16.jpg
17. 17.jpg
18. 18.jpg
19. 19.jpg
20. 20.jpg
21. 21.jpg
22. 22.jpg
23. 23.jpg
24. 24.jpg
25. 25.jpg
26. 26.jpg
27. 27.jpg
28. 28.jpg
29. 29.jpg
30. 30.jpg
31. 31.jpg
32. 32.jpg
33. 33.jpg
34. 34.jpg
35. 35.jpg
36. 36.jpg

---

## Backup Gambar Lama

Semua gambar yang lama telah dipindahkan ke:
- `/public/images-backup/`

Anda dapat menyalin gambar-gambar tersebut ke folder yang sesuai sesuai struktur di atas.

---

## Catatan:
1. Struktur folder sudah disiapkan dan saat ini **kosong**
2. **Tidak akan ada error** jika folder masih kosong karena page.tsx sudah dilengkapi dengan error handling
3. Saat gambar tidak tersedia, akan ditampilkan placeholder (icon rumah/toko) sebagai gantinya
4. Beberapa file foto digunakan untuk lebih dari satu tipe unit (contoh: hive-parkhills-boulevard.jpg untuk Type Standar & Type Hoek)
5. File foto harus diletakkan di folder yang **SAMA PERSIS** seperti struktur di atas agar dapat ditampilkan dengan benar
6. Format file yang digunakan adalah JPG (.jpg)
7. Untuk galeri, Anda dapat menambahkan foto properti ke folder `/public/images/gallery/` sesuai kebutuhan
