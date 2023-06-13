const divVersao = document.getElementById('div_versao')

const versoes = [    
    ['0.0.1', '20/05/2023', 'Lançamento da Biblioteca'],
]

versoes.forEach( e => {
    console.log(e)
    divVersao.innerHTML += `
    <div class="col-12">
        <h5>Versão: ${e[0]}</h5>
        <h6>${e[1]}</h6> <br>
        <p>
        ${e[2]}
        </p>
        <a href="https://pypi.org/project/utils-pandas/${e[0]}/" class="btn btn-dark" target="_blank">Link Versão ${e[0]}</a>
        <hr>
    </div>
    `
})