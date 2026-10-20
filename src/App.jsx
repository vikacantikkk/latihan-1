import KartuProfil from './Components/kartuprofil.jsx';

export default function App() {
  return (
    <main className="container">
      <h1>Profil Mahasiswa</h1>
      <KartuProfil nama="Budi Santoso" peran="Mahasiswa" tahun={2024} aktif={true} />
      <KartuProfil nama="Siti Rahma" peran="Asisten" tahun={2023} aktif={true} />
      <KartuProfil nama="Andi Pratama" peran="Alumni" tahun={2024} aktif={false} />
    </main>
  );
}