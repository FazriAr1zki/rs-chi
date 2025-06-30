// Doctor data
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
    image: "public/images/doctor-1.jpeg",
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
    image: "public/images/doctor-2.png",
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
    image: "public/images/doctor-3.png",
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
    image: "public/images/doctor-4.png",
  },
]

let filteredDoctors = [...doctorsData]

// Function to show notifications
function showNotification(message) {
  alert(message)
}

// Render doctors
function renderDoctors(doctors) {
  const container = document.getElementById("doctorResults")
  const resultsCount = document.getElementById("resultsCount")

  if (!container) return

  resultsCount.textContent = `Menampilkan ${doctors.length} dokter`

  if (doctors.length === 0) {
    container.innerHTML = `
            <div class="no-results">
                <i class="fas fa-users"></i>
                <h3>Tidak ada dokter ditemukan</h3>
                <p>Coba ubah filter pencarian Anda</p>
            </div>
        `
    return
  }

  container.innerHTML = doctors
    .map(
      (doctor) => `
        <div class="doctor-card">
            <div class="doctor-info">
                <div class="doctor-photo">
                    <img src="${doctor.image}" alt="${doctor.name}" onerror="this.src='https://via.placeholder.com/80x80/dcfce7/16a34a?text=Dr'">
                </div>
                <div class="doctor-details">
                    <h3 class="doctor-name">${doctor.name}</h3>
                    <span class="doctor-specialty">${doctor.specialty}</span>
                    <div class="doctor-meta">
                        <div>
                            <i class="fas fa-map-marker-alt"></i>
                            <span>${doctor.hospital}</span>
                        </div>
                        <div>
                            <i class="fas fa-graduation-cap"></i>
                            <span>${doctor.education}</span>
                        </div>
                        <div>
                            <i class="fas fa-clock"></i>
                            <span>${doctor.schedule.join(", ")} • ${doctor.time}</span>
                        </div>
                        <div>
                            <i class="fas fa-star"></i>
                            <span>${doctor.rating} (${doctor.reviews} ulasan)</span>
                        </div>
                    </div>
                    <div class="doctor-actions">
                        <button class="btn btn-primary" onclick="bookAppointment(${doctor.id})">
                            <i class="fas fa-calendar"></i>
                            Buat Janji
                        </button>
                        <button class="btn btn-outline" onclick="viewProfile(${doctor.id})">
                            Lihat Profil
                        </button>
                    </div>
                </div>
            </div>
        </div>
    `,
    )
    .join("")
}

// Filter doctors
function filterDoctors() {
  const hospitalFilter = document.getElementById("hospitalFilter").value
  const specialtyFilter = document.getElementById("specialtyFilter").value
  const doctorSearch = document.getElementById("doctorSearch").value.toLowerCase()

  filteredDoctors = doctorsData.filter((doctor) => {
    const matchesHospital = !hospitalFilter || doctor.hospital === hospitalFilter
    const matchesSpecialty = !specialtyFilter || doctor.specialty === specialtyFilter
    const matchesName = !doctorSearch || doctor.name.toLowerCase().includes(doctorSearch)

    return matchesHospital && matchesSpecialty && matchesName
  })

  renderDoctors(filteredDoctors)
}

// Book appointment
function bookAppointment(doctorId) {
  const doctor = doctorsData.find((d) => d.id === doctorId)
  if (doctor) {
    showNotification(`Membuat janji dengan ${doctor.name}...`)
    // Here you would typically open a booking modal or redirect to booking page
    setTimeout(() => {
      showNotification(`Janji berhasil dibuat dengan ${doctor.name}!`)
    }, 2000)
  }
}

// View profile
function viewProfile(doctorId) {
  const doctor = doctorsData.find((d) => d.id === doctorId)
  if (doctor) {
    showNotification(`Membuka profil ${doctor.name}...`)
    // Here you would typically redirect to doctor profile page
  }
}

// Initialize doctor search page
document.addEventListener("DOMContentLoaded", () => {
  if (document.getElementById("doctorResults")) {
    renderDoctors(doctorsData)

    // Add event listeners for real-time filtering
    document.getElementById("hospitalFilter").addEventListener("change", filterDoctors)
    document.getElementById("specialtyFilter").addEventListener("change", filterDoctors)
    document.getElementById("doctorSearch").addEventListener("input", filterDoctors)
  }
})
