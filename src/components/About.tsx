import { Heart, Award, Users } from 'lucide-react';

const About = () => {
  const team = [
    {
      name: "Apt. Yulinda Pristi S.Farm M.Farm",
      role: "Pemilik & Pengelola",
      image: "https://images.pexels.com/photos/5214956/pexels-photo-5214956.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      description: "Pemilik dan pengelola Apotek Dau Sehat yang berkomitmen untuk memberikan layanan terbaik bagi masyarakat."
    },
    {
      name: "Tim Farmasi",
      role: "Apoteker",
      image: "https://images.pexels.com/photos/5699463/pexels-photo-5699463.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      description: "Apoteker dengan pengalaman luas dalam memberikan konsultasi obat kepada pelanggan dan memastikan kualitas layanan."
    },
    {
      name: "Tim Apotek",
      role: "Staf Layanan",
      image: "https://images.pexels.com/photos/7579831/pexels-photo-7579831.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      description: "Staf administrasi yang siap membantu pelanggan dengan kebutuhan obat-obatan serta layanan konsultasi dan pengantaran."
    }
  ];

  const stats = [
    { icon: <Users className="w-10 h-10 text-emerald-500" />, value: "5000+", label: "Pelanggan Puas" },
    { icon: <Award className="w-10 h-10 text-emerald-500" />, value: "7+", label: "Tahun Pengalaman" },
    { icon: <Heart className="w-10 h-10 text-emerald-500" />, value: "24/7", label: "Layanan Prima" }
  ];

  return (
    <section id="tentang" className="py-20 bg-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-emerald-50 opacity-70 rounded-bl-full -z-10"></div>
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-emerald-50 opacity-70 rounded-tr-full -z-10"></div>
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block px-3 py-1 bg-emerald-100 text-emerald-800 rounded-full text-sm font-medium mb-4">
            Tentang Kami
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Mitra Kesehatan Terpercaya Masyarakat
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Apotek Dau Sehat adalah mitra kesehatan terpercaya masyarakat Dau dan
            sekitarnya. Kami menyediakan berbagai macam obat resep dan non-resep,
            vitamin, serta produk kesehatan lainnya. Dengan pelayanan ramah dan
            tenaga farmasi profesional, kami hadir untuk memberikan solusi
            kesehatan yang cepat, tepat, dan aman bagi keluarga Anda.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 text-center group hover:bg-emerald-500 transition-all duration-300 hover:scale-105"
            >
              <div className="mx-auto flex justify-center mb-4 group-hover:text-white transition-colors">
                {stat.icon}
              </div>
              <h3 className="text-3xl font-bold mb-2 group-hover:text-white transition-colors">
                {stat.value}
              </h3>
              <p className="text-gray-600 group-hover:text-white/90 transition-colors">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* Team Section */}
        <h3 className="text-2xl font-bold text-center mb-10">Tim Kami</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-lg transform transition duration-300 hover:-translate-y-2"
            >
              <div className="h-64 overflow-hidden">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <span className="inline-block px-3 py-1 bg-emerald-100 text-emerald-800 rounded-full text-xs font-medium mb-3">
                  {member.role}
                </span>
                <h4 className="text-xl font-bold mb-2">{member.name}</h4>
                <p className="text-gray-600">{member.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;