export const data = {
    bride: {
        L: {
            id: 1,
            name: 'EDY SAHPUTRA',
            child: 'Putra ke Satu',
            father: 'Amin',
            mother: 'Sudarsih',
            image: './src/assets/images/cowo.jpg'
        },
        P: {
            id: 2,
            name: 'Cindy',
            child: 'Putri ke Satu',
            father: 'Tjin Khiang',
            mother: 'Ai Peng',
            image: './src/assets/images/cewe.jpg'
        },

        couple: './src/assets/images/couple.png'
    },

    time: {
        marriage: {
            year: '2025',
            month: 'Mei',
            date: '14',
            day: 'Kamis',
            hours: {
                start: '08.00',
                finish: 'Selesai'
            }
        },
        reception: {
            year: '2025',
            month: 'Mei',
            date: '14',
            day: 'Kamis',
            hours: {
                start: '11.00',
                finish: 'Selesai'
            }
        },
        address: 'Kp. Lorem, RT 000/ RW 000, Desa.Lorem, Kec.Ipsum, Kab.Lorem, Lorem (1234)'
    },

    link: {
        calendar: 'https://calendar.app.google/ZEiQkhny1RrPAfW26',
        map: 'https://maps.app.goo.gl/q1Ask2Jgd4ekiiKBA',
    },

    galeri: [
        {
            id: 1,
            image: './src/assets/images/1.png'
        },
        {
            id: 2,
            image: './src/assets/images/2.png'
        },
        {
            id: 3,
            image: './src/assets/images/3.png'
        },
        {
            id: 4,
            image: './src/assets/images/4.png'
        },
        {
            id: 5,
            image: './src/assets/images/5.png'
        }
    ],

    bank: [
        {
            id: 1,
            name: 'Edy sahputra',
            icon: './src/assets/images/bca.png',
            rekening: '12345678'
        },
        {
            id: 2,
            name: 'Edy sahputra',
            icon: './src/assets/images/bri.png',
            rekening: '12345678'
        },
    ],

    audio: './src/assets/audio/wedding.mp3',

    api: 'https://script.google.com/macros/s/AKfycbw_jPoeT_i3mAAAmFth00VIIyqUL2QRSd5Eb2xEGn_A90pOX7YBWwoLlT0Ja8njUVVg3A/exec',

    navbar: [
        {
            id: 1,
            teks: 'Home',
            icon: 'bx bxs-home-heart',
            path: '#home',
        },
        {
            id: 2,
            teks: 'Mempelai',
            icon: 'bx bxs-group',
            path: '#bride',
        },
        {
            id: 3,
            teks: 'Tanggal',
            icon: 'bx bxs-calendar-check',
            path: '#time',
        },
        {
            id: 4,
            teks: 'Galeri',
            icon: 'bx bxs-photo-album',
            path: '#galeri',
        },
        {
            id: 5,
            teks: 'Ucapan',
            icon: 'bx bxs-message-rounded-dots',
            path: '#wishas',
        },
    ],
}