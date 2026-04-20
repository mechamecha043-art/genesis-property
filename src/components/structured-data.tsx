export function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "RealEstateAgent",
    "name": "Perumahan Tangerang Serpong",
    "description": "Perumahan modern di Tangerang dekat Serpong dengan harga mulai 400 jutaan. Cicilan ringan mulai 2 jutaan. Lokasi strategis dekat Jakarta dengan desain premium.",
    "url": "https://chat.z.ai",
    "telephone": "+6281280660439",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Tangerang",
      "addressLocality": "Tangerang",
      "addressRegion": "Banten",
      "postalCode": "15111",
      "addressCountry": "ID"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": -6.2500,
      "longitude": 106.6500
    },
    "areaServed": [
      {
        "@type": "City",
        "name": "Tangerang"
      },
      {
        "@type": "City",
        "name": "Serpong"
      },
      {
        "@type": "City",
        "name": "Jakarta"
      },
      {
        "@type": "City",
        "name": "BSD"
      }
    ],
    "makesOffer": [
      {
        "@type": "Offer",
        "name": "Tahap 1 - Type X2",
        "description": "3 Kamar Tidur, 2 Kamar Mandi, 2 Lantai - LT 57.5m² LB 63m²",
        "price": "800000000",
        "priceCurrency": "IDR",
        "availability": "https://schema.org/InStock"
      },
      {
        "@type": "Offer",
        "name": "Tahap 2 - Type Cendana Living",
        "description": "3 Kamar Tidur, 3 Kamar Mandi, 2 Lantai - LT 92.2m² LB 97.5m²",
        "price": "1350000000",
        "priceCurrency": "IDR",
        "availability": "https://schema.org/InStock"
      },
      {
        "@type": "Offer",
        "name": "Tahap 3 - Premium Blackstar",
        "description": "4+1 Kamar Tidur, 3 Kamar Mandi, 2 Lantai - LT 112m² LB 125m²",
        "price": "1900000000",
        "priceCurrency": "IDR",
        "availability": "https://schema.org/InStock"
      },
      {
        "@type": "Offer",
        "name": "Tahap 5 - Treetops Livin",
        "description": "3 Kamar Tidur, 3 Kamar Mandi, 3 Lantai - LT 41.3m² LB 75.9m²",
        "price": "700000000",
        "priceCurrency": "IDR",
        "availability": "https://schema.org/InStock"
      },
      {
        "@type": "Offer",
        "name": "Tahap 6 - Cendana Alfa",
        "description": "4+1 Kamar Tidur, 3+1 Kamar Mandi, 2 Lantai - LT 82m² LB 108m²",
        "price": "1300000000",
        "priceCurrency": "IDR",
        "availability": "https://schema.org/InStock"
      },
      {
        "@type": "Offer",
        "name": "Tahap 7 - Goldtop Beverly",
        "description": "4 Kamar Tidur, 4.5 Kamar Mandi, 3 Lantai - LT 62.5m² LB 98m²",
        "price": "1000000000",
        "priceCurrency": "IDR",
        "availability": "https://schema.org/InStock"
      }
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5",
      "reviewCount": "6",
      "bestRating": "5",
      "worstRating": "1"
    }
  }

  const residentialData = {
    "@context": "https://schema.org",
    "@type": "Residence",
    "name": "Perumahan Modern Tangerang Serpong",
    "description": "Pengembangan perumahan residensial modern di Tangerang dekat Serpong dengan rumah murah mulai 400 juta dan cicilan 2 jutaan per bulan",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Tangerang",
      "addressLocality": "Tangerang",
      "addressRegion": "Banten",
      "postalCode": "15111",
      "addressCountry": "ID"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": -6.2500,
      "longitude": 106.6500
    },
    "numberOfRooms": [
      {
        "@type": "Room",
        "name": "Type X2",
        "numberOfBedrooms": 3,
        "numberOfBathrooms": 2,
        "numberOfFloors": 2
      },
      {
        "@type": "Room",
        "name": "Type Y - Park Serpong",
        "numberOfBedrooms": 2,
        "numberOfBathrooms": 2,
        "numberOfFloors": 2
      },
      {
        "@type": "Room",
        "name": "Type Cendana Living",
        "numberOfBedrooms": 3,
        "numberOfBathrooms": 3,
        "numberOfFloors": 2
      },
      {
        "@type": "Room",
        "name": "Type X3",
        "numberOfBedrooms": 3,
        "numberOfBathrooms": 3,
        "numberOfFloors": 2
      },
      {
        "@type": "Room",
        "name": "Q11",
        "numberOfBedrooms": 1,
        "numberOfBathrooms": 1,
        "numberOfFloors": 2
      },
      {
        "@type": "Room",
        "name": "Treetops Livin",
        "numberOfBedrooms": 3,
        "numberOfBathrooms": 3,
        "numberOfFloors": 3
      },
      {
        "@type": "Room",
        "name": "Cendana Alfa",
        "numberOfBedrooms": 4,
        "numberOfBathrooms": 3,
        "numberOfFloors": 2
      },
      {
        "@type": "Room",
        "name": "Goldtop Beverly",
        "numberOfBedrooms": 4,
        "numberOfBathrooms": 4,
        "numberOfFloors": 3
      }
    ],
    "featureList": [
      "Pilihan 1-4 kamar tidur",
      "2-3 lantai desain modern",
      "Carport tersedia",
      "Backyard dan balcony",
      "Cicilan terjangkau mulai 2 jutaan/bulan",
      "Lokasi strategis dekat Jakarta",
      "Dekat akses tol",
      "Dekat pusat perbelanjaan",
      "Dekat sekolah",
      "Dekat fasilitas kesehatan",
      "Dekat stasiun MRT"
    ]
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(residentialData) }}
      />
    </>
  )
}
