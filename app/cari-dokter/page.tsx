"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { MapPin, Clock, Users, Search, ChevronRight, Calendar, Star, GraduationCap } from "lucide-react"
import Link from "next/link"

// Updated doctor data with swapped names but same photos
const doctorsData = [
  {
    id: 1,
    name: "Dr. M Nur Khanib, Sp.JP",
    specialty: "Kardiologi",
    hospital: "Cipta Hospital Jakarta",
    experience: "15 tahun",
    education: "Universitas Indonesia",
    rating: 4.8,
    reviews: 120,
    schedule: ["Senin", "Rabu", "Jumat"],
    time: "08:00 - 12:00",
    image: "//rs-chi/images/doctor-1.jpeg",
  },
  {
    id: 2,
    name: "Dr. M Fazri Arizki, Sp.A",
    specialty: "Pediatri",
    hospital: "Cipta Hospital Jakarta",
    experience: "12 tahun",
    education: "Universitas Gadjah Mada",
    rating: 4.9,
    reviews: 95,
    schedule: ["Selasa", "Kamis", "Sabtu"],
    time: "09:00 - 13:00",
    image: "//rs-chi/images/doctor-2.png",
  },
  {
    id: 3,
    name: "Dr. Reaval Galih P, Sp.PD",
    specialty: "Penyakit Dalam",
    hospital: "Cipta Hospital Jakarta",
    experience: "18 tahun",
    education: "Universitas Airlangga",
    rating: 4.7,
    reviews: 150,
    schedule: ["Senin", "Selasa", "Kamis"],
    time: "14:00 - 18:00",
    image: "//rs-chi/images/doctor-3.png",
  },
  {
    id: 4,
    name: "Dr. Farha Lubbi R, Sp.OG",
    specialty: "Obstetri & Ginekologi",
    hospital: "Cipta Hospital Jakarta",
    experience: "10 tahun",
    education: "Universitas Padjadjaran",
    rating: 4.8,
    reviews: 88,
    schedule: ["Rabu", "Jumat", "Sabtu"],
    time: "10:00 - 14:00",
    image: "//rs-chi/images/doctor-4.png",
  },
]

const specialties = [
  "Semua Spesialis",
  "Kardiologi",
  "Pediatri",
  "Penyakit Dalam",
  "Obstetri & Ginekologi",
  "Bedah Umum",
  "Mata",
  "THT",
  "Neurologi",
  "Orthopedi",
]

const hospitals = ["Semua Rumah Sakit", "Cipta Hospital Jakarta", "Cipta Hospital Bekasi", "Cipta Hospital Tangerang"]

export default function CariDokterPage() {
  const [selectedHospital, setSelectedHospital] = useState("Semua Rumah Sakit")
  const [selectedSpecialty, setSelectedSpecialty] = useState("Semua Spesialis")
  const [searchName, setSearchName] = useState("")
  const [filteredDoctors, setFilteredDoctors] = useState(doctorsData)

  const handleFilter = () => {
    let filtered = doctorsData

    if (selectedHospital !== "Semua Rumah Sakit") {
      filtered = filtered.filter((doctor) => doctor.hospital === selectedHospital)
    }

    if (selectedSpecialty !== "Semua Spesialis") {
      filtered = filtered.filter((doctor) => doctor.specialty === selectedSpecialty)
    }

    if (searchName.trim() !== "") {
      filtered = filtered.filter((doctor) => doctor.name.toLowerCase().includes(searchName.toLowerCase()))
    }

    setFilteredDoctors(filtered)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-green-100">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-3">
              <div className="w-12 h-12 flex items-center justify-center">
                <img
                  src="//rs-chi/images/cipta-hospital-logo.png"
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
              <Link href="/cari-dokter" className="text-green-600 font-medium">
                Cari Dokter
              </Link>
              <Link href="/fasilitas" className="text-gray-700 hover:text-green-600 transition-colors">
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
            <span className="text-green-600 font-medium">Cari Dokter</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Filter Sidebar */}
          <div className="lg:col-span-1">
            <Card className="bg-white border-green-200">
              <CardHeader>
                <CardTitle className="text-green-800">Filter Pencarian</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Hospital Filter */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Pilih Rumah Sakit</label>
                  <Select value={selectedHospital} onValueChange={setSelectedHospital}>
                    <SelectTrigger className="border-green-200 focus:border-green-500">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {hospitals.map((hospital) => (
                        <SelectItem key={hospital} value={hospital}>
                          {hospital}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Specialty Filter */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Pilih Spesialis</label>
                  <Select value={selectedSpecialty} onValueChange={setSelectedSpecialty}>
                    <SelectTrigger className="border-green-200 focus:border-green-500">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {specialties.map((specialty) => (
                        <SelectItem key={specialty} value={specialty}>
                          {specialty}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Doctor Name Search */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Pilih Dokter</label>
                  <div className="relative">
                    <Input
                      placeholder="Ketik nama dokter"
                      value={searchName}
                      onChange={(e) => setSearchName(e.target.value)}
                      className="border-green-200 focus:border-green-500 pr-10"
                    />
                    <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                  </div>
                </div>

                <Button onClick={handleFilter} className="w-full bg-green-600 hover:bg-green-700 text-white">
                  Cari Dokter
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Results */}
          <div className="lg:col-span-3">
            <div className="mb-6">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Cari Dokter</h1>
              <p className="text-gray-600">Menampilkan {filteredDoctors.length} dokter</p>
            </div>

            {filteredDoctors.length === 0 ? (
              <Card className="bg-white border-green-200">
                <CardContent className="p-12 text-center">
                  <Users className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-gray-900 mb-2">Tidak ada dokter ditemukan</h3>
                  <p className="text-gray-600">Coba ubah filter pencarian Anda</p>
                </CardContent>
              </Card>
            ) : (
              <div className="grid md:grid-cols-2 gap-6">
                {filteredDoctors.map((doctor) => (
                  <Card key={doctor.id} className="bg-white border-green-200 hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-green-100 bg-gray-100 flex-shrink-0">
                          <img
                            src={doctor.image || "/placeholder.svg"}
                            alt={doctor.name}
                            className="w-full h-full object-cover object-center scale-110"
                            style={{
                              objectPosition: "center top",
                            }}
                          />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-gray-900 mb-1">{doctor.name}</h3>
                          <Badge className="bg-green-100 text-green-800 hover:bg-green-100 mb-2">
                            {doctor.specialty}
                          </Badge>

                          <div className="space-y-2 text-sm text-gray-600">
                            <div className="flex items-center space-x-2">
                              <MapPin className="w-4 h-4" />
                              <span>{doctor.hospital}</span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <GraduationCap className="w-4 h-4" />
                              <span>{doctor.education}</span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Clock className="w-4 h-4" />
                              <span>
                                {doctor.schedule.join(", ")} • {doctor.time}
                              </span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Star className="w-4 h-4 text-yellow-500" />
                              <span>
                                {doctor.rating} ({doctor.reviews} ulasan)
                              </span>
                            </div>
                          </div>

                          <div className="flex space-x-2 mt-4">
                            <Button size="sm" className="bg-green-600 hover:bg-green-700 text-white">
                              <Calendar className="w-4 h-4 mr-1" />
                              Buat Janji
                            </Button>
                            <Button
                              size="sm"
                              variant="outline"
                              className="border-green-600 text-green-600 hover:bg-green-50 bg-transparent"
                            >
                              Lihat Profil
                            </Button>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 mt-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 flex items-center justify-center">
                  <img
                    src="//rs-chi/images/cipta-hospital-logo.png"
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
