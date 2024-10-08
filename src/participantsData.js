let participants = [
    {
      email: 'priya.kapoor@gmail.com',
      name: 'Priya Kapoor',
      mobile: '7865521489',
      totalprice: 'Rs 5200',
      totalpoints: 27000,
      daily: { points: 50, price: 12, rank: 2 },
      weekly: { points: 160, price: 30, rank: 7 },
      monthly: { points: 450, price: 120, rank: 3 },
      id: 1247,
      joinAt: '10-03-2024'
    },
    {
      email: 'jaya.dubey@gmail.com',
      name: 'Jaya Dubey',
      mobile: '7845123659',
      totalprice: 'Rs 5000',
      totalpoints: 27000,
      daily: { points: 45, price: 17, rank: 2 },
      weekly: { points: 190, price: 45, rank: 2 },
      monthly: { points: 520, price: 140, rank: 1 },
      id: 1256,
      joinAt: '28-04-2024'
    },
    {
      email: 'preeti.mishra@gmail.com',
      name: 'Preeti Mishra',
      mobile: '7856231945',
      totalprice: 'Rs 4800',
      totalpoints: 26000,
      daily: { points: 55, price: 14, rank: 9 },
      weekly: { points: 170, price: 40, rank: 3 },
      monthly: { points: 470, price: 115, rank: 4 },
      id: 1254,
      joinAt: '22-08-2024'
    },
    {
      email: 'mohan@gmail.com',
      name: 'Mohan Kumar',
      mobile: '45263654788',
      totalprice: 'Rs 4521',
      totalpoints: 25632,
      daily: { points: 45, price: 10, rank: 1 },
      weekly: { points: 145, price: 25, rank: 10 },
      monthly: { points: 405, price: 100, rank: 11 },
      id: 1245,
      joinAt: '02-05-2024'
    },
    {
      email: 'ravi.kumar@gmail.com',
      name: 'Ravi Kumar',
      mobile: '9874523652',
      totalprice: 'Rs 4300',
      totalpoints: 24500,
      daily: { points: 60, price: 15, rank: 3 },
      weekly: { points: 180, price: 35, rank: 4 },
      monthly: { points: 500, price: 130, rank: 2 },
      id: 1250,
      joinAt: '25-02-2024'
    },
    {
      email: 'suman.patel@gmail.com',
      name: 'Suman Patel',
      mobile: '7589641253',
      totalprice: 'Rs 4100',
      totalpoints: 23500,
      daily: { points: 40, price: 10, rank: 4 },
      weekly: { points: 182, price: 182, rank: 9 },
      monthly: { points: 400, price: 105, rank: 6 },
      id: 1252,
      joinAt: '18-09-2024'
    },
    {
      email: 'divya.mehta@gmail.com',
      name: 'Divya Mehta',
      mobile: '9874563214',
      totalprice: 'Rs 3700',
      totalpoints: 19500,
      daily: { points: 32, price: 9, rank: 8 },
      weekly: { points: 125, price: 27, rank: 12 },
      monthly: { points: 350, price: 90, rank: 9 },
      id: 1258,
      joinAt: '17-03-2024'
    },
    {
      email: 'ajay.verma@gmail.com',
      name: 'Ajay Verma',
      mobile: '9845632174',
      totalprice: 'Rs 3400',
      totalpoints: 19000,
      daily: { points: 20, price: 6, rank: 10 },
      weekly: { points: 90, price: 18, rank: 12 },
      monthly: { points: 300, price: 80, rank: 9 },
      id: 1248,
      joinAt: '20-01-2024'
    },
    {
      email: 'krishna.raju@gmail.com',
      name: 'Krishna Raju',
      mobile: '7894561257',
      totalprice: 'Rs 3100',
      totalpoints: 18500,
      daily: { points: 22, price: 6, rank: 11 },
      weekly: { points: 95, price: 20, rank: 13 },
      monthly: { points: 280, price: 75, rank: 10 },
      id: 1257,
      joinAt: '09-05-2024'
    },
    {
      email: 'vikas.yadav@gmail.com',
      name: 'Vikas Yadav',
      mobile: '7845231574',
      totalprice: 'Rs 3600',
      totalpoints: 18000,
      daily: { points: 28, price: 9, rank: 6 },
      weekly: { points: 115, price: 26, rank: 13 },
      monthly: { points: 350, price: 95, rank: 7 },
      id: 1253,
      joinAt: '11-05-2024'
    },
    {
      email: 'manoj.kumar@gmail.com',
      name: 'Manoj Kumar',
      mobile: '8563214785',
      totalprice: 'Rs 3300',
      totalpoints: 17000,
      daily: { points: 18, price: 7, rank: 11 },
      weekly: { points: 90, price: 19, rank: 14 },
      monthly: { points: 290, price: 85, rank: 12 },
      id: 1259,
      joinAt: '02-07-2024'
    },
    {
      email: 'neha.gupta@gmail.com',
      name: 'Neha Gupta',
      mobile: '8945231478',
      totalprice: 'Rs 2800',
      totalpoints: 16000,
      daily: { points: 25, price: 7, rank: 7 },
      weekly: { points: 100, price: 22, rank: 11 },
      monthly: { points: 320, price: 85, rank: 10 },
      id: 1251,
      joinAt: '05-06-2024'
    },
    {
      email: 'ritu.sharma@gmail.com',
      name: 'Ritu Sharma',
      mobile: '7896541237',
      totalprice: 'Rs 2500',
      totalpoints: 15500,
      daily: { points: 26, price: 8, rank: 9 },
      weekly: { points: 105, price: 24, rank: 11 },
      monthly: { points: 320, price: 90, rank: 11 },
      id: 1260,
      joinAt: '15-05-2024'
    },
    {
      email: 'rohit.singh@gmail.com',
      name: 'Rohit Singh',
      mobile: '9021456321',
      totalprice: 'Rs 2200',
      totalpoints: 15000,
      daily: { points: 35, price: 9, rank: 8 },
      weekly: { points: 130, price: 28, rank: 6 },
      monthly: { points: 390, price: 90, rank: 5 },
      id: 1249,
      joinAt: '12-07-2024'
    },
    {
      email: 'rahul.sharma@gmail.com',
      name: 'Rahul Sharma',
      mobile: '89456231232',
      totalprice: 'Rs 1500',
      totalpoints: 12000,
      daily: { points: 30, price: 8, rank: 5 },
      weekly: { points: 110, price: 20, rank: 15 },
      monthly: { points: 390, price: 95, rank: 8 },
      id: 1246,
      joinAt: '15-04-2024'
    },
    {
      email: 'ankur.sinha@gmail.com',
      name: 'Ankur Sinha',
      mobile: '8946521748',
      totalprice: 'Rs 1400',
      totalpoints: 12000,
      daily: { points: 15, price: 5, rank: 12 },
      weekly: { points: 85, price: 18, rank: 14 },
      monthly: { points: 250, price: 70, rank: 12 },
      id: 1255,
      joinAt: '30-06-2024'
    }
  ];

export default participants;
