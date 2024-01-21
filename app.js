let url = window.location.href;
// console.log(url);
let url_segment = url.split('?');
// console.log(url_segment[1]);

/*document.getElementById('form').style.display = 'none';*/


document.getElementById('pay').style.display = 'none';

let play_btn = document.getElementById('play');
let video = document.getElementById('video');


play_btn.addEventListener('click', () => {
    if (video.paused) {
        video.play();
        video.style.display = 'unset';
        play_btn.classList.remove('bi-play-fill');
        play_btn.classList.add('bi-pause');
    } else {
        video.pause();
        video.style.display = 'none';
        play_btn.classList.add('bi-play-fill');
        play_btn.classList.remove('bi-pause');
    }
})

video.addEventListener('ended', () => {
    video.play();
})


let date = new Date();
let main_date = date.getDate();
// console.log((main_date))


Array.from(document.getElementsByClassName('date_point')).forEach((el) => {
    if (el.innerText == main_date) {
        el.classList.add('h6_active')
    }
})

let pvr = [
  
 
    {
        pvr: 'PVR Vegus',
        movie: 'Kathuru_Mithuru',
        loc: 'Dwarka Sector 14 , New Delhi',
        audi: 1,
        type: '2D',
        series: ['O','N','M','L','k','J', 'H','G', 'F', 'E', 'D', 'C', 'B', 'A','P','Q','R','S','T','X','Y' ],
        
        row_section: 2,
        seat: 20,
        o: [4 ],
        n: [ ],
        m: [ ],
        l: [ ],
        k: [ ],
        j: [ ],
        h: [ 6 ],
        g: [  ],
        f: [ ],
        e: [ ],
        d: [ ],
        c: [ ],
        b: [ ],
        a: [],
        p: [3],
        q: [],
        r: [],
        s: [],
        t: [],
        x: [],
        y: [],
        
       
        price: [ 'ODC', 'ODC', 'ODC','ODC', 'ODC', 'ODC', 'ODC', 'ODC','ODC','ODC','ODC','ODC','ODC','ODC','BAL','BAL',"BAL" ,'BAL','BAL','BOX','BOX'],
        date: 5,
        img: 'film/kathuru.jpg',
        video: 'video1/kathuru.mp4',
        background: 'film/kathuru2.png',
    },
    {
        pvr: 'PVR Vegus',
        movie: 'ASU',
        loc: 'Dwarka Sector 14 , New Delhi',
        audi: 1,
        type: '2D',
        series: ['O','N','M','L','k','J', 'H','G', 'F', 'E', 'D', 'C', 'B', 'A','P','Q','R','S','T','X','Y' ],
        
        row_section: 2,
        seat: 20,
        o: [ ],
        n: [ ],
        m: [ ],
        l: [ ],
        k: [4 ],
        j: [ ],
        h: [  ],
        g: [  ],
        f: [ ],
        e: [ ],
        d: [ ],
        c: [ ],
        b: [3 ],
        a: [],
        p: [],
        q: [],
        r: [],
        s: [],
        t: [],
        x: [],
        y: [],
        
       
        price: [ 'ODC', 'ODC', 'ODC','ODC', 'ODC', 'ODC', 'ODC', 'ODC','ODC','ODC','ODC','ODC','ODC','ODC','BAL','BAL',"BAL" ,'BAL','BAL','BOX','BOX'],
        date: 5,
        img: 'film/ASU.jpg',
        video: 'video1/ASU.mp4',
        background: 'film/Asu2.jpg',
    },
    {
        pvr: 'PVR Vegus',
        movie: 'NAPOLEAN',
        loc: 'Dwarka Sector 14 , New Delhi',
        audi: 1,
        type: '2D',
        series: ['O','N','M','L','k','J', 'H','G', 'F', 'E', 'D', 'C', 'B', 'A','P','Q','R','S','T','X','Y' ],
        
        row_section: 2,
        seat: 20,
        o: [ ],
        n: [ ],
        m: [ ],
        l: [ ],
        k: [ ],
        j: [3 ],
        h: [  ],
        g: [  ],
        f: [ ],
        e: [ ],
        d: [ ],
        c: [ ],
        b: [ ],
        a: [],
        p: [],
        q: [3],
        r: [],
        s: [],
        t: [],
        x: [],
        y: [],
        
       
        price: [ 'ODC', 'ODC', 'ODC','ODC', 'ODC', 'ODC', 'ODC', 'ODC','ODC','ODC','ODC','ODC','ODC','ODC','BAL','BAL',"BAL" ,'BAL','BAL','BOX','BOX'],
        date: 5,
        img: 'film/napoleon.jpg',
        video: 'video1/bapolean.mp4',
        background: 'film/napolean2.jpg',
    },
    {
        pvr: 'PVR Vegus',
        movie: 'SRI_WICKRAMA',
        loc: 'Dwarka Sector 14 , New Delhi',
        audi: 1,
        type: '2D',
        series: ['O','N','M','L','k','J', 'H','G', 'F', 'E', 'D', 'C', 'B', 'A','P','Q','R','S','T','X','Y' ],
        
        row_section: 2,
        seat: 20,
        o: [ ],
        n: [ ],
        m: [ ],
        l: [ ],
        k: [ ],
        j: [ ],
        h: [  ],
        g: [  ],
        f: [ ],
        e: [ ],
        d: [ ],
        c: [ ],
        b: [2 ],
        a: [],
        p: [],
        q: [],
        r: [3],
        s: [],
        t: [],
        x: [],
        y: [1],
        
       
        price: [ 'ODC', 'ODC', 'ODC','ODC', 'ODC', 'ODC', 'ODC', 'ODC','ODC','ODC','ODC','ODC','ODC','ODC','BAL','BAL',"BAL" ,'BAL','BAL','BOX','BOX'],
        date: 5,
        img: 'film/wickrama.jpg',
        video: 'video1/wickrama.mp4',
        background: 'film/wickrama2.jpg',
    },
    {
        pvr: 'PVR Vegus',
        movie: 'CAPTIAN_MILLER',
        loc: 'Dwarka Sector 14 , New Delhi',
        audi: 1,
        type: 'DX',
        series: ['O','N','M','L','k','J', 'H','G', 'F', 'E', 'D', 'C', 'B', 'A','P','Q','R','S','T','X','Y' ],
        
        row_section: 2,
        seat: 20,
        o: [8 ],
        n: [ ],
        m: [ ],
        l: [ ],
        k: [ ],
        j: [ ],
        h: [  ],
        g: [  ],
        f: [ ],
        e: [ ],
        d: [ ],
        c: [ ],
        b: [8 ],
        a: [],
        p: [],
        q: [],
        r: [],
        s: [],
        t: [],
        x: [],
        y: [7],
        
       
        price: [ 'ODC', 'ODC', 'ODC','ODC', 'ODC', 'ODC', 'ODC', 'ODC','ODC','ODC','ODC','ODC','ODC','ODC','BAL','BAL',"BAL" ,'BAL','BAL','BOX','BOX'],
        date: 5,
        img: 'film/miller.jpg',
        video: 'video1/captian.mp4',
        background: 'film/miller2.jpg',
    },
    {
        pvr: 'PVR Vegus',
        movie: 'LAL_SALAAM',
        loc: 'Dwarka Sector 14 , New Delhi',
        audi: 1,
        type: '4DX',
        series: ['O','N','M','L','k','J', 'H','G', 'F', 'E', 'D', 'C', 'B', 'A','P','Q','R','S','T','X','Y' ],
        
        row_section: 2,
        seat: 20,
        o: [ 4],
        n: [ ],
        m: [ ],
        l: [ ],
        k: [3 ],
        j: [ ],
        h: [  ],
        g: [  ],
        f: [ ],
        e: [ ],
        d: [ ],
        c: [ ],
        b: [ ],
        a: [],
        p: [],
        q: [2],
        r: [],
        s: [],
        t: [],
        x: [],
        y: [],
        
       
        price: [ 'ODC', 'ODC', 'ODC','ODC', 'ODC', 'ODC', 'ODC', 'ODC','ODC','ODC','ODC','ODC','ODC','ODC','BAL','BAL',"BAL" ,'BAL','BAL','BOX','BOX'],
        date: 5,
        img: 'film/lal.jpg',
        video: 'video1/lal.mp4',
        background: 'film/lal2.jpg',
    },





    {
        pvr: 'PVR Vegus',
        movie: 'Kathuru_Mithuru',
        loc: 'Dwarka Sector 14 , New Delhi',
        audi: 1,
        type: '2D',
        series: ['O','N','M','L','k','J', 'H','G', 'F', 'E', 'D', 'C', 'B', 'A','P','Q','R','S','T','X','Y' ],
        
        row_section: 2,
        seat: 20,
        o: [ ],
        n: [ ],
        m: [ ],
        l: [ ],
        k: [ ],
        j: [ ],
        h: [  ],
        g: [2  ],
        f: [ ],
        e: [ ],
        d: [ ],
        c: [ ],
        b: [ ],
        a: [],
        p: [],
        q: [4],
        r: [],
        s: [],
        t: [7],
        x: [],
        y: [],
        
       
        price: [ 'ODC', 'ODC', 'ODC','ODC', 'ODC', 'ODC', 'ODC', 'ODC','ODC','ODC','ODC','ODC','ODC','ODC','BAL','BAL',"BAL" ,'BAL','BAL','BOX','BOX'],
        date: 6,
        img: 'film/kathuru.jpg',
        video: 'video1/kathuru.mp4',
        background: 'film/kathuru2.png',
    },
    {
        pvr: 'PVR Vegus',
        movie: 'ASU',
        loc: 'Dwarka Sector 14 , New Delhi',
        audi: 1,
        type: '2D',
        series: ['O','N','M','L','k','J', 'H','G', 'F', 'E', 'D', 'C', 'B', 'A','P','Q','R','S','T','X','Y' ],
        
        row_section: 2,
        seat: 20,
        o: [ 7],
        n: [ ],
        m: [ ],
        l: [ ],
        k: [ ],
        j: [ ],
        h: [  ],
        g: [ 3 ],
        f: [ ],
        e: [ ],
        d: [ ],
        c: [ ],
        b: [ ],
        a: [],
        p: [],
        q: [1],
        r: [],
        s: [],
        t: [],
        x: [],
        y: [],
        
       
        price: [ 'ODC', 'ODC', 'ODC','ODC', 'ODC', 'ODC', 'ODC', 'ODC','ODC','ODC','ODC','ODC','ODC','ODC','BAL','BAL',"BAL" ,'BAL','BAL','BOX','BOX'],
        date: 6,
        img: 'film/ASU.jpg',
        video: 'video1/ASU.mp4',
        background: 'film/Asu2.jpg',
    },
    {
        pvr: 'PVR Vegus',
        movie: 'NAPOLEAN',
        loc: 'Dwarka Sector 14 , New Delhi',
        audi: 1,
        type: '2D',
        series: ['O','N','M','L','k','J', 'H','G', 'F', 'E', 'D', 'C', 'B', 'A','P','Q','R','S','T','X','Y' ],
        
        row_section: 2,
        seat: 20,
        o: [ ],
        n: [3 ],
        m: [ ],
        l: [ ],
        k: [ ],
        j: [ ],
        h: [  ],
        g: [  ],
        f: [ ],
        e: [ ],
        d: [ ],
        c: [ ],
        b: [2 ],
        a: [],
        p: [],
        q: [],
        r: [],
        s: [],
        t: [],
        x: [],
        y: [0],
        
       
        price: [ 'ODC', 'ODC', 'ODC','ODC', 'ODC', 'ODC', 'ODC', 'ODC','ODC','ODC','ODC','ODC','ODC','ODC','BAL','BAL',"BAL" ,'BAL','BAL','BOX','BOX'],
        date: 6,
        img: 'film/napoleon.jpg',
        video: 'video1/bapolean.mp4',
        background: 'film/napolean2.jpg',
    },
    {
        pvr: 'PVR Vegus',
        movie: 'SRI_WICKRAMA',
        loc: 'Dwarka Sector 14 , New Delhi',
        audi: 1,
        type: '2D',
        series: ['O','N','M','L','k','J', 'H','G', 'F', 'E', 'D', 'C', 'B', 'A','P','Q','R','S','T','X','Y' ],
        
        row_section: 2,
        seat: 20,
        o: [ 0],
        n: [ 1],
        m: [ ],
        l: [1 ],
        k: [ ],
        j: [ ],
        h: [  ],
        g: [  ],
        f: [ ],
        e: [ ],
        d: [ ],
        c: [5 ],
        b: [ ],
        a: [],
        p: [],
        q: [],
        r: [],
        s: [],
        t: [],
        x: [],
        y: [],
        
       
        price: [ 'ODC', 'ODC', 'ODC','ODC', 'ODC', 'ODC', 'ODC', 'ODC','ODC','ODC','ODC','ODC','ODC','ODC','BAL','BAL',"BAL" ,'BAL','BAL','BOX','BOX'],
        date: 6,
        img: 'film/wickrama.jpg',
        video: 'video1/wickrama.mp4',
        background: 'film/wickrama2.jpg',
    },
    {
        pvr: 'PVR Vegus',
        movie: 'CAPTIAN_MILLER',
        loc: 'Dwarka Sector 14 , New Delhi',
        audi: 1,
        type: 'DX',
        series: ['O','N','M','L','k','J', 'H','G', 'F', 'E', 'D', 'C', 'B', 'A','P','Q','R','S','T','X','Y' ],
        
        row_section: 2,
        seat: 20,
        o: [ ],
        n: [ ],
        m: [ ],
        l: [ ],
        k: [ ],
        j: [ 2],
        h: [  ],
        g: [  ],
        f: [ ],
        e: [ ],
        d: [ ],
        c: [4 ],
        b: [ ],
        a: [],
        p: [],
        q: [],
        r: [],
        s: [5],
        t: [],
        x: [],
        y: [],
        
       
        price: [ 'ODC', 'ODC', 'ODC','ODC', 'ODC', 'ODC', 'ODC', 'ODC','ODC','ODC','ODC','ODC','ODC','ODC','BAL','BAL',"BAL" ,'BAL','BAL','BOX','BOX'],
        date: 6,
        img: 'film/miller.jpg',
        video: 'video1/captian.mp4',
        background: 'film/miller2.jpg',
    },
    {
        pvr: 'PVR Vegus',
        movie: 'LAL_SALAAM',
        loc: 'Dwarka Sector 14 , New Delhi',
        audi: 1,
        type: '4DX',
        series: ['O','N','M','L','k','J', 'H','G', 'F', 'E', 'D', 'C', 'B', 'A','P','Q','R','S','T','X','Y' ],
        
        row_section: 2,
        seat: 20,
        o: [ ],
        n: [ ],
        m: [ ],
        l: [ ],
        k: [ ],
        j: [ ],
        h: [ 3 ],
        g: [  ],
        f: [ ],
        e: [ ],
        d: [ 4],
        c: [ ],
        b: [ ],
        a: [],
        p: [8],
        q: [],
        r: [],
        s: [],
        t: [9],
        x: [],
        y: [],
        
       
        price: [ 'ODC', 'ODC', 'ODC','ODC', 'ODC', 'ODC', 'ODC', 'ODC','ODC','ODC','ODC','ODC','ODC','ODC','BAL','BAL',"BAL" ,'BAL','BAL','BOX','BOX'],
        date: 6,
        img: 'film/lal.jpg',
        video: 'video1/lal.mp4',
        background: 'film/lal2.jpg',
    },





    {
        pvr: 'PVR Vegus',
        movie: 'Kathuru_Mithuru',
        loc: 'Dwarka Sector 14 , New Delhi',
        audi: 1,
        type: '2D',
        series: ['O','N','M','L','k','J', 'H','G', 'F', 'E', 'D', 'C', 'B', 'A','P','Q','R','S','T','X','Y' ],
        
        row_section: 2,
        seat: 20,
        o: [ ],
        n: [ ],
        m: [ ],
        l: [ ],
        k: [ ],
        j: [ ],
        h: [  ],
        g: [  ],
        f: [ ],
        e: [ ],
        d: [ ],
        c: [ ],
        b: [2 ],
        a: [6],
        p: [5],
        q: [4],
        r: [6],
        s: [5],
        t: [7],
        x: [4],
        y: [1],
        
       
        price: [ 'ODC', 'ODC', 'ODC','ODC', 'ODC', 'ODC', 'ODC', 'ODC','ODC','ODC','ODC','ODC','ODC','ODC','BAL','BAL',"BAL" ,'BAL','BAL','BOX','BOX'],
        date: 7,
        img: 'film/kathuru.jpg',
        video: 'video1/kathuru.mp4',
        background: 'film/kathuru2.png',
    },
    {
        pvr: 'PVR Vegus',
        movie: 'ASU',
        loc: 'Dwarka Sector 14 , New Delhi',
        audi: 1,
        type: '2D',
        series: ['O','N','M','L','k','J', 'H','G', 'F', 'E', 'D', 'C', 'B', 'A','P','Q','R','S','T','X','Y' ],
        
        row_section: 2,
        seat: 20,
        o: [ ],
        n: [ ],
        m: [ ],
        l: [ ],
        k: [ ],
        j: [ ],
        h: [  ],
        g: [  ],
        f: [ ],
        e: [ ],
        d: [ ],
        c: [ ],
        b: [ ],
        a: [],
        p: [],
        q: [],
        r: [],
        s: [],
        t: [],
        x: [],
        y: [],
        
       
        price: [ 'ODC', 'ODC', 'ODC','ODC', 'ODC', 'ODC', 'ODC', 'ODC','ODC','ODC','ODC','ODC','ODC','ODC','BAL','BAL',"BAL" ,'BAL','BAL','BOX','BOX'],
        date: 7,
        img: 'film/ASU.jpg',
        video: 'video1/ASU.mp4',
        background: 'film/Asu2.jpg',
    },
    {
        pvr: 'PVR Vegus',
        movie: 'NAPOLEAN',
        loc: 'Dwarka Sector 14 , New Delhi',
        audi: 1,
        type: '2D',
        series: ['O','N','M','L','k','J', 'H','G', 'F', 'E', 'D', 'C', 'B', 'A','P','Q','R','S','T','X','Y' ],
        
        row_section: 2,
        seat: 20,
        o: [ ],
        n: [ ],
        m: [ ],
        l: [ ],
        k: [ ],
        j: [ ],
        h: [  ],
        g: [  ],
        f: [ ],
        e: [ ],
        d: [ ],
        c: [ ],
        b: [ ],
        a: [],
        p: [],
        q: [],
        r: [],
        s: [],
        t: [],
        x: [],
        y: [],
        
       
        price: [ 'ODC', 'ODC', 'ODC','ODC', 'ODC', 'ODC', 'ODC', 'ODC','ODC','ODC','ODC','ODC','ODC','ODC','BAL','BAL',"BAL" ,'BAL','BAL','BOX','BOX'],
        date: 7,
        img: 'film/napoleon.jpg',
        video: 'video1/bapolean.mp4',
        background: 'film/napolean2.jpg',
    },
    {
        pvr: 'PVR Vegus',
        movie: 'SRI_WICKRAMA',
        loc: 'Dwarka Sector 14 , New Delhi',
        audi: 1,
        type: '2D',
        series: ['O','N','M','L','k','J', 'H','G', 'F', 'E', 'D', 'C', 'B', 'A','P','Q','R','S','T','X','Y' ],
        
        row_section: 2,
        seat: 20,
        o: [ ],
        n: [ ],
        m: [ ],
        l: [ ],
        k: [ ],
        j: [ ],
        h: [  ],
        g: [  ],
        f: [ ],
        e: [ ],
        d: [ ],
        c: [ ],
        b: [ ],
        a: [],
        p: [],
        q: [],
        r: [],
        s: [],
        t: [],
        x: [],
        y: [],
        
       
        price: [ 'ODC', 'ODC', 'ODC','ODC', 'ODC', 'ODC', 'ODC', 'ODC','ODC','ODC','ODC','ODC','ODC','ODC','BAL','BAL',"BAL" ,'BAL','BAL','BOX','BOX'],
        date: 7,
        img: 'film/wickrama.jpg',
        video: 'video1/wickrama.mp4',
        background: 'film/wickrama2.jpg',
    },
    {
        pvr: 'PVR Vegus',
        movie: 'CAPTIAN_MILLER',
        loc: 'Dwarka Sector 14 , New Delhi',
        audi: 1,
        type: 'DX',
        series: ['O','N','M','L','k','J', 'H','G', 'F', 'E', 'D', 'C', 'B', 'A','P','Q','R','S','T','X','Y' ],
        
        row_section: 2,
        seat: 20,
        o: [ ],
        n: [ ],
        m: [ ],
        l: [ ],
        k: [ ],
        j: [ ],
        h: [  ],
        g: [  ],
        f: [ ],
        e: [ ],
        d: [ ],
        c: [ ],
        b: [ ],
        a: [],
        p: [],
        q: [],
        r: [],
        s: [],
        t: [],
        x: [],
        y: [],
        
       
        price: [ 'ODC', 'ODC', 'ODC','ODC', 'ODC', 'ODC', 'ODC', 'ODC','ODC','ODC','ODC','ODC','ODC','ODC','BAL','BAL',"BAL" ,'BAL','BAL','BOX','BOX'],
        date: 7,
        img: 'film/miller.jpg',
        video: 'video1/captian.mp4',
        background: 'film/miller2.jpg',
    },
    {
        pvr: 'PVR Vegus',
        movie: 'LAL_SALAAM',
        loc: 'Dwarka Sector 14 , New Delhi',
        audi: 1,
        type: '4DX',
        series: ['O','N','M','L','k','J', 'H','G', 'F', 'E', 'D', 'C', 'B', 'A','P','Q','R','S','T','X','Y' ],
        
        row_section: 2,
        seat: 20,
        o: [ ],
        n: [ ],
        m: [ ],
        l: [ ],
        k: [ ],
        j: [ ],
        h: [  ],
        g: [  ],
        f: [ ],
        e: [ ],
        d: [ ],
        c: [ ],
        b: [ ],
        a: [],
        p: [],
        q: [],
        r: [],
        s: [],
        t: [],
        x: [],
        y: [],
        
       
        price: [ 'ODC', 'ODC', 'ODC','ODC', 'ODC', 'ODC', 'ODC', 'ODC','ODC','ODC','ODC','ODC','ODC','ODC','BAL','BAL',"BAL" ,'BAL','BAL','BOX','BOX'],
        date: 7,
        img: 'film/lal.jpg',
        video: 'video1/lal.mp4',
        background: 'film/lal2.jpg',
    },
   
    
    
    
    
    
]






let addSeats = (arr) => {
    // console.log(arr)
    arr.forEach((el , i) => {
        const {series, row_section , seat , price , a, b , c, d ,e ,f,g , h , j,k,l,m,n,o,p,q,r,s,t,x,y} = el;

        series.forEach((s) => {
            // Create Row 
            let row = document.createElement('div');
            row.className = 'row';

            let booked_seats = [];
            booked_seats = [...eval(s.toLocaleLowerCase())];

            // Create Seats 
            for (let seats = 0; seats < seat; seats++) {
                if (seats === 0) {
                    let span = document.createElement('span');
                    span.innerText = s;
                    row.appendChild(span);
                }

                let li = document.createElement('li');
                let filter = booked_seats.filter(el => {
                    return el === seats;
                })

                if (filter.length > 0) {
                    li.className = "seat booked";
                } else {
                    li.className = "seat";
                }

                li.id = s + seats;
                li.setAttribute('book', seats);
                li.setAttribute('sr', s);
                li.innerText = price[series.indexOf(s)];

                li.onclick = () => {
                    if (li.className === 'seat booked') {
                        li.classList.remove('selected');
                    } else {
                        li.classList.toggle('selected');
                    }
                    let len = Array.from(document.getElementsByClassName('selected')).length;
                    if (len > 0) {
                        document.getElementById('book_ticket').style.display = 'unset';
                    } else {
                        document.getElementById('book_ticket').style.display = 'none';
                    }
                }

                row.appendChild(li);

                if (seats === seat - 1) {
                    let span = document.createElement('span');
                    span.innerText = s;
                    row.appendChild(span);
                }
            }

            // Create a new div for each series
            let seriesDiv = document.createElement('div');
            seriesDiv.id = 'chair_' + s;
            seriesDiv.appendChild(row);

            // Set margin-bottom for 'J' series
            if (s === 'A') {
                let h1 = document.createElement('h3');
                h1.innerText = 'Balcony Seat';
                seriesDiv.appendChild(h1);
                seriesDiv.style.marginBottom = '10px';
            }

            if (s === 'T') {
                let h2 = document.createElement('h2');
                h2.innerText = 'BOX Seat';
                seriesDiv.appendChild(h2);
                seriesDiv.style.marginBottom = '10px';
            }


            // Append the new div to the body of the document
            document.getElementById('chair').appendChild(seriesDiv);
        });
    });
}



let data = pvr.filter(obj => obj.date == main_date && obj.movie  == url_segment[1]);

if (data.length > 0) {
    document.getElementById('title').innerText = data[0].movie;
    document.getElementById('poster').src = data[0].img;
    document.getElementById('video').src = data[0].video;

    var styleElem = document.head.appendChild(document.createElement("style"));
    styleElem.innerHTML = `.book .right:before {background: url(${data[0].background})no-repeat center -30px/cover}`;

    addSeats(data);
} else {
    // Handle the case where there is no data for the specified date and movie.
    console.error("No data found for the specified date and movie.");
}




let offDate = () => {
    Array.from(document.getElementsByClassName('date_point')).forEach(el => {
        el.classList.remove('h6_active');
    })
}

Array.from(document.getElementsByClassName('date_point')).forEach(el => {
    el.addEventListener('click', () => {
        if (el.innerText > date.getDate()-1) {
            offDate();
            el.classList.add('h6_active');
            main_date = +el.innerText;
            document.getElementById('chair').innerHTML = '';
            let data = pvr.filter(obj => obj.date == main_date && obj.movie  == url_segment[1]);
// console.log(data);
            addSeats(data)
        }
    })
})

document.getElementById('book_ticket').addEventListener('click', () => {



   





    document.getElementById('screen').style.display = 'none';
    document.getElementById('d&t').style.display = 'none';
    document.getElementById('chair').style.display = 'none';
    document.getElementById('det').style.display = 'none';
    document.getElementById('book_ticket').style.display = 'none';
    document.getElementById('back_ticket').style.display = 'unset';
    document.getElementById('ticket').style.display = 'none';
    document.getElementById('book_ticket2').style.display = 'unset';
    document.getElementById('back_ticket2').style.display = 'none';
   /* document.getElementById('book_ticket3').style.display = 'none';
    document.getElementById('back_ticket3').style.display = 'none';
    document.getElementById('pay').style.display = 'none';
    document.getElementById('form').style.display = 'unset';*/
    document.getElementById('pay').style.display = 'unset';

       
})

document.getElementById('back_ticket').addEventListener('click', () => {
    document.getElementById('screen').style.display = 'inline-block';
    document.getElementById('d&t').style.display = 'flex';
        document.getElementById('chair').style.display = 'block';
        document.getElementById('det').style.display = 'flex';
        document.getElementById('book_ticket').style.display = 'unset';
        document.getElementById('back_ticket').style.display = 'none';
        document.getElementById('ticket').style.display = 'none';
        document.getElementById('book_ticket2').style.display = 'none';
        document.getElementById('back_ticket2').style.display = 'none';
        /*document.getElementById('book_ticket3').style.display = 'none';
    document.getElementById('back_ticket3').style.display = 'none';
    document.getElementById('pay').style.display = 'none';
    document.getElementById('form').style.display = 'none';*/
    document.getElementById('pay').style.display = 'none';
        
})







document.getElementById('payment').addEventListener('click', () => {
    
    event.preventDefault();

    // Get form elements
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var address = document.getElementById("adr").value;
    var cardname = document.getElementById("cname").value;
    var cardnumber = document.getElementById("ccnum").value;
    var expyear = document.getElementById("expyear").value;
    var cvv = document.getElementById("cvv").value;

    // Perform null validation
    if (name === "" || email === "" || address === "" || cardname === "" || cardnumber === "" || expyear === "" || cvv === "") {
      alert("Please fill in all required fields.");
    } else {


//seat conform
Array.from(document.getElementsByClassName('selected')).forEach(el => {
    let seat_no = el.getAttribute('book');
    let seat_sr = el.getAttribute('sr').toLocaleLowerCase();
    let seat_price = el.innerText;

    let obj = {
        movie: url_segment[1],
        date : main_date
    }

    let getData = pvr.map((obj) => {
        if (
            obj.movie === url_segment[1] && obj.date === main_date
        ) {
            obj[seat_sr].push(+seat_no);
        }
        return obj;
    });

    // console.log(getData);


    document.getElementById('chair').innerHTML = '';
    let data = getData.filter(obj => obj.date === main_date && obj.movie === url_segment[1]);
    addSeats(data);


    document.getElementById('screen').style.display = 'none';
    document.getElementById('d&t').style.display = 'none';
    document.getElementById('chair').style.display = 'none';
    document.getElementById('det').style.display = 'none';
    document.getElementById('book_ticket').style.display = 'none';
    document.getElementById('back_ticket').style.display = 'none';
    document.getElementById('ticket').style.display = 'block';
    document.getElementById('book_ticket2').style.display = 'none';
    document.getElementById('back_ticket2').style.display = 'unset';
   /* document.getElementById('book_ticket3').style.display = 'none';
document.getElementById('back_ticket3').style.display = 'unset';
document.getElementById('pay').style.display = 'none';
document.getElementById('form').style.display = 'none';*/
document.getElementById('pay').style.display = 'none';



    let tic = document.createElement('div');
    tic.className ='tic';
    tic.innerHTML = `
                <div class="barcode">
                    <div class="card">
                        <h6>ROW ${seat_sr.toLocaleUpperCase()}</h6>
                        <h6>${main_date} January 2024</h6>
                    </div>
                    <div class="card">
                        <h6>Seat ${seat_no}</h6>
                        <h6>23:00</h6>
                    </div>

                    <svg id="${seat_sr}${seat_no}barcode"></svg>
                    <h5>NEW IMPERIAL TALKIS KURUNEGALA</h5>
                </div>
                <div class="tic_details" style=" background: url(${data[0].background})no-repeat center -35px /cover">
                    <div class="type">2D</div>
                    <h5 class="pvr"><span>NEW</span> EMPERIAL</h5>
                    <h1>${url_segment[1]}</h1>
                    <div class="seat_det">
                        <div class="seat_cr">
                            <h6>ROW</h6>
                            <h6>${seat_sr.toLocaleUpperCase()}</h6>
                        </div>
                        <div class="seat_cr">
                            <h6>SEAT</h6>
                            <h6>${seat_no}</h6>
                        </div>
                        <div class="seat_cr">
                            <h6>DATE</h6>
                            <h6>${main_date} <sub>JAN</sub></h6>
                        </div>
                        <div class="seat_cr">
                            <h6>TIME</h6>
                            <h6>11:30 <sub>AM</sub></h6>
                        </div>
                    </div>
                </div>
    `
    document.getElementById('ticket').appendChild(tic);

    JsBarcode(`#${seat_sr}${seat_no}barcode`, 
    `${seat_sr.toLocaleUpperCase()}${seat_no}${seat_price}${main_date}92023`);
})


        
      // If all fields are filled, you can submit the form or perform any other actions
      // Assuming this is the first form on your page
    }
    
    
})



document.getElementById('back_ticket2').addEventListener('click', () => {
    document.getElementById('screen').style.display = 'none';
    document.getElementById('d&t').style.display = 'none';
        document.getElementById('chair').style.display = 'none';
        document.getElementById('det').style.display = 'none';
        document.getElementById('book_ticket').style.display = 'none';
        document.getElementById('back_ticket').style.display = 'unset';
        document.getElementById('ticket').style.display = 'none';
        document.getElementById('book_ticket2').style.display = 'unset';
        document.getElementById('back_ticket2').style.display = 'unset';
        /*document.getElementById('book_ticket3').style.display = 'unset';
    document.getElementById('back_ticket3').style.display = 'none';
   document.getElementById('pay').style.display = 'unset';
    document.getElementById('form').style.display = 'none';*/
    document.getElementById('pay').style.display = 'none';
        
})
document.getElementById('pay').addEventListener('click', () => {
    var Cholder = document.getElementById('holder');
    if(Cholder.trim()==""){
        alert("Please Enter the holder name");
    }else{
        window.location.href = 'nikn.html';
    }
    
})

/*document.getElementById('loginForm').addEventListener('book_ticket2', function (event) {
    var phoneNumberInput = document.getElementById('phoneNumber');
    var phoneNumber = phoneNumberInput.value;

    // Basic phone number format validation (10 digits)
    var phoneRegex = /^\d{10}$/;

    if (!phoneRegex.test(phoneNumber)) {
        event.preventDefault(); // Prevent form submission
        document.querySelector('.error').style.display = 'block';
    }else{
        document.getElementById('screen').style.display = 'none';
        document.getElementById('d&t').style.display = 'none';
        document.getElementById('chair').style.display = 'none';
        document.getElementById('det').style.display = 'none';
        document.getElementById('book_ticket').style.display = 'none';
        document.getElementById('back_ticket').style.display = 'none';
        document.getElementById('ticket').style.display = 'none';
        document.getElementById('book_ticket2').style.display = 'none';
        document.getElementById('back_ticket2').style.display = 'unset';
        document.getElementById('book_ticket3').style.display = 'unset';
        document.getElementById('back_ticket3').style.display = 'none';
       /* document.getElementById('pay').style.display = 'unset';
        document.getElementById('form').style.display = 'none';
        document.getElementById('pay').style.display = 'none';
        
    }

});*/


