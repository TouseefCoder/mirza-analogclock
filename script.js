setInterval(() => {
    let d = new Date();
    let hr = d.getHours();
    let mn = d.getMinutes();
    let sc = d.getSeconds();
    hr_rotation = hr * 30 + mn / 2;
    mn_rotation = 6 * mn;
    sc_rotation = 6 * sc;
    document.getElementById('hour').style.transform = `rotate(${hr_rotation}deg)`;
    document.getElementById('minute').style.transform = `rotate(${mn_rotation}deg)`;
    document.getElementById('second').style.transform = `rotate(${sc_rotation}deg)`;

}, 1000);