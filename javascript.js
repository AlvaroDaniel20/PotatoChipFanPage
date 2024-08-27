function verificarcode() {
    const codigoing = document.getElementById('code').value;

    const codigocorr = "2024"

    if (codigoing === codigocorr) {
        window.location.href = 'https://youtu.be/keyRM3h_7tk?feature=shared';
    } else {
        alert('Esta Mal');
    }
}