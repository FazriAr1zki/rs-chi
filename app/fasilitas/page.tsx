import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ChevronRight, Plane, Bed, Users, Activity, Clock, Shield, CheckCircle } from "lucide-react"
import Link from "next/link"

const facilities = [
  {
    id: 1,
    title: "Helipad & Layanan Helicopter",
    description:
      "Fasilitas helipad modern untuk evakuasi medis darurat dan transportasi pasien kritis dengan akses cepat ke rumah sakit.",
    image: "/images/helipad.jpeg",
    icon: Plane,
    features: [
      "Helipad berstandar internasional",
      "Layanan evakuasi medis 24/7",
      "Tim medis terlatih untuk transportasi udara",
      "Koordinasi dengan layanan emergency",
    ],
  },
  {
    id: 2,
    title: "Kamar Pasien Premium",
    description:
      "Kamar pasien modern dengan fasilitas lengkap, pemandangan kota, dan peralatan medis terdepan untuk kenyamanan optimal.",
    image: "/images/patient-room.jpeg",
    icon: Bed,
    features: [
      "Kamar dengan pemandangan kota",
      "Tempat tidur elektrik modern",
      "Sistem monitoring terintegrasi",
      "Fasilitas pendamping keluarga",
    ],
  },
  {
    id: 3,
    title: "Ruang Tunggu & Lobby",
    description:
      "Area tunggu yang nyaman dan modern dengan desain yang menenangkan, dilengkapi fasilitas untuk kenyamanan pasien dan keluarga.",
    image: "/images/waiting-area.jpeg",
    icon: Users,
    features: [
      "Desain interior yang menenangkan",
      "Seating area yang nyaman",
      "Area hijau dengan tanaman",
      "WiFi gratis dan charging station",
    ],
  },
  {
    id: 4,
    title: "Unit Gawat Darurat",
    description:
      "Unit gawat darurat dengan teknologi terdepan dan tim medis berpengalaman yang siap menangani kasus emergency 24 jam.",
    image: "/images/emergency-room.jpeg",
    icon: Activity,
    features: [
      "Peralatan medis canggih",
      "Tim medis emergency bersertifikat",
      "Sistem triage yang efisien",
      "Ruang resusitasi lengkap",
    ],
  },
]

export default function FasilitasPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-green-100">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-3">
              <div className="w-12 h-12 flex items-center justify-center">
                <img
                  src="/images/cipta-hospital-logo.png"
                  alt="RS Cipta Hospital Indonesia Logo"
                  className="w-12 h-12 object-contain"
                />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">PT Cipta Hospital Indonesia</h1>
                <p className="text-sm text-green-600">Melayani dengan Hati</p>
              </div>
            </Link>
            <nav className="hidden md:flex items-center space-x-8">
              <Link href="/#beranda" className="text-gray-700 hover:text-green-600 transition-colors">
                Beranda
              </Link>
              <Link href="/#layanan" className="text-gray-700 hover:text-green-600 transition-colors">
                Layanan
              </Link>
              <Link href="/cari-dokter" className="text-gray-700 hover:text-green-600 transition-colors">
                Cari Dokter
              </Link>
              <Link href="/fasilitas" className="text-green-600 font-medium">
                Fasilitas
              </Link>
              <Link href="/#tentang" className="text-gray-700 hover:text-green-600 transition-colors">
                Tentang Kami
              </Link>
              <Link href="/#kontak" className="text-gray-700 hover:text-green-600 transition-colors">
                Kontak
              </Link>
              <Button className="bg-green-600 hover:bg-green-700 text-white">Buat Janji</Button>
            </nav>
          </div>
        </div>
      </header>

      {/* Breadcrumb */}
      <div className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center space-x-2 text-sm">
            <Link href="/" className="text-gray-500 hover:text-green-600">
              Beranda
            </Link>
            <ChevronRight className="w-4 h-4 text-gray-400" />
            <span className="text-green-600 font-medium">Fasilitas</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 to-white py-20">
        <div className="container mx-auto px-4 text-center">
          <Badge className="bg-green-100 text-green-800 hover:bg-green-100 mb-4">Fasilitas Unggulan</Badge>
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Fasilitas <span className="text-green-600">Modern</span> & Terdepan
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            PT Cipta Hospital Indonesia dilengkapi dengan fasilitas medis terdepan dan teknologi canggih untuk
            memberikan pelayanan kesehatan terbaik bagi pasien dan keluarga.
          </p>
        </div>
      </section>

      {/* Facilities Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid gap-16">
            {facilities.map((facility, index) => (
              <div
                key={facility.id}
                className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? "lg:grid-flow-col-dense" : ""}`}
              >
                {/* Image */}
                <div className={`${index % 2 === 1 ? "lg:col-start-2" : ""}`}>
                  <div className="relative group">
                    <img
                      src={facility.image || "/placeholder.svg"}
                      alt={facility.title}
                      className="w-full h-96 object-cover rounded-2xl shadow-lg group-hover:shadow-xl transition-shadow"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
                  </div>
                </div>

                {/* Content */}
                <div className={`space-y-6 ${index % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""}`}>
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                      <facility.icon className="w-6 h-6 text-green-600" />
                    </div>
                    <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Fasilitas Unggulan</Badge>
                  </div>

                  <h2 className="text-3xl font-bold text-gray-900">{facility.title}</h2>
                  <p className="text-lg text-gray-600 leading-relaxed">{facility.description}</p>

                  <div className="space-y-3">
                    <h3 className="font-semibold text-gray-900">Keunggulan Fasilitas:</h3>
                    <ul className="space-y-2">
                      {facility.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center space-x-3">
                          <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                          <span className="text-gray-600">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Button className="bg-green-600 hover:bg-green-700 text-white">Pelajari Lebih Lanjut</Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-green-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Fasilitas dalam Angka</h2>
            <p className="text-lg text-gray-600">Komitmen kami dalam menyediakan fasilitas terbaik</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <Card className="bg-white border-green-200 text-center">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Bed className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-green-600 mb-2">200+</h3>
                <p className="text-gray-600">Tempat Tidur</p>
              </CardContent>
            </Card>

            <Card className="bg-white border-green-200 text-center">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Activity className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-green-600 mb-2">15</h3>
                <p className="text-gray-600">Ruang Operasi</p>
              </CardContent>
            </Card>

            <Card className="bg-white border-green-200 text-center">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-green-600 mb-2">24/7</h3>
                <p className="text-gray-600">Layanan Darurat</p>
              </CardContent>
            </Card>

            <Card className="bg-white border-green-200 text-center">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-green-600 mb-2">100%</h3>
                <p className="text-gray-600">Terakreditasi</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Kunjungi Fasilitas Kami</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Rasakan langsung kualitas fasilitas dan pelayanan terbaik kami. Tim kami siap memberikan tur fasilitas untuk
            Anda.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white">
              Jadwalkan Kunjungan
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-green-600 text-green-600 hover:bg-green-50 bg-transparent"
              asChild
            >
              <Link href="/cari-dokter">Buat Janji dengan Dokter</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 flex items-center justify-center">
                  <img
                    src="/images/cipta-hospital-logo.png"
                    alt="RS Cipta Hospital Indonesia Logo"
                    className="w-10 h-10 object-contain"
                  />
                </div>
                <div>
                  <h3 className="font-bold">PT Cipta Hospital</h3>
                  <p className="text-sm text-gray-400">Indonesia</p>
                </div>
              </div>
              <p className="text-gray-400">Melayani dengan hati untuk kesehatan yang lebih baik</p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Layanan</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Poliklinik Umum</li>
                <li>Gawat Darurat</li>
                <li>Spesialis</li>
                <li>Laboratorium</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Informasi</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Tentang Kami</li>
                <li>Karir</li>
                <li>Berita</li>
                <li>FAQ</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Kontak</h4>
              <div className="space-y-2 text-gray-400">
                <p>(021) 1234-5678</p>
                <p>info@ciptahospital.co.id</p>
                <p>Jl. Kesehatan No. 123, Jakarta</p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 PT Cipta Hospital Indonesia. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
