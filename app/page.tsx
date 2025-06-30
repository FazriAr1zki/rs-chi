import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Heart,
  Users,
  Award,
  Stethoscope,
  Activity,
  Shield,
  Star,
  ChevronRight,
  Search,
  Plane,
  Bed,
} from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-green-100">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 flex items-center justify-center">
                <img
                  src="../images/cipta-hospital-logo.png"
                  alt="RS Cipta Hospital Indonesia Logo"
                  className="w-12 h-12 object-contain"
                />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">PT Cipta Hospital Indonesia</h1>
                <p className="text-sm text-green-600">Melayani dengan Hati</p>
              </div>
            </div>
            <nav className="hidden md:flex items-center space-x-8">
              <Link href="#beranda" className="text-gray-700 hover:text-green-600 transition-colors">
                Beranda
              </Link>
              <Link href="#layanan" className="text-gray-700 hover:text-green-600 transition-colors">
                Layanan
              </Link>
              <Link href="/cari-dokter" className="text-gray-700 hover:text-green-600 transition-colors">
                Cari Dokter
              </Link>
              <Link href="/fasilitas" className="text-gray-700 hover:text-green-600 transition-colors">
                Fasilitas
              </Link>
              <Link href="#tentang" className="text-gray-700 hover:text-green-600 transition-colors">
                Tentang Kami
              </Link>
              <Link href="#kontak" className="text-gray-700 hover:text-green-600 transition-colors">
                Kontak
              </Link>
              <Button className="bg-green-600 hover:bg-green-700 text-white">Buat Janji</Button>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="beranda" className="bg-gradient-to-br from-green-50 to-white py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Rumah Sakit Terpercaya</Badge>
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                Pelayanan Kesehatan
                <span className="text-green-600"> Terbaik</span> untuk Keluarga Anda
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed">
                PT Cipta Hospital Indonesia berkomitmen memberikan pelayanan kesehatan berkualitas tinggi dengan
                teknologi modern dan tenaga medis profesional yang berpengalaman.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white">
                  <Phone className="w-5 h-5 mr-2" />
                  Hubungi Kami
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-green-600 text-green-600 hover:bg-green-50 bg-transparent"
                  asChild
                >
                  <Link href="/cari-dokter">
                    Cari Dokter
                    <ChevronRight className="w-5 h-5 ml-2" />
                  </Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-green-100 rounded-2xl p-8">
                <img
                  src="/rs-chi/images/hospital-building.jpeg"
                  alt="Rumah Sakit PT Cipta Hospital Indonesia"
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center">
                    <Star className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Rating 4.8/5</p>
                    <p className="text-sm text-gray-600">1000+ Pasien Puas</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Info */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-green-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <Clock className="w-12 h-12 text-green-600 mx-auto mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">Buka 24 Jam</h3>
                <p className="text-gray-600">Layanan gawat darurat tersedia 24/7</p>
              </CardContent>
            </Card>
            <Card className="border-green-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <Users className="w-12 h-12 text-green-600 mx-auto mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">Dokter Berpengalaman</h3>
                <p className="text-gray-600">Tim medis profesional dan bersertifikat</p>
              </CardContent>
            </Card>
            <Card className="border-green-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <Award className="w-12 h-12 text-green-600 mx-auto mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">Akreditasi Nasional</h3>
                <p className="text-gray-600">Standar pelayanan bermutu tinggi</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="layanan" className="py-20 bg-green-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="bg-green-100 text-green-800 hover:bg-green-100 mb-4">Layanan Kami</Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Layanan Kesehatan Komprehensif</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Kami menyediakan berbagai layanan kesehatan dengan teknologi modern dan tenaga medis terbaik
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Stethoscope,
                title: "Poliklinik Umum",
                description: "Pemeriksaan kesehatan umum dan konsultasi medis",
              },
              {
                icon: Heart,
                title: "Kardiologi",
                description: "Spesialis jantung dan pembuluh darah",
              },
              {
                icon: Activity,
                title: "Gawat Darurat",
                description: "Pelayanan emergency 24 jam setiap hari",
              },
              {
                icon: Users,
                title: "Pediatri",
                description: "Spesialis kesehatan anak dan bayi",
              },
              {
                icon: Shield,
                title: "Radiologi",
                description: "Pemeriksaan X-Ray, CT Scan, dan MRI",
              },
              {
                icon: Heart,
                title: "Laboratorium",
                description: "Pemeriksaan lab lengkap dan akurat",
              },
            ].map((service, index) => (
              <Card
                key={index}
                className="bg-white border-green-200 hover:shadow-lg transition-all hover:-translate-y-1"
              >
                <CardHeader>
                  <service.icon className="w-12 h-12 text-green-600 mb-4" />
                  <CardTitle className="text-gray-900">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600">{service.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Doctor Search CTA */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Temukan Dokter Terbaik</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Cari dan buat janji dengan dokter spesialis terbaik kami. Mudah, cepat, dan terpercaya.
          </p>
          <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white" asChild>
            <Link href="/cari-dokter">
              <Search className="w-5 h-5 mr-2" />
              Cari Dokter Sekarang
            </Link>
          </Button>
        </div>
      </section>

      {/* Facilities Preview Section */}
      <section className="py-20 bg-green-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="bg-green-100 text-green-800 hover:bg-green-100 mb-4">Fasilitas Kami</Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Fasilitas Modern & Terdepan</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Dilengkapi dengan teknologi canggih dan fasilitas terbaik untuk pelayanan kesehatan optimal
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <Card className="bg-white border-green-200 hover:shadow-lg transition-shadow text-center">
              <CardContent className="p-6">
                <Plane className="w-12 h-12 text-green-600 mx-auto mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">Helipad</h3>
                <p className="text-gray-600 text-sm">Layanan evakuasi medis udara</p>
              </CardContent>
            </Card>

            <Card className="bg-white border-green-200 hover:shadow-lg transition-shadow text-center">
              <CardContent className="p-6">
                <Bed className="w-12 h-12 text-green-600 mx-auto mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">Kamar Premium</h3>
                <p className="text-gray-600 text-sm">Kamar pasien modern & nyaman</p>
              </CardContent>
            </Card>

            <Card className="bg-white border-green-200 hover:shadow-lg transition-shadow text-center">
              <CardContent className="p-6">
                <Users className="w-12 h-12 text-green-600 mx-auto mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">Ruang Tunggu</h3>
                <p className="text-gray-600 text-sm">Area tunggu yang nyaman</p>
              </CardContent>
            </Card>

            <Card className="bg-white border-green-200 hover:shadow-lg transition-shadow text-center">
              <CardContent className="p-6">
                <Activity className="w-12 h-12 text-green-600 mx-auto mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">Unit Darurat</h3>
                <p className="text-gray-600 text-sm">Gawat darurat 24/7</p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white" asChild>
              <Link href="/fasilitas">
                Lihat Semua Fasilitas
                <ChevronRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="tentang" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="/rs-chi/images/hospital-building.jpeg"
                alt="Gedung PT Cipta Hospital Indonesia"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
            <div className="space-y-6">
              <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Tentang Kami</Badge>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">Komitmen Kami untuk Kesehatan Anda</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                PT Cipta Hospital Indonesia telah melayani masyarakat selama bertahun-tahun dengan dedikasi tinggi dalam
                memberikan pelayanan kesehatan terbaik. Kami dilengkapi dengan fasilitas modern dan tim medis yang
                berpengalaman.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-4 bg-green-50 rounded-lg">
                  <p className="text-2xl font-bold text-green-600">50+</p>
                  <p className="text-gray-600">Dokter Spesialis</p>
                </div>
                <div className="text-center p-4 bg-green-50 rounded-lg">
                  <p className="text-2xl font-bold text-green-600">10,000+</p>
                  <p className="text-gray-600">Pasien Dilayani</p>
                </div>
              </div>
              <Button className="bg-green-600 hover:bg-green-700 text-white">Pelajari Lebih Lanjut</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="kontak" className="py-20 bg-green-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="bg-green-100 text-green-800 hover:bg-green-100 mb-4">Hubungi Kami</Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Siap Melayani Anda</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Tim kami siap membantu Anda 24/7. Hubungi kami untuk konsultasi atau membuat janji temu
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-white border-green-200 text-center">
              <CardContent className="p-8">
                <Phone className="w-12 h-12 text-green-600 mx-auto mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">Telepon</h3>
                <p className="text-gray-600 mb-4">(021) 1234-5678</p>
                <Button variant="outline" className="border-green-600 text-green-600 hover:bg-green-50 bg-transparent">
                  Hubungi Sekarang
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-white border-green-200 text-center">
              <CardContent className="p-8">
                <Mail className="w-12 h-12 text-green-600 mx-auto mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">Email</h3>
                <p className="text-gray-600 mb-4">info@ciptahospital.co.id</p>
                <Button variant="outline" className="border-green-600 text-green-600 hover:bg-green-50 bg-transparent">
                  Kirim Email
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-white border-green-200 text-center">
              <CardContent className="p-8">
                <MapPin className="w-12 h-12 text-green-600 mx-auto mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">Alamat</h3>
                <p className="text-gray-600 mb-4">Jl. Kesehatan No. 123, Jakarta</p>
                <Button variant="outline" className="border-green-600 text-green-600 hover:bg-green-50 bg-transparent">
                  Lihat Peta
                </Button>
              </CardContent>
            </Card>
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
                    src="/rs-chi/images/cipta-hospital-logo.png"
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
