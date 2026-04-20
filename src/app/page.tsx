'use client'

import { useState, useEffect, useRef } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { MessageCircle, MapPin, Bed, Bath, Car, CheckCircle2, ArrowRight, HomeIcon, Layers, Store, Ruler, Building2, ChevronUp, Menu, Shield, Droplets, TreePine, Dumbbell, Utensils, Wifi, Coffee, Monitor, Baby } from 'lucide-react'
import Image from 'next/image'

// Format currency to Indonesian Rupiah
const formatRupiah = (value: number | string): string => {
  if (typeof value === 'string') return value
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(value)
}

// Property data based on provided structure with folder paths
const propertyData = [
  {
    phase: "Phase 1",
    units: [
      {
        name: "Type Y",
        price: 600000000,
        installment: 2700000,
        landSize: 41.4,
        buildingSize: 45,
        floors: 2,
        bedrooms: 2,
        bathrooms: 2,
        image: "/images/residential/phase-1/type-y.jpg"
      },
      {
        name: "Type X2",
        price: 820000000,
        installment: 3000000,
        landSize: 57.5,
        buildingSize: 63,
        floors: 2,
        bedrooms: 3,
        bathrooms: 3,
        image: "/images/residential/phase-1/type-x2.jpg"
      },
      {
        name: "Type Cendana Living",
        price: 1200000000,
        installment: 4000000,
        landSize: 82.5,
        buildingSize: 68,
        floors: 2,
        bedrooms: 3,
        bathrooms: 3,
        image: "/images/residential/phase-1/cendana-living.jpg"
      }
    ]
  },
  {
    phase: "Phase 2",
    units: [
      {
        name: "Type Cendana Living",
        price: 1350000000,
        installment: 4500000,
        landSize: 92.2,
        buildingSize: 97.5,
        floors: 2,
        bedrooms: 3,
        bathrooms: 3,
        image: "/images/residential/phase-2/cendana-living-p2.jpg"
      },
      {
        name: "Type X3",
        price: 900000000,
        installment: 3500000,
        landSize: 56.5,
        buildingSize: 66.9,
        floors: 2,
        bedrooms: 3,
        bathrooms: 3,
        image: "/images/residential/phase-2/type-x3.jpg"
      },
      {
        name: "Q21",
        price: 600000000,
        installment: 2500000,
        floors: 2,
        bedrooms: 2,
        bathrooms: 2,
        image: "/images/residential/phase-2/q21.jpg"
      },
      {
        name: "Q11",
        price: 400000000,
        installment: 2000000,
        floors: 2,
        bedrooms: 1,
        bathrooms: 1,
        image: "/images/residential/phase-2/q11.jpg"
      }
    ]
  },
  {
    phase: "Phase 3",
    units: [
      {
        name: "Q23",
        price: 600000000,
        installment: 2300000,
        landSize: 42.9,
        buildingSize: 48.6,
        floors: 2,
        bedrooms: 2,
        bathrooms: 2,
        image: "/images/residential/phase-3/q23.jpg"
      },
      {
        name: "X6",
        price: 900000000,
        installment: 3200000,
        landSize: 62.5,
        buildingSize: 66,
        floors: 2,
        bedrooms: 3,
        bathrooms: 3,
        image: "/images/residential/phase-3/x6.jpg"
      },
      {
        name: "Cendana Suite",
        price: 1200000000,
        installment: 3900000,
        landSize: 79.8,
        buildingSize: 88.8,
        floors: 2,
        bedrooms: 3,
        bathrooms: 3,
        image: "/images/residential/phase-3/cendana-suite.jpg"
      },
      {
        name: "Premium Blackstar",
        price: 1900000000,
        installment: 5700000,
        landSize: 112,
        buildingSize: 125,
        floors: 2,
        bedrooms: "4+1 ART",
        bathrooms: 3,
        image: "/images/residential/phase-3/premium-blackstar.jpg"
      }
    ]
  },
  {
    phase: "Phase 5",
    units: [
      {
        name: "Treetops Livin",
        price: 700000000,
        installment: 3600000,
        landSize: 41.3,
        buildingSize: 75.9,
        floors: 3,
        bedrooms: 3,
        bathrooms: 3,
        features: ["Canopy 1 Car"],
        image: "/images/residential/phase-5/treetops-livin.jpg"
      },
      {
        name: "Gold Livin",
        price: 900000000,
        installment: 4000000,
        landSize: 62.5,
        buildingSize: 70.6,
        floors: 2,
        bedrooms: 3,
        bathrooms: 3,
        image: "/images/residential/phase-5/gold-livin.jpg"
      },
      {
        name: "Goldtop Livin",
        price: 1000000000,
        installment: 4600000,
        landSize: 62.5,
        buildingSize: 87.8,
        floors: 3,
        bedrooms: 4,
        bathrooms: 3,
        features: ["Canopy 2 Cars"],
        image: "/images/residential/phase-5/goldtop-livin.jpg"
      },
      {
        name: "Quartz Livin",
        price: 500000000,
        installment: 2900000,
        landSize: 42.9,
        buildingSize: 50.2,
        floors: 2,
        bedrooms: 2,
        bathrooms: 2,
        features: ["Canopy 1 Car"],
        image: "/images/residential/phase-5/quartz-livin.jpg"
      },
      {
        name: "Bronze",
        price: 450000000,
        installment: 2000000,
        landSize: 38,
        buildingSize: 40,
        floors: 2,
        bedrooms: 1,
        bathrooms: 1,
        image: "/images/residential/phase-5/bronze.jpg"
      }
    ]
  },
  {
    phase: "Phase 6 - Anamaste Collection",
    units: [
      {
        name: "Bronze Alfa B",
        price: 401000000,
        installment: 2200000,
        landSize: 38,
        buildingSize: 40.8,
        floors: 2,
        bedrooms: 1,
        bathrooms: 1,
        features: ["Canopy 1 Car"],
        image: "/images/residential/phase-6/bronze-alfa-b.jpg"
      },
      {
        name: "Silver Alfa",
        price: 500000000,
        installment: 2800000,
        landSize: 41.4,
        buildingSize: 57,
        floors: 2,
        bedrooms: 2,
        bathrooms: 2,
        features: ["Canopy 1 Car"],
        image: "/images/residential/phase-6/silver-alfa.jpg"
      },
      {
        name: "Treetops Alfa",
        price: 750000000,
        installment: 3600000,
        landSize: 45,
        buildingSize: 88.4,
        floors: 3,
        bedrooms: 3,
        bathrooms: 3,
        features: ["Functional Room", "Canopy 2 Cars"],
        image: "/images/residential/phase-6/treetops-alfa.jpg"
      },
      {
        name: "Gold Alfa",
        price: 910000000,
        installment: 4100000,
        landSize: 62.5,
        buildingSize: 78,
        floors: 2,
        bedrooms: 3,
        bathrooms: 3,
        features: ["Backyard", "Canopy 2 Cars"],
        image: "/images/residential/phase-6/gold-alfa.jpg"
      },
      {
        name: "Goldtops Alfa",
        price: 1100000000,
        installment: 4500000,
        landSize: 62.5,
        buildingSize: 97.5,
        floors: 3,
        bedrooms: 4,
        bathrooms: 3,
        features: ["Balcony", "Sky Terrace", "Backyard"],
        image: "/images/residential/phase-6/goldtops-alfa.jpg"
      },
      {
        name: "Cendana Alfa",
        price: 1300000000,
        installment: 4900000,
        landSize: 82,
        buildingSize: 108,
        floors: 2,
        bedrooms: "4+1 ART",
        bathrooms: "3+1 ART",
        features: ["Backyard", "Canopy 2 Cars"],
        image: "/images/residential/phase-6/cendana-alfa.jpg"
      }
    ]
  },
  {
    phase: "Phase 7 - Wonderful Collection",
    units: [
      {
        name: "Goldtop Beverly",
        price: 1000000000,
        installment: 4500000,
        landSize: 62.5,
        buildingSize: 98,
        floors: 3,
        bedrooms: 4,
        bathrooms: 4.5,
        features: ["Backyard", "Canopy 2 Cars"],
        image: "/images/residential/phase-7/goldtop-beverly.jpg"
      },
      {
        name: "Gold Beverly",
        price: 950000000,
        installment: 3800000,
        landSize: 62.5,
        buildingSize: 63.8,
        floors: 2,
        bedrooms: 3,
        bathrooms: 3,
        features: ["Backyard", "Canopy 2 Cars"],
        image: "/images/residential/phase-7/gold-beverly.jpg"
      },
      {
        name: "Urban Beverly Treetops",
        price: 740000000,
        installment: 3500000,
        landSize: 45,
        buildingSize: 81,
        floors: 3,
        bedrooms: 4,
        bathrooms: 4,
        features: ["Backyard", "Canopy 1 Car"],
        image: "/images/residential/phase-7/urban-beverly-treetops.jpg"
      },
      {
        name: "Urban Beverly",
        price: 610000000,
        installment: 3000000,
        landSize: 53.8,
        buildingSize: 58.7,
        floors: 2,
        bedrooms: 3,
        bathrooms: 3,
        features: ["Backyard", "Canopy 1 Car"],
        image: "/images/residential/phase-7/urban-beverly.jpg"
      },
      {
        name: "Bronze Beverly",
        price: 400000000,
        installment: 1800000,
        landSize: 42,
        buildingSize: 25.8,
        floors: 2,
        bedrooms: 1,
        bathrooms: 1,
        features: ["Backyard", "Canopy 1 Car"],
        image: "/images/residential/phase-7/bronze-beverly.jpg"
      }
    ]
  }
]

// Commercial Property Data - Separate with folder paths
const commercialData = [
  {
    phase: "Phase 1",
    name: "The Hive Park Avenue",
    units: [
      {
        name: "The Hive Park Avenue",
        type: "Ruko",
        price: 1600000000,
        installment: 5000000,
        landSize: 65,
        buildingSize: 165,
        floors: 3,
        features: ["3 Key Lock System", "Halaman Belakang"],
        image: "/images/commercial/hive-park-avenue.jpg"
      }
    ]
  },
  {
    phase: "Phase 2",
    name: "Hive Parkhills Boulevard",
    units: [
      {
        name: "Hive Parkhills Boulevard - Type Standar",
        type: "Ruko",
        price: 1450000000,
        installment: 5500000,
        landSize: 54,
        buildingSize: 110,
        floors: 3,
        bedrooms: 3,
        features: ["3 Key Lock System", "Halaman Belakang", "Alfresco", "Rooftop Terrace", "Multifunction Room", "Desain Elegan"],
        image: "/images/commercial/hive-parkhills-boulevard.jpg"
      },
      {
        name: "Hive Parkhills Boulevard - Type Hoek",
        type: "Ruko",
        price: 1800000000,
        installment: 6800000,
        landSize: 90,
        buildingSize: 137,
        floors: 3,
        features: ["Type Hoek", "3 Key Lock System", "Alfresco", "Rooftop Terrace"],
        image: "/images/commercial/hive-parkhills-boulevard.jpg"
      }
    ]
  },
  {
    phase: "The Hive Aurora",
    name: "The Hive Aurora",
    units: [
      {
        name: "Aurora Type Standar",
        type: "Ruko",
        price: 1470000000,
        installment: 5500000,
        landSize: 54,
        buildingSize: 110,
        floors: 3,
        bathrooms: 3,
        features: ["Three Key Lock System", "Halaman Belakang", "Alfresco"],
        image: "/images/commercial/hive-aurora.jpg"
      },
      {
        name: "Aurora Type B",
        type: "Ruko",
        price: 1900000000,
        installment: 6700000,
        landSize: 65,
        buildingSize: 165,
        floors: 3,
        bathrooms: 3,
        features: ["Desain Baru", "Halaman Belakang", "Konsep Alfresco"],
        image: "/images/commercial/hive-aurora.jpg"
      }
    ]
  },
  {
    phase: "The Hive Teraza",
    name: "The Hive Teraza",
    units: [
      {
        name: "Teraza Type Standar",
        type: "Ruko",
        price: 1450000000,
        installment: 5900000,
        landSize: 54,
        buildingSize: 110,
        floors: 3,
        bathrooms: 3,
        bookingFee: 20000000,
        features: ["Desain Modern Baru", "Halaman Belakang", "Konsep Alfresco", "Roof Terrace"],
        image: "/images/commercial/hive-teraza.jpg"
      },
      {
        name: "Teraza Type B",
        type: "Ruko",
        price: 1900000000,
        installment: 6500000,
        landSize: 65,
        buildingSize: 165,
        floors: 3,
        bathrooms: 3,
        bookingFee: 20000000,
        features: ["3 Lantai", "3 Bathroom"],
        image: "/images/commercial/hive-teraza.jpg"
      }
    ]
  },
  {
    phase: "SOHO Treetops",
    name: "Ruko SOHO Treetops",
    units: [
      {
        name: "SOHO Treetops - 3,3x10m",
        type: "SOHO",
        price: 888000000,
        installment: 3900000,
        landSize: 33,
        buildingSize: 84,
        floors: 3,
        bedrooms: 2,
        bathrooms: 3,
        features: ["2 Bedroom Opsional", "2 Konsep Alfresco Terrace"],
        image: "/images/commercial/soho-treetops.jpg"
      },
      {
        name: "SOHO Treetops - 3,6x10m",
        type: "SOHO",
        price: 950000000,
        installment: 4200000,
        landSize: 36,
        buildingSize: 92,
        floors: 3,
        features: ["2 Konsep Alfresco Terrace"],
        image: "/images/commercial/soho-treetops.jpg"
      }
    ]
  },
  {
    phase: "Park Exchange",
    name: "Park Exchange Lot",
    units: [
      {
        name: "Commercial Lot Park Exchange",
        type: "Tanah Kavling",
        landSize: 766,
        pricePerMeter: 10000000,
        bookingFee: 100000000,
        features: ["Tanah Kavling Komersial"],
        image: "/images/commercial/park-exchange-lot.jpg"
      }
    ]
  }
]

// Testimonials
const testimonials = [
  {
    id: 1,
    name: 'Andi Pratama',
    role: 'Pemilik Rumah',
    content: 'Investasi properti terbaik di Tangerang. Lokasi strategis dekat Serpong dan kualitas melebihi ekspektasi. Sangat direkomendasikan!',
    rating: 5
  },
  {
    id: 2,
    name: 'Sarah Wijaya',
    role: 'Pengusaha',
    content: 'Rumah impian dekat area Serpong. Desain modern dan kualitas premium membuatnya menjadi investasi yang sangat baik.',
    rating: 5
  },
  {
    id: 3,
    name: 'Budi Santoso',
    role: 'Profesional Muda',
    content: 'Desain modern dengan harga terjangkau. Rencana cicilan membuat mungkin untuk memiliki rumah premium.',
    rating: 5
  },
  {
    id: 4,
    name: 'Dewi Lestari',
    role: 'Ibu Rumah Tangga',
    content: 'Lokasi sangat strategis, dekat sekolah, mall, dan akses tol. Rumahnya nyaman dan desainnya cantik sekali.',
    rating: 5
  },
  {
    id: 5,
    name: 'Rudi Hermawan',
    role: 'Investor Properti',
    content: 'Investasi yang sangat menguntungkan. Harga naik signifikan dalam 2 tahun. Fasilitas lengkap.',
    rating: 5
  },
  {
    id: 6,
    name: 'Maya Sari',
    role: 'Wiraswasta',
    content: 'Cicilan ringan membuat impian memiliki rumah tercapai. Pelayanan tim sangat profesional.',
    rating: 5
  }
]

const highlights = [
  { icon: Bed, label: '1-4 Pilihan Kamar Tidur', description: 'Pilih sesuai kebutuhan keluarga' },
  { icon: Bath, label: 'Kamar Mandi Premium', description: 'Design modern dengan finishing berkualitas' },
  { icon: Car, label: 'Carport Tersedia', description: 'Parkir aman dan luas untuk kendaraan' },
  { icon: Layers, label: '2-3 Lantai Modern', description: 'Desain kontemporer yang elegan' },
  { icon: Ruler, label: 'Tanah Luas', description: 'Ukuran tanah yang bervariasi untuk kebutuhan' },
  { icon: MapPin, label: 'Lokasi Strategis', description: 'Dekat Jakarta dan pusat kota' }
]

// Facilities Data
const facilities = [
  'Kolam renang Beach Club',
  'Rumah Sakit Siloam',
  'Sekolah Lentera Harapan',
  'Sekolah Penabur',
  'Sekolah Al-Azhar',
  'Kampus UMN',
  'Kampus UPH',
  'Sekolah Genesis',
  'Rumah Sakit Betsaida',
  'Mall SMS',
  'Mall Aeon',
  'Pasar Modern BSD',
  'Akses Tol BSD & JORR',
  'Stasiun KA Cisauk',
  'Bandara Soekarno-Hatta'
]

// Gallery Data - Menggunakan angka saja untuk nama file galeri dengan folder path
const galleryImages = Array.from({ length: 36 }, (_, i) => ({
  src: `/images/gallery/${i + 1}.jpg`,
  title: `Foto ${i + 1}`,
  category: 'Galeri'
}))

const whatsappLink = 'https://wa.me/6281280660439'

// Property Card Component with error handling
function PropertyCard({ unit }: { unit: any }) {
  const [imageError, setImageError] = useState(false)
  const hasPrice = unit.price !== undefined
  const hasInstallment = unit.installment !== undefined
  const hasLandSize = unit.landSize !== undefined
  const hasBuildingSize = unit.buildingSize !== undefined
  const hasFloors = unit.floors !== undefined
  const hasBedrooms = unit.bedrooms !== undefined
  const hasBathrooms = unit.bathrooms !== undefined
  const imageUrl = unit.image || '/images/fallback/townhouse-exterior.jpg'

  const handleImageError = () => {
    setImageError(true)
  }

  return (
    <Card className="bg-zinc-800/50 border-white/10 overflow-hidden hover:border-amber-500/30 transition-all group">
      <div className="relative h-48 bg-zinc-900">
        {imageError ? (
          <div className="absolute inset-0 flex items-center justify-center">
            <HomeIcon className="w-16 h-16 text-zinc-700" />
          </div>
        ) : (
          <Image
            src={imageUrl}
            alt={`${unit.name} - Tangerang Serpong property`}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-500"
            loading="lazy"
            onError={handleImageError}
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 to-transparent" />
      </div>
      <CardContent className="p-5">
        <h3 className="text-lg font-bold text-white mb-3">{unit.name}</h3>
        
        {/* Property Details Grid */}
        <div className="grid grid-cols-2 gap-2 mb-4 text-xs">
          {hasLandSize && (
            <div className="flex items-center gap-1.5 text-zinc-400">
              <Ruler className="w-3.5 h-3.5 text-amber-400" />
              <span>LT {unit.landSize}m²</span>
            </div>
          )}
          {hasBuildingSize && (
            <div className="flex items-center gap-1.5 text-zinc-400">
              <HomeIcon className="w-3.5 h-3.5 text-amber-400" />
              <span>LB {unit.buildingSize}m²</span>
            </div>
          )}
          {hasFloors && (
            <div className="flex items-center gap-1.5 text-zinc-400">
              <Layers className="w-3.5 h-3.5 text-amber-400" />
              <span>{unit.floors} Lantai</span>
            </div>
          )}
          {hasBedrooms && (
            <div className="flex items-center gap-1.5 text-zinc-400">
              <Bed className="w-3.5 h-3.5 text-amber-400" />
              <span>{unit.bedrooms} KT</span>
            </div>
          )}
          {hasBathrooms && (
            <div className="flex items-center gap-1.5 text-zinc-400">
              <Bath className="w-3.5 h-3.5 text-amber-400" />
              <span>{unit.bathrooms} KM</span>
            </div>
          )}
        </div>

        {/* Price Section */}
        {hasPrice && (
          <div className="mb-3 p-3 bg-gradient-to-r from-amber-500/10 to-amber-600/10 rounded-lg border border-amber-500/20">
            <div className="text-xl font-bold text-amber-400 mb-1">
              {formatRupiah(unit.price)}
            </div>
            {hasInstallment && (
              <div className="text-xs text-zinc-400">
                Cicilan <span className="text-amber-400 font-semibold">{formatRupiah(unit.installment)}/bulan</span>
              </div>
            )}
          </div>
        )}

        {/* Special pricing for commercial land */}
        {unit.pricePerMeter && (
          <div className="mb-3 p-3 bg-gradient-to-r from-blue-500/10 to-amber-500/10 rounded-lg border border-blue-500/20">
            <div className="text-xl font-bold text-amber-400 mb-1">
              {formatRupiah(unit.pricePerMeter)}/m²
            </div>
            {unit.bookingFee && (
              <div className="text-xs text-zinc-400">
                Booking Fee: <span className="text-amber-400 font-semibold">{formatRupiah(unit.bookingFee)}</span>
              </div>
            )}
          </div>
        )}

        {/* Features */}
        {unit.features && unit.features.length > 0 && (
          <ul className="space-y-1.5 mb-4">
            {unit.features.slice(0, 3).map((feature: string, i: number) => (
              <li key={i} className="flex items-center gap-2 text-xs text-zinc-400">
                <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 flex-shrink-0" />
                {feature}
              </li>
            ))}
          </ul>
        )}

        {/* CTA Button */}
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full text-center bg-gradient-to-r from-amber-500 to-amber-600 text-zinc-950 py-2.5 rounded-lg font-semibold text-sm hover:from-amber-400 hover:to-amber-500 transition-all"
        >
          Tanya Sekarang
        </a>
      </CardContent>
    </Card>
  )
}

export default function Home() {
  const [activeTestimonial, setActiveTestimonial] = useState(0)
  const [selectedPhase, setSelectedPhase] = useState("Phase 1")
  const [showScrollTop, setShowScrollTop] = useState(false)
  const [showPhaseMenu, setShowPhaseMenu] = useState(false)
  const [heroImageError, setHeroImageError] = useState(false)
  const propertiesSectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Filter residential phases (excluding Commercial)
  const residentialPhases = propertyData.filter(item => !item.phase.includes('Commercial'))

  const selectedPhaseData = residentialPhases.find(item => item.phase === selectedPhase) || residentialPhases[0]

  const handlePhaseChange = (phase: string) => {
    setSelectedPhase(phase)
    setShowPhaseMenu(false)
    // Scroll to properties section
    propertiesSectionRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen bg-zinc-950 pb-20 md:pb-0">
      {/* Hamburger Phase Menu - Desktop (Top Right) */}
      <div className="hidden md:block fixed top-4 right-4 z-50">
        <div className="relative">
          <button
            onClick={() => setShowPhaseMenu(!showPhaseMenu)}
            className="bg-amber-500 hover:bg-amber-400 text-zinc-950 px-4 py-3 rounded-xl font-semibold flex items-center gap-2 shadow-lg transition-all"
            aria-label="Pilih Phase"
          >
            <Menu className="w-5 h-5" />
            <span>Pilih Phase</span>
            <Badge className="ml-1 bg-zinc-950 text-amber-400 border-amber-400">
              {selectedPhase}
            </Badge>
          </button>
          
          {showPhaseMenu && (
            <div className="absolute top-full right-0 mt-2 w-64 bg-zinc-900 border border-white/10 rounded-xl shadow-2xl overflow-hidden z-50">
              <div className="p-2 space-y-1">
                {residentialPhases.map((item) => (
                  <button
                    key={item.phase}
                    onClick={() => handlePhaseChange(item.phase)}
                    className={`w-full flex items-center gap-2 px-3 py-2.5 rounded-lg transition-all text-left ${
                      selectedPhase === item.phase
                        ? 'bg-amber-500 text-zinc-950 font-semibold'
                        : 'hover:bg-zinc-800 text-zinc-300'
                    }`}
                  >
                    <HomeIcon className="w-4 h-4 flex-shrink-0" />
                    <span>{item.phase}</span>
                    {selectedPhase === item.phase && (
                      <span className="ml-auto">✓</span>
                    )}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Hamburger Phase Menu - Mobile (Top Left) */}
      <div className="md:hidden fixed top-4 left-4 z-50">
        <div className="relative">
          <button
            onClick={() => setShowPhaseMenu(!showPhaseMenu)}
            className="bg-amber-500 hover:bg-amber-400 text-zinc-950 px-4 py-3 rounded-xl font-semibold flex items-center gap-2 shadow-lg transition-all"
            aria-label="Pilih Phase"
          >
            <Menu className="w-5 h-5" />
            <span>Phase</span>
          </button>
          
          {showPhaseMenu && (
            <div className="absolute top-full left-0 mt-2 w-56 bg-zinc-900 border border-white/10 rounded-xl shadow-2xl overflow-hidden z-50">
              <div className="p-2 space-y-1 max-h-80 overflow-y-auto">
                {residentialPhases.map((item) => {
                  const isActive = selectedPhase === item.phase
                  const phaseNumber = item.phase.replace(/\D/g, '')
                  return (
                    <button
                      key={item.phase}
                      onClick={() => handlePhaseChange(item.phase)}
                      className={`w-full flex items-center gap-2 px-3 py-2.5 rounded-lg transition-all text-left ${
                        isActive
                          ? 'bg-amber-500 text-zinc-950 font-semibold'
                          : 'hover:bg-zinc-800 text-zinc-300'
                      }`}
                    >
                      <HomeIcon className="w-4 h-4 flex-shrink-0" />
                      <span>Phase {phaseNumber}</span>
                      {isActive && <span className="ml-auto">✓</span>}
                    </button>
                  )
                })}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Floating Scroll to Top Button (Mobile) */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="md:hidden fixed bottom-6 left-6 z-40 bg-zinc-800/90 text-white p-3 rounded-full shadow-xl border border-white/10 hover:bg-amber-500 transition-colors"
          aria-label="Kembali ke atas"
        >
          <ChevronUp className="w-5 h-5" />
        </button>
      )}

      {/* Floating WhatsApp Button */}
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-24 md:bottom-6 right-6 z-50 bg-gradient-to-r from-amber-500 to-amber-600 text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-all duration-300"
        aria-label="Hubungi via WhatsApp"
      >
        <MessageCircle className="w-7 h-7" />
      </a>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-zinc-900 to-zinc-950">
        <div className="absolute inset-0">
          {heroImageError ? (
            <div className="absolute inset-0 bg-zinc-900" />
          ) : (
            <Image
              src="/images/hero/hero-luxury-house.jpg"
              alt="Rumah mewah modern di Tangerang Serpong"
              fill
              className="object-cover opacity-40"
              priority
              onError={() => setHeroImageError(true)}
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/50 via-zinc-950/70 to-zinc-950" />
        </div>

        <div className="relative z-10 container mx-auto px-4 py-20 text-center">
          <Badge className="mb-6 bg-amber-500/20 text-amber-400 border-amber-500/30 px-6 py-2">
            Perumahan Modern Premium
          </Badge>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight font-playfair">
            Rumah Murah Tangerang & <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600">
              Serpong Mulai 400 Jutaan
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-zinc-300 mb-8 max-w-3xl mx-auto font-light">
            Miliki rumah impian dengan cicilan ringan mulai{' '}
            <span className="text-amber-400 font-semibold"> 2 jutaan per bulan</span>.
            Lokasi strategis dekat Jakarta dengan desain premium!
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-10">
            <div className="bg-white/5 backdrop-blur-md border border-white/10 px-6 py-4 rounded-xl">
              <div className="text-3xl font-bold text-amber-400">400M+</div>
              <div className="text-sm text-zinc-400 mt-1">Harga Mulai</div>
            </div>
            <div className="bg-white/5 backdrop-blur-md border border-white/10 px-6 py-4 rounded-xl">
              <div className="text-3xl font-bold text-amber-400">2M</div>
              <div className="text-sm text-zinc-400 mt-1">Cicilan/Bulan</div>
            </div>
            <div className="bg-white/5 backdrop-blur-md border border-white/10 px-6 py-4 rounded-xl">
              <div className="text-3xl font-bold text-amber-400">30+</div>
              <div className="text-sm text-zinc-400 mt-1">Tipe Unit</div>
            </div>
          </div>

          <a
            href="#properties"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 to-amber-600 text-zinc-950 px-8 py-4 rounded-full font-semibold text-lg hover:scale-105 transition-all duration-300"
          >
            <HomeIcon className="w-5 h-5" />
            Lihat Semua Tipe
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </section>

      {/* Property Highlights */}
      <section className="py-20 px-4 bg-zinc-950">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 text-center font-playfair">
            Keunggulan <span className="text-amber-400">Properti</span>
          </h2>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto text-center mb-12">
            Temukan fitur luar biasa yang membuat rumah kami di Tangerang dan Serpong menjadi pilihan terbaik
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {highlights.map((highlight, index) => (
              <Card key={index} className="bg-white/5 border-white/10 hover:border-amber-500/30 transition-all">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-amber-500/20 p-3 rounded-xl">
                      <highlight.icon className="w-6 h-6 text-amber-400" />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold text-lg mb-1">{highlight.label}</h3>
                      <p className="text-zinc-400 text-sm">{highlight.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities Section */}
      <section className="py-20 px-4 bg-zinc-900">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 text-center font-playfair">
            Fasilitas <span className="text-amber-400">Terdekat</span>
          </h2>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto text-center mb-12">
            Nikmati akses mudah ke berbagai fasilitas pendidikan, kesehatan, dan hiburan
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {facilities.map((facility, index) => (
              <Card
                key={index}
                className="bg-white/5 border-white/10 hover:border-amber-500/30 transition-all hover:bg-white/10"
              >
                <CardContent className="p-4 text-center">
                  <p className="text-white text-sm font-medium">{facility}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Property Types - Residential */}
      <section ref={propertiesSectionRef} id="properties" className="py-20 px-4 bg-zinc-950">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 text-center font-playfair">
            Tipe <span className="text-amber-400">Rumah</span>
          </h2>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto text-center mb-12">
            Pilih dari berbagai tipe rumah di berbagai phase sesuai kebutuhan dan budget Anda
          </p>

          {/* Display selected phase */}
          <div className="mb-6 text-center">
            <Badge className="bg-amber-500/20 text-amber-400 border-amber-500/30">
              {selectedPhase} - {selectedPhaseData?.units.length} Unit Tersedia
            </Badge>
          </div>
          
          {/* Property Cards for Selected Phase */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {selectedPhaseData?.units.map((unit, index) => (
              <PropertyCard key={`${selectedPhase}-${index}`} unit={unit} />
            ))}
          </div>
        </div>
      </section>

      {/* Commercial Section */}
      <section className="py-20 px-4 bg-zinc-950">
        <div className="container mx-auto max-w-7xl">
          <div className="flex items-center justify-center gap-2 mb-6">
            <Store className="w-6 h-6 text-amber-400" />
            <h2 className="text-3xl md:text-5xl font-bold text-white text-center font-playfair">
              Properti <span className="text-amber-400">Komersial</span>
            </h2>
          </div>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto text-center mb-12">
            Investasi komersial dengan potensi ROI tinggi di lokasi strategis
          </p>

          <div className="space-y-12">
            {commercialData.map((commercialGroup, groupIndex) => (
              <div key={groupIndex} className="border border-white/10 rounded-2xl p-6 bg-zinc-900/50">
                <h3 className="text-xl font-bold text-amber-400 mb-6">{commercialGroup.phase}</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {commercialGroup.units.map((unit, unitIndex) => {
                    const [imageError, setImageError] = useState(false)
                    const imageUrl = unit.image || '/images/fallback/shop-house.jpg'
                    
                    return (
                      <Card key={`${groupIndex}-${unitIndex}`} className="bg-zinc-800/50 border-white/10 overflow-hidden hover:border-amber-500/30 transition-all group">
                        <div className="relative h-48 bg-zinc-900">
                          {imageError ? (
                            <div className="absolute inset-0 flex items-center justify-center">
                              <Store className="w-16 h-16 text-zinc-700" />
                            </div>
                          ) : (
                            <Image
                              src={imageUrl}
                              alt={`${unit.name} - Commercial property`}
                              fill
                              className="object-cover group-hover:scale-110 transition-transform duration-500"
                              loading="lazy"
                              onError={() => setImageError(true)}
                            />
                          )}
                          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 to-transparent" />
                          <Badge className="absolute top-4 right-4 bg-blue-500 text-white">
                            {unit.type || 'Komersial'}
                          </Badge>
                        </div>
                        <CardContent className="p-5">
                          <h3 className="text-lg font-bold text-white mb-3">{unit.name}</h3>
                          {unit.type && (
                            <div className="text-sm text-zinc-400 mb-3">{unit.type}</div>
                          )}

                          {/* Property Details */}
                          <div className="grid grid-cols-2 gap-2 mb-4 text-xs">
                            {unit.landSize && (
                              <div className="flex items-center gap-1.5 text-zinc-400">
                                <Ruler className="w-3.5 h-3.5 text-amber-400" />
                                <span>LT {unit.landSize}m²</span>
                              </div>
                            )}
                            {unit.buildingSize && (
                              <div className="flex items-center gap-1.5 text-zinc-400">
                                <HomeIcon className="w-3.5 h-3.5 text-amber-400" />
                                <span>LB {unit.buildingSize}m²</span>
                              </div>
                            )}
                            {unit.floors && (
                              <div className="flex items-center gap-1.5 text-zinc-400">
                                <Layers className="w-3.5 h-3.5 text-amber-400" />
                                <span>{unit.floors} Lantai</span>
                              </div>
                            )}
                            {unit.bedrooms && (
                              <div className="flex items-center gap-1.5 text-zinc-400">
                                <Bed className="w-3.5 h-3.5 text-amber-400" />
                                <span>{unit.bedrooms} Bedroom</span>
                              </div>
                            )}
                            {unit.bathrooms && (
                              <div className="flex items-center gap-1.5 text-zinc-400">
                                <Bath className="w-3.5 h-3.5 text-amber-400" />
                                <span>{unit.bathrooms} Bathroom</span>
                              </div>
                            )}
                          </div>

                          {/* Price Section */}
                          {unit.price && (
                            <div className="mb-3 p-3 bg-gradient-to-r from-amber-500/10 to-amber-600/10 rounded-lg border border-amber-500/20">
                              <div className="text-xl font-bold text-amber-400 mb-1">
                                {formatRupiah(unit.price)}
                              </div>
                              {unit.installment && (
                                <div className="text-xs text-zinc-400">
                                  Cicilan <span className="text-amber-400 font-semibold">{formatRupiah(unit.installment)}/bulan</span>
                                </div>
                              )}
                              {unit.bookingFee && (
                                <div className="text-xs text-zinc-400 mt-1">
                                  Booking: <span className="text-amber-400 font-semibold">{formatRupiah(unit.bookingFee)}</span>
                                </div>
                              )}
                            </div>
                          )}

                          {/* Special pricing for commercial land */}
                          {unit.pricePerMeter && (
                            <div className="mb-3 p-3 bg-gradient-to-r from-blue-500/10 to-amber-500/10 rounded-lg border border-blue-500/20">
                              <div className="text-xl font-bold text-amber-400 mb-1">
                                {formatRupiah(unit.pricePerMeter)}/m²
                              </div>
                              {unit.bookingFee && (
                                <div className="text-xs text-zinc-400">
                                  Booking Fee: <span className="text-amber-400 font-semibold">{formatRupiah(unit.bookingFee)}</span>
                                </div>
                              )}
                            </div>
                          )}

                          {/* Features */}
                          {unit.features && unit.features.length > 0 && (
                            <ul className="space-y-1.5 mb-4">
                              {unit.features.slice(0, 4).map((feature: string, i: number) => (
                                <li key={i} className="flex items-center gap-2 text-xs text-zinc-400">
                                  <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 flex-shrink-0" />
                                  {feature}
                                </li>
                              ))}
                            </ul>
                          )}

                          {/* CTA Button */}
                          <a
                            href={whatsappLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block w-full text-center bg-gradient-to-r from-amber-500 to-amber-600 text-zinc-950 py-2.5 rounded-lg font-semibold text-sm hover:from-amber-400 hover:to-amber-500 transition-all"
                          >
                            Tanya Sekarang
                          </a>
                        </CardContent>
                      </Card>
                    )
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 px-4 bg-zinc-950">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 text-center font-playfair">
            Galeri <span className="text-amber-400">Foto</span>
          </h2>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto text-center mb-12">
            Koleksi foto properti yang menampilkan desain dan kualitas terbaik
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3">
            {galleryImages.map((image, index) => {
              const [imageError, setImageError] = useState(false)
              return (
                <Card
                  key={index}
                  className="bg-white/5 border-white/10 hover:border-amber-500/30 transition-all hover:bg-white/10"
                >
                  <CardContent className="p-3 text-center">
                    <Badge className="mb-2 bg-amber-500/20 text-amber-400 border-amber-500/30 text-xs">
                      {image.category}
                    </Badge>
                    <p className="text-white text-xs font-medium leading-tight">{image.src.replace('/images/gallery/', '')}</p>
                    <p className="text-zinc-400 text-[10px] mt-1 truncate">{image.title}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-20 px-4 bg-zinc-900">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 text-center font-playfair">
            Lokasi <span className="text-amber-400">Strategis</span>
          </h2>
          <div className="mt-8 bg-white/5 border border-white/10 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold text-white mb-4">
              Lokasi Strategis di Tangerang Dekat Serpong
            </h3>
            <p className="text-zinc-400 mb-6 max-w-3xl mx-auto">
              Nikmati akses mudah ke Jakarta, pusat perbelanjaan, sekolah, dan transportasi umum.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              {['Akses Tol - 5 menit', 'Aeon Mall - 10 menit', 'Sekolah - 5 menit', 'MRT - 15 menit'].map((item, i) => (
                <div key={i} className="bg-white/10 p-4 rounded-xl">
                  {item}
                </div>
              ))}
            </div>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-amber-500 text-zinc-950 px-8 py-4 rounded-full font-semibold hover:bg-amber-400 transition-colors"
            >
              <MessageCircle className="w-5 h-5" />
              Booking Sekarang
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 bg-zinc-950">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-12 text-center font-playfair">
            Apa Kata <span className="text-amber-400">Klien Kami</span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.id} className="bg-zinc-800/50 border-white/10">
                <CardContent className="p-6">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i} className="text-amber-400">★</span>
                    ))}
                  </div>
                  <p className="text-zinc-300 mb-6">"{testimonial.content}"</p>
                  <div>
                    <div className="text-white font-semibold">{testimonial.name}</div>
                    <div className="text-zinc-400 text-sm">{testimonial.role}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4 bg-zinc-900">
        <div className="container mx-auto max-w-4xl">
          <Card className="bg-gradient-to-br from-amber-500/10 to-amber-600/10 border-amber-500/20 text-center p-12">
            <Badge className="mb-6 bg-amber-500 text-zinc-950 font-semibold">
              Penawaran Terbatas
            </Badge>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 font-playfair">
              Unit Terbatas - <span className="text-amber-400">Amankan Sekarang</span>
            </h2>
            <p className="text-zinc-300 text-lg mb-8 max-w-2xl mx-auto">
              Jangan lewatkan kesempatan memiliki rumah impian di Tangerang Serpong dengan harga terjangkau.
            </p>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 to-amber-600 text-zinc-950 px-8 py-4 rounded-full font-semibold text-lg hover:scale-105 transition-all"
            >
              <MessageCircle className="w-5 h-5" />
              Hubungi via WhatsApp Sekarang
              <ArrowRight className="w-5 h-5" />
            </a>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-auto bg-zinc-950 border-t border-white/10 py-12 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center text-zinc-400">
            <p className="mb-2">© 2024 Rumah Mewah Tangerang Serpong. Hak Cipta Dilindungi.</p>
            <p className="text-sm">
              Rumah murah Tangerang • Perumahan Tangerang • Rumah Serpong • Rumah murah Serpong • Rumah cicilan 2 jutaan • Rumah dekat Jakarta
            </p>
          </div>
        </div>
      </footer>

      {/* Structured Data - Real Estate Agent */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "RealEstateAgent",
            "name": "Rumah Murah Tangerang & Serpong - Park Serpong",
            "description": "Perumahan modern premium di Tangerang dekat Serpong dengan harga mulai 400 jutaan. Cicilan ringan mulai 2 jutaan per bulan. Lokasi strategis dekat Jakarta.",
            "url": "https://parkserpong.com",
            "telephone": "+6281280660439",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Tangerang",
              "addressRegion": "Banten",
              "addressCountry": "ID"
            },
            "priceRange": "IDR 400.000.000 - IDR 2.000.000.000",
            "areaServed": {
              "@type": "GeoCircle",
              "geoMidpoint": {
                "@type": "GeoCoordinates",
                "latitude": -6.3175,
                "longitude": 106.6429
              },
              "geoRadius": "10 km"
            }
          })
        }}
      />
      
      {/* Structured Data - Property Listings */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            "itemListElement": propertyData.map((phase, idx) => ({
              "@type": "ListItem",
              "position": idx + 1,
              "item": {
                "@type": "SingleFamilyResidence",
                "name": phase.phase,
                "numberOfItems": phase.units.length
              }
            }))
          })
        }}
      />
    </div>
  )
}
