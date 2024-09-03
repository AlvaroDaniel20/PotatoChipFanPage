function verificarcode() {
    const codigoing = document.getElementById('code').value;

    const codigocorr = "2024"
    const codigocorr2 = "7896"

    if (codigoing === codigocorr) {
        window.location.href = 'https://youtu.be/keyRM3h_7tk?feature=shared';
    } else if (codigoing === codigocorr2) {
        window.location.href = 'https://youtu.be/mY-9t2iLi4Q?si=5nCRu4euc2Yhac-V'
    } else {
        alert('Esta Mal');
    }
}