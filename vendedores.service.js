let vendedores = require("./mockup.vendedores")

const cadastrar = (matricula, nome, salario, comissao) => {
let vendedor = {
       matricula,
       nome,
       salario,
       comissao
    }

    vendedores.push(vendedor)
}

const listar = () => {
    vendedores.forEach( (vendedor, indice) => {
        console.log(vendedor)
    } )
}

cadastrar("005", "Pedro Gambitos", 7000, 0.6)


const buscar = (busca) => {
    vendedores.forEach( (vendedor) => {
        let temp = JSON.stringify(vendedor).toLowerCase()
        if(temp.includes(busca.toLowerCase())) {
            console.log(vendedor)
        }
    } )
}

const buscarMatricula = (busca) =>{
    vendedores.forEach((vendedor) => {
        let matricula = vendedor.matricula.toLowerCase()

        if(matricula == busca.toLowerCase()){
            console.log(vendedor)
        }
    })
}

const buscarNome = (busca) =>{
    vendedores.forEach((vendedor) => {
        let Nome = vendedor.nome.toLowerCase()

        if(Nome == busca.toLowerCase()){
            console.log(vendedor)
        }
    })
}

const excluirMatricula = (matricula) => {
    vendedores.forEach((vendedor, indice) => {
        let matriculaTemp = vendedor.matricula.toLowerCase()

        if(matriculaTemp == matricula.toLowerCase()){
            vendedores.splice(indice, 1)
        }
    }) 
}

//buscar("maria")

//buscarMatricula("001")

//buscarNome("Maria dos Santos")

excluirMatricula ("002")

listar()
